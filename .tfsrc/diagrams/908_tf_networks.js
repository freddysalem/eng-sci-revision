    {
      // ===== Topic 8 (tf_networks) — professor r1 diagrams =====
      const vlv8 = (x, y, c) => pgon([[x - 9, y - 10], [x + 9, y - 10], [x, y], [x - 9, y + 10], [x + 9, y + 10], [x, y]], c || 'paper', 'ink', 1.4);

      // Control volume for the Borda–Carnot derivation (new key; tf_expansion is kept for the flow picture)
      D.tf_expansion_cv = () => {
        let s = wall(30, 100, 200, 'up') + wall(30, 160, 200, 'down') + wallV(200, 50, 100, 'left') + wallV(200, 160, 210, 'left') + wall(200, 50, 600, 'up') + wall(200, 210, 600, 'down');
        s += R(30, 100, 170, 60, 'tint') + R(200, 50, 400, 160, 'tint') + cl(30, 130, 600);
        s += P('M 200 100 C 270 96, 350 70, 420 52', 'tf', 1.2, null, '5 4') + P('M 200 160 C 270 164, 350 190, 420 208', 'tf', 1.2, null, '5 4');
        s += cv(204, 54, 336, 152) + N(372, 232, 'control volume (gold): step face → section 2', { a: 'middle', c: 'gold' });
        [70, 92, 114, 146, 168, 190].forEach((y) => { s += A(210, y, 238, y, 'terr', 1.6); });
        s += V(246, 80, 'p₁A₂', { c: 'terr', fs: 14 });
        [70, 100, 160, 190].forEach((y) => { s += A(578, y, 548, y, 'terr', 1.6); });
        s += V(500, 80, 'p₂A₂', { c: 'terr', fs: 14 });
        s += A(50, 130, 130, 130, 'tf', 2.2) + V(56, 122, 'u₁, A₁', { c: 'tf', fs: 14 }) + A(452, 130, 532, 130, 'tf', 2.2) + V(452, 122, 'u₂, A₂', { c: 'tf', fs: 14 });
        s += N(14, 28, 'corner fluid is almost stagnant, so p₁ acts over the whole face A₂', { c: 'terr' }) + N(14, 252, 'short CV: wall shear neglected; flow uniform at both faces', {});
        s += L(540, 54, 540, 206, 'gold', 1, '3 3') + N(540, 44, 'section 2', { a: 'middle', c: 'gold' }) + N(204, 44, 'section 1', { a: 'middle', c: 'gold' });
        return W(620, 262, s);
      };

      // Chimney with the minor losses of Ex 8 Q4 (new key; tf_chimney is shared with topic 4)
      D.tf_chimney_losses = () => {
        const gy = 350, m = 22, top = gy - 10 * m; // 10 m chimney, top at y = 130
        let s = L(20, gy, 600, gy, 'ink', 2.2) + R(20, gy, 580, 9, 'url(#tf-hatch)');
        // faded wind profile (only used to get u_w = 5 m/s at 10 m)
        for (let h = 1; h <= 10; h += 1.5) { const y = gy - h * m; s += A(40, y, 40 + h * 9, y, 'mut', 1.1); }
        s += L(40, gy, 40 + 90, top, 'mut', 1, '4 3') + N(30, top - 34, 'wind profile 0 → 10 m/s at 20 m', { c: 'mtx' }) + N(30, top - 20, '⇒ u_w = 5 m/s at the 10 m top', { c: 'mtx' });
        // house
        s += pgon([[180, gy], [180, 250], [300, 190], [420, 250], [420, gy]], 'paper', 'ink', 1.6);
        // flue + fireplace entry
        s += R(330, top, 20, gy - 10 - top, 'tint', 'ink', 1.6) + R(290, gy - 30, 40, 20, 'tint') + L(290, gy - 30, 330, gy - 30, 'ink', 1.6) + L(290, gy - 10, 350, gy - 10, 'ink', 1.6);
        s += P('M 300 344 Q 306 334 302 326', 'terr', 1.6) + P('M 312 345 Q 317 336 314 328', 'gold', 1.6);
        s += A(286, gy - 20, 316, gy - 20, 'tf', 1.6) + A(340, gy - 40, 340, top + 30, 'tf', 2) + PA('M 340 ' + (top + 6) + ' Q 342 ' + (top - 10) + ' 368 ' + (top - 14), 'tf', 1.6);
        s += N(196, 290, 'room: still air p₀', {}) + N(360, 178, 'draught u', { c: 'tf' });
        // wind at top
        s += A(372, top - 30, 432, top - 30, 'tf', 1.8) + V(440, top - 25, 'u_w = 5 m/s, p', { c: 'tf', fs: 13 });
        // loss labels
        s += N(326, top - 6, 'exit ξ = 1.0 + turn ξ = 0.5', { a: 'end', c: 'terr' }) + N(322, top + 16, 'D = 0.1 m', { a: 'end' });
        s += N(300, gy + 26, 'entrance ξ = 0.5 + turn ξ = 0.5 at the fireplace', { a: 'middle', c: 'terr' });
        // height
        s += A2(470, gy, 470, top, 'gold') + V(478, (gy + top) / 2, 'L = 10 m', { c: 'gold', fs: 13 });
        s += V(20, 72, 'Δp = p₀ − p = ½ρu_w² = 15 Pa  (ρ_air = 1.2 kg/m³)', { fs: 13.5 });
        return W(620, 388, s);
      };

      // Hot-water network redrawn to the problem sheet's Figure 1 (only topic 8 uses this key)
      D.tf_hot_water = () => {
        const thick = (d) => P(d, 'ink', 5), thin = (d) => P(d, 'ink', 2.2);
        const bend = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="5" fill="' + terr + '" fill-opacity="0.85"></circle>';
        let s = R(40, 50, 100, 80, 'tint', 'ink', 1.8) + T(90, 82, 'hot water', { a: 'middle', fs: 11 }) + T(90, 96, 'tank', { a: 'middle', fs: 11 }) + N(90, 148, '+50 kPa gauge', { a: 'middle', c: 'terr' });
        s += thick('M 140 110 L 350 110 L 350 230 L 230 230 L 230 330');           // A → B → C → D (22 mm)
        s += thin('M 290 230 L 290 262 L 380 262 L 380 330');                        // C → E (15 mm)
        s += thin('M 350 170 L 570 170 L 570 240 L 470 240 L 470 330');              // B → F (15 mm)
        s += dot(350, 170, 'ink', 4.5) + dot(290, 230, 'ink', 4.5);
        s += T(150, 102, 'A', { fs: 13, w: 600 }) + T(338, 166, 'B', { fs: 13, w: 600, a: 'end' }) + T(290, 220, 'C', { fs: 13, w: 600, a: 'middle' });
        // counted bends (ξ = 1 each): AB 1, BC 1, CD 1, CE 3 (incl. tee branch), BF 4 (incl. tee branch)
        [[350, 110], [350, 230], [230, 230], [290, 238], [290, 262], [380, 262], [358, 170], [570, 170], [570, 240], [470, 240]].forEach((p) => { s += bend(p[0], p[1]); });
        [['D', 230, 'bath'], ['E', 380, 'basin'], ['F', 470, 'sink']].forEach((p) => { s += vlv8(p[1], 334, 'gold') + T(p[1], 366, p[0], { a: 'middle', fs: 13, w: 600 }) + N(p[1], 382, p[2], { a: 'middle' }); });
        s += L(410, 60, 440, 60, 'ink', 5) + N(448, 64, '22 mm') + L(410, 80, 440, 80, 'ink', 2.2) + N(448, 84, '15 mm');
        s += '<circle cx="425" cy="100" r="5" fill="' + terr + '" fill-opacity="0.85"></circle>' + N(436, 104, '90° bend or tee branch, ξ = 1', { c: 'terr' });
        s += pgon([[416, 112], [434, 112], [425, 122], [416, 132], [434, 132], [425, 122]], 'gold', 'ink', 1.2) + N(440, 126, 'tap, ξ = 2');
        s += N(320, 410, 'A–B 12 m · B–C 8 m · C–D 6 m (22 mm);  B–F 15 m · C–E 7 m (15 mm)', { a: 'middle' });
        s += N(320, 426, 'ξ per section: AB 1 · BC 1 · CD 1 + tap = 3 · CE 3 + tap = 5 · BF 4 + tap = 6', { a: 'middle', c: 'terr' });
        return W(640, 436, s);
      };

      // r2: tf_separation (only topic 8 uses it) — 'reversed flow' label moved clear of the dashed dividing streamline
      D.tf_separation = () => {
        const yw = (x) => x < 220 ? 160 : 160 + Math.pow((x - 220) / 340, 2) * 110;
        let s = poly(fn((x) => [x, yw(x)], 30, 580, 80), 'ink', 2.4) + '<path d="M 30 ' + yw(30) + ' ' + fn((x) => 'L ' + x.toFixed(1) + ' ' + (yw(x) + 10).toFixed(1), 30, 580, 60).join(' ') + ' L 580 ' + (yw(580) + 30) + ' L 30 190 Z" fill="url(#tf-hatch)"></path>';
        const pr = (x0, f) => { let p = ''; for (let h = 5; h <= 86; h += 9) { const u = f(h), y = yw(x0) - h; if (Math.abs(u) > 3) p += A(x0, y, x0 + u, y, 'tf', 1.4); } p += poly(fn((h) => [x0 + f(h), yw(x0) - h], 0, 86, 40), 'tf', 1.7) + L(x0, yw(x0), x0, yw(x0) - 90, 'mut', 1); return p; };
        s += pr(70, (h) => 80 * Math.min(1, (h / 34) * (2 - Math.min(1, h / 34)))) + pr(210, (h) => 80 * Math.min(1, (h / 48) * (2 - Math.min(1, h / 48))));
        s += pr(350, (h) => 80 * Math.pow(Math.sin(Math.PI / 2 * Math.min(1, h / 64)), 2)) + pr(480, (h) => 80 * Math.pow(Math.min(1, h / 74), 2) * (3 - 2 * Math.min(1, h / 74)) - 26 * Math.exp(-h / 14));
        s += poly(fn((x) => [x, yw(330) + (x - 330) * 0.25 - 4], 330, 590, 10), 'terr', 1.3, '6 4') + dot(330, yw(330), 'terr', 4) + N(330, yw(330) + 30, 'separation point', { a: 'middle', c: 'terr' });
        s += PA('M 470 ' + (yw(470) - 12) + ' C 520 ' + (yw(470) - 30) + ' 540 ' + (yw(540) - 10) + ' 500 ' + (yw(500) - 4), 'terr', 1.4) + N(600, 196, 'reversed flow', { a: 'end', c: 'terr' }) + L(556, 201, 538, 224, 'terr', 1, '2 2');
        s += N(70, 50, 'attached', { a: 'middle' }) + N(340, 50, 'du/dy = 0 at wall', { a: 'middle' }) + N(500, 70, 'wake / recirculation', { a: 'middle' }) + N(260, 280, 'adverse pressure gradient: pressure rises in the flow direction', { a: 'middle', c: 'mtx' });
        return W(620, 292, s);
      };

      // r2: tf_chem_feed (only topic 8 uses it) — spur label moved clear of the spur pipe
      D.tf_chem_feed = () => {
        let s = pipeRun([[[60, 70], [470, 70], [470, 150]]], 16) + pipeRun([[[300, 70], [300, 150]]], 11);
        s += A(20, 70, 52, 70, 'tf', 2) + V(14, 58, 'ṁ_i', { c: 'tf', fs: 14 }) + A(470, 160, 470, 196, 'tf', 2) + V(480, 196, 'ṁ_i/2', { c: 'tf', fs: 13 }) + A(300, 160, 300, 196, 'tf', 2) + V(310, 196, 'ṁ_i/2', { c: 'tf', fs: 13 });
        s += A2(60, 38, 470, 38, 'mut') + V(265, 32, '10 m', { a: 'middle', c: 'mtx', fs: 13 }) + A2(500, 70, 500, 150, 'mut') + V(508, 114, '1 m', { c: 'mtx', fs: 13 });
        s += N(150, 100, 'original pipe, D = 50 mm', { a: 'middle' }) + N(278, 124, 'new spur: D = 37.5 mm,', { a: 'end', c: 'terr' }) + N(278, 139, 'length L', { a: 'end', c: 'terr' }) + N(320, 226, 'each leg: one bend ξ = 1, exit ξ = 2 (lecture)', { a: 'middle' });
        return W(640, 236, s);
      };

      // r3: Q3 pump figure override (only topic 8 uses tf_pump_tanks) — elbow label moved left of the elbow, in ink, with the table value
      D.tf_pump_tanks = () => {
        const run8 = (pts2, d) => { let s = ''; pts2.forEach((seg) => { s += P('M ' + seg.map((p) => p.join(' ')).join(' L '), 'ink', d + 4); }); pts2.forEach((seg) => { s += P('M ' + seg.map((p) => p.join(' ')).join(' L '), 'tint', d); }); return s; };
        const hv8 = (x, y) => pgon([[x - 10, y - 9], [x - 10, y + 9], [x, y], [x + 10, y - 9], [x + 10, y + 9], [x, y]], 'paper', 'ink', 1.4);
        let s = P('M 30 210 L 30 290 L 150 290 L 150 210', 'ink', 2) + R(32, 236, 116, 52, 'tint') + L(32, 236, 148, 236, 'tf', 1.4) + P('M 450 40 L 450 120 L 570 120 L 570 40', 'ink', 2) + R(452, 66, 116, 52, 'tint') + L(452, 66, 568, 66, 'tf', 1.4);
        s += run8([[[150, 274], [330, 274], [330, 96], [450, 96]]], 10) + hv8(230, 274) + ci(330, 230, 16, 'ink', 1.6, null, 'paper') + pgon([[322, 238], [338, 230], [322, 222]], 'ink') + vlv8(330, 160);
        s += N(230, 300, 'globe valve ξ = 10', { a: 'middle' }) + N(352, 234, 'pump, η = 0.75') + N(352, 164, 'gate valve ½ open ξ = 2.1');
        s += T(314, 92, '90° elbow: ξ = 0.3 (sheet)', { a: 'end', fs: 12 }) + T(314, 108, 'table, screwed: ξ = 1.5', { a: 'end', fs: 11.5, c: 'terr' });
        s += L(150, 236, 610, 236, 'mut', 1, '3 3') + L(568, 66, 610, 66, 'mut', 1, '3 3') + A2(600, 66, 600, 236, 'gold') + V(586, 156, '30 m', { c: 'gold', fs: 13, a: 'end' });
        s += A(170, 262, 210, 262, 'tf', 1.6) + N(150, 320, '120 m of 5 cm structural steel, Q = 360 L/min', { a: 'start' });
        return W(640, 330, s);
      };
    }
