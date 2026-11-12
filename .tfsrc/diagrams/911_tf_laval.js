    // Topic 11 (Converging–Diverging (Laval) Nozzles) — professor r1 diagrams.
    // tf_laval_regimes and tf_laval_tap are used only by 11_tf_laval (overridden here);
    // tf_cd_nozzle is shared with Topic 10, so Ex 2 / Q5 get their own new keys.
    {
      const g14 = 1.4;
      const AMg = (m, g) => (1 / m) * Math.pow((2 / (g + 1)) * (1 + (g - 1) / 2 * m * m), (g + 1) / (2 * (g - 1)));
      const prg = (m, g) => Math.pow(1 + (g - 1) / 2 * m * m, -g / (g - 1));
      const Msol = (a, sup) => { let lo = sup ? 1 : 1e-4, hi = sup ? 8 : 1; for (let i = 0; i < 70; i++) { const mm = (lo + hi) / 2; const f = AMg(mm, g14) - a; if (sup ? f > 0 : f < 0) hi = mm; else lo = mm; } return (lo + hi) / 2; };
      const nshock = (m1) => { const m2 = Math.sqrt((1 + 0.2 * m1 * m1) / (1.4 * m1 * m1 - 0.2)); const p21 = (1 + 1.4 * m1 * m1) / (1 + 1.4 * m2 * m2); return { m2, p21, r: prg(m1, g14) / prg(m2, g14) * p21 }; };
      const bisect = (f, lo, hi) => { let flo = f(lo); for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2, fm = f(m); if ((fm > 0) === (flo > 0)) { lo = m; flo = fm; } else hi = m; } return (lo + hi) / 2; };
      // generic C–D outline: half-height h(x) given throat x, inlet/throat/exit half-heights
      const cdOutline = (yc, x0, xt, x1, h0, ht, h1) => { const h = (x) => x < xt ? ht + (h0 - ht) * Math.pow((xt - x) / (xt - x0), 2) : ht + (h1 - ht) * Math.pow((x - xt) / (x1 - xt), 1.6);
        const up = fn((x) => [x, yc - h(x)], x0, x1, 70), lo = fn((x) => [x, yc + h(x)], x0, x1, 70);
        return { h, s: pgon(up.concat(lo.slice().reverse()), 'tint') + poly(up, 'ink', 2.2) + poly(lo, 'ink', 2.2) }; };

      // Pressure distributions for the six regimes, computed for air in a nozzle with A_e/A_t = 2 (Example 3).
      D.tf_laval_regimes = () => {
        const AR = 2.0, xt = 0.35;
        const Aof = (x) => x < xt ? 1 + 1.6 * Math.pow((xt - x) / xt, 2) : 1 + (AR - 1) * Math.pow((x - xt) / (1 - xt), 2);
        const pr = (m) => prg(m, g14);
        const X = (x) => 66 + x * 380, Y = (p) => 400 - p * 250, yc = 72;
        let s = pgon(fn((x) => [X(x), yc - 20 * Aof(x)], 0, 1, 60).concat(fn((x) => [X(x), yc + 20 * Aof(x)], 1, 0, 60)), 'tint')
          + poly(fn((x) => [X(x), yc - 20 * Aof(x)], 0, 1, 60), 'ink', 2) + poly(fn((x) => [X(x), yc + 20 * Aof(x)], 0, 1, 60), 'ink', 2) + cl(X(0) - 6, yc, X(1) + 10);
        s += L(X(xt), 12, X(xt), 402, 'mut', 1, '6 4') + T(X(xt), 10, 'throat, A_t', { a: 'middle', fs: 14, c: 'mtx' }) + T(X(1), 10, 'exit, A_e = 2A_t', { a: 'middle', fs: 14, c: 'mtx' });
        s += A(56, 402, 56, 136, 'ink', 1.3) + T(50, 132, 'p/p₀', { serif: true, fs: 13, a: 'end' }) + L(56, 402, 460, 402, 'ink', 1.3) + T(460, 418, 'x', { serif: true, fs: 13 });
        s += tick(56, Y(1), '1', true) + tick(56, Y(0.528), '0.528', true) + L(56, Y(0.528), X(xt), Y(0.528), 'mut', 1, '3 3');
        const curve = (f, x0, x1, c, w, dash) => poly(fn((x) => [X(x), Y(f(x))], x0, x1, 90), c, w, dash);
        // (a) unchoked venturi, (b) p_b = p2: just choked, subsonic both sides
        s += curve((x) => pr(Msol(Aof(x) / 0.9, false)), 0, 1, 'tf', 1.5);
        s += curve((x) => pr(Msol(Aof(x), false)), 0, 1, 'tf', 2.4);
        // (e) design: supersonic after the throat
        s += curve((x) => pr(Msol(Aof(x), x > xt)), 0, 1, 'ink', 2.2);
        // (c) shock inside: p_b = 0.70 p0 -> shock at A_s/A_t = 1.51
        const As = 1.51, xs = xt + (1 - xt) * Math.sqrt((As - 1) / (AR - 1)), m1 = Msol(As, true), sk = nshock(m1);
        s += curve((x) => sk.r * pr(Msol(Aof(x) * sk.r, false)), xs, 1, 'terr', 2) + L(X(xs), Y(pr(m1)), X(xs), Y(pr(m1) * sk.p21), 'terr', 2.2);
        s += T(X(xs) - 6, Y(0.53), 'normal shock', { a: 'end', fs: 13.5, c: 'terr' }) + T(X(xs) - 6, Y(0.53) + 16, 'A_s = 1.51A_t', { a: 'end', fs: 13.5, c: 'terr' }) + T(X(xs) - 6, Y(0.53) + 32, '(p_b = 0.70p₀)', { a: 'end', fs: 13.5, c: 'terr' });
        // (d) shock exactly at the exit: p_b = p4
        const me = Msol(AR, true), ske = nshock(me), p3 = pr(me), p4 = p3 * ske.p21, p2 = pr(Msol(AR, false));
        s += L(X(1), Y(p3), X(1), Y(p4), 'terr', 2.2);
        // outside the exit: under-expanded (fan, pressure falls to p_b) and over-expanded (oblique shocks, rises to p_b)
        s += L(X(1), Y(p3), X(1) + 18, Y(0.035), 'vio', 1.4, '3 3') + L(X(1), Y(p3), X(1) + 18, Y(0.30), 'ink', 1.4, '3 3');
        const lab = (p, t, dy) => T(X(1) + 24, Y(p) + 5 + (dy || 0), t, { fs: 16, w: 600 });
        s += lab(1, 'p₀', -2) + lab(p2, 'p₂ = 0.937p₀', 6) + lab(p4, 'p₄ = 0.513p₀') + lab(p3, 'p₃ = 0.094p₀');
        const br = (pa, pb, t, c) => L(592, Y(pa) + 2, 592, Y(pb) - 2, col(c || 'mtx'), 2.6) + T(600, (Y(pa) + Y(pb)) / 2 + 6, t, { fs: 16, w: 600, c: c || 'mtx' });
        s += br(1, p2, 'all subsonic', 'tf') + br(p2, p4, 'shock inside', 'terr') + br(p4, p3, 'over-expanded', 'ink') + br(p3, 0.0, 'under-expanded', 'vio');
        s += T(592, Y(1) - 18, 'p_b in this band:', { fs: 15, c: 'ink' });
        s += T(X(0.03), Y(0.06), 'design flow: exits at p₃', { fs: 14, c: 'ink' });
        return W(740, 426, s);
      };

      // A/A* against M — minimum at M = 1, two roots for every A/A* > 1.
      D.tf_area_mach = () => {
        const X = (m) => 64 + m * 150, Y = (a) => 300 - a * 50;
        let s = axes(64, 300, 480, 250, 'M', 'A/A*');
        [0, 0.5, 1, 1.5, 2, 2.5, 3].forEach((m) => { s += tick(X(m), 300, String(m)); });
        [1, 2, 3, 4, 5].forEach((a) => { s += tick(64, Y(a), String(a), true); });
        s += poly(fn((m) => [X(m), Y(Math.min(AMg(m, 1.2), 5.15))], bisect((m) => AMg(m, 1.2) - 5.15, 0.05, 1), bisect((m) => AMg(m, 1.2) - 5.15, 1, 5), 120), 'gold', 1.6, '6 4');
        s += poly(fn((m) => [X(m), Y(AMg(m, 1.4))], bisect((m) => AMg(m, 1.4) - 5.15, 0.05, 1), bisect((m) => AMg(m, 1.4) - 5.15, 1, 5), 120), 'tf', 2.4);
        s += L(64, Y(2), X(2.197), Y(2), 'terr', 1.2, '4 3') + L(X(0.306), Y(2), X(0.306), 300, 'terr', 1, '3 3') + L(X(2.197), Y(2), X(2.197), 300, 'terr', 1, '3 3');
        s += dot(X(0.306), Y(2), 'terr', 4) + dot(X(2.197), Y(2), 'terr', 4) + dot(X(1), Y(1), 'ink', 4);
        s += N(X(0.306) + 8, Y(2) - 8, 'subsonic root M = 0.31', { c: 'terr' }) + N(X(2.197) + 8, Y(2) + 16, 'supersonic root M = 2.20', { c: 'terr' });
        s += N(X(1), Y(1) + 18, 'minimum: A = A*, M = 1 (throat)', { a: 'middle' });
        s += N(X(0.5) + 4, Y(4.4), 'M < 1: A must fall to raise M', { c: 'tf' }) + N(X(0.5) + 4, Y(4.4) + 13, '→ converging part', { c: 'tf' });
        s += N(X(2.3), Y(0.75), 'M > 1: A must grow to raise M', { c: 'tf' }) + N(X(2.3), Y(0.75) + 13, '→ diverging part', { c: 'tf' });
        s += N(X(2.42), Y(4.85), 'γ = 1.2', { c: 'gold', a: 'end' }) + N(X(2.95), Y(3.3), 'γ = 1.4 (air)', { c: 'tf' });
        s += N(304, 336, 'example: A/A* = 2 is met at M = 0.31 and at M = 2.20 — the regime decides which', { a: 'middle' });
        return W(600, 346, s);
      };

      // Example 1: static tap at the throat, Pitot (stagnation) probe in the outlet, both to one Δp device.
      D.tf_laval_tap = () => {
        const yc = 100, nz = cdOutline(yc, 70, 250, 480, 62, 22, 46);
        let s = nz.s + cl(60, yc, 560) + A(14, yc, 62, yc, 'tf', 2.2) + N(16, yc - 10, 'gas flow', { c: 'tf' });
        s += N(40, 24, 'from reservoir: p₀ = 0.5 MPa, T₀ = 293 K', { c: 'mtx' });
        // throat static tap in the wall
        const yw = yc + nz.h(250);
        s += L(250, yc - nz.h(250) - 6, 250, yw, 'terr', 1.2, '3 3') + V(250, yc - nz.h(250) - 12, 'throat t (A_t = 100 mm²)', { a: 'middle', fs: 13, c: 'terr' });
        s += L(250, yw, 250, 212, 'ink', 2) + dot(250, yw, 'terr', 3.5) + N(258, yw + 22, 'static tap: p_t', { c: 'terr' });
        // Pitot probe at the outlet, open end facing upstream on the centreline
        s += L(462, yc, 530, yc, 'ink', 2.6) + dot(462, yc, 'terr', 3.5) + L(530, yc, 530, 212, 'ink', 2);
        s += L(480, yc - nz.h(480) - 6, 480, yc + nz.h(480) + 6, 'terr', 1.2, '3 3') + V(480, yc - nz.h(480) - 12, 'outlet e', { a: 'middle', fs: 13, c: 'terr' });
        s += N(538, yc - 6, 'Pitot probe:') + N(538, yc + 8, 'p₀ₑ (stagnation)') + N(538, yc + 22, 'outlet p_e');
        // device
        s += L(250, 212, 360, 212, 'ink', 2) + L(420, 212, 530, 212, 'ink', 2) + R(360, 198, 60, 28, 'paper', 'ink', 1.4) + T(390, 216, 'Δp', { a: 'middle', fs: 11, w: 600 });
        s += N(390, 246, 'device reads Δp = p₀ₑ − p_t   (part c: Δp = 0)', { a: 'middle' });
        return W(660, 256, s);
      };

      // Example 2: rocket nozzle with the given data marked; unknowns shown as "?".
      D.tf_rocket_nozzle = () => {
        const yc = 128, nz = cdOutline(yc, 150, 240, 600, 62, 18, 64);
        let s = R(20, 50, 130, 156, 'tint', 'ink', 2) + nz.s + cl(20, yc, 640);
        s += V(85, 112, 'p₀ = 5.5 MPa', { a: 'middle', fs: 13.5 }) + V(85, 134, 'T₀ = 3700 K', { a: 'middle', fs: 13.5 }) + N(85, 156, 'chamber, u ≈ 0', { a: 'middle' });
        s += L(240, yc - 30, 240, yc + 30, 'terr', 1.4, '3 3') + V(240, yc - 38, 'throat: M = 1', { a: 'middle', fs: 13, c: 'terr' }) + N(240, yc + 48, 'p_t, T_t, u_t = ?', { a: 'middle', c: 'terr' });
        s += A(330, yc, 460, yc, 'tf', 2) + V(400, yc - 8, 'M > 1', { a: 'middle', fs: 13, c: 'tf' });
        s += V(604, 52, 'exit: p_e = p_atm = 0.05 MPa', { a: 'end', fs: 13 }) + N(604, 214, 'M_e, T_e, u_e = ?   A_e/A_t = ?', { a: 'end', c: 'terr' });
        s += A(84, 230, 24, 230, 'terr', 2.4) + V(92, 235, 'thrust F = ? (on the rocket)', { fs: 13, c: 'terr' });
        s += N(330, 250, 'gas: γ = 1.2, R = 346 J/kg K;  ṁ = 100 kg/s', { a: 'middle' });
        return W(660, 262, s);
      };

      // Q5: supersonic wind tunnel — reservoir, nozzle, working section (given numbers marked).
      D.tf_wind_tunnel = () => {
        const yc = 120;
        const h = (x) => x < 200 ? 18 + 52 * Math.pow((200 - x) / 70, 2) : x < 320 ? 18 + 32 * Math.pow((x - 200) / 120, 1.3) : x < 470 ? 50 : 50 - 12 * Math.sin(Math.PI * Math.min(1, (x - 470) / 120) / 2);
        const up = fn((x) => [x, yc - h(x)], 130, 590, 90), lo = fn((x) => [x, yc + h(x)], 130, 590, 90);
        let s = R(20, 40, 110, 160, 'tint', 'ink', 2) + pgon(up.concat(lo.slice().reverse()), 'tint') + poly(up, 'ink', 2.2) + poly(lo, 'ink', 2.2) + cl(20, yc, 600);
        s += V(75, 112, 'p₀ = 10⁵ Pa', { a: 'middle', fs: 13 }) + V(75, 134, 'T₀ = 291 K', { a: 'middle', fs: 13 }) + N(75, 154, 'reservoir', { a: 'middle' });
        s += L(200, yc - 26, 200, yc + 26, 'terr', 1.4, '3 3') + L(200, yc - 26, 200, yc - 54, 'terr', 1, '2 3') + V(200, yc - 60, 'throat: M = 1', { a: 'middle', fs: 13, c: 'terr' }) + N(200, yc + 44, 'A_t = ?', { a: 'middle', c: 'terr' });
        s += R(320, yc - 50, 150, 100, null, 'gold', 1.5, '5 4') + V(395, yc - 58, 'working section', { a: 'middle', fs: 13 });
        s += P('M 375 128 L 420 116 L 375 112 Z', 'ink', 1.4, 'paper');
        s += V(395, yc + 68, 'A = 600 cm²,  M = 2.5', { a: 'middle', fs: 13 }) + N(395, yc + 86, 'p = ?,  ṁ = ?', { a: 'middle', c: 'terr' });
        s += A(240, yc, 300, yc, 'tf', 2) + N(540, yc - 54, 'diffuser', { a: 'middle' });
        return W(620, 218, s);
      };

      // Example 3: locating a normal shock — stations and which stagnation pressure applies where.
      D.tf_laval_shock_locate = () => {
        const yc = 110, nz = cdOutline(yc, 60, 220, 560, 56, 24, 48);
        let s = nz.s + cl(40, yc, 590) + A(14, yc, 52, yc, 'tf', 2.2);
        const xs = 430, hs = nz.h(xs);
        s += L(xs, yc - hs, xs, yc + hs, 'terr', 2.8) + V(xs, yc - hs - 10, 'shock, A_s', { a: 'middle', fs: 13, c: 'terr' });
        s += L(220, yc - 30, 220, yc + 30, 'terr', 1.4, '3 3') + V(220, yc - 34, 'throat: M = 1, A_t = A*', { a: 'middle', fs: 13, c: 'terr' });
        s += V(330, yc + 5, 'M > 1', { a: 'middle', fs: 13, c: 'tf' }) + V(500, yc + 5, 'M < 1', { a: 'middle', fs: 13, c: 'tf' }) + V(130, yc + 5, 'M < 1', { a: 'middle', fs: 13, c: 'tf' });
        s += V(560, 46, 'exit: p_e = p_b', { a: 'end', fs: 13 });
        s += A2(64, 190, xs - 4, 190, 'tf') + N((64 + xs) / 2, 206, 'isentropic with p₀  (A* = A_t)', { a: 'middle', c: 'tf' });
        s += A2(xs + 4, 190, 560, 190, 'terr') + N((xs + 560) / 2, 206, 'isentropic with p₀ₑ < p₀', { a: 'middle', c: 'terr' });
        s += N((xs + 560) / 2, 220, 'sonic area A_e* = A_t p₀/p₀ₑ', { a: 'middle', c: 'terr' });
        s += N(300, 244, 'T₀ is the same everywhere (adiabatic); only p₀ drops, across the shock', { a: 'middle' });
        return W(600, 254, s);
      };
    }
