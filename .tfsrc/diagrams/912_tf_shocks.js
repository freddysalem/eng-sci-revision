    {
    // ===================== Topic 12 · Shock Waves — professor revisions (r1) =====================
    // tf_steepening: same picture, plus the direction of travel of the waves (each step moves right at its local a).
    D.tf_steepening = () => {
      const panel = (x0, title, comp) => { let s = axes(x0 + 30, 180, 260, 140, 'distance', 'p') + T(x0 + 160, 22, title, { a: 'middle', fs: 12, w: 600 });
        const stair = (xa, dx, c, w, dash) => { const p = []; for (let i = 0; i < 6; i++) { const x = xa + i * dx, y = comp ? 70 + i * 16 : 166 - i * 16; p.push([x, y], [x + dx, y]); if (i < 5) p.push([x + dx, comp ? y + 16 : y - 16]); } return poly(p, c, w, dash); };
        if (comp) { s += stair(x0 + 50, 26, 'mut', 1.4, '4 3') + stair(x0 + 150, 8, 'terr', 1.6) + L(x0 + 250, 70, x0 + 250, 150, 'terr', 2.6) + L(x0 + 250, 150, x0 + 280, 150, 'terr', 2.6) + L(x0 + 222, 70, x0 + 250, 70, 'terr', 2.6) + A(x0 + 120, 54, x0 + 210, 54, 'ink', 1.4) + N(x0 + 165, 44, 'later waves faster: they catch up', { a: 'middle' }) + N(x0 + 266, 64, 'shock', { a: 'middle', c: 'terr' }); }
        else { s += stair(x0 + 70, 10, 'mut', 1.4, '4 3') + stair(x0 + 130, 26, 'tf', 1.8) + A(x0 + 120, 54, x0 + 210, 54, 'ink', 1.4) + N(x0 + 165, 44, 'later waves slower: the fan spreads', { a: 'middle' }) + N(x0 + 130, 112, 'no strong expansion wave', { a: 'middle', c: 'tf' }); }
        return s; };
      return W(680, 226, panel(10, 'compression → shock', true) + panel(350, 'expansion → spreads out', false) + N(340, 222, 'waves travel → at their local a · dashed = earlier, solid = later', { a: 'middle' }));
    };

    // tf_normal_oblique: oblique panel now shows the velocity split into normal (n) and tangential (t) components,
    // shock angle β and deflection θ; tangential component unchanged, normal component drops below sonic.
    D.tf_normal_oblique = () => {
      // normal shock
      let s = L(130, 50, 130, 240, 'terr', 2.6) + A(20, 145, 126, 145, 'ink', 2.2) + V(30, 133, 'M₁ > 1', { fs: 16 }) + A(134, 145, 184, 145, 'ink', 2.2) + V(142, 133, 'M₂ < 1', { fs: 16 });
      s += T(105, 268, 'normal shock: ⟂ to the flow', { a: 'middle', fs: 13, w: 600 }) + T(105, 286, 'all of u is normal', { a: 'middle', fs: 12, c: 'mtx' });
      // oblique shock: angle β to the oncoming flow, flow turned through θ
      const b = 50 * Math.PI / 180, sh = [Math.cos(b), -Math.sin(b)], n = [Math.sin(b), Math.cos(b)];
      const Q = [520, 140], P0 = [Q[0] - (250 - Q[1]) / Math.sin(b) * Math.cos(b), 250];
      const U = 150, ut = U * Math.cos(b), un = U * Math.sin(b), un2 = 0.5 * un;
      const at = (p, v, k) => [p[0] + v[0] * k, p[1] + v[1] * k];
      const P1 = at(P0, sh, 290);
      const V2 = [ut * sh[0] + un2 * n[0], ut * sh[1] + un2 * n[1]], th = Math.atan2(-V2[1], V2[0]);
      // wall + wedge (deflected by θ)
      const wEnd = [P0[0] + 230 * Math.cos(th), 250 - 230 * Math.sin(th)];
      s += pgon([[250, 250], P0, wEnd, [wEnd[0], 262], [250, 262]], 'url(#tf-hatch)') + poly([[250, 250], P0, wEnd], 'ink', 1.8);
      s += L(P0[0], P0[1], P1[0], P1[1], 'terr', 2.6) + T(P1[0] + 6, P1[1] + 4, 'oblique shock', { c: 'terr', fs: 12.5 });
      // angles at the shock foot
      const arc = (r, a1, a2) => 'M ' + (P0[0] + r * Math.cos(a1)).toFixed(1) + ' ' + (P0[1] - r * Math.sin(a1)).toFixed(1) + ' A ' + r + ' ' + r + ' 0 0 0 ' + (P0[0] + r * Math.cos(a2)).toFixed(1) + ' ' + (P0[1] - r * Math.sin(a2)).toFixed(1);
      s += L(P0[0], P0[1], P0[0] + 110, P0[1], 'mut', 1, '4 3') + P(arc(46, 0, b), 'terr', 1.3) + V(P0[0] + 50, P0[1] - 30, 'β', { c: 'terr', fs: 16 }) + P(arc(84, 0, th), 'ink', 1.3) + V(P0[0] + 90, P0[1] - 6, 'θ', { fs: 16 });
      // upstream velocity and its components (drawn as a triangle ending on the shock)
      const T0 = [Q[0] - U, Q[1]], Am = at(T0, sh, ut);
      s += A(T0[0], T0[1], Q[0] - 2, Q[1], 'ink', 2.2) + V(T0[0] - 4, T0[1] + 5, 'u₁', { fs: 16, a: 'end' }) + T(T0[0] - 4, T0[1] + 22, '(M₁ > 1)', { a: 'end', fs: 12.5 });
      s += A(T0[0], T0[1], Am[0], Am[1], 'grn', 1.7) + V(Am[0] - 34, Am[1] + 22, 'u_{1t}', { c: 'grn', fs: 16, a: 'end' });
      s += A(Am[0], Am[1], Q[0], Q[1], 'vio', 1.9) + V(Am[0] + 30, Am[1] - 2, 'u_{1n}', { c: 'vio', fs: 16 });
      // downstream: tangential unchanged, normal smaller, resultant turned through θ
      const Cn = at(Q, n, un2), E = [Q[0] + V2[0], Q[1] + V2[1]];
      s += A(Q[0], Q[1], Cn[0], Cn[1], 'vio', 1.9) + V(Cn[0] - 12, Cn[1] + 18, 'u_{2n}', { c: 'vio', fs: 16, a: 'middle' });
      s += A(Cn[0], Cn[1], E[0], E[1], 'grn', 1.7) + V((Cn[0] + E[0]) / 2 + 10, (Cn[1] + E[1]) / 2 + 14, 'u_{2t} = u_{1t}', { c: 'grn', fs: 16 });
      s += A(Q[0] + 2, Q[1], E[0], E[1], 'ink', 2.8) + V(E[0] + 6, E[1] - 4, 'u₂', { fs: 16 });
      s += T(480, 286, 'oblique shock: u_{1n} = u₁ sin β, M_{1n} > 1 → M_{2n} < 1', { a: 'middle', fs: 13, w: 600 }) + T(480, 304, 'u_t unchanged · flow turns through θ · M₁, M₂ can both be > 1', { a: 'middle', fs: 12, c: 'mtx' });
      return W(700, 316, s);
    };

    // tf_entropy_m: x-axis drawn along the zero line (origin labelled, axis from M = 0), labels kept clear of the curve.
    D.tf_entropy_m = () => {
      const f = (m) => Math.log(((2.8 * m * m - 0.4) / 2.4) * Math.pow((2 + 0.4 * m * m) / (2.4 * m * m), 1.4));
      const X = (m) => 70 + m / 2.7 * 430, y0 = 150, Y = (v) => y0 - v * 290;
      let s = pgon([[X(0.5), 40], [X(1), 40], [X(1), 262], [X(0.5), 262]], 'mut', null, 1, 0.16);
      s += A(70, y0, 520, y0, 'ink', 1.4) + T(522, y0 + 18, 'M₁', { serif: true, fs: 14, a: 'end' }) + A(70, 262, 70, 30, 'ink', 1.4) + T(78, 30, '(s₂ − s₁)/C_v', { serif: true, fs: 14 });
      [0, 0.5, 1, 1.5, 2, 2.5].forEach((m) => { s += L(X(m), y0, X(m), y0 + 4, 'ink', 1.2) + T(X(m), y0 + 17, String(m), { fs: 10.5, a: 'middle', c: 'mtx' }); });
      s += T(62, y0 + 4, '0', { fs: 10.5, a: 'end', c: 'mtx' }) + N(X(0.25), y0 - 8, 'M₁ = 0', { a: 'middle' }) + N(X(0.25), y0 + 34, '(curve from', { a: 'middle' }) + N(X(0.25), y0 + 47, 'M₁ = 0.5)', { a: 'middle' });
      [0.2, -0.2].forEach((v) => { s += L(66, Y(v), 70, Y(v), 'ink', 1.2) + T(62, Y(v) + 4, (v > 0 ? '+' : '−') + Math.abs(v), { fs: 10.5, a: 'end', c: 'mtx' }); });
      s += poly(fn((m) => [X(m), Y(f(m))], 0.5, 2.62, 90), 'terr', 2.4) + L(X(2), y0, X(2), Y(f(2)), 'mut', 1, '3 3') + dot(X(2), Y(f(2)), 'terr', 4.2) + N(X(2) + 8, Y(f(2)) + 16, 'M₁ = 2: 0.131 (table)', { c: 'terr' });
      s += N(X(0.75), 60, 'M₁ < 1:', { a: 'middle' }) + N(X(0.75), 74, 's would fall', { a: 'middle' }) + N(X(0.75), 88, '— impossible', { a: 'middle' });
      s += N(X(1.75), 70, 'M₁ > 1: s rises — allowed', { a: 'middle', c: 'terr' });
      s += L(X(1), y0, X(1.25), y0 + 46, 'mut', 1) + N(X(1.27), y0 + 50, 'flat near M₁ = 1:') + N(X(1.27), y0 + 64, 'weak waves ≈ isentropic');
      return W(540, 276, s);
    };
    }
