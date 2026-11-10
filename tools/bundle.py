#!/usr/bin/env python3
"""Unpack / repack the Claude Design export bundle in index.html.

  python3 tools/bundle.py unpack   # index.html -> .src/template.html (+ .src/assets/)
  python3 tools/bundle.py pack     # .src/template.html -> index.html (assets reused from index.html)
  python3 tools/bundle.py check    # verify pack(unpack(index.html)) is byte-identical

Only the template (all markup + app logic) is edited; packed assets (fonts, KaTeX CSS,
React, formula books) are carried over from the current index.html untouched.
"""
import json, os, sys, base64, gzip

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(ROOT, 'index.html')
SRC = os.path.join(ROOT, '.src')
TPL = os.path.join(SRC, 'template.html')
TAG = '<script type="__bundler/template">'

def _split(s):
    k = s.index(TAG); a = s.index('>', k) + 1; b = s.index('</script>', a)
    inner = s[a:b]; body = inner.strip()
    lead = inner[:len(inner) - len(inner.lstrip())]; trail = inner[len(inner.rstrip()):]
    return s[:a] + lead, body, trail + s[b:]

def _encode(tpl):
    return json.dumps(tpl, ensure_ascii=False).replace('</', '<\\u002F')

def unpack():
    s = open(INDEX, encoding='utf-8').read()
    _, body, _ = _split(s)
    os.makedirs(os.path.join(SRC, 'assets'), exist_ok=True)
    open(TPL, 'w', encoding='utf-8').write(json.loads(body))
    k = s.index('<script type="__bundler/manifest">'); a = s.index('>', k) + 1; b = s.index('</script>', a)
    for u, e in json.loads(s[a:b]).items():
        raw = base64.b64decode(e['data']); raw = gzip.decompress(raw) if e.get('compressed') else raw
        ext = e['mime'].split('/')[-1].split('+')[0][:10]
        open(os.path.join(SRC, 'assets', f'{u}.{ext}'), 'wb').write(raw)
    print('unpacked ->', TPL)

def pack(write=True):
    s = open(INDEX, encoding='utf-8').read()
    head, _, tail = _split(s)
    out = head + _encode(open(TPL, encoding='utf-8').read()) + tail
    if write:
        open(INDEX, 'w', encoding='utf-8').write(out); print('packed ->', INDEX, len(out.encode()), 'bytes')
    return s, out

if __name__ == '__main__':
    cmd = (sys.argv[1:] or ['check'])[0]
    if cmd == 'unpack': unpack()
    elif cmd == 'pack': pack()
    elif cmd == 'check':
        orig, out = pack(write=False)
        print('identical' if orig == out else f'DIFFERS (orig {len(orig)} vs {len(out)})')
