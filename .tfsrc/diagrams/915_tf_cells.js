    // ===================== Topic 15 · Batteries: cells, redox potential and Gibbs free energy =====================
    // Colour key used in every cell diagram: violet = negative electrode (the anode in discharge),
    // terracotta = positive electrode (the cathode in discharge), teal = electrons, gold = ions / separator,
    // tint = electrolyte.
    {
      const S = (x, y, s, o) => T(x, y, s, Object.assign({ serif: true, fs: 13 }, o || {}));
      const box = (x, y, w, h, c, lab, o) => R(x, y, w, h, c, c, 1.2, null, 6) + '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="6" fill="' + paper + '" fill-opacity="0.82"></rect>' + R(x, y, w, h, null, c, 1.6, null, 6) + (lab ? S(x + w / 2, y + h / 2 + 5, lab, Object.assign({ a: 'middle', fs: 13, w: 600, c }, o || {})) : '');
      const bulb = (x, y) => ci(x, y, 12, 'gold', 1.6, null, 'paper') + P('M ' + (x - 5) + ' ' + (y + 3) + ' q 2.5 -9 5 0 q 2.5 -9 5 0', 'gold', 1.2) + R(x - 6, y + 11, 12, 7, 'mut', 'mut', 1);
      // basic beaker cell: x0 = left of beaker, top y of beaker; returns svg; electrodes at x0+40 and x0+205
      const beaker = (x0, y0, o) => {
        o = o || {};
        let s = R(x0, y0, 270, 110, 'tint', 'ink', 1.6) + L(x0 + 135, y0 + 6, x0 + 135, y0 + 106, 'mut', 1.3, '5 4');
        s += R(x0 + 40, y0 - 30, 24, 125, 'vio', 'vio', 1.2) + R(x0 + 206, y0 - 30, 24, 125, 'terr', 'terr', 1.2);
        s += T(x0 + 52, y0 + 70, '−', { a: 'middle', fs: 16, w: 700, c: 'paper' }) + T(x0 + 218, y0 + 70, '+', { a: 'middle', fs: 16, w: 700, c: 'paper' });
        s += S(x0 + 135, y0 + 128, o.elab || 'electrolyte', { a: 'middle', fs: 12, c: 'mtx' });
        s += S(x0 + 36, y0 - 10, o.left || 'anode', { a: 'end', fs: 13, w: 600, c: 'vio' }) + S(x0 + 234, y0 - 10, o.right || 'cathode', { fs: 13, w: 600, c: 'terr' });
        return s;
      };

      // 1 · Primary vs secondary (Async 1.1 Figure 1)
      D.tf_cells_primary_secondary = () => {
        const batt = (x, y) => R(x, y, 46, 70, 'ink', 'ink', 1, null, 5) + R(x + 15, y - 7, 16, 7, 'ink', 'ink', 1) + T(x + 23, y + 22, '+', { a: 'middle', fs: 16, w: 700, c: 'paper' }) + T(x + 23, y + 58, '−', { a: 'middle', fs: 16, w: 700, c: 'paper' });
        const use = (x, y) => ci(x, y, 32, 'tf', 1.6, null, 'tint') + S(x, y - 2, 'device /', { a: 'middle', fs: 11.5 }) + S(x, y + 12, 'world', { a: 'middle', fs: 11.5 });
        let s = T(160, 22, 'Secondary (rechargeable)', { a: 'middle', fs: 13.5, w: 600 }) + T(500, 22, 'Primary (single use)', { a: 'middle', fs: 13.5, w: 600 });
        s += batt(40, 50) + use(270, 85) + A(96, 75, 232, 75, 'terr', 2) + A(232, 98, 96, 98, 'grn', 2);
        s += S(164, 68, 'discharge: energy out', { a: 'middle', fs: 11.5, c: 'terr' }) + S(164, 117, 'charge: energy in', { a: 'middle', fs: 11.5, c: 'grn' });
        s += batt(390, 50) + use(610, 85) + A(446, 85, 572, 85, 'terr', 2) + S(509, 77, 'discharge only', { a: 'middle', fs: 11.5, c: 'terr' });
        s += N(160, 150, 'reaction (at least partly) reversible: Z + Y ⇌ Z⁻ + Y⁺', { a: 'middle', fs: 11 }) + N(500, 150, 'reaction irreversible: Z + Y → Z⁻ + Y⁺', { a: 'middle', fs: 11 });
        return W(680, 162, s);
      };

      // 2 · Cell vs pack (Async 1.1 Figure 2)
      D.tf_cells_cell_pack = () => {
        const cyl = (x, y, w, h, sw) => R(x, y, w, h, 'tint', 'tf', sw || 1.4, null, 3) + R(x + w * 0.3, y - 4, w * 0.4, 4, 'tf', 'tf', 1);
        let s = T(110, 22, 'one cell', { a: 'middle', fs: 13.5, w: 600 }) + T(450, 22, 'one battery pack', { a: 'middle', fs: 13.5, w: 600 });
        s += cyl(88, 48, 44, 120, 1.8) + S(110, 190, 'the galvanic cell:', { a: 'middle', fs: 12 }) + S(110, 205, 'the unit that stores energy', { a: 'middle', fs: 12 });
        s += R(260, 40, 380, 136, null, 'ink', 1.8, null, 8);
        for (let r = 0; r < 3; r++) for (let c = 0; c < 12; c++) s += cyl(276 + c * 30, 54 + r * 40, 20, 30, 1.1);
        s += S(450, 198, 'an assembly of many cells (1000s in an EV) for a larger store', { a: 'middle', fs: 12 });
        s += N(340, 236, '"battery" is used loosely for either: a phone has one cell, an EV battery thousands', { a: 'middle', fs: 11 });
        return W(680, 246, s);
      };

      // 3 · Energy stores compared (Session 1 slide 11 "What chance do batteries stand?")
      D.tf_cells_energy_chart = () => {
        const x0 = 60, y0 = 400, w = 600, h = 350, X = (v) => x0 + v * w / 160, Y = (v) => y0 - v * h / 90;
        let s = axes(x0, y0, w, h) + S(x0 + w / 2, y0 + 38, 'specific energy (MJ/kg)', { a: 'middle', fs: 13.5 }) + S(x0 - 4, y0 - h - 18, 'energy density (MJ/L)', { fs: 13.5 });
        [0, 20, 40, 60, 80, 100, 120, 140, 160].forEach((v) => { s += tick(X(v), y0, String(v)); if (v) s += L(X(v), y0, X(v), y0 - h, 'mut', 0.6, '2 4'); });
        [0, 10, 20, 30, 40, 50, 60, 70, 80, 90].forEach((v) => { s += tick(x0, Y(v), String(v), true); if (v) s += L(x0, Y(v), x0 + w, Y(v), 'mut', 0.6, '2 4'); });
        // [label, MJ/kg, MJ/L, label dx, label dy, anchor]
        const pt = [['Aluminium', 31, 84, 8, 4, 'start'], ['Silicon', 32.5, 75, 8, 4, 'start'], ['Iron, Zinc', 5, 39.5, 8, 4, 'start'], ['Magnesium', 25, 43, -2, -9, 'end'], ['Diesel, gasoline', 46, 35.5, 8, -6, 'start'],
          ['Ethanol', 30, 24, -7, 4, 'end'], ['Lithium', 43, 23, 8, 12, 'start'], ['Coal', 24, 20.5, -7, 8, 'end'], ['Methanol', 20, 15.8, -7, 4, 'end'], ['Natural gas', 54, 10, 8, 4, 'start'],
          ['Liquid hydrogen', 142, 10, -8, -4, 'end'], ['Hydrogen 700 bar', 142, 5.6, -8, 10, 'end']];
        pt.forEach((p) => { s += dot(X(p[1]), Y(p[2]), 'ink', 3.2) + S(X(p[1]) + p[3], Y(p[2]) + p[4], p[0], { fs: 12, a: p[5] }); });
        s += dot(X(46), Y(37), 'ink', 3.2) + dot(X(46), Y(34), 'ink', 3.2) + dot(X(43), Y(33), 'ink', 3.2) + dot(X(49.5), Y(27), 'ink', 3.2) + dot(X(5), Y(38), 'ink', 3.2) + dot(X(5), Y(40.7), 'ink', 3.2);
        s += '<ellipse cx="' + X(39) + '" cy="' + Y(29) + '" rx="92" ry="30" transform="rotate(-30 ' + X(39) + ' ' + Y(29) + ')" fill="none" stroke="' + terr + '" stroke-width="1.6"></ellipse>';
        s += S(X(60), Y(47), 'fossil fuels', { fs: 14, w: 600, c: 'terr' });
        s += ci(X(0.7), Y(1.4), 10, 'grn', 2) + dot(X(0.7), Y(1.4), 'grn', 3.4) + S(X(5), Y(4.5), 'Li-ion battery ≈ 0.5–0.9 MJ/kg, 1–2 MJ/L', { fs: 13, w: 600, c: 'grn' });
        s += N(x0 + w, y0 - h - 18, 'approximate values read from the lecture chart', { a: 'end', fs: 10.5 });
        return W(700, 450, s);
      };

      // 4 · Basic galvanic cell: open circuit and discharge (Async 1.2 Figures 1–2)
      D.tf_cells_galvanic = () => {
        let s = T(170, 20, 'open circuit: energy stored', { a: 'middle', fs: 13.5, w: 600 }) + T(510, 20, 'discharge: energy accessed', { a: 'middle', fs: 13.5, w: 600 });
        s += beaker(35, 140);
        s += N(170, 70, 'no external connection,', { a: 'middle', fs: 11 }) + N(170, 84, 'so electrons cannot move', { a: 'middle', fs: 11 });
        const x0 = 375;
        s += beaker(x0, 140, { elab: 'electrolyte: ions carry charge inside' });
        s += poly([[x0 + 52, 110], [x0 + 52, 66], [x0 + 123, 66]], 'ink', 1.6) + poly([[x0 + 147, 66], [x0 + 218, 66], [x0 + 218, 110]], 'ink', 1.6) + bulb(x0 + 135, 66);
        s += A(x0 + 64, 52, x0 + 112, 52, 'tf', 2) + A(x0 + 158, 52, x0 + 206, 52, 'tf', 2) + S(x0 + 88, 45, 'e⁻', { a: 'middle', fs: 13, c: 'tf', w: 600 }) + S(x0 + 182, 45, 'e⁻', { a: 'middle', fs: 13, c: 'tf', w: 600 });
        s += A(x0 + 82, 202, x0 + 188, 202, 'gold', 2) + S(x0 + 135, 195, 'ions', { a: 'middle', fs: 12, c: 'gold', w: 600 });
        s += N(x0 + 135, 294, 'conventional current I: + → − through the wire', { a: 'middle', fs: 10.5 });
        s += N(170, 294, 'dashed line: separator', { a: 'middle', fs: 10.5 });
        return W(680, 302, s);
      };

      // 5 · Charge conservation in the two half reactions (Session 1 slides 15–16)
      D.tf_cells_timesteps = () => {
        const panel = (x0, step, ya, za, eon) => {
          let s = T(x0 + 160, 20, 'time step ' + step, { a: 'middle', fs: 13.5, w: 600 });
          s += R(x0 + 5, 95, 310, 150, null, 'gold', 1.5, '6 4', 10) + R(x0 + 25, 120, 270, 105, 'tint', 'ink', 1.4);
          s += R(x0 + 60, 92, 22, 100, 'vio', 'vio', 1) + R(x0 + 238, 92, 22, 100, 'terr', 'terr', 1);
          s += poly([[x0 + 71, 92], [x0 + 71, 52], [x0 + 148, 52]], 'ink', 1.5) + poly([[x0 + 172, 52], [x0 + 249, 52], [x0 + 249, 92]], 'ink', 1.5) + bulb(x0 + 160, 52);
          s += ci(x0 + 71, 205, 15, 'tf', 1.5, null, 'paper') + S(x0 + 71, 210, ya, { a: 'middle', fs: 13, w: 600 }) + ci(x0 + 249, 205, 15, 'tf', 1.5, null, 'paper') + S(x0 + 249, 210, za, { a: 'middle', fs: 13, w: 600 });
          s += S(x0 + 56, 114, 'anode', { a: 'end', fs: 11.5, c: 'vio' }) + S(x0 + 264, 114, 'cathode', { fs: 11.5, c: 'terr' });
          s += eon;
          return s;
        };
        const e = (x, y) => ci(x, y, 10, 'tf', 1.4, null, 'tf') + T(x, y + 4, 'e⁻', { a: 'middle', fs: 10.5, c: 'paper', w: 700 });
        let s = panel(10, 1, 'Y', 'Z', e(225, 52) + A(236, 60, 247, 86, 'tf', 1.8) + S(160, 266, 'e⁻ enters cathode: Z + e⁻ → Z⁻', { a: 'middle', fs: 11.5, c: 'terr' }));
        s += panel(350, 2, 'Y⁺', 'Z⁻', e(445, 52) + A(421, 86, 432, 62, 'tf', 1.8) + S(510, 266, 'e⁻ leaves anode: Y → Y⁺ + e⁻', { a: 'middle', fs: 11.5, c: 'vio' }));
        return W(680, 276, s);
      };

      // 6 · Discharge vs charge with both naming conventions (Session 1 slides 8–9, 30–31, Async 1.2 Fig 2)
      D.tf_cells_charge_discharge = () => {
        const panel = (x0, dis) => {
          let s = T(x0 + 165, 20, dis ? 'DISCHARGE (spontaneous, ΔG < 0)' : 'CHARGE (driven, ΔG > 0)', { a: 'middle', fs: 13.5, w: 600, c: dis ? 'terr' : 'grn' });
          s += R(x0 + 30, 120, 270, 95, 'tint', 'ink', 1.5) + L(x0 + 165, 126, x0 + 165, 210, 'mut', 1.2, '5 4');
          s += R(x0 + 70, 92, 24, 112, 'vio', 'vio', 1) + R(x0 + 236, 92, 24, 112, 'terr', 'terr', 1);
          s += T(x0 + 82, 162, '−', { a: 'middle', fs: 16, w: 700, c: 'paper' }) + T(x0 + 248, 162, '+', { a: 'middle', fs: 16, w: 700, c: 'paper' });
          s += poly([[x0 + 82, 92], [x0 + 82, 56], [x0 + 140, 56]], 'ink', 1.5) + poly([[x0 + 190, 56], [x0 + 248, 56], [x0 + 248, 92]], 'ink', 1.5);
          if (dis) s += bulb(x0 + 165, 56) + N(x0 + 165, 84, 'load', { a: 'middle', fs: 11 });
          else s += ci(x0 + 165, 56, 20, 'grn', 1.8, null, 'paper') + S(x0 + 165, 61, 'PSU', { a: 'middle', fs: 11.5, w: 600, c: 'grn' }) + N(x0 + 165, 92, 'power supply', { a: 'middle', fs: 11 });
          s += dis ? A(x0 + 94, 42, x0 + 136, 42, 'tf', 2) + A(x0 + 196, 42, x0 + 238, 42, 'tf', 2) : A(x0 + 238, 42, x0 + 196, 42, 'tf', 2) + A(x0 + 136, 42, x0 + 94, 42, 'tf', 2);
          s += S(x0 + 115, 36, 'e⁻', { a: 'middle', fs: 12.5, c: 'tf', w: 600 }) + S(x0 + 217, 36, 'e⁻', { a: 'middle', fs: 12.5, c: 'tf', w: 600 });
          s += dis ? A(x0 + 110, 196, x0 + 220, 196, 'gold', 1.8) : A(x0 + 220, 196, x0 + 110, 196, 'gold', 1.8);
          s += S(x0 + 165, 190, 'ions', { a: 'middle', fs: 11.5, c: 'gold', w: 600 });
          // naming rows
          s += N(x0 + 82, 236, 'negative electrode', { a: 'middle', fs: 10.5, c: 'vio' }) + N(x0 + 248, 236, 'positive electrode', { a: 'middle', fs: 10.5, c: 'terr' });
          s += S(x0 + 82, 254, dis ? 'oxidation' : 'reduction', { a: 'middle', fs: 12 }) + S(x0 + 248, 254, dis ? 'reduction' : 'oxidation', { a: 'middle', fs: 12 });
          s += S(x0 + 82, 272, 'chemist: ' + (dis ? 'anode' : 'cathode'), { a: 'middle', fs: 12.5, w: 600 }) + S(x0 + 248, 272, 'chemist: ' + (dis ? 'cathode' : 'anode'), { a: 'middle', fs: 12.5, w: 600 });
          s += S(x0 + 82, 290, 'engineer: anode', { a: 'middle', fs: 12.5, w: 600, c: 'mtx' }) + S(x0 + 248, 290, 'engineer: cathode', { a: 'middle', fs: 12.5, w: 600, c: 'mtx' });
          return s;
        };
        let s = panel(0, true) + panel(345, false);
        s += L(340, 30, 340, 290, 'mut', 1, '3 5');
        return W(680, 300, s);
      };

      // 7 · Half-reaction potential ladder in discharge and charge (Session 1 slides 35–36)
      D.tf_cells_potential_ladder = () => {
        const panel = (x0, dis) => {
          let s = A(x0 + 30, 250, x0 + 30, 50, 'ink', 1.5) + S(x0 + 22, 150, 'half-reaction potential (V)', { a: 'middle', fs: 12, rot: -90 });
          s += T(x0 + 175, 22, dis ? 'cell in discharge (spontaneous)' : 'cell in charge (not spontaneous)', { a: 'middle', fs: 13.5, w: 600, c: dis ? 'terr' : 'grn' });
          s += box(x0 + 50, 196, 108, 44, 'vio', dis ? 'anode' : 'cathode') + N(x0 + 104, 254, dis ? '(oxidation)' : '(reduction)', { a: 'middle', fs: 10.5, c: 'vio' });
          s += box(x0 + 210, 64, 108, 44, 'terr', dis ? 'cathode' : 'anode') + N(x0 + 264, 58, dis ? '(reduction)' : '(oxidation)', { a: 'middle', fs: 10.5, c: 'terr' });
          s += L(x0 + 40, 86, x0 + 210, 86, 'mut', 1, '3 3') + L(x0 + 40, 218, x0 + 50, 218, 'mut', 1, '3 3');
          s += A2(x0 + 44, 214, x0 + 44, 90, 'ink') + V(x0 + 50, 158, dis ? 'E₀ > 0' : 'E₀ < 0', { fs: 13 });
          if (dis) {
            s += box(x0 + 140, 128, 82, 40, 'ink', 'load', { fs: 12 }) + PA('M ' + (x0 + 130) + ' 194 L ' + (x0 + 150) + ' 170', 'tf', 2) + PA('M ' + (x0 + 214) + ' 126 L ' + (x0 + 234) + ' 110', 'tf', 2);
            s += S(x0 + 120, 176, 'e⁻', { fs: 13, c: 'tf', w: 600, a: 'end' }) + N(x0 + 175, 285, 'E_cathode > E_anode: e⁻ fall "downhill" by themselves', { a: 'middle', fs: 10.5 });
          } else {
            s += box(x0 + 140, 128, 82, 40, 'grn', 'PSU', { fs: 12 }) + PA('M ' + (x0 + 232) + ' 110 L ' + (x0 + 214) + ' 128', 'tf', 2) + PA('M ' + (x0 + 150) + ' 170 L ' + (x0 + 132) + ' 194', 'tf', 2);
            s += S(x0 + 236, 128, 'e⁻', { fs: 13, c: 'tf', w: 600 }) + N(x0 + 175, 285, 'E_cathode < E_anode: supply must push e⁻ "uphill"', { a: 'middle', fs: 10.5 });
          }
          return s;
        };
        return W(700, 296, panel(0, true) + panel(355, false));
      };

      // 8 · Reduction-potential ladder used in the problem sheet (new; shows the Q9 correction)
      D.tf_cells_reduction_ladder = () => {
        const y = (E) => 250 - (E + 1) * 100;   // −1 V → 250, +1 V → 50
        let s = A(110, 270, 110, 34, 'ink', 1.5) + S(40, 150, 'reduction potential E (V)', { a: 'middle', fs: 12, rot: -90 });
        [-1, -0.5, 0, 0.5, 1].forEach((v) => { s += tick(110, y(v), (v > 0 ? '+' : '') + v.toFixed(1), true); });
        const lev = [['Zn²⁺ + 2e⁻ ⇌ Zn', -0.76, 'vio'], ['Cu²⁺ + 2e⁻ ⇌ Cu', 0.34, 'tf'], ['Ag⁺ + e⁻ ⇌ Ag', 0.80, 'terr']];
        lev.forEach((l) => { s += L(118, y(l[1]), 250, y(l[1]), l[2], 3) + S(258, y(l[1]) + 5, l[0] + '   ' + (l[1] > 0 ? '+' : '−') + Math.abs(l[1]).toFixed(2) + ' V', { fs: 13, w: 600, c: l[2] }); });
        s += A2(170, y(-0.76) - 3, 170, y(0.34) + 3, 'vio') + S(178, y(-0.25) + 5, 'Zn–Cu (Q8): 1.10 V', { fs: 12.5, w: 600, c: 'vio' });
        s += A2(215, y(0.34) - 3, 215, y(0.80) + 3, 'terr') + S(224, y(0.57) + 5, 'Cu–Ag (Q9): 0.46 V', { fs: 12.5, w: 600, c: 'terr' });
        s += L(118, y(0), 250, y(0), 'mut', 1, '3 3') + N(258, y(0) + 4, 'reference electrode (H⁺/H₂) = 0 V', { fs: 10.5 });
        s += N(300, 280, 'E₀ = E_cathode − E_anode with both values read off this ladder; higher rung = cathode', { a: 'middle', fs: 10.5 });
        return W(560, 288, s);
      };

      // 9 · From one electron to Gibbs free energy (Session 1 slides 19–25, 38–40)
      D.tf_cells_work_chain = () => {
        const b = (x, w, t1, t2, c) => box(x, 30, w, 70, c) + S(x + w / 2, 60, t1, { a: 'middle', fs: 15, w: 600, c }) + S(x + w / 2, 84, t2, { a: 'middle', fs: 12.5 });
        let s = b(2, 116, 'e', '1.602×10⁻¹⁹ C', 'tf') + b(146, 116, 'F = e·N_A', '96 485.3 C/mol', 'tf') + b(290, 116, 'Q = n·F', 'charge passed (C)', 'tf') + b(434, 120, 'w_elec = Q·E₀', '= n·F·E₀ (J)', 'terr') + b(582, 116, 'ΔG = −w_elec', '= −n·F·E₀ (J)', 'grn');
        s += A(118, 65, 144, 65, 'ink', 1.8) + A(262, 65, 288, 65, 'ink', 1.8) + A(406, 65, 432, 65, 'ink', 1.8) + A(554, 65, 580, 65, 'ink', 1.8);
        s += N(131, 120, '×N_A', { a: 'middle', fs: 11.5 }) + N(275, 120, '×n', { a: 'middle', fs: 11.5 }) + N(419, 120, '×E₀', { a: 'middle', fs: 11.5 }) + N(567, 120, 'sign', { a: 'middle', fs: 11.5 });
        s += N(350, 148, 'n = moles of electrons · E₀ = E_cathode − E_anode · w_elec > 0: work delivered by the cell', { a: 'middle', fs: 11 });
        return W(700, 158, s);
      };

      // 10 · Thermodynamically closed system (Async 1.3 Figure 1)
      D.tf_cells_closed_system = () => {
        let s = R(20, 30, 520, 230, 'tint', 'tf', 1.8, null, 6) + S(530, 22, 'Universe = System + Surroundings', { a: 'end', fs: 13, w: 600 });
        s += S(400, 70, 'Surroundings', { a: 'middle', fs: 14, w: 600, c: 'tf' });
        s += R(60, 110, 170, 110, 'paper', 'grn', 2.2, null, 4) + S(145, 160, 'System', { a: 'middle', fs: 14, w: 600, c: 'grn' }) + N(145, 180, 'n = constant', { a: 'middle', fs: 11 });
        s += A(232, 140, 330, 140, 'terr', 2) + S(340, 145, 'energy crosses: heat q, work w', { fs: 12.5, c: 'terr' });
        s += A(232, 190, 300, 190, 'mut', 1.6) + L(258, 180, 274, 200, 'terr', 2) + L(274, 180, 258, 200, 'terr', 2) + S(310, 195, 'no mass crosses (closed)', { fs: 12.5, c: 'mtx' });
        s += V(150, 246, 'ΔS_univ = ΔS_sys + ΔS_surr', { a: 'middle', fs: 13.5 }) + V(410, 246, 'ΔH_surr = q_surr = −ΔH_sys', { a: 'middle', fs: 13.5 });
        return W(560, 270, s);
      };

      // 11 · Activation energy (Session 1 slides 48–50)
      D.tf_cells_activation = () => {
        const x0 = 70, y0 = 260;
        let s = axes(x0, y0, 440, 220, 'reaction coordinate', 'Gibbs free energy G');
        const f = (t, hgt) => 110 + 80 / (1 + Math.exp(-(t - 0.55) * 14)) - hgt * Math.exp(-((t - 0.45) ** 2) / 0.008);
        const curve = (hgt) => fn((t) => [x0 + 10 + t * 420, f(t, hgt)], 0, 1, 120);
        s += poly(curve(70), 'ink', 2) + poly(curve(30), 'vio', 1.6, '6 4');
        const pk = curve(70).reduce((m, p) => (p[1] < m[1] ? p : m));
        s += L(x0 + 10, 110, x0 + 440, 110, 'mut', 1, '3 3') + L(pk[0] - 40, pk[1], pk[0] + 40, pk[1], 'mut', 1, '3 3');
        s += A2(pk[0] - 30, 108, pk[0] - 30, pk[1] + 2, 'terr') + V(pk[0] - 38, (108 + pk[1]) / 2 + 5, 'E_a', { a: 'end', fs: 14, c: 'terr' });
        s += A(x0 + 400, 112, x0 + 400, 188, 'grn', 2) + V(x0 + 410, 155, 'ΔG < 0', { fs: 14, c: 'grn' });
        s += S(x0 + 20, 102, 'reactants', { fs: 12 }) + S(x0 + 330, 206, 'products', { fs: 12 }) + S(pk[0] + 8, pk[1] - 6, 'activated complex', { fs: 12 });
        s += L(x0 + 170, 236, x0 + 200, 236, 'vio', 1.6, '6 4') + S(x0 + 206, 240, 'lower barrier (engineered)', { fs: 11.5, c: 'vio' });
        s += N(290, 290, 'ΔG says whether it can go (thermodynamics); E_a sets how fast it goes (kinetics)', { a: 'middle', fs: 10.5 });
        return W(580, 300, s);
      };

      // 12 · Electrode stack: components and layers (Session 1 slides 51–53, 45)
      D.tf_cells_layers = () => {
        const lay = [['positive current collector (Al)', 'mut', 8], ['cathode (positive electrode) ≈ 20 µm', 'terr', 18], ['separator, soaked in liquid electrolyte', 'gold', 10], ['anode (negative electrode) ≈ 20 µm', 'vio', 18], ['negative current collector (Cu)', 'grn', 8]];
        let s = T(150, 22, 'one layer (cross-section)', { a: 'middle', fs: 13.5, w: 600 }) + T(555, 22, 'stack: layers repeat, mirrored', { a: 'middle', fs: 13.5, w: 600 });
        let y = 60;
        lay.forEach((l) => { s += R(40, y, 90, l[2], l[1], l[1], 1) + L(132, y + l[2] / 2, 146, y + l[2] / 2, 'mut', 1) + S(150, y + l[2] / 2 + 4, l[0], { fs: 11.5, c: l[1] === 'mut' ? 'mtx' : l[1] }); y += l[2] + 14; });
        s += A2(30, 60, 30, y - 14, 'ink') + N(26, 120, '50–', { a: 'end', fs: 10.5 }) + N(26, 134, '100 µm', { a: 'end', fs: 10.5 });
        // stack
        const seq = ['mut', 'terr', 'gold', 'vio', 'grn', 'vio', 'gold', 'terr', 'mut', 'terr', 'gold', 'vio', 'grn', 'vio', 'gold', 'terr', 'mut'];
        const th = { mut: 4, grn: 4, terr: 9, vio: 9, gold: 5 };
        let yy = 50;
        seq.forEach((c) => { const ext = c === 'mut' ? 30 : c === 'grn' ? -30 : 0; s += R(470 + (ext < 0 ? ext : 0), yy, 170 + Math.abs(ext), th[c], c, c, 0.6); yy += th[c] + 1; });
        s += N(440, yy + 14, '← Cu tabs (−)', { fs: 10.5, c: 'grn' }) + N(670, yy + 14, 'Al tabs (+) →', { a: 'end', fs: 10.5 });
        s += N(555, yy + 34, 'up to ~100 layers per cell; each collector', { a: 'middle', fs: 10.5 }) + N(555, yy + 48, 'is coated on both sides to save space', { a: 'middle', fs: 10.5 });
        return W(700, 270, s);
      };

      // 13 · Cell formats (Session 1 slides 43–46)
      D.tf_cells_formats = () => {
        let s = T(110, 22, 'pouch', { a: 'middle', fs: 13.5, w: 600 }) + T(340, 22, 'cylindrical', { a: 'middle', fs: 13.5, w: 600 }) + T(570, 22, 'prismatic', { a: 'middle', fs: 13.5, w: 600 });
        // pouch: flat soft rectangle with two tabs
        s += R(40, 60, 140, 110, 'tint', 'tf', 1.8, null, 4) + R(48, 68, 124, 94, null, 'tf', 1, '4 3', 3) + R(70, 40, 18, 20, 'mut', 'mut', 1) + R(132, 40, 18, 20, 'grn', 'grn', 1);
        s += N(110, 214, 'stacked layers in a', { a: 'middle', fs: 11 }) + N(110, 228, 'flexible sealed foil', { a: 'middle', fs: 11 });
        // cylinder with spiral end
        s += R(300, 70, 80, 110, 'tint', 'tf', 1.8) + '<ellipse cx="340" cy="70" rx="40" ry="13" fill="' + paper + '" stroke="' + tf + '" stroke-width="1.8"></ellipse>' + P('M 300 180 A 40 13 0 0 0 380 180', 'tf', 1.8);
        let sp = 'M 340 70'; for (let i = 1; i <= 36; i++) { const a = i * 0.5, r = 1 + i * 1.02; sp += ' L ' + (340 + r * Math.cos(a)).toFixed(1) + ' ' + (70 + r * 0.32 * Math.sin(a)).toFixed(1); }
        s += P(sp, 'terr', 1.1);
        s += N(340, 214, 'one long layer wound into', { a: 'middle', fs: 11 }) + N(340, 228, 'a "jelly roll" in a steel can', { a: 'middle', fs: 11 });
        // prismatic: box with terminals, stack visible
        s += pgon([[510, 80], [620, 80], [640, 62], [530, 62]], 'paper', 'tf', 1.8) + R(510, 80, 110, 100, 'tint', 'tf', 1.8) + pgon([[620, 80], [640, 62], [640, 162], [620, 180]], 'tint', 'tf', 1.8);
        s += R(530, 54, 16, 10, 'mut', 'mut', 1) + R(596, 54, 16, 10, 'grn', 'grn', 1);
        for (let i = 0; i < 5; i++) s += L(522, 96 + i * 16, 608, 96 + i * 16, 'terr', 1, '4 3');
        s += N(570, 214, 'flattened roll or stack', { a: 'middle', fs: 11 }) + N(570, 228, 'in a rigid rectangular can', { a: 'middle', fs: 11 });
        return W(680, 236, s);
      };
    }
