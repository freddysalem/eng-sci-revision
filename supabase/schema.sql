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
