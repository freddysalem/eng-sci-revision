    // Topic 16 (Lithium-ion cells: energy extraction, resistance and heat). Keys prefixed tf_liion_.
    {
      // ---------- local helpers ----------
      const lin = (pts, x) => { for (let i = 0; i < pts.length - 1; i++) { const a = pts[i], b = pts[i + 1]; if ((x - a[0]) * (x - b[0]) <= 0 && a[0] !== b[0]) return a[1] + (b[1] - a[1]) * (x - a[0]) / (b[0] - a[0]); } const lo = pts[0], hi = pts[pts.length - 1]; return Math.abs(x - lo[0]) < Math.abs(x - hi[0]) ? lo[1] : hi[1]; };
      const sp = (pts, X, Y) => {
        const q = pts.map((p) => [X(p[0]), Y(p[1])]);
        let d = 'M' + q[0][0].toFixed(1) + ',' + q[0][1].toFixed(1);
        for (let i = 0; i < q.length - 1; i++) {
          const p0 = q[i - 1] || q[i], p1 = q[i], p2 = q[i + 1], p3 = q[i + 2] || q[i + 1];
          const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
          d += ' C' + c1[0].toFixed(1) + ',' + c1[1].toFixed(1) + ' ' + c2[0].toFixed(1) + ',' + c2[1].toFixed(1) + ' ' + p2[0].toFixed(1) + ',' + p2[1].toFixed(1);
        }
        return d;
      };
      // chart frame: grid + ticks; rev = x axis runs high→low (left→right)
      const chart = (o) => {
        const { x0, y0, w, h, xr, yr } = o;
        const X = (v) => o.rev ? x0 + (xr[1] - v) / (xr[1] - xr[0]) * w : x0 + (v - xr[0]) / (xr[1] - xr[0]) * w;
        const Y = (v) => y0 - (v - yr[0]) / (yr[1] - yr[0]) * h;
        let s = '';
        (o.xt || []).forEach((t) => { s += L(X(t), y0, X(t), y0 - h, 'mut', 0.6, '2 4') + tick(X(t), y0, o.xf ? o.xf(t) : String(t)); });
        (o.yt || []).forEach((t) => { s += L(x0, Y(t), x0 + w, Y(t), 'mut', 0.6, '2 4') + tick(x0, Y(t), o.yf ? o.yf(t) : String(t), true); });
        s += axes(x0, y0, w, h, null, o.yl) + (o.xl ? T(x0 + w / 2, y0 + 33, o.xl, { serif: true, fs: 14, a: 'middle' }) : '');
        return { X, Y, s };
      };
      const rect = (x, y, w, h, fill, op, c) => P('M' + x + ' ' + y + ' h' + w + ' v' + h + ' h' + (-w) + ' Z', c || null, 1.2, fill, null, op);
      const res = (x, y, l, c) => { let d = 'M' + x + ' ' + y; const n = 6, st = l / n; for (let i = 0; i < n; i++) d += ' L' + (x + st * (i + 0.5)).toFixed(1) + ' ' + (y + (i % 2 ? 6 : -6)); d += ' L' + (x + l) + ' ' + y; return P(d, c || 'ink', 1.6); };

      // ---------- digitised curves (read off the course figures; approximate) ----------
      // NMC-graphite OCV vs SOC (%), Session 2 slide 30
      const NMC = [[0, 3.0], [1, 3.12], [2, 3.24], [4, 3.34], [7, 3.41], [12, 3.45], [20, 3.49], [30, 3.53], [40, 3.58], [50, 3.66], [60, 3.76], [70, 3.87], [80, 3.98], [90, 4.09], [100, 4.2]];
      // LFP-graphite OCV vs SOC (%), Session 2 slide 30
      const LFP = [[0, 2.7], [1, 2.86], [2, 2.95], [4, 3.02], [8, 3.06], [20, 3.09], [40, 3.11], [60, 3.12], [70, 3.15], [80, 3.16], [90, 3.17], [97, 3.2], [99, 3.28], [99.5, 3.33], [100, 3.4]];
      // pseudo-OCV (C/100) of an NMC-graphite cell, Async 2.2 Fig 3 (4.2 V → 2.7 V)
      const POCV = [[0, 2.7], [0.5, 3.0], [1.5, 3.25], [4, 3.38], [10, 3.45], [20, 3.5], [30, 3.55], [40, 3.6], [50, 3.68], [60, 3.78], [68, 3.88], [75, 3.97], [85, 4.05], [100, 4.2]];
      // terminal voltage vs discharged capacity (mAh) of a 2 Ah cell, Async 2.2 Fig 4
      const CR = {
        c02: [[0, 4.15], [200, 4.05], [400, 3.98], [600, 3.83], [800, 3.76], [1000, 3.73], [1200, 3.71], [1400, 3.70], [1600, 3.69], [1800, 3.67], [1900, 3.6], [1960, 3.35], [2000, 3.0]],
        c05: [[0, 4.1], [200, 3.98], [400, 3.92], [600, 3.8], [800, 3.72], [1000, 3.68], [1200, 3.66], [1400, 3.65], [1600, 3.63], [1800, 3.58], [1880, 3.42], [1950, 3.0]],
        c1: [[0, 4.0], [200, 3.9], [400, 3.82], [600, 3.7], [800, 3.6], [1000, 3.55], [1200, 3.53], [1400, 3.51], [1600, 3.48], [1750, 3.4], [1860, 3.2], [1930, 3.0]],
        c2: [[0, 3.85], [60, 3.7], [150, 3.56], [300, 3.44], [500, 3.38], [800, 3.30], [1000, 3.28], [1200, 3.26], [1400, 3.22], [1600, 3.18], [1750, 3.1], [1820, 3.0]]
      };

      // 1. Discharge and charge of a Li-ion cell: electrons outside, Li-ions inside (Async 2.1 Figs 1 & 2, redrawn)
      D.tf_liion_intercalation = () => {
        const panel = (ox, chg) => {
          let s = '';
          const top = 92, bot = 262;
          s += T(ox + 165, 18, chg ? 'CHARGE (I &lt; 0)' : 'DISCHARGE (I &gt; 0)', { a: 'middle', fs: 12.5, w: 600 });
          // external circuit
          s += L(ox + 24, top, ox + 24, 56, 'ink', 1.6) + L(ox + 24, 56, ox + 306, 56, 'ink', 1.6) + L(ox + 306, 56, ox + 306, top, 'ink', 1.6);
          if (!chg) { s += R(ox + 145, 46, 40, 20, 'paper', 'ink', 1.4) + N(ox + 165, 60, 'load', { a: 'middle', fs: 10.5, c: 'ink' }); }
          else { s += R(ox + 147, 42, 36, 28, 'paper', null) + L(ox + 158, 44, ox + 158, 68, 'ink', 2) + L(ox + 170, 50, ox + 170, 62, 'ink', 3.2) + N(ox + 188, 50, 'charger', { fs: 10.5, c: 'ink' }); }
          s += chg ? A(ox + 70, 38, ox + 120, 38, 'vio', 1.8) + A(ox + 210, 38, ox + 260, 38, 'vio', 1.8) : A(ox + 260, 38, ox + 210, 38, 'vio', 1.8) + A(ox + 120, 38, ox + 70, 38, 'vio', 1.8);
          s += T(ox + 165, 34, 'e⁻', { a: 'middle', fs: 12, c: 'vio', w: 600 });
          // current collectors
          s += rect(ox + 18, top, 8, bot - top, 'mut', 0.9) + rect(ox + 304, top, 8, bot - top, 'terr', 0.9);
          // cathode
          s += rect(ox + 26, top, 96, bot - top, 'grn', 0.16, 'grn');
          for (let y = top + 16; y < bot; y += 20) s += L(ox + 30, y, ox + 118, y, 'grn', 1.4);
          // electrolyte + separator
          s += rect(ox + 122, top, 84, bot - top, 'tint', 1) + rect(ox + 158, top, 12, bot - top, 'url(#tf-hatch)', 1, 'gold');
          // anode (graphite layers)
          s += rect(ox + 206, top, 98, bot - top, 'ink', 0.07, 'ink');
          for (let y = top + 16; y < bot; y += 20) s += P('M' + (ox + 210) + ' ' + y + ' l8 -4 l8 4 l8 -4 l8 4 l8 -4 l8 4 l8 -4 l8 4 l8 -4 l8 4 l8 -4', 'ink', 1.1);
          // lithium: in the electrode being emptied (more), a few in the one being filled
          const liC = chg ? [[50, 108], [92, 148], [64, 188], [100, 228]] : [[46, 108], [70, 108], [94, 108], [58, 128], [82, 148], [46, 168], [70, 188], [94, 208], [58, 228], [82, 248]];
          const liA = chg ? [[226, 108], [262, 128], [286, 168], [238, 208], [274, 248]] : [[236, 128], [276, 188]];
          liC.concat(liA).forEach((p) => { s += dot(ox + p[0], p[1], 'vio', 4); });
          [[140, 140], [188, 180], [140, 220]].forEach((p) => { s += dot(ox + p[0], p[1], 'vio', 4); });
          s += chg ? A(ox + 128, 166, ox + 200, 166, 'vio', 2) : A(ox + 200, 166, ox + 128, 166, 'vio', 2);
          s += R(ox + 150, 145, 28, 16, 'paper', null, 1, null, 3) + T(ox + 164, 158, 'Li⁺', { a: 'middle', fs: 12, c: 'vio', w: 600 });
          // labels
          s += T(ox + 74, 82, 'cathode (+)', { a: 'middle', fs: 11.5, w: 600, c: 'grn' }) + T(ox + 255, 82, 'anode (−)', { a: 'middle', fs: 11.5, w: 600 }) + N(ox + 164, 82, 'separator', { a: 'middle', c: 'gold' });
          s += N(ox + 22, 278, 'Al', { a: 'middle' }) + N(ox + 308, 278, 'Cu', { a: 'middle' }) + N(ox + 164, 278, 'electrolyte', { a: 'middle', c: 'tf' });
          s += N(ox + 74, 294, chg ? 'LiCoO₂ → CoO₂' : 'CoO₂ → LiCoO₂', { a: 'middle', c: 'grn' }) + N(ox + 74, 307, chg ? 'oxidation, de-intercalation' : 'reduction, intercalation', { a: 'middle', fs: 9.5, c: 'grn' });
          s += N(ox + 255, 294, chg ? 'C₆ → LiC₆' : 'LiC₆ → C₆', { a: 'middle' }) + N(ox + 255, 307, chg ? 'reduction, intercalation' : 'oxidation, de-intercalation', { a: 'middle', fs: 9.5 });
          s += N(ox + 165, 326, chg ? 'e⁻ and Li⁺ both driven cathode → anode' : 'e⁻ and Li⁺ both travel anode → cathode', { a: 'middle', fs: 10.5, c: 'ink' });
          return s;
        };
        return W(720, 336, panel(0, false) + panel(380, true) + L(358, 20, 358, 318, 'mut', 1, '4 4'));
      };

      // 2. Half-reaction potentials and the full-cell OCV against SOC (Async 2.2 Figs 1 & 2)
      D.tf_liion_half_potentials = () => {
        const c = chart({ x0: 70, y0: 270, w: 470, h: 230, xr: [0, 100], yr: [0, 4.5], xt: [0, 20, 40, 60, 80, 100], yt: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5], xl: 'SOC (%)', yl: 'potential (V)' });
        const CAT = [[0, 3.55], [3, 3.62], [10, 3.68], [30, 3.75], [50, 3.85], [70, 3.98], [90, 4.15], [100, 4.3]];
        const AN = [[0, 0.85], [2, 0.5], [5, 0.3], [10, 0.22], [20, 0.2], [30, 0.17], [45, 0.13], [55, 0.12], [70, 0.11], [100, 0.09]];
        const FULL = [0, 1, 2, 3, 5, 7, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((x) => [x, lin(CAT, x) - lin(AN, x)]);
        let s = c.s + P(sp(CAT, c.X, c.Y), 'grn', 2.2) + P(sp(AN, c.X, c.Y), 'ink', 2.2) + P(sp(FULL, c.X, c.Y), 'tf', 2.4);
        const xm = 60, yc = lin(CAT, xm), ya = lin(AN, xm);
        s += A2(c.X(xm), c.Y(ya) - 3, c.X(xm), c.Y(yc) + 3, 'terr');
        s += V(c.X(xm) + 8, c.Y(2.2), 'E_{cathode} − E_{anode}', { c: 'terr', fs: 13 });
        s += V(c.X(100) + 8, c.Y(4.3) - 2, 'E_{cathode}', { c: 'grn', fs: 13 }) + V(c.X(100) + 8, c.Y(4.2) + 18, 'E₀ (OCV)', { c: 'tf', fs: 13 }) + V(c.X(88), c.Y(0.11) - 8, 'E_{anode}', { fs: 13, a: 'middle' });
        s += N(560, 120, 'discharge →', { c: 'mtx' }) + N(560, 134, 'runs right → left', { c: 'mtx' });
        s += N(560, 160, 'cathode: lithiation', { c: 'grn' }) + N(560, 174, 'rises, E_{cathode} falls', { c: 'grn' });
        s += N(560, 200, 'anode: de-lithiates,', { c: 'ink' }) + N(560, 214, 'E_{anode} rises', { c: 'ink' });
        s += N(305, 324, 'all potentials vs Li/Li⁺ · NMC cathode, graphite anode · shapes after Async 2.2 Fig 2', { a: 'middle' });
        return W(720, 332, s);
      };

      // 3. pseudo-OCV from a C/100 discharge (Async 2.2 Fig 3)
      D.tf_liion_pocv = () => {
        const c = chart({ x0: 70, y0: 250, w: 460, h: 200, xr: [0, 100], yr: [2.6, 4.3], rev: true, xt: [100, 80, 60, 40, 20, 0], yt: [2.7, 3.0, 3.3, 3.6, 3.9, 4.2], yf: (t) => t.toFixed(1), xl: 'SOC (%)', yl: 'OCV, E₀ (V)' });
        let s = c.s + P(sp(POCV, c.X, c.Y), 'tf', 2.4);
        s += L(c.X(100), c.Y(4.2), c.X(0) + 20, c.Y(4.2), 'terr', 1.2, '5 4') + L(c.X(100), c.Y(2.7), c.X(0) + 20, c.Y(2.7), 'terr', 1.2, '5 4');
        s += V(c.X(0) + 26, c.Y(4.2) + 5, 'E_{max} = 4.2 V', { c: 'terr', fs: 13 }) + V(c.X(0) + 26, c.Y(2.7) + 5, 'E_{min} = 2.7 V', { c: 'terr', fs: 13 });
        s += A(c.X(96), c.Y(3.5), c.X(76), c.Y(3.5), 'ink', 1.4) + N(c.X(96), c.Y(3.5) - 8, 'experiment progress', {});
        s += N(c.X(100) + 4, 302, 'constant current C/100 (0.01 C) → 100 h from 100% to 0% SOC; tiny current, so V ≈ OCV', { fs: 10.5 });
        return W(700, 310, s);
      };

      // 4. Terminal voltage vs capacity at four C-rates, 2 Ah cell (Async 2.2 Fig 4) + the power-reading task
      const crate = (ans) => {
        const c = chart({ x0: 70, y0: 270, w: 500, h: 230, xr: [0, 2000], yr: [2.9, 4.25], xt: [0, 400, 800, 1200, 1600, 2000], yt: [3.0, 3.2, 3.4, 3.6, 3.8, 4.0, 4.2], yf: (t) => t.toFixed(1), xl: 'Q discharged (mAh)', yl: 'V_{cell} (V)' });
        let s = c.s;
        const set = [['c02', 'ink', '0.2 C (0.4 A)'], ['c05', 'terr', '0.5 C (1 A)'], ['c1', 'vio', '1 C (2 A)'], ['c2', 'grn', '2 C (4 A)']];
        set.forEach((cv2, i) => { s += P(sp(CR[cv2[0]], c.X, c.Y), cv2[1], 2.1); s += L(590, 70 + 20 * i, 612, 70 + 20 * i, cv2[1], 2.4) + N(618, 74 + 20 * i, cv2[2], { c: cv2[1], fs: 11 }); });
        const xp = 800, yp = lin(CR.c2, xp);
        s += L(c.X(xp), c.Y(2.9), c.X(xp), c.Y(yp), 'terr', 1.2, '4 3') + L(c.X(0), c.Y(yp), c.X(xp), c.Y(yp), 'terr', 1.2, '4 3') + dot(c.X(xp), c.Y(yp), 'terr', 4.5);
        if (ans) s += N(c.X(830), c.Y(3.44), 'V = 3.30 V, I = 4 A', { c: 'terr', fs: 10.5 }) + N(c.X(830), c.Y(3.355), 'P = 4 × 3.30 = 13.2 W', { c: 'terr', fs: 10.5, w: 600 });
        else s += N(c.X(830), c.Y(3.4), '800 mAh at 2 C', { c: 'terr', fs: 10.5 });
        s += A(c.X(0), 318, c.X(300), 318, 'mtx', 1.3) + N(c.X(320), 322, 'experiment progress', {});
        s += N(590, 170, 'energy out =', { fs: 11 }) + N(590, 184, 'area under curve', { fs: 11 }) + N(590, 198, '(down to 0 V)', { fs: 11 }) + N(590, 222, 'slow rate: higher V', { fs: 11 }) + N(590, 236, 'and more Ah → more', { fs: 11 }) + N(590, 250, 'energy', { fs: 11 });
        return W(720, 328, s);
      };
      D.tf_liion_crate = () => crate(true);
      D.tf_liion_crate_q = () => crate(false);

      // 5. OCV, 1 C discharge and 1 C charge with ±0.1 V overpotential (Async 2.2 Fig 5)
      D.tf_liion_overpotential = () => {
        const c = chart({ x0: 70, y0: 270, w: 470, h: 230, xr: [0, 100], yr: [2.7, 4.3], rev: true, xt: [100, 80, 60, 40, 20, 0], yt: [2.7, 3.0, 3.3, 3.6, 3.9, 4.2], yf: (t) => t.toFixed(1), xl: 'SOC (%)', yl: 'voltage (V)' });
        const O = NMC.map((p) => [p[0], p[1] - 0.12]).filter((p) => p[0] >= 1).concat([[0.3, 2.8]]).sort((a, b) => a[0] - b[0]);
        const DCH = O.map((p) => [p[0], p[1] - 0.1]), CH = O.map((p) => [p[0], p[1] + 0.1]);
        const xs = []; for (let x = 2; x <= 100; x += 2) xs.push(x);
        const band = (up, lo, fill) => pgon(xs.map((x) => [c.X(x), c.Y(lin(up, x))]).concat(xs.slice().reverse().map((x) => [c.X(x), c.Y(lin(lo, x))])), fill, null, 1, 0.28);
        let s = c.s + band(CH, O, 'terr') + band(O, DCH, 'tf');
        s += P(sp(O, c.X, c.Y), 'ink', 2.2) + P(sp(CH.filter((p) => p[0] >= 2), c.X, c.Y), 'terr', 2.1) + P(sp(DCH, c.X, c.Y), 'tf', 2.1);
        s += N(c.X(58), c.Y(4.12), '1 C charge: V_cell = E₀ + 0.1 V', { c: 'terr', fs: 11 }) + A(c.X(45), c.Y(4.05), c.X(38), c.Y(lin(CH, 38)) - 4, 'terr', 1.3);
        s += N(c.X(98), c.Y(3.02), '1 C discharge: V_cell = E₀ − 0.1 V', { c: 'tf', fs: 11 }) + A(c.X(80), c.Y(3.1), c.X(72), c.Y(lin(DCH, 72)) + 4, 'tf', 1.3);
        s += N(560, 90, 'OCV E₀ (black)', { c: 'ink', fs: 11 }) + N(560, 118, 'shaded strips =', { fs: 11 }) + N(560, 132, 'losses (heat):', { fs: 11 }) + N(560, 150, 'above OCV: charge', { fs: 11, c: 'terr' }) + N(560, 164, 'below OCV: discharge', { fs: 11, c: 'tf' });
        s += N(560, 196, '20 Ah cell, I = 20 A', { fs: 11 }) + N(560, 210, 'V_OP = 0.1 V', { fs: 11 }) + N(560, 224, 'R = 0.1/20 = 5 mΩ', { fs: 11, w: 600 });
        return W(720, 312, s);
      };

      // 6. Contributors to cell resistance (Session 2 slides 10–11) + lumped series model
      D.tf_liion_resistance = () => {
        let s = '';
        const top = 40, bot = 170;
        s += rect(30, top, 10, bot - top, 'mut', 0.9) + rect(40, top, 170, bot - top, 'grn', 0.16, 'grn') + rect(210, top, 150, bot - top, 'tint', 1) + rect(279, top, 12, bot - top, 'url(#tf-hatch)', 1, 'gold') + rect(360, top, 170, bot - top, 'ink', 0.07, 'ink') + rect(530, top, 10, bot - top, 'terr', 0.9);
        s += T(125, 30, 'cathode (solid)', { a: 'middle', fs: 11.5, w: 600, c: 'grn' }) + T(285, 30, 'electrolyte', { a: 'middle', fs: 11.5, w: 600, c: 'tf' }) + T(445, 30, 'anode (solid)', { a: 'middle', fs: 11.5, w: 600 });
        // labels inside
        s += V(125, 100, 'R₀', { a: 'middle', c: 'terr', fs: 17 }) + N(125, 118, 'e⁻ through solid', { a: 'middle' }) + N(125, 130, 'electrode', { a: 'middle' });
        s += V(445, 100, 'R₀', { a: 'middle', c: 'terr', fs: 17 }) + N(445, 118, 'e⁻ through solid', { a: 'middle' }) + N(445, 130, 'electrode', { a: 'middle' });
        s += V(250, 150, 'R_{diff}', { a: 'middle', c: 'terr', fs: 15 }) + V(325, 150, 'R_{diff}', { a: 'middle', c: 'terr', fs: 15 });
        s += L(210, top, 210, bot, 'terr', 3) + L(360, top, 360, bot, 'terr', 3);
        s += V(214, 70, 'R_{ct}', { c: 'terr', fs: 15 }) + V(356, 70, 'R_{ct}', { a: 'end', c: 'terr', fs: 15 });
        // equivalent circuit
        const y = 222; let x = 40;
        s += dot(30, y, 'ink', 3) + L(30, y, x, y, 'ink', 1.6);
        [['R₀', 60], ['R_{ct}', 60], ['R_{diff}', 70], ['R_{ct}', 60], ['R₀', 60]].forEach((r) => { s += res(x, y, r[1], 'terr') + V(x + r[1] / 2, y - 14, r[0], { a: 'middle', fs: 13, c: 'terr' }); x += r[1]; s += L(x, y, x + 20, y, 'ink', 1.6); x += 20; });
        s += dot(x, y, 'ink', 3);
        s += N(30, y + 24, 'ohmic: R₀, R_diff   ·   chemical: R_ct   ·   the course lumps them into one R_cell = sum (5–50 mΩ)', { fs: 10.5 });
        const nt = [['R₀: e⁻ through the', 'terr'], ['solid electrodes', 'terr'], ['R_ct: Li⁺ crossing the', 'terr'], ['electrode/electrolyte', 'terr'], ['interface (a barrier)', 'terr'], ['R_diff: Li⁺ moving', 'terr'], ['through the electrolyte', 'terr'], ['', ''], ['same processes in', 'mtx'], ['charge and discharge', 'mtx'], ['→ heat either way', 'mtx'], ['(irreversible)', 'mtx']];
        nt.forEach((t, i) => { if (t[0]) s += N(556, 50 + 13 * i + (i > 1 ? 6 : 0) + (i > 4 ? 6 : 0), t[0], { fs: 10.5, c: t[1] }); });
        return W(700, 256, s);
      };

      // 7. Cell resistance vs temperature (Session 2 slide 12)
      D.tf_liion_impedance_T = () => {
        const c = chart({ x0: 70, y0: 240, w: 430, h: 200, xr: [-15, 60], yr: [0, 200], xt: [-10, 0, 10, 20, 30, 40, 50, 60], yt: [0, 50, 100, 150, 200], xl: 'T (°C)', yl: 'impedance (mΩ)' });
        const pts = [[-12, 195], [-3, 80], [5, 35], [15, 13], [25, 7], [35, 4], [45, 3], [55, 2]];
        let s = c.s + poly(pts.map((p) => [c.X(p[0]), c.Y(p[1])]), 'terr', 2.2);
        pts.forEach((p) => { s += ci(c.X(p[0]), c.Y(p[1]), 3.5, 'terr', 1.4, null, 'paper'); });
        s += N(520, 70, 'about 200 → 2:', { fs: 11 }) + N(520, 84, 'two orders of', { fs: 11 }) + N(520, 98, 'magnitude over', { fs: 11 }) + N(520, 112, 'the operating range', { fs: 11 });
        s += N(520, 144, 'cold → high R →', { fs: 11, c: 'terr' }) + N(520, 158, 'big V_OP, less power,', { fs: 11, c: 'terr' }) + N(520, 172, 'less range, more heat', { fs: 11, c: 'terr' });
        s += N(70, 294, 'slide axis reads "Impedance / Ω"; Li-ion cells are milliohm devices, so read it as mΩ', { fs: 10.5 });
        return W(680, 302, s);
      };

      // 8. Active material fraction and interface loading (Session 2 slides 6–7)
      D.tf_liion_layers = () => {
        let s = '';
        const stack = (y, ta, lab, a) => {
          let t = '', yy = y;
          [['mut', 5], ['grn', ta], ['gold', 5], ['ink', ta], ['terr', 4]].forEach((l) => { t += rect(60, yy, 300, l[1], l[0], 0.85); yy += l[1]; });
          t += L(372, y, 400, y, 'mut', 0.9, '3 3') + L(372, yy, 400, yy, 'mut', 0.9, '3 3') + A2(392, y, 392, yy, 'ink');
          t += V(404, (y + yy) / 2 + 5, 'α_{am} = ' + a, { fs: 14 }) + T(60, y - 7, lab, { fs: 12, w: 600 });
          return t;
        };
        s += stack(36, 7, 'Rate capable (many thin layers)', '14/28 = 0.5') + stack(104, 14, 'Hybrid', '28/42 = 0.67') + stack(186, 28, 'Energy dense (few thick layers)', '56/70 = 0.8');
        const keyL = [['mut', 'positive current collector (Al)'], ['grn', 'cathode (active)'], ['gold', 'separator + electrolyte'], ['ink', 'anode (active)'], ['terr', 'negative current collector (Cu)']];
        keyL.forEach((kk, i) => { s += rect(540, 40 + 18 * i, 14, 11, kk[0], 0.85) + N(560, 49 + 18 * i, kk[1], { fs: 10 }); });
        s += N(540, 150, 'thickness units: inactive', { fs: 10.5 }) + N(540, 164, 'parts = 14 in every stack;', { fs: 10.5 }) + N(540, 178, 'each electrode 7, 14, 28', { fs: 10.5 });
        s += N(540, 206, 'same C-rate → current ∝', { fs: 10.5, c: 'terr' }) + N(540, 220, 'Li stored ∝ thickness, so', { fs: 10.5, c: 'terr' }) + N(540, 234, 'energy dense pushes 28/7', { fs: 10.5, c: 'terr' }) + N(540, 248, '= 4× more e⁻ and Li⁺', { fs: 10.5, c: 'terr' }) + N(540, 262, 'per unit interface area', { fs: 10.5, c: 'terr' });
        s += N(60, 290, 'α_am = active electrode thickness / whole repeat-unit thickness (same area, so = volume fraction)', { fs: 10.5 });
        return W(740, 298, s);
      };

      // 9. Temperature rise during discharge at three C-rates, 4.8 Ah cell (Session 2 slide 14)
      D.tf_liion_temp_rise = () => {
        const c = chart({ x0: 70, y0: 250, w: 440, h: 200, xr: [0, 5], yr: [-1.2, 6], xt: [0, 1, 2, 3, 4, 5], yt: [-1, 0, 1, 2, 3, 4, 5, 6], xl: 'Q discharged (Ah)', yl: 'ΔT (°C)' });
        const a = [[0, 0], [0.5, -0.1], [1, -0.18], [1.5, -0.12], [2, 0], [2.5, 0.15], [3, 0.25], [3.5, 0.24], [4, 0.2], [4.5, 0.25], [4.7, 0.3]];
        const b = [[0, 0], [0.3, 0.5], [0.8, 0.8], [1.5, 1.0], [2, 1.1], [2.5, 1.3], [3, 1.6], [3.5, 1.8], [4, 2.0], [4.4, 2.3], [4.6, 2.5]];
        const d = [[0, 0], [0.5, 1.2], [1, 2.0], [1.5, 2.6], [2, 3.0], [2.5, 3.4], [3, 3.8], [3.5, 4.2], [4, 4.6], [4.4, 5.1], [4.6, 5.6]];
        let s = c.s + P(sp(a, c.X, c.Y), 'ink', 2.1) + P(sp(b, c.X, c.Y), 'terr', 2.1) + P(sp(d, c.X, c.Y), 'vio', 2.1);
        s += N(c.X(4.7) + 6, c.Y(0.3) + 4, '0.5 C, 2.4 A', { c: 'ink', fs: 11 }) + N(c.X(4.6) + 6, c.Y(2.5) + 4, '1 C, 4.8 A', { c: 'terr', fs: 11 }) + N(c.X(4.6) + 6, c.Y(5.6) + 4, '2 C, 9.6 A', { c: 'vio', fs: 11 });
        s += A(c.X(1.55), c.Y(-0.78), c.X(1.08), c.Y(-0.24), 'ink', 1.1) + N(c.X(1.6), c.Y(-0.72), 'dip (≈ −0.2 °C) at 0.5 C: entropic cooling beats small I²R', { fs: 10 });
        s += N(70, 302, 'cell surface temperature rise; every run ends at the 2.7 V lower limit · after Session 2 slide 14', { fs: 10.5 });
        return W(650, 310, s);
      };

      // 10. Entropic coefficient vs SOC (Session 2 slide 18) with the sign of the reversible heat
      D.tf_liion_entropic = () => {
        const c = chart({ x0: 80, y0: 250, w: 440, h: 210, xr: [0, 100], yr: [-0.4, 0.3], xt: [0, 20, 40, 60, 80, 100], yt: [-0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3], yf: (t) => t.toFixed(1), xl: 'SOC (%)', yl: 'dE₀/dT (mV/K)' });
        const pts = [[8, -0.33], [12, -0.13], [17, -0.11], [21, -0.075], [25, -0.06], [29, -0.055], [33, 0.03], [37, 0.12], [41, 0.15], [45, 0.17], [49, 0.2], [53, 0.195], [56, 0.17], [59, 0.06], [63, 0.05], [67, 0.05], [71, 0.08], [75, 0.09], [79, 0.075], [83, 0.08], [87, 0.1], [91, 0.11], [95, 0.12]];
        let s = rect(c.X(0), c.Y(0), c.X(100) - c.X(0), c.Y(-0.4) - c.Y(0), 'terr', 0.08) + rect(c.X(0), c.Y(0.3), c.X(100) - c.X(0), c.Y(0) - c.Y(0.3), 'tf', 0.08);
        s += c.s + L(c.X(0), c.Y(0), c.X(100), c.Y(0), 'ink', 1.3) + poly(pts.map((p) => [c.X(p[0]), c.Y(p[1])]), 'vio', 2);
        pts.forEach((p) => { s += dot(c.X(p[0]), c.Y(p[1]), 'vio', 2.6); });
        s += N(540, 66, 'dE₀/dT &gt; 0:', { fs: 11, c: 'tf', w: 600 }) + N(540, 80, 'discharge → cooling', { fs: 11, c: 'tf' }) + N(540, 94, 'charge → heating', { fs: 11, c: 'tf' });
        s += N(540, 190, 'dE₀/dT &lt; 0:', { fs: 11, c: 'terr', w: 600 }) + N(540, 204, 'discharge → heating', { fs: 11, c: 'terr' }) + N(540, 218, 'charge → cooling', { fs: 11, c: 'terr' });
        s += N(80, 302, 'measured by stepping the cell temperature and logging OCV at many SOCs; values read off slide 18 (approx.)', { fs: 10.5 });
        return W(700, 310, s);
      };

      // 11. Energy flows round one charge–discharge cycle (Session 2 slides 33–35)
      D.tf_liion_cycle_energy = () => {
        const sc = 3.6, x0 = 150;
        let s = '';
        s += T(20, 62, 'charge', { fs: 12.5, w: 600 }) + N(20, 76, 'electrical in', {}) + N(20, 88, '= 110 Wh', {});
        s += rect(x0, 46, 100 * sc, 34, 'tf', 0.55, 'tf') + rect(x0 + 100 * sc, 46, 10 * sc, 34, 'terr', 0.6, 'terr');
        s += T(x0 + 50 * sc, 68, 'stored as chemical energy: w_{cell,nom} = 100 Wh', { a: 'middle', fs: 11.5 }) + N(x0 + 105 * sc, 40, 'q_charge', { a: 'middle', c: 'terr' }) + N(x0 + 105 * sc, 96, '10 Wh', { a: 'middle', c: 'terr' });
        s += T(20, 152, 'discharge', { fs: 12.5, w: 600 }) + N(20, 166, 'chemical store', {}) + N(20, 178, '= 100 Wh', {});
        s += rect(x0, 136, 80 * sc, 34, 'grn', 0.55, 'grn') + rect(x0 + 80 * sc, 136, 20 * sc, 34, 'terr', 0.6, 'terr');
        s += T(x0 + 40 * sc, 158, 'electrical out = 100 − 20 = 80 Wh', { a: 'middle', fs: 11.5 }) + N(x0 + 90 * sc, 130, 'q_discharge', { a: 'middle', c: 'terr' }) + N(x0 + 90 * sc, 186, '20 Wh', { a: 'middle', c: 'terr' });
        s += L(x0 + 100 * sc, 30, x0 + 100 * sc, 196, 'mut', 1, '4 3');
        s += V(330, 222, 'η_{cycle} = (w_{nom} − q_{dis}) / (w_{nom} + q_{ch}) = 80/110 = 0.73', { a: 'middle', fs: 14 });
        return W(620, 234, s);
      };

      // 12. A 4S3P pack (Session 2 slides 40–41)
      const pack = (ans) => {
        let s = '';
        const xs = [110, 190, 270], ys = [64, 110, 156, 202];
        s += L(xs[0] + 20, 48, xs[2] + 20, 48, 'ink', 3) + L(xs[0] + 20, 252, xs[2] + 20, 252, 'ink', 3);
        s += L(190 + 20, 48, 210, 22, 'ink', 2) + L(210, 252, 210, 278, 'ink', 2) + T(222, 28, '+', { fs: 16, w: 700 }) + T(222, 278, '−', { fs: 16, w: 700 });
        xs.forEach((x) => {
          s += L(x + 20, 48, x + 20, ys[0], 'ink', 1.6) + L(x + 20, ys[3] + 34, x + 20, 252, 'ink', 1.6);
          ys.forEach((y, j) => { s += R(x, y, 40, 34, 'tint', 'ink', 1.4, null, 3) + N(x + 20, y + 13, '+', { a: 'middle', fs: 11, c: 'ink' }) + N(x + 20, y + 29, '−', { a: 'middle', fs: 11, c: 'ink' }); if (j < 3) s += L(x + 20, y + 34, x + 20, ys[j + 1], 'ink', 1.6); });
        });
        s += R(100, 56, 60, 188, null, 'gold', 1.5, '5 4', 6) + N(130, 268, 'series string', { a: 'middle', c: 'gold' });
        s += N(330, 44, '← busbar', { c: 'mtx' }) + N(330, 256, '← busbar', { c: 'mtx' });
        s += T(420, 80, '4S3P = 4 in series × 3 strings', { fs: 12.5, w: 600 });
        if (!ans) return W(700, 290, s + N(420, 112, 'each cell: 3.6 V, 75 Ah', { fs: 11.5 }));
        s += V(420, 112, 'V_{pack} = 4 × 3.6 = 14.4 V', { fs: 14 }) + N(420, 128, 'series adds voltage', {});
        s += V(420, 160, 'Q_{pack} = 3 × 75 = 225 Ah', { fs: 14 }) + N(420, 176, 'parallel adds capacity', {});
        s += V(420, 208, 'w_{pack} = 14.4 × 225 = 3240 Wh', { fs: 14 }) + N(420, 224, '= 12 cells × 270 Wh each', {});
        return W(700, 290, s);
      };
      D.tf_liion_pack = () => pack(true);
      D.tf_liion_pack_q = () => pack(false);

      // 13. NMC vs LFP open-circuit voltage curves (Session 2 slide 30)
      const ocvChart = (win) => {
        const c = chart({ x0: 70, y0: 260, w: 470, h: 220, xr: [0, 100], yr: [2.7, 4.3], rev: true, xt: [100, 80, 60, 40, 20, 0], yt: [2.8, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0, 4.2], yf: (t) => t.toFixed(1), xl: 'SOC (%)', yl: 'OCV (V)' });
        let s = c.s + P(sp(NMC, c.X, c.Y), 'tf', 2.4) + P(sp(LFP, c.X, c.Y), 'terr', 2.4);
        s += T(c.X(62), c.Y(3.9), 'NMC | graphite', { fs: 12, c: 'tf', w: 600 }) + T(c.X(62), win ? c.Y(2.95) : c.Y(3.2) - 8, 'LFP | graphite', { fs: 12, c: 'terr', w: 600 });
        if (!win) {
          s += L(c.X(100), c.Y(3.7), c.X(0), c.Y(3.7), 'tf', 1.1, '5 4') + L(c.X(100), c.Y(3.1), c.X(0), c.Y(3.1), 'terr', 1.1, '5 4');
          s += N(c.X(0) + 10, c.Y(3.7) + 4, 'NMC nominal 3.7 V', { c: 'tf' }) + N(c.X(0) + 10, c.Y(3.1) + 4, 'LFP nominal 3.1 V', { c: 'terr' });
          s += N(c.X(0) + 10, c.Y(4.1), 'sloping: each 0.1 V', { fs: 10.5 }) + N(c.X(0) + 10, c.Y(4.1) + 13, 'trimmed ≈ 10% SOC', { fs: 10.5 }) + N(c.X(0) + 10, c.Y(2.9), 'flat plateau,', { fs: 10.5 }) + N(c.X(0) + 10, c.Y(2.9) + 13, 'steep ends', { fs: 10.5 });
        } else {
          const v = 30 / 9;
          s += L(c.X(100), c.Y(v), c.X(0), c.Y(v), 'ink', 1.3, '6 3') + L(c.X(100), c.Y(4.0), c.X(0), c.Y(4.0), 'mut', 1.3, '6 3');
          s += N(c.X(0) + 10, c.Y(v) - 2, '3.33 V = 30/9 (NMC 9s floor)', { fs: 10.5 }) + N(c.X(0) + 10, c.Y(v) + 11, '  = 40/12 (LFP 12s cap)', { fs: 10.5 });
          s += N(c.X(0) + 10, c.Y(4.0) + 4, '4.0 V = 40/10 (NMC 10s cap)', { fs: 10.5 });
          s += A(c.X(3) + 30, c.Y(3.1) + 4, c.X(3) + 4, c.Y(3.3), 'ink', 1.2) + N(c.X(3) + 32, c.Y(3.1) + 14, 'NMC: last ≈ 4% lost', { fs: 10.5 });
          s += A(c.X(97) - 2, c.Y(3.55), c.X(99.5) + 2, c.Y(3.35), 'ink', 1.2) + N(c.X(97), c.Y(3.55) - 4, 'LFP: top ≈ 0.5% lost', { fs: 10.5 });
          s += N(c.X(66), c.Y(4.16), 'NMC 10s: everything above 4.0 V (≈ 20% SOC) lost', { fs: 10.5 });
        }
        return W(740, 304, s);
      };
      D.tf_liion_nmc_lfp = () => ocvChart(false);
      D.tf_liion_pack_window = () => ocvChart(true);
    }
