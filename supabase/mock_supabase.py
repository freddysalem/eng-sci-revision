# Minimal local stand-in for the Supabase endpoints the site uses (auth + 2 tables, RLS-like rules).
import json, uuid, time, re
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs
USERS = {}      # id -> {email, pw, username}
TOKENS = {}     # token -> id
REFRESH = {}
PROFILES = {}   # id -> {...}
PROGRESS = {}   # id -> {user_id, data, updated_at}
ADMIN_EMAIL, DONE = 'admin@test.local', ['esa']
INVITES = {ADMIN_EMAIL: {'email': ADMIN_EMAIL, 'subjects': ['esa','tf'], 'expires_at': None, 'make_admin': True, 'completed': DONE, 'note': 'owner'}}
SETTINGS = {'signup_mode': 'invite'}
def now(): return time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
def ok(uid):
    p = PROFILES.get(uid) or {}
    return p.get('is_admin') or (p.get('status') == 'active' and (not p.get('expires_at') or p['expires_at'] > now()))
def chk(email, name):
    if any(x['email'].lower() == email.lower() for x in USERS.values()): return 'email_taken'
    if any(x['username'].lower() == name.lower() for x in PROFILES.values()): return 'username_taken'
    if SETTINGS['signup_mode'] == 'invite' and email.lower() not in INVITES: return 'not_invited'
    return 'ok'
def sess(uid):
    t, r = uuid.uuid4().hex, uuid.uuid4().hex; TOKENS[t] = uid; REFRESH[r] = uid
    u = USERS[uid]
    return {'access_token': t, 'refresh_token': r, 'expires_in': 3600, 'user': {'id': uid, 'email': u['email'], 'user_metadata': {'username': u['username']}}}
