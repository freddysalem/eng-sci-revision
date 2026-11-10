    // ===================== Topics 9–12 · Compressible flow =====================
    // generic two-panel duct with a wave/shock: before → after a Galilean transformation
    const twoPanel = (panels, o) => { o = o || {}; let s = '';
      panels.forEach((pn, i) => { const x0 = 10 + i * 345, w = 320, xm = x0 + w / 2;
        if (!o.open) s += R(x0, 30, w, 8, 'url(#tf-hatch)') + L(x0, 38, x0 + w, 38, 'ink', 1.6) + R(x0, 192, w, 8, 'url(#tf-hatch)') + L(x0, 192, x0 + w, 192, 'ink', 1.6);
        s += o.curved ? P('M ' + (xm - 10) + ' 40 Q ' + (xm + 18) + ' 115 ' + (xm - 10) + ' 190', 'terr', 2.4) : L(xm, 38, xm, 192, 'terr', 2.4);
        if (pn.cv) s += R(xm - 22, 46, 44, 140, null, 'gold', 1.4, '5 4');
        pn.left.forEach((t, j) => { s += V(x0 + 18, 70 + j * 22, t, { fs: 13.5 }); }); pn.right.forEach((t, j) => { s += V(xm + 28, 70 + j * 22, t, { fs: 13.5 }); });
        const ar = (xa, a) => a ? (a.dir > 0 ? A(xa, 166, xa + 58, 166, 'tf', 2) : A(xa + 58, 166, xa, 166, 'tf', 2)) + V(xa + 29, 160, a.label, { c: 'tf', fs: 13, a: 'middle' }) : '';
        s += ar(x0 + 40, pn.lArrow) + ar(xm + 46, pn.rArrow);
        if (pn.wave) s += A(xm, 182, xm + (pn.wave.dir || 1) * 46, 182, 'terr', 2) + V(xm + (pn.wave.dir || 1) * 52, 186, pn.wave.label, { c: 'terr', fs: 13, a: (pn.wave.dir || 1) > 0 ? 'start' : 'end' });
        s += T(xm, 18, pn.title, { a: 'middle', fs: 11.5, c: 'mtx' }); });
      return W(680, 210, s); };

    D.tf_galilean = () => twoPanel([
      { title: 'lab frame: wave moves right at a', left: ['u = u', 'p₂, ρ₂, T₂'], right: ['u = 0', 'p₁, ρ₁, T₁'], lArrow: { dir: 1, label: 'u' }, wave: { dir: 1, label: 'a' } },
      { title: 'wave frame: add a from right to left', left: ['u = a − u', 'p₂, ρ₂, T₂'], right: ['u = a', 'p₁, ρ₁, T₁'], lArrow: { dir: -1, label: 'a − u' }, rArrow: { dir: -1, label: 'a' } }]);

    D.tf_weak_wave = () => twoPanel([
      { title: 'lab frame: weak wave moves into still gas', left: ['δu', 'p + δp', 'ρ + δρ'], right: ['u = 0', 'p', 'ρ'], lArrow: { dir: 1, label: 'δu' }, wave: { dir: 1, label: 'a' } },
      { title: 'wave frame: stationary, control volume', left: ['a − δu', 'p + δp', 'ρ + δρ'], right: ['u = a', 'p', 'ρ'], lArrow: { dir: -1, label: 'a − δu' }, rArrow: { dir: -1, label: 'a' }, cv: true }]);

    D.tf_wavefronts = () => {
      let s = '';
      const pts1 = [['A', 150, 120], ['B', 170, 80], ['C', 190, 40], ['D', 210, 0]];
      pts1.forEach((p, i) => { if (p[2]) s += ci(p[1], 130, p[2], ['terr', 'vio', 'tf'][i], 1.5); });
      pts1.forEach((p) => { s += dot(p[1], 130, 'ink', 3) + T(p[1], 150, p[0], { a: 'middle', fs: 11, w: 600 }); });
      s += A(212, 130, 252, 130, 'ink', 1.6) + T(150, 272, 'subsonic, u < a: waves stay ahead', { a: 'middle', fs: 11.5, w: 600 });
      const pts2 = [['A', 400, 90], ['B', 460, 60], ['C', 520, 30], ['D', 580, 0]];
      pts2.forEach((p, i) => { if (p[2]) s += ci(p[1], 130, p[2], ['terr', 'vio', 'tf'][i], 1.5); });
      pts2.forEach((p) => { s += dot(p[1], 130, 'ink', 3) + T(p[1], 150, p[0], { a: 'middle', fs: 11, w: 600 }); });
      const th = Math.asin(0.5), Lc = 250; s += L(580, 130, 580 - Lc * Math.cos(th), 130 - Lc * Math.sin(th), 'ink', 1.6) + L(580, 130, 580 - Lc * Math.cos(th), 130 + Lc * Math.sin(th), 'ink', 1.6);
      s += P('M 540 130 A 40 40 0 0 1 545.4 110', 'ink', 1.2) + V(528, 124, 'θ', { fs: 13, a: 'end' }) + A(582, 130, 622, 130, 'ink', 1.6);
      s += N(600, 40, 'zone of silence', { a: 'middle' }) + N(380, 30, 'Mach cone', { a: 'middle' }) + V(470, 272, 'supersonic: sin θ = aΔt/uΔt = 1/M', { a: 'middle', fs: 13 });
      s += N(150, 18, 'circles: waves sent at A, B, C (radii 3aΔt, 2aΔt, aΔt)', { a: 'middle' });
      return W(680, 284, s);
    };

    D.tf_cp_mach = () => {
      const X = (m) => 70 + m * 380, Y = (v) => 250 - (v - 1) / 0.3 * 200;
      let s = axes(70, 250, 380, 200, 'M', '(p₀ − p)/½ρu²');
      [0, 0.2, 0.4, 0.6, 0.8, 1].forEach((m) => { s += tick(X(m), 250, String(m)); }); [1, 1.1, 1.2, 1.3].forEach((v) => { s += tick(70, Y(v), v.toFixed(1), true); });
      s += poly(fn((m) => [X(m), Y(m < 1e-3 ? 1 : (Math.pow(1 + 0.2 * m * m, 3.5) - 1) / (0.7 * m * m))], 0, 1, 80), 'terr', 2.4) + L(X(0), Y(1), X(1), Y(1), 'tf', 1.4, '6 4');
      [[0.2, '≈1%', 34], [0.3, '≈2%', 62]].forEach((q) => { const v = (Math.pow(1 + 0.2 * q[0] * q[0], 3.5) - 1) / (0.7 * q[0] * q[0]); s += dot(X(q[0]), Y(v), 'terr', 3.5) + L(X(q[0]), Y(v), X(q[0]), Y(v) - q[2], 'mut', 1, '3 3') + N(X(q[0]), Y(v) - q[2] - 4, 'M = ' + q[0] + ': ' + q[1], { a: 'middle' }); });
      s += N(X(0.62), Y(1) - 8, 'incompressible (Bernoulli) = 1', { c: 'tf', a: 'middle' }) + N(X(0.98), Y(1.275) - 6, 'compressible', { a: 'end', c: 'terr' });
      return W(480, 280, s);
    };

    D.tf_duct_cv = () => {
      const up = (x) => 70 - (x - 60) * 40 / 460, lo = (x) => 190 + (x - 60) * 40 / 460;
      let s = L(60, up(60), 520, up(520), 'ink', 2) + L(60, lo(60), 520, lo(520), 'ink', 2) + pgon([[60, up(60)], [520, up(520)], [520, lo(520)], [60, lo(60)]], 'tint');
      s += pgon([[240, up(240)], [330, up(330)], [330, lo(330)], [240, lo(240)]], null, 'gold', 1.5) + cl(40, 130, 540) + A(30, 130, 110, 130, 'tf', 2.2);
      s += A(285, up(285) - 20, 285, up(285) + 2, 'terr', 1.5) + A(285, lo(285) + 20, 285, lo(285) - 2, 'terr', 1.5) + V(292, up(285) - 22, '(p + ½dp)dA', { c: 'terr', fs: 12.5 });
      s += V(232, 110, 'A', { a: 'end', fs: 14 }) + V(232, 132, 'p, u, ρ', { a: 'end', fs: 13 }) + V(338, 110, 'A + dA', { fs: 13 }) + V(338, 132, 'p + dp, u + du', { fs: 13 }) + V(338, 154, 'ρ + dρ', { fs: 13 });
      s += A2(240, 236, 330, 236, 'mut') + V(285, 252, 'δx', { a: 'middle', c: 'mtx', fs: 13 });
      return W(600, 262, s);
    };

    D.tf_reservoir_nozzle = () => {
      let s = P('M 220 80 L 220 40 L 40 40 L 40 220 L 220 220 L 220 180', 'ink', 2.2) + R(42, 42, 176, 176, 'tint') + pgon([[220, 80], [360, 116], [360, 144], [220, 180]], 'tint');
      s += P('M 220 80 C 280 84, 330 110, 360 116', 'ink', 2.2) + P('M 220 180 C 280 176, 330 150, 360 144', 'ink', 2.2);
      s += V(130, 110, 'p₀, T₀', { a: 'middle', fs: 16 }) + N(130, 136, 'large reservoir: u ≈ 0', { a: 'middle' });
      s += L(360, 106, 360, 154, 'terr', 1.4, '3 3') + V(360, 98, 'throat t: p_t, M_t ≤ 1', { a: 'middle', fs: 13, c: 'terr' });
      s += A(368, 130, 460, 130, 'tf', 2.2) + V(480, 120, 'back pressure', { fs: 12.5, c: 'mtx' }) + V(480, 140, 'p_b', { fs: 14 });
      s += N(300, 244, 'choked when p_b/p₀ ≤ (2/(γ+1))^{γ/(γ−1)} = 0.528 (air)', { a: 'middle', c: 'terr' });
      return W(580, 256, s);
    };

    D.tf_mixer = () => {
      const line = (y, lab) => R(30, y - 8, 230, 16, 'tint', 'ink', 1.6) + L(120, y - 8, 120, y - 30, 'ink', 1.4) + ci(120, y - 42, 12, 'ink', 1.4, null, 'paper') + T(120, y - 38, 'P', { a: 'middle', fs: 11, w: 600 }) + ci(160, y, 10, 'ink', 1.4, null, 'paper') + L(153, y - 7, 167, y + 7, 'ink', 1.3) + L(153, y + 7, 167, y - 7, 'ink', 1.3) + T(28, y + 26, lab, { fs: 12 }) + A(40, y, 100, y, 'tf', 1.8);
      let s = line(60, 'methane: R = 520, γ = 1.31') + line(190, 'air: R = 287, γ = 1.40');
      s += pgon([[260, 52], [300, 58], [300, 62], [260, 68]], 'tint', 'ink', 1.4) + pgon([[260, 182], [300, 188], [300, 192], [260, 198]], 'tint', 'ink', 1.4);
      s += P('M 300 60 C 340 60, 340 112, 380 116 M 300 190 C 340 190, 340 132, 380 128', 'ink', 1.6) + R(380, 108, 110, 28, 'tint', 'ink', 1.6);
      s += P('M 490 110 C 530 96, 560 112, 580 122 C 560 132, 530 148, 490 134', 'terr', 1.8, 'gold', null, 0.4) + N(300, 40, 'choked nozzles, A_t = 10 mm²', { a: 'middle', c: 'terr' }) + N(435, 158, 'burner at 0.11 MPa', { a: 'middle' }) + N(120, 230, 'P: regulator setting p₀', { a: 'start' });
      return W(600, 244, s);
    };

    D.tf_tank_leak = () => {
      let s = R(60, 40, 240, 150, 'tint', 'ink', 2.2, null, 22) + L(300, 112, 300, 128, 'paper', 4) + V(180, 100, 'V,  m(t)', { a: 'middle', fs: 15 }) + V(180, 126, 'p₀(t), T₀', { a: 'middle', fs: 15 });
      s += P('M 302 114 L 380 96 M 302 120 L 390 120 M 302 126 L 380 144', 'tf', 1.6) + A(310, 120, 392, 120, 'tf', 2) + V(400, 112, 'outside p_a', { fs: 13, c: 'mtx' }) + V(400, 136, 'choked hole A_t', { fs: 13, c: 'terr' });
      s += V(180, 222, 'ṁ = −0.0404 A_t p₀/√T₀ = dm/dt', { a: 'middle', fs: 13.5 });
      return W(520, 236, s);
    };

    // converging–diverging nozzle outline: half-height as a function of x
    const cdh = (x) => x < 260 ? 22 + 30 * Math.pow((x - 260) / 120, 2) : 22 + 44 * Math.pow((x - 260) / 300, 2);
    const cdNozzle = (yc, x0, x1) => { const up = fn((x) => [x, yc - cdh(x)], x0, x1, 60), lo = fn((x) => [x, yc + cdh(x)], x0, x1, 60);
      return pgon(up.concat(lo.slice().reverse()), 'tint') + poly(up, 'ink', 2.2) + poly(lo, 'ink', 2.2); };

    D.tf_cd_nozzle = () => {
      let s = R(20, 30, 120, 160, 'tint', 'ink', 2) + cdNozzle(110, 140, 560) + cl(20, 110, 590);
      s += V(80, 106, 'p₀, T₀', { a: 'middle', fs: 15 }) + N(80, 128, 'chamber, u ≈ 0', { a: 'middle' });
      s += L(260, 78, 260, 142, 'terr', 1.4, '3 3') + V(260, 70, 'throat: M = 1, A*', { a: 'middle', c: 'terr', fs: 13 });
      s += V(200, 166, 'M < 1', { a: 'middle', c: 'tf', fs: 13 }) + V(420, 166, 'M > 1', { a: 'middle', c: 'tf', fs: 13 }) + A(300, 110, 400, 110, 'tf', 2);
      s += V(575, 34, 'exit: p_e, M_e, A_e', { a: 'end', fs: 13 }) + N(300, 214, 'converging → accelerates subsonic flow; diverging → accelerates supersonic flow', { a: 'middle' });
      return W(620, 224, s);
    };

    D.tf_laval_regimes = () => {
      const Aof = (x) => x < 0.35 ? 1 + 12 * Math.pow(x - 0.35, 2) : 1 + 3.0 * Math.pow(x - 0.35, 2);
      const AM = (m) => (1 / m) * Math.pow((1 + 0.2 * m * m) / 1.2, 3), pr = (m) => Math.pow(1 + 0.2 * m * m, -3.5);
      const Msolve = (a, sup) => { let lo = sup ? 1 : 1e-4, hi = sup ? 6 : 1; for (let i = 0; i < 60; i++) { const mm = (lo + hi) / 2; const f = AM(mm) - a; if (sup ? f > 0 : f < 0) hi = mm; else lo = mm; } return (lo + hi) / 2; };
      const shock = (m1) => { const m2 = Math.sqrt((1 + 0.2 * m1 * m1) / (1.4 * m1 * m1 - 0.2)); const r = Math.pow((2.4 * m1 * m1) / (2 + 0.4 * m1 * m1), 3.5) / Math.pow((2.8 / 2.4) * m1 * m1 - 0.4 / 2.4, 2.5); return { m2, r, p21: 1 + (2.8 / 2.4) * (m1 * m1 - 1) }; };
      const X = (x) => 80 + x * 440, Y = (p) => 392 - p * 240, yc = 70;
      let s = pgon(fn((x) => [X(x), yc - 16 * Aof(x)], 0, 1, 50).concat(fn((x) => [X(x), yc + 16 * Aof(x)], 1, 0, 50)), 'tint') + poly(fn((x) => [X(x), yc - 16 * Aof(x)], 0, 1, 50), 'ink', 2) + poly(fn((x) => [X(x), yc + 16 * Aof(x)], 0, 1, 50), 'ink', 2) + L(X(0.35), 10, X(0.35), 400, 'mut', 1, '6 4') + T(X(0.35), 8, 'throat', { a: 'middle', fs: 10.5, c: 'mtx' });
      s += A(64, 392, 64, 140, 'ink', 1.3) + T(58, 134, 'p/p₀', { serif: true, fs: 13, a: 'end' }) + L(64, 392, 530, 392, 'ink', 1.3) + T(530, 408, 'x', { serif: true, fs: 13 }) + tick(64, Y(1), '1', true) + tick(64, Y(0.528), '0.528', true) + L(64, Y(0.528), X(0.35), Y(0.528), 'mut', 1, '3 3');
      const curve = (fpx, c, w, dash) => poly(fn((x) => [X(x), Y(fpx(x))], 0, 1, 90), c, w, dash);
      s += curve((x) => pr(Msolve(Aof(x) / 0.9, false)), 'tf', 1.6);
      s += curve((x) => pr(Msolve(Aof(x), false)), 'tf', 2.2);
      s += poly(fn((x) => [X(x), Y(pr(Msolve(Aof(x), x > 0.35)))], 0, 1, 90), 'ink', 2.2);
      const xs = 0.66, m1 = Msolve(Aof(xs), true), sk = shock(m1);
      s += poly(fn((x) => [X(x), Y(sk.r * pr(Msolve(Aof(x) * sk.r, false)))], xs, 1, 40), 'terr', 2) + L(X(xs), Y(pr(m1)), X(xs), Y(pr(m1) * sk.p21), 'terr', 2.2);
      const me = Msolve(Aof(1), true), ske = shock(me), p3 = pr(me), p4 = p3 * ske.p21, p2 = pr(Msolve(Aof(1), false));
      s += L(X(1), Y(p3), X(1), Y(p4), 'terr', 2.2) + T(X(xs) + 4, Y(pr(m1) * sk.p21) - 6, 'shock in nozzle', { fs: 10.5, c: 'terr' });
      const lab = (p, t) => T(X(1) + 6, Y(p) + 4, t, { serif: true, fs: 13 });
      s += lab(1, 'p₀') + lab(p2, 'p₂') + lab(p4, 'p₄') + lab(p3, 'p₃');
      const br = (pa, pb, t, c) => L(590, Y(pa) + 2, 590, Y(pb) - 2, col(c || 'mtx'), 1.6) + T(598, (Y(pa) + Y(pb)) / 2 + 4, t, { fs: 10.5, c: c || 'mtx' });
      s += br(1, p2, 'all subsonic', 'tf') + br(p2, p4, 'shock inside', 'terr') + br(p4, p3, 'over-expanded', 'ink') + br(p3, 0.01, 'under-expanded', 'vio');
      s += T(X(0.04), Y(0.08), 'design (fully expanded): exits at p₃', { fs: 10.5, c: 'ink' });
      return W(700, 414, s);
    };

    D.tf_laval_tap = () => {
      let s = cdNozzle(100, 60, 480) + A(10, 100, 50, 100, 'tf', 2.2) + N(20, 80, 'gas flow', { c: 'tf' }) + V(260, 66, 'throat t', { a: 'middle', fs: 13, c: 'terr' });
      s += L(260, 100 + cdh(260), 260, 200, 'ink', 1.8) + L(260, 200, 520, 200, 'ink', 1.8) + L(520, 200, 520, 100, 'ink', 1.8) + L(520, 100, 488, 100, 'ink', 2.4);
      s += R(360, 186, 60, 28, 'paper', 'ink', 1.4) + T(390, 204, 'Δp', { a: 'middle', fs: 11, w: 600 }) + N(390, 232, 'pressure measurement device: compares p_t with outlet p₀ₑ', { a: 'middle' });
      s += N(540, 96, 'outlet', { c: 'mtx' }) + N(540, 112, 'stagnation probe');
      return W(640, 244, s);
    };

    D.tf_laval_shock_pitot = () => {
      let s = cdNozzle(100, 60, 520) + A(10, 100, 50, 100, 'tf', 2.2) + L(430, 100 - cdh(430), 430, 100 + cdh(430), 'terr', 2.6) + V(430, 100 - cdh(430) - 8, 'shock at A₁', { a: 'middle', c: 'terr', fs: 13 });
      s += L(462, 100, 500, 100, 'ink', 2.2) + L(500, 100, 500, 210, 'ink', 1.6) + L(260, 100 + cdh(260), 260, 210, 'ink', 1.6);
      s += P('M 260 210 L 260 230 Q 260 240 270 240 L 490 240 Q 500 240 500 230 L 500 210', 'ink', 1.6) + R(262, 224, 236, 14, 'mut') + L(250, 224, 270, 224, 'gold', 1.6) + L(490, 224, 510, 224, 'gold', 1.6) + N(380, 216, 'mercury levels equal', { a: 'middle', c: 'gold' });
      s += V(260, 72, 'throat: p_t', { a: 'middle', fs: 13 }) + V(520, 84, 'Pitot: p₀₂', { a: 'end', fs: 13 }) + V(330, 140, 'M > 1', { c: 'tf', fs: 12.5, a: 'middle' }) + V(476, 140, 'M < 1', { c: 'tf', fs: 12.5, a: 'middle' });
      return W(580, 256, s);
    };

    D.tf_steepening = () => {
      const panel = (x0, title, comp) => { let s = axes(x0 + 30, 180, 260, 140, 'distance', 'p') + T(x0 + 160, 22, title, { a: 'middle', fs: 12, w: 600 });
        const stair = (xa, dx, c, w, dash) => { const p = []; for (let i = 0; i < 6; i++) { const x = xa + i * dx, y = comp ? 70 + i * 16 : 166 - i * 16; p.push([x, y], [x + dx, y]); if (i < 5) p.push([x + dx, comp ? y + 16 : y - 16]); } return poly(p, c, w, dash); };
        if (comp) { s += stair(x0 + 50, 26, 'mut', 1.4, '4 3') + stair(x0 + 150, 8, 'terr', 1.6) + L(x0 + 250, 70, x0 + 250, 150, 'terr', 2.6) + L(x0 + 250, 150, x0 + 280, 150, 'terr', 2.6) + L(x0 + 222, 70, x0 + 250, 70, 'terr', 2.6) + A(x0 + 120, 54, x0 + 210, 54, 'ink', 1.4) + N(x0 + 165, 44, 'later waves faster: they catch up', { a: 'middle' }) + N(x0 + 266, 64, 'shock', { a: 'middle', c: 'terr' }); }
        else { s += stair(x0 + 70, 10, 'mut', 1.4, '4 3') + stair(x0 + 130, 26, 'tf', 1.8) + A(x0 + 120, 54, x0 + 210, 54, 'ink', 1.4) + N(x0 + 165, 44, 'later waves slower: the fan spreads', { a: 'middle' }) + N(x0 + 130, 112, 'no strong expansion wave', { a: 'middle', c: 'tf' }); }
        return s; };
      return W(680, 212, panel(10, 'compression → shock', true) + panel(350, 'expansion → spreads out', false));
    };

    D.tf_normal_oblique = () => {
      let s = L(170, 40, 170, 200, 'terr', 2.6) + A(60, 120, 166, 120, 'ink', 2.2) + V(70, 110, 'M₁ > 1', { fs: 14 }) + A(174, 120, 236, 120, 'ink', 2.2) + V(200, 110, 'M₂ < 1', { fs: 14 }) + T(170, 226, 'normal shock: ⟂ to the flow', { a: 'middle', fs: 11.5, w: 600 });
      const P0 = [380, 210], P1 = [540, 30], sd = [P1[0] - P0[0], P1[1] - P0[1]], len = Math.hypot(sd[0], sd[1]), sh = [sd[0] / len, sd[1] / len], n = [-sh[1], sh[0]];
      const Q = [P0[0] + (210 - 128) / (-sd[1]) * sd[0], 128]; s += L(P0[0], P0[1], P1[0], P1[1], 'terr', 2.6);
      s += A(Q[0] - 120, Q[1], Q[0] - 2, Q[1], 'ink', 2.2) + V(Q[0] - 116, Q[1] - 10, 'M₁', { fs: 14 });
      const m1n = 120 * n[0]; s += A(Q[0] - m1n * n[0], Q[1] - m1n * n[1], Q[0], Q[1], 'vio', 1.8) + V(Q[0] - m1n * n[0] - 4, Q[1] - m1n * n[1] + 16, 'M₁ₙ > 1', { c: 'vio', fs: 13, a: 'middle' });
      const ang = Math.atan2(sh[1], sh[0]) * 0.32, d2 = [Math.cos(ang), Math.sin(ang)]; s += A(Q[0] + 2, Q[1], Q[0] + 100 * d2[0], Q[1] + 100 * d2[1], 'ink', 2.2) + V(Q[0] + 104 * d2[0], Q[1] + 104 * d2[1] - 4, 'M₂', { fs: 14 });
      s += A(Q[0], Q[1], Q[0] + 34 * n[0], Q[1] + 34 * n[1], 'vio', 1.8) + V(Q[0] + 40 * n[0], Q[1] + 40 * n[1] + 14, 'M₂ₙ < 1', { c: 'vio', fs: 13 });
      s += T(470, 226, 'oblique shock: turns the flow; M₁, M₂ can both be > 1', { a: 'middle', fs: 11.5, w: 600 });
      return W(660, 240, s);
    };

    D.tf_shock_cv = () => {
      let s = wall(40, 40, 580, 'up') + wall(40, 200, 580, 'down') + L(310, 40, 310, 200, 'terr', 2.6) + R(250, 58, 120, 124, null, 'gold', 1.5, '5 4');
      ['u₁', 'p₁, ρ₁, T₁', 'p₀₁, s₁', 'T₀'].forEach((t, i) => { s += V(70, 80 + i * 26, t, { fs: 14 }); }); ['u₂', 'p₂, ρ₂, T₂', 'p₀₂, s₂', 'T₀ (same)'].forEach((t, i) => { s += V(400, 80 + i * 26, t, { fs: 14 }); });
      s += A(180, 182, 246, 182, 'tf', 2) + A(374, 182, 430, 182, 'tf', 2) + T(310, 226, 'stationary normal shock (Galilean-transform it if it moves)', { a: 'middle', fs: 11, c: 'mtx' });
      return W(620, 236, s);
    };

    D.tf_entropy_m = () => {
      const f = (m) => Math.log(((2.8 * m * m - 0.4) / 2.4) * Math.pow((2 + 0.4 * m * m) / (2.4 * m * m), 1.4));
      const X = (m) => 70 + (m - 0.6) / 2 * 400, top = f(2.6), Y = (v) => 200 - v / top * 160;
      let s = R(X(0.6), 40, X(1) - X(0.6), 210, 'url(#tf-hatch)') + axes(70, 250, 400, 210, 'M₁', '(s₂ − s₁)/C_v') + L(70, Y(0), 470, Y(0), 'mut', 1.2);
      [0.6, 1, 1.5, 2, 2.5].forEach((m) => { s += tick(X(m), 250, String(m)); }); s += tick(70, Y(0), '0', true);
      s += poly(fn((m) => [X(m), Y(f(m))], 0.6, 2.6, 80), 'terr', 2.4) + N(X(0.8), 60, 's falls:', { a: 'middle' }) + N(X(0.8), 74, 'impossible', { a: 'middle' }) + N(X(2), Y(f(2)) + 26, 's rises: allowed', { a: 'middle', c: 'terr' }) + N(X(1.15), Y(0) - 10, 'flat at M = 1: weak waves ≈ isentropic');
      return W(500, 282, s);
    };

    const shockPanels = (a, b) => twoPanel([a, b], { curved: true, open: true });
    D.tf_moving_shock = () => shockPanels(
      { title: 'lab frame: shock moves into still gas at c', left: ['p₂, T₂, ρ₂'], right: ['p₁, T₁, ρ₁', 'u = 0'], lArrow: { dir: 1, label: 'u = u_a' }, wave: { dir: 1, label: 'c' } },
      { title: 'shock frame: add c from right to left', left: ['p₂, T₂, ρ₂'], right: ['p₁, T₁, ρ₁'], lArrow: { dir: -1, label: 'u₂ = c − u_a' }, rArrow: { dir: -1, label: 'u₁ = c' } });

    D.tf_shock_tube = () => {
      let s = A(60, 230, 600, 230, 'ink', 1.3) + T(600, 246, 'position x', { fs: 11, a: 'end', c: 'mtx' }) + A(60, 230, 60, 30, 'ink', 1.3) + T(52, 40, 't', { serif: true, fs: 14, a: 'end' });
      [150, 185, 220, 255].forEach((x) => { s += L(300, 230, x, 40, 'tf', 1.3); }); s += N(170, 30, 'expansion fan', { a: 'middle', c: 'tf' });
      s += L(300, 230, 460, 40, 'vio', 1.6, '6 4') + N(470, 34, 'contact surface', { c: 'vio' }) + L(300, 230, 590, 70, 'terr', 2.4) + N(590, 60, 'shock', { a: 'end', c: 'terr' });
      s += R(60, 258, 540, 30, 'tint', 'ink', 1.6) + L(300, 254, 300, 292, 'ink', 2.6) + T(180, 278, 'high pressure p_h', { a: 'middle', fs: 11.5 }) + T(450, 278, 'low pressure p_l', { a: 'middle', fs: 11.5 }) + N(300, 306, 'diaphragm', { a: 'middle' });
      return W(640, 314, s);
    };

    D.tf_shock_tube_frame = () => twoPanel([
      { title: 'lab frame: shock runs into the low-pressure gas', left: ['T₂, p₂ = p_h'], right: ['T₁, p₁ = p_l', 'u = 0'], lArrow: { dir: 1, label: 'u = u_h' }, wave: { dir: 1, label: 'c' } },
      { title: 'shock frame', left: ['T₂, p₂ = p_h'], right: ['T₁, p₁ = p_l'], lArrow: { dir: -1, label: 'u₂ = c − u_h' }, rArrow: { dir: -1, label: 'u₁ = c' } }]);

    D.tf_valve_shock = () => {
      let s = twoPanel([
        { title: 'lab frame: valve shut, shock runs back at c', left: ['p₁, T₁'], right: ['p₂, T₂', 'u = 0'], lArrow: { dir: 1, label: 'u_a' }, wave: { dir: -1, label: 'c' } },
        { title: 'shock frame: add c from left to right', left: ['p₁, T₁'], right: ['p₂, T₂'], lArrow: { dir: 1, label: 'u₁ = u_a + c' }, rArrow: { dir: 1, label: 'u₂ = c' } }]);
      return s.replace('</svg>', R(326, 38, 8, 154, 'ink') + R(671, 38, 8, 154, 'ink') + '</svg>');
    };
