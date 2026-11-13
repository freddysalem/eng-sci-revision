    // ===================== Topic 5 · Laminar (viscous) flows — professor revisions (r1) =====================
    {
      // Vertical film: x across from the wall, z down; element δx × δz with weight and the two shear stresses
      D.tf_film_r1 = () => {
        const xw = 120, xs = 240, yt = 34, yb = 318, Hp = xs - xw;
        let s = wallV(xw, yt, yb, 'left') + R(xw, yt, Hp, yb - yt, 'tint') + L(xs, yt, xs, yb, 'tf', 1.4, '5 4');
        s += A2(xw, 24, xs, 24, 'gold') + V((xw + xs) / 2, 18, 'H', { c: 'gold', a: 'middle' });
        // velocity profile (arrows point down, +z)
        const y0 = 52, umax = 104, uf = (x) => { const xi = (x - xw) / Hp; return umax * xi * (2 - xi); };
        for (let x = xw + 10; x <= xs - 2; x += 14) { const u = uf(x); if (u > 4) s += A(x, y0, x, y0 + u, 'tf', 1.4); }
        s += L(xw, y0, xs, y0, 'tf', 1, '2 3') + poly(fn((x) => [x, y0 + uf(x)], xw, xs, 40), 'tf', 1.8);
        // control volume δx × δz with forces
        const cx1 = 166, cx2 = 196, cy1 = 196, cy2 = 262;
        s += cv(cx1, cy1, cx2 - cx1, cy2 - cy1);
        s += A(cx1 - 5, cy2 - 8, cx1 - 5, cy1 + 10, 'terr', 1.6) + V(cx1 - 10, 236, 'τ', { c: 'terr', fs: 13, a: 'end' });
        s += A(cx2 + 5, cy1 + 8, cx2 + 5, cy2 - 10, 'terr', 1.6) + L(cx2 + 9, 214, xs + 22, 214, 'mut', 1, '2 2') + V(xs + 26, 218, 'τ + (dτ/dx)δx', { c: 'terr', fs: 12.5 });
        s += A((cx1 + cx2) / 2, 212, (cx1 + cx2) / 2, 248, 'terr', 2) + V(xs + 26, 248, 'weight ρg δx δz', { c: 'terr', fs: 12.5 }) + L((cx1 + cx2) / 2 + 4, 244, xs + 22, 244, 'mut', 1, '2 2');
        s += A2(cx1, cy2 + 10, cx2, cy2 + 10, 'gold') + V((cx1 + cx2) / 2, cy2 + 26, 'δx', { c: 'gold', fs: 12, a: 'middle' });
        // axes
        s += A(86, 44, 86, 128, 'mut', 1.3) + V(86, 146, 'z', { c: 'mtx', a: 'middle' }) + N(86, 160, '(down)', { a: 'middle' });
        s += A(xw, 330, xs + 48, 330, 'mut', 1.3) + V(xs + 54, 335, 'x', { c: 'mtx' }) + T(xw - 4, 346, '0', { fs: 11, c: 'mtx', a: 'middle' });
        // annotations (right)
        const tx = 300;
        s += N(tx, 50, 'free surface x = H: du/dx = 0', { c: 'tf' }) + N(tx, 66, 'still air, p = p_{atm} everywhere');
        s += A(560, 40, 560, 106, 'ink', 1.8) + V(568, 80, 'g');
        s += V(tx, 124, 'u = (ρg/μ)(Hx − x²/2)', { c: 'tf', fs: 13.5 }) + V(tx, 150, 'τ = ρg(H − x),  τ_w = ρgH', { c: 'terr', fs: 13.5 });
        s += N(tx, 176, 'no slip at the wall x = 0: u = 0');
        s += N(tx, 290, 'weight + net shear = 0  ⇒  dτ/dx = −ρg', { c: 'terr' });
        return W(600, 356, s);
      };

      // Spindle viscometer: label moved off the shaft; 2a / 2b / c marked; c also on the top view
      D.tf_viscometer_r1 = () => {
        let s = P('M 60 60 L 60 284 L 250 284 L 250 60', 'ink', 2.2) + R(62, 76, 186, 206, 'tint') + R(88, 92, 134, 172, 'mut', 'ink', 1.4) + R(150, 18, 10, 76, 'mut', 'ink', 1.2);
        s += PA('M 132 34 A 30 10 0 1 0 182 30', 'terr', 1.6) + V(118, 30, 'Ω', { c: 'terr', a: 'end' });
        s += N(198, 40, 'spindle: torque T');
        s += A2(270, 92, 270, 264, 'gold') + V(278, 182, 'h', { c: 'gold' });
        s += A2(62, 120, 88, 120, 'terr') + V(66, 112, 'c', { c: 'terr', fs: 13 });
        s += A2(90, 244, 220, 244, 'ink') + V(155, 238, '2a', { a: 'middle', fs: 13 });
        s += A2(62, 300, 248, 300, 'gold') + V(155, 316, '2b', { c: 'gold', a: 'middle', fs: 13 }) + N(155, 334, 'D = a + b (mean diameter)', { a: 'middle' });
        const cx = 480, cy = 160;
        s += ci(cx, cy, 116, 'mut', 12) + '<circle cx="' + cx + '" cy="' + cy + '" r="110" fill="' + tint + '" stroke="' + ink + '" stroke-width="2"></circle><circle cx="' + cx + '" cy="' + cy + '" r="84" fill="' + mut + '" stroke="' + ink + '" stroke-width="1.6"></circle>';
        s += A(cx, cy, cx + 84 * Math.cos(-0.6), cy + 84 * Math.sin(-0.6), 'ink', 1.6) + V(cx + 40, cy - 40, 'a') + A(cx, cy, cx + 110 * Math.cos(-2.2), cy + 110 * Math.sin(-2.2), 'ink', 1.6) + V(cx - 50, cy - 56, 'b');
        const th = 0.45, c1 = Math.cos(th), s1 = Math.sin(th);
        s += A2(cx + 84 * c1, cy + 84 * s1, cx + 110 * c1, cy + 110 * s1, 'terr') + V(cx + 134 * c1, cy + 134 * s1 + 5, 'c', { c: 'terr', fs: 14 });
        s += PA('M ' + (cx - 30) + ' ' + (cy + 30) + ' A 42 42 0 0 0 ' + (cx + 30) + ' ' + (cy + 30), 'terr', 1.6) + V(cx, cy + 66, 'Ω', { c: 'terr', a: 'middle' });
        s += N(cx, 300, 'top view: ω = Ω at r = a, ω = 0 at r = b', { a: 'middle' });
        return W(640, 344, s);
      };

      // Slipper bearing: x from the inlet, h0 = aδ clear of the slipper edge, slope δ marked
      D.tf_slipper_r1 = () => {
        let s = R(30, 190, 650, 14, 'url(#tf-hatch)') + L(30, 190, 680, 190, 'ink', 1.8);
        s += A(36, 226, 104, 226, 'ink', 2) + V(110, 231, 'V', { fs: 14 }) + N(36, 244, 'bearing plate moves');
        s += pgon([[140, 154], [460, 178], [460, 190], [140, 190]], 'tint', null) + pgon([[140, 64], [460, 64], [460, 178], [140, 154]], 'mut', 'ink', 1.6) + T(300, 104, 'slipper (fixed)', { a: 'middle', fs: 12 });
        s += L(460, 178, 620, 190, 'ink', 1.2, '5 4') + dot(620, 190, 'ink', 3) + N(566, 178, 'slope δ', { c: 'mtx' });
        s += A(46, 180, 112, 180, 'tf', 2) + V(50, 172, 'Q', { c: 'tf' });
        [210, 290, 370].forEach((x) => { const fy = 154 + (x - 140) * 24 / 320; s += A(x, 188, x, fy + 3, 'terr', 1.5); });
        s += A2(300, 167, 300, 190, 'gold') + V(306, 150, 'h = (a − x)δ', { c: 'gold', fs: 13 });
        s += A2(126, 154, 126, 190, 'gold') + V(120, 144, 'h₀ = aδ', { fs: 12.5, c: 'gold', a: 'end' });
        s += A2(140, 46, 460, 46, 'mut') + V(300, 40, 'l', { a: 'middle', c: 'mtx' });
        s += L(140, 190, 140, 262, 'mut', 1, '3 3') + A(140, 216, 300, 216, 'mut', 1.3) + V(220, 232, 'x (from the inlet)', { a: 'middle', c: 'mtx', fs: 12.5 });
        s += A2(140, 258, 620, 258, 'mut') + V(380, 276, 'a  (inlet to where the slipper face, extended, meets the plate)', { a: 'middle', c: 'mtx', fs: 12.5 });
        s += N(486, 146, 'pressure builds in the wedge → load') + N(140, 300, 'both ends open to p_a: p = p_a at x = 0 and x = l', { c: 'terr' });
        return W(700, 310, s);
      };

      // Journal bearing: labels clear of the hatching and of O / C; R_c defined; thinnest film marked
      D.tf_journal_r1 = () => {
        const ox = 190, oy = 180, Rc = 118, Rj = 96, e = 16, dx = -e / Math.SQRT2, dy = e / Math.SQRT2, cxj = ox + dx, cyj = oy + dy;
        let s = '<circle cx="' + ox + '" cy="' + oy + '" r="' + (Rc + 16) + '" fill="none" stroke="url(#tf-hatch)" stroke-width="32"></circle>' + ci(ox, oy, Rc + 32, 'ink', 1.4) + '<circle cx="' + ox + '" cy="' + oy + '" r="' + Rc + '" fill="' + tint + '" stroke="' + ink + '" stroke-width="2"></circle>';
        s += '<circle cx="' + cxj.toFixed(1) + '" cy="' + cyj.toFixed(1) + '" r="' + Rj + '" fill="' + mut + '" stroke="' + ink + '" stroke-width="2"></circle>';
        s += L(ox + 175, oy - 175, ox - 175, oy + 175, 'mtx', 1, '6 4');
        // R_c from O, R from C
        const aRc = -1.2; s += A(ox, oy, ox + Rc * Math.cos(aRc), oy + Rc * Math.sin(aRc), 'ink', 1.4) + V(ox + 0.8 * Rc * Math.cos(aRc) + 8, oy + 0.8 * Rc * Math.sin(aRc) + 4, 'R_c', { fs: 14 });
        const aR = -2.8; s += A(cxj, cyj, cxj + Rj * Math.cos(aR), cyj + Rj * Math.sin(aR), 'ink', 1.4) + V(cxj + 0.55 * Rj * Math.cos(aR), cyj + 0.55 * Rj * Math.sin(aR) - 8, 'R', { fs: 14, a: 'middle' });
        // centres and eccentricity
        s += dot(ox, oy, 'ink', 3.5) + T(ox + 10, oy + 5, 'O', { fs: 13, w: 600 }) + dot(cxj, cyj, 'terr', 3.5) + T(cxj - 10, cyj + 6, 'C', { fs: 13, c: 'terr', w: 600, a: 'end' });
        s += L(ox, oy, cxj, cyj, 'terr', 2) + V(ox + 12, oy + 31, 'e', { c: 'terr', fs: 14 });
        s += T(cxj - 30, cyj - 62, 'journal', { fs: 12, a: 'middle' }); // r3: off the line of centres (which runs NE–SW through O and C)
        s += PA('M ' + (cxj + 58) + ' ' + (cyj + 30) + ' A 66 66 0 0 1 ' + (cxj - 10) + ' ' + (cyj + 65), 'ink', 1.6) + V(cxj + 46, cyj + 70, 'Ω', { a: 'middle' });
        // leaders to outside labels
        const lb = (x1, y1, x2, y2) => L(x1, y1, x2, y2, 'mtx', 1, '2 2');
        s += lb(ox - 105, oy - 105, 64, 36) + N(20, 30, 'bush (fixed)');
        s += lb(ox + 110 * Math.cos(-0.5), oy + 110 * Math.sin(-0.5), 352, 44) + N(356, 40, 'lubricant', { c: 'tf' });
        const hx = ox - 0.707 * (Rc - 3), hy = oy + 0.707 * (Rc - 3);
        s += lb(hx, hy, 56, 340) + N(20, 354, 'thinnest film c − e');
        // key
        const kx = 400;
        s += N(kx, 92, 'O = bush centre, C = journal centre') + V(kx, 118, 'c = R_c − R  (radial clearance)', { fs: 13 }) + V(kx, 142, 'e = OC,  ε = e/c', { fs: 13 });
        s += N(kx, 166, 'L = bearing length (into the page)') + N(kx, 184, 'dashed: line of centres OC') + N(kx, 202, 'forces quoted along and normal to OC');
        return W(640, 364, s);
      };

      // ===================== r2: H labels moved clear of the profile / text; incline film gets x, y axes =====================
      D.tf_plates = () => {
        const yt = 60, yb = 200, H = 140; let s = wall(30, yt, 610, 'up') + wall(30, yb, 610, 'down');
        s += A(52, yb, 52, 44, 'mut', 1.2) + V(40, 54, 'y', { c: 'mtx' }) + T(46, yb + 18, '0', { fs: 11, c: 'mtx' });
        s += cv(236, 118, 74, 28) + A(196, 132, 232, 132, 'terr', 1.6) + V(186, 128, 'p', { c: 'terr', a: 'end', fs: 13 }) + A(350, 132, 314, 132, 'terr', 1.6) + V(354, 127, 'p + (dp/dx)δx', { c: 'terr', fs: 12.5 });
        s += A(300, 151, 252, 151, 'terr', 1.6) + V(246, 165, 'τ', { c: 'terr', fs: 13 }) + A(250, 112, 298, 112, 'terr', 1.6) + V(246, 104, 'τ + (dτ/dy)δy', { c: 'terr', fs: 12.5 });
        const ys = []; for (let y = 66; y <= 196; y += 13) ys.push(y);
        s += prof(460, ys, (y) => { const h = (yb - y) / H; return 116 * 4 * h * (1 - h); }, 'tf');
        s += A2(600, yt, 600, yb, 'gold') + V(608, 136, 'H', { c: 'gold' }) + A(70, 88, 140, 88, 'tf', 2.2) + V(74, 80, 'Q', { c: 'tf' });
        s += N(520, 226, 'u_max = 1.5u_m at y = H/2', { a: 'middle', c: 'tf' });
        return W(640, 240, s);
      };

      D.tf_couette = () => {
        let s = R(30, 46, 560, 14, 'mut', 'ink', 1.4) + A(240, 30, 340, 30, 'ink', 2) + V(346, 35, 'V (moving plate)', { fs: 14 }) + wall(30, 200, 590, 'down');
        const ys = []; for (let y = 196; y >= 64; y -= 12) ys.push(y);
        s += prof(200, ys, (y) => 170 * (200 - y) / 140, 'tf');
        s += A2(604, 60, 604, 200, 'gold') + V(612, 136, 'H', { c: 'gold' }) + V(392, 112, 'u = Vy/H', { c: 'tf', fs: 14 }) + V(392, 138, 'τ = μV/H (same everywhere)', { c: 'terr', fs: 13.5 }) + N(60, 224, 'fixed wall: u = 0');
        return W(640, 236, s);
      };

      D.tf_film_incline = () => {
        const g = (inner) => '<g transform="rotate(22 300 170)">' + inner + '</g>';
        const cs = Math.cos(22 * Math.PI / 180), sn = Math.sin(22 * Math.PI / 180);
        const rp = (px, py) => [300 + (px - 300) * cs - (py - 170) * sn, 170 + (px - 300) * sn + (py - 170) * cs];
        let inner = wall(40, 200, 560, 'down') + R(40, 146, 520, 54, 'tint') + L(40, 146, 560, 146, 'tf', 1.4, '5 4');
        const ys = []; for (let y = 196; y >= 150; y -= 7.6) ys.push(y);
        inner += prof(300, ys, (y) => { const xi = (200 - y) / 54; return 110 * xi * (2 - xi); }, 'tf') + A2(250, 146, 250, 200, 'gold');
        // axes: origin on the plane, x down the slope, y normal to it
        inner += A(450, 200, 450, 108, 'ink', 1.5) + A(450, 200, 530, 200, 'ink', 1.5) + dot(450, 200, 'ink', 2.5);
        let s = g(inner) + T(222, 140, 'H', { serif: true, fs: 15, c: 'gold' }) + T(330, 136, 'free surface', { fs: 10.5, c: 'tf' });
        const py = rp(450, 96), px = rp(536, 186), po = rp(438, 190);
        s += V(py[0], py[1], 'y', { a: 'middle' }) + N(py[0] + 10, py[1] + 2, '(normal)') + V(px[0], px[1] + 4, 'x', { a: 'middle' }) + N(px[0] + 10, px[1] + 6, '(down slope)') + T(po[0], po[1], '0', { fs: 11, c: 'mtx', a: 'middle' });
        s += A(520, 40, 520, 110, 'ink', 1.8) + V(528, 90, 'g');
        s += L(52, 74, 172, 74, 'mut', 1.2) + P('M 132 74 A 80 80 0 0 1 126.2 103.9', 'ink', 1.3) + V(140, 98, 'α', { fs: 14 });
        s += V(300, 322, 'u = (ρg sin α/μ)(Hy − y²/2),   Q = ρg sin α H³/3μ', { a: 'middle', fs: 13.5, c: 'tf' });
        return W(600, 336, s);
      };
    }
