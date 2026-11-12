    // Topic 7 (Turbulent Pipe Friction and the Moody Diagram) — professor r1 additions. Keys used only by 07_tf_moody.
    {
      // Smooth vs rough velocity profile on wall coordinates, with the straight log-law lines, their common slope and the shift ΔB.
      D.tf_moody_smooth_rough = () => {
        const X = (yp) => 70 + lg(yp) / 4 * 470, Y = (up) => 262 - up / 30 * 220;
        let s = axes(70, 262, 470, 220, null, 'ū/u*') + T(305, 296, 'yu*/ν', { serif: true, fs: 14, a: 'middle' });
        [0, 1, 2, 3, 4].forEach((k) => { s += tick(X(Math.pow(10, k)), 262, '10' + sup(k)); });
        [0, 10, 20, 30].forEach((v) => { s += tick(70, Y(v), String(v), true); });
        // region boundaries
        [5, 30, 1000].forEach((v) => { s += L(X(v), 44, X(v), 262, 'mut', 1, '3 3'); });
        s += N((70 + X(5)) / 2, 38, 'sublayer', { a: 'middle', fs: 12 }) + N((X(5) + X(30)) / 2, 38, 'buffer', { a: 'middle', fs: 12 })
          + N((X(30) + X(1000)) / 2, 38, 'log-law region', { a: 'middle', fs: 12 }) + N((X(1000) + 540) / 2, 38, 'outer', { a: 'middle', fs: 12 });
        const comp = (yp) => 2.5 * Math.log(1 + 0.4 * yp) + 7.8 * (1 - Math.exp(-yp / 11) - (yp / 11) * Math.exp(-yp / 3)) + (yp > 400 ? 3.2 * Math.pow((lg(yp) - lg(400)) / (4 - lg(400)), 2) : 0);
        const dB = 7, logS = (yp) => 2.5 * Math.log(yp) + 5.5;
        // straight log-law reference lines (same slope A = 2.5)
        s += poly(fn((t) => [X(Math.pow(10, t)), Y(logS(Math.pow(10, t)))], lg(12), 4, 40), 'tf', 1.3, '2 4');
        s += poly(fn((t) => [X(Math.pow(10, t)), Y(logS(Math.pow(10, t)) - dB)], lg(30), 4, 40), 'tf', 1.3, '2 4');
        // full profiles
        s += poly(fn((t) => [X(Math.pow(10, t)), Y(comp(Math.pow(10, t)))], 0, 4, 140), 'ink', 2.4);
        s += poly(fn((t) => { const yp = Math.pow(10, t); return [X(yp), Y(Math.max(0, comp(yp) - dB * (1 - Math.exp(-yp / 6))))]; }, 0.3, 4, 140), 'terr', 2.2, '7 4');
        // slope triangle on the smooth log law: one decade in yu*/ν raises ū/u* by A ln 10 = 5.75
        const a1 = X(100), a2 = X(1000), b1 = Y(logS(100)), b2 = Y(logS(1000));
        s += L(a1, b1, a1, b2, 'gold', 1.4) + L(a1, b2, a2, b2, 'gold', 1.4);
        s += N((a1 + a2) / 2, b2 - 7, '× 10 in yu*/ν', { a: 'middle', c: 'gold', fs: 12.5 }) + N(a1 - 6, (b1 + b2) / 2 - 2, '+ A ln 10', { a: 'end', c: 'gold', fs: 12.5 }) + N(a1 - 6, (b1 + b2) / 2 + 13, '= 5.75', { a: 'end', c: 'gold', fs: 12.5 });
        // shift ΔB
        const xs = X(2500); s += A2(xs, Y(logS(2500) - dB) - 2, xs, Y(logS(2500)) + 2, 'terr') + V(xs - 8, (Y(logS(2500)) + Y(logS(2500) - dB)) / 2 + 5, 'ΔB', { c: 'terr', fs: 14, a: 'end' });
        // legend (empty lower-right corner)
        const lx = 342, ly = 210;
        s += R(lx - 10, ly - 16, 228, 64, 'paper', 'mut', 1, null, 4);
        s += L(lx, ly - 4, lx + 26, ly - 4, 'ink', 2.4) + N(lx + 34, ly, 'smooth wall', { fs: 12.5, c: 'ink' });
        s += L(lx, ly + 14, lx + 26, ly + 14, 'terr', 2.2, '7 4') + N(lx + 34, ly + 18, 'rough wall', { fs: 12.5, c: 'ink' });
        s += L(lx, ly + 32, lx + 26, ly + 32, 'tf', 1.3, '2 4') + N(lx + 34, ly + 36, 'log law, slope A = 2.5', { fs: 12.5, c: 'ink' });
        return W(600, 304, s);
      };

      // Force balance on a slice δl of an inclined pipe, with the weight resolved along / normal to the pipe.
      D.tf_moody_incline = () => {
        const thd = 20, th = -thd * Math.PI / 180, cx = 330, cy = 170;
        const r = (x, y) => [cx + (x - cx) * Math.cos(th) - (y - cy) * Math.sin(th), cy + (x - cx) * Math.sin(th) + (y - cy) * Math.cos(th)];
        const g = (inner) => '<g transform="rotate(' + (-thd) + ' ' + cx + ' ' + cy + ')">' + inner + '</g>';
        const yt = 110, yb = 230;
        let s = g(R(60, yt, 540, yb - yt, 'tint') + wall(60, yt, 600, 'up') + wall(60, yb, 600, 'down') + cl(60, cy, 600) + cv(270, yt, 140, yb - yt)
          + A(214, cy, 266, cy, 'terr', 2.2) + A(466, cy, 414, cy, 'terr', 2.2)
          + A(380, yt + 7, 300, yt + 7, 'terr', 1.8) + A(380, yb - 7, 300, yb - 7, 'terr', 1.8)
          + A(90, cy + 22, 176, cy + 22, 'tf', 2.4)
          + A2(270, yt - 22, 410, yt - 22, 'mut') + L(270, yt - 28, 270, yt - 14, 'mut', 1) + L(410, yt - 28, 410, yt - 14, 'mut', 1)
          + A2(556, yt + 2, 556, yb - 2, 'gold'));
        const lab = (x, y, t, o) => { const p = r(x, y); return V(p[0], p[1], t, o); };
        s += lab(232, cy - 12, 'pA', { c: 'terr', a: 'middle', fs: 14 }) + lab(452, cy - 12, '(p − δp)A', { c: 'terr', a: 'middle', fs: 14 });
        s += lab(342, yt + 28, 'τ_w', { c: 'terr', a: 'middle', fs: 14 }) + lab(290, yb - 16, 'τ_w', { c: 'terr', a: 'middle', fs: 14 });
        s += lab(132, cy + 44, 'u_m', { c: 'tf', a: 'middle', fs: 15 }) + lab(340, yt - 34, 'δl', { c: 'mtx', a: 'middle', fs: 14 }) + lab(546, cy + 26, 'D', { c: 'gold', a: 'end', fs: 15 });
        // weight of the slice, drawn vertically from its centre
        const c0 = r(330 + 10, cy); s += dot(c0[0], c0[1], 'ink', 3) + A(c0[0], c0[1], c0[0], c0[1] + 40, 'ink', 1.9) + V(c0[0] - 7, c0[1] + 34, 'W', { fs: 14, a: 'end' });
        // inclination angle at the inlet end
        const b = r(60, yb); s += L(b[0], b[1], b[0] + 120, b[1], 'mut', 1.2) + P('M ' + (b[0] + 78) + ' ' + b[1].toFixed(1) + ' A 78 78 0 0 0 ' + (b[0] + 78 * Math.cos(th)).toFixed(1) + ' ' + (b[1] + 78 * Math.sin(th)).toFixed(1), 'ink', 1.2) + V(b[0] + 88, b[1] - 9, 'θ', { fs: 15 });
        // inset: resolving W = ρg(πD²/4)δl
        const ox = 590, oy = 244, Wl = 104, sn = Math.sin(thd * Math.PI / 180), cs = Math.cos(thd * Math.PI / 180);
        s += L(ox - 70 * cs, oy + 70 * sn, ox + 60 * cs, oy - 60 * sn, 'mut', 1.1, '5 4') + N(ox + 60 * cs + 4, oy - 60 * sn - 4, 'pipe axis', { c: 'mtx' });
        s += A(ox, oy, ox, oy + Wl, 'ink', 1.9) + V(ox - 8, oy + Wl + 2, 'W', { fs: 14, a: 'end' });
        s += A(ox, oy, ox - Wl * sn * cs, oy + Wl * sn * sn, 'terr', 1.9) + A(ox, oy, ox + Wl * cs * sn, oy + Wl * cs * cs, 'mut', 1.5);
        s += L(ox - Wl * sn * cs, oy + Wl * sn * sn, ox, oy + Wl, 'mut', 1, '3 3') + L(ox + Wl * cs * sn, oy + Wl * cs * cs, ox, oy + Wl, 'mut', 1, '3 3');
        s += V(ox - Wl * sn * cs - 4, oy + Wl * sn * sn - 6, 'W sin θ', { c: 'terr', fs: 13.5, a: 'end' }) + V(ox + Wl * cs * sn + 6, oy + Wl * cs * cs - 4, 'W cos θ', { c: 'mtx', fs: 13.5 });
        s += P('M ' + ox + ' ' + (oy + 34) + ' A 34 34 0 0 0 ' + (ox + 34 * sn).toFixed(1) + ' ' + (oy + 34 * cs).toFixed(1), 'ink', 1.1) + V(ox + 6, oy + 50, 'θ', { fs: 12 });
        s += N(ox - 40, 374, 'W sin θ acts down the pipe → ρgL sin θ in Δp', { a: 'middle', c: 'terr' });
        s += N(40, 36, 'θ > 0: flow uphill (weight resists the flow)') + N(40, 52, 'θ < 0: flow downhill (weight helps; sin θ < 0)');
        return W(700, 384, s);
      };
    }
