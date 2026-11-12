{
  key: 'tf_moody', area: 'pipe', num: '7', week: 'Week 4',
  name: 'Turbulent Pipe Friction and the Moody Diagram',
  triggers: 'rough pipe · relative roughness e/D · Moody chart · Colebrook · Haaland · Prandtl smooth-pipe law · hydraulically smooth / transitionally rough / fully rough · friction velocity u* · roughness Reynolds number eu*/ν · friction head · inclined pipe · find u or D from Δp · Re√f',
  sections: [
    {
      num: '', title: 'Revision Objectives — Turbulent Pipe Friction and the Moody Diagram',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Explain why **roughness** doesn't matter in laminar flow but matters a great deal in turbulent flow.`,
          R`Compute the **friction velocity** $u^* = u_m\sqrt{f/8}$ and classify a wall as **hydraulically smooth**, **transitionally rough** or **fully rough** using $eu^*/\nu$.`,
          R`Quote (and follow the derivation of) the Prandtl smooth-pipe law; quote the fully-rough law, **Colebrook** and **Haaland**.`,
          R`Read the **Moody diagram**: compute $Re$ and $e/D$, read the **Darcy** $f$, convert to $\Delta p_f$ and head.`,
          R`Include gravity for inclined pipes (uphill and downhill), and find $u$ or $D$ from $\Delta p$ by iteration — or directly using $Re\sqrt f$.`
        ]]
      ]
    },
    {
      num: '7.1', title: 'Turbulent vs Laminar Hydraulics',
      blocks: [
        ['para', R`A turbulent pipe flow has $Re \gtrsim 3000$, is dominated by inertia ($\rho$) rather than viscosity ($\mu$), contains turbulence, and has a very different (much flatter) velocity profile. But much is the same as for laminar flow:`],
        ['list', null, false, [
          R`**Same dimensional analysis.** The lectures write $C_f = f(Re, L/D, \epsilon)$, with $\epsilon = e/D$. To avoid clashing with the Darcy friction factor $f$ below, these notes write the function as $\varphi$. For **fully developed** flow the $L/D$ dependence is only the explicit length in $\Delta p_f$ (see the Note below), so the friction factor itself reduces to $f = \varphi(Re,\ e/D)$.`,
          R`**Same recipe** (Topic 4): find $Re$ and the friction factor, then use the force balance.`,
          R`**Same force balance** on a slice of pipe (derived below, and in Topic 4): $\Delta p/L = (4/D)\,\tau_w + \rho g\sin\theta$.`,
          R`Still **no slip** at the walls, so still boundary layers.`
        ]],
        ['warn', 'Note', [
          R`**Why $L/D$ drops out.** In **fully developed** flow the velocity profile, and so $\tau_w$, is the same at every section, so the pressure drop is simply proportional to $L$. The length enters only through the explicit $L/D$ in $\Delta p_f = f\frac{L}{D}\tfrac12\rho u_m^2$; the friction factor itself depends on just two groups: $f = \varphi(Re,\ e/D)$. That is why the Moody diagram has only two inputs. (Entrance-length effects, where the flow is still developing, are ignored.)`
        ]],
        ['svg', 'tf_moody_incline', 'Force balance on a slice δl of an inclined pipe (θ > 0 uphill). Pressure pA pushes the slice up the pipe; the wall stress τ_w on the area πD δl and the weight component W sin θ resist it. W cos θ is carried by the wall and does not enter the balance along the pipe.'],
        ['deriv', 'Where the force balance comes from', [
          ['t', R`Take the slice of length $\delta l$, area $A = \pi D^2/4$, pressure $p$ upstream and $p - \delta p$ downstream. In steady, fully developed flow the momentum flux in equals the momentum flux out, so the forces **along the pipe** sum to zero:`],
          ['m', R`pA - (p-\delta p)A - \tau_w\,\pi D\,\delta l - \rho g A\,\delta l\,\sin\theta = 0`],
          ['m', R`\delta p\,\frac{\pi D^2}{4} = \tau_w\,\pi D\,\delta l + \rho g\,\frac{\pi D^2}{4}\,\delta l\sin\theta \;\;\Rightarrow\;\; \frac{\Delta p}{L} = \frac{4}{D}\tau_w + \rho g\sin\theta`],
          ['t', R`Over a length $L$, $\delta p/\delta l = \Delta p/L$, where $\Delta p = p_1 - p_2$ is the **total** pressure **drop** in the flow direction.`]
        ]],
        ['para', R`**Two parts of $\Delta p$.** Multiply by $L$: the total drop splits into a **frictional** part and a **gravity** part,`],
        ['disp', [R`\Delta p = \underbrace{\frac{4L}{D}\tau_w}_{\Delta p_f\ \text{(friction)}} + \underbrace{\rho g L\sin\theta}_{\Delta p_g\ \text{(gravity)}} \tag{7.1}`]],
        ['list', null, false, [
          R`$\theta$ is measured from the horizontal, **positive when the flow goes uphill**. Then $\Delta p_g > 0$: the pump must also lift the fluid.`,
          R`**Downhill** flow has $\theta < 0$, so $\Delta p_g = \rho gL\sin\theta < 0$: gravity helps. If $|\Delta p_g| > \Delta p_f$ the total $\Delta p$ is negative — the pressure actually **rises** in the flow direction.`,
          R`$\Delta p_g = \rho g\,\Delta z$, where $\Delta z = L\sin\theta$ is the rise of the outlet above the inlet; it does not depend on the flow at all.`,
          R`The Darcy–Weisbach formula and the friction head $H_f$ below give only the **frictional** part $\Delta p_f$.`
        ]],
        ['warn', 'Warning', [
          R`By convention turbulent-flow charts use the **Darcy** friction factor $f = 4C_f = 8\tau_w/\rho u_m^2$. The Moody diagram's $f$ is **not** $C_f$. (In Massey, the symbol $f$ **is** $C_f$ — always check which definition a book uses.)`,
          R`The same factor of 4 links the **laminar** laws: Poiseuille flow gives $C_f = 16/Re$, i.e. Darcy $f = 64/Re$ — the straight line labelled "Laminar Flow, 64/Re" at the top left of the Moody chart.`
        ]],
        ['eq', [
          ['Darcy–Weisbach (frictional) pressure drop', R`\Delta p_f = f\,\frac{L}{D}\,\tfrac12\rho u_m^2`, '[Pa]', 'Use with the Moody (Darcy) f. Friction only.'],
          ['Gravity pressure drop', R`\Delta p_g = \rho g L\sin\theta`, '[Pa]', 'θ > 0 uphill, θ < 0 downhill.'],
          ['Total pressure drop', R`\Delta p = \Delta p_f + \Delta p_g`, '[Pa]', '+ minor losses if any (Topic 8).'],
          ['Wall stress from Darcy f', R`\tau_w = \frac{f}{4}\cdot\tfrac12\rho u_m^2`, '[Pa]', ''],
          ['Friction head', R`H_f = \frac{\Delta p_f}{\rho g} = f\frac{L}{D}\frac{u_m^2}{2g}`, '[m]', 'Depth of liquid equivalent to the frictional loss.'],
          ['Laminar friction factor', R`f = \frac{64}{Re} \quad\Leftrightarrow\quad C_f = \frac{16}{Re}`, '[–]', 'Re < 2000; no dependence on roughness.'],
          ['Friction velocity', R`u^* = \sqrt{\frac{\tau_w}{\rho}} = u_m\sqrt{\frac{f}{8}}`, '[m/s]', 'Follows from the wall-stress row above. Not a real velocity in the flow.']
        ]]
      ]
    },
    {
      num: '7.2', title: 'Smooth Pipes',
      blocks: [
        ['warn', 'Recall Knowledge', [
          R`From Topic 6: the **friction velocity** $u^* = \sqrt{\tau_w/\rho}$ characterises the wall shear stress. Because $\tau_w = \frac{f}{8}\rho u_m^2$, it is directly tied to the Darcy friction factor: $u^*/u_m = \sqrt{f/8}$.`,
          R`The **log law** in the inner region: $\bar u/u^* = A\ln(yu^*/\nu) + B$, with Nikuradse's constants $A = 2.5$ (the reciprocal of the von Kármán constant, $A = 1/\kappa$, $\kappa \approx 0.4$) and $B = 5.5$.`
        ]],
        ['para', R`For smooth pipes we find $f$ the same way as for laminar flow: integrate the velocity profile across the pipe to get $u_m$, then write $u_m$ in terms of $f$. The viscous sublayer is so thin that the log law can be used right across the pipe.`],
        ['deriv', 'From the log law to Prandtl\'s smooth-pipe law', [
          ['t', R`**1. Integrate the log law** (with $y = R - r$, $s = r/R$):`],
          ['m', R`u_m = \frac{2}{R^2}\int_0^R \bar u\, r\,dr,\qquad \frac{\bar u}{u^*} = A\ln\frac{Ru^*}{\nu} + A\ln(1-s) + B`],
          ['m', R`\frac{u_m}{u^*} = \left(A\ln\frac{Ru^*}{\nu} + B\right)\underbrace{2\!\int_0^1\! s\,ds}_{=\,1} + A\underbrace{2\!\int_0^1\! s\ln(1-s)\,ds}_{=\,-3/2} = A\ln\frac{Ru^*}{\nu} - \tfrac32A + B`],
          ['t', R`The $-\tfrac32A$ is just the area-average of the $\ln(1-s)$ term ($\int_0^1 s\ln(1-s)\,ds = -\tfrac34$).`],
          ['t', R`**2. Bring in $f$.** $f = 8\tau_w/\rho u_m^2 = 8(u^*/u_m)^2$, so $u_m/u^* = \sqrt{8/f}$.`],
          ['t', R`**3. Write $Ru^*/\nu$ with $Re$.** With $R = D/2$ and $Re = \rho u_m D/\mu = u_m D/\nu$:`],
          ['m', R`\frac{Ru^*}{\nu} = \frac{1}{2}\,\frac{u_mD}{\nu}\,\frac{u^*}{u_m} = \frac{Re}{2}\sqrt{\frac f8} = \frac{Re\sqrt f}{2\sqrt8}`],
          ['t', R`**4. Substitute and divide by $\sqrt8$:**`],
          ['m', R`\sqrt{\frac8f} = A\ln\!\left(Re\sqrt f\right) - A\ln\!\left(2\sqrt8\right) - \tfrac32A + B \;\Rightarrow\; \frac{1}{\sqrt f} = \frac{A}{\sqrt8}\ln\!\left(Re\sqrt f\right) + \frac{B - \tfrac32A - A\ln(2\sqrt8)}{\sqrt8}`],
          ['t', R`**5. Change to base-10 logs** ($\ln x = 2.303\log_{10}x$) and put in $A = 2.5$, $B = 5.5$, with $\sqrt8 = 2.828$ and $\ln(2\sqrt8) = 1.733$:`],
          ['m', R`\frac{A\ln10}{\sqrt8} = \frac{2.5\times2.303}{2.828} = 2.04, \qquad \frac{B - \tfrac32A - A\ln(2\sqrt8)}{\sqrt8} = \frac{5.5 - 3.75 - 2.5\times1.733}{2.828} = -0.91`],
          ['m', R`\frac{1}{\sqrt f} = 2.04\log_{10}\!\left(Re\sqrt f\right) - 0.91`],
          ['t', R`**6. Prandtl adjusted the constants** to fit the measured data better, giving the law below (2.0 and −0.8).`]
        ]],
        ['warn', 'Note', [
          R`The written notes quote $1/\sqrt f = 1.99\log(Re\sqrt f) - 1.02$ at step 5. Those numbers follow from $A = 2.44$ ($\kappa = 0.41$) and $B = 5.0$ (the constants used in White), not from the $A = 2.5$, $B = 5.5$ quoted earlier in the same notes, which give $2.04$ and $-0.91$. The difference doesn't matter in practice: the law you use is Prandtl's fitted version, $2.0$ and $-0.8$.`
        ]],
        ['eq', [
          ['Prandtl smooth-pipe law', R`\frac{1}{\sqrt f} = 2.0\log_{10}\!\left(Re\sqrt f\right) - 0.8`, '[–]', 'Accurate, 5000 < Re < 3×10⁶, but implicit in f.'],
          ['Blasius (smooth), Darcy form', R`f = 0.316\,Re^{-1/4}`, '[–]', 'Explicit; 4000 < Re < 10⁵. No allowance for roughness.'],
          ['Blasius (smooth), skin-friction form', R`C_f = 0.079\,Re^{-1/4}`, '[–]', 'Same law: 0.316 = 4 × 0.079.']
        ]],
        ['para', R`Blasius (a student of Prandtl) made the first $f$–$Re$ correlation. It fits Hagen's 1839 finding that at high speed the pressure drop depends on $u_m^{7/4}$:`],
        ['disp', [R`\Delta p_f \propto f\,u_m^2 \propto Re^{-1/4}u_m^2 \propto u_m^{-1/4}\,u_m^{2} = u_m^{7/4} \tag{7.2}`]],
        ['para', R`Compare laminar flow, where $f = 64/Re \propto u_m^{-1}$ gives $\Delta p_f \propto u_m$, and fully rough flow, where $f$ is constant and $\Delta p_f \propto u_m^2$.`]
      ]
    },
    {
      num: '7.3', title: 'Rough Pipes',
      blocks: [
        ['para', R`Roughness makes **no difference to laminar flow** but a **very large difference** to turbulent flow, because roughness elements can poke through and disrupt the **viscous sublayer**. As the roughness $e$ grows it becomes more important than $\mu$ (or $Re$), and **Blasius no longer works**. Roughness is characterised by the **relative roughness** $\epsilon = e/D$, though what $e$ means for a real surface is unclear: the curves come from Nikuradse's walls coated in uniform sand grains, and how those relate to real, irregular surfaces is not clear.`],
        ['warn', 'Warning', [
          R`**Watch the symbols.** In these notes $e$ is the **absolute** roughness (a length, in mm) and $\epsilon = e/D$ is the **relative** roughness (no units). The Moody chart's material table calls the absolute roughness "ε (mm)" and labels its right-hand axis "ε/d"; the written notes also call $e/D$ "$k$". Rule: **if it has units of mm, it is the absolute roughness $e$** — divide by $D$ (in the same units) before choosing a curve.`
        ]],
        ['svg', 'tf_roughness_regimes', 'Roughness elements against the viscous sublayer: buried (smooth), poking through (transitional), or destroying it (fully rough).'],
        ['para', R`The **roughness Reynolds number** $eu^*/\nu$ compares the roughness height with the sublayer thickness (the sublayer reaches $yu^*/\nu \approx 5$). To get it, find $f$ first, then use $u^* = u_m\sqrt{f/8}$:`],
        ['disp', [R`\frac{eu^*}{\nu} = \frac{e}{D}\cdot\frac{u_mD}{\nu}\cdot\frac{u^*}{u_m} = \frac{e}{D}\,Re\,\sqrt{\frac f8} \tag{7.3}`]],
        ['html', '<table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Regime</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Roughness Reynolds number</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">What happens</th></tr></thead><tbody><tr><td style="padding:6px 10px"><b>Hydraulically smooth</b></td><td style="padding:6px 10px">eu*/ν &lt; 5</td><td style="padding:6px 10px">Roughness inside the sublayer; disturbances damped by viscosity. Use smooth-pipe laws.</td></tr><tr><td style="padding:6px 10px"><b>Transitionally rough</b></td><td style="padding:6px 10px">5 &lt; eu*/ν &lt; 70</td><td style="padding:6px 10px">Both viscosity and form drag from the roughness (separation behind the elements) matter. Colebrook.</td></tr><tr><td style="padding:6px 10px"><b>Fully rough</b></td><td style="padding:6px 10px">eu*/ν &gt; 70</td><td style="padding:6px 10px">Sublayer destroyed; form drag dominates; f independent of Re.</td></tr></tbody></table>'],
        ['svg', 'tf_moody_smooth_rough', 'Velocity profiles on wall coordinates. Both follow ū/u* = yu*/ν in the sublayer, curve through the buffer layer (5 < yu*/ν < 30) and join the straight log law. Roughness shifts the log law down by ΔB (more friction, lower velocity at a given yu*/ν) but its slope A = 2.5 (5.75 per decade) is unchanged. Beyond yu*/ν ≈ 1000 the profile rises above the log law (outer region).'],
        ['para', R`In the fully rough regime viscosity drops out, and the same dimensional reasoning as for smooth pipes, now including $e$, gives a log law in terms of $y/e$ instead of $yu^*/\nu$ — with the **same** first constant (5.75) as the smooth law $\bar u/u^* = 5.75\log_{10}(yu^*/\nu) + 5.5$:`],
        ['disp', [R`\frac{\bar u}{u^*} = 5.75\log_{10}\frac{y}{e} + 8.48 \tag{7.4}`]],
        ['warn', 'Note', [
          R`The written notes write this as $5.75\log(y/k) + 8.48$ just after defining $k = e/D$. Here $k$ must be the **absolute** roughness height $e$ (Nikuradse's sand-grain size), since $y/k$ has to be dimensionless.`
        ]],
        ['para', R`Integrating (7.4) across the pipe exactly as in 7.2 gives the fully-rough friction law; Colebrook interpolates between the smooth and fully rough laws, and Haaland is an explicit approximation to Colebrook:`],
        ['eq', [
          ['Roughness Reynolds number', R`\frac{eu^*}{\nu} = \frac{e}{D}\,Re\,\sqrt{\frac f8}`, '[–]', '< 5 smooth · 5–70 transitional · > 70 fully rough.'],
          ['Fully rough (Nikuradse)', R`\frac{1}{\sqrt f} = 2.0\log_{10}\!\frac{D}{e} + 1.14`, '[–]', 'Flat lines at the right of the Moody chart.'],
          ['Colebrook (transitional)', R`\frac{1}{\sqrt f} = -2.0\log_{10}\!\left(\frac{e/D}{3.7} + \frac{2.51}{Re\sqrt f}\right)`, '[–]', 'Interpolates smooth → fully rough. Implicit: iterate.'],
          ['Haaland (explicit)', R`\frac{1}{\sqrt f} \approx -1.8\log_{10}\!\left[\left(\frac{e/D}{3.7}\right)^{1.11} + \frac{6.9}{Re}\right]`, '[–]', 'Within ~2% of Colebrook, no iteration.']
        ]],
        ['warn', 'Warning', [
          R`The written notes print the fully-rough law as $1/\sqrt f = 2.0\log(Re\sqrt f) + 1.14$. But they also say that in this regime viscosity — and so $Re$ — no longer influences friction. The consistent form is $2.0\log(D/e) + 1.14$, which is exactly Colebrook's high-$Re$ limit: $-2\log(e/3.7D) = 2\log(D/e) + 1.136$.`
        ]],
        ['warn', 'Key Insight', [
          R`Colebrook contains **both** limits. As $e \to 0$: $-2\log_{10}\!\big(2.51/(Re\sqrt f)\big) = 2.0\log_{10}(Re\sqrt f) - 0.80$ — Prandtl's smooth law. As $Re \to \infty$: $2.0\log_{10}(D/e) + 1.14$ — the fully rough law. The Moody chart is a plot of Colebrook (plus $64/Re$ for laminar flow).`
        ]],
        ['warn', 'Note', [
          R`Colebrook and Haaland assume roughness effects appear gradually as $Re$ rises; some argue the change is more abrupt. So Colebrook can give an $f$ noticeably above the smooth-pipe law even when $eu^*/\nu$ is a little below 5. There is **no** rough-pipe version of Blasius.`
        ]]
      ]
    },
    {
      num: '7.4', title: 'Using the Moody Diagram',
      blocks: [
        ['@img', 'moody'],
        ['para', R`**The Moody diagram** (Darcy $f$ against $Re$, one curve per relative roughness $e/D$). **Click the chart to zoom it full screen** — you need that to read the curves and the right-hand $e/D$ labels. The curves, top to bottom, are $e/D = 0.05,\ 0.04,\ 0.03,\ 0.02,\ 0.015,\ 0.01,\ 0.005,\ 0.002,\ 0.001,\ 5\times10^{-4},\ 2\times10^{-4},\ 10^{-4},\ 5\times10^{-5},\ 10^{-5},\ 5\times10^{-6},\ 10^{-6}$, then the bold "smooth pipe" curve. The straight line at the top left is laminar $f = 64/Re$; the dashed line marks where each curve goes flat (complete turbulence = fully rough).`],
        ['para', R`For checking your readings, the same curves typed out (Darcy $f$ from Colebrook, which the chart plots; the last column is the fully-rough law):`],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:13px;margin:4px 0;font-family:\'JetBrains Mono\',monospace"><thead><tr style="text-align:right;color:var(--k8C8273)">' + ['e/D', 'Re = 4×10³', '10⁴', '10⁵', '10⁶', '10⁷', 'fully rough'].map((h, i) => '<th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0);' + (i ? '' : 'text-align:left') + '">' + h + '</th>').join('') + '</tr></thead><tbody>'
          + [['0.05', '0.077', '0.074', '0.072', '0.072', '0.072', '0.071'], ['0.02', '0.057', '0.052', '0.049', '0.049', '0.049', '0.049'], ['0.01', '0.049', '0.043', '0.039', '0.038', '0.038', '0.038'], ['0.005', '0.045', '0.038', '0.031', '0.031', '0.030', '0.030'], ['0.002', '0.042', '0.034', '0.025', '0.024', '0.023', '0.023'], ['10⁻³', '0.041', '0.032', '0.022', '0.020', '0.020', '0.020'], ['5×10⁻⁴', '0.040', '0.032', '0.020', '0.017', '0.017', '0.017'], ['2×10⁻⁴', '0.040', '0.031', '0.019', '0.015', '0.014', '0.014'], ['10⁻⁴', '0.040', '0.031', '0.019', '0.013', '0.012', '0.012'], ['5×10⁻⁵', '0.040', '0.031', '0.018', '0.013', '0.011', '0.011'], ['10⁻⁵', '0.040', '0.031', '0.018', '0.012', '0.009', '0.008'], ['10⁻⁶', '0.040', '0.031', '0.018', '0.012', '0.008', '0.006'], ['smooth (0)', '0.040', '0.031', '0.018', '0.012', '0.008', '—']].map((r) => '<tr>' + r.map((c, i) => '<td style="padding:5px 8px;border-bottom:1px solid var(--kE7E0D0);text-align:' + (i ? 'right' : 'left') + (i ? '' : ';color:var(--k3A332B)') + '">' + c + '</td>').join('') + '</tr>').join('')
          + '</tbody></table></div>'],
        ['para', R`The chart's material table, typed out (absolute roughness $e$; the chart heads this column "ε (mm)"):`],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:520px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Material</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Absolute roughness e (mm)</th></tr></thead><tbody>'
          + [['Glass, plastic, Perspex', '0.0025'], ['Drawn tubing', '0.0025'], ['Steel, structural or forged (new)', '0.025'], ['Concrete, new smooth', '0.025'], ['Steel, mortar lined', '0.1'], ['Iron, cast', '0.15'], ['Concrete, coarse', '0.25'], ['Steel, rusted', '0.5'], ['Water mains, old', '1.0'], ['Sewers, old', '3.0']]
            .map((r) => '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">' + r[0] + '</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0);font-family:\'JetBrains Mono\',monospace">' + r[1] + '</td></tr>').join('')
          + '</tbody></table>'],
        ['list', R`**Method** (the chart is easiest when $u_m$, $D$ and $e$ are known):`, true, [
          R`Convert to SI. Compute $u_m = Q/(\pi D^2/4)$.`,
          R`Compute $Re = \rho u_m D/\mu$ — where you are **across** the chart.`,
          R`Look up $e$ in the table; compute $\epsilon = e/D$ — **which curve** (right-hand axis).`,
          R`Read $f$ on the left axis. It's the **Darcy** $f$ — don't divide by 4 unless you want $C_f$. (Check: Haaland gives it without the chart.)`,
          R`$\Delta p_f = f\frac{L}{D}\tfrac12\rho u_m^2$; add $\Delta p_g = \rho gL\sin\theta$ if inclined; minor losses if any (Topic 8).`
        ]],
        ['warn', 'Key Insight', [
          R`If you know $\Delta p$ and want $u_m$ or $D$, it's harder: $\Delta p$ only appears in $f$, but $u_m$ appears in both $f$ and $Re$, and $D$ in all three groups. **Guess**, compute, read $f$, correct, repeat until nothing changes. Usually 1–2 iterations: big changes in flow rate only cause small changes in $f$.`,
          R`**Shortcut when $u_m$ is unknown:** Darcy–Weisbach gives $u_m\sqrt f = \sqrt{2D\Delta p_f/(\rho L)}$ directly, so $Re\sqrt f = \dfrac{\rho D}{\mu}\sqrt{\dfrac{2D\Delta p_f}{\rho L}}$ is known **before** you know $u_m$. Colebrook (or Prandtl) contains exactly $Re\sqrt f$, so it then gives $1/\sqrt f$ in one step — no iteration. (See Example 3.)`,
          R`Answers are sensitive to how you read the chart — more decimal places is not more accuracy.`
        ]],
        ['ex', 'Example 1 — asphalted cast-iron water main (Moody 1944)', [
          ['t', R`Calculate the pressure (head) drop in a $L = 61.0$ m long asphalted cast-iron pipe, $D = 0.15$ m, $e = 0.12$ mm, carrying water ($\rho = 1000$ kg/m³, $\mu = 10^{-3}$ kg/m s) at $u_m = 1.82$ m/s. Also classify the wall.`],
          ['ans'],
          ['m', R`Re = \frac{1000\times1.82\times0.15}{10^{-3}} = 2.7\times10^5 \qquad \epsilon = \frac{0.12}{150} = 8\times10^{-4}`],
          ['m', R`\text{Moody: } f = 0.02\ \ (\text{not } C_f = f/4 = 0.005)`],
          ['m', R`\Delta p_f = \tfrac12\rho u_m^2 f\frac{L}{D} = \tfrac12(1000)(1.82)^2(0.02)\frac{61.0}{0.15} = 13\,500\ \text{Pa},\qquad H_f = \frac{\Delta p_f}{\rho g} = \frac{13\,470}{9810} = 1.37\ \text{m}`],
          ['t', R`**Check without the chart (Haaland):**`],
          ['m', R`\frac{1}{\sqrt f} = -1.8\log_{10}\!\left[\left(\frac{8\times10^{-4}}{3.7}\right)^{1.11} + \frac{6.9}{2.73\times10^5}\right] = 7.12 \;\Rightarrow\; f = 0.0197`],
          ['t', R`(Colebrook, iterated: $f = 0.0198$.) Both agree with the chart reading to the accuracy it can be read.`],
          ['t', R`**Regime:**`],
          ['m', R`u^* = u_m\sqrt{f/8} = 1.82\sqrt{0.02/8} = 0.091\ \text{m/s},\qquad \frac{eu^*}{\nu} = \frac{0.12\times10^{-3}\times0.091}{10^{-6}} = 10.9`],
          ['t', R`$5 < 10.9 < 70$: **transitionally rough** — both viscosity and roughness matter, which is why we needed the curved (Colebrook) part of the chart rather than a smooth-pipe law or a flat fully-rough line.`]
        ]],
        ['ex', 'Example 2 — oil up an inclined cast-iron pipe (White 6.7)', [
          ['t', R`Oil ($\rho = 900$ kg/m³, $\mu = 9\times10^{-3}$ kg/m s) flows at $Q = 0.2$ m³/s along a cast-iron pipe ($e = 0.15$ mm), $L = 500$ m, $D = 0.20$ m, inclined **upwards** at $\theta = 10°$ (see the force-balance figure in 7.1). Find (1) the frictional and (2) the overall pressure drop.`],
          ['ans'],
          ['m', R`u_m = \frac{0.2}{\tfrac{\pi}{4}(0.2)^2} = 6.37\ \text{m/s} \qquad Re = \frac{900\times6.37\times0.2}{9\times10^{-3}} = 1.27\times10^5 \qquad \epsilon = \frac{0.15}{200} = 7.5\times10^{-4}`],
          ['m', R`\text{Moody: } f = 0.021 \qquad (\text{Haaland } 0.0206,\ \text{Colebrook } 0.0208)`],
          ['m', R`\Delta p_f = \tfrac12\rho u_m^2 f\frac{L}{D} = \tfrac12(900)(6.37)^2(0.021)\frac{500}{0.2} = 9.6\times10^5\ \text{Pa}`],
          ['t', R`(The lecture rounds $u_m$ to 6.4 m/s and quotes $9.7\times10^5$ Pa — the same answer to the accuracy the chart can be read.)`],
          ['m', R`\Delta p_g = \rho gL\sin\theta = 900\times9.81\times500\times\sin10^\circ = 7.7\times10^5\ \text{Pa}`],
          ['m', R`\Delta p = \Delta p_f + \Delta p_g = 9.6\times10^5 + 7.7\times10^5 = 1.7\times10^6\ \text{Pa}`],
          ['t', R`**Regime:** $u^* = 6.37\sqrt{0.021/8} = 0.33$ m/s, $\nu = \mu/\rho = 10^{-5}$ m²/s, so $eu^*/\nu = 0.15\times10^{-3}\times0.33/10^{-5} \approx 4.9$ — right on the smooth/transitional boundary. The oil's high viscosity gives a thick sublayer, so cast-iron roughness barely shows.`]
        ]],
        ['ex', 'Example 3 — finding the flow rate from the pressure drop', [
          ['t', R`A horizontal new structural-steel pipe ($e = 0.025$ mm), $D = 0.10$ m, $L = 100$ m, carries water ($\rho = 1000$ kg/m³, $\mu = 10^{-3}$ kg/m s). The available pressure drop is $\Delta p = 20$ kPa. Find $u_m$ and $Q$.`],
          ['ans'],
          ['t', R`Horizontal, so $\Delta p = \Delta p_f$. $\epsilon = 0.025/100 = 2.5\times10^{-4}$. We can't find $Re$ yet because $u_m$ is unknown. Rearrange Darcy–Weisbach for $u_m\sqrt f$, which **is** known:`],
          ['m', R`u_m\sqrt f = \sqrt{\frac{2D\,\Delta p_f}{\rho L}} = \sqrt{\frac{2\times0.10\times20\,000}{1000\times100}} = 0.200\ \text{m/s} \;\Rightarrow\; u_m = \frac{0.200}{\sqrt f}`],
          ['t', R`**Method A — iterate with the chart.** Guess a typical turbulent $f = 0.02$:`],
          ['m', R`f = 0.02:\ u_m = \frac{0.200}{\sqrt{0.02}} = 1.41\ \text{m/s},\ Re = 1.41\times10^5 \;\xrightarrow{\ \epsilon = 2.5\times10^{-4}\ }\; f = 0.0182`],
          ['m', R`f = 0.0182:\ u_m = \frac{0.200}{\sqrt{0.0182}} = 1.48\ \text{m/s},\ Re = 1.48\times10^5 \;\xrightarrow{\ \ }\; f = 0.0181`],
          ['t', R`The second iteration changes $f$ by less than 1%, so stop: $u_m \approx 1.49$ m/s.`],
          ['t', R`**Method B — no iteration, using $Re\sqrt f$:**`],
          ['m', R`Re\sqrt f = \frac{\rho D\,(u_m\sqrt f)}{\mu} = \frac{1000\times0.10\times0.200}{10^{-3}} = 2.00\times10^4`],
          ['m', R`\frac{1}{\sqrt f} = -2.0\log_{10}\!\left(\frac{2.5\times10^{-4}}{3.7} + \frac{2.51}{2.00\times10^4}\right) = -2.0\log_{10}(1.93\times10^{-4}) = 7.43 \;\Rightarrow\; f = 0.0181`],
          ['m', R`u_m = 0.200\times7.43 = 1.49\ \text{m/s},\qquad Q = u_m\frac{\pi D^2}{4} = 1.49\times\frac{\pi(0.10)^2}{4} = 0.0117\ \text{m}^3/\text{s} = 11.7\ \text{L/s}`],
          ['t', R`**Check:** $\tfrac12(1000)(1.486)^2(0.0181)(100/0.10) = 2.0\times10^4$ Pa ✓, and $Re = 1.49\times10^5$ is turbulent ✓.`],
          ['t', R`**Regime:** $u^* = 1.49\sqrt{0.0181/8} = 0.071$ m/s, $eu^*/\nu = 0.025\times10^{-3}\times0.071/10^{-6} = 1.8 < 5$ — nominally **hydraulically smooth**. Yet the smooth law ($2.0\log_{10}(2\times10^4) - 0.8 = 7.80$, $f = 0.0164$) gives a 10% lower $f$ than Colebrook: this is Colebrook's "gradual" roughness assumption (see the Note in 7.3). Use the chart/Colebrook value unless you're told the pipe is smooth.`]
        ]]
      ]
    },
    {
      num: 'Ex 7', title: 'Problem Sheet — Friction Factors', wk: true,
      blocks: [
        ['ex', 'Q2 — laminar vs turbulent, new vs rusted steel', [
          ['t', R`Water ($\rho = 1000$ kg/m³, $\mu = 10^{-3}$ kg/m s) is pumped along a steel pipe of diameter 25 mm. (a) At 1.88 L/min: (i) find $Re$; (ii) assuming laminar flow, find the Darcy $f$ from the chart and hence $\tau_w$; (iii) the frictional pressure gradient in a horizontal pipe, compared with Poiseuille; (iv) the pressure gradient at the same flow rate if the pipe is inclined at 10°. (b) In a horizontal pipe of new structural steel: (i) find the **turbulent** flow rate that gives the **same** $f$ as in (a) ($f = 0.04$), and its pressure gradient; (ii) compare that $f$ with Blasius at this $Re$; (iii) what pressure gradient is needed to keep **the same flow rate as (b-i)** once the pipe has rusted? Compare with Blasius. (c) Why is the chart awkward for finding $u$ or $D$? [1600; 0.04, 0.020 Pa; 3.26 Pa/m; 1706 Pa/m; 5.42 L/min, 27.1 Pa/m; 0.038; 39.3 Pa/m]`],
          ['ans'],
          ['m', R`\text{(a-i) } Q = \frac{1.88}{60\,000} = 3.13\times10^{-5}\ \text{m}^3/\text{s},\quad U = \frac{Q}{\pi D^2/4} = 0.0638\ \text{m/s},\quad Re = \frac{\rho UD}{\mu} = 1600`],
          ['m', R`\text{(a-ii) laminar line: } f = \frac{64}{Re} = 0.04,\qquad \tau_w = \frac{f\rho U^2}{8} = \frac{0.04\times1000\times0.0638^2}{8} = 0.020\ \text{Pa}`],
          ['m', R`\text{(a-iii) } \frac{\Delta p_f}{L} = \frac{4\tau_w}{D} = 3.26\ \text{Pa/m}\qquad \left(\text{Poiseuille: } \frac{32\mu U}{D^2} = 3.27\ \text{Pa/m}\right)`],
          ['m', R`\text{(a-iv) } \frac{\Delta p}{L} = \frac{4\tau_w}{D} + \rho g\sin10^\circ = 3.26 + 1703 = 1706\ \text{Pa/m}`],
          ['t', R`Note how **weight dominates** the pressure drop for a liquid in an inclined pipe.`],
          ['t', R`(b-i) **Logic:** we now fix $f = 0.04$ and need the turbulent $Re$ that gives it. For turbulent flow roughness matters, so first find which curve: new structural steel $e = 0.025$ mm, $\epsilon = 0.025/25 = 10^{-3}$. Move along the $10^{-3}$ curve until it reads $f = 0.04$: that happens at $Re \approx 4600$.`],
          ['m', R`U = \frac{Re\,\mu}{\rho D} = \frac{4600\times10^{-3}}{1000\times0.025} = 0.184\ \text{m/s},\quad Q = 9.03\times10^{-5}\ \text{m}^3/\text{s} = 5.42\ \text{L/min},\quad \frac{\Delta p_f}{L} = \frac{f}{D}\tfrac12\rho U^2 = 27.1\ \text{Pa/m}`],
          ['t', R`The same $f$ as in (a) but 8× the gradient: the flow rate is ~3× higher and $\Delta p_f \propto U^2$ at fixed $f$. (Near $Re \approx 4000$ the curves are hard to read: Colebrook puts $f = 0.04$ on the $10^{-3}$ curve at $Re \approx 4300$. Expect some scatter in this answer.) $Re \approx 4600$ is also at the very **bottom edge** of the turbulent curves — just above the hatched transition zone, where the flow may still be intermittent — so treat (b) as chart-reading practice rather than a precise design value.`],
          ['t', R`(b-ii) Blasius gives $f = 0.316(4600)^{-1/4} = 0.038$ — a good estimate, because new steel is nearly smooth.`],
          ['t', R`(b-iii) **Same flow rate as (b-i)**, so still $U = 0.184$ m/s and $Re = 4600$. Rusted steel: $e = 0.5$ mm, $\epsilon = 0.02$ ⇒ chart $f = 0.058$ ⇒ $\Delta p_f/L = (0.058/0.025)\times\tfrac12(1000)(0.184)^2 = 39.3$ Pa/m. Blasius would still say 0.038 — it has no roughness term, so it is a poor estimate when roughness is large; a pump sized on the new pipe would struggle.`],
          ['t', R`(c) $\Delta p$ only appears in $f$; $U$ appears in $f$ and $Re$, and $D$ in all three groups — so you must guess and iterate (or, when $U$ is the unknown, use $Re\sqrt f$ as in Example 3).`]
        ]],
        ['warn', 'Note', [
          R`The problems below are **extra practice written for these notes** (not on the course sheet). They use the course method, data and the chart's roughness table.`
        ]],
        ['ex', 'Extra A — Haaland, Colebrook and regime (pipe from sheet Q3)', [
          ['t', R`Water flows at $Q = 360$ L/min through $L = 120$ m of $D = 5$ cm structural-steel pipe ($e = 0.025$ mm). The course solution reads $f = 0.0195$ from the chart. (a) Find $f$ from Haaland and check it with one pass of Colebrook. (b) Find the frictional pressure drop. (c) Classify the wall. [0.0191, 0.0193; ≈ 2.2×10⁵ Pa; eu*/ν ≈ 3.8, smooth]`],
          ['ans'],
          ['m', R`Q = 6\times10^{-3}\ \text{m}^3/\text{s},\quad u_m = \frac{6\times10^{-3}}{\pi(0.05)^2/4} = 3.06\ \text{m/s},\quad Re = 1.53\times10^5,\quad \epsilon = 5\times10^{-4}`],
          ['m', R`\text{(a) Haaland: } \frac{1}{\sqrt f} = -1.8\log_{10}\!\left[\left(\frac{5\times10^{-4}}{3.7}\right)^{1.11} + \frac{6.9}{1.53\times10^5}\right] = 7.23 \;\Rightarrow\; f = 0.0191`],
          ['m', R`\text{Colebrook with } \sqrt f = \sqrt{0.0191}:\ \frac{1}{\sqrt f} = -2.0\log_{10}\!\left(\frac{5\times10^{-4}}{3.7} + \frac{2.51}{1.53\times10^5\times0.138}\right) = 7.19 \;\Rightarrow\; f = 0.0193`],
          ['m', R`\text{(b) } \Delta p_f = f\frac{L}{D}\tfrac12\rho u_m^2 = 0.0193\times\frac{120}{0.05}\times\tfrac12(1000)(3.06)^2 = 2.2\times10^5\ \text{Pa}`],
          ['t', R`(The course's 225 kPa uses $f = 0.0195$ and $u_m$ rounded to 3.1 m/s.)`],
          ['m', R`\text{(c) } \frac{eu^*}{\nu} = \epsilon\,Re\sqrt{\frac f8} = 5\times10^{-4}\times1.53\times10^5\times\sqrt{\frac{0.0193}{8}} = 3.8 < 5 \;\Rightarrow\; \text{hydraulically smooth (just)}`]
        ]],
        ['ex', 'Extra B — finding the diameter', [
          ['t', R`A horizontal new structural-steel pipe ($e = 0.025$ mm), $L = 200$ m, must carry $Q = 20$ L/s of water with a frictional pressure drop of no more than 40 kPa. Find the minimum diameter. [D ≈ 0.123 m]`],
          ['ans'],
          ['t', R`Write Darcy–Weisbach in terms of $Q$ using $u_m = 4Q/\pi D^2$, then solve for $D$:`],
          ['m', R`\Delta p_f = f\frac{L}{D}\,\frac{\rho}{2}\left(\frac{4Q}{\pi D^2}\right)^2 = \frac{8f L\rho Q^2}{\pi^2D^5} \;\Rightarrow\; D = \left(\frac{8fL\rho Q^2}{\pi^2\Delta p_f}\right)^{1/5}`],
          ['m', R`\text{Guess } f = 0.02:\ D = \left(\frac{8\times0.02\times200\times1000\times0.02^2}{\pi^2\times40\,000}\right)^{1/5} = 0.1265\ \text{m}`],
          ['m', R`u_m = \frac{0.02}{\pi(0.1265)^2/4} = 1.59\ \text{m/s},\quad Re = 2.0\times10^5,\quad \epsilon = 2.0\times10^{-4} \;\Rightarrow\; f = 0.0171`],
          ['m', R`f = 0.0171:\ D = 0.1265\times\left(\frac{0.0171}{0.02}\right)^{1/5} = 0.1226\ \text{m} \;\Rightarrow\; Re = 2.08\times10^5,\ \epsilon = 2.04\times10^{-4},\ f = 0.0170 \;\Rightarrow\; D = 0.123\ \text{m}`],
          ['t', R`Converged. Because $D \propto f^{1/5}$, even a poor first guess for $f$ gives a good $D$ — one iteration is usually enough. In practice choose the next standard size up (e.g. 125 mm).`]
        ]],
        ['ex', 'Extra C — fully rough old main, running downhill', [
          ['t', R`An old water main ($e = 1.0$ mm), $D = 0.15$ m, $L = 1000$ m, carries water at $u_m = 2.0$ m/s and runs **downhill** at 2° to the horizontal. (a) Show the flow is fully rough and find $f$. (b) Find the frictional, gravity and total pressure drops. [f = 0.033; eu*/ν ≈ 130; Δp_f = 4.4×10⁵ Pa, Δp_g = −3.4×10⁵ Pa, Δp = 1.0×10⁵ Pa]`],
          ['ans'],
          ['m', R`Re = \frac{1000\times2.0\times0.15}{10^{-3}} = 3.0\times10^5,\qquad \epsilon = \frac{1.0}{150} = 6.7\times10^{-3}`],
          ['m', R`\text{(a) fully rough law: } \frac{1}{\sqrt f} = 2.0\log_{10}(150) + 1.14 = 5.49 \;\Rightarrow\; f = 0.033\quad (\text{Colebrook } 0.0335)`],
          ['m', R`u^* = 2.0\sqrt{0.033/8} = 0.129\ \text{m/s},\qquad \frac{eu^*}{\nu} = \frac{10^{-3}\times0.129}{10^{-6}} = 129 > 70\ \Rightarrow\ \text{fully rough} \ \checkmark`],
          ['m', R`\text{(b) } \Delta p_f = 0.033\times\frac{1000}{0.15}\times\tfrac12(1000)(2.0)^2 = 4.4\times10^5\ \text{Pa}\quad (H_f = 45\ \text{m})`],
          ['m', R`\Delta p_g = \rho gL\sin\theta = 1000\times9.81\times1000\times\sin(-2^\circ) = -3.4\times10^5\ \text{Pa}`],
          ['m', R`\Delta p = \Delta p_f + \Delta p_g = 4.4\times10^5 - 3.4\times10^5 = 1.0\times10^5\ \text{Pa}`],
          ['t', R`Gravity supplies most of the driving force: the pressure falls by only 1 bar over the kilometre. On a steeper slope ($\sin\theta < -\Delta p_f/\rho gL$, here about −2.6°) the pressure would **rise** along the pipe.`]
        ]],
        ['ex', 'Extra D — which regime? (quick drill)', [
          ['t', R`Water ($\nu = 10^{-6}$ m²/s) in three pipes. For each, find $Re$, $e/D$, $f$ (Haaland), $u^*$ and $eu^*/\nu$, and say which regime — and so which friction law you could have used. (i) Drawn tubing, $e = 0.0025$ mm, $D = 15$ mm, $u_m = 1.5$ m/s. (ii) Cast iron, $e = 0.15$ mm, $D = 0.10$ m, $u_m = 2.0$ m/s. (iii) Old sewer, $e = 3.0$ mm, $D = 0.5$ m, $u_m = 1.5$ m/s. [0.21 smooth; 16 transitional; 286 fully rough]`],
          ['ans'],
          ['m', R`\text{(i) } Re = 2.25\times10^4,\ \tfrac eD = 1.7\times10^{-4},\ f = 0.0253,\ u^* = 1.5\sqrt{\tfrac{0.0253}{8}} = 0.084\ \text{m/s},\ \frac{eu^*}{\nu} = \frac{2.5\times10^{-6}\times0.084}{10^{-6}} = 0.21`],
          ['t', R`$0.21 < 5$: **hydraulically smooth**. Blasius ($0.316\,Re^{-1/4} = 0.0258$) or Prandtl ($f = 0.0252$) work just as well.`],
          ['m', R`\text{(ii) } Re = 2.0\times10^5,\ \tfrac eD = 1.5\times10^{-3},\ f = 0.0227,\ u^* = 2.0\sqrt{\tfrac{0.0227}{8}} = 0.107\ \text{m/s},\ \frac{eu^*}{\nu} = \frac{1.5\times10^{-4}\times0.107}{10^{-6}} = 16`],
          ['t', R`$5 < 16 < 70$: **transitionally rough** — you need Colebrook (0.0228), Haaland or the curved part of the chart.`],
          ['m', R`\text{(iii) } Re = 7.5\times10^5,\ \tfrac eD = 6\times10^{-3},\ f = 0.0323,\ u^* = 1.5\sqrt{\tfrac{0.0323}{8}} = 0.095\ \text{m/s},\ \frac{eu^*}{\nu} = \frac{3\times10^{-3}\times0.095}{10^{-6}} = 286`],
          ['t', R`$286 > 70$: **fully rough** — the fully-rough law $1/\sqrt f = 2.0\log_{10}(D/e) + 1.14$ gives $f = 0.0321$ directly, without $Re$.`]
        ]]
      ]
    }
  ]
}
