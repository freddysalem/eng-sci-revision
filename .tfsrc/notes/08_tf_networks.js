{
  key: 'tf_networks', area: 'pipe', num: '8', week: 'Week 4',
  name: 'Minor Losses, Pipe Networks and System Design',
  triggers: 'valves, bends, elbows, tees · entrance/exit loss · sudden expansion/contraction · Borda–Carnot · vena contracta · contraction coefficient Cc · loss coefficient k (ξ) · reference velocity · pump between two tanks · pipes in series/parallel · equivalent resistance K · branching network · draining tank · iterate',
  sections: [
    {
      num: '', title: 'Revision Objectives — Minor Losses, Pipe Networks and System Design',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Explain **separation**: why it needs inertia, why an **adverse pressure gradient** causes it, and why only creeping (very low $Re$) flow is free of it.`,
          R`Use the **loss coefficient** $k = \Delta p/\tfrac12\rho u^2$ with tabulated values, always tied to a stated **reference velocity**.`,
          R`Derive the sudden-expansion (**Borda–Carnot**) loss from momentum + energy, and apply it to the **vena contracta** of a sudden contraction.`,
          R`Write the full **system equation**: ends + major + minor + gravity = pump rise, and the pump power.`,
          R`Solve pipes in **series** and **parallel** and branching networks, iterating on $f$ or combining resistances $K$.`
        ]]
      ]
    },
    {
      num: '8.1', title: 'Separation',
      blocks: [
        ['para', R`Any time a flow must **change direction** (a sudden change in wall position, a bend, a valve), it needs a force. In a fluid that force comes from the **pressure gradient**, which is relatively weak. If it isn't enough, the flow **separates** from the wall, leaving a region of turbulent, recirculating, dissipating fluid that isn't part of the through-flow — like the **wake** behind a bluff body.`],
        ['para', R`The mechanism is an **adverse pressure gradient** — pressure rising in the flow direction, as in an expansion or on the outside of a bend. The core flow has enough momentum to push into the rising pressure, but the slow fluid next to the wall does not: it decelerates until $\partial u/\partial y = 0$ at the wall (the **separation point**). Downstream of that point the near-wall fluid is pushed **backwards** and a recirculating wake forms.`],
        ['svg', 'tf_separation', 'Rising pressure decelerates the near-wall fluid until du/dy = 0 at the wall (separation); downstream the flow reverses and a wake forms.'],
        ['warn', 'Key Insight', [
          R`Separation is an **inertial** effect (it's about $\rho$). It is absent only when viscous forces dominate everywhere — **creeping flow** at very low $Re$ — where the fluid follows the walls.`,
          R`**Laminar is not the same as creeping.** A laminar boundary layer separates **more easily** than a turbulent one (flow past a cylinder separates from $Re \approx 5$ upwards, yet its boundary layer stays laminar up to $Re \sim 2\times10^5$). Turbulence mixes fast fluid towards the wall, so it **delays** separation.`,
          R`The pressure loss is energy dissipated by turbulence and induced flows (e.g. **secondary flows** spiralling round bends). The disturbance persists for **75–100 diameters**, so two fittings close together may lose less than the sum of their individual losses.`
        ]],
        ['warn', 'Note', [
          R`The course notes say separation does not occur in "viscously-dominated (i.e. laminar) flows". Read that as **creeping / very-low-$Re$** flow. The practical point stands: in slow viscous pipe flows the minor losses are usually small next to friction, so the course only adds them for inertial (turbulent) flows.`
        ]]
      ]
    },
    {
      num: '8.2', title: 'Minor Losses and Loss Coefficients',
      blocks: [
        ['para', R`**Major loss** = wall friction along the pipe. **Minor losses** = extra losses at fittings: changes in diameter (including entrances and exits), bends, elbows, tees, valves. "Do not be deceived by the name": minor losses can be **larger** than the major loss.`],
        ['eq', [
          ['Loss coefficient', R`k\ (\text{or } \xi) = \frac{\Delta p}{\tfrac12\rho u^2} = \frac{h_l}{u^2/2g}`, '[–]', 'A type of Euler number; measured, not derived (with few exceptions). $u$ = the stated reference velocity.'],
          ['Head loss', R`h_l = \frac{\Delta p}{\rho g}`, '[m]', 'Civil-engineering origin.'],
          ['Total minor loss', R`\Delta p_{minor} = \left(\sum k\right)\tfrac12\rho u_{ref}^2`, '[Pa]', 'Only valid once every $k$ refers to the same $u_{ref}$.'],
          ['Changing reference velocity', R`k_{ref} = k\left(\frac{u}{u_{ref}}\right)^2 = k\left(\frac{A_{ref}}{A}\right)^2`, '[–]', 'Same Δp, different velocity head.']
        ]],
        ['para', R`**Every $k$ belongs to a velocity.** A $k$ quoted on $u_1$ cannot be added to one quoted on $u_2$: the loss is $k\,\tfrac12\rho u^2$, so convert first with $k_{ref} = k(u/u_{ref})^2$. Fitting tables use the velocity in the pipe the fitting sits in.`],
        ['ex', 'Mini-example — summing losses across a diameter change', [
          ['t', R`A 50 mm line contains a globe valve ($k = 10$) and then expands to 100 mm, where there are two flanged 90° elbows ($k = 0.3$ each, on the 100 mm velocity). Find $\sum k$ referred to the 50 mm velocity $u_1$ (ignore the expansion itself here).`],
          ['ans'],
          ['m', R`u_2 = u_1\left(\frac{50}{100}\right)^2 = \frac{u_1}{4} \;\Rightarrow\; k_{elbows,\,u_1} = 0.6\left(\frac{u_2}{u_1}\right)^2 = \frac{0.6}{16} = 0.0375`],
          ['m', R`\sum k\ (\text{on } u_1) = 10 + 0.0375 = 10.04`],
          ['t', R`Simply adding $10 + 0.6$ would be wrong: the 0.6 belongs to the slower 100 mm velocity.`]
        ]],
        ['html', '<table style="border-collapse:collapse;width:100%;font-size:13px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:6px 9px;border-bottom:1px solid var(--kE7E0D0)">Fitting</th><th style="padding:6px 9px;border-bottom:1px solid var(--kE7E0D0)">k</th><th style="padding:6px 9px;border-bottom:1px solid var(--kE7E0D0)">Fitting</th><th style="padding:6px 9px;border-bottom:1px solid var(--kE7E0D0)">k <span style="font-weight:400">(flanged / threaded)</span></th></tr></thead><tbody>' +
          [['<i>Valves</i>', '', '<i>Elbows and bends</i>', ''], ['Globe valve, fully open', '10', 'Elbow 90°, regular', '0.3 / 1.5'], ['Angle valve, fully open', '2', 'Elbow 90°, long radius', '0.2 / 0.7'], ['Gate valve, fully open', '0.15', 'Elbow 45°, long radius (threaded)', '— / 0.2'], ['Gate valve, ¼ closed', '0.26', 'Elbow 45°, regular (threaded)', '— / 0.4'], ['Gate valve, ½ closed', '2.1', '180° return bend', '0.2 / 1.5'], ['Gate valve, ¾ closed', '17', '<i>Tee junctions</i>', ''], ['Swing check, forward flow', '2', 'Tee, line (straight-through) flow', '0.2 / 0.9'], ['Swing check, back flow', '∞', 'Tee, branch flow', '1 / 2'], ['<i>Entrance and exit (key values)</i>', '', '', ''], ['Pipe entrance, sharp, from a large tank', '0.5', 'Pipe exit into a large tank', '1.0 (all of ½ρu² lost)']].map((r) => '<tr' + (r[1] === '' && r[0].indexOf('<i>') === 0 ? ' style="color:var(--k8C8273)"' : '') + '><td style="padding:5px 9px;border-bottom:1px solid var(--kE7E0D0)">' + r[0] + '</td><td style="padding:5px 9px;border-bottom:1px solid var(--kE7E0D0)">' + r[1] + '</td><td style="padding:5px 9px;border-bottom:1px solid var(--kE7E0D0)">' + r[2] + '</td><td style="padding:5px 9px;border-bottom:1px solid var(--kE7E0D0)">' + r[3] + '</td></tr>').join('') + '</tbody></table>'],
        ['para', R`Tabulated $k$ values scatter a lot and depend on size, geometry and $Re$. For equipment, use the manufacturer's figure.`],
        ['warn', 'Note', [
          R`Slide errata: the course table labels these rows "Entrance to a large tank 0.5" and "Exit from a large tank 1.0". The values are the standard ones above — 0.5 for flow **into a pipe from a tank**, 1.0 for flow **out of a pipe into a tank**.`
        ]]
      ]
    },
    {
      num: '8.3', title: 'Sudden Expansions and Contractions',
      blocks: [
        ['para', R`A **sudden expansion** is the one minor loss that can be calculated, from a momentum + mass + energy balance across the step. It matches experiment to a few per cent — the **Borda–Carnot** result. Below, $k_{u_1}$ means $k$ on $\tfrac12\rho u_1^2$ (upstream, small pipe) and $k_{u_2}$ means $k$ on $\tfrac12\rho u_2^2$ (downstream, large pipe). Here $\Delta p_{loss}$ is the **loss**, i.e. the drop in **total** pressure $p + \tfrac12\rho u^2$ — not the change in static pressure.`],
        ['disp', [ R`\boxed{\begin{gathered}\Delta p_{loss} = \tfrac12\rho(u_1 - u_2)^2 \\[4pt] k_{u_1} = \left(1 - A_1/A_2\right)^2 \\[4pt] k_{u_2} = \left(A_2/A_1 - 1\right)^2\end{gathered}} \tag{8.1}` ]],
        ['deriv', 'Derivation — the Borda–Carnot loss', [
          ['svg', 'tf_expansion_cv', 'Control volume from the step face (section 1) to where the flow has re-attached (section 2). The corner fluid is nearly stagnant, so p₁ acts over the whole area A₂.'],
          ['t', R`**Mass:** $u_1A_1 = u_2A_2$, so $\dot m = \rho u_2A_2$.`],
          ['t', R`**Momentum** on the CV ($x$-direction; wall shear neglected over the short length). The pressure on the step face is $p_1$ over the **whole** of $A_2$ because the trapped corner fluid is almost still:`],
          ['m', R`(p_1 - p_2)A_2 = \dot m(u_2 - u_1) = \rho A_2u_2(u_2 - u_1) \;\Rightarrow\; p_2 - p_1 = \rho u_2(u_1 - u_2)`],
          ['t', R`**Energy** (Bernoulli with a loss term) between the same sections:`],
          ['m', R`p_1 + \tfrac12\rho u_1^2 = p_2 + \tfrac12\rho u_2^2 + \Delta p_{loss}`],
          ['t', R`**Subtract** — substitute $p_1 - p_2$ from the momentum result:`],
          ['m', R`\Delta p_{loss} = \tfrac12\rho(u_1^2 - u_2^2) - \rho u_2(u_1 - u_2) = \tfrac12\rho(u_1 - u_2)(u_1 + u_2 - 2u_2) = \tfrac12\rho(u_1 - u_2)^2`],
          ['t', R`**Express as $k$:** with $u_2 = u_1A_1/A_2$, $\Delta p_{loss} = \tfrac12\rho u_1^2(1 - A_1/A_2)^2$; with $u_1 = u_2A_2/A_1$, $\Delta p_{loss} = \tfrac12\rho u_2^2(A_2/A_1 - 1)^2$. Same loss, two reference velocities.`]
        ]],
        ['para', R`The **static** pressure actually **rises** across the expansion (the flow slows down), but by less than the ideal Bernoulli amount because of the loss:`],
        ['disp', [ R`p_2 - p_1 = \rho u_2(u_1 - u_2) = \tfrac12\rho(u_1^2 - u_2^2) - \Delta p_{loss}` ]],
        ['svg', 'tf_expansion', 'Sudden expansion: the jet from the small pipe spreads out, trapping recirculating vortices in the corners — that dissipation is the loss.'],
        ['para', R`As $A_2 \to \infty$ (a pipe discharging into a large tank), $k \to 1$ on $u_1$: **all** the jet's kinetic energy is dissipated — the **exit loss**.`],
        ['warn', 'Note', [
          R`Course-notes erratum: the written notes give $k = (A_1/A_2 - 1)^2$ and say it is based on $u_2$, the larger-pipe velocity. That expression equals $(1 - A_1/A_2)^2$, which is the coefficient on $u_1$ (it is the one that gives $k \to 1$ at an exit). Use eq. (8.1) as written above.`
        ]],
        ['para', R`A **sudden contraction** is less certain. Inertia makes the flow **neck down** to a **vena contracta** of area $A_c < A_2$ just downstream of the step. The acceleration into the neck loses little; most of the loss is the **re-expansion** from $A_c$ to $A_2$, which is just Borda–Carnot applied from $A_c$ to $A_2$:`],
        ['svg', 'tf_contraction', 'Sudden contraction: the flow necks down to the vena contracta (the narrowest jet area), then re-expands to fill the small pipe — most of the loss is in the re-expansion.'],
        ['disp', [ R`u_c = u_2\frac{A_2}{A_c} = \frac{u_2}{C_c}:\qquad \Delta p_{loss} = \tfrac12\rho(u_c - u_2)^2 = \tfrac12\rho u_2^2\left(\frac{A_2}{A_c} - 1\right)^2` ]],
        ['disp', [ R`\boxed{\begin{gathered}k = \left(\frac{A_2}{A_c} - 1\right)^2 = \left(\frac{1}{C_c} - 1\right)^2 \text{ on } \tfrac12\rho u_2^2 \\[4pt] C_c = \frac{A_c}{A_2} = \text{fn}\!\left(\frac{A_2}{A_1}\right)\end{gathered}} \tag{8.2}` ]],
        ['para', R`The **contraction coefficient** $C_c$ is measured. Standard (Weisbach) values, with the $k$ they give and the common empirical fit $k \approx 0.42(1 - A_2/A_1)$ for comparison:`],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:480px;font-size:13px;margin:4px 0;color:var(--k3A332B);text-align:center"><thead><tr style="color:var(--k8C8273)"><th style="padding:5px 10px;border-bottom:1px solid var(--kE7E0D0)">A₂/A₁</th><th style="padding:5px 10px;border-bottom:1px solid var(--kE7E0D0)">C<sub>c</sub></th><th style="padding:5px 10px;border-bottom:1px solid var(--kE7E0D0)">k = (1/C<sub>c</sub> − 1)²</th><th style="padding:5px 10px;border-bottom:1px solid var(--kE7E0D0)">0.42(1 − A₂/A₁)</th></tr></thead><tbody>' +
          [['0', '0.617', '0.38', '0.42'], ['0.1', '0.624', '0.36', '0.38'], ['0.2', '0.632', '0.34', '0.34'], ['0.3', '0.643', '0.31', '0.29'], ['0.4', '0.659', '0.27', '0.25'], ['0.5', '0.681', '0.22', '0.21'], ['0.6', '0.712', '0.16', '0.17'], ['0.7', '0.755', '0.11', '0.13'], ['0.8', '0.813', '0.05', '0.08'], ['0.9', '0.892', '0.02', '0.04'], ['1.0', '1.00', '0', '0']].map((r) => '<tr>' + r.map((x) => '<td style="padding:4px 10px;border-bottom:1px solid var(--kE7E0D0)">' + x + '</td>').join('') + '</tr>').join('') + '</tbody></table>'],
        ['eq', [
          ['Sudden contraction', R`k = \left(\frac{1}{C_c} - 1\right)^2 \ \text{on } \tfrac12\rho u_2^2`, '[–]', '$C_c$ from the table above; empirically $k \approx 0.42(1 - A_2/A_1)$.'],
          ['Sharp pipe entrance', R`k \to 0.5 \ \ (A_1 \to \infty)`, '[–]', 'Pipe flush with the wall of a large reservoir ($C_c \approx 0.59$); larger if the pipe protrudes.'],
          ['Pipe exit into a tank', R`k = 1.0 \ \text{on the pipe velocity}`, '[–]', 'Borda–Carnot with A₂ → ∞.']
        ]],
        ['warn', 'Note', [
          R`The vena-contracta formula with Weisbach's $C_c = 0.617$ gives $k = 0.38$ at $A_2/A_1 \to 0$, a little below the measured sharp-entrance value 0.5 (which corresponds to $C_c \approx 0.59$). The extra loss comes from non-uniform flow and friction near the neck. For exams, use the course's limit **0.5** for a sharp entrance and the table for a contraction between two pipes. (The course notes call the $A_1 \to \infty$ limit an "exit loss"; it is the **entrance** loss — flow goes from the reservoir into the pipe.)`
        ]],
        ['ex', 'Worked example — expansion and contraction, 50 mm ↔ 100 mm', [
          ['t', R`Water ($\rho = 1000$ kg/m³) flows at $2$ m/s in a 50 mm pipe. (a) It suddenly expands into a 100 mm pipe: find $k$ (both ways), the loss and the static pressure change. (b) Flow in the other direction: from the 100 mm pipe into the 50 mm pipe (so $u_2 = 2$ m/s in the small pipe). Find the loss and the static pressure drop.`],
          ['ans'],
          ['t', R`**(a)** $A_1/A_2 = (50/100)^2 = 0.25$, so $u_1 = 2$ m/s and $u_2 = 0.5$ m/s.`],
          ['m', R`k_{u_1} = (1 - 0.25)^2 = 0.5625,\qquad k_{u_2} = (4 - 1)^2 = 9`],
          ['m', R`\Delta p_{loss} = \tfrac12(1000)(2 - 0.5)^2 = 1125\ \text{Pa}`],
          ['m', R`\text{check: } 0.5625\times\tfrac12(1000)(2^2) = 9\times\tfrac12(1000)(0.5^2) = 1125\ \text{Pa}\ \checkmark`],
          ['m', R`p_2 - p_1 = \rho u_2(u_1 - u_2) = 1000(0.5)(1.5) = +750\ \text{Pa}`],
          ['t', R`That is the ideal Bernoulli rise of 1875 Pa minus the 1125 Pa loss.`],
          ['t', R`**(b)** $A_2/A_1 = 0.25$, so interpolating the table $C_c \approx 0.64$; $u_c = 2/0.6375 = 3.14$ m/s and $u_1 = 0.5$ m/s.`],
          ['m', R`k = \left(\frac{1}{0.6375} - 1\right)^2 = 0.32 \qquad(\text{fit: } 0.42\times0.75 = 0.315)`],
          ['m', R`\Delta p_{loss} = 0.32\times\tfrac12(1000)(2^2) \approx 650\ \text{Pa}`],
          ['m', R`p_1 - p_2 = \tfrac12\rho(u_2^2 - u_1^2) + \Delta p_{loss} = 1875 + 650 \approx 2.5\ \text{kPa}`],
          ['t', R`The expansion loses almost twice as much as the contraction, even though the static pressure **rises** through it.`]
        ]]
      ]
    },
    {
      num: '8.4', title: 'The System Equation',
      blocks: [
        ['para', R`You now have every tool. Apply the energy equation from point 1 (start) to point 2 (end) of a pipe run. The pump adds a pressure rise $\Delta p_{pump}$; friction, fittings and the climb take it away:`],
        ['disp', [ R`\boxed{\begin{aligned}\left(p_1 + \tfrac12\rho u_1^2\right) + \Delta p_{pump} &= \left(p_2 + \tfrac12\rho u_2^2\right) + \rho g(z_2 - z_1) \\ &\quad + \underbrace{f\frac{L}{D}\tfrac12\rho u_m^2}_{\text{major}} + \underbrace{\left(\sum k\right)\tfrac12\rho u_m^2}_{\text{minor}}\end{aligned}} \tag{8.3}` ]],
        ['para', R`**Tank surface to tank surface** (both open to the atmosphere, so $p_1 = p_2$, and large, so $u_1 \approx u_2 \approx 0$) the end terms cancel. The required pump pressure rise is then:`],
        ['disp', [ R`\boxed{\Delta p_{pump} = f\frac{L}{D}\tfrac12\rho u_m^2 + \left(\sum k\right)\tfrac12\rho u_m^2 + \rho g\Delta z} \tag{8.4}` ]],
        ['disp', [ R`\boxed{P_{pump} = \frac{Q\,\Delta p_{pump}}{\eta}} \tag{8.5}` ]],
        ['list', R`**When the ends are not two still tanks:**`, false, [
          R`Different end pressures (a pressurised tank, a gauge pressure at an outlet): keep $p_1 - p_2$ in eq. (8.3). With no pump, $p_1 - p_2$ (plus any drop in height) is the **driving** pressure — as in the hot-water network (Q5).`,
          R`A free jet leaving the pipe: either keep $\tfrac12\rho u_2^2$ as the outlet kinetic energy, **or** count it as an exit loss $k = 1$ — **not both**.`,
          R`Different pipe sizes along the run: write the major and minor terms pipe by pipe with each pipe's own velocity (or convert every $k$ to one $u_{ref}$, §8.2).`
        ]],
        ['eq', [
          ['In terms of mass flow', R`\Delta p = \frac{8\dot m^2}{\pi^2\rho D^4}\left(\xi + f\frac{L}{D}\right) = K\dot m^2`, '[Pa]', 'u = 4ṁ/πρD², ½ρu² = 8ṁ²/π²ρD⁴. Handy for networks.']
        ]],
        ['list', R`**Choose $f$** by regime:`, false, [
          R`Laminar: $f = 64/Re$ ($C_f = 16/Re$).`,
          R`Turbulent, smooth, $4000 \lesssim Re < 10^5$: Blasius $f = 0.316Re^{-1/4}$.`,
          R`Turbulent, rough: Moody / Colebrook / Haaland — and include minor losses.`
        ]],
        ['warn', 'Key Insight', [
          R`$f$ depends on velocity, often implicitly, and you can't know the regime until you know the velocity. **Iterate**: guess, solve, check $Re$, re-read $f$, repeat — or rearrange to "= 0" and find where it changes sign (Excel, MATLAB fzero, Python fsolve).`
        ]],
        ['list', R`**Exam procedure for a pipe system:**`, true, [
          R`Sketch the system and mark points 1 and 2 (usually free surfaces or outlets). Write eq. (8.3) between them and cancel what is zero ($p_1 = p_2$ for two open tanks, $u \approx 0$ at a large free surface).`,
          R`Choose a **reference velocity** for each pipe and convert every $k$ to it before summing ($k_{ref} = k(u/u_{ref})^2$).`,
          R`Count the minor losses: entrance 0.5, exit 1.0, each bend, valve and tee branch. Use the values the question gives, even if they differ from the table.`,
          R`Guess $f$ (fully rough, or the last value), solve for $u$, compute $Re$, check the regime, re-read $f$, and repeat until $f$ stops changing.`,
          R`For networks with fixed $f$: write $\Delta p = K\dot m^2$ per section, add mass balances at the junctions, and combine $K$ in series/parallel or eliminate the junction pressures.`
        ]],
        ['warn', 'Warning', [
          R`**Common traps:** adding $k$ values that belong to different velocities; counting the outlet kinetic energy **and** an exit loss $k = 1$; mixing Darcy $f$ with Fanning $C_f = f/4$; using Blasius outside $4000 \lesssim Re < 10^5$ or for a rough pipe; rounding $u$ before squaring it; forgetting the $\rho g\Delta z$ lift.`
        ]]
      ]
    },
    {
      num: '8.5', title: 'Pipes in Series and in Parallel',
      blocks: [
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:560px;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)"></th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Series</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Parallel</th></tr></thead><tbody><tr><td style="padding:6px 10px">Flow rate</td><td style="padding:6px 10px">same: Q = Q₁ = Q₂ = Q₃</td><td style="padding:6px 10px">adds: Q = Q₁ + Q₂ + Q₃</td></tr><tr><td style="padding:6px 10px">Pressure drop</td><td style="padding:6px 10px">adds: Δp = Δp₁ + Δp₂ + Δp₃</td><td style="padding:6px 10px">same: Δp = Δp₁ = Δp₂ = Δp₃</td></tr><tr><td style="padding:6px 10px">Resistance K (Δp = Kṁ²)</td><td style="padding:6px 10px">K<sub>eq</sub> = K₁ + K₂ + K₃</td><td style="padding:6px 10px">1/√K<sub>eq</sub> = 1/√K₁ + 1/√K₂ + 1/√K₃</td></tr><tr><td style="padding:6px 10px">Junctions</td><td style="padding:6px 10px" colspan="2">flow in = flow out (like Kirchhoff in circuits)</td></tr></tbody></table>'],
        ['svg', 'tf_series', 'Pipes in series: the same flow passes through each pipe, so the pressure drops add.'],
        ['svg', 'tf_parallel', 'Pipes in parallel: every branch sees the same pressure drop, so the flow rates add.'],
        ['para', R`The electrical analogy is direct: pressure drop ↔ voltage, flow rate ↔ current. But a turbulent pipe is not an ohmic resistor: $\Delta p = K\dot m^2$ (quadratic), and $K$ itself depends on the flow through $f$. When $f$ is fixed, $K$ is a constant and the combination rules follow directly:`],
        ['eq', [
          ['Series (same ṁ)', R`\Delta p = \sum K_i\dot m^2 \;\Rightarrow\; K_{eq} = \sum K_i`, '[kg⁻¹ m⁻¹]', 'Resistances add.'],
          ['Parallel (same Δp)', R`\dot m = \sum\sqrt{\frac{\Delta p}{K_i}} \;\Rightarrow\; \frac{1}{\sqrt{K_{eq}}} = \sum\frac{1}{\sqrt{K_i}}`, '[kg⁻¹ m⁻¹]', 'Square roots, because Δp ∝ ṁ².']
        ]],
        ['ex', 'Example — three pipes in series (White 6.17)', [
          ['t', R`Pipes 1–3: $L = 100, 150, 80$ m; $D = 8, 6, 4$ cm; $e = 0.24, 0.12, 0.20$ mm (so $\epsilon = 0.003, 0.002, 0.005$). Water ($\rho = 1000$, $\mu = 10^{-3}$), total $\Delta p = 1.5\times10^5$ Pa. Find $Q$. The small losses at the junctions between pipes are neglected (the largest, 6 → 4 cm, is about 0.3 % of $\Delta p$ here).`],
          ['ans'],
          ['m', R`U_2 = \left(\frac{D_1}{D_2}\right)^2U_1,\ U_3 = \left(\frac{D_1}{D_3}\right)^2U_1 \;\Rightarrow\; U_1^2 = \frac{2\Delta p/\rho}{\frac{L_1}{D_1}f_1 + \frac{L_2}{D_2}\left(\frac{D_1}{D_2}\right)^4f_2 + \frac{L_3}{D_3}\left(\frac{D_1}{D_3}\right)^4f_3}`],
          ['t', R`**Pass 1** — start with **fully rough** $f$ (flat right-hand ends of the chart): $f = 0.026, 0.0235, 0.0305$ ⇒ $U_1 = 0.50$ m/s.`],
          ['m', R`Re_1 = \frac{\rho U_1D_1}{\mu} = 40\,000,\quad Re_2 = \frac{D_1}{D_2}Re_1 = 53\,000,\quad Re_3 = \frac{D_1}{D_3}Re_1 = 80\,000`],
          ['t', R`**Pass 2** — re-read the chart at those $Re$: $f \approx 0.029, 0.027, 0.032$ ⇒ $U_1 = 0.485$ m/s.`],
          ['t', R`**Check** — new $Re = 38\,800, 51\,800, 77\,700$. Reading $f$ at these gives the same values to chart accuracy (Colebrook: 0.0292, 0.0264, 0.0316 ⇒ $U_1 = 0.489$ m/s), so stop.`],
          ['m', R`Q = U_1\tfrac{\pi}{4}D_1^2 = 0.485\times\tfrac{\pi}{4}(0.08)^2 = 2.4\times10^{-3}\ \text{m}^3/\text{s} \approx 8.7\text{–}8.8\ \text{m}^3/\text{h}`],
          ['t', R`(The slide rounds $U_1$ to 0.48 m/s, giving $2.41\times10^{-3}$ m³/s = 8.7 m³/h. Its table also prints $f_2 = 0.038$, a slip for about 0.027.)`]
        ]],
        ['ex', 'Example — the same pipes in parallel (White 6.18)', [
          ['t', R`The same three pipes now share the same $\Delta p = 1.5\times10^5$ Pa. Find the total flow. As before, the losses where the pipes join the manifolds are neglected.`],
          ['ans'],
          ['m', R`U_i^2\frac{L_i}{D_i}f_i = \frac{2\Delta p}{\rho} = 300\ \text{m}^2/\text{s}^2 \;\Rightarrow\; U_i = \sqrt{\frac{300}{f_iL_i/D_i}}\quad\text{for each pipe}`],
          ['t', R`**Pass 1**, fully rough $f = 0.026, 0.0235, 0.0305$ with $L/D = 1250, 2500, 2000$:`],
          ['m', R`U_1 = \sqrt{\frac{300}{0.026\times1250}} = 3.04,\quad U_2 = \sqrt{\frac{300}{0.0235\times2500}} = 2.26,\quad U_3 = \sqrt{\frac{300}{0.0305\times2000}} = 2.22\ \text{m/s}`],
          ['t', R`**Pass 2**: $Re = \rho U_iD_i/\mu = 2.43\times10^5, 1.36\times10^5, 8.9\times10^4$ ⇒ $f = 0.027, 0.025, 0.031$ ⇒ $U = 2.98, 2.19, 2.20$ m/s. A third pass changes nothing.`],
          ['m', R`Q = \sum U_i\tfrac{\pi}{4}D_i^2 = 0.015 + 6.2\times10^{-3} + 2.8\times10^{-3} = 0.024\ \text{m}^3/\text{s} \equiv 86\ \text{m}^3/\text{h}`]
        ]],
        ['ex', 'Example — balancing a split chemical feed (lecture)', [
          ['t', R`20 L/min of liquid ($\rho = 1000$, $\mu = 10^{-3}$) in a 50 mm pipe is split equally between the old leg (10 m horizontal + 1 m drop = 11 m of 50 mm pipe) and a new 37.5 mm spur. Smooth, turbulent: $f = 0.316Re^{-1/4}$. Each leg has one 90° bend ($\xi = 1$) and a pipe exit, for which the lecture gives $\xi = 2$. How long should the spur be?`],
          ['svg', 'tf_chem_feed', 'Equal flows need equal pressure drops along both legs, which sets the length of the new spur.'],
          ['ans'],
          ['t', R`Both legs start at the junction and end at the same outlet pressure, so equal flows need **equal $\Delta p$** along each leg (they are in parallel).`],
          ['m', R`Q = \frac{20}{60\,000} = 3.33\times10^{-4}\ \text{m}^3/\text{s},\quad \dot m_i = \rho Q = 0.333\ \text{kg/s},\quad \dot m = \tfrac12\dot m_i = 0.167\ \text{kg/s per leg}`],
          ['t', R`**Momentum equation per leg**, in mass flow ($u = 4\dot m/\pi\rho D^2$):`],
          ['m', R`\Delta p = \tfrac12\rho u^2\left(\xi + f\frac{L}{D}\right) = \frac{8\dot m^2}{\pi^2\rho D^4}\left(\xi + f\frac{L}{D}\right),\qquad \frac{8}{\pi^2} = 0.810`],
          ['t', R`**Blasius in mass flow**: $Re = 4\dot m/\pi\mu D$, so`],
          ['m', R`f = 0.316\left(\frac{4\dot m}{\pi\mu D}\right)^{-1/4} = 0.316\left(\frac{\pi}{4}\right)^{1/4}\left(\frac{\mu D}{\dot m}\right)^{1/4} = 0.297\left(\frac{\mu D}{\dot m}\right)^{1/4}`],
          ['t', R`**Combine and put $\dot m = \dot m_i/2$**: $0.810/2^2 = 0.202$ $(= 2/\pi^2)$ and $0.810\times0.297/2^{7/4} = 0.0716$:`],
          ['m', R`\Delta p = 0.202\frac{\dot m_i^2}{\rho D^4}\xi + 0.0716\frac{L\,\dot m_i^{7/4}\mu^{1/4}}{\rho D^{19/4}}`],
          ['t', R`**Old leg** ($D = 0.050$ m, $L = 11$ m, $\xi = 1 + 2 = 3$; $Re = 4240$, $f = 0.039$): minor $10.8$ Pa + friction $31.0$ Pa ⇒ $\Delta p = 41.8$ Pa (slide: 41.7 Pa).`],
          ['t', R`**Spur** ($D = 0.0375$ m, $\xi = 3$; $Re = 5660$, $f = 0.036$): the minor term alone is $34.2$ Pa, and friction adds $11.0$ Pa per metre. Setting its $\Delta p$ equal to the old leg's:`],
          ['m', R`L = \frac{\rho D^{19/4}}{0.0716\,\dot m_i^{7/4}\mu^{1/4}}\left(\Delta p - 0.202\frac{\dot m_i^2\xi}{\rho D^4}\right) = \frac{41.8 - 34.2}{11.0} = 0.69 \approx 0.70\ \text{m} \qquad (D = 0.0375\ \text{m here})`]
        ]],
        ['warn', 'Note', [
          R`The lecture's exit coefficient $\xi = 2$ differs from the standard table value 1.0. With $\xi_{exit} = 1$ (so $\xi = 2$ per leg) the same method gives $\Delta p = 38.2$ Pa and $L = 1.40$ m. The answer is very sensitive because most of the spur's $\Delta p$ is minor loss — so state the coefficients you use. **In an exam, use the $\xi$ values the question gives** (here the lecture's exit $\xi = 2$, giving 0.69 m); use table values only when none are given, and say which you used. The lecture also treats the whole 11 m as downstream of the junction; any common pipe upstream carries $\dot m_i$ for both legs and drops out of the balance. Both legs have $Re \approx 4000$–$6000$, only just turbulent.`
        ]]
      ]
    },
    {
      num: '8.6', title: 'Worked Design: a Draining Tank',
      blocks: [
        ['para', R`A large tank (liquid depth $L_2 = 0.30$ m, effectively constant) drains through a vertical pipe of length $L_1 = 0.30$ m and diameter $d$; liquid $\rho = 930$ kg/m³. The flow is driven by the head $\rho gL_2$ at the top of the pipe **plus** the weight of the liquid in the pipe itself.`],
        ['svg', 'tf_draining_tank', 'Draining tank: the liquid head plus the weight of the liquid in the vertical pipe drives the flow out of the bottom. Not to scale — the pipe is drawn far wider than d = 1.22 mm so it can be labelled.'],
        ['deriv', 'Derivation — force balance on the liquid in the pipe', [
          ['t', R`**Control volume:** the liquid inside the pipe, length $L_1$, area $A = \pi d^2/4$. Flow is fully developed, so there is no net momentum flux. Inlet and exit kinetic energy and minor losses are **neglected** here (part e adds them).`],
          ['t', R`**Pressures** (gauge): the tank is large and nearly still, so the pipe inlet is at $\rho gL_2$; the outlet is at atmospheric, 0. So $\Delta p = \rho gL_2$.`],
          ['t', R`**Forces along the pipe** — pressure difference + weight (down) = wall shear (up):`],
          ['m', R`\rho gL_2\,A + \rho g\,AL_1 = \tau_w\,\pi dL_1`],
          ['t', R`**Divide by $AL_1$** ($\pi dL_1/AL_1 = 4/d$):`],
          ['m', R`\frac{\Delta p}{L_1} = \rho g\frac{L_2}{L_1} = \frac{4}{d}\tau_w - \rho g \qquad(\text{the slides' form})`],
          ['t', R`**Wall shear from $f$**: $\tau_w = C_f\tfrac12\rho u_m^2$ with $C_f = f/4$, so $\tau_w = \tfrac{f}{8}\rho u_m^2$ and $\tfrac{4}{d}\tau_w = \tfrac{f\rho u_m^2}{2d}$:`],
          ['m', R`\rho g\left(\frac{L_2}{L_1} + 1\right) = \frac{f\rho u_m^2}{2d}`]
        ]],
        ['disp', [ R`\boxed{u_m^2 = \frac{2gd}{f}\left(\frac{L_2}{L_1}+1\right)} \quad(\text{no minor losses, no exit KE}) \tag{8.6}` ]],
        ['ex', 'Part a — using it as a viscometer', [
          ['t', R`$d = 1.22$ mm; measured $Q = 4.5$ L/h. Assuming viscous flow, find $\mu$.`],
          ['ans'],
          ['m', R`Q = \frac{4.5}{1000\times3600} = 1.25\times10^{-6}\ \text{m}^3/\text{s},\quad u_m = \frac{Q}{\tfrac{\pi}{4}d^2} = 1.07\ \text{m/s}`],
          ['m', R`f = \frac{64}{Re} = \frac{64\mu}{\rho u_md} \;\Rightarrow\; \frac{4}{d}\tau_w = \frac{32\mu u_m}{d^2} \;\Rightarrow\; \rho g\frac{L_2}{L_1} = \frac{32\mu u_m}{d^2} - \rho g`],
          ['m', R`\mu = \frac{d^2}{32u_m}\left(\frac{L_2}{L_1}+1\right)\rho g = 7.93\times10^{-4}\ \text{kg/m s} \qquad Re = \frac{\rho u_md}{\mu} = 1530 < 2300\ \checkmark,\quad f = \frac{64}{1530} = 0.042`]
        ]],
        ['ex', 'Part b — is the answer unique?', [
          ['t', R`The measurement really fixes only $f = 0.042$ (eq. 8.6 contains only $f$). Could a turbulent flow in a smooth pipe give the same $f$?`],
          ['ans'],
          ['m', R`\text{Blasius: } 0.316Re^{-1/4} = 0.042 \;\Rightarrow\; Re = \left(\frac{0.316}{0.042}\right)^4 \approx 3200 \;\Rightarrow\; \mu = \frac{\rho u_md}{Re} = 3.8\times10^{-4}\ \text{kg/m s}`],
          ['t', R`The slide reads the smooth curve of the Moody chart at $Re \approx 3800$, giving $\mu = 3.2\times10^{-4}$ kg/m s. Both values lie in the **transitional** range ($2300 \lesssim Re \lesssim 4000$), where neither law is reliable. The point stands: a second, turbulent solution exists, so **check which regime you're in** before trusting a viscometer reading.`]
        ]],
        ['ex', 'Parts c–e — bigger pipe, roughness, minor losses', [
          ['t', R`Now $d = 5$ mm, "the same fluid as in part a". (c) Smooth pipe, Blasius; (d) plastic, $e = 0.0025$ mm; (e) as (d) plus entry ($k_1 = 0.5$) and exit ($k_2 = 1.0$) losses.`],
          ['ans'],
          ['t', R`**(c)** Substitute $f = 0.316(\rho u_md/\mu)^{-1/4}$ into eq. (8.6) and collect powers of $u_m$:`],
          ['m', R`u_m^{7/4} = \frac{2}{0.316}\frac{\rho^{1/4}d^{5/4}}{\mu^{1/4}}g\left(\frac{L_2}{L_1}+1\right)`],
          ['t', R`**(d)** $\epsilon = e/d = 0.0025/5 = 5\times10^{-4}$; eq. (8.6) gives $u_m^2 = 2dg(2)/f = 0.196/f$. Guess $f$ from (c), read the Moody chart at the new $Re$, repeat.`],
          ['t', R`**(e)** Add $(k_1 + k_2)\tfrac12\rho u_m^2$ over the length $L_1$ to the force balance:`],
          ['m', R`\rho g\frac{L_2}{L_1} = \frac{4}{d}\frac{f}{8}\rho u_m^2 + \frac{k_1 + k_2}{L_1}\tfrac12\rho u_m^2 - \rho g \;\Rightarrow\; u_m^2 = \frac{2g(L_2/L_1+1)}{f/d + (k_1+k_2)/L_1} = \frac{39.24}{f/0.005 + 5}`],
          ['t', R`Assume $f$, solve for $u_m$, find $Re = \rho u_md/\mu$, re-read $f$, and stop when it no longer changes. The results are in the table below, for part a's fluid (consistent with the question) and for the slides' numbers.`]
        ]],
        ['html', '<table style="border-collapse:collapse;width:100%;font-size:13px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Part</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Part-a fluid, μ = 7.93 × 10⁻⁴ (Re = 5860 u<sub>m</sub>)</th><th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Slides’ numbers, μ = 3.2 × 10⁻⁴ (Re = 14 600 u<sub>m</sub>)</th></tr></thead><tbody>' +
            [['(c) smooth', 'u<sub>m</sub> = 2.63 m/s, Re = 15 400, f = 0.028 ✓, Q = 5.2 × 10⁻⁵ m³/s', 'u<sub>m</sub> = 3.0 m/s, Re = 44 000, f = 0.022, Q = 5.89 × 10⁻⁵ m³/s'], ['(d) rough', 'f = 0.0285 at Re ≈ 15 400 ⇒ u<sub>m</sub> = 2.62 m/s, Re = 15 400 ✓, Q = 5.1 × 10⁻⁵ m³/s', 'f = 0.023 at Re = 44 000 ⇒ u<sub>m</sub> = 2.92 m/s, Re = 42 600 ✓, Q = 5.73 × 10⁻⁵ m³/s'], ['(e) + minor', 'guess f = 0.029 ⇒ 1.91 m/s, Re = 11 200 ⇒ f = 0.031 ⇒ u<sub>m</sub> = 1.87 m/s, Re = 11 000 ✓, Q = 3.7 × 10⁻⁵ m³/s', 'guess f = 0.023 ⇒ 2.02 m/s, Re = 29 500 ⇒ f = 0.025 ⇒ u<sub>m</sub> = 1.98 m/s, Re = 28 900 ✓, Q = 3.89 × 10⁻⁵ m³/s']].map((r) => '<tr><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0);white-space:nowrap">' + r[0] + '</td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">' + r[1] + '</td><td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">' + r[2] + '</td></tr>').join('') + '</tbody></table>'],
        ['para', R`In (e) the $f$ used is "assumed, then checked": $f = 0.025$ is the Moody value at $Re = 28\,900$, $\epsilon = 5\times10^{-4}$ (and $f = 0.031$ at $Re = 11\,000$ for the part-a fluid). Either way, minor losses cut the flow by about **30 %** — "minor" is a misnomer for short pipes.`],
        ['warn', 'Warning', [
          R`The slides say parts c–e use "the same fluid as in part a", but their numbers ($Re = 44\,000$ at 3.0 m/s; $Re = 14\,600\,u_m$) only work with part b's $\mu = 3.2\times10^{-4}$. For an exam, use the viscosity the question gives you. With part a's fluid the left-hand column is the consistent answer. The method is identical either way.`
        ]]
      ]
    },
    {
      num: 'Ex 8', title: 'Problem Sheet — Systems with Minor Losses', wk: true,
      blocks: [
        ['ex', 'Q3 — pump between two tanks', [
          ['t', R`Water ($\rho = 1000$, $\mu = 10^{-3}$) is pumped between two large tanks, from a source surface to a destination surface 30 m higher. The line is 120 m of 5 cm pipe with the roughness of structural steel ($e = 0.025$ mm on the course Moody chart). It contains an open globe valve ($\xi = 10$), a screwed 90° elbow ($\xi = 0.3$ on the sheet; the §8.2 table gives 1.5 for threaded — see the Note) and a half-open gate valve ($\xi = 2.1$); entrance and exit losses are given as $\xi = 1.0$ and $0.5$. Pump efficiency 0.75; $Q = 360$ L/min. Power? [slide: 4.7 kW; computed here 4.6 kW with $\xi_{elbow} = 0.3$, 4.7 kW with 1.5]`],
          ['svg', 'tf_pump_tanks', 'Pump head = major loss + every minor loss + the 30 m lift.'],
          ['ans'],
          ['t', R`Tank surface to tank surface, so eq. (8.4) applies (both ends at atmospheric pressure, $u \approx 0$).`],
          ['m', R`Q = 6\times10^{-3}\ \text{m}^3/\text{s},\ u_m = \frac{Q}{\tfrac{\pi}{4}D^2} = 3.06\ \text{m/s},\ Re = 1.53\times10^5,\ \epsilon = \frac{0.025}{50} = 5\times10^{-4} \Rightarrow f = 0.0195`],
          ['m', R`\Delta p_f = f\frac{L}{D}\tfrac12\rho u_m^2 = 0.0195\times2400\times4670 = 219\ \text{kPa}`],
          ['m', R`\Delta p_m = (10+0.3+2.1+1.0+0.5)\tfrac12\rho u_m^2 = 13.9\times4670 = 65\ \text{kPa},\qquad \Delta p_g = \rho gz = 294\ \text{kPa}`],
          ['m', R`\Delta p_{pump} = 578\ \text{kPa} \Rightarrow P = \frac{\Delta p\,Q}{\eta} = \frac{578\,000\times0.006}{0.75} = 4.6\ \text{kW} \approx 4.7\ \text{kW}`],
          ['t', R`The model solution rounds $u_m$ up to 3.1 m/s first, which gives 225 + 67 + 294 = 586 kPa and exactly 4.7 kW.`]
        ]],
        ['warn', 'Note', [
          R`Two things in Q3's data differ from the §8.2 table. (1) A **screwed** (threaded) regular 90° elbow is $\xi = 1.5$ in the table; 0.3 is the **flanged** value. The quoted answer uses 0.3. With 1.5, $\sum\xi = 15.1$, $\Delta p_{pump} = 583$ kPa and the power is 4.7 kW, essentially unchanged (vs 578 kPa → 4.6 kW with 0.3). (2) The entrance 1.0 / exit 0.5 values are swapped relative to the standard 0.5 / 1.0; the sum is the same.`
        ]],
        ['ex', 'Q4 — chimney draught with minor losses', [
          ['t', R`Return to the chimney of the Introduction-to-Hydraulics sheet (topic 4). The wind speed rises linearly from 0 at the ground to 10 m/s at 20 m, so at the top of the 10 m chimney $u_w = 5$ m/s. Air: $\rho = 1.2$ kg/m³, $\mu = 1.7\times10^{-5}$ kg/m s. Smooth pipe, $D = 0.1$ m, $L = 10$ m (Blasius). Losses: entrance 0.5, exit 1.0, and two changes of direction (bottom and top) 0.5 each. Draught velocity? [2.16 m/s]`],
          ['svg', 'tf_chimney_losses', 'Same chimney as topic 4, now with an entrance, an exit and two 90° turns added to the friction loss.'],
          ['ans'],
          ['t', R`**Driving pressure.** Bernoulli from the still room air ($p_0$) to the moving air at the chimney top ($p$). The hydrostatic gradient is the same inside and outside the chimney, so it cancels:`],
          ['m', R`\Delta p = p_0 - p = \tfrac12\rho u_w^2 = \tfrac12(1.2)(5^2) = 15\ \text{Pa}`],
          ['t', R`**Losses.** Blasius in Fanning form, $C_f = 0.079Re^{-1/4}$ (so $f = 4C_f$), plus $\sum\xi = 0.5 + 1.0 + 0.5 + 0.5 = 2.5$:`],
          ['m', R`\Delta p = \tfrac12\rho u^2\left(\sum\xi + \frac{4L}{D}0.079\left(\frac{\rho uD}{\mu}\right)^{-1/4}\right)`],
          ['m', R`\tfrac12\rho = 0.6,\qquad \frac{4L}{D}0.079\left(\frac{\rho D}{\mu}\right)^{-1/4} = 400\times0.079\times(7060)^{-1/4} = 3.45`],
          ['m', R`15 = 0.6u^2\left(2.5 + 3.45u^{-1/4}\right) \;\Rightarrow\; u^2 + 1.38u^{1.75} - 10.0 = 0 \;\Rightarrow\; u = 2.16\ \text{m/s}`],
          ['t', R`Check: $Re = \rho uD/\mu = 15\,300$ — turbulent, smooth, so Blasius is valid ✓.`],
          ['t', R`With **friction only** (topic 4's answer): $15 = 0.6\times3.45\,u^{1.75}$ ⇒ $u = 3.10$ m/s. The minor losses cut the draught by 30 %. They are justified physically: the room air has to accelerate into the flue (entrance), turn upwards (bottom), turn into the wind (top), and its kinetic energy is lost at the exit.`]
        ]],
        ['para', R`**Q5 data — minor losses and resistances by section** (bends counted from the problem-sheet figure, shown in Q5; $K = \frac{8}{\pi^2\rho D^4}\left(\xi + f\frac{L}{D}\right)$ with $f = 0.005$):`],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:620px;font-size:13px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">Section</th><th style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">D, L</th><th style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">What the flow passes</th><th style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">ξ</th><th style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)">K (f = 0.005)</th></tr></thead><tbody>' +
            [['A–B', '22 mm, 12 m', 'bend down after the tank', '1', '1.31 × 10⁴'], ['B–C', '22 mm, 8 m', 'bend at the bottom of the riser', '1', '9.90 × 10³'], ['C–D', '22 mm, 6 m', 'bend down to the bath + tap', '1 + 2 = 3', '1.53 × 10⁴'], ['C–E', '15 mm, 7 m', 'tee branch + 2 bends + tap', '3 + 2 = 5', '1.19 × 10⁵'], ['B–F', '15 mm, 15 m', 'tee branch + 3 bends + tap', '4 + 2 = 6', '1.79 × 10⁵'], ['A–C (part b)', '22 mm, 20 m', 'A–B + B–C', '2', '2.30 × 10⁴']].map((r) => '<tr>' + r.map((c, i) => '<td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0)' + (i >= 3 ? ';white-space:nowrap' : '') + '">' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table>'],
        ['ex', 'Q5 — domestic hot-water network', [
          ['t', R`A tank at +50 kPa gauge feeds a bath (D), basin (E) and sink (F), all on one level, with outlets at atmospheric pressure and negligible entrance loss. Runs: A–B 22 mm × 12 m; B–C 22 mm × 8 m; C–D 22 mm × 6 m; B–F 15 mm × 15 m; C–E 15 mm × 7 m. Taps $\xi = 2$; each 90° bend in the figure $\xi = 1$; $\mu = 4.8\times10^{-3}$, $\rho = 985$. (a) Only D open, $f = 0.316Re^{-1/4}$. (b) D and E open, $f = 0.005$. (c) All open, $f = 0.005$. [0.56; 0.93 & 0.33; 0.81, 0.29 & 0.35 kg/s]`],
          ['svg', 'tf_hot_water', 'Hot-water network, redrawn to the problem sheet figure: thick lines 22 mm, thin lines 15 mm. Each terracotta dot is a 90° bend (a tee branch counts as one), ξ = 1; each tap ξ = 2.'],
          ['ans'],
          ['t', R`**(a)** Path A–B–C–D: $L = 12 + 8 + 6 = 26$ m of 22 mm; $\xi = 1 + 1 + 3 = 5$ (three bends + the tap; the tees at B and C are passed straight through, line flow). The sheet ignores the line-flow tee loss (table: 0.2 flanged / 0.9 threaded). Adding 0.9 at each tee would make $\xi = 6.8$ and $\dot m = 0.54$ kg/s, only 2 % less. Eq. (8.3) with $p_1 - p_2 = 50$ kPa:`],
          ['m', R`5\times10^4 = \tfrac12\rho u^2\left(\xi + \frac{L}{D}0.316\left(\frac{\rho uD}{\mu}\right)^{-1/4}\right),\quad \tfrac12\rho = 492.5,\quad \frac{26}{0.022}\,0.316\,(4515)^{-1/4} = 45.5`],
          ['m', R`5\times10^4 = 492.5u^2\left(5 + 45.5u^{-1/4}\right) \;\Rightarrow\; u^2 + 9.1u^{7/4} - 20.3 = 0 \;\Rightarrow\; u = 1.48\ \text{m/s}`],
          ['m', R`Re = 6700\ (\text{Blasius OK}),\qquad \dot m = \rho u\tfrac{\pi}{4}D^2 = 0.55\ \text{kg/s}`],
          ['t', R`(The sheet quotes $u = 1.49$ m/s and 0.56 kg/s; the difference is rounding.)`],
          ['t', R`**(b), (c)** With fixed $f$, write each section as $\Delta p = K\dot m^2$, $K = \frac{8}{\pi^2\rho D^4}\left(\xi + f\frac{L}{D}\right)$, where $\frac{8}{\pi^2\rho D^4} = 3513$ (22 mm) and $16\,255$ (15 mm). This gives the $K$ column in the Q5 data table above.`],
          ['t', R`**(b)** Unknowns $p_C$, $\dot m_D$, $\dot m_E$. Mass: $\dot m_A = \dot m_D + \dot m_E$. Momentum:`],
          ['m', R`50\,000 - p_C = K_{AC}\dot m_A^2,\qquad p_C = K_{CD}\dot m_D^2,\qquad p_C = K_{CE}\dot m_E^2`],
          ['m', R`\Rightarrow\; 50\,000 - p_C = K_{AC}\left(\frac{1}{\sqrt{K_{CD}}} + \frac{1}{\sqrt{K_{CE}}}\right)^2p_C = 2.30\times10^4\left(\frac{1}{124} + \frac{1}{345}\right)^2p_C = 2.77\,p_C`],
          ['m', R`p_C = \frac{50\,000}{3.77} = 13\,270\ \text{Pa},\quad \dot m_D = \sqrt{\frac{13\,270}{1.53\times10^4}} = 0.93\ \text{kg/s},\quad \dot m_E = \sqrt{\frac{13\,270}{1.19\times10^5}} = 0.33\ \text{kg/s}`],
          ['t', R`Check: $\dot m_A = 1.26$ kg/s and $K_{AC}\dot m_A^2 = 36\,730 = 50\,000 - 13\,270$ ✓. (Same result by resistances: $C$–$D$ in parallel with $C$–$E$ gives $K = 8300$, in series with $K_{AC}$ gives $31\,300$, so $\dot m_A = \sqrt{50\,000/31\,300} = 1.26$.)`],
          ['t', R`**(c)** Unknowns $p_B$, $p_C$, $\dot m_D$, $\dot m_E$, $\dot m_F$. Mass: $\dot m_A = \dot m_D + \dot m_E + \dot m_F$ and $\dot m_{BC} = \dot m_D + \dot m_E$. Momentum for the five sections:`],
          ['m', R`50\,000 - p_B = K_{AB}(\dot m_D + \dot m_E + \dot m_F)^2,\quad p_B - p_C = K_{BC}(\dot m_D + \dot m_E)^2,\quad p_C = K_{CD}\dot m_D^2 = K_{CE}\dot m_E^2,\quad p_B = K_{BF}\dot m_F^2`],
          ['t', R`Express everything in terms of $\dot m_E$. From the two $p_C$ equations:`],
          ['m', R`\dot m_D = \sqrt{\frac{K_{CE}}{K_{CD}}}\,\dot m_E = \sqrt{\frac{1.19\times10^5}{1.53\times10^4}}\,\dot m_E = 2.79\,\dot m_E`],
          ['m', R`p_B = K_{CE}\dot m_E^2 + K_{BC}(3.79\,\dot m_E)^2 = (1.19\times10^5 + 1.42\times10^5)\dot m_E^2 = 2.61\times10^5\,\dot m_E^2`],
          ['m', R`\dot m_F^2 = \frac{p_B}{K_{BF}} = \frac{2.61\times10^5}{1.79\times10^5}\dot m_E^2 = 1.46\,\dot m_E^2 \;\Rightarrow\; \dot m_F = 1.21\,\dot m_E`],
          ['m', R`\dot m_A = (2.79 + 1 + 1.21)\dot m_E = 5.00\,\dot m_E \;\Rightarrow\; 50\,000 - 2.61\times10^5\dot m_E^2 = 1.31\times10^4(5.00)^2\dot m_E^2 = 3.27\times10^5\dot m_E^2`],
          ['m', R`\dot m_E = \sqrt{\frac{50\,000}{5.88\times10^5}} = 0.29,\quad \dot m_D = 2.79\times0.29 = 0.81,\quad \dot m_F = 1.21\times0.29 = 0.35\ \text{kg/s}`],
          ['t', R`Check: $p_B = 22\,200$ Pa, $p_C = 10\,100$ Pa, $\dot m_A = 1.46$ kg/s; $K_{AB}\dot m_A^2 = 27\,800 = 50\,000 - 22\,200$ ✓.`],
          ['t', R`Opening more taps lowers the junction pressures ($p_C$: 13.3 → 10.1 kPa), so every outlet gets less — the shared pipework is the bottleneck.`]
        ]],
        ['warn', 'Note', [
          R`Model-solution slips (answers unaffected): in (b) the C–D text says "$\xi = 2$" but its $K = 1.53\times10^4$ needs $\xi = 3$ (bend + tap); $p_C$ is 13 270 Pa, not 13 325 Pa. In (c) "$\dot m_F^2 = 1.21\dot m_E^2$" should read $\dot m_F = 1.21\,\dot m_E$ ($\dot m_F^2 = 1.46\,\dot m_E^2$). Note also that the sheet uses $f = 0.005$ directly as the Darcy factor in $fL/D$.`
        ]]
      ]
    }
  ]
}
