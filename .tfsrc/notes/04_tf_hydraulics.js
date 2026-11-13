{
  key: 'tf_hydraulics', area: 'pipe', num: '4', week: 'Week 2',
  name: 'Introduction to Hydraulics: Pipe-Flow Equations',
  triggers: 'pressure drop along a pipe · pump power · −dp/dx = 4τ_w/D · C_f · friction factor f = 4C_f · Blasius · laminar or turbulent? · guess the regime then check Re · hydraulic diameter · inclined pipe ρg sinθ · wall shear from a profile',
  sections: [
    {
      num: '', title: 'Revision Objectives — Introduction to Hydraulics',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Explain where viscous stresses come from: **shear flows** and the **no-slip** condition, and what a boundary layer is.`,
          R`Describe laminar and turbulent flow, and use $Re$ to predict which you have (pipe: laminar below $Re \approx 2000$, transition 2000–4000, turbulent above about 4000).`,
          R`Derive the pipe force balance $-dp/dx = 4\tau_w/D + \rho g\sin\theta$, with a clear sign convention.`,
          R`Use $C_f = \tau_w/\tfrac12\rho u_m^2$ with $16/Re$ (laminar) or Blasius $0.079Re^{-1/4}$ (turbulent) to find pressure drops, flow rates, diameters and pump power.`,
          R`Show where $C_f = 16/Re$ comes from (the laminar parabola).`,
          R`Convert between $C_f$ and the Darcy friction factor $f = 4C_f$, and know which one a question uses.`,
          R`Derive and use the **hydraulic diameter** $D_H = 4A/P$ for non-circular ducts.`
        ]]
      ]
    },
    {
      num: '4.1', title: 'Shear Flows: Where Viscous Forces Come From',
      blocks: [
        ['para', R`For a Newtonian fluid, shear stress is proportional to the strain rate. This is the **shear gradient**: how fast velocity changes **perpendicular** to the flow direction. The constant of proportionality is the **dynamic viscosity** $\mu$, a fluid property.`],
        ['disp', [ R`\boxed{\tau = \mu\frac{du}{dy}} \tag{4.1}` ]],
        ['svg', 'tf_shear_layer', 'Shear flow type 1: two streams of different speed side by side. The velocity gradient across the shear layer generates viscous stress.'],
        ['list', R`A shear stress needs the fluid to be **flowing** with a **shear gradient**. Shear flows happen when:`, true, [
          R`flows of **different speeds** run next to each other (a shear layer, e.g. a jet), or`,
          R`there is a **solid boundary**.`
        ]],
        ['warn', 'Key Insight', [
          R`**No slip:** fluid at a boundary moves with the boundary. At a stationary wall, $u = 0$.`,
          R`Viscosity slows the fluid next to the wall, forming a **boundary layer**: the region where $u < u_\infty$ (the free-stream speed). Its thickness is $\delta$. The wall shear stress is $\tau_w = \mu\,(du/dy)_{y=0}$.`,
          R`So viscous forces matter wherever there are **boundaries**. That is why Bernoulli fails in pipes: it has **no friction term**. In a horizontal pipe of constant area $u_m$ does not change, so Bernoulli predicts constant $p$. In reality the wall shear $\tau_w$ makes $p$ fall steadily along the pipe ($-dp/dx = 4\tau_w/D$, §4.3) even though the speed stays the same.`
        ]],
        ['svg', 'tf_boundary_layer', 'Shear flow type 2: a solid boundary. No slip forces u = 0 at the wall; the boundary layer (u < u∞) grows with distance downstream.'],
        ['warn', 'Recall Knowledge', [
          R`**Kinematic viscosity** $\nu = \mu/\rho$ (m²/s) controls how far momentum **diffuses**: larger $\nu$, thicker boundary layer. **Dynamic viscosity** $\mu$ controls the **force** exerted: larger $\mu$, larger wall shear stress. Air has the larger $\nu$ ($1.4\times10^{-5}$ vs $10^{-6}$ m²/s) but the smaller $\mu$ (Problem Sheet Q1).`
        ]]
      ]
    },
    {
      num: '4.2', title: 'Laminar and Turbulent Flow',
      blocks: [
        ['para', R`**Mean (bulk) velocity.** Because of no slip, the speed varies across a pipe, so we describe the flow by its mean velocity $u_m = Q/A$: the volume flow rate divided by the cross-sectional area. In a circular pipe, $u_m = \frac{2}{R^2}\int_0^R u\,r\,dr$. Every $u_m$ in this topic means this mean value, not the centreline speed $u_{max}$.`],
        ['para', R`In 1839 **Hagen** found that at low flow rates $\Delta p \propto u_m$. Over a critical range of speeds this suddenly switched to $\Delta p \propto u_m^{1.75}$. In 1883 **Reynolds** showed why, by injecting dye on the centreline of a pipe. He saw a straight filament (laminar), rapid dispersal by eddies (turbulent), and an intermittent state between the two (transitional).`],
        ['svg', 'tf_hagen', 'Hagen (1839): pressure drop rises linearly with mean speed at low speed, then switches to Δp ∝ u_m^1.75 across the transition (Re ≈ 2000–4000).'],
        ['svg', 'tf_reynolds_dye', 'Reynolds\'s dye experiment (1883): a straight filament in laminar flow, rapid dispersal in turbulent flow, intermittent bursts in transitional flow.'],
        ['html', '<table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0);width:50%">Laminar</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Turbulent</th></tr></thead><tbody><tr><td style="padding:6px 10px">Smooth layers ("laminae") sliding over each other, no mixing</td><td style="padding:6px 10px">Velocity fluctuates irregularly; continual mixing by eddies</td></tr><tr><td style="padding:6px 10px">Dominated by <b>viscous</b> forces (depend on μ, not ρ)</td><td style="padding:6px 10px">Dominated by <b>inertial</b> forces (depend on ρ, not μ)</td></tr><tr><td style="padding:6px 10px">Forces ∝ velocity</td><td style="padding:6px 10px">Forces ∝ velocity²</td></tr><tr><td style="padding:6px 10px">Reversible · low Re</td><td style="padding:6px 10px">Irreversible · high Re</td></tr></tbody></table>'],
        ['eq', [
          ['Mean velocity', R`u_m = \frac{Q}{A}`, '[m/s]', 'Bulk velocity; A is the actual flow area.'],
          ['Reynolds number (pipe)', R`Re = \frac{\rho u_m D}{\mu} = \frac{\text{inertial}}{\text{viscous}}`, '[–]', 'Length scale for a pipe is the diameter D (not the radius).']
        ]],
        ['warn', 'Important', [
          R`**Convention used in these notes (cylindrical pipe):** laminar for $Re < 2000$; **transition region 2000–4000**; turbulent for $Re > 4000$. The course also quotes **$Re \approx 2100$** as the value "often taken" for transition. Both are within the transition band, so treat anything between about 2000 and 4000 as transitional (e.g. Q3 air, $Re = 2118$).`,
          R`The exact value depends on geometry, roughness and vibration. Reynolds's own rig in Manchester now transitions earlier because of traffic outside.`,
          R`Very low $Re$ flows, where viscous forces dominate and inertia is negligible, are called **creeping flows**.`
        ]],
        ['para', R`The velocity profiles differ. **Inviscid** (potential) flow would be uniform. **Laminar** flow is a parabola, with $u_m = \tfrac12 u_{max}$ (derived in §4.4). **Turbulent** flow is much blunter. It is often approximated by the **1/7th power law**, where $y = R - r$ is the distance from the wall:`],
        ['disp', [ R`\frac{u}{u_{max}} = \left(\frac{y}{R}\right)^{1/7} \;\Rightarrow\; u_m \approx 0.82\,u_{max}\ \ (\text{turbulent})`, R`u_m = 0.5\,u_{max}\ \ (\text{laminar parabola})` ]],
        ['para', R`**0.82 or 0.8?** Averaging the 1/7 law over the cross-section gives $u_m/u_{max} = \frac{2n^2}{(n+1)(2n+1)} = \frac{2(49)}{(8)(15)} = 0.817$ with $n = 7$. The course notes and solutions round this to $u_m = 0.8\,u_{max}$; both are the same result, and either is accepted. These notes write $\approx 0.82$ ($\approx 0.8$).`],
        ['svg', 'tf_profiles_h', 'Same flow rate, three profiles: inviscid (uniform), laminar (parabola, u_m = ½u_max), turbulent (1/7 power law, u_m ≈ 0.82u_max, rounded to 0.8 in the course).'],
      ]
    },
    {
      num: '4.3', title: 'Force Balance on Fluid in a Pipe',
      blocks: [
        ['para', R`Hydraulics (Greek $\textit{hydor}$ = "water" + $\textit{aulus}$ = "pipe") studies flow along pipes. We use averaged, **one-dimensional** mass and momentum equations, with velocity varying only across the pipe, for flows that are **incompressible, steady, fully developed and Newtonian**. Fully developed means the profile no longer changes along the pipe, so the momentum flux in equals the momentum flux out. The momentum equation then becomes a **force balance** on a small slice $\delta l$ of fluid in a pipe inclined at $\theta$.`],
        ['warn', 'Important', [
          R`**Sign convention.** $x$ runs along the pipe **in the flow direction**, and forces are **positive in the flow direction**. $\theta$ is the angle of the pipe above the horizontal, with **$\theta > 0$ when the flow goes uphill**.`,
          R`**Pressure** must fall along the flow ($dp/dx < 0$) for the net pressure force to push the fluid forward. **Wall friction** always acts against the flow. **Gravity's** component along the pipe, $\rho g\sin\theta$ per unit volume, points down-slope. It opposes the flow when $\theta > 0$ and helps it when $\theta < 0$.`
        ]],
        ['svg', 'tf_pipe_incline_h', 'Force balance on a slice δl of an uphill pipe: the net pressure force (on the cross-section) balances wall friction τ_w (on the wall area) plus the down-slope weight component per unit volume, density × g × sinθ (ρg sinθ).'],
        ['deriv', 'Derivation — pressure gradient in a pipe', [
          ['t', R`**Pressure force** (net, flow direction positive), acting on the cross-section $\tfrac{\pi}{4}D^2$. Upstream face minus downstream face:`],
          ['m', R`p\,\tfrac{\pi}{4}D^2 - \left(p + \frac{dp}{dx}\delta l\right)\tfrac{\pi}{4}D^2 = -\frac{dp}{dx}\,\delta l\,\tfrac{\pi}{4}D^2 \quad (> 0 \text{ since } dp/dx < 0)`],
          ['t', R`**Friction** acts on the **wall area** $\pi D\,\delta l$, against the flow: force $\tau_w\pi D\,\delta l$ (the "major loss").`],
          ['t', R`**Gravity**: mass $\rho\tfrac{\pi}{4}D^2\delta l$ times the down-slope component $g\sin\theta$, also against the flow when $\theta > 0$: $\rho g\sin\theta\,\tfrac{\pi}{4}D^2\delta l$.`],
          ['t', R`Steady and fully developed means no net momentum change, so the driving force equals the opposing forces:`],
          ['m', R`-\frac{dp}{dx}\,\delta l\,\tfrac{\pi}{4}D^2 = \tau_w\pi D\,\delta l + \rho g\sin\theta\,\tfrac{\pi}{4}D^2\delta l`],
          ['t', R`Divide by $\tfrac{\pi}{4}D^2\delta l$: the ratio $\pi D/\tfrac{\pi}{4}D^2 = 4/D$ appears.`]
        ]],
        ['disp', [ R`\boxed{-\frac{dp}{dx} = \frac{4}{D}\tau_w + \rho g\sin\theta} \qquad \text{horizontal: } -\frac{dp}{dx} = \frac{4\tau_w}{D} \tag{4.2}` ]],
        ['warn', 'Key Insight', [
          R`The $4/D$ appears because pressure acts over the **cross-section** ($\pi D^2/4$) but friction acts over the **wall** ($\pi D\,\delta l$). All else equal, a small pipe has far more resistance than a large one.`,
          R`Downhill ($\theta < 0$) the gravity term is negative, so gravity supplies some (or all) of the driving force.`,
          R`We can go no further until we can describe $\tau_w$. That needs dimensionless numbers and experiments.`
        ]]
      ]
    },
    {
      num: '4.4', title: 'Coefficient of Friction and the Flow Curve',
      blocks: [
        ['para', R`Dimensional analysis showed that for a **smooth** pipe and **fully developed** flow, $C_f = f(Re)$. Measure it once and it applies to every smooth pipe of any size.`],
        ['eq', [
          ['Coefficient of friction (Fanning)', R`C_f = \frac{\tau_w}{\tfrac12\rho u_m^2}`, '[–]', 'Frictional stress : inertia. A type of Euler number.'],
          ['Darcy friction factor', R`f = \frac{8\tau_w}{\rho u_m^2} = \frac{2D}{\rho u_m^2}\left(-\frac{dp}{dx}\right) = 4C_f`, '[–]', 'Dynamically identical, just 4× bigger.'],
          ['Laminar flow', R`C_f = \frac{16}{Re}`, '[–]', 'Exact for a circular pipe (derived below). Re < 2000.'],
          ['Turbulent, smooth pipe (Blasius)', R`C_f = 0.079\,Re^{-1/4}`, '[–]', 'Good for 4000 < Re < 10⁵.'],
          ['Pressure drop over length L', R`-\Delta p = \frac{4L}{D}\tau_w = 2\rho u_m^2 C_f\frac{L}{D}`, '[Pa]', 'Horizontal pipe.'],
          ['Same, in terms of Darcy f', R`-\Delta p = f\,\frac{L}{D}\,\tfrac12\rho u_m^2`, '[Pa]', 'Substitute C_f = f/4 into the line above.'],
          ['Pump power', R`P = Q\,\Delta p = u_m\tfrac{\pi}{4}D^2\,\Delta p`, '[W]', 'Power to overcome the pressure drop.']
        ]],
        ['svg', 'tf_cf_re_h', 'The smooth-pipe flow curve: C_f = 16/Re (laminar, Re < 2000), transition band 2000–4000, then turbulent; Blasius 0.079 Re^-1/4 (dashed) fits 4000 < Re < 10⁵. Inside the 2000–4000 band C_f is unpredictable (the flow flips between laminar and turbulent), so do not use either law there; above 10⁵ Blasius under-predicts, so use the Moody diagram.'],
        ['para', R`**Where 16/Re comes from.** For laminar flow the profile can be found exactly. Topic 5 does this in full; the short version below is enough to use it here. Take a cylinder of fluid of radius $r$ on the centreline of a horizontal pipe.`],
        ['svg', 'tf_poiseuille_pipe', 'Cylindrical control volume of radius r: the pressure difference on its ends balances the shear stress τ on its curved surface.'],
        ['deriv', 'Derivation — laminar profile and C_f = 16/Re', [
          ['t', R`Force balance on the cylinder (radius $r$, length $\delta x$). The end area is $\pi r^2$ and the curved area is $2\pi r\,\delta x$:`],
          ['m', R`\left(-\frac{dp}{dx}\right)\delta x\,\pi r^2 = \tau\,2\pi r\,\delta x \;\Rightarrow\; \tau = \frac{r}{2}\left(-\frac{dp}{dx}\right)`],
          ['m', R`\text{at } r = R:\ \tau_w = \frac{D}{4}\left(-\frac{dp}{dx}\right)\ \checkmark\ (4.2)`],
          ['t', R`Newtonian, and $u$ falls as $r$ increases, so $\tau = -\mu\,du/dr$. Integrate with no slip ($u = 0$ at $r = R$):`],
          ['m', R`\frac{du}{dr} = -\frac{r}{2\mu}\left(-\frac{dp}{dx}\right) \;\Rightarrow\; u = \frac{1}{4\mu}\left(-\frac{dp}{dx}\right)(R^2 - r^2)`],
          ['m', R`u_{max} = \frac{R^2}{4\mu}\left(-\frac{dp}{dx}\right)`],
          ['t', R`Mean velocity (the same integral as Q6):`],
          ['m', R`u_m = \frac{2}{R^2}\int_0^R u\,r\,dr = \frac{R^2}{8\mu}\left(-\frac{dp}{dx}\right) = \tfrac12 u_{max}`],
          ['m', R`\Rightarrow\; -\frac{dp}{dx} = \frac{8\mu u_m}{R^2} = \frac{32\mu u_m}{D^2}`],
          ['t', R`Wall stress, then the coefficient of friction:`],
          ['m', R`\tau_w = \frac{D}{4}\cdot\frac{32\mu u_m}{D^2} = \frac{8\mu u_m}{D}`],
          ['m', R`\Rightarrow\; C_f = \frac{8\mu u_m/D}{\tfrac12\rho u_m^2} = \frac{16\mu}{\rho u_m D} = \frac{16}{Re}`],
        ]],
        ['warn', 'Warning', [
          R`**Two friction numbers, a factor of 4 apart.** This course uses "coefficient of friction $C_f$" and "friction factor $f = 4C_f$". Textbooks differ: Massey's $f$ is this course's $C_f$. Always check which one a chart or formula uses. Laminar: $C_f = 16/Re$ but $f = 64/Re$.`,
          R`The "Preview of hydraulics" slide prints $f = 8\frac{D}{\rho u_m^2}\left(-\frac{dp}{dx}\right)$. With $-dp/dx = 4\tau_w/D$ that would be $16C_f$. The consistent form is $f = 2\frac{D}{\rho u_m^2}\left(-\frac{dp}{dx}\right) = 8\tau_w/\rho u_m^2 = 4C_f$, as in the written notes.`
        ]],
        ['warn', 'Key Insight', [
          R`Laminar: $C_f \propto Re^{-1}$ ⇒ $\tau_w \propto u_m^2\cdot u_m^{-1} = u_m$ ⇒ $\Delta p \propto u_m$ (Hagen's low-speed result). The Euler number ∝ $1/Re$ for every viscously dominated system.`,
          R`Turbulent (Blasius): $C_f \propto Re^{-1/4}$ ⇒ $\Delta p \propto u_m^{2 - 1/4} = u_m^{1.75}$.`
        ]]
      ]
    },
    {
      num: '4.5', title: 'Hydraulic Diameter',
      blocks: [
        ['para', R`Equation (4.2) also works for non-circular ducts if $D$ is replaced by the **hydraulic diameter** $D_H$. To see why, repeat the force balance of §4.3 on a slice $\delta l$ of a duct of **any** cross-section, with flow area $A$ and wetted perimeter $P$ (horizontal, flow direction positive):`],
        ['svg', 'tf_dh_balance', 'Any cross-section: pressure acts on the flow area A, wall shear acts on the wetted perimeter P × δl. Matching the circular-pipe form defines D_H = 4A/P.'],
        ['deriv', 'Derivation — hydraulic diameter', [
          ['m', R`\left(-\frac{dp}{dx}\right)\delta l\,A = \tau_w\,P\,\delta l \;\Rightarrow\; -\frac{dp}{dx} = \tau_w\frac{P}{A}`],
          ['t', R`Match this to the circular form $-dp/dx = 4\tau_w/D$. The duct behaves like a circular pipe of diameter $D_H$ if $4/D_H = P/A$:`],
          ['m', R`D_H = \frac{4A}{P} \qquad \text{check, circle: } \frac{4\cdot\tfrac{\pi}{4}D^2}{\pi D} = D\ \checkmark`]
        ]],
        ['disp', [ R`\boxed{D_H = \frac{4 \times \text{flow area}}{\text{wetted perimeter}}} \tag{4.3}` ]],
        ['para', R`So $D_H$ is exactly the ratio that made the $4/D$ appear in the first place. Undulating or corner-rich walls add perimeter without adding area. That brings the wall closer to the bulk of the fluid, as if the pipe were narrower.`],
        ['svg', 'tf_hydraulic_d', 'An undulating wall adds wetted perimeter, so friction is as if the flow were in a narrower circular pipe of diameter D_H.'],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:560px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Shape</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">D<sub>H</sub></th></tr></thead><tbody><tr><td style="padding:6px 10px">Circle, diameter D</td><td style="padding:6px 10px">D</td></tr><tr><td style="padding:6px 10px">Square, side l</td><td style="padding:6px 10px">l</td></tr><tr><td style="padding:6px 10px">Rectangle l × h</td><td style="padding:6px 10px">2lh / (l + h)</td></tr><tr><td style="padding:6px 10px">Open channel, width w, depth h</td><td style="padding:6px 10px">4hw / (2h + w)</td></tr><tr><td style="padding:6px 10px">Equilateral triangle, side l</td><td style="padding:6px 10px">l / √3</td></tr><tr><td style="padding:6px 10px">Annulus D<sub>i</sub>, D<sub>o</sub></td><td style="padding:6px 10px">D<sub>o</sub> − D<sub>i</sub></td></tr></tbody></table>'],
        ['warn', 'When to use', [
          R`Use $D_H$ **everywhere** $D$ appears in the pipe equations: in $Re = \rho u_m D_H/\mu$, in $C_f(Re)$, and in $-dp/dx = 4\tau_w/D_H$ (so $\Delta p = 2\rho u_m^2C_f L/D_H$).`,
          R`But $u_m = Q/A$ uses the duct's **actual** area $A$, **not** $\tfrac{\pi}{4}D_H^2$.`
        ]],
        ['warn', 'Note', [
          R`$D_H$ works well for **turbulent** flow. For **laminar** flow the constant in $C_f = \text{const}/Re$ depends on the shape: 16 for a circle, about 14.2 for a square duct, and 24 for wide parallel plates (Topic 5). So $C_f = 16/Re_{D_H}$ is only approximate for non-circular ducts. (These values are standard results, not from the course slides.)`,
          R`An open channel's free surface is not "wetted", so it is left out of the perimeter. The **hydraulic radius** some books use is $R_H = A/P = D_H/4$ (try it on a circle: $R_H = D/4$, not $D/2$).`
        ]],
        ['ex', 'Example — rectangular air duct (extra practice, not from the course)', [
          ['t', R`A smooth horizontal duct $0.30\ \text{m} \times 0.15\ \text{m}$ carries $Q = 0.3$ m³/s of air ($\rho = 1.2$, $\mu = 1.7\times10^{-5}$). Find the pressure drop over 100 m.`],
          ['ans'],
          ['m', R`A = 0.30\times0.15 = 0.045\ \text{m}^2,\quad P = 2(0.30 + 0.15) = 0.90\ \text{m},\quad D_H = \frac{4(0.045)}{0.90} = 0.20\ \text{m}`],
          ['m', R`u_m = \frac{Q}{A} = \frac{0.3}{0.045} = 6.67\ \text{m/s}`],
          ['m', R`\Big(\text{not } \frac{Q}{\tfrac{\pi}{4}D_H^2} = 9.55\Big)`],
          ['m', R`Re = \frac{\rho u_m D_H}{\mu} = \frac{1.2(6.67)(0.20)}{1.7\times10^{-5}} = 9.4\times10^4 \ \ (\text{turbulent, Blasius range}) \checkmark`],
          ['m', R`C_f = 0.079(9.4\times10^4)^{-1/4} = 4.51\times10^{-3}`],
          ['m', R`\tau_w = \tfrac12(1.2)(6.67)^2(4.51\times10^{-3}) = 0.120\ \text{Pa}`],
          ['m', R`-\frac{dp}{dx} = \frac{4\tau_w}{D_H} = \frac{4(0.120)}{0.20} = 2.41\ \text{Pa/m} \;\Rightarrow\; \Delta p = 241\ \text{Pa over 100 m}`],
          ['t', R`Compare the circular 0.28 m duct of §4.6 (same $Q$): 90 Pa. The rectangle has less area (0.045 vs 0.062 m²) and a smaller $D_H$, so it is faster and has more wall.`]
        ]]
      ]
    },
    {
      num: '4.6', title: 'Smooth-Pipe Design Calculations',
      blocks: [
        ['list', R`**Method** for any smooth-pipe problem:`, true, [
          R`Convert everything to SI.`,
          R`Force balance: $-dp/dx = 4\tau_w/D$ (add $\rho g\sin\theta$ if inclined).`,
          R`$\tau_w = \tfrac12\rho u_m^2 C_f$, with $C_f$ from the regime.`,
          R`If $u_m$ is unknown you can't compute $Re$. **Guess the regime**, solve, then **check $Re$**. If the guess was wrong, redo with the other $C_f$.`
        ]],
        ['ex', 'Example — Trans-Alaska pipeline pumps (lecture)', [
          ['t', R`$L = 1300$ km, $D = 1.22$ m, $u_m = 1.67$ m/s, crude oil $\rho = 900$ kg/m³, $\mu = 6.0$ kg/m s (maximum viscosity, at 0 °C). 40 pumps (10 stations × 4) share the load. Find the pressure rise and power **per pump**. Assume a horizontal pipe (the real line crosses mountain ranges, which would add $\rho g\sin\theta$ terms).`],
          ['ans'],
          ['m', R`Re = \frac{900\times1.67\times1.22}{6.0} = 306 \ \ (\text{laminar})`],
          ['m', R`C_f = \frac{16}{306} = 0.052`],
          ['m', R`\tau_w = \tfrac12\rho u_m^2 C_f = \tfrac12(900)(1.67)^2(0.052) = 65.7\ \text{Pa}`],
          ['m', R`-\frac{dp}{dx} = \frac{4\tau_w}{D} = \frac{4(65.7)}{1.22} = 215.4\ \text{Pa/m}`],
          ['m', R`\Delta p_{\text{pump}} = \frac{215.4\times1.3\times10^6}{40} = 7.0\ \text{MPa}`],
          ['m', R`Q = u_m\tfrac{\pi}{4}D^2 = 1.95\ \text{m}^3/\text{s}`],
          ['m', R`P_{\text{pump}} = Q\,\Delta p_{\text{pump}} = 1.95\times7.0\times10^6 = 13.6\ \text{MW per pump}`],
          ['m', R`P_{\text{total}} = 40\times13.67 \approx 547\ \text{MW}`],
        ]],
        ['ex', 'Example — dental syringe (lecture)', [
          ['t', R`Needle diameter $D = 0.21$ mm, length $L = 25$ mm; drug $\mu = 3\times10^{-3}$ kg/m s, $\rho = 1000$ kg/m³. The maximum comfortable barrel gauge pressure is $\Delta p = 0.3$ MPa, and delivery is into a drilled hole (so the needle exit is at atmospheric pressure). Find the maximum flow rate.`],
          ['svg', 'tf_syringe_dental', 'The barrel is wide, so almost all of the gauge pressure Δp is lost to laminar friction along the needle; the exit is at p_a.'],
          ['ans'],
          ['t', R`The barrel is much wider than the needle, so its viscous loss is negligible and the whole 0.3 MPa drops along the needle. Assume laminar, so that $C_f = 16\mu/(\rho u_m D)$.`],
          ['m', R`\frac{\Delta p}{L} = \frac{4}{D}\cdot\tfrac12\rho u_m^2\cdot\frac{16\mu}{\rho u_m D} = \frac{32\mu u_m}{D^2}`],
          ['m', R`\Rightarrow\; u_m = \frac{\Delta p\,D^2}{32\mu L} = \frac{(0.3\times10^6)(0.21\times10^{-3})^2}{32(3\times10^{-3})(0.025)} = 5.51\ \text{m/s}`],
          ['m', R`Q = u_m\tfrac{\pi}{4}D^2 = 1.9\times10^{-7}\ \text{m}^3/\text{s} \equiv 11\ \text{mL/min}`],
          ['m', R`Re = \frac{1000(5.51)(0.21\times10^{-3})}{3\times10^{-3}} = 386 < 2000\ \checkmark`],
        ]],
        ['ex', 'Example — sizing an air-conditioning duct (lecture)', [
          ['t', R`A smooth horizontal duct must carry $Q = 0.3$ m³/s of air ($\rho = 1.2$, $\mu = 1.7\times10^{-5}$) with at most 90 Pa drop over 100 m. Find $D$. Assume turbulent.`],
          ['ans'],
          ['t', R`Combine the force balance, $\tau_w = \tfrac12\rho u_m^2C_f$ and Blasius, writing $Re^{-1/4} = \mu^{1/4}\rho^{-1/4}u_m^{-1/4}D^{-1/4}$:`],
          ['m', R`-\frac{dp}{dx} = \frac{4}{D}\cdot\tfrac12\rho u_m^2\cdot0.079\,\mu^{1/4}\rho^{-1/4}u_m^{-1/4}D^{-1/4}`],
          ['t', R`Collect constants and powers: $4\times\tfrac12\times0.079 = 0.158$; $\rho^{1}\rho^{-1/4} = \rho^{3/4}$; $u_m^2u_m^{-1/4} = u_m^{7/4}$; $D^{-1}D^{-1/4} = D^{-5/4}$:`],
          ['m', R`-\frac{dp}{dx} = 0.158\,\frac{\rho^{3/4}\mu^{1/4}u_m^{7/4}}{D^{5/4}}`],
          ['t', R`$D$ is unknown, so eliminate $u_m = 4Q/\pi D^2$: $u_m^{7/4} = (4/\pi)^{7/4}Q^{7/4}D^{-7/2}$, and $D^{-5/4}D^{-14/4} = D^{-19/4}$. The constant is $0.158\,(4/\pi)^{7/4} = 0.158\times1.526 = 0.241$:`],
          ['m', R`-\frac{dp}{dx} = 0.241\,\frac{\rho^{3/4}\mu^{1/4}Q^{7/4}}{D^{19/4}},`],
          ['m', R`-\frac{dp}{dx} = \frac{90\ \text{Pa}}{100\ \text{m}} = 0.9\ \text{Pa/m}`],
          ['m', R`D = \left(\frac{0.241\,\rho^{3/4}\mu^{1/4}Q^{7/4}}{0.9}\right)^{4/19} = \left(\frac{0.241(1.147)(0.0642)(0.1216)}{0.9}\right)^{4/19} = \left(2.40\times10^{-3}\right)^{4/19} = 0.28\ \text{m}`],
          ['m', R`\text{Check: } u_m = \frac{4(0.3)}{\pi(0.28)^2} = 4.84\ \text{m/s}`],
          ['m', R`Re = \frac{1.2(4.84)(0.28)}{1.7\times10^{-5}} = 9.6\times10^4 \ \ (\text{turbulent, inside Blasius range}) \checkmark`],
        ]],
        ['ex', 'Example — using the Darcy friction factor (extra practice, not from the course)', [
          ['t', R`A smooth water main ($\rho = 1000$, $\mu = 10^{-3}$) has $D = 50$ mm and $L = 200$ m, and carries $Q = 3$ L/s. A data sheet quotes the **Darcy** friction factor $f = 0.019$. Find the pressure drop and the pump power. Check $f$ against Blasius.`],
          ['ans'],
          ['m', R`A = \tfrac{\pi}{4}(0.05)^2 = 1.96\times10^{-3}\ \text{m}^2`],
          ['m', R`u_m = \frac{3\times10^{-3}}{1.96\times10^{-3}} = 1.53\ \text{m/s}`],
          ['m', R`Re = \frac{1000(1.53)(0.05)}{10^{-3}} = 7.6\times10^4`],
          ['m', R`-\Delta p = f\,\frac{L}{D}\,\tfrac12\rho u_m^2 = 0.019\times\frac{200}{0.05}\times\tfrac12(1000)(1.53)^2 = 0.019\times4000\times1167 = 8.87\times10^4\ \text{Pa}`],
          ['m', R`P = Q\,\Delta p = (3\times10^{-3})(8.87\times10^4) = 266\ \text{W}`],
          ['m', R`\text{Check: } C_f = \frac{f}{4} = 4.75\times10^{-3}; \quad \text{Blasius } 0.079(7.6\times10^4)^{-1/4} = 4.75\times10^{-3}\ \checkmark`],
          ['t', R`**Trap:** putting $f = 0.019$ into the $C_f$ formula $2\rho u_m^2 C_f L/D$ gives 355 kPa, which is **4× too big**.`]
        ]],
        ['ex', 'Example — pumping oil up a slope (extra practice, not from the course)', [
          ['t', R`Oil ($\rho = 900$, $\mu = 0.5$ kg/m s) is pumped at $u_m = 1.0$ m/s up a smooth pipe with $D = 0.1$ m. The pipe is 500 m long and rises at $\theta = 10°$. Find the pressure the pump must supply and its power. What if the oil flowed **down** the same slope?`],
          ['ans'],
          ['m', R`Re = \frac{900(1.0)(0.1)}{0.5} = 180 \ \ (\text{laminar})`],
          ['m', R`C_f = \frac{16}{180} = 0.0889`],
          ['m', R`\tau_w = \tfrac12(900)(1.0)^2(0.0889) = 40.0\ \text{Pa}`],
          ['m', R`\text{friction: } \frac{4\tau_w}{D} = \frac{4(40.0)}{0.1} = 1600\ \text{Pa/m} \quad \Big(= \frac{32\mu u_m}{D^2}\ \checkmark\Big)`],
          ['m', R`\text{gravity: } \rho g\sin\theta = 900(9.81)\sin10° = 1533\ \text{Pa/m}`],
          ['m', R`-\frac{dp}{dx} = 1600 + 1533 = 3133\ \text{Pa/m} \;\Rightarrow\; \Delta p = 3133\times500 = 1.57\ \text{MPa}`],
          ['m', R`Q = 1.0\times\tfrac{\pi}{4}(0.1)^2 = 7.85\times10^{-3}\ \text{m}^3/\text{s}`],
          ['m', R`P = Q\,\Delta p = 12.3\ \text{kW}`],
          ['t', R`About half the pressure (0.77 MPa) just lifts the oil the $500\sin10° = 86.8$ m height. **Downhill** ($\theta = -10°$): $-dp/dx = 1600 - 1533 = 67$ Pa/m, so only 33 kPa is needed. Gravity does almost all the work.`]
        ]],
        ['warn', 'When to use', [
          R`Use the laminar route ($u_m = \Delta p D^2/32\mu L$) when $\mu$ is large or the pipe is tiny (oil, syringes, blood). Use the Blasius route when the fluid is air or water at ordinary speeds. Rough pipes and $Re > 10^5$ need the Moody diagram (Topic 7).`
        ]]
      ]
    },
    {
      num: '4.7', title: 'Summary: Method and Traps',
      blocks: [
        ['eq', [
          ['Force balance (any duct)', R`-\frac{dp}{dx} = \frac{4\tau_w}{D_H} + \rho g\sin\theta`, '[Pa/m]', 'D_H = D for a circle; θ > 0 uphill.'],
          ['Laminar shortcuts', R`u_m = \frac{\Delta p\,D^2}{32\mu L},\quad \tau_w = \frac{8\mu u_m}{D},\quad F = 8\pi L\mu u_m`, '', 'From C_f = 16/Re; no ρ.'],
          ['Turbulent (Blasius) shortcuts', R`-\frac{dp}{dx} = 0.158\frac{\rho^{3/4}\mu^{1/4}u_m^{7/4}}{D^{5/4}} = 0.241\frac{\rho^{3/4}\mu^{1/4}Q^{7/4}}{D^{19/4}}`, '[Pa/m]', '4000 < Re < 10⁵.']
        ]],
        ['list', R`**Traps** to check before you hand in an answer:`, false, [
          R`**SI units first**: mm → m, L/h → m³/s (÷ 1000 × 3600), poise → Pa s (1 P = 0.1 Pa s).`,
          R`**Diameter, not radius**, in $Re$ and in $4/D$ (Q3 gives a radius).`,
          R`**$u_m = Q/A$** is the mean velocity. Laminar $u_m = \tfrac12u_{max}$ (Q7); turbulent $u_m \approx 0.82u_{max}$ (the course rounds to $0.8u_{max}$).`,
          R`**Which friction number?** $\tau_w = \tfrac12\rho u_m^2C_f = \tfrac18\rho u_m^2 f$. Mixing them up gives an error of 4.`,
          R`**Check $Re$** after a regime guess (Q9). Laminar below 2000; Blasius only for 4000 to $10^5$; 2000 to 4000 is transitional and unreliable. Above $10^5$ (smooth or rough) go to the Moody diagram.`,
          R`**Inclined pipe**: add $\rho g\sin\theta$, with $\theta$ positive uphill in the flow direction.`,
          R`**Non-circular duct**: $D_H$ in $Re$, $C_f$ and $4/D_H$, but the actual area in $u_m = Q/A$.`,
          R`**Power**: $P = Q\Delta p$. Say whether it is per pump or the total.`
        ]]
      ]
    },
    {
      num: 'Ex 4', title: 'Problem Sheet — Introduction to Hydraulics', wk: true,
      blocks: [
        ['para', R`Unless stated: air $\rho = 1.2$, $\mu = 1.7\times10^{-5}$; water $\rho = 1000$, $\mu = 10^{-3}$ (SI units).`],
        ['ex', 'Q1 — kinematic vs dynamic viscosity', [
          ['t', R`Kinematic viscosity describes how a fluid diffuses momentum, so larger $\nu$ means a thicker boundary layer. Dynamic viscosity describes the viscous forces, so larger $\mu$ means a larger wall shear stress. Calculate $\nu$ for air and water. Which has the larger boundary layer, and which exerts the larger shear stress? [$10^{-6}$; $1.4\times10^{-5}$ m²/s]`],
          ['ans'],
          ['m', R`\nu_{water} = \frac{10^{-3}}{1000} = 10^{-6}\ \text{m}^2/\text{s}`],
          ['m', R`\nu_{air} = \frac{1.7\times10^{-5}}{1.2} = 1.4\times10^{-5}\ \text{m}^2/\text{s}`],
          ['t', R`$\nu_{air} > \nu_{water}$, so **air** has the larger boundary layer. $\mu_{air} < \mu_{water}$, so **water** exerts the larger shear stress on a surface.`]
        ]],
        ['ex', 'Q2 — floating-element shear balance', [
          ['t', R`A 1 cm² floating element measures wall shear in an air boundary layer with $u_\infty = 0.20$ m/s. Estimate the force when: (a) the velocity starts to drop below $u_\infty$ at 5 mm, i.e. the boundary-layer thickness is $\delta = 5$ mm (assume a linear profile); (b) $u = 3.8$ cm/s at $y = 0.5$ mm (linear); (c) the profile fits $u/u_\infty = (y/\delta)(2 - y/\delta)$ with the same $\delta = 5$ mm. [$6.8\times10^{-8}$; $1.3\times10^{-7}$; $1.36\times10^{-7}$ N]`],
          ['svg', 'tf_shear_balance', 'Floating-element balance: the boundary layer drags the flush disc sideways, bending the cantilever.'],
          ['ans'],
          ['t', R`Air is Newtonian: $\tau_w = \mu\,(du/dy)_{y=0}$, $F = \tau_w A$ with $A = 10^{-4}$ m². No slip gives $u = 0$ at $y = 0$.`],
          ['m', R`\text{(a) } \frac{du}{dy} \approx \frac{0.2}{0.005} = 40\ \text{s}^{-1}`],
          ['m', R`\Rightarrow \tau_w = (1.7\times10^{-5})(40) = 6.8\times10^{-4}\ \text{Pa},\ F = 6.8\times10^{-8}\ \text{N}`],
          ['m', R`\text{(b) } \frac{du}{dy} \approx \frac{0.038}{0.0005} = 76\ \text{s}^{-1}`],
          ['m', R`\Rightarrow \tau_w = 1.29\times10^{-3}\ \text{Pa},\ F = 1.29\times10^{-7}\ \text{N}`],
          ['t', R`(c) Expand the profile and differentiate, then set $y = 0$:`],
          ['m', R`u = u_\infty\left(\frac{2y}{\delta} - \frac{y^2}{\delta^2}\right)`],
          ['m', R`\Rightarrow \frac{du}{dy} = \frac{2u_\infty}{\delta}\left(1 - \frac{y}{\delta}\right)`],
          ['m', R`\Rightarrow \frac{du}{dy}\Big|_0 = \frac{2u_\infty}{\delta} = \frac{2(0.2)}{0.005} = 80\ \text{s}^{-1}`],
          ['m', R`\tau_w = (1.7\times10^{-5})(80) = 1.36\times10^{-3}\ \text{Pa} \Rightarrow F = 1.36\times10^{-7}\ \text{N}`],
          ['t', R`(c) is the most accurate. The gradient keeps steepening right to the wall, so straight-line estimates undershoot. The forces are tiny, which is why such balances are hard to build.`]
        ]],
        ['ex', 'Q3 — which regime?', [
          ['t', R`Air, water and oil ($\rho = 870$, $\mu = 0.25$) flow at $u_m = 1.0$ m/s in a pipe of radius 1.5 cm. Which regime is each in?`],
          ['ans'],
          ['t', R`Use the **diameter**, 0.03 m. Air: $Re = 1.2(1.0)(0.03)/1.7\times10^{-5} = 2118$, which is transitional. Water: $Re = 3\times10^4$, turbulent. Oil: $Re = 870(1.0)(0.03)/0.25 = 104$, laminar.`],
          ['t', R`**Note (course correction):** the printed solution says $3\times10^5$ for water. It is $1000(1.0)(0.03)/10^{-3} = 3\times10^4$, with the same conclusion.`]
        ]],
        ['ex', 'Q4 — force on a pipe in laminar flow', [
          ['t', R`Show that the force on a pipe of length $L$ with laminar flow is $F = 8\pi L\mu u_m$.`],
          ['ans'],
          ['m', R`\tau_w = \tfrac12\rho u_m^2\frac{16\mu}{\rho u_m D} = \frac{8\mu u_m}{D} \;\Rightarrow\; F = \pi D L\,\tau_w = 8\pi L\mu u_m`],
          ['t', R`Linear in $\mu$ and $u_m$, and independent of $\rho$: typical of viscously dominated flow.`]
        ]],
        ['ex', 'Q5 — flow rate and wall stress from a profile', [
          ['t', R`Laminar flow in a 25 mm pipe has $u = 1.8 - cr^2$. Find (a) $Q$, (b) $\tau_w$ if $\mu = 0.03$ P (1 P = 0.1 Pa s). [$4.42\times10^{-4}$ m³/s; 0.86 Pa]`],
          ['svg', 'tf_ring', 'Integrate the profile over rings of area 2πr dr; the wall stress comes from the slope of u(r) at r = R.'],
          ['ans'],
          ['t', R`No slip at $r = R = 0.0125$ m gives $c = 1.8/R^2$.`],
          ['m', R`Q = \int_0^R 2\pi r(1.8 - cr^2)\,dr = 2\pi\left[\frac{1.8R^2}{2} - \frac{1.8}{R^2}\frac{R^4}{4}\right] = \frac{2\pi(1.8)R^2}{4} = 4.42\times10^{-4}\ \text{m}^3/\text{s}`],
          ['m', R`\tau_w = \mu\left|\frac{du}{dr}\right|_R = \mu\cdot2cR = \frac{2\mu(1.8)}{R} = \frac{2(3\times10^{-3})(1.8)}{0.0125} = 0.86\ \text{Pa}`]
        ]],
        ['ex', 'Q6 — where does u equal the mean?', [
          ['t', R`For $u = \frac{1}{4\mu}\left(-\frac{dp}{dx}\right)(R^2 - r^2)$, find the radius where $u = u_m$. [0.707 R]`],
          ['ans'],
          ['m', R`u_m = \frac{2}{R^2}\int_0^R u\,r\,dr = \frac{R^2}{8\mu}\left(-\frac{dp}{dx}\right)`],
          ['m', R`\frac{R^2}{8\mu} = \frac{1}{4\mu}(R^2 - r_m^2)`],
          ['m', R`\Rightarrow\; 1 - \frac{r_m^2}{R^2} = \frac12`],
          ['m', R`\Rightarrow\; r_m = \frac{R}{\sqrt2} = 0.707R`],
        ]],
        ['ex', 'Q7 — designing a hypodermic syringe', [
          ['t', R`Maximum thumb force 10 N, plunger friction 5 N. Patient pressure $1.14\times10^5$ Pa, atmospheric $1.01\times10^5$ Pa. Needle 4 cm long, 0.2 mm bore, $\mu = 3\times10^{-3}$ kg/m s. The flow is laminar with $u_m = \tfrac12u_{max}$, and no fluid may enter the patient faster than $u_{max} = 0.30$ m/s. (a) What is the maximum barrel diameter? (b) Compare with an inviscid calculation. [1.52 cm; 2.21 cm]`],
          ['svg', 'tf_syringe', 'Net plunger force F_b over the barrel area gives the barrel gauge pressure p_i; the needle carries the patient back-pressure plus the laminar friction drop.'],
          ['ans'],
          ['t', R`**Symbols.** $F_b = 10 - 5 = 5$ N is the net plunger force on the fluid. $d_b$ is the barrel diameter (unknown). $d_n = 2\times10^{-4}$ m is the needle bore and $L = 0.04$ m its length. $p_a = 1.01\times10^5$ Pa is atmospheric pressure. $p_e = 1.14\times10^5$ Pa is the **absolute** pressure inside the patient, at the needle exit. $p_i$ is the barrel pressure as a **gauge** value (absolute = $p_i + p_a$). It is gauge because the atmosphere also pushes on the back of the plunger, so $F_b = p_iA_b$.`],
          ['t', R`**Assumptions.** The barrel is much wider than the needle, so its viscous loss is negligible. The flow is steady, fully developed and horizontal. The design speed $u_{max} = 0.30$ m/s gives $u_m = 0.15$ m/s.`],
          ['t', R`**Force balance on the fluid in the needle** (flow direction positive). Barrel pressure pushes; patient pressure and wall friction resist:`],
          ['m', R`(p_i + p_a)\frac{\pi d_n^2}{4} = p_e\frac{\pi d_n^2}{4} + \pi d_n L\cdot\tfrac12\rho u_m^2C_f`],
          ['m', R`\Rightarrow\; p_i = (p_e - p_a) + \frac{2}{d_n}\rho u_m^2LC_f`],
          ['t', R`In words: the barrel gauge pressure must overcome the patient's excess pressure over atmospheric, **plus** the needle friction. With laminar $C_f = 16\mu/\rho u_m d_n$, $\rho$ cancels:`],
          ['m', R`p_i = (p_e - p_a) + \frac{32\mu u_m L}{d_n^2} = 1.3\times10^4 + \frac{32(3\times10^{-3})(0.15)(0.04)}{(2\times10^{-4})^2} = 1.3\times10^4 + 1.44\times10^4 = 2.74\times10^4\ \text{Pa}`],
          ['t', R`**Why a maximum diameter.** For a given force, $p_i = F_b/\tfrac{\pi}{4}d_b^2$ falls as the barrel widens. The widest barrel for which the full 5 N still produces the required $p_i$ (and so the design speed) is:`],
          ['m', R`d_b = \sqrt{\frac{4F_b}{\pi p_i}} = \sqrt{\frac{4(5)}{\pi(2.74\times10^4)}} = 0.0152\ \text{m} = 1.52\ \text{cm}`],
          ['t', R`Any wider barrel cannot reach the design injection speed with the force available.`],
          ['m', R`\text{Check: } Re = \frac{\rho u_m d_n}{\mu} \approx \frac{1000(0.15)(2\times10^{-4})}{3\times10^{-3}} = 10 \ll 2000 \ \ (\text{laminar}) \checkmark \quad (\rho \approx 1000\ \text{assumed, aqueous drug})`],
          ['m', R`\text{(b) inviscid: } p_i = p_e - p_a = 1.3\times10^4\ \text{Pa} \Rightarrow d_b = \sqrt{\frac{4(5)}{\pi(1.3\times10^4)}} = 2.21\ \text{cm}`],
          ['t', R`Ignoring viscosity would let you specify a barrel that is too wide to push at the design speed. At 2.21 cm the full thumb force only just balances the patient's back-pressure, leaving nothing to overcome needle friction.`]
        ]],
        ['ex', 'Q8 — turbulent pressure loss', [
          ['t', R`Water, $\mu = 0.013$ P, flows at 700 L/h through a 2.5 cm pipe 30 m long. Find the frictional pressure loss with $C_f = 0.079Re^{-0.25}$. [3180 Pa]`],
          ['ans'],
          ['m', R`\mu = 0.0013\ \text{Pa s}`],
          ['m', R`Q = \frac{700}{1000\times3600} = 1.94\times10^{-4}\ \text{m}^3/\text{s}`],
          ['m', R`A = \tfrac{\pi}{4}(0.025)^2 = 4.91\times10^{-4}\ \text{m}^2`],
          ['m', R`u_m = \frac{Q}{A} = 0.396\ \text{m/s},\quad Re = \frac{1000(0.396)(0.025)}{0.0013} = 7600 \ \ (\text{turbulent, Blasius range})`],
          ['m', R`C_f = 0.079(7600)^{-0.25} = 8.46\times10^{-3}`],
          ['m', R`\Delta p = 2\rho u_m^2 C_f\frac{L}{D} = 2(1000)(0.396)^2(8.46\times10^{-3})\frac{30}{0.025} = 3180\ \text{Pa}`],
        ]],
        ['ex', 'Q9 — chimney draught', [
          ['t', R`Wind speed rises linearly from 0 at the ground to 10 m/s at 20 m. A chimney of diameter 0.1 m rises 10 m. (a) Why does smoke go up? (b) Why ignore hydrostatics? (c) Why does wind speed vary with height? (d) What is the pressure difference from fireplace to top? (e) What is the mean air speed with major loss only? [15 Pa; 3.1 m/s]`],
          ['svg', 'tf_chimney_h', 'Still air in the room is at p₀; wind u_w over the chimney top lowers the pressure there to p < p₀, driving the draught up the flue.'],
          ['ans'],
          ['t', R`(a) The still room air is at stagnation pressure $p_0$. Where wind moves over the chimney top the pressure is lower. That difference drives the draught. (b) Hydrostatics is not negligible on its own but it **cancels**. Air density is about 1.2 kg/m³, so over the 10 m height $\rho g h = 1.2(9.81)(10) \approx 118$ Pa, which is far bigger than the 15 Pa found in (d). But the still air outside the chimney has the same density and the same height, so the pressure falls by the same 118 Pa outside as inside. The difference that drives the flow is only the wind term. (This assumes the chimney gas is at room temperature; hot flue gas is lighter, which adds a buoyant "stack effect" not asked for here.) Saying only "negligible" would lose the mark: say it is equal inside and outside. (c) No slip at the ground creates an **atmospheric boundary layer**.`],
          ['m', R`\text{(d) } u_w = \frac{10}{20}\times10 = 5\ \text{m/s at 10 m};\quad p_0 = p + \tfrac12\rho u_w^2`],
          ['m', R`\Rightarrow \Delta p = \tfrac12(1.2)(5)^2 = 15\ \text{Pa}`],
          ['m', R`\text{(e) guess laminar: } u = \frac{\Delta p D^2}{32\mu L} = \frac{15(0.1)^2}{32(1.7\times10^{-5})(10)} = 27.5\ \text{m/s}`],
          ['m', R`\Rightarrow Re = 1.9\times10^5 \ \ \text{✗ not laminar}`],
          ['t', R`Redo with Blasius, using the turbulent form from the duct example: $\Delta p/L = 0.158\,\rho^{3/4}\mu^{1/4}u^{7/4}/D^{5/4}$. Solve for $u$:`],
          ['m', R`u = \left(\frac{\Delta p\,D^{5/4}}{0.158\rho^{3/4}\mu^{1/4}L}\right)^{4/7} = 3.10\ \text{m/s}`],
          ['m', R`Re = \frac{1.2(3.10)(0.1)}{1.7\times10^{-5}} = 2.2\times10^4\ \checkmark`],
          ['t', R`A real chimney also has **minor losses** (entry, exit), covered in Topic 7.`]
        ]],
        ['ex', 'Q10 — hydraulic diameters', [
          ['t', R`Show the hydraulic diameters of a square, rectangle, open channel, equilateral triangle and annulus.`],
          ['ans'],
          ['m', R`\text{square: } \frac{4l^2}{4l} = l`],
          ['m', R`\text{rectangle: } \frac{4lh}{2(l+h)} = \frac{2lh}{l+h}`],
          ['m', R`\text{channel: } \frac{4hw}{2h+w}`],
          ['m', R`\text{triangle: } \frac{4(\sqrt3/4)l^2}{3l} = \frac{l}{\sqrt3}`],
          ['m', R`\text{annulus: } \frac{4\cdot\tfrac{\pi}{4}(D_o+D_i)(D_o-D_i)}{\pi(D_o+D_i)} = D_o - D_i`],
          ['t', R`Open channel: area $hw$; wetted perimeter $2h + w$ (two sides plus the bed; the free surface is not wetted).`],
          ['t', R`**Note (course correction):** the problem sheet prints the channel answer as $4lw/(2h+w)$. The area is $hw$, so it should be $4hw/(2h+w)$, as in the printed solution.`]
        ]]
      ]
    }
  ]
}
