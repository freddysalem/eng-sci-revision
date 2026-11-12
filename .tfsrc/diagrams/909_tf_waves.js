    // Topic 9 (Waves, Speed of Sound, Mach Number) — professor r1 versions. New keys used only by 09_tf_waves.
    {
      // Galilean transformation: velocities written as speeds (no "u = a − u"), states 1/2 unchanged.
      D.tf_galilean_v2 = () => twoPanel([
        { title: 'lab frame: wave moves right at a', left: ['moving, speed u', 'p₂, ρ₂, T₂'], right: ['still gas, u = 0', 'p₁, ρ₁, T₁'], lArrow: { dir: 1, label: 'u' }, wave: { dir: 1, label: 'a' } },
        { title: 'wave frame: add a from right to left', left: ['speed a − u', 'p₂, ρ₂, T₂'], right: ['speed a', 'p₁, ρ₁, T₁'], lArrow: { dir: -1, label: 'a − u' }, rArrow: { dir: -1, label: 'a' } }]);

      D.tf_weak_wave_v2 = () => twoPanel([
        { title: 'lab frame: weak wave moves into still gas', left: ['speed δu', 'p + δp', 'ρ + δρ'], right: ['still, u = 0', 'p', 'ρ'], lArrow: { dir: 1, label: 'δu' }, wave: { dir: 1, label: 'a' } },
        { title: 'wave frame: stationary, control volume', left: ['speed a − δu', 'p + δp', 'ρ + δρ'], right: ['speed a', 'p', 'ρ'], lArrow: { dir: -1, label: 'a − δu' }, rArrow: { dir: -1, label: 'a' }, cv: true }]);

      // Wave fronts from a moving point source: labels kept clear of every line; radii labelled; tangent radius + right angle shown.
      D.tf_wavefronts_v2 = () => {
        const cy = 165, cols = ['terr', 'vio', 'tf'], rl = ['3aΔt', '2aΔt', 'aΔt'];
        let s = '';
        // top = radius labels just inside the top of each circle and point labels below the axis (supersonic panel)
        const panel = (xs, rs, lx, top) => {
          let t = '';
          rs.forEach((r, i) => { t += ci(xs[i], cy, r, cols[i], 1.5) + N(xs[i], top ? cy - r + 15 : cy + r - 6, rl[i], { a: 'middle', c: cols[i], fs: 12 }); });
          xs.forEach((x, i) => { t += dot(x, cy, 'ink', 3) + T(lx[i], top ? cy + 18 : cy - 8, 'ABCD'[i], { a: 'middle', fs: 12, w: 600 }); });
          return t;
        };
        // subsonic: uΔt = 20, aΔt = 40 (M = 0.5)
        s += panel([150, 170, 190, 210], [120, 80, 40], [150, 170, 190, 210]);
        s += A(213, cy, 248, cy, 'ink', 1.6) + V(238, cy - 7, 'u', { fs: 13, a: 'middle' });
        s += T(150, 22, 'subsonic: u < a  (M = 0.5)', { a: 'middle', fs: 12.5, w: 600 });
        // supersonic: uΔt = 60, aΔt = 30 (M = 2, θ = 30°)
        const Dx = 610, th = Math.PI / 6, Lc = 260;
        s += panel([430, 490, 550, Dx], [90, 60, 30], [430, 490, 550, Dx], true);
        s += L(Dx, cy, Dx - Lc * Math.cos(th), cy - Lc * Math.sin(th), 'ink', 1.6) + L(Dx, cy, Dx - Lc * Math.cos(th), cy + Lc * Math.sin(th), 'ink', 1.6);
        // tangent point T on the wave from A, radius AT perpendicular to the cone, right-angle mark
        const dT = Math.sqrt(180 * 180 - 90 * 90), Tx = Dx - dT * Math.cos(th), Ty = cy - dT * Math.sin(th);
        const u1 = [-0.5, 0.866], u2 = [0.866, 0.5], q = 8;
        s += L(430, cy, Tx, Ty, 'terr', 1.6, '4 3') + poly([[Tx + q * u1[0], Ty + q * u1[1]], [Tx + q * u1[0] + q * u2[0], Ty + q * u1[1] + q * u2[1]], [Tx + q * u2[0], Ty + q * u2[1]]], 'ink', 1.1);
        // θ at the vertex: small arc, label just outside the cone with a short leader
        s += P('M ' + (Dx - 24) + ' ' + cy + ' A 24 24 0 0 1 ' + (Dx - 24 * Math.cos(th)).toFixed(1) + ' ' + (cy - 24 * Math.sin(th)).toFixed(1), 'ink', 1.2);
        s += L(597, 147, 591, 157, 'ink', 0.9) + V(600, 143, 'θ', { fs: 14, a: 'middle' });
        s += A(Dx + 3, cy, Dx + 42, cy, 'ink', 1.6) + V(Dx + 26, cy - 7, 'u', { fs: 13, a: 'middle' });
        // labels kept off the lines
        const mx = Dx - 220 * Math.cos(th) + 5 * 0.5, my = cy - 220 * Math.sin(th) - 5 * 0.866;
        s += T(mx.toFixed(1), my.toFixed(1), 'Mach cone', { fs: 12, c: 'mtx', rot: 30 });
        s += N(670, 98, 'zone of', { a: 'middle', fs: 12 }) + N(670, 113, 'silence', { a: 'middle', fs: 12 });
        s += T(520, 22, 'supersonic: u > a  (M = 2)', { a: 'middle', fs: 12.5, w: 600 });
        s += V(565, 290, 'sin θ = aΔt / uΔt = 1/M', { a: 'middle', fs: 14 });
        s += N(360, 314, 'object at A, B, C, D at t = 0, Δt, 2Δt, 3Δt (spacing uΔt); picture drawn at t = 3Δt', { a: 'middle', fs: 11.5 });
        s += N(360, 329, 'circles: waves sent from A, B, C — each has spread at speed a since it was sent', { a: 'middle', fs: 11.5 });
        return W(720, 340, s);
      };

      // Right-angled triangle behind sin θ = 1/M (M = 2 drawn, θ = 30°).
      D.tf_mach_triangle = () => {
        const Ax = 60, Ay = 185, Dx = 360, Tx = 135, Ty = 55.1;
        let s = P('M 210 185 A 150 150 0 0 0 60 35', 'vio', 1.4, null, '5 4');
        s += L(30, Ay, 400, Ay, 'mut', 1.1, '10 4 2 4') + L(Ax, Ay, Dx, Ay, 'ink', 2);
        s += L(Dx, Ay, Dx - 300 * Math.cos(Math.PI / 6), Ay - 150, 'ink', 1.8);
        s += L(Ax, Ay, Tx, Ty, 'terr', 2.2);
        s += poly([[130, 63.8], [138.7, 68.8], [143.7, 60.1]], 'ink', 1.2);
        s += P('M 315 185 A 45 45 0 0 1 321.0 162.5', 'ink', 1.3) + V(300, 178, 'θ', { fs: 15, a: 'middle' });
        s += dot(Ax, Ay, 'ink', 3.5) + dot(Dx, Ay, 'ink', 3.5) + dot(Tx, Ty, 'terr', 3.5);
        s += T(Ax, 204, 'A', { a: 'middle', fs: 12, w: 600 }) + T(Dx, 204, 'D', { a: 'middle', fs: 12, w: 600 }) + T(142, 46, 'T', { fs: 12, w: 600, c: 'terr' });
        s += V(85, 113, '3aΔt', { a: 'end', c: 'terr', fs: 14 }) + V(210, 204, '3uΔt', { a: 'middle', fs: 14 });
        s += T('250.5', '114.8', 'Mach cone', { a: 'middle', fs: 10.5, c: 'mtx', rot: 30 });
        s += N(198, 150, 'wave from A', { c: 'vio', fs: 11.5, a: 'end' }) + N(210, 220, 'AD lies along the flight path', { a: 'middle', fs: 11 });
        s += V(220, 246, 'sin θ = AT / AD = 3aΔt / 3uΔt = a/u = 1/M', { a: 'middle', fs: 13.5 });
        return W(440, 256, s);
      };

      // Pressure coefficient vs M: "M" axis label moved clear of the "1" tick; y-axis named; 5% point added.
      D.tf_cp_mach_v2 = () => {
        const x0 = 80, y0 = 250, w = 380, h = 200;
        const X = (m) => x0 + m * w, Y = (v) => y0 - (v - 1) / 0.3 * h, cp = (m) => m < 1e-3 ? 1 : (Math.pow(1 + 0.2 * m * m, 3.5) - 1) / (0.7 * m * m);
        let s = A(x0, y0, x0 + w + 12, y0, 'ink', 1.4) + A(x0, y0, x0, y0 - h - 12, 'ink', 1.4);
        s += V(x0 + w + 20, y0 + 5, 'M', { fs: 14 }) + V(x0 - 8, 30, '(p₀ − p)/½ρu²', { fs: 14 }) + N(x0 + 112, 30, '= pressure coefficient');
        [0, 0.2, 0.4, 0.6, 0.8, 1].forEach((m) => { s += tick(X(m), y0, String(m)); }); [1, 1.1, 1.2, 1.3].forEach((v) => { s += tick(x0, Y(v), v.toFixed(1), true); });
        s += poly(fn((m) => [X(m), Y(cp(m))], 0, 1, 80), 'terr', 2.4) + L(X(0), Y(1), X(1), Y(1), 'tf', 1.4, '6 4');
        [[0.2, '≈1%', 34], [0.3, '≈2%', 62], [0.45, '≈5%', 80]].forEach((qq) => { const v = cp(qq[0]); s += dot(X(qq[0]), Y(v), 'terr', 3.5) + L(X(qq[0]), Y(v), X(qq[0]), Y(v) - qq[2], 'mut', 1, '3 3') + N(X(qq[0]), Y(v) - qq[2] - 4, 'M = ' + qq[0] + ': ' + qq[1], { a: 'middle' }); });
        s += dot(X(1), Y(cp(1)), 'terr', 3.5) + N(X(1) - 10, Y(cp(1)) - 8, 'compressible: 1.28 at M = 1', { a: 'end', c: 'terr' });
        s += N(X(0.66), Y(1) - 8, 'incompressible (Bernoulli) = 1', { c: 'tf', a: 'middle' });
        return W(520, 280, s);
      };

      // r2: the wavefront figure split into two full-size panels (subsonic, supersonic), larger type,
      // point labels below the axis, radius labels outside the circles on short leaders.
      const wfCols = ['terr', 'vio', 'tf'], wfRl = ['3aΔt', '2aΔt', 'aΔt'];
      D.tf_wavefronts_sub = () => {
        const cy = 200, xs = [200, 224, 248, 272], rs = [144, 96, 48];
        let s = '';
        rs.forEach((r, i) => {
          const px = xs[i] + r * 0.7071, py = cy + r * 0.7071, ly = py + 4;
          s += ci(xs[i], cy, r, wfCols[i], 1.8) + dot(px, py, wfCols[i], 2.5) + L(px, py, 376, py, 'mut', 1, '2 3') + T(382, ly, wfRl[i], { fs: 14, c: wfCols[i], w: 600 });
        });
        xs.forEach((x, i) => { s += dot(x, cy, 'ink', 3.5) + T(x, cy + 21, 'ABCD'[i], { a: 'middle', fs: 13.5, w: 600 }); });
        s += A(275, cy, 316, cy, 'ink', 1.8) + V(300, cy - 8, 'u', { fs: 15, a: 'middle' });
        s += T(10, 20, 'subsonic: u < a  (M = 0.5)', { fs: 14, w: 600 });
        s += N(10, 38, 'spacing uΔt = ½ aΔt: object stays inside its waves', { fs: 12 });
        return W(460, 356, s);
      };

      D.tf_wavefronts_sup = () => {
        const cy = 175, xs = [140, 220, 300, 380], rs = [120, 80, 40], Dx = 380, th = Math.PI / 6, Lc = 330, c = Math.cos(th), sn = Math.sin(th);
        let s = '';
        rs.forEach((r, i) => { s += ci(xs[i], cy, r, wfCols[i], 1.8); });
        s += L(Dx, cy, Dx - Lc * c, cy - Lc * sn, 'ink', 1.8) + L(Dx, cy, Dx - Lc * c, cy + Lc * sn, 'ink', 1.8);
        // radius labels: from each circle's lowest point, a short leader down across the cone line into the clear zone
        [[140, 295, 324], [220, 255, 284], [300, 215, 240]].forEach((q, i) => { s += dot(q[0], q[1], wfCols[i], 2.5) + L(q[0], q[1], q[0], q[2], 'mut', 1, '2 3') + T(q[0], q[2] + 15, wfRl[i], { a: 'middle', fs: 14, c: wfCols[i], w: 600 }); });
        xs.forEach((x, i) => { s += dot(x, cy, 'ink', 3.5) + T(i === 3 ? x + 4 : i === 0 ? x - 9 : x, cy + 21, 'ABCD'[i], { a: 'middle', fs: 13.5, w: 600 }); });
        // tangent point T on the wave from A: radius AT is perpendicular to the cone (right-angle mark)
        const dT = Math.sqrt(240 * 240 - 120 * 120), Tx = Dx - dT * c, Ty = cy - dT * sn, q = 10, u1 = [-0.5, 0.866], u2 = [0.866, 0.5];
        s += L(140, cy, Tx, Ty, 'terr', 1.8, '5 4') + poly([[Tx + q * u1[0], Ty + q * u1[1]], [Tx + q * (u1[0] + u2[0]), Ty + q * (u1[1] + u2[1])], [Tx + q * u2[0], Ty + q * u2[1]]], 'ink', 1.2);
        s += dot(Tx, Ty, 'terr', 3) + T(Tx + 9, Ty - 8, 'T', { fs: 13.5, w: 600, c: 'terr' });
        // θ: arc inside the vertex, label just beyond the arc (clear of circle C and both cone lines)
        s += P('M ' + (Dx - 24) + ' ' + cy + ' A 24 24 0 0 1 ' + (Dx - 24 * c).toFixed(1) + ' ' + (cy - 24 * sn).toFixed(1), 'ink', 1.3);
        s += V(Dx - 33, cy - 4, 'θ', { fs: 13, a: 'middle' });
        s += A(Dx + 3, cy, Dx + 44, cy, 'ink', 1.8) + V(Dx + 26, cy - 8, 'u', { fs: 15, a: 'middle' });
        const mx = Dx - 300 * c + 5 * 0.5, my = cy - 300 * sn - 5 * 0.866;
        s += T(mx.toFixed(1), my.toFixed(1), 'Mach cone', { fs: 13, c: 'mtx', rot: 30 });
        s += N(470, 96, 'zone of', { a: 'middle', fs: 13 }) + N(470, 112, 'silence', { a: 'middle', fs: 13 });
        s += T(510, 20, 'supersonic: u > a  (M = 2)', { a: 'end', fs: 14, w: 600 });
        s += N(510, 38, 'spacing uΔt = 2 aΔt', { a: 'end', fs: 12 });
        s += V(510, 304, 'sin θ = aΔt / uΔt = 1/M', { a: 'end', fs: 15 });
        return W(520, 350, s);
      };
    }
