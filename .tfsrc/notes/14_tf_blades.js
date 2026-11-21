{
  key: 'tf_blades', area: 'wind', num: '14', week: 'Weeks 7–9',
  name: 'Wind Turbine Blade Design and BEM Theory',
  triggers: 'aerofoil · angle of attack α · lift ⊥ / drag ∥ relative wind · C_l, C_d = force/(½ρu²c) · u_rot = ωr · u_rel = √(u∞² + (ωr)²) · tan φ = u∞/ωr · φ = α + β · angle of twist β falls towards the tip · tip speed ratio λ = ωR/u∞ · rpm → rad/s · blade element / annular ring δr · torque force δQ and thrust δT · τ = Σ r δQ · Z blades · W = τω · η_EM · parked rotor (ω = 0, φ = 90°) · overturning moment T h',
  sections: [
    {
      num: '', title: 'Revision Objectives — Wind Turbine Blade Design and BEM Theory',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Name the parts of an aerofoil (leading/trailing edge, upper/lower edge, chord, camber line) and the regions of a turbine blade (both definitions).`,
          R`Define the **angle of attack** $\alpha$, explain how an aerofoil makes lift, what separation and stall are, and why thin and thick sections stall differently.`,
          R`Use $C_l = L/(\tfrac12\rho u^2 c)$ and $C_d = D/(\tfrac12\rho u^2 c)$, read $C_l$ and $C_d$ off a graph, and say why coefficients are used.`,
          R`Draw the **velocity triangle** for a rotating blade section: $u_{rot} = \omega r$, $u_{rel} = \sqrt{u_\infty^2 + (\omega r)^2}$, $\tan\phi = u_\infty/\omega r$, and use $\phi = \alpha + \beta$ to find $\alpha$ or the **angle of twist** $\beta$.`,
          R`Calculate and interpret the **tip speed ratio** $\lambda = \omega R/u_\infty$ (with rpm → rad/s).`,
          R`Resolve lift and drag on a **blade element** into a **torque force** $\delta Q = \delta L\sin\phi - \delta D\cos\phi$ and a **thrust force** $\delta T = \delta L\cos\phi + \delta D\sin\phi$.`,
          R`Build up the **BEM** sums for the whole rotor, $\tau = \tfrac{Z}{2}\rho\,\delta r\sum r_i u_{rel,i}^2 c_i(C_{l,i}\sin\phi_i - C_{d,i}\cos\phi_i)$ and the matching thrust $T$, and say which terms vary along the blade.`,
          R`Find turbine power $\dot W_{turbine} = \tau\omega$ and electrical power $\dot W_{elec} = \eta_{EM}\tau\omega$; state the assumptions and limitations of BEM.`
        ]]
      ]
    },
    {
      num: '14.1', title: 'Aerofoils and Their Definitions',
      blocks: [
        ['para', R`A horizontal-axis wind turbine (HAWT) blade works exactly like an aircraft wing: **lift** is created by a pressure difference between the air above and below it. Start with a 2-D slice through the blade — ignore the rotation for now (that comes in §14.4). The 2-D cross-section of a wing or blade is an **aerofoil** (airfoil). It can be **asymmetric** (cambered) or **symmetric**.`],
        ['svg', 'tf_blades_aerofoil', 'Aerofoil definitions (wind left → right). (a) A cambered section: the camber line sits above the chord. (b) A symmetric section: the camber line is the chord.'],
        ['para', R`With the wind blowing horizontally from left to right:`],
        ['list', null, false, [
          R`**Leading edge (LE):** the first point on the aerofoil to meet the wind.`,
          R`**Trailing edge (TE):** the most downwind point.`,
          R`**Upper edge / lower edge:** the top and bottom surfaces, each running from the leading edge to the trailing edge.`,
          R`**Chord:** the straight line from leading edge to trailing edge. Its length is the **chord length** $c$ — the length used in $C_l$ and $C_d$.`,
          R`**Camber line:** the line through the middle of the section, equally far from the upper and lower edges. For a **symmetric** aerofoil the camber line and the chord are the same line.`
        ]]
      ]
    },
    {
      num: '14.2', title: 'Angle of Attack, Lift, Drag and Stall',
      blocks: [
        ['para', R`The **angle of attack** $\alpha$ is the angle between the direction of the oncoming wind and the aerofoil's **chord**. The free-stream wind speed far from the aerofoil is $u_\infty$.`],
        ['svg', 'tf_blades_alpha', 'Async 2.1 Figs 2–4. (a) Symmetric section at α = 0: identical paths over both edges, so equal speeds and pressures — drag only. (b) α > 0: faster flow over the upper edge, lower pressure above, so lift. (c) A cambered section makes lift even at α = 0.'],
        ['list', null, false, [
          R`**Symmetric, $\alpha = 0$:** the path round the upper edge is identical to the path round the lower edge, so the air speed (and pressure) is the same on both. There is **no lift** — only **drag** $D$, as on any object sitting in a wind.`,
          R`**Symmetric, $\alpha > 0$:** the flow paths are no longer identical. Air moves faster over the upper edge; by Bernoulli (faster flow, lower pressure) the pressure above is **lower** and below is **higher**. That pressure difference is the **lift** $L$. Drag is still there.`,
          R`**Asymmetric, $\alpha = 0$:** the cambered shape alone produces a pressure difference, so a cambered aerofoil makes lift **even at zero angle of attack**.`
        ]],
        ['warn', 'Important', [
          R`**Lift and drag are defined by the wind direction, not by the chord.** Lift is **perpendicular** to the oncoming wind; drag is **in line with** (parallel to) it. On a rotating blade "the wind" means the **relative** wind $u_{rel}$ (§14.4), so $L \perp u_{rel}$ and $D \parallel u_{rel}$.`
        ]],
        ['warn', 'Note', [
          R`The "unequal path lengths" story is an **over-simplification** (the course says so too). Nothing forces air going over the top to meet the air going underneath at the trailing edge at the same time — in experiments the upper-edge flow is much faster than equal transit times would predict, so the lift is larger. Speed and low pressure promote each other rather than one simply causing the other. A full explanation (e.g. Anderson, *Fundamentals of Aerodynamics*) is beyond this course; for exams, "faster flow over the upper edge → lower pressure (Bernoulli) → net upward force perpendicular to the wind" is what is wanted.`
        ]],
        ['para', R`**Separation and stall.** Increasing $\alpha$ increases lift — at a rate set by the aerofoil design and the wind speed — up to a point. Then the streamlines over the upper edge can no longer follow the surface: the flow **separates** and forms **vortices**. The vortices create a region of **higher** pressure on the upper surface, cancelling part of the pressure difference that the angle of attack created, so the lift falls.`],
        ['svg', 'tf_blades_stall', 'Async 2.1 Fig 5. At large α the flow separates from the upper edge. Separation begins at the trailing edge and spreads forwards as α rises — the stall zone.'],
        ['list', null, false, [
          R`Separation starts at the **trailing edge** and moves forward along the upper edge as $\alpha$ increases. The range of $\alpha$ over which this happens is the **stall zone** — the aerofoil increasingly works in a way it was not designed for.`,
          R`**Thin** aerofoils have a **narrow** stall zone: once stall starts, lift drops very quickly. **Thick** aerofoils have a wider stall zone: lift falls off more gradually.`
        ]]
      ]
    },
    {
      num: '14.3', title: 'Lift and Drag Coefficients',
      blocks: [
        ['para', R`Lift and drag are made **dimensionless** as coefficients. This is what lets a designer test a scale model in a wind tunnel, express its performance as $C_l$ and $C_d$, and apply the same coefficients to the full-size turbine.`],
        ['disp', [ R`C_l = \frac{L}{\tfrac12\rho\,u_\infty^2\,A} \qquad C_d = \frac{D}{\tfrac12\rho\,u_\infty^2\,A} \tag{14.1}` ]],
        ['para', R`Here $\rho$ is the air density, $u_\infty$ the free-stream speed and $A$ the area of wing on which the force acts. The characteristic area is the **chord × a unit length of span**, $A = c\cdot1$, so the coefficients describe the lift and drag on **1 m of wing** (in SI units):`],
        ['svg', 'tf_blades_area', 'Async 2.1 Fig 6 / Session 2 slide 22. The reference area is chord c × unit span; for a blade element the span is the element width δr instead of 1.'],
        ['disp', [ R`C_l = \frac{L}{\tfrac12\rho\,u_\infty^2\,c} \qquad C_d = \frac{D}{\tfrac12\rho\,u_\infty^2\,c} \tag{14.2}` ]],
        ['para', R`Here $L$ and $D$ are forces **per unit span** (N/m); multiply by a span to get newtons.`],
        ['warn', 'Recall Knowledge', [
          R`$\tfrac12\rho u^2$ is the **dynamic pressure** (Topic 1), so a force coefficient is simply force ÷ (dynamic pressure × area). It is the same idea as the force coefficients from dimensional analysis (Topics 2–3): matching the coefficients between model and full scale is what makes the wind-tunnel result transferable.`
        ]],
        ['para', R`$C_l$ and $C_d$ are usually found **empirically** — by experiment or by computational fluid dynamics (CFD) — and plotted against $\alpha$. For any design there is an **optimum angle of attack** that gives a lot of lift for little drag (a high $C_l/C_d$).`],
        ['svg', 'tf_blades_clcd', 'Async 2.1 Fig 7 (also Session 2 slides 12 and 36): Cl and Cd for typical symmetric aerofoils. The best-Cl/Cd points are read off these curves for these notes.'],
        ['list', 'Reading the curves:', false, [
          R`Both start with $C_l \approx 0$ at $\alpha = 0$ (symmetric sections) and $C_l$ rises almost **linearly** with $\alpha$.`,
          R`$C_l$ peaks near $\alpha \approx 10^\circ$ (thick, $C_l \approx 1.12$) or $10.5^\circ$ (thin, $C_l \approx 0.98$), then falls — that is **stall**. The thin section's lift collapses far more abruptly, as §14.2 said.`,
          R`$C_d$ stays small and nearly flat (≈ 0.056 thick, ≈ 0.047 thin) until separation starts, then climbs steeply.`,
          R`Best $C_l/C_d$: about 12 at $\alpha \approx 8^\circ$ (thick) and about 16 at $\alpha \approx 9^\circ$ (thin). A blade is designed to run near this $\alpha$ along its length.`
        ]],
        ['eq', [
          ['Lift coefficient', R`C_l = \frac{L}{\tfrac12\rho u^2 c}`, '[–]', 'L per unit span; u = u∞ for a fixed wing, u_rel on a rotating blade.'],
          ['Drag coefficient', R`C_d = \frac{D}{\tfrac12\rho u^2 c}`, '[–]', 'Same reference area c × 1.'],
          ['Directions', R`L \perp u,\quad D \parallel u`, '', 'Set by the wind the section sees, not by the chord.']
        ]]
      ]
    },
    {
      num: '14.4', title: 'Rotating Blades: Relative Wind and Velocity Triangles',
      blocks: [
        ['para', R`The lift mechanism on a turbine blade is identical to a wing, but now the lift makes the blades **rotate** about the turbine axis at angular velocity $\omega$ (rad/s), and the rotation adds complexity. A blade section moving through the air feels an extra, **apparent wind** caused by its own motion, $u_{rot}$. For a HAWT it is **perpendicular** to $u_\infty$ (the blade moves in the plane of rotation; the wind blows along the axis), and it points **opposite** to the blade's motion: in the blade's own frame of reference the still air appears to rush past in the other direction — just as you feel a headwind cycling on a calm day. A section at distance $r$ from the axis moves at $\omega r$, so`],
        ['disp', [ R`u_{rot} = \omega r \tag{14.3}` ]],
        ['para', R`$u_{rot}$ therefore grows linearly from the **root** (hub end) to the **tip**. The section sees the vector sum of the two — the **relative wind** $u_{rel}$. Because the two components are perpendicular, a simple right-angled **velocity triangle** gives it:`],
        ['svg', 'tf_blades_vtri', 'Async 2.1 Fig 9. (a) Near the root u_rot is small compared with u∞, so u_rel is close to the wind direction. (b) Far from the root u_rot is larger than u∞, so u_rel swings round towards the plane of rotation. φ is the angle between u_rel and the plane of rotation.'],
        ['disp', [ R`u_{rel} = \sqrt{u_\infty^2 + u_{rot}^2} = \sqrt{u_\infty^2 + (\omega r)^2} \tag{14.4}` ]],
        ['disp', [ R`\tan\phi = \frac{u_\infty}{u_{rot}} = \frac{u_\infty}{\omega r} \tag{14.5}` ]],
        ['para', R`$\phi$ is the angle between $u_{rel}$ and the **plane of rotation** (the direction of $u_{rot}$ in the triangle). Moving from root to tip, $\omega r$ rises, so $u_{rel}$ gets **bigger** and its **direction** changes: $\phi$ shrinks. (The course figures use $\phi$ without writing (14.5); it is just the triangle's geometry, and it is what every numerical question needs.)`],
        ['para', R`An aerofoil has an optimum $\alpha$ (§14.3). To keep that $\alpha$ all along the blade, the angle of the chord must **change** with $r$ to follow the turning relative wind — this is the blade's **twist** (§14.6). Lift and drag are still defined by the wind *as the aerofoil sees it*: lift $\perp u_{rel}$, drag $\parallel u_{rel}$. So the coefficients use $u_{rel}$:`],
        ['disp', [ R`C_l = \frac{L}{\tfrac12\rho\,u_{rel}^2\,c} \qquad C_d = \frac{D}{\tfrac12\rho\,u_{rel}^2\,c} \tag{14.6}` ]],
        ['para', R`(14.1), (14.2) and (14.6) are **one definition**: force ÷ ($\tfrac12\rho u^2 \times$ reference area), where $u$ is whatever wind the section actually sees — $u_\infty$ for a fixed wing in a tunnel, $u_{rel}$ on a rotating blade — and the area is $A = c\times1$ per unit span (or $c\,\delta r$ for an element). That is why the key-equation tables just write $u$.`],
        ['warn', 'Key Insight', [
          R`Because $u_{rel}^2 = u_\infty^2 + (\omega r)^2$ and the outer sections move fast, the outer part of the blade sees a much bigger dynamic pressure than the inner part — and its force also acts at a bigger radius. That is why most of the energy comes from the outer **aerodynamic region** and why the tip speed ratio matters so much.`
        ]],
        ['warn', 'Warning', [
          R`$\omega$ must be in **rad/s**: $\omega = 2\pi N/60$ for $N$ rpm. Using rpm directly is the commonest slip in this topic.`
        ]],
        ['ex', 'Example — the relative wind at the root and the tip', [
          ['t', R`A rotor of radius 40 m turns at 15 rpm in a 10 m/s wind. Find $u_{rel}$ and $\phi$ at $r = 5$ m and at the tip.`],
          ['ans'],
          ['m', R`\omega = \frac{2\pi(15)}{60} = 1.571\ \text{rad/s}`],
          ['m', R`r = 5:\ u_{rot} = 7.85\ \text{m/s},\ u_{rel} = \sqrt{10^2 + 7.85^2} = 12.7\ \text{m/s},\ \phi = \tan^{-1}\frac{10}{7.85} = 51.9^\circ`],
          ['m', R`r = 40:\ u_{rot} = 62.8\ \text{m/s},\ u_{rel} = \sqrt{10^2 + 62.8^2} = 63.6\ \text{m/s},\ \phi = \tan^{-1}\frac{10}{62.8} = 9.0^\circ`],
          ['t', R`At the tip the blade sees a wind six times faster than the real wind, arriving almost in the plane of rotation. At the root the relative wind is barely faster than $u_\infty$ and arrives at a steep angle. A blade with one fixed chord angle could not suit both.`]
        ]]
      ]
    },
    {
      num: '14.5', title: 'Tip Speed Ratio',
      blocks: [
        ['para', R`The **tip speed ratio** $\lambda$ compares the linear speed of the blade **tip** with the wind speed. The tip speed is $\omega R$, where $R$ is the radius of the turbine's coverage (swept radius — the distance of the tip from the axis):`],
        ['disp', [ R`\lambda = \frac{\omega R}{u_\infty} \qquad \left(\omega\ \text{in rad/s}\right) \tag{14.7}` ]],
        ['para', R`$\lambda$ is a key design parameter. It depends on $u_\infty$, so a blade is designed for a specific **range** of wind speeds. Typical modern HAWTs: **2 blades**, $9 \le \lambda \le 10$; **3 blades**, $6 \le \lambda \le 9$. Traditional many-bladed, small-radius machines can run as low as $\lambda = 1$.`],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;max-width:700px;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Tip speed ratio</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">λ ≤ 2</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">λ ≥ 6</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Utilisation</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Traditional windmills and water pumps</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Mainly single-, 2- or 3-bladed</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Torque</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">High (increases as λ falls)</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Low (decreases as λ rises)</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Efficiency</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Drops significantly below λ = 5 because the high torque leaves a rotating wake</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Little further gain above λ = 8</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Centrifugal stress</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Lower</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Rises with the square of rotational speed</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Aerodynamic stress</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Lower</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Rises in proportion to rotational speed</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Blade profile</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Wide blades needed</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Narrow blades needed</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Solidity (blade area ÷ swept area)</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Very high: 20+ blades may be needed</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Low: 1, 2 or 3 narrow blades suffice</td></tr>'
          + '<tr><td style="padding:6px 10px">Aerodynamics</td><td style="padding:6px 10px">Simple — optimised over a broad range of conditions</td><td style="padding:6px 10px">Critical — blade optimisation is highly complex</td></tr>'
          + '</tbody></table></div>'],
        ['para', R`(Table adapted in the course from Schubel & Crossley, *Energies* 5, 2012.)`],
        ['warn', 'Note', [
          R`**Reading the table.** It compares the **two ends** of the range only: low-speed machines ($\lambda \le 2$) and modern high-speed rotors ($\lambda \ge 6$). Rotors with $2 < \lambda < 6$ are intermediate — their torque, stresses, blade width and solidity lie between the two columns — and the efficiency row (falling below $\lambda \approx 5$, little gain above $\approx 8$) is the trend across that whole range.`,
          R`**Why high torque means a rotating wake** (explanation, not on the slides): by Newton's third law, the torque the air exerts on the rotor is matched by an equal and opposite torque the rotor exerts on the air. The air therefore leaves the rotor **swirling** in the opposite direction to the blades. That swirl is kinetic energy that came out of the wind but was not turned into shaft work, so it is wasted. For a given power $\dot W = \tau\omega$, a slowly turning (low-$\lambda$) rotor needs a large $\tau$, so it puts a lot of swirl into the wake and loses a lot of energy; a fast (high-$\lambda$) rotor delivers the same power with small torque and little swirl. Hence efficiency falls away below $\lambda \approx 5$.`,
          R`**Why 2-blade rotors run faster than 3-blade ones** (same reasoning): with fewer, narrow blades the solidity is lower, so to "intercept" the wind passing through the whole swept area each blade must sweep it more often — i.e. turn faster. That is why the typical range moves up from $6$–$9$ (3 blades) to $9$–$10$ (2 blades), and down to $\lambda \approx 1$ for 20+-bladed windmills.`
        ]],
        ['warn', 'Key Insight', [
          R`Dividing (14.3) by $u_\infty$: the local speed ratio at radius $r$ is $\omega r/u_\infty = \lambda\,r/R$, so (14.5) becomes $\tan\phi = R/(\lambda r)$. A high-$\lambda$ rotor has small $\phi$ over most of the blade (relative wind nearly in the plane of rotation), which is why it needs narrow, finely optimised blades. (This rearrangement is not on the slides — it is just (14.5) and (14.7) combined.)`
        ]],
        ['eq', [
          ['Speed of a section', R`u_{rot} = \omega r,\quad \omega = \frac{2\pi N}{60}`, '[m/s]', 'N in rpm → ω in rad/s.'],
          ['Relative wind', R`u_{rel} = \sqrt{u_\infty^2 + (\omega r)^2}`, '[m/s]', 'u∞ (axial) ⊥ ωr (in the plane of rotation).'],
          ['Inflow angle', R`\tan\phi = \frac{u_\infty}{\omega r}`, '[–]', 'φ between u_rel and the plane of rotation.'],
          ['Tip speed ratio', R`\lambda = \frac{\omega R}{u_\infty}`, '[–]', '2-blade 9–10; 3-blade 6–9.']
        ]]
      ]
    },
    {
      num: '14.6', title: 'Blade Sections and the Angle of Twist',
      blocks: [
        ['para', R`**Regions of the blade.** Engineers rarely agree on the names, so be ready for either definition (or a mix):`],
        ['svg', 'tf_blades_sections', 'Session 2 slides 4–9. Definition 1 splits the blade into aerodynamic region, transition region and root; Definition 2 into tip, mid span and root.'],
        ['list', null, false, [
          R`**Aerodynamic region:** where the vast majority of the wind energy is harvested, so this is where aerodynamic optimisation is key.`,
          R`**Tip:** designed to deal with **edge effects** (flow spilling round the end of the blade) as much as to harvest energy.`,
          R`**Root:** **cylindrical**, to fit the hub of the turbine, and because it must carry significant stress — a cylinder is the best shape for that.`,
          R`**Transition region:** a smooth change from the cylindrical root into the aerodynamic region, important both for **structural rigidity** and for **efficient aerodynamics**.`
        ]],
        ['para', R`**Angle of twist.** Different parts of the blade move through the air at different speeds, which changes the magnitude and direction of $u_{rel}$ (§14.4). To keep a more **consistent angle of attack**, the twist of the blade varies along its length. The **angle of twist** $\beta$ is the angle between the **blade chord** and the **plane normal to the wind direction** (the plane of rotation). $\beta$ **reduces** as you move away from the root.`],
        ['svg', 'tf_blades_twist', 'Session 2 slide 11 / Async 2.1 Fig 10, drawn to scale for one rotor: as ωr grows from root to tip, φ falls, so to hold α = 8° the twist β = φ − α must fall.'],
        ['disp', [ R`\phi = \alpha + \beta \qquad\Longleftrightarrow\qquad \alpha = \phi - \beta \tag{14.8}` ]],
        ['para', R`All three angles are measured in the same sense: $\beta$ from the plane of rotation to the chord, $\alpha$ from the chord on to $u_{rel}$, and $\phi$ from the plane of rotation all the way to $u_{rel}$. So $\beta$ is directly linked to $\alpha$: for a given $\phi$ (set by $u_\infty$ and $\omega r$), choosing $\beta$ chooses $\alpha$.`],
        ['warn', 'Key Insight', [
          R`**Why we care about twist:** turbine blades have optimum angles of attack — maximum lift for minimum drag — and each aerofoil's $C_l$, $C_d$–$\alpha$ relationship is different (found by experiment or complex modelling, §14.3). Twist is how the designer holds every section near its best $\alpha$ even though $\phi$ changes along the blade.`,
          R`If $\beta$ were constant, $\alpha = \phi - \beta$ would be large near the root (risking stall) and small, even **negative**, near the tip (no useful lift) — see Problem Sheet Q5.`
        ]]
      ]
    },
    {
      num: '14.7', title: 'Blade Element Momentum (BEM) Theory: Elements and Assumptions',
      blocks: [
        ['para', R`Working out the power from the geometry of a whole twisted, tapered blade in one go is extremely complex. **BEM** splits (decouples) the blade into **elements** along its length. Software makes each element almost infinitely thin, but a good approximation comes from a modest number (the slides show ~10–20 strips on a blade).`],
        ['para', R`Seen **front-on**, one element on every blade sweeps out an **annular ring** of width $\delta r$ at radius $r$:`],
        ['svg', 'tf_blades_annulus', 'Session 2 slides 15–16 and 27–31. Element i on each of the Z blades lies in one annular ring of width δr at radius rᵢ. Its torque force δQᵢ acts round the ring; its thrust δTᵢ acts along the axis (into the page).'],
        ['list', 'Assumptions for a single element (Session 2 slide 16):', true, [
          R`The **relative wind velocity** $u_{rel}$ is constant across the annular ring.`,
          R`The **angle of twist** $\beta$ is constant across the element.`,
          R`Therefore the **angle of attack** $\alpha$ is constant across the element.`,
          R`The **chord length** $c$ is constant across the element.`,
          R`The element's width — the distance between its inner and outer bounds — is $\delta r$.`
        ]],
        ['para', R`With these, the coefficient definitions (14.6) apply to the element with its span $\delta r$ in place of the unit length (§14.3).`],
        ['ex', 'Classwork (slide 15) — what must we assume for one element?', [
          ['t', R`What assumptions and definitions are needed for a blade element so that the lift and drag on it can be calculated? (Hint: look back at the lift and drag coefficients.)`],
          ['ans'],
          ['t', R`$C_l$ and $C_d$ give the force per unit span for **one** value of $u_{rel}$, $\alpha$ and $c$. So within the element we must be able to treat these as single numbers: constant $u_{rel}$ across the ring, constant $\beta$ and hence constant $\alpha$, constant chord $c$, and a defined width $\delta r$ to multiply the per-unit-span force by. Then $\delta L = \tfrac12\rho u_{rel}^2 c\,C_l\,\delta r$ and $\delta D = \tfrac12\rho u_{rel}^2 c\,C_d\,\delta r$.`]
        ]],
        ['warn', 'Note', [
          R`The slide calls $c$ the "chord thickness". It is the **chord length** (leading edge to trailing edge, as in Async 2.1); an aerofoil's thickness is a different, much smaller dimension.`
        ]]
      ]
    },
    {
      num: '14.8', title: 'Resolving Lift and Drag into Torque and Thrust',
      blocks: [
        ['para', R`The directions of $L$ and $D$ depend on the angle of $u_{rel}$ and on $\alpha$, and both change along the blade, so adding up $L$ and $D$ from different elements directly is very cumbersome. Instead, resolve them into two fixed directions:`],
        ['list', null, false, [
          R`**Torque force** $Q$ — in the plane of rotation, along the blade's direction of motion. It **drives the rotation**. It is a **force**, in newtons (the torque is $\tau = rQ$, in N m).`,
          R`**Thrust force** $T$ — along the wind direction ($u_\infty$, the rotor axis). It does no useful work; it tries to **push the turbine over**.`
        ]],
        ['para', R`For one element on one blade every force carries a $\delta$: $\delta L$, $\delta D$, $\delta Q$, $\delta T$. Here is the course's picture for a section (wind left → right, section moving up the page):`],
        ['svg', 'tf_blades_forces', 'Session 2 slides 17–19. Velocity triangle (u∞ right, u_rot = ωr down, opposite to the motion) and the section: β from the plane of rotation to the chord, α from the chord to u_rel, φ = α + β. δL ⊥ u_rel, δD ∥ u_rel; δQ along the motion, δT along u∞.'],
        ['ex', 'Classwork Task 1 (slides 19–21) — δQ and δT in terms of δL, δD and φ', [
          ['t', R`Define $\delta Q$ and $\delta T$ in terms of $\delta L$, $\delta D$ and $\phi$.`],
          ['ans'],
          ['t', R`**Draw a component diagram** and work out each force's angle to the two target directions. $u_{rel}$ makes angle $\phi$ with the plane of rotation, so **drag** (along $u_{rel}$) makes angle $\phi$ with the plane of rotation and $90^\circ - \phi$ with the wind direction. **Lift** is perpendicular to $u_{rel}$, so it makes angle $90^\circ - \phi$ with the plane of rotation (with $\delta Q$) and $\phi$ with the wind direction (with $\delta T$).`],
          ['svg', 'tf_blades_resolve', 'Session 2 slides 20–21. Lift is 90° − φ from δQ and φ from δT; drag points along u_rel, partly against the motion and partly downwind.'],
          ['t', R`**(a) Direction of aerofoil movement** (isolates $\delta Q$). Lift has a component *along* the motion; drag points partly *backwards*, against the motion:`],
          ['m', R`\delta Q = \delta L\cos(90^\circ - \phi) - \delta D\sin(90^\circ - \phi)`],
          ['t', R`With $\cos(90^\circ - \phi) = \sin\phi$ and $\sin(90^\circ - \phi) = \cos\phi$:`],
          ['m', R`\boxed{\delta Q = \delta L\sin\phi - \delta D\cos\phi}`],
          ['t', R`**(b) Direction of the free wind** (isolates $\delta T$). Both lift and drag have downwind components, so they **add**:`],
          ['m', R`\delta T = \delta L\cos\phi + \delta D\cos(90^\circ - \phi) \;\Rightarrow\; \boxed{\delta T = \delta L\cos\phi + \delta D\sin\phi}`]
        ]],
        ['disp', [ R`\delta Q = \delta L\sin\phi - \delta D\cos\phi \tag{14.9}`, R`\delta T = \delta L\cos\phi + \delta D\sin\phi \tag{14.10}` ]],
        ['warn', 'Key Insight', [
          R`**Lift drives the turbine; drag works against it.** The $-\delta D\cos\phi$ term is why a good blade needs a high $C_l/C_d$. Drag does nothing for torque but adds to thrust.`,
          R`Check the limits. $\phi \to 90^\circ$ (rotor stopped, wind straight along the axis): $\delta Q = \delta L$, $\delta T = \delta D$. $\phi \to 0$ (relative wind in the plane of rotation): $\delta Q = -\delta D$, $\delta T = \delta L$ — no driving torque at all.`
        ]],
        ['ex', 'Classwork Task 2 (slides 22–24) — δQ and δT in terms of C_l, C_d and δr', [
          ['t', R`Using the lift and drag coefficients (defined per unit width, $A = c\cdot1$), define $\delta Q$ and $\delta T$ in terms of $C_l$, $C_d$ and the element width $\delta r$.`],
          ['ans'],
          ['t', R`Rearrange (14.6) to make the force the subject (force per unit span), then multiply by the element's width $\delta r$ (which replaces the unit width):`],
          ['m', R`L = \tfrac12\rho u_{rel}^2 c\,C_l,\quad D = \tfrac12\rho u_{rel}^2 c\,C_d \;\Rightarrow\; \delta L = \tfrac12\rho u_{rel}^2 c\,C_l\,\delta r,\quad \delta D = \tfrac12\rho u_{rel}^2 c\,C_d\,\delta r`],
          ['t', R`Substitute into (14.9) and (14.10) and take out the common factor $\tfrac12\rho u_{rel}^2 c\,\delta r$:`],
          ['m', R`\delta Q = \tfrac12\rho u_{rel}^2 c\,C_l\,\delta r\sin\phi - \tfrac12\rho u_{rel}^2 c\,C_d\,\delta r\cos\phi = \tfrac12\rho u_{rel}^2 c\,\delta r\,(C_l\sin\phi - C_d\cos\phi)`],
          ['m', R`\delta T = \tfrac12\rho u_{rel}^2 c\,C_l\,\delta r\cos\phi + \tfrac12\rho u_{rel}^2 c\,C_d\,\delta r\sin\phi = \tfrac12\rho u_{rel}^2 c\,\delta r\,(C_l\cos\phi + C_d\sin\phi)`]
        ]],
        ['disp', [ R`\delta L = \tfrac12\rho\,u_{rel}^2\,c\,C_l\,\delta r \qquad \delta D = \tfrac12\rho\,u_{rel}^2\,c\,C_d\,\delta r \tag{14.11}` ]],
        ['disp', [ R`\delta Q = \tfrac12\rho\,u_{rel}^2\,c\,\delta r\,(C_l\sin\phi - C_d\cos\phi) \tag{14.12}`, R`\delta T = \tfrac12\rho\,u_{rel}^2\,c\,\delta r\,(C_l\cos\phi + C_d\sin\phi) \tag{14.13}` ]],
        ['warn', 'When to use', [
          R`One element, one blade: (1) $\omega$ in rad/s; (2) $u_{rot} = \omega r$ at the element's **centre** radius; (3) $u_{rel}$ and $\phi$ from the triangle; (4) $\alpha = \phi - \beta$; (5) $C_l$, $C_d$ from the graph at that $\alpha$; (6) (14.12) and (14.13); (7) element torque $= r\,\delta Q$.`
        ]],
        ['eq', [
          ['Torque force (resolved)', R`\delta Q = \delta L\sin\phi - \delta D\cos\phi`, '[N]', 'Along the motion; drives rotation.'],
          ['Thrust (resolved)', R`\delta T = \delta L\cos\phi + \delta D\sin\phi`, '[N]', 'Along u∞; pushes the turbine over.'],
          ['Element forces', R`\delta L,\ \delta D = \tfrac12\rho u_{rel}^2 c\,\delta r\;C_l,\ C_d`, '[N]', 'Span δr replaces the unit length.'],
          ['Element torque force', R`\delta Q = \tfrac12\rho u_{rel}^2 c\,\delta r\,(C_l\sin\phi - C_d\cos\phi)`, '[N]', 'One element, one blade.'],
          ['Element thrust', R`\delta T = \tfrac12\rho u_{rel}^2 c\,\delta r\,(C_l\cos\phi + C_d\sin\phi)`, '[N]', 'One element, one blade.']
        ]]
      ]
    },
    {
      num: '14.9', title: 'BEM: Scaling Up to the Whole Turbine',
      blocks: [
        ['para', R`**All blades, one ring.** Take the same element — any one, at the same distance from the centre, on each of the $Z$ blades (the slides happen to illustrate the 7th). Because they are at the same radius, $\alpha$, $\beta$ and $u_{rel}$ are the same on each, so a simple multiplication by $Z$ is enough. For the $i$th annular ring:`],
        ['disp', [ R`\delta Q_i = \frac{Z}{2}\rho\,u_{rel}^2\,c\,\delta r\,(C_l\sin\phi - C_d\cos\phi) \qquad \delta T_i = \frac{Z}{2}\rho\,u_{rel}^2\,c\,\delta r\,(C_l\cos\phi + C_d\sin\phi) \tag{14.14}` ]],
        ['para', R`$\delta Q_i$ acts round the ring and $\delta T_i$ along the axis (into the page in the front view of §14.7).`],
        ['warn', 'Important', [
          R`This **assumes no interaction between the airflow off each blade**. That is reasonable for 3 blades — they are widely spaced. It falls down with **more than about 4 blades**: the flow leaving one blade disturbs the flow onto the next and reduces the turbine's efficiency.`
        ]],
        ['ex', 'Classwork Task 3 (slides 30–34) — total torque and thrust', [
          ['t', R`Write a generalised summation for the total torque $\tau$ and total thrust force $T$ of the turbine. Each blade is split into $x$ elements, numbered with $i$. Remember the difference between torque force $Q$ (N) and torque $\tau$ (N m).`],
          ['ans'],
          ['t', R`**Force → torque.** Torque is force × moment arm, $\tau = rQ$. The torque force on ring $i$ acts at $r_i$, the distance from the axis of rotation to the **centre** of the element:`],
          ['m', R`\delta\tau_i = r_i\,\delta Q_i = r_i\,\frac{Z}{2}\rho\,u_{rel}^2\,c\,\delta r\,(C_l\sin\phi - C_d\cos\phi)`],
          ['t', R`**Add up the rings:** $\tau = \sum_{i=1}^{x}\delta\tau_i$. Now sort the terms into those that are the same for every ring and those that vary with $i$:`],
          ['t', R`• **Constants:** $Z$ and $\rho$ (not affected by position on the blade); $\delta r$ if every element has the same width.`],
          ['t', R`• **Varies, sometimes taken constant:** the chord $c$ (real blades taper; some calculations assume constant $c$).`],
          ['t', R`• **Variables:** $u_{rel}$ (set by distance from the axis); $C_l$ and $C_d$ (set by $\alpha$, and by $u_{rel}$); $\phi$ (set by $\alpha$ and $\beta$); $r$ (the element's position).`],
          ['t', R`Take the constants outside the sum and label every variable with $i$:`],
          ['m', R`\tau = \frac{Z}{2}\rho\,\delta r\sum_{i=1}^{x} r_i\,u_{rel,i}^2\,c_i\,(C_{l,i}\sin\phi_i - C_{d,i}\cos\phi_i)`],
          ['t', R`**Thrust:** the same process, but there is **no conversion to a torque**. Each ring's thrust acts along the rotor axis — the centre of every annular ring is the centre of rotation — so the thrusts all act at the same point and simply add:`],
          ['m', R`T = \frac{Z}{2}\rho\,\delta r\sum_{i=1}^{x} u_{rel,i}^2\,c_i\,(C_{l,i}\cos\phi_i + C_{d,i}\sin\phi_i)`]
        ]],
        ['disp', [ R`\delta\tau_i = r_i\,\delta Q_i \tag{14.15}` ]],
        ['disp', [ R`\boxed{\tau = \frac{Z}{2}\rho\,\delta r\sum_{i=1}^{x} r_i\,u_{rel,i}^2\,c_i\,\big(C_{l,i}\sin\phi_i - C_{d,i}\cos\phi_i\big)} \tag{14.16}` ]],
        ['disp', [ R`\boxed{T = \frac{Z}{2}\rho\,\delta r\sum_{i=1}^{x} u_{rel,i}^2\,c_i\,\big(C_{l,i}\cos\phi_i + C_{d,i}\sin\phi_i\big)} \tag{14.17}` ]],
        ['warn', 'Note', [
          R`The slides write the sums as $\sum_{i=0}^{x}$ with "$x$ = number of elements on each blade" (and one hint uses $n$ elements and "$N$ blades" while the formulas use $Z$). Counting from $i = 0$ to $x$ would be $x + 1$ elements, so these notes number the elements $i = 1 \ldots x$ and use $Z$ for the number of blades throughout. The physics is identical.`
        ]],
        ['svg', 'tf_blades_rotor', 'Session 2 slides 17–18 and 34. The torque τ turns the shaft; the total thrust T acts along the axis at the hub, so about the tower base it gives an overturning moment T h (Problem Sheet Q4).'],
        ['warn', 'Key Insight', [
          R`Thrust needs no moment arm **for the rotor**, but about the **foundations** the whole thrust $T$ acts at hub height $h$: overturning moment $M = Th$. Problem Sheet Q4 asks exactly this.`,
          R`In torque each ring is weighted by $r_i$ **and** by $u_{rel,i}^2 \approx (\omega r_i)^2$, so the outer rings dominate; the thrust sum is less biased towards the tip.`
        ]],
        ['eq', [
          ['One ring, Z blades', R`\delta Q_i = \frac{Z}{2}\rho u_{rel}^2 c\,\delta r\,(C_l\sin\phi - C_d\cos\phi)`, '[N]', 'No blade–blade interaction (fine for ≤ 3–4 blades).'],
          ['Ring torque', R`\delta\tau_i = r_i\,\delta Q_i`, '[N m]', 'r_i to the element centre.'],
          ['Rotor torque', R`\tau = \frac{Z}{2}\rho\,\delta r\sum_i r_i u_{rel,i}^2 c_i (C_{l,i}\sin\phi_i - C_{d,i}\cos\phi_i)`, '[N m]', 'Equal-width elements.'],
          ['Rotor thrust', R`T = \frac{Z}{2}\rho\,\delta r\sum_i u_{rel,i}^2 c_i (C_{l,i}\cos\phi_i + C_{d,i}\sin\phi_i)`, '[N]', 'No r: every ring acts on the axis.']
        ]]
      ]
    },
    {
      num: '14.10', title: 'BEM in Practice: the 10-Step Method and Power Extraction',
      blocks: [
        ['para', R`Every term in (14.16) and (14.17) has to be found for each element. The course's checklist:`],
        ['list', null, true, [
          R`Identify your individual blade element.`,
          R`Determine the angle of attack $\alpha$ for the element (from $\phi$ and $\beta$, (14.8)).`,
          R`Use **empirical data** (a $C_l$, $C_d$–$\alpha$ graph) to get $C_l$ and $C_d$.`,
          R`Identify the number of blades $Z$.`,
          R`Determine the chord length $c$ of the element.`,
          R`Identify the element width $\delta r$.`,
          R`Identify the distance $r$ from the centre of rotation (**torque only**).`,
          R`Extract $\phi$ for the element ($\phi = \alpha + \beta$, or from the velocity triangle).`,
          R`Identify the relative wind velocity $u_{rel,i}$ and the air density $\rho$.`,
          R`Extract the torque $\tau$ and thrust $T$ for the turbine (after a whole lot of calculation!).`
        ]],
        ['warn', 'Note', [
          R`In a numerical question the order is usually different: you are given $u_\infty$, $\omega$ and $\beta$, so you find $u_{rel}$ and $\phi$ from the triangle **first**, then $\alpha = \phi - \beta$, then read $C_l$, $C_d$.`
        ]],
        ['para', R`**Turbine power.** Power from a torque is the standard $\dot W = \tau\omega$. Only part of it becomes electricity: the **electro-mechanical coupling efficiency** $\eta_{EM}$ (introduced in Session 1, Topic 13) covers the gearbox and generator losses.`],
        ['disp', [ R`\dot W_{turbine} = \tau\,\omega \qquad \eta_{EM} = \frac{\dot W_{elec}}{\dot W_{turbine}} \tag{14.18}` ]],
        ['disp', [ R`\boxed{\dot W_{elec} = \eta_{EM}\,\tau\,\omega} \tag{14.19}` ]],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;max-width:600px;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Parameter</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Symbol</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Units</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px">Power harvested by the turbine</td><td style="padding:6px 10px">Ẇ<sub>turbine</sub></td><td style="padding:6px 10px">W</td></tr>'
          + '<tr><td style="padding:6px 10px">Useful electrical power extracted</td><td style="padding:6px 10px">Ẇ<sub>elec</sub></td><td style="padding:6px 10px">W</td></tr>'
          + '<tr><td style="padding:6px 10px">Torque</td><td style="padding:6px 10px">τ</td><td style="padding:6px 10px">N m</td></tr>'
          + '<tr><td style="padding:6px 10px">Angular velocity</td><td style="padding:6px 10px">ω</td><td style="padding:6px 10px">rad/s</td></tr>'
          + '<tr><td style="padding:6px 10px">Electro-mechanical coupling efficiency</td><td style="padding:6px 10px">η<sub>EM</sub></td><td style="padding:6px 10px">dimensionless</td></tr>'
          + '</tbody></table></div>'],
        ['warn', 'Recall Knowledge', [
          R`Topic 13: the wind carries power $\tfrac12\rho A u_\infty^3$ through the swept area $A = \pi R^2$, and no turbine can take more than the **Betz limit**, $16/27 \approx 59.3\%$, of it. A BEM answer for $\dot W_{turbine}$ should always come out **below** $\tfrac{16}{27}\cdot\tfrac12\rho\pi R^2 u_\infty^3$ — a quick sanity check on any exam answer.`
        ]],
        ['eq', [
          ['Turbine (shaft) power', R`\dot W_{turbine} = \tau\omega`, '[W]', 'ω in rad/s.'],
          ['Coupling efficiency', R`\eta_{EM} = \frac{\dot W_{elec}}{\dot W_{turbine}}`, '[–]', 'Gearbox + generator losses (Topic 13).'],
          ['Electrical power', R`\dot W_{elec} = \eta_{EM}\tau\omega`, '[W]', '']
        ]]
      ]
    },
    {
      num: '14.11', title: 'BEM Applications, Assumptions and Limitations',
      blocks: [
        ['list', 'Applications:', false, [
          R`BEM is used to **design wind turbine blades**.`,
          R`It is **modular**: simple hand BEM calculations (a few elements, average coefficients) give approximate torque and thrust.`,
          R`Real blade design is a **computational** exercise; BEM is used alongside other modelling techniques to reduce the impact of its limitations.`
        ]],
        ['list', 'Assumptions made in this course:', false, [
          R`Within each element: constant $u_{rel}$, $\beta$, $\alpha$ and $c$ (§14.7).`,
          R`Each element behaves like a 2-D aerofoil whose $C_l$, $C_d$ come from tabulated (empirical) data.`,
          R`No interaction between the flows off different blades (§14.9).`,
          R`The wind $u_\infty$ is uniform and normal to the plane of rotation.`
        ]],
        ['list', 'Limitations:', false, [
          R`**The wind is not completely 2-D.** We have assumed $u_\infty$ acts normal to the plane of the turbine. It does not quite: the stream tube of air passing through the turbine **expands** as it slows (Session 1 / the Betz analysis, Topic 13). Accounting for this needs a **3-D** numerical domain in a complex simulation.`,
          R`**Turbine blades interact.** With the common HAWT (3 narrow blades) interaction is minimal. Adding blades, or making them much wider, increases the **solidity** and reduces the gap between the trailing edge of one blade and the leading edge of the next; the **wake** from one blade then affects — and reduces — the performance of the next.`
        ]],
        ['warn', 'Note', [
          R`Beyond the slides (for context only): the "momentum" half of full BEM theory applies the momentum balance of Topic 13 to each annular ring. That shows the wind actually reaching the blade is slowed to $u_\infty(1 - a)$ and given a small swirl, so the triangle really uses $u_\infty(1-a)$ and $\omega r(1 + a')$ with **induction factors** $a$, $a'$ found by iteration. This course's version uses $u_\infty$ and $\omega r$ directly ($a = a' = 0$), which over-predicts the forces somewhat — part of why it is an *approximate* method. Use the course version in the exam.`
        ]],
        ['warn', 'When to use', [
          R`**Spot a blade/BEM question:** rpm and a radius (→ $\omega r$, $\lambda$); an angle of twist (→ $\alpha = \phi - \beta$); a $C_l$/$C_d$ graph; a chord and element width (→ $\delta L$, $\delta D$, $\delta Q$, $\delta T$); "torque on the generator" (→ $\tau = \sum r\delta Q$, $\dot W = \tau\omega$); "torque on the foundations" (→ $T \times$ hub height); "brake applied" (→ $\omega = 0$, $\phi = 90^\circ$).`,
          R`**Mass flow, ½ρAv³, actuator disc, Betz** → that is Topic 13.`
        ]]
      ]
    },
    {
      num: 'Ex 14', title: 'Problem Sheet — Mechanical Energy Conversion 2 (Blade Design and BEM)', wk: true,
      blocks: [
        ['warn', 'Note', [
          R`This is *Mechanical Energy Conversion Problem Sheet 2* (Word document in the problem-sheets folder). **No official solutions or quick-check answers were provided**, so every answer below has been worked out for these notes. Try each question first: the final answers are only shown when you reveal the solution. Graph readings are taken from the sheet's own figures (redrawn here) and are good to about ±0.01–0.02; small differences in your readings will change the last figure of the answers.`
        ]],
        ['ex', 'Q1 — tip speed ratio', [
          ['t', R`A horizontal-axis wind turbine points directly into the wind. The radius of the swept area is 30 m. When the wind speed is 2 m/s it rotates at 6 revolutions per minute. Calculate the tip speed ratio.`],
          ['ans'],
          ['t', R`**Answer:** $\lambda = 9.42$.`],
          ['m', R`\omega = \frac{2\pi\times6}{60} = 0.628\ \text{rad/s},\qquad \omega R = 0.628\times30 = 18.85\ \text{m/s}`],
          ['m', R`\lambda = \frac{\omega R}{u_\infty} = \frac{18.85}{2} = 9.42`],
          ['t', R`Even a slow 6 rpm gives a tip speed nearly 10× the (very light) wind — typical of a 2-blade design range (9–10).`]
        ]],
        ['ex', 'Q2 — relative wind and angle of attack', [
          ['t', R`A wind turbine rotates at 12 rpm when the wind speed is 8 m/s. 15 m from the centre of rotation, the angle of twist of the blade is 15°. Calculate (a) the relative wind speed on the blade 15 m from the axis of rotation; (b) the angle of attack on the blade 15 m from the centre of rotation.`],
          ['ans'],
          ['t', R`**Answers:** (a) 20.5 m/s; (b) 8.0°.`],
          ['m', R`\omega = \frac{2\pi\times12}{60} = 1.257\ \text{rad/s},\qquad u_{rot} = \omega r = 1.257\times15 = 18.85\ \text{m/s}`],
          ['m', R`\text{(a)}\ u_{rel} = \sqrt{u_\infty^2 + u_{rot}^2} = \sqrt{8^2 + 18.85^2} = \sqrt{419.3} = 20.5\ \text{m/s}`],
          ['t', R`(b) The angle between $u_{rel}$ and the plane of rotation comes from the triangle; then subtract the twist (14.8):`],
          ['m', R`\phi = \tan^{-1}\frac{u_\infty}{u_{rot}} = \tan^{-1}\frac{8}{18.85} = 23.0^\circ \;\Rightarrow\; \alpha = \phi - \beta = 23.0^\circ - 15^\circ = 8.0^\circ`],
          ['t', R`That is almost exactly the best-$C_l/C_d$ angle of the thick aerofoil in Q3's figure — the twist has been chosen well for this section.`]
        ]],
        ['ex', 'Q3 — a basic BEM calculation: element torque, rotor power, effect of the hub', [
          ['t', R`The swept radius of the **3-bladed** turbine of Q2 is 30 m and the chord of each blade 15 m from the centre is 1.5 m. Conduct a basic BEM calculation with element width 2 m. Take air density 1.293 kg/m³ and the lift and drag coefficients from Fig. 1 (thick aerofoil).`],
          ['t', R`(a) Calculate the torque applied to the generator by the element between 14 m and 16 m on a **single** blade. (b) The hub radius is 2 m and the blades begin immediately outside it. The lift and drag on the element of (a) are a reasonable average along the blade. Calculate the total power extracted by the turbine. (c) If you disregard the hub (assume it is small), what impact does that have on your calculations?`],
          ['svg', 'tf_blades_clcd_q3', 'Problem Sheet 2, Fig. 1 (thick aerofoil), redrawn. At α = 8.0° (from Q2): Cl ≈ 0.86, Cd ≈ 0.07.'],
          ['ans'],
          ['t', R`**Answers:** (a) 3.31 kN m; (b) 186 kW; (c) +0.45 % (negligible).`],
          ['t', R`**(a)** The element is centred on $r = 15$ m, so Q2's values apply: $u_{rel}^2 = 419.3$ m²/s², $\phi = 23.0^\circ$, $\alpha = 8.0^\circ$. From Fig. 1 at $\alpha = 8^\circ$: $C_l \approx 0.86$, $C_d \approx 0.07$ (read 0.072). Common factor:`],
          ['m', R`\tfrac12\rho u_{rel}^2 c\,\delta r = \tfrac12(1.293)(419.3)(1.5)(2) = 813.2\ \text{N}`],
          ['m', R`\delta L = 813.2\times0.86 = 699\ \text{N},\qquad \delta D = 813.2\times0.07 = 56.9\ \text{N}`],
          ['m', R`\delta Q = \delta L\sin\phi - \delta D\cos\phi = 699(0.3907) - 56.9(0.9205) = 273.2 - 52.4 = 221\ \text{N}`],
          ['m', R`\delta\tau = r\,\delta Q = 15\times221 = 3.31\times10^{3}\ \text{N m}`],
          ['t', R`**(b)** The blades run from $r = 2$ m to 30 m: 28 m, so **14 elements** of 2 m, centred at $r_i = 3, 5, 7, \ldots, 29$ m. "Lift and drag are a reasonable average along the blade" means every element is given the same $\delta Q = 221$ N, so only the moment arm changes. (This simplification is exactly what the question asks for — see (c) for how good it is.)`],
          ['m', R`\sum_{i=1}^{14} r_i = 3 + 5 + \cdots + 29 = 14\times16 = 224\ \text{m}`],
          ['m', R`\tau = Z\,\delta Q\sum r_i = 3\times221\times224 = 1.484\times10^{5}\ \text{N m}`],
          ['m', R`\dot W_{turbine} = \tau\omega = 1.484\times10^{5}\times1.257 = 1.86\times10^{5}\ \text{W} \approx 186\ \text{kW}`],
          ['t', R`Sanity check against Topic 13: the wind carries $\tfrac12\rho\pi R^2u_\infty^3 = \tfrac12(1.293)\pi(30^2)(8^3) = 936$ kW and the Betz limit is $\tfrac{16}{27}\times936 = 555$ kW. 186 kW is a power coefficient of 0.20 — below Betz, so plausible. No $\eta_{EM}$ is given, so this is the **mechanical** power at the shaft; the electrical power would be $\eta_{EM}$ times it.`],
          ['t', R`**(c)** Without the hub the blade runs from 0 to 30 m: one extra element, centred at $r = 1$ m. $\sum r_i$ becomes 225 instead of 224:`],
          ['m', R`\tau = 3\times221\times225 = 1.491\times10^{5}\ \text{N m},\quad \dot W = 187\ \text{kW}\quad (+\tfrac{1}{224} = +0.45\,\%)`],
          ['t', R`Ignoring the hub barely changes torque or power: the extra element is at the smallest radius, so it has the smallest moment arm (and in reality, with $u_{rel}$ near $u_\infty$, the least lift too — the "average" $\delta Q$ over-states it). Disregarding a small hub is therefore a reasonable simplification for torque and power. It matters more for **thrust**, which has no $r$ weighting: 15 elements instead of 14 is +7 % (see Q4).`]
        ]],
        ['ex', 'Q4 — torque on the foundations', [
          ['t', R`The centre of the axis of rotation of the Q3 turbine is 45 m above the ground. Calculate the torque applied to the turbine's foundations.`],
          ['ans'],
          ['t', R`**Answer:** 1.26 MN m.`],
          ['t', R`The foundations feel the **overturning moment** of the thrust, which acts along the axis at hub height (only the rotor's thrust is counted — drag on the tower and nacelle is ignored). Thrust on the average element (same Q3 numbers):`],
          ['m', R`\delta T = 813.2\,(C_l\cos\phi + C_d\sin\phi) = 813.2\,(0.86\times0.9205 + 0.07\times0.3907) = 813.2\times0.819 = 666\ \text{N}`],
          ['m', R`T = Z\times14\times\delta T = 3\times14\times666 = 2.80\times10^{4}\ \text{N}`],
          ['m', R`M = T\,h = 2.80\times10^{4}\times45 = 1.26\times10^{6}\ \text{N m}`],
          ['t', R`(If the hub is disregarded as in Q3(c), $T = 3\times15\times666 = 3.00\times10^4$ N and $M = 1.35$ MN m.) Notice the thrust (28 kN) is far bigger than the total torque force ($3\times14\times221 = 9.3$ kN): for a lift-driven rotor most of the aerodynamic force pushes **downwind**.`]
        ]],
        ['ex', 'Q5 — design limits: negative angle of attack, wind shear, more blades', [
          ['t', R`A **2-blade** turbine has swept radius 15 m and hub radius 1 m; its axis is 18 m above the ground. The blades have a **constant** angle of twist of 16°, and the aerofoil is the same along the whole blade: a **symmetric** section of chord 4 m (Fig. 2).`],
          ['t', R`(a) If the wind speed is 7 m/s, calculate the maximum rotational speed (rpm) before a negative angle of attack occurs at the blade tips. (b) The wind speed measured 3 m above the ground is just 60 % of that measured 10 m above the ground. What concern does this raise? (c) The owner considers a second turbine with identical blades but **6 blades**. What advice would you give?`],
          ['ans'],
          ['t', R`**Answer:** (a) 15.5 rpm; (b), (c) discussion below.`],
          ['t', R`**(a)** $\alpha = \phi - \beta$ goes negative when $\phi < \beta$. $\phi$ is **smallest at the tip** (largest $\omega r$), so the tips go first. The limit is $\phi = \beta = 16^\circ$ at $r = R$:`],
          ['m', R`\tan 16^\circ = \frac{u_\infty}{\omega R} \;\Rightarrow\; \omega R = \frac{7}{\tan16^\circ} = \frac{7}{0.2867} = 24.4\ \text{m/s}`],
          ['m', R`\omega = \frac{24.4}{15} = 1.627\ \text{rad/s} \;\Rightarrow\; N = \frac{60\times1.627}{2\pi} = 15.5\ \text{rpm}`],
          ['t', R`(Tip speed ratio at the limit $\lambda = 24.4/7 = 3.5$.) For a **symmetric** section $C_l = 0$ at $\alpha = 0$, so the tip actually stops driving slightly *before* 15.5 rpm: $\delta Q = \tfrac12\rho u_{rel}^2c\,\delta r(C_l\sin\phi - C_d\cos\phi)$ is already negative when $C_l = 0$ because drag remains. Beyond this speed the tips brake the rotor.`],
          ['t', R`**(b)** The rotor sweeps from $18 - 15 = 3$ m to $18 + 15 = 33$ m above the ground. A 40 % drop in wind speed between 10 m and 3 m shows a strong **atmospheric boundary layer** (wind shear) right where the lower part of the disc runs. Consequences:`],
          ['t', R`• A blade sees a different $u_\infty$ at the top and the bottom of each revolution, so $\phi$ and $\alpha$ swing every turn: **cyclic loading** (fatigue, vibration) and lower power than a single-$u_\infty$ estimate predicts.`],
          ['t', R`• Near the bottom of the sweep the lower $u_\infty$ makes $\phi$ smaller, so with constant twist the tip reaches **negative $\alpha$** at a lower rpm than in (a) — the blade brakes there.`],
          ['t', R`• BEM's assumption of a uniform, axial wind (§14.11) is poor; and a 3 m tip clearance is a **safety** concern. A taller tower (or a smaller rotor) would help.`],
          ['t', R`**(c)** Advise against simply going to 6 blades. The blades are already wide (chord 4 m on a 15 m radius), so 6 of them give a high **solidity**: the trailing edge of one blade is close to the leading edge of the next and each blade works in the **wake** of the one in front, reducing efficiency (BEM's no-interaction assumption fails above about 4 blades). More blades suit a **low tip-speed-ratio, high-torque** machine such as a water pump, but for electricity a 2–3 blade rotor at higher $\lambda$ is more efficient (§14.5 table). More blades also mean more cost, weight and thrust on the tower. If more torque is wanted, redesign the blades (narrower, twisted to suit the new $\lambda$) rather than reuse these.`]
        ]],
        ['ex', 'Q6 — parked rotor in a storm: torque on the brake', [
          ['t', R`In strong winds of 20 m/s the turbine of Q5 cannot operate safely and the brake stops it spinning. Fig. 3 gives $C_L$ and $C_D$ for the blades. (a) What are the coefficients of lift and drag? (b) Calculate the torque applied to the brake.`],
          ['svg', 'tf_blades_ps_fig3', 'Problem Sheet 2, Fig. 3, redrawn: coefficients over a wide range of α, with the attached / separating / stalled bands. Gold line at α = 74°.'],
          ['ans'],
          ['t', R`**Answers:** (a) $C_L \approx 0.61$, $C_D \approx 0.83$; (b) 141 kN m.`],
          ['t', R`**(a)** Stationary rotor: $\omega = 0$, so $u_{rot} = 0$ and $u_{rel} = u_\infty = 20$ m/s, straight along the axis. The relative wind is therefore at $\phi = 90^\circ$ to the plane of rotation, and with $\beta = 16^\circ$:`],
          ['svg', 'tf_blades_parked', 'Parked rotor: u_rel = u∞ along the axis, so φ = 90° and α = 90° − 16° = 74°. Lift lies in the plane of rotation; drag lies along the wind.'],
          ['m', R`\alpha = \phi - \beta = 90^\circ - 16^\circ = 74^\circ \;\Rightarrow\; C_L \approx 0.61,\quad C_D \approx 0.83\ \ (\text{Fig. 3, deep stall})`],
          ['t', R`**(b)** With $\phi = 90^\circ$: $\sin\phi = 1$, $\cos\phi = 0$, so $\delta Q = \delta L$ (all the lift turns the rotor) and $\delta T = \delta D$. Every element now sees the **same** $u_{rel}$, $\alpha$ and $c$, so only $r$ varies along the blade, from 1 m to 15 m. No density is given; use the 1.293 kg/m³ of Q3:`],
          ['m', R`\tau = Z\cdot\tfrac12\rho u_\infty^2 c\,C_L\sum r_i\,\delta r = Z\cdot\tfrac12\rho u_\infty^2 c\,C_L\,\frac{R^2 - r_{hub}^2}{2}`],
          ['t', R`(For equal elements centred at $r_i$, $\sum r_i\,\delta r = (R^2 - r_{hub}^2)/2$ exactly, whatever $\delta r$ you choose — e.g. 14 elements of 1 m give $\sum r_i = 112$ m.)`],
          ['m', R`\tau = 2\times\tfrac12(1.293)(20^2)(4)(0.61)\times\frac{15^2 - 1^2}{2} = 1262\times112 = 1.41\times10^{5}\ \text{N m}`],
          ['t', R`The brake must react about **141 kN m** (134 kN m if $\rho = 1.225$ kg/m³). The blades are in deep stall ($\alpha = 74^\circ$), yet a parked rotor still produces a large torque because the whole blade sees the full 20 m/s and all of its lift acts in the plane of rotation. The parked thrust is $T = 2\times\tfrac12(1.293)(400)(4)(0.83)(14) = 24.0$ kN, about 430 kN m about the ground at 18 m.`]
        ]]
      ]
    },
    {
      num: 'Ex 14b', title: 'Extra Practice (not from the course)', wk: true,
      blocks: [
        ['warn', 'Note', [
          R`These three questions are **not from the course material**. They were written for these notes to practise the same methods, with full solutions. Coefficients come from the thick-aerofoil curve of §14.3.`
        ]],
        ['ex', 'Extra practice 1 (not from the course) — coefficients from a wind-tunnel test', [
          ['t', R`A model blade section of chord 0.5 m spans a 1 m wide wind tunnel. At 20 m/s ($\rho = 1.225$ kg/m³) and a fixed angle of attack, the balance measures a lift of 120 N and a drag of 9 N. (a) Find $C_l$, $C_d$ and $C_l/C_d$. (b) A full-size element with the same section and $\alpha$ has chord 2 m and width $\delta r = 1.5$ m, and sees $u_{rel} = 60$ m/s. Predict its lift and drag.`],
          ['ans'],
          ['t', R`**Answers:** (a) $C_l = 0.980$, $C_d = 0.0735$, $C_l/C_d = 13.3$; (b) 6.48 kN, 486 N.`],
          ['m', R`\tfrac12\rho u^2 c = \tfrac12(1.225)(20^2)(0.5) = 122.5\ \text{N/m} \;\Rightarrow\; C_l = \frac{120}{122.5} = 0.980,\quad C_d = \frac{9}{122.5} = 0.0735,\quad \frac{C_l}{C_d} = 13.3`],
          ['t', R`(The tunnel spans the whole 1 m, so the measured forces are per unit span, as (14.2) needs.) (b) Same section and $\alpha$ → same coefficients (strictly, the Reynolds number should match too — Topics 2–3):`],
          ['m', R`\delta L = \tfrac12(1.225)(60^2)(2)(0.980)(1.5) = 6.48\times10^{3}\ \text{N},\qquad \delta D = \tfrac12(1.225)(60^2)(2)(0.0735)(1.5) = 486\ \text{N}`]
        ]],
        ['ex', 'Extra practice 2 (not from the course) — designing the twist', [
          ['t', R`A rotor of radius 30 m is to run at $\lambda = 6$ in a 10 m/s wind. Its aerofoil works best at $\alpha = 6^\circ$. Find $\omega$, and $u_{rel}$, $\phi$ and the required twist $\beta$ at $r = 5$, 15 and 30 m.`],
          ['ans'],
          ['t', R`**Answers:** $\omega = 2$ rad/s; $\beta = 39.0°$, 12.4°, 3.5°.`],
          ['m', R`\omega = \frac{\lambda u_\infty}{R} = \frac{6\times10}{30} = 2.0\ \text{rad/s}`],
          ['m', R`\begin{array}{c|c|c|c|c} r\ (\text{m}) & \omega r\ (\text{m/s}) & u_{rel}\ (\text{m/s}) & \phi = \tan^{-1}(10/\omega r) & \beta = \phi - 6^\circ \\ \hline 5 & 10 & 14.1 & 45.0^\circ & 39.0^\circ \\ 15 & 30 & 31.6 & 18.4^\circ & 12.4^\circ \\ 30 & 60 & 60.8 & 9.5^\circ & 3.5^\circ \end{array}`],
          ['t', R`The twist falls from 39° near the root to 3.5° at the tip — the strongly twisted blade of §14.6. The tip also sees over four times the root's relative wind speed, i.e. about 19 times the dynamic pressure.`]
        ]],
        ['ex', 'Extra practice 3 (not from the course) — a three-element BEM and the electrical power', [
          ['t', R`A 3-blade turbine ($R = 20$ m, hub radius 2 m) turns at 2.4 rad/s in a 9 m/s wind ($\rho = 1.225$ kg/m³). Model each blade as three 6 m elements centred at $r = 5$, 11 and 17 m, with chords 1.8, 1.4 and 1.0 m. The twist holds every element at $\alpha = 7^\circ$, where $C_l = 0.75$, $C_d = 0.063$. Find (a) the twist at each element, (b) the rotor torque and thrust, (c) the shaft power and the electrical power if $\eta_{EM} = 0.92$, and check against the Betz limit.`],
          ['ans'],
          ['t', R`**Answers:** (b) $\tau = 65.7$ kN m, $T = 26.0$ kN; (c) 158 kW shaft, 145 kW electrical.`],
          ['t', R`Per element: $u_{rot} = 2.4r$, $u_{rel}^2 = 81 + u_{rot}^2$, $\phi = \tan^{-1}(9/u_{rot})$, $\beta = \phi - 7^\circ$. Ring forces from (14.14) with $\tfrac{Z}{2}\rho\,\delta r = \tfrac32(1.225)(6) = 11.03$ kg/m:`],
          ['m', R`\begin{array}{c|c|c|c|c|c} r\ (\text{m}) & c\ (\text{m}) & u_{rot}\ (\text{m/s}) & u_{rel}^2\ (\text{m}^2/\text{s}^2) & \phi & \beta \\ \hline 5 & 1.8 & 12.0 & 225.0 & 36.9^\circ & 29.9^\circ \\ 11 & 1.4 & 26.4 & 778.0 & 18.8^\circ & 11.8^\circ \\ 17 & 1.0 & 40.8 & 1745.6 & 12.4^\circ & 5.4^\circ \end{array}`],
          ['m', R`\begin{array}{c|c|c|c|c|c} r\ (\text{m}) & C_l\sin\phi - C_d\cos\phi & C_l\cos\phi + C_d\sin\phi & \delta Q_i\ (\text{N}) & r_i\,\delta Q_i\ (\text{N m}) & \delta T_i\ (\text{N}) \\ \hline 5 & 0.3996 & 0.6378 & 1784 & 8921 & 2848 \\ 11 & 0.1824 & 0.7302 & 2190 & 24\,089 & 8768 \\ 17 & 0.1000 & 0.7460 & 1925 & 32\,730 & 14\,357 \end{array}`],
          ['t', R`e.g. first row: $\delta Q_1 = 11.03\times225\times1.8\times0.3996 = 1784$ N. (a) Twist: 29.9°, 11.8°, 5.4° from root to tip.`],
          ['m', R`\text{(b)}\ \tau = \sum r_i\,\delta Q_i = 8921 + 24\,089 + 32\,730 = 6.57\times10^{4}\ \text{N m},\qquad T = \sum\delta T_i = 2.60\times10^{4}\ \text{N}`],
          ['m', R`\text{(c)}\ \dot W_{turbine} = \tau\omega = 6.57\times10^{4}\times2.4 = 1.58\times10^{5}\ \text{W},\qquad \dot W_{elec} = 0.92\times158 = 145\ \text{kW}`],
          ['m', R`\tfrac12\rho\pi R^2u_\infty^3 = \tfrac12(1.225)\pi(20^2)(9^3) = 561\ \text{kW};\quad \frac{158}{561} = 0.28 < \frac{16}{27} = 0.593\ \checkmark`],
          ['t', R`Notice that the outer element, although its chord is the smallest, gives half the torque: $r$ and $u_{rel}^2$ both grow outwards. Here $\lambda = 2.4\times20/9 = 5.3$.`]
        ]]
      ]
    }
  ]
}
