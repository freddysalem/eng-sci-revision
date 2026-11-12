{
  key: 'tf_nozzles', area: 'comp', num: '10', week: 'Week 5',
  name: 'Nozzles and Choked Flow',
  triggers: 'converging nozzle from a large reservoir · dA/A and du/u · Euler equation dp + ρu du = 0 · is it choked? p_a/p₀ ≤ 0.528 · critical pressure ratio · choked mass flow 0.0404 A p₀/√T₀ · tyre/tank leaking · mixing two gases',
  sections: [
    {
      num: '', title: 'Revision Objectives — Nozzles and Choked Flow',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Derive the **Euler equation** $dp + \rho u\,du = 0$ for a varying-area duct from a mass and momentum balance.`,
          R`Show $\frac{du}{u} = \frac{1}{M^2-1}\frac{dA}{A}$ and explain why subsonic and supersonic flows respond **oppositely** to area changes.`,
          R`Explain why $M = 1$ can only occur where $dA = 0$ (the **throat**).`,
          R`Use the isentropic stagnation relations to find the throat Mach number, and derive the **critical pressure ratio** (0.528 for air).`,
          R`Decide whether a converging nozzle is **choked** by comparing the ambient (back) pressure $p_a$ with $0.528\,p_0$.`,
          R`Calculate choked mass flow $\dot m = 0.0404\,A_tp_0/\sqrt{T_0}$ (air, SI) and solve tank-emptying problems (isothermal and isentropic).`
        ]]
      ]
    },
    {
      num: '10.1', title: 'The Euler Equation for a Varying-Area Duct',
      blocks: [
        ['para', R`Steady, inviscid (frictionless), adiabatic, compressible flow through a horizontal duct of any cross-section; gravity is not significant. Take a thin control volume of length $\delta x$: area $A \to A + dA$, with $p, u, \rho \to p + dp,\ u + du,\ \rho + d\rho$. It is thin, so changes are small and **products of changes** (e.g. $dp\,dA$, $du\,d\rho$) are negligible.`],
        ['svg', 'tf_duct_cv', 'Thin control volume in a varying-area duct: end-face pressure forces, the pressure on the tapered sides, and the mass and momentum fluxes in and out.'],
        ['deriv', 'Derivation — mass conservation', [
          ['t', R`Mass flow rate in = mass flow rate out:`],
          ['m', R`\rho uA = (\rho + d\rho)(u + du)(A + dA) = \rho uA + \rho u\,dA + \rho A\,du + uA\,d\rho \quad(\text{products of changes dropped})`],
          ['m', R`\Rightarrow\; \rho u\,dA + \rho A\,du + uA\,d\rho = 0 \qquad (\ast) \qquad\Rightarrow\qquad \frac{dA}{A} + \frac{du}{u} + \frac{d\rho}{\rho} = 0`],
          ['t', R`(Exactly the same as implicitly differentiating $\dot m = \rho uA = $ const.)`]
        ]],
        ['deriv', 'Derivation — momentum conservation', [
          ['t', R`**Forces** in the flow direction (all pressure — no friction, no gravity). The left end face gives $+pA$; the right end face gives $-(p + dp)(A + dA)$; on the tapered sides the mean pressure is $p + \tfrac12dp$ and the area projected on the flow direction is $dA$, giving $+(p + \tfrac12dp)\,dA$:`],
          ['m', R`\sum F = pA + \left(p + \tfrac12dp\right)dA - (p + dp)(A + dA) = pA + p\,dA + \tfrac12dp\,dA - pA - p\,dA - A\,dp - dp\,dA = -A\,dp`],
          ['t', R`(the $\tfrac12dp\,dA$ and $dp\,dA$ terms are second order and dropped). **Momentum flux** is $\dot m u = \rho Au^2$, so its change across the control volume is`],
          ['m', R`(\rho + d\rho)(A + dA)(u + du)^2 - \rho Au^2 = 2\rho Au\,du + \rho u^2\,dA + Au^2\,d\rho = 2\rho Au\,du + u\,(\rho u\,dA + Au\,d\rho)`],
          ['t', R`Net force = rate of change of momentum flux, so $-A\,dp = 2\rho Au\,du + u(\rho u\,dA + Au\,d\rho)$. From the mass result $(\ast)$, the bracket is $-\rho A\,du$:`],
          ['m', R`A\,dp + 2\rho Au\,du - \rho Au\,du = 0 \;\Rightarrow\; A\,dp + \rho Au\,du = 0`]
        ]],
        ['disp', [ R`\boxed{dp + \rho u\,du = 0} \tag{10.1}` ]],
        ['para', R`This is the differential momentum equation for inviscid flow — the **Euler equation**. To link area, speed and pressure we need one more (constitutive) relation: the speed of sound, $a^2 = dp/d\rho$. The flow is frictionless and adiabatic, hence **isentropic**, so this is $a^2 = (\partial p/\partial\rho)_s = \gamma p/\rho = \gamma RT$ (Topic 9, (9.1)).`]
      ]
    },
    {
      num: '10.2', title: 'Area, Speed and Pressure',
      blocks: [
        ['deriv', 'Derivation — area–velocity and area–pressure relations', [
          ['t', R`Put $dp = a^2\,d\rho$ into (10.1) and divide by $\rho$; then use the mass equation for $d\rho/\rho$:`],
          ['m', R`a^2\frac{d\rho}{\rho} + u\,du = 0,\qquad \frac{d\rho}{\rho} = -\frac{dA}{A} - \frac{du}{u} \;\Rightarrow\; -a^2\left(\frac{dA}{A} + \frac{du}{u}\right) + u\,du = 0`],
          ['t', R`Divide by $u^2$ and use $M = u/a$:`],
          ['m', R`-\frac{1}{M^2}\left(\frac{dA}{A} + \frac{du}{u}\right) + \frac{du}{u} = 0 \;\Rightarrow\; \frac{du}{u}\left(1 - \frac{1}{M^2}\right) = \frac{1}{M^2}\frac{dA}{A} \;\Rightarrow\; \frac{du}{u} = \frac{1}{M^2 - 1}\frac{dA}{A}`],
          ['t', R`For pressure, (10.1) gives $dp/(\rho u^2) = -du/u$:`]
        ]],
        ['disp', [ R`\boxed{\frac{du}{u} = \frac{1}{M^2-1}\,\frac{dA}{A} \qquad \frac{dp}{\rho u^2} = \frac{1}{1-M^2}\,\frac{dA}{A}} \tag{10.2}` ]],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:560px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)"></th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Converging (dA &lt; 0)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Diverging (dA &gt; 0)</th></tr></thead><tbody><tr><td style="padding:6px 10px"><b>Subsonic, M &lt; 1</b></td><td style="padding:6px 10px">du &gt; 0, dp &lt; 0: speeds up, p falls</td><td style="padding:6px 10px">du &lt; 0, dp &gt; 0: slows down, p rises</td></tr><tr><td style="padding:6px 10px"><b>Supersonic, M &gt; 1</b></td><td style="padding:6px 10px">du &lt; 0, dp &gt; 0: slows down, p rises</td><td style="padding:6px 10px">du &gt; 0, dp &lt; 0: speeds up, p falls</td></tr></tbody></table>'],
        ['svg', 'tf_cd_nozzle', 'To go supersonic: converge to M = 1 at the throat, then diverge — supersonic flow speeds up as the area increases.'],
        ['warn', 'Key Insight', [
          R`At $M = 1$ the factor $1/(M^2 - 1)$ in (10.2) is infinite, so $du \to \infty$ unless $dA = 0$ — therefore **$M = 1$ can only occur where the walls are parallel** ($dA/dx = 0$), i.e. at a **throat**. For a converging nozzle the throat is its exit.`,
          R`This works one way only: the throat is the **only place** $M = 1$ can happen, not a place where it **must** happen. A subsonic flow through a throat just reaches its maximum speed there and stays subsonic.`,
          R`To get supersonic flow you need a **converging-diverging** nozzle: accelerate to $M = 1$ at the throat, then keep accelerating in the diverging part (Topic 11).`
        ]]
      ]
    },
    {
      num: '10.3', title: 'Converging Nozzles and Choking',
      blocks: [
        ['para', R`A converging nozzle is fed from a **large reservoir** — large means the gas there is effectively stagnant and stays that way, so the reservoir holds the stagnation conditions $p_0$ and $T_0$. The nozzle discharges into surroundings at the **ambient (back) pressure $p_a$**. Call the pressure at the end of the nozzle (its throat) $p_t$; the flow from the reservoir to the throat is isentropic.`],
        ['svg', 'tf_reservoir_nozzle', 'Converging nozzle from a large reservoir: lowering the ambient pressure pₐ speeds up the throat flow until Mₜ = 1 — then it is choked and the exit pressure stays at 0.528 p₀.'],
        ['warn', 'Recall Knowledge', [
          R`**Stagnation relations (Topic 9.5, (9.3)).** Steady adiabatic flow with no work: $h_0 = h + \tfrac12u^2$, i.e. $C_pT_0 = C_pT + \tfrac12u^2$. With $C_p = \gamma R/(\gamma-1)$ and $u^2 = M^2\gamma RT$ this gives $\dfrac{T_0}{T} = 1 + \dfrac{\gamma-1}{2}M^2$. Isentropic, so $\dfrac{p_0}{p} = \left(\dfrac{T_0}{T}\right)^{\frac{\gamma}{\gamma-1}}$.`
        ]],
        ['deriv', 'Derivation — throat Mach number and the critical ratios', [
          ['t', R`Apply the stagnation relations between the reservoir and the throat:`],
          ['m', R`\frac{T_0}{T_t} = 1 + \frac{\gamma-1}{2}M_t^2,\qquad \frac{p_0}{p_t} = \left(1 + \frac{\gamma-1}{2}M_t^2\right)^{\frac{\gamma}{\gamma-1}}`],
          ['t', R`Invert the pressure relation — raise both sides to the power $(\gamma-1)/\gamma$ and rearrange — to get $M_t$ from a measured pressure ratio:`],
          ['m', R`\left(\frac{p_0}{p_t}\right)^{\frac{\gamma-1}{\gamma}} = 1 + \frac{\gamma-1}{2}M_t^2 \;\Rightarrow\; M_t^2 = \frac{2}{\gamma-1}\left[\left(\frac{p_0}{p_t}\right)^{\frac{\gamma-1}{\gamma}} - 1\right]`],
          ['t', R`There is no divergent part, so $M_t \le 1$. Set $M_t = 1$ to get the **critical** (sonic-throat) ratios:`],
          ['m', R`\frac{T_t}{T_0} = \frac{1}{1 + \frac{\gamma-1}{2}} = \frac{2}{\gamma+1} = 0.833,\qquad \frac{p_t}{p_0} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}} = (0.8333)^{3.5} = 0.528 \quad(\gamma = 1.4)`]
        ]],
        ['disp', [ R`\boxed{\frac{p_t}{p_0} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}} \qquad \frac{T_t}{T_0} = \frac{2}{\gamma+1}} \tag{10.3}` ]],
        ['para', R`For air ($\gamma = 1.4$) these are $p_t/p_0 = 0.528$ and $T_t/T_0 = 0.833$; for methane ($\gamma = 1.31$) $p_t/p_0 = 0.544$. They hold **only when the throat is sonic**, $M_t = 1$.`],
        ['eq', [
          ['Isentropic stagnation relations', R`\frac{T_0}{T} = 1 + \frac{\gamma-1}{2}M^2,\qquad \frac{p_0}{p} = \left(1 + \frac{\gamma-1}{2}M^2\right)^{\frac{\gamma}{\gamma-1}}`, '[–]', R`Air: $T_0/T = 1 + 0.2M^2$, $p_0/p = (1 + 0.2M^2)^{3.5}$.`],
          ['Throat Mach number', R`M_t^2 = \frac{2}{\gamma-1}\left[\left(\frac{p_0}{p_t}\right)^{\frac{\gamma-1}{\gamma}} - 1\right]`, '[–]', R`With no divergent part, $M_t \le 1$.`]
        ]],
        ['svg', 'tf_choke_curve', 'Mass flow against ambient-pressure ratio (air): as pₐ falls the flow rises, until pₐ/p₀ = 0.528; below that the nozzle is choked and the flow stays at its maximum.'],
        ['warn', 'Important', [
          R`While the flow is subsonic, the jet leaves at the ambient pressure, $p_t = p_a$. Lowering $p_a$ lowers $p_t$ and speeds up the throat flow — until $M_t = 1$. Then the nozzle is **choked**: the throat Mach number can rise no more, the flow no longer depends on the back pressure, and **information can't travel upstream** through the throat (a pressure signal moves at $a$ relative to the gas, and the gas there moves downstream at $a$).`,
          R`**Choked when** $\dfrac{p_a}{p_0} \le \left(\dfrac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$ — for air, $\le 0.528$. Then the exit pressure is $p_t = 0.528\,p_0$, **not** the ambient pressure.`,
          R`**Where does the rest of the pressure drop go?** When choked, $p_t = 0.528\,p_0 > p_a$: the jet leaves the nozzle still above ambient pressure and expands (through expansion waves) to $p_a$ **outside** the nozzle. None of that can affect the flow inside, which "cannot see" $p_a$.`
        ]]
      ]
    },
    {
      num: '10.4', title: 'Mass Flow Through a Choked Nozzle',
      blocks: [
        ['deriv', 'Derivation — choked mass flow', [
          ['t', R`At the throat of a choked nozzle the gas moves at the local speed of sound, $u_t = a_t = (\gamma p_t/\rho_t)^{1/2}$:`],
          ['m', R`\dot m = \rho_tA_ta_t = \rho_tA_t\left(\frac{\gamma p_t}{\rho_t}\right)^{1/2} = A_t\left(\gamma\rho_tp_t\right)^{1/2} = A_t\left(\gamma\rho_0p_0\,\frac{p_t}{p_0}\,\frac{\rho_t}{\rho_0}\right)^{1/2}`],
          ['t', R`Isentropic, so $\rho_t/\rho_0 = (p_t/p_0)^{1/\gamma}$, and $\frac{p_t}{p_0}\cdot\left(\frac{p_t}{p_0}\right)^{1/\gamma} = \left(\frac{p_t}{p_0}\right)^{\frac{\gamma+1}{\gamma}}$:`],
          ['m', R`\dot m = A_t\left(\gamma\rho_0p_0\left(\frac{p_t}{p_0}\right)^{\frac{\gamma+1}{\gamma}}\right)^{1/2}`],
          ['t', R`Substitute the critical ratio $p_t/p_0 = (2/(\gamma+1))^{\gamma/(\gamma-1)}$, which gives $\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}\cdot\frac{\gamma+1}{\gamma}} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}$, and the ideal-gas law $\rho_0 = p_0/RT_0$:`],
          ['m', R`\dot m = A_t\left(\gamma\rho_0p_0\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}\right)^{1/2},\qquad \rho_0 = \frac{p_0}{RT_0}`]
        ]],
        ['disp', [ R`\boxed{\dot m = \left[\frac{\gamma}{R}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}\right]^{1/2}\frac{A_tp_0}{\sqrt{T_0}} = 0.0404\,\frac{A_tp_0}{\sqrt{T_0}}\ \ \text{(air)}} \tag{10.4}` ]],
        ['eq', [
          ['Choked-flow constant, air', R`\left[\frac{1.4}{287}\left(\frac{2}{2.4}\right)^{6}\right]^{1/2} = 0.0404`, '[s√K/m]', R`SI units: $A_t$ in m², $p_0$ in Pa, $T_0$ in K gives $\dot m$ in kg/s.`],
          ['Choked-flow constant, methane', R`\left[\frac{1.31}{520}\left(\frac{2}{2.31}\right)^{7.45}\right]^{1/2} = 0.0293`, '[s√K/m]', 'γ = 1.31, R = 520 J/kg K (slides round to 0.029).'],
          ['Unchoked nozzle mass flow', R`\dot m = A_tM_t\left[\frac{\gamma p_0^2}{RT_0}\left(\frac{p_t}{p_0}\right)^{\frac{\gamma+1}{\gamma}}\right]^{1/2} = p_tA_tM_t\sqrt{\frac{\gamma}{RT_t}}`, '[kg/s]', R`Same idea with $M_t < 1$ and $p_t = p_a$.`]
        ]],
        ['para', R`The unchoked form is just $\dot m = \rho uA$ with $\rho = p/RT$ and $u = M\sqrt{\gamma RT}$, giving $\dot m = \frac{p}{RT}M\sqrt{\gamma RT}\,A = pAM\sqrt{\gamma/RT}$ (Topic 9); writing $p_t$ and $T_t$ in terms of $p_0$, $T_0$ gives the first form. At $M_t = 1$ it reduces to (10.4).`],
        ['warn', 'Key Insight', [
          R`The bracket depends only on the gas, so **choked mass flow depends only on the upstream stagnation conditions** and throat area. That's why choked nozzles make excellent flow meters and regulators.`
        ]],
        ['list', R`**Procedure — converging nozzle (or hole) fed from a reservoir:**`, true, [
          R`Get $p_0$ and $T_0$ (reservoir, **absolute** pressure, $T$ in **kelvin**) and the throat/hole area $A_t$.`,
          R`Compare $p_a/p_0$ with the critical ratio (0.528 for air; 0.544 for methane).`,
          R`**$p_a/p_0 > 0.528$ — not choked:** $p_t = p_a$; find $M_t$ from the pressure ratio, $M_t^2 = \frac{2}{\gamma-1}\left[(p_0/p_a)^{\frac{\gamma-1}{\gamma}} - 1\right]$ (10.3 throat Mach number), then $T_t = T_0/(1 + \tfrac{\gamma-1}{2}M_t^2)$, then $\dot m = p_tA_tM_t\sqrt{\gamma/RT_t}$.`,
          R`**$p_a/p_0 \le 0.528$ — choked:** $M_t = 1$, $p_t = 0.528\,p_0$, $T_t = 0.833\,T_0$ (10.3), and $\dot m = 0.0404\,A_tp_0/\sqrt{T_0}$ (10.4).`,
          R`For a tank emptying, check the ratio at **both** the start and the end — if it stays below 0.528 the hole is choked throughout. Then decide: slow leak through a thin wall ⇒ **isothermal**; fast leak from an insulated tank ⇒ **isentropic**.`
        ]],
        ['warn', 'Warning', [
          R`Use the **reservoir** pressure $p_0$ in the choked formula — never the ambient pressure $p_a$ and never $p_t$.`,
          R`Use **absolute** pressures and **kelvin** temperatures throughout; 0.0404 is for air in SI units only.`,
          R`Don't assume the exit pressure equals the ambient pressure: that is only true when the nozzle is **not** choked.`
        ]],
        ['ex', 'Example — gas mixer burner (lecture)', [
          ['t', R`Methane and air are metered through choked nozzles (throat 10 mm² each, reservoirs at 20 °C) into a burner at 0.11 MPa. Mix $\dot m_{meth} : \dot m_{air} = 1 : 19$. Air $R = 287$, $\gamma = 1.40$; methane $R = 520$, $\gamma = 1.31$. (a) Valve pressures for 0.1 kg/s total? (b) Minimum total flow with both nozzles still choked?`],
          ['svg', 'tf_mixer', 'Each gas passes a regulator (setting p₀) and a choked nozzle, so its mass flow depends only on its own p₀ and T₀.'],
          ['ans'],
          ['t', R`Data: $A_t = 1\times10^{-5}$ m², $T_0 = 293$ K, $\sqrt{293} = 17.12$. Critical ratios: air 0.528, methane 0.544. Each nozzle is choked only if $p_0 \ge p_{burner}/(\text{critical ratio})$: air $p_{0a} \ge 0.11\times10^6/0.528 = 2.08\times10^5$ Pa, methane $p_{0m} \ge 0.11\times10^6/0.544 = 2.02\times10^5$ Pa.`],
          ['m', R`\dot m_m = 0.0293\frac{(1\times10^{-5})\,p_{0m}}{17.12} = 1.71\times10^{-8}\,p_{0m},\qquad \dot m_a = 0.0404\frac{(1\times10^{-5})\,p_{0a}}{17.12} = 2.36\times10^{-8}\,p_{0a}`],
          ['t', R`**(a)** $\dot m = 0.1$ kg/s split 1 : 19 gives $\dot m_m = 0.1/20 = 5\times10^{-3}$ kg/s and $\dot m_a = 0.095$ kg/s:`],
          ['m', R`p_{0m} = \frac{5\times10^{-3}}{1.71\times10^{-8}} = 2.92\times10^5\ \text{Pa},\qquad p_{0a} = \frac{0.095}{2.36\times10^{-8}} = 4.03\times10^6\ \text{Pa}`],
          ['t', R`**Check both are choked:** $2.92\times10^5 \ge 2.02\times10^5$ ✓ and $4.03\times10^6 \ge 2.08\times10^5$ ✓, so the formulas used were valid.`],
          ['t', R`**(b)** The 1 : 19 ratio is fixed, so both flows — and so both $p_0$ settings — fall in proportion as the total flow is reduced. The nozzle whose $p_0$ reaches its critical value **first** sets the minimum. Write each choke condition as a condition on the total $\dot m$ ($\dot m_m = \dot m/20$, $\dot m_a = 19\dot m/20$):`],
          ['m', R`\text{methane: } \frac{\dot m}{20} \ge 1.71\times10^{-8}\times2.02\times10^5 \Rightarrow \dot m \ge 0.069\ \text{kg/s};\qquad \text{air: } \frac{19\dot m}{20} \ge 2.36\times10^{-8}\times2.08\times10^5 \Rightarrow \dot m \ge 5.2\times10^{-3}\ \text{kg/s}`],
          ['t', R`Both must hold, so the **methane** nozzle binds: air needs ~14× the pressure of methane for its flow (19× the mass flow, only 1.38× the constant), so it stays far above its choke limit. The lecture reaches the same answer by trial: assuming **air** just choked gives $\dot m_a = 4.92\times10^{-3}$ kg/s, $\dot m_m = 2.58\times10^{-4}$ kg/s and $p_{0m} = 1.51\times10^4$ Pa — far below $2.02\times10^5$ Pa, so methane would **not** be choked ✗. So take methane just choked (here using the unrounded constant 0.02934, i.e. $0.02934\times10^{-5}/17.12 = 1.714\times10^{-8}$, and $0.11\times10^6/0.5439 = 2.022\times10^5$ Pa; the rounded $1.71\times10^{-8}\times2.02\times10^5$ gives $3.45\times10^{-3}$):`],
          ['m', R`p_{0m} = 2.02\times10^5\ \text{Pa} \Rightarrow \dot m_m = 1.714\times10^{-8}\times2.022\times10^5 = 3.47\times10^{-3}\ \text{kg/s},\quad \dot m_a = 19\times3.466\times10^{-3} = 0.0659\ \text{kg/s},\quad \dot m = 20\times3.466\times10^{-3} = 0.069\ \text{kg/s}`],
          ['t', R`Then $p_{0a} = 0.0659/2.36\times10^{-8} = 2.79\times10^6$ Pa $> 2.08\times10^5$ Pa — air choked too ✓. Minimum total **0.069 kg/s**.`],
          ['t', R`**Note:** The slides' exponents slip here — $1.51\times10^4 < 2.02\times10^4$ for $2.02\times10^5$, $0.657$ for $0.0657$ kg/s (0.0657 from the slides' rounded constants; 0.0659 with the unrounded 0.02934 used above — both round to the same 0.069 kg/s total), and $2.78\times10^4 > 2.08\times10^4$ for $2.79\times10^6 > 2.08\times10^5$ — and they print $\dot m_m = 3.45\times10^{-3}$ (rounding only: the rounded constants give 3.45–3.46 × 10⁻³, the unrounded 0.02934 gives 3.47 × 10⁻³). The conclusion, 0.069 kg/s, is unchanged.`]
        ]],
        ['ex', 'Example — punctured car tyre (lecture)', [
          ['t', R`A 0.1 m³ tyre at 0.3 MPa (taken as **absolute**, as in the lecture), 20 °C, is punctured by a 0.1 mm diameter hole. Handling suffers below 0.2 MPa. Atmosphere 0.1 MPa. Thin wall and slow leak (so isothermal). How long?`],
          ['svg', 'tf_tank_leak', 'The hole stays choked throughout, so the mass flow out is proportional to the tyre pressure.'],
          ['ans'],
          ['t', R`$T_0 = 293$ K throughout (thin wall, slow leak ⇒ the gas stays at ambient temperature). $p_a/p_0$ goes from $0.1/0.3 = 0.333$ to $0.1/0.2 = 0.5$ — always below 0.528, so the hole is **always choked**. Hole area $A_t = \tfrac{\pi}{4}(1\times10^{-4})^2 = 7.85\times10^{-9}\ \text{m}^2$.`],
          ['m', R`\frac{dm}{dt} = -0.0404\frac{(7.85\times10^{-9})\,p_0}{\sqrt{293}} = -1.85\times10^{-11}\,p_0\ \text{kg/s}\quad(\text{negative: the tyre loses mass})`],
          ['t', R`Equation of state: $p_0 = mRT_0/V$, so`],
          ['m', R`\frac{dm}{dt} = -1.85\times10^{-11}\frac{RT_0}{V}\,m = -\lambda m,\qquad \lambda = \frac{1.85\times10^{-11}\times287\times293}{0.1} = 1.56\times10^{-5}\ \text{s}^{-1}\quad(\text{the lecture calls this } k)`],
          ['t', R`Masses: $m_1 = \frac{p_1V}{RT_0} = \frac{0.3\times10^6\times0.1}{287\times293} = 0.357$ kg; $m_2 = \frac{0.2\times10^6\times0.1}{287\times293} = 0.238$ kg. Separate and integrate:`],
          ['m', R`\int_0^{t_2}dt = -\frac1\lambda\int_{m_1}^{m_2}\frac{dm}{m} \;\Rightarrow\; t_2 = \frac{\ln(m_1/m_2)}{\lambda} = \frac{\ln 1.5}{1.56\times10^{-5}} = 2.6\times10^4\ \text{s} \approx 7.2\ \text{h}`],
          ['t', R`(If 0.3 MPa were a gauge reading the absolute pressures would be 0.4 → 0.3 MPa, but the lecture's ratio $p_a/p_0 = 0.333$ shows it is used as absolute. The slide's "$p_0 = 0.2$ Pa" means 0.2 MPa.)`]
        ]]
      ]
    },
    {
      num: 'Ex 10', title: 'Problem Sheet — Nozzles', wk: true,
      blocks: [
        ['para', R`Air unless stated: $\gamma = 1.4$, $R = 287$ J/kg K.`],
        ['ex', 'Q1 — converging nozzle, two ambient pressures', [
          ['t', R`Reservoir $7.0\times10^5$ Pa, 40 °C; exit area 0.025 m². Exit pressure, temperature and mass flow when ambient is (a) $4.0\times10^5$ Pa, (b) $1\times10^5$ Pa. [(a) $4.0\times10^5$ Pa, 267 K, 39.8 kg/s; (b) $3.7\times10^5$ Pa, 261 K, 40.0 kg/s]`],
          ['svg', 'tf_reservoir_nozzle', 'Compare the ambient pressure pₐ with 0.528 p₀ to decide whether the nozzle is choked.'],
          ['ans'],
          ['t', R`$p_0 = 7.0\times10^5$ Pa, $T_0 = 313$ K, $A = 0.025$ m².`],
          ['t', R`**(a)** $p_a/p_0 = 4.0/7.0 = 0.571 > 0.528$: **not choked**, so the flow is subsonic throughout and the exit pressure equals ambient, $p = 4.0\times10^5$ Pa. Mach number from the isentropic pressure relation:`],
          ['m', R`\left(\frac{p_0}{p}\right)^{\frac{\gamma-1}{\gamma}} = 1.75^{0.2857} = 1.1734 \;\Rightarrow\; M^2 = \frac{2}{0.4}(1.1734 - 1) = 0.867,\quad M = 0.931`],
          ['m', R`T = \frac{T_0}{1 + 0.2M^2} = \frac{313}{1.1734} = 267\ \text{K}`],
          ['t', R`Mass flow: $\dot m = \rho uA$ with $\rho = p/RT$ and $u = M\sqrt{\gamma RT}$:`],
          ['m', R`\dot m = \frac{p}{RT}M\sqrt{\gamma RT}\,A = pAM\sqrt{\frac{\gamma}{RT}} = (4.0\times10^5)(0.025)(0.931)\sqrt{\frac{1.4}{287\times266.8}} = 9310\times4.276\times10^{-3} = 39.8\ \text{kg/s}`],
          ['t', R`**(b)** $p_a/p_0 = 1/7 = 0.143 < 0.528$: **choked**. At the exit (= throat) $p_t = 0.528\times7\times10^5 = 3.70\times10^5$ Pa (above ambient — the jet expands to $10^5$ Pa outside), $T_t = 0.833\times313 = 313/1.2 = 261$ K, and`],
          ['m', R`\dot m = 0.0404\frac{A\,p_0}{\sqrt{T_0}} = 0.0404\times\frac{0.025\times7\times10^5}{\sqrt{313}} = \frac{707}{17.69} = 40.0\ \text{kg/s}`],
          ['t', R`Note how close (a) is to the choked value — the flow is already at $M = 0.93$, so lowering $p_a$ from $4\times10^5$ to $10^5$ Pa only adds 0.2 kg/s.`],
          ['t', R`**Note:** The worked solution prints 36.8 kg/s for (a); the formula it states gives 39.8 kg/s, matching the question sheet's second answer line.`]
        ]],
        ['ex', 'Q2 — filling an evacuated tank', [
          ['t', R`Atmospheric air (1 × 10⁵ Pa, 20 °C) enters an evacuated tank through a convergent nozzle of 0.04 m tip diameter. (a) What tank vacuum gives sonic flow? (b) Flow rate? [$p < 0.528\times10^5$ Pa; 0.3 kg/s]`],
          ['ans'],
          ['t', R`Here the **atmosphere is the reservoir** ($p_0 = 10^5$ Pa, $T_0 = 293$ K) and the **tank is the back pressure**. Sonic flow at the tip means the nozzle is choked.`],
          ['m', R`\text{(a) } \frac{p_{tank}}{p_{atm}} \le 0.528 \;\Rightarrow\; p_{tank} \le 0.528\times10^5 = 5.28\times10^4\ \text{Pa (absolute)}`],
          ['t', R`i.e. a vacuum of at least $0.472\times10^5$ Pa (47 kPa) below atmospheric. Below that the flow rate no longer changes.`],
          ['m', R`\text{(b) } A_t = \tfrac{\pi}{4}(0.04)^2 = 1.257\times10^{-3}\ \text{m}^2,\qquad \dot m = 0.0404\frac{(1.257\times10^{-3})(1\times10^5)}{\sqrt{293}} = \frac{5.08}{17.12} = 0.30\ \text{kg/s}`]
        ]],
        ['ex', 'Q3 — insulated air tank punctured', [
          ['t', R`A well-insulated 6 m³ tank at $5\times10^5$ Pa, 20 °C is punctured by a 3 cm hole. How long until the pressure halves? ($p_{atm} = 10^5$ Pa) [22.4 s]`],
          ['svg', 'tf_tank_leak', 'Insulated and emptying fast: the gas left in the tank expands isentropically while the hole stays choked.'],
          ['ans'],
          ['t', R`Data: $V = 6$ m³, $p_i = 5\times10^5$ Pa, $T_i = 293$ K, $A_t = \tfrac{\pi}{4}(0.03)^2 = 7.07\times10^{-4}$ m², $k = 0.0404$ (the choked-flow constant of (10.4) — not a decay rate). At the end $p = 2.5\times10^5$ Pa, so $p_a/p \le 0.4 < 0.528$ throughout: **choked** all the way.`],
          ['t', R`Unlike the slow tyre leak, the tank is **insulated** and empties fast, so the gas left inside expands **isentropically**: $p/\rho^{\gamma} = p_i/\rho_i^{\gamma}$, and its temperature falls, $T = T_i(\rho/\rho_i)^{\gamma-1}$. The gas in the tank is at rest, so its $p$ and $T$ are the stagnation values for the hole.`],
          ['m', R`\dot m = k\frac{A_tp}{\sqrt T} = -\frac{d(\rho V)}{dt} = -V\frac{d\rho}{dt}`],
          ['t', R`Write $p/\sqrt T$ in terms of $\rho$ alone, using $p = \rho RT$ and the isentropic $T$:`],
          ['m', R`\frac{p}{\sqrt T} = \rho R\sqrt T = \rho R\sqrt{T_i}\left(\frac{\rho}{\rho_i}\right)^{\frac{\gamma-1}{2}} \;\Rightarrow\; -V\frac{dx}{dt} = kA_tR\sqrt{T_i}\;x^{\frac{\gamma+1}{2}},\qquad x = \frac{\rho}{\rho_i}`],
          ['t', R`Separate and integrate from $x = 1$ at $t = 0$ to $x_2$ at time $t$, using $\displaystyle\int x^{-\frac{\gamma+1}{2}}dx = \frac{2}{1-\gamma}\,x^{\frac{1-\gamma}{2}}$:`],
          ['m', R`-\int_1^{x_2}x^{-\frac{\gamma+1}{2}}\,dx = \frac{kA_tR\sqrt{T_i}}{V}\,t \;\Rightarrow\; \frac{2}{\gamma-1}\left[x_2^{\frac{1-\gamma}{2}} - 1\right] = \frac{kA_tR\sqrt{T_i}}{V}\,t`],
          ['t', R`Isentropic, so $x_2 = \rho_2/\rho_i = (p_2/p_i)^{1/\gamma} = (\tfrac12)^{1/\gamma}$, and $x_2^{(1-\gamma)/2} = (\tfrac12)^{\frac{1-\gamma}{2\gamma}}$. $p_i$ cancels out:`],
          ['m', R`t = \frac{2V}{k(\gamma-1)A_tR\sqrt{T_i}}\left[\left(\tfrac12\right)^{\frac{1-\gamma}{2\gamma}} - 1\right]`],
          ['t', R`Substitute term by term: $2V = 12$ m³; $k(\gamma-1)A_tR\sqrt{T_i} = 0.0404\times0.4\times7.07\times10^{-4}\times287\times17.12 = 0.0561$; the bracket is $2^{1/7} - 1 = 1.1041 - 1 = 0.1041$:`],
          ['m', R`t = \frac{12}{0.0561}\times0.1041 = 214\times0.1041 = 22.3\ \text{s}`],
          ['t', R`The printed solution groups the same numbers as $\frac{2V}{k(\gamma-1)A_tR} \times \frac{1}{\sqrt{T_i}} \times 0.104$, i.e. $3660 \times 0.0584 \times 0.104 = 22.2$ s (22.3 s without intermediate rounding).`],
          ['t', R`**Isothermal check** (wrong here — the tank is insulated and empties in tens of seconds, so there is no time for heat to flow in from the walls and keep the gas at 20 °C — but a useful comparison): $p = mRT/V$ gives $dm/dt = -\lambda m$ (decay rate, as in the tyre) with $\lambda = kA_tR\sqrt{T}/V = 0.0404\times7.07\times10^{-4}\times287\times17.12/6 = 0.0234$ s⁻¹, so $t = \ln 2/\lambda = 29.6 \approx 30$ s. The isentropic tank halves its pressure sooner because cooling lowers the pressure too: only $1 - 0.5^{1/1.4} = 39\%$ of the mass has to escape, against 50% isothermally.`],
          ['t', R`**Note:** The printed solution writes "$k = 0.0040$" (should read 0.0404), calls the tank a "tyre" (copied from the lecture example), and prints $3695\times0.0584\times0.104 = 22.4$ s. The first factor is $12/(0.0404\times0.4\times7.07\times10^{-4}\times287) = 3660$, which gives **22.2–22.3 s**; the sheet's 22.4 s is within 1%, so either is an acceptable answer.`]
        ]]
      ]
    }
  ]
}
