    // ===================== Topic 5 · Laminar (viscous) flows =====================
    D.tf_poiseuille_pipe = () => {
      const yt = 50, yb = 210, yc = 130; let s = wall(30, yt, 610, 'up') + wall(30, yb, 610, 'down') + cl(30, yc, 610);
      s += cv(232, 80, 78, 100) + A(176, 130, 228, 130, 'terr', 2) + V(166, 126, 'p', { c: 'terr', a: 'end' }) + A(366, 130, 314, 130, 'terr', 2) + V(370, 125, 'p + (dp/dx)δx', { c: 'terr', fs: 13 });
      s += A(300, 86, 246, 86, 'terr', 1.7) + V(250, 102, 'τ', { c: 'terr', fs: 13 }) + A(300, 174, 246, 174, 'terr', 1.7);
      s += A2(232, 196, 310, 196, 'mut') + V(271, 204, 'δx', { c: 'mtx', fs: 12, a: 'middle' }) + A2(218, 130, 218, 80, 'gold') + V(204, 110, 'r', { c: 'gold' });
      const ys = []; for (let y = 56; y <= 204; y += 14.8) ys.push(y);
      s += prof(450, ys, (y) => 100 * (1 - Math.pow((y - yc) / 80, 2)), 'tf');
      s += A2(596, yc, 596, yt, 'gold') + V(582, 96, 'R', { c: 'gold', a: 'end' }) + A(40, 112, 110, 112, 'tf', 2.2) + V(44, 104, 'Q', { c: 'tf' });
      s += N(505, 232, 'parabolic: u_max = 2u_m on the centreline', { a: 'middle', c: 'tf' });
      return W(640, 244, s);
    };

    D.tf_plates = () => {
      const yt = 60, yb = 200, H = 140; let s = wall(30, yt, 610, 'up') + wall(30, yb, 610, 'down');
      s += A(52, yb, 52, 44, 'mut', 1.2) + V(40, 54, 'y', { c: 'mtx' }) + T(46, yb + 18, '0', { fs: 11, c: 'mtx' });
      s += cv(236, 118, 74, 28) + A(196, 132, 232, 132, 'terr', 1.6) + V(186, 128, 'p', { c: 'terr', a: 'end', fs: 13 }) + A(350, 132, 314, 132, 'terr', 1.6) + V(354, 127, 'p + (dp/dx)δx', { c: 'terr', fs: 12.5 });
      s += A(300, 151, 252, 151, 'terr', 1.6) + V(246, 165, 'τ', { c: 'terr', fs: 13 }) + A(250, 112, 298, 112, 'terr', 1.6) + V(246, 104, 'τ + (dτ/dy)δy', { c: 'terr', fs: 12.5 });
      const ys = []; for (let y = 66; y <= 196; y += 13) ys.push(y);
      s += prof(460, ys, (y) => { const h = (yb - y) / H; return 116 * 4 * h * (1 - h); }, 'tf');
      s += A2(596, yt, 596, yb, 'gold') + V(582, 134, 'H', { c: 'gold', a: 'end' }) + A(70, 88, 140, 88, 'tf', 2.2) + V(74, 80, 'Q', { c: 'tf' });
      s += N(520, 226, 'u_max = 1.5u_m at y = H/2', { a: 'middle', c: 'tf' });
      return W(640, 240, s);
    };

    D.tf_film = () => {
      let s = wallV(110, 24, 300, 'left') + R(110, 24, 70, 276, 'tint') + L(180, 24, 180, 300, 'tf', 1.4, '5 4');
      const xs = []; for (let x = 116; x <= 178; x += 9.5) xs.push(x);
      xs.forEach((x) => { const xi = (x - 110) / 70, u = 110 * xi * (2 - xi); if (u > 4) s += A(x, 110, x, 110 + u, 'tf', 1.5); });
      s += poly(fn((x) => { const xi = (x - 110) / 70; return [x, 110 + 110 * xi * (2 - xi)]; }, 110, 180, 30), 'tf', 1.8);
      s += A2(110, 16, 180, 16, 'gold') + V(145, 10, 'H', { c: 'gold', a: 'middle' }) + A(110, 286, 236, 286, 'mut', 1.2) + V(240, 290, 'x', { c: 'mtx' }) + A(84, 40, 84, 120, 'mut', 1.2) + V(70, 132, 'z', { c: 'mtx' });
      s += A(330, 60, 330, 130, 'ink', 1.8) + V(338, 104, 'g');
      s += N(196, 60, 'free surface: du/dx = 0', { c: 'tf' }) + N(196, 76, '(still air, no stress)') + N(190, 250, 'no slip at wall: u = 0');
      s += V(190, 160, 'u = (ρg/μ)(Hx − x²/2)', { c: 'tf', fs: 13.5 }) + V(190, 186, 'τ_w = ρgH', { c: 'terr', fs: 13.5 });
      return W(460, 310, s);
    };

    D.tf_film_incline = () => {
      const g = (inner) => '<g transform="rotate(22 300 170)">' + inner + '</g>';
      let inner = wall(40, 200, 560, 'down') + R(40, 146, 520, 54, 'tint') + L(40, 146, 560, 146, 'tf', 1.4, '5 4');
      const ys = []; for (let y = 196; y >= 150; y -= 7.6) ys.push(y);
      inner += prof(300, ys, (y) => { const xi = (200 - y) / 54; return 110 * xi * (2 - xi); }, 'tf') + A2(250, 146, 250, 200, 'gold');
      let s = g(inner) + T(222, 140, 'H', { serif: true, fs: 15, c: 'gold' }) + T(330, 136, 'free surface', { fs: 10.5, c: 'tf' });
      s += A(520, 40, 520, 110, 'ink', 1.8) + V(528, 90, 'g');
      s += L(52, 74, 172, 74, 'mut', 1.2) + P('M 132 74 A 80 80 0 0 1 126.2 103.9', 'ink', 1.3) + V(140, 98, 'α', { fs: 14 });
      s += V(300, 300, 'u = (ρg sin α/μ)(Hy − y²/2),   Q = ρg sin α H³/3μ', { a: 'middle', fs: 13.5, c: 'tf' });
      return W(600, 316, s);
    };

    D.tf_couette = () => {
      let s = R(30, 46, 560, 14, 'mut', 'ink', 1.4) + A(240, 30, 340, 30, 'ink', 2) + V(346, 35, 'V (moving plate)', { fs: 14 }) + wall(30, 200, 590, 'down');
      const ys = []; for (let y = 196; y >= 64; y -= 12) ys.push(y);
      s += prof(200, ys, (y) => 170 * (200 - y) / 140, 'tf');
      s += A2(596, 60, 596, 200, 'gold') + V(584, 134, 'H', { c: 'gold', a: 'end' }) + V(392, 112, 'u = Vy/H', { c: 'tf', fs: 14 }) + V(392, 138, 'τ = μV/H (same everywhere)', { c: 'terr', fs: 13.5 }) + N(60, 224, 'fixed wall: u = 0');
      return W(620, 236, s);
    };

    D.tf_couette_poiseuille = () => {
      const panel = (x0, f, moving, lab) => { let p = (moving ? R(x0, 46, 170, 9, 'mut', 'ink', 1.2) + A(x0 + 60, 36, x0 + 110, 36, 'ink', 1.6) + V(x0 + 116, 40, 'V', { fs: 13 }) : wall(x0, 55, x0 + 170, 'up')) + wall(x0, 195, x0 + 170, 'down');
        const ys = []; for (let y = 61; y <= 191; y += 13) ys.push(y); p += prof(x0 + 30, ys, f, 'tf') + N(x0 + 85, 222, lab, { a: 'middle' }); return p; };
      const pois = (y) => { const h = (195 - y) / 140; return 90 * 4 * h * (1 - h); }, cou = (y) => 90 * (195 - y) / 140;
      let s = panel(20, pois, false, 'Poiseuille (pressure-driven)') + T(206, 130, '+', { fs: 24, a: 'middle' }) + panel(230, cou, true, 'Couette (moving wall)') + T(416, 130, '=', { fs: 24, a: 'middle' }) + panel(440, (y) => 0.75 * pois(y) + 0.75 * cou(y), true, 'combined');
      s += V(320, 252, 'Q = H³/12μ (−dp/dx) + VH/2', { a: 'middle', fs: 14 });
      return W(640, 262, s);
    };

    D.tf_viscometer = () => {
      let s = P('M 60 60 L 60 284 L 250 284 L 250 60', 'ink', 2.2) + R(62, 76, 186, 206, 'tint') + R(88, 92, 134, 172, 'mut', 'ink', 1.4) + R(150, 18, 10, 76, 'mut', 'ink', 1.2);
      s += PA('M 132 34 A 30 10 0 1 0 182 30', 'terr', 1.6) + V(192, 28, 'Ω', { c: 'terr' });
      s += A2(270, 92, 270, 264, 'gold') + V(278, 182, 'h', { c: 'gold' }) + A2(88, 300, 222, 300, 'gold') + V(155, 316, 'D', { c: 'gold', a: 'middle' }) + A2(62, 120, 88, 120, 'terr') + V(66, 112, 'c', { c: 'terr', fs: 13 });
      const cx = 480, cy = 160;
      s += ci(cx, cy, 116, 'mut', 12) + '<circle cx="' + cx + '" cy="' + cy + '" r="110" fill="' + tint + '" stroke="' + ink + '" stroke-width="2"></circle><circle cx="' + cx + '" cy="' + cy + '" r="84" fill="' + mut + '" stroke="' + ink + '" stroke-width="1.6"></circle>';
      s += A(cx, cy, cx + 84 * Math.cos(-0.6), cy + 84 * Math.sin(-0.6), 'ink', 1.6) + V(cx + 40, cy - 40, 'a') + A(cx, cy, cx + 110 * Math.cos(-2.2), cy + 110 * Math.sin(-2.2), 'ink', 1.6) + V(cx - 50, cy - 56, 'b');
      s += PA('M ' + (cx - 30) + ' ' + (cy + 30) + ' A 42 42 0 0 0 ' + (cx + 30) + ' ' + (cy + 30), 'terr', 1.6) + V(cx, cy + 66, 'Ω', { c: 'terr', a: 'middle' });
      s += N(cx, 296, 'top view: u = Ωa at r = a, u = 0 at r = b', { a: 'middle' }) + N(155, 52, 'spindle, torque T', { a: 'middle' });
      return W(640, 324, s);
    };

    D.tf_slipper = () => {
      let s = R(30, 190, 650, 14, 'url(#tf-hatch)') + L(30, 190, 680, 190, 'ink', 1.8) + A(40, 214, 120, 214, 'ink', 2) + V(126, 219, 'V', { fs: 14 }) + N(140, 219, 'bearing plate moves');
      s += pgon([[140, 154], [460, 178], [460, 190], [140, 190]], 'tint', null) + pgon([[140, 64], [460, 64], [460, 178], [140, 154]], 'mut', 'ink', 1.6) + T(300, 104, 'slipper', { a: 'middle', fs: 12 });
      s += L(460, 178, 620, 190, 'ink', 1.2, '5 4') + dot(620, 190, 'ink', 3);
      s += A(60, 172, 132, 172, 'tf', 2) + V(64, 164, 'Q', { c: 'tf' });
      [210, 290, 370].forEach((x) => { const fy = 154 + (x - 140) * 24 / 320; s += A(x, 188, x, fy + 3, 'terr', 1.5); });
      s += A2(300, 166, 300, 190, 'gold') + V(306, 152, 'h = (a − x)δ', { c: 'gold', fs: 13 });
      s += A2(140, 46, 460, 46, 'mut') + V(300, 40, 'l', { a: 'middle', c: 'mtx' }) + A2(140, 238, 620, 238, 'mut') + V(380, 252, 'a  (to where the taper would meet the plate)', { a: 'middle', c: 'mtx', fs: 12.5 });
      s += N(490, 160, 'pressure builds in the wedge → load') + V(140, 146, 'h₀ = aδ', { fs: 12.5, c: 'gold', a: 'end' });
      return W(700, 262, s);
    };

    D.tf_journal = () => {
      const ox = 190, oy = 165, e = 22, cxj = ox + e * Math.cos(Math.PI / 4), cyj = oy + e * Math.sin(Math.PI / 4);
      let s = '<circle cx="' + ox + '" cy="' + oy + '" r="128" fill="none" stroke="url(#tf-hatch)" stroke-width="32"></circle>' + ci(ox, oy, 144, 'ink', 1.4) + '<circle cx="' + ox + '" cy="' + oy + '" r="112" fill="' + tint + '" stroke="' + ink + '" stroke-width="2"></circle>';
      s += '<circle cx="' + cxj.toFixed(1) + '" cy="' + cyj.toFixed(1) + '" r="90" fill="' + mut + '" stroke="' + ink + '" stroke-width="2"></circle>';
      s += dot(ox, oy, 'ink', 3.5) + T(ox - 12, oy - 6, 'O', { fs: 13, a: 'end', w: 600 }) + dot(cxj, cyj, 'terr', 3.5) + T(cxj + 8, cyj + 4, 'C', { fs: 13, c: 'terr', w: 600 });
      s += L(ox - 160, oy - 160, ox + 160, oy + 160, 'mut', 1, '6 4') + A(ox, oy, cxj, cyj, 'terr', 1.6) + V(ox + 4, oy + 24, 'e', { c: 'terr', fs: 14 });
      s += A(cxj, cyj, cxj - 90 * Math.cos(0.5), cyj - 90 * Math.sin(0.5), 'ink', 1.4) + V(cxj - 62, cyj - 44, 'R', { fs: 14 });
      s += PA('M ' + (cxj + 34) + ' ' + (cyj + 34) + ' A 48 48 0 0 1 ' + (cxj - 34) + ' ' + (cyj + 34), 'ink', 1.6) + V(cxj, cyj + 70, 'Ω', { a: 'middle' });
      s += N(ox, 24, 'bush (radius R_s)', { a: 'middle' }) + N(ox + 108, oy - 96, 'lubricant', { c: 'tf' }) + N(ox, cyj - 30, 'journal', { a: 'middle' });
      s += V(400, 100, 'c = R_s − R', { fs: 14 }) + V(400, 128, 'ε = e/c', { fs: 14 }) + N(400, 160, 'length of bearing L') + N(400, 178, 'thinnest film opposite C');
      return W(560, 330, s);
    };

    D.tf_annulus = () => {
      let s = wall(30, 40, 380, 'up') + wall(30, 220, 380, 'down') + R(30, 110, 350, 40, 'url(#tf-hatch)', 'ink', 1.6) + R(30, 40, 350, 70, 'tint') + R(30, 150, 350, 70, 'tint') + cl(30, 130, 380);
      s += cv(200, 70, 70, 16) + A2(186, 70, 186, 86, 'terr') + V(160, 82, 'δr', { c: 'terr', fs: 13 }) + A(150, 64, 196, 64, 'terr', 1.4) + A(316, 64, 274, 64, 'terr', 1.4) + V(140, 60, 'p', { c: 'terr', fs: 13, a: 'end' }) + V(320, 60, 'p + (dp/dx)δx', { c: 'terr', fs: 11.5 });
      s += A(235, 106, 235, 82, 'gold', 1.4) + V(240, 100, 'r (from axis)', { c: 'gold', fs: 12 }) + A(40, 182, 110, 182, 'tf', 2) + V(44, 200, 'Q', { c: 'tf' });
      const cx = 510, cy = 130; s += ci(cx, cy, 96, 'mut', 8) + '<circle cx="' + cx + '" cy="' + cy + '" r="92" fill="' + tint + '" stroke="' + ink + '" stroke-width="1.8"></circle><circle cx="' + cx + '" cy="' + cy + '" r="36" fill="url(#tf-hatch)" stroke="' + ink + '" stroke-width="1.8"></circle>';
      s += ci(cx, cy, 60, 'gold', 1.3, '5 4') + ci(cx, cy, 70, 'gold', 1.3, '5 4') + A(cx, cy, cx + 36, cy, 'ink', 1.4) + V(cx + 8, cy + 18, 'r₁', { fs: 13 }) + A(cx, cy, cx - 65, cy - 65, 'ink', 1.4) + V(cx - 74, cy - 70, 'r₂', { fs: 13 });
      s += N(cx, 250, 'end view: ring control volume r → r + δr', { a: 'middle' });
      return W(640, 262, s);
    };

    D.tf_dashpot = () => {
      let s = wall(30, 60, 520, 'up') + wall(30, 200, 520, 'down') + wallV(520, 50, 210, 'right') + R(30, 60, 490, 140, 'tint');
      s += R(300, 80, 140, 100, 'mut', 'ink', 1.6) + R(30, 118, 270, 24, 'mut', 'ink', 1.4);
      s += A(130, 104, 210, 104, 'ink', 2.2) + V(216, 108, 'U_p', { fs: 14 });
      s += A(420, 70, 330, 70, 'tf', 1.8) + A(420, 190, 330, 190, 'tf', 1.8) + N(374, 52, 'fluid escapes back through the gap', { a: 'middle', c: 'tf' });
      s += A2(458, 80, 458, 180, 'gold') + V(464, 150, 'D', { c: 'gold' }) + A2(300, 226, 440, 226, 'gold') + V(370, 244, 'L', { c: 'gold', a: 'middle' }) + A2(452, 60, 452, 80, 'terr') + V(458, 76, 'h', { c: 'terr', fs: 13 });
      s += V(514, 104, 'p + Δp', { c: 'terr', fs: 12.5, a: 'end' }) + V(270, 96, 'p', { c: 'terr', fs: 13 }) + N(30, 244, 'square bore and piston; closed end on the right');
      return W(580, 254, s);
    };

    D.tf_mercury_belt = () => {
      const g = (inner) => '<g transform="rotate(14 300 150)">' + inner + '</g>';
      let inner = wall(60, 200, 540, 'down') + R(60, 170, 480, 30, mut) + '<rect x="60" y="170" width="480" height="30" fill="' + mut + '" fill-opacity="0.55"></rect>' + L(60, 166, 540, 166, 'ink', 4) + ci(60, 154, 12, 'ink', 1.6) + ci(540, 154, 12, 'ink', 1.6) + L(60, 142, 540, 142, 'ink', 1.6) + A(250, 158, 350, 158, 'terr', 2) + A2(560, 166, 560, 200, 'gold') + A2(60, 222, 540, 222, 'mut');
      let s = g(inner) + T(330, 134, 'U₀ (belt)', { serif: true, fs: 14, c: 'terr' }) + T(566, 250, 'h', { serif: true, fs: 14, c: 'gold' }) + T(276, 240, 'L', { serif: true, fs: 14, c: 'mtx' });
      s += L(40, 104, 40, 220, 'mut', 1, '4 3') + A2(24, 104, 24, 220, 'gold') + V(10, 166, 'z', { c: 'gold' }) + N(380, 296, 'mercury between a fixed lower wall and a moving belt', { a: 'middle' });
      return W(660, 306, s);
    };

    // ===================== Topic 6 · Turbulent flows & boundary layers =====================
    D.tf_reynolds_decomp = () => {
      const sig = (t) => 12 * (Math.sin(1.7 * t) + 0.7 * Math.sin(4.3 * t + 1) + 0.5 * Math.sin(9.1 * t + 2) + 0.35 * Math.sin(17.3 * t + 0.4) + 0.25 * Math.sin(31 * t));
      const box = (x0, inner, lab, form) => R(x0, 20, 180, 96, 'paper', 'ink', 1.2) + inner + V(x0 + 90, 140, lab, { a: 'middle', fs: 18 }) + N(x0 + 90, 164, form, { a: 'middle' }) + T(x0 + 176, 112, 't', { fs: 11, c: 'mtx', serif: true, a: 'end' });
      let s = box(20, poly(fn((t) => [20 + t * 18, 68 - sig(t)], 0, 10, 300), 'ink', 1.1) + L(20, 68, 200, 68, 'terr', 1.2, '4 3'), 'u', '(1/T)∫u dt = ū');
      s += T(222, 74, '=', { fs: 22, a: 'middle' }) + box(245, L(245, 68, 425, 68, 'terr', 2), 'ū', '(1/T)∫ū dt = ū') + T(447, 74, '+', { fs: 22, a: 'middle' });
      s += box(470, poly(fn((t) => [470 + t * 18, 68 - sig(t)], 0, 10, 300), 'tf', 1.1) + L(470, 68, 650, 68, 'mut', 1, '4 3'), 'u′', '(1/T)∫u′ dt = 0');
      return W(670, 176, s);
    };

    const wallPlot = (smoothRough) => {
      const X = (yp) => 70 + lg(yp) / 4 * 470, Y = (up) => 262 - up / 30 * 220;
      let s = axes(70, 262, 470, 220, 'yu*/ν', 'ū/u*');
      [0, 1, 2, 3, 4].forEach((k) => { s += tick(X(Math.pow(10, k)), 262, '10' + sup(k)); }); [0, 10, 20, 30].forEach((v) => { s += tick(70, Y(v), String(v), true); });
      const comp = (yp) => 2.5 * Math.log(1 + 0.4 * yp) + 7.8 * (1 - Math.exp(-yp / 11) - (yp / 11) * Math.exp(-yp / 3)) + (yp > 400 ? 1.6 * Math.pow((lg(yp) - lg(400)) / (4 - lg(400)), 2) * 2 : 0);
      s += poly(fn((t) => [X(Math.pow(10, t)), Y(comp(Math.pow(10, t)))], 0, 4, 120), 'ink', 2.4);
      if (smoothRough) {
        s += poly(fn((t) => { const yp = Math.pow(10, t); return [X(yp), Y(Math.max(0, comp(yp) - 7 * (1 - Math.exp(-yp / 25))))]; }, 0.3, 4, 120), 'terr', 2.2, '7 4');
        s += V(X(8), Y(17), 'smooth', { fs: 14 }) + V(X(500), Y(13), 'rough', { fs: 14, c: 'terr' }) + N(X(1.3), Y(28), 'roughness lowers the log law');
        return s;
      }
      s += poly(fn((t) => [X(Math.pow(10, t)), Y(Math.pow(10, t))], 0, lg(16), 30), 'tf', 1.6, '6 4');
      s += poly(fn((t) => [X(Math.pow(10, t)), Y(2.5 * Math.log(Math.pow(10, t)) + 5.5)], 0.85, 4, 40), 'terr', 1.6, '6 4');
      [5, 30, 1000].forEach((v) => { s += L(X(v), 42, X(v), 262, 'mut', 1, '3 3'); });
      s += N((70 + X(5)) / 2, 36, 'viscous', { a: 'middle' }) + N((70 + X(5)) / 2, 48, 'sublayer', { a: 'middle' }) + N((X(5) + X(30)) / 2, 36, 'buffer', { a: 'middle' }) + N((X(30) + X(1000)) / 2, 36, 'inner (log-law) region', { a: 'middle' }) + N((X(1000) + 540) / 2, 36, 'outer', { a: 'middle' });
      s += V(X(1.4), Y(9.5), 'ū/u* = yu*/ν', { c: 'tf', fs: 13 }) + V(X(60), Y(23), 'ū/u* = 2.5 ln(yu*/ν) + 5.5', { c: 'terr', fs: 13 });
      return s;
    };
    D.tf_wall_law = () => W(600, 292, wallPlot(false));
    D.tf_smooth_rough = () => W(600, 292, wallPlot(true));

    D.tf_roughness_regimes = () => {
      const panel = (x0, hb, lab, rng, eddies) => { let p = R(x0, 150, 200, 12, 'url(#tf-hatch)') + R(x0, 126, 200, 24, 'tint') + L(x0, 126, x0 + 200, 126, 'tf', 1.1, '4 3');
        for (let x = x0 + 6; x < x0 + 196; x += 22) p += pgon([[x, 150], [x + 9, 150 - hb], [x + 18, 150]], 'mut', 'ink', 1);
        p += L(x0, 150, x0 + 200, 150, 'ink', 1.8);
        if (eddies) [[x0 + 40, 60], [x0 + 110, 50], [x0 + 170, 66]].forEach((c) => { p += PA('M ' + (c[0] - 12) + ' ' + c[1] + ' A 12 12 0 1 1 ' + (c[0] + 4) + ' ' + (c[1] + 11), 'tf', 1.3); });
        return p + T(x0 + 100, 188, lab, { a: 'middle', fs: 12, w: 600 }) + V(x0 + 100, 208, rng, { a: 'middle', fs: 13, c: 'mtx' }); };
      let s = panel(20, 10, 'hydraulically smooth', 'eu*/ν < 5', false) + panel(240, 34, 'transitionally rough', '5 < eu*/ν < 70', false) + panel(460, 72, 'fully rough', 'eu*/ν > 70', true);
      s += N(120, 120, 'viscous sublayer', { a: 'middle', c: 'tf' }) + N(560, 30, 'form drag, sublayer destroyed', { a: 'middle', c: 'tf' });
      return W(680, 220, s);
    };

    // ===================== Topic 8 · Minor losses & networks =====================
    D.tf_separation = () => {
      const yw = (x) => x < 220 ? 160 : 160 + Math.pow((x - 220) / 340, 2) * 110;
      let s = poly(fn((x) => [x, yw(x)], 30, 580, 80), 'ink', 2.4) + '<path d="M 30 ' + yw(30) + ' ' + fn((x) => 'L ' + x.toFixed(1) + ' ' + (yw(x) + 10).toFixed(1), 30, 580, 60).join(' ') + ' L 580 ' + (yw(580) + 30) + ' L 30 190 Z" fill="url(#tf-hatch)"></path>';
      const pr = (x0, f) => { let p = ''; for (let h = 5; h <= 86; h += 9) { const u = f(h), y = yw(x0) - h; if (Math.abs(u) > 3) p += A(x0, y, x0 + u, y, 'tf', 1.4); } p += poly(fn((h) => [x0 + f(h), yw(x0) - h], 0, 86, 40), 'tf', 1.7) + L(x0, yw(x0), x0, yw(x0) - 90, 'mut', 1); return p; };
      s += pr(70, (h) => 80 * Math.min(1, (h / 34) * (2 - Math.min(1, h / 34)))) + pr(210, (h) => 80 * Math.min(1, (h / 48) * (2 - Math.min(1, h / 48))));
      s += pr(350, (h) => 80 * Math.pow(Math.sin(Math.PI / 2 * Math.min(1, h / 64)), 2)) + pr(480, (h) => 80 * Math.pow(Math.min(1, h / 74), 2) * (3 - 2 * Math.min(1, h / 74)) - 26 * Math.exp(-h / 14));
      s += poly(fn((x) => [x, yw(330) + (x - 330) * 0.25 - 4], 330, 590, 10), 'terr', 1.3, '6 4') + dot(330, yw(330), 'terr', 4) + N(330, yw(330) + 30, 'separation point', { a: 'middle', c: 'terr' });
      s += PA('M 470 ' + (yw(470) - 12) + ' C 520 ' + (yw(470) - 30) + ' 540 ' + (yw(540) - 10) + ' 500 ' + (yw(500) - 4), 'terr', 1.4) + N(560, yw(560) - 40, 'reversed flow', { a: 'middle', c: 'terr' });
      s += N(70, 50, 'attached', { a: 'middle' }) + N(340, 50, 'du/dy = 0 at wall', { a: 'middle' }) + N(500, 70, 'wake / recirculation', { a: 'middle' }) + N(260, 280, 'adverse pressure gradient: pressure rises in the flow direction', { a: 'middle', c: 'mtx' });
      return W(620, 292, s);
    };

    D.tf_expansion = () => {
      let s = wall(30, 100, 250, 'up') + wall(30, 160, 250, 'down') + wallV(250, 50, 100, 'left') + wallV(250, 160, 210, 'left') + wall(250, 50, 600, 'up') + wall(250, 210, 600, 'down');
      s += R(30, 100, 220, 60, 'tint') + R(250, 50, 350, 160, 'tint') + cl(30, 130, 600);
      s += P('M 250 100 C 320 96, 400 70, 470 50', 'tf', 1.3, null, '5 4') + P('M 250 160 C 320 164, 400 190, 470 210', 'tf', 1.3, null, '5 4');
      s += PA('M 330 76 A 34 18 0 1 1 296 70', 'terr', 1.5) + PA('M 330 184 A 34 18 0 1 0 296 190', 'terr', 1.5) + N(318, 40, 'separated region (trapped vortices)', { a: 'middle', c: 'terr' });
      s += A(50, 130, 140, 130, 'tf', 2.2) + V(70, 122, 'u₁, A₁', { c: 'tf', fs: 14 }) + A(500, 130, 580, 130, 'tf', 2.2) + V(500, 122, 'u₂, A₂', { c: 'tf', fs: 14 });
      s += V(320, 244, 'Δp = ½ρ(u₁ − u₂)²,  k = (1 − A₁/A₂)² on u₁', { a: 'middle', fs: 13.5 });
      return W(620, 256, s);
    };

    D.tf_contraction = () => {
      let s = wall(30, 50, 300, 'up') + wall(30, 210, 300, 'down') + wallV(300, 50, 100, 'right') + wallV(300, 160, 210, 'right') + wall(300, 100, 600, 'up') + wall(300, 160, 600, 'down');
      s += R(30, 50, 270, 160, 'tint') + R(300, 100, 300, 60, 'tint') + cl(30, 130, 600);
      s += P('M 150 56 C 260 60, 300 106, 345 113 C 380 117, 400 104, 440 100', 'tf', 1.3, null, '5 4') + P('M 150 204 C 260 200, 300 154, 345 147 C 380 143, 400 156, 440 160', 'tf', 1.3, null, '5 4');
      s += PA('M 372 110 A 20 7 0 1 1 340 104', 'terr', 1.4) + PA('M 372 150 A 20 7 0 1 0 340 156', 'terr', 1.4);
      s += A2(345, 114, 345, 146, 'gold') + L(345, 146, 345, 238, 'gold', 1, '3 3') + V(345, 254, 'A_c  (vena contracta)', { c: 'gold', a: 'middle', fs: 13 });
      s += A(50, 130, 140, 130, 'tf', 2.2) + V(60, 122, 'u₁, A₁', { c: 'tf', fs: 14 }) + A(500, 130, 580, 130, 'tf', 2.2) + V(500, 122, 'u₂, A₂', { c: 'tf', fs: 14 });
      s += V(470, 40, 'k = (A₂/A_c − 1)² on u₂', { a: 'middle', fs: 13.5 });
      return W(620, 266, s);
    };

    const pipeRun = (pts2, d) => { let s = ''; pts2.forEach((seg) => { s += P('M ' + seg.map((p) => p.join(' ')).join(' L '), 'ink', d + 4); }); pts2.forEach((seg) => { s += P('M ' + seg.map((p) => p.join(' ')).join(' L '), 'tint', d); }); return s; };
    const num = (x, y, n) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + paper + '" stroke="' + ink + '" stroke-width="1.4"></circle>' + T(x, y + 4, String(n), { a: 'middle', fs: 12, w: 600 });

    D.tf_series = () => {
      let s = wall(40, 60, 230, 'up') + wall(40, 160, 230, 'down') + wallV(230, 50, 82, 'left') + wallV(230, 138, 170, 'left') + wall(230, 82, 420, 'up') + wall(230, 138, 420, 'down') + wallV(420, 72, 96, 'left') + wallV(420, 124, 148, 'left') + wall(420, 96, 600, 'up') + wall(420, 124, 600, 'down');
      s += R(40, 60, 190, 100, 'tint') + R(230, 82, 190, 56, 'tint') + R(420, 96, 180, 28, 'tint') + cl(40, 110, 600) + num(135, 110, 1) + num(325, 110, 2) + num(510, 110, 3) + A(48, 90, 100, 90, 'tf', 2) + V(52, 82, 'Q', { c: 'tf' });
      s += V(160, 206, 'Q = Q₁ = Q₂ = Q₃', { a: 'middle', fs: 14 }) + V(470, 206, 'Δp_tot = Δp₁ + Δp₂ + Δp₃', { a: 'middle', fs: 14 });
      return W(640, 222, s);
    };

    D.tf_parallel = () => {
      const top = [[130, 130], [170, 130], [230, 60], [410, 60], [470, 130], [510, 130]], bot = [[130, 130], [170, 130], [230, 200], [410, 200], [470, 130], [510, 130]], mid = [[30, 130], [610, 130]];
      let s = pipeRun([mid, top, bot], 20) + num(320, 60, 1) + num(320, 130, 2) + num(320, 200, 3) + A(36, 130, 100, 130, 'tf', 2) + V(40, 116, 'Q', { c: 'tf' });
      s += V(160, 250, 'Q = Q₁ + Q₂ + Q₃', { a: 'middle', fs: 14 }) + V(470, 250, 'Δp_tot = Δp₁ = Δp₂ = Δp₃', { a: 'middle', fs: 14 });
      return W(640, 264, s);
    };

    D.tf_chem_feed = () => {
      let s = pipeRun([[[60, 70], [470, 70], [470, 150]]], 16) + pipeRun([[[300, 70], [300, 150]]], 11);
      s += A(20, 70, 52, 70, 'tf', 2) + V(14, 58, 'ṁ_i', { c: 'tf', fs: 14 }) + A(470, 160, 470, 196, 'tf', 2) + V(480, 196, 'ṁ_i/2', { c: 'tf', fs: 13 }) + A(300, 160, 300, 196, 'tf', 2) + V(310, 196, 'ṁ_i/2', { c: 'tf', fs: 13 });
      s += A2(60, 38, 470, 38, 'mut') + V(265, 32, '10 m', { a: 'middle', c: 'mtx', fs: 13 }) + A2(500, 70, 500, 150, 'mut') + V(508, 114, '1 m', { c: 'mtx', fs: 13 });
      s += N(150, 100, 'original pipe, D = 50 mm', { a: 'middle' }) + N(290, 122, 'new spur, D = 37.5 mm, length L', { a: 'end', c: 'terr' }) + N(320, 226, 'each leg: one bend ξ = 1, exit ξ = 2', { a: 'middle' });
      return W(640, 236, s);
    };

    D.tf_draining_tank = () => {
      let s = P('M 60 30 L 60 200 L 200 200 L 200 320 M 220 320 L 220 200 L 360 200 L 360 30', 'ink', 2.2) + R(62, 70, 296, 128, 'tint') + R(201, 200, 18, 120, 'tint') + L(62, 70, 358, 70, 'tf', 1.4);
      s += A(210, 322, 210, 352, 'tf', 2.2) + V(220, 350, 'Q', { c: 'tf' });
      s += A2(36, 70, 36, 200, 'gold') + V(24, 140, 'L₂', { c: 'gold', a: 'end' }) + A2(36, 200, 36, 320, 'gold') + V(24, 264, 'L₁', { c: 'gold', a: 'end' }) + A(260, 260, 224, 260, 'ink', 1.4) + A(160, 260, 196, 260, 'ink', 1.4) + V(266, 265, 'd', { fs: 14 });
      s += N(380, 130, 'ρ = 930 kg/m³') + N(380, 148, 'L₁ = L₂ = 0.30 m') + N(380, 166, 'd = 1.22 mm (a, b)') + N(380, 184, 'd = 5 mm (c–e)');
      return W(520, 360, s);
    };

    const valve = (x, y, vert, c) => vert ? pgon([[x - 9, y - 10], [x + 9, y - 10], [x, y], [x - 9, y + 10], [x + 9, y + 10], [x, y]], c || 'paper', 'ink', 1.4) : pgon([[x - 10, y - 9], [x - 10, y + 9], [x, y], [x + 10, y - 9], [x + 10, y + 9], [x, y]], c || 'paper', 'ink', 1.4);
    D.tf_pump_tanks = () => {
      let s = P('M 30 210 L 30 290 L 150 290 L 150 210', 'ink', 2) + R(32, 236, 116, 52, 'tint') + L(32, 236, 148, 236, 'tf', 1.4) + P('M 450 40 L 450 120 L 570 120 L 570 40', 'ink', 2) + R(452, 66, 116, 52, 'tint') + L(452, 66, 568, 66, 'tf', 1.4);
      s += pipeRun([[[150, 274], [330, 274], [330, 96], [450, 96]]], 10) + valve(230, 274, false) + ci(330, 230, 16, 'ink', 1.6, null, 'paper') + pgon([[322, 238], [338, 230], [322, 222]], 'ink') + valve(330, 160, true);
      s += N(230, 300, 'globe valve ξ = 10', { a: 'middle' }) + N(352, 234, 'pump, η = 0.75') + N(352, 164, 'gate valve ½ open ξ = 2.1') + N(340, 84, '90° elbow ξ = 0.3');
      s += L(150, 236, 610, 236, 'mut', 1, '3 3') + L(568, 66, 610, 66, 'mut', 1, '3 3') + A2(600, 66, 600, 236, 'gold') + V(586, 156, '30 m', { c: 'gold', fs: 13, a: 'end' });
      s += A(170, 262, 210, 262, 'tf', 1.6) + N(150, 320, '120 m of 5 cm structural steel, Q = 360 L/min', { a: 'start' });
      return W(640, 330, s);
    };

    D.tf_hot_water = () => {
      const thick = (d) => P(d, 'ink', 5), thin = (d) => P(d, 'ink', 2.4);
      let s = R(30, 60, 80, 60, 'tint', 'ink', 1.8) + T(70, 86, 'hot', { a: 'middle', fs: 11 }) + T(70, 100, 'water tank', { a: 'middle', fs: 11 }) + N(70, 136, '+50 kPa', { a: 'middle', c: 'terr' });
      s += thick('M 110 90 L 440 90 L 440 210') + thin('M 360 90 L 360 210') + thin('M 240 90 L 240 40 L 560 40 L 560 210');
      [['A', 130, 82], ['B', 240, 106], ['C', 360, 106]].forEach((p) => { s += T(p[1], p[2], p[0], { fs: 13, w: 600, a: 'middle' }); });
      s += dot(240, 90, 'ink', 4) + dot(360, 90, 'ink', 4);
      [['D', 440, 'bath'], ['E', 360, 'basin'], ['F', 560, 'sink']].forEach((p) => { s += valve(p[1], 214, true, 'gold') + T(p[1], 246, p[0], { a: 'middle', fs: 13, w: 600 }) + N(p[1], 262, p[2], { a: 'middle' }); });
      s += L(470, 140, 500, 140, 'ink', 5) + N(508, 144, '22 mm') + L(470, 160, 500, 160, 'ink', 2.4) + N(508, 164, '15 mm');
      s += N(300, 290, 'A–B 12 m · B–C 8 m · C–D 6 m (22 mm);  B–F 15 m · C–E 7 m (15 mm)', { a: 'middle' });
      return W(620, 300, s);
    };
