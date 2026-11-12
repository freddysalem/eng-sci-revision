    // Thermofluids diagram library — same drawing helpers and theme tokens as the Eng Sci A diagrams.
    // Teal (--tf) = fluid / flow; terracotta = forces & stresses; gold dashed = control volumes.
    const ink = 'var(--k3A332B)', terr = 'var(--kB5683C)', gold = 'var(--kC08A2D)', grn = 'var(--k5C7E51)', mut = 'var(--kB3A88F)', mtx = 'var(--k8C8273)', vio = 'var(--k8A6FB0)', paper = 'var(--kFBF8F1)';
    const tf = 'var(--tf)', tint = 'var(--tf-tint)', tline = 'var(--tf-line)';
    const cmap = { ink, terr, gold, grn, mut, vio, mtx, tf, tint, paper, tline };
    const mid = { ink: 'i', terr: 't', gold: 'd', grn: 'g', mut: 'm', vio: 'v', tf: 'f' };
    const col = (c) => cmap[c] || c;
    const mk = (id, c) => '<marker id="' + id + '" markerWidth="12" markerHeight="12" refX="8.5" refY="3.4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,3.4 L0,6.8 Z" fill="' + c + '"></path></marker>';
    const mks = (id, c) => '<marker id="' + id + '" markerWidth="12" markerHeight="12" refX="0.5" refY="3.4" orient="auto" markerUnits="userSpaceOnUse"><path d="M9,0 L0,3.4 L9,6.8 Z" fill="' + c + '"></path></marker>';
    const W = (w, h, inner) => '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" style="max-width:' + Math.min(w, 720) + 'px;height:auto;display:block;overflow:visible;">'
      + '<defs>' + mk('tfm-i', ink) + mk('tfm-t', terr) + mk('tfm-d', gold) + mk('tfm-g', grn) + mk('tfm-m', mut) + mk('tfm-v', vio) + mk('tfm-f', tf)
      + mks('tfs-t', terr) + mks('tfs-i', ink) + mks('tfs-m', mut) + mks('tfs-f', tf) + mks('tfs-d', gold) + mks('tfs-g', grn) + mks('tfs-v', vio)
      + '<pattern id="tf-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="' + mut + '" stroke-width="1.3"></line></pattern>'
      + '</defs>' + inner + '</svg>';
    const A = (x1, y1, x2, y2, c, w) => '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + col(c || 'ink') + '" stroke-width="' + (w || 2) + '" marker-end="url(#tfm-' + (mid[c] || 'i') + ')"></line>';
    const A2 = (x1, y1, x2, y2, c) => '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + col(c || 'mut') + '" stroke-width="1.3" marker-start="url(#tfs-' + (mid[c] || 'm') + ')" marker-end="url(#tfm-' + (mid[c] || 'm') + ')"></line>';
    const L = (x1, y1, x2, y2, c, w, dash) => '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + col(c || 'ink') + '" stroke-width="' + (w || 1.4) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '></line>';
    const P = (d, c, w, fill, dash, op) => '<path d="' + d + '" stroke="' + (c ? col(c) : 'none') + '" stroke-width="' + (w || 1.6) + '" fill="' + (fill ? col(fill) : 'none') + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + (op != null ? ' fill-opacity="' + op + '"' : '') + ' stroke-linejoin="round" stroke-linecap="round"></path>';
    const PA = (d, c, w) => '<path d="' + d + '" stroke="' + col(c || 'ink') + '" stroke-width="' + (w || 1.8) + '" fill="none" marker-end="url(#tfm-' + (mid[c] || 'i') + ')"></path>';
    const R = (x, y, w, h, fill, stroke, sw, dash, rx) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"' + (rx ? ' rx="' + rx + '"' : '') + ' fill="' + (fill ? col(fill) : 'none') + '" stroke="' + (stroke ? col(stroke) : 'none') + '" stroke-width="' + (sw || 1.4) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '></rect>';
    const dot = (x, y, c, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 4) + '" fill="' + col(c || 'ink') + '"></circle>';
    const ci = (x, y, r, c, w, dash, fill) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill ? col(fill) : 'none') + '" stroke="' + col(c || 'ink') + '" stroke-width="' + (w || 1.6) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '></circle>';
    const fmt = (s) => String(s).replace(/_\{([^}]*)\}|_([A-Za-z0-9∞ₘ]+)/g, (m, a, b) => '<tspan dy="4" font-size="0.72em" font-style="normal">' + (a || b) + '</tspan><tspan dy="-4">\u200b</tspan>')
      .replace(/\^\{([^}]*)\}|\^([−\-0-9./]+)/g, (m, a, b) => '<tspan dy="-6" font-size="0.72em" font-style="normal">' + (a || b) + '</tspan><tspan dy="6">\u200b</tspan>');
    const T = (x, y, s, o) => { o = o || {}; s = fmt(s); return '<text x="' + x + '" y="' + y + '" font-size="' + (o.fs || 13) + '" fill="' + (o.c ? col(o.c) : ink) + '" text-anchor="' + (o.a || 'start') + '" font-family="' + (o.serif ? "'Söhne', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif" : "'JetBrains Mono',monospace") + '"' + (o.serif ? ' font-style="italic"' : '') + (o.w ? ' font-weight="' + o.w + '"' : '') + (o.rot ? ' transform="rotate(' + o.rot + ' ' + x + ' ' + y + ')"' : '') + '>' + s + '</text>'; };
    const V = (x, y, s, o) => T(x, y, s, Object.assign({ serif: true, fs: 15 }, o || {}));          // variable label (italic)
    const N = (x, y, s, o) => T(x, y, s, Object.assign({ fs: 10.5, c: 'mtx' }, o || {}));             // small note label (mono)
    const sub = (t) => '<tspan dy="4" font-size="0.72em" font-style="normal">' + t + '</tspan><tspan dy="-4">\u200b</tspan>';
    const sup = (t) => '<tspan dy="-6" font-size="0.72em" font-style="normal">' + t + '</tspan><tspan dy="6">\u200b</tspan>';
    const pts = (arr) => arr.map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
    const poly = (arr, c, w, dash) => '<polyline points="' + pts(arr) + '" fill="none" stroke="' + col(c || 'ink') + '" stroke-width="' + (w || 1.8) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + ' stroke-linejoin="round" stroke-linecap="round"></polyline>';
    const pgon = (arr, fill, c, w, op) => '<polygon points="' + pts(arr) + '" fill="' + (fill ? col(fill) : 'none') + '"' + (op != null ? ' fill-opacity="' + op + '"' : '') + ' stroke="' + (c ? col(c) : 'none') + '" stroke-width="' + (w || 1.4) + '" stroke-linejoin="round"></polygon>';
    const fn = (f, a, b, n) => { const o = []; for (let i = 0; i <= (n || 60); i++) { const t = a + (b - a) * i / (n || 60); o.push(f(t)); } return o; };
    // hatched solid wall: a strip from (x1,y) to (x2,y), thickness th, hatch on side 'up' or 'down'
    const wall = (x1, y, x2, side, th) => { th = th || 10; const yy = side === 'up' ? y - th : y; return R(x1, yy, x2 - x1, th, 'url(#tf-hatch)') + L(x1, y, x2, y, 'ink', 1.8); };
    const wallV = (x, y1, y2, side, th) => { th = th || 10; const xx = side === 'left' ? x - th : x; return R(xx, y1, th, y2 - y1, 'url(#tf-hatch)') + L(x, y1, x, y2, 'ink', 1.8); };
    const fluid = (x, y, w, h) => R(x, y, w, h, 'tint');
    const cv = (x, y, w, h) => R(x, y, w, h, null, 'gold', 1.5, '5 4');
    const cl = (x1, y, x2) => L(x1, y, x2, y, 'mut', 1.1, '10 4 2 4');                                  // centreline
    // velocity profile: arrows from baseline x0 at each y with length f(y); envelope drawn through tips
    const prof = (x0, ys, f, c, env) => { c = c || 'tf'; let s = ''; ys.forEach((y) => { const u = f(y); if (Math.abs(u) > 3) s += A(x0, y, x0 + u, y, c, 1.5); }); if (env !== false) { const yy = ys.slice().sort((a, b) => a - b); const fine = fn((t) => [x0 + f(t), t], yy[0], yy[yy.length - 1], 50); s += poly(fine, c, 1.8); } return s; };
    // plot frame: axes from (x0,y0) bottom-left, width w, height h
    const axes = (x0, y0, w, h, xl, yl) => A(x0, y0, x0 + w + 12, y0, 'ink', 1.4) + A(x0, y0, x0, y0 - h - 12, 'ink', 1.4) + (xl ? T(x0 + w + 14, y0 + 16, xl, { serif: true, fs: 14, a: 'end' }) : '') + (yl ? T(x0 - 8, y0 - h - 16, yl, { serif: true, fs: 14, a: 'start' }) : '');
    const tick = (x, y, lab, vert) => vert ? L(x - 4, y, x, y, 'ink', 1.2) + T(x - 8, y + 4, lab, { fs: 10.5, a: 'end', c: 'mtx' }) : L(x, y, x, y + 4, 'ink', 1.2) + T(x, y + 17, lab, { fs: 10.5, a: 'middle', c: 'mtx' });
    const lg = (v) => Math.log10(v);
    const D = {};
