{
  key: 'tf_waves', area: 'comp', num: '9', week: 'Week 5',
  name: 'Waves, the Speed of Sound and Mach Number',
  triggers: 'moving wave → make it stationary (Galilean) · speed of sound a = √(γRT) · bulk modulus · Mach number · subsonic/supersonic · Mach cone sin θ = 1/M · stagnation T₀ and p₀ · thermometer reads T₀ · Pitot p₀/p → M · ṁ = pAM√(γ/RT) · when is a flow compressible (M > 0.3)',
  sections: [
    {
      num: '', title: 'Revision Objectives — Waves, the Speed of Sound and Mach Number',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Make a moving wave or shock **stationary** with a Galilean transformation.`,
          R`Derive $a = \sqrt{(\partial p/\partial\rho)_s}$ from mass and momentum balances on a weak wave, and use $a = \sqrt{\gamma RT}$ (T in **kelvin**).`,
          R`Relate $a$ to the **bulk modulus** and show the Mach number is an inertia : elastic force ratio.`,
          R`Classify flows by Mach number and find the **Mach cone** angle (and a speed from a cone angle).`,
          R`Derive and use $T_0/T$, $p_0/p$ and $\rho_0/\rho$ in terms of $M$; recover $M$ from a pressure ratio; find $\dot m$ from $p$, $T$ and $M$.`,
          R`Decide when compressibility matters (error vs Bernoulli at a given $M$).`
        ]]
      ]
    },
    {
      num: '9.1', title: 'Compressible Flow and the Galilean Transformation',
      blocks: [
        ['para', R`So far $\rho$ has been constant. In a **compressible** flow density changes as well as pressure, temperature changes too, and **thermodynamics** matters. It happens at **high speeds** and **high accelerations** (and can matter with large height changes or convection). For this year: a gas (nearly always air), **one-dimensional, inviscid**, gravity unimportant.`],
        ['para', R`The natural starting case is a **wave running into still gas**: a loudspeaker cone or a piston gives the gas next to it a nudge, and that disturbance travels outwards into gas that has not yet "heard" anything. The wave moves; the gas ahead of it is at rest; the gas behind it has been set moving at some speed $u$ (in the same direction as the wave for a compression).`],
        ['warn', 'Key Insight', [
          R`Systems are much easier to analyse when **steady**. A wave moving at constant speed $a$ into still gas is unsteady in the lab — so **ride with the wave**: add $a$ (in the opposite direction) to every velocity in the system.`,
          R`Before: gas ahead at rest ($u = 0$), gas behind moving at $u$. After: gas enters the stationary wave at speed $a$ and leaves at speed $a - u$ (both now right to left). Pressures, densities and temperatures are **unchanged** by the transformation — only velocities change. Only works for elements moving at **constant** speed.`
        ]],
        ['svg', 'tf_galilean_v2', 'Galilean transformation: adding the wave speed a (right to left) to everything makes the wave stationary, so the flow through it is steady. States 1 (ahead) and 2 (behind) keep their p, ρ, T.'],
        ['para', R`States 1 and 2 are general: the same picture works for a **strong** wave (a shock, Topic 12). For the **weak** wave of §9.2 the changes are tiny, so state 2 is written $p_2 = p + \delta p$, $\rho_2 = \rho + \delta\rho$ and the gas behind moves at $u = \delta u$.`]
      ]
    },
    {
      num: '9.2', title: 'Weak Waves and the Speed of Sound',
      blocks: [
        ['para', R`In an incompressible flow a pressure change is felt everywhere **instantly**. In a compressible flow it is carried by a **wave** at finite speed. **Weak waves** carry small changes (squares and products of changes negligible) and are **isentropic**. Sound is weak waves — acoustics.`],
        ['warn', 'Key Insight', [
          R`**Why is a weak wave isentropic?** The changes across it are tiny, so the gradients of velocity and temperature inside it are tiny. Friction (viscous dissipation) and heat conduction are driven by those gradients, so both are negligible: the process is **adiabatic and reversible**, i.e. **isentropic** ("no heat transfer or friction").`,
          R`That is exactly what lets us use the isentropic perfect-gas law $p/\rho^{\gamma} = $ const below. Without it we would not know which $\partial p/\partial\rho$ to use.`
        ]],
        ['svg', 'tf_weak_wave_v2', 'Weak wave made stationary: gas enters at a and leaves at a − δu with p + δp, ρ + δρ. Mass and momentum balances on the gold control volume give a.'],
        ['deriv', 'Derivation — speed of a weak wave', [
          ['t', R`Wave made stationary: gas enters the control volume (from the right) at speed $a$ with $p, \rho$ and leaves (to the left) at $a - \delta u$ with $p + \delta p$, $\rho + \delta\rho$. Take the **flow direction** (right to left) as positive. Per unit area:`],
          ['t', R`**Mass:** mass flux in = mass flux out.`],
          ['m', R`\rho a = (\rho + \delta\rho)(a - \delta u) = \rho a + a\,\delta\rho - \rho\,\delta u - \underbrace{\delta\rho\,\delta u}_{\text{2nd order, drop}} \;\Rightarrow\; \boxed{\rho\,\delta u = a\,\delta\rho}`],
          ['t', R`**Momentum:** net force on the CV in the flow direction = momentum flux out − momentum flux in. The pressure $p$ on the inlet face pushes in the flow direction; $p + \delta p$ on the outlet face pushes against it:`],
          ['m', R`p - (p + \delta p) = (\rho+\delta\rho)(a-\delta u)^2 - \rho a^2`],
          ['t', R`Quick route: the mass flux is the same on both faces, $\dot m'' = \rho a$, so the right-hand side is $\rho a\,[(a - \delta u) - a] = \rho a(-\delta u)$:`],
          ['m', R`-\delta p = -\rho a\,\delta u \;\Rightarrow\; \delta p = a\,(\rho\,\delta u) = a\,(a\,\delta\rho) = a^2\,\delta\rho`],
          ['t', R`Same result the long way (as on the slides): expand and drop the second-order terms ($\delta\rho\,\delta u$, $\delta u^2$, …), then substitute the mass result $\rho\,\delta u = a\,\delta\rho$:`],
          ['m', R`-\delta p = \rho a^2 + a^2\delta\rho - 2a\rho\,\delta u - \rho a^2 = a^2\delta\rho - 2a\,(a\,\delta\rho) = -a^2\delta\rho`],
          ['m', R`a^2 = \lim_{\delta\rho\to0}\frac{\delta p}{\delta\rho} = \left(\frac{\partial p}{\partial\rho}\right)_s \qquad (s:\ \text{isentropic, because the wave is})`],
          ['t', R`**Practical form.** Isentropic perfect gas: $p/\rho^{\gamma} = k$ (const), so $p = k\rho^{\gamma}$. Differentiate, then substitute $k = p/\rho^{\gamma}$, then the equation of state $p/\rho = RT$:`],
          ['m', R`\frac{\partial p}{\partial \rho} = \gamma k\rho^{\gamma-1} = \gamma\frac{p}{\rho^{\gamma}}\rho^{\gamma-1} = \frac{\gamma p}{\rho} = \gamma RT`]
        ]],
        ['disp', [ R`\boxed{a = \sqrt{\left(\frac{\partial p}{\partial\rho}\right)_s} = \sqrt{\gamma R T}} \tag{9.1}` ]],
        ['warn', 'Important', [
          R`$T$ **must** be in kelvin. Air ($R = 287$ J/kg K, $\gamma = 1.4$) at 288 K: $a = \sqrt{1.4\times287\times288} = 340$ m/s.`,
          R`$a$ depends only on the gas ($\gamma$, $R$) and its **temperature** — not on pressure.`
        ]],
        ['warn', 'Note', [
          R`Beyond the slides, but a classic exam "why": Newton assumed sound was **isothermal** ($p = \rho RT$ with $T$ fixed), giving $\partial p/\partial\rho = RT$ and $a = \sqrt{RT} = 287$ m/s at 288 K — about 15% too low. Compressions in a sound wave are too quick and too gentle for heat to flow, so the correct process is isentropic, which brings in the factor $\gamma$ (Laplace's correction).`
        ]],
        ['para', R`**A feel for the numbers** (air, $\gamma = 1.4$, $R = 287$ J/kg K):`],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:560px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Air temperature</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0);white-space:nowrap">a = √(γRT)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Example speed → M</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px">15 °C (288 K), sea level</td><td style="padding:6px 10px;white-space:nowrap">340 m/s</td><td style="padding:6px 10px">car at 30 m/s → M = 0.09</td></tr>'
          + '<tr><td style="padding:6px 10px">0 °C (273 K)</td><td style="padding:6px 10px;white-space:nowrap">331 m/s</td><td style="padding:6px 10px">airliner landing at 80 m/s → M ≈ 0.24</td></tr>'
          + '<tr><td style="padding:6px 10px">−50 °C (223 K)</td><td style="padding:6px 10px;white-space:nowrap">299 m/s</td><td style="padding:6px 10px">light aircraft at 60 m/s → M = 0.20</td></tr>'
          + '<tr><td style="padding:6px 10px">−56.5 °C (217 K), 11 km cruise</td><td style="padding:6px 10px;white-space:nowrap">295 m/s</td><td style="padding:6px 10px">airliner M ≈ 0.8 → 236 m/s; Concorde M ≈ 2 → 590 m/s</td></tr>'
          + '</tbody></table>'],
        ['ex', 'Example — speed of sound at 250 K', [
          ['t', R`Find the speed of sound in air at 250 K and at 15 °C. What is the Mach number of a body moving at 300 m/s in each?`],
          ['ans'],
          ['m', R`a_{250} = \sqrt{1.4\times287\times250} = \sqrt{100\,450} = 316.9\ \text{m/s} \quad\Rightarrow\quad M = \frac{300}{316.9} = 0.947`],
          ['m', R`T = 15 + 273.15 = 288.15\ \text{K}:\quad a = \sqrt{1.4\times287\times288.15} = 340.3\ \text{m/s} \quad\Rightarrow\quad M = \frac{300}{340.3} = 0.882`],
          ['t', R`Same speed, different Mach number: colder air has a lower $a$, so the body is "faster" relative to sound at altitude.`]
        ]]
      ]
    },
    {
      num: '9.3', title: 'Bulk Modulus and the Mach Number',
      blocks: [
        ['para', R`A compressible fluid behaves **elastically**: put a stress (a pressure change $\delta p$) on a lump of it and its volume changes. The strain is $\delta V/V$. Stress $\propto$ strain, with the **bulk modulus** $K$ as the constant ($1/K$ is the **compressibility**):`],
        ['deriv', 'Derivation — bulk modulus in terms of density', [
          ['m', R`\delta p = -K\frac{\delta V}{V} \;\Rightarrow\; K = -V\frac{\delta p}{\delta V} \;\xrightarrow{\ \delta p\to0\ }\; -V\frac{\partial p}{\partial V}`],
          ['t', R`(Minus sign: a pressure **rise** gives a volume **fall**, so $K > 0$.) The lump has fixed mass $m$, so $\rho = m/V$ and`],
          ['m', R`d\rho = d\!\left(\frac{m}{V}\right) = -\frac{m}{V^2}\,dV = -\rho\frac{dV}{V} \;\Rightarrow\; -\frac{V}{dV} = \frac{\rho}{d\rho} \;\Rightarrow\; K = \rho\frac{\partial p}{\partial\rho}`],
          ['t', R`Comparing with $a^2 = (\partial p/\partial\rho)_s$: $a^2 = K/\rho$. For an isentropic perfect gas $\partial p/\partial\rho = \gamma p/\rho$, so $K_s = \gamma p$.`]
        ]],
        ['eq', [
          ['Bulk modulus', R`K = -V\frac{\delta p}{\delta V} = \rho\frac{\partial p}{\partial\rho}`, '[Pa]', 'Value depends on the process — isentropic (no heat transfer or friction) here.'],
          ['Isentropic perfect gas', R`K_s = \gamma p`, '[Pa]', 'Air at 1 atm: 1.42 × 10⁵ Pa.'],
          ['Speed of sound from K', R`a = \sqrt{K/\rho}`, '[m/s]', ''],
          ['Mach number', R`M = \sqrt{\frac{\rho u^2 l^2}{K l^2}} = \frac{u}{a}`, '[–]', 'Inertia force : elastic force.']
        ]],
        ['deriv', 'Why the Mach number is inertia : elastic force', [
          ['t', R`Take a lump of fluid of size $l$ moving at speed $u$. **Inertia force** ~ mass × acceleration ~ $(\rho l^3)\times(u^2/l) = \rho u^2 l^2$ (equivalently, dynamic pressure $\rho u^2$ × area $l^2$). **Elastic force** ~ stress × area ~ $K l^2$ (the modulus is the stress for unit strain).`],
          ['m', R`\frac{\rho u^2 l^2}{K l^2} = \frac{\rho u^2}{K} = \frac{\rho u^2}{\rho a^2} = \left(\frac{u}{a}\right)^2 \;\Rightarrow\; M = \frac{u}{a}`],
          ['t', R`Small $M$: elastic (pressure) forces are far bigger than inertia can produce, so the fluid barely compresses — it behaves as incompressible. $M$ approaching 1: inertia is comparable with the elastic forces, so density changes are large.`]
        ]],
        ['warn', 'Note', [
          R`Some sources (including the lecture slide headings) mis-name $K$ the "bulk viscosity". It is the bulk **modulus** of elasticity (units Pa), not a viscosity — bulk viscosity is a different quantity (units Pa s).`
        ]],
        ['ex', 'Example — how compressible are air and water?', [
          ['t', R`Find the isentropic bulk modulus of air at 1 atm (101 325 Pa, $\rho = 1.225$ kg/m³) and check $a = \sqrt{K/\rho}$. Compare with water ($K = 2.2$ GPa, $\rho = 1000$ kg/m³).`],
          ['ans'],
          ['m', R`K_{air} = \gamma p = 1.4\times101\,325 = 1.42\times10^{5}\ \text{Pa} \qquad a = \sqrt{\frac{1.42\times10^5}{1.225}} = 340\ \text{m/s}`],
          ['m', R`a_{water} = \sqrt{\frac{2.2\times10^{9}}{1000}} = 1483\ \text{m/s} \qquad \frac{K_{water}}{K_{air}} = \frac{2.2\times10^9}{1.42\times10^5} \approx 15\,500`],
          ['t', R`Air is about 15 500 times more compressible than water, which is why liquid flows are treated as incompressible almost always.`]
        ]],
        ['para', R`**Flow regimes by Mach number.** The bands overlap on purpose: "subsonic" covers everything below $M = 1$, including the incompressible range, and "transonic" straddles $M = 1$ (some of the flow sub-, some supersonic).`],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:560px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Regime</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Mach number</th></tr></thead><tbody><tr><td style="padding:6px 10px">Incompressible</td><td style="padding:6px 10px">M ≪ 1 (often M &lt; 0.3) — the low end of subsonic</td></tr><tr><td style="padding:6px 10px">Subsonic</td><td style="padding:6px 10px">M &lt; 1</td></tr><tr><td style="padding:6px 10px">Transonic</td><td style="padding:6px 10px">0.9 &lt; M &lt; 1.1</td></tr><tr><td style="padding:6px 10px">Supersonic</td><td style="padding:6px 10px">M &gt; 1</td></tr><tr><td style="padding:6px 10px">Hypersonic</td><td style="padding:6px 10px">M ≫ 1 (roughly M &gt; 5)</td></tr></tbody></table>']
      ]
    },
    {
      num: '9.4', title: 'Why the Speed of Sound Matters: the Mach Cone',
      blocks: [
        ['para', R`A small moving object sends out weak waves continuously; each spreads as a circle (a sphere in 3-D) at speed $a$ from the point where it was emitted. Follow the object at **equal time steps** $\Delta t$: it is at A at $t = 0$, B at $\Delta t$, C at $2\Delta t$ and D at $3\Delta t$, so the points are $u\Delta t$ apart. At $t = 3\Delta t$ the wave sent from A has radius $3a\Delta t$, from B $2a\Delta t$, from C $a\Delta t$.`],
        ['list', null, false, [
          R`**Subsonic** ($u < a$, so $u\Delta t < a\Delta t$): the object stays **inside** all its waves — they run ahead of it, so the gas ahead "hears" it coming and adjusts smoothly.`,
          R`**Supersonic** ($u > a$): the object **outruns** its own waves. They pile up on a common tangent cone, the **Mach cone**; outside it is a **zone of silence** where the object cannot yet be heard.`
        ]],
        ['svg', 'tf_wavefronts_sub', 'Subsonic (M = 0.5): object at A, B, C, D at equal time steps Δt, drawn at t = 3Δt. The circles are the waves sent from A, B and C; the object stays inside all of them.'],
        ['svg', 'tf_wavefronts_sup', 'Supersonic (M = 2): same time steps, but now uΔt > aΔt. The object outruns its waves, which all touch one cone (half-angle θ); T is where the cone touches the wave from A.'],
        ['para', R`**The cone half-angle $\theta$** is the angle between the flight path and the surface of the cone. Take the wave sent from A: at $t = 3\Delta t$ it has radius $3a\Delta t$ and the object is at D, $3u\Delta t$ away. The cone line from D just touches (is **tangent** to) this circle at T, and a radius is perpendicular to a tangent, so triangle ATD has a **right angle at T** with hypotenuse AD $= 3u\Delta t$ and side AT $= 3a\Delta t$ opposite $\theta$. Every circle gives the same ratio (any circle works, e.g. C: $a\Delta t$ over $u\Delta t$), which is why all the waves share one straight cone.`],
        ['svg', 'tf_mach_triangle', 'Where sin θ comes from: radius AT (= 3aΔt) meets the cone line at a right angle; the hypotenuse AD (= 3uΔt) lies along the flight path.'],
        ['disp', [ R`\boxed{\sin\theta = \frac{a\,\Delta t}{u\,\Delta t} = \frac{1}{M}} \tag{9.2}` ]],
        ['warn', 'Note', [
          R`The cone only exists for $M \geq 1$: $\sin\theta = 1/M$ needs $1/M \leq 1$. At $M = 1$, $\theta = 90°$ — the waves pile up on a flat front through the object. As $M$ grows the cone gets narrower ($M = 2$: 30°; $M = 5$: 11.5°).`
        ]],
        ['ex', 'Example — Mach angle, and a speed from the cone', [
          ['t', R`(a) Find the Mach cone half-angle at $M = 1.2$, 2 and 5. (b) An aircraft at 11 km ($T = 216.65$ K) produces a Mach cone of half-angle 40°. How fast is it flying?`],
          ['ans'],
          ['m', R`\text{(a)}\ \theta = \sin^{-1}\frac{1}{M}:\quad M = 1.2 \to 56.4°,\qquad M = 2 \to 30.0°,\qquad M = 5 \to 11.5°`],
          ['m', R`\text{(b)}\ M = \frac{1}{\sin 40°} = \frac{1}{0.6428} = 1.556,\qquad a = \sqrt{1.4\times287\times216.65} = 295.0\ \text{m/s}`],
          ['m', R`u = Ma = 1.556\times295.0 = 459\ \text{m/s}`]
        ]],
        ['warn', 'Key Insight', [
          R`Supersonic flows change **dramatically**: their boundaries are sharp changes in properties. When the waves are not weak they steepen into **shock waves** (Topic 12), analysed with the same Galilean trick as §9.1.`
        ]]
      ]
    },
    {
      num: '9.5', title: 'Compressible Flow Equations: Stagnation Quantities',
      blocks: [
        ['para', R`**Mass:** exactly as before, $\dot m = \rho A u = $ const, but $\rho$ is now a variable. It is usually written with the Mach number, using $u = Ma = M\sqrt{\gamma RT}$ and the equation of state $\rho = p/(RT)$:`],
        ['deriv', 'Derivation — mass flow in terms of M', [
          ['m', R`\dot m = \rho A u = \rho A M\sqrt{\gamma RT} = \frac{p}{RT}\,A M\sqrt{\gamma RT} = pAM\sqrt{\frac{\gamma}{RT}}`]
        ]],
        ['para', R`The last form needs only $p$, $T$, $M$ and $A$ — the quantities you usually know in a duct or nozzle. It is the workhorse for nozzles and **choked** flow (Topic 10).`],
        ['deriv', 'Derivation — energy equation (SFEE)', [
          ['t', R`Steady flow energy equation for a control volume:`],
          ['m', R`\dot Q - \dot W_s = \dot m\left(\Delta h + \Delta\frac{u^2}{2} + g\,\Delta z\right)`],
          ['t', R`No heat transfer ($\dot Q = 0$, adiabatic), no shaft work ($\dot W_s = 0$), negligible height change ($\Delta z = 0$):`],
          ['m', R`\Delta\left(h + \frac{u^2}{2}\right) = 0 \;\Rightarrow\; h + \frac{u^2}{2} = \text{const along a streamline}`],
          ['t', R`For a perfect gas with constant $C_p$: $h = C_pT$.`]
        ]],
        ['warn', 'Note', [
          R`The slides list "isentropic" among the assumptions for the energy equation. Strictly, $h + u^2/2 = $ const needs only **adiabatic with no work** — friction just converts kinetic energy to internal energy inside the gas and doesn't change the total. **Isentropic** (adiabatic **and** frictionless) is needed for the **pressure** relation $p_0/p$ below. So $T_0$ is constant in any adiabatic flow; $p_0$ is constant only if the flow is also isentropic.`
        ]],
        ['para', R`A **stagnation** (total) quantity is the value it would have if the flow were **brought to rest**: adiabatically for $h_0$ and $T_0$, and isentropically for $p_0$ and $\rho_0$. From the energy equation: $h_0 = h + u^2/2 = C_pT_0$, and since $h + u^2/2$ is constant, so is $h_0$ (hence $T_0$) along the flow.`],
        ['deriv', 'Derivation — stagnation temperature', [
          ['m', R`C_pT_0 = C_pT + \frac{u^2}{2} \;\Rightarrow\; \frac{T_0}{T} = 1 + \frac{u^2}{2C_pT}`],
          ['t', R`i.e. if a flow is brought to a stop, its temperature rises. Now write $T$ in terms of the speed of sound, using $a^2 = \gamma RT = \gamma(C_p - C_v)T$, so $T = a^2/[\gamma(C_p - C_v)]$:`],
          ['m', R`\frac{u^2}{2C_pT} = \frac{u^2}{2a^2}\cdot\frac{\gamma(C_p-C_v)}{C_p} = \frac{M^2}{2}\,\gamma\left(1 - \frac{1}{\gamma}\right) = \frac{\gamma-1}{2}M^2`]
        ]],
        ['deriv', 'Derivation — stagnation pressure and density (isentropic)', [
          ['t', R`Isentropic: $p/\rho^{\gamma}$ is the same at the flowing state and at the stagnation state:`],
          ['m', R`\frac{p}{\rho^{\gamma}} = \frac{p_0}{\rho_0^{\gamma}} \;\Rightarrow\; \frac{p_0}{p} = \left(\frac{\rho_0}{\rho}\right)^{\gamma}`],
          ['t', R`Eliminate the densities with the equation of state $\rho = p/(RT)$: $\dfrac{\rho_0}{\rho} = \dfrac{p_0}{p}\cdot\dfrac{T}{T_0}$. Substitute:`],
          ['m', R`\frac{p_0}{p} = \left(\frac{p_0}{p}\right)^{\gamma}\left(\frac{T}{T_0}\right)^{\gamma} \;\Rightarrow\; \left(\frac{p_0}{p}\right)^{\gamma - 1} = \left(\frac{T_0}{T}\right)^{\gamma} \;\Rightarrow\; \frac{p_0}{p} = \left(\frac{T_0}{T}\right)^{\frac{\gamma}{\gamma-1}}`],
          ['t', R`And from $p_0/p = (\rho_0/\rho)^{\gamma}$, take the $1/\gamma$ power:`],
          ['m', R`\frac{\rho_0}{\rho} = \left(\frac{p_0}{p}\right)^{\frac{1}{\gamma}} = \left(\frac{T_0}{T}\right)^{\frac{1}{\gamma-1}}`],
          ['t', R`Finally substitute $T_0/T = 1 + \frac{\gamma-1}{2}M^2$ to get everything in terms of $M$:`]
        ]],
        ['disp', [ R`\boxed{\begin{aligned} \frac{T_0}{T} &= 1 + \frac{\gamma-1}{2}M^2 \\[4pt] \frac{p_0}{p} &= \left(1 + \frac{\gamma-1}{2}M^2\right)^{\gamma/(\gamma-1)} \\[4pt] \frac{\rho_0}{\rho} &= \left(1 + \frac{\gamma-1}{2}M^2\right)^{1/(\gamma-1)} \end{aligned}} \tag{9.3}` ]],
        ['deriv', 'Derivation — Mach number from a pressure ratio', [
          ['t', R`Invert the $p_0/p$ relation: raise both sides to the power $(\gamma-1)/\gamma$, subtract 1, multiply by $2/(\gamma-1)$:`],
          ['m', R`\left(\frac{p_0}{p}\right)^{\frac{\gamma-1}{\gamma}} = 1 + \frac{\gamma-1}{2}M^2 \;\Rightarrow\; M^2 = \frac{2}{\gamma-1}\left[\left(\frac{p_0}{p}\right)^{\frac{\gamma-1}{\gamma}} - 1\right]`]
        ]],
        ['eq', [
          ['Mass flow with Mach number', R`\dot m = \rho A u = \rho A M\sqrt{\gamma RT} = pAM\sqrt{\frac{\gamma}{RT}}`, '[kg/s]', 'ρ varies — use p and T (ρ = p/RT).'],
          ['Stagnation enthalpy', R`h_0 = h + \tfrac12u^2 = C_pT_0`, '[J/kg]', 'Constant in any adiabatic flow with no work — so T₀ is too (even through a shock, Topic 12).'],
          ['Mach number from a pressure ratio', R`M^2 = \frac{2}{\gamma-1}\left[\left(\frac{p_0}{p}\right)^{\frac{\gamma-1}{\gamma}} - 1\right]`, '[–]', 'Inverse of (9.3); e.g. from a Pitot-static reading (subsonic).'],
          ['Air (γ = 1.4) shortcuts', R`\frac{T_0}{T} = 1 + 0.2M^2,\quad \frac{p_0}{p} = (1 + 0.2M^2)^{3.5},\quad \frac{\rho_0}{\rho} = (1 + 0.2M^2)^{2.5}`, '[–]', 'γ/(γ−1) = 3.5; 1/(γ−1) = 2.5; (γ−1)/γ = 2/7.']
        ]],
        ['warn', 'Key Insight', [
          R`**A thermometer in a fast flow reads $T_0$, not $T$** — it brings the gas to rest at its surface. At $T = 290$ K (≈ 17 °C): $M = 0.5$ ⇒ $T_0 = 290(1 + 0.2\times0.25) = 304.5$ K (≈ **31 °C**); $M = 2$ ⇒ $T_0 = 290(1 + 0.2\times4) = 522$ K (≈ 249 °C, "about 250 °C"). Heating effects in supersonic flow are large.`
        ]],
        ['warn', 'Warning', [
          R`**Course correction:** the slide gives 304.5 K as "≡ 30.5 °C". In fact $304.5 - 273.15 = 31.35$ °C ≈ 31.4 °C. (The kelvin value 304.5 K is right; only the Celsius conversion is off.)`
        ]],
        ['ex', 'Example — stagnation conditions on an airliner at M = 0.8', [
          ['t', R`An airliner cruises at $M = 0.8$ at 11 km, where $T = 216.65$ K and $p = 22.6$ kPa. Find $T_0$, $p_0$ and $\rho_0/\rho$ at the nose, and the flight speed.`],
          ['ans'],
          ['m', R`1 + 0.2M^2 = 1 + 0.2\times0.64 = 1.128`],
          ['m', R`T_0 = 216.65\times1.128 = 244.4\ \text{K}\qquad p_0 = 22.6\times1.128^{3.5} = 22.6\times1.524 = 34.4\ \text{kPa}\qquad \frac{\rho_0}{\rho} = 1.128^{2.5} = 1.35`],
          ['m', R`u = M\sqrt{\gamma RT} = 0.8\times295.0 = 236\ \text{m/s}`],
          ['t', R`The density at the nose is 35% above ambient — far from incompressible. Bernoulli would give $p_0 - p = \tfrac12\rho u^2 = \tfrac{\gamma}{2}M^2p = 0.448\times22.6 = 10.1$ kPa instead of the true 11.8 kPa: Bernoulli is 14% low (equivalently, the true rise is 17% above Bernoulli's — the coefficient 1.170 at $M = 0.8$ in §9.6).`]
        ]],
        ['ex', 'Example — Mach number and speed from a Pitot-static probe', [
          ['t', R`A Pitot-static probe in a subsonic air stream reads stagnation pressure $p_0 = 150$ kPa and static pressure $p = 100$ kPa. The stagnation temperature is 300 K. Find $M$, $T$ and $u$, and the speed Bernoulli would have given.`],
          ['ans'],
          ['m', R`\frac{p_0}{p} = 1.5:\quad M^2 = 5\left[1.5^{2/7} - 1\right] = 5\,(1.1228 - 1) = 0.614 \;\Rightarrow\; M = 0.784`],
          ['m', R`T = \frac{T_0}{1 + 0.2M^2} = \frac{300}{1.1228} = 267.2\ \text{K}\qquad a = \sqrt{1.4\times287\times267.2} = 327.6\ \text{m/s}\qquad u = 0.784\times327.6 = 257\ \text{m/s}`],
          ['t', R`Bernoulli, with the static density $\rho = p/(RT) = 100\,000/(287\times267.2) = 1.304$ kg/m³:`],
          ['m', R`u_B = \sqrt{\frac{2(p_0 - p)}{\rho}} = \sqrt{\frac{2\times50\,000}{1.304}} = 277\ \text{m/s}\quad(\approx 8\%\ \text{too high})`],
          ['t', R`Note the thermometer reading (300 K) is $T_0$; you must convert to the static $T$ before finding $a$.`],
          ['t', R`**Subsonic only.** In a supersonic stream a bow shock forms in front of the probe, so the $p_0$ it reads is not the isentropic $p_0$ of the free stream and this inversion does not apply — supersonic Pitot readings need the shock relations (Topic 12).`]
        ]],
        ['ex', 'Example — mass flow through a duct', [
          ['t', R`Air flows in a duct of area 0.01 m² at $p = 200$ kPa, $T = 300$ K and $M = 0.6$. Find $\dot m$, and the stagnation temperature and pressure.`],
          ['ans'],
          ['m', R`\dot m = pAM\sqrt{\frac{\gamma}{RT}} = 200\,000\times0.01\times0.6\times\sqrt{\frac{1.4}{287\times300}} = 1200\times0.004032 = 4.84\ \text{kg/s}`],
          ['t', R`Check the long way: $\rho = p/(RT) = 2.323$ kg/m³, $u = 0.6\times347.2 = 208.3$ m/s, $\rho Au = 2.323\times0.01\times208.3 = 4.84$ kg/s. ✓`],
          ['m', R`1 + 0.2\times0.36 = 1.072:\qquad T_0 = 300\times1.072 = 321.6\ \text{K}\qquad p_0 = 200\times1.072^{3.5} = 200\times1.2755 = 255\ \text{kPa}`]
        ]]
      ]
    },
    {
      num: '9.6', title: 'When Is a Flow Compressible?',
      blocks: [
        ['para', R`Compare the true (compressible, isentropic) stagnation-pressure rise $p_0 - p$ with Bernoulli's $\tfrac12\rho u^2$. Their ratio is the **pressure coefficient** $(p_0 - p)/(\tfrac12\rho u^2)$: exactly 1 for incompressible flow, and the amount by which it exceeds 1 is the **error** you make by using Bernoulli.`],
        ['deriv', 'Derivation — binomial expansion of the isentropic p₀/p', [
          ['t', R`Binomial series: $(1+x)^n = 1 + nx + \tfrac12n(n-1)x^2 + \tfrac16n(n-1)(n-2)x^3 + \cdots$, valid for $|x| < 1$. Here`],
          ['m', R`x = \frac{\gamma-1}{2}M^2,\qquad n = \frac{\gamma}{\gamma-1},\qquad n - 1 = \frac{1}{\gamma-1},\qquad n - 2 = \frac{2-\gamma}{\gamma-1}`],
          ['t', R`Term by term (the powers of $\gamma - 1$ cancel):`],
          ['m', R`nx = \frac{\gamma}{\gamma-1}\cdot\frac{\gamma-1}{2}M^2 = \frac{\gamma}{2}M^2`],
          ['m', R`\tfrac12n(n-1)x^2 = \frac12\cdot\frac{\gamma}{(\gamma-1)^2}\cdot\frac{(\gamma-1)^2}{4}M^4 = \frac{\gamma}{8}M^4`],
          ['m', R`\tfrac16n(n-1)(n-2)x^3 = \frac16\cdot\frac{\gamma(2-\gamma)}{(\gamma-1)^3}\cdot\frac{(\gamma-1)^3}{8}M^6 = \frac{\gamma(2-\gamma)}{48}M^6`],
          ['m', R`\frac{p_0}{p} = 1 + \frac{\gamma}{2}M^2 + \frac{\gamma}{8}M^4 + \frac{\gamma(2-\gamma)}{48}M^6 + \cdots`],
          ['t', R`Subtract 1, multiply by $p$, and take out the factor $\frac{\gamma}{2}M^2p$ (divide each term by it: $\frac{\gamma}{8}M^4 \div \frac{\gamma}{2}M^2 = \frac{M^2}{4}$; $\frac{\gamma(2-\gamma)}{48}M^6 \div \frac{\gamma}{2}M^2 = \frac{(2-\gamma)}{24}M^4$):`],
          ['m', R`p_0 - p = \frac{\gamma M^2}{2}p\left(1 + \frac{M^2}{4} + \frac{2-\gamma}{24}M^4 + \cdots\right)`],
          ['t', R`The front factor is just the dynamic pressure, using $M = u/a$, $a^2 = \gamma RT$ and $p = \rho RT$:`],
          ['m', R`\frac{\gamma M^2}{2}p = \frac{\gamma}{2}\frac{u^2}{a^2}p = \frac{\gamma u^2}{2}\cdot\frac{p}{\gamma RT} = \tfrac12\rho u^2`]
        ]],
        ['disp', [ R`\boxed{\frac{p_0 - p}{\tfrac12\rho u^2} = 1 + \frac{M^2}{4} + \frac{2-\gamma}{24}M^4 + \cdots} \tag{9.4}` ]],
        ['warn', 'Note', [
          R`**Course correction (handout "When is a flow compressible?"):** the line after the expansion prints the bracket as $\left(1 + \frac{M^2}{2} + (2-\gamma)\frac{M^4}{24}\gamma + \cdots\right)$. It should read $\left(1 + \frac{M^2}{4} + \frac{2-\gamma}{24}M^4 + \cdots\right)$ — as the handout's own next line and boxed result say. The expansion line also prints the $M^2$ outside the bracket; it belongs inside, $(1 + \frac{\gamma-1}{2}M^2)^{\gamma/(\gamma-1)}$.`
        ]],
        ['svg', 'tf_cp_mach_v2', 'Pressure coefficient (p₀ − p)/½ρu² against M for air. The teal line is Bernoulli (= 1); the gap is the compressibility error: about 1% at M = 0.2, 2% at M = 0.3, 5% near M = 0.45, 28% at M = 1.'],
        ['para', R`At $M = 0$ this is exactly **Bernoulli** (pressure coefficient 1). The extra terms are the compressibility error. Since $M^2/4$ dominates at low $M$, the error is roughly $M^2/4$:`],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:560px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">M</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">M²/4</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">exact (p₀ − p)/½ρu², air</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">error vs Bernoulli</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px">0.1</td><td style="padding:6px 10px">0.0025</td><td style="padding:6px 10px">1.0025</td><td style="padding:6px 10px">0.25%</td></tr>'
          + '<tr><td style="padding:6px 10px">0.2</td><td style="padding:6px 10px">0.0100</td><td style="padding:6px 10px">1.0100</td><td style="padding:6px 10px">just over 1%</td></tr>'
          + '<tr><td style="padding:6px 10px">0.3</td><td style="padding:6px 10px">0.0225</td><td style="padding:6px 10px">1.0227</td><td style="padding:6px 10px">just over 2% (the usual rule)</td></tr>'
          + '<tr><td style="padding:6px 10px">0.45</td><td style="padding:6px 10px">0.0506</td><td style="padding:6px 10px">1.0517</td><td style="padding:6px 10px">about 5%</td></tr>'
          + '<tr><td style="padding:6px 10px">0.8</td><td style="padding:6px 10px">0.16</td><td style="padding:6px 10px">1.170</td><td style="padding:6px 10px">17%</td></tr>'
          + '<tr><td style="padding:6px 10px">1.0</td><td style="padding:6px 10px">0.25</td><td style="padding:6px 10px">1.276</td><td style="padding:6px 10px">28%</td></tr>'
          + '</tbody></table>'],
        ['para', R`So $M < 0.3$ is not a law of nature — it is the speed at which the error reaches about 2%. How fast is "too fast" depends on the accuracy you need: if 5% is acceptable, $M \approx 0.45$ will do. Near the transonic range the flow behaves very differently from incompressible flow.`],
        ['warn', 'When to use', [
          R`$M < 0.3$: incompressible equations (Bernoulli, hydraulics) are fine. $M > 0.3$, or any time temperature or density changes are asked for: use the compressible relations (9.3).`
        ]],
        ['ex', 'Example — is this flow compressible?', [
          ['t', R`Air at 15 °C ($a = 340.3$ m/s). Estimate the error in using Bernoulli for (a) a car at 30 m/s; (b) an airliner landing at 80 m/s; (c) up to what speed is the error below 1%?`],
          ['ans'],
          ['m', R`\text{(a)}\ M = \frac{30}{340.3} = 0.088,\quad \frac{M^2}{4} = 0.0019 \;\Rightarrow\; 0.2\%\ \text{— incompressible}`],
          ['m', R`\text{(b)}\ M = \frac{80}{340.3} = 0.235,\quad \frac{M^2}{4} = 0.0138 \;\Rightarrow\; 1.4\%\ \text{— still OK for most work}`],
          ['m', R`\text{(c)}\ \frac{M^2}{4} = 0.01 \Rightarrow M = 0.20 \;\Rightarrow\; u = 0.20\times340.3 = 68\ \text{m/s}`]
        ]]
      ]
    },
    {
      num: 'Ex 9', title: 'Problem Sheet — Waves, Speed of Sound and Mach Number', wk: true,
      blocks: [
        ['warn', 'Note', [
          R`The course compressible-flow problem sheet has no question purely on this topic (its Q8a — Mach number and speed from a 10 bar → 2 bar pressure ratio — is worked in Topic 12). These practice questions use only the relations above. Air: $\gamma = 1.4$, $R = 287$ J/kg K unless stated.`
        ]],
        ['ex', 'Q1 — speed of sound in helium', [
          ['t', R`Find the speed of sound in helium ($\gamma = 5/3$, $R = 2077$ J/kg K) at 20 °C, and compare it with air at the same temperature. [1007 m/s; 2.9 × air]`],
          ['ans'],
          ['m', R`a_{He} = \sqrt{\tfrac53\times2077\times293.15} = 1007\ \text{m/s}\qquad a_{air} = \sqrt{1.4\times287\times293.15} = 343.2\ \text{m/s}\qquad \frac{1007}{343.2} = 2.93`],
          ['t', R`Helium is light (large $R = R_u/\text{molar mass}$) and monatomic (larger $\gamma$), so sound is almost three times faster.`]
        ]],
        ['ex', 'Q2 — a supersonic jet', [
          ['t', R`A jet flies at 600 m/s where $T = 220$ K. Find (a) its Mach number, (b) the Mach cone half-angle, (c) the temperature a thermometer on its nose would read. [2.02; 29.7°; 399 K]`],
          ['ans'],
          ['m', R`\text{(a)}\ a = \sqrt{1.4\times287\times220} = 297.3\ \text{m/s},\quad M = \frac{600}{297.3} = 2.02`],
          ['m', R`\text{(b)}\ \theta = \sin^{-1}\frac{1}{2.018} = 29.7°\qquad \text{(c)}\ T_0 = 220\,(1 + 0.2\times2.018^2) = 220\times1.815 = 399\ \text{K}`],
          ['t', R`(c) uses only the energy equation, which holds through the bow shock in front of the nose too ($T_0$ is unchanged by a shock, Topic 12).`]
        ]],
        ['ex', 'Q3 — Pitot-static probe on an aircraft', [
          ['t', R`A Pitot-static probe reads $p_0 - p = 12$ kPa with static pressure $p = 50$ kPa; the static air temperature is 250 K. Find $M$ and the airspeed, and the airspeed Bernoulli would give. [0.563; 178 m/s; 186 m/s]`],
          ['ans'],
          ['m', R`\frac{p_0}{p} = \frac{62}{50} = 1.24:\quad M^2 = 5\left[1.24^{2/7} - 1\right] = 0.317 \;\Rightarrow\; M = 0.563`],
          ['m', R`u = M\sqrt{\gamma RT} = 0.563\times316.9 = 178\ \text{m/s}`],
          ['m', R`\rho = \frac{50\,000}{287\times250} = 0.697\ \text{kg/m}^3,\qquad u_B = \sqrt{\frac{2\times12\,000}{0.697}} = 186\ \text{m/s}\ (4\%\ \text{high})`]
        ]],
        ['ex', 'Q4 — correcting a thermometer reading', [
          ['t', R`A thermometer in a duct reads 320 K where the Mach number is 0.7. Find the true (static) temperature and the flow speed. [291 K; 240 m/s]`],
          ['ans'],
          ['m', R`T = \frac{T_0}{1 + 0.2M^2} = \frac{320}{1 + 0.2\times0.49} = \frac{320}{1.098} = 291.4\ \text{K}`],
          ['m', R`u = M\sqrt{\gamma RT} = 0.7\times\sqrt{1.4\times287\times291.4} = 0.7\times342.2 = 240\ \text{m/s}`]
        ]],
        ['ex', 'Q5 — mass flow in a pipe', [
          ['t', R`Air flows in a 0.1 m diameter pipe at $p = 150$ kPa, $T = 280$ K and $M = 0.5$. Find the mass flow rate. [2.46 kg/s]`],
          ['ans'],
          ['m', R`A = \frac{\pi}{4}(0.1)^2 = 7.854\times10^{-3}\ \text{m}^2`],
          ['m', R`\dot m = pAM\sqrt{\frac{\gamma}{RT}} = 150\,000\times7.854\times10^{-3}\times0.5\times\sqrt{\frac{1.4}{287\times280}} = 2.46\ \text{kg/s}`],
          ['t', R`Check: $\rho = 1.867$ kg/m³, $u = 0.5\times335.4 = 167.7$ m/s, $\rho Au = 2.46$ kg/s. ✓`]
        ]],
        ['ex', 'Q6 — how fast before Bernoulli fails?', [
          ['t', R`Using the exact isentropic relation, find the air speed at 15 °C at which Bernoulli under-predicts $p_0 - p$ by (a) 2%, (b) 5%. [M ≈ 0.28, 96 m/s; M ≈ 0.44, 151 m/s]`],
          ['ans'],
          ['t', R`Solve $\left[(1 + 0.2M^2)^{3.5} - 1\right]/(0.7M^2) = 1.02$ and $1.05$ by trial (or with $M^2/4 + 0.025M^4$ as a first guess):`],
          ['m', R`\text{(a)}\ M = 0.282 \Rightarrow u = 0.282\times340.3 = 96\ \text{m/s}\qquad \text{(b)}\ M = 0.443 \Rightarrow u = 151\ \text{m/s}`]
        ]],
        ['ex', 'Q7 — show the two forms of a agree', [
          ['t', R`Show that for an isentropic perfect gas the bulk modulus is $K_s = \gamma p$, and hence that $a = \sqrt{K/\rho}$ gives the same result as $a = \sqrt{\gamma RT}$.`],
          ['ans'],
          ['m', R`p = k\rho^{\gamma} \Rightarrow \frac{\partial p}{\partial\rho} = \frac{\gamma p}{\rho} \Rightarrow K_s = \rho\frac{\partial p}{\partial\rho} = \gamma p`],
          ['m', R`a = \sqrt{\frac{K_s}{\rho}} = \sqrt{\frac{\gamma p}{\rho}} = \sqrt{\gamma RT}\quad(p/\rho = RT)`]
        ]]
      ]
    }
  ]
}
