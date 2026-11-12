#!/usr/bin/env node
// Screenshot one topic's lecture notes exactly as the site renders them, fully expanded
// (every problem sheet open, every hidden solution revealed), for reviewing.
//
//   node tools/note_shots.mjs <topicKey> <outDir> [--build <name>] [--theme dark|light] [--width 1280]
//
// --build <name> uses the private build at .review/<name>/ (see tools/review_build.py);
// otherwise the main index.html. Needs the preview server on http://localhost:8124.
// Writes <outDir>/NN.jpg (viewport-sized slices, top to bottom) and <outDir>/report.json with
// KaTeX errors, missing diagrams, broken images and console errors found on the page.
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const topic = args[0], outDir = args[1];
if (!topic || !outDir || topic.startsWith('--')) { console.error('usage: node tools/note_shots.mjs <topicKey> <outDir> [--build name] [--theme dark|light]'); process.exit(2); }
const build = opt('--build', null), theme = opt('--theme', 'dark');
const W = +opt("--width", 1280), H = 1500, STEP = 1250;
const base = 'http://localhost:8124/' + (build ? `.review/${build}/` : '');
const url = `${base}#review=${topic}&theme=${theme}`;
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9300 + Math.floor(Math.random() * 600);
const prof = join(tmpdir(), `noteshots-${process.pid}`);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) if (/^\d+\.jpg$/.test(f)) rmSync(join(outDir, f));
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`,
  '--no-first-run', '--no-default-browser-check', '--hide-scrollbars', `--window-size=${W},${H}`, 'about:blank'], { stdio: 'ignore' });
const cleanup = () => { try { chrome.kill('SIGKILL'); } catch (e) {} try { rmSync(prof, { recursive: true, force: true }); } catch (e) {} };
process.on('exit', cleanup);

let wsUrl = null;
for (let i = 0; i < 60 && !wsUrl; i++) {
  await sleep(250);
  try { const l = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); const p = l.find((t) => t.type === 'page'); if (p) wsUrl = p.webSocketDebuggerUrl; } catch (e) {}
}
if (!wsUrl) { console.error('Chrome did not start'); process.exit(1); }
const ws = new WebSocket(wsUrl);
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
let id = 0; const pending = new Map(); const consoleErrs = [];
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
  if (d.method === 'Runtime.exceptionThrown') consoleErrs.push(d.params.exceptionDetails.exception?.description || d.params.exceptionDetails.text);
  if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') consoleErrs.push(d.params.args.map((a) => a.value || a.description || '').join(' '));
};
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (expr) => { const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }); return r.result?.result?.value; };

await send('Page.enable'); await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url });
// wait for the notes page to render
let ready = false;
for (let i = 0; i < 80 && !ready; i++) { await sleep(400); ready = await ev(`!!document.querySelector('[data-anchor]') && document.body.innerText.length > 2000`); }
if (!ready) { console.error('notes did not render — is the preview server running on :8124 and is the topic key right?'); process.exit(1); }
await sleep(2500); // KaTeX + diagrams settle

const info = await ev(`(() => {
  const els = [...document.querySelectorAll('div')].filter(d => { const s = getComputedStyle(d); return /(auto|scroll)/.test(s.overflowY) && d.scrollHeight > d.clientHeight + 50; });
  els.sort((a, b) => b.scrollHeight - a.scrollHeight);
  const sc = els[0]; if (sc) sc.setAttribute('data-shot-scroller', '1');
  const katexErr = [...document.querySelectorAll('.katex-error')].map(e => (e.getAttribute('title') || '') + ' :: ' + e.textContent.slice(0, 160));
  const missingDia = [...document.querySelectorAll('div')].filter(d => d.children.length === 0 && /^\\[ tf_[a-z0-9_]+ \\]$/.test((d.textContent || '').trim())).map(d => d.textContent.trim());
  const badImg = [...document.querySelectorAll('img')].filter(i => i.complete && i.naturalWidth === 0).map(i => (i.src || '').slice(0, 80));
  const rawTex = (document.body.innerText.match(/(\\\\frac|\\\\left|\\\\mathrm|\\\\text\\{|\\$[^$\\n]{1,40}\\$)/g) || []).slice(0, 20);
  return { scrollH: sc ? sc.scrollHeight : document.documentElement.scrollHeight, clientH: sc ? sc.clientHeight : innerHeight, katexErr, missingDia, badImg, rawTex };
})()`);

let n = 0;
for (let y = 0; y < info.scrollH; y += STEP) {
  await ev(`(() => { const sc = document.querySelector('[data-shot-scroller]'); if (sc) sc.scrollTop = ${y}; else scrollTo(0, ${y}); })()`);
  await sleep(350);
  const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 72 });
  writeFileSync(join(outDir, String(++n).padStart(2, '0') + '.jpg'), Buffer.from(shot.result.data, 'base64'));
  if (n > 80) break;
}
const report = { topic, url, theme, slices: n, katexErrors: info.katexErr, missingDiagrams: info.missingDia, brokenImages: info.badImg, rawTexLeaks: info.rawTex, consoleErrors: [...new Set(consoleErrs)].slice(0, 20) };
writeFileSync(join(outDir, 'report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ slices: n, katexErrors: info.katexErr.length, missingDiagrams: info.missingDia.length, brokenImages: info.badImg.length, rawTexLeaks: info.rawTex.length, consoleErrors: report.consoleErrors.length }));
ws.close(); cleanup(); process.exit(0);
