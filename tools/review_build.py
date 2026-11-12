#!/usr/bin/env python3
"""Private preview build for reviewers — never touches .src/template.html or index.html.

  python3 tools/review_build.py <name>
      -> .review/<name>/index.html  (served by the preview server at http://localhost:8124/.review/<name>/)

Injects the current .tfsrc notes, diagrams and bank into an in-memory copy of the template and packs it
with the assets from index.html. Also runs the same node validation as build_tf.py --check.
Open a topic fully expanded with  http://localhost:8124/.review/<name>/#review=<topicKey>
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build_tf, bundle

name = (sys.argv[1:] or ['default'])[0]
code, tpl = build_tf.build(write=False)
ok = build_tf.check(code)
s = open(bundle.INDEX, encoding='utf-8').read()
head, _, tail = bundle._split(s)
out_dir = os.path.join(build_tf.ROOT, '.review', name)
os.makedirs(out_dir, exist_ok=True)
open(os.path.join(out_dir, 'index.html'), 'w', encoding='utf-8').write(head + bundle._encode(tpl) + tail)
print(('OK' if ok else 'CHECK FAILED'), '->', os.path.join(out_dir, 'index.html'))
sys.exit(0 if ok else 1)
