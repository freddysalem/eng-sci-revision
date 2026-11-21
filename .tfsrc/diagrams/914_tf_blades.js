    // ===================== Topic 14 · Wind turbine blade design and BEM theory (w79 author) =====================
    // Conventions used in every diagram (they match the course figures, Async 2.1 Figs 9–10 and Session 2 slides 19–21):
    //   wind u∞ left → right; the blade section moves UP the page ("direction of aerofoil movement");
    //   so the apparent wind from rotation, u_rot = ωr, points DOWN; u_rel = u∞ + u_rot (vector sum).
    //   β = angle of twist (chord ↔ plane of rotation, drawn vertical); α = angle of attack (u_rel ↔ chord);
    //   φ = α + β (u_rel ↔ plane of rotation). Lift ⊥ u_rel, drag ∥ u_rel; δQ along the movement, δT along u∞.
    {
      const rad = (a) => a * Math.PI / 180;
      const pp = (cx, cy, r, a) => [cx + r * Math.cos(rad(a)), cy + r * Math.sin(rad(a))];
      const f1 = (p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1);
      // arc centred (cx,cy), radius r, from screen angle a1 to a2 (degrees, y down so + is clockwise)
      const arc = (cx, cy, r, a1, a2, c, w, dash) => { const p1 = pp(cx, cy, r, a1), p2 = pp(cx, cy, r, a2); return P('M ' + f1(p1) + ' A ' + r + ' ' + r + ' 0 ' + (Math.abs(a2 - a1) > 180 ? 1 : 0) + ' ' + (a2 > a1 ? 1 : 0) + ' ' + f1(p2), c || 'ink', w || 1.3, null, dash); };
      const Ap = (x, y, len, a, c, w) => { const q = pp(x, y, len, a); return A(x, y, q[0].toFixed(1), q[1].toFixed(1), c, w); };
      const S = (x, y, s, o) => T(x, y, s, Object.assign({ serif: true, fs: 13 }, o || {}));
      // NACA 4-digit style section: LE at (x0,y0), chord ch, chord direction ang (screen deg, LE→TE),
      // thickness t (fraction), camber m at p. 'Up' side = left normal of the chord direction (up when ang = 0).
      const foilPts = (x0, y0, ch, ang, t, m, p) => {
        const u = [Math.cos(rad(ang)), Math.sin(rad(ang))], n = [Math.sin(rad(ang)), -Math.cos(rad(ang))];
        const map = (X, Y) => [x0 + ch * (X * u[0] + Y * n[0]), y0 + ch * (X * u[1] + Y * n[1])];
        const up = [], lo = [], cam = [];
        for (let i = 0; i <= 40; i++) {
          const x = (1 - Math.cos(Math.PI * i / 40)) / 2;
          const yt = 5 * t * (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x * x + 0.2843 * x * x * x - 0.1036 * x * x * x * x);
          let yc = 0, dy = 0;
          if (m) { if (x < p) { yc = m / (p * p) * (2 * p * x - x * x); dy = 2 * m / (p * p) * (p - x); } else { yc = m / ((1 - p) * (1 - p)) * (1 - 2 * p + 2 * p * x - x * x); dy = 2 * m / ((1 - p) * (1 - p)) * (p - x); } }
          const th = Math.atan(dy);
          up.push(map(x - yt * Math.sin(th), yc + yt * Math.cos(th)));
          lo.push(map(x + yt * Math.sin(th), yc - yt * Math.cos(th)));
          cam.push(map(x, yc));
        }
        return { up, lo, cam, at: (X, Y) => map(X, Y || 0), te: map(1, 0) };
      };
      const foil = (fp, fill, c, w) => { const all = fp.up.concat(fp.lo.slice().reverse()); return '<path d="M ' + all.map(f1).join(' L ') + ' Z" fill="' + (fill ? col(fill) : 'none') + '" stroke="' + col(c || 'ink') + '" stroke-width="' + (w || 1.6) + '" stroke-linejoin="round"></path>'; };
      const brace = (x1, x2, y, up, c) => { const d = up ? -8 : 8, xm = (x1 + x2) / 2; return P('M ' + x1 + ' ' + (y + d) + ' L ' + x1 + ' ' + y + ' L ' + x2 + ' ' + y + ' L ' + x2 + ' ' + (y + d) + ' M ' + xm + ' ' + y + ' L ' + xm + ' ' + (y - d), c || 'ink', 1.4); };
      const streamline = (x1, x2, y0, f) => poly(fn((x) => [x, y0 + f(x)], x1, x2, 60), 'tf', 1.3);

      // ---------- 1. Aerofoil definitions (Async 2.1 Fig 1) ----------
      D.tf_blades_aerofoil = () => {
        let s = '';
        const a = foilPts(150, 105, 400, 0, 0.13, 0.05, 0.4);
        s += foil(a, 'tint', 'ink', 1.8) + L(150, 105, 550, 105, 'tf', 1.6) + poly(a.cam, 'gold', 1.6, '6 4');
        s += dot(150, 105, 'ink', 3.5) + dot(550, 105, 'ink', 3.5);
        s += S(140, 100, 'leading edge', { a: 'end' }) + S(560, 100, 'trailing edge');
        const ue = a.up[12], le = a.lo[14], cm = a.cam[22];
        s += L(ue[0], ue[1], ue[0] - 18, 34, 'mut', 1) + S(ue[0] - 18, 28, 'upper edge', { a: 'middle' });
        s += L(le[0], le[1], le[0] - 30, 150, 'mut', 1) + S(le[0] - 30, 165, 'lower edge', { a: 'middle' });
        s += L(cm[0], cm[1], 440, 40, 'mut', 1) + S(440, 34, 'camber line', { a: 'middle', c: 'gold' });
        s += L(380, 105, 400, 140, 'mut', 1) + S(400, 154, 'chord (straight LE → TE), length c', { a: 'middle', c: 'tf' });
        s += N(350, 190, '(a) asymmetric (cambered) aerofoil', { a: 'middle', fs: 12 });
        const b = foilPts(150, 255, 400, 0, 0.10, 0, 0);
        s += foil(b, 'tint', 'ink', 1.8) + L(150, 255, 550, 255, 'tf', 1.6) + dot(150, 255, 'ink', 3.5) + dot(550, 255, 'ink', 3.5);
        s += S(140, 250, 'leading edge', { a: 'end' }) + S(560, 250, 'trailing edge');
        s += L(420, 255, 440, 285, 'mut', 1) + S(440, 299, 'chord = camber line', { a: 'middle', c: 'tf' });
        s += N(350, 325, '(b) symmetric aerofoil: camber line and chord coincide', { a: 'middle', fs: 12 });
        s += A(20, 150, 80, 150, 'tf', 1.8) + S(24, 140, 'wind', { c: 'tf', fs: 12 });
        return W(720, 335, s);
      };

      // ---------- 2. Angle of attack, lift and drag (Async 2.1 Figs 2–4) ----------
      D.tf_blades_alpha = () => {
        let s = '';
        const panel = (ox, al, t, m, p, title, lift) => {
          let q = '';
          const cx = ox + 45, cy = 130, ch = 140;
          const fp = foilPts(cx, cy - (al ? 12 : 0), ch, al, t, m, p);
          // streamlines: pushed apart around the section; a lifting section turns the flow downwards behind it
          [-75, -50, -27, 27, 50, 75].forEach((y0) => {
            const sgn = y0 < 0 ? -1 : 1;
            q += streamline(ox + 8, ox + 228, cy + y0, (x) => { const z = (x - (cx + 60)) / 55; const bump = sgn * 8 * Math.exp(-z * z) * (40 / Math.abs(y0)); const dw = lift ? lift * 14 / (1 + Math.exp(-(x - cx - 90) / 22)) : 0; return bump + dw; });
          });
          q += foil(fp, 'paper', 'terr', 1.8);
          q += L(fp.at(0)[0], fp.at(0)[1], fp.te[0], fp.te[1], 'gold', 1.2, '5 3');
          q += A(ox + 6, cy, ox + 34, cy, 'tf', 1.8) + V(ox + 10, cy - 8, 'u_∞', { c: 'tf', fs: 13 });
          const c0 = fp.at(0.3);
          q += A(c0[0], c0[1], c0[0] + 34, c0[1], 'terr', 2.2) + V(c0[0] + 28, c0[1] + 30, 'D', { c: 'terr', fs: 14 });
          if (lift) q += A(c0[0], c0[1], c0[0], c0[1] - 70, 'terr', 2.2) + V(c0[0] + 6, c0[1] - 62, 'L', { c: 'terr', fs: 14 });
          if (al) { q += L(cx - 20, cy - 12, cx + 112, cy - 12, 'ink', 1, '3 3') + arc(cx, cy - 12, 95, 0, al, 'ink', 1.5) + V(cx + 100, cy - 17, 'α', { fs: 16 }); }
          if (lift) q += N(ox + 118, 40, 'low pressure', { a: 'middle', fs: 11 }) + N(ox + 118, 228, 'high pressure', { a: 'middle', fs: 11 });
          q += N(ox + 118, 262, title, { a: 'middle', fs: 11.5 });
          return q;
        };
        s += panel(0, 0, 0.11, 0, 0, '(a) symmetric, α = 0', 0);
        s += panel(244, 12, 0.11, 0, 0, '(b) symmetric, α > 0', 1);
        s += panel(488, 0, 0.12, 0.05, 0.4, '(c) asymmetric, α = 0', 0.6);
        s += N(366, 284, '(a) drag only · (b) lift + drag · (c) lift even at α = 0', { a: 'middle', fs: 11.5 });
        s += N(366, 300, 'L is perpendicular to the wind, D is along the wind — set by the wind direction, not the chord', { a: 'middle', fs: 11.5 });
        return W(732, 308, s);
      };

      // ---------- 3. Separation and stall (Async 2.1 Fig 5) ----------
      D.tf_blades_stall = () => {
        let s = '';
        const cx = 150, cy = 95, al = 22;
        const fp = foilPts(cx, cy, 240, al, 0.12, 0, 0);
        s += poly([[20, 50], [200, 49], [600, 44]], 'tf', 1.4) + poly([[20, 68], [140, 67], [220, 58], [600, 56]], 'tf', 1.4);
        s += poly([[20, 86], [110, 85], [146, 80], [200, 70], [330, 72], [600, 86]], 'tf', 1.4);
        s += poly([[20, 130], [120, 132], [200, 150], [cx + 240 * Math.cos(rad(al)) + 10, cy + 240 * Math.sin(rad(al)) + 12], [600, 222]], 'tf', 1.4);
        s += poly([[20, 165], [160, 172], [300, 200], [600, 232]], 'tf', 1.4);
        s += foil(fp, 'paper', 'terr', 1.8);
        // vortices on the upper (suction) surface, biggest at the trailing edge
        [[0.45, 16, 8], [0.62, 20, 10], [0.8, 26, 13], [0.98, 30, 17]].forEach((v) => {
          const c = fp.at(v[0], 0.07 + v[2] / 240);
          s += P('M ' + (c[0] + v[2]).toFixed(1) + ' ' + c[1].toFixed(1) + ' A ' + v[2] + ' ' + v[2] + ' 0 1 1 ' + (c[0]).toFixed(1) + ' ' + (c[1] + v[2]).toFixed(1), 'vio', 1.5) + Ap(c[0], c[1] + v[2], 4, 180, 'vio', 1.5);
        });
        const sp = fp.up[18];
        s += dot(sp[0], sp[1], 'vio', 4) + V(sp[0] - 10, sp[1] - 6, 'S', { c: 'vio', fs: 14, a: 'end' });
        s += A(24, 108, 70, 108, 'tf', 1.8) + V(28, 124, 'u_∞', { c: 'tf' });
        s += N(310, 16, 'separated flow: vortices on the upper edge → pressure there rises → lift falls (stall)', { a: 'middle', fs: 11.5, c: 'vio' });
        s += N(310, 256, 'S = separation point: starts at the TRAILING edge and moves forward as α grows (stall zone)', { a: 'middle', fs: 11.5 });
        s += N(310, 272, 'thin sections: narrow stall zone, lift collapses fast · thick sections: lift falls gradually', { a: 'middle', fs: 11.5 });
        return W(620, 282, s);
      };

      // ---------- 4. Reference area A = c × 1 (Async 2.1 Fig 6; Session 2 slide 22) ----------
      D.tf_blades_area = () => {
        let s = '';
        const off = [150, -70];
        const f0 = foilPts(120, 170, 190, -18, 0.13, 0.04, 0.4);
        const f1p = foilPts(120 + off[0], 170 + off[1], 190, -18, 0.13, 0.04, 0.4);
        s += foil(f1p, 'tint', 'ink', 1.3);
        s += L(120, 170, 120 + off[0], 170 + off[1], 'ink', 1.3) + L(f0.te[0], f0.te[1], f1p.te[0], f1p.te[1], 'ink', 1.3);
        s += L(f0.up[10][0], f0.up[10][1], f1p.up[10][0], f1p.up[10][1], 'ink', 1.3);
        s += foil(f0, 'paper', 'ink', 1.6);
        s += A2(120 - 6, 170 + 14, f0.te[0] - 6, f0.te[1] + 14, 'terr') + V((120 + f0.te[0]) / 2 - 4, (170 + f0.te[1]) / 2 + 34, 'c', { c: 'terr' });
        s += A2(f0.te[0] + 14, f0.te[1] + 4, f1p.te[0] + 14, f1p.te[1] + 4, 'terr') + S(f0.te[0] + 104, f0.te[1] - 24, '1 (unit span), or δr', { c: 'terr', fs: 12.5 });
        [[30, 120], [30, 160], [30, 200]].forEach((p) => { s += A(p[0], p[1], p[0] + 60, p[1] - 6, 'tf', 1.5); });
        s += V(36, 104, 'u_∞', { c: 'tf' }) + N(30, 232, '(u_rel on a rotating blade)', { fs: 11, c: 'tf' });
        s += S(470, 210, 'A = c × 1  per unit span', { fs: 14 }) + S(470, 232, 'element: A = c δr', { fs: 14 });
        return W(640, 250, s);
      };

      // ---------- 5. C_l and C_d against α (Async 2.1 Fig 7; Problem Sheet 2 Fig 1) ----------
      const thickCl = [[-2, -0.05], [-1, 0.015], [0, 0.082], [1, 0.157], [2, 0.24], [3, 0.327], [4, 0.424], [5, 0.522], [6, 0.633], [7, 0.746], [8, 0.87], [9, 0.993], [9.6, 1.07], [10, 1.12], [10.4, 1.125], [10.8, 1.095], [11.2, 1.04], [11.6, 1.0], [12, 0.969], [13, 0.934], [14, 0.919], [15, 0.913], [16, 0.911], [17, 0.905]];
      const thickCd = [[0.4, 0.056], [2, 0.0555], [3.5, 0.056], [5, 0.056], [6, 0.058], [7, 0.063], [8, 0.073], [9, 0.093], [10, 0.12], [11, 0.161], [12, 0.198], [13, 0.23], [14, 0.251], [15, 0.266], [16, 0.275], [17, 0.281]];
      const thinCl = [[-1, -0.09], [0, 0.012], [1, 0.109], [2, 0.211], [3, 0.308], [4, 0.408], [5, 0.501], [6, 0.595], [7, 0.685], [8, 0.777], [9, 0.864], [10, 0.952], [10.5, 0.981], [11, 0.947], [11.5, 0.853], [12, 0.708]];
      const thinCd = [[0.6, 0.047], [2, 0.047], [4, 0.047], [6, 0.047], [7.3, 0.047], [8.5, 0.05], [9, 0.053], [9.5, 0.06], [10, 0.073], [10.5, 0.093], [11, 0.119], [11.5, 0.145], [12, 0.181], [12.5, 0.211], [13, 0.228], [14, 0.249]];
      const clPanel = (x0, title, cl, cd, mark) => {
        const y0 = 250, w = 260, h = 200;
        const X = (a) => x0 + (a + 3) / 21 * w, Y = (c) => y0 - (c + 0.1) / 1.35 * h, Yd = (d) => Y(2.5 * d);
        let s = R(x0, Y(1.25), w, y0 - Y(1.25), null, 'mut', 1);
        [0, 0.25, 0.5, 0.75, 1, 1.25].forEach((c) => { s += L(x0, Y(c), x0 + w, Y(c), 'mut', 0.6, '2 3') + T(x0 - 6, Y(c) + 4, c.toFixed(2), { fs: 10, a: 'end', c: 'tf' }); });
        [0, 0.1, 0.2, 0.3, 0.4, 0.5].forEach((d) => { s += T(x0 + w + 6, Yd(d) + 4, d.toFixed(1), { fs: 10, c: 'terr' }); });
        [0, 5, 10, 15].forEach((a) => { s += L(X(a), Y(-0.1), X(a), Y(1.25), 'mut', 0.8, '4 3') + T(X(a), y0 + 15, String(a), { fs: 10.5, a: 'middle', c: 'mtx' }); });
        s += poly(cl.map((p) => [X(p[0]), Y(p[1])]), 'tf', 2.2) + poly(cd.map((p) => [X(p[0]), Yd(p[1])]), 'terr', 2);
        cd.filter((p, i) => i % 2 === 0).forEach((p) => { s += ci(X(p[0]), Yd(p[1]), 3, 'terr', 1.3, null, 'paper'); });
        s += V(x0 + w / 2, y0 + 34, 'α (degrees)', { a: 'middle', fs: 13 }) + V(x0 - 40, Y(1.25) - 8, 'C_l', { c: 'tf', fs: 14 }) + V(x0 + w + 4, Y(1.25) - 8, 'C_d', { c: 'terr', fs: 14 });
        s += N(x0 + w / 2, Y(1.25) - 24, title, { a: 'middle', fs: 12, w: 600 });
        if (mark) { s += L(X(mark.a), Y(-0.1), X(mark.a), Y(1.25), 'gold', 1.6) + dot(X(mark.a), Y(mark.cl), 'tf', 4) + dot(X(mark.a), Yd(mark.cd), 'terr', 4) + N(X(mark.a) + 6, Y(mark.cl) + 14, mark.lab1, { c: 'tf', fs: 11 }) + N(X(mark.a) - 6, Yd(mark.cd) - 8, mark.lab2, { c: 'terr', fs: 11, a: 'end' }); }
        return s;
      };
      D.tf_blades_clcd = () => {
        let s = clPanel(60, '(a) thick symmetric aerofoils', thickCl, thickCd, { a: 8, cl: 0.87, cd: 0.073, lab1: 'best C_l/C_d ≈ 12', lab2: 'α ≈ 8°' });
        s += clPanel(420, '(b) thin symmetric aerofoils', thinCl, thinCd, { a: 9, cl: 0.864, cd: 0.053, lab1: 'best C_l/C_d ≈ 16', lab2: 'α ≈ 9°' });
        s += N(375, 300, 'C_l (teal, left axis): rises almost linearly with α, peaks, then falls at stall', { a: 'middle', fs: 11 });
        s += N(375, 315, 'C_d (terracotta, right axis): small and flat, then climbs steeply once separation starts', { a: 'middle', fs: 11 });
        return W(750, 325, s);
      };
      D.tf_blades_clcd_q3 = () => {
        let s = clPanel(70, 'Problem Sheet 2, Fig. 1 — thick aerofoil', thickCl, thickCd, { a: 8, cl: 0.865, cd: 0.072, lab1: 'C_l ≈ 0.86', lab2: 'C_d ≈ 0.07' });
        s += N(200, 312, 'gold line: α = 8.0° (Q2b) — read both coefficients off this line', { a: 'middle', fs: 11 });
        return W(420, 322, s);
      };

      // ---------- 6. Velocity triangles near the root and far from it (Async 2.1 Fig 9) ----------
      const tri = (ox, oy, ui, ur, lab, phiR) => {
        let s = L(ox + ui, oy, ox + ui, oy + ur, 'mut', 1.2, '5 4') + L(ox, oy + ur, ox + ui, oy + ur, 'mut', 1.2, '5 4');
        s += A(ox, oy, ox + ui, oy, 'ink', 2) + A(ox, oy, ox, oy + ur, 'ink', 2) + A(ox, oy, ox + ui, oy + ur, 'tf', 2.4);
        s += V(ox + ui / 2, oy - 8, 'u_∞', { a: 'middle' }) + V(ox - 8, oy + ur / 2 + 5, 'u_{rot}', { a: 'end' });
        const ang = Math.atan2(ur, ui) * 180 / Math.PI;
        s += V(ox + ui * 0.55 + 10, oy + ur * 0.55 - 6, 'u_{rel}', { c: 'tf' });
        s += arc(ox, oy, phiR, ang, 90, 'gold', 1.6) + V(pp(ox, oy, phiR + 12, (ang + 90) / 2)[0] - 4, pp(ox, oy, phiR + 12, (ang + 90) / 2)[1] + 5, 'φ', { c: 'gold', fs: 14 });
        s += L(ox, oy - 30, ox, oy, 'mut', 1.2, '6 4') + N(ox, oy - 36, 'plane of rotation', { a: 'middle', fs: 10.5 });
        s += A(ox + ui + 34, oy + 44, ox + ui + 34, oy + 4, 'ink', 2) + N(ox + ui + 40, oy + 22, 'blade', { fs: 10.5 }) + N(ox + ui + 40, oy + 34, 'moves', { fs: 10.5 });
        if (lab) s += N(ox + ui / 2, oy + ur + 22, lab, { a: 'middle', fs: 11.5 });
        return s;
      };
      D.tf_blades_vtri = () => {
        let s = tri(70, 70, 190, 60, '(a) close to the root: u_rot small, φ large', 34);
        s += tri(420, 70, 190, 220, '(b) far from the root: u_rot large, φ small', 46);
        s += N(165, 190, 'u_rot = ωr points opposite', { a: 'middle', fs: 11.5 }) + N(165, 205, 'to the blade’s motion (it is the', { a: 'middle', fs: 11.5 }) + N(165, 220, 'wind the moving blade "feels")', { a: 'middle', fs: 11.5 });
        s += V(165, 258, 'u_{rel} = √(u_∞² + (ωr)²)', { a: 'middle', fs: 14, c: 'tf' }) + V(165, 284, 'tan φ = u_∞ / (ωr)', { a: 'middle', fs: 14, c: 'gold' });
        return W(720, 330, s);
      };

      // ---------- 7. Angle of twist along the blade (Session 2 slides 10–12; Async 2.1 Fig 10) ----------
      D.tf_blades_twist = () => {
        let s = '';
        const ui = 70, alpha = 8;
        [[110, 40, 'root'], [340, 110, 'mid span'], [570, 220, 'tip']].forEach((st, k) => {
          const x = st[0], ur = st[1];
          const phi = Math.atan2(ui, ur) * 180 / Math.PI, beta = phi - alpha;
          const ang = 90 - beta;                 // chord direction below horizontal
          const ch = 120, LE = [x, 70];
          const fp = foilPts(LE[0], LE[1], ch, ang, 0.13, 0, 0);
          s += L(x, 40, x, 210, 'mut', 1.1, '6 4');      // plane of rotation
          s += L(x - 34 * Math.cos(rad(90 - phi)), 70 - 34 * Math.sin(rad(90 - phi)), x, 70, 'tf', 1.4, '4 3');
          s += N(x, 224, 'plane of rotation', { a: 'middle', fs: 10 });
          s += foil(fp, 'tint', 'ink', 1.6) + L(LE[0], LE[1], fp.te[0], fp.te[1], 'ink', 0.9, '3 3');
          const br = beta > 15 ? 52 : 80;
          s += arc(x, 70, br, ang, 90, 'terr', 1.5) + V(x - 6, 70 + br + 4, 'β', { c: 'terr', fs: 14, a: 'end' });
          s += N(x, 16, st[2] + ':  β = ' + beta.toFixed(0) + '°,  φ = ' + phi.toFixed(0) + '°', { a: 'middle', fs: 11.5, w: 600 });
          // velocity triangle underneath (same scale): u∞ right, u_rot down
          const ox = x - 40, oy = 252;
          const sc = 0.6;
          s += A(ox, oy, ox + ui * sc, oy, 'ink', 1.8) + A(ox, oy, ox, oy + ur * sc, 'ink', 1.8) + A(ox, oy, ox + ui * sc, oy + ur * sc, 'tf', 2);
          s += L(ox + ui * sc, oy, ox + ui * sc, oy + ur * sc, 'mut', 1, '4 3');
          s += V(ox + ui * sc / 2, oy - 6, 'u_∞', { a: 'middle', fs: 12 }) + V(ox - 5, oy + ur * sc / 2 + 4, 'u_{rot}', { a: 'end', fs: 12 }) + V(ox + ui * sc + 6, oy + ur * sc * 0.6, 'u_{rel}', { c: 'tf', fs: 12 });
        });
        s += A(690, 160, 690, 90, 'ink', 2) + N(690, 176, 'blade', { a: 'middle', fs: 11 }) + N(690, 189, 'moves', { a: 'middle', fs: 11 });
        s += A(10, 120, 50, 120, 'ink', 1.8) + N(12, 138, 'wind', { fs: 11 });
        s += N(360, 402, 'same α = 8° at every station: as u_rot = ωr grows, φ shrinks,', { a: 'middle', fs: 11.5 }) + N(360, 417, 'so the twist β = φ − α must shrink towards the tip', { a: 'middle', fs: 11.5 });
        return W(720, 426, s);
      };

      // ---------- 8. Blade regions — the two definitions (Session 2 slides 4–9) ----------
      D.tf_blades_sections = () => {
        let s = '';
        const top = 'M 40 140 Q 260 122 500 96 C 545 92 572 100 598 114 L 662 114';
        const bot = 'L 662 166 L 598 166 C 572 176 545 182 500 180 Q 260 172 40 142 Z';
        s += P(top + ' ' + bot, 'ink', 1.6, 'tint');
        s += P('M 662 114 A 10 26 0 0 1 662 166', 'ink', 1.4);
        s += brace(40, 538, 76, true, 'tf') + brace(538, 600, 76, true, 'tf') + brace(600, 662, 76, true, 'tf');
        s += N(40, 24, 'Definition 1', { fs: 12, w: 600, c: 'tf' });
        s += S(289, 62, 'aerodynamic region', { a: 'middle', c: 'tf' }) + S(569, 52, 'transition', { a: 'middle', c: 'tf', fs: 12 }) + S(569, 66, 'region', { a: 'middle', c: 'tf', fs: 12 }) + S(631, 62, 'root', { a: 'middle', c: 'tf' });
        s += brace(40, 112, 204, false, 'vio') + brace(112, 592, 204, false, 'vio') + brace(592, 662, 204, false, 'vio');
        s += N(40, 252, 'Definition 2', { fs: 12, w: 600, c: 'vio' });
        s += S(76, 228, 'tip', { a: 'middle', c: 'vio' }) + S(352, 228, 'mid span', { a: 'middle', c: 'vio' }) + S(627, 228, 'root', { a: 'middle', c: 'vio' });
        s += N(380, 268, 'hub end on the right (cylindrical root fixes to the hub) · tip on the left', { a: 'middle', fs: 11 });
        return W(700, 278, s);
      };

      // ---------- 9. One blade element seen front-on = an annular ring (Session 2 slides 15–16, 27–31) ----------
      D.tf_blades_annulus = () => {
        const cx = 220, cy = 215, R0 = 175, rr = 100, dr = 24;
        let s = ci(cx, cy, R0, 'ink', 1.6);
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rr + '" fill="none" stroke="' + tint + '" stroke-width="' + dr + '"></circle>';
        s += ci(cx, cy, rr - dr / 2, 'terr', 1.4) + ci(cx, cy, rr + dr / 2, 'terr', 1.4);
        [90, 210, 330].forEach((a) => {
          const u = [Math.cos(rad(a)), Math.sin(rad(a))], n = [-u[1], u[0]];
          const pt = (r, w) => [cx + r * u[0] + w * n[0], cy + r * u[1] + w * n[1]];
          const d = [pt(14, -7), pt(55, -13), pt(R0 - 4, -2), pt(R0 - 4, 2), pt(55, 9), pt(14, 7)];
          s += '<path d="M ' + d.map(f1).join(' L ') + ' Z" fill="' + paper + '" stroke="' + ink + '" stroke-width="1.4" stroke-linejoin="round"></path>';
          const e = [pt(rr - dr / 2, -8), pt(rr + dr / 2, -7), pt(rr + dr / 2, 6), pt(rr - dr / 2, 6)];
          s += '<path d="M ' + e.map(f1).join(' L ') + ' Z" fill="' + col('grn') + '" fill-opacity="0.75" stroke="' + ink + '" stroke-width="1"></path>';
        });
        s += ci(cx, cy, 14, 'ink', 1.4, null, 'mut');
        // r_i to the centre of the element on the lower blade
        s += A(cx, cy, cx, cy + rr - 2, 'gold', 1.8) + V(cx + 8, cy + 52, 'r_i', { c: 'gold' });
        // δr marker
        const pa = pp(cx, cy, rr - dr / 2, 200), pb = pp(cx, cy, rr + dr / 2, 200);
        s += A2(pa[0], pa[1], pb[0], pb[1], 'terr') + V(pb[0] - 26, pb[1] + 4, 'δr', { c: 'terr' });
        // R
        s += L(cx + R0 + 30, cy - R0, cx + R0 + 30, cy, 'mut', 1, '3 3') + A2(cx, cy - R0 - 14, cx + R0, cy - R0 - 14, 'ink') + V(cx + R0 / 2, cy - R0 - 20, 'R', { a: 'middle' });
        s += L(cx, cy - R0 - 22, cx, cy, 'mut', 1, '3 3');
        // δQ_i around the ring, δT_i into the page
        s += P('M ' + f1(pp(cx, cy, rr + 26, -150)) + ' A ' + (rr + 26) + ' ' + (rr + 26) + ' 0 0 1 ' + f1(pp(cx, cy, rr + 26, -105)), 'grn', 2.2) + Ap(pp(cx, cy, rr + 26, -106)[0], pp(cx, cy, rr + 26, -106)[1], 6, -16, 'grn', 2.2);
        s += V(pp(cx, cy, rr + 44, -135)[0], pp(cx, cy, rr + 44, -135)[1], 'δQ_i', { c: 'grn', a: 'end' });
        const e1 = pp(cx, cy, rr, 330);
        s += ci(e1[0] + 40, e1[1] - 30, 8, 'vio', 1.6) + L(e1[0] + 34, e1[1] - 36, e1[0] + 46, e1[1] - 24, 'vio', 1.6) + L(e1[0] + 46, e1[1] - 36, e1[0] + 34, e1[1] - 24, 'vio', 1.6) + V(e1[0] + 54, e1[1] - 26, 'δT_i (into page)', { c: 'vio', fs: 13 });
        s += L(cx + 120, cy + 70, 440, 330, 'mut', 1) + N(444, 334, 'annular ring', { fs: 11.5 }) + N(444, 348, '(element i on all Z blades)', { fs: 11.5 });
        s += N(444, 372, 'chord of each element = c', { fs: 11.5 });
        return W(600, 410, s);
      };

      // ---------- 10. THE blade-element force picture (Session 2 slides 17–19) ----------
      D.tf_blades_forces = () => {
        const phi = 40, al = 12, be = phi - al;               // φ = α + β
        const O = [60, 60], ur = 150;
        const ui = ur * Math.sin(rad(phi)), uro = ur * Math.cos(rad(phi));
        const LE = [O[0] + ui + 4, O[1] + uro + 4];
        let s = '';
        // velocity triangle (course layout)
        s += L(O[0] + ui, O[1], O[0] + ui, O[1] + uro, 'mut', 1.2, '5 4') + L(O[0], O[1] + uro, O[0] + ui, O[1] + uro, 'mut', 1.2, '5 4');
        s += A(O[0], O[1], O[0] + ui, O[1], 'ink', 2) + A(O[0], O[1], O[0], O[1] + uro, 'ink', 2) + A(O[0], O[1], O[0] + ui, O[1] + uro, 'tf', 2.4);
        s += V(O[0] + ui / 2, O[1] - 10, 'u_∞', { a: 'middle' }) + V(O[0] - 8, O[1] + uro / 2, 'u_{rot}', { a: 'end' }) + N(O[0] - 8, O[1] + uro / 2 + 15, '= ωr', { a: 'end', fs: 11 });
        s += V(O[0] + ui * 0.52 + 12, O[1] + uro * 0.52 - 4, 'u_{rel}', { c: 'tf' });
        // plane of rotation through the leading edge, u_rel extended
        s += L(LE[0], LE[1] - 60, LE[0], LE[1] + 245, 'mut', 1.2, '7 4') + N(LE[0] - 8, LE[1] + 240, 'plane of rotation', { a: 'end', fs: 11 });
        const ext = pp(LE[0], LE[1], 148, 90 - phi);
        s += L(LE[0], LE[1], ext[0], ext[1], 'tf', 1.6, '5 3');
        // aerofoil: chord at β from the plane of rotation
        const fp = foilPts(LE[0], LE[1], 265, 90 - be, 0.13, 0, 0);
        s += foil(fp, 'paper', 'ink', 1.8) + L(LE[0], LE[1], fp.te[0], fp.te[1], 'ink', 1, '6 3');
        // angles
        s += arc(LE[0], LE[1], 50, 90 - be, 90, 'terr', 1.8) + V(LE[0] - 6, LE[1] + 56, 'β', { c: 'terr', fs: 16, a: 'end' });
        s += arc(LE[0], LE[1], 125, 90 - phi, 90 - be, 'vio', 1.8) + L(pp(LE[0], LE[1], 125, 90 - be - al / 2)[0], pp(LE[0], LE[1], 125, 90 - be - al / 2)[1], pp(LE[0], LE[1], 150, 40)[0], pp(LE[0], LE[1], 150, 40)[1], 'vio', 1) + V(pp(LE[0], LE[1], 156, 39)[0], pp(LE[0], LE[1], 156, 39)[1] + 2, 'α', { c: 'vio', fs: 16 });
        s += arc(LE[0], LE[1], 88, 90 - phi, 90, 'gold', 1.6, '4 3') + V(LE[0] - 6, LE[1] + 96, 'φ', { c: 'gold', fs: 16, a: 'end' });
        // forces at ~55 % chord
        const F = fp.at(0.85);
        const Lm = 150, Dm = 46;
        const dQ = Lm * Math.sin(rad(phi)) - Dm * Math.cos(rad(phi)), dT = Lm * Math.cos(rad(phi)) + Dm * Math.sin(rad(phi));
        s += Ap(F[0], F[1], Lm, -phi, 'terr', 2.4) + Ap(F[0], F[1], Dm, 90 - phi, 'terr', 2.4);
        s += A(F[0], F[1], F[0], F[1] - dQ, 'grn', 2.6) + A(F[0], F[1], F[0] + dT, F[1], 'vio', 2.6);
        const Lt = pp(F[0], F[1], Lm + 8, -phi), Dt = pp(F[0], F[1], Dm + 10, 90 - phi);
        s += V(Lt[0] + 2, Lt[1], 'δL', { c: 'terr' }) + V(Dt[0] + 4, Dt[1] + 10, 'δD', { c: 'terr' });
        s += V(F[0] + 6, F[1] - dQ + 4, 'δQ', { c: 'grn' }) + V(F[0] + dT + 6, F[1] + 5, 'δT', { c: 'vio' });
        // direction of movement and wind
        s += A(660, 150, 660, 70, 'ink', 3) + N(660, 168, 'direction of', { a: 'middle', fs: 11 }) + N(660, 181, 'aerofoil movement', { a: 'middle', fs: 11 });
        s += A(560, 40, 640, 40, 'tf', 2) + N(600, 30, 'wind u_∞', { a: 'middle', fs: 11, c: 'tf' });
        // key
        let ky = 330; const key = (t, c) => { s += S(470, ky, t, { c, fs: 13 }); ky += 20; };
        key('β  angle of twist: chord ↔ plane of rotation', 'terr');
        key('α  angle of attack: u_rel ↔ chord', 'vio');
        key('φ = α + β : u_rel ↔ plane of rotation', 'gold');
        key('δL perpendicular to u_rel,  δD along u_rel', 'terr');
        key('δQ along the motion,  δT along u_∞', 'grn');
        return W(720, 440, s);
      };

      // ---------- 11. Component diagram: δL, δD → δQ, δT (Session 2 slides 20–21) ----------
      D.tf_blades_resolve = () => {
        const phi = 40, O = [210, 235], Lm = 175, Dm = 62;
        const sp = Math.sin(rad(phi)), cp = Math.cos(rad(phi));
        let s = '';
        const ul = pp(O[0], O[1], 150, 270 - phi), ur2 = O;
        s += L(ul[0], ul[1], ur2[0], ur2[1], 'tf', 1.3, '5 4') + V(ul[0] - 4, ul[1] - 6, 'u_{rel} line', { c: 'tf', fs: 12, a: 'end' });
        const Lt = pp(O[0], O[1], Lm, -phi), Dt = pp(O[0], O[1], Dm, 90 - phi);
        // projections of δL and δD
        s += L(Lt[0], Lt[1], O[0], Lt[1], 'terr', 1, '3 3') + L(Lt[0], Lt[1], Lt[0], O[1] + 83, 'terr', 1, '3 3') + L(O[0], O[1], O[0], O[1] + 83, 'terr', 1, '3 3');
        s += L(Dt[0], Dt[1], O[0] - 16, Dt[1], 'terr', 1, '3 3') + L(Dt[0], Dt[1], Dt[0], O[1] + 61, 'terr', 1, '3 3');
        // component legs, each with a double-headed arrow and its own label
        s += A2(Lt[0] + 16, O[1], Lt[0] + 16, Lt[1], 'terr') + N(Lt[0] + 22, (O[1] + Lt[1]) / 2 + 4, 'δL sin φ', { c: 'terr', fs: 11.5 });
        s += A2(O[0], O[1] + 83, Lt[0], O[1] + 83, 'terr') + N((O[0] + Lt[0]) / 2, O[1] + 99, 'δL cos φ', { a: 'middle', c: 'terr', fs: 11.5 });
        s += A2(O[0] - 16, O[1], O[0] - 16, Dt[1], 'terr') + N(O[0] - 22, (O[1] + Dt[1]) / 2 + 4, 'δD cos φ', { a: 'end', c: 'terr', fs: 11.5 });
        s += A2(O[0], O[1] + 61, Dt[0], O[1] + 61, 'terr') + N(Dt[0] + 6, O[1] + 65, 'δD sin φ', { c: 'terr', fs: 11.5 });
        s += A(O[0], O[1], O[0], O[1] - (Lm * sp - Dm * cp), 'grn', 3) + A(O[0], O[1], O[0] + Lm * cp + Dm * sp, O[1], 'vio', 3);
        s += Ap(O[0], O[1], Lm, -phi, 'terr', 2.4) + Ap(O[0], O[1], Dm, 90 - phi, 'terr', 2.4);
        s += V(Lt[0] + 6, Lt[1] - 2, 'δL', { c: 'terr' }) + V(Dt[0] + 8, Dt[1] - 2, 'δD', { c: 'terr' });
        s += V(O[0] - 8, O[1] - (Lm * sp - Dm * cp) + 4, 'δQ', { c: 'grn', a: 'end' }) + V(O[0] + Lm * cp + Dm * sp + 8, O[1] + 5, 'δT', { c: 'vio' });
        // angles
        s += arc(O[0], O[1], 44, 270 - phi, 270, 'gold', 1.5) + V(pp(O[0], O[1], 56, 270 - phi / 2)[0] - 2, pp(O[0], O[1], 56, 270 - phi / 2)[1] + 4, 'φ', { c: 'gold', fs: 14, a: 'middle' });
        s += arc(O[0], O[1], 70, 270, 360 - phi, 'ink', 1.3) + T(pp(O[0], O[1], 84, 293)[0] + 2, pp(O[0], O[1], 84, 293)[1], '90°−φ', { fs: 12, serif: true });
        s += arc(O[0], O[1], 110, -phi, 0, 'gold', 1.5) + V(pp(O[0], O[1], 120, -phi / 2)[0] + 4, pp(O[0], O[1], 120, -phi / 2)[1] + 4, 'φ', { c: 'gold', fs: 14 });
        s += arc(O[0], O[1], 34, 90 - phi, 90, 'gold', 1.3) + V(pp(O[0], O[1], 46, 90 - phi / 2)[0] - 8, pp(O[0], O[1], 46, 90 - phi / 2)[1] + 8, 'φ', { c: 'gold', fs: 13 });
        s += A(500, 120, 500, 60, 'ink', 2.6) + N(500, 136, 'aerofoil', { a: 'middle', fs: 11 }) + N(500, 149, 'movement', { a: 'middle', fs: 11 });
        s += A(420, 330, 500, 330, 'tf', 1.8) + V(460, 322, 'u_∞', { c: 'tf', a: 'middle' });
        s += N(20, 60, 'δD cos φ acts against the motion,', { fs: 11 }) + N(20, 74, 'so it is subtracted in δQ', { fs: 11 });
        s += S(20, 362, 'δQ = δL sin φ − δD cos φ', { c: 'grn', fs: 14 }) + S(240, 362, 'δT = δL cos φ + δD sin φ', { c: 'vio', fs: 14 });
        return W(560, 375, s);
      };

      // ---------- 12. Thrust at hub height → overturning moment on the foundations (Session 2 slides 17–18, 34; PS2 Q4) ----------
      D.tf_blades_rotor = () => {
        let s = '';
        const gx = 300, gy = 305, hy = 128, Rr = 92;
        s += R(80, gy, 440, 14, 'url(#tf-hatch)') + L(80, gy, 520, gy, 'ink', 1.8);
        s += P('M ' + (gx - 9) + ' ' + gy + ' L ' + (gx - 4) + ' ' + hy + ' L ' + (gx + 4) + ' ' + hy + ' L ' + (gx + 9) + ' ' + gy + ' Z', 'ink', 1.4, 'paper');
        s += R(gx - 4, hy - 12, 46, 24, 'mut', 'ink', 1.2, null, 6);
        s += P('M ' + (gx - 4) + ' ' + hy + ' l -14 -9 l 0 18 Z', 'ink', 1.2, 'ink');
        s += L(gx - 12, hy - Rr, gx - 12, hy + Rr, 'ink', 3) + dot(gx - 12, hy - Rr, 'ink', 2) + dot(gx - 12, hy + Rr, 'ink', 2);
        [88, 113, 138, 163, 188].forEach((y) => { s += A(110, y, 190, y, 'tf', 1.6); });
        s += V(120, 78, 'u_∞', { c: 'tf' });
        s += A(gx + 44, hy, gx + 130, hy, 'vio', 3) + V(gx + 136, hy + 5, 'T = Σ δT_i', { c: 'vio' });
        s += A2(gx + 70, gy, gx + 70, hy + 2, 'ink') + V(gx + 78, (gy + hy) / 2, 'h  (hub height)', { fs: 14 });
        s += P('M ' + (gx - 40) + ' ' + (gy - 18) + ' A 40 22 0 0 1 ' + (gx + 40) + ' ' + (gy - 18), 'terr', 2.2) + Ap(gx + 40, gy - 18, 5, 70, 'terr', 2.2);
        s += V(gx - 44, gy - 30, 'M = T h', { c: 'terr', a: 'end', fs: 15 });
        s += N(300, 16, 'every annulus’s thrust acts along the rotor axis, so the total T acts at the hub', { a: 'middle', fs: 11.5 });
        s += N(300, 336, 'torque τ = Σ r_i δQ_i turns the shaft; thrust T tries to push the turbine over', { a: 'middle', fs: 11.5 });
        return W(600, 345, s);
      };

      // ---------- 13. Problem Sheet 2, Fig. 3 — coefficients up to 100° (PS2 Q6) ----------
      D.tf_blades_ps_fig3 = () => {
        const x0 = 70, y0 = 270, w = 460, h = 210;
        const X = (a) => x0 + a / 100 * w, Y = (c) => y0 - c / 1.8 * h;
        const cL = [[10, 0.17], [12, 0.45], [15, 0.87], [18, 1.18], [20, 1.31], [25, 1.46], [30, 1.534], [35, 1.508], [40, 1.462], [45, 1.408], [50, 1.317], [55, 1.14], [60, 0.951], [65, 0.836], [70, 0.726], [75, 0.578], [80, 0.438], [85, 0.357], [90, 0.295], [95, 0.221], [100, 0.147]];
        const cD = [[10, 0.152], [15, 0.16], [20, 0.173], [25, 0.195], [30, 0.221], [35, 0.256], [40, 0.295], [45, 0.347], [50, 0.405], [55, 0.474], [60, 0.555], [65, 0.643], [70, 0.747], [75, 0.86], [80, 0.984], [85, 1.118], [90, 1.267], [95, 1.434], [100, 1.597]];
        const LD = [[10, 0.1], [13, 0.45], [16, 0.65], [20, 0.76], [25, 0.77], [30, 0.72], [40, 0.6], [50, 0.4], [60, 0.2], [70, 0.1], [80, 0.05], [90, 0.03], [100, 0.01]];
        let s = R(X(10), 26, X(28) - X(10), 16, 'tf', null, 1, null, 3).replace('fill="var(--tf)"', 'fill="var(--tf)" fill-opacity="0.35"');
        s += R(X(28), 26, X(48) - X(28), 16, 'mut', null, 1, null, 3).replace('fill="var(--kB3A88F)"', 'fill="var(--kB3A88F)" fill-opacity="0.45"');
        s += R(X(48), 26, X(100) - X(48), 16, 'terr', null, 1, null, 3).replace('fill="var(--kB5683C)"', 'fill="var(--kB5683C)" fill-opacity="0.3"');
        s += N((X(10) + X(28)) / 2, 38, 'attached', { a: 'middle', fs: 10.5, c: 'ink' }) + N((X(28) + X(48)) / 2, 38, 'separating', { a: 'middle', fs: 10.5, c: 'ink' }) + N((X(48) + X(100)) / 2, 38, 'stalled', { a: 'middle', fs: 10.5, c: 'ink' });
        s += axes(x0, y0, w, h + 10, '', '');
        [0, 0.4, 0.8, 1.2, 1.6].forEach((c) => { s += tick(x0, Y(c), c.toFixed(1), true) + L(x0, Y(c), x0 + w, Y(c), 'mut', 0.5, '2 3'); });
        [0, 20, 40, 60, 80, 100].forEach((a) => { s += tick(X(a), y0, String(a)); });
        s += poly(cL.map((p) => [X(p[0]), Y(p[1])]), 'tf', 2.4) + poly(cD.map((p) => [X(p[0]), Y(p[1])]), 'terr', 2.4) + poly(LD.map((p) => [X(p[0]), Y(p[1])]), 'ink', 1.6, '6 4');
        s += V(X(27), Y(1.6), 'C_L', { c: 'tf', fs: 15 }) + V(X(80), Y(1.2), 'C_D', { c: 'terr', fs: 15 }) + V(X(32), Y(0.86), 'C_L/C_D  (1/10 scale)', { fs: 13 });
        s += L(X(74), Y(0), X(74), Y(1.75), 'gold', 1.6) + dot(X(74), Y(0.61), 'tf', 4) + dot(X(74), Y(0.83), 'terr', 4);
        s += N(X(74) - 6, Y(0.45), 'C_L ≈ 0.61', { a: 'end', c: 'tf', fs: 11 }) + N(X(74) + 6, Y(0.72), 'C_D ≈ 0.83', { c: 'terr', fs: 11 }) + N(X(74) + 4, Y(1.75) + 10, 'α = 74°', { c: 'gold', fs: 11 });
        s += V(x0 + w / 2, y0 + 36, 'angle of attack α (degrees)', { a: 'middle', fs: 13 }) + V(x0 - 10, 20, 'coefficient', { fs: 12, a: 'end' });
        return W(560, 315, s);
      };

      // ---------- 14. Parked rotor (brake on): u_rot = 0 (PS2 Q6) ----------
      D.tf_blades_parked = () => {
        const be = 16, LE = [210, 70];
        let s = '';
        s += A(40, LE[1], LE[0] - 6, LE[1], 'tf', 2.4) + V(90, LE[1] - 10, 'u_{rel} = u_∞', { c: 'tf' }) + N(90, LE[1] + 18, '(u_rot = ωr = 0)', { fs: 11 });
        s += L(LE[0], LE[1] - 40, LE[0], LE[1] + 235, 'mut', 1.2, '7 4') + N(LE[0] - 8, LE[1] + 232, 'plane of rotation', { a: 'end', fs: 11 });
        s += L(LE[0], LE[1], LE[0] + 180, LE[1], 'tf', 1.2, '4 3');
        const fp = foilPts(LE[0], LE[1], 230, 90 - be, 0.13, 0, 0);
        s += foil(fp, 'paper', 'ink', 1.8) + L(LE[0], LE[1], fp.te[0], fp.te[1], 'ink', 1, '6 3');
        s += arc(LE[0], LE[1], 60, 90 - be, 90, 'terr', 1.6) + V(LE[0] - 8, LE[1] + 68, 'β = 16°', { c: 'terr', fs: 13, a: 'end' });
        s += arc(LE[0], LE[1], 42, 0, 90 - be, 'vio', 1.6) + V(pp(LE[0], LE[1], 56, 25)[0] + 4, pp(LE[0], LE[1], 56, 25)[1] + 4, 'α = 74°', { c: 'vio', fs: 13 });
        s += arc(LE[0], LE[1], 120, 0, 90, 'gold', 1.3, '3 2') + V(pp(LE[0], LE[1], 128, 60)[0] + 4, pp(LE[0], LE[1], 128, 60)[1] + 8, 'φ = 90°', { c: 'gold', fs: 13 });
        const F = fp.at(0.7);
        s += A(F[0], F[1], F[0], F[1] - 110, 'terr', 2.4) + V(F[0] + 8, F[1] - 98, 'δL = δQ', { c: 'terr' });
        s += A(F[0], F[1], F[0] + 80, F[1], 'terr', 2.4) + V(F[0] + 84, F[1] + 5, 'δD = δT', { c: 'terr' });
        s += A(470, 160, 470, 100, 'ink', 2.4) + N(470, 176, 'would move', { a: 'middle', fs: 11 }) + N(470, 189, '(brake holds it)', { a: 'middle', fs: 11 });
        s += N(270, 330, 'parked: lift lies in the plane of rotation (all torque),', { a: 'middle', fs: 11.5 }) + N(270, 345, 'drag lies along the wind (all thrust)', { a: 'middle', fs: 11.5 });
        return W(540, 354, s);
      };
    }
