    // Topic 10 (Nozzles and Choked Flow) — professor r1 overrides. Keys used only by 10_tf_nozzles.
    {
      // Thin control volume: every force and flux in the Euler-equation balance is drawn and labelled.
      D.tf_duct_cv = () => {
        const up = (x) => 84 - (x - 40) * 40 / 520, lo = (x) => 206 + (x - 40) * 40 / 520;
        const x1 = 250, x2 = 360, xm = (x1 + x2) / 2;
        let s = pgon([[40, up(40)], [560, up(560)], [560, lo(560)], [40, lo(40)]], 'tint') + L(40, up(40), 560, up(560), 'ink', 2) + L(40, lo(40), 560, lo(560), 'ink', 2);
        s += pgon([[x1, up(x1)], [x2, up(x2)], [x2, lo(x2)], [x1, lo(x1)]], null, 'gold', 1.5) + cl(24, 145, 580);
        // state labels either side of the CV
        s += V(x1 - 10, 112, 'A;  p, u, ρ', { a: 'end', fs: 13.5 }) + V(x2 + 10, 112, 'A + dA;  p + dp,', { fs: 13.5 }) + V(x2 + 10, 130, 'u + du,  ρ + dρ', { fs: 13.5 });
        // end-face pressure forces (terracotta)
        s += A(x1 - 62, 172, x1 - 2, 172, 'terr', 2) + V(x1 - 66, 177, 'pA', { a: 'end', c: 'terr', fs: 14 });
        s += A(x2 + 62, 172, x2 + 2, 172, 'terr', 2) + V(x2 + 66, 177, '(p + dp)(A + dA)', { c: 'terr', fs: 13.5 });
        // pressure on the tapered sides: acts normal to the wall, its axial share is (p + ½dp)dA, pointing downstream here
        s += A(xm, up(xm) - 22, xm, up(xm) + 2, 'terr', 1.5) + A(xm, lo(xm) + 22, xm, lo(xm) - 2, 'terr', 1.5);
        s += V(xm, up(xm) - 28, 'sides: (p + ½dp) dA  → (axial)', { a: 'middle', c: 'terr', fs: 12.5 });
        // flow arrow
        s += A(60, 145, 130, 145, 'tf', 2.2) + N(95, 136, 'flow', { a: 'middle', c: 'tf' });
        s += A2(x1, 244, x2, 244, 'mut') + V(xm, 260, 'δx', { a: 'middle', c: 'mtx', fs: 13 });
        s += N(300, 286, 'mass:  ρuA (in) = (ρ + dρ)(u + du)(A + dA) (out)', { a: 'middle', c: 'tf', fs: 12.5 });
        s += N(300, 306, 'momentum:  Σ pressure forces (→) = momentum flux out − in = d(ρAu²)', { a: 'middle', c: 'terr', fs: 12.5 });
        return W(600, 318, s);
      };

      // Converging nozzle from a large reservoir, ambient (back) pressure p_a; choked case shows the jet adjusting outside.
      D.tf_reservoir_nozzle = () => {
        let s = P('M 220 80 L 220 40 L 40 40 L 40 220 L 220 220 L 220 180', 'ink', 2.2) + R(42, 42, 176, 176, 'tint') + pgon([[220, 80], [360, 116], [360, 144], [220, 180]], 'tint');
        s += P('M 220 80 C 280 84, 330 110, 360 116', 'ink', 2.2) + P('M 220 180 C 280 176, 330 150, 360 144', 'ink', 2.2);
        s += V(130, 110, 'p₀, T₀', { a: 'middle', fs: 16 }) + N(130, 136, 'large reservoir: u ≈ 0', { a: 'middle' });
        s += L(360, 106, 360, 186, 'terr', 1.4, '3 3') + V(360, 202, 'throat = exit: p_t, M_t ≤ 1', { a: 'middle', fs: 13, c: 'terr' });
        // jet: widening dashed edges outside the exit (expansion from p_t down to p_a when choked)
        s += P('M 362 116 C 400 108, 430 104, 470 100', 'tf', 1.3, null, '4 4') + P('M 362 144 C 400 152, 430 156, 470 160', 'tf', 1.3, null, '4 4');
        s += A(368, 130, 456, 130, 'tf', 2.2) + V(490, 120, 'ambient (back)', { fs: 12.5, c: 'mtx' }) + V(490, 142, 'pressure p_a', { fs: 14 });
        s += N(300, 250, 'p_a/p₀ > 0.528: not choked, p_t = p_a', { a: 'middle', c: 'tf', fs: 12 });
        s += N(300, 268, 'p_a/p₀ ≤ 0.528: choked, p_t = 0.528 p₀ > p_a; jet expands to p_a outside', { a: 'middle', c: 'terr', fs: 12 });
        return W(600, 278, s);
      };

      // Mass flow against back-pressure ratio: rises as p_a falls, then flat once choked.
      D.tf_choke_curve = () => {
        const g = 1.4, rc = Math.pow(2 / (g + 1), g / (g - 1)), norm = Math.pow(2 / (g + 1), (g + 1) / (2 * (g - 1)));
        const mr = (r) => { if (r <= rc) return 1; const M = Math.sqrt(2 / (g - 1) * (Math.pow(1 / r, (g - 1) / g) - 1)); return M * Math.pow(r, (g + 1) / (2 * g)) / norm; };
        const X = (r) => 80 + (1 - r) * 400, Y = (v) => 240 - v * 190;
        let s = axes(80, 240, 400, 200, '', 'ṁ / ṁ_max');
        [1, 0.8, 0.6, 0.4, 0.2, 0].forEach((r) => { s += L(X(r), 240, X(r), 245, 'ink', 1.2) + T(X(r), 260, r.toFixed(1), { fs: 12.5, a: 'middle', c: 'mtx' }); });
        [0, 0.5, 1].forEach((v) => { s += L(75, Y(v), 80, Y(v), 'ink', 1.2) + T(70, Y(v) + 4, v.toFixed(1), { fs: 12.5, a: 'end', c: 'mtx' }); });
        s += T(X(0.5), 282, 'p_a / p₀  (back pressure falling →)', { a: 'middle', fs: 13.5, c: 'mtx' });
        s += poly(fn((r) => [X(r), Y(mr(r))], 1, rc, 80), 'tf', 2.4) + L(X(rc), Y(1), X(0), Y(1), 'terr', 2.4);
        s += L(X(rc), Y(1) - 14, X(rc), 240, 'mut', 1.1, '4 4') + N(X(rc) + 6, Y(0.08), '0.528', { c: 'terr', fs: 12.5 });
        s += N(X(0.68), Y(0.42), 'not choked: M_t < 1,', { a: 'middle', c: 'tf', fs: 12.5 }) + N(X(0.68), Y(0.42) + 16, 'p_t = p_a', { a: 'middle', c: 'tf', fs: 12.5 });
        s += N(X(0.25), Y(1) - 12, 'choked: M_t = 1, ṁ fixed by p₀, T₀', { a: 'middle', c: 'terr', fs: 12.5 });
        return W(540, 296, s);
      };

      // Tank / tyre leak through a choked hole, ambient p_a (absolute).
      D.tf_tank_leak = () => {
        let s = R(60, 40, 240, 150, 'tint', 'ink', 2.2, null, 22) + L(300, 112, 300, 128, 'paper', 4) + V(180, 100, 'V,  m(t)', { a: 'middle', fs: 15 }) + V(180, 126, 'p₀(t), T₀(t)', { a: 'middle', fs: 15 });
        s += P('M 302 114 L 380 96 M 302 120 L 390 120 M 302 126 L 380 144', 'tf', 1.6) + A(310, 120, 392, 120, 'tf', 2) + V(400, 112, 'ambient p_a', { fs: 13, c: 'mtx' }) + V(400, 136, 'choked hole A_t', { fs: 13, c: 'terr' });
        s += V(180, 222, 'dm/dt = −ṁ = −0.0404 A_t p₀/√T₀', { a: 'middle', fs: 13.5 });
        return W(520, 236, s);
      };
    }
