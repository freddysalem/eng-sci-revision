{
  key: 'tf_energy', area: 'found', num: '1', week: 'Week 1',
  name: 'Energy, Fluids & Conservation Laws',
  triggers: 'mean velocity from a profile · flow rate · Pitot-static tube · manometer · Bernoulli · head · SFEE · shaft work · jet on a moving vane · polytropic',
  sections: [
    {
      num: '', title: 'Revision Objectives — Energy, Fluids & Conservation Laws',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Define energy and power, and list the ways energy is stored and transferred in a thermofluid system.`,
          R`Explain what makes a fluid different from a solid ($\tau \propto \dot\gamma$, not $\tau \propto \gamma$) and quote typical $\rho$, $\mu$ for air, water and oil.`,
          R`Apply **mass conservation**: $\dot m = \rho u_m A$, and integrate a velocity profile $u(r)$ to get $Q$ and $u_m$.`,
          R`State the **Bernoulli equation**, its five assumptions, and when it fails; use it for a **Pitot-static tube**.`,
          R`Convert between pressure and **head** ($h = p/\rho g$, $h_v = u^2/2g$).`,
          R`Write the **Steady Flow Energy Equation** and solve a control-volume momentum problem using the six-step path.`
        ]]
      ]
    },
    {
      num: '1.1', title: 'Energy and Power',
      blocks: [
        ['para', R`Thermofluids is a unit about **energy**: how it is stored in a fluid, how it is transferred, and how flowing fluids carry it. Energy is a quantity that effects a change in the state of a system. **Energy transfer is not a property of a system** — it happens across the boundary.`],
        ['eq', [
          ['Energy', R`[E] = \mathrm{N\,m} \equiv \mathrm{J}`, '[J]', 'Force × distance; dimensions ML²/T².'],
          ['Power', R`P = \frac{dE}{dt}, \qquad \mathrm{J/s} \equiv \mathrm{W}`, '[W]', 'Rate of energy change. Makes most sense for open, flowing systems.']
        ]],
        ['list', R`**Stores** of energy:`, false, [
          R`**Enthalpy / internal energy** — indicated by temperature; includes low-grade energy such as warm air.`,
          R`**Kinetic energy** (moving mass) and **potential energy** (change in height of a mass).`,
          R`**Chemical**, **electrical** and **nuclear** energy.`
        ]],
        ['list', R`**Transfers** of energy across a boundary:`, false, [
          R`**Work** — a force applied at the boundary (e.g. a turbine shaft).`,
          R`**Heat** — thermal energy driven by a temperature gradient.`,
          R`Chemical reaction (combustion), fuel cells, batteries, alternators and motors.`
        ]]
      ]
    },
    {
      num: '1.2', title: 'What Is a Fluid?',
      blocks: [
        ['para', R`"A liquid or a gas" is descriptive but not useful (and not quite true). For engineering we treat a fluid as a **continuum**, so it can be described by differential equations, and define it by how it responds to stress.`],
        ['svg', 'tf_solid_fluid', 'Under a constant shear stress a solid strains by a fixed amount and stops; a fluid keeps deforming for as long as the stress acts.'],
        ['warn', 'Key Insight', [
          R`A **solid** under shear stress deforms by a fixed amount and stops: $\tau \propto \gamma$ (stress ∝ strain).`,
          R`A **fluid** keeps deforming for as long as the stress acts: $\tau \propto \dot\gamma$ (stress ∝ **strain rate**).`
        ]],
        ['para', R`Fluids are told apart by their **properties**: density $\rho$ (or specific volume $v = 1/\rho$), viscosity $\mu$, and for some flows thermodynamic properties such as $R$ and $\gamma$.`],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:520px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Fluid</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">ρ (kg/m³)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">μ (kg/m s)</th></tr></thead><tbody><tr><td style="padding:7px 10px">Air</td><td style="padding:7px 10px">1.2</td><td style="padding:7px 10px">1.7 × 10⁻⁵</td></tr><tr><td style="padding:7px 10px">Water</td><td style="padding:7px 10px">1.0 × 10³</td><td style="padding:7px 10px">1.0 × 10⁻³</td></tr><tr><td style="padding:7px 10px">Oil</td><td style="padding:7px 10px">870</td><td style="padding:7px 10px">0.25</td></tr></tbody></table>'],
        ['para', R`Oil has a similar $\rho$ to water but a much larger $\mu$; air has much smaller $\rho$ **and** $\mu$. Memorise these three rows — they turn up in almost every problem.`],
        ['warn', 'Note', [
          R`The slides write specific volume as $\nu = 1/\rho$. These notes use $v$ instead, because $\nu$ means **kinematic viscosity** $\mu/\rho$ everywhere else in the unit.`
        ]]
      ]
    },
    {
      num: '1.3', title: 'Conservation Equations',
      blocks: [
        ['para', R`Fluid mechanics is about understanding and manipulating flows to design artefacts and processes. Every analysis — from a hand calculation to a CFD model — rests on **conservation equations**: physical quantities do not appear or disappear.`],
        ['list', null, false, [
          R`**Mass** — nearly always needed.`,
          R`**Momentum** — nearly always needed (Newton's second law for a continuum).`,
          R`**Energy** — often needed, and essential once density changes (compressible flow, Week 5).`
        ]]
      ]
    },
    {
      num: '1.4', title: 'Conservation of Mass',
      blocks: [
        ['para', R`Rate of change of mass in a control volume = net rate of mass flowing across its boundary. In a **steady** flow the left-hand side is zero, so what goes in comes out. "Love the conservation of mass: it is your friend."`],
        ['eq', [
          ['Mass flow rate (1-D, steady)', R`\dot m = \rho\, u_m A = \text{const.}`, '[kg/s]', 'u_m is the mean velocity over the cross-section A.'],
          ['Volume flow rate (incompressible)', R`Q = u_m A = \frac{\dot m}{\rho} = \text{const.}`, '[m³/s]', 'ρ fixed, so volume is conserved too.'],
          ['Flux', R`\text{flux} = \frac{\text{flow rate}}{\text{area}}`, '', 'Mean velocity u_m = Q/A is the volume flux.']
        ]],
        ['para', R`Near a wall the velocity varies from zero (no slip) to a maximum, so to get $Q$ we must **integrate the profile**. In a circular pipe $u = u(r)$ only, and the elemental area is a thin ring:`],
        ['svg', 'tf_ring', 'u depends only on r, so integrate over thin rings: a ring of radius r and thickness δr has area ≈ 2πr δr (a rectangle of length 2πr).'],
        ['deriv', 'Derivation — flow rate through a pipe', [
          ['m', R`\delta A = \pi(r+\delta r)^2 - \pi r^2 = 2\pi r\,\delta r + \delta r^2`],
          ['t', R`For a "small" ring, $\delta r^2 \ll 2\pi r\,\delta r$, so the ring is approximately a rectangle of length $2\pi r$: $dA = 2\pi r\,dr$.`],
          ['m', R`dQ = u\,dA \;\Rightarrow\; Q = \int_A u\,dA = 2\pi\int_0^R u\,r\,dr`],
          ['m', R`u_m = \frac{Q}{\pi R^2} = \frac{2}{R^2}\int_0^R u\,r\,dr`]
        ]],
        ['disp', [ R`\boxed{Q = 2\pi\int_0^R u\,r\,dr \qquad u_m = \frac{2}{R^2}\int_0^R u\,r\,dr} \tag{1.1}` ]],
        ['warn', 'Recall Knowledge', [
          R`**When is something "small"?** A quantity prefixed $\delta$ is small when $\delta f \gg (\delta f)^2$, so squares and higher powers can be dropped. Over a small $\delta x$, $f$ is linear; letting $\delta x \to 0$ gives $df/dx$. Non-small changes use $\Delta$.`
        ]],
        ['ex', 'Example — flow rate from a velocity profile (lecture)', [
          ['t', R`Fluid flows along a pipe of diameter 25 mm with $u(r) = 0.9\left(1 - r^2/R^2\right)$ m/s. Find $Q$ and $u_m$.`],
          ['ans'],
          ['m', R`Q = 2\pi\int_0^R 0.9\left(1-\frac{r^2}{R^2}\right) r\,dr = 1.8\pi\left[\frac{r^2}{2}-\frac{r^4}{4R^2}\right]_0^R = 0.45\pi R^2`],
          ['m', R`R = 0.0125\ \text{m} \Rightarrow Q = 0.45\pi(0.0125)^2 = 2.21\times10^{-4}\ \text{m}^3/\text{s}`],
          ['m', R`u_m = \frac{Q}{\pi R^2} = 0.45\ \text{m/s}`],
          ['t', R`The mean is exactly **half the centreline speed** (0.9 m/s) — a property of the parabolic laminar profile you will meet again in Topic 6.`]
        ]],
        ['warn', 'When to use', [
          R`Any time you are given a **velocity profile** $u(r)$ and asked for flow rate, mean velocity, or anything per unit area. Use $dA = 2\pi r\,dr$ for a pipe; $dA = b\,dy$ for a channel of width $b$.`
        ]]
      ]
    },
    {
      num: '1.5', title: 'The Momentum Equation and Head',
      blocks: [
        ['para', R`The momentum equation is **Newton's second law** for a continuum. Because material crosses the boundary of a control volume, we use forces **per unit area** (pressure, shear stress) and quantities **per unit volume** (density).`],
        ['disp', [ R`\frac{D(\rho\mathbf{u})}{Dt} = \sum \frac{\text{forces}}{\text{volume}} \tag{1.2}` ]],
        ['para', R`The forces per unit volume are **static pressure**, **viscous** forces (friction) and **gravity**.`],
        ['warn', 'Recall Knowledge', [
          R`**Total (material) derivative.** A field variable $\psi(\mathbf{x},t)$ changes in time *and* as the fluid moves: $\dfrac{D\psi}{Dt} = \dfrac{\partial\psi}{\partial t} + (\mathbf{u}\cdot\nabla)\psi$. For velocity, $\partial\mathbf{u}/\partial t$ is the unsteady term and $(\mathbf{u}\cdot\nabla)\mathbf{u}$ the **advective** term.`
        ]],
        ['para', R`Pressure drops are often expressed as a **head** — the height of liquid that would rise in a vertical (piezometer) tube. Always say which fluid $\rho$ refers to (e.g. "m of water", "mm of mercury").`],
        ['eq', [
          ['Pressure head', R`h = \frac{p}{\rho g}`, '[m]', 'Ratio of pressure to the hydrostatic pressure gradient.'],
          ['Velocity head', R`h_v = \frac{\tfrac12\rho u^2}{\rho g} = \frac{u^2}{2g}`, '[m]', 'Ratio of inertia to the hydrostatic pressure gradient.']
        ]],
        ['list', R`**Simplifying assumptions** used for the viscous and turbulent flows in this unit:`, true, [
          R`**Steady** — a measurement at a point does not change over time.`,
          R`**Incompressible** — density does not change significantly with time or speed.`,
          R`**Newtonian** fluid — $\tau = \mu\, du/dy$ (Topic 6).`,
          R`**One-dimensional** — velocity described by a single scalar.`
        ]]
      ]
    },
    {
      num: '1.6', title: 'Flow Development and Entry Length',
      blocks: [
        ['para', R`A flow entering a pipe with a uniform velocity is gradually slowed at the wall by **no slip**. The uniform core shrinks until the profile stops changing: the flow is then **fully developed**. While it is **developing**, the momentum flux changes, which adds a hard-to-evaluate term to the momentum equation — so in this unit we analyse fully developed flow only.`],
        ['svg', 'tf_entry', 'No slip slows the fluid at the walls; boundary layers grow inwards until they meet — after the entry length the profile stops changing (fully developed).'],
        ['eq', [
          ['Momentum flux (circular pipe)', R`\frac{1}{A}\int_A \rho u^2\,dA = \frac{2}{R^2}\int_0^R \rho\,u(r)^2\,r\,dr`, '[Pa]', 'Changes as u(r) develops.'],
          ['Entry length, laminar (Langhaar)', R`\frac{l_e}{D} = 0.058\,Re`, '[–]', 'Can be very long: Re = 2000 gives l_e ≈ 116 D.'],
          ['Entry length, turbulent (Latzko)', R`\frac{l_e}{D} = 0.693\,Re^{1/4}`, '[–]', 'Can underestimate: turbulence takes time to develop.']
        ]],
        ['warn', 'Key Insight', [
          R`Entry lengths are typically **50–100 pipe diameters**. "Hard to evaluate" does not mean "unimportant" — short pipes may never become fully developed.`
        ]]
      ]
    },
    {
      num: '1.7', title: 'The Bernoulli Equation',
      blocks: [
        ['para', R`The simplest momentum equation. It links pressure and velocity along a streamline in an ideal flow:`],
        ['disp', [ R`\boxed{p_0 = p + \tfrac12\rho u^2 + \rho g\,\Delta z} \tag{1.3}` ]],
        ['list', R`Meaning of each term:`, false, [
          R`$p$ — **static pressure**.`,
          R`$\tfrac12\rho u^2$ — **inertia** (dynamic pressure).`,
          R`$\rho g\Delta z$ — gravitational body force.`,
          R`$p_0$ — **stagnation pressure**: the pressure when the fluid is brought to rest ($u = 0$), the maximum pressure the flow can generate.`
        ]],
        ['list', R`**Assumptions** (all must hold):`, true, [
          R`Steady.`, R`Incompressible.`, R`Inviscid (no viscous forces).`, R`One-dimensional.`, R`Fully developed / no velocity gradient along the streamline.`
        ]],
        ['warn', 'Key Insight', [
          R`**Speed is achieved at the expense of pressure**: high speed ↔ low pressure.`,
          R`Because it is **inviscid**, Bernoulli fails near boundaries and wherever there are velocity gradients — i.e. most internal flows. Rarely rely on it for design numbers.`
        ]],
        ['warn', 'Reflection Point', [
          R`Is Bernoulli an energy equation? It can be derived from the SFEE, but every term has the dimensions of **pressure (stress)**, so dimensionally it is a **momentum** equation. Dividing by $\dot m$ in the derivation is what changes the dimensions — this matters in dimensional analysis.`
        ]]
      ]
    },
    {
      num: '1.8', title: 'Bernoulli Applications: Pitot Tube and Roof Tiles',
      blocks: [
        ['para', R`A **Pitot-static tube** measures velocity at a point by comparing the stagnation pressure $p_0$ (hole facing the flow) with the static pressure $p_s$ (side holes, about 8 tube diameters back). Boundary-layer effects are negligible when $Re > 1000$ based on tube diameter; compressible flows need a correction.`],
        ['svg', 'tf_pitot', 'Pitot-static tube: the nose hole senses the stagnation pressure p₀, the side holes the static pressure p_s; the manometer reads p₀ − p_s = ρ_m g ΔH.'],
        ['deriv', 'Derivation — Pitot-static tube', [
          ['m', R`p_0 + \rho g z_0 = p_s + \tfrac12\rho U^2 + \rho g z_s, \qquad \rho g(z_s - z_0) \approx 0`],
          ['m', R`U = \sqrt{\frac{2(p_0 - p_s)}{\rho}}, \qquad p_0 - p_s = \rho_m g\,\Delta H`]
        ]],
        ['eq', [
          ['Pitot-static velocity', R`U = \sqrt{\frac{2(p_0-p_s)}{\rho}}`, '[m/s]', 'p₀ from the facing hole, p_s from the side holes.'],
          ['Manometer reading', R`p_0 - p_s = \rho_m g\,\Delta H`, '[Pa]', 'ρ_m = manometer fluid density, ΔH = level difference.']
        ]],
        ['ex', 'Example — Pitot-static tube in water (lecture)', [
          ['t', R`A mercury manometer ($\rho_m = 13\,500$ kg/m³) on a Pitot-static tube in water shows $\Delta H = 9.5$ cm. Find the water speed.`],
          ['ans'],
          ['m', R`p_0 - p_s = \rho_m g\Delta H = 13\,500 \times 9.81 \times 0.095 = 1.26\times10^4\ \text{Pa}`],
          ['m', R`U = \sqrt{\frac{2\times1.26\times10^4}{1000}} = 5.0\ \text{m/s}`]
        ]],
        ['warn', 'Note', [
          R`Strictly, the manometer limbs above the mercury are full of water, so $p_0 - p_s = (\rho_m - \rho)g\Delta H = 1.17\times10^4$ Pa, giving $U = 4.8$ m/s. The lecture uses $\rho_m g\Delta H$; use whichever your question specifies, and say which you used.`
        ]],
        ['ex', 'Example — when do roof tiles blow off? (lecture)', [
          ['t', R`A tile of thickness $t = 10$ mm, density $\rho_t = 2000$ kg/m³ sits on a roof at $\theta = 30°$. Wind of speed $u$ blows over it (air $\rho = 1.2$ kg/m³); still air underneath is at $p_a \equiv p_0$. At what speed does it lift?`],
          ['svg', 'tf_rooftile', 'Wind over the roof lowers the pressure above the tile to p_a − ½ρu²; the still air underneath stays at p_a.'],
          ['ans'],
          ['t', R`Weight $mg = A t \rho_t g$. Above the tile $p = p_a - \tfrac12\rho u^2$, so the net upward pressure difference is $\Delta p = \tfrac12\rho u^2$. Lift-off when the pressure force balances the weight:`],
          ['m', R`\tfrac12\rho u^2 A\cos\theta = A t\rho_t g \;\Rightarrow\; u = \left(\frac{2t\rho_t g}{\rho\cos\theta}\right)^{1/2}`],
          ['m', R`u = \left(\frac{2(0.01)(2000)(9.81)}{1.2\cos30^\circ}\right)^{1/2} = 19.4\ \text{m/s} \equiv 70\ \text{km/h}`]
        ]],
        ['warn', 'Warning', [
          R`The slides write $\Delta p = \tfrac12\rho g u^2$ with a stray $g$ — that has units of N/m³, not Pa. The slide's own answer (19.4 m/s) uses $\tfrac12\rho u^2$, as above.`
        ]],
        ['warn', 'When to use', [
          R`Bernoulli is fine for **short, fast, accelerating** flows away from walls: Pitot tubes, flow over a roof, a jet from a tank. It is **not** fine for pressure drops along pipes — that needs viscosity (Topics 4–8).`
        ]]
      ]
    },
    {
      num: '1.9', title: 'Conservation of Energy: the SFEE',
      blocks: [
        ['para', R`The specific energy carried by the fluid is conserved. Enthalpy $h = u + p/\rho$ (specific internal energy plus flow work) builds in the work done to keep the flow moving.`],
        ['eq', [
          ['Specific energy carried by the flow', R`e = h + \tfrac12 u^2 + g z, \qquad h = u + \frac{p}{\rho}`, '[J/kg]', 'Calculated from average quantities in the control volume.'],
          ['First Law (rate form)', R`\frac{D(\rho e)}{Dt} = \dot Q + \dot W`, '[W/m³]', 'Rate of change of energy = heat + work rates.']
        ]],
        ['disp', [ R`\boxed{\dot m\,\Delta\!\left(h + \tfrac12 u^2 + g z\right) = \dot Q + \dot W_s} \tag{1.4}` ]],
        ['list', R`**SFEE assumptions:**`, true, [
          R`Steady, one-dimensional flow; open system.`,
          R`Constant rates of heat transfer and work.`,
          R`No other energy sources (e.g. combustion).`,
          R`Viscous work on the boundary neglected.`
        ]],
        ['para', R`$\dot W_s$ is **shaft work**. Dividing by $\dot m$ gives the specific form with $q$ and $w$. Kinetic and potential terms are often negligible. For an isothermal incompressible flow the SFEE reduces to Bernoulli — but the dimensions change when you divide through, which matters in dimensional analysis.`]
      ]
    },
    {
      num: '1.10', title: 'Control-Volume Momentum: the Six-Step Path',
      blocks: [
        ['list', R`**Path to a solution** for any control-volume problem:`, true, [
          R`Draw the situation and set out the data in **SI units**.`,
          R`Ask what is physically going on.`,
          R`**Make the situation steady** (move with the moving part if necessary).`,
          R`Draw your **control volume**.`,
          R`Mass balance.`,
          R`Momentum balance(s): force = momentum flux in − momentum flux out (with signs).`
        ]],
        ['ex', 'Example — force on a Pelton wheel bucket (lecture)', [
          ['t', R`A water jet ($d = 0.20$ m, $v_1 = 10$ m/s, $\rho = 1000$ kg/m³) strikes buckets moving at $u = 4$ m/s. Each bucket turns the flow through 130°, so it leaves at 50° to the reverse direction. No losses. Find the force on the rotor at constant speed.`],
          ['svg', 'tf_pelton', 'Riding with the bucket makes it steady: the jet arrives at v₁ − u and leaves backwards at 50° to the reverse direction.'],
          ['ans'],
          ['t', R`**Make it steady:** ride with the bucket, so the jet arrives at $v_1 - u = 6$ m/s.`],
          ['t', R`**Mass:** for the whole wheel every drop of the jet is used, so $\dot m = \rho\frac{\pi}{4}d^2 v_1 = 1000 \times \frac{\pi}{4}(0.2)^2 \times 10 = 314$ kg/s. No losses, so the relative speed out is also 6 m/s.`],
          ['t', R`**Momentum in the jet direction:** in $= +\dot m(v_1-u)$; out $= -\dot m(v_1-u)\cos50^\circ$ (it leaves backwards).`],
          ['m', R`F = \dot m(v_1-u)\left(1 + \cos 50^\circ\right) = 314 \times 6 \times 1.643 = 3.10\ \text{kN}`]
        ]],
        ['warn', 'Warning', [
          R`The slides give $F = \dot m(v_1-u)(1 - \cos50^\circ) = 673$ N. Their own figure shows the outflow pointing **backwards**, so its momentum is negative and subtracting it **adds**: $1 + \cos50^\circ$. This matches the standard Pelton result $F = \dot m(v_1-u)(1+\cos\beta)$. Check with your lecturer which they intend.`
        ]],
        ['warn', 'When to use', [
          R`Jets hitting plates, vanes or buckets; forces on bends and nozzles. Always make the problem steady first, then momentum flux out − in = sum of forces **on the fluid** (the force on the vane is equal and opposite).`
        ]]
      ]
    },
    {
      num: '1.11', title: 'Thermodynamics Refresher: Polytropic Compression',
      blocks: [
        ['para', R`A worked thermodynamics example from the first live session, reviewing a **closed system** of perfect gas. Equation of state $p = \rho R T = mRT/V$; polytropic process $p/\rho^n = \text{const}$.`],
        ['eq', [
          ['Polytropic index', R`n = \frac{\ln(p_1/p_2)}{\ln(V_2/V_1)}`, '[–]', 'From p₁/p₂ = (V₂/V₁)ⁿ.'],
          ['Entropy change, perfect gas', R`s_2 - s_1 = c_v\ln\frac{T_2}{T_1} + R\ln\frac{V_2}{V_1}`, '[J/kg K]', 'From the First and Second Laws.'],
          ['Polytropic work (by the gas)', R`W = \int_1^2 p\,dV = \frac{p_2V_2 - p_1V_1}{1-n}`, '[J]', 'Sign convention: work done BY the fluid is positive.'],
          ['First Law, closed system', R`\Delta U = Q - W, \qquad \Delta U = m c_v (T_2 - T_1)`, '[J]', '']
        ]],
        ['ex', 'Example — irreversible polytropic compression (lecture)', [
          ['t', R`Air in a piston-cylinder: $p_1 = 3$ bar, $T_1 = 303$ K, $V_1 = 60$ cm³ → $V_2 = 12$ cm³, $s_2 - s_1 = -0.1152$ kJ/kg K, $c_v = 718$, $R = 287$ J/kg K. Find (a) $n$, (b) the work, (c) the heat transfer.`],
          ['ans'],
          ['t', R`(a) From the entropy relation with $V_2/V_1 = 1/5$: $T_2/T_1 = 1.620$. From the equation of state $p_1/p_2 = (T_1/T_2)(V_2/V_1) = 0.123$, so $n = \ln(p_1/p_2)/\ln(V_2/V_1) = 1.30$.`],
          ['m', R`W = \frac{p_1V_1}{1-n}\left(\frac{V_2/V_1}{p_1/p_2} - 1\right) = \frac{18}{-0.30}(1.621 - 1) = -37.2\ \text{J}`],
          ['m', R`\Delta U = \frac{p_1V_1}{R}c_v\left(\frac{T_2}{T_1}-1\right) = 27.9\ \text{J} \;\Rightarrow\; Q = \Delta U + W = -9.3\ \text{J}`],
          ['t', R`Negative work: work is done **on** the gas. Negative heat: heat is **rejected**.`]
        ]],
        ['warn', 'Note', [
          R`The slides quote $W = -37.9$ J and $Q = -9.70$ J. Re-computing with their own formulas gives $W = -37.2$ J and $Q = -9.3$ J (and $-37.9$ and $-9.70$ are not consistent with each other through $\Delta U = 27.9$ J). The method is what matters.`
        ]]
      ]
    }
  ]
}
