    // ===================== Topic 1 · Energy, fluids & conservation — professor r1 redraws =====================
    {
      // ---- solid vs fluid: strain γ marked, time stamps, larger right-hand labels ----
      D.tf_solid_fluid = () => {
        const blk = (x, yb, off, fillC, lab) => {
          let s = pgon([[x, yb], [x + 70, yb], [x + 70 + off, yb - 70], [x + off, yb - 70]], fillC, 'ink', 1.6);
          if (off) {
            s += A(x + off + 18, yb - 80, x + off + 54, yb - 80, 'terr', 1.8) + A(x + 52, yb + 9, x + 16, yb + 9, 'terr', 1.8) + V(x + off + 58, yb - 76, 'τ', { c: 'terr', fs: 14 });
            s += L(x, yb, x, yb - 46, 'mut', 1.5, '4 3');
            const a = Math.atan(off / 70), r = 34;
            s += P('M ' + x + ' ' + (yb - r) + ' A ' + r + ' ' + r + ' 0 0 1 ' + (x + r * Math.sin(a)).toFixed(1) + ' ' + (yb - r * Math.cos(a)).toFixed(1), 'gold', 3.2);
            s += V(x + 5 + r * Math.sin(a / 2) * 0.55, yb - r - 6, lab, { c: 'gold', fs: 16, w: 700 });
          }
          return s;
        };
        let s = T(20, 70, 'Solid', { fs: 14, w: 600 }) + T(20, 214, 'Fluid', { fs: 14, w: 600, c: 'tf' });
        s += N(125, 28, 't = 0', { a: 'middle', fs: 12 }) + N(270, 28, 't₁', { a: 'middle', fs: 12 }) + N(440, 28, 't₂ > t₁', { a: 'middle', fs: 12 });
        s += blk(90, 136, 0, 'paper') + A(172, 100, 208, 100, 'mut', 1.4) + blk(222, 136, 26, 'paper', 'γ') + A(330, 100, 366, 100, 'mut', 1.4) + blk(390, 136, 26, 'paper', 'γ');
        s += blk(90, 280, 0, 'tint') + A(172, 244, 208, 244, 'mut', 1.4) + blk(222, 280, 26, 'tint', 'γ₁') + A(330, 244, 366, 244, 'mut', 1.4) + blk(390, 280, 70, 'tint', 'γ₂');
        s += N(125, 160, 'unloaded', { a: 'middle', fs: 12.5 }) + N(270, 160, 'stress applied', { a: 'middle', fs: 12.5 }) + N(450, 160, 'same strain γ', { a: 'middle', fs: 12.5 });
        s += N(125, 304, 'unloaded', { a: 'middle', fs: 12.5 }) + N(270, 304, 'stress applied', { a: 'middle', fs: 12.5 }) + N(470, 304, 'γ₂ > γ₁: still deforming', { a: 'middle', fs: 12.5 });
        s += T(640, 84, 'stress ∝ strain', { fs: 13, c: 'mtx', a: 'middle' }) + V(640, 116, 'τ ∝ γ', { a: 'middle', fs: 22 });
        s += T(640, 228, 'stress ∝ strain rate', { fs: 13, c: 'tf', a: 'middle' }) + V(640, 262, 'τ ∝ dγ/dt', { a: 'middle', fs: 22, c: 'tf' });
        return W(740, 318, s);
      };

      // ---- entry length: label no longer claims a single 50–100 D figure ----
      D.tf_entry = () => {
        const yt = 60, yb = 200, yc = 130; let s = wall(40, yt, 660, 'up') + wall(40, yb, 660, 'down') + cl(40, yc, 660);
        const ys = []; for (let y = 68; y <= 192; y += 15.5) ys.push(y);
        s += prof(70, ys, () => 56, 'tf', false);
        const dev = (y) => { const eta = Math.abs(y - yc) / 70, d = 0.62; const q = 1 - eta; return q >= d ? 68 : 68 * (1 - Math.pow((d - q) / d, 2)); };
        s += prof(230, ys, dev, 'tf');
        s += prof(500, ys, (y) => 92 * (1 - Math.pow((y - yc) / 70, 2)), 'tf');
        s += poly(fn((x) => [x, yt + 68 * Math.sqrt(Math.min(1, (x - 50) / 380))], 50, 430, 50), 'tf', 1.3, '5 4');
        s += poly(fn((x) => [x, yb - 68 * Math.sqrt(Math.min(1, (x - 50) / 380))], 50, 430, 50), 'tf', 1.3, '5 4');
        s += A2(50, 232, 430, 232, 'ink') + T(240, 252, 'entry length l_e', { a: 'middle', fs: 12 });
        s += T(240, 270, 'laminar 0.058 Re·D · turbulent 0.693 Re^{1/4}·D', { a: 'middle', fs: 11, c: 'mtx' });
        s += N(70, 46, 'uniform inflow', { a: 'start' }) + N(230, 46, 'developing', { a: 'middle' }) + N(545, 46, 'fully developed', { a: 'middle', c: 'tf' });
        s += N(300, 95, 'boundary layers grow inwards', { a: 'middle', c: 'tf' });
        return W(700, 284, s);
      };

      // ---- Bernoulli along a streamline: forces on a small element ----
      D.tf_streamline_elem = () => {
        const cx = 300, cy = 150, al = 25 * Math.PI / 180, c = Math.cos(al), sn = Math.sin(al);
        const g = (x, y) => [cx + (x - cx) * c + (y - cy) * sn, cy - (x - cx) * sn + (y - cy) * c];   // local (s along +x) -> screen, rotated up by α
        const Lg = (a, b, col_, w, dash) => { const p = g(a[0], a[1]), q = g(b[0], b[1]); return L(p[0].toFixed(1), p[1].toFixed(1), q[0].toFixed(1), q[1].toFixed(1), col_, w, dash); };
        const Ag = (a, b, col_, w) => { const p = g(a[0], a[1]), q = g(b[0], b[1]); return A(p[0].toFixed(1), p[1].toFixed(1), q[0].toFixed(1), q[1].toFixed(1), col_, w); };
        const A2g = (a, b, col_) => { const p = g(a[0], a[1]), q = g(b[0], b[1]); return A2(p[0].toFixed(1), p[1].toFixed(1), q[0].toFixed(1), q[1].toFixed(1), col_); };
        let s = '';
        // streamline through the element
        s += Lg([60, 150], [550, 150], 'tf', 1.3, '7 4') + Ag([500, 150], [560, 150], 'tf', 1.8);
        const tip = g(566, 150); s += V(tip[0] + 4, tip[1] - 2, 's', { c: 'tf' });
        s += pgon([g(230, 118), g(370, 118), g(370, 182), g(230, 182)], 'tint', 'tf', 1.6);
        // pressure forces on the end faces
        s += Ag([150, 150], [226, 150], 'terr', 2.2) + Ag([450, 150], [374, 150], 'terr', 2.2);
        let p = g(150, 150); s += V(p[0] - 6, p[1] + 26, 'p δA', { c: 'terr', a: 'middle', fs: 14 });
        p = g(450, 150); s += V(p[0] + 6, p[1] - 14, '(p + δp) δA', { c: 'terr', a: 'middle', fs: 14 });
        // length δs
        s += A2g([230, 104], [370, 104], 'mut'); p = g(300, 94); s += V(p[0], p[1], 'δs', { a: 'middle', fs: 14 });
        // weight
        s += A(cx, cy, cx, cy + 92, 'ink', 2) + V(cx + 8, cy + 92, 'ρ g δA δs', { fs: 14 });
        // angle α with horizontal
        s += L(cx, cy, cx + 150, cy, 'mut', 1.1, '4 3');
        s += P('M ' + (cx + 110) + ' ' + cy + ' A 110 110 0 0 0 ' + (cx + 110 * c).toFixed(1) + ' ' + (cy - 110 * sn).toFixed(1), 'ink', 1.2) + V(cx + 116, cy - 18, 'α', { fs: 14 });
        s += N(470, 236, 'δz = δs sin α', { fs: 12 }) + N(470, 254, 'element area δA, speed u', { fs: 12 });
        s += N(40, 40, 'steady · inviscid: no shear on the sides', { fs: 12, c: 'tf' });
        return W(640, 270, s);
      };

      // ---- Pitot-static tube: larger text, clear holes, levels marked ----
      D.tf_pitot = () => {
        let s = A(20, 100, 112, 100, 'tf', 2.2) + V(44, 88, 'U', { c: 'tf', fs: 17 });
        // probe body: outer wall + inner (total-pressure) tube
        s += P('M 140 84 L 400 84 Q 412 84 412 96 L 412 196', 'ink', 1.8) + P('M 140 116 L 380 116 L 380 196', 'ink', 1.8) + P('M 140 84 A 16 16 0 0 0 140 116', 'ink', 1.8);
        s += P('M 128 96 L 392 96 L 392 196', 'ink', 1.2) + P('M 128 104 L 384 104 L 384 196', 'ink', 1.2);
        s += dot(126, 100, 'terr', 4.5);
        s += ci(270, 84, 4, 'vio', 1.8, null, 'paper') + ci(270, 116, 4, 'vio', 1.8, null, 'paper');
        // dimensions and labels for the probe
        s += L(126, 50, 126, 76, 'mut', 1) + L(270, 50, 270, 76, 'mut', 1) + A2(126, 58, 270, 58, 'mut') + T(198, 46, '≈ 8 tube diameters', { a: 'middle', fs: 14, c: 'mtx' });
        s += L(126, 110, 126, 132, 'terr', 1) + T(118, 152, 'nose hole → p₀', { a: 'middle', fs: 14, c: 'terr' });
        s += L(270, 121, 270, 132, 'vio', 1) + T(282, 152, '4–8 side holes → p_s', { a: 'middle', fs: 14, c: 'vio' });
        // lines to the manometer
        s += P('M 388 196 L 388 214 L 300 214 L 300 240', 'terr', 1.8) + P('M 402 196 L 402 214 L 470 214 L 470 240', 'vio', 1.8);
        // manometer: water above mercury
        s += R(293, 240, 14, 62, 'tint') + R(463, 240, 14, 24, 'tint');
        s += P('M 292 302 L 292 320 Q 292 340 312 340 L 458 340 Q 478 340 478 320 L 478 264 L 462 264 L 462 318 Q 462 324 456 324 L 314 324 Q 308 324 308 318 L 308 302 Z', null, 1, 'mtx');
        s += P('M 292 240 L 292 320 Q 292 340 312 340 L 458 340 Q 478 340 478 320 L 478 240', 'ink', 1.8) + P('M 308 240 L 308 318 Q 308 324 314 324 L 456 324 Q 462 324 462 318 L 462 240', 'ink', 1.8);
        s += L(286, 302, 314, 302, 'ink', 2) + L(456, 264, 484, 264, 'ink', 2);
        s += L(314, 302, 530, 302, 'mut', 1, '4 3') + L(484, 264, 530, 264, 'mut', 1, '4 3') + A2(520, 264, 520, 302, 'terr') + V(528, 290, 'ΔH', { c: 'terr', fs: 17 });
        s += T(284, 256, 'p₀', { a: 'end', fs: 16, c: 'terr' }) + T(284, 300, 'lower level', { a: 'end', fs: 13, c: 'terr' }) + T(284, 316, '(higher pressure)', { a: 'end', fs: 13, c: 'terr' });
        s += T(486, 254, 'p_s', { fs: 16, c: 'vio' }) + T(566, 262, 'higher level', { fs: 13, c: 'vio' }) + T(566, 278, 'on the p_s side', { fs: 13, c: 'vio' });
        s += T(385, 364, 'mercury (ρ_m) below, water (ρ) above it', { a: 'middle', fs: 14, c: 'mtx' });
        // results
        s += V(570, 104, 'U = √(2(p₀ − p_s)/ρ)', { a: 'middle', fs: 17 }) + V(570, 138, 'p₀ − p_s = (ρ_m − ρ) g ΔH', { a: 'middle', fs: 17 });
        s += T(570, 164, '≈ ρ_m g ΔH if the lines hold a gas', { a: 'middle', fs: 13, c: 'mtx' });
        return W(700, 378, s);
      };

      // ---- U-tube manometer: the pressure balance used in the derivation ----
      D.tf_manometer = () => {
        const xl = 140, xr = 300, yt = 70, yX = 240, yR = 180, yb = 292; let s = '';
        s += R(xl - 7, yt, 14, yX - yt, 'tint') + R(xr - 7, yt, 14, yR - yt, 'tint');
        s += P('M ' + (xl - 8) + ' ' + yX + ' L ' + (xl - 8) + ' ' + (yb - 20) + ' Q ' + (xl - 8) + ' ' + (yb + 8) + ' ' + (xl + 20) + ' ' + (yb + 8) + ' L ' + (xr - 20) + ' ' + (yb + 8) + ' Q ' + (xr + 8) + ' ' + (yb + 8) + ' ' + (xr + 8) + ' ' + (yb - 20)
          + ' L ' + (xr + 8) + ' ' + yR + ' L ' + (xr - 8) + ' ' + yR + ' L ' + (xr - 8) + ' ' + (yb - 20) + ' Q ' + (xr - 8) + ' ' + (yb - 8) + ' ' + (xr - 20) + ' ' + (yb - 8) + ' L ' + (xl + 20) + ' ' + (yb - 8) + ' Q ' + (xl + 8) + ' ' + (yb - 8) + ' ' + (xl + 8) + ' ' + (yb - 20) + ' L ' + (xl + 8) + ' ' + yX + ' Z', null, 1, 'mtx');
        s += P('M ' + (xl - 8) + ' ' + yt + ' L ' + (xl - 8) + ' ' + (yb - 20) + ' Q ' + (xl - 8) + ' ' + (yb + 8) + ' ' + (xl + 20) + ' ' + (yb + 8) + ' L ' + (xr - 20) + ' ' + (yb + 8) + ' Q ' + (xr + 8) + ' ' + (yb + 8) + ' ' + (xr + 8) + ' ' + (yb - 20) + ' L ' + (xr + 8) + ' ' + yt, 'ink', 1.8);
        s += P('M ' + (xl + 8) + ' ' + yt + ' L ' + (xl + 8) + ' ' + (yb - 20) + ' Q ' + (xl + 8) + ' ' + (yb - 8) + ' ' + (xl + 20) + ' ' + (yb - 8) + ' L ' + (xr - 20) + ' ' + (yb - 8) + ' Q ' + (xr - 8) + ' ' + (yb - 8) + ' ' + (xr - 8) + ' ' + (yb - 20) + ' L ' + (xr - 8) + ' ' + yt, 'ink', 1.8);
        // taps
        s += A(xl, yt - 34, xl, yt - 4, 'terr', 1.8) + V(xl + 10, yt - 26, 'p₀', { c: 'terr', fs: 17 }) + A(xr, yt - 34, xr, yt - 4, 'vio', 1.8) + V(xr + 10, yt - 26, 'p_s', { c: 'vio', fs: 17 });
        s += L(xl - 60, yt, xr + 20, yt, 'mut', 1, '3 3') + T(xl - 56, yt - 8, 'tapping level', { fs: 12, c: 'mtx', a: 'end' });
        // datum X–X through the lower mercury surface
        s += L(xl - 60, yX, xr + 60, yX, 'gold', 1.4, '7 4') + dot(xl, yX, 'gold', 4) + dot(xr, yX, 'gold', 4) + V(xl - 18, yX - 8, 'X', { c: 'gold', a: 'end', fs: 17 }) + V(xr + 16, yX - 8, 'X′', { c: 'gold', fs: 17 });
        s += L(xr - 12, yR, xr + 12, yR, 'ink', 2) + L(xr + 12, yR, xr + 46, yR, 'mut', 1, '4 3');
        s += A2(xl - 48, yt, xl - 48, yX, 'ink') + V(xl - 56, (yt + yX) / 2 + 5, 'a', { a: 'end', fs: 17 });
        s += A2(xr + 40, yt, xr + 40, yR, 'mut') + T(xr + 48, (yt + yR) / 2 + 5, 'a − ΔH', { fs: 14, c: 'mtx' });
        s += A2(xr + 40, yR, xr + 40, yX, 'terr') + V(xr + 48, (yR + yX) / 2 + 6, 'ΔH', { c: 'terr', fs: 17 });
        s += T(xl + 14, 140, 'water ρ', { fs: 14, c: 'tf' }) + T((xl + xr) / 2, yb + 32, 'mercury ρ_m', { a: 'middle', fs: 14, c: 'mtx' });
        const ex = 440;
        s += T(ex, 70, 'X, X′: same level in the same', { fs: 13, c: 'gold' }) + T(ex, 88, 'continuous liquid ⇒ p_X = p_X′', { fs: 13, c: 'gold' });
        s += V(ex, 136, 'p_X = p₀ + ρ g a', { fs: 17 });
        s += V(ex, 172, 'p_X′ = p_s + ρ g (a − ΔH)', { fs: 17 }) + V(ex + 56, 198, '+ ρ_m g ΔH', { fs: 17 });
        s += V(ex, 248, 'p₀ − p_s = (ρ_m − ρ) g ΔH', { fs: 18, c: 'terr' });
        return W(720, 340, s);
      };

      // ---- roof tile: pressure force normal to the roof, weight resolved ----
      D.tf_rooftile = () => {
        const x0 = 60, y0 = 282, d = [Math.cos(Math.PI / 6), -Math.sin(Math.PI / 6)], n = [-0.5, -0.866];
        const at = (sx, k) => [x0 + sx * d[0] + k * n[0], y0 + sx * d[1] + k * n[1]];
        const f = (p) => [p[0].toFixed(1), p[1].toFixed(1)];
        let s = L(x0, y0, x0 + 470 * d[0], y0 + 470 * d[1], 'ink', 2.4) + N(x0 + 474 * d[0] + 6, y0 + 474 * d[1] + 4, 'line of roof', { fs: 13 });
        s += pgon([at(150, 2), at(330, 2), at(330, 16), at(150, 16)], 'terr', 'ink', 1.2);
        s += L(x0, y0, x0 + 100, y0, 'mut', 1.2) + P('M ' + (x0 + 56) + ' ' + y0 + ' A 56 56 0 0 0 ' + (x0 + 56 * d[0]).toFixed(1) + ' ' + (y0 + 56 * d[1]).toFixed(1), 'ink', 1.3) + V(x0 + 64, y0 - 9, 'θ', { fs: 15 });
        // wind along the roof
        [52, 80].forEach((k) => { const a = f(at(0, k)), b = f(at(105, k)); s += A(a[0], a[1], b[0], b[1], 'tf', 1.8); });
        const ul = at(-6, 84); s += V(ul[0] - 4, ul[1] - 4, 'u', { c: 'tf', fs: 15, a: 'end' });
        const c = at(240, 9), cc = f(c);
        // forces
        const pn = f([c[0] + 84 * n[0], c[1] + 84 * n[1]]); s += A(cc[0], cc[1], pn[0], pn[1], 'terr', 2.4) + V(+pn[0] - 6, +pn[1] - 6, 'ΔpA (normal)', { c: 'terr', a: 'end', fs: 16 });
        s += A(cc[0], cc[1], cc[0], (c[1] + 84).toFixed(1), 'ink', 2) + V(c[0] + 8, c[1] + 100, 'mg = Atρ_t g', { fs: 16 });
        const mc = f([c[0] - 72.7 * n[0], c[1] - 72.7 * n[1]]); s += A(cc[0], cc[1], mc[0], mc[1], 'mut', 1.6) + V(+mc[0] + 6, +mc[1] + 14, 'mg cos θ', { c: 'mtx', fs: 15 });
        const ms = f([c[0] - 42 * d[0], c[1] - 42 * d[1]]); s += A(cc[0], cc[1], ms[0], ms[1], 'mut', 1.6) + V(220, 160, 'mg sin θ', { c: 'mtx', fs: 15, a: 'end' });
        // pressures and tile label (kept clear of the roof line)
        s += T(24, 36, 'above the tile: p = p_a − ρu²/2', { fs: 14.5, c: 'tf' });
        s += T(372, 252, 'under the tile (still air): p = p_a', { fs: 14, c: 'mtx' });
        const tl = f(at(320, 0)); s += L(tl[0], tl[1], 400, 160, 'mut', 1) + T(404, 166, 'tile: area A, thickness t', { fs: 14, c: 'mtx' });
        s += T(372, 280, 'lift-off normal to roof: ΔpA = mg cos θ', { fs: 14, c: 'terr' });
        return W(720, 300, s);
      };

      // ---- Pelton bucket: 50° marked on both limbs, sign convention shown ----
      D.tf_pelton = () => {
        let s = R(205, 22, 210, 256, null, 'gold', 1.5, '5 4') + N(410, 16, 'control volume (moves with bucket)', { a: 'end', c: 'gold', fs: 13 });
        s += P('M 60 150 L 304 150', 'tf', 16, null, null);
        s += P('M 300 150 C 336 142, 326 100, 292 90 L 238 26', 'tf', 13) + P('M 300 150 C 336 158, 326 200, 292 210 L 238 274', 'tf', 13);
        s += P('M 336 66 Q 296 108, 322 150 Q 296 192, 336 234', 'ink', 3.4);
        s += A(70, 150, 190, 150, 'ink', 2) + T(70, 134, 'ṁ at v₁ − u', { serif: true, fs: 14 });
        s += A(272, 66, 236, 24, 'ink', 2) + T(120, 44, 'ṁ/2 at v₁ − u', { serif: true, fs: 14 }) + A(272, 234, 236, 276, 'ink', 2) + T(120, 268, 'ṁ/2 at v₁ − u', { serif: true, fs: 14 });
        s += L(292, 90, 236, 90, 'mut', 1, '4 3') + P('M 262 90 A 30 30 0 0 1 273 67', 'gold', 1.6) + T(240, 82, '50°', { fs: 14, c: 'gold', a: 'end' });
        s += L(292, 210, 236, 210, 'mut', 1, '4 3') + P('M 262 210 A 30 30 0 0 0 273 233', 'gold', 1.6) + T(240, 228, '50°', { fs: 14, c: 'gold', a: 'end' });
        s += A(345, 150, 440, 150, 'terr', 2.4) + V(448, 155, 'F', { c: 'terr' }) + N(448, 172, 'force on bucket', { fs: 13 });
        s += A(40, 296, 96, 296, 'ink', 1.6) + T(102, 300, '+x (jet direction)', { fs: 13, c: 'mtx' });
        s += T(482, 56, 'turned 130° ⇒ leaves at 50° to −x', { fs: 14, c: 'mtx' });
        s += T(482, 94, 'in:  +ṁ(v₁ − u)', { fs: 14.5 }) + T(482, 120, 'out: 2 × (ṁ/2)(v₁ − u)(−cos 50°)', { fs: 14.5 });
        s += T(482, 200, 'ΣF on fluid = out − in', { fs: 14.5 }) + T(482, 226, 'F on bucket = in − out', { fs: 14.5, c: 'terr' }) + T(482, 252, '= ṁ(v₁ − u)(1 + cos 50°)', { fs: 14.5, c: 'terr' });
        return W(800, 310, s);
      };

      // ---- SFEE control volume with the sign convention ----
      D.tf_sfee_cv = () => {
        let s = '';
        s += L(30, 290, 690, 290, 'mut', 1.2, '6 4') + N(36, 284, 'datum z = 0', { fs: 13 });
        s += R(40, 186, 170, 40, 'tint', 'ink', 1.4) + R(480, 96, 180, 32, 'tint', 'ink', 1.4);
        s += P('M 210 186 L 260 120 L 450 90 L 480 96 L 480 128 L 450 140 L 380 250 L 260 250 L 210 226 Z', 'ink', 1.8, 'paper');
        s += T(330, 186, 'device', { a: 'middle', fs: 14, c: 'mtx' }) + T(330, 204, '(pump, turbine, nozzle…)', { a: 'middle', fs: 12, c: 'mtx' });
        s += R(160, 66, 360, 216, null, 'gold', 1.5, '5 4') + N(164, 60, 'control volume', { a: 'start', c: 'gold', fs: 13 });
        s += A(56, 206, 140, 206, 'tf', 2.2) + A(520, 112, 610, 112, 'tf', 2.2);
        s += T(42, 154, '1 (in)', { fs: 14, w: 600 }) + T(42, 174, 'p₁, u₁, z₁, h₁', { fs: 14 }) + T(530, 62, '2 (out)', { fs: 14, w: 600 }) + T(530, 82, 'p₂, u₂, z₂, h₂', { fs: 14 });
        s += A2(30, 290, 30, 206, 'mut') + V(22, 252, 'z₁', { a: 'end', fs: 14 }) + A2(706, 290, 706, 112, 'mut') + V(714, 206, 'z₂', { fs: 14 });
        s += A(300, 20, 300, 86, 'terr', 2.2) + V(310, 34, 'Q̇ > 0 : heat INTO the fluid', { c: 'terr', fs: 15 });
        s += L(330, 250, 330, 300, 'ink', 4) + A(370, 318, 340, 282, 'vio', 2.2) + V(378, 322, 'Ẇ_s > 0 : shaft work done ON the fluid', { c: 'vio', fs: 15 });
        s += T(378, 342, '(pump/fan/compressor > 0, turbine < 0)', { fs: 13, c: 'mtx' });
        s += T(526, 222, 'Δ( ) = ( )₂ − ( )₁', { fs: 16, w: 600 }) + T(526, 248, '= out − in', { fs: 16, w: 600 });
        return W(740, 352, s);
      };
    
      // ---- fire-hose nozzle: control volume with pressure forces ----
      D.tf_nozzle_cv = () => {
        let s = '';
        s += pgon([[60, 70], [200, 70], [420, 115], [460, 115], [460, 145], [420, 145], [200, 190], [60, 190]], 'tint');
        s += R(460, 115, 170, 30, 'tint');
        s += P('M 60 70 L 200 70 L 420 115 L 460 115', 'ink', 2.4) + P('M 60 190 L 200 190 L 420 145 L 460 145', 'ink', 2.4);
        s += cl(40, 130, 650);
        s += R(150, 56, 316, 148, null, 'gold', 1.5, '5 4') + N(154, 50, 'control volume (the water in the nozzle)', { c: 'gold', fs: 12.5 });
        s += A(70, 96, 136, 96, 'tf', 2.2) + V(72, 88, 'u₁', { c: 'tf', fs: 16 }) + A(480, 130, 610, 130, 'tf', 2.2) + V(560, 120, 'u₂', { c: 'tf', fs: 16 });
        s += A(76, 164, 146, 164, 'terr', 2.6) + V(74, 158, 'p₁A₁', { c: 'terr', fs: 16, a: 'end' }) + N(30, 216, 'inlet face: gauge p₁ pushes IN', { fs: 13, c: 'terr' });
        s += N(470, 178, 'exit jet at atmosphere:', { fs: 13 }) + N(470, 196, 'p₂ = 0 gauge ⇒ no pressure force', { fs: 13 });
        s += A(360, 26, 270, 26, 'terr', 2.4) + V(372, 32, 'F = force of nozzle on water (unknown)', { c: 'terr', fs: 15 });
        s += A(40, 246, 96, 246, 'ink', 1.6) + T(102, 250, '+x (flow direction)', { fs: 13, c: 'mtx' });
        s += V(300, 246, 'p₁A₁ + F = ṁ(u₂ − u₁)', { fs: 17 });
        return W(700, 262, s);
      };
    }
