    // ===================== Topic 4 · Introduction to hydraulics — professor revisions (r1) =====================
    {
      const S = (x, y, s, o) => T(x, y, s, Object.assign({ serif: true, fs: 13 }, o || {}));          // sans label (no mono 'u' that reads like 'υ')

      // Hagen (1839) — only used by Topic 4, so the shared key is redefined; axis now u_m, transition labelled 2000–4000
      D.tf_hagen = () => {
        const X = (v) => 70 + v * 380, Y = (p) => 240 - p * 200;
        let s = A(70, 240, 462, 240, 'ink', 1.4) + A(70, 240, 70, 28, 'ink', 1.4) + S(462, 262, 'mean velocity u_m', { a: 'end', fs: 13.5 }) + S(80, 34, 'Δp', { fs: 14 });
        s += R(X(0.42), 40, X(0.5) - X(0.42), 200, 'url(#tf-hatch)');
        s += L(X(0), Y(0), X(0.42), Y(0.13), 'tf', 2.4) + P('M ' + X(0.42) + ' ' + Y(0.13) + ' C ' + X(0.45) + ' ' + Y(0.14) + ', ' + X(0.47) + ' ' + Y(0.27) + ', ' + X(0.5) + ' ' + Y(0.95 * Math.pow(0.5, 1.75)), 'mtx', 1.6, null, '3 3') + poly(fn((v) => [X(v), Y(0.95 * Math.pow(v, 1.75))], 0.5, 1, 30), 'terr', 2.4);
        s += L(X(0.42), Y(0.13), X(0.8), Y(0.248), 'tf', 1.2, '5 4');
        s += S(X(0.2), Y(0.22), 'Δp ∝ u_m', { c: 'tf', fs: 14, a: 'middle' }) + N(X(0.2), Y(0.22) + 16, 'laminar', { a: 'middle', c: 'tf' });
        s += S(X(0.7) - 8, Y(0.6), 'Δp ∝ u_m^{1.75}', { c: 'terr', fs: 14, a: 'end' }) + N(X(0.7) - 8, Y(0.6) + 16, 'turbulent', { a: 'end', c: 'terr' });
        s += N(X(0.46), 30, 'transition: Re ≈ 2000–4000', { a: 'middle' });
        return W(500, 272, s);
      };

      // Smooth-pipe flow curve (Topic 4 version; tf_cf_re is shared with Topic 3)
      D.tf_cf_re_h = () => {
        const x0 = 80, y0 = 290, w = 480, h = 240;
        const X = (re) => x0 + (lg(re) - 1) / 6 * w, Y = (cf) => y0 - (lg(cf) + 3) / 3 * h;
        let s = R(X(2000), Y(1), X(4000) - X(2000), Y(0.001) - Y(1), 'url(#tf-hatch)');
        s += A(x0, y0, x0 + w + 14, y0, 'ink', 1.4) + A(x0, y0, x0, y0 - h - 14, 'ink', 1.4) + S(x0 + w + 20, y0 + 5, 'Re', { fs: 15 }) + S(x0 - 10, y0 - h - 20, 'C_f', { fs: 15 });
        [1, 2, 3, 4, 5, 6, 7].forEach((k) => { s += tick(X(Math.pow(10, k)), y0, '10' + sup(k)); });
        [-3, -2, -1, 0].forEach((k) => { s += tick(x0, Y(Math.pow(10, k)), k === 0 ? '1' : '10' + sup(k), true); });
        s += poly(fn((t) => { const re = Math.pow(10, t); return [X(re), Y(16 / re)]; }, lg(16), lg(2000), 40), 'tf', 2.2);
        s += L(X(2000), Y(16 / 2000), X(2600), Y(0.0105), 'tf', 1.4, '3 3');
        const prandtl = (re) => { let f = 0.02; for (let i = 0; i < 40; i++) f = Math.pow(2 * lg(re * Math.sqrt(f)) - 0.8, -2); return f / 4; };
        s += poly(fn((t) => { const re = Math.pow(10, t); return [X(re), Y(prandtl(re))]; }, lg(3000), 7, 60), 'terr', 2.2);
        s += poly(fn((t) => { const re = Math.pow(10, t); return [X(re), Y(0.079 * Math.pow(re, -0.25))]; }, lg(4000), lg(1e5), 30), 'ink', 1.6, '6 4');
        s += poly(fn((t) => { const re = Math.pow(10, t); return [X(re), Y(0.079 * Math.pow(re, -0.25))]; }, lg(1e5), 7, 20), 'mut', 1.2, '2 4');
        s += S(X(60) + 14, Y(16 / 60) - 10, 'C_f = 16/Re', { c: 'tf', fs: 14 }) + N(X(60) + 14, Y(16 / 60) + 6, 'laminar, Re < 2000', { c: 'tf' });
        s += N(X(2830), Y(1) - 6, 'transition 2000–4000', { a: 'middle' });
        s += N(X(2e5), Y(0.0062) - 10, 'turbulent, smooth pipe (experiment)', { a: 'middle', c: 'terr' });
        s += N(X(1.0e4), Y(0.03), 'Blasius 0.079 Re^{−1/4}', { c: 'ink' }) + N(X(1.0e4), Y(0.03) + 14, '(dashed; good for 4000 < Re < 10^5)', { c: 'mtx' });
        return W(620, 330, s);
      };

      // Velocity profiles (Topic 4 version; tf_profiles is shared with Topic 6) — sans labels, explicit formulas
      D.tf_profiles_h = () => {
        const yt = 40, yb = 240, yc = 140, x0 = 110; let s = wall(40, yt, 580, 'up') + wall(40, yb, 580, 'down') + cl(40, yc, 580) + L(x0, yt, x0, yb, 'mut', 1.2);
        s += L(x0 + 100, yt, x0 + 100, yb, 'gold', 2.2);
        s += poly(fn((y) => [x0 + 200 * (1 - Math.pow((y - yc) / 100, 2)), y], yt, yb, 60), 'tf', 2.4);
        s += poly(fn((y) => [x0 + 122.4 * Math.pow(Math.max(0, 1 - Math.abs(y - yc) / 100), 1 / 7), y], yt, yb, 120), 'terr', 2.4);
        s += A(x0, 214, x0 + 98, 214, 'gold', 1.6) + S(x0 + 46, 207, 'u_m', { c: 'gold', a: 'middle', fs: 14 });
        s += S(x0 + 228, 70, 'inviscid: uniform, u = u_m', { fs: 13, c: 'gold' });
        s += S(x0 + 228, 96, 'turbulent: u/u_{max} = (y/R)^{1/7},  u_m ≈ 0.8 u_{max}', { fs: 13, c: 'terr' });
        s += S(x0 + 228, 122, 'laminar: parabola,  u_m = ½ u_{max}', { fs: 13, c: 'tf' });
        s += N(x0 + 228, 196, 'y = R − r = distance from the wall', { c: 'mtx' }) + N(x0 + 228, 212, 'all three carry the same Q = u_m A', { c: 'mtx' });
        return W(640, 262, s);
      };

      // Inclined-pipe force balance with sign convention and the weight resolved (tf_pipe_incline is shared with Topic 7)
      D.tf_pipe_incline_h = () => {
        const deg = 25, th = -deg * Math.PI / 180, cx = 330, cy = 190;
        const r = (x, y) => [cx + (x - cx) * Math.cos(th) - (y - cy) * Math.sin(th), cy + (x - cx) * Math.sin(th) + (y - cy) * Math.cos(th)];
        const g = (inner) => '<g transform="rotate(' + (-deg) + ' ' + cx + ' ' + cy + ')">' + inner + '</g>';
        const yt = cy - 40, yb = cy + 40;
        let s = g(wall(60, yt, 600, 'up') + wall(60, yb, 600, 'down') + cl(60, cy, 600) + cv(290, yt, 80, 80)
          + A(225, cy, 286, cy, 'terr', 2.2) + A(436, cy, 374, cy, 'terr', 2.2) + A(352, yt + 8, 304, yt + 8, 'terr', 1.8) + A(352, yb - 8, 304, yb - 8, 'terr', 1.8)
          + A(90, cy - 20, 170, cy - 20, 'tf', 2.2) + A2(290, yb + 24, 370, yb + 24, 'mut') + A(130, yt - 22, 210, yt - 22, 'ink', 1.6) + A2(590, yt, 590, yb, 'mut'));
        const rot = -deg;
        const p1 = r(218, cy - 8), p2 = r(440, cy - 8), pt = r(330, yt - 16), pl = r(330, yb + 42), pu = r(92, cy - 32), px = r(130, yt - 30), pd = r(602, cy + 4);
        s += S(p1[0], p1[1], 'p', { c: 'terr', a: 'end', fs: 15, rot }) + S(p2[0], p2[1], 'p + (dp/dx) δl', { c: 'terr', fs: 14, rot });
        s += S(pt[0], pt[1], 'τ_w (opposes flow)', { c: 'terr', fs: 13, a: 'middle', rot }) + S(pl[0], pl[1], 'δl', { c: 'mtx', fs: 14, a: 'middle', rot }) + S(pu[0], pu[1], 'u_m', { c: 'tf', fs: 14, rot });
        s += S(px[0], px[1], '+x = flow direction', { fs: 12.5, rot }) + S(pd[0], pd[1], 'D', { c: 'gold', fs: 15, rot });
        // angle at the lower-left end
        const b = r(60, yb); s += L(b[0], b[1], b[0] + 120, b[1], 'mut', 1.2) + P('M ' + (b[0] + 80) + ' ' + b[1] + ' A 80 80 0 0 0 ' + (b[0] + 80 * Math.cos(th)).toFixed(1) + ' ' + (b[1] + 80 * Math.sin(th)).toFixed(1), 'ink', 1.2) + S(b[0] + 90, b[1] - 10, 'θ', { fs: 15 });
        // weight resolved (inset, per unit volume)
        const O = [575, 222], Wl = 100, sn = Math.sin(deg * Math.PI / 180), cs = Math.cos(deg * Math.PI / 180);
        const al = [O[0] - Wl * sn * cs, O[1] + Wl * sn * sn], nr = [O[0] + Wl * sn * cs, O[1] + Wl * cs * cs];
        s += dot(O[0], O[1], 'ink', 3) + A(O[0], O[1], O[0], O[1] + Wl, 'ink', 2) + A(O[0], O[1], al[0], al[1], 'terr', 2.2) + L(O[0], O[1], nr[0], nr[1], 'mut', 1.3, '4 3') + L(al[0], al[1], O[0], O[1] + Wl, 'mut', 1, '2 3');
        s += S(O[0] + 6, O[1] + Wl + 14, 'ρg (weight / volume)', { fs: 12.5, a: 'middle' }) + S(al[0] - 4, al[1] + 4, 'ρg sin θ', { c: 'terr', fs: 13.5, a: 'end' }) + S(nr[0] + 6, nr[1] + 2, 'ρg cos θ', { c: 'mtx', fs: 12.5 });
        s += P('M ' + O[0] + ' ' + (O[1] + 34) + ' A 34 34 0 0 0 ' + (O[0] + 34 * sn).toFixed(1) + ' ' + (O[1] + 34 * cs).toFixed(1), 'ink', 1) + S(O[0] + 6, O[1] + 50, 'θ', { fs: 12 });
        s += N(370, 372, 'along the pipe, gravity ρg sin θ per unit volume points down-slope: it opposes the flow when θ > 0', { a: 'middle' });
        return W(700, 384, s);
      };

      // Hydraulic diameter: the force balance on an arbitrary section
      D.tf_dh_balance = () => {
        const pts1 = []; for (let i = 0; i <= 160; i++) { const a = i / 160 * 2 * Math.PI; const rr = 70 + 14 * Math.cos(3 * a) + 6 * Math.sin(5 * a); pts1.push([150 + rr * 1.15 * Math.cos(a), 130 + rr * 0.9 * Math.sin(a)]); }
        let s = pgon(pts1, 'tint', 'terr', 3);
        s += S(150, 128, 'flow area A', { a: 'middle', c: 'tf', fs: 14 }) + S(150, 148, 'pressure acts here', { a: 'middle', c: 'mtx', fs: 11.5 });
        s += S(150, 246, 'wetted perimeter P (terracotta)', { a: 'middle', c: 'terr', fs: 12.5 }) + S(150, 262, 'τ_w acts on P × δl', { a: 'middle', c: 'mtx', fs: 11.5 });
        const x = 300;
        s += S(x, 60, 'slice of length δl, flow-direction positive:', { fs: 12.5, c: 'mtx' });
        s += S(x, 92, '(−dp/dx) δl · A  =  τ_w · P δl', { fs: 15 });
        s += S(x, 126, '−dp/dx  =  τ_w P/A  =  4τ_w / D_H', { fs: 15 });
        s += S(x, 162, 'D_H = 4A / P', { fs: 16, c: 'gold', w: 600 });
        s += S(x, 192, 'circle: 4(πD²/4)/(πD) = D  ✓', { fs: 13, c: 'tf' });
        s += S(x, 222, 'more wall per unit area ⇒ smaller D_H', { fs: 12.5, c: 'mtx' }) + S(x, 240, '⇒ more friction, as in a narrower pipe', { fs: 12.5, c: 'mtx' });
        return W(620, 280, s);
      };

      // Syringe drawing used by both syringe problems
      const syringe = (o) => {
        const ax = 105; let s = '';
        s += R(70, 55, 250, 100, 'tint', 'ink', 2) + R(52, 63, 34, 84, 'paper', 'ink', 1.8) + R(86, 63, 14, 84, 'mut', 'ink', 1.2) + L(14, ax, 86, ax, 'ink', 4);
        s += A(0, ax - 22, 40, ax - 22, 'terr', 2.4);
        s += S(195, ax - 4, o.pb, { a: 'middle', fs: 14 }) + N(195, ax + 14, o.pb2, { a: 'middle' });
        s += A2(296, 55, 296, 155, 'mut') + S(288, ax + 4, o.db, { c: 'gold', fs: 13, a: 'end' });
        s += R(320, ax - 6, 250, 12, 'tint', 'ink', 1.6);
        s += N(455, ax - 22, o.needle, { a: 'middle', c: 'tf' });
        s += A2(320, 170, 570, 170, 'mut') + S(445, 188, o.L, { a: 'middle', c: 'gold', fs: 13 });
        s += A2(548, ax - 6, 548, ax + 6, 'mut') + S(548, ax + 26, o.dn, { a: 'middle', c: 'gold', fs: 13 });
        s += A(574, ax, 626, ax, 'tf', 2) + S(632, ax + 5, 'Q', { c: 'tf', fs: 15 });
        s += R(650, 50, 40, 110, 'url(#tf-hatch)') + L(650, 50, 650, 160, 'ink', 1.4);
        s += S(690, 40, o.out, { a: 'end', fs: 13 }) + N(668, 178, o.out2, { a: 'end' });
        s += N(14, 216, o.note, { c: 'mtx' });
        return W(730, 228, '<g transform="translate(30,0)">' + s + '</g>' + S(2, ax - 32, o.F, { c: 'terr', fs: 13 }));
      };
      // Q7 hypodermic syringe — symbols exactly as in the problem-sheet solution
      D.tf_syringe = () => syringe({ F: 'F = 10 N', pb: 'p_i (gauge)', pb2: 'barrel', db: 'd_b', needle: 'needle: laminar, Δp_f = 32μu_m L/d_n²', L: 'L = 4 cm', dn: 'd_n', out: 'patient: p_e (abs.)', out2: '', note: 'F_b = 10 − 5 N friction = 5 N;  p_a acts on the back of the plunger' });
      // Dental-syringe lecture example
      D.tf_syringe_dental = () => syringe({ F: 'F', pb: 'Δp = 0.3 MPa', pb2: 'barrel, gauge', db: '', needle: 'needle: laminar, u_m = Δp D²/32μL', L: 'L = 25 mm', dn: 'D', out: 'hole: p = p_a', out2: 'gauge 0', note: 'barrel ≫ needle: all of Δp is lost along the needle' });

      // Chimney draught (Topic 4 version; tf_chimney is shared with Topic 8) — labels re-spaced, p < p₀ explicit
      D.tf_chimney_h = () => {
        const gy = 300, m = 13, cxl = 352, cw = 18, top = gy - 10 * m; let s = L(20, gy, 590, gy, 'ink', 2.2) + R(20, gy, 570, 9, 'url(#tf-hatch)');
        s += pgon([[240, gy], [240, 225], [320, 175], [400, 225], [400, gy]], 'paper', 'ink', 1.6) + R(cxl, top, cw, 10 * m, 'tint', 'ink', 1.6);
        s += P('M 356 292 Q 362 280 358 268', 'terr', 2) + P('M 364 293 Q 370 282 366 272', 'gold', 2);
        s += N(250, 262, 'fireplace:', { c: 'ink' }) + N(250, 278, 'still air, p₀', { c: 'ink' });
        for (let h = 2; h <= 20; h += 2) { const y = gy - h * m; s += A(40, y, 40 + h * 6, y, 'tf', 1.3); }
        s += L(40, gy, 40 + 120, gy - 20 * m, 'tf', 1.2, '4 3') + N(46, 26, 'wind: 0 at ground → 10 m/s at 20 m', { c: 'tf' });
        s += A(cxl + cw / 2, gy - 34, cxl + cw / 2, top + 10, 'terr', 2) + L(cxl + cw + 4, 205, 420, 196, 'mut', 1) + N(424, 200, 'draught u_m', { c: 'terr' });
        s += A(cxl + cw + 6, top - 12, 440, top - 12, 'tf', 1.8) + S(446, top - 8, 'u_w = 5 m/s', { c: 'tf', fs: 13 }) + S(446, top + 12, 'p < p₀', { c: 'terr', fs: 13 });
        s += A2(560, gy, 560, top, 'mut') + S(552, gy - 5 * m, '10 m', { c: 'gold', fs: 13, a: 'end' }) + N(cxl + cw / 2, top - 30, 'D = 0.1 m', { a: 'middle' });
        return W(600, 318, s);
      };
    }
