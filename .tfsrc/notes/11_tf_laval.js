{
  key: 'tf_laval', area: 'comp', num: '11', week: 'Week 5',
  name: 'Converging–Diverging (Laval) Nozzles',
  triggers: 'supersonic wind tunnel · rocket nozzle · throat and exit · design pressure ratio · over-/under-expanded · shock in the nozzle · where is the shock? · back pressure p₂, p₃, p₄ · area ratio A/A* · two roots of area–Mach · exit Mach from back pressure · thrust = ṁu_e + (p_e − p_b)A_e',
  sections: [
    {
      num: '', title: 'Revision Objectives — Converging–Diverging Nozzles',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Explain how a **Laval nozzle** produces supersonic flow and where $M = 1$ occurs.`,
          R`Describe the nozzle's behaviour as the back pressure falls: **all subsonic → shock in the nozzle → over-expanded → design → under-expanded**.`,
          R`Use the isentropic relations, the mass-flow relation and the **area–Mach relation** $A/A^*$ between throat and exit — and pick the right (subsonic or supersonic) root.`,
          R`Calculate the critical back pressures $p_2$, $p_3$, $p_4$ for a given area ratio, and **locate a normal shock** in the diverging section.`,
          R`Solve rocket and wind-tunnel problems: throat conditions, exit Mach number, exit speed, thrust (including the pressure term), area ratio.`
        ]]
      ]
    },
    {
      num: '11.1', title: 'How to Make a Supersonic Flow',
      blocks: [
        ['list', R`Recap from Topic 10 (Converging Nozzles):`, false, [
          R`Subsonic flow speeds up in a **converging** duct; supersonic flow speeds up in a **diverging** one. As speed rises, pressure falls.`,
          R`$M = 1$ only at the **minimum-area** section ($dA = 0$). When $M = 1$ there the nozzle is **choked**: no information travels upstream, so the mass flow can't increase any more.`
        ]],
        ['para', R`So a **converging–diverging (Laval) nozzle** fed from stagnation conditions $p_0$, $T_0$ accelerates gas to $M = 1$ at the **throat** and, if the back pressure $p_b$ is low enough, on to **supersonic** speed in the diverging section. Applications: rockets, gas turbines, steam turbines, supersonic wind tunnels.`],
        ['svg', 'tf_cd_nozzle', 'Laval nozzle: subsonic in the converging part, M = 1 at the throat (area A*), supersonic in the diverging part when the back pressure is low enough.'],
        ['warn', 'Note', [
          R`**Notation used in these notes.** $p_0, T_0$ = reservoir (stagnation) conditions; $p_t, T_t, M_t, A_t$ = throat; $p_e, M_e, A_e$ = the **exit plane** of the nozzle; $p_b$ = the **back (ambient) pressure** the nozzle discharges into. $A^*$ = the area where $M$ would be exactly 1 (equal to $A_t$ when the throat is choked).`,
          R`The lecture slides write the "end conditions" as $p_e$ and use it for the back pressure. Inside the nozzle the two are equal only when the exit is subsonic or matched; for an over- or under-expanded jet the exit-plane pressure is $p_3 \neq p_b$. That is why these notes keep $p_b$ and $p_e$ separate.`
        ]],
        ['para', R`**Isentropic relations (Topic 9).** Wherever there is no shock, the flow is isentropic with the same $p_0$ and $T_0$, so at every station:`],
        ['disp', [ R`\boxed{\begin{aligned} \frac{T_0}{T} &= 1 + \frac{\gamma-1}{2}M^2 \\[4pt] \frac{p_0}{p} &= \left(\frac{T_0}{T}\right)^{\gamma/(\gamma-1)} \\[4pt] \frac{\rho_0}{\rho} &= \left(\frac{T_0}{T}\right)^{1/(\gamma-1)} \end{aligned}} \tag{11.1}` ]],
        ['para', R`Substituting the first line into the other two gives the explicit forms $\dfrac{p_0}{p} = \left(1 + \dfrac{\gamma-1}{2}M^2\right)^{\gamma/(\gamma-1)}$ and $\dfrac{\rho_0}{\rho} = \left(1 + \dfrac{\gamma-1}{2}M^2\right)^{1/(\gamma-1)}$. Their versions for air and for $\gamma = 1.2$ are in the table below.`],
        ['eq', [
          ['(11.1) for air', R`\frac{T_0}{T} = 1 + 0.2M^2,\quad \frac{p_0}{p} = (1 + 0.2M^2)^{3.5}`, '[–]', 'γ = 1.4: (γ−1)/2 = 0.2, γ/(γ−1) = 3.5.'],
          ['(11.1) for γ = 1.2', R`\frac{T_0}{T} = 1 + 0.1M^2,\quad \frac{p_0}{p} = (1 + 0.1M^2)^{6}`, '[–]', 'Rocket gas in Example 2: (γ−1)/2 = 0.1, γ/(γ−1) = 6.'],
          ['Mach number from a pressure ratio', R`M = \sqrt{\frac{2}{\gamma-1}\left[\left(\frac{p_0}{p}\right)^{(\gamma-1)/\gamma} - 1\right]}`, '[–]', 'Inverse of (11.1). Air: M = √(5[(p₀/p)^{1/3.5} − 1]).'],
          ['Critical pressure ratio', R`\frac{p^*}{p_0} = \left(\frac{2}{\gamma+1}\right)^{\gamma/(\gamma-1)}`, '[–]', 'M = 1. Air: 0.528. γ = 1.2: 0.564.'],
          ['Critical temperature ratio', R`\frac{T^*}{T_0} = \frac{2}{\gamma+1}`, '[–]', 'Air: 0.833. γ = 1.2: 0.909.']
        ]],
        ['deriv', 'Derivation — mass flow at any section in terms of M', [
          ['t', R`Start from $\dot m = \rho uA$ with $u = Ma$, $a = \sqrt{\gamma RT}$ and $\rho = p/RT$:`],
          ['m', R`\dot m = \frac{p}{RT}\,A\,M\sqrt{\gamma RT} = pAM\sqrt{\frac{\gamma}{RT}}`],
          ['t', R`To write it with reservoir values, use $\rho a = \sqrt{\gamma p\rho}$ and the isentropic link $\rho/\rho_0 = (p/p_0)^{1/\gamma}$, with $\rho_0 = p_0/RT_0$:`],
          ['m', R`\rho a = \left[\gamma\rho_0p_0\left(\frac{p}{p_0}\right)\left(\frac{p}{p_0}\right)^{1/\gamma}\right]^{1/2} = \left[\frac{\gamma p_0^2}{RT_0}\left(\frac{p}{p_0}\right)^{\frac{\gamma+1}{\gamma}}\right]^{1/2}`],
          ['t', R`So $\dot m = AM\rho a$ gives the lecture's form (11.2). Putting $M = 1$, $p/p_0 = (2/(\gamma+1))^{\gamma/(\gamma-1)}$ gives the choked (maximum) flow (11.3), $\dot m_{max} = 0.0404\,A_tp_0/\sqrt{T_0}$ for air. (This is the same result as (10.4) in Topic 10, Converging Nozzles, restated here so you don't need to look it up.)`]
        ]],
        ['disp', [ R`\boxed{\dot m = pAM\sqrt{\frac{\gamma}{RT}} = AM\left[\frac{\gamma p_0^2}{RT_0}\left(\frac{p}{p_0}\right)^{(\gamma+1)/\gamma}\right]^{1/2}} \tag{11.2}` ]],
        ['disp', [ R`\boxed{\dot m_{max} = \left[\frac{\gamma}{R}\left(\frac{2}{\gamma+1}\right)^{(\gamma+1)/(\gamma-1)}\right]^{1/2}\frac{A_tp_0}{\sqrt{T_0}} = 0.0404\,\frac{A_tp_0}{\sqrt{T_0}}\ \ \text{(air)}} \tag{11.3}` ]],
        ['deriv', 'Derivation — area–Mach relation from mass conservation', [
          ['t', R`In isentropic flow $\dot m$, $p_0$ and $T_0$ are the same at every section. Substitute $p/p_0$ and $T$ from (11.1) into $\dot m = pAM\sqrt{\gamma/RT}$:`],
          ['m', R`\dot m = \sqrt{\frac{\gamma}{RT_0}}\;p_0\,A\,M\left(1 + \frac{\gamma-1}{2}M^2\right)^{-\frac{\gamma+1}{2(\gamma-1)}}`],
          ['t', R`Write this at a general section ($A$, $M$) and at the sonic section ($A^*$, $M = 1$), then divide. Everything except area and Mach number cancels:`],
          ['m', R`\frac{A}{A^*} = \frac{1}{M}\left[\frac{1 + \frac{\gamma-1}{2}M^2}{\frac{\gamma+1}{2}}\right]^{\frac{\gamma+1}{2(\gamma-1)}}`],
          ['t', R`**Why the minimum is at $M = 1$:** from the momentum and continuity equations ((10.2) in Topic 10, Converging Nozzles), $\dfrac{dA}{A} = (M^2 - 1)\dfrac{du}{u}$. With the flow accelerating ($du > 0$), $dA < 0$ while $M < 1$ and $dA > 0$ once $M > 1$, so the area passes through a minimum exactly where $M = 1$. The curve $A/A^*(M)$ below has that minimum, $A/A^* = 1$.`]
        ]],
        ['disp', [ R`\boxed{\frac{A}{A^*} = \frac{1}{M}\left[\frac{2}{\gamma+1}\left(1 + \frac{\gamma-1}{2}M^2\right)\right]^{n}} \tag{11.4}`, R`\boxed{n = \frac{\gamma+1}{2(\gamma-1)}\ \ (= 3\ \text{air},\ 5.5\ \text{for}\ \gamma = 1.2)}` ]],
        ['svg', 'tf_area_mach', 'A/A* against M. Every A/A* > 1 has two roots: a subsonic one and a supersonic one. The converging part always uses the subsonic root; in the diverging part the operating regime (back pressure) decides.'],
        ['eq', [
          ['Area–Mach relation', R`\frac{A}{A^*} = \frac{1}{M}\left[\frac{2}{\gamma+1}\left(1 + \frac{\gamma-1}{2}M^2\right)\right]^{n}`, '[–]', 'Exponent n = (γ+1)/(2(γ−1)) = 3 for air, 5.5 for γ = 1.2. A* = area where M = 1 (the throat, when choked). Two solutions for each A/A* > 1: one subsonic, one supersonic.'],
          ['Area–Mach, air', R`\frac{A}{A^*} = \frac{1}{M}\left(\frac{1 + 0.2M^2}{1.2}\right)^{3}`, '[–]', 'γ = 1.4.'],
          ['Area–Mach, γ = 1.2', R`\frac{A}{A^*} = \frac{1}{M}\left(\frac{1 + 0.1M^2}{1.1}\right)^{5.5}`, '[–]', 'Rocket gas in Example 2.'],
          ['Area ratio from states', R`\frac{A_e}{A_t} = \frac{\rho_t u_t}{\rho_e u_e} = \frac{p_t}{p_e}\,\frac{T_e}{T_t}\,\frac{u_t}{u_e}`, '[–]', 'Mass conservation with ρ = p/RT. (Mass flow (11.2) and choked flow (11.3) are boxed above.)']
        ]],
        ['warn', 'When to use', [
          R`**Solving the area–Mach relation for $M$.** It can't be rearranged for $M$, so: (i) read the table below and interpolate; (ii) bisect on a calculator/spreadsheet — for the subsonic root search $0 < M < 1$, for the supersonic root $M > 1$; or (iii) iterate. Always check the root by putting it back into (11.4).`,
          R`**Which root?** Upstream of the throat the flow is always subsonic. Downstream, take the **supersonic** root if the flow is supersonic there (design, over-/under-expanded, or upstream of a shock) and the **subsonic** root if the nozzle is unchoked or you are downstream of a shock.`
        ]],
        ['para', R`**Isentropic and normal-shock table, air ($\gamma = 1.4$).** Normal-shock columns (Topic 12) give the state just downstream ($M_2$, $p_2/p_1$) and the stagnation-pressure ratio $p_{02}/p_{01}$ for an upstream Mach number $M$. Use it to **identify the regime, bracket a root or get a starting guess** — the steps are coarse (0.1 below $M = 1$, 0.2 above), so for answers to 3 s.f. solve the formula itself (bisection on (11.4), or the normal-shock relations). It is for air only: for other $\gamma$ (e.g. the rocket gas, $\gamma = 1.2$) use the general forms in the equation box.`],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:640px;font-size:13px;margin:4px 0;font-family:\'JetBrains Mono\',monospace;color:var(--k3A332B)"><thead><tr style="text-align:right;color:var(--k8C8273)"><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">M</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">A/A*</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">p/p₀</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">T/T₀</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">shock M₂</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">p₂/p₁</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">p₀₂/p₀₁</th></tr></thead><tbody><tr style="text-align:right"><td style="padding:4px 8px">0.1</td><td style="padding:4px 8px">5.822</td><td style="padding:4px 8px">0.9930</td><td style="padding:4px 8px">0.9980</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td></tr><tr style="text-align:right"><td style="padding:4px 8px">0.2</td><td style="padding:4px 8px">2.964</td><td style="padding:4px 8px">0.9725</td><td style="padding:4px 8px">0.9921</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td></tr><tr style="text-align:right"><td style="padding:4px 8px">0.3</td><td style="padding:4px 8px">2.035</td><td style="padding:4px 8px">0.9395</td><td style="padding:4px 8px">0.9823</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td></tr><tr style="text-align:right"><td style="padding:4px 8px">0.4</td><td style="padding:4px 8px">1.590</td><td style="padding:4px 8px">0.8956</td><td style="padding:4px 8px">0.9690</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td></tr><tr style="text-align:right"><td style="padding:4px 8px">0.5</td><td style="padding:4px 8px">1.340</td><td style="padding:4px 8px">0.8430</td><td style="padding:4px 8px">0.9524</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td></tr><tr style="text-align:right"><td style="padding:4px 8px">0.6</td><td style="padding:4px 8px">1.188</td><td style="padding:4px 8px">0.7840</td><td style="padding:4px 8px">0.9328</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td></tr><tr style="text-align:right"><td style="padding:4px 8px">0.7</td><td style="padding:4px 8px">1.094</td><td style="padding:4px 8px">0.7209</td><td style="padding:4px 8px">0.9107</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td></tr><tr style="text-align:right"><td style="padding:4px 8px">0.8</td><td style="padding:4px 8px">1.038</td><td style="padding:4px 8px">0.6560</td><td style="padding:4px 8px">0.8865</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td></tr><tr style="text-align:right"><td style="padding:4px 8px">0.9</td><td style="padding:4px 8px">1.009</td><td style="padding:4px 8px">0.5913</td><td style="padding:4px 8px">0.8606</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td><td style="padding:4px 8px">—</td></tr><tr style="text-align:right;border-top:1px solid var(--kE7E0D0)"><td style="padding:4px 8px">1.0</td><td style="padding:4px 8px">1.000</td><td style="padding:4px 8px">0.5283</td><td style="padding:4px 8px">0.8333</td><td style="padding:4px 8px">1.000</td><td style="padding:4px 8px">1.000</td><td style="padding:4px 8px">1.000</td></tr><tr style="text-align:right"><td style="padding:4px 8px">1.2</td><td style="padding:4px 8px">1.030</td><td style="padding:4px 8px">0.4124</td><td style="padding:4px 8px">0.7764</td><td style="padding:4px 8px">0.842</td><td style="padding:4px 8px">1.513</td><td style="padding:4px 8px">0.993</td></tr><tr style="text-align:right"><td style="padding:4px 8px">1.4</td><td style="padding:4px 8px">1.115</td><td style="padding:4px 8px">0.3142</td><td style="padding:4px 8px">0.7184</td><td style="padding:4px 8px">0.740</td><td style="padding:4px 8px">2.120</td><td style="padding:4px 8px">0.958</td></tr><tr style="text-align:right"><td style="padding:4px 8px">1.6</td><td style="padding:4px 8px">1.250</td><td style="padding:4px 8px">0.2353</td><td style="padding:4px 8px">0.6614</td><td style="padding:4px 8px">0.668</td><td style="padding:4px 8px">2.820</td><td style="padding:4px 8px">0.895</td></tr><tr style="text-align:right"><td style="padding:4px 8px">1.8</td><td style="padding:4px 8px">1.439</td><td style="padding:4px 8px">0.1740</td><td style="padding:4px 8px">0.6068</td><td style="padding:4px 8px">0.617</td><td style="padding:4px 8px">3.613</td><td style="padding:4px 8px">0.813</td></tr><tr style="text-align:right"><td style="padding:4px 8px">2.0</td><td style="padding:4px 8px">1.688</td><td style="padding:4px 8px">0.1278</td><td style="padding:4px 8px">0.5556</td><td style="padding:4px 8px">0.577</td><td style="padding:4px 8px">4.500</td><td style="padding:4px 8px">0.721</td></tr><tr style="text-align:right"><td style="padding:4px 8px">2.2</td><td style="padding:4px 8px">2.005</td><td style="padding:4px 8px">0.0935</td><td style="padding:4px 8px">0.5081</td><td style="padding:4px 8px">0.547</td><td style="padding:4px 8px">5.480</td><td style="padding:4px 8px">0.628</td></tr><tr style="text-align:right"><td style="padding:4px 8px">2.4</td><td style="padding:4px 8px">2.403</td><td style="padding:4px 8px">0.0684</td><td style="padding:4px 8px">0.4647</td><td style="padding:4px 8px">0.523</td><td style="padding:4px 8px">6.553</td><td style="padding:4px 8px">0.540</td></tr><tr style="text-align:right"><td style="padding:4px 8px">2.6</td><td style="padding:4px 8px">2.896</td><td style="padding:4px 8px">0.0501</td><td style="padding:4px 8px">0.4252</td><td style="padding:4px 8px">0.504</td><td style="padding:4px 8px">7.720</td><td style="padding:4px 8px">0.460</td></tr><tr style="text-align:right"><td style="padding:4px 8px">2.8</td><td style="padding:4px 8px">3.500</td><td style="padding:4px 8px">0.0368</td><td style="padding:4px 8px">0.3894</td><td style="padding:4px 8px">0.488</td><td style="padding:4px 8px">8.980</td><td style="padding:4px 8px">0.390</td></tr><tr style="text-align:right"><td style="padding:4px 8px">3.0</td><td style="padding:4px 8px">4.235</td><td style="padding:4px 8px">0.0272</td><td style="padding:4px 8px">0.3571</td><td style="padding:4px 8px">0.475</td><td style="padding:4px 8px">10.33</td><td style="padding:4px 8px">0.328</td></tr><tr style="text-align:right"><td style="padding:4px 8px">3.5</td><td style="padding:4px 8px">6.790</td><td style="padding:4px 8px">0.0131</td><td style="padding:4px 8px">0.2899</td><td style="padding:4px 8px">0.451</td><td style="padding:4px 8px">14.12</td><td style="padding:4px 8px">0.213</td></tr></tbody></table>']
      ]
    },
    {
      num: '11.2', title: 'Operating Regimes as the Back Pressure Falls',
      blocks: [
        ['para', R`Fix the reservoir ($p_0$, $T_0$) and the nozzle ($A_e/A_t$), and lower the back pressure $p_b$. Three **critical back pressures** separate the regimes:`],
        ['list', null, false, [
          R`**$p_2$** — the exit pressure of isentropic flow that is sonic at the throat and **subsonic** in the diverging part: take the **subsonic** root $M_{e,sub}$ of $A_e/A_t$, then $p_2 = p_0\,(p/p_0)_{M_{e,sub}}$. For $p_b \geq p_2$ the nozzle is not choked (only just choked at $p_2$).`,
          R`**$p_3$** — the exit pressure of isentropic flow that stays **supersonic** to the exit: take the **supersonic** root $M_{e,sup}$, then $p_3 = p_0\,(p/p_0)_{M_{e,sup}}$. $p_0/p_3$ is the **design pressure ratio**.`,
          R`**$p_4$** — the back pressure that puts a **normal shock exactly at the exit plane**: $p_4 = p_3\,(p_2/p_1)_{\text{shock at }M_{e,sup}}$, with $\frac{p_2}{p_1} = 1 + \frac{2\gamma}{\gamma+1}(M^2 - 1)$. Always $p_3 < p_4 < p_2$.`
        ]],
        ['svg', 'tf_laval_regimes', 'Pressure along an air nozzle with A_e/A_t = 2 (computed from the area–Mach and normal-shock relations; see Example 3): unchoked venturi, just choked (p₂), shock inside, shock at exit (p₄), design (p₃); dotted lines show what happens outside the exit for over- and under-expanded jets.'],
        ['list', null, true, [
          R`**No flow** — $p_b = p_0$.`,
          R`**All subsonic (a venturi)** — $p_2 < p_b < p_0$. Speeds up to the throat, slows down after it; the throat has the highest Mach number and $p_e = p_b$. At $p_b = p_2$ the throat just reaches $M = 1$ and the nozzle is **choked**; $p_2$ is the higher of the two exit pressures that give isentropic flow with a sonic throat.`,
          R`**Normal shock inside the nozzle** — $p_4 < p_b < p_2$. Choked, supersonic just after the throat, then a **normal shock** jumps the flow back to subsonic, then isentropic subsonic flow (with a lower $p_0$) to the exit, where $p_e = p_b$. The shock sits at the throat for $p_b$ just below $p_2$ and moves to the exit as $p_b \to p_4$. The lecture calls this "over-expansion": the pressure drop is enough to choke the nozzle but not enough to keep the flow supersonic.`,
          R`**Over-expanded jet** — $p_3 < p_b < p_4$. Supersonic all the way to the exit; inside, the flow is exactly the design flow, so $p_e = p_3$, which is **below** the back pressure. **Oblique shocks** at the exit compress the jet up to $p_b$ and restrict it; compression–expansion cycles follow (shock diamonds).`,
          R`**Design condition** — $p_b = p_3$. The jet is **matched** to the surroundings ($p_e = p_b$): smooth, wave-free, **fully expanded** supersonic flow. $p_0/p_3$ is the **design pressure ratio**.`,
          R`**Under-expanded jet** — $p_b < p_3$. Inside the nozzle still the design flow, so $p_e = p_3$, now **above** the back pressure; a **Prandtl–Meyer expansion fan** at the exit lowers it to $p_b$; the jet balloons outwards; cycles continue downstream.`
        ]],
        ['warn', 'Key Insight', [
          R`A **normal shock** (Topic 12) is an instantaneous, strongly **non-isentropic** jump from supersonic to subsonic flow — never the other way. Across it the **stagnation pressure falls** (stagnation temperature doesn't), so you can't use one $p_0$ for the whole nozzle any more: use $p_0$ before the shock and $p_{0e} < p_0$ after it.`,
          R`Once $p_b \le p_2$ the throat is choked, so $\dot m = \dot m_{max}$ (11.3) **whatever** $p_b$ is: lowering $p_b$ further only changes what happens downstream of the throat.`
        ]],
        ['warn', 'Note', [
          R`The slides title **both** regime 3 ($p_4 < p < p_2$) and regime 4 ($p_3 < p < p_4$) "over-expanded jet". Regime 4 is the over-expanded jet proper (exit pressure below ambient); in regime 3 the shock is inside the nozzle and the exit is subsonic.`
        ]],
        ['para', R`**Locating a shock** ($p_4 < p_b < p_2$). Because $T_0$ is unchanged across the shock and $\dot m \propto p_0A^*/\sqrt{T_0}$ (11.3), the downstream flow behaves as if it came from a bigger "virtual throat" $A_e^*$. The same $\dot m$ and $T_0$ pass through both, so $p_0A_t = p_{0e}A_e^*$, i.e. $A_e^* = A_t\,p_0/p_{0e}$. Multiply $A_e/A_e^* = (A_e/A_t)(p_{0e}/p_0)$ by $p_e/p_{0e}$ and set $p_e = p_b$ (subsonic exit):`],
        ['disp', [ R`\boxed{\frac{p_e}{p_{0e}}\,\frac{A_e}{A_e^*} = \frac{p_b}{p_0}\,\frac{A_e}{A_t} \quad\Rightarrow\quad \text{air: } M_e\sqrt{1 + 0.2M_e^2} = \frac{1}{1.728}\,\frac{p_0}{p_b}\,\frac{A_t}{A_e}} \tag{11.5}` ]],
        ['list', R`**Procedure for a nozzle question:**`, true, [
          R`From $A_e/A_t$ find both roots $M_{e,sub}$ and $M_{e,sup}$ of (11.4).`,
          R`Compute $p_2$, $p_3$ with (11.1), and $p_4 = p_3\,(p_2/p_1)$ with the normal-shock relation at $M_{e,sup}$.`,
          R`Compare $p_b$ with $p_0, p_2, p_4, p_3$ to identify the regime.`,
          R`If $p_4 < p_b < p_2$: the left-hand side of (11.5) depends only on $M_e$ (air: $(p/p_0)(A/A^*) = 1/[1.728M\sqrt{1 + 0.2M^2}]$), so solve for the subsonic $M_e$ — for air it is a quadratic in $M_e^2$: $0.2M_e^4 + M_e^2 - c = 0$ with $c = \left[\frac{p_0A_t}{1.728\,p_bA_e}\right]^2$.`,
          R`Then $p_{0e} = p_b\,(p_0/p)_{M_e}$; the shock strength $p_{0e}/p_0 = p_{02}/p_{01}$ gives the upstream Mach number $M_1$ (shock table); the shock sits where $A_s/A_t = (A/A^*)_{M_1}$ (supersonic root).`,
          R`For thrust use (11.6) with the exit-plane pressure $p_e$ (not $p_b$).`
        ]],
        ['deriv', 'Derivation — thrust of a nozzle', [
          ['t', R`Take a control volume around the rocket on a test stand. Propellant enters with no axial momentum and leaves through the exit plane at $u_e$, so the momentum outflow is $\dot m u_e$. Ambient pressure $p_b$ acts all round the outside except over the exit plane, where the jet's own pressure $p_e$ acts. The net force on the gas is therefore the thrust minus the pressure imbalance $(p_e - p_b)A_e$:`],
          ['m', R`\dot m u_e = F - (p_e - p_b)A_e \;\Rightarrow\; F = \dot m u_e + (p_e - p_b)A_e`]
        ]],
        ['disp', [ R`\boxed{F = \dot m u_e + (p_e - p_b)A_e} \tag{11.6}` ]],
        ['warn', 'Note', [
          R`The lecture's rocket example uses $F = \dot mu_e$ because its exit is **matched** ($p_e = p_b$). The pressure term is the general (standard) result, added here so you can handle off-design nozzles. **Under-expanded** ($p_e > p_b$): the pressure term adds thrust. **Over-expanded** ($p_e < p_b$): it subtracts. For given $p_0$ and $p_b$, the matched (design) nozzle gives the most thrust.`
        ]],
        ['para', R`**Summary of the regimes** (the bands of the figure above):`],
        ['html', '<table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="color:var(--k8C8273)"><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0);text-align:left">Regime</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0);text-align:left">Back pressure</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0);text-align:left">Exit flow</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0);text-align:left">Mass flow</th></tr></thead><tbody><tr><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)"><b>All subsonic</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">p<sub>2</sub> &lt; p<sub>b</sub> &lt; p<sub>0</sub></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">subsonic, p<sub>e</sub> = p<sub>b</sub></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">&lt; ṁ<sub>max</sub> (rises as p<sub>b</sub> falls)</td></tr><tr><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)"><b>Shock inside</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">p<sub>4</sub> &lt; p<sub>b</sub> &lt; p<sub>2</sub></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">subsonic, p<sub>e</sub> = p<sub>b</sub>; p<sub>0</sub> lost</td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">ṁ<sub>max</sub></td></tr><tr><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)"><b>Over-expanded jet</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">p<sub>3</sub> &lt; p<sub>b</sub> &lt; p<sub>4</sub></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">supersonic, p<sub>e</sub> = p<sub>3</sub> &lt; p<sub>b</sub>; oblique shocks outside</td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">ṁ<sub>max</sub></td></tr><tr><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)"><b>Design (matched)</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">p<sub>b</sub> = p<sub>3</sub></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">supersonic, p<sub>e</sub> = p<sub>b</sub>; no waves</td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">ṁ<sub>max</sub></td></tr><tr><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)"><b>Under-expanded jet</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">p<sub>b</sub> &lt; p<sub>3</sub></td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">supersonic, p<sub>e</sub> = p<sub>3</sub> &gt; p<sub>b</sub>; expansion fan outside</td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">ṁ<sub>max</sub></td></tr></tbody></table>'],
        ['check', 'Exam checklist — common mistakes', [
          R`Use $p_b$ (ambient/back) to decide the regime, but $p_e$ (exit plane) in the thrust formula and in $p_0/p_e$ for the exit Mach number — they differ for over- and under-expanded jets.`,
          R`Upstream of the throat always take the **subsonic** root of $A/A^*$; downstream take the supersonic root unless the nozzle is unchoked or you are behind a shock.`,
          R`Is it choked? Compare $p_b$ with $p_2$ (C–D nozzle) — not with $0.528p_0$, which is the test for a **converging** nozzle only.`,
          R`Across a normal shock $p_0$ **drops** and $T_0$ stays the same: switch to $p_{0e}$ (and $A_e^* = A_tp_0/p_{0e}$) downstream of it.`,
          R`Thrust pressure term $(p_e - p_b)A_e$: positive when under-expanded, negative when over-expanded, zero at design.`,
          R`Use the right $\gamma$: the air shortcuts ($0.2$, $3.5$, $0.528$, $0.0404$) do not apply to rocket gas with $\gamma = 1.2$.`
        ]]
      ]
    },
    {
      num: '11.3', title: 'Worked Examples',
      blocks: [
        ['ex', 'Example 1 — Laval nozzle with a throat pressure tap (lecture)', [
          ['t', R`Air, $\gamma = 1.4$, $R = 287$ J/kg K; throat area 100 mm²; reservoir 293 K, 0.5 MPa. The device compares the throat static pressure $p_t$ with the outlet stagnation pressure $p_{0e}$. (a) When $p_t/p_0 = 0.75$: nature of the flow, $M_t$ (and how it compares with the rest of the nozzle), $\dot m$. (b) Maximum $M_t$; corresponding $p_t/p_0$ and $p_t$. (c) Outlet at $2.0\times10^5$ Pa with $p_t/p_{0e} = 1$: what is $M_t$, sketch the pressure, and find the outlet Mach number.`],
          ['svg', 'tf_laval_tap', 'Static tap at the throat (p_t) and Pitot probe in the outlet (p₀ₑ), connected to one Δp device.'],
          ['ans'],
          ['t', R`**(a)** $0.75 > 0.528$ (the critical ratio for air), so the throat is **not choked: subsonic everywhere**. Invert (11.1):`],
          ['m', R`M_t = \sqrt{5\left[\left(\frac{1}{0.75}\right)^{1/3.5} - 1\right]} = \sqrt{5\,(1.0857 - 1)} = \sqrt{0.428} = 0.654`],
          ['t', R`Being subsonic, the flow accelerates to the throat and decelerates after it, so $M_t$ is the **maximum** Mach number in the nozzle. Mass flow from (11.2):`],
          ['m', R`\dot m = A_tM_t\left[\frac{\gamma p_0^2}{RT_0}\left(\frac{p_t}{p_0}\right)^{\frac{\gamma+1}{\gamma}}\right]^{1/2} = 10^{-4}\times0.654\left[\frac{1.4\,(5\times10^5)^2}{287\times293}\,(0.75)^{1.714}\right]^{1/2} = 0.104\ \text{kg/s}`],
          ['t', R`Check with $\dot m = p_tA_tM_t\sqrt{\gamma/RT_t}$: $T_t = 293/1.0857 = 270$ K, $\dot m = 3.75\times10^5\times10^{-4}\times0.654\sqrt{1.4/(287\times270)} = 0.104$ kg/s ✓ (below the choked value $0.0404\times10^{-4}\times5\times10^5/\sqrt{293} = 0.118$ kg/s).`],
          ['t', R`**(b)** The highest Mach number a throat can reach is $M_t = 1$ (choked). Then:`],
          ['m', R`\frac{p_0}{p_t} = (1.2)^{3.5} = 1.89,\qquad \frac{p_t}{p_0} = 0.528 \;\Rightarrow\; p_t = 0.528\times5\times10^5 = 2.64\times10^5\ \text{Pa}`],
          ['t', R`**(c)** Follow the logic step by step:`],
          ['t', R`1. $\Delta p = 0$ means the outlet **stagnation** pressure equals the throat **static** pressure: $p_{0e} = p_t$.`],
          ['t', R`2. Without losses $p_0$ is the same everywhere, and $p_t < p_0$ whenever gas is moving through the throat. So $p_{0e} = p_t < p_0$ means **stagnation pressure has been lost** — in an ideal nozzle the only way is a **normal shock**.`],
          ['t', R`3. A shock needs **supersonic** flow upstream of it. Supersonic flow only exists downstream of a sonic throat, so the throat must be **choked**: $M_t = 1$, $p_t = 2.64\times10^5$ Pa, and the shock is in the **diverging** section (the only supersonic region).`],
          ['t', R`4. Hence $p_{0e} = 2.64\times10^5$ Pa, i.e. $p_{0e}/p_0 = 0.528$: the shock has cost 47 % of the stagnation pressure. That is a strong shock — from the table, $p_{02}/p_{01} = 0.528$ needs $M_1 \approx 2.43$ (exactly the Q6 case in Topic 12, $A_s/A_t = 2.47$, $M_2 = 0.520$).`],
          ['t', R`5. After the shock the flow is isentropic and subsonic **with $p_{0e}$**, so at the outlet:`],
          ['m', R`\frac{p_{0e}}{p_e} = \frac{2.64}{2.0} = 1.32 \;\Rightarrow\; 1 + 0.2M_e^2 = 1.32^{1/3.5} = 1.0826 \;\Rightarrow\; M_e^2 = 0.413,\quad M_e = 0.64`],
          ['t', R`**Pressure sketch:** $p$ falls from $p_0$ to $0.528p_0$ at the throat, keeps falling (supersonic) to the shock, jumps up across it, then rises gently to $p_e$ (subsonic flow slowing in the diverging part) — the "shock inside" curve in the regime figure of 11.2.`],
        ]],
        ['warn', 'Warning', [
          R`**Example 1(c) — consistency check on the lecture data (not in the slides).** Behind the shock $M_2 = 0.520$, and subsonic flow **slows down** in a diverging section, so the outlet Mach number should be **below 0.52**. That needs $p_e \ge p_{0e}(1 + 0.2\times0.52^2)^{-3.5} = 0.832\times2.64\times10^5 = 2.20\times10^5$ Pa. With the given $2.0\times10^5$ Pa you get $M_e = 0.64 > 0.52$, so the numbers in part (c) are not quite self-consistent for a purely diverging nozzle. **In an exam, quote $M_e = 0.64$ as the lecture does** — the method is what is marked; just be aware of the check.`
        ]],
        ['ex', 'Example 2 — rocket engine (lecture)', [
          ['t', R`Combustion chamber $p_0 = 5.5$ MPa, $T_0 = 3700$ K; supersonic exit matched to atmosphere at 0.05 MPa; $\gamma = 1.2$, $R = 346$ J/kg K; $\dot m = 100$ kg/s. Find (a) throat $p, T, u$; (b) exit $M, T, u$; (c) thrust; (d) $A_e/A_t$.`],
          ['svg', 'tf_rocket_nozzle', 'Rocket nozzle with the given data marked; the throat is choked and the supersonic exit is matched to atmospheric pressure.'],
          ['ans'],
          ['t', R`**(a)** Supersonic at the exit ⇒ the throat is choked, $M_t = 1$. With $\gamma = 1.2$: $\frac{\gamma}{\gamma-1} = 6$, $\frac{2}{\gamma+1} = \frac{1}{1.1}$.`],
          ['m', R`\frac{p_t}{p_0} = \left(\frac{2}{2.2}\right)^{6} = 0.564 \Rightarrow p_t = 3.10\ \text{MPa};\qquad \frac{T_t}{T_0} = \frac{2}{2.2} = 0.909 \Rightarrow T_t = 3364 \approx 3400\ \text{K}`],
          ['m', R`u_t = a_t = \sqrt{\gamma RT_t} = \sqrt{1.2\times346\times3364} = 1182 \approx 1200\ \text{m/s}`],
          ['t', R`**(b)** Matched exit: $p_e = 0.05$ MPa, so $p_0/p_e = 5.5/0.05 = 110$. For $\gamma = 1.2$, $p_0/p = (1 + 0.1M^2)^6$:`],
          ['m', R`1 + 0.1M_e^2 = 110^{1/6} = 2.189 \;\Rightarrow\; M_e^2 = 11.9,\quad M_e = 3.45`],
          ['t', R`The same number is $T_0/T_e$, because $T_0/T = 1 + 0.1M^2$:`],
          ['m', R`\frac{T_0}{T_e} = 2.19 \Rightarrow T_e = \frac{3700}{2.189} = 1690 \approx 1700\ \text{K},\qquad u_e = M_e\sqrt{\gamma RT_e} = 3.45\sqrt{1.2\times346\times1690} = 2890 \approx 2900\ \text{m/s}`],
          ['t', R`**(c)** Matched exit, so the pressure term of (11.6) is zero:`],
          ['m', R`F = \dot mu_e + (p_e - p_b)A_e = 100\times2890 + 0 = 2.9\times10^5\ \text{N}`],
          ['t', R`**(d)** Mass conservation between throat and exit:`],
          ['m', R`\frac{A_e}{A_t} = \frac{p_t}{p_e}\frac{T_e}{T_t}\frac{u_t}{u_e} = \frac{3.10}{0.05}\times\frac{1690}{3364}\times\frac{1182}{2890} = 62.1\times0.502\times0.409 = 12.8`],
          ['t', R`**Check** with the $\gamma = 1.2$ area–Mach relation at $M = 3.45$:`],
          ['m', R`\frac{A}{A^*} = \frac{1}{3.45}\left(\frac{2.189}{1.1}\right)^{5.5} = 0.290\times(1.990)^{5.5} = 0.290\times44.0 = 12.8\ \checkmark`],
          ['t', R`(For scale: $\rho_t = p_t/RT_t = 2.67$ kg/m³, so $A_t = \dot m/(\rho_tu_t) = 0.032$ m² and $A_e = 0.41$ m².) Quote answers to sensible significant figures.`]
        ]],
        ['ex', 'Example 3 — critical back pressures and locating a shock (constructed to practise 11.2)', [
          ['t', R`Air ($\gamma = 1.4$) from a reservoir at $p_0 = 500$ kPa flows through a C–D nozzle with $A_e/A_t = 2.0$. (a) Find $p_2$, $p_3$ and $p_4$. (b) For $p_b = 350$ kPa, identify the regime, find the exit Mach number and locate the shock. (c) What happens for $p_b = 101$ kPa and for $p_b = 30$ kPa?`],
          ['svg', 'tf_laval_shock_locate', 'With a shock in the nozzle: isentropic with p₀ up to the shock, isentropic with the lower p₀ₑ after it; T₀ is unchanged.'],
          ['ans'],
          ['t', R`**(a)** Roots of $A/A^* = 2.0$ (table or bisection): $M_{e,sub} = 0.306$, $M_{e,sup} = 2.197$.`],
          ['m', R`p_2 = \frac{500}{(1 + 0.2\times0.306^2)^{3.5}} = 0.937\times500 = 469\ \text{kPa},\qquad p_3 = \frac{500}{(1 + 0.2\times2.197^2)^{3.5}} = 0.0939\times500 = 47.0\ \text{kPa}`],
          ['m', R`\frac{p_2}{p_1}\bigg|_{M = 2.197} = 1 + \frac{2.8}{2.4}(2.197^2 - 1) = 5.47 \;\Rightarrow\; p_4 = 5.47\times47.0 = 257\ \text{kPa}`],
          ['t', R`**(b)** $p_4 = 257 < 350 < 469 = p_2$ kPa: **normal shock inside the nozzle**. Use (11.5):`],
          ['m', R`M_e\sqrt{1 + 0.2M_e^2} = \frac{1}{1.728}\times\frac{500}{350}\times\frac{1}{2.0} = 0.4134`],
          ['m', R`\text{square: } 0.2M_e^4 + M_e^2 - 0.4134^2 = 0 \;\Rightarrow\; M_e^2 = \frac{-1 + \sqrt{1 + 0.8\times0.1709}}{0.4} = 0.1654,\quad M_e = 0.407`],
          ['m', R`p_{0e} = 350\,(1 + 0.2\times0.1654)^{3.5} = 350\times1.121 = 392\ \text{kPa},\qquad \frac{p_{0e}}{p_0} = 0.784`],
          ['t', R`From the shock table, $p_{02}/p_{01} = 0.784$ lies between $M = 1.8$ (0.813) and $2.0$ (0.721): interpolating, $M_1 \approx 1.86$ (exactly 1.863), with $M_2 = 0.603$. The shock sits where the supersonic flow reaches $M_1$:`],
          ['m', R`\frac{A_s}{A_t} = \frac{1}{1.863}\left(\frac{1 + 0.2\times1.863^2}{1.2}\right)^3 = 1.51`],
          ['t', R`Sense check: after the shock $M_2 = 0.603$ slows to $M_e = 0.407$ in the diverging part ✓, and the virtual throat $A_e^* = A_t/0.784 = 1.276A_t$ gives $A_e/A_e^* = 2.0/1.276 = 1.57$, which is $(A/A^*)$ at $M = 0.407$ ✓.`],
          ['t', R`**(c)** $p_b = 101$ kPa: $p_3 < p_b < p_4$ — **over-expanded jet**: supersonic exit at $p_e = p_3 = 47$ kPa, oblique shocks outside raise it to 101 kPa. $p_b = 30$ kPa $< p_3$ — **under-expanded**: exit still at 47 kPa, expansion fan outside. In both cases $\dot m = \dot m_{max}$ and the flow inside is the design flow.`]
        ]]
      ]
    },
    {
      num: 'Ex 11', title: 'Problem Sheet — Supersonic Nozzles', wk: true,
      blocks: [
        ['warn', 'Note', [
          R`**Q5** is question 5 of the course's compressible-flow problem sheet; Q1–Q3 (converging nozzles) are in Topic 10 and Q4, Q6–Q8 (shocks, including the shock in a C–D nozzle) in Topic 12. Questions **E1–E3** are extra practice written for these notes (not from the course sheet), covering the regimes, off-design thrust and shock location.`
        ]],
        ['ex', 'Q5 — supersonic wind tunnel', [
          ['t', R`A working section of 600 cm² at $M = 2.5$ downstream of a C–D nozzle; $p_0 = 1\times10^5$ Pa, $T_0 = 18$ °C. Find (a) the working-section static pressure, (b) $\dot m$, (c) the throat area.`],
          ['svg', 'tf_wind_tunnel', 'Supersonic wind tunnel: reservoir → choked throat → working section at M = 2.5 → diffuser. Given values marked; unknowns shown as "?".'],
          ['ans'],
          ['t', R`Supersonic in the working section, so there are no shocks upstream and the throat is choked ($M_t = 1$). $T_0 = 291$ K.`],
          ['m', R`\text{(a) } p = \frac{10^5}{(1 + 0.2\times2.5^2)^{3.5}} = 5850\ \text{Pa} \qquad T = \frac{291}{1 + 0.2\times6.25} = 129\ \text{K}`],
          ['m', R`\text{(b) } \dot m = pAM\sqrt{\frac{\gamma}{RT}} = 5850\times0.06\times2.5\sqrt{\frac{1.4}{287\times129}} = 5.4\ \text{kg/s}`],
          ['m', R`\text{(c) } p_t = 0.528\times10^5 = 5.28\times10^4\ \text{Pa},\ T_t = 0.833\times291 = 243\ \text{K} \Rightarrow A_t = \frac{\dot m}{p_t\sqrt{\gamma/RT_t}} = 228\ \text{cm}^2`],
          ['t', R`Check: $A/A^* = \frac{1}{2.5}\left(\frac{1 + 0.2\times6.25}{1.2}\right)^3 = 2.64$, and $600/2.64 = 228$ cm² ✓.`],
          ['t', R`**Answers:** (a) 5850 Pa; (b) 5.4 kg/s; (c) 228 cm². (The course sheet prints these with the question; here they are moved to the end so you can attempt it cold.)`]
        ]],
        ['ex', 'E1 — is it choked? An unchoked C–D nozzle (venturi)', [
          ['t', R`Air from $p_0 = 200$ kPa, $T_0 = 300$ K flows through a C–D nozzle with $A_t = 10$ cm² and $A_e/A_t = 2.0$ into a back pressure of 190 kPa. (a) Is the throat choked? (b) Find $M_e$ and $M_t$. (c) Find $p_t$ and $\dot m$.`],
          ['ans'],
          ['t', R`**(a)** For $A_e/A_t = 2$, $p_2/p_0 = 0.937$ (Example 3). Here $p_b/p_0 = 0.95 > 0.937$, so **all subsonic, not choked**, and $p_e = p_b$.`],
          ['m', R`\text{(b) } M_e = \sqrt{5\left[(1/0.95)^{1/3.5} - 1\right]} = \sqrt{5\times0.01476} = 0.272,\qquad \frac{A_e}{A^*} = \frac{1}{0.272}\left(\frac{1 + 0.2\times0.0738}{1.2}\right)^3 = 2.226`],
          ['t', R`$A^*$ here is a **fictitious** sonic area (smaller than the throat). Then $A_t/A^* = 2.226/2.0 = 1.113$; the subsonic root is $M_t = 0.676$ (table: between 0.6 and 0.7).`],
          ['m', R`\text{(c) } p_t = \frac{200}{(1 + 0.2\times0.676^2)^{3.5}} = 147\ \text{kPa},\quad T_t = \frac{300}{1.0914} = 275\ \text{K},\quad \dot m = p_tA_tM_t\sqrt{\frac{\gamma}{RT_t}} = 0.419\ \text{kg/s}`],
          ['t', R`Less than the choked maximum $0.0404\times10^{-3}\times2\times10^5/\sqrt{300} = 0.467$ kg/s ✓.`],
          ['t', R`**Answers:** not choked; $M_e = 0.272$, $M_t = 0.676$; $p_t = 147$ kPa; $\dot m = 0.419$ kg/s.`]
        ]],
        ['ex', 'E2 — design area ratio and off-design thrust', [
          ['t', R`A nozzle is designed to expand air isentropically from $p_0 = 1.0$ MPa, $T_0 = 500$ K to $p_b = 100$ kPa at $\dot m = 2.0$ kg/s. Find (a) $M_e$ and $A_e/A_t$; (b) $A_t$, $A_e$; (c) $u_e$ and the thrust. (d) The same nozzle then runs at $p_b = 50$ kPa and at $p_b = 150$ kPa: state the regime and find the thrust.`],
          ['ans'],
          ['m', R`\text{(a) } M_e = \sqrt{5\left[10^{1/3.5} - 1\right]} = \sqrt{5\times0.9307} = 2.157,\qquad \frac{A_e}{A_t} = \frac{1}{2.157}\left(\frac{1.9307}{1.2}\right)^3 = 1.93`],
          ['m', R`\text{(b) } A_t = \frac{\dot m\sqrt{T_0}}{0.0404\,p_0} = \frac{2.0\sqrt{500}}{0.0404\times10^6} = 1.11\times10^{-3}\ \text{m}^2,\qquad A_e = 1.93A_t = 2.14\times10^{-3}\ \text{m}^2`],
          ['m', R`\text{(c) } T_e = \frac{500}{1.9307} = 259\ \text{K},\quad u_e = 2.157\sqrt{1.4\times287\times259} = 696\ \text{m/s},\quad F = \dot mu_e = 1390\ \text{N}`],
          ['t', R`**(d)** For this nozzle $p_3 = 100$ kPa and $p_4 = p_3\,[1 + \tfrac{2.8}{2.4}(2.157^2 - 1)] = 526$ kPa. Both new back pressures are below $p_4$, so the throat stays choked ($\dot m = 2.0$ kg/s) and the flow inside is unchanged: $p_e = 100$ kPa, $u_e = 696$ m/s. Only the pressure term changes:`],
          ['m', R`p_b = 50\ \text{kPa (under-expanded)}: F = 1392 + (100 - 50)\times10^3\times2.14\times10^{-3} = 1500\ \text{N}`],
          ['m', R`p_b = 150\ \text{kPa (over-expanded, } p_3 < p_b < p_4): F = 1392 - 50\times10^3\times2.14\times10^{-3} = 1280\ \text{N}`],
          ['t', R`**Answers:** $M_e = 2.16$, $A_e/A_t = 1.93$; $A_t = 11.1$ cm², $A_e = 21.4$ cm²; $u_e = 696$ m/s, $F = 1390$ N; 1500 N (under-expanded), 1280 N (over-expanded).`]
        ]],
        ['ex', 'E3 — where is the shock?', [
          ['t', R`Air from $p_0 = 200$ kPa flows through a C–D nozzle with $A_e/A_t = 3.0$. (a) Find $p_2$, $p_3$, $p_4$. (b) At what back pressure does a normal shock sit exactly at the exit? (c) For $p_b = 120$ kPa find $M_e$, the shock strength and position $A_s/A_t$, and the Mach numbers either side of the shock.`],
          ['ans'],
          ['t', R`**(a)** Roots of $A/A^* = 3.0$: $M_{e,sub} = 0.197$, $M_{e,sup} = 2.637$.`],
          ['m', R`p_2 = 200\times0.973 = 195\ \text{kPa},\quad p_3 = 200\times0.0473 = 9.46\ \text{kPa},\quad p_4 = 9.46\left[1 + \tfrac{2.8}{2.4}(2.637^2 - 1)\right] = 9.46\times7.95 = 75.2\ \text{kPa}`],
          ['t', R`**(b)** By definition that is $p_4 = 75.2$ kPa.`],
          ['t', R`**(c)** $75.2 < 120 < 195$ kPa: shock inside. Use (11.5):`],
          ['m', R`M_e\sqrt{1 + 0.2M_e^2} = \frac{1}{1.728}\times\frac{200}{120}\times\frac{1}{3.0} = 0.3215`],
          ['m', R`0.2M_e^4 + M_e^2 - 0.1034 = 0 \;\Rightarrow\; M_e^2 = \frac{-1 + \sqrt{1 + 0.8\times0.1034}}{0.4} = 0.1013,\quad M_e = 0.318`],
          ['m', R`p_{0e} = 120\,(1.0203)^{3.5} = 128.7\ \text{kPa},\qquad \frac{p_{0e}}{p_0} = 0.644 \;\Rightarrow\; M_1 = 2.17,\ M_2 = 0.552`],
          ['m', R`\frac{A_s}{A_t} = \frac{1}{2.17}\left(\frac{1 + 0.2\times2.17^2}{1.2}\right)^3 = 1.95`],
          ['t', R`Sense check: $M_2 = 0.552$ slows to $M_e = 0.318$ ✓; the shock is at $A_s = 1.95A_t$, inside the nozzle ($< 3.0A_t$) ✓.`],
          ['t', R`**Answers:** $p_2 = 195$ kPa, $p_3 = 9.46$ kPa, $p_4 = 75.2$ kPa; shock at the exit when $p_b = 75.2$ kPa; $M_e = 0.318$, $p_{0e}/p_0 = 0.644$, $A_s/A_t = 1.95$, $M_1 = 2.17 \to M_2 = 0.552$.`]
        ]]
      ]
    }
  ]
}
