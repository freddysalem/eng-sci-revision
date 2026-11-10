{
  key: 'tf_laval', area: 'comp', num: '11', week: 'Week 5',
  name: 'Converging–Diverging (Laval) Nozzles',
  triggers: 'supersonic wind tunnel · rocket nozzle · throat and exit · design pressure ratio · over-/under-expanded · shock in the nozzle · area ratio A/A* · exit Mach from back pressure · thrust = ṁu_e',
  sections: [
    {
      num: '', title: 'Revision Objectives — Converging–Diverging Nozzles',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Explain how a **Laval nozzle** produces supersonic flow and where $M = 1$ occurs.`,
          R`Describe the nozzle's behaviour as the back pressure falls: **all subsonic → shock in the nozzle → over-expanded → design → under-expanded**.`,
          R`Use the **area–Mach relation** $A/A^*$ and mass conservation between throat and exit.`,
          R`Solve rocket and wind-tunnel problems: throat conditions, exit Mach number, exit speed, thrust, area ratio.`
        ]]
      ]
    },
    {
      num: '11.1', title: 'How to Make a Supersonic Flow',
      blocks: [
        ['list', R`Recap from Topic 10:`, false, [
          R`Subsonic flow speeds up in a **converging** duct; supersonic flow speeds up in a **diverging** one. As speed rises, pressure falls.`,
          R`$M = 1$ only at the **minimum-area** section ($dA = 0$). When $M = 1$ there the nozzle is **choked**.`
        ]],
        ['para', R`So a **converging–diverging (Laval) nozzle** fed from stagnation conditions $p_0$, $T_0$ accelerates gas to $M = 1$ at the **throat** and, if the back pressure $p_e$ is low enough, on to **supersonic** speed in the diverging section. Applications: rockets, gas turbines, steam turbines, supersonic wind tunnels.`],
        ['svg', 'tf_cd_nozzle', 'Laval nozzle: subsonic in the converging part, M = 1 at the throat (area A*), supersonic in the diverging part when the back pressure is low enough.'],
        ['eq', [
          ['Area–Mach relation', R`\frac{A}{A^*} = \frac{1}{M}\left[\frac{2}{\gamma+1}\left(1 + \frac{\gamma-1}{2}M^2\right)\right]^{\frac{\gamma+1}{2(\gamma-1)}}`, '[–]', 'A* = throat area when choked (M = 1). Two solutions for each A/A*: one subsonic, one supersonic.'],
          ['Area–Mach, air', R`\frac{A}{A^*} = \frac{1}{M}\left(\frac{1 + 0.2M^2}{1.2}\right)^{3}`, '[–]', 'γ = 1.4.'],
          ['Area ratio from states', R`\frac{A_e}{A_t} = \frac{\rho_t u_t}{\rho_e u_e} = \frac{p_t}{p_e}\,\frac{T_e}{T_t}\,\frac{u_t}{u_e}`, '[–]', 'Mass conservation with ρ = p/RT.']
        ]]
      ]
    },
    {
      num: '11.2', title: 'Operating Regimes as the Back Pressure Falls',
      blocks: [
        ['svg', 'tf_laval_regimes', 'Pressure along the nozzle as the back pressure falls (computed from the area–Mach and normal-shock relations): all subsonic → shock inside → over-expanded → design (p₃) → under-expanded.'],
        ['list', null, true, [
          R`**$p_e = p_0$** — no flow.`,
          R`**$p_2 < p_e < p_0$: all subsonic.** Speeds up to the throat, slows down after it (a venturi). At $p_e = p_2$ the throat just reaches $M = 1$ and the nozzle is **choked**; $p_2$ is the higher of the two exit pressures that give isentropic flow with a sonic throat.`,
          R`**$p_4 < p_e < p_2$: shock inside the nozzle.** Choked, supersonic just after the throat, then a **normal shock** jumps the flow back to subsonic, then isentropic subsonic flow to the exit. The shock sits at the throat for $p_e$ just below $p_2$ and moves to the exit as $p_e \to p_4$. "Over-expansion": enough pressure drop to choke, not enough to stay supersonic.`,
          R`**$p_3 < p_e < p_4$: over-expanded jet.** Supersonic all the way to the exit, but the exit pressure is below ambient; **oblique shocks** at the exit restrict the jet; compression–expansion cycles (shock diamonds).`,
          R`**$p_e = p_3$: design condition.** The jet is **matched** to the surroundings — smooth, wave-free, **fully expanded** supersonic flow. $p_0/p_3$ is the **design pressure ratio**.`,
          R`**$p_e < p_3$: under-expanded jet.** Exit pressure above ambient; a **Prandtl–Meyer expansion fan** at the exit; the jet balloons outwards; cycles continue downstream.`
        ]],
        ['warn', 'Key Insight', [
          R`A **normal shock** (Topic 12) is an instantaneous, strongly **non-isentropic** jump from supersonic to subsonic flow — never the other way. Across it the **stagnation pressure falls**, so you can't use one $p_0$ for the whole nozzle any more.`
        ]]
      ]
    },
    {
      num: '11.3', title: 'Worked Examples',
      blocks: [
        ['ex', 'Example 1 — Laval nozzle with a throat pressure tap (lecture)', [
          ['t', R`Air, $\gamma = 1.4$, $R = 287$; throat area 100 mm²; reservoir 293 K, 0.5 MPa. (a) When $p_t/p_0 = 0.75$: nature of the flow, $M_t$, $\dot m$. (b) Maximum $M_t$; corresponding $p_t/p_0$ and $p_t$. (c) Outlet at $2.0\times10^5$ Pa with outlet stagnation pressure equal to the throat static pressure: what's happening, and the outlet Mach number?`],
          ['svg', 'tf_laval_tap', 'The measuring device compares the static pressure at the throat with the stagnation pressure at the outlet.'],
          ['ans'],
          ['t', R`(a) $0.75 > 0.528$ ⇒ **subsonic**, not choked; the throat has the highest Mach number in the nozzle.`],
          ['m', R`M_t = 0.654,\quad \dot m = A_tM_t\left[\frac{\gamma p_0^2}{RT_0}\left(\frac{p_t}{p_0}\right)^{\frac{\gamma+1}{\gamma}}\right]^{1/2} = 0.104\ \text{kg/s}`],
          ['m', R`\text{(b) } M_t = 1:\ \frac{p_0}{p_t} = 1.89 \Rightarrow p_t = 2.64\times10^5\ \text{Pa}`],
          ['t', R`(c) The outlet **stagnation** pressure has dropped to the throat **static** pressure, so stagnation pressure has been lost in the nozzle — there must be a **shock wave** in the diverging section. Choked, so $p_{0e} = p_t = 2.64\times10^5$ Pa:`],
          ['m', R`\frac{p_{0e}}{p_e} = \frac{2.64}{2.0} = 1.32 \;\Rightarrow\; M_e = 0.64`]
        ]],
        ['ex', 'Example 2 — rocket engine (lecture)', [
          ['t', R`Combustion chamber $p_0 = 5.5$ MPa, $T_0 = 3700$ K; supersonic exit matched to atmosphere at 0.05 MPa; $\gamma = 1.2$, $R = 346$ J/kg K; $\dot m = 100$ kg/s. Find (a) throat $p, T, u$; (b) exit $M, T, u$; (c) thrust; (d) $A_e/A_t$.`],
          ['svg', 'tf_cd_nozzle', 'Rocket nozzle: chamber conditions p₀, T₀; choked throat; supersonic exit matched to atmospheric pressure.'],
          ['ans'],
          ['m', R`\text{(a) } \frac{p_t}{p_0} = \left(\frac{2}{2.2}\right)^{6} = 0.564 \Rightarrow p_t = 3.1\ \text{MPa};\quad T_t = 0.909T_0 = 3400\ \text{K};\quad u_t = \sqrt{\gamma RT_t} = 1200\ \text{m/s}`],
          ['m', R`\text{(b) } \frac{p_0}{p_e} = 110 \Rightarrow M_e = 3.45,\quad \frac{T_0}{T_e} = 2.19 \Rightarrow T_e = 1700\ \text{K},\quad u_e = M_e\sqrt{\gamma RT_e} = 2900\ \text{m/s}`],
          ['m', R`\text{(c) Thrust} = \dot m u_e = 2.9\times10^5\ \text{N} \qquad \text{(d) } \frac{A_e}{A_t} = \frac{p_t}{p_e}\frac{T_e}{T_t}\frac{u_t}{u_e} = 12.8`],
          ['t', R`Because the exit is matched ($p_e = p_{atm}$) there's no pressure-thrust term. Quote answers to sensible significant figures. Check (d) with the area–Mach relation at $M = 3.45$, $\gamma = 1.2$: 12.8 ✓.`]
        ]]
      ]
    },
    {
      num: 'Ex 11', title: 'Problem Sheet — Supersonic Nozzles', wk: true,
      blocks: [
        ['ex', 'Q5 — supersonic wind tunnel', [
          ['t', R`A working section of 600 cm² at $M = 2.5$ downstream of a C–D nozzle; $p_0 = 1\times10^5$ Pa, $T_0 = 18$ °C. Find (a) the working-section static pressure, (b) $\dot m$, (c) the throat area. [5850 Pa; 5.4 kg/s; 228 cm²]`],
          ['svg', 'tf_cd_nozzle', 'Supersonic wind tunnel: the working section is the supersonic exit; the throat must be choked.'],
          ['ans'],
          ['t', R`Supersonic in the working section, so there are no shocks upstream and the throat is choked ($M_t = 1$).`],
          ['m', R`\text{(a) } p = \frac{10^5}{(1 + 0.2\times2.5^2)^{3.5}} = 5850\ \text{Pa} \qquad T = \frac{291}{1 + 0.2\times6.25} = 129\ \text{K}`],
          ['m', R`\text{(b) } \dot m = pAM\sqrt{\frac{\gamma}{RT}} = 5850\times0.06\times2.5\sqrt{\frac{1.4}{287\times129}} = 5.4\ \text{kg/s}`],
          ['m', R`\text{(c) } p_t = 5.28\times10^4\ \text{Pa},\ T_t = 243\ \text{K} \Rightarrow A_t = \frac{\dot m}{p_t\sqrt{\gamma/RT_t}} = 228\ \text{cm}^2`],
          ['t', R`Check: $A/A^* = \frac{1}{2.5}\left(\frac{1 + 0.2\times6.25}{1.2}\right)^3 = 2.64$, and $600/2.64 = 228$ cm² ✓.`]
        ]]
      ]
    }
  ]
}