class H(BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def cors(self):
        self.send_header('Access-Control-Allow-Origin', '*'); self.send_header('Access-Control-Allow-Headers', '*'); self.send_header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS')
    def out(self, code, obj=None):
        self.send_response(code); self.cors(); self.send_header('Content-Type', 'application/json'); self.end_headers()
        if obj is not None: self.wfile.write(json.dumps(obj).encode())
    def do_OPTIONS(self): self.send_response(204); self.cors(); self.end_headers()
    def body(self):
        n = int(self.headers.get('Content-Length') or 0); return json.loads(self.rfile.read(n) or b'{}') if n else {}
    def me(self):
        a = self.headers.get('Authorization', ''); return TOKENS.get(a.replace('Bearer ', ''))
    def do_POST(self):
        u = urlparse(self.path); q = parse_qs(u.query); b = self.body()
        if u.path == '/auth/v1/signup':
            name = (b.get('data') or {}).get('username') or b['email'].split('@')[0]
            if any(x['email'] == b['email'] for x in USERS.values()): return self.out(422, {'msg': 'User already registered'})
            if chk(b['email'], name) != 'ok': return self.out(500, {'code': 'unexpected_failure', 'message': 'Database error saving new user'})
            uid = str(uuid.uuid4()); USERS[uid] = {'email': b['email'], 'pw': b['password'], 'username': name}
            inv = INVITES.get(b['email'].lower(), {})
            PROFILES[uid] = {'id': uid, 'username': name, 'email': b['email'], 'is_admin': bool(inv.get('make_admin')), 'completed': inv.get('completed') or [], 'created_at': now(), 'status': 'active', 'subjects': inv.get('subjects', ['esa','tf']), 'expires_at': inv.get('expires_at'), 'note': inv.get('note')}
            return self.out(200, sess(uid))
        if u.path == '/auth/v1/token':
            if q.get('grant_type') == ['password']:
                for uid, x in USERS.items():
                    if x['email'] == b.get('email') and x['pw'] == b.get('password'): return self.out(200, sess(uid))
                return self.out(400, {'error': 'invalid_grant', 'error_description': 'Invalid login credentials'})
            uid = REFRESH.pop(b.get('refresh_token'), None)
            return self.out(200, sess(uid)) if uid else self.out(400, {'error_description': 'Invalid Refresh Token'})
        if u.path == '/auth/v1/logout': return self.out(204)
        if u.path == '/rest/v1/progress':
            uid = self.me()
            if not uid or b.get('user_id') != uid or not ok(uid): return self.out(403, {'message': 'new row violates row-level security policy'})
            PROGRESS[uid] = {'user_id': uid, 'data': b.get('data') or {}, 'updated_at': b.get('updated_at')}
            return self.out(201)
        if u.path.startswith('/rest/v1/rpc/'):
            fn = u.path.split('/')[-1]; uid = self.me(); adm = uid and PROFILES.get(uid, {}).get('is_admin')
            if fn == 'signup_check': return self.out(200, chk(b.get('p_email', ''), b.get('p_username', '')))
            if not adm: return self.out(400, {'message': 'not allowed'})
            t = b.get('uid')
            if t not in PROFILES: return self.out(404, {'message': 'no such user'})
            if fn == 'admin_set_access':
                if t == uid and b.get('p_status') != 'active': return self.out(400, {'message': 'you cannot suspend your own account'})
                PROFILES[t].update(status=b.get('p_status'), subjects=b.get('p_subjects') or [], expires_at=b.get('p_expires'), note=b.get('p_note')); return self.out(204)
            if fn == 'admin_delete_user':
                if t == uid: return self.out(400, {'message': 'you cannot delete your own account'})
                for d in (USERS, PROFILES, PROGRESS): d.pop(t, None)
                return self.out(204)
            if fn == 'admin_reset_progress':
                if t in PROGRESS: PROGRESS[t].update(data={}, updated_at=now())
                return self.out(204)
        if u.path == '/rest/v1/invites':
            uid = self.me()
            if not (uid and PROFILES.get(uid, {}).get('is_admin')): return self.out(403, {'message': 'new row violates row-level security policy'})
            e = b['email'].strip().lower(); INVITES[e] = {'email': e, 'subjects': b.get('subjects') or ['esa','tf'], 'expires_at': b.get('expires_at'), 'make_admin': False, 'completed': [], 'note': b.get('note')}
            return self.out(201)
        self.out(404, {'message': 'not found'})
    def do_DELETE(self):
        u = urlparse(self.path); q = parse_qs(u.query); uid = self.me()
        if u.path == '/rest/v1/invites' and uid and PROFILES.get(uid, {}).get('is_admin'):
            INVITES.pop(q['email'][0][3:].lower(), None); return self.out(204)
        self.out(403, {})
    def do_PATCH(self):
        u = urlparse(self.path); q = parse_qs(u.query); uid = self.me(); b = self.body()
        if u.path == '/rest/v1/app_settings' and uid and PROFILES.get(uid, {}).get('is_admin'):
            SETTINGS[q['key'][0][3:]] = b['value']; return self.out(204)
        self.out(403, {})
    def do_GET(self):
        u = urlparse(self.path); q = parse_qs(u.query); uid = self.me()
        if u.path == '/rest/v1/app_settings': return self.out(200, [{'key': k, 'value': v} for k, v in SETTINGS.items()])
        if not uid: return self.out(401, {'message': 'JWT required'})
        admin = PROFILES.get(uid, {}).get('is_admin')
        if u.path == '/rest/v1/progress':
            rows = list(PROGRESS.values())
            if 'user_id' in q: rows = [r for r in rows if 'eq.' + r['user_id'] == q['user_id'][0]]
            if not admin: rows = [r for r in rows if r['user_id'] == uid]
            return self.out(200, rows)
        if u.path == '/rest/v1/profiles':
            rows = list(PROFILES.values())
            if 'id' in q: rows = [r for r in rows if 'eq.' + r['id'] == q['id'][0]]
            if not admin: rows = [r for r in rows if r['id'] == uid]
            return self.out(200, rows)
        if u.path == '/rest/v1/invites': return self.out(200, sorted(INVITES.values(), key=lambda x: x['email']) if admin else [])
        if u.path == '/debug': return self.out(200, {'users': len(USERS), 'progress': {PROFILES[k]['username']: len(v['data']) for k, v in PROGRESS.items()}})
        self.out(404, {})
ThreadingHTTPServer(('127.0.0.1', 8125), H).serve_forever()
