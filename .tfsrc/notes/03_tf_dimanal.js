{
  key: 'tf_dimanal', area: 'found', num: '3', week: 'Weeks 1–2',
  name: 'The Dimensional Analysis Method',
  triggers: 'find the Πs · repeating variables · "perform a dimensional analysis" · C_f = f(Re, l/D, e/D) · C_D = f(Ma, Re) · pump scaling · Nu = f(Re, Pr) · blast wave',
  sections: [
    {
      num: '', title: 'Revision Objectives — The Dimensional Analysis Method',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Follow the **12-step recipe** to turn a list of dimensional variables into a set of Πs.`,
          R`Choose sensible **repeating variables** and solve the exponent equations for each Π.`,
          R`Rearrange raw Πs into **conventional named numbers** ($C_f$, $C_D$, $Re$, $Ma$, $Nu$, $Pr$).`,
          R`Show that pipe flow gives $C_f = f(Re, l/D, e/D)$ and use data to close the problem.`,
          R`Use derived quantities (heat $Q$) as dimensions, and explain why the choice changes the number of Πs.`,
          R`Scale submarine, pump and wind-tunnel models, including head given in metres of water.`
        ]]
      ]
    },
    {
      num: '3.1', title: 'A Recipe for Dimensional Analysis',
      blocks: [
        ['para', R`Dimensional analysis will not solve a problem by itself, but it simplifies it greatly, shows its essential features, and lets one solution cover a whole **class** of problems. It is a **recipe, not a menu**: do every step.`],
        ['list', null, true, [
          R`**Get your head around the problem.** What are you trying to find? Sketch it and label the variables. Spend time here.`,
          R`**Write down the variable list** as an equality: the quantity you want before the "=", everything it might depend on after. Include fluid properties and structural properties; work systematically (flow variables, fluid properties, geometry). That is $n$ variables.`,
          R`**Write down the dimensions** of each variable.`,
          R`**Find the number of degrees of freedom** $j$ — usually the number of dimensions used.`,
          R`**Select $j$ repeating variables** $u_1, u_2, \ldots$. Together they must contain every dimension and must **not** form a Π among themselves. Choose general, physically meaningful ones.`,
          R`**Add one non-repeating variable** to the repeating set: $\Pi_1 = f(u_1, u_2, u_3, v_1)$.`,
          R`**Add exponents** to the repeating variables: $\Pi_1 = u_1^{\alpha}u_2^{\beta}u_3^{\gamma}v_1$.`,
          R`**Substitute the dimensions** of each variable.`,
          R`**Solve the linear equations**: the exponents of each dimension must sum to zero.`,
          R`**Repeat** for each remaining non-repeating variable. There will be $k = n - j$ Πs.`,
          R`**Check** every group really is dimensionless.`,
          R`**Work out the physical significance**: combine, invert or raise Πs to powers to get conventional named forms.`
        ]],
        ['warn', 'Key Insight', [
          R`You **cannot break the method**. A poor choice of repeating variables just means rearranging the Πs at the end.`,
          R`If the repeating variables can't avoid forming a Π, reduce $j$ by one.`,
          R`The result is only a **list** of groups — it says nothing about the form of the function. Sooner or later you need **data**.`
        ]]
      ]
    },
    {
      num: '3.2', title: 'Worked Method: Viscous Flow in a Pipe',
      blocks: [
        ['para', R`**Problem:** given a mean speed $u_m$, what pressure drop $\Delta p$ is needed? What you want: $\Delta p$. What you can regulate: $u_m$. Fluid properties: $\rho$, $\mu$. Pipe properties: $D$, $l$, roughness $e$.`],
        ['svg', 'tf_pipe_vars', 'Step 1 of the recipe: sketch the problem and sort the variables into what you want, what you regulate, fluid properties and pipe properties.'],
        ['deriv', 'Steps 2–9 — the first Π', [
          ['m', R`\underset{M/LT^2}{\Delta p} = f\Big(\underset{M/L^3}{\rho},\ \underset{M/LT}{\mu},\ \underset{L/T}{u_m},\ \underset{L}{l},\ \underset{L}{D},\ \underset{L}{e}\Big) \qquad n = 7,\ j = 3 \Rightarrow 4\ \Pi\text{s}`],
          ['t', R`Repeating variables, one per dimension: $M$ — $\rho$; $T$ — $u_m$; $L$ — $D$.`],
          ['m', R`\Pi_1 = \rho^{\alpha}u_m^{\beta}D^{\gamma}\Delta p: \quad M^{\alpha}L^{-3\alpha}\cdot L^{\beta}T^{-\beta}\cdot L^{\gamma}\cdot ML^{-1}T^{-2} = 1`],
          ['m', R`M:\ \alpha + 1 = 0 \qquad T:\ -\beta - 2 = 0 \qquad L:\ -3\alpha + \beta + \gamma - 1 = 0`],
          ['m', R`\alpha = -1,\ \beta = -2,\ \gamma = 0 \;\Rightarrow\; \Pi_1 = \frac{\Delta p}{\rho u_m^2}`]
        ]],
        ['deriv', 'Steps 10–12 — the rest, and making them meaningful', [
          ['t', R`Same process with $\mu$: $\Pi_2 = \mu/\rho u_m D$. By inspection the other two are length ratios: $\Pi_3 = l/D$, $\Pi_4 = e/D$.`],
          ['t', R`Invert $\Pi_2$ to get a Reynolds number, and put a ½ in $\Pi_1$ by convention:`],
          ['m', R`\Pi_2^{-1} = \frac{\rho u_m D}{\mu} = Re \qquad \frac{\Delta p}{\tfrac12\rho u_m^2} = C_f`]
        ]],
        ['disp', [ R`\boxed{C_f = f\!\left(Re,\ \frac{l}{D},\ \frac{e}{D}\right), \qquad C_f = \frac{\Delta p}{\tfrac12\rho u_m^2},\quad Re = \frac{\rho u_m D}{\mu}} \tag{3.1}` ]],
        ['para', R`$C_f$ is an **Euler-type** number (pressure : inertia) and $Re$ is inertia : viscous. To go further you need data: plotting $C_f$ against $Re$ collapses all pipe flows onto one curve — laminar ($C_f = 16/Re$, from theory and confirmed by experiment), a transition region, and turbulent (experiment; Blasius approximation). That curve is developed in Topics 4–8.`],
        ['svg', 'tf_cf_re', 'Data collapse: every smooth pipe falls on one C_f–Re curve — laminar 16/Re, a transition band (Re ≈ 2000–4000), then turbulent (Blasius dashed).'],
        ['warn', 'Note', [
          R`The DA slides call $\Delta p/\tfrac12\rho u_m^2$ "$C_f$". From Topic 4 on, the hydraulics notes define $C_f$ on the **wall** shear stress instead: $C_f = \tau_w/\tfrac12\rho u_m^2$ (Fanning), so that $\Delta p/\tfrac12\rho u_m^2 = 4C_f\,l/D$ — the $l/D$ group has simply been absorbed. The laminar line $C_f = 16/Re$ on the plot uses the wall-shear definition.`
        ]]
      ]
    },
    {
      num: '3.3', title: 'Worked Method: Wind-Tunnel Model with Compressibility',
      blocks: [
        ['para', R`Drag $D$ on an aircraft fast enough to be compressible, so temperature and the gas constant enter. Four dimensions now, including $\theta$.`],
        ['deriv', 'Dimensional analysis — drag with four dimensions', [
          ['m', R`\underset{ML/T^2}{D} = f\Big(\underset{M/L^3}{\rho},\ \underset{M/LT}{\mu},\ \underset{L^2/\theta T^2}{R},\ \underset{\theta}{\theta},\ \underset{L/T}{U},\ \underset{L}{l}\Big) \qquad n = 7,\ r = 4 \Rightarrow 3\ \Pi\text{s}`],
          ['t', R`Repeating: $M$ — $\rho$; $T$ — $U$; $L$ — $l$; $\theta$ — $\theta$. Non-repeating: $D$, $R$, $\mu$.`],
          ['m', R`\Pi_1 = \rho^{\alpha}U^{\beta}l^{\gamma}\theta^{\delta}D:\quad \alpha=-1,\ \beta=-2,\ \gamma=-2,\ \delta=0 \Rightarrow \frac{D}{\rho U^2 l^2}`],
          ['m', R`\Pi_2 = \rho^{\alpha}U^{\beta}l^{\gamma}\theta^{\delta}R:\quad \alpha=0,\ \beta=-2,\ \gamma=0,\ \delta=1 \Rightarrow \frac{R\theta}{U^2}`],
          ['m', R`\Pi_3 = \rho^{\alpha}U^{\beta}l^{\gamma}\theta^{\delta}\mu:\quad \alpha=-1,\ \beta=-1,\ \gamma=-1,\ \delta=0 \Rightarrow \frac{\mu}{\rho U l}`],
          ['t', R`Conventional forms: halve the first (**drag coefficient**), take $\Pi_2^{-1/2}$ (**Mach number**), invert the third (**Reynolds number**).`]
        ]],
        ['disp', [ R`\boxed{C_D = \frac{D}{\tfrac12\rho U^2 l^2} = f\!\left(\frac{U}{\sqrt{R\theta}},\ \frac{\rho U l}{\mu}\right) = f(Ma,\ Re)} \tag{3.2}` ]],
        ['para', R`(The numbers for this case — 268 m/s and a 4 m model — are worked in Topic 2, §2.6.)`]
      ]
    },
    {
      num: '3.4', title: 'Worked Method: the Trinity Atomic Test',
      blocks: [
        ['para', R`G.I. Taylor (1950) estimated the yield of the first atomic bomb from photographs of the blast radius $R$ against time $t$. The expansion is inertially dominated, so the air density $\rho$ matters.`],
        ['svg', 'tf_blast', 'With only one Π, E t²/ρR⁵ is a constant, so R^{5/2} plotted against t from the photographs is a straight line whose slope gives E.'],
        ['deriv', 'Dimensional analysis — blast radius', [
          ['m', R`\underset{L}{R} = f\Big(\underset{ML^2/T^2}{E},\ \underset{M/L^3}{\rho},\ \underset{T}{t}\Big) \qquad n = 4,\ r = 3 \Rightarrow 1\ \Pi`],
          ['m', R`\Pi = \rho^{\alpha}R^{\beta}t^{\gamma}E: \quad M:\ \alpha+1=0,\quad T:\ \gamma-2=0,\quad L:\ -3\alpha+\beta+2=0`],
          ['m', R`\alpha = -1,\ \beta = -5,\ \gamma = 2 \;\Rightarrow\; \Pi = \frac{E t^2}{\rho R^5} = K^2 \ (\text{a constant})`]
        ]],
        ['disp', [ R`\boxed{R^{5/2} = \frac{E^{1/2}}{K\rho^{1/2}}\,t} \tag{3.3}` ]],
        ['para', R`With only **one** Π it must be a constant. Plotting $R^{5/2}$ against $t$ from the photographs gives a straight line; with $\rho = 1.25$ kg/m³ and $K = 1.167$ (from the energy equation, $\gamma \approx 1.3$), Taylor found $E = 97.4$ TJ ≈ 22.9 kt TNT — the actual estimate was 92 TJ ≈ 22.1 kt.`],
        ['warn', 'Key Insight', [
          R`One Π ⇒ the relationship is fixed up to a constant. Dimensional analysis alone gave a classified number from public photographs.`
        ]]
      ]
    },
    {
      num: '3.5', title: 'Worked Method: Forced Convection',
      blocks: [
        ['para', R`Heat transfer from a fluid flowing through a pipe (e.g. a heat exchanger). Assumptions: incompressible, steady, fully developed; rigid, smooth pipe that is a perfect conductor. What we want: the **heat transfer coefficient** $h$ from Newton's law of cooling $\dot Q = hA\Delta T$.`],
        ['svg', 'tf_convection_cv', 'Forced convection in a pipe: the heat transfer coefficient h depends on the flow (U, l), the fluid (ρ, μ, C_p, k) and the temperature θ.'],
        ['deriv', 'Using heat Q as a fifth "dimension"', [
          ['m', R`\underset{Q/TL^2\theta}{h} = f\Big(\underset{M/L^3}{\rho},\ \underset{M/LT}{\mu},\ \underset{Q/TL\theta}{k},\ \underset{Q/M\theta}{C_p},\ \underset{\theta}{\theta},\ \underset{L/T}{U},\ \underset{L}{l}\Big) \qquad n = 8,\ j = 5 \Rightarrow 3\ \Pi\text{s}`],
          ['t', R`Repeating: $M$ — $\rho$; $T$ — $U$; $L$ — $l$; $Q$ — $k$; $\theta$ — $\theta$.`],
          ['m', R`\Pi_1 = \frac{hl}{k} = Nu \qquad \Pi_2 = \frac{\mu}{\rho U l} = Re^{-1} \qquad \Pi_3 = \frac{\rho U l C_p}{k}`],
          ['t', R`$\Pi_3$ has no obvious meaning, but any combination of Πs is still dimensionless:`],
          ['m', R`\frac{\Pi_3}{\Pi_2^{-1}} = \frac{\rho U l C_p}{k}\cdot\frac{\mu}{\rho U l} = \frac{\mu C_p}{k} = Pr`]
        ]],
        ['disp', [ R`\boxed{Nu = f(Re,\ Pr) \qquad \text{turbulent pipe flow: } Nu = 0.023\,Re^{0.8}Pr^{0.4}} \tag{3.4}` ]],
        ['svg', 'tf_nu_collapse', 'Plotting Nu Pr^-0.4 against Re collapses the data onto one line; in the turbulent regime Nu = 0.023 Re^0.8 Pr^0.4.'],
        ['eq', [
          ['Newton’s law of cooling', R`\dot Q = hA\,\Delta T`, '[W]', 'Defines h (W/m² K).'],
          ['Kinematic viscosity (momentum diffusivity)', R`\nu = \frac{\mu}{\rho}`, '[m²/s]', 'Diffusion = spreading due to a gradient.'],
          ['Thermal diffusivity', R`\alpha = \frac{k}{\rho C_p}`, '[m²/s]', 'Pr = ν/α.'],
          ['Dittus–Boelter (turbulent)', R`Nu = 0.023\,Re^{0.8}Pr^{0.4}`, '[–]', 'Data collapses when Nu Pr^-0.4 is plotted against Re.'],
          ['Eckert number', R`Ec = \frac{U^2}{C_p T} \;\equiv\; \frac{U^2}{\gamma R T}`, '[–]', 'Kinetic energy : heat available — a Mach number for an ideal gas.']
        ]],
        ['warn', 'Key Insight', [
          R`If $\mu$ had been chosen as the mass repeating variable instead of $\rho$, $\Pi_3$ would have come out as $Pr$ directly — the thermal behaviour scales with **momentum diffusion**, not density. It didn't matter: you can always adjust afterwards.`,
          R`If you **don't** use $Q$ as a dimension (write J in terms of $M, L, T$), dimensions drop to 4 and Πs rise to 4. The extra one is the **Eckert number** — negligible at low speed because little energy is dissipated in the boundary layer.`
        ]],
        ['list', R`**Limitations** of the correlation:`, false, [
          R`Data are scattered.`, R`Horizontal cylindrical tubes only.`, R`Ignores other heat-transfer modes.`, R`Single phase only (no boiling); other fluids may not fit.`
        ]]
      ]
    },
    {
      num: 'Ex 3', title: 'Problem Sheet — Dimensional Analysis', wk: true,
      blocks: [
        ['ex', 'Q1 — submarine drag in a water tunnel', [
          ['t', R`Drag on a submerged submarine is found from a 1/20 model in a water tunnel. Sea water: $\nu = 1.30\times10^{-6}$ m²/s, $\rho = 1010$; fresh water: $\nu = 1.01\times10^{-6}$, $\rho = 998$. Find $D_m/D_{fs}$. [0.60]`],
          ['ans'],
          ['t', R`$D = f(\rho, \nu, U, d)$: five variables, three dimensions ⇒ two Πs. Repeating $\rho, U, d$ (forces depend on momentum, not viscosity):`],
          ['m', R`\Pi_1 = \frac{D}{\rho U^2 d^2} = C_D,\qquad \Pi_2 = \frac{\nu}{Ud} = Re^{-1} \;\Rightarrow\; C_D = f(Re)`],
          ['m', R`\frac{U_m}{U_{fs}} = \frac{\nu_m}{\nu_{fs}}\frac{d_{fs}}{d_m} = \frac{1.01}{1.30}\times20 = 15.54`],
          ['m', R`\frac{D_m}{D_{fs}} = \frac{\rho_m}{\rho_{fs}}\left(\frac{U_m}{U_{fs}}\right)^2\left(\frac{d_m}{d_{fs}}\right)^2 = \frac{998}{1010}\times15.54^2\times\frac{1}{400} = 0.60`]
        ]],
        ['ex', 'Q2 — adding gravity; is the model test possible?', [
          ['t', R`An object 1 m long, 0.1 m high in air ($\rho = 1.2$, $\mu = 1.8\times10^{-5}$) at 100 m/s. (a) Show that with gravity $C_D = f(Re, Fr)$. (b) What does assuming inertia-dominated drag imply about the flow? (c) Show viscous forces are negligible; is the length scale safe? (d) Show gravity is negligible. (e) What speed would a 10:1 model need, and why would it fail?`],
          ['ans'],
          ['m', R`\text{(a)}\ \Pi_3 = \rho^{\alpha}U^{\beta}d^{\gamma}g:\ \alpha=0,\ \beta=-2,\ \gamma=1 \Rightarrow \frac{gd}{U^2} = Fr^{-1}`],
          ['t', R`(b) Inertia-dominated drag means the flow has **separated**: a high-pressure stagnation point at the front and a low-pressure wake behind — **pressure drag**.`],
          ['m', R`\text{(c)}\ \frac{F_I}{F_V} = Re = \frac{\rho U d}{\mu} = 6.67\times10^6 \qquad \text{(d)}\ \frac{F_G}{F_I} = \frac{gh}{U^2} = 9.81\times10^{-5}`],
          ['t', R`(c) The right length for viscous forces is the boundary-layer thickness; even at 1 mm, $Re$ is still thousands, so the conclusion holds. (d) Use a **vertical** length in $Fr$.`],
          ['t', R`(e) Same fluid ⇒ $U_m = U_{fs}\,d_{fs}/d_m = 1000$ m/s — supersonic, so the flow would be compressible and look completely different. The analysis left out $R$ and $T$; to get similarity you'd have to pressurise or heat the tunnel gas.`]
        ]],
        ['ex', 'Q3 — submarine rudder torque', [
          ['t', R`Rudder torque is estimated with a 1/4 model in fresh water. Prototype speed 3.5 m/s; $\rho_{sea}/\rho_{fresh} = 1.025$, $\mu_{sea}/\mu_{fresh} = 1.07$. (a) Dimensional analysis. (b) Model speed. (c) Model torque is 20.6 N m — prototype torque? [13.41 m/s; 92.1 N m]`],
          ['ans'],
          ['m', R`T = f(\rho, \mu, u, l) \Rightarrow \Pi_1 = \frac{T}{\rho u^2 l^3},\qquad \Pi_2 = \frac{\rho u l}{\mu}`],
          ['m', R`\frac{u_m}{u_{fs}} = \frac{\rho_{fs}}{\rho_m}\frac{\mu_m}{\mu_{fs}}\frac{l_{fs}}{l_m} = \frac{1.025\times4}{1.07} = 3.83 \Rightarrow u_m = 13.41\ \text{m/s}`],
          ['m', R`\frac{T_{fs}}{T_m} = \frac{\rho_{fs}}{\rho_m}\left(\frac{u_{fs}}{u_m}\right)^2\left(\frac{l_{fs}}{l_m}\right)^3 = \frac{1.025\times4^3}{3.83^2} = 4.47 \Rightarrow T_{fs} = 92.1\ \text{N m}`]
        ]],
        ['ex', 'Q4 — pump scaling with head in metres of water', [
          ['t', R`A 1/3 scale model pump: 900 rpm, $d = 125$ mm, head 3 m H₂O, $Q = 1$ m³/s, power 100 W. The full-size pump runs at 300 rpm. Find its (a) power, (b) flow rate, (c) head. [900 W; 9 m³/s; 3 m H₂O]`],
          ['ans'],
          ['t', R`Variables $P, Q, \omega, \rho, H, d$; repeating $\rho$ (only mass), $\omega$ (sets the time scale), $d$ (the only true length).`],
          ['m', R`\Pi_1 = \frac{P}{\rho\omega^3 d^5}:\ P_{fs} = 100\left(\tfrac13\right)^3 3^5 = 900\ \text{W} \qquad \Pi_2 = \frac{Q}{\omega d^3}:\ Q_{fs} = 1\times\tfrac13\times3^3 = 9\ \text{m}^3/\text{s}`],
          ['m', R`\Pi_3 = \frac{gH}{\omega^2 d^2}:\ H_{fs} = 3\left(\tfrac13\right)^2 3^2 = 3\ \text{m H}_2\text{O}`]
        ]],
        ['warn', 'Warning', [ R`Head in metres of water is **not** a length to scale with $d$ — converting it to pressure needs $g$. Either include $g$, use $gH$ as the variable, or convert to Pa first.` ]]
      ]
    }
  ]
}
