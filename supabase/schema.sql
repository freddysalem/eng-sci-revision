-- Eng Sci revision site · accounts schema. Paste into Supabase → SQL Editor → Run (safe to re-run).
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  username text unique not null,
  email text,
  is_admin boolean not null default false,
  completed text[] not null default '{}',
  created_at timestamptz not null default now()
);
create table if not exists public.progress (
  user_id uuid primary key references auth.users on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
alter table public.progress enable row level security;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false)
$$;

drop policy if exists "profiles: own or admin" on public.profiles;
create policy "profiles: own or admin" on public.profiles for select using (id = auth.uid() or public.is_admin());
drop policy if exists "progress: read own or admin" on public.progress;
create policy "progress: read own or admin" on public.progress for select using (user_id = auth.uid() or public.is_admin());
drop policy if exists "progress: insert own" on public.progress;
create policy "progress: insert own" on public.progress for insert with check (user_id = auth.uid());
drop policy if exists "progress: update own" on public.progress;
create policy "progress: update own" on public.progress for update using (user_id = auth.uid()) with check (user_id = auth.uid());

-- a profile row is created for every new sign-up (username comes from the sign-up form)
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, username, email)
  values (new.id, coalesce(nullif(new.raw_user_meta_data->>'username', ''), split_part(new.email, '@', 1)), new.email);
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- =====================================================================================
-- v2 · owner controls (invite-only sign-up, restrictions, remove accounts). Safe to re-run.
-- =====================================================================================
alter table public.profiles add column if not exists status text not null default 'active';
alter table public.profiles add column if not exists subjects text[] not null default '{esa,tf}';
alter table public.profiles add column if not exists expires_at timestamptz;
alter table public.profiles add column if not exists note text;
do $$ begin
  alter table public.profiles add constraint profiles_status_chk check (status in ('active','suspended'));
exception when duplicate_object then null; end $$;

-- emails the owner has allowed to sign up, with the access they get
create table if not exists public.invites (
  email text primary key,
  subjects text[] not null default '{esa,tf}',
  expires_at timestamptz,
  make_admin boolean not null default false,
  completed text[] not null default '{}',
  note text,
  created_at timestamptz not null default now()
);
alter table public.invites add column if not exists completed text[] not null default '{}';
alter table public.invites enable row level security;
drop policy if exists "invites: admin all" on public.invites;
create policy "invites: admin all" on public.invites for all using (public.is_admin()) with check (public.is_admin());

-- site-wide settings: signup_mode = 'invite' (default) | 'open'
create table if not exists public.app_settings (key text primary key, value text not null);
insert into public.app_settings (key, value) values ('signup_mode', 'invite') on conflict (key) do nothing;
alter table public.app_settings enable row level security;
drop policy if exists "settings: read" on public.app_settings;
create policy "settings: read" on public.app_settings for select using (true);
drop policy if exists "settings: admin write" on public.app_settings;
create policy "settings: admin write" on public.app_settings for update using (public.is_admin()) with check (public.is_admin());

-- an account may use the site: active and not past its expiry (admins always may)
create or replace function public.account_ok() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select is_admin or (status = 'active' and (expires_at is null or expires_at > now()))
                   from public.profiles where id = auth.uid()), false)
$$;

-- progress can only be saved by accounts that are allowed in
drop policy if exists "progress: insert own" on public.progress;
create policy "progress: insert own" on public.progress for insert with check (user_id = auth.uid() and public.account_ok());
drop policy if exists "progress: update own" on public.progress;
create policy "progress: update own" on public.progress for update using (user_id = auth.uid()) with check (user_id = auth.uid() and public.account_ok());

-- block sign-ups from emails that were not invited (when signup_mode = 'invite')
create or replace function public.check_invite() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if coalesce((select value from public.app_settings where key = 'signup_mode'), 'invite') = 'invite'
     and not exists (select 1 from public.invites where lower(email) = lower(new.email)) then
    raise exception 'NOT_INVITED: % has not been invited', new.email;
  end if;
  return new;
end $$;
drop trigger if exists before_auth_user_created on auth.users;
create trigger before_auth_user_created before insert on auth.users for each row execute function public.check_invite();

-- new profile takes its access from the invite (if any)
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare inv public.invites%rowtype;
begin
  select * into inv from public.invites where lower(email) = lower(new.email);
  insert into public.profiles (id, username, email, is_admin, subjects, expires_at, note, completed)
  values (new.id,
          coalesce(nullif(new.raw_user_meta_data->>'username', ''), split_part(new.email, '@', 1)),
          new.email,
          coalesce(inv.make_admin, false),
          coalesce(inv.subjects, '{esa,tf}'),
          inv.expires_at,
          inv.note,
          coalesce(inv.completed, '{}'));
  return new;
end $$;

-- owner: change an account's access
create or replace function public.admin_set_access(uid uuid, p_status text, p_subjects text[], p_expires timestamptz, p_note text default null)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  if uid = auth.uid() and p_status <> 'active' then raise exception 'you cannot suspend your own account'; end if;
  update public.profiles set status = p_status, subjects = coalesce(p_subjects, '{}'), expires_at = p_expires, note = p_note where id = uid;
end $$;

-- owner: delete an account completely (login + profile + progress)
create or replace function public.admin_delete_user(uid uuid)
returns void language plpgsql security definer set search_path = public, auth as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  if uid = auth.uid() then raise exception 'you cannot delete your own account'; end if;
  delete from auth.users where id = uid;
end $$;

-- owner: wipe an account's saved progress
create or replace function public.admin_reset_progress(uid uuid)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  update public.progress set data = '{}'::jsonb, updated_at = now() where user_id = uid;
end $$;

revoke execute on function public.admin_set_access(uuid, text, text[], timestamptz, text) from public, anon;
grant execute on function public.admin_set_access(uuid, text, text[], timestamptz, text) to authenticated;
revoke execute on function public.admin_delete_user(uuid) from public, anon;
grant execute on function public.admin_delete_user(uuid) to authenticated;
revoke execute on function public.admin_reset_progress(uuid) from public, anon;
grant execute on function public.admin_reset_progress(uuid) to authenticated;
revoke execute on function public.check_invite() from public, anon, authenticated;
revoke execute on function public.handle_new_user() from public, anon, authenticated;

-- sign-up form pre-check (callable before login): 'ok' | 'not_invited' | 'username_taken' | 'email_taken'
create or replace function public.signup_check(p_email text, p_username text)
returns text language plpgsql stable security definer set search_path = public as $$
begin
  if exists (select 1 from public.profiles where lower(email) = lower(p_email)) then return 'email_taken'; end if;
  if exists (select 1 from public.profiles where lower(username) = lower(p_username)) then return 'username_taken'; end if;
  if coalesce((select value from public.app_settings where key = 'signup_mode'), 'invite') = 'invite'
     and not exists (select 1 from public.invites where lower(email) = lower(p_email)) then return 'not_invited'; end if;
  return 'ok';
end $$;
grant execute on function public.signup_check(text, text) to anon, authenticated;


-- v3 (owner-only admin, permanently invite-only) lives in supabase/admin.sql, which is gitignored
-- because it contains the owner's email.
