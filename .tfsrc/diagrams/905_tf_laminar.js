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
        s += N(172, 54, 'spindle: torque T');
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
        s += L(460, 178, 620, 190, 'ink', 1.2, '5 4') + dot(620, 190, 'ink', 3) + N(520, 206, 'slope δ', { c: 'mtx' });
        s += A(46, 180, 112, 180, 'tf', 2) + V(50, 172, 'Q', { c: 'tf' });
        [210, 290, 370].forEach((x) => { const fy = 154 + (x - 140) * 24 / 320; s += A(x, 188, x, fy + 3, 'terr', 1.5); });
        s += A2(300, 167, 300, 190, 'gold') + V(306, 150, 'h = (a − x)δ', { c: 'gold', fs: 13 });
        s += A2(126, 154, 126, 190, 'gold') + V(120, 144, 'h₀ = aδ', { fs: 12.5, c: 'gold', a: 'end' });
        s += A2(140, 46, 460, 46, 'mut') + V(300, 40, 'l', { a: 'middle', c: 'mtx' });
        s += L(140, 190, 140, 262, 'mut', 1, '3 3') + A(140, 216, 300, 216, 'mut', 1.3) + V(220, 232, 'x (from the inlet)', { a: 'middle', c: 'mtx', fs: 12.5 });
        s += A2(140, 258, 620, 258, 'mut') + V(380, 276, 'a  (inlet to where the slipper face, extended, meets the plate)', { a: 'middle', c: 'mtx', fs: 12.5 });
        s += N(486, 160, 'pressure builds in the wedge → load') + N(140, 300, 'both ends open to p_a: p = p_a at x = 0 and x = l', { c: 'terr' });
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
        s += dot(ox, oy, 'ink', 3.5) + T(ox + 9, oy + 2, 'O', { fs: 13, w: 600 }) + dot(cxj, cyj, 'terr', 3.5) + T(cxj - 9, cyj - 6, 'C', { fs: 13, c: 'terr', w: 600, a: 'end' });
        s += L(ox, oy, cxj, cyj, 'terr', 2) + V(ox + 2, oy + 24, 'e', { c: 'terr', fs: 14 });
        s += T(cxj + 4, cyj - 46, 'journal', { fs: 12, a: 'middle' });
        s += PA('M ' + (cxj + 58) + ' ' + (cyj + 30) + ' A 66 66 0 0 1 ' + (cxj - 10) + ' ' + (cyj + 65), 'ink', 1.6) + V(cxj + 46, cyj + 70, 'Ω', { a: 'middle' });
        // leaders to outside labels
        const lb = (x1, y1, x2, y2) => L(x1, y1, x2, y2, 'mtx', 1, '2 2');
        s += lb(ox - 105, oy - 105, 64, 36) + N(20, 30, 'bush (fixed)');
        s += lb(ox + 72, oy - 72, 330, 42) + N(334, 40, 'lubricant', { c: 'tf' });
        const hx = ox - 0.707 * (Rc - 3), hy = oy + 0.707 * (Rc - 3);
        s += lb(hx, hy, 56, 340) + N(20, 354, 'thinnest film c − e');
        // key
        const kx = 400;
        s += N(kx, 92, 'O = bush centre, C = journal centre') + V(kx, 118, 'c = R_c − R  (radial clearance)', { fs: 13 }) + V(kx, 142, 'e = OC,  ε = e/c', { fs: 13 });
        s += N(kx, 166, 'L = bearing length (into the page)') + N(kx, 184, 'dashed: line of centres OC') + N(kx, 202, 'forces quoted along and normal to OC');
        return W(640, 364, s);
      };
    }
