{
  key: 'tf_waves', area: 'comp', num: '9', week: 'Week 5',
  name: 'Waves, the Speed of Sound and Mach Number',
  triggers: 'moving wave → make it stationary (Galilean) · speed of sound a = √(γRT) · bulk modulus · Mach number · subsonic/supersonic · Mach cone sin θ = 1/M · stagnation T₀ and p₀ · thermometer reads T₀ · when is a flow compressible (M > 0.3)',
  sections: [
    {
      num: '', title: 'Revision Objectives — Waves, the Speed of Sound and Mach Number',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Make a moving wave or shock **stationary** with a Galilean transformation.`,
          R`Derive $a = \sqrt{(\partial p/\partial\rho)_s}$ from mass and momentum balances on a weak wave, and use $a = \sqrt{\gamma RT}$ (T in **kelvin**).`,
          R`Relate $a$ to the **bulk modulus** and show the Mach number is an inertia : elastic force ratio.`,
          R`Classify flows by Mach number and find the **Mach cone** angle.`,
          R`Use the compressible energy and momentum equations: $T_0/T$ and $p_0/p$ in terms of $M$.`,
          R`Decide when compressibility matters (error vs Bernoulli at a given $M$).`
        ]]
      ]
    },
    {
      num: '9.1', title: 'Compressible Flow and the Galilean Transformation',
      blocks: [
        ['para', R`So far $\rho$ has been constant. In a **compressible** flow density changes as well as pressure, temperature changes too, and **thermodynamics** matters. It happens at **high speeds** and **high accelerations** (and can matter with large height changes or convection). For this year: a gas (nearly always air), **one-dimensional, inviscid**, gravity unimportant.`],
        ['warn', 'Key Insight', [
          R`Systems are much easier to analyse when **steady**. A wave moving at constant speed $a$ into still gas is unsteady in the lab — so **ride with the wave**: add $a$ (in the opposite direction) to every velocity in the system.`,
          R`Before: gas ahead at $u = 0$, gas behind at $u$. After: gas enters the stationary wave at $a$ and leaves at $a - u$. Only works for elements moving at **constant** speed.`
        ]],
        ['svg', 'tf_galilean', 'Galilean transformation: adding the wave speed a (right to left) to everything makes the wave stationary, so the flow through it is steady.'],
      ]
    },
    {
      num: '9.2', title: 'Weak Waves and the Speed of Sound',
      blocks: [
        ['para', R`In an incompressible flow a pressure change is felt everywhere **instantly**. In a compressible flow it is carried by a **wave** at finite speed. **Weak waves** carry small changes (squares of changes negligible) and are **isentropic**. Sound is weak waves — acoustics.`],
        ['svg', 'tf_weak_wave', 'Weak wave made stationary: gas enters at a and leaves at a − δu with p + δp, ρ + δρ. Mass and momentum balances on the control volume give a.'],
        ['deriv', 'Derivation — speed of a weak wave', [
          ['t', R`Wave made stationary: gas enters at $a$ with $p, \rho$ and leaves at $a - \delta u$ with $p + \delta p$, $\rho + \delta\rho$. Per unit area:`],
          ['m', R`\text{Mass: } \rho a = (\rho + \delta\rho)(a - \delta u) \;\Rightarrow\; \rho\,\delta u = a\,\delta\rho`],
          ['m', R`\text{Momentum: } p - (p + \delta p) = (\rho+\delta\rho)(a-\delta u)^2 - \rho a^2 \;\Rightarrow\; -\delta p = a^2\delta\rho - 2a\rho\,\delta u = -a^2\delta\rho`],
          ['m', R`a^2 = \lim_{\delta\rho\to0}\frac{\delta p}{\delta\rho} = \left(\frac{\partial p}{\partial\rho}\right)_s`],
          ['t', R`Isentropic perfect gas: $p = k\rho^{\gamma}$ ⇒ $\partial p/\partial\rho = \gamma p/\rho = \gamma RT$.`]
        ]],
        ['disp', [ R`\boxed{a = \sqrt{\left(\frac{\partial p}{\partial\rho}\right)_s} = \sqrt{\gamma R T}} \tag{9.1}` ]],
        ['warn', 'Important', [
          R`$T$ **must** be in kelvin. Air ($R = 287$ J/kg K, $\gamma = 1.4$) at 288 K: $a = 340$ m/s.`
        ]]
      ]
    },
    {
      num: '9.3', title: 'Bulk Modulus and the Mach Number',
      blocks: [
        ['para', R`A compressible fluid behaves **elastically**: squeeze a lump of it and its volume changes. Stress ∝ strain, with the **bulk modulus** $K$ as the constant ($1/K$ is the compressibility):`],
        ['eq', [
          ['Bulk modulus', R`K = -V\frac{\delta p}{\delta V} = \rho\frac{\partial p}{\partial\rho}`, '[Pa]', 'Using dρ = −ρ dV/V. Value depends on the process — isentropic here.'],
          ['Speed of sound from K', R`a = \sqrt{K/\rho}`, '[m/s]', ''],
          ['Mach number', R`M = \sqrt{\frac{\rho u^2 l^2}{K l^2}} = \frac{u}{a}`, '[–]', 'Inertia : elastic force.']
        ]],
        ['warn', 'Note', [
          R`The slides title $K$ "bulk viscosity" — it is the bulk **modulus** of elasticity (units Pa), not a viscosity.`
        ]],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:520px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Regime</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Mach number</th></tr></thead><tbody><tr><td style="padding:6px 10px">Incompressible</td><td style="padding:6px 10px">M ≪ 1 (often M &lt; 0.3)</td></tr><tr><td style="padding:6px 10px">Subsonic</td><td style="padding:6px 10px">M &lt; 1</td></tr><tr><td style="padding:6px 10px">Transonic</td><td style="padding:6px 10px">0.9 &lt; M &lt; 1.1</td></tr><tr><td style="padding:6px 10px">Supersonic</td><td style="padding:6px 10px">M &gt; 1</td></tr><tr><td style="padding:6px 10px">Hypersonic</td><td style="padding:6px 10px">M ≫ 1</td></tr></tbody></table>']
      ]
    },
    {
      num: '9.4', title: 'Why the Speed of Sound Matters: the Mach Cone',
      blocks: [
        ['para', R`A small moving object sends out weak waves continuously; each spreads as a circle at $a$. **Subsonic** ($u < a$): the waves stay ahead of the object — the gas ahead "hears" it coming and adjusts. **Supersonic** ($u > a$): the object outruns its own waves, which pile up on a **Mach cone**; outside it is a **zone of silence**.`],
        ['svg', 'tf_wavefronts', 'Subsonic: the waves stay ahead of the object. Supersonic: the object outruns its waves, which pile up on a Mach cone with sin θ = 1/M.'],
        ['disp', [ R`\boxed{\sin\theta = \frac{a\,\Delta t}{u\,\Delta t} = \frac{1}{M}} \tag{9.2}` ]],
        ['warn', 'Key Insight', [
          R`Supersonic flows change **dramatically**: their boundaries are sharp changes in properties (shock waves, Topic 12).`
        ]]
      ]
    },
    {
      num: '9.5', title: 'Compressible Flow Equations: Stagnation Quantities',
      blocks: [
        ['para', R`**Mass:** exactly as before, but $\rho$ is now a variable: $\dot m = \rho A u = \rho A M\sqrt{\gamma RT}$. **Energy:** the SFEE with no shaft work, negligible height change, isentropic along a streamline gives $h + u^2/2 = $ const.`],
        ['para', R`A **stagnation** (total) quantity is the value it would have if the flow were brought to rest: $h_0 = h + u^2/2 = C_pT_0$.`],
        ['deriv', 'Derivation — stagnation temperature and pressure', [
          ['m', R`C_pT_0 = C_pT + \frac{u^2}{2} \;\Rightarrow\; \frac{T_0}{T} = 1 + \frac{u^2}{2C_pT}`],
          ['t', R`With $a^2 = \gamma RT = \gamma(C_p - C_v)T$, $\frac{u^2}{2C_pT} = \frac{u^2}{2a^2}\cdot\frac{\gamma(C_p-C_v)}{C_p} = \frac{\gamma-1}{2}M^2$.`],
          ['t', R`Isentropic: $p/\rho^{\gamma} = p_0/\rho_0^{\gamma}$, and with $p = \rho RT$, $p_0/p = (T_0/T)^{\gamma/(\gamma-1)}$.`]
        ]],
        ['disp', [ R`\boxed{\frac{T_0}{T} = 1 + \frac{\gamma-1}{2}M^2 \qquad \frac{p_0}{p} = \left(1 + \frac{\gamma-1}{2}M^2\right)^{\frac{\gamma}{\gamma-1}} \qquad \frac{\rho_0}{\rho} = \left(1 + \frac{\gamma-1}{2}M^2\right)^{\frac{1}{\gamma-1}}} \tag{9.3}` ]],
        ['eq', [
          ['Mass flow with Mach number', R`\dot m = \rho A u = \rho A M\sqrt{\gamma RT} = pAM\sqrt{\frac{\gamma}{RT}}`, '[kg/s]', 'ρ varies — use p and T.'],
          ['Stagnation enthalpy', R`h_0 = h + \tfrac12u^2 = C_pT_0`, '[J/kg]', 'Constant without heat or work — also across shocks.'],
          ['Mach number from a pressure ratio', R`M^2 = \frac{2}{\gamma-1}\left[\left(\frac{p_0}{p}\right)^{\frac{\gamma-1}{\gamma}} - 1\right]`, '[–]', 'Inverse of (9.3).'],
          ['Air (γ = 1.4) shortcuts', R`\frac{T_0}{T} = 1 + 0.2M^2,\quad \frac{p_0}{p} = (1 + 0.2M^2)^{3.5}`, '[–]', '']
        ]],
        ['warn', 'Key Insight', [
          R`**A thermometer in a fast flow reads $T_0$, not $T$** — it brings the gas to rest at its surface. At $T = 290$ K: $M = 0.5$ ⇒ $T_0 = 304.5$ K (30.5 °C); $M = 2$ ⇒ $T_0 = 522$ K (250 °C). Heating effects in supersonic flow are large.`
        ]]
      ]
    },
    {
      num: '9.6', title: 'When Is a Flow Compressible?',
      blocks: [
        ['para', R`Expand the isentropic $p_0/p$ with the binomial series, using $x = \frac{\gamma-1}{2}M^2$ and $\frac{\gamma}{2}M^2p = \tfrac12\rho u^2$:`],
        ['disp', [ R`\boxed{\frac{p_0 - p}{\tfrac12\rho u^2} = 1 + \frac{M^2}{4} + \frac{2-\gamma}{24}M^4 + \cdots} \tag{9.4}` ]],
        ['svg', 'tf_cp_mach', 'Compressibility error relative to Bernoulli: about 1% at M = 0.2 and 2% at M = 0.3, growing rapidly towards M = 1.'],
        ['para', R`At $M = 0$ this is exactly **Bernoulli** (pressure coefficient 1). The extra terms are the compressibility error: about **1% at $M = 0.2$**, about **2% at $M = 0.3$** (the usual rule), and it grows rapidly towards the transonic range.`],
        ['warn', 'When to use', [
          R`$M < 0.3$: incompressible equations (Bernoulli, hydraulics) are fine. $M > 0.3$, or any time temperature or density changes are asked for: use the compressible relations (9.3).`
        ]]
      ]
    }
  ]
}
