{
  key: 'tf_nozzles', area: 'comp', num: '10', week: 'Week 5',
  name: 'Nozzles and Choked Flow',
  triggers: 'converging nozzle from a large reservoir · dA/A and du/u · Euler equation dp + ρu du = 0 · is it choked? p/p₀ ≤ 0.528 · critical pressure ratio · choked mass flow 0.0404 A p₀/√T₀ · tyre/tank leaking · mixing two gases',
  sections: [
    {
      num: '', title: 'Revision Objectives — Nozzles and Choked Flow',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Derive the **Euler equation** $dp + \rho u\,du = 0$ for a varying-area duct.`,
          R`Show $\frac{du}{u} = \frac{1}{M^2-1}\frac{dA}{A}$ and explain why subsonic and supersonic flows respond **oppositely** to area changes.`,
          R`Explain why $M = 1$ can only occur where $dA = 0$ (the **throat**).`,
          R`Decide whether a converging nozzle is **choked** using the critical pressure ratio (0.528 for air).`,
          R`Calculate choked mass flow $\dot m = 0.0404\,A_tp_0/\sqrt{T_0}$ (air) and solve tank-emptying problems.`
        ]]
      ]
    },
    {
      num: '10.1', title: 'The Euler Equation for a Varying-Area Duct',
      blocks: [
        ['para', R`Steady, inviscid, compressible flow through a horizontal duct of any cross-section. A thin control volume: area $A \to A + dA$, with $p, u, \rho \to p + dp,\ u + du,\ \rho + d\rho$; products of changes neglected.`],
        ['svg', 'tf_duct_cv', 'Thin control volume in a varying-area duct: end pressures, the pressure on the tapered sides, and the change in momentum flux.'],
        ['deriv', 'Derivation — mass and momentum', [
          ['m', R`\text{Mass: } \rho uA = (\rho + d\rho)(u + du)(A + dA) \;\Rightarrow\; \frac{dA}{A} + \frac{du}{u} + \frac{d\rho}{\rho} = 0`],
          ['t', R`(Same as implicitly differentiating $\dot m = \rho uA$.) Momentum: pressure on the end faces plus the pressure on the tapered sides (mean $p + \tfrac12dp$ acting on $dA$) balances the change in momentum flux $\rho Au^2$:`],
          ['m', R`A\,dp + 2\rho uA\,du + u(\rho u\,dA + Au\,d\rho) = 0 \;\xrightarrow{\text{mass}}\; A\,dp + 2\rho Au\,du - \rho Au\,du = 0`]
        ]],
        ['disp', [ R`\boxed{dp + \rho u\,du = 0} \tag{10.1}` ]],
        ['para', R`This is the differential momentum equation for inviscid flow — the **Euler equation**. With $a^2 = dp/d\rho$ as the constitutive relation, we can link area, speed and pressure.`]
      ]
    },
    {
      num: '10.2', title: 'Area, Speed and Pressure',
      blocks: [
        ['deriv', 'Derivation — area–velocity relation', [
          ['m', R`a^2\frac{d\rho}{\rho} + u\,du = 0,\quad \frac{d\rho}{\rho} = -\frac{dA}{A} - \frac{du}{u}`],
          ['t', R`Substitute, divide by $u^2$, use $M = u/a$:`]
        ]],
        ['disp', [ R`\boxed{\frac{du}{u} = \frac{1}{M^2-1}\,\frac{dA}{A} \qquad \frac{dp}{\rho u^2} = \frac{1}{1-M^2}\,\frac{dA}{A}} \tag{10.2}` ]],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:560px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)"></th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Converging (dA &lt; 0)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Diverging (dA &gt; 0)</th></tr></thead><tbody><tr><td style="padding:6px 10px"><b>Subsonic, M &lt; 1</b></td><td style="padding:6px 10px">speeds up, p falls</td><td style="padding:6px 10px">slows down, p rises</td></tr><tr><td style="padding:6px 10px"><b>Supersonic, M &gt; 1</b></td><td style="padding:6px 10px">slows down, p rises</td><td style="padding:6px 10px">speeds up, p falls</td></tr></tbody></table>'],
        ['svg', 'tf_cd_nozzle', 'To go supersonic: converge to M = 1 at the throat, then diverge — supersonic flow speeds up as the area increases.'],
        ['warn', 'Key Insight', [
          R`At $M = 1$, (10.2) gives $du \to \infty$ unless $dA = 0$. So **$M = 1$ can only occur where the walls are parallel** — at a **throat**. For a converging nozzle that is its exit.`,
          R`To get supersonic flow you need a **converging-diverging** nozzle: accelerate to $M = 1$ at the throat, then keep accelerating in the diverging part (Topic 11).`
        ]]
      ]
    },
    {
      num: '10.3', title: 'Converging Nozzles and Choking',
      blocks: [
        ['para', R`A converging nozzle fed from a **large reservoir** — large means the gas there is effectively stagnant, so it holds $p_0$ and $T_0$. The throat (exit) pressure is $p_t$. Isentropic:`],
        ['svg', 'tf_reservoir_nozzle', 'Converging nozzle from a large reservoir: lowering the back pressure speeds up the throat flow until M_t = 1 — then it is choked.'],
        ['eq', [
          ['Throat Mach number', R`M_t^2 = \frac{2}{\gamma-1}\left[\left(\frac{p_0}{p_t}\right)^{\frac{\gamma-1}{\gamma}} - 1\right]`, '[–]', 'With no divergent part, M_t ≤ 1.'],
          ['Critical pressure ratio', R`\frac{p_t}{p_0} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}} = 0.528\ \text{(air)}`, '[–]', 'Methane (γ = 1.31): 0.544.'],
          ['Critical temperature ratio', R`\frac{T_t}{T_0} = \frac{2}{\gamma+1} = 0.833\ \text{(air)}`, '[–]', '']
        ]],
        ['warn', 'Important', [
          R`Lowering the back pressure speeds up the throat flow — until $M_t = 1$. Then the nozzle is **choked**: the throat Mach number can rise no more, the flow no longer depends on the back pressure, and **information can't travel upstream** through the throat.`,
          R`**Choked when** $\dfrac{p_{back}}{p_0} \le \left(\dfrac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$ — for air, $\le 0.528$. Then the exit pressure is $0.528p_0$, not the back pressure.`
        ]]
      ]
    },
    {
      num: '10.4', title: 'Mass Flow Through a Choked Nozzle',
      blocks: [
        ['deriv', 'Derivation — choked mass flow', [
          ['m', R`\dot m = \rho_tA_ta_t = A_t\left(\gamma\rho_0p_0\frac{p_t}{p_0}\frac{\rho_t}{\rho_0}\right)^{1/2},\qquad \frac{\rho_t}{\rho_0} = \left(\frac{p_t}{p_0}\right)^{1/\gamma}`],
          ['m', R`\dot m = A_t\left(\gamma\rho_0p_0\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}\right)^{1/2},\qquad \rho_0 = \frac{p_0}{RT_0}`]
        ]],
        ['disp', [ R`\boxed{\dot m = \left[\frac{\gamma}{R}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}\right]^{1/2}\frac{A_tp_0}{\sqrt{T_0}} = 0.0404\,\frac{A_tp_0}{\sqrt{T_0}}\ \ \text{(air)}} \tag{10.3}` ]],
        ['eq', [
          ['Unchoked nozzle mass flow', R`\dot m = A_tM_t\left[\frac{\gamma p_0^2}{RT_0}\left(\frac{p_t}{p_0}\right)^{\frac{\gamma+1}{\gamma}}\right]^{1/2}`, '[kg/s]', 'Same idea with M_t < 1.'],
          ['Choked-flow constant, methane', R`\left[\frac{\gamma}{R}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}\right]^{1/2} = 0.029`, '[√(kg K/J)…]', 'γ = 1.31, R = 520 J/kg K.']
        ]],
        ['warn', 'Key Insight', [
          R`The bracket depends only on the gas, so **choked mass flow depends only on the upstream stagnation conditions** and throat area. That's why choked nozzles make excellent flow meters and regulators.`
        ]],
        ['ex', 'Example — gas mixer burner (lecture)', [
          ['t', R`Methane and air are metered through choked nozzles (throat 10 mm² each, reservoirs at 20 °C) into a burner at 0.11 MPa. Mix $\dot m_{meth} : \dot m_{air} = 1 : 19$. Air $R = 287$, $\gamma = 1.40$; methane $R = 520$, $\gamma = 1.31$. (a) Valve pressures for 0.1 kg/s total? (b) Minimum total flow with both nozzles still choked?`],
          ['svg', 'tf_mixer', 'Each gas passes a regulator (setting p₀) and a choked nozzle, so its mass flow depends only on its own p₀ and T₀.'],
          ['ans'],
          ['m', R`\dot m_m = 0.029\frac{A_tp_{0m}}{\sqrt{293}} = 1.71\times10^{-8}p_{0m},\qquad \dot m_a = 2.36\times10^{-8}p_{0a}`],
          ['m', R`\text{(a) } \dot m_m = 5\times10^{-3},\ \dot m_a = 0.095\ \text{kg/s} \Rightarrow p_{0m} = 2.92\times10^5\ \text{Pa},\ p_{0a} = 4.03\times10^6\ \text{Pa}`],
          ['t', R`(b) Each nozzle needs $p_0 \ge p_{burner}/(\text{critical ratio})$. If **air** is just choked ($p_{0a} = 0.11/0.528 = 2.08\times10^5$ Pa), methane would need $p_{0m} = 1.51\times10^4$ Pa — far below its own limit, so methane would **not** be choked. ✗`],
          ['m', R`\text{Methane just choked: } p_{0m} = \frac{0.11\times10^6}{0.544} = 2.02\times10^5 \Rightarrow \dot m_m = 3.47\times10^{-3},\ \dot m_a = 0.0658,\ \dot m = 0.069\ \text{kg/s}`],
          ['t', R`Then $p_{0a} = 2.79\times10^6$ Pa $> 2.08\times10^5$ Pa — air choked too ✓. Minimum total **0.069 kg/s**. (The slides' exponents slip here — $10^4$ for $10^5$ and $0.657$ for $0.0657$ — but the conclusion is the same.)`]
        ]],
        ['ex', 'Example — punctured car tyre (lecture)', [
          ['t', R`A 0.1 m³ tyre at 0.3 MPa, 20 °C, is punctured by a 0.1 mm hole. Handling suffers below 0.2 MPa. Atmosphere 0.1 MPa. Thin wall and slow leak (so isothermal). How long?`],
          ['svg', 'tf_tank_leak', 'The hole stays choked throughout, so the mass flow out is proportional to the tyre pressure.'],
          ['ans'],
          ['t', R`$p_a/p_0$ goes from 0.333 to 0.5 — always below 0.528, so the hole is **always choked**. Hole area $7.85\times10^{-9}$ m².`],
          ['m', R`\dot m = -0.0404\frac{A_tp_0}{\sqrt{293}} = -1.85\times10^{-11}p_0,\qquad p_0 = \frac{mRT_0}{V} \;\Rightarrow\; \frac{dm}{dt} = -km,\ k = 1.56\times10^{-5}\ \text{s}^{-1}`],
          ['m', R`m_1 = 0.357\ \text{kg},\ m_2 = 0.238\ \text{kg} \;\Rightarrow\; t = \frac{\ln(m_1/m_2)}{k} = 2.6\times10^4\ \text{s} \approx 7.2\ \text{h}`]
        ]]
      ]
    },
    {
      num: 'Ex 10', title: 'Problem Sheet — Nozzles', wk: true,
      blocks: [
        ['para', R`Air unless stated: $\gamma = 1.4$, $R = 287$ J/kg K.`],
        ['ex', 'Q1 — converging nozzle, two back pressures', [
          ['t', R`Reservoir $7.0\times10^5$ Pa, 40 °C; exit area 0.025 m². Exit pressure, temperature and mass flow when ambient is (a) $4.0\times10^5$ Pa, (b) $1\times10^5$ Pa. [(a) $4.0\times10^5$ Pa, 267 K, 39.8 kg/s; (b) $3.7\times10^5$ Pa, 261 K, 40.0 kg/s]`],
          ['svg', 'tf_reservoir_nozzle', 'Compare the back pressure with 0.528 p₀ to decide whether the nozzle is choked.'],
          ['ans'],
          ['t', R`(a) $p_a/p_0 = 0.571 > 0.528$: **not choked**, exit pressure = ambient.`],
          ['m', R`M = 0.931,\quad T = \frac{313}{1 + 0.2M^2} = 267\ \text{K},\quad \dot m = pAM\sqrt{\frac{\gamma}{RT}} = 39.8\ \text{kg/s}`],
          ['t', R`(b) $p_a/p_0 = 0.143 < 0.528$: **choked**. $p_e = 0.528\times7\times10^5 = 3.70\times10^5$ Pa, $T_e = 313/1.2 = 261$ K, $\dot m = 0.0404\times0.025\times7\times10^5/\sqrt{313} = 40.0$ kg/s.`],
          ['t', R`(The worked solution prints 36.8 kg/s for (a); the formula it states gives 39.8, matching the question sheet. Note how close (a) is to the choked value — the flow is already at $M = 0.93$.)`]
        ]],
        ['ex', 'Q2 — filling an evacuated tank', [
          ['t', R`Atmospheric air (1 × 10⁵ Pa, 20 °C) enters an evacuated tank through a convergent nozzle of 0.04 m tip diameter. (a) What tank vacuum gives sonic flow? (b) Flow rate? [$p < 0.528\times10^5$ Pa; 0.3 kg/s]`],
          ['ans'],
          ['m', R`\text{(a) choked when } p_{tank} \le 0.528\times10^5\ \text{Pa} \qquad \text{(b) } \dot m = 0.0404\frac{\tfrac{\pi}{4}(0.04)^2\times10^5}{\sqrt{293}} = 0.30\ \text{kg/s}`]
        ]],
        ['ex', 'Q3 — insulated air tank punctured', [
          ['t', R`A well-insulated 6 m³ tank at $5\times10^5$ Pa, 20 °C is punctured by a 3 cm hole. How long until the pressure halves? ($p_{atm} = 10^5$ Pa) [22.4 s]`],
          ['svg', 'tf_tank_leak', 'Insulated and emptying fast: the gas left in the tank expands isentropically while the hole stays choked.'],
          ['ans'],
          ['t', R`$p_a/p \le 0.4 < 0.528$ throughout, so **choked** all the way. Unlike the slow tyre leak, the tank is **insulated** and empties fast, so the gas inside expands **isentropically**: $p/\rho^{\gamma} = p_i/\rho_i^{\gamma}$, and $T$ falls.`],
          ['m', R`\dot m = 0.0404\frac{A_tp}{\sqrt T} = -V\frac{d\rho}{dt},\qquad \rho = \rho_i\left(\frac{p}{p_i}\right)^{1/\gamma}`],
          ['m', R`t = \frac{2V}{k(\gamma-1)A_tR\sqrt{T_i}}\left[\left(\tfrac12\right)^{\frac{1-\gamma}{2\gamma}} - 1\right] = 3660 \times 0.0584 \times 0.104 = 22.4\ \text{s}`],
          ['t', R`(If you wrongly assumed isothermal, you'd get about 30 s.) In the printed solution "$k = 0.0040$" should read 0.0404 and "tyre" means tank.`]
        ]]
      ]
    }
  ]
}
