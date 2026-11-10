{
  key: 'tf_hydraulics', area: 'pipe', num: '4', week: 'Week 2',
  name: 'Introduction to Hydraulics: Pipe-Flow Equations',
  triggers: 'pressure drop along a pipe · pump power · −dp/dx = 4τ_w/D · C_f · friction factor f = 4C_f · Blasius · laminar or turbulent? · guess the regime then check Re · hydraulic diameter · wall shear from a profile',
  sections: [
    {
      num: '', title: 'Revision Objectives — Introduction to Hydraulics',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Explain where viscous stresses come from: **shear flows** and the **no-slip** condition, and what a boundary layer is.`,
          R`Describe laminar and turbulent flow, and use $Re$ to predict which you have (pipe transition ≈ 2100).`,
          R`Derive the pipe force balance $-dp/dx = 4\tau_w/D + \rho g\sin\theta$.`,
          R`Use $C_f = \tau_w/\tfrac12\rho u_m^2$ with $16/Re$ (laminar) or Blasius $0.079Re^{-1/4}$ (turbulent) to find pressure drops, flow rates, diameters and pump power.`,
          R`Convert between $C_f$ and the Darcy friction factor $f = 4C_f$ — and know which one a question uses.`,
          R`Use the **hydraulic diameter** for non-circular ducts.`
        ]]
      ]
    },
    {
      num: '4.1', title: 'Shear Flows: Where Viscous Forces Come From',
      blocks: [
        ['para', R`For a Newtonian fluid, shear stress is proportional to the strain rate — the **shear gradient**, i.e. how fast velocity changes **perpendicular** to the flow direction. The constant of proportionality is the **dynamic viscosity** $\mu$, a fluid property.`],
        ['disp', [ R`\boxed{\tau = \mu\frac{du}{dy}} \tag{4.1}` ]],
        ['svg', 'tf_shear_layer', 'Shear flow type 1: two streams of different speed side by side. The velocity gradient across the shear layer generates viscous stress.'],
        ['list', R`A shear stress needs the fluid to be **flowing** with a **shear gradient**. Shear flows happen when:`, true, [
          R`flows of **different speeds** run next to each other (a shear layer, e.g. a jet), or`,
          R`there is a **solid boundary**.`
        ]],
        ['warn', 'Key Insight', [
          R`**No slip:** fluid at a boundary moves with the boundary — at a stationary wall, $u = 0$.`,
          R`Viscosity slows the fluid next to the wall, forming a **boundary layer**: the region where $u < u_\infty$ (the free-stream speed). The wall shear stress $\tau_w = \mu\,(du/dy)_{y=0}$.`,
          R`So viscous forces matter wherever there are **boundaries** — which is why Bernoulli fails in pipes.`
        ]],
        ['svg', 'tf_boundary_layer', 'Shear flow type 2: a solid boundary. No slip forces u = 0 at the wall; the boundary layer (u < u∞) grows with distance downstream.'],
        ['warn', 'Recall Knowledge', [
          R`**Kinematic viscosity** $\nu = \mu/\rho$ (m²/s) controls how far momentum **diffuses** — larger $\nu$, thicker boundary layer. **Dynamic viscosity** $\mu$ controls the **force** exerted — larger $\mu$, larger wall shear stress. Air has the larger $\nu$ ($1.4\times10^{-5}$ vs $10^{-6}$ m²/s) but the smaller $\mu$.`
        ]]
      ]
    },
    {
      num: '4.2', title: 'Laminar and Turbulent Flow',
      blocks: [
        ['para', R`In 1839 **Hagen** found that at low flow rates $\Delta p \propto u_m$, which suddenly switched to $\Delta p \propto u_m^{1.75}$ over a critical range of speeds. In 1883 **Reynolds** showed why with dye injected on the centreline of a pipe: a straight filament (laminar), rapid dispersal by eddies (turbulent), and an intermittent state between (transitional).`],
        ['svg', 'tf_hagen', 'Hagen (1839): pressure drop rises linearly with speed at low speed, then abruptly switches to Δp ∝ V^1.75 — the transition to turbulence.'],
        ['svg', 'tf_reynolds_dye', 'Reynolds\'s dye experiment (1883): a straight filament in laminar flow, rapid dispersal in turbulent flow, intermittent bursts in transitional flow.'],
        ['html', '<table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0);width:50%">Laminar</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Turbulent</th></tr></thead><tbody><tr><td style="padding:6px 10px">Smooth layers ("laminae") sliding over each other, no mixing</td><td style="padding:6px 10px">Velocity fluctuates irregularly; continual mixing by eddies</td></tr><tr><td style="padding:6px 10px">Dominated by <b>viscous</b> forces (depend on μ, not ρ)</td><td style="padding:6px 10px">Dominated by <b>inertial</b> forces (depend on ρ, not μ)</td></tr><tr><td style="padding:6px 10px">Forces ∝ velocity</td><td style="padding:6px 10px">Forces ∝ velocity²</td></tr><tr><td style="padding:6px 10px">Reversible · low Re</td><td style="padding:6px 10px">Irreversible · high Re</td></tr></tbody></table>'],
        ['eq', [
          ['Reynolds number (pipe)', R`Re = \frac{\rho u_m D}{\mu} = \frac{\text{inertial}}{\text{viscous}}`, '[–]', 'Length scale for a pipe is the diameter D.']
        ]],
        ['warn', 'Important', [
          R`For a **cylindrical pipe** transition is usually taken as $Re \approx 2100$, with a transition region from about **2000 to 4000**. It depends on geometry, roughness and vibration (Reynolds's own rig in Manchester now transitions earlier because of traffic outside).`,
          R`Very low $Re$ flows — viscous forces dominate, inertia negligible — are called **creeping flows**.`
        ]],
        ['para', R`The velocity profiles differ: **inviscid** (potential) flow would be uniform; **laminar** is a parabola; **turbulent** is much blunter, often approximated by a **1/7th power law**.`],
        ['svg', 'tf_profiles', 'Same flow rate, three profiles: inviscid (uniform), laminar (parabola, u_max = 2u_m), turbulent (much flatter, ≈ 1/7 power law).'],
      ]
    },
    {
      num: '4.3', title: 'Force Balance on Fluid in a Pipe',
      blocks: [
        ['para', R`Hydraulics (Greek *hydor* "water" + *aulus* "pipe") studies flow along pipes. We use averaged, **one-dimensional** mass and momentum equations, with velocity varying only across the pipe, for flows that are **incompressible, steady, fully developed and Newtonian**. With no change in momentum flux, the momentum equation becomes a **force balance** on a small slice $\delta l$ of fluid in a pipe inclined at $\theta$.`],
        ['svg', 'tf_pipe_incline', 'Force balance on a slice δl of an inclined pipe: the net pressure force (on the cross-section) balances wall friction τ_w (on the wall area) plus the weight component.'],
        ['deriv', 'Derivation — pressure gradient in a pipe', [
          ['t', R`**Pressure force** (net, in the flow direction), acting on the cross-section $\tfrac{\pi}{4}D^2$:`],
          ['m', R`p\,\tfrac{\pi}{4}D^2 - \left(p + \frac{dp}{dx}\delta l\right)\tfrac{\pi}{4}D^2 = -\frac{dp}{dx}\,\delta l\,\tfrac{\pi}{4}D^2`],
          ['t', R`**Friction** acts on the **wall area** $\pi D\,\delta l$: force $\tau_w\pi D\,\delta l$ (the "major loss"). **Gravity** acts on the volume: $\rho g\sin\theta\,\tfrac{\pi}{4}D^2\delta l$.`],
          ['m', R`-\frac{dp}{dx}\,\delta l\,\tfrac{\pi}{4}D^2 = \tau_w\pi D\,\delta l + \rho g\sin\theta\,\tfrac{\pi}{4}D^2\delta l`]
        ]],
        ['disp', [ R`\boxed{-\frac{dp}{dx} = \frac{4}{D}\tau_w + \rho g\sin\theta} \qquad \text{horizontal: } -\frac{dp}{dx} = \frac{4\tau_w}{D} \tag{4.2}` ]],
        ['warn', 'Key Insight', [
          R`The $4/D$ appears because pressure acts over the **cross-section** ($\pi D^2/4$) but friction over the **wall** ($\pi D\,\delta l$). All else equal, a small pipe has far more resistance than a large one.`,
          R`We can go no further until we can describe $\tau_w$ — which needs dimensionless numbers and experiments.`
        ]]
      ]
    },
    {
      num: '4.4', title: 'Coefficient of Friction and the Flow Curve',
      blocks: [
        ['para', R`Dimensional analysis showed that for a **smooth** pipe and **fully developed** flow, $C_f = f(Re)$. Measure it once and it applies to every smooth pipe of any size.`],
        ['eq', [
          ['Coefficient of friction (Fanning)', R`C_f = \frac{\tau_w}{\tfrac12\rho u_m^2}`, '[–]', 'Frictional stress : inertia. A type of Euler number.'],
          ['Darcy friction factor', R`f = \frac{8\tau_w}{\rho u_m^2} = \frac{2D}{\rho u_m^2}\left(-\frac{dp}{dx}\right) = 4C_f`, '[–]', 'Dynamically identical — just 4× bigger.'],
          ['Laminar flow', R`C_f = \frac{16}{Re}`, '[–]', 'Exact (derived in Topic 5). Re < ~2000.'],
          ['Turbulent, smooth pipe (Blasius)', R`C_f = 0.079\,Re^{-1/4}`, '[–]', 'Good for 4000 < Re < 10⁵.'],
          ['Pressure drop over length L', R`-\Delta p = \frac{4L}{D}\tau_w = 2\rho u_m^2 C_f\frac{L}{D}`, '[Pa]', 'Horizontal pipe.'],
          ['Pump power', R`P = Q\,\Delta p = u_m\tfrac{\pi}{4}D^2\,\Delta p`, '[W]', 'Power to overcome the pressure drop.']
        ]],
        ['svg', 'tf_cf_re', 'The smooth-pipe flow curve: C_f = 16/Re (laminar), transition near Re ≈ 2000–4000, then turbulent; Blasius 0.079 Re^-1/4 fits 4000 < Re < 10⁵.'],
        ['warn', 'Warning', [
          R`**Two friction numbers, factor of 4 apart.** This course uses "coefficient of friction $C_f$" and "friction factor $f = 4C_f$". Textbooks differ — Massey's $f$ is this course's $C_f$. Always check which one a chart or formula uses.`,
          R`The "Preview of hydraulics" slide prints $f = 8\frac{D}{\rho u_m^2}\left(-\frac{dp}{dx}\right)$; with $-dp/dx = 4\tau_w/D$ that would be $16C_f$. The consistent form is $f = 2\frac{D}{\rho u_m^2}\left(-\frac{dp}{dx}\right) = 8\tau_w/\rho u_m^2 = 4C_f$, as in the written notes.`
        ]],
        ['warn', 'Key Insight', [
          R`Laminar: $C_f \propto Re^{-1}$ ⇒ $\Delta p \propto u_m$ (Hagen's low-speed result). The Euler number ∝ $1/Re$ for every viscously dominated system.`,
          R`Turbulent (Blasius): $C_f \propto Re^{-1/4}$ ⇒ $\Delta p \propto u_m^{2 - 1/4} = u_m^{1.75}$.`
        ]]
      ]
    },
    {
      num: '4.5', title: 'Hydraulic Diameter',
      blocks: [
        ['para', R`Equation (4.2) works for non-circular ducts if $D$ is replaced by the **hydraulic diameter** — the ratio that made the $4/D$ appear in the first place. Undulating or corner-rich walls bring the wall closer to the bulk of the fluid, as if the pipe were narrower.`],
        ['disp', [ R`\boxed{D_H = \frac{4 \times \text{flow area}}{\text{wetted perimeter}}} \tag{4.3}` ]],
        ['svg', 'tf_hydraulic_d', 'An undulating wall adds wetted perimeter, so friction is as if the flow were in a narrower circular pipe of diameter D_H.'],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:560px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Shape</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">D<sub>H</sub></th></tr></thead><tbody><tr><td style="padding:6px 10px">Circle, diameter D</td><td style="padding:6px 10px">D</td></tr><tr><td style="padding:6px 10px">Square, side l</td><td style="padding:6px 10px">l</td></tr><tr><td style="padding:6px 10px">Rectangle l × h</td><td style="padding:6px 10px">2lh / (l + h)</td></tr><tr><td style="padding:6px 10px">Open channel, width w, depth h</td><td style="padding:6px 10px">4hw / (2h + w)</td></tr><tr><td style="padding:6px 10px">Equilateral triangle, side l</td><td style="padding:6px 10px">l / √3</td></tr><tr><td style="padding:6px 10px">Annulus D<sub>i</sub>, D<sub>o</sub></td><td style="padding:6px 10px">D<sub>o</sub> − D<sub>i</sub></td></tr></tbody></table>'],
        ['warn', 'Note', [
          R`An open channel's free surface is not "wetted", so it is left out of the perimeter. The **hydraulic radius** some books use is $D_H/4$.`
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
          R`If $u_m$ is unknown you can't compute $Re$ — **guess the regime**, solve, then **check $Re$**. If wrong, redo with the other $C_f$.`
        ]],
        ['ex', 'Example — Trans-Alaska pipeline pumps (lecture)', [
          ['t', R`$L = 1300$ km, $D = 1.22$ m, $u_m = 1.67$ m/s, crude oil $\rho = 900$ kg/m³, $\mu = 6.0$ kg/m s (at 0 °C). 40 pumps share the load. Find the pressure rise and power per pump.`],
          ['ans'],
          ['m', R`Re = \frac{900\times1.67\times1.22}{6.0} = 306 \ \ (\text{laminar}) \qquad C_f = \frac{16}{306} = 0.052`],
          ['m', R`\tau_w = \tfrac12\rho u_m^2 C_f = 65.7\ \text{Pa} \qquad -\frac{dp}{dx} = \frac{4\tau_w}{D} = 215.4\ \text{Pa/m}`],
          ['m', R`\Delta p_{\text{pump}} = \frac{215.4\times1.3\times10^6}{40} = 7.0\ \text{MPa} \qquad P = u_m\tfrac{\pi}{4}D^2\,\Delta p = 13.6\ \text{MW}`]
        ]],
        ['ex', 'Example — dental syringe (lecture)', [
          ['t', R`Needle $D = 0.21$ mm, $L = 25$ mm; drug $\mu = 3\times10^{-3}$, $\rho = 1000$. Maximum comfortable barrel gauge pressure 0.3 MPa; delivery into a drilled hole (at atmospheric). Maximum flow rate?`],
          ['svg', 'tf_syringe', 'The barrel is wide, so almost all of the pressure drop is laminar friction in the needle.'],
          ['ans'],
          ['t', R`Barrel much wider than the needle, so its viscous loss is negligible; the whole 0.3 MPa drops along the needle. Assume laminar:`],
          ['m', R`\frac{\Delta p}{L} = \frac{4}{D}\cdot\tfrac12\rho u_m^2\cdot\frac{16\mu}{\rho u_m D} \;\Rightarrow\; u_m = \frac{\Delta p\,D^2}{32\mu L} = 5.51\ \text{m/s}`],
          ['m', R`Q = u_m\tfrac{\pi}{4}D^2 = 1.9\times10^{-7}\ \text{m}^3/\text{s} \equiv 11\ \text{mL/min} \qquad Re = 386\ \checkmark`]
        ]],
        ['ex', 'Example — sizing an air-conditioning duct (lecture)', [
          ['t', R`A smooth horizontal duct must carry $Q = 0.3$ m³/s of air ($\rho = 1.2$, $\mu = 1.7\times10^{-5}$) with at most 90 Pa drop over 100 m. Find $D$. Assume turbulent.`],
          ['ans'],
          ['m', R`-\frac{dp}{dx} = \frac{4}{D}\cdot\tfrac12\rho u_m^2\cdot0.079\left(\frac{\mu}{\rho u_m D}\right)^{1/4} = 0.158\frac{\rho^{3/4}\mu^{1/4}u_m^{7/4}}{D^{5/4}}`],
          ['m', R`u_m = \frac{4Q}{\pi D^2} \;\Rightarrow\; -\frac{dp}{dx} = 0.241\frac{\rho^{3/4}\mu^{1/4}Q^{7/4}}{D^{19/4}} = 0.9\ \text{Pa/m} \;\Rightarrow\; D = 0.28\ \text{m}`],
          ['m', R`\text{Check: } Re = \frac{\rho u_m D}{\mu} = 9.6\times10^4 \ \ (\text{inside Blasius range}) \checkmark`]
        ]],
        ['warn', 'When to use', [
          R`Laminar route ($u_m = \Delta p D^2/32\mu L$) when $\mu$ is large or the pipe tiny (oil, syringes, blood). Blasius route when the fluid is air or water at ordinary speeds. Rough pipes and $Re > 10^5$ need the Moody diagram (Topic 7).`
        ]]
      ]
    },
    {
      num: 'Ex 4', title: 'Problem Sheet — Introduction to Hydraulics', wk: true,
      blocks: [
        ['para', R`Unless stated: air $\rho = 1.2$, $\mu = 1.7\times10^{-5}$; water $\rho = 1000$, $\mu = 10^{-3}$ (SI units).`],
        ['ex', 'Q2 — floating-element shear balance', [
          ['t', R`A 1 cm² floating element measures wall shear in an air boundary layer with $u_\infty = 0.20$ m/s. Estimate the force when (a) the velocity drops below $u_\infty$ at 5 mm (assume linear); (b) $u = 3.8$ cm/s at $y = 0.5$ mm (linear); (c) the profile fits $u/u_\infty = (y/\delta)(2 - y/\delta)$. [$6.8\times10^{-8}$; $1.3\times10^{-7}$; $1.36\times10^{-7}$ N]`],
          ['svg', 'tf_shear_balance', 'Floating-element balance: the boundary layer drags the flush disc sideways, bending the cantilever.'],
          ['ans'],
          ['t', R`Air is Newtonian: $\tau_w = \mu\,(du/dy)_{y=0}$, $F = \tau_w A$. No slip gives $u = 0$ at $y = 0$.`],
          ['m', R`\text{(a) } \frac{du}{dy} \approx \frac{0.2}{0.005} = 40\ \text{s}^{-1} \Rightarrow \tau_w = 6.8\times10^{-4}\ \text{Pa},\ F = 6.8\times10^{-8}\ \text{N}`],
          ['m', R`\text{(b) } \frac{du}{dy} \approx \frac{0.038}{0.0005} = 76\ \text{s}^{-1} \Rightarrow F = 1.29\times10^{-7}\ \text{N}`],
          ['m', R`\text{(c) } \frac{du}{dy}\Big|_0 = \frac{2u_\infty}{\delta} = 80\ \text{s}^{-1} \Rightarrow F = 1.36\times10^{-7}\ \text{N}`],
          ['t', R`(c) is the most accurate — the gradient keeps steepening right to the wall, so straight-line estimates undershoot. The forces are tiny, which is why such balances are hard to build.`]
        ]],
        ['ex', 'Q3 — which regime?', [
          ['t', R`Air, water and oil ($\rho = 870$, $\mu = 0.25$) flow at $u_m = 1.0$ m/s in a pipe of radius 1.5 cm. Which regime is each in?`],
          ['ans'],
          ['t', R`Use the **diameter**, 0.03 m. Air: $Re = 2118$ — transitional. Water: $Re = 3\times10^4$ — turbulent. Oil: $Re = 104$ — laminar. (The printed solution says $3\times10^5$ for water; it is $3\times10^4$, same conclusion.)`]
        ]],
        ['ex', 'Q4 — force on a pipe in laminar flow', [
          ['t', R`Show that the force on a pipe of length $L$ with laminar flow is $F = 8\pi L\mu u_m$.`],
          ['ans'],
          ['m', R`\tau_w = \tfrac12\rho u_m^2\frac{16\mu}{\rho u_m D} = \frac{8\mu u_m}{D} \;\Rightarrow\; F = \pi D L\,\tau_w = 8\pi L\mu u_m`],
          ['t', R`Linear in $\mu$ and $u_m$, independent of $\rho$ — typical of viscously dominated flow.`]
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
          ['m', R`\frac{R^2}{8\mu} = \frac{1}{4\mu}(R^2 - r_m^2) \;\Rightarrow\; 1 - \frac{r_m^2}{R^2} = \frac12 \;\Rightarrow\; r_m = \frac{R}{\sqrt2} = 0.707R`]
        ]],
        ['ex', 'Q7 — designing a hypodermic syringe', [
          ['t', R`Maximum thumb force 10 N, plunger friction 5 N. Patient pressure $1.14\times10^5$ Pa, atmospheric $1.01\times10^5$ Pa. Needle 4 cm long, 0.2 mm bore, $\mu = 3\times10^{-3}$, laminar with $u_m = \tfrac12u_{max}$, $u_{max} \le 0.30$ m/s. (a) Maximum barrel diameter? (b) Compare with inviscid. [1.52 cm; 2.21 cm]`],
          ['svg', 'tf_syringe', 'Net plunger force over the barrel area gives the barrel pressure; the needle carries the laminar pressure drop.'],
          ['ans'],
          ['t', R`Net force on the plunger $F_b = 10 - 5 = 5$ N; $u_m = 0.15$ m/s. Force balance on the fluid in the needle (barrel losses negligible):`],
          ['m', R`p_i = (p_e - p_a) + \frac{2}{d_n}\rho u_m^2 L C_f = (p_e - p_a) + \frac{32\mu u_m L}{d_n^2} = 1.3\times10^4 + 1.44\times10^4 = 2.74\times10^4\ \text{Pa}`],
          ['m', R`p_i = \frac{F_b}{\tfrac{\pi}{4}d_b^2} \Rightarrow d_b = \sqrt{\frac{4(5)}{\pi(2.74\times10^4)}} = 1.52\ \text{cm}`],
          ['m', R`\text{(b) inviscid: } p_i = p_e - p_a = 1.3\times10^4 \Rightarrow d_b = 2.21\ \text{cm}`],
          ['t', R`Ignoring viscosity would let you specify a barrel that's too wide to push.`]
        ]],
        ['ex', 'Q8 — turbulent pressure loss', [
          ['t', R`Water, $\mu = 0.013$ P, flows at 700 L/h through a 2.5 cm pipe 30 m long. Find the frictional pressure loss with $C_f = 0.079Re^{-0.25}$. [3180 Pa]`],
          ['ans'],
          ['m', R`Q = \frac{700}{1000\times3600} = 1.94\times10^{-4}\ \text{m}^3/\text{s},\quad u_m = \frac{Q}{A} = 0.396\ \text{m/s},\quad Re = \frac{1000(0.396)(0.025)}{0.0013} = 7600`],
          ['m', R`C_f = 0.079(7600)^{-0.25} = 8.46\times10^{-3} \qquad \Delta p = 2\rho u_m^2 C_f\frac{L}{D} = 3180\ \text{Pa}`]
        ]],
        ['ex', 'Q9 — chimney draught', [
          ['t', R`Wind speed rises linearly from 0 at the ground to 10 m/s at 20 m. A chimney of diameter 0.1 m rises 10 m. (a) Why does smoke go up? (b) Why ignore hydrostatics? (c) Why does wind speed vary with height? (d) Pressure difference fireplace → top? (e) Mean air speed with major loss only? [15 Pa; 3.1 m/s]`],
          ['svg', 'tf_chimney', 'Still air in the room is at p₀; wind over the chimney top lowers the pressure there, driving the draught up the flue.'],
          ['ans'],
          ['t', R`(a) Still room air (stagnation pressure) vs lower pressure where wind moves over the chimney top. (b) The hydrostatic gradient inside is balanced by the one outside — net zero. (c) No slip at the ground creates an **atmospheric boundary layer**.`],
          ['m', R`\text{(d) } u_w = 5\ \text{m/s at 10 m} \Rightarrow \Delta p = \tfrac12\rho u_w^2 = 15\ \text{Pa}`],
          ['m', R`\text{(e) guess laminar: } u = \frac{\Delta p D^2}{32\mu L} = 27.5\ \text{m/s} \Rightarrow Re = 1.9\times10^5 \ \ \text{✗ not laminar}`],
          ['m', R`\text{turbulent: } u = \left(\frac{\Delta p\,D^{5/4}}{0.158\rho^{3/4}\mu^{1/4}L}\right)^{4/7} = 3.10\ \text{m/s},\quad Re = 2.2\times10^4\ \checkmark`],
          ['t', R`A real chimney also has **minor losses** (entry, exit) — Topic 7.`]
        ]],
        ['ex', 'Q10 — hydraulic diameters', [
          ['t', R`Show the hydraulic diameters of a square, rectangle, open channel, equilateral triangle and annulus.`],
          ['ans'],
          ['m', R`\text{square: } \frac{4l^2}{4l} = l \qquad \text{rectangle: } \frac{4lh}{2(l+h)} = \frac{2lh}{l+h} \qquad \text{channel: } \frac{4hw}{2h+w}`],
          ['m', R`\text{triangle: } \frac{4(\sqrt3/4)l^2}{3l} = \frac{l}{\sqrt3} \qquad \text{annulus: } \frac{4\cdot\tfrac{\pi}{4}(D_o+D_i)(D_o-D_i)}{\pi(D_o+D_i)} = D_o - D_i`]
        ]]
      ]
    }
  ]
}
