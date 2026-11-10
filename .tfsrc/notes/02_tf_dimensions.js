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
          R`Write the form **and physical meaning** of the Reynolds, Euler, Froude, Weber, Mach, Grashof, Nusselt, Biot, Fourier, Rayleigh and Prandtl numbers.`,
          R`Distinguish **geometric, kinematic and dynamic** similarity, and state the condition for dynamic similarity.`,
          R`Use **Buckingham's Π theorem** to predict how many dimensionless groups a problem needs.`,
          R`Scale a model test to full size by matching every Π.`
        ]]
      ]
    },
    {
      num: '2.1', title: 'Dimensions',
      blocks: [
        ['para', R`Units carry physical meaning: m/s tells you speed is a rate of change of distance. That meaning does not depend on the measuring system, so we work with **dimensions**, which are system-independent. Everything in this unit is built from four **base dimensions**:`],
        ['html', '<div style="display:flex;flex-wrap:wrap;gap:8px;margin:2px 0 4px">' + ['Mass · M', 'Length · L', 'Time · T', 'Temperature · θ'].map((s) => '<span style="font-family:\'JetBrains Mono\',monospace;font-size:12.5px;border:1px solid var(--tf-line);background:var(--tf-tint);color:var(--k3A332B);border-radius:999px;padding:5px 12px">' + s + '</span>').join('') + '</div>'],
        ['para', R`(Other base dimensions exist — electrical current, amount of substance, luminous intensity — but you will not need them here.) Derived quantities combine the base dimensions:`],
        ['eq', [
          ['Speed', R`L/T`, '[m/s]', 'Length per unit time.'],
          ['Acceleration', R`L/T^2`, '[m/s²]', 'Speed per unit time.'],
          ['Density', R`M/L^3`, '[kg/m³]', 'Mass per unit volume.'],
          ['Force', R`ML/T^2`, '[N ≡ kg m/s²]', 'Mass × acceleration.'],
          ['Pressure / stress', R`M/LT^2`, '[Pa ≡ kg/m s²]', 'Force per unit area.'],
          ['Energy', R`ML^2/T^2`, '[J ≡ kg m²/s²]', 'Force × distance.'],
          ['Power', R`ML^2/T^3`, '[W ≡ kg m²/s³]', 'Energy per unit time.'],
          ['Viscosity', R`M/LT`, '[Pa s ≡ kg/m s]', 'Stress per unit velocity gradient.'],
          ['Velocity gradient', R`1/T`, '[1/s]', 'Speed per unit distance.']
        ]],
        ['warn', 'Key Insight', [
          R`**Rayleigh's principle:** in any equation representing a real physical event, **every term must have the same dimensions**. A term that doesn't is a mistake — use this to check every derivation.`,
          R`It also tells you what kind of equation you have: Bernoulli's terms all have dimensions $M/LT^2$ (pressure), so it is a **momentum** equation.`
        ]],
        ['deriv', 'Example — dimensions of Bernoulli and of p/ρ', [
          ['m', R`\underbrace{p_0}_{M/LT^2} = \underbrace{p}_{M/LT^2} + \underbrace{\tfrac12\rho u^2}_{\frac{M}{L^3}\cdot\frac{L^2}{T^2}} + \underbrace{\rho g\Delta z}_{\frac{M}{L^3}\cdot\frac{L}{T^2}\cdot L} \quad\Rightarrow\quad \text{all } \frac{M}{LT^2}`],
          ['m', R`\left[\frac{p}{\rho}\right] = \frac{ML}{T^2}\cdot\frac{1}{L^2}\cdot\frac{L^3}{M} = \left(\frac{L}{T}\right)^2 \quad\text{— a velocity squared}`]
        ]],
        ['list', R`**Things to remember:**`, false, [
          R`Different problems need different numbers of dimensions.`,
          R`**Properties** have dimensions too: the gas constant $R$ (J/kg K) has dimensions $L^2/\theta T^2$.`,
          R`A derived quantity such as force or heat can be used as a "dimension" if convenient (Topic 3, convection).`,
          R`Angles are dimensionless — they are ratios of lengths.`
        ]]
      ]
    },
    {
      num: '2.2', title: 'Units',
      blocks: [
        ['para', R`Dimensions describe physical qualities; **units** let us express them as numbers. Many systems exist (Imperial lb, ft, °F; cgs; SI). In **SI**: $L$ – m, $M$ – kg, $T$ – s, $\theta$ – K, and no conversion factors are needed.`],
        ['warn', 'Important', [
          R`**At the start of every problem, convert all quantities to SI units.** Most numerical mistakes in this unit come from km/h, mm, bar, °C or "metres of water" left unconverted.`
        ]],
        ['para', R`Some derived units have their own names (N, Pa, J, W) — they are shorthand only: $1\ \text{N} \equiv 1$ kg m/s².`]
      ]
    },
    {
      num: '2.3', title: 'Non-Dimensional Numbers',
      blocks: [
        ['para', R`How small is "small"? To justify neglecting something, **compare its scale with another quantity**. A non-dimensional number is exactly that: the ratio of two typical (order-of-magnitude) quantities — forces, energy flow rates, time scales or length scales. They have **physical meaning**, recur across problems, and are named after the person most associated with them.`],
        ['deriv', 'Derivation — the Reynolds number as a force ratio', [
          ['t', R`Inertial forces (associated with $\rho$) scale as $\rho u^2 L^2$; viscous forces (associated with $\mu$) scale as $\mu u L$:`],
          ['m', R`Re = \frac{\rho u^2 L^2}{\mu u L} = \frac{\rho u L}{\mu}`],
          ['t', R`**Low $Re$**: worry about viscous forces only. **High $Re$**: worry about inertial forces only.`]
        ]],
        ['eq', [
          ['Reynolds number', R`Re = \frac{\rho u l}{\mu} = \frac{\text{inertia}}{\text{viscous}}`, '[–]', 'Controls laminar vs turbulent; 2000 in a pipe.'],
          ['Euler number', R`Eu = \frac{\Delta p}{\rho u^2} = \frac{\text{direct stress}}{\text{inertia}}`, '[–]', 'Appears as C_D, C_L, C_f depending on what makes the Δp.'],
          ['Froude number', R`Fr = \frac{u^2}{g l} = \frac{\text{inertia}}{\text{gravity}}`, '[–]', 'Ship resistance, open channels. Use a vertical l.'],
          ['Weber number', R`We = \frac{\rho u^2 l}{\sigma} = \frac{\text{inertia}}{\text{surface tension}}`, '[–]', 'Shape of drops and bubbles; σ in N/m.'],
          ['Mach number', R`Ma = \frac{u}{\sqrt{E/\rho}} = \frac{u}{a} = \frac{\text{inertia}}{\text{elastic}}`, '[–]', 'E = bulk modulus; a = speed of sound.'],
          ['Grashof number', R`Gr = \frac{\beta g\rho^2 l^3\theta}{\mu^2} = \frac{\text{buoyancy}}{\text{viscous}}`, '[–]', 'Natural convection; β = expansion coefficient.'],
          ['Nusselt number', R`Nu = \frac{h l}{k} = \frac{\text{convection}}{\text{conduction in fluid}}`, '[–]', 'k of the FLUID.'],
          ['Biot number', R`Bi = \frac{h l}{k} = \frac{\text{convection from object}}{\text{conduction in object}}`, '[–]', 'Same form as Nu but k of the OBJECT.'],
          ['Fourier number', R`Fo = \frac{\alpha\tau}{l^2} = \frac{\text{conduction}}{\text{storage}}`, '[–]', 'α = k/ρC_p thermal diffusivity; τ = time.'],
          ['Rayleigh number', R`Ra = \frac{\rho\beta\Delta T l^3 g}{\mu\alpha} = Gr\,Pr`, '[–]', 'Diffusion time : convection time.'],
          ['Schmidt number', R`Sc = \frac{\mu}{\rho\mathcal{D}} = \frac{\text{viscous diffusion}}{\text{molecular diffusion}}`, '[–]', '𝒟 = mass diffusivity (m²/s).'],
          ['Prandtl number', R`Pr = \frac{\mu C_p}{k} = \frac{\mu/\rho}{k/\rho C_p} = \frac{\text{momentum diffusivity}}{\text{heat diffusivity}}`, '[–]', 'A fluid property; ≈ 0.7 for air, ≈ 7 for water.']
        ]],
        ['warn', 'Key Insight', [
          R`The **Mach number** is usually read as a velocity ratio $u/a$, but it really comes from a **force** balance: inertia against the elasticity (bulk modulus $E$) of the compressible gas.`,
          R`**Nu vs Bi**: identical form $hl/k$, different meaning — in $Nu$, $k$ is the fluid's; in $Bi$, $k$ is the solid object's.`,
          R`Some numbers are products of others, e.g. $Ra = Gr\,Pr$.`
        ]],
        ['warn', 'Warning', [
          R`The handout and Week 1 notes print $Sc = \mu/\rho l$, which is not dimensionless (it has units of m/s). The Schmidt number uses the **mass diffusivity** $\mathcal{D}$: $Sc = \mu/\rho\mathcal{D}$.`
        ]]
      ]
    },
    {
      num: '2.4', title: 'Similarity',
      blocks: [
        ['para', R`"Similar" has a specific technical meaning: flows are similar when they have the **same distribution of quantities** within them. Then one analysis (or one model test) applies to the whole family of flows.`],
        ['svg', 'tf_similarity', 'A model is only useful if it is dynamically similar: same shape, same streamline pattern and the same ratios of forces at corresponding points.'],
        ['list', R`**Three types of similarity:**`, true, [
          R`**Geometric** — same shape, different size. (It is the *flow* geometry that matters, not necessarily the object's.)`,
          R`**Kinematic** — the streamlines are geometrically similar (same-shaped paths).`,
          R`**Dynamic** — the resultant forces per unit mass have the same ratios at corresponding points.`
        ]],
        ['warn', 'Key Insight', [
          R`**Dynamic ⇒ kinematic ⇒ geometric** (not the other way round).`,
          R`You have **dynamic similarity when every non-dimensional group has the same value** in the two flows. Matching size alone is not enough — speeds and forces must scale too.`
        ]],
        ['para', R`This is why wind-tunnel testing works: a small model aerofoil gives the forces on a full-scale wing *if* the tunnel is run so the flows are dynamically similar. "Scale" means time, force and energy as well as size.`]
      ]
    },
    {
      num: '2.5', title: "Buckingham's Π Theorem",
      blocks: [
        ['para', R`If the quantity you want, $q_1$, depends on $n-1$ other dimensional variables, $q_1 = g(q_2, q_3, \ldots, q_n)$, and those $n$ variables use $r$ independent dimensions, then they can be combined into $n - r$ dimensionless groups:`],
        ['disp', [ R`\boxed{\Pi_1 = G(\Pi_2, \Pi_3, \ldots, \Pi_{n-r}) \qquad \text{number of } \Pi\text{s} = n - r} \tag{2.1}` ]],
        ['warn', 'Key Insight', [
          R`There are **fewer Πs than dimensional variables** — this is a good thing. Fewer variables means fewer experiments, and the Πs give **generalisable, scaled** relationships.`
        ]],
        ['svg', 'tf_pipe_vars', 'The seven variables of pipe flow: what you want (Δp), what you set (u_m), the fluid (ρ, μ) and the pipe (D, l, e).'],
        ['deriv', 'Example — pipe flow (used throughout the unit)', [
          ['m', R`\underset{M/LT^2}{\Delta p} = f\Big(\underset{M/L^3}{\rho},\ \underset{M/LT}{\mu},\ \underset{L/T}{u_m},\ \underset{L}{l},\ \underset{L}{D},\ \underset{L}{e}\Big)`],
          ['t', R`$n = 7$ variables, $r = 3$ dimensions ($M, L, T$) ⇒ $7 - 3 = $ **4 Πs**.`]
        ]]
      ]
    },
    {
      num: '2.6', title: 'Scaling for Model Testing',
      blocks: [
        ['para', R`A meaningful model must not just *look* the same; it must be **dynamically similar**, so every Π must take the same value in the model ($m$) as at full scale ($fs$). Write the condition, then rearrange for the unknown ratio.`],
        ['eq', [
          ['Reynolds matching', R`\left(\frac{\rho u l}{\mu}\right)_m = \left(\frac{\rho u l}{\mu}\right)_{fs} \;\Rightarrow\; \frac{u_m}{u_{fs}} = \frac{\rho_{fs}}{\rho_m}\,\frac{\mu_m}{\mu_{fs}}\,\frac{l_{fs}}{l_m}`, '[–]', 'Same fluid ⇒ u_m/u_fs = l_fs/l_m.'],
          ['Force-coefficient matching', R`\left(\frac{F}{\rho u^2 l^2}\right)_m = \left(\frac{F}{\rho u^2 l^2}\right)_{fs}`, '[–]', 'Transfers the measured force to full scale.'],
          ['Perfect-gas density ratio', R`\frac{\rho_{fs}}{\rho_m} = \frac{p_{fs}}{p_m}\,\frac{T_m}{T_{fs}}`, '[–]', 'From ρ = p/RT.']
        ]],
        ['ex', 'Example — heat-exchanger tube model (lecture)', [
          ['t', R`A $1/10$-scale model of a smooth, horizontal heat-exchanger tube carrying water. Fully developed, so $C_f = f(Re)$ only. Find $(\Delta p)_m/(\Delta p)_{fs}$ if the model fluid is (1) water, (2) air ($\rho = 1.2$, $\mu = 1.7\times10^{-5}$).`],
          ['ans'],
          ['t', R`Match $Re$ for the speed ratio, then match $C_f = \Delta p/\tfrac12\rho u^2$ and substitute:`],
          ['m', R`\frac{(\Delta p)_m}{(\Delta p)_{fs}} = \frac{\rho_m}{\rho_{fs}}\left(\frac{u_m}{u_{fs}}\right)^2 = \frac{\rho_{fs}}{\rho_m}\left(\frac{\mu_m}{\mu_{fs}}\right)^2\left(\frac{D_{fs}}{D_m}\right)^2`],
          ['m', R`\text{(1) water: } 1 \times 1 \times 10^2 = 100 \qquad \text{(2) air: } \frac{1000}{1.2}\left(\frac{1.7\times10^{-5}}{10^{-3}}\right)^2 10^2 = 24.1`]
        ]],
        ['ex', 'Example — wind-tunnel model of an aircraft (lecture)', [
          ['t', R`Full scale: $U = 850$ km/h, $p = 2.65\times10^4$ Pa, $T = -50$ °C, $\mu = 1.48\times10^{-5}$. Tunnel: $p = 1.01\times10^5$ Pa, $T = 15$ °C, $\mu = 1.80\times10^{-5}$; $R = 287$. Analysis gives $C_D = f(Ma, Re)$. Find the tunnel speed and the minimum tunnel width for an 11 m wingspan.`],
          ['ans'],
          ['m', R`Ma_{fs} = Ma_m:\quad \frac{U_{fs}}{\sqrt{RT_{fs}}} = \frac{U_m}{\sqrt{RT_m}} \;\Rightarrow\; U_m = 236.1\sqrt{\frac{288.15}{223.15}} = 268\ \text{m/s}`],
          ['m', R`Re_{fs} = Re_m:\quad L_m = L_{fs}\,\frac{\mu_m}{\mu_{fs}}\,\frac{\rho_{fs}}{\rho_m}\,\frac{U_{fs}}{U_m} = 11 \times 1.22 \times 0.34 \times 0.88 = 4\ \text{m}`],
          ['t', R`Density ratio from the perfect gas law: $\rho_{fs}/\rho_m = (p_{fs}/p_m)(T_m/T_{fs}) = 0.34$. Convert °C to K and km/h to m/s first.`]
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
          ['t', R`Give the units and dimensions of: speed, volume flow rate, volume flux, mass flow rate, mass flux; angular speed and acceleration; density, specific volume, viscosity, surface tension; gas constant, specific heat capacity, entropy, heat transfer coefficient, thermal conductivity.`],
          ['ans'],
          ['t', R`**Rates** are per unit time, **fluxes** per unit area. Speed m/s, $L/T$ · volume flow rate m³/s, $L^3/T$ · volume flux m/s, $L/T$ · mass flow rate kg/s, $M/T$ · mass flux kg/s m², $M/TL^2$.`],
          ['t', R`Angular speed 1/s, $1/T$ · angular acceleration 1/s², $1/T^2$ (angles are dimensionless).`],
          ['t', R`Density kg/m³, $M/L^3$ · specific volume m³/kg, $L^3/M$ · viscosity Pa s ≡ kg/m s, $M/LT$ · surface tension N/m, $M/T^2$ (force = σ × interface length).`],
          ['t', R`Gas constant and specific heat J/kg K, $L^2/\theta T^2$ · entropy J/K, $ML^2/T^2\theta$ · heat transfer coefficient W/m² K, $M/T^3\theta$ · thermal conductivity W/m K, $ML/T^3\theta$.`],
          ['t', R`(The printed solution gives specific volume as $L/M^3$ — it is the reciprocal of density, $L^3/M$.)`]
        ]],
        ['ex', 'Q2 — cylinder in an unsteady flow', [
          ['t', R`A cylinder sits in an unsteady uniform air flow of velocity $U$. (a) What five variables does the force $F$ depend on? (b) Their dimensions? (c) How many Πs?`],
          ['ans'],
          ['m', R`\underset{ML/T^2}{F} = f\Big(\underset{M/L^3}{\rho},\ \underset{M/LT}{\mu},\ \underset{L/T}{U},\ \underset{T}{t},\ \underset{L}{D}\Big)`],
          ['t', R`Unsteady, so time $t$ matters. Six variables, three dimensions ⇒ **three Πs**.`]
        ]],
        ['ex', 'Q4 — the Weber number', [
          ['t', R`What is the form of the Weber number, what does it mean, and how do you arrive at it?`],
          ['ans'],
          ['t', R`It compares the **inertia** of a bubble/drop (which distorts it) with **surface tension** (which keeps it spherical). Inertia over the cross-section scales as $\rho U^2 D^2$; surface-tension force as $\sigma D$:`],
          ['m', R`We = \frac{\rho U^2 D^2}{\sigma D} = \frac{\rho U^2 D}{\sigma}`]
        ]],
        ['ex', 'Q5 — 1/50 scale model', [
          ['t', R`The force on an object moving at 1 m/s is estimated with a 1/50 scale model in a wind tunnel; both in air at STP. If the non-dimensional force depends only on $Re$, what tunnel speed? [50 m/s]`],
          ['ans'],
          ['m', R`Re_m = Re_{fs},\ \text{same fluid} \Rightarrow U_m = U_{fs}\frac{D_{fs}}{D_m} = 1 \times 50 = 50\ \text{m/s}`]
        ]],
        ['ex', 'Q6 — relative size of forces', [
          ['t', R`A cylinder $D = 0.1$ m is in a steady air flow of 100 m/s ($\rho = 1.204$, $\mu = 1.82\times10^{-5}$). Estimate the viscous and gravitational forces relative to the inertial force. [$1.51\times10^{-6}$; $9.81\times10^{-5}$]`],
          ['ans'],
          ['t', R`Scale each force (ignore numerical coefficients): viscous $F_V \sim \mu(U/D)D^2 = \mu U D$; inertial $F_I \sim \rho U^2 D^2$; gravitational $F_G \sim \rho D^3 g$.`],
          ['m', R`\frac{F_V}{F_I} = \frac{\mu}{\rho U D} = \frac{1.82\times10^{-5}}{1.204\times100\times0.1} = 1.51\times10^{-6} \qquad \frac{F_G}{F_I} = \frac{gD}{U^2} = 9.81\times10^{-5}`],
          ['t', R`**Advanced:** this is misleading for the viscous force. Viscous forces act over the **boundary-layer thickness** $\delta$, not $D$, so $F_V/F_I = \mu/\rho U\delta$ is far larger — and viscosity also causes separation, which dominates drag. Always choose the physically meaningful length scale.`]
        ]]
      ]
    }
  ]
}
