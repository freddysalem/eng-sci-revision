#!/usr/bin/env python3
"""Build the Thermofluids notes into .src/template.html.

  python3 tools/build_tf.py          # inject .tfsrc/notes/*.js between the TF_NOTES markers
  python3 tools/build_tf.py --check  # also syntax-check the generated JS with node (if installed)

Each .tfsrc/notes/NN_key.js file is one JS object literal:
  { key, area, num, week, name, triggers, sections: [ {num, title, blocks: [...]}, ... ] }
using the same block format as the Eng Sci A notes (para, list, disp, eq, deriv, ex, warn, check, html, img).
['@img', 'name'] is replaced by an ['img', dataURI] block from .tfsrc/img/name.png (dropped if missing).
"""
import base64, glob, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TPL = os.path.join(ROOT, '.src', 'template.html')
NOTES = os.path.join(ROOT, '.tfsrc', 'notes')
IMGS = os.path.join(ROOT, '.tfsrc', 'img')
START, END = '  // <<TF_NOTES>>', '  // <</TF_NOTES>>'
DSTART, DEND = '  // <<TF_DIA>>', '  // <</TF_DIA>>'
DIA = os.path.join(ROOT, '.tfsrc', 'diagrams')

def img_block(m):
    name = m.group(1)
    for ext, mime in (('png', 'image/png'), ('jpg', 'image/jpeg')):
        p = os.path.join(IMGS, f'{name}.{ext}')
        if os.path.exists(p):
            b64 = base64.b64encode(open(p, 'rb').read()).decode()
            return f"['img', 'data:{mime};base64,{b64}']"
    print(f'  ! missing image {name} — block dropped')
    return "['para', '']"

def build(write=True):
    files = sorted(glob.glob(os.path.join(NOTES, '*.js')))
    objs = []
    for f in files:
        src = open(f, encoding='utf-8').read().strip()
        src = re.sub(r"\[\s*'@img'\s*,\s*'([A-Za-z0-9_\-]+)'\s*\]", img_block, src)
        objs.append(src)
    body = ',\n'.join(objs)
    code = (f"{START}\n"
            "  _tfNotesData() {\n"
            "    if (this.__tfNotes) return this.__tfNotes;\n"
            "    const R = String.raw;\n"
            f"    this.__tfNotes = [\n{body}\n    ];\n"
            "    // tolerate ['disp', 'single string'] and ['list', lead, numbered, 'string'] — renderer expects arrays\n"
            "    this.__tfNotes.forEach((t) => (t.sections || []).forEach((sec) => (sec.blocks || []).forEach((b) => { if (b && b[0] === 'disp' && !Array.isArray(b[1])) b[1] = [b[1]]; if (b && (b[0] === 'eq') && !Array.isArray(b[1])) b[1] = []; })));\n"
            "    return this.__tfNotes;\n"
            "  }\n"
            f"{END}")
    t = open(TPL, encoding='utf-8').read()
    a, b = t.index(START), t.index(END) + len(END)
    t = t[:a] + code + t[b:]
    dia = '\n'.join(open(f, encoding='utf-8').read() for f in sorted(glob.glob(os.path.join(DIA, '*.js'))))
    dcode = (f"{DSTART}\n  _tfdia(key, strict) {{\n"
             "    if (!this.__tfdiaCache) this.__tfdiaCache = {};\n"
             "    if (this.__tfdiaCache[key] != null) return this.__tfdiaCache[key];\n"
             f"{dia}\n"
             "    const out = D[key] ? D[key]() : (strict ? '' : ('<div style=\"font-family:\\'JetBrains Mono\\',monospace;font-size:12px;color:var(--kA0937B);padding:30px;text-align:center;\">[ ' + key + ' ]</div>'));\n"
             "    if (D[key]) this.__tfdiaCache[key] = out;\n    return out;\n  }\n"
             f"{DEND}")
    a, b = t.index(DSTART), t.index(DEND) + len(DEND)
    t = t[:a] + dcode + t[b:]
    BS, BE = '  // <<TF_BANK>>', '  // <</TF_BANK>>'
    if BS in t:
        bank = open(os.path.join(ROOT, '.tfsrc', 'bank.js'), encoding='utf-8').read()
        a, b = t.index(BS), t.index(BE) + len(BE)
        t = t[:a] + BS + '\n' + bank + '\n' + BE + t[b:]
    FS, FE = '  // <<TF_FB>>', '  // <</TF_FB>>'
    if FS in t:
        fb = open(os.path.join(ROOT, '.tfsrc', 'formula_book.js'), encoding='utf-8').read()
        a, b = t.index(FS), t.index(FE) + len(FE)
        t = t[:a] + FS + '\n  _tfFbMeta() { return (\n' + fb + '\n  ); }\n' + FE + t[b:]
    cfgp = os.path.join(ROOT, 'supabase', 'config.json')   # {"url": "https://xxx.supabase.co", "anonKey": "..."} — public by design
    if os.path.exists(cfgp) and '// <<ACCT_CFG>>' in t:
        import json as _j
        c = _j.load(open(cfgp))
        a, b = t.index('  // <<ACCT_CFG>>'), t.index('  // <</ACCT_CFG>>') + len('  // <</ACCT_CFG>>')
        t = t[:a] + '  // <<ACCT_CFG>>\n  _acctCfg() { return { url: ' + _j.dumps(c.get('url', '')) + ', key: ' + _j.dumps(c.get('anonKey', '')) + ' }; }\n  // <</ACCT_CFG>>' + t[b:]
    if not write:
        return code, t
    open(TPL, 'w', encoding='utf-8').write(t)
    print(f'built {len(files)} topics, {len(code)//1024} KB of notes')
    return code

def check(code):
    js = 'class X {\n' + code + '\n}\nconst x = new X(); const d = x._tfNotesData();\n' \
         'console.log(d.length + " topics, " + d.reduce((n,t)=>n+t.sections.length,0) + " sections");\n' \
         'for (const t of d) for (const s of t.sections) for (const [bi,b] of s.blocks.entries()) {\n' \
         '  if (!Array.isArray(b)) { console.log("EMPTY/BAD BLOCK", t.key, s.num, "#"+bi, JSON.stringify(s.blocks[bi-1]||"").slice(0,140)); continue; }\n' \
         '  const ok = ["para","list","disp","eq","deriv","ex","warn","check","html","img","fig","svg"].includes(b[0]);\n' \
         '  if (!ok) console.log("UNKNOWN BLOCK", t.key, s.num, b[0]);\n' \
         '  if ((b[0]==="eq"||b[0]==="check") && !Array.isArray(b[b[0]==="eq"?1:2])) console.log("BAD SHAPE", t.key, s.num, b[0]);\n' \
         '  if ((b[0]==="ex"||b[0]==="deriv") && b[2].some(l=>!["t","m","ans","img","svg","dgm"].includes(l[0]))) console.log("BAD LINE in", t.key, s.num, b[1]);\n' \
         '}\n'
    p = os.path.join(ROOT, '.tfsrc', f'_check_{os.getpid()}.js'); open(p, 'w').write(js)
    r = subprocess.run(['node', p], capture_output=True, text=True)
    os.remove(p)
    print(r.stdout.strip() or '', r.stderr.strip()[:2000])
    return r.returncode == 0

if __name__ == '__main__':
    code = build()
    if '--check' in sys.argv:
        sys.exit(0 if check(code) else 1)
