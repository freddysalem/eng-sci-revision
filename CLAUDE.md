# eng-sci-revision — working notes

`index.html` is a Claude Design export bundle (≈5 MB): a JSON-encoded template plus gzip/base64
assets (fonts, KaTeX CSS, React, formula books). Don't hand-edit it.

## Edit workflow
1. `python3 tools/bundle.py unpack` → `.src/template.html` (all markup + app logic; `.src/` is gitignored)
2. Edit `.src/template.html`
3. `python3 tools/bundle.py pack` → rewrites the template inside `index.html`, assets untouched
4. `python3 tools/bundle.py check` verifies pack(unpack) is byte-identical (run before editing if unsure)

Preview: `python3 -m http.server 8124` in this folder, then open http://localhost:8124/.
Deploy: commit + push `main`; GitHub Pages serves https://freddysalem.github.io/eng-sci-revision/.

## Subjects
The top-bar dropdown (`SUBJECT SWITCHER` in the template) picks the subject; choice is stored in
localStorage `app_subject` (`"esa"` | `"tf"`).
- **Engineering Science A** (`esa`): the original site, gated by `isESA`.
- **Thermofluids** (`tf`): Resources reuses the Eng Sci A lecture-notes page (topic keys start `tf_`,
  progress stored under the `thermo_` prefix); Formula Books is compiled from every `eq` table and
  tagged `disp` equation in the notes; Today/Progress/Test/Play show "coming soon" states.
  Accent colour is `--tf` / `--tf-tint` / `--tf-line`. Areas: `_tfAreas()`.

## Thermofluids notes
Source of truth: `.tfsrc/notes/NN_tf_key.js` — one JS object per topic in the Eng Sci A block format
(`check`, `para`, `list`, `disp` with `\tag{n.m}`, `eq` rows `[label, tex, units, note]`, `deriv`,
`ex` with an `['ans']` marker to hide the solution, `warn` with labels Key Insight / When to use /
Warning / Note / Important / Recall Knowledge / Reflection Point, `html`, `['@img', 'name']` →
`.tfsrc/img/name.png|jpg`). Sections numbered `Ex N` with `wk: true` are the collapsible problem sheets.
1. Edit a notes file → `python3 tools/build_tf.py --check` (injects into `.src/template.html` between
   the `TF_NOTES` markers and validates block types with node)
2. `python3 tools/bundle.py pack`
Every place the notes differ from the course material is logged in `.tfsrc/CHANGELOG.md`.
`.tfsrc/txt|dedup/` (raw PDF text) are gitignored.
- To add another subject: add it to `_subjects()`, give it a content slot like `_tfContent()`, and
  gate its body with an `sc-if` like the Thermofluids block.

## Thermofluids diagrams
Inline SVG library in `.tfsrc/diagrams/*.js` (00_helpers + one file per area), same helpers and
theme tokens as the Eng Sci A `_t3dia` diagrams (teal `--tf` = flow, terracotta = forces, gold dashed =
control volumes), so they follow light/dark mode. `build_tf.py` injects them as `_tfdia(key)` between the
`TF_DIA` markers; `_t3dia` routes any `tf_` key there. Use in notes as a block `['svg', 'tf_key', 'caption']`
or inside `ex`/`deriv` as a line (put it right after the question text so it shows before the reveal).
- `python3 tools/tf_gallery.py [key,key]` → `.tfsrc/_gallery.html` to eyeball diagrams.
- `python3 tools/place_tf_diagrams.py` holds the placement list (section + anchor → key) and reports
  defined-but-unused / used-but-undefined keys.
The Moody chart stays the course image (`.tfsrc/img/moody.jpg`).
