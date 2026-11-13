    // Topic 6 (Turbulent Flows and Boundary Layers) — professor r1 diagrams.
    // tf_reynolds_decomp and tf_wall_law are used only by 06_tf_turbulent, so they are redefined here.
    // tf_reynolds_dye and tf_profiles are shared with 04_tf_hydraulics, so this topic gets new keys
    // (tf_turb_dye, tf_turb_profiles) instead of changing the shared ones.
    {
      const lab = (x, y, s, o) => T(x, y, s, Object.assign({ fs: 12.5, c: 'mtx' }, o || {}));

      // ---------- 6.1 Reynolds's dye experiment: three regimes, each described ----------
      D.tf_turb_dye = () => {
        const tube = (y) => L(60, y - 20, 610, y - 20, 'ink', 1.6) + L(60, y + 20, 610, y + 20, 'ink', 1.6) + R(60, y - 20, 550, 40, 'tint') + L(40, y, 66, y, 'ink', 2.2);
        let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
        const blob = (x, y, r) => '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r.toFixed(1) + '" fill="' + vio + '" fill-opacity="0.42"></circle>';
        let s = '';
        // laminar
        s += tube(60) + L(66, 60, 610, 60, 'vio', 2.2);
        s += T(60, 28, 'laminar (low Re)', { fs: 13, w: 600 }) + lab(250, 28, 'the dye stays a straight, unbroken filament');
        // transitional: straight filament interrupted by turbulent "puffs" that fill the pipe
        s += tube(165);
        s += L(66, 165, 250, 165, 'vio', 2.2) + L(330, 165, 430, 165, 'vio', 2.2) + L(520, 165, 610, 165, 'vio', 2.2);
        [[290, 40], [475, 45]].forEach((p) => { for (let i = 0; i < 46; i++) { const dx = (rnd() - 0.5) * 2 * p[1], sp = 17 * (1 - Math.abs(dx) / p[1] * 0.5); s += blob(p[0] + dx, 165 + (rnd() - 0.5) * 2 * sp, 1.6 + rnd() * 2.2); } });
        s += T(60, 133, 'transitional', { fs: 13, w: 600 }) + lab(250, 133, 'intermittent turbulent "puffs" between laminar stretches');
        // turbulent: filament breaks up into eddies and fills the whole cross-section
        s += tube(270) + L(66, 270, 150, 270, 'vio', 2.2);
        s += poly(fn((x) => [x, 270 + Math.min(10, (x - 150) * 0.14) * Math.sin((x - 150) / 6)], 150, 215, 60), 'vio', 1.8);
        for (let i = 0; i < 170; i++) { const x = 205 + rnd() * 405, sp = Math.min(18, (x - 200) * 0.16); s += blob(x, 270 + (rnd() - 0.5) * 2 * sp, 1.4 + rnd() * 2.3); }
        [[300, 262, 9], [380, 278, 8], [460, 263, 10], [545, 276, 8]].forEach((c) => { s += PA('M ' + (c[0] - c[2]) + ' ' + c[1] + ' A ' + c[2] + ' ' + c[2] + ' 0 1 1 ' + (c[0] + 3) + ' ' + (c[1] + c[2] - 1), 'vio', 1.3); });
        s += T(60, 238, 'turbulent (high Re)', { fs: 13, w: 600 }) + lab(250, 238, 'eddies tear the filament up; dye fills the whole pipe');
        s += A(560, 315, 610, 315, 'tf', 1.8) + lab(552, 319, 'flow', { a: 'end' }) + lab(60, 319, 'dye injected on the centreline (Reynolds, 1883)');
        return W(640, 330, s);
      };

      // ---------- 6.2 Reynolds decomposition, larger labels, ū marked on the axis ----------
      D.tf_reynolds_decomp = () => {
        const sig = (t) => 13 * (Math.sin(1.7 * t) + 0.7 * Math.sin(4.3 * t + 1) + 0.5 * Math.sin(9.1 * t + 2) + 0.35 * Math.sin(17.3 * t + 0.4) + 0.25 * Math.sin(31 * t));
        const base = 80, top = 20, hgt = 130, wd = 190;
        const panel = (x0, inner, name, form, axisLab, zeroLine) => {
          let p = R(x0, top, wd, hgt, 'paper', 'ink', 1.1) + inner;
          p += L(x0, top + hgt - 14, x0 + wd, top + hgt - 14, 'mut', 1);        // time axis
          p += T(x0 + wd - 6, top + hgt - 20, 't', { fs: 13, serif: true, c: 'mtx', a: 'end' });
          p += T(x0 - 6, base + 5, axisLab, { fs: 14, serif: true, c: zeroLine ? 'mtx' : 'terr', a: 'end' });
          p += V(x0 + wd / 2, top + hgt + 28, name, { a: 'middle', fs: 19 }) + T(x0 + wd / 2, top + hgt + 50, form, { a: 'middle', fs: 12.5, c: 'mtx' });
          return p;
        };
        let s = panel(36, poly(fn((t) => [36 + t * 19, base - sig(t)], 0, 10, 320), 'ink', 1.2) + L(36, base, 226, base, 'terr', 1.6, '5 3'), 'u(t)', 'measured signal', 'ū', false);
        s += T(246, base + 8, '=', { fs: 24, a: 'middle' });
        s += panel(276, L(276, base, 466, base, 'terr', 2.4) + T(462, base - 8, 'constant', { fs: 11.5, c: 'terr', a: 'end' }), 'ū', 'ū = (1/T)∫₀ᵀ u dt', 'ū', false);
        s += T(486, base + 8, '+', { fs: 24, a: 'middle' });
        s += panel(516, poly(fn((t) => [516 + t * 19, base - sig(t)], 0, 10, 320), 'tf', 1.2) + L(516, base, 706, base, 'mut', 1.2, '4 3'), 'u′(t)', '(1/T)∫₀ᵀ u′ dt = 0', '0', true);
        return W(730, 210, s);
      };

      // ---------- 6.2 Control volume for the turbulent pipe momentum balance ----------
      D.tf_turb_cv = () => {
        const yt = 50, yb = 250, yc = 150, r = 62, x1 = 250, x2 = 400;
        let s = wall(40, yt, 620, 'up') + wall(40, yb, 620, 'down') + R(40, yt, 580, yb - yt, 'tint') + cl(40, yc, 620);
        s += cv(x1, yc - r, x2 - x1, 2 * r);
        // pressure forces on the end faces
        s += A(x1 - 60, yc, x1 - 3, yc, 'terr', 2.2) + V(x1 - 66, yc - 8, 'p πr²', { c: 'terr', a: 'end', fs: 14 });
        s += A(x2 + 60, yc, x2 + 3, yc, 'terr', 2.2) + V(x2 + 66, yc - 8, '(p + (dp/dx)δx) πr²', { c: 'terr', fs: 13.5 });
        // retarding stress on the curved surface (both sides)
        s += A(x2 - 30, yc - r + 10, x1 + 30, yc - r + 10, 'terr', 1.8) + V((x1 + x2) / 2, yc - r + 28, 'τ on area 2πr δx', { c: 'terr', a: 'middle', fs: 13 });
        s += A(x2 - 30, yc + r - 10, x1 + 30, yc + r - 10, 'terr', 1.8);
        // momentum flux out through the curved surface
        [285, 325, 365].forEach((x) => { s += A(x, yc - r, x, yc - r - 30, 'vio', 1.6); });
        s += V(x2 + 8, yc - r - 22, 'ρ u′v′', { c: 'vio', fs: 15 });
        // dimensions
        s += A2(225, yc, 225, yc - r, 'gold') + V(212, yc - r / 2 + 5, 'r', { c: 'gold', a: 'end' });
        s += A2(600, yc, 600, yt, 'gold') + V(588, yc - 46, 'R', { c: 'gold', a: 'end' });
        s += A2(x1, yb - 20, x2, yb - 20, 'mut') + V((x1 + x2) / 2, yb - 26, 'δx', { c: 'mtx', fs: 13, a: 'middle' });
        // coordinates
        s += A(60, yc + 70, 110, yc + 70, 'ink', 1.4) + V(116, yc + 75, 'x, u', { fs: 13 }) + A(60, yc + 70, 60, yc + 26, 'ink', 1.4) + V(66, yc + 28, 'r, v', { fs: 13 });
        s += lab(40, yb + 34, 'steady in the mean, fully developed: end-face momentum fluxes cancel', { fs: 15 });
        return W(680, 300, s);
      };

      // ---------- 6.2 Physical picture of the Reynolds stress ----------
      D.tf_reynolds_stress = () => {
        const yw = 40, yc = 250, x0 = 70, H = yc - yw;
        const ubar = (y) => 150 * Math.pow(Math.max(0, (y - yw) / H), 1 / 7);
        let s = wall(30, yw, 660, 'up') + R(30, yw, 630, H, 'tint') + cl(30, yc, 660);
        const ys = []; for (let y = 52; y <= 246; y += 16) ys.push(y);
        s += L(x0, yw, x0, yc, 'mut', 1.2) + prof(x0, ys, ubar, 'tf');
        s += V(x0 + 156, yc - 8, 'ū(r)', { c: 'tf', fs: 14 }) + A(30, yc - 10, 30, yw + 30, 'ink', 1.3) + V(36, yw + 34, 'r', { fs: 13 });
        // parcel A: from the fast core outward (v' > 0) -> arrives too fast (u' > 0)
        s += ci(330, 200, 13, 'tf', 1.6, null, 'paper') + A(330, 186, 330, 112, 'vio', 2.2) + V(342, 160, 'v′ > 0', { c: 'vio', fs: 14 });
        s += lab(362, 210, 'fast fluid from the core moves out:', { fs: 12, c: 'ink' }) + lab(362, 226, 'it arrives faster than its new layer: u′ > 0', { fs: 11.5 });
        // parcel B: from the slow near-wall layer inward (v' < 0) -> arrives too slow (u' < 0)
        s += ci(600, 66, 13, 'tf', 1.6, null, 'paper') + A(600, 80, 600, 154, 'vio', 2.2) + V(588, 124, 'v′ < 0', { c: 'vio', fs: 14, a: 'end' });
        s += lab(250, 64, 'slow fluid from near the wall moves in:', { fs: 12, c: 'ink' }) + lab(250, 80, 'it arrives slower than its new layer: u′ < 0', { fs: 11.5 });
        s += T(345, 280, 'both cases: u′v′ > 0  ⇒  ρ u′v′ (averaged) > 0: x-momentum flows out to the wall', { fs: 12.5, a: 'middle', c: 'ink', w: 600 });
        s += lab(345, 298, '(v measured from the wall towards the axis instead: same physics, sign flips, u′v′ < 0)', { a: 'middle', fs: 11.5 });
        return W(690, 308, s);
      };

      // ---------- 6.5 Structure of the turbulent boundary layer (semi-log) ----------
      D.tf_wall_law = () => {
        const X = (yp) => 74 + lg(yp) / 4 * 480, Y = (up) => 272 - up / 30 * 222;
        let s = axes(74, 272, 480, 222, '', '') + T(26, 165, 'ū/u*', { serif: true, fs: 14, a: 'middle', rot: -90 });
        [0, 1, 2, 3, 4].forEach((k) => { s += tick(X(Math.pow(10, k)), 272, '10' + sup(k)); });
        [5, 30].forEach((v) => { s += L(X(v), 272, X(v), 277, 'ink', 1.2) + T(X(v), 289, String(v), { fs: 11, a: 'middle', c: 'terr', w: 600 }); });
        [0, 10, 20, 30].forEach((v) => { s += tick(74, Y(v), String(v), true); });
        s += T(554, 308, 'yu*/ν  (log scale)', { serif: true, fs: 14, a: 'end' });
        // experimental-like composite (Reichardt's fit) with a gentle wake rise in the outer region
        const comp = (yp) => 2.5 * Math.log(1 + 0.4 * yp) + 7.8 * (1 - Math.exp(-yp / 11) - (yp / 11) * Math.exp(-yp / 3)) + (yp > 400 ? 3.2 * Math.pow((lg(yp) - lg(400)) / (4 - lg(400)), 2) : 0);
        s += poly(fn((t) => [X(Math.pow(10, t)), Y(comp(Math.pow(10, t)))], 0, 4, 140), 'ink', 2.6);
        s += poly(fn((t) => [X(Math.pow(10, t)), Y(Math.pow(10, t))], 0, lg(18), 40), 'tf', 1.7, '6 4');
        s += poly(fn((t) => [X(Math.pow(10, t)), Y(2.5 * Math.log(Math.pow(10, t)) + 5.5)], 0.75, 4, 50), 'terr', 1.7, '6 4');
        [5, 30, 1000].forEach((v) => { s += L(X(v), 40, X(v), 272, 'mut', 1, '3 3'); });
        s += N((74 + X(5)) / 2, 34, 'viscous', { a: 'middle', fs: 11 }) + N((74 + X(5)) / 2, 47, 'sublayer', { a: 'middle', fs: 11 }) + N((X(5) + X(30)) / 2, 34, 'buffer', { a: 'middle', fs: 11 }) + N((X(30) + X(1000)) / 2, 34, 'inner (log-law) region', { a: 'middle', fs: 11 }) + N((X(1000) + 554) / 2, 34, 'outer', { a: 'middle', fs: 11 });
        // labels kept clear of the curves
        s += V(80, Y(15.5), 'ū/u* = yu*/ν', { c: 'tf', fs: 13.5 }) + A(150, Y(14.3), X(12.5) - 4, Y(12.5) + 2, 'tf', 1.1);
        s += V(X(60), Y(9.5), 'ū/u* = 2.5 ln(yu*/ν) + 5.5', { c: 'terr', fs: 13.5 }) + A(X(150), Y(11.2), X(150), Y(2.5 * Math.log(150) + 5.5) + 6, 'terr', 1.1);
        s += N(X(1150), Y(19.5), 'outer: shape set by', { fs: 10.5 }) + N(X(1150), Y(18), 'geometry and dp/dx', { fs: 10.5 });
        s += N(X(1.15), Y(27), 'solid line: measured profile', { fs: 10.5, c: 'ink' });
        return W(620, 316, s);
      };

      // ---------- 6.6 Same flow rate: laminar parabola vs 1/7th power law ----------
      D.tf_turb_profiles = () => {
        const yt = 40, yb = 240, yc = 140, x0 = 110, um = 100; let s = wall(40, yt, 600, 'up') + wall(40, yb, 600, 'down') + cl(40, yc, 600) + L(x0, yt, x0, yb, 'mut', 1.2);
        s += L(x0 + um, yt, x0 + um, yb, 'gold', 1.6, '6 4');
        s += poly(fn((y) => [x0 + 2 * um * (1 - Math.pow((y - yc) / 100, 2)), y], yt, yb, 60), 'tf', 2.6);
        s += poly(fn((y) => [x0 + (um / (49 / 60)) * Math.pow(Math.max(0, 1 - Math.abs(y - yc) / 100), 1 / 7), y], yt, yb, 160), 'terr', 2.6);
        s += A(x0, 222, x0 + um - 2, 222, 'gold', 1.6) + V(x0 + um / 2, 216, 'u_m', { c: 'gold', a: 'middle', fs: 14 });
        s += V(x0 + 2 * um + 8, yc - 6, 'u_max = 2u_m', { c: 'tf', fs: 13 }) + V(x0 + um / (49 / 60) + 6, yc + 22, '1.22u_m', { c: 'terr', fs: 13 });
        s += T(40, 270, 'laminar: parabola, u_max = 2u_m', { fs: 13, c: 'tf' }) + T(330, 270, 'turbulent: 1/7 law, u_m = (49/60)u_max', { fs: 13, c: 'terr' });
        s += T(40, 290, 'gold dashed: the mean velocity u_m, the same for both (same Q)', { fs: 12, c: 'gold' });
        return W(620, 300, s);
      };

      // ---------- 6.6 Why the 1/7th law cannot give the wall stress ----------
      D.tf_seventh_vs_wall = () => {
        const X = (yp) => 74 + yp / 60 * 470, Y = (up) => 262 - up / 20 * 220;
        let s = axes(74, 262, 470, 220, '', 'ū/u*') + T(544, 292, 'yu*/ν', { serif: true, fs: 14, a: 'end' });
        [0, 10, 20, 30, 40, 50, 60].forEach((v) => { s += tick(X(v), 262, String(v)); }); [0, 5, 10, 15, 20].forEach((v) => { s += tick(74, Y(v), String(v), true); });
        const comp = (yp) => 2.5 * Math.log(1 + 0.4 * yp) + 7.8 * (1 - Math.exp(-yp / 11) - (yp / 11) * Math.exp(-yp / 3));
        s += poly(fn((yp) => [X(yp), Y(comp(yp))], 0, 60, 120), 'ink', 2.6);
        s += poly(fn((yp) => [X(yp), Y(yp)], 0, 16, 10), 'tf', 1.7, '6 4');
        s += poly(fn((t) => { const yp = Math.pow(t, 7); return [X(yp), Y(8.74 * t)]; }, 0, Math.pow(60, 1 / 7), 160), 'terr', 2.2);
        s += V(X(17), Y(5.5), 'real profile: ū/u* = yu*/ν at the wall,', { fs: 13, c: 'ink' }) + V(X(17), Y(4.2), 'finite slope  ⇒  τ_w = μ dū/dy', { fs: 13, c: 'ink' });
        s += A(X(16.5), Y(5.4), X(5.5) + 6, Y(comp(5.5)), 'ink', 1.1);
        s += V(X(2.5), Y(19.2), '1/7 law: ū/u* = 8.74(yu*/ν)' + sup('1/7'), { fs: 13, c: 'terr' }) + V(X(2.5), Y(17.9), 'vertical at the wall: dū/dy → ∞', { fs: 13, c: 'terr' });
        s += N(X(36), Y(11.3), 'away from the wall the two agree', { fs: 11 }) + N(X(36), Y(10.2), '(within ~3% for 30 < yu*/ν < 1000)', { fs: 11 });
        return W(620, 300, s);
      };
    }
