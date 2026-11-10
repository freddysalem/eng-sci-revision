{
  key: 'tf_moody', area: 'pipe', num: '7', week: 'Week 4',
  name: 'Turbulent Pipe Friction and the Moody Diagram',
  triggers: 'rough pipe · relative roughness e/D · Moody chart · Colebrook · Haaland · Prandtl smooth-pipe law · hydraulically smooth / transitionally rough / fully rough · friction head · inclined pipe',
  sections: [
    {
      num: '', title: 'Revision Objectives — Turbulent Pipe Friction and the Moody Diagram',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Explain why **roughness** doesn't matter in laminar flow but matters a great deal in turbulent flow.`,
          R`Classify a wall as **hydraulically smooth**, **transitionally rough** or **fully rough** using $eu^*/\nu$.`,
          R`Quote the Prandtl smooth-pipe law, the fully-rough law, **Colebrook** and **Haaland**.`,
          R`Read the **Moody diagram**: compute $Re$ and $e/D$, read the **Darcy** $f$, convert to $\Delta p$ and head.`,
          R`Include gravity for inclined pipes and explain why finding $u$ or $D$ from $\Delta p$ needs iteration.`
        ]]
      ]
    },
    {
      num: '7.1', title: 'Turbulent vs Laminar Hydraulics',
      blocks: [
        ['para', R`A turbulent pipe flow has $Re \gtrsim 3000$, is dominated by inertia ($\rho$) rather than viscosity ($\mu$), and has a very different velocity profile. But much is the same:`],
        ['list', null, false, [
          R`Same dimensional analysis: $C_f = f(Re, L/D, e/D)$.`,
          R`Same recipe and the same force balance: $\dfrac{\Delta p}{L} = \dfrac{4}{D}\tau_w + \rho g\sin\theta$.`,
          R`Still no slip, so still boundary layers.`
        ]],
        ['warn', 'Warning', [
          R`By convention turbulent-flow charts use the **Darcy** friction factor $f = 4C_f = 8\tau_w/\rho u_m^2$. The Moody diagram's $f$ is **not** $C_f$. (Massey's $f$ *is* $C_f$ — always check.)`
        ]],
        ['eq', [
          ['Darcy–Weisbach pressure drop', R`\Delta p = f\,\frac{L}{D}\,\tfrac12\rho u_m^2`, '[Pa]', 'Use with the Moody f.'],
          ['Wall stress from Darcy f', R`\tau_w = \frac{f}{4}\cdot\tfrac12\rho u_m^2`, '[Pa]', ''],
          ['Friction head', R`H_f = \frac{\Delta p}{\rho g} = f\frac{L}{D}\frac{u_m^2}{2g}`, '[m]', 'Depth of liquid equivalent to the loss.']
        ]]
      ]
    },
    {
      num: '7.2', title: 'Smooth Pipes',
      blocks: [
        ['para', R`Integrating the log law across the pipe gives $u_m/u^* = A\ln(Ru^*/\nu) - \tfrac32A + B$. Writing $u_m/u^* = (8/f)^{1/2}$ and tidying constants (base-10 logs by convention), then Prandtl's adjustment to fit data:`],
        ['eq', [
          ['Prandtl smooth-pipe law', R`\frac{1}{\sqrt f} = 2.0\log_{10}\!\left(Re\sqrt f\right) - 0.8`, '[–]', 'Accurate, 5000 < Re < 3×10⁶, but implicit in f.'],
          ['Blasius (smooth)', R`f = 0.316\,Re^{-1/4} \quad\Leftrightarrow\quad C_f = 0.079\,Re^{-1/4}`, '[–]', 'Explicit; 4000 < Re < 10⁵. No allowance for roughness.']
        ]],
        ['para', R`Blasius (a student of Prandtl) made the first $f$–$Re$ correlation; it matches Hagen's 1839 finding that $\Delta p \propto u_m^{7/4}$ at high speed.`]
      ]
    },
    {
      num: '7.3', title: 'Rough Pipes',
      blocks: [
        ['para', R`Roughness makes **no difference to laminar flow** but a **very large difference** to turbulent flow, because roughness elements can poke through and disrupt the **viscous sublayer**. Roughness is characterised by the **relative roughness** $\epsilon = e/D$, though what $e$ means for a real surface is unclear: the curves come from Nikuradse's walls coated in uniform sand grains.`],
        ['svg', 'tf_roughness_regimes', 'Roughness elements against the viscous sublayer: buried (smooth), poking through (transitional), or destroying it (fully rough).'],
        ['html', '<table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Regime</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Roughness Reynolds number</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">What happens</th></tr></thead><tbody><tr><td style="padding:6px 10px"><b>Hydraulically smooth</b></td><td style="padding:6px 10px">eu*/ν &lt; 5</td><td style="padding:6px 10px">Roughness inside the sublayer; disturbances damped by viscosity. Use smooth-pipe laws.</td></tr><tr><td style="padding:6px 10px"><b>Transitionally rough</b></td><td style="padding:6px 10px">5 &lt; eu*/ν &lt; 70</td><td style="padding:6px 10px">Both viscosity and form drag from the roughness matter. Colebrook.</td></tr><tr><td style="padding:6px 10px"><b>Fully rough</b></td><td style="padding:6px 10px">eu*/ν &gt; 70</td><td style="padding:6px 10px">Sublayer destroyed; form drag dominates; f independent of Re.</td></tr></tbody></table>'],
        ['svg', 'tf_smooth_rough', 'Roughness shifts the log-law part of the velocity profile downwards (more friction); the slope stays the same.'],
        ['eq', [
          ['Fully rough (Nikuradse)', R`\frac{1}{\sqrt f} = 2.0\log_{10}\!\frac{D}{e} + 1.14`, '[–]', 'Flat lines at the right of the Moody chart.'],
          ['Colebrook (transitional)', R`\frac{1}{\sqrt f} = -2.0\log_{10}\!\left(\frac{e/D}{3.7} + \frac{2.51}{Re\sqrt f}\right)`, '[–]', 'Interpolates smooth → fully rough. Implicit: iterate.'],
          ['Haaland (explicit)', R`\frac{1}{\sqrt f} \approx -1.8\log_{10}\!\left[\left(\frac{e/D}{3.7}\right)^{1.11} + \frac{6.9}{Re}\right]`, '[–]', 'Within ~2% of Colebrook, no iteration.']
        ]],
        ['warn', 'Warning', [
          R`The written notes print the fully-rough law as $1/\sqrt f = 2.0\log(Re\sqrt f) + 1.14$. But they also say that in this regime viscosity — and so $Re$ — no longer influences friction. The consistent form is $2.0\log(D/e) + 1.14$, which is exactly Colebrook's high-$Re$ limit: $-2\log(e/3.7D) = 2\log(D/e) + 1.136$.`
        ]],
        ['warn', 'Note', [
          R`Colebrook and Haaland assume roughness effects appear gradually as $Re$ rises; some argue the change is more abrupt. There is **no** rough-pipe version of Blasius.`
        ]]
      ]
    },
    {
      num: '7.4', title: 'Using the Moody Diagram',
      blocks: [
        ['@img', 'moody'],
        ['list', R`**Method** (the chart is easiest when $u_m$, $D$ and $e$ are known):`, true, [
          R`Convert to SI. Compute $u_m = Q/(\pi D^2/4)$.`,
          R`Compute $Re = \rho u_m D/\mu$ — where you are **across** the chart.`,
          R`Look up $e$ in the table; compute $\epsilon = e/D$ — **which curve** (right-hand axis).`,
          R`Read $f$ on the left axis. It's the **Darcy** $f$ — don't divide by 4 unless you want $C_f$.`,
          R`$\Delta p = f\frac{L}{D}\tfrac12\rho u_m^2$; add $\rho gL\sin\theta$ if inclined; minor losses if any (Topic 8).`
        ]],
        ['warn', 'Key Insight', [
          R`If you know $\Delta p$ and want $u_m$ or $D$, it's harder: $u_m$ appears in both $f$ and $Re$, and $D$ in all three groups. **Guess**, compute, read $f$, correct, repeat until nothing changes. Usually 1–2 iterations: big changes in flow rate only cause small changes in $f$.`,
          R`Answers are sensitive to how you read the chart — more decimal places is not more accuracy.`
        ]],
        ['ex', 'Example — asphalted cast-iron water main (Moody 1944)', [
          ['t', R`$L = 61.0$ m, $D = 0.15$ m, $e = 0.12$ mm, water ($\rho = 1000$, $\mu = 10^{-3}$), $u_m = 1.82$ m/s. Find the pressure drop and friction head.`],
          ['ans'],
          ['m', R`Re = \frac{1000\times1.82\times0.15}{10^{-3}} = 2.7\times10^5 \qquad \epsilon = \frac{0.12}{150} = 8\times10^{-4}`],
          ['m', R`\text{Moody: } f = 0.02 \;\Rightarrow\; \Delta p = \tfrac12\rho u_m^2 f\frac{L}{D} = 13\,500\ \text{Pa},\qquad H_f = \frac{\Delta p}{\rho g} = 1.37\ \text{m}`]
        ]],
        ['ex', 'Example — oil up an inclined cast-iron pipe (White 6.7)', [
          ['t', R`Oil ($\rho = 900$, $\mu = 9\times10^{-3}$), $Q = 0.2$ m³/s, cast iron ($e = 0.15$ mm), $L = 500$ m, $D = 0.20$ m, inclined upwards at 10°. Find (1) the frictional and (2) the overall pressure drop.`],
          ['svg', 'tf_pipe_incline', 'Uphill flow: the pressure must overcome wall friction and the weight component ρgL sin θ.'],
          ['ans'],
          ['m', R`u_m = \frac{0.2}{\tfrac{\pi}{4}(0.2)^2} = 6.4\ \text{m/s} \qquad Re = 1.28\times10^5 \qquad \epsilon = 7.5\times10^{-4} \Rightarrow f = 0.021`],
          ['m', R`\Delta p_f = \tfrac12\rho u_m^2 f\frac{L}{D} = 9.7\times10^5\ \text{Pa} \qquad \Delta p_g = \rho gL\sin\theta = 7.7\times10^5\ \text{Pa}`],
          ['m', R`\Delta p = \Delta p_f + \Delta p_g = 1.7\times10^6\ \text{Pa}`]
        ]]
      ]
    },
    {
      num: 'Ex 7', title: 'Problem Sheet — Friction Factors', wk: true,
      blocks: [
        ['ex', 'Q2 — laminar vs turbulent, new vs rusted steel', [
          ['t', R`Water in a 25 mm steel pipe. (a) At 1.88 L/min: (i) $Re$; (ii) $f$ from the chart (laminar) and $\tau_w$; (iii) pressure gradient, vs Poiseuille; (iv) inclined at 10°. (b) In new structural steel: (i) the turbulent flow rate giving the same $f$, and its gradient; (ii) compare with Blasius; (iii) gradient if the pipe rusts. (c) Why is the chart awkward for finding $u$ or $D$? [1600; 0.04, 0.020 Pa; 3.26 Pa/m; 1706 Pa/m; 5.42 L/min, 27.1 Pa/m; 0.038; 39.3 Pa/m]`],
          ['ans'],
          ['m', R`\text{(a) } Q = 3.13\times10^{-5}\ \text{m}^3/\text{s},\ U = 0.0638\ \text{m/s},\ Re = 1600,\ f = 64/Re = 0.04,\ \tau_w = \frac{f\rho U^2}{8} = 0.020\ \text{Pa}`],
          ['m', R`\frac{\Delta p}{L} = \frac{4\tau_w}{D} = 3.26\ \text{Pa/m}\ \ \left(\text{Poiseuille: } \frac{32\mu U}{D^2} = 3.27\right) \qquad +\rho g\sin10^\circ \Rightarrow 1706\ \text{Pa/m}`],
          ['t', R`Note how **weight dominates** the pressure drop for a liquid in an inclined pipe.`],
          ['m', R`\text{(b-i) new steel } e = 0.025\ \text{mm},\ \epsilon = 10^{-3};\ f = 0.04 \text{ at } Re = 4600 \Rightarrow U = 0.184\ \text{m/s},\ Q = 5.42\ \text{L/min},\ \frac{\Delta p}{L} = 27.1\ \text{Pa/m}`],
          ['t', R`(b-ii) Blasius gives $f = 0.316(4600)^{-1/4} = 0.038$ — good, because new steel is nearly smooth. (b-iii) Rusted: $e = 0.5$ mm, $\epsilon = 0.02$ ⇒ $f = 0.058$ ⇒ 39.3 Pa/m. Blasius would still say 0.038 — a poor estimate when roughness is large; a pump sized on the new pipe would struggle.`],
          ['t', R`(c) $\Delta p$ only appears in $f$; $U$ appears in $f$ and $Re$, and $D$ in all three groups — so you must guess and iterate.`]
        ]]
      ]
    }
  ]
}
