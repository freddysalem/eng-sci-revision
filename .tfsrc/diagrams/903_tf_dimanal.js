    // ===================== Topic 3 · The dimensional analysis method (r1 professor fixes) =====================
    {
      // C_f–Re data-collapse plot for Topic 3 only (tf_cf_re is shared with Topic 4, so this is a new key).
      // Axis label moved clear of the 10^7 tick; y-axis states the wall-shear (Fanning) definition.
      D.tf_cf_re_da = () => {
        const x0 = 78, y0 = 262, w = 480, h = 210;
        const X = (re) => x0 + (lg(re) - 1) / 6 * w, Y = (cf) => y0 - (lg(cf) + 3) / 2 * h;
        let s = R(X(2000), Y(0.1), X(4000) - X(2000), Y(0.001) - Y(0.1), 'url(#tf-hatch)') + axes(x0, y0, w, h, null, null);
        s += T(x0 + w + 22, y0 + 5, 'Re', { serif: true, fs: 15 });
        s += T(x0 - 8, y0 - h - 20, 'C_f = τ_w / ½ρu_m²', { serif: true, fs: 13.5 });
        [1, 2, 3, 4, 5, 6, 7].forEach((k) => { s += tick(X(Math.pow(10, k)), y0, '10' + sup(k)); });
        [-3, -2, -1].forEach((k) => { s += tick(x0, Y(Math.pow(10, k)), '10' + sup(k), true); });
        s += poly(fn((t) => { const re = Math.pow(10, t); return [X(re), Y(16 / re)]; }, lg(160), lg(2300), 30), 'tf', 2.2);
        const prandtl = (re) => { let f = 0.02; for (let i = 0; i < 40; i++) f = Math.pow(2 * lg(re * Math.sqrt(f)) - 0.8, -2); return f / 4; };
        s += poly(fn((t) => { const re = Math.pow(10, t); return [X(re), Y(prandtl(re))]; }, lg(3000), 7, 60), 'terr', 2.2);
        s += poly(fn((t) => { const re = Math.pow(10, t); return [X(re), Y(0.079 * Math.pow(re, -0.25))]; }, lg(4000), 7, 40), 'ink', 1.4, '6 4');
        s += V(X(300) + 8, Y(16 / 300) - 6, 'C_f = 16/Re', { c: 'tf', fs: 14 }) + N(X(400), Y(0.0012), 'laminar', { a: 'middle', c: 'tf' }) + N(X(2830), Y(0.13) - 4, 'transition', { a: 'middle' }) + N(X(1e5), Y(0.03), 'turbulent', { a: 'middle', c: 'terr' });
        s += N(X(2e5), Y(0.0055), 'smooth pipe (experiment)', { c: 'terr' }) + N(X(6e4), Y(0.0016), 'Blasius 0.079 Re^-1/4 (dashed)', { c: 'ink', a: 'middle' });
        s += N(x0 + w / 2, y0 + 40, 'smooth pipe (e/D → 0), fully developed flow: l/D factored out of Δp', { a: 'middle' });
        return W(620, 312, s);
      };

      // Nu collapse plot — x-axis label moved to the right of the arrow so it no longer hits the 10^6 tick.
      D.tf_nu_collapse = () => {
        const X = (re) => 70 + (lg(re) - 3) / 3 * 400, Y = (v) => 240 - lg(v) / 3 * 200;
        let s = axes(70, 240, 400, 200, null, 'Nu Pr' + sup('−0.4'));
        s += T(70 + 400 + 22, 245, 'Re', { serif: true, fs: 15 });
        [3, 4, 5, 6].forEach((k) => { s += tick(X(Math.pow(10, k)), 240, '10' + sup(k)); }); [0, 1, 2, 3].forEach((k) => { s += tick(70, Y(Math.pow(10, k)), ['1', '10', '100', '1000'][k], true); });
        let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 - 0.5; };
        for (let i = 0; i < 46; i++) { const t = 3.1 + 2.85 * i / 45, re = Math.pow(10, t); const base = re > 1e4 ? 0.023 * Math.pow(re, 0.8) : (re < 2300 ? 4.36 * Math.pow(re / 2300, 0.15) : 4.36 + (0.023 * Math.pow(1e4, 0.8) - 4.36) * (lg(re) - lg(2300)) / (4 - lg(2300))); s += dot(X(re), Y(base * Math.pow(10, rnd() * 0.12)), 'tf', 2.6); }
        s += poly(fn((t) => [X(Math.pow(10, t)), Y(0.023 * Math.pow(10, 0.8 * t))], 4, 6, 10), 'terr', 2);
        s += L(X(2300), 40, X(2300), 240, 'mut', 1, '4 3') + L(X(1e4), 40, X(1e4), 240, 'mut', 1, '4 3') + N((X(2300) + X(1e4)) / 2, 58, 'transition', { a: 'middle' }) + N(X(1e5), 58, 'turbulent', { a: 'middle' });
        s += V(X(1.6e5), Y(0.023 * Math.pow(1.6e5, 0.8)) + 30, 'Nu Pr' + sup('−0.4') + ' = 0.023 Re' + sup('0.8'), { c: 'terr', fs: 13.5 });
        s += N(470, 284, 'Re = ρU l/μ,  l = pipe diameter', { a: 'end' });
        return W(540, 294, s);
      };

      // Blast wave — R(t) label moved off the arrowhead, ρ label moved clear of it, slope written with K (not K²).
      D.tf_blast = () => {
        let s = L(30, 190, 290, 190, 'ink', 2.2) + R(30, 190, 260, 10, 'url(#tf-hatch)');
        [44, 78, 112].forEach((r, i) => { s += P('M ' + (160 - r) + ' 190 A ' + r + ' ' + r + ' 0 0 1 ' + (160 + r) + ' 190', i === 2 ? 'terr' : 'mut', i === 2 ? 2.2 : 1.2, null, i === 2 ? null : '4 3'); });
        s += '<path d="M 116 190 A 44 44 0 0 1 204 190 Z" fill="' + gold + '" fill-opacity="0.35"></path>';
        const tx = 160 + 112 * Math.cos(-0.9), ty = 190 + 112 * Math.sin(-0.9);
        s += A(160, 190, tx, ty, 'ink', 1.6) + V(tx + 10, ty - 6, 'R(t)') + V(150, 182, 'E', { fs: 14 }) + V(34, 60, 'ρ (still air)', { c: 'grn', fs: 13 });
        const X = (t) => 360 + t * 200, Y = (r) => 190 - r * 150;
        s += axes(360, 190, 200, 150, 't', 'R' + sup('5/2'));
        for (let i = 1; i <= 7; i++) s += dot(X(i / 7.5), Y(i / 7.5 * 0.95 + 0.01 * Math.sin(i * 3)), 'tf', 3);
        s += L(X(0), Y(0), X(1), Y(0.95), 'terr', 1.6) + N(X(0.58), Y(0.4), 'slope = (E/Kρ)' + sup('1/2'), { c: 'terr' });
        return W(590, 215, s);
      };

      // Forced-convection sketch — l labelled as the pipe diameter; ΔT defined (wall − bulk) so θ and ΔT are not confused.
      D.tf_convection_cv = () => {
        let s = P('M 120 50 L 470 50 A 18 60 0 0 1 470 170 L 120 170 A 18 60 0 0 1 120 50 Z', 'tf', 1.6, 'tint') + P('M 120 50 A 18 60 0 0 0 120 170', 'tf', 1.2, null, '4 3');
        s += A(30, 110, 100, 110, 'tf', 2.2) + V(50, 100, 'U', { c: 'tf' }) + cl(100, 110, 510);
        s += T(295, 88, 'fluid temperature θ', { a: 'middle', fs: 12 }) + V(295, 120, 'ρ, μ, C_p, k', { a: 'middle', fs: 14, c: 'grn' });
        s += A2(510, 50, 510, 170, 'gold') + V(520, 108, 'l', { c: 'gold' }) + N(520, 126, '(pipe', { c: 'gold' }) + N(520, 140, 'diameter)', { c: 'gold' });
        s += PA('M 300 172 Q 292 182 300 192 Q 308 202 300 212 Q 292 222 300 232', 'terr', 1.8) + V(312, 228, 'Q̇', { c: 'terr' }) + V(380, 214, 'Q̇ = hAΔT', { fs: 14 }) + N(380, 234, 'ΔT = wall − fluid temperature');
        return W(600, 250, s);
      };
    }
