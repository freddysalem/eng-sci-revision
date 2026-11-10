    // ===================== Topic 1 · Energy, fluids & conservation =====================
    D.tf_solid_fluid = () => {
      const blk = (x, yb, off, fillC) => pgon([[x, yb], [x + 70, yb], [x + 70 + off, yb - 70], [x + off, yb - 70]], fillC, 'ink', 1.6)
        + (off ? A(x + off + 18, yb - 80, x + off + 54, yb - 80, 'terr', 1.8) + A(x + 52, yb + 9, x + 16, yb + 9, 'terr', 1.8) + V(x + off + 58, yb - 76, 'τ', { c: 'terr', fs: 13 }) : '');
      let s = T(24, 64, 'Solid', { fs: 13, w: 600 }) + T(24, 204, 'Fluid', { fs: 13, w: 600, c: 'tf' });
      s += blk(90, 130, 0, 'paper') + A(172, 95, 208, 95, 'mut', 1.4) + blk(222, 130, 26, 'paper') + A(330, 95, 366, 95, 'mut', 1.4) + blk(380, 130, 26, 'paper');
      s += blk(90, 270, 0, 'tint') + A(172, 235, 208, 235, 'mut', 1.4) + blk(222, 270, 26, 'tint') + A(330, 235, 366, 235, 'mut', 1.4) + blk(380, 270, 70, 'tint');
      s += N(125, 156, 'unloaded', { a: 'middle' }) + N(270, 156, 'stress applied', { a: 'middle' }) + N(430, 156, 'later: same strain', { a: 'middle' });
      s += N(125, 296, 'unloaded', { a: 'middle' }) + N(270, 296, 'stress applied', { a: 'middle' }) + N(450, 296, 'later: still deforming', { a: 'middle' });
      s += T(600, 88, 'stress ∝ strain', { fs: 11.5, c: 'mtx', a: 'middle' }) + V(600, 114, 'τ ∝ γ', { a: 'middle', fs: 17 });
      s += T(600, 228, 'stress ∝ strain rate', { fs: 11.5, c: 'tf', a: 'middle' }) + V(600, 254, 'τ ∝ γ̇', { a: 'middle', fs: 17, c: 'tf' });
      return W(690, 310, s);
    };

    D.tf_ring = () => {
      const cx = 160, cy = 150; let s = '';
      s += ci(cx, cy, 120, 'mut', 9) + ci(cx, cy, 115.5, 'ink', 1.8) + ci(cx, cy, 115.5, 'ink', 0.1, null, 'paper');
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="82" fill="' + tint + '"></circle><circle cx="' + cx + '" cy="' + cy + '" r="66" fill="' + paper + '"></circle>';
      s += ci(cx, cy, 82, 'tf', 1.4) + ci(cx, cy, 66, 'tf', 1.4);
      s += L(cx - 140, cy, cx + 140, cy, 'mut', 1, '8 4 2 4') + L(cx, cy - 140, cx, cy + 140, 'mut', 1, '8 4 2 4');
      s += A(cx, cy, cx - 81, cy - 81, 'ink', 1.6) + V(cx - 92, cy - 88, 'R');
      s += A(cx, cy, cx + 47, cy - 47, 'tf', 1.6) + V(cx + 22, cy - 46, 'r', { c: 'tf' });
      s += A2(cx + 62 * Math.cos(0.45), cy + 62 * Math.sin(0.45), cx + 86 * Math.cos(0.45), cy + 86 * Math.sin(0.45), 'terr') + V(cx + 92, cy + 50, 'δr', { c: 'terr' });
      s += PA('M ' + (cx + 70) + ' ' + (cy - 30) + ' C 300 90, 330 100, 352 128', 'mut', 1.4);
      s += R(360, 130, 230, 18, 'tint', 'tf', 1.4) + A2(360, 166, 590, 166, 'mut') + V(475, 186, '2πr', { a: 'middle' }) + A2(602, 130, 602, 148, 'terr') + V(612, 144, 'δr', { c: 'terr' });
      s += T(475, 112, 'ring unrolled ≈ rectangle', { fs: 11, c: 'mtx', a: 'middle' });
      s += V(475, 228, 'dA ≈ 2πr δr', { a: 'middle', fs: 16 }) + V(475, 256, 'dQ = u dA', { a: 'middle', fs: 15, c: 'tf' });
      return W(640, 290, s);
    };

    D.tf_entry = () => {
      const yt = 60, yb = 200, yc = 130; let s = wall(40, yt, 660, 'up') + wall(40, yb, 660, 'down') + cl(40, yc, 660);
      const ys = []; for (let y = 68; y <= 192; y += 15.5) ys.push(y);
      s += prof(70, ys, () => 56, 'tf', false);
      const dev = (y) => { const eta = Math.abs(y - yc) / 70, d = 0.62; const q = 1 - eta; return q >= d ? 68 : 68 * (1 - Math.pow((d - q) / d, 2)); };
      s += prof(230, ys, dev, 'tf');
      s += prof(500, ys, (y) => 92 * (1 - Math.pow((y - yc) / 70, 2)), 'tf');
      s += poly(fn((x) => [x, yt + 68 * Math.sqrt(Math.min(1, (x - 50) / 380))], 50, 430, 50), 'tf', 1.3, '5 4');
      s += poly(fn((x) => [x, yb - 68 * Math.sqrt(Math.min(1, (x - 50) / 380))], 50, 430, 50), 'tf', 1.3, '5 4');
      s += A2(50, 232, 430, 232, 'ink') + T(240, 252, 'entry length  l_e ≈ 50–100 D', { a: 'middle', fs: 11.5 });
      s += N(70, 46, 'uniform inflow', { a: 'start' }) + N(230, 46, 'developing', { a: 'middle' }) + N(545, 46, 'fully developed', { a: 'middle', c: 'tf' });
      s += N(300, 95, 'boundary layers grow inwards', { a: 'middle', c: 'tf' });
      return W(700, 270, s);
    };

    D.tf_pitot = () => {
      let s = A(30, 95, 120, 95, 'tf', 2.2) + V(60, 84, 'U', { c: 'tf' });
      s += P('M 150 86 L 400 86 L 400 104 L 150 104 A 9 9 0 0 1 150 86 Z', 'ink', 1.8, 'paper');
      s += L(150, 95, 380, 95, 'ink', 1.2) + L(380, 95, 380, 196, 'ink', 1.2) + L(395, 104, 395, 196, 'ink', 1.2) + L(400, 104, 400, 196, 'ink', 1.8) + L(374, 104, 374, 196, 'ink', 1.8);
      s += dot(141, 95, 'terr', 3.5) + V(128, 120, 'p', { c: 'terr' }) + T(137, 124, '0', { fs: 10, c: 'terr' });
      s += L(232, 82, 232, 90, 'paper', 3) + L(240, 82, 240, 90, 'paper', 3) + L(232, 100, 232, 108, 'paper', 3) + L(240, 100, 240, 108, 'paper', 3);
      s += N(236, 70, 'static holes (4–8)', { a: 'middle' }) + A2(141, 54, 236, 54, 'mut') + N(188, 44, '≈ 8 tube diameters', { a: 'middle' });
      s += V(250, 128, 'p', { c: 'vio' }) + T(259, 132, 's', { fs: 10, c: 'vio' });
      // manometer
      s += P('M 345 196 L 345 270 Q 345 290 365 290 L 410 290 Q 430 290 430 270 L 430 196', 'ink', 1.8) + P('M 357 196 L 357 268 Q 357 278 367 278 L 408 278 Q 418 278 418 268 L 418 196', 'ink', 1.8);
      s += L(380, 196, 351, 196, 'ink', 1.2) + L(395, 196, 424, 196, 'ink', 1.2);
      s += P('M 351 252 L 351 270 Q 351 284 366 284 L 409 284 Q 424 284 424 270 L 424 226', 'mut', 10, null, null) + L(345, 252, 357, 252, 'ink', 1.6) + L(418, 226, 430, 226, 'ink', 1.6);
      s += A2(450, 226, 450, 252, 'terr') + V(460, 245, 'ΔH', { c: 'terr' }) + N(388, 312, 'manometer liquid ρ_m', { a: 'middle' });
      s += V(300, 220, 'p', { c: 'terr', fs: 14 }) + T(308, 224, '0', { fs: 10, c: 'terr' }) + L(316, 218, 348, 218, 'terr', 1) + V(470, 200, 'p', { c: 'vio', fs: 14 }) + T(478, 204, 's', { fs: 10, c: 'vio' }) + L(448, 197, 428, 197, 'vio', 1);
      s += V(520, 120, 'U = √(2(p₀ − p_s)/ρ)', { a: 'middle', fs: 14 }) + V(520, 148, 'p₀ − p_s = ρ_m g ΔH', { a: 'middle', fs: 14 });
      return W(620, 320, s);
    };

    D.tf_rooftile = () => {
      const x0 = 70, y0 = 255, d = [Math.cos(Math.PI / 6), -Math.sin(Math.PI / 6)], n = [-0.5, -0.866];
      const at = (sx, k) => [x0 + sx * d[0] + k * n[0], y0 + sx * d[1] + k * n[1]];
      let s = L(x0, y0, x0 + 430 * d[0], y0 + 430 * d[1], 'ink', 2.4) + N(x0 + 432 * d[0] + 6, y0 + 432 * d[1], 'line of roof');
      s += pgon([at(130, 2), at(300, 2), at(300, 16), at(130, 16)], 'terr', 'ink', 1.2);
      s += L(x0, y0, x0 + 90, y0, 'mut', 1.2) + P('M ' + (x0 + 52) + ' ' + y0 + ' A 52 52 0 0 0 ' + (x0 + 52 * d[0]).toFixed(1) + ' ' + (y0 + 52 * d[1]).toFixed(1), 'ink', 1.3) + V(x0 + 60, y0 - 9, 'θ', { fs: 14 });
      [70, 98, 126].forEach((y) => { s += A(60, y, 170, y, 'tf', 1.8); }); s += V(60, 60, 'u', { c: 'tf' });
      const c = at(215, 9);
      s += A(c[0], c[1], c[0], c[1] + 72, 'ink', 2) + V(c[0] + 8, c[1] + 66, 'mg = Atρ_t g', { fs: 13 });
      s += A(c[0], c[1], c[0] + 64 * n[0], c[1] + 64 * n[1], 'terr', 2.2) + V(c[0] + 64 * n[0] - 4, c[1] + 64 * n[1] - 8, 'ΔpA', { c: 'terr', a: 'end' });
      s += T(330, 70, 'above: p = p_a − ½ρu²', { fs: 11.5, c: 'tf' }) + T(330, 240, 'under tile (still air): p = p_a ≡ p₀', { fs: 11.5, c: 'mtx' });
      s += N(at(300, 26)[0] + 14, at(300, 26)[1] + 4, 'tile, area A, thickness t');
      return W(640, 280, s);
    };

    D.tf_pelton = () => {
      let s = R(205, 22, 210, 256, null, 'gold', 1.5, '5 4') + N(410, 16, 'control volume (moves with bucket)', { a: 'end', c: 'gold' });
      s += P('M 60 150 L 304 150', 'tf', 16, null, null) + '<path d="M 60 150 L 304 150" stroke="' + paper + '" stroke-width="0"></path>';
      s += P('M 300 150 C 336 142, 326 100, 292 90 L 238 26', 'tf', 13) + P('M 300 150 C 336 158, 326 200, 292 210 L 238 274', 'tf', 13);
      s += P('M 336 66 Q 296 108, 322 150 Q 296 192, 336 234', 'ink', 3.4);
      s += A(70, 150, 190, 150, 'ink', 2) + T(70, 134, 'ṁ(v₁ − u)', { serif: true, fs: 14 });
      s += A(272, 66, 236, 24, 'ink', 2) + T(150, 50, 'ṁ(v₁ − u)', { serif: true, fs: 14 }) + A(272, 234, 236, 276, 'ink', 2) + T(150, 262, 'ṁ(v₁ − u)', { serif: true, fs: 14 });
      s += L(292, 90, 240, 90, 'mut', 1, '4 3') + P('M 262 90 A 30 30 0 0 1 273 67', 'mut', 1.3) + T(246, 80, '50°', { fs: 11, c: 'mtx' });
      s += A(345, 150, 440, 150, 'terr', 2.4) + V(448, 155, 'F', { c: 'terr' }) + N(448, 172, 'force on bucket');
      s += T(470, 92, 'in:   +ṁ(v₁ − u)', { fs: 12 }) + T(470, 114, 'out:  −ṁ(v₁ − u) cos 50°', { fs: 12 }) + T(470, 210, 'F = ṁ(v₁ − u)(1 + cos 50°)', { fs: 12, c: 'terr' });
      return W(700, 300, s);
    };

    // ===================== Topics 2–3 · Dimensional analysis =====================
    D.tf_pipe_vars = () => {
      const yt = 70, yb = 170; let s = wall(70, yt, 570, 'up') + wall(70, yb, 570, 'down') + cl(70, 120, 570);
      for (let x = 112; x < 540; x += 16) s += pgon([[x, yt], [x + 5, yt + 5], [x + 10, yt]], 'mut', 'ink', 0.8) + pgon([[x, yb], [x + 5, yb - 5], [x + 10, yb]], 'mut', 'ink', 0.8);
      s += P('M 115 72 Q 100 120 115 168', 'gold', 1.4, null, '5 4') + P('M 525 72 Q 510 120 525 168', 'gold', 1.4, null, '5 4');
      s += A(80, 146, 150, 146, 'tf', 2.2) + V(152, 151, 'u', { c: 'tf' }) + T(162, 155, 'm', { fs: 10, c: 'tf' });
      s += V(88, 108, 'p + Δp', { c: 'terr', fs: 14 }) + V(540, 108, 'p', { c: 'terr', fs: 14 });
      s += V(320, 113, 'ρ, μ', { a: 'middle', c: 'grn' });
      s += A2(115, 40, 525, 40, 'gold') + V(320, 32, 'l', { a: 'middle', c: 'gold' }) + A2(600, 70, 600, 170, 'gold') + V(612, 125, 'D', { c: 'gold' });
      s += L(232, 176, 258, 206, 'gold', 1) + V(262, 214, 'e  (roughness)', { c: 'gold', fs: 13 });
      s += T(110, 248, 'want: Δp', { fs: 11.5, c: 'terr' }) + T(225, 248, 'regulate: u_m', { fs: 11.5, c: 'tf' }) + T(360, 248, 'fluid: ρ, μ', { fs: 11.5, c: 'grn' }) + T(470, 248, 'pipe: D, l, e', { fs: 11.5, c: 'gold' });
      return W(650, 262, s);
    };

    D.tf_similarity = () => {
      const foil = (cx, cy, c, ang) => { const up = [], lo = []; for (let i = 0; i <= 40; i++) { const x = Math.pow(i / 40, 1.6); const yt = 0.6 * (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x * x + 0.2843 * x * x * x - 0.1015 * x * x * x * x); const yc = 0.04 * x * (1 - x) * 2; up.push([x, yc + yt]); lo.push([x, yc - yt]); }
        const pt = (p) => { const a = ang * Math.PI / 180, X = (p[0] - 0.35) * c, Y = -p[1] * c; return [cx + X * Math.cos(a) - Y * Math.sin(a), cy + X * Math.sin(a) + Y * Math.cos(a)]; };
        return pgon(up.map(pt).concat(lo.reverse().map(pt)), 'paper', 'ink', 1.6); };
      const lines = (cx, cy, c) => { let s = ''; [-0.42, -0.24, 0.24, 0.42].forEach((k) => { s += poly(fn((t) => [cx + (t - 0.5) * c * 1.9, cy + k * c - (k < 0 ? 0.13 : 0.05) * c * Math.exp(-Math.pow((t - 0.5) / 0.2, 2))], 0, 1, 40), 'tf', 1.2); }); return s; };
      let s = lines(180, 115, 210) + foil(180, 115, 210, 6) + lines(510, 120, 105) + foil(510, 120, 105, 6);
      s += A(185, 105, 185, 40, 'terr', 2) + A(185, 105, 232, 105, 'terr', 2) + A(512, 115, 512, 82, 'terr', 1.8) + A(512, 115, 536, 115, 'terr', 1.8);
      s += T(180, 205, 'full scale (fs)', { a: 'middle', fs: 12, w: 600 }) + T(510, 205, 'model (m)', { a: 'middle', fs: 12, w: 600 });
      s += N(330, 240, 'geometric: same shape  ·  kinematic: same streamlines  ·  dynamic: same force ratios ⇔ every Π equal', { a: 'middle' });
      return W(660, 256, s);
    };

    D.tf_cf_re = () => {
      const X = (re) => 70 + (lg(re) - 1) / 6 * 480, Y = (cf) => 250 - (lg(cf) + 3) / 2 * 210;
      let s = R(X(2000), Y(0.1), X(4000) - X(2000), Y(0.001) - Y(0.1), 'url(#tf-hatch)') + axes(70, 250, 480, 210, 'Re', 'C_f');
      [1, 2, 3, 4, 5, 6, 7].forEach((k) => { s += tick(X(Math.pow(10, k)), 250, '10' + sup(k)); });
      [-3, -2, -1].forEach((k) => { s += tick(70, Y(Math.pow(10, k)), '10' + sup(k), true); });
      s += poly(fn((t) => { const re = Math.pow(10, t); return [X(re), Y(16 / re)]; }, lg(160), lg(2300), 30), 'tf', 2.2);
      const prandtl = (re) => { let f = 0.02; for (let i = 0; i < 40; i++) f = Math.pow(2 * lg(re * Math.sqrt(f)) - 0.8, -2); return f / 4; };
      s += poly(fn((t) => { const re = Math.pow(10, t); return [X(re), Y(prandtl(re))]; }, lg(3000), 7, 60), 'terr', 2.2);
      s += poly(fn((t) => { const re = Math.pow(10, t); return [X(re), Y(0.079 * Math.pow(re, -0.25))]; }, lg(4000), 7, 40), 'ink', 1.4, '6 4');
      s += V(X(300) + 8, Y(16 / 300) - 6, 'C_f = 16/Re', { c: 'tf', fs: 14 }) + N(X(400), Y(0.0012), 'laminar', { a: 'middle', c: 'tf' }) + N(X(2830), Y(0.13) - 4, 'transition', { a: 'middle' }) + N(X(3e5), Y(0.0012), 'turbulent', { a: 'middle', c: 'terr' });
      s += N(X(2e5), Y(0.0055), 'smooth pipe (experiment)', { c: 'terr' }) + N(X(1.2e4), Y(0.0016), 'Blasius 0.079 Re^-1/4 (dashed)', { c: 'ink' });
      return W(600, 285, s);
    };

    D.tf_convection_cv = () => {
      let s = P('M 120 50 L 470 50 A 18 60 0 0 1 470 170 L 120 170 A 18 60 0 0 1 120 50 Z', 'tf', 1.6, 'tint') + P('M 120 50 A 18 60 0 0 0 120 170', 'tf', 1.2, null, '4 3');
      s += A(30, 110, 100, 110, 'tf', 2.2) + V(50, 100, 'U', { c: 'tf' }) + cl(100, 110, 510);
      s += T(295, 92, 'fluid temperature θ', { a: 'middle', fs: 12 }) + V(295, 120, 'ρ, μ, C_p, k', { a: 'middle', fs: 14, c: 'grn' });
      s += A2(510, 50, 510, 170, 'gold') + V(520, 115, 'l', { c: 'gold' });
      s += PA('M 300 172 Q 292 182 300 192 Q 308 202 300 212 Q 292 222 300 232', 'terr', 1.8) + V(312, 228, 'Q̇', { c: 'terr' }) + V(410, 228, 'Q̇ = hAΔT', { fs: 14 });
      return W(560, 250, s);
    };

    D.tf_nu_collapse = () => {
      const X = (re) => 70 + (lg(re) - 3) / 3 * 400, Y = (v) => 240 - lg(v) / 3 * 200;
      let s = axes(70, 240, 400, 200, 'Re_d', 'Nu Pr' + sup('−0.4'));
      [3, 4, 5, 6].forEach((k) => { s += tick(X(Math.pow(10, k)), 240, '10' + sup(k)); }); [0, 1, 2, 3].forEach((k) => { s += tick(70, Y(Math.pow(10, k)), ['1', '10', '100', '1000'][k], true); });
      let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 - 0.5; };
      for (let i = 0; i < 46; i++) { const t = 3.1 + 2.85 * i / 45, re = Math.pow(10, t); const base = re > 1e4 ? 0.023 * Math.pow(re, 0.8) : (re < 2300 ? 4.36 * Math.pow(re / 2300, 0.15) : 4.36 + (0.023 * Math.pow(1e4, 0.8) - 4.36) * (lg(re) - lg(2300)) / (4 - lg(2300))); s += dot(X(re), Y(base * Math.pow(10, rnd() * 0.12)), 'tf', 2.6); }
      s += poly(fn((t) => [X(Math.pow(10, t)), Y(0.023 * Math.pow(10, 0.8 * t))], 4, 6, 10), 'terr', 2);
      s += L(X(2300), 40, X(2300), 240, 'mut', 1, '4 3') + L(X(1e4), 40, X(1e4), 240, 'mut', 1, '4 3') + N((X(2300) + X(1e4)) / 2, 58, 'transition', { a: 'middle' }) + N(X(1e5), 58, 'turbulent', { a: 'middle' });
      s += V(X(4e4) - 6, Y(0.023 * Math.pow(4e4, 0.8)) - 14, 'Nu = 0.023 Re' + sup('0.8') + ' Pr' + sup('0.4'), { c: 'terr', fs: 13.5, a: 'end' });
      return W(520, 275, s);
    };

    D.tf_blast = () => {
      let s = L(30, 190, 290, 190, 'ink', 2.2) + R(30, 190, 260, 10, 'url(#tf-hatch)');
      [44, 78, 112].forEach((r, i) => { s += P('M ' + (160 - r) + ' 190 A ' + r + ' ' + r + ' 0 0 1 ' + (160 + r) + ' 190', i === 2 ? 'terr' : 'mut', i === 2 ? 2.2 : 1.2, null, i === 2 ? null : '4 3'); });
      s += '<path d="M 116 190 A 44 44 0 0 1 204 190 Z" fill="' + gold + '" fill-opacity="0.35"></path>';
      s += A(160, 190, 160 + 112 * Math.cos(-0.9), 190 + 112 * Math.sin(-0.9), 'ink', 1.6) + V(212, 120, 'R(t)') + V(150, 182, 'E', { fs: 14 }) + V(250, 92, 'ρ (air)', { c: 'grn', fs: 13 });
      const X = (t) => 350 + t * 200, Y = (r) => 190 - r * 150;
      s += axes(350, 190, 200, 150, 't', 'R' + sup('5/2'));
      for (let i = 1; i <= 7; i++) s += dot(X(i / 7.5), Y(i / 7.5 * 0.95 + 0.01 * Math.sin(i * 3)), 'tf', 3);
      s += L(X(0), Y(0), X(1), Y(0.95), 'terr', 1.6) + N(X(0.55), Y(0.85), 'slope = E' + sup('1/2') + '/(Kρ' + sup('1/2') + ')', { c: 'terr', a: 'middle' });
      return W(580, 215, s);
    };

    // ===================== Topic 4 · Introduction to hydraulics =====================
    D.tf_shear_layer = () => {
      let s = R(40, 116, 170, 8, 'url(#tf-hatch)') + L(40, 116, 210, 116, 'ink', 1.6) + L(40, 124, 210, 124, 'ink', 1.6);
      const ysU = [54, 68, 82, 96, 108], ysL = [132, 146, 160, 174, 188];
      ysU.forEach((y) => { s += A(120, y, 196, y, 'tf', 1.5); }); ysL.forEach((y) => { s += A(120, y, 146, y, 'tf', 1.5); });
      s += L(196, 50, 196, 112, 'tf', 1.2) + L(146, 128, 146, 192, 'tf', 1.2);
      const ys = []; for (let y = 54; y <= 190; y += 13.6) ys.push(y);
      s += prof(380, ys, (y) => 51 + 25 * Math.tanh((120 - y) / 20), 'tf');
      s += L(210, 120, 600, 66, 'tf', 1.2, '5 4') + L(210, 120, 600, 176, 'tf', 1.2, '5 4');
      s += N(90, 44, 'fast stream', { c: 'tf' }) + N(90, 208, 'slow stream', { c: 'tf' }) + N(520, 122, 'shear layer', { a: 'middle', c: 'tf' }) + V(480, 216, 'τ = μ du/dy', { fs: 14, c: 'terr' });
      return W(620, 230, s);
    };

    D.tf_boundary_layer = () => {
      let s = wall(30, 220, 600, 'down');
      s += poly(fn((x) => [x, 220 - 120 * Math.sqrt((x - 30) / 570)], 30, 600, 50), 'tf', 1.3, '5 4');
      const dl = 120 * Math.sqrt(170 / 570), ys = []; for (let y = 215; y >= 52; y -= 15) ys.push(y);
      s += prof(200, ys, (y) => { const h = 220 - y; return h >= dl ? 150 : 150 * (h / dl) * (2 - h / dl); }, 'tf');
      const d2 = 120 * Math.sqrt(350 / 570); s += A2(380, 220, 380, 220 - d2, 'gold') + V(388, 220 - d2 / 2, 'δ(x)', { c: 'gold' });
      s += V(358, 64, 'u', { c: 'tf' }) + T(367, 68, '∞', { fs: 11, c: 'tf' }) + N(470, 90, 'free stream', { c: 'mtx' }) + N(470, 186, 'boundary layer: u < u∞', { c: 'tf' });
      s += A(230, 228, 196, 228, 'terr', 2) + V(236, 240, 'τ', { c: 'terr' }) + T(244, 244, 'w', { fs: 10, c: 'terr' }) + N(60, 244, 'no slip: u = 0 at the wall');
      s += A(30, 220, 30, 40, 'mut', 1.2) + V(18, 52, 'y', { c: 'mtx' });
      return W(620, 258, s);
    };

    D.tf_hagen = () => {
      const X = (v) => 70 + v * 380, Y = (p) => 240 - p * 200;
      let s = axes(70, 240, 380, 200, 'mean velocity V', 'Δp');
      s += L(X(0), Y(0), X(0.42), Y(0.13), 'tf', 2.4) + poly(fn((v) => [X(v), Y(0.13 + 1.0 * Math.pow(v - 0.42, 1.75) / Math.pow(0.58, 1.75) * 0.85)], 0.42, 1, 30), 'terr', 2.4);
      s += L(X(0.42), Y(0.13), X(0.75), Y(0.233), 'tf', 1.2, '5 4');
      s += V(X(0.18), Y(0.1), 'Δp ∝ V', { c: 'tf', fs: 14 }) + N(X(0.18), Y(0.1) + 16, 'laminar') + V(X(0.62), Y(0.62), 'Δp ∝ V' + sup('1.75'), { c: 'terr', fs: 14, a: 'end' }) + N(X(0.62) - 60, Y(0.62) + 16, 'turbulent') + L(X(0.42), 40, X(0.42), 240, 'mut', 1, '4 3') + N(X(0.42) + 4, 52, 'critical speed (Re ≈ 2000)');
      return W(500, 270, s);
    };

    D.tf_reynolds_dye = () => {
      const tube = (y, lab) => P('M 40 ' + (y - 32) + ' Q 70 ' + (y - 20) + ' 90 ' + (y - 17) + ' L 600 ' + (y - 17), 'ink', 1.6) + P('M 40 ' + (y + 32) + ' Q 70 ' + (y + 20) + ' 90 ' + (y + 17) + ' L 600 ' + (y + 17), 'ink', 1.6) + L(28, y, 62, y, 'ink', 2) + T(612, y + 4, lab, { fs: 11.5 });
      let s = tube(55, 'laminar') + tube(150, 'turbulent') + tube(245, 'transitional');
      s += L(62, 55, 600, 55, 'vio', 2);
      s += poly(fn((x) => [x, 150 + (x > 190 ? Math.min(14, (x - 190) * 0.12) * Math.sin(x / 7) * Math.sin(x / 23) : 0)], 62, 600, 220), 'vio', 1.6);
      let seed = 3; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
      for (let i = 0; i < 70; i++) { const x = 230 + rnd() * 370, sp = Math.min(15, (x - 220) * 0.09); s += '<circle cx="' + x.toFixed(1) + '" cy="' + (150 + (rnd() - 0.5) * 2 * sp).toFixed(1) + '" r="' + (1.5 + rnd() * 2.2).toFixed(1) + '" fill="' + vio + '" fill-opacity="0.45"></circle>'; }
      s += poly(fn((x) => { const puff = (c) => Math.exp(-Math.pow((x - c) / 22, 2)); const a = 12 * (puff(330) + puff(500)); return [x, 245 + a * Math.sin(x / 5)]; }, 62, 600, 300), 'vio', 1.6);
      s += N(45, 288, 'dye injected on the centreline (Reynolds, 1883)');
      return W(700, 300, s);
    };

    D.tf_profiles = () => {
      const yt = 40, yb = 240, yc = 140, x0 = 110; let s = wall(40, yt, 580, 'up') + wall(40, yb, 580, 'down') + cl(40, yc, 580) + L(x0, yt, x0, yb, 'mut', 1.2);
      s += L(x0 + 100, yt, x0 + 100, yb, 'gold', 2.2);
      s += poly(fn((y) => [x0 + 200 * (1 - Math.pow((y - yc) / 100, 2)), y], yt, yb, 60), 'tf', 2.4);
      s += poly(fn((y) => [x0 + 122 * Math.pow(Math.max(0, 1 - Math.abs(y - yc) / 100), 1 / 7), y], yt, yb, 120), 'terr', 2.4);
      s += A(x0, 210, x0 + 98, 210, 'gold', 1.6) + V(x0 + 46, 204, 'U', { c: 'gold', a: 'middle', fs: 14 });
      s += T(x0 + 220, 70, 'inviscid (uniform)', { fs: 11.5, c: 'gold' }) + T(x0 + 220, 94, 'turbulent: ≈ 1/7 power law, u_m ≈ 0.8u_max', { fs: 11.5, c: 'terr' }) + T(x0 + 220, 118, 'laminar: parabola, u_max = 2u_m', { fs: 11.5, c: 'tf' });
      return W(620, 262, s);
    };

    D.tf_pipe_incline = () => {
      const th = -20 * Math.PI / 180, cx = 330, cy = 170;
      const r = (x, y) => [cx + (x - cx) * Math.cos(th) - (y - cy) * Math.sin(th), cy + (x - cx) * Math.sin(th) + (y - cy) * Math.cos(th)];
      const g = (inner) => '<g transform="rotate(-20 ' + cx + ' ' + cy + ')">' + inner + '</g>';
      let s = g(wall(60, 130, 600, 'up') + wall(60, 210, 600, 'down') + cl(60, 170, 600) + cv(290, 130, 80, 80)
        + A(225, 170, 286, 170, 'terr', 2.2) + A(436, 170, 374, 170, 'terr', 2.2) + A(352, 138, 304, 138, 'terr', 1.8) + A(352, 202, 304, 202, 'terr', 1.8)
        + A(90, 150, 170, 150, 'tf', 2.2) + A2(290, 228, 370, 228, 'mut'));
      const p1 = r(222, 162), p2 = r(440, 162), pt = r(330, 128), pl = r(330, 240), pu = r(110, 140);
      s += V(p1[0] - 6, p1[1] - 4, 'p', { c: 'terr', a: 'end' }) + V(p2[0] + 4, p2[1] - 2, 'p + (dp/dx)δl', { c: 'terr', fs: 14 }) + V(pt[0] - 10, pt[1] - 10, 'τ_w', { c: 'terr', fs: 14 }) + V(pl[0], pl[1] + 6, 'δl', { c: 'mtx', fs: 14, a: 'middle' }) + V(pu[0] - 4, pu[1] - 6, 'u_m', { c: 'tf', fs: 14 });
      const c0 = r(330, 170); s += A(c0[0], c0[1], c0[0], c0[1] + 78, 'ink', 1.8) + V(c0[0] + 10, c0[1] + 92, 'weight: ρg per unit volume', { fs: 12.5 });
      const b = r(60, 210); s += L(b[0], b[1], b[0] + 110, b[1], 'mut', 1.2) + P('M ' + (b[0] + 70) + ' ' + b[1] + ' A 70 70 0 0 0 ' + (b[0] + 70 * Math.cos(th)).toFixed(1) + ' ' + (b[1] + 70 * Math.sin(th)).toFixed(1), 'ink', 1.2) + V(b[0] + 80, b[1] - 8, 'θ', { fs: 14 });
      const dD = r(610, 170); s += V(dD[0] + 6, dD[1] + 4, 'D', { c: 'gold' });
      return W(680, 330, s);
    };

    D.tf_hydraulic_d = () => {
      const pts1 = []; for (let i = 0; i <= 180; i++) { const a = i / 180 * 2 * Math.PI; const rr = 74 + 9 * Math.sin(16 * a); pts1.push([150 + rr * Math.cos(a), 120 + rr * Math.sin(a)]); }
      let s = pgon(pts1, 'tint', 'ink', 1.8) + ci(150, 120, 74, 'mut', 1.2, '5 4');
      s += T(290, 126, '≡', { fs: 30, a: 'middle' }) + '<circle cx="420" cy="120" r="56" fill="' + tint + '" stroke="' + ink + '" stroke-width="1.8"></circle>' + A2(364, 120, 476, 120, 'gold') + V(420, 112, 'D_H', { a: 'middle', c: 'gold' });
      s += N(150, 226, 'undulating wall: more wetted perimeter', { a: 'middle' }) + N(420, 226, 'equivalent circular pipe', { a: 'middle' });
      s += V(290, 40, 'D_H = 4 × area / wetted perimeter', { a: 'middle', fs: 14 });
      return W(560, 240, s);
    };

    D.tf_shear_balance = () => {
      let s = wall(30, 150, 210, 'down') + wall(290, 150, 520, 'down') + R(220, 150, 60, 7, 'paper', 'ink', 1.6) + L(250, 157, 250, 232, 'ink', 3) + R(222, 232, 56, 10, 'url(#tf-hatch)', 'ink', 1.2) + N(290, 214, 'cantilever');
      const ys = []; for (let y = 145; y >= 50; y -= 13) ys.push(y);
      s += prof(120, ys, (y) => { const h = 150 - y, d = 82; return h >= d ? 110 : 110 * (h / d) * (2 - h / d); }, 'tf');
      s += A2(80, 150, 80, 68, 'gold') + V(64, 112, 'δ', { c: 'gold' }) + V(238, 58, 'u', { c: 'tf' }) + T(247, 62, '∞', { fs: 11, c: 'tf' });
      s += A(270, 142, 236, 142, 'terr', 2) + V(282, 140, 'τ_w on the disc', { c: 'terr', fs: 13 }) + N(250, 182, 'floating disc, area A, flush with wall', { a: 'start' });
      s += V(360, 70, 'F = τ_w A,  τ_w = μ (du/dy)|_wall', { fs: 13.5 });
      return W(560, 258, s);
    };

    D.tf_chimney = () => {
      const gy = 300, m = 13; let s = L(20, gy, 520, gy, 'ink', 2.2) + R(20, gy, 500, 9, 'url(#tf-hatch)');
      s += pgon([[250, gy], [250, 215], [330, 165], [410, 215], [410, gy]], 'paper', 'ink', 1.6) + R(352, gy - 10 * m, 18, 10 * m, 'tint', 'ink', 1.6);
      s += P('M 330 285 Q 338 270 334 258', 'terr', 2) + P('M 344 286 Q 350 274 346 264', 'gold', 2) + N(300, gy - 6, 'fireplace: still air p₀', { a: 'end' });
      for (let h = 2; h <= 20; h += 2) { const y = gy - h * m; s += A(40, y, 40 + h * 6, y, 'tf', 1.3); }
      s += L(40, gy, 40 + 120, gy - 20 * m, 'tf', 1.2, '4 3') + N(46, 30, 'wind: 0 at ground → 10 m/s at 20 m', { c: 'tf' });
      s += A(361, gy - 30, 361, gy - 10 * m + 8, 'terr', 2) + N(380, gy - 60, 'draught u');
      s += A(372, gy - 10 * m - 14, 440, gy - 10 * m - 14, 'tf', 1.8) + V(446, gy - 10 * m - 9, 'u_w = 5 m/s, p', { c: 'tf', fs: 13 });
      s += A2(470, gy, 470, gy - 10 * m, 'gold') + V(478, gy - 5 * m, '10 m', { c: 'gold', fs: 13 }) + N(361, gy - 10 * m - 30, 'D = 0.1 m', { a: 'middle' });
      return W(540, 318, s);
    };

    D.tf_syringe = () => {
      let s = R(60, 50, 260, 90, 'tint', 'ink', 2) + R(40, 58, 40, 74, 'paper', 'ink', 1.8) + R(80, 58, 14, 74, 'mut', 'ink', 1.2) + L(20, 95, 80, 95, 'ink', 4);
      s += A(0, 95, 36, 95, 'terr', 2.4) + V(2, 84, 'F', { c: 'terr' });
      s += R(320, 89, 260, 12, 'tint', 'ink', 1.6) + A(560, 95, 610, 95, 'tf', 2) + V(616, 100, 'Q', { c: 'tf' });
      s += V(190, 100, 'p_i (barrel)', { a: 'middle', fs: 14 }) + V(612, 128, 'p_e (outlet)', { a: 'end', fs: 13 });
      s += A2(320, 120, 580, 120, 'gold') + V(450, 140, 'L', { a: 'middle', c: 'gold' }) + A2(596, 89, 596, 101, 'gold') + V(604, 82, 'd_n', { c: 'gold', fs: 13 }) + A2(300, 50, 300, 140, 'gold') + V(272, 160, 'd_b', { c: 'gold', fs: 13 });
      s += N(450, 70, 'needle: laminar, Δp = 32μu_m L/d_n²', { a: 'middle', c: 'tf' });
      return W(640, 170, s);
    };
