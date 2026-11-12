{
  key: 'tf_dimanal', area: 'found', num: '3', week: 'Weeks 1–2',
  name: 'The Dimensional Analysis Method',
  triggers: 'find the Πs · repeating variables · Buckingham Π theorem · "perform a dimensional analysis" · C_Δp = f(Re, l/D, e/D) → C_f = f(Re, e/D) · C_D = f(Ma, Re) · pump scaling · Nu = f(Re, Pr) · blast wave',
  sections: [
    {
      num: '', title: 'Revision Objectives — The Dimensional Analysis Method',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Follow the **12-step recipe** to turn a list of dimensional variables into a set of Πs, and predict how many with **Buckingham's Π theorem**.`,
          R`Choose sensible **repeating variables**, spot a set that fails, and solve the exponent equations for each Π.`,
          R`Rearrange raw Πs into **conventional named numbers** ($C_f$, $C_D$, $Re$, $Ma$, $Nu$, $Pr$).`,
          R`Show that pipe flow gives $C_{\Delta p} = f(Re, l/D, e/D)$, reduce it to the wall-shear $C_f = f(Re, e/D)$, and use data to close the problem.`,
          R`Use derived quantities (heat $Q$) as dimensions, and explain why the choice changes the number of Πs.`,
          R`Scale submarine, pump and wind-tunnel models, including head given in metres of water.`
        ]]
      ]
    },
    {
      num: '3.1', title: 'A Recipe for Dimensional Analysis',
      blocks: [
        ['para', R`Dimensional analysis will not solve a problem by itself, but it simplifies it greatly, shows its essential features, and lets one solution cover a whole **class** of problems. It is a **recipe, not a menu**: do every step.`],
        ['warn', 'Note', [
          R`**Symbols used in this topic.** $n$ = number of dimensional variables; $j$ = number of **degrees of freedom** (the number of independent dimensions); $k$ = number of Πs. The recipe handout writes $j$; the Buckingham slide, the Trinity slides and Topic 2 write $r$ for the same number. This topic uses $j$ throughout.`
        ]],
        ['para', R`**Buckingham's Π theorem** (Topic 2, eq. 2.1) tells you in advance how many groups to expect:`],
        ['disp', [ R`k = n - j \qquad \Pi_1 = G(\Pi_2, \Pi_3, \ldots, \Pi_k)` ]],
        ['list', null, true, [
          R`**Get your head around the problem.** What are you trying to find? Sketch it and label the variables. Spend time here.`,
          R`**Write down the variable list** as an equality: the quantity you want before the "=", everything it might depend on after. Include fluid properties and structural properties; work systematically (flow variables, fluid properties, geometry). That is $n$ variables.`,
          R`**Write down the dimensions** of each variable. There is some choice in what counts as a dimension (see §3.5, where heat $Q$ is used).`,
          R`**Find the number of degrees of freedom** $j$. This is usually the number of dimensions used. It is smaller if some dimensions only ever appear in a fixed combination (see the failing sets below).`,
          R`**Select $j$ repeating variables** $u_1, u_2, \ldots$. They appear in every Π. The rules are: (i) together they contain **every** dimension; (ii) they must **not** form a Π among themselves; (iii) **don't** choose the quantity you want to find. If you did, it would appear in every Π and you couldn't write it as a function of the others. (iv) Choose general, physically meaningful ones. A good default is one per dimension: a **density** for $M$, a **speed** or rotation rate for $T$, and the **defining length** (diameter, chord) for $L$.`,
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
          R`The result is only a **list** of groups. It says nothing about the form of the function, so sooner or later you need **data**.`
        ]],
        ['deriv', 'Repeating sets that fail, and the fix', [
          ['t', R`Pipe flow, $\Delta p = f(\rho, \mu, u_m, l, D, e)$ (worked in §3.2):`],
          ['t', R`**$\{\rho,\ u_m,\ \Delta p\}$ fails twice.** $\Delta p/\rho u_m^2$ is already dimensionless, so the set forms a Π (rule ii). It also contains $\Delta p$, the variable we want (rule iii). **Fix:** swap $\Delta p$ for the length $D$.`],
          ['t', R`**$\{l,\ D,\ e\}$ fails.** It has no $M$ or $T$ (rule i), and $l/D$ and $e/D$ are Πs (rule ii). **Fix:** keep one length ($D$) and add $\rho$ and $u_m$.`],
          ['t', R`**When $j$ is less than the number of dimensions.** Take the deflection $\delta$ of a loaded beam, $\delta = f(F, E, L)$ with $F$ $[ML/T^2]$, Young's modulus $E$ $[M/LT^2]$ and $L$ $[L]$. Three dimensions appear, but $M$ and $T$ only ever appear together as $M/T^2$. Any three repeating variables, e.g. $\{F, E, L\}$, form the Π $F/EL^2$, so the rule says reduce $j$ to 2. Take $\{E, L\}$ as the two repeating variables (together they contain $M/T^2$ and $L$):`],
          ['m', R`\Pi_1 = E^{\alpha}L^{\beta}\delta:\quad M/T^2:\ \alpha = 0 \quad L:\ -\alpha + \beta + 1 = 0`],
          ['m', R`\alpha = 0,\ \beta = -1 \Rightarrow \Pi_1 = \frac{\delta}{L}`],
          ['m', R`\Pi_2 = E^{\alpha}L^{\beta}F:\quad M/T^2:\ \alpha + 1 = 0 \quad L:\ -\alpha + \beta + 1 = 0`],
          ['m', R`\alpha = -1,\ \beta = -2 \Rightarrow \Pi_2 = \frac{F}{EL^2}`],
          ['m', R`n = 4,\ j = 2 \Rightarrow k = 2: \qquad \frac{\delta}{L} = f\!\left(\frac{F}{EL^2}\right)`]
        ]]
      ]
    },
    {
      num: '3.2', title: 'Worked Method: Viscous Flow in a Pipe',
      blocks: [
        ['para', R`**Problem:** given a mean speed $u_m$, what pressure drop $\Delta p$ is needed? What you want: $\Delta p$. What you can regulate: $u_m$. Fluid properties: $\rho$, $\mu$. Pipe properties: diameter $D$, length $l$, roughness $e$.`],
        ['svg', 'tf_pipe_vars', 'Step 1 of the recipe: sketch the problem and sort the variables into what you want, what you regulate, fluid properties and pipe properties.'],
        ['deriv', 'Steps 2–9 — the first Π', [
          ['m', R`\underset{M/LT^2}{\Delta p} = f\Big(\underset{M/L^3}{\rho},\ \underset{M/LT}{\mu},\ \underset{L/T}{u_m},\ \underset{L}{l},\ \underset{L}{D},\ \underset{L}{e}\Big) \qquad n = 7,\ j = 3 \Rightarrow k = 4\ \Pi\text{s}`],
          ['t', R`Repeating variables, one per dimension: $M$ — $\rho$; $T$ — $u_m$; $L$ — $D$. **Why these?** $\Delta p$ is what we want, so it is excluded (rule iii). $\rho$ and $u_m$ describe the fluid's **inertia**, which gives the conventional pressure-over-dynamic-pressure and Reynolds forms. $\mu$ would also work, but then viscosity would appear in every Π. $D$ is the defining length; $l$ and $e$ are secondary lengths that then appear as ratios to $D$.`],
          ['m', R`\Pi_1 = \rho^{\alpha}u_m^{\beta}D^{\gamma}\Delta p: \quad M^{\alpha}L^{-3\alpha}\cdot L^{\beta}T^{-\beta}\cdot L^{\gamma}\cdot ML^{-1}T^{-2} = 1`],
          ['m', R`M:\ \alpha + 1 = 0 \qquad T:\ -\beta - 2 = 0 \qquad L:\ -3\alpha + \beta + \gamma - 1 = 0`],
          ['m', R`\alpha = -1,\ \beta = -2,\ \gamma = 0 \;\Rightarrow\; \Pi_1 = \frac{\Delta p}{\rho u_m^2}`]
        ]],
        ['deriv', 'Steps 10–12 — the rest, and making them meaningful', [
          ['t', R`Same process with $\mu$ $[M/LT]$ as the non-repeating variable:`],
          ['m', R`\Pi_2 = \rho^{\alpha}u_m^{\beta}D^{\gamma}\mu: \quad M^{\alpha}L^{-3\alpha}\cdot L^{\beta}T^{-\beta}\cdot L^{\gamma}\cdot ML^{-1}T^{-1} = 1`],
          ['m', R`M:\ \alpha + 1 = 0 \qquad T:\ -\beta - 1 = 0 \qquad L:\ -3\alpha + \beta + \gamma - 1 = 0`],
          ['m', R`\alpha = -1,\ \beta = -1,\ \gamma = -1 \;\Rightarrow\; \Pi_2 = \frac{\mu}{\rho u_m D}`],
          ['t', R`By inspection the other two are length ratios: $\Pi_3 = l/D$, $\Pi_4 = e/D$. (The full method gives $\alpha = 0,\ \beta = 0,\ \gamma = -1$ for each.)`],
          ['t', R`Invert $\Pi_2$ to get a Reynolds number. Divide $\Pi_1$ by ½ by convention, because $\tfrac12\rho u_m^2$ is the **dynamic pressure** (from Bernoulli, Topic 1):`],
          ['m', R`\Pi_2^{-1} = \frac{\rho u_m D}{\mu} = Re \qquad \frac{\Delta p}{\tfrac12\rho u_m^2} = C_{\Delta p}`]
        ]],
        ['disp', [ R`\boxed{C_{\Delta p} = \frac{\Delta p}{\tfrac12\rho u_m^2} = f\!\left(Re,\ \frac{l}{D},\ \frac{e}{D}\right), \qquad Re = \frac{\rho u_m D}{\mu}} \tag{3.1a}` ]],
        ['warn', 'Important', [
          R`**Two coefficients, two symbols.** The DA slides call the pressure-drop group $\Delta p/\tfrac12\rho u_m^2$ "$C_f$". This topic writes it as $C_{\Delta p}$ and keeps $C_f$ for the **wall-shear (Fanning) friction coefficient** $C_f = \tau_w/\tfrac12\rho u_m^2$, which is the one used in Topics 4–8 and the one in $C_f = 16/Re$. They are linked by $C_{\Delta p} = 4C_f\,l/D$ (derived below). In an exam, say which one you mean.`
        ]],
        ['para', R`$C_{\Delta p}$ is an **Euler-type** number (pressure : inertia) and $Re$ is inertia : viscous. Equation (3.1a) still depends on **three** groups, so it can't be plotted as one curve yet. Two more physical facts reduce it to one:`],
        ['deriv', 'From (3.1a) to a single curve: the wall-shear friction coefficient', [
          ['t', R`**Fully developed flow:** the pressure gradient is constant along the pipe, so $\Delta p \propto l$. The $l/D$ group must therefore come out as a simple factor:`],
          ['m', R`\frac{\Delta p}{\tfrac12\rho u_m^2} = \frac{l}{D}\,F\!\left(Re,\ \frac{e}{D}\right)`],
          ['t', R`**Force balance on the fluid in the pipe:** pressure force = wall shear force, $\Delta p\,\pi D^2/4 = \tau_w\,\pi D l$, so $\tau_w = \Delta p D/4l$. Define the friction coefficient on the **wall shear stress** (Fanning):`],
          ['m', R`C_f = \frac{\tau_w}{\tfrac12\rho u_m^2} = \frac{D}{4l}\,\frac{\Delta p}{\tfrac12\rho u_m^2} = \frac{D}{4l}\,C_{\Delta p} \quad\Rightarrow\quad C_{\Delta p} = 4C_f\frac{l}{D}`],
          ['t', R`Comparing with the line above, $C_f = \tfrac14 F(Re, e/D)$: the $l/D$ dependence has gone.`],
          ['t', R`**Smooth pipe:** $e/D \to 0$, so $C_f = f(Re)$ alone, and all smooth-pipe data fall on one curve. Laminar check: Hagen–Poiseuille (Topic 5) gives $\tau_w = 8\mu u_m/D$, so $C_f = 16\mu/\rho u_m D = 16/Re$.`]
        ]],
        ['disp', [ R`\boxed{C_f = \frac{\tau_w}{\tfrac12\rho u_m^2} = \frac{\Delta p\,D}{4l\cdot\tfrac12\rho u_m^2} = f\!\left(Re,\ \frac{e}{D}\right)} \tag{3.1b}` ]],
        ['eq', [
          ['Pressure-drop coefficient (DA group)', R`C_{\Delta p} = \frac{\Delta p}{\tfrac12\rho u_m^2}`, '[–]', 'The slides label this Cf; depends on Re, l/D and e/D.'],
          ['Wall-shear (Fanning) friction coefficient', R`C_f = \frac{\tau_w}{\tfrac12\rho u_m^2},\quad \tau_w = \frac{\Delta p\,D}{4l}`, '[–]', 'Used in Topics 4–8; depends on Re and e/D only (smooth pipe: Re only).'],
          ['Link between them', R`C_{\Delta p} = 4C_f\,\frac{l}{D}`, '[–]', 'Fully developed flow (Δp ∝ l).'],
          ['Laminar pipe flow', R`C_f = \frac{16}{Re}`, '[–]', 'Wall-shear definition only (Hagen–Poiseuille).']
        ]],
        ['para', R`Now the data can be plotted. Wall-shear $C_f$ against $Re$ for smooth pipes collapses onto one curve: laminar ($C_f = 16/Re$, from theory and confirmed by experiment), a transition region, and turbulent (experiment; the Blasius approximation is the dashed line). That curve is developed in Topics 4–8.`],
        ['svg', 'tf_cf_re_da', 'Smooth-pipe data collapse using the wall-shear friction coefficient: laminar 16/Re, a transition band (Re ≈ 2000–4000), then turbulent, with the Blasius fit dashed.'],
        ['warn', 'Note', [
          R`The DA slides call $\Delta p/\tfrac12\rho u_m^2$ "$C_f$" and then plot "$C_f = 16/Re$". That line only holds for the **wall-shear** $C_f$ of (3.1b), not for $C_{\Delta p}$ of (3.1a): the two differ by the factor $4l/D$.`
        ]]
      ]
    },
    {
      num: '3.3', title: 'Worked Method: Wind-Tunnel Model with Compressibility',
      blocks: [
        ['para', R`Drag $D$ on an aircraft flying fast enough for the flow to be **compressible**. Density now changes with pressure, and for an ideal gas the two are linked through temperature by $p = \rho R\theta$. The speed of sound $a = \sqrt{\gamma R\theta}$ sets how fast pressure disturbances travel. So the specific gas constant $R$ and the temperature $\theta$ enter the list, bringing a fourth dimension, $\theta$. The ratio of specific heats $\gamma$ is already dimensionless, so dimensional analysis can't find it. It is a fixed property of the gas (the same air in the tunnel and in flight), so it is matched automatically and stays hidden inside $f$.`],
        ['warn', 'Note', [
          R`**Notation clashes.** In this section $D$ is the **drag force**, not a diameter. $R$ is the **specific gas constant** (287 J/kg K for air), not the blast radius of §3.4. $l$ is a reference length of the aircraft (e.g. wingspan).`
        ]],
        ['deriv', 'Dimensional analysis — drag with four dimensions', [
          ['m', R`\underset{ML/T^2}{D} = f\Big(\underset{M/L^3}{\rho},\ \underset{M/LT}{\mu},\ \underset{L^2/\theta T^2}{R},\ \underset{\theta}{\theta},\ \underset{L/T}{U},\ \underset{L}{l}\Big) \qquad n = 7,\ j = 4 \Rightarrow k = 3\ \Pi\text{s}`],
          ['t', R`Repeating: $M$ — $\rho$; $T$ — $U$; $L$ — $l$; $\theta$ — $\theta$. Non-repeating: $D$, $R$, $\mu$.`],
          ['t', R`Same method as §3.2, now with four equations. Only $R$ among the non-repeating variables contains $\theta$, so $\delta = 0$ in $\Pi_1$ and $\Pi_3$.`],
          ['m', R`\Pi_1 = \rho^{\alpha}U^{\beta}l^{\gamma}\theta^{\delta}D:\quad M:\ \alpha + 1 = 0 \qquad T:\ -\beta - 2 = 0`],
          ['m', R`\theta:\ \delta = 0 \qquad L:\ -3\alpha + \beta + \gamma + 1 = 0`],
          ['m', R`\alpha=-1,\ \beta=-2,\ \gamma=-2,\ \delta=0 \Rightarrow \frac{D}{\rho U^2 l^2}`],
          ['m', R`\Pi_2 = \rho^{\alpha}U^{\beta}l^{\gamma}\theta^{\delta}R:\quad M:\ \alpha = 0 \qquad T:\ -\beta - 2 = 0`],
          ['m', R`\theta:\ \delta - 1 = 0 \qquad L:\ -3\alpha + \beta + \gamma + 2 = 0`],
          ['m', R`\alpha=0,\ \beta=-2,\ \gamma=0,\ \delta=1 \Rightarrow \frac{R\theta}{U^2}`],
          ['m', R`\Pi_3 = \rho^{\alpha}U^{\beta}l^{\gamma}\theta^{\delta}\mu:\quad M:\ \alpha + 1 = 0 \qquad T:\ -\beta - 1 = 0`],
          ['m', R`\theta:\ \delta = 0 \qquad L:\ -3\alpha + \beta + \gamma - 1 = 0`],
          ['m', R`\alpha=-1,\ \beta=-1,\ \gamma=-1,\ \delta=0 \Rightarrow \frac{\mu}{\rho U l}`],
          ['t', R`Conventional forms: halve the first (**drag coefficient**), take $\Pi_2^{-1/2}$ (**Mach number**), invert the third (**Reynolds number**).`],
          ['t', R`Strictly, $\Pi_2^{-1/2} = U/\sqrt{R\theta} = \sqrt{\gamma}\,Ma$, where $Ma = U/\sqrt{\gamma R\theta}$. With $\gamma$ fixed, matching $U/\sqrt{R\theta}$ is the same as matching $Ma$, so the slides call it the Mach number.`]
        ]],
        ['disp', [ R`\boxed{C_D = \frac{D}{\tfrac12\rho U^2 l^2} = f\!\left(\frac{U}{\sqrt{R\theta}},\ \frac{\rho U l}{\mu}\right) = f(Ma,\ Re)} \tag{3.2}` ]],
        ['ex', 'Using (3.2): wind-tunnel speed and model size (lecture example)', [
          ['t', R`Full scale: $U_{fs} = 850$ km/h $= 236.1$ m/s, $p_{fs} = 2.65\times10^4$ Pa, $\theta_{fs} = -50$ °C $= 223.15$ K, $\mu_{fs} = 1.48\times10^{-5}$ kg/m s, wingspan 11 m. Tunnel: $p_m = 1.01\times10^5$ Pa, $\theta_m = 15$ °C $= 288.15$ K, $\mu_m = 1.80\times10^{-5}$ kg/m s. Same gas, $R = 287$ J/kg K. Find the tunnel speed and the minimum tunnel width. [268 m/s; 4 m]`],
          ['ans'],
          ['t', R`For $C_{D,m} = C_{D,fs}$ **both** independent Πs must match. Matching $Ma$ fixes the speed:`],
          ['m', R`\frac{U_{fs}}{\sqrt{R\theta_{fs}}} = \frac{U_m}{\sqrt{R\theta_m}} \;\Rightarrow\; U_m = 236.1\sqrt{\frac{288.15}{223.15}} = 268\ \text{m/s}`],
          ['t', R`Matching $Re$ then fixes the model size, with the density ratio from $\rho = p/R\theta$:`],
          ['m', R`\frac{\rho_{fs}}{\rho_m} = \frac{p_{fs}}{p_m}\,\frac{\theta_m}{\theta_{fs}} = \frac{2.65\times10^4}{1.01\times10^5}\times\frac{288.15}{223.15} = 0.339`],
          ['m', R`l_m = l_{fs}\,\frac{\mu_m}{\mu_{fs}}\,\frac{\rho_{fs}}{\rho_m}\,\frac{U_{fs}}{U_m} = 11\times1.216\times0.339\times0.880 = 3.99 \approx 4\ \text{m}`],
          ['t', R`So the tunnel must be at least 4 m wide. (Topic 2, §2.6 works the same case.)`]
        ]]
      ]
    },
    {
      num: '3.4', title: 'Worked Method: the Trinity Atomic Test',
      blocks: [
        ['para', R`G.I. Taylor (1950) estimated the yield $E$ of the first atomic bomb from published photographs of the blast radius $R$ against time $t$. The expansion is inertially dominated, so the density of the still air $\rho$ matters. (Here $R$ is the blast radius, not the gas constant.)`],
        ['svg', 'tf_blast', 'With only one Π, E t² / ρR⁵ is a constant, so R⁵ᐟ² plotted against t from the photographs is a straight line, and its slope gives E.'],
        ['deriv', 'Dimensional analysis — blast radius', [
          ['m', R`\underset{L}{R} = f\Big(\underset{ML^2/T^2}{E},\ \underset{M/L^3}{\rho},\ \underset{T}{t}\Big) \qquad n = 4,\ j = 3 \Rightarrow k = 1\ \Pi`],
          ['t', R`Repeating (as on the slides): $M$ — $\rho$; $T$ — $t$; $L$ — $R$; non-repeating: $E$. This breaks rule (iii), because $R$ is what we want, but it is **harmless when $k = 1$**. $E$, $\rho$ and $t$ alone can't form a Π, so the single Π must contain all four variables whichever one you call "non-repeating". Every choice gives the same group or a power of it.`],
          ['m', R`\Pi = \rho^{\alpha}R^{\beta}t^{\gamma}E: \quad \left(\frac{M}{L^3}\right)^{\alpha}L^{\beta}T^{\gamma}\,\frac{ML^2}{T^2} = 1`],
          ['m', R`M:\ \alpha+1=0 \qquad T:\ \gamma-2=0 \qquad L:\ -3\alpha+\beta+2=0`],
          ['m', R`\alpha = -1,\ \beta = -5,\ \gamma = 2 \;\Rightarrow\; \Pi = \frac{E t^2}{\rho R^5}`],
          ['t', R`**Why it must be a constant:** Buckingham gives $\Pi_1 = G(\Pi_2, \ldots)$, but there is no $\Pi_2$. $\Pi$ has nothing to depend on, so $\Pi = K$, a pure number:`],
          ['m', R`\frac{E t^2}{\rho R^5} = K \quad\Rightarrow\quad E = K\,\frac{\rho R^5}{t^2}`]
        ]],
        ['disp', [ R`\boxed{R^{5/2} = \left(\frac{E}{K\rho}\right)^{1/2} t} \tag{3.3}` ]],
        ['para', R`**Where $K$ comes from.** Dimensional analysis can't give $K$. It depends only on $\gamma$ of the hot gas, and Taylor found it by solving the gas-dynamic equations for the blast wave, using conservation of energy inside the expanding sphere ("the energy equation" on the slides). For $\gamma \approx 1.3$ he found $K = 1.167$.`],
        ['ex', 'Using (3.3): the yield', [
          ['t', R`Taylor's photographs give a straight line of $R^{5/2}$ against $t$, with $R^5/t^2 = 6.67\times10^{13}$ m⁵/s². Take $\rho = 1.25$ kg/m³ and $K = 1.167$. Estimate $E$ in TJ and kilotonnes of TNT (1 kt TNT $= 4.184$ TJ).`],
          ['ans'],
          ['t', R`One point on the fitted line, as a check: at $t = 25$ ms, $R = (6.67\times10^{13}\times0.025^2)^{1/5} = (4.17\times10^{10})^{1/5} \approx 133$ m.`],
          ['m', R`E = K\rho\,\frac{R^5}{t^2} = 1.167\times1.25\times6.67\times10^{13} = 9.73\times10^{13}\ \text{J} \approx 97\ \text{TJ}`],
          ['m', R`\frac{97.4\ \text{TJ}}{4.184\ \text{TJ/kt}} = 23.3\ \text{kt TNT} \qquad \text{(actual estimate: } 92\ \text{TJ} = 22.0\ \text{kt)}`],
          ['t', R`The slides quote 97.4 TJ; the small difference from 97.3 TJ is rounding in the fitted $R^5/t^2$.`]
        ]],
        ['warn', 'Warning', [
          R`**Corrections to the Trinity slides.** (1) The slides write $Et^2/\rho R^5 = K^2$. With $K = 1.167$ that gives $E = K^2\rho R^5/t^2 = 114$ TJ, not the quoted 97.4 TJ. The quoted numbers only agree with $Et^2/\rho R^5 = K$ (Taylor's convention), as used above. (2) The slide's "$R^5t^{-2} = 6.67\times10^{-8}$ m⁵/s²" should read $6.67\times10^{13}$ m⁵/s²; with $10^{-8}$, $E$ would be about $10^{-7}$ J. (3) Converting at 4.184 TJ/kt gives 97.4 TJ = **23.3 kt** (slides: 22.9 kt) and 92 TJ = **22.0 kt** (slides: 22.1 kt).`
        ]],
        ['warn', 'Key Insight', [
          R`One Π ⇒ the relationship is fixed up to a constant. From public photographs, dimensional analysis alone gave the **form** $E \propto \rho R^5/t^2$. The **number** also needed the dimensionless constant $K$ (from theory) and the measured $R$–$t$ data.`
        ]]
      ]
    },
    {
      num: '3.5', title: 'Worked Method: Forced Convection',
      blocks: [
        ['para', R`Heat transfer from a fluid flowing through a pipe (e.g. a heat exchanger). Assumptions: incompressible, steady, fully developed; rigid, smooth pipe that is a perfect conductor (so its own conductivity doesn't enter). Unit length of pipe with characteristic length $l$, which for a circular pipe is the **diameter** (written $D$ in §3.2). What we want: the **heat transfer coefficient** $h$ from Newton's law of cooling $\dot Q = hA\Delta T$.`],
        ['svg', 'tf_convection_cv', 'Forced convection in a pipe: the heat transfer coefficient h depends on the flow (U, l), the fluid (ρ, μ, Cp, k) and the fluid temperature θ.'],
        ['para', R`**Why $\theta$ is in the list but $\Delta T$ is not.** $h$ is defined **per unit** temperature difference ($h = \dot Q/A\Delta T$), so $\Delta T$ has already been divided out. With constant properties, $h$ doesn't depend on $\Delta T$. The fluid temperature $\theta$ is listed because it carries the temperature dimension: $h$, $k$ and $C_p$ all contain $\theta^{-1}$. In the analysis below, $\theta$'s exponent comes out as zero in every Π. Temperature only matters here through the property values ($\mu$, $k$, $C_p$ are evaluated at $\theta$). It reappears as a real variable only when heat is **not** treated as a dimension (see the Eckert number below).`],
        ['deriv', 'Using heat Q as a fifth "dimension"', [
          ['m', R`\underset{Q/TL^2\theta}{h} = f\Big(\underset{M/L^3}{\rho},\ \underset{M/LT}{\mu},\ \underset{Q/TL\theta}{k},\ \underset{Q/M\theta}{C_p},\ \underset{\theta}{\theta},\ \underset{L/T}{U},\ \underset{L}{l}\Big)`],
          ['m', R`n = 8,\ j = 5\ (M, L, T, Q, \theta) \Rightarrow k = 3\ \Pi\text{s}`],
          ['t', R`Repeating: $M$ — $\rho$; $T$ — $U$; $L$ — $l$; $Q$ — $k$; $\theta$ — $\theta$. Each Π is $\rho^{\alpha}U^{\beta}l^{\gamma}k^{\delta}\theta^{\epsilon}\times$(non-repeating variable):`],
          ['m', R`h:\ (\alpha,\beta,\gamma,\delta,\epsilon) = (0,\,0,\,1,\,-1,\,0)`],
          ['m', R`\mu:\ (\alpha,\beta,\gamma,\delta,\epsilon) = (-1,\,-1,\,-1,\,0,\,0)`],
          ['m', R`C_p:\ (\alpha,\beta,\gamma,\delta,\epsilon) = (1,\,1,\,1,\,-1,\,0)`],
          ['m', R`\Pi_1 = \frac{hl}{k} = Nu \qquad \Pi_2 = \frac{\mu}{\rho U l} = Re^{-1} \qquad \Pi_3 = \frac{\rho U l C_p}{k}`],
          ['t', R`The course says $\Pi_3$ has no obvious meaning. It is in fact the **Péclet number** $Pe = Ul/\alpha = Re\cdot Pr$ (heat carried by the flow : heat conducted), but it is not the conventional group for this problem. Any combination of Πs is still dimensionless, so multiply by $\Pi_2$ (the same as dividing by $\Pi_2^{-1} = Re$):`],
          ['m', R`\Pi_3\,\Pi_2 = \frac{\Pi_3}{\Pi_2^{-1}} = \frac{\rho U l C_p}{k}\cdot\frac{\mu}{\rho U l} = \frac{\mu C_p}{k} = Pr \qquad \left(Pr = \frac{Pe}{Re}\right)`]
        ]],
        ['disp', [
          R`\boxed{Nu = f(Re,\ Pr)} \tag{3.4}`,
          R`\boxed{Nu = 0.023\,Re^{0.8}Pr^{0.4}} \tag{3.5}`
        ]],
        ['para', R`**Meaning of $Pr$.** $Pr = \nu/\alpha = (\mu/\rho)/(k/\rho C_p)$ compares how fast **momentum** diffuses (kinematic viscosity $\nu$) with how fast **heat** diffuses (thermal diffusivity $\alpha$). It is a pure fluid property: about 0.7 for air and about 7 for water at room temperature.`],
        ['svg', 'tf_nu_collapse', 'Plotting Nu·Pr⁻⁰·⁴ against Re collapses the data onto one line; in the turbulent regime Nu = 0.023 Re⁰·⁸ Pr⁰·⁴.'],
        ['para', R`The course data: at fixed $Re$, $\log Nu$ against $\log Pr$ gives straight lines of gradient 0.4, so $Nu\,Pr^{-0.4} = f(Re)$. Plotting that against $Re$ collapses all the data, and in the turbulent regime the line is the **Dittus–Boelter** correlation (3.5) for turbulent pipe flow.`],
        ['warn', 'Note', [
          R`The exponent 0.4 is the course value and applies when the fluid is being **heated** (wall hotter than fluid). The standard Dittus–Boelter correlation uses $Pr^{0.3}$ when the fluid is being **cooled**. It is intended for fully developed turbulent flow, roughly $Re \gtrsim 10^4$ and $0.6 \lesssim Pr \lesssim 160$.`
        ]],
        ['eq', [
          ['Newton’s law of cooling', R`\dot Q = hA\,\Delta T`, '[W]', 'Defines h (W/m² K); ΔT = wall − fluid temperature.'],
          ['Kinematic viscosity (momentum diffusivity)', R`\nu = \frac{\mu}{\rho}`, '[m²/s]', 'Diffusion = spreading due to a gradient.'],
          ['Thermal diffusivity', R`\alpha = \frac{k}{\rho C_p}`, '[m²/s]', 'Pr = ν/α.'],
          ['Prandtl number', R`Pr = \frac{\mu C_p}{k} = \frac{\nu}{\alpha}`, '[–]', 'Momentum diffusivity : thermal diffusivity.'],
          ['Péclet number', R`Pe = \frac{\rho U l C_p}{k} = \frac{Ul}{\alpha} = Re\,Pr`, '[–]', 'The raw Π₃; advection : conduction of heat.'],
          ['Dittus–Boelter (turbulent)', R`Nu = 0.023\,Re^{0.8}Pr^{0.4}`, '[–]', 'Fluid heated; use Pr⁰·³ if the fluid is cooled.'],
          ['Eckert number', R`Ec = \frac{U^2}{C_p\theta} = \frac{(\gamma - 1)\,U^2}{\gamma R\theta} = (\gamma - 1)\,Ma^2`, '[–]', 'Kinetic energy : heat available. For an ideal gas it is (γ − 1)Ma².']
        ]],
        ['warn', 'Warning', [
          R`The convection slides write $Ec = U^2/C_pT \equiv U^2/\gamma R T$, "≡ Mach number". That is out by a factor $(\gamma - 1)$, and it is the **square** of the Mach number. For an ideal gas $C_p = C_v + R$ and $\gamma = C_p/C_v$, so $C_p = \gamma R/(\gamma - 1)$. Then $Ec = (\gamma - 1)U^2/\gamma R\theta = (\gamma - 1)Ma^2$, so $Ec \propto Ma^2$. That is the link to §3.3: the Eckert number carries the same information as $\Pi_2 = R\theta/U^2$ ($\propto Ma^{-2}$) did there. Both say that compressibility and heating by dissipation stop mattering at low speed ($Ec \to 0$, $\Pi_2 \to \infty$).`
        ]],
        ['warn', 'Key Insight', [
          R`If $\mu$ had been chosen as the mass repeating variable instead of $\rho$, $\Pi_3$ would have come out as $Pr$ directly: $\mu^{\alpha}U^{\beta}l^{\gamma}k^{\delta}\theta^{\epsilon}C_p$ gives $\alpha = 1,\ \beta = 0,\ \gamma = 0,\ \delta = -1,\ \epsilon = 0$, i.e. $\mu C_p/k$. The course's reason is that the thermal behaviour (heat diffusing through the fluid) is naturally compared with **momentum diffusion**, which $\mu$ controls, rather than with density. It didn't matter: you can always adjust afterwards.`,
          R`If you **don't** use $Q$ as a dimension (write J as $ML^2/T^2$), the dimensions drop to 4 and the Πs rise to $8 - 4 = 4$. Now $C_p$ has dimensions $L^2/T^2\theta$, so $U^2/C_p\theta$ is dimensionless and $\theta$ no longer drops out. The extra Π is the **Eckert number**. It is negligible at low speed because little kinetic energy is dissipated as heat in the boundary layer.`
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
          ['t', R`Drag on a submerged submarine (prototype, in **sea water**) is found from a 1/20 model in a water tunnel (**fresh water**). Sea water: $\nu = 1.30\times10^{-6}$ m²/s, $\rho = 1010$ kg/m³. Fresh water: $\nu = 1.01\times10^{-6}$ m²/s, $\rho = 998$ kg/m³. Find $D_m/D_{fs}$ (subscript $m$ = model, $fs$ = full scale). [0.60]`],
          ['ans'],
          ['t', R`$D = f(\rho, \nu, U, d)$: five variables, three dimensions ⇒ two Πs. Repeating $\rho, U, d$ (the forces depend on momentum, not viscosity; $d$ is the only length):`],
          ['m', R`\Pi_1 = \frac{D}{\rho U^2 d^2} = C_D,\qquad \Pi_2 = \frac{\nu}{Ud} = Re^{-1} \;\Rightarrow\; C_D = f(Re)`],
          ['t', R`Match $Re$ to fix the model speed, then match $C_D$ to scale the drag:`],
          ['m', R`\frac{U_m}{U_{fs}} = \frac{\nu_m}{\nu_{fs}}\frac{d_{fs}}{d_m} = \frac{1.01}{1.30}\times20 = 15.54`],
          ['m', R`\frac{D_m}{D_{fs}} = \frac{\rho_m}{\rho_{fs}}\left(\frac{U_m}{U_{fs}}\right)^2\left(\frac{d_m}{d_{fs}}\right)^2 = \frac{998}{1010}\times15.54^2\times\frac{1}{400} = 0.60`]
        ]],
        ['ex', 'Q2 — adding gravity; is the model test possible?', [
          ['t', R`An object of length $d = 1$ m and height $h = 0.1$ m sits in air ($\rho = 1.2$ kg/m³, $\mu = 1.8\times10^{-5}$ kg/m s) at $U = 100$ m/s. (a) Show that with gravity, $C_D = f(Re, Fr)$. (b) What does assuming inertia-dominated drag imply about the flow? (c) Show that viscous forces are negligible. Is the length scale safe? (d) Show that gravity is negligible. (e) To **match $Re$** with a **1/10-scale** model in the same air, what speed is needed, and why would the test fail?`],
          ['ans'],
          ['t', R`(a) Variable list $D = f(\rho, \mu, U, d, g)$: six variables, three dimensions ⇒ three Πs. Keep the repeating set $\rho, U, d$. $\Pi_1 = D/\rho U^2 d^2$ and $\Pi_2 = \mu/\rho U d$ are as in Q1, and gravity gives the third:`],
          ['m', R`\text{(a)}\ \Pi_3 = \rho^{\alpha}U^{\beta}d^{\gamma}g: \quad \left(\frac{M}{L^3}\right)^{\alpha}\left(\frac{L}{T}\right)^{\beta}L^{\gamma}\,\frac{L}{T^2} = 1`],
          ['m', R`M:\ \alpha = 0 \qquad T:\ -\beta - 2 = 0 \qquad L:\ -3\alpha + \beta + \gamma + 1 = 0`],
          ['m', R`\alpha=0,\ \beta=-2,\ \gamma=1 \Rightarrow \Pi_3 = \frac{gd}{U^2} = Fr^{-1} \;\Rightarrow\; C_D = f(Re,\ Fr)`],
          ['t', R`(b) Inertia-dominated drag means the flow has **separated**: there is a high-pressure stagnation point at the front and a low-pressure wake behind, so the drag is **pressure drag**.`],
          ['m', R`\text{(c)}\ \frac{F_I}{F_V} = Re = \frac{\rho U d}{\mu} = \frac{1.2\times100\times1}{1.8\times10^{-5}} = 6.67\times10^6`],
          ['m', R`\text{(d)}\ \frac{F_G}{F_I} = \frac{gh}{U^2} = \frac{9.81\times0.1}{100^2} = 9.81\times10^{-5}`],
          ['t', R`(c) The right length for viscous forces is the boundary-layer thickness. Even at 1 mm, $Re = 6.7\times10^3$, still thousands, so the conclusion holds. (d) Use the **vertical** length $h$ in $Fr$, not $d$.`],
          ['t', R`(e) Same fluid ⇒ $U_m = U_{fs}\,d_{fs}/d_m = 100\times10 = 1000$ m/s. That is supersonic, so the flow would be compressible and look completely different. The analysis left out $R$ and $\theta$; to get similarity you would have to pressurise or heat the tunnel gas.`],
          ['t', R`**Why match $Re$ at all, given (b) and (c)?** The question asks what **full** dynamic similarity needs. In practice, once the flow is separated and $Re$ is large, $C_D$ often becomes nearly independent of $Re$, so a model only has to reach a high enough $Re$ to be in the same regime, not match it exactly.`]
        ]],
        ['ex', 'Q3 — submarine rudder torque', [
          ['t', R`The rudder torque of a sea-going submarine (prototype, in **sea water**) is estimated with a 1/4 model in a **fresh-water** flume. Prototype speed 3.5 m/s; $\rho_{sea}/\rho_{fresh} = 1.025$, $\mu_{sea}/\mu_{fresh} = 1.07$. (a) Dimensional analysis. (b) Model speed. (c) The model torque is 20.6 N m. Find the prototype torque. [13.41 m/s; 92.1 N m]`],
          ['ans'],
          ['t', R`Torque $T$ $[ML^2/T^2]$; here $T$ is a torque, not the time dimension. $T = f(\rho, \mu, u, l)$: five variables, three dimensions ⇒ two Πs, repeating $\rho, u, l$:`],
          ['m', R`\Pi_1 = \frac{T}{\rho u^2 l^3},\qquad \Pi_2 = \frac{\rho u l}{\mu}`],
          ['t', R`Model = fresh, full scale = sea, so $\rho_{fs}/\rho_m = 1.025$ and $\mu_m/\mu_{fs} = \mu_{fresh}/\mu_{sea} = 1/1.07$. Match $\Pi_2$:`],
          ['m', R`\frac{u_m}{u_{fs}} = \frac{\rho_{fs}}{\rho_m}\frac{\mu_m}{\mu_{fs}}\frac{l_{fs}}{l_m} = 1.025\times\frac{1}{1.07}\times4 = 3.83 \Rightarrow u_m = 3.83\times3.5 = 13.41\ \text{m/s}`],
          ['m', R`\frac{T_{fs}}{T_m} = \frac{\rho_{fs}}{\rho_m}\left(\frac{u_{fs}}{u_m}\right)^2\left(\frac{l_{fs}}{l_m}\right)^3 = \frac{1.025\times4^3}{3.83^2} = 4.47 \Rightarrow T_{fs} = 4.47\times20.6 = 92.1\ \text{N m}`],
          ['t', R`(Without rounding, $u_m/u_{fs} = 3.832$ gives $T_{fs}/T_m = 4.468$ and $T_{fs} = 92.0$ N m. The course's 92.1 N m comes from rounding to 3.83.)`]
        ]],
        ['ex', 'Q4 — pump scaling with head in metres of water', [
          ['t', R`A 1/3 scale model axial pump runs at 900 rpm, with $d_m = 125$ mm, head 3 m H₂O, $Q = 1$ m³/s and power 100 W. The full-size pump uses the **same fluid**, is **3× larger** ($d_{fs} = 375$ mm) and runs at 300 rpm. Find its (a) power, (b) flow rate, (c) head. [900 W; 9 m³/s; 3 m H₂O]`],
          ['ans'],
          ['t', R`Variables $P$ $[ML^2/T^3]$, $Q$ $[L^3/T]$, $\omega$ $[1/T]$, $\rho$ $[M/L^3]$, head $H$ and $d$ $[L]$. Head only enters through the pressure it represents, $\Delta p = \rho g H$, so use $gH$ $[L^2/T^2]$ as the variable (see the Warning below). Repeating: $\rho$ (only mass), $\omega$ (sets the time scale), $d$ (the only true length). Ratios: $\omega_{fs}/\omega_m = 300/900 = 1/3$, $d_{fs}/d_m = 3$, $\rho_{fs} = \rho_m$.`],
          ['m', R`\text{(a)}\ \Pi_1 = \rho^{\alpha}\omega^{\beta}d^{\gamma}P:\ \alpha=-1,\ \beta=-3,\ \gamma=-5 \Rightarrow \Pi_1 = \frac{P}{\rho\omega^3 d^5}`],
          ['m', R`P_{fs} = P_m\left(\frac{\omega_{fs}}{\omega_m}\right)^3\left(\frac{d_{fs}}{d_m}\right)^5 = 100\times\left(\tfrac13\right)^3\times3^5 = 900\ \text{W}`],
          ['m', R`\text{(b)}\ \Pi_2 = \rho^{\alpha}\omega^{\beta}d^{\gamma}Q:\ \alpha=0,\ \beta=-1,\ \gamma=-3 \Rightarrow \Pi_2 = \frac{Q}{\omega d^3}`],
          ['m', R`Q_{fs} = Q_m\,\frac{\omega_{fs}}{\omega_m}\left(\frac{d_{fs}}{d_m}\right)^3 = 1\times\tfrac13\times3^3 = 9\ \text{m}^3/\text{s}`],
          ['m', R`\text{(c)}\ \Pi_3 = \rho^{\alpha}\omega^{\beta}d^{\gamma}(gH):\ M:\ \alpha = 0 \quad T:\ -\beta - 2 = 0 \quad L:\ \gamma + 2 = 0`],
          ['m', R`\alpha=0,\ \beta=-2,\ \gamma=-2 \Rightarrow \Pi_3 = \frac{gH}{\omega^2 d^2}`],
          ['m', R`H_{fs} = H_m\left(\frac{\omega_{fs}}{\omega_m}\right)^2\left(\frac{d_{fs}}{d_m}\right)^2 = 3\times\left(\tfrac13\right)^2\times3^2 = 3\ \text{m H}_2\text{O}\quad (g\ \text{the same})`]
        ]],
        ['warn', 'Warning', [ R`Head in metres of water is **not** a length to scale with $d$. Converting it to pressure needs $g$. Either include $g$ as a variable, use $gH$ (pressure per unit density) as the variable, or convert the head to Pa first. All three give $\Pi_3 = gH/\omega^2 d^2$.` ]]
      ]
    }
  ]
}
