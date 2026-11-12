{
  key: 'tf_dimensions', area: 'found', num: '2', week: 'Week 1',
  name: 'Building Blocks of Dimensional Analysis',
  triggers: 'units of … · dimensions of … · MLTθ · dimensional check · named numbers (Re, Eu, Fr, We, Ma, Nu, Pr) · similarity · how many Πs · scale model',
  sections: [
    {
      num: '', title: 'Revision Objectives — Building Blocks of Dimensional Analysis',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Write the **dimensions** ($M, L, T, \theta$) and SI **units** of any quantity, including fluid and thermal properties.`,
          R`Use **Rayleigh's principle** to check that every term in an equation has the same dimensions.`,
          R`Write the form **and physical meaning** of the Reynolds, Euler, Froude, Weber, Mach, Grashof, Nusselt, Biot, Fourier, Rayleigh and Prandtl numbers, and show where the force scalings ($\rho u^2 l^2$, $\mu u l$) come from.`,
          R`Distinguish **geometric, kinematic and dynamic** similarity, say which needs which, and state the condition for dynamic similarity.`,
          R`Use **Buckingham's Π theorem** to predict how many dimensionless groups a problem needs (counting $n$ and $r$ correctly).`,
          R`Scale a model test to full size by matching every Π.`
        ]]
      ]
    },
    {
      num: '2.1', title: 'Dimensions',
      blocks: [
        ['para', R`Units carry physical meaning: m/s tells you speed is a rate of change of distance. That meaning does not depend on the measuring system, so we work with **dimensions**, which are system-independent. Everything in this unit is built from four **base dimensions**:`],
        ['html', '<div style="display:flex;flex-wrap:wrap;gap:8px;margin:2px 0 4px">' + ['Mass · M', 'Length · L', 'Time · T', 'Temperature · θ'].map((s) => '<span style="font-family:\'JetBrains Mono\',monospace;font-size:12.5px;border:1px solid var(--tf-line);background:var(--tf-tint);color:var(--k3A332B);border-radius:999px;padding:5px 12px">' + s + '</span>').join('') + '</div>'],
        ['para', R`(Other base dimensions exist — electrical current, amount of substance, luminous intensity — but you will not need them here.) Derived quantities combine the base dimensions. Build each one from its **definition** — you never need to memorise the table if you remember the chain speed → acceleration → force → pressure → energy → power:`],
        ['html', (() => {
          const th = (t) => '<th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0);font-weight:600">' + t + '</th>';
          const td = (t, x) => '<td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0);' + (x || '') + '">' + t + '</td>';
          const dm = (t) => td(t.replace(/<sup>/g, '<sup style="font-style:normal;font-size:.68em;margin-left:1px">'), 'font-family:\'KaTeX_Main\',\'Times New Roman\',serif;font-style:italic;font-size:15px;white-space:nowrap');
          const rows = [
            ['Speed', 'length per unit time', 'L/T', 'm/s'],
            ['Acceleration', 'speed per unit time', 'L/T<sup>2</sup>', 'm/s²'],
            ['Density', 'mass per unit volume (<i>L</i><sup>3</sup>)', 'M/L<sup>3</sup>', 'kg/m³'],
            ['Force', 'mass × acceleration', 'ML/T<sup>2</sup>', 'N ≡ kg m/s²'],
            ['Pressure / stress', 'force per unit area (<i>L</i><sup>2</sup>)', 'M/LT<sup>2</sup>', 'Pa ≡ N/m² ≡ kg/m s²'],
            ['Energy', 'force × distance', 'ML<sup>2</sup>/T<sup>2</sup>', 'J ≡ kg m²/s²'],
            ['Power', 'energy per unit time', 'ML<sup>2</sup>/T<sup>3</sup>', 'W ≡ kg m²/s³'],
            ['Viscosity', 'stress per unit velocity gradient', 'M/LT', 'Pa s ≡ kg/m s'],
            ['Velocity gradient', 'speed per unit distance', '1/T', '1/s']
          ];
          return '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)">' + th('Quantity') + th('Built from') + th('Dimensions') + th('SI unit') + '</tr></thead><tbody>'
            + rows.map((r) => '<tr>' + td(r[0], 'font-weight:600') + td(r[1]) + dm(r[2]) + td(r[3], 'white-space:nowrap') + '</tr>').join('') + '</tbody></table></div>';
        })()],
        ['warn', 'Key Insight', [
          R`**Rayleigh's principle:** in any equation representing a real physical event, **every term must have the same dimensions**. A term that doesn't is a mistake — use this to check every derivation.`,
          R`It also tells you what kind of equation you have. Every Bernoulli term has the dimensions of **pressure**, $M/LT^2$ — force per unit area — and in fluid mechanics pressure plays the role of force. So the course calls Bernoulli a **momentum** equation: it is a force balance (per unit area) on an inviscid fluid, the simplest momentum equation.`
        ]],
        ['deriv', 'Example — dimensions of Bernoulli and of p/ρ', [
          ['m', R`\underbrace{p_0}_{M/LT^2} = \underbrace{p}_{M/LT^2} + \underbrace{\tfrac12\rho u^2}_{\frac{M}{L^3}\cdot\frac{L^2}{T^2}} + \underbrace{\rho g\Delta z}_{\frac{M}{L^3}\cdot\frac{L}{T^2}\cdot L} \quad\Rightarrow\quad \text{all } \frac{M}{LT^2}`],
          ['t', R`$p/\rho$ is force per area divided by density:`],
          ['m', R`\left[\frac{p}{\rho}\right] = \frac{ML}{T^2}\cdot\frac{1}{L^2}\cdot\frac{L^3}{M} = \left(\frac{L}{T}\right)^2 \quad\text{— a velocity squared}`]
        ]],
        ['warn', 'Note', [
          R`Dimensions alone can't settle "momentum or energy?": $M/LT^2$ is also **energy per unit volume** ($ML^2/T^2 \div L^3$, i.e. J/m³), and Bernoulli can be derived from the SFEE (Topic 1). The course's point is about the **form**: written in pressure terms every term is a force per area; divide through by $\rho$ (or by $\dot m$ in the SFEE) and every term becomes $L^2/T^2$ (J/kg) — a dimensionally different equation. In an exam, justify "momentum equation" by "every term is a pressure, i.e. a force per unit area".`
        ]],
        ['list', R`**Things to remember:**`, false, [
          R`**Different problems need different numbers of dimensions.** An isothermal flow (pipe flow, drag on a body) needs only $M, L, T$; once temperature or heat transfer enters (a gas constant, $C_p$, $h$, $k$) you add $\theta$ — e.g. the compressible wind-tunnel example in §2.6 uses $M, L, T, \theta$. This count is the $r$ in Buckingham's theorem (§2.5).`,
          R`**Properties** have dimensions too: the gas constant $R$ (J/kg K) has dimensions $L^2/\theta T^2$.`,
          R`A derived quantity can be used as a "dimension" if convenient — e.g. force $F$ in place of mass ($F, L, T$ instead of $M, L, T$), or, in forced convection (Topic 3, §3.5), heat $Q$ (J) as a fifth dimension instead of writing J as $ML^2/T^2$. The choice changes $r$, and so the number of Πs.`,
          R`Angles are dimensionless — they are ratios of lengths (a radian is arc length ÷ radius).`
        ]]
      ]
    },
    {
      num: '2.2', title: 'Units',
      blocks: [
        ['para', R`Dimensions describe physical qualities; **units** let us express them as numbers. Many systems exist (Imperial lb, ft, °F; cgs cm, g, s; SI). In **SI**: $L$ – m, $M$ – kg, $T$ – s, $\theta$ – K, and no conversion factors are needed inside any equation.`],
        ['warn', 'Important', [
          R`**At the start of every problem, convert all quantities to SI units.** Most numerical mistakes in this unit come from km/h, mm, bar, °C or "metres of water" left unconverted.`
        ]],
        ['html', (() => {
          const th = (t) => '<th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0);font-weight:600">' + t + '</th>';
          const td = (t, x) => '<td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0);' + (x || '') + '">' + t + '</td>';
          const rows = [
            ['km/h → m/s', '÷ 3.6', '850 km/h = 236.1 m/s'],
            ['°C → K', '+ 273.15 (a temperature <i>difference</i> of 1 °C = 1 K)', '−50 °C = 223.15 K'],
            ['mm → m', '× 10<sup>−3</sup> (mm² × 10<sup>−6</sup>, cm² × 10<sup>−4</sup>)', '50 mm = 0.05 m'],
            ['litre → m³', '× 10<sup>−3</sup> (L/min ÷ 60 000 → m³/s)', '120 L/min = 2 × 10<sup>−3</sup> m³/s'],
            ['bar → Pa', '× 10<sup>5</sup> (1 atm = 1.013 × 10<sup>5</sup> Pa; kPa × 10<sup>3</sup>, MPa × 10<sup>6</sup>)', '2.5 bar = 2.5 × 10<sup>5</sup> Pa'],
            ['metres of water → Pa', '<i>p</i> = <i>ρgh</i> ≈ 9.81 × 10<sup>3</sup> Pa per metre', '3 m of water ≈ 2.94 × 10<sup>4</sup> Pa'],
            ['g/cm³ → kg/m³', '× 10<sup>3</sup>', '1 g/cm³ = 1000 kg/m³'],
            ['centipoise → Pa s', '× 10<sup>−3</sup>', 'water ≈ 1 cP = 10<sup>−3</sup> Pa s']
          ];
          return '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)">' + th('Convert') + th('Factor') + th('Example') + '</tr></thead><tbody>'
            + rows.map((r) => '<tr>' + td(r[0], 'font-weight:600;white-space:nowrap') + td(r[1]) + td(r[2]) + '</tr>').join('') + '</tbody></table></div>';
        })()],
        ['para', R`Some derived units have their own names (N, Pa, J, W) — they are shorthand only: $1\ \text{N} \equiv 1$ kg m/s². (The conversion table above is a revision aid; the factors are standard, not from the slides.)`]
      ]
    },
    {
      num: '2.3', title: 'Non-Dimensional Numbers',
      blocks: [
        ['para', R`How small is "small"? To justify neglecting something, **compare its scale with another quantity**. A non-dimensional number is exactly that: the ratio of two typical (order-of-magnitude) quantities — forces, energy flow rates, time scales or length scales. They have **physical meaning**, recur across problems, and are named after the person most associated with them. Because they are only order-of-magnitude estimates, numerical factors (½, π…) are dropped — only the combination of variables matters.`],
        ['deriv', 'Derivation — the Reynolds number as a force ratio', [
          ['t', R`**Inertial force = mass × acceleration.** The fluid involved has mass $\sim\rho L^3$. It changes speed by $\sim u$ in the time $\sim L/u$ it takes to pass the object, so its acceleration is $\sim u/(L/u) = u^2/L$:`],
          ['m', R`F_I \sim \rho L^3\cdot\frac{u^2}{L} = \rho u^2 L^2`],
          ['t', R`(Equivalently: the dynamic pressure $\rho u^2$ acting on an area $L^2$.)`],
          ['t', R`**Viscous force = shear stress × area.** For a Newtonian fluid $\tau = \mu\,du/dy \sim \mu u/L$, acting on an area $\sim L^2$:`],
          ['m', R`F_V \sim \mu\,\frac{u}{L}\cdot L^2 = \mu u L`],
          ['svg', 'tf_force_scales', 'Where the scalings come from: a lump of fluid of mass ρL³ accelerated by u²/L gives ρu²L²; a stress μu/L on an area L² gives μuL.'],
          ['m', R`Re = \frac{F_I}{F_V} = \frac{\rho u^2 L^2}{\mu u L} = \frac{\rho u L}{\mu}`],
          ['t', R`**Low $Re$**: worry about viscous forces only. **High $Re$**: worry about inertial forces only. Every other force ratio below is built the same way — write each force as (property) × (stress or acceleration scale) × (area or volume), then divide.`]
        ]],
        ['para', R`**Ratios of forces.** $l$ is a length scale; which length is suitable varies from problem to problem.`],
        ['eq', [
          ['Reynolds · inertia : viscous', R`Re = \frac{\rho u^2 l^2}{\mu u l} = \frac{\rho u l}{\mu}`, '[–]', 'Controls laminar vs turbulent; transition ≈ 2000 in a pipe.'],
          ['Euler · direct stress : inertia', R`Eu = \frac{\Delta p\, l^2}{\rho u^2 l^2} = \frac{\Delta p}{\rho u^2}`, '[–]', 'Δp = the pressure difference the flow produces or needs — across a body (front to back), or along a pipe. Called the drag, lift or friction coefficient (usually with a ½ in the denominator) depending on what makes the Δp.'],
          ['Froude · inertia : gravity', R`Fr = \frac{\rho u^2 l^2}{\rho g\, l^3} = \frac{u^2}{g l}`, '[–]', 'Ship resistance, open channels. l is the length gravity acts over (e.g. depth in an open channel). Some texts use the square root, u/√(gl).'],
          ['Weber · inertia : surface tension', R`We = \frac{\rho u^2 l^2}{\sigma l} = \frac{\rho u^2 l}{\sigma}`, '[–]', 'Shape of drops and bubbles; σ = surface-tension force per unit length of interface, N/m.'],
          ['Mach · inertia : elastic', R`\frac{\rho u^2 l^2}{E\, l^2} = \frac{u^2}{E/\rho} = Ma^2, \qquad Ma = \frac{u}{\sqrt{E/\rho}} = \frac{u}{a}`, '[–]', 'E = bulk modulus; a = √(E/ρ) = speed of sound. The force ratio is Ma²; Ma is its square root.'],
          ['Grashof · buoyancy : viscous', R`Gr = \frac{\beta g \rho^2 l^3 \Delta T}{\mu^2}`, '[–]', 'Natural convection; β = expansion coefficient (1/K), ΔT = temperature difference driving the buoyancy. Buoyancy ρβΔT g l³ over viscous μul, with the velocity scale set by viscosity, u ~ μ/ρl.']
        ]],
        ['para', R`**Ratios of energy flow rates.** Convective heat flux $h\Delta T$ against conductive heat flux $k\Delta T/l$:`],
        ['eq', [
          ['Nusselt · convection : conduction in fluid', R`Nu = \frac{h\,\Delta T}{k\,\Delta T/l} = \frac{h l}{k}`, '[–]', 'k of the FLUID.'],
          ['Biot · convection from object : conduction in object', R`Bi = \frac{h\,\Delta T}{k\,\Delta T/l} = \frac{h l}{k}`, '[–]', 'Same form as Nu but k of the OBJECT (solid).']
        ]],
        ['para', R`**Ratios of time scales.** $l^2/\alpha$ is the time heat takes to diffuse (conduct) a distance $l$; $\alpha = k/\rho C_p$ is the thermal diffusivity (m²/s).`],
        ['eq', [
          ['Fourier · conduction : storage', R`Fo = \frac{\alpha\tau}{l^2} = \frac{\tau}{l^2/\alpha}`, '[–]', 'τ = elapsed time. Fo ≪ 1: heat has only reached a thin surface layer and is mostly being stored there; Fo ≳ 1: conduction has carried it through the whole object.'],
          ['Rayleigh · diffusion time : convection time', R`Ra = \frac{l^2/\alpha}{\mu/\rho\beta\Delta T g\, l} = \frac{\rho\beta\Delta T\, g\, l^3}{\mu\alpha} = Gr\,Pr`, '[–]', 'μ/(ρβΔT g l) = time for buoyancy-driven flow, held back by viscosity, to cross l. Large Ra: convection carries heat faster than conduction can, so natural convection takes over.'],
          ['Schmidt · viscous diffusion : molecular diffusion', R`Sc = \frac{\mu}{\rho\mathcal{D}} = \frac{\nu}{\mathcal{D}}`, '[–]', '𝒟 = mass diffusivity (m²/s); ν = μ/ρ.']
        ]],
        ['para', R`**Other ratios.** The important Prandtl number compares two diffusivities:`],
        ['eq', [
          ['Prandtl · momentum : heat diffusivity', R`Pr = \frac{\mu/\rho}{k/\rho C_p} = \frac{\mu C_p}{k}`, '[–]', 'A fluid property; ≈ 0.7 for air, ≈ 7 for water.']
        ]],
        ['warn', 'Key Insight', [
          R`The **Mach number** is usually read as a velocity ratio $u/a$, but it really comes from a **force** balance: inertia against the elasticity (bulk modulus $E$) of the compressible gas.`,
          R`**Nu vs Bi**: identical form $hl/k$, different meaning — in $Nu$, $k$ is the fluid's; in $Bi$, $k$ is the solid object's.`,
          R`Some numbers are products of others, e.g. $Ra = Gr\,Pr$ — check: $\dfrac{\beta g\rho^2 l^3\Delta T}{\mu^2}\cdot\dfrac{\mu}{\rho\alpha} = \dfrac{\rho\beta\Delta T g l^3}{\mu\alpha}$.`
        ]],
        ['warn', 'Warning', [
          R`Course typos corrected here: the handout and Week 1 notes print $Sc = \mu/\rho l$, which has units of m/s — the Schmidt number uses the **mass diffusivity**: $Sc = \mu/\rho\mathcal{D}$. The Week 1 notes' Froude ratio prints $\rho u l^2$ for inertia; it is $\rho u^2 l^2$ (as on the handout).`,
          R`The course writes the temperature difference as $\theta$ (or $\Delta\theta$) in $Gr$, $Nu$ and $Bi$ but $\Delta T$ in $Ra$. It is the same quantity; these notes use $\Delta T$ throughout so it is not confused with the dimension $\theta$.`
        ]]
      ]
    },
    {
      num: '2.4', title: 'Similarity',
      blocks: [
        ['para', R`"Similar" has a specific technical meaning: flows are similar when they have the **same distribution of quantities** within them. Then one analysis (or one model test) applies to the whole family of flows.`],
        ['svg', 'tf_similarity', 'Geometric: every length scaled by one factor (here ½). Kinematic: the same velocity ratio uₘ/u_fs at every pair of corresponding points P. Dynamic: the same force ratios (e.g. lift : drag) at every P — which happens when every Π has the same value.'],
        ['list', R`**Three types of similarity:**`, true, [
          R`**Geometric** — same shape, different size: every length in the model is the full-scale length times **one** scale factor. (It is the **flow** geometry that matters, not necessarily the object's: the course's example is Göthert's rule, which matches compressible flow round one aerofoil to the flow round a deliberately stretched version of it.)`,
          R`**Kinematic** — the streamlines are geometrically similar: at every pair of corresponding points the velocities point the same way and are in the **same ratio** $u_m/u_{fs}$. The fluid follows same-shaped paths (but same-shaped paths alone don't guarantee the velocity ratios match).`,
          R`**Dynamic** — the resultant forces per unit mass have the same ratios at corresponding points. This needs kinematic similarity **and** similar mass distributions.`
        ]],
        ['warn', 'Key Insight', [
          R`**What needs what:** dynamic similarity **needs** kinematic similarity, which **needs** geometric similarity (you can't have same-shaped streamlines round differently-shaped bodies). So dynamic similarity **gives** you the other two: dynamic ⇒ kinematic ⇒ geometric.`,
          R`The reverse does **not** follow. Two geometrically identical cylinders can have completely different flows — smooth attached streamlines at $Re \approx 1$, a separated turbulent wake at $Re \approx 10^5$. Same shape, different kinematics, different forces.`,
          R`You get dynamic similarity when **every non-dimensional group has the same value** in the two flows. Matching size alone is not enough — speeds and forces must scale too.`
        ]],
        ['para', R`This is why wind-tunnel testing works: a small model aerofoil gives the forces on a full-scale wing **provided** the tunnel is run so the flows are dynamically similar. "Scale" means time, force and energy as well as size.`]
      ]
    },
    {
      num: '2.5', title: "Buckingham's Π Theorem",
      blocks: [
        ['para', R`If the quantity you want, $q_1$, depends on $n-1$ other dimensional variables, $q_1 = g(q_2, q_3, \ldots, q_n)$, and those $n$ variables use $r$ independent dimensions, then they can be combined into $n - r$ dimensionless groups:`],
        ['disp', [ R`\boxed{\Pi_1 = G(\Pi_2, \Pi_3, \ldots, \Pi_{n-r}) \qquad \text{number of } \Pi\text{s} = n - r} \tag{2.1}` ]],
        ['list', R`**Counting $n$ and $r$:**`, false, [
          R`$n$ counts **every** dimensional variable, including the one you want ($q_1$).`,
          R`$r$ is the number of independent base dimensions **actually present** in those $n$ variables: write the dimensions of each and count the distinct ones — $M, L, T$ gives $r = 3$; add $\theta$ if a temperature, gas constant or thermal property appears, $r = 4$.`,
          R`(The recipe in Topic 3 calls this the number of degrees of freedom $j$. It almost always equals the number of dimensions; if the chosen repeating variables can't avoid forming a Π among themselves, reduce it by one.)`
        ]],
        ['warn', 'Key Insight', [
          R`There are **fewer Πs than dimensional variables** — this is a good thing. Fewer variables means fewer experiments, and the Πs give **generalisable, scaled** relationships.`
        ]],
        ['svg', 'tf_pipe_dims', 'The seven variables of pipe flow: what you want (Δp between two sections a length l apart), what you set (uₘ), the fluid (ρ, μ) and the pipe (D, l, e).'],
        ['deriv', 'Example — pipe flow (used throughout the unit)', [
          ['m', R`\underset{M/LT^2}{\Delta p} = f\Big(\underset{M/L^3}{\rho},\ \underset{M/LT}{\mu},\ \underset{L/T}{u_m},\ \underset{L}{l},\ \underset{L}{D},\ \underset{L}{e}\Big)`],
          ['t', R`$n = 7$ variables, $r = 3$ dimensions ($M, L, T$ — no temperature) ⇒ $7 - 3 = $ **4 Πs**.`],
          ['t', R`**Forming the first Π** with repeating variables $\rho$ ($M$), $u_m$ ($T$), $D$ ($L$) and the non-repeating $\Delta p$ — the exponents of each dimension must sum to zero:`],
          ['m', R`\Pi_1 = \rho^{\alpha}u_m^{\beta}D^{\gamma}\Delta p:\quad \Big(\frac{M}{L^3}\Big)^{\alpha}\Big(\frac{L}{T}\Big)^{\beta}L^{\gamma}\,\frac{M}{LT^2} = 1`],
          ['m', R`M:\ \alpha + 1 = 0 \qquad T:\ -\beta - 2 = 0 \qquad L:\ -3\alpha + \beta + \gamma - 1 = 0`],
          ['m', R`\Rightarrow\quad \alpha = -1,\quad \beta = -2,\quad \gamma = 0 \quad\Rightarrow\quad \Pi_1 = \frac{\Delta p}{\rho u_m^2}`],
          ['t', R`Repeating with $\mu$, $l$ and $e$ in turn gives the other three (full method in Topic 3). The four are a pressure : inertia group, a Reynolds number and two length ratios:`],
          ['m', R`\Pi_1 = \frac{\Delta p}{\rho u_m^2}\ (Eu\text{-type}),\qquad \Pi_2 = \frac{\rho u_m D}{\mu} = Re`],
          ['m', R`\Pi_3 = \frac{l}{D},\qquad \Pi_4 = \frac{e}{D}`],
          ['m', R`\Rightarrow\quad C_f = f\!\left(Re,\ \frac{l}{D},\ \frac{e}{D}\right)`]
        ]],
        ['warn', 'Note', [
          R`**How the Πs are formed** (the full recipe is Topic 3): pick $r$ **repeating variables** that between them contain every dimension but can't form a Π on their own — here $\rho$ (for $M$), $u_m$ (for $T$), $D$ (for $L$). Combine them with each remaining variable in turn, e.g. $\Pi_1 = \rho^{\alpha}u_m^{\beta}D^{\gamma}\Delta p$, and choose the exponents so every dimension cancels. Each of the $n - r$ non-repeating variables gives one Π.`
        ]]
      ]
    },
    {
      num: '2.6', title: 'Scaling for Model Testing',
      blocks: [
        ['para', R`A meaningful model must not just **look** the same; it must be **dynamically similar**, so every Π must take the same value in the model $(m)$ as at full scale $(fs).$ Write the condition, then rearrange for the unknown ratio.`],
        ['eq', [
          ['Reynolds matching', R`\left(\frac{\rho u l}{\mu}\right)_m = \left(\frac{\rho u l}{\mu}\right)_{fs} \;\Rightarrow\; \frac{u_m}{u_{fs}} = \frac{\rho_{fs}}{\rho_m}\,\frac{\mu_m}{\mu_{fs}}\,\frac{l_{fs}}{l_m}`, '[–]', 'Same fluid: the speed ratio is the inverse of the length ratio.'],
          ['Force-coefficient matching', R`\left(\frac{F}{\rho u^2 l^2}\right)_m = \left(\frac{F}{\rho u^2 l^2}\right)_{fs}`, '[–]', 'Transfers the measured force to full scale.'],
          ['Perfect-gas density ratio', R`\frac{\rho_{fs}}{\rho_m} = \frac{p_{fs}}{p_m}\,\frac{T_m}{T_{fs}}`, '[–]', 'From ρ = p/RT.']
        ]],
        ['ex', 'Example — heat-exchanger tube model (lecture)', [
          ['t', R`A $1/10$-scale model of a smooth, horizontal heat-exchanger tube carrying water in a power station. Smooth ($e/D$ unimportant) and fully developed ($l/D$ unimportant), so $C_f = f(Re)$ only. Find the ratio of the pressure drops if the model fluid is (1) water ($\rho = 10^3$ kg/m³, $\mu = 10^{-3}$ kg/m s — the same as at full scale, same temperature), (2) air at STP ($\rho = 1.2$ kg/m³, $\mu = 1.7\times10^{-5}$ kg/m s).`],
          ['ans'],
          ['t', R`**Step 1 — match $Re$** to get the model speed:`],
          ['m', R`\frac{u_m}{u_{fs}} = \frac{\rho_{fs}}{\rho_m}\,\frac{\mu_m}{\mu_{fs}}\,\frac{D_{fs}}{D_m}`],
          ['t', R`**Step 2 — match $C_f = \Delta p/\tfrac12\rho u^2$** (the ½ cancels) and substitute Step 1. Only $Re$ needs matching because $l/D$ and $e/D$ are automatically equal in a geometrically similar model (and here do not affect $C_f$ anyway):`],
          ['m', R`\frac{(\Delta p)_m}{(\Delta p)_{fs}} = \frac{\rho_m}{\rho_{fs}}\left(\frac{u_m}{u_{fs}}\right)^2 = \frac{\rho_{fs}}{\rho_m}\left(\frac{\mu_m}{\mu_{fs}}\right)^2\left(\frac{D_{fs}}{D_m}\right)^2`],
          ['t', R`**(1) Water:** $\rho_{fs}/\rho_m = \mu_m/\mu_{fs} = 1$, $D_{fs}/D_m = 10$:`],
          ['m', R`\frac{u_m}{u_{fs}} = 10, \qquad \frac{(\Delta p)_m}{(\Delta p)_{fs}} = 1\times1^2\times10^2 = 100`],
          ['t', R`**(2) Air:**`],
          ['m', R`\frac{u_m}{u_{fs}} = \frac{1000}{1.2}\times\frac{1.7\times10^{-5}}{10^{-3}}\times10 = 142, \qquad \frac{(\Delta p)_m}{(\Delta p)_{fs}} = \frac{1000}{1.2}\left(\frac{1.7\times10^{-5}}{10^{-3}}\right)^2 10^2 = 24.1`],
          ['t', R`So the model reads 100× (water) or 24.1× (air) the full-scale pressure drop; inverted, $(\Delta p)_{fs}/(\Delta p)_m = 0.01$ or $0.0415.$ Note the air model needs a speed 142× the full-scale water speed — check that is achievable (and slow enough to stay incompressible) before choosing a model fluid.`]
        ]],
        ['ex', 'Example — wind-tunnel model of an aircraft (lecture)', [
          ['t', R`A scale model of an aircraft is tested in a wind tunnel to estimate its drag. Full scale: $U = 850$ km/h, $p = 2.65\times10^4$ Pa, $T = -50$ °C, $\mu = 1.48\times10^{-5}$ kg/m s. Tunnel: $p = 1.01\times10^5$ Pa, $T = 15$ °C, $\mu = 1.80\times10^{-5}$ kg/m s. The flow is compressible, so $R = 287$ J/kg K is needed. Find (1) the tunnel speed and (2) the minimum tunnel width if the full-scale wingspan is 11 m.`],
          ['ans'],
          ['t', R`**Π count:** drag force $F_D = f(\rho, \mu, R, T, U, L)$, where $T$ is the gas **temperature** (dimension $\theta$; the course writes the variable as $\theta$ too) — 7 variables in $M, L, T, \theta$ ($r = 4$) ⇒ 3 Πs: $C_D = F_D/\rho U^2L^2 = f(Ma, Re)$. Two independent Πs to match, and two things we can choose in the tunnel ($U_m$ and $L_m$): **match $Ma$ to fix $U_m$, then $Re$ to fix $L_m$.**`],
          ['t', R`**Step 0 — SI:** $U_{fs} = 850/3.6 = 236.1$ m/s; $T_{fs} = 223.15$ K, $T_m = 288.15$ K.`],
          ['t', R`**Step 1 — match $Ma$** ($a = \sqrt{RT}$ here, as the course uses):`],
          ['m', R`\frac{U_{fs}}{\sqrt{RT_{fs}}} = \frac{U_m}{\sqrt{RT_m}} \;\Rightarrow\; U_m = U_{fs}\sqrt{\frac{T_m}{T_{fs}}} = 236.1\sqrt{\frac{288.15}{223.15}} = 268\ \text{m/s}`],
          ['t', R`(Both flows are at $Ma = 236.1/\sqrt{287\times223.15} = 0.93$.)`],
          ['t', R`**Step 2 — the three ratios**, density first, from the perfect gas law $\rho = p/RT$:`],
          ['m', R`\frac{\rho_{fs}}{\rho_m} = \frac{p_{fs}}{p_m}\,\frac{T_m}{T_{fs}} = \frac{2.65\times10^4}{1.01\times10^5}\times\frac{288.15}{223.15} = 0.339`],
          ['m', R`\frac{\mu_m}{\mu_{fs}} = \frac{1.80}{1.48} = 1.22, \qquad \frac{U_{fs}}{U_m} = \frac{236.1}{268.3} = 0.880`],
          ['t', R`**Step 3 — match $Re$** and solve for the model length:`],
          ['m', R`\frac{\rho_{fs}U_{fs}L_{fs}}{\mu_{fs}} = \frac{\rho_m U_m L_m}{\mu_m} \;\Rightarrow\; L_m = L_{fs}\,\frac{\mu_m}{\mu_{fs}}\,\frac{\rho_{fs}}{\rho_m}\,\frac{U_{fs}}{U_m} = 11\times1.22\times0.339\times0.880 = 4.0\ \text{m}`],
          ['t', R`$L_m = 4.0$ m is the **model's wingspan** — the smallest model that still matches $Re$. The model has to fit in the tunnel, so the tunnel must be **at least ≈ 4 m wide** (in practice wider, so the walls don't disturb the flow).`]
        ]],
        ['warn', 'When to use', [
          R`Any "scale model", "wind tunnel", "water tunnel", "flume" or "prototype" question. Match the **independent** Πs (e.g. $Re$, $Ma$, $Fr$) to fix the model's operating point, then use the **dependent** Π ($C_D$, $C_f$, power number…) to scale the measured result.`
        ]]
      ]
    },
    {
      num: 'Ex 2', title: 'Problem Sheet — Building Blocks of Dimensional Analysis', wk: true,
      blocks: [
        ['ex', 'Q1 — units and dimensions', [
          ['t', R`Give the units and dimensions ($M, L, T$, and $\theta$ where needed) of: (a) speed, volume flow rate, volume flux, mass flow rate, mass flux; (b) angular speed and acceleration; (c) density, specific volume, viscosity, surface tension; (d) acceleration, force, pressure, energy, power; (e) gas constant, specific heat capacity, entropy, heat transfer coefficient, thermal conductivity; (f) Reynolds number, drag coefficient.`],
          ['ans'],
          ['t', R`**(a)** **Rates** are per unit time, **fluxes** per unit area. Speed m/s, $L/T$ · volume flow rate m³/s, $L^3/T$ · volume flux m/s, $L/T$ · mass flow rate kg/s, $M/T$ · mass flux kg/s m², $M/TL^2.$`],
          ['t', R`**(b)** Angular speed 1/s, $1/T$ · angular acceleration 1/s², $1/T^2$ (angles are dimensionless).`],
          ['t', R`**(c)** Density kg/m³, $M/L^3$ · specific volume m³/kg, $L^3/M$ (the reciprocal of density) · viscosity Pa s ≡ kg/m s, $M/LT$ · surface tension N/m, $M/T^2$ (force = σ × interface length).`],
          ['t', R`**(d)** Acceleration m/s², $L/T^2$ · force N ≡ kg m/s², $ML/T^2$ (mass × acceleration) · pressure Pa ≡ kg/m s², $M/LT^2$ (force per area) · energy J ≡ kg m²/s², $ML^2/T^2$ (force × distance) · power W ≡ kg m²/s³, $ML^2/T^3$ (energy per time).`],
          ['t', R`**(e)** Gas constant and specific heat J/kg K, $L^2/\theta T^2$ · entropy J/K, $ML^2/T^2\theta$ (specific entropy J/kg K: divide by $M$) · heat transfer coefficient W/m² K, $M/T^3\theta$ · thermal conductivity W/m K, $ML/T^3\theta.$`],
          ['t', R`**(f)** Both dimensionless — they are Πs.`],
          ['t', R`Footnote: the printed solution's $L/M^3$ for specific volume is a typo.`]
        ]],
        ['ex', 'Q2 — cylinder in an unsteady flow', [
          ['t', R`A cylinder sits in an unsteady uniform air flow of velocity $U$. (a) What five variables does the force $F$ depend on? (b) Their dimensions? (c) How many Πs?`],
          ['ans'],
          ['m', R`\underset{ML/T^2}{F} = f\Big(\underset{M/L^3}{\rho},\ \underset{M/LT}{\mu},\ \underset{L/T}{U},\ \underset{T}{t},\ \underset{L}{D}\Big)`],
          ['t', R`Relative speed $U$; unsteady, so time $t$ matters; the air's mechanical properties $\rho$ and $\mu$; the cylinder's one length scale $D$. Six variables, three dimensions ⇒ **three Πs**.`]
        ]],
        ['ex', 'Q3 — the common numbers', [
          ['t', R`Without looking them up, write down the forms and meaning of the Reynolds, Froude, Euler, Nusselt, Mach and Fourier numbers.`],
          ['ans'],
          ['m', R`Re = \frac{\rho u l}{\mu} = \frac{\text{inertia}}{\text{viscous}} \qquad Fr = \frac{u^2}{gl} = \frac{\text{inertia}}{\text{gravity}}`],
          ['m', R`Eu = \frac{\Delta p}{\rho u^2} = \frac{\text{pressure force}}{\text{inertia}} \qquad Nu = \frac{hl}{k_{\text{fluid}}} = \frac{\text{convection}}{\text{conduction in fluid}}`],
          ['m', R`Ma = \frac{u}{a} = \frac{u}{\sqrt{E/\rho}} = \frac{\text{inertia}}{\text{elastic}} \qquad Fo = \frac{\alpha\tau}{l^2} = \frac{\text{conduction}}{\text{storage}}`],
          ['t', R`See §2.3 for where each comes from. The first four plus Ma are force (or energy-flow) ratios; Fo is a time ratio.`]
        ]],
        ['ex', 'Q4 — the Weber number', [
          ['t', R`What is the form of the Weber number, what does it mean, and how do you arrive at it?`],
          ['ans'],
          ['t', R`It compares the **inertia** of a bubble/drop (which distorts it) with **surface tension** (which keeps it spherical), so it controls the shape — and hence the motion — of drops, bubbles and liquid films. Inertia over the cross-section scales as $\rho U^2 D^2$; surface-tension force as $\sigma D$ (σ × interface length):`],
          ['m', R`We = \frac{\rho U^2 D^2}{\sigma D} = \frac{\rho U^2 D}{\sigma}`]
        ]],
        ['ex', 'Q5 — 1/50 scale model', [
          ['t', R`The force on an object moving at 1 m/s is estimated with a 1/50 scale model in a wind tunnel; both in air at STP. If the non-dimensional force depends only on $Re,$ what tunnel speed? [50 m/s]`],
          ['ans'],
          ['m', R`Re_m = Re_{fs},\ \text{same fluid} \Rightarrow U_m = U_{fs}\frac{D_{fs}}{D_m} = 1 \times 50 = 50\ \text{m/s}`]
        ]],
        ['ex', 'Q6 — relative size of forces', [
          ['t', R`A cylinder $D = 0.1$ m is in a steady air flow of 100 m/s ($\rho = 1.204$ kg/m³, $\mu = 1.82\times10^{-5}$ N s/m²). Estimate the viscous and gravitational forces relative to the inertial force. [$1.51\times10^{-6}$; $9.81\times10^{-5}$]`],
          ['ans'],
          ['t', R`Scale each force (ignore numerical coefficients). Viscous: stress $\mu U/D$ × area $D^2$, $F_V \sim \mu U D$. Inertial: $\rho U^2 D^2$ — or mass $\rho D^3$ × acceleration $U/(D/U) = U^2/D$, the same thing. Gravitational: mass × $g$, $F_G \sim \rho D^3 g$.`],
          ['m', R`\frac{F_V}{F_I} = \frac{\mu}{\rho U D} = \frac{1.82\times10^{-5}}{1.204\times100\times0.1} = 1.51\times10^{-6}`],
          ['m', R`\frac{F_G}{F_I} = \frac{gD}{U^2} = \frac{9.81\times0.1}{100^2} = 9.81\times10^{-5}`],
          ['t', R`**Advanced:** this is misleading for the viscous force. Viscous forces act over the **boundary-layer thickness** $\delta$, not $D$, so $F_V/F_I = \mu/\rho U\delta$ is far larger — and viscosity also causes separation, which dominates drag. Always choose the physically meaningful length scale.`]
        ]],
        ['ex', 'Extra practice (not on the course sheet) — check and compute', [
          ['t', R`(a) Use Rayleigh's principle to check: (i) $u = \sqrt{2gh}$; (ii) $\Delta p = 32\mu u_m l/D^2$; (iii) $\Delta p = \tfrac12\rho g u^2.$ (b) Water ($\rho = 1000$ kg/m³, $\mu = 10^{-3}$ Pa s) flows at 2 m/s in a 50 mm pipe: find $Re$. (c) An open channel runs 0.4 m deep at 1.5 m/s: find $Fr = u^2/gl$.`],
          ['ans'],
          ['m', R`\text{(i) } \sqrt{\frac{L}{T^2}\cdot L} = \frac{L}{T}\ \checkmark \qquad \text{(ii) } \frac{M}{LT}\cdot\frac{L}{T}\cdot\frac{L}{L^2} = \frac{M}{LT^2}\ \checkmark`],
          ['m', R`\text{(iii) } \frac{M}{L^3}\cdot\frac{L}{T^2}\cdot\frac{L^2}{T^2} = \frac{M}{T^4}\ \text{— not a pressure}`],
          ['t', R`(iii) is not a pressure — the stray $g$ is wrong; it should be $\tfrac12\rho u^2$ (this exact typo is on a Topic 1 slide).`],
          ['m', R`Re = \frac{1000\times2\times0.05}{10^{-3}} = 1.0\times10^5 \quad (\gg 2000\text{: turbulent})`],
          ['m', R`Fr = \frac{1.5^2}{9.81\times0.4} = 0.57`]
        ]],
        ['check', 'Exam checklist — dimensions, Πs and scaling', [
          R`**Convert everything to SI** first (km/h, °C, mm, bar, metres of water…).`,
          R`**Check dimensions** of every term (Rayleigh's principle) — and of your final answer.`,
          R`**Count:** list the $n$ variables (including the one you want) with their dimensions; count the $r$ distinct dimensions present ⇒ $n - r$ Πs.`,
          R`**List the Πs** (Topic 3 recipe) and put them in named forms: $Re$, $Eu$/$C_f$/$C_D$, $Ma$, $Fr$, length ratios.`,
          R`**Scale a model:** match every **independent** Π ($Re$, $Ma$, $Fr$, $l/D$…) to fix the model's speed or size; then equate the **dependent** Π ($C_D$, $C_f$…) to convert the measured result to full scale.`,
          R`**Sanity-check** the answer: is the model speed achievable (and still incompressible)? Does the model fit the tunnel?`
        ]]
      ]
    }
  ]
}
