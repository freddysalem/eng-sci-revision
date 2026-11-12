    // ===================== Topic 2 · Building blocks of dimensional analysis (prof r1–r2) =====================
    // r2: narrower viewBoxes + larger type so every label renders at ≥ ~11 px in the notes column.
    {
      // --- similarity: full scale vs half-size model; labels clear of the streamlines; forces and a corresponding point marked
      D.tf_similarity = () => {
        const foil = (cx, cy, c, ang) => { const up = [], lo = []; for (let i = 0; i <= 40; i++) { const x = Math.pow(i / 40, 1.6); const yt = 0.6 * (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x * x + 0.2843 * x * x * x - 0.1015 * x * x * x * x); const yc = 0.04 * x * (1 - x) * 2; up.push([x, yc + yt]); lo.push([x, yc - yt]); }
          const pt = (p) => { const a = ang * Math.PI / 180, X = (p[0] - 0.35) * c, Y = -p[1] * c; return [cx + X * Math.cos(a) - Y * Math.sin(a), cy + X * Math.sin(a) + Y * Math.cos(a)]; };
          return pgon(up.map(pt).concat(lo.reverse().map(pt)), 'paper', 'ink', 1.6); };
        const sy = (cy, c, k, t) => cy + k * c - (k < 0 ? 0.13 : 0.05) * c * Math.exp(-Math.pow((t - 0.5) / 0.2, 2));
        const lines = (cx, cy, c) => { let s = ''; [-0.42, -0.24, 0.24, 0.42].forEach((k) => { s += poly(fn((t) => [cx + (t - 0.5) * c * 1.9, sy(cy, c, k, t)], 0, 1, 40), 'tf', 1.3); }); return s; };
        const cy = 128, F = { cx: 195, c: 190 }, M = { cx: 522, c: 95 };
        let s = lines(F.cx, cy, F.c) + foil(F.cx, cy, F.c, 6) + lines(M.cx, cy, M.c) + foil(M.cx, cy, M.c, 6);
        // oncoming flow
        s += A(20, cy, 64, cy, 'tf', 2.2) + V(20, cy - 10, 'U_fs', { c: 'tf', fs: 16 });
        s += A(436, cy, 468, cy, 'tf', 2) + V(434, cy - 9, 'U_m', { c: 'tf', fs: 14 });
        // lift and drag (terracotta), labelled
        s += A(F.cx, cy - 18, F.cx, cy - 58, 'terr', 2.2) + A(F.cx, cy - 18, F.cx + 46, cy - 18, 'terr', 2.2);
        s += V(F.cx + 8, cy - 48, 'L', { c: 'terr', fs: 16 }) + T(F.cx + 21, cy - 48, 'lift', { c: 'terr', fs: 13 }) + V(F.cx + 52, cy - 13, 'D', { c: 'terr', fs: 16 }) + T(F.cx + 66, cy - 13, 'drag', { c: 'terr', fs: 13 });
        s += A(M.cx, cy - 9, M.cx, cy - 29, 'terr', 1.8) + A(M.cx, cy - 9, M.cx + 24, cy - 9, 'terr', 1.8);
        s += V(M.cx - 5, cy - 20, 'L', { c: 'terr', fs: 14, a: 'end' }) + V(M.cx + 30, cy - 10, 'D', { c: 'terr', fs: 14 });
        // a pair of corresponding points (same position relative to the body)
        const P = (o, r) => { const t = 0.75, x = o.cx + (t - 0.5) * o.c * 1.9, y = sy(cy, o.c, 0.42, t); return dot(x, y, 'gold', r) + V(x + 7, y + 17, 'P', { c: 'gold', fs: 15 }); };
        s += P(F, 4.5) + P(M, 3.6);
        // labels below the lowest streamline
        s += T(F.cx, 244, 'full scale (fs)', { a: 'middle', fs: 15, w: 600 }) + T(M.cx, 244, 'model (m): lengths × ½', { a: 'middle', fs: 15, w: 600 });
        return W(640, 254, s);
      };

      // --- pipe-flow variables with every length dimensioned (new key: tf_pipe_vars is shared with Topic 3)
      D.tf_pipe_dims = () => {
        const x1 = 60, x2 = 520, yt = 84, yb = 184, s1 = 105, s2 = 475, ym = 134;
        let s = wall(x1, yt, x2, 'up') + wall(x1, yb, x2, 'down') + cl(x1, ym, x2);
        for (let x = 72; x < 508; x += 16) s += pgon([[x, yt], [x + 5, yt + 5], [x + 10, yt]], 'mut', 'ink', 0.8) + pgon([[x, yb], [x + 5, yb - 5], [x + 10, yb]], 'mut', 'ink', 0.8);
        // the two sections a length l apart
        s += L(s1, yt, s1, yb, 'gold', 1.6, '5 4') + L(s2, yt, s2, yb, 'gold', 1.6, '5 4');
        s += L(s1, yt - 12, s1, 34, 'gold', 1, '3 3') + L(s2, yt - 12, s2, 34, 'gold', 1, '3 3');
        s += A2(s1, 44, s2, 44, 'gold') + V(260, 34, 'l', { a: 'middle', c: 'gold', fs: 18 }) + T(274, 34, 'length between sections', { c: 'gold', fs: 13 });
        // diameter
        s += L(x2, yt, 566, yt, 'gold', 1, '3 3') + L(x2, yb, 566, yb, 'gold', 1, '3 3');
        s += A2(556, yt, 556, yb, 'gold') + V(566, ym + 6, 'D', { c: 'gold', fs: 18 });
        // pressures at the two sections, flow, fluid
        s += V(s1 + 8, 112, 'p + Δp', { c: 'terr', fs: 18 }) + V(s2 - 8, 112, 'p', { c: 'terr', fs: 18, a: 'end' });
        s += A(s1 + 10, 163, s1 + 74, 163, 'tf', 2.4) + V(s1 + 80, 169, 'u_m', { c: 'tf', fs: 18 }) + T(s1 + 112, 168, 'mean speed', { c: 'tf', fs: 13 });
        s += V(300, ym + 6, 'ρ, μ', { a: 'middle', c: 'grn', fs: 18 });
        // roughness: magnified inset
        s += ci(212, yb, 10, 'gold', 1.2, '3 2') + L(219, yb + 9, 240, 222, 'gold', 1, '3 3');
        const bx = 244, by = 248; let bumps = [[bx, by]]; for (let i = 0; i < 4; i++) { bumps.push([bx + 10 + 20 * i, by - 14]); bumps.push([bx + 20 + 20 * i, by]); }
        s += poly(bumps, 'ink', 1.5) + L(bx - 6, by, bx + 92, by, 'ink', 0.8) + L(bx + 70, by - 14, bx + 104, by - 14, 'mut', 1, '3 3') + A2(bx + 100, by - 14, bx + 100, by, 'gold');
        s += V(bx + 110, by - 1, 'e', { c: 'gold', fs: 18 }) + T(bx + 124, by - 2, 'roughness (magnified)', { c: 'gold', fs: 13 });
        // sort the variables
        s += T(60, 286, 'want: Δp', { fs: 15, c: 'terr', w: 600 }) + T(178, 286, 'regulate: u<tspan dy="4" font-size="0.85em">m</tspan><tspan dy="-4">\u200b</tspan>', { fs: 15, c: 'tf', w: 600 }) + T(330, 286, 'fluid: ρ, μ', { fs: 15, c: 'grn', w: 600 }) + T(452, 286, 'pipe: D, l, e', { fs: 15, c: 'gold', w: 600 });
        return W(620, 298, s);
      };

      // --- where the inertial and viscous force scalings come from
      D.tf_force_scales = () => {
        let s = T(20, 20, 'Inertial force', { fs: 15, w: 600, c: 'terr' }) + T(312, 20, 'Viscous force', { fs: 15, w: 600, c: 'terr' });
        // left: a lump of fluid of size L
        s += pgon([[40, 56], [58, 40], [128, 40], [110, 56]], 'tint', 'ink', 1.4) + pgon([[110, 56], [128, 40], [128, 110], [110, 126]], 'tint', 'ink', 1.4) + R(40, 56, 70, 70, 'tint', 'ink', 1.4);
        s += V(75, 97, 'ρ', { a: 'middle', c: 'grn', fs: 18 });
        s += A2(40, 140, 110, 140, 'mut') + V(75, 158, 'L', { a: 'middle', fs: 16 });
        s += A(144, 86, 196, 86, 'tf', 2.4) + V(202, 92, 'u', { c: 'tf', fs: 17 });
        s += T(20, 186, 'mass ~ ρL³, time ~ L/u', { fs: 13.5 });
        s += T(20, 207, 'accel. ~ u/(L/u) = u²/L', { fs: 13.5 });
        s += T(20, 234, 'F_I ~ ρu²L²', { fs: 16, c: 'terr', w: 600 });
        s += L(290, 30, 290, 238, 'mut', 1, '4 4');
        // right: shear across a layer of thickness L
        s += wall(312, 140, 566, 'down');
        s += prof(352, [136, 120, 104, 88, 72, 62], (y) => (140 - y) / 78 * 120, 'tf');
        s += A2(336, 62, 336, 140, 'mut') + V(328, 106, 'L', { a: 'end', fs: 16 }) + V(478, 66, 'u', { c: 'tf', fs: 17 });
        s += A(396, 42, 444, 42, 'terr', 2.2) + V(450, 47, 'τ', { c: 'terr', fs: 17 }) + T(466, 46, 'shear stress', { c: 'terr', fs: 12.5 });
        s += T(312, 186, 'τ = μ du/dy ~ μu/L', { fs: 13.5 });
        s += T(312, 207, 'acting on area ~ L²', { fs: 13.5 });
        s += T(312, 234, 'F_V ~ μ(u/L)·L² = μuL', { fs: 16, c: 'terr', w: 600 });
        return W(580, 248, s);
      };
    }
