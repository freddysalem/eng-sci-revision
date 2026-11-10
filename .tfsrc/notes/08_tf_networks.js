{
  key: 'tf_networks', area: 'pipe', num: '8', week: 'Week 4',
  name: 'Minor Losses, Pipe Networks and System Design',
  triggers: 'valves, bends, elbows, tees · entrance/exit loss · sudden expansion/contraction · vena contracta · loss coefficient k (ξ) · pump between two tanks · pipes in series/parallel · branching network · draining tank · iterate',
  sections: [
    {
      num: '', title: 'Revision Objectives — Minor Losses, Pipe Networks and System Design',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Explain **separation** and why it only happens in inertial (not viscous) flows.`,
          R`Use the **loss coefficient** $k = \Delta p/\tfrac12\rho u_m^2$ with tabulated values for fittings, entrances and exits.`,
          R`Derive the sudden-expansion (**Borda–Carnot**) loss and explain the **vena contracta** at a contraction.`,
          R`Write the full **system equation**: major + minor + gravity (+ pump).`,
          R`Solve pipes in **series** and **parallel** and branching networks, iterating on $f$.`
        ]]
      ]
    },
    {
      num: '8.1', title: 'Separation',
      blocks: [
        ['para', R`Any time a flow must **change direction** (a sudden change in wall position, a bend, a valve), it needs a force. In a fluid that force comes from the **pressure gradient**, which is relatively weak. If it isn't enough, the flow **separates** from the wall, leaving a region of turbulent, stagnant, dissipating fluid that isn't part of the through-flow — like the **wake** behind a bluff body.`],
        ['svg', 'tf_separation', 'Rising pressure decelerates the near-wall fluid until du/dy = 0 at the wall (separation); downstream the flow reverses and a wake forms.'],
        ['warn', 'Key Insight', [
          R`Separation is an **inertial** effect (it's about $\rho$), so it does **not** occur in viscously dominated (laminar) flows.`,
          R`The pressure loss is energy dissipated by turbulence and induced flows (e.g. **secondary flows** spiralling round bends). The disturbance persists for **75–100 diameters**, so two fittings close together may lose less than the sum of their individual losses.`
        ]]
      ]
    },
    {
      num: '8.2', title: 'Minor Losses and Loss Coefficients',
      blocks: [
        ['para', R`**Major loss** = wall friction along the pipe. **Minor losses** = extra losses at fittings: changes in diameter (including entrances and exits), bends, elbows, tees, valves. "Do not be deceived by the name": minor losses can be **larger** than the major loss.`],
        ['eq', [
          ['Loss coefficient', R`k\ (\text{or } \xi) = \frac{\Delta p}{\tfrac12\rho u_m^2} = \frac{h_l}{u_m^2/2g}`, '[–]', 'A type of Euler number; measured, not derived (with few exceptions).'],
          ['Head loss', R`h_l = \frac{\Delta p}{\rho g}`, '[m]', 'Civil-engineering origin.'],
          ['Total minor loss', R`\Delta p_{minor} = \left(\sum k\right)\tfrac12\rho u_m^2`, '[Pa]', 'Sum the coefficients that share the same velocity.']
        ]],
        ['html', '<table style="border-collapse:collapse;width:100%;font-size:13px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:6px 9px;border-bottom:1px solid var(--kE7E0D0)">Fitting</th><th style="padding:6px 9px;border-bottom:1px solid var(--kE7E0D0)">k</th><th style="padding:6px 9px;border-bottom:1px solid var(--kE7E0D0)">Fitting</th><th style="padding:6px 9px;border-bottom:1px solid var(--kE7E0D0)">k</th></tr></thead><tbody>' +
          [['Globe valve, fully open', '10', 'Elbow 90°, regular, flanged', '0.3'], ['Angle valve, fully open', '2', 'Elbow 90°, regular, threaded', '1.5'], ['Gate valve, fully open', '0.15', 'Elbow 90°, long radius, flanged', '0.2'], ['Gate valve, ¼ closed', '0.26', 'Elbow 90°, long radius, threaded', '0.7'], ['Gate valve, ½ closed', '2.1', 'Elbow 45°, long radius, threaded', '0.2'], ['Gate valve, ¾ closed', '17', 'Elbow 45°, regular, threaded', '0.4'], ['Swing check, forward flow', '2', 'Tee, line flow, flanged / threaded', '0.2 / 0.9'], ['Swing check, back flow', '∞', 'Tee, branch flow, flanged / threaded', '1 / 2'], ['<b>Pipe entrance from a large tank</b>', '<b>0.5</b>', '180° return bend, flanged / threaded', '0.2 / 1.5'], ['<b>Pipe exit into a large tank</b>', '<b>1.0</b>', '', '']].map((r) => '<tr><td style="padding:5px 9px">' + r[0] + '</td><td style="padding:5px 9px">' + r[1] + '</td><td style="padding:5px 9px">' + r[2] + '</td><td style="padding:5px 9px">' + r[3] + '</td></tr>').join('') + '</tbody></table>'],
        ['warn', 'Note', [
          R`The slide labels these rows "Entrance to a large tank 0.5" and "Exit from a large tank 1.0", which reads backwards. The standard values are: flow **leaving a tank into a pipe** (sharp entrance) 0.5; flow **leaving a pipe into a tank** (exit) 1.0 — the whole velocity head is lost.`,
          R`Tabulated $k$ values scatter a lot and depend on size, geometry and $Re$. For equipment, use the manufacturer's figure.`
        ]]
      ]
    },
    {
      num: '8.3', title: 'Sudden Expansions and Contractions',
      blocks: [
        ['para', R`A **sudden expansion** is the one minor loss that can be calculated (momentum + mass balance across the step), matching experiment to a few per cent — the **Borda–Carnot** result:`],
        ['disp', [ R`\boxed{\Delta p = \tfrac12\rho(u_1 - u_2)^2 \;\Rightarrow\; k = \left(1 - \frac{A_1}{A_2}\right)^2 \text{ on } \tfrac12\rho u_1^2} \tag{8.1}` ]],
        ['svg', 'tf_expansion', 'Sudden expansion: the jet from the small pipe spreads out, trapping recirculating vortices in the corners — that dissipation is the loss.'],
        ['para', R`As $A_2 \to \infty$ (a pipe discharging into a large tank), $k \to 1$: **all** the jet's inertia is dissipated — the **exit loss**.`],
        ['warn', 'Warning', [
          R`The written notes give $k = (A_1/A_2 - 1)^2$ "based on $u_2$, the velocity in the larger pipe". That expression equals $(1 - A_1/A_2)^2$ and is the coefficient on the **upstream** velocity $u_1$ (the one that gives $k \to 1$ at an exit, as the notes themselves say). On $u_2$ the same loss is $k = (A_2/A_1 - 1)^2$.`
        ]],
        ['para', R`A **sudden contraction** is less certain: inertia makes the flow **neck down** to a **vena contracta** of area $A_c < A_2$ just downstream, and most of the loss comes from the re-expansion from $A_c$ to $A_2$:`],
        ['svg', 'tf_contraction', 'Sudden contraction: the flow necks down to the vena contracta A_c, then re-expands to fill the small pipe — most of the loss is in the re-expansion.'],
        ['eq', [
          ['Sudden contraction', R`k = \left(\frac{A_2}{A_c} - 1\right)^2 \ \text{on } \tfrac12\rho u_2^2`, '[–]', 'A_c depends on A₁/A₂.'],
          ['Sharp pipe entrance', R`k \to 0.5 \ \ (A_1 \to \infty)`, '[–]', 'Pipe flush with the wall of a large reservoir; larger if the pipe protrudes.'],
          ['Pipe exit into a tank', R`k = 1.0`, '[–]', 'Borda–Carnot with A₂ → ∞.']
        ]]
      ]
    },
    {
      num: '8.4', title: 'The System Equation',
      blocks: [
        ['para', R`You now have every tool. For each pipe run, the pressure the pump (or head) must supply is the sum of:`],
        ['disp', [ R`\boxed{\Delta p = \underbrace{f\frac{L}{D}\tfrac12\rho u_m^2}_{\text{major}} + \underbrace{\left(\sum k\right)\tfrac12\rho u_m^2}_{\text{minor}} + \underbrace{\rho g\Delta z}_{\text{gravity}} \qquad P_{pump} = \frac{Q\,\Delta p}{\eta}} \tag{8.2}` ]],
        ['eq', [
          ['In terms of mass flow', R`\Delta p = \frac{8\dot m^2}{\pi^2\rho D^4}\left(\xi + f\frac{L}{D}\right)`, '[Pa]', 'u = 4ṁ/πρD². Handy for networks.'],
          ['Pump power', R`P = \frac{Q\,\Delta p}{\eta}`, '[W]', 'η = pump efficiency.']
        ]],
        ['list', R`**Choose $f$** by regime:`, false, [
          R`Laminar: $f = 64/Re$ ($C_f = 16/Re$).`,
          R`Turbulent, smooth, $Re < 10^5$: Blasius $f = 0.316Re^{-1/4}$.`,
          R`Turbulent, rough: Moody / Colebrook / Haaland — and include minor losses.`
        ]],
        ['warn', 'Key Insight', [
          R`$f$ depends on velocity, often implicitly, and you can't know the regime until you know the velocity. **Iterate**: guess, solve, check, repeat — or rearrange to "= 0" and find where it changes sign (Excel, MATLAB fzero, Python fsolve).`
        ]]
      ]
    },
    {
      num: '8.5', title: 'Pipes in Series and in Parallel',
      blocks: [
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:560px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)"></th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Series</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Parallel</th></tr></thead><tbody><tr><td style="padding:6px 10px">Flow rate</td><td style="padding:6px 10px">same: Q = Q₁ = Q₂ = Q₃</td><td style="padding:6px 10px">adds: Q = Q₁ + Q₂ + Q₃</td></tr><tr><td style="padding:6px 10px">Pressure drop</td><td style="padding:6px 10px">adds: Δp = Δp₁ + Δp₂ + Δp₃</td><td style="padding:6px 10px">same: Δp = Δp₁ = Δp₂ = Δp₃</td></tr><tr><td style="padding:6px 10px">Junctions</td><td style="padding:6px 10px" colspan="2">flow in = flow out (like Kirchhoff in circuits)</td></tr></tbody></table>'],
        ['svg', 'tf_series', 'Pipes in series: the same flow passes through each pipe, so the pressure drops add.'],
        ['svg', 'tf_parallel', 'Pipes in parallel: every branch sees the same pressure drop, so the flow rates add.'],
        ['para', R`The electrical analogy is direct: pressure drop ↔ voltage, flow rate ↔ current. But unlike a resistor, a turbulent pipe's "resistance" depends on the flow through it.`],
        ['ex', 'Example — three pipes in series (White 6.17)', [
          ['t', R`Pipes 1–3: $L = 100, 150, 80$ m; $D = 8, 6, 4$ cm; $e = 0.24, 0.12, 0.20$ mm (so $\epsilon = 0.003, 0.002, 0.005$). Water, total $\Delta p = 1.5\times10^5$ Pa. Find $Q$.`],
          ['ans'],
          ['m', R`U_2 = \left(\frac{D_1}{D_2}\right)^2U_1,\ U_3 = \left(\frac{D_1}{D_3}\right)^2U_1 \;\Rightarrow\; U_1^2 = \frac{2\Delta p/\rho}{\frac{L_1}{D_1}f_1 + \frac{L_2}{D_2}\left(\frac{D_1}{D_2}\right)^4f_2 + \frac{L_3}{D_3}\left(\frac{D_1}{D_3}\right)^4f_3}`],
          ['t', R`Start with **fully rough** $f$ (flat right-hand ends of the chart): $f = 0.026, 0.0235, 0.0305$ ⇒ $U_1 = 0.50$ m/s, $Re = 40\,000, 53\,000, 80\,000$.`],
          ['t', R`Re-read the chart at those $Re$: $f \approx 0.029, 0.027, 0.032$ ⇒ $U_1 = 0.48$ m/s. No further change.`],
          ['m', R`Q = U_1\tfrac{\pi}{4}D_1^2 = 2.41\times10^{-3}\ \text{m}^3/\text{s} \equiv 8.7\ \text{m}^3/\text{h}`],
          ['t', R`(The slide's table lists $f_2 = 0.038$ on the second pass; that can't give its own $U_1 = 0.48$ m/s — about 0.027 does, matching Colebrook.)`]
        ]],
        ['ex', 'Example — the same pipes in parallel (White 6.18)', [
          ['t', R`The same three pipes now share the same $\Delta p = 1.5\times10^5$ Pa. Find the total flow.`],
          ['ans'],
          ['m', R`U_i^2\frac{L_i}{D_i}f_i = \frac{2\Delta p}{\rho} \quad\text{for each pipe}`],
          ['t', R`Fully rough first guess: $U = 3.04, 2.26, 2.22$ m/s. Iterate with $Re = 2.43\times10^5, 1.36\times10^5, 8.9\times10^4$ ⇒ $f = 0.027, 0.025, 0.031$ ⇒ $U = 2.98, 2.19, 2.20$ m/s.`],
          ['m', R`Q = 0.015 + 6.2\times10^{-3} + 2.8\times10^{-3} = 0.024\ \text{m}^3/\text{s} \equiv 86\ \text{m}^3/\text{h}`]
        ]],
        ['ex', 'Example — balancing a split chemical feed (lecture)', [
          ['t', R`20 L/min of liquid ($\rho = 1000$, $\mu = 10^{-3}$) in a 50 mm pipe is split equally between the old 11 m leg and a new 37.5 mm spur. Smooth, turbulent: $f = 0.316Re^{-1/4}$. Each leg: one 90° bend ($\xi = 1$) and an exit ($\xi = 2$ given). How long should the spur be?`],
          ['svg', 'tf_chem_feed', 'Equal flows need equal pressure drops along both legs, which sets the length of the new spur.'],
          ['ans'],
          ['m', R`Q = 3.3\times10^{-4}\ \text{m}^3/\text{s},\ \dot m_i = 0.333\ \text{kg/s};\quad f = 0.316\left(\frac{4\dot m}{\pi\mu D}\right)^{-1/4} = 0.297\left(\frac{\mu D}{\dot m}\right)^{1/4}`],
          ['m', R`\dot m = \tfrac12\dot m_i:\quad \Delta p = 0.202\frac{\dot m_i^2}{\rho D^4}\xi + 0.0716\frac{L\,\dot m_i^{7/4}\mu^{1/4}}{\rho D^{19/4}}`],
          ['t', R`Old leg (11 m of 50 mm, $\xi = 3$): $\Delta p = 41.7$ Pa. Equal flows need equal $\Delta p$ across the spur:`],
          ['m', R`L = \frac{\rho D^{19/4}}{0.0716\,\dot m_i^{7/4}\mu^{1/4}}\left(\Delta p - 0.202\frac{\dot m_i^2\xi}{\rho D^4}\right) = 0.70\ \text{m}`]
        ]]
      ]
    },
    {
      num: '8.6', title: 'Worked Design: a Draining Tank',
      blocks: [
        ['para', R`A large tank (liquid depth $L_2 = 0.30$ m, effectively constant) drains through a vertical pipe of length $L_1 = 0.30$ m and diameter $d$; liquid $\rho = 930$ kg/m³. The driving pressure is the head $\rho gL_2$, plus gravity acting on the liquid in the pipe itself:`],
        ['svg', 'tf_draining_tank', 'Draining tank: the liquid head plus the weight of the liquid in the vertical pipe drives the flow out of the bottom.'],
        ['disp', [ R`\rho g\frac{L_2}{L_1} = \frac{4}{d}\tau_w - \rho g \;\Rightarrow\; u_m^2 = \frac{2gd}{f}\left(\frac{L_2}{L_1}+1\right) \quad(\text{no minor losses}) \tag{8.3}` ]],
        ['ex', 'Part a — using it as a viscometer', [
          ['t', R`$d = 1.22$ mm; measured $Q = 4.5$ L/h. Assuming viscous flow, find $\mu$.`],
          ['ans'],
          ['m', R`Q = 1.25\times10^{-6}\ \text{m}^3/\text{s},\ u_m = 1.07\ \text{m/s};\quad f = \frac{64}{Re} \Rightarrow \rho g\frac{L_2}{L_1} = \frac{32\mu u_m}{d^2} - \rho g`],
          ['m', R`\mu = \frac{d^2}{32u_m}\left(\frac{L_2}{L_1}+1\right)\rho g = 7.93\times10^{-4}\ \text{kg/m s} \qquad Re = 1530\ \checkmark,\ f = 0.042`]
        ]],
        ['ex', 'Part b — is the answer unique?', [
          ['t', R`The measurement really fixes only $f = 0.042$. Could a turbulent flow give the same $f$?`],
          ['ans'],
          ['t', R`Yes: on the smooth curve $f = 0.042$ also at $Re \approx 3800$, which would mean $\mu = 3.2\times10^{-4}$ kg/m s. **Check which regime you're in** before trusting a viscometer reading.`]
        ]],
        ['ex', 'Parts c–e — bigger pipe, roughness, minor losses', [
          ['t', R`Now $d = 5$ mm. (c) Smooth pipe, Blasius; (d) plastic, $e = 0.0025$ mm; (e) add entry ($k = 0.5$) and exit ($k = 1.0$) losses.`],
          ['ans'],
          ['m', R`\text{(c) } u_m^{7/4} = \frac{2}{0.316}\frac{\rho^{1/4}d^{5/4}}{\mu^{1/4}}g\left(\frac{L_2}{L_1}+1\right)`],
          ['t', R`With the slides' numbers: $u_m = 3.0$ m/s, $Q = 5.89\times10^{-5}$ m³/s, $Re = 44\,000$, $f = 0.022$. (d) $\epsilon = 5\times10^{-4}$: $f = 0.023$, $u_m = 2.92$ m/s, $Q = 5.73\times10^{-5}$ m³/s.`],
          ['m', R`\text{(e) } u_m^2 = \frac{2g(L_2/L_1+1)}{f/d + \sum k/L_1} = \frac{39.24}{f/0.005 + 5}:\quad f = 0.025 \Rightarrow u_m = 1.98\ \text{m/s},\ Q = 3.89\times10^{-5}\ \text{m}^3/\text{s}`],
          ['t', R`Minor losses cut the flow by a third — "minor" is a misnomer for short pipes.`]
        ]],
        ['warn', 'Warning', [
          R`The slides say parts c–e use "the same fluid as in part a", but their numbers ($Re = 44\,000$ at 3.0 m/s; $Re = 14\,600\,u_m$) only work with part b's $\mu = 3.2\times10^{-4}$. With part a's $\mu = 7.93\times10^{-4}$, part (c) gives $u_m = 2.63$ m/s, $Re = 15\,400$, $Q = 5.2\times10^{-5}$ m³/s. The method is identical either way.`
        ]]
      ]
    },
    {
      num: 'Ex 8', title: 'Problem Sheet — Systems with Minor Losses', wk: true,
      blocks: [
        ['ex', 'Q3 — pump between two tanks', [
          ['t', R`Water is pumped 30 m uphill between two large tanks through 120 m of 5 cm structural-steel pipe, with an open globe valve (10), a screwed 90° elbow (0.3), a half-open gate valve (2.1), entrance and exit losses (1.0 and 0.5 as given). Pump efficiency 0.75; $Q = 360$ L/min. Power? [4.7 kW]`],
          ['svg', 'tf_pump_tanks', 'Pump head = major loss + every minor loss + the 30 m lift.'],
          ['ans'],
          ['m', R`Q = 6\times10^{-3}\ \text{m}^3/\text{s},\ u_m = 3.1\ \text{m/s},\ Re = 1.53\times10^5,\ \epsilon = \frac{0.025}{50} = 5\times10^{-4} \Rightarrow f = 0.0195`],
          ['m', R`\Delta p_f = \tfrac12\frac{L}{D}\rho u_m^2 f = 225\ \text{kPa} \qquad \Delta p_m = (10+0.3+2.1+1+0.5)\tfrac12\rho u_m^2 = 67\ \text{kPa} \qquad \Delta p_g = \rho g z = 294\ \text{kPa}`],
          ['m', R`\Delta p = 586\ \text{kPa} \Rightarrow P = \frac{\Delta p\,Q}{\eta} = 4.7\ \text{kW}`],
          ['t', R`(The question swaps the usual entrance 0.5 / exit 1.0 values — the sum is the same.)`]
        ]],
        ['ex', 'Q4 — chimney draught with minor losses', [
          ['t', R`Return to the chimney: $\Delta p = 15$ Pa, $D = 0.1$ m, $L = 10$ m, smooth (Blasius). Losses: entrance 0.5, exit 1.0, two changes of direction 0.5 each. Draught velocity? [2.16 m/s]`],
          ['svg', 'tf_chimney', 'Same chimney, now with entrance, exit and two changes of direction added to the friction loss.'],
          ['ans'],
          ['m', R`\Delta p = \tfrac12\rho u^2\left(\sum\xi + \frac{4L}{D}0.079\left(\frac{\rho uD}{\mu}\right)^{-1/4}\right),\qquad \sum\xi = 2.5`],
          ['m', R`15 = 0.6u^2\left(2.5 + 3.45u^{-1/4}\right) \;\Rightarrow\; u^2 + 1.38u^{1.75} - 10.0 = 0 \;\Rightarrow\; u = 2.16\ \text{m/s}`],
          ['t', R`Compare 3.1 m/s with friction only — minor losses matter a lot here.`]
        ]],
        ['ex', 'Q5 — domestic hot-water network', [
          ['t', R`Tank at +50 kPa gauge feeds a bath (D), basin (E) and sink (F) on one level. Runs: A–B 22 mm × 12 m; B–C 22 mm × 8 m; C–D 22 mm × 6 m; B–F 15 mm × 15 m; C–E 15 mm × 7 m. Taps $\xi = 2$, each 90° bend $\xi = 1$; $\mu = 4.8\times10^{-3}$, $\rho = 985$. (a) Only D open, $f = 0.316Re^{-1/4}$. (b) D and E open, $f = 0.005$. (c) All open. [0.56; 0.93 & 0.33; 0.81, 0.29 & 0.35 kg/s]`],
          ['svg', 'tf_hot_water', 'Hot-water network: thick lines 22 mm, thin lines 15 mm; each tap ξ = 2, each 90° bend ξ = 1.'],
          ['ans'],
          ['m', R`\text{(a) } L = 26\ \text{m},\ \xi = 5:\ 5\times10^4 = 492.5u^2\left(5 + 45.5u^{-1/4}\right) \Rightarrow u^2 + 9.1u^{7/4} - 20.3 = 0 \Rightarrow u = 1.49\ \text{m/s},\ \dot m = 0.56\ \text{kg/s}`],
          ['t', R`(b), (c) With fixed $f$, write every section as $\Delta p = K\dot m^2$ with $K = \frac{8}{\pi^2\rho D^4}\left(\xi + f\frac{L}{D}\right)$, add mass conservation at each junction, and eliminate the junction pressures:`],
          ['m', R`\text{(b) } 50\,000 - p_C = 2.30\times10^4\dot m_A^2,\ \ p_C = 1.53\times10^4\dot m_D^2 = 1.19\times10^5\dot m_E^2 \Rightarrow p_C = 13\,325\ \text{Pa},\ \dot m_D = 0.93,\ \dot m_E = 0.33`],
          ['m', R`\text{(c) } \dot m_D = \sqrt{K_{CE}/K_{CD}}\,\dot m_E = 2.79\dot m_E,\ \ \dot m_F^2 = 1.21\dot m_E^2 \Rightarrow \dot m_E = 0.29,\ \dot m_D = 0.81,\ \dot m_F = 0.35\ \text{kg/s}`],
          ['t', R`Opening more taps lowers the junction pressures, so every outlet gets less — the shared pipework is the bottleneck.`]
        ]]
      ]
    }
  ]
}
