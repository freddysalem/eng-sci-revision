#!/usr/bin/env python3
"""Render every Thermofluids diagram into .tfsrc/_gallery.html (light + dark) for visual checking.
   python3 tools/tf_gallery.py [key-filter]   then open http://localhost:8124/.tfsrc/_gallery.html"""
import glob, os, re, subprocess, sys, json
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIA = os.path.join(ROOT, '.tfsrc', 'diagrams')

def body():
    return '\n'.join(open(f, encoding='utf-8').read() for f in sorted(glob.glob(os.path.join(DIA, '*.js'))))

def render(flt=''):
    js = 'function lib(){\n' + body() + '\nreturn D;}\nconst D = lib(); const out = {};\n' \
         'const F = ' + json.dumps([x for x in flt.split(',') if x]) + ';\nfor (const k of Object.keys(D)) { if (F.length && !F.some((f) => k.includes(f))) continue; try { out[k] = D[k](); } catch (e) { out[k] = "ERROR: " + e.message; } }\n' \
         'console.log(JSON.stringify(out));'
    p = os.path.join(ROOT, '.tfsrc', '_gallery.js'); open(p, 'w').write(js)
    r = subprocess.run(['node', p], capture_output=True, text=True)
    if r.returncode: print(r.stderr[:3000]); sys.exit(1)
    return json.loads(r.stdout)

def theme_css():
    t = open(os.path.join(ROOT, '.src', 'template.html'), encoding='utf-8').read()
    lines = [l.strip() for l in t.splitlines() if re.match(r'\s*(:root|html\[data-theme)', l) and ('--k' in l or '--tf' in l)]
    lines = [l for l in lines if l.count('{') == l.count('}')]
    return '\n'.join(lines)

if __name__ == '__main__':
    out = render(sys.argv[1] if len(sys.argv) > 1 else '')
    errs = {k: v for k, v in out.items() if v.startswith('ERROR')}
    cards = ''.join(f'<div class="c"><div class="k">{k}</div><figure>{v}</figure></div>' for k, v in out.items())
    html = f'''<!doctype html><html data-theme="light"><head><meta charset="utf-8"><style>{theme_css()}
body{{background:var(--kF4EFE3);font-family:sans-serif;margin:16px;color:var(--k3A332B)}} .g{{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}}
.c{{background:var(--kFBF8F1);border:1px solid var(--kE7E0D0);border-radius:12px;padding:12px 14px}} .k{{font:11px monospace;color:var(--k8C8273);margin-bottom:6px}} figure{{margin:0;display:flex;justify-content:center}}
</style></head><body><div class="g">{cards}</div></body></html>'''
    open(os.path.join(ROOT, '.tfsrc', '_gallery.html'), 'w', encoding='utf-8').write(html)
    print(len(out), 'diagrams', 'errors:', errs or 'none')
