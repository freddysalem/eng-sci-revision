    // ===================== Topic 13 · Wind Energy and the Betz Limit (w79 author) =====================
    {
      const S = (x, y, s, o) => T(x, y, s, Object.assign({ serif: true, fs: 13 }, o || {}));          // sans italic label
      const rho = '<tspan font-family="\'Times New Roman\', Times, Georgia, serif" font-style="normal" font-size="1.2em">ρ</tspan>';
      const ell = (cx, cy, rx, ry, c, fill, w, dash, op) => '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + (fill ? col(fill) : 'none') + '"' + (op != null ? ' fill-opacity="' + op + '"' : '') + ' stroke="' + (c ? col(c) : 'none') + '" stroke-width="' + (w || 1.4) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '></ellipse>';
      // side view of a cylinder of air (axis horizontal): left face at x, length len, radius r
      const cyl = (x, cy, len, r, dash) => R(x, cy - r, len, 2 * r, 'tint') + L(x, cy - r, x + len, cy - r, 'tf', 1.5, dash) + L(x, cy + r, x + len, cy + r, 'tf', 1.5, dash)
        + ell(x, cy, r * 0.22, r, 'tf', 'tint', 1.5, dash) + ell(x + len, cy, r * 0.22, r, 'tf', 'paper', 1.5, dash);
      const disc = (x, cy, r) => ell(x, cy, 7, r, 'vio', 'vio', 1.6, null, 0.35);
      const box = (x, y, w, h, c) => R(x, y, w, h, 'paper', c || 'ink', 1.4, null, 6);

      // 13.1 — energy density (per volume) against specific energy (per mass), approximate values
      D.tf_betz_energy_density = () => {
        const x0 = 70, y0 = 290, w = 470, h = 240;
        const X = (e) => x0 + e / 150 * w, Y = (d) => y0 - d / 45 * h;
        let s = axes(x0, y0, w, h);
        s += S(x0 + w + 12, y0 + 34, 'specific energy [MJ/kg]', { a: 'end', fs: 12.5 }) + S(x0 - 6, y0 - h - 22, 'energy density [MJ/L]', { fs: 12.5 });
        [0, 25, 50, 75, 100, 125, 150].forEach((e) => { s += tick(X(e), y0, String(e)); });
        [0, 10, 20, 30, 40].forEach((d) => { s += tick(x0, Y(d), String(d), true); });
        // fossil-fuel cluster
        s += ell(X(48), Y(26), 28, 78, 'terr', 'terr', 1.3, '5 4', 0.08);
        [[46.4, 34.2, 'petrol'], [45.6, 38.6, 'diesel'], [53.6, 22.2, 'LNG'], [53.6, 9, 'natural gas, 250 bar'], [26.8, 21.2, 'ethanol']].forEach((p) => {
          s += dot(X(p[0]), Y(p[1]), 'terr', 3.5) + N(X(p[0]) + 7, Y(p[1]) + 4, p[2], { c: 'terr' });
        });
        s += S(X(70), Y(41), 'fossil fuels ≈ 50 MJ/kg', { c: 'terr', fs: 12.5 }) + N(X(70), Y(41) + 14, 'MJ/L depends on state (liquid vs gas)', { c: 'terr' });
        // hydrogen
        s += ell(X(142), Y(7), 14, 22, 'gold', 'gold', 1.3, '5 4', 0.08);
        s += dot(X(142), Y(8.5), 'gold', 3.5) + dot(X(142), Y(5.6), 'gold', 3.5);
        s += S(X(150), Y(29) - 14, 'hydrogen ≈ 142–145 MJ/kg', { c: 'gold', fs: 12.5, a: 'end' }) + N(X(150), Y(29), 'liquid 8.5, 700 bar 5.6 MJ/L: always low', { c: 'gold', a: 'end' });
        // batteries and wind at the origin
        s += dot(X(0.8), Y(2), 'vio', 3.5) + L(X(0.8) + 3, Y(2) - 3, X(4), Y(6), 'vio', 0.9);
        s += S(X(4) + 2, Y(9.4), 'batteries (Li-ion)', { c: 'vio', fs: 12.5 }) + N(X(4) + 2, Y(9.4) + 13, '≈ 1 MJ/kg, ≈ 2 MJ/L', { c: 'vio' });
        s += ci(X(0), Y(0), 5, 'tf', 2) + S(X(3), Y(0) - 7, 'wind: 0 MJ/kg, 0 MJ/L', { c: 'tf', fs: 12.5 });
        s += N(x0 + w / 2, y0 + 52, 'approximate values (course: fossil ~50, hydrogen 145, electrochemical ~1, wind 0 MJ/kg)', { a: 'middle' });
        return W(600, 350, s);
      };

      // 13.2 — drag-driven VAWT seen from above: drag differential between the two cups drives the rotation
      D.tf_betz_drag_vawt = () => {
        const cx = 260, cy = 140;
        let s = '';
        [60, 100, 140, 180, 220].forEach((y) => { s += A(40, y, 120, y, 'tf', 1.6); });
        s += S(80, 36, 'wind', { c: 'tf', a: 'middle', fs: 14 });
        s += P('M ' + cx + ' ' + (cy - 90) + ' A 45 45 0 0 0 ' + cx + ' ' + cy, 'ink', 3.2);      // top cup: convex side to the wind
        s += P('M ' + cx + ' ' + cy + ' A 45 45 0 0 1 ' + cx + ' ' + (cy + 90), 'ink', 3.2);      // bottom cup: concave side to the wind
        s += ci(cx, cy, 5, 'ink', 1.6, 'paper');
        s += A(cx - 40, cy - 45, cx - 14, cy - 45, 'terr', 2.2) + S(cx - 6, cy - 50, 'small drag', { c: 'terr', fs: 12 });
        s += A(cx + 52, cy + 45, cx + 112, cy + 45, 'terr', 3) + S(cx + 78, cy + 66, 'large drag', { c: 'terr', fs: 12, a: 'middle' });
        s += PA('M ' + (cx + 99) + ' ' + (cy + 99) + ' A 140 140 0 0 0 ' + (cx + 140) + ' ' + cy, 'vio', 2);
        s += S(cx + 146, cy - 6, 'rotation', { c: 'vio', fs: 13 });
        s += N(cx + 16, cy - 96, 'returning blade') + N(cx + 16, cy - 82, '(curved back faces the wind)');
        s += N(cx - 14, cy + 100, 'driving blade', { a: 'end' }) + N(cx - 14, cy + 114, '(cup faces the wind)', { a: 'end' });
        s += N(cx, 268, 'net moment = drag differential × lever arm (view from above)', { a: 'middle' });
        return W(520, 280, s);
      };

      // 13.2 — horizontal vs vertical axis
      D.tf_betz_hawt_vawt = () => {
        let s = '';
        // HAWT, front view
        const hx = 130, hy = 100, bl = (ang) => { const a = ang * Math.PI / 180, ex = hx + 78 * Math.cos(a), ey = hy - 78 * Math.sin(a); return P('M ' + hx + ' ' + hy + ' L ' + (hx + 10 * Math.cos(a + 1.2)).toFixed(1) + ' ' + (hy - 10 * Math.sin(a + 1.2)).toFixed(1) + ' L ' + ex.toFixed(1) + ' ' + ey.toFixed(1) + ' Z', 'ink', 1.4, 'mut', null, 0.35); };
        s += L(hx, hy, hx, 262, 'ink', 3) + bl(90) + bl(210) + bl(330) + ci(hx, hy, 7, 'ink', 1.6, 'paper');
        s += T(hx, 20, 'Horizontal axis (HAWT)', { a: 'middle', fs: 12.5, w: 600 });
        s += N(hx, 282, 'axis horizontal, along the wind', { a: 'middle' }) + N(hx, 296, 'yaws to face the wind', { a: 'middle' });
        // VAWT, Darrieus
        const vx = 450;
        s += L(vx, 40, vx, 262, 'ink', 3);
        s += P('M ' + vx + ' 52 C ' + (vx + 85) + ' 100, ' + (vx + 85) + ' 200, ' + vx + ' 245', 'ink', 2.2) + P('M ' + vx + ' 52 C ' + (vx - 85) + ' 100, ' + (vx - 85) + ' 200, ' + vx + ' 245', 'ink', 2.2);
        s += R(vx - 14, 252, 28, 12, 'mut', 'ink', 1.2);
        s += T(vx, 20, 'Vertical axis (VAWT)', { a: 'middle', fs: 12.5, w: 600 });
        s += N(vx, 282, 'axis vertical: any wind direction', { a: 'middle' }) + N(vx, 296, 'generator can sit at ground level', { a: 'middle' });
        return W(600, 306, s);
      };

      // 13.3 — the stream tube through a HAWT (proportions of the Betz optimum: A1 = 2A/3, A2 = 2A)
      const streamtube = (o) => {
        const cy = 150, rd = 62, r1 = 50.6, r2 = 87.7, xi = 110, xd = 330, xo = 560;
        const up = 'M 40 ' + (cy - r1) + ' L ' + xi + ' ' + (cy - r1) + ' C 220 ' + (cy - r1) + ', 260 ' + (cy - rd + 2) + ', ' + xd + ' ' + (cy - rd) + ' C 410 ' + (cy - rd - 3) + ', 480 ' + (cy - r2) + ', ' + xo + ' ' + (cy - r2) + ' L 620 ' + (cy - r2);
        const lo = 'M 40 ' + (cy + r1) + ' L ' + xi + ' ' + (cy + r1) + ' C 220 ' + (cy + r1) + ', 260 ' + (cy + rd - 2) + ', ' + xd + ' ' + (cy + rd) + ' C 410 ' + (cy + rd + 3) + ', 480 ' + (cy + r2) + ', ' + xo + ' ' + (cy + r2) + ' L 620 ' + (cy + r2);
        let s = P(up + ' L 620 ' + (cy + r2) + ' L ' + xo + ' ' + (cy + r2) + ' C 480 ' + (cy + r2) + ', 410 ' + (cy + rd + 3) + ', ' + xd + ' ' + (cy + rd) + ' C 260 ' + (cy + rd - 2) + ', 220 ' + (cy + r1) + ', ' + xi + ' ' + (cy + r1) + ' L 40 ' + (cy + r1) + ' Z', null, 1, 'tint');
        s += P(up, 'tf', 1.8) + P(lo, 'tf', 1.8);
        [-0.5, 0, 0.5].forEach((f) => { s += PA('M 40 ' + (cy + f * r1) + ' L ' + xi + ' ' + (cy + f * r1) + ' C 220 ' + (cy + f * r1) + ', 260 ' + (cy + f * rd) + ', ' + xd + ' ' + (cy + f * rd) + ' C 410 ' + (cy + f * rd) + ', 480 ' + (cy + f * r2) + ', 600 ' + (cy + f * r2), 'mut', 1.1); });
        s += ell(xi, cy, 10, r1, 'ink', null, 1.2, '4 3') + ell(xo, cy, 14, r2, 'ink', null, 1.2, '4 3') + disc(xd, cy, rd);
        s += S(xi - 16, cy - r1 - 12, o.l1, { a: 'middle', fs: 14 }) + S(xd, cy - rd - 12, o.ld, { a: 'middle', fs: 14 }) + S(xo, cy - r2 - 12, o.l2, { a: 'middle', fs: 14 });
        s += A(xi - 30, cy + r1 + 26, xi + 30, cy + r1 + 26, 'tf', 2) + S(xi + 36, cy + r1 + 31, o.v1, { c: 'tf', fs: 14 });
        s += A(xd - 20, cy + rd + 26, xd + 20, cy + rd + 26, 'tf', 2) + S(xd + 26, cy + rd + 31, o.v, { c: 'tf', fs: 14 });
        s += A(xo - 10, cy + r2 + 22, xo + 10, cy + r2 + 22, 'tf', 2) + S(xo + 16, cy + r2 + 27, o.v2, { c: 'tf', fs: 14 });
        s += N(xd, 30, o.rot, { a: 'middle', c: 'vio' });
        s += N(xi, 296, 'upstream', { a: 'middle' }) + N(xo, 296, 'downstream (wake)', { a: 'middle' });
        s += S(330, 322, o.foot, { a: 'middle', fs: 13.5 });
        return W(640, 332, s);
      };
      D.tf_betz_streamtube = () => streamtube({ l1: 'A₁, v₁, ṁ₁', ld: 'A, v, ṁ', l2: 'A₂, v₂, ṁ₂', v1: 'v₁', v: 'v', v2: 'v₂', rot: 'rotor (swept area A = πr²)', foot: 'ρA₁v₁ = ρAv = ρA₂v₂ : slower air needs a wider tube' });
      // Problem Sheet Q5–Q6 (and Problem Class) values on the same picture (not to scale for these numbers)
      D.tf_betz_q5 = () => streamtube({ l1: 'upstream', ld: 'r = 15 m', l2: 'downstream', v1: 'v₁ = 8 m/s', v: 'v (at rotor)', v2: 'v₂ = 5 m/s', rot: 'HAWT, swept radius 15 m, ' + rho + ' = 1.293 kg/m³', foot: 'find Ẇ_{turbine} (Q5) and the efficiency C_P (Q6)' });

      // 13.3 — equal masses of air before and after the rotor (slides 22–27)
      D.tf_betz_parcels = () => {
        const cy = 140;
        let s = cyl(40, cy, 170, 46);
        s += cyl(470, cy, 52, 84);
        s += L(340, 40, 340, 240, 'ink', 2.4) + disc(340, cy, 70) + N(340, 30, 'rotor', { a: 'middle', c: 'vio' });
        s += S(125, cy - 18, 'm₁   v₁', { a: 'middle', fs: 14 }) + S(125, cy + 6, 'V₁   W₁', { a: 'middle', fs: 14 }) + S(24, cy + 5, 'A₁', { a: 'end', fs: 14 });
        s += S(574, cy - 18, 'm₂   v₂', { fs: 14 }) + S(574, cy + 6, 'V₂   W₂', { fs: 14 }) + S(462, cy - 90, 'A₂', { a: 'end', fs: 14 });
        s += A(85, cy + 76, 165, cy + 76, 'tf', 2) + S(172, cy + 81, 'v₁', { c: 'tf', fs: 14 });
        s += A(480, cy + 112, 515, cy + 112, 'tf', 2) + S(522, cy + 117, 'v₂', { c: 'tf', fs: 14 });
        s += N(125, 36, 'volume of air upstream', { a: 'middle' }) + N(510, 36, 'same air downstream', { a: 'middle' });
        s += N(320, 276, 'steady: m₁ = m₂  ·  ρ constant: V₁ = V₂  ·  energy taken out: W₁ > W₂ ⇒ v₁ > v₂ ⇒ A₁ < A₂', { a: 'middle', fs: 11.5 });
        s += N(320, 292, '(V = volume of the parcel, W = its kinetic energy (1/2)mv²)', { a: 'middle', fs: 11.5 });
        return W(660, 300, s);
      };

      // 13.4 — force of the rotor on the air, the thin slab dx, power = F v
      D.tf_betz_force = () => {
        const cx = 300, cy = 130;
        let s = R(cx - 9, cy - 82, 18, 164, 'tint') + L(cx - 9, cy - 90, cx - 9, cy + 90, 'gold', 1.3, '5 4') + L(cx + 9, cy - 90, cx + 9, cy + 90, 'gold', 1.3, '5 4') + disc(cx, cy, 78);
        [-50, -15, 20, 55].forEach((dy) => { s += A(50, cy + dy, 140, cy + dy, 'tf', 1.8); });
        [-50, -15, 20, 55].forEach((dy) => { s += A(470, cy + dy, 515, cy + dy, 'tf', 1.8); });
        s += S(95, cy - 66, 'v₁', { c: 'tf', a: 'middle', fs: 15 }) + S(495, cy - 66, 'v₂', { c: 'tf', a: 'middle', fs: 15 });
        s += A(cx - 40, cy + 4, cx - 12, cy + 4, 'tf', 2) + S(cx - 44, cy + 9, 'v', { c: 'tf', a: 'end', fs: 15 });
        s += A(cx + 50, cy - 100, cx - 40, cy - 100, 'terr', 3) + S(cx - 48, cy - 95, 'F', { c: 'terr', a: 'end', fs: 16 }) + N(cx + 58, cy - 96, 'force of rotor on the air (upstream)', { c: 'terr' });
        s += P('M ' + (cx - 40) + ' ' + (cy + 108) + ' L ' + (cx + 50) + ' ' + (cy + 108), 'terr', 2, null, '6 4') + A(cx + 40, cy + 108, cx + 52, cy + 108, 'terr', 2) + N(cx + 60, cy + 112, 'reaction: thrust of the air on the rotor', { c: 'terr' });
        s += A2(cx - 9, cy + 92, cx + 9, cy + 92, 'gold') + S(cx - 14, cy + 96, 'dx', { a: 'end', fs: 13, c: 'gold' });
        s += A(40, 262, 110, 262, 'ink', 1.4) + N(118, 266, 'x, flow direction (+)');
        return W(640, 275, s);
      };

      // 13.5 — velocity and pressure along the stream tube (Betz proportions v1 : v : v2 = 3 : 2 : 1)
      D.tf_betz_pv = () => {
        const xd = 320, x0 = 70, x1 = 590;
        let s = '';
        // velocity panel
        const VY = (x) => 145 - 35 * (2 - Math.tanh((x - xd) / 75));
        s += A(x0, 150, x1 + 10, 150, 'ink', 1.2) + A(x0, 150, x0, 22, 'ink', 1.2) + S(x0 - 8, 22, 'v', { a: 'end', fs: 15 });
        s += poly(fn((x) => [x, VY(x)], x0, x1, 80), 'tf', 2.4);
        s += L(x0, VY(x0), x1, VY(x0), 'mut', 1, '3 4') + S(x1 + 4, VY(x0) + 4, 'v₁', { c: 'tf', fs: 14 });
        s += L(x0, VY(xd), xd, VY(xd), 'mut', 1, '3 4') + S(xd + 12, VY(xd) - 10, 'v = ½(v₁ + v₂)', { c: 'tf', fs: 13 });
        s += L(xd, VY(x1), x1, VY(x1), 'mut', 1, '3 4') + S(x1 + 4, VY(x1) + 4, 'v₂', { c: 'tf', fs: 14 });
        s += dot(xd, VY(xd), 'tf', 4);
        // pressure panel
        const pb = 250, PY = (x) => x < xd ? pb - 34 * Math.exp((x - xd) / 55) : pb + 34 * Math.exp(-(x - xd) / 55);
        s += A(x0, 300, x1 + 10, 300, 'ink', 1.2) + A(x0, 300, x0, 182, 'ink', 1.2) + S(x0 - 8, 186, 'p', { a: 'end', fs: 15 });
        s += L(x0, pb, x1, pb, 'mut', 1, '3 4') + S(x1 + 4, pb + 4, 'p_{atm}', { fs: 13 });
        s += poly(fn((x) => [x, PY(x)], x0, xd - 0.5, 50), 'terr', 2.4) + poly(fn((x) => [x, PY(x)], xd + 0.5, x1, 50), 'terr', 2.4) + L(xd, pb - 34, xd, pb + 34, 'terr', 1.4, '3 3');
        s += A2(xd - 6, pb - 32, xd - 6, pb + 32, 'ink') + S(xd - 14, pb + 20, 'Δp = ½' + rho + '(v₁² − v₂²)', { fs: 13, a: 'end' });
        s += S(xd - 8, pb - 40, 'p⁺', { a: 'end', fs: 13, c: 'terr' }) + S(xd - 8, pb + 46, 'p⁻', { a: 'end', fs: 13, c: 'terr' });
        // rotor line
        s += L(xd, 18, xd, 304, 'vio', 1.6, '6 4') + N(xd, 14, 'rotor', { a: 'middle', c: 'vio' });
        s += N(330, 324, 'half the slow-down happens before the rotor, half after; the pressure jump at the disc does the work', { a: 'middle' });
        return W(660, 332, s);
      };

      // 13.6 — power coefficient against z = v2/v1, with the "wrong reference" curve of Classwork 2
      D.tf_betz_cp_curve = () => {
        const x0 = 70, y0 = 280, w = 430, h = 230;
        const X = (z) => x0 + z * w, Y = (c) => y0 - c / 0.7 * h;
        let s = axes(x0, y0, w, h) + S(x0 + w + 14, y0 + 36, 'z = v₂/v₁', { a: 'end', fs: 14 });
        s += S(x0 - 6, y0 - h - 20, 'C_P', { fs: 15 });
        [0, 0.2, 0.4, 0.6, 0.8, 1].forEach((z) => { s += tick(X(z), y0, String(z)); });
        [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7].forEach((c) => { s += tick(x0, Y(c), c.toFixed(1), true); });
        s += poly(fn((z) => [X(z), Y(1 - z * z)], 0.548, 1, 40), 'mut', 1.6, '6 4') + A(X(0.548), Y(0.7), X(0.53), Y(0.7) - 16, 'mut', 1.3) + N(X(0.52), Y(0.7) - 20, 'rises to 1 at z = 0 (off scale)', { c: 'mtx', a: 'end' });
        s += poly(fn((z) => [X(z), Y(0.5 * (1 + z) * (1 - z * z))], 0, 1, 80), 'tf', 2.6);
        s += L(X(1 / 3), Y(16 / 27), X(1 / 3), y0, 'gold', 1.2, '4 3') + L(x0, Y(16 / 27), X(1 / 3), Y(16 / 27), 'gold', 1.2, '4 3') + dot(X(1 / 3), Y(16 / 27), 'gold', 5);
        s += S(X(0.03), Y(0.69), 'Betz limit: z = 1/3', { c: 'gold', fs: 13 }) + S(X(0.03), Y(0.69) + 16, 'C_{P,max} = 16/27 = 0.593', { c: 'gold', fs: 13 });
        s += dot(X(0.625), Y(0.4951), 'terr', 4.5) + S(X(0.4), Y(0.3), 'Classwork 1: z = 5/8,', { c: 'terr', fs: 12 }) + S(X(0.4), Y(0.3) + 15, 'C_P = 0.495', { c: 'terr', fs: 12 }) + L(X(0.52), Y(0.3) - 14, X(0.62), Y(0.4951) + 5, 'terr', 0.9);
        s += dot(X(0.625), Y(0.6094), 'mut', 4) + N(X(0.625) + 9, Y(0.6094) - 18, '0.609 = Ẇ_{turbine}/Ẇ₁ = 1 − z²', { c: 'mtx' }) + N(X(0.625) + 9, Y(0.6094) - 4, '(dashed: the wrong reference)', { c: 'mtx' });
        s += S(X(0.04), Y(0.5) + 18, 'C_P = ½(1 + z)(1 − z²)', { c: 'tf', fs: 13.5 });
        s += N(X(0.88), Y(0.05) - 6, 'z → 1: nothing extracted', { a: 'end' });
        return W(620, 324, s);
      };

      // 13.7 — Classwork 2: why the reference is the air that would pass through A with no turbine
      D.tf_betz_timesteps = () => {
        let s = '';
        const r1 = 34, rA = 44, r2 = 72;
        // row 1: with turbine — the same mass at three timesteps
        s += T(20, 24, 'with the turbine: one parcel of air at three timesteps', { fs: 12, w: 600 });
        s += cyl(50, 100, 120, r1) + S(40, 104, 'A₁', { a: 'end', fs: 14 }) + N(110, 158, 'timestep 1', { a: 'middle' });
        s += cyl(275, 100, 70, rA) + disc(310, 100, rA + 12) + S(268, 60, 'A', { a: 'end', fs: 14 }) + N(310, 168, 'timestep 2 (at rotor)', { a: 'middle' });
        s += cyl(500, 100, 30, r2) + S(492, 40, 'A₂', { a: 'end', fs: 14 }) + N(515, 186, 'timestep 3', { a: 'middle' });
        s += A(190, 100, 255, 100, 'mut', 1.4) + A(372, 100, 480, 100, 'mut', 1.4);
        // row 2: no turbine — reference cylinder of area A at v1, with the A1 core marked
        const cy = 272;
        s += T(20, 214, 'no turbine (the reference): air of area A moving at v₁', { fs: 12, w: 600 });
        s += cyl(50, cy, 440, rA);
        s += L(50, cy - r1, 490, cy - r1, 'ink', 1.1, '4 3') + L(50, cy + r1, 490, cy + r1, 'ink', 1.1, '4 3');
        s += S(40, cy + 4, 'A', { a: 'end', fs: 14 }) + N(270, cy + 4, 'core A₁: this air goes through the rotor', { a: 'middle' });
        s += L(470, cy - 39, 520, cy - 39, 'terr', 1.2) + L(470, cy + 39, 520, cy + 39, 'terr', 1.2) + L(520, cy - 39, 520, cy + 39, 'terr', 1.2);
        s += N(528, cy - 10, 'outer ring A − A₁:', { c: 'terr' }) + N(528, cy + 4, 'spills round the rotor', { c: 'terr' }) + N(528, cy + 18, 'when the turbine is there', { c: 'terr' });
        s += S(330, 342, 'Ẇ_{air} = ½' + rho + 'Av₁³ counts all of it  →  C_P = Ẇ_{turbine}/Ẇ_{air}', { a: 'middle', fs: 13.5 });
        return W(700, 352, s);
      };

      // 13.8 — inside the nacelle (slide 56)
      D.tf_betz_nacelle = () => {
        let s = R(160, 100, 450, 72, 'tint', 'ink', 1.4, null, 22);
        s += R(445, 172, 26, 108, 'mut', 'ink', 1.3) ;
        s += ell(150, 136, 22, 26, 'ink', 'paper', 1.6);
        s += ell(140, 70, 10, 50, 'ink', 'mut', 1.4, null, 0.4) + ell(140, 202, 10, 50, 'ink', 'mut', 1.4, null, 0.4);
        s += L(172, 136, 262, 136, 'ink', 7);
        s += R(262, 112, 60, 48, 'gold', 'ink', 1.4, null, 4);
        s += L(322, 136, 410, 136, 'ink', 3.5) + R(352, 122, 14, 28, 'terr', 'ink', 1.2);
        s += R(410, 110, 86, 52, 'vio', 'ink', 1.4, null, 4);
        const lab = (x, y, x2, y2, t, a) => L(x, y, x2, y2, 'mtx', 0.9) + N(x2, y2 - 4, t, { a: a || 'middle', fs: 11.5 });
        s += L(128, 140, 108, 150, 'mtx', 0.9) + N(104, 154, 'hub', { a: 'end', fs: 11.5 });
        s += lab(216, 132, 216, 64, 'low-speed shaft');
        s += lab(292, 112, 300, 86, 'gearbox');
        s += lab(359, 122, 366, 64, 'brake');
        s += lab(386, 140, 378, 210, 'high-speed shaft');
        s += lab(453, 110, 462, 86, 'generator');
        s += lab(580, 110, 590, 76, 'nacelle');
        s += N(140, 274, 'blades', { a: 'middle', fs: 11.5 }) + N(458, 296, 'tower', { a: 'middle', fs: 11.5 });
        s += N(330, 318, 'gearbox steps the slow rotor speed up to the fast speed the generator is efficient at', { a: 'middle' });
        return W(640, 326, s);
      };

      // 13.8 — power chain from the wind to the grid
      D.tf_betz_chain = () => {
        let s = '';
        const bx = [20, 250, 480], lab = [['Ẇ_{air}', '(1/2)' + rho + 'Av₁³'], ['Ẇ_{turbine}', '= C_P Ẇ_{air}'], ['Ẇ_{elec}', '= η_{EM} Ẇ_{turbine}']];
        bx.forEach((x, i) => { s += box(x, 40, 160, 62, i === 0 ? 'tf' : i === 1 ? 'vio' : 'grn') + S(x + 80, 66, lab[i][0], { a: 'middle', fs: 15 }) + S(x + 80, 88, lab[i][1], { a: 'middle', fs: 13.5 }); });
        s += A(184, 71, 244, 71, 'ink', 2) + N(214, 60, 'blades', { a: 'middle' }) + S(214, 92, 'C_P ≤ 16/27', { a: 'middle', fs: 12, c: 'gold' });
        s += A(414, 71, 474, 71, 'ink', 2) + N(444, 60, 'generator', { a: 'middle' }) + S(444, 92, 'η_{EM} > 0.9', { a: 'middle', fs: 12, c: 'grn' });
        s += A(214, 104, 214, 150, 'mut', 1.6) + N(214, 166, 'left in the wake (v₂ > 0)', { a: 'middle' }) + N(214, 180, 'at least 40.7 % of Ẇ_{air}', { a: 'middle' });
        s += A(444, 104, 444, 150, 'terr', 1.6) + N(444, 166, 'heat in the generator', { a: 'middle', c: 'terr' }) + N(444, 180, '(1 − η_{EM}) Ẇ_{turbine}', { a: 'middle', c: 'terr' });
        s += N(330, 212, 'per 100 kW in the wind, at best: 59.3 kW at the blades → 53.3 kW electrical (η_{EM} = 0.9)', { a: 'middle' });
        return W(660, 222, s);
      };
    }
