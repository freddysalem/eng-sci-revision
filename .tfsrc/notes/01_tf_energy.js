{
  key: 'tf_energy', area: 'found', num: '1', week: 'Week 1',
  name: 'Energy, Fluids & Conservation Laws',
  triggers: 'mean velocity from a profile · flow rate · continuity A₁u₁ = A₂u₂ · Pitot-static tube · manometer · Bernoulli · head · SFEE · shaft work · jet on a moving vane · polytropic',
  sections: [
    {
      num: '', title: 'Revision Objectives — Energy, Fluids & Conservation Laws',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Define energy and power, and list the ways energy is stored and transferred in a thermofluid system.`,
          R`Explain what makes a fluid different from a solid ($\tau \propto \dot\gamma$, not $\tau \propto \gamma$) and quote typical $\rho$, $\mu$ for air, water and oil.`,
          R`Apply **mass conservation**: $\dot m = \rho u_m A$, $A_1u_1 = A_2u_2$, and integrate a velocity profile $u(r)$ to get $Q$ and $u_m$.`,
          R`Derive and state the **Bernoulli equation**, its assumptions, and when it fails; use it for a **Pitot-static tube** with a **manometer**.`,
          R`Convert between pressure and **head** ($h = p/\rho g$, $h_v = u^2/2g$).`,
          R`Write the **Steady Flow Energy Equation** with its sign convention, reduce it to Bernoulli, and solve a control-volume momentum problem using the six-step path.`
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
          R`**Enthalpy / internal energy** — energy held in the random motion of the fluid's molecules, **associated with (and indicated by) its temperature**. This includes **low-grade** energy such as warm air: there is a lot of it, but because it is close to ambient temperature little of it can be turned back into work.`,
          R`**Kinetic energy** (moving mass) and **potential energy** (change in height of a mass).`,
          R`**Chemical**, **electrical** and **nuclear** energy.`
        ]],
        ['list', R`**Transfers** of energy across a boundary:`, false, [
          R`**Work** — a force applied at the boundary (e.g. a turbine shaft).`,
          R`**Heat** — thermal energy driven by a temperature gradient.`,
          R`**Conversion processes and devices** listed on the slides — chemical reaction (combustion), fuel cells, batteries, electrical alternators and motors. These convert one store into another (chemical or electrical ↔ thermal or mechanical); what actually crosses the boundary of a fluid system is then work, heat, or energy carried in by the fuel.`
        ]]
      ]
    },
    {
      num: '1.2', title: 'What Is a Fluid?',
      blocks: [
        ['para', R`"A liquid or a gas" is descriptive but not useful (and not quite true). For engineering we treat a fluid as a **continuum**, so it can be described by differential equations, and define it by how it responds to stress.`],
        ['svg', 'tf_solid_fluid', 'Under a constant shear stress τ a solid strains by a fixed angle γ and stops; a fluid keeps deforming (γ₂ > γ₁) for as long as the stress acts — stress sets the strain rate dγ/dt.'],
        ['warn', 'Key Insight', [
          R`A **solid** under shear stress deforms by a fixed amount and stops: $\tau \propto \gamma$ (stress ∝ strain).`,
          R`A **fluid** keeps deforming for as long as the stress acts: $\tau \propto \dot\gamma = d\gamma/dt$ (stress ∝ **strain rate**).`
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
          ['Mass flow rate (1-D, steady)', R`\dot m = \rho\, u_m A = \text{const.}`, '[kg/s]', 'uₘ is the mean velocity over the cross-section A.'],
          ['Volume flow rate (incompressible)', R`Q = u_m A = \frac{\dot m}{\rho} = \text{const.}`, '[m³/s]', 'ρ fixed, so volume is conserved too.'],
          ['Continuity between two sections', R`\rho_1 A_1 u_1 = \rho_2 A_2 u_2 \;\xrightarrow{\ \rho\ \text{const}\ }\; A_1u_1 = A_2u_2`, '[kg/s], [m³/s]', 'Halve the diameter → quarter the area → four times the speed.'],
          ['Flux', R`\text{flux} = \frac{\text{flow rate}}{\text{area}}`, '', 'Mean velocity uₘ = Q/A is the volume flux.']
        ]],
        ['para', R`Near a wall the velocity varies from zero (no slip) to a maximum, so to get $Q$ we must **integrate the profile**. In a circular pipe $u = u(r)$ only, and the elemental area is a thin ring:`],
        ['svg', 'tf_ring', 'u depends only on r, so integrate over thin rings: a ring of radius r and thickness δr has area ≈ 2πr δr (a rectangle of length 2πr).'],
        ['deriv', 'Derivation — flow rate through a pipe', [
          ['m', R`\delta A = \pi(r+\delta r)^2 - \pi r^2 = \pi\left(r^2 + 2r\,\delta r + \delta r^2\right) - \pi r^2 = 2\pi r\,\delta r + \pi\,\delta r^2`],
          ['t', R`The dropped term is a fraction $\dfrac{\pi\,\delta r^2}{2\pi r\,\delta r} = \dfrac{\delta r}{2r}$ of the kept one. For a "small" ring ($\delta r \ll r$) this is negligible: $\pi\,\delta r^2 \ll 2\pi r\,\delta r$, so the ring is approximately a rectangle of length $2\pi r$ and width $\delta r$. In the limit $\delta r \to 0$: $dA = 2\pi r\,dr$.`],
          ['m', R`dQ = u\,dA \;\Rightarrow\; Q = \int_A u\,dA = 2\pi\int_0^R u\,r\,dr`],
          ['m', R`u_m = \frac{Q}{\pi R^2} = \frac{2}{R^2}\int_0^R u\,r\,dr`]
        ]],
        ['disp', [ R`\boxed{Q = 2\pi\int_0^R u\,r\,dr \qquad u_m = \frac{2}{R^2}\int_0^R u\,r\,dr} \tag{1.1}` ]],
        ['warn', 'Warning', [
          R`The course handout writes $\delta A = 2\pi r\,\delta r + \delta r^2$ — the second term is missing its $\pi$. It is $\pi\,\delta r^2$; the conclusion $dA = 2\pi r\,dr$ is unaffected because that term is dropped anyway.`
        ]],
        ['warn', 'Recall Knowledge', [
          R`**When is something "small"?** A change prefixed $\delta$ is small when it is small compared with the quantity itself ($|\delta f| \ll |f|$, e.g. $\delta r \ll r$). Then $(\delta f)^2 \ll |f|\,|\delta f|$, so squared and higher-order terms are negligible next to the first-order ones and can be dropped (the handout writes this as $\delta f \gg (\delta f)^2$). Over a small $\delta x$, $f$ is linear; letting $\delta x \to 0$ gives $df/dx$. Non-small changes use $\Delta$.`
        ]],
        ['ex', 'Example — flow rate from a velocity profile (lecture)', [
          ['t', R`Fluid flows along a pipe of diameter 25 mm with $u(r) = 0.9\left(1 - r^2/R^2\right)$ m/s. Find $Q$ and $u_m$.`],
          ['ans'],
          ['m', R`Q = 2\pi\int_0^R 0.9\left(1-\frac{r^2}{R^2}\right) r\,dr = 1.8\pi\left[\frac{r^2}{2}-\frac{r^4}{4R^2}\right]_0^R = 1.8\pi\cdot\frac{R^2}{4} = 0.45\pi R^2`],
          ['m', R`R = 0.0125\ \text{m} \Rightarrow Q = 0.45\pi(0.0125)^2 = 2.21\times10^{-4}\ \text{m}^3/\text{s}`],
          ['m', R`u_m = \frac{Q}{\pi R^2} = 0.45\ \text{m/s}`],
          ['t', R`The mean is exactly **half the centreline speed** (0.9 m/s) — a property of the parabolic laminar profile you will meet again in Topic 6.`]
        ]],
        ['warn', 'When to use', [
          R`Any time you are given a **velocity profile** $u(r)$ and asked for flow rate, mean velocity, or anything per unit area. Use $dA = 2\pi r\,dr$ for a pipe; $dA = b\,dy$ for a channel of width $b$.`,
          R`Any time the **area changes** (contraction, nozzle, venturi, jet): $A_1u_1 = A_2u_2$ gives the second velocity — usually the first line before Bernoulli or a momentum balance.`
        ]]
      ]
    },
    {
      num: '1.5', title: 'The Momentum Equation and Head',
      blocks: [
        ['para', R`The momentum equation is **Newton's second law** for a continuum. Because material crosses the boundary of a control volume, we work with **quantities per unit volume**: momentum per unit volume $\rho\mathbf{u}$ and force per unit volume. The surface forces enter as **stresses** (pressure, shear stress = force per unit area); the net effect of how they vary across a small fluid element is a force per unit volume — e.g. a pressure gradient $-\partial p/\partial x$ in N/m³.`],
        ['disp', [ R`\frac{D(\rho\mathbf{u})}{Dt} = \sum \frac{\text{forces}}{\text{volume}} \tag{1.2}` ]],
        ['para', R`The forces per unit volume are **static pressure** (its gradient), **viscous** forces (friction) and **gravity** ($\rho g$).`],
        ['warn', 'Recall Knowledge', [
          R`**Total (material) derivative.** A field variable $\psi(\mathbf{x},t)$ changes in time **and** as the fluid moves: $\dfrac{D\psi}{Dt} = \dfrac{\partial\psi}{\partial t} + (\mathbf{u}\cdot\nabla)\psi$. For velocity, $\partial\mathbf{u}/\partial t$ is the unsteady term and $(\mathbf{u}\cdot\nabla)\mathbf{u}$ the **advective** term. In a steady flow along a streamline $s$ only the advective part survives: $Du/Dt = u\,du/ds$ (used to derive Bernoulli in 1.7).`
        ]],
        ['para', R`Pressure drops are often expressed as a **head** — the height of liquid that would rise in a vertical (piezometer) tube, from $p = \rho g h$. Always say which fluid $\rho$ refers to (e.g. "m of water", "mm of mercury").`],
        ['eq', [
          ['Pressure head', R`h = \frac{p}{\rho g}`, '[m]', 'Ratio of pressure to the hydrostatic pressure gradient.'],
          ['Velocity head', R`h_v = \frac{\tfrac12\rho u^2}{\rho g} = \frac{u^2}{2g}`, '[m]', 'Ratio of inertia to the hydrostatic pressure gradient.']
        ]],
        ['ex', 'Example — converting between pressure and head', [
          ['t', R`(a) Express 1 atm $= 101\,325$ Pa and 1 bar $= 10^5$ Pa as a head of water and of mercury. (b) Find the velocity head of water moving at 5 m/s. (c) The lecture's Pitot reading in 1.8 (using $\rho_m g\Delta H$) is $1.26\times10^4$ Pa — what is that in m of water, and what speed does it imply?`],
          ['ans'],
          ['m', R`\text{(a)}\quad h_{\text{water}} = \frac{101\,325}{1000\times9.81} = 10.3\ \text{m}, \qquad h_{\text{Hg}} = \frac{101\,325}{13\,600\times9.81} = 0.760\ \text{m} = 760\ \text{mm Hg}`],
          ['m', R`1\ \text{bar}: \quad h_{\text{water}} = \frac{10^5}{9810} = 10.2\ \text{m}`],
          ['t', R`(With the lecture's $\rho_m = 13\,500$ kg/m³, 1 atm would be 765 mm Hg.)`],
          ['m', R`\text{(b)}\quad h_v = \frac{u^2}{2g} = \frac{5^2}{2\times9.81} = 1.27\ \text{m of water}`],
          ['m', R`\text{(c)}\quad h = \frac{1.26\times10^4}{9810} = 1.28\ \text{m of water} \;\Rightarrow\; u = \sqrt{2gh} = \sqrt{2\times9.81\times1.28} = 5.0\ \text{m/s}`],
          ['t', R`(c) is the Pitot result seen as heads: the pressure head difference equals the velocity head. A useful memory hook: **10 m of water ≈ 1 bar ≈ 1 atm**. For velocity head remember $h_v = u^2/2g$ grows with the **square** of speed: 1 m/s gives 5.1 cm, 5 m/s gives 1.27 m (not 25 cm), 10 m/s gives 5.1 m.`]
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
        ['para', R`The entry-length formulas use the **Reynolds number**, the ratio of inertial to viscous forces (defined properly in Topics 2–4):`],
        ['eq', [
          ['Reynolds number (pipe)', R`Re = \frac{\rho\,u_m D}{\mu} = \frac{u_m D}{\nu}`, '[–]', 'Pipe flow is laminar below Re ≈ 2000, turbulent above ≈ 4000.'],
          ['Momentum flux (circular pipe)', R`\frac{1}{A}\int_A \rho u^2\,dA = \frac{2}{R^2}\int_0^R \rho\,u(r)^2\,r\,dr`, '[Pa]', 'Changes as u(r) develops.'],
          ['Entry length, laminar (Langhaar)', R`\frac{l_e}{D} = 0.058\,Re`, '[–]', 'Grows with Re: Re = 500 → 29 D; Re = 2000 → 116 D.'],
          ['Entry length, turbulent (Latzko)', R`\frac{l_e}{D} = 0.693\,Re^{1/4}`, '[–]', 'Re = 10⁴ → 7 D; 10⁵ → 12 D; 10⁶ → 22 D. Underestimates: turbulence takes time to develop.']
        ]],
        ['warn', 'Key Insight', [
          R`The course quotes entry lengths as **typically 50–100 pipe diameters**. Read that as a **safe rule of thumb**, not a formula: laminar entry lengths scale with $Re$ and reach ≈ 100 D near transition; the Latzko formula gives only ≈ 10–20 D for turbulent flow, but it is known to underestimate, and the turbulence itself takes many tens of diameters to settle. "Hard to evaluate" does not mean "unimportant" — short pipes may never become fully developed.`
        ]]
      ]
    },
    {
      num: '1.7', title: 'The Bernoulli Equation',
      blocks: [
        ['para', R`The simplest momentum equation. It links pressure, velocity and height **along a streamline** in an ideal flow. It is the momentum equation (1.2) applied to a small element moving along a streamline, with viscosity switched off:`],
        ['svg', 'tf_streamline_elem', 'A small element of length δs and end area δA on a streamline inclined at α: pressure acts on the two end faces, weight acts vertically, and (inviscid) there is no shear on the sides.'],
        ['deriv', 'Derivation — Bernoulli from the momentum equation', [
          ['t', R`**Mass × acceleration.** Mass $= \rho\,\delta A\,\delta s$. In steady flow the acceleration along the streamline is the advective term only, $Du/Dt = u\,du/ds$.`],
          ['t', R`**Forces along $s$.** Net pressure force $p\,\delta A - (p+\delta p)\,\delta A = -\delta p\,\delta A$. Weight component $-\rho g\,\delta A\,\delta s\,\sin\alpha$, with $\sin\alpha = dz/ds$. Inviscid, so no shear force.`],
          ['m', R`\rho\,\delta A\,\delta s\; u\frac{du}{ds} = -\delta p\,\delta A - \rho g\,\delta A\,\delta s\frac{dz}{ds}`],
          ['t', R`Divide by the volume $\delta A\,\delta s$ — this is (1.2) per unit volume — and let $\delta s \to 0$:`],
          ['m', R`\rho u\frac{du}{ds} + \frac{dp}{ds} + \rho g\frac{dz}{ds} = 0 \;\xrightarrow{\ \rho\ \text{const}\ }\; \frac{d}{ds}\left(p + \tfrac12\rho u^2 + \rho g z\right) = 0`],
          ['t', R`So $p + \tfrac12\rho u^2 + \rho g z$ is **constant along the streamline**. Measure heights from a chosen reference level: $\Delta z = z - z_{\text{ref}}$ (positive **upwards**), and call the constant $p_0$.`]
        ]],
        ['disp', [ R`\boxed{p_0 = p + \tfrac12\rho u^2 + \rho g\,\Delta z} \tag{1.3}` ]],
        ['list', R`Meaning of each term:`, false, [
          R`$p$ — **static pressure**.`,
          R`$\tfrac12\rho u^2$ — **inertia** (dynamic pressure). The handout writes $u_m$: in one-dimensional flow the speed is the same across the section, so $u = u_m$.`,
          R`$\rho g\Delta z$ — gravitational body force; $\Delta z = z - z_{\text{ref}}$, height above the reference level.`,
          R`$p_0$ — **stagnation pressure**: the pressure when the fluid is brought to rest ($u = 0$) **at the reference height**, the maximum pressure the flow can generate there. If the fluid is brought to rest at another height $z$, the pressure reached is $p_0 - \rho g\Delta z$. For a Pitot tube everything is at one height, so $p_0$ is simply the pressure at the nose.`
        ]],
        ['list', R`**Assumptions** (all must hold):`, true, [
          R`Steady.`, R`Incompressible.`, R`Inviscid (no viscous forces).`, R`One-dimensional.`,
          R`**Fully developed / no shear** — the course words this as "no velocity gradient along a streamline". The speed **can** change along a streamline (it does in a nozzle); what must be absent are the **velocity gradients that create shear stress** (and the developing-profile momentum-flux term of 1.6). If you also want one value of $p_0$ for the **whole** flow, not just one streamline, the oncoming flow must be uniform (no velocity gradient **across** streamlines).`
        ]],
        ['warn', 'Key Insight', [
          R`**Speed is achieved at the expense of pressure**: high speed ↔ low pressure.`,
          R`Because it is **inviscid**, Bernoulli fails near boundaries and wherever there are velocity gradients — i.e. most internal flows. Rarely rely on it for design numbers.`
        ]],
        ['warn', 'Reflection Point', [
          R`Is Bernoulli an energy equation? It can be derived from the SFEE (see the 3-line reduction in 1.9), but every term has the dimensions of **pressure (stress)**, so the course treats it as a **momentum** equation — and the derivation above uses forces only. The dimensions change in the SFEE route: (1.4) is in **W**; dividing by $\dot m$ gives **J/kg**; multiplying by $\rho$ gives **J/m³ = N/m² = Pa**. This matters in dimensional analysis.`
        ]]
      ]
    },
    {
      num: '1.8', title: 'Bernoulli Applications: Pitot Tube, Manometer and Roof Tiles',
      blocks: [
        ['para', R`A **Pitot-static tube** measures velocity at a point by comparing the stagnation pressure $p_0$ (hole in the nose, facing the flow) with the static pressure $p_s$ (a ring of **4 to 8 small side holes**, about **8 tube diameters** behind the nose, where the flow has recovered to the free-stream speed). Boundary-layer effects are negligible when $Re > 1000$ based on tube diameter ($Re = \rho U d/\mu$, 1.6); compressible flows need a correction.`],
        ['svg', 'tf_pitot', 'Pitot-static tube: the nose hole senses p₀, the side holes pₛ. Since p₀ > pₛ, the mercury is pushed down on the p₀ side and stands higher on the pₛ side, by ΔH.'],
        ['deriv', 'Derivation — Pitot-static tube', [
          ['t', R`Bernoulli along the streamline that stops at the nose ($u = 0$, pressure $p_0$) compared with the free stream beside the side holes (speed $U$, pressure $p_s$):`],
          ['m', R`p_0 + \rho g z_0 = p_s + \tfrac12\rho U^2 + \rho g z_s, \qquad \rho g(z_s - z_0) \approx 0`],
          ['m', R`U = \sqrt{\frac{2(p_0 - p_s)}{\rho}}`]
        ]],
        ['para', R`The pressure difference $p_0 - p_s$ is read on a **U-tube manometer**: a heavy liquid (density $\rho_m$) whose two surfaces are pushed to different levels. The flowing fluid (density $\rho$) fills the connecting lines and the limbs above the manometer liquid.`],
        ['svg', 'tf_manometer', 'U-tube manometer: X and X′ are at the same level in the same continuous liquid (mercury), so their pressures are equal. Each side is then a hydrostatic column, p = ρgh.'],
        ['deriv', 'Derivation — the manometer relation', [
          ['t', R`Take the datum X–X′ through the lower mercury surface (on the $p_0$ side). Let the tappings be a height $a$ above it. The right-hand mercury surface is $\Delta H$ above the datum, with $a - \Delta H$ of water above it. Going down each limb adds $\rho g\,\times$ height:`],
          ['m', R`p_X = p_0 + \rho g\,a, \qquad p_{X'} = p_s + \rho g\,(a - \Delta H) + \rho_m g\,\Delta H`],
          ['t', R`X and X′ are at the same level in the same continuous liquid, so $p_X = p_{X'}$. The unknown $a$ cancels:`],
          ['m', R`p_0 - p_s = (\rho_m - \rho)\,g\,\Delta H`],
          ['t', R`If the lines are full of **gas** (an air flow), $\rho \ll \rho_m$ and this becomes $p_0 - p_s \approx \rho_m g\,\Delta H$ — the form on the slides.`]
        ]],
        ['eq', [
          ['Pitot-static velocity', R`U = \sqrt{\frac{2(p_0-p_s)}{\rho}}`, '[m/s]', 'p₀ from the nose hole, pₛ from the side holes; ρ is the flowing fluid.'],
          ['Manometer reading (general)', R`p_0 - p_s = (\rho_m - \rho)\,g\,\Delta H`, '[Pa]', 'Use whenever the flowing fluid is a liquid (it fills the limbs).'],
          ['Manometer reading (gas flow)', R`p_0 - p_s \approx \rho_m g\,\Delta H`, '[Pa]', 'ρ ≪ ρₘ — the slides use this form.']
        ]],
        ['ex', 'Example — Pitot-static tube in water (lecture)', [
          ['t', R`A mercury manometer ($\rho_m = 13\,500$ kg/m³) on a Pitot-static tube in water shows $\Delta H = 9.5$ cm. Find the water speed.`],
          ['ans'],
          ['t', R`The flowing fluid is a liquid (water fills the limbs), so use the general form:`],
          ['m', R`p_0 - p_s = (\rho_m - \rho)g\Delta H = (13\,500 - 1000)\times 9.81 \times 0.095 = 1.165\times10^4\ \text{Pa}`],
          ['m', R`U = \sqrt{\frac{2\times1.165\times10^4}{1000}} = 4.8\ \text{m/s}`],
          ['t', R`**Lecture answer:** the slides use $p_0 - p_s = \rho_m g\Delta H = 13\,500\times9.81\times0.095 = 1.26\times10^4$ Pa, giving $U = \sqrt{2\times1.26\times10^4/1000} = 5.0$ m/s — about 4% high because it ignores the water standing above the mercury.`]
        ]],
        ['warn', 'Important', [
          R`**Which manometer formula?** If the flowing fluid is a **liquid**, use $(\rho_m - \rho)g\Delta H$ and say so (4.8 m/s here). $\rho_m g\Delta H$ is only right when the limbs above the manometer liquid hold a **gas**. If a question explicitly says "take $p_0 - p_s = \rho_m g\Delta H$", do that (5.0 m/s).`,
          R`**Mercury density.** The lecture uses $\rho_m = 13\,500$ kg/m³; the usual figure is $13\,600$ kg/m³. Use the value given — here it changes $U$ only from 4.83 to 4.85 m/s.`
        ]],
        ['ex', 'Example — when do roof tiles blow off? (lecture)', [
          ['t', R`A tile of thickness $t = 10$ mm, density $\rho_t = 2000$ kg/m³ sits on a roof at $\theta = 30°$, held against sliding (nib/friction) but free to lift. Wind of speed $u$ blows along the roof (air $\rho = 1.2$ kg/m³); still air underneath is at $p_a \equiv p_0$. At what speed does it lift?`],
          ['svg', 'tf_rooftile', 'Wind over the roof lowers the pressure above the tile to pₐ − ρu²/2; the still air underneath stays at pₐ. The pressure force acts normal to the tile; the weight is vertical and resolves into mg cos θ (into the roof) and mg sin θ (down the slope, taken by the nib).'],
          ['ans'],
          ['t', R`**Forces.** Weight $mg = A t \rho_t g$, vertical. Bernoulli from still air ($p_a$, $u = 0$) to the flow over the tile ($p$, $u$) at the same height: $p = p_a - \tfrac12\rho u^2$, so the net pressure difference is $\Delta p = \tfrac12\rho u^2$ and the force $\Delta p\,A$ acts **normal to the tile**, outwards. The roof supplies a normal reaction $N$ and an along-slope support (nib/friction).`],
          ['t', R`**Lift-off** is when the tile leaves the roof, i.e. $N \to 0$. Resolve **normal to the roof** — the along-slope support has no component in this direction, so it drops out:`],
          ['m', R`\Delta p\,A = mg\cos\theta \;\Rightarrow\; \tfrac12\rho u^2 A = A t\rho_t g\cos\theta \;\Rightarrow\; u = \left(\frac{2t\rho_t g\cos\theta}{\rho}\right)^{1/2}`],
          ['m', R`u = \left(\frac{2(0.01)(2000)(9.81)\cos30^\circ}{1.2}\right)^{1/2} = \sqrt{283.2} = 16.8\ \text{m/s} \approx 61\ \text{km/h}`],
          ['t', R`**Sanity checks.** Flat roof ($\theta = 0$): $u = (2t\rho_t g/\rho)^{1/2} = 18.1$ m/s. Vertical wall cladding ($\theta \to 90°$): the weight has no component away from the wall, so any suction pulls it off ($u \to 0$). Steeper roofs lose tiles at lower speeds.`]
        ]],
        ['warn', 'Warning', [
          R`**The slides resolve vertically:** $\Delta p\,A\cos\theta = mg$, giving $u = \left(\dfrac{2t\rho_t g}{\rho\cos\theta}\right)^{1/2} = 19.4$ m/s $\equiv 70$ km/h. That balance leaves out the roof's along-slope support, which also has a vertical component, so it is not a valid condition for lift-off; it would also predict that a vertical tile ($\theta = 90°$) never blows off. Resolving normal to the roof (above) gives **16.8 m/s**. In an exam, show the normal balance; if the question explicitly sets up the slide's equation, 19.4 m/s follows from it.`
        ]],
        ['warn', 'Note', [
          R`The slides write the air density as $\rho_g$ ($g$ for **gas**): $\Delta p = \tfrac12\rho_g u^2$ is just $\tfrac12\rho u^2$ with $\rho = 1.2$ kg/m³. (Earlier versions of these notes misread this subscript as a stray factor of $g$ — there is no error there.)`
        ]],
        ['warn', 'When to use', [
          R`Bernoulli is fine for **short, fast, accelerating** flows away from walls: Pitot tubes, flow over a roof, a jet from a tank, a venturi (combine with $A_1u_1 = A_2u_2$). It is **not** fine for pressure drops along pipes — that needs viscosity (Topics 4–8).`
        ]]
      ]
    },
    {
      num: '1.9', title: 'Conservation of Energy: the SFEE',
      blocks: [
        ['para', R`The specific energy carried by the fluid is conserved. The **Steady Flow Energy Equation** applies this to an **open system** — a control volume with fluid flowing in and out (pump, turbine, nozzle, pipe section). Enthalpy $h = u_{\text{int}} + p/\rho$ (specific internal energy plus **flow work**) builds in the work done to keep the flow moving.`],
        ['warn', 'Note', [
          R`**Symbols.** The slides write $h = u + p/\rho$, with $u$ meaning **specific internal energy** — the same letter as velocity in $\tfrac12u^2$. These notes write internal energy as $u_{\text{int}}$ (J/kg) so that $u$ is always a velocity.`
        ]],
        ['eq', [
          ['Specific energy carried by the flow', R`e = h + \tfrac12 u^2 + g z, \qquad h = u_{\text{int}} + \frac{p}{\rho}`, '[J/kg]', 'Calculated from average quantities in the control volume; u = velocity, uᵢₙₜ = internal energy.'],
          ['First Law (rate form, per unit volume)', R`\frac{D(\rho e)}{Dt} = \dot Q + \dot W`, '[W/m³]', 'Course notation: here $\dot Q$, $\dot W$ are heat and work rates **per unit volume** (W/m³), both counted positive **into** the fluid (sign convention box below). Integrated over a steady control volume this becomes (1.4), in W.']
        ]],
        ['svg', 'tf_sfee_cv', 'SFEE sign convention: Q̇ positive when heat flows into the fluid, Ẇₛ positive when the shaft does work on the fluid; Δ means outlet (2) minus inlet (1).'],
        ['deriv', 'Derivation — SFEE from an energy balance on the control volume', [
          ['t', R`**Steady:** the energy inside the control volume does not change, so (energy in per second) = (energy out per second).`],
          ['t', R`**Carried by the fluid:** each kg brings $u_{\text{int}} + \tfrac12u^2 + gz$. **Flow work:** to push fluid in across section 1, the fluid behind does work at a rate $p_1A_1u_1 = p_1\dot m/\rho_1$, i.e. $p_1/\rho_1$ per kg (and the fluid leaving does $p_2/\rho_2$ per kg on what is ahead). **Across the boundary:** heat $\dot Q$ and shaft work $\dot W_s$, both counted positive **into** the fluid.`],
          ['m', R`\dot m\left(u_{\text{int}} + \frac{p}{\rho} + \tfrac12u^2 + gz\right)_1 + \dot Q + \dot W_s = \dot m\left(u_{\text{int}} + \frac{p}{\rho} + \tfrac12u^2 + gz\right)_2`],
          ['t', R`Group $u_{\text{int}} + p/\rho = h$ and write $\Delta(\ ) = (\ )_2 - (\ )_1$ = out − in:`]
        ]],
        ['disp', [ R`\boxed{\dot m\,\Delta\!\left(h + \tfrac12 u^2 + g z\right) = \dot Q + \dot W_s} \tag{1.4}` ]],
        ['para', R`Dividing by $\dot m$ gives the **specific (per kg) form**, with $q = \dot Q/\dot m$ and $w_s = \dot W_s/\dot m$ in J/kg:`],
        ['disp', [ R`\boxed{q + w_s = \Delta h + \tfrac12\Delta\!\left(u^2\right) + g\,\Delta z} \tag{1.5}` ]],
        ['para', R`Written out with $\Delta$ = out − in: $\;q + w_s = (h_2 - h_1) + \tfrac12\left(u_2^2 - u_1^2\right) + g(z_2 - z_1)$. Note $\tfrac12\Delta(u^2) = \tfrac12(u_2^2 - u_1^2)$, **not** $\tfrac12(u_2 - u_1)^2$.`],
        ['warn', 'Important', [
          R`**Sign convention for (1.4)–(1.5):** $\dot Q > 0$ = heat **into** the fluid; $\dot W_s > 0$ = shaft work done **on** the fluid (pump, fan, compressor); a **turbine** has $\dot W_s < 0$; $\Delta$ = **out − in**.`,
          R`**Reconciling with 1.11.** The closed-system First Law there is written $\Delta U = Q - W$ with $W$ = work done **by** the gas. Work done on = −(work done by), so $\Delta U = Q + W_{\text{on}}$ — the same "into the fluid is positive" bookkeeping as the SFEE. Many textbooks write the SFEE as $\dot Q - \dot W$ with $\dot W$ = work **out**; then $\dot W = -\dot W_s$. Whatever the form, say which convention you use.`
        ]],
        ['list', R`**SFEE assumptions** as listed in the course — the slide's list is for the simple liquid case and the Bernoulli reduction below:`, true, [
          R`Steady flow; open system.`,
          R`Incompressible — needed only to treat $p/\rho$ with one $\rho$ and for the Bernoulli reduction (see the box below).`,
          R`One-dimensional (uniform properties at each inlet and outlet).`,
          R`Constant rates of heat transfer and work — part of "steady": $\dot Q$ and $\dot W_s$ must not vary in time, or the energy stored in the control volume would change.`,
          R`No other energy sources (e.g. combustion).`,
          R`Viscous work on the boundary neglected.`
        ]],
        ['warn', 'Important', [
          R`**What (1.4)–(1.5) actually require:** steady flow (which includes constant $\dot Q$, $\dot W_s$), uniform (1-D) properties at each inlet and outlet, no other energy sources, and negligible viscous work on the boundary. They do **not** require incompressibility: evaluate $h$ (and $p/\rho$) with the local density at each section. That is why the steam-turbine example below and the compressible-flow topics (stagnation enthalpy $h_0 = h + \tfrac12u^2$, Topic 9) use the SFEE directly.`,
          R`**Incompressibility is needed only** when you set $\Delta h = \Delta u_{\text{int}} + \Delta p/\rho$ with a single $\rho$ — the liquid case, e.g. the pump in Q5 and the reduction to Bernoulli.`
        ]],
        ['para', R`$\dot W_s$ is **shaft work**. Kinetic and potential terms are often negligible next to $\Delta h$ in thermal machines.`],
        ['deriv', 'Reduction — from the SFEE to Bernoulli in three lines', [
          ['t', R`Start from (1.5) with $h = u_{\text{int}} + p/\rho$ and $\rho$ constant: $\;q + w_s = \Delta u_{\text{int}} + \Delta(p/\rho) + \tfrac12\Delta(u^2) + g\Delta z$.`],
          ['t', R`**No shaft work** ($w_s = 0$) and **no heat, no friction**: the flow neither receives heat nor warms itself by viscous dissipation, so $q = 0$ and $\Delta u_{\text{int}} = 0$ (isothermal, inviscid). Then:`],
          ['m', R`\Delta\!\left(\frac{p}{\rho} + \tfrac12u^2 + gz\right) = 0 \qquad [\text{J/kg}]`],
          ['m', R`\times\rho: \quad \Delta\!\left(p + \tfrac12\rho u^2 + \rho g z\right) = 0 \qquad [\text{J/m}^3 = \text{Pa}] \;\Rightarrow\; (1.3)`],
          ['t', R`So the dimensions go **W → J/kg → Pa**. With friction, $\Delta u_{\text{int}} - q > 0$: that "lost" mechanical energy per kg, times $\rho$, is the **pressure loss** — $\Delta u_{\text{int}} - q = g h_L$ — that the hydraulics topics calculate.`]
        ]],
        ['ex', 'Example — power from a steam turbine (illustrative, not from the lecture)', [
          ['t', R`Steam flows steadily through a turbine at $\dot m = 2$ kg/s. Inlet: $h_1 = 3230$ kJ/kg, $u_1 = 50$ m/s. Outlet: $h_2 = 2550$ kJ/kg, $u_2 = 120$ m/s. Height change negligible; heat loss to the surroundings 20 kW. Find the shaft power.`],
          ['ans'],
          ['t', R`Convention: $\dot Q$ into the fluid, $\dot W_s$ on the fluid, $\Delta$ = out − in. A heat **loss** means $\dot Q = -20$ kW.`],
          ['m', R`\Delta h = 2550 - 3230 = -680\ \text{kJ/kg}, \qquad \tfrac12\left(u_2^2 - u_1^2\right) = \tfrac12\left(120^2 - 50^2\right) = 5950\ \text{J/kg} = 5.95\ \text{kJ/kg}`],
          ['m', R`\dot W_s = \dot m\left[\Delta h + \tfrac12\Delta(u^2)\right] - \dot Q = 2(-680 + 5.95) - (-20) = -1348 + 20 = -1328\ \text{kW}`],
          ['t', R`$\dot W_s < 0$: work is done **by** the fluid on the shaft — the turbine delivers **1.33 MW**. The kinetic-energy term is under 1% of $\Delta h$, which is why it is "often negligible".`]
        ]]
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
          R`Momentum balance(s) in each direction, with a stated positive direction: **ΣF on the fluid = momentum flux out − momentum flux in**. The force **on the vane/bucket** is equal and opposite: **F on vane = momentum flux in − momentum flux out** — this is the lecture's "F = mom. flux in − mom. flux out".`
        ]],
        ['list', R`**What goes into ΣF on the fluid** (forces on the control volume, each resolved in the direction considered):`, false, [
          R`**Pressure × area on each inlet and outlet face**, acting **inwards** (pushing on the fluid in the CV): $+p_1A_1$ at an inlet, $-p_2A_2$ at an outlet for a straight flow along $+x$. Use **gauge** pressure — atmospheric pressure acts all round the outside and cancels — so a free jet at atmosphere contributes **zero**.`,
          R`**Force from the walls / vane / nozzle** on the fluid — usually the unknown you are solving for (it includes wall pressure and shear).`,
          R`**Weight** $\rho g V$ if the direction has a vertical component (often negligible).`,
          R`In the Pelton and plate examples the jet is at atmospheric pressure everywhere, so only the vane force appears. In a pipe bend or nozzle the **pressure terms usually dominate** — see the fire-hose nozzle example (after the Pelton example) and Q8.`
        ]],
        ['ex', 'Example — force on a Pelton wheel bucket (lecture)', [
          ['t', R`A water jet ($d = 0.20$ m, $v_1 = 10$ m/s, $\rho = 1000$ kg/m³) strikes buckets moving at $u = 4$ m/s. Each bucket turns the flow (relative to the bucket) through **130°**, so it leaves at **50° to the reverse (−x) direction**, split equally between the two halves. No losses. Find the force on the rotor at constant speed.`],
          ['svg', 'tf_pelton', 'Riding with the bucket makes it steady: the jet arrives at v₁ − u along +x and leaves in two halves, each at 50° to the −x direction (a 130° turn).'],
          ['ans'],
          ['t', R`**1–2. Data / physics:** SI as given. The jet is turned back by the bucket, so the bucket is pushed forward.`],
          ['t', R`**3–4. Make it steady:** ride with the bucket, so the jet arrives at $v_1 - u = 6$ m/s; the control volume moves with the bucket.`],
          ['t', R`**5. Mass:** for the whole wheel every drop of the jet is eventually used, so $\dot m = \rho\frac{\pi}{4}d^2 v_1 = 1000 \times \frac{\pi}{4}(0.2)^2 \times 10 = 314$ kg/s. (A **single** plate moving away would only receive $\rho A(v_1 - u)$ — see Q6.) No losses, so the relative speed out is also 6 m/s.`],
          ['t', R`**6. Momentum in $x$** (positive = jet direction):`],
          ['m', R`\text{in: } +\dot m(v_1-u) = 314\times6 = 1885\ \text{N}, \qquad \text{out: } 2\times\tfrac{\dot m}{2}(v_1-u)\cos130^\circ = -\dot m(v_1-u)\cos50^\circ = -1212\ \text{N}`],
          ['m', R`\textstyle\sum F_{\text{on fluid}} = \text{out} - \text{in} = -1212 - 1885 = -3097\ \text{N}`],
          ['m', R`F_{\text{on bucket}} = \text{in} - \text{out} = \dot m(v_1-u)\left(1 + \cos 50^\circ\right) = 314 \times 6 \times 1.643 = 3.10\ \text{kN}`],
          ['t', R`The bucket pushes the water backwards (−x), so the water pushes the bucket forwards with **3.10 kN**. The rotor power is $Fu = 3.10\times4 = 12.4$ kW.`]
        ]],
        ['warn', 'Warning', [
          R`**The slides' answer is wrong:** they give $F = \dot m(v_1-u)(1 - \cos50^\circ) = 673$ N. Their own figure shows the outflow pointing **backwards**, so its $x$-momentum is negative and subtracting it **adds**. The correct answer is **3.10 kN**.`,
          R`**Sanity check with the general result** for a turn of angle $\phi$: $F = \dot m(v_1-u)(1 - \cos\phi)$. $\phi = 90°$ (flat plate, water leaves sideways): $F = \dot m(v_1-u)$. $\phi = 180°$ (straight back): $F = 2\dot m(v_1-u)$. $\phi = 130°$: $1 - \cos130^\circ = 1 + \cos50^\circ = 1.643$. The slide's factor $1 - \cos50^\circ = 0.357$ is a turn of only 50° — less than a flat plate, impossible for a bucket that sends the water back.`
        ]],
        ['ex', 'Example — force on a fire-hose nozzle (pressure forces included; not from the lecture)', [
          ['t', R`Water flows at $Q = 0.010$ m³/s through a horizontal nozzle that reduces from $D_1 = 80$ mm to $d_2 = 25$ mm and discharges to atmosphere. Neglect losses. Find the force the water exerts on the nozzle (i.e. the force the coupling must hold).`],
          ['svg', 'tf_nozzle_cv', 'Control volume round the water in the nozzle: gauge pressure p₁A₁ pushes in at the inlet face, the exit jet is at atmosphere (zero gauge), and the nozzle wall pushes on the water with the unknown F.'],
          ['ans'],
          ['t', R`**Mass:** $A_1 = \frac{\pi}{4}(0.08)^2 = 5.03\times10^{-3}$ m², $A_2 = \frac{\pi}{4}(0.025)^2 = 4.91\times10^{-4}$ m², so $u_1 = Q/A_1 = 1.99$ m/s, $u_2 = Q/A_2 = 20.4$ m/s, $\dot m = \rho Q = 10$ kg/s.`],
          ['t', R`**Bernoulli** inlet → exit — valid because the flow is **steady, inviscid (losses neglected) and level** (all stated in the question), along one streamline; $p_2 = 0$ gauge (free jet):`],
          ['m', R`p_1 = \tfrac12\rho\left(u_2^2 - u_1^2\right) = 500\left(20.37^2 - 1.99^2\right) = 2.06\times10^5\ \text{Pa (gauge)}`],
          ['t', R`**Momentum in $x$** (+ = flow direction), with $F$ = force of the nozzle on the water:`],
          ['m', R`\textstyle\sum F_{\text{on fluid}} = p_1A_1 - p_2A_2 + F = \dot m\,(u_2 - u_1)`],
          ['m', R`F = \dot m(u_2 - u_1) - p_1A_1 = 10(20.37 - 1.99) - 2.06\times10^5\times5.03\times10^{-3} = 184 - 1033 = -849\ \text{N}`],
          ['t', R`The nozzle pushes the water **backwards** with 849 N, so the water pushes the nozzle **forwards** (downstream) with **849 N** — the coupling is in tension and must stop the nozzle being blown off. Note that the pressure term (1033 N) is far larger than the momentum flux change (184 N): leaving out $p_1A_1$ would give the wrong sign.`]
        ]],
        ['warn', 'When to use', [
          R`Jets hitting plates, vanes or buckets; forces on bends and nozzles. Always make the problem steady first, then **ΣF on the fluid = momentum flux out − in** (in each direction, with signs) — remembering **gauge pressure × area** on every inlet/outlet face that is not a free jet; the force on the vane, bend or nozzle is equal and opposite.`
        ]]
      ]
    },
    {
      num: '1.11', title: 'Thermodynamics Refresher: Polytropic Compression',
      blocks: [
        ['para', R`A worked thermodynamics example from the first live session, reviewing a **closed system** of perfect gas — fixed mass, no flow in or out. It is the counterpart of the SFEE (1.9): for an open system the **flow work** $p/\rho$ needed to push fluid across the boundary is added to $u_{\text{int}}$ to make $h$; in a closed system there is no flow, so internal energy $U$ and boundary work $\int p\,dV$ appear instead. Equation of state $p = \rho R T = mRT/V$; polytropic process $p/\rho^n = \text{const}$.`],
        ['eq', [
          ['Polytropic index', R`n = \frac{\ln(p_1/p_2)}{\ln(V_2/V_1)}`, '[–]', 'From p₁/p₂ = (ρ₁/ρ₂)ⁿ = (V₂/V₁)ⁿ.'],
          ['Entropy change, perfect gas', R`s_2 - s_1 = c_v\ln\frac{T_2}{T_1} + R\ln\frac{V_2}{V_1}`, '[J/kg K]', 'From the First and Second Laws. Use J/kg K throughout.'],
          ['Polytropic work (by the gas)', R`W = \int_1^2 p\,dV = \frac{p_2V_2 - p_1V_1}{1-n}`, '[J]', 'p is the gas pressure on the moving piston. Work done BY the fluid is positive.'],
          ['First Law, closed system', R`\Delta U = Q - W, \qquad \Delta U = m c_v (T_2 - T_1)`, '[J]', 'Q into the gas, W by the gas.']
        ]],
        ['ex', 'Example — irreversible polytropic compression (lecture)', [
          ['t', R`Air in a piston-cylinder: $p_1 = 3$ bar, $T_1 = 303$ K, $V_1 = 60$ cm³ → $V_2 = 12$ cm³, $s_2 - s_1 = -0.1152$ kJ/kg K, $c_v = 718$, $R = 287$ J/kg K. Find (a) $n$, (b) the work, (c) the heat transfer.`],
          ['ans'],
          ['t', R`**Mass** (closed system, fixed): $p_1V_1 = 3\times10^5 \times 60\times10^{-6} = 18$ J, so $m = \dfrac{p_1V_1}{RT_1} = \dfrac{18}{287\times303} = 2.07\times10^{-4}$ kg. Volume ratio $V_2/V_1 = 12/60 = 1/5$.`],
          ['t', R`**(a)** Entropy relation, everything in J/kg K ($s_2 - s_1 = -115.2$ J/kg K):`],
          ['m', R`718\ln\frac{T_2}{T_1} + 287\ln\frac15 = -115.2 \;\Rightarrow\; 718\ln\frac{T_2}{T_1} = -115.2 + 461.9 = 346.7 \;\Rightarrow\; \ln\frac{T_2}{T_1} = 0.483,\ \ \frac{T_2}{T_1} = 1.621`],
          ['m', R`\frac{p_1}{p_2} = \frac{T_1}{T_2}\cdot\frac{V_2}{V_1} = \frac{0.2}{1.621} = 0.1234 \;\Rightarrow\; n = \frac{\ln 0.1234}{\ln 0.2} = \frac{-2.092}{-1.609} = 1.30`],
          ['t', R`($T_2 = 491$ K, $p_2 = 24.3$ bar.) Keep four figures in $T_2/T_1 = 1.6207$ — the later answers are differences and lose accuracy if you round early.`],
          ['t', R`**(b)** Because $p_2V_2/(p_1V_1) = T_2/T_1$:`],
          ['m', R`W = \frac{p_2V_2 - p_1V_1}{1-n} = \frac{p_1V_1}{1-n}\left(\frac{T_2}{T_1} - 1\right) = \frac{18}{-0.300}(1.6207 - 1) = -37.24\ \text{J} \approx -37.2\ \text{J}`],
          ['t', R`**(c)** First Law:`],
          ['m', R`\Delta U = m c_v T_1\left(\frac{T_2}{T_1}-1\right) = 2.070\times10^{-4}\times718\times303\times0.6207 = 27.95\ \text{J} \approx 28.0\ \text{J}`],
          ['m', R`Q = \Delta U + W = 27.95 + (-37.24) = -9.29\ \text{J} \approx -9.3\ \text{J}`],
          ['t', R`Negative work: work is done **on** the gas (37.2 J must be added). Negative heat: 9.3 J of heat is **rejected**.`]
        ]],
        ['warn', 'Note', [
          R`The slides quote $W = -37.9$ J and $Q = -9.70$ J. Re-computing with their own formulas gives $W = -37.2$ J and $Q = -9.3$ J (and $-37.9$ and $-9.70$ are not consistent with each other through $\Delta U \approx 28.0$ J). The method is what matters.`
        ]]
      ]
    },
    {
      num: 'Ex 1', title: 'Practice Problems — Energy, Fluids & Conservation Laws', wk: true,
      blocks: [
        ['para', R`The course has no separate problem sheet for this week, so these practice questions were written for these notes (all numbers checked). Water $\rho = 1000$ kg/m³, $g = 9.81$ m/s² unless stated. Answers are in square brackets; full solutions are hidden.`],
        ['ex', 'Q1 — continuity through a contraction', [
          ['t', R`Water flows at 2.0 m/s in a 100 mm pipe that contracts to 50 mm. Find $Q$, $\dot m$ and the speed in the small pipe. [$0.0157$ m³/s; $15.7$ kg/s; $8.0$ m/s]`],
          ['ans'],
          ['m', R`Q = A_1u_1 = \frac{\pi}{4}(0.1)^2\times2.0 = 0.0157\ \text{m}^3/\text{s}, \qquad \dot m = \rho Q = 15.7\ \text{kg/s}`],
          ['m', R`u_2 = u_1\frac{A_1}{A_2} = u_1\left(\frac{D_1}{D_2}\right)^2 = 2.0\times4 = 8.0\ \text{m/s}`]
        ]],
        ['ex', 'Q2 — jet from a tank', [
          ['t', R`A large open tank has a 20 mm sharp-edged hole in its side, 3.0 m below the free surface, discharging to atmosphere. Ignoring losses, find the jet speed and flow rate. [$7.67$ m/s; $2.41\times10^{-3}$ m³/s]`],
          ['ans'],
          ['t', R`Bernoulli along a streamline from the free surface (1) to the jet (2). Both are at atmospheric pressure; the tank is large, so by continuity $u_1 \approx 0$. Take $z_{\text{ref}}$ at the hole, so $\Delta z_1 = 3.0$ m:`],
          ['m', R`p_a + 0 + \rho g(3.0) = p_a + \tfrac12\rho u_2^2 + 0 \;\Rightarrow\; u_2 = \sqrt{2g\times3.0} = 7.67\ \text{m/s}`],
          ['m', R`Q = \frac{\pi}{4}(0.02)^2\times7.67 = 2.41\times10^{-3}\ \text{m}^3/\text{s}`],
          ['t', R`(A real sharp-edged hole gives less: the jet contracts and there are small losses.)`]
        ]],
        ['ex', 'Q3 — venturi meter', [
          ['t', R`A horizontal venturi has inlet diameter 100 mm and throat diameter 50 mm. With water flowing, the pressure drop from inlet to throat is 15 kPa. Find the inlet and throat speeds and $Q$. [$1.41$ m/s; $5.66$ m/s; $0.0111$ m³/s]`],
          ['ans'],
          ['t', R`Continuity: $u_2 = u_1(D_1/D_2)^2 = 4u_1$. Bernoulli, same height:`],
          ['m', R`p_1 - p_2 = \tfrac12\rho\left(u_2^2 - u_1^2\right) = \tfrac12\rho u_1^2(16 - 1) = 7.5\rho u_1^2`],
          ['m', R`u_1 = \sqrt{\frac{15\,000}{7.5\times1000}} = 1.41\ \text{m/s}, \quad u_2 = 5.66\ \text{m/s}, \quad Q = \frac{\pi}{4}(0.1)^2\times1.41 = 0.0111\ \text{m}^3/\text{s}`]
        ]],
        ['ex', 'Q4 — Pitot-static tube, handout version', [
          ['t', R`The course handout poses the Pitot problem of 1.8 with $\Delta H = 19$ cm (the slides use 9.5 cm). Mercury $\rho_m = 13\,500$ kg/m³, water flowing. Find $U$ (a) with $p_0 - p_s = \rho_m g\Delta H$, (b) with the correct liquid-filled form. [$7.1$ m/s; $6.8$ m/s]`],
          ['ans'],
          ['m', R`\text{(a)}\ p_0 - p_s = 13\,500\times9.81\times0.19 = 2.52\times10^4\ \text{Pa} \Rightarrow U = \sqrt{\frac{2\times2.52\times10^4}{1000}} = 7.1\ \text{m/s}`],
          ['m', R`\text{(b)}\ p_0 - p_s = 12\,500\times9.81\times0.19 = 2.33\times10^4\ \text{Pa} \Rightarrow U = 6.8\ \text{m/s}`],
          ['t', R`Doubling $\Delta H$ multiplies $U$ by $\sqrt2$ (5.0 → 7.1 m/s): $U \propto \sqrt{\Delta H}$.`]
        ]],
        ['ex', 'Q5 — SFEE for a pump', [
          ['t', R`A pump delivers 0.020 m³/s of water, raising its pressure from 100 kPa to 400 kPa. The outlet is 5.0 m above the inlet and the pipe diameters are equal. The pump is adiabatic and the water's internal-energy rise is negligible (ideal pump). Find the shaft power, and the pump "head". [$+6.98$ kW; $35.6$ m]`],
          ['ans'],
          ['t', R`SFEE (1.5) with $q = 0$, $\Delta u_{\text{int}} = 0$, equal diameters so $\Delta(u^2) = 0$; $\Delta h = \Delta(p/\rho)$ for water:`],
          ['m', R`w_s = \frac{p_2 - p_1}{\rho} + g(z_2 - z_1) = \frac{300\,000}{1000} + 9.81\times5.0 = 300 + 49.1 = 349\ \text{J/kg}`],
          ['m', R`\dot m = \rho Q = 20\ \text{kg/s} \;\Rightarrow\; \dot W_s = \dot m\,w_s = 20\times349 = 6.98\ \text{kW}`],
          ['t', R`$\dot W_s > 0$: work done **on** the water, as expected for a pump. As a head: $w_s/g = 349/9.81 = 35.6$ m of water.`]
        ]],
        ['ex', 'Q6 — jet on a flat plate, fixed and moving', [
          ['t', R`A 50 mm water jet at 20 m/s hits a flat plate normal to it; the water leaves along the plate. Find the force on the plate when (a) it is fixed, (b) it is a single plate moving away from the nozzle at 8 m/s. [$785$ N; $283$ N]`],
          ['ans'],
          ['t', R`$A = \frac{\pi}{4}(0.05)^2 = 1.963\times10^{-3}$ m². Positive $x$ along the jet. Water leaves along the plate, so its $x$-momentum out is zero.`],
          ['m', R`\text{(a)}\ \dot m = \rho A v = 1000\times1.963\times10^{-3}\times20 = 39.3\ \text{kg/s};\quad \textstyle\sum F_{\text{on fluid}} = 0 - \dot m v = -785\ \text{N} \Rightarrow F_{\text{plate}} = 785\ \text{N}`],
          ['t', R`(b) Ride with the plate: relative speed $20 - 8 = 12$ m/s. A **single** plate moving away receives water only at the rate at which the gap is closed: $\dot m = \rho A(v - u)$.`],
          ['m', R`\dot m = 1000\times1.963\times10^{-3}\times12 = 23.6\ \text{kg/s};\quad F_{\text{plate}} = \dot m(v-u) = 23.6\times12 = 283\ \text{N}`],
          ['t', R`Contrast the Pelton wheel (1.10): with a whole row of buckets the full jet $\rho A v_1$ is used.`]
        ]],
        ['ex', 'Q7 — Pelton wheel: deeper bucket and best speed', [
          ['t', R`Same jet and wheel as the 1.10 example ($\dot m = 314$ kg/s, $v_1 = 10$ m/s), but the buckets turn the flow through 165°. (a) Find the force and power at $u = 4$ m/s. (b) Show that the power is greatest when $u = v_1/2$ and find it. [$3.71$ kN, $14.8$ kW; $15.4$ kW at 5 m/s]`],
          ['ans'],
          ['m', R`\text{(a)}\ F = \dot m(v_1 - u)(1 - \cos165^\circ) = 314\times6\times1.966 = 3.71\ \text{kN}, \qquad P = Fu = 14.8\ \text{kW}`],
          ['m', R`\text{(b)}\ P = \dot m(v_1 - u)u(1-\cos\phi), \quad \frac{dP}{du} = \dot m(1-\cos\phi)(v_1 - 2u) = 0 \Rightarrow u = \frac{v_1}{2} = 5\ \text{m/s}`],
          ['m', R`P_{\max} = 314\times5\times5\times1.966 = 15.4\ \text{kW}`]
        ]],
        ['ex', 'Q8 — force on a 90° pipe bend', [
          ['t', R`Water flows at 0.050 m³/s through a horizontal 90° bend of constant diameter 100 mm. The gauge pressure is 150 kPa at both ends (no losses). Flow enters along $+x$ and leaves along $+y$. Find the force of the water on the bend. [$(+1496, -1496)$ N; 2.12 kN at 45°]`],
          ['ans'],
          ['t', R`$A = \frac{\pi}{4}(0.1)^2 = 7.854\times10^{-3}$ m², $u = Q/A = 6.37$ m/s (same in and out), $\dot m = 50$ kg/s, so $\dot m u = 318$ N and $pA = 150\,000\times7.854\times10^{-3} = 1178$ N.`],
          ['t', R`Let $(F_x, F_y)$ be the force of the bend on the water. Pressure forces act **inwards** on the two faces: $+pA$ in $x$ at the inlet, $-pA$ in $y$ at the outlet.`],
          ['m', R`x:\ \ pA + F_x = \dot m(0 - u) \Rightarrow F_x = -\dot m u - pA = -318 - 1178 = -1496\ \text{N}`],
          ['m', R`y:\ \ -pA + F_y = \dot m(u - 0) \Rightarrow F_y = \dot m u + pA = +1496\ \text{N}`],
          ['t', R`The force of the water **on the bend** is equal and opposite: $(+1496, -1496)$ N, magnitude $\sqrt2\times1496 = 2.12$ kN, pointing outwards at 45° to both pipes. Again the pressure (1178 N) outweighs the momentum flux (318 N) — this is the load the pipe supports or thrust block must carry.`]
        ]],
      ]
    }
  ]
}
