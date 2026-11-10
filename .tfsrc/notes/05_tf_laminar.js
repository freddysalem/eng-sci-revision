{
  key: 'tf_laminar', area: 'pipe', num: '5', week: 'Week 3',
  name: 'Laminar (Viscous) Flows',
  triggers: 'low Re · "show that the velocity profile is" · Poiseuille · Couette · film flowing down a wall/incline · free surface · moving belt/plate · annulus · dashpot · viscometer torque · slipper/journal bearing',
  sections: [
    {
      num: '', title: 'Revision Objectives — Laminar (Viscous) Flows',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Apply the **7-step recipe**: sketch → origin & control volume → force balance → constitutive relation → integrate → boundary conditions → $Q$, $u_m$, $u_{max}$, $C_f$.`,
          R`Derive the parabolic **Poiseuille** profile in a pipe and between plates, and show $C_f = 16/Re$ and $12/Re$.`,
          R`Use the right boundary condition: **no slip** at a wall, **zero gradient** at a free surface, **$u = V$** at a moving wall.`,
          R`Solve **film flow**, **Couette** flow and combined **Poiseuille + Couette** flow.`,
          R`Apply the method in cylindrical geometry: annulus, **spindle viscometer**.`,
          R`Explain **hydrodynamic lubrication** and quote the slipper-bearing thrust.`
        ]]
      ]
    },
    {
      num: '5.1', title: 'Why Viscous Flows Are "Nice"',
      blocks: [
        ['para', R`Viscously dominated (low $Re$) flows are **linear** and can be solved **exactly**: we can calculate the velocity profile, and from it the shear stress, flow rate and friction. The fluid mechanics is always the same — only the **geometry** and **boundary conditions** change. (For pipes, "low" means $Re < 2000$.)`],
        ['list', R`**Two classes of viscous flow:**`, false, [
          R`**Poiseuille flow** — driven by an external **pressure gradient** (pump, header tank, gravity). Named after J. M. Poiseuille (1797–1869), a physician studying blood flow.`,
          R`**Couette flow** — driven by a **moving boundary**. Named after M. F. A. Couette (1858–1943), a rheologist.`
        ]],
        ['list', R`**The recipe** (the same for every viscous problem):`, true, [
          R`Sketch the situation.`,
          R`Locate the origin and define a small control volume that **fits the geometry** (on the centreline if symmetric; on the wall if not).`,
          R`Momentum balance — for steady, fully developed flow this is just a **force balance**.`,
          R`Add the **constitutive relation** (Newtonian: $\tau = \mu\,du/dy$). Watch the sign.`,
          R`Integrate to get a general solution.`,
          R`Apply the **boundary conditions** — this is where the specific problem enters.`,
          R`Integrate the profile for $Q$; find $u_m$, $u_{max}$, $\tau_w$ and $C_f$.`
        ]],
        ['warn', 'Key Insight', [
          R`**Finding the velocity profile unlocks every other quantity.** Numbers usually only go in at the very end.`
        ]]
      ]
    },
    {
      num: '5.2', title: 'Poiseuille Flow in a Cylindrical Pipe',
      blocks: [
        ['para', R`Horizontal pipe, radius $R$; incompressible, steady, fully developed, Newtonian, low $Re$, 1-D. Axisymmetric, so put the origin on the centreline and use a cylindrical control volume of radius $r$, length $\delta x$.`],
        ['svg', 'tf_poiseuille_pipe', 'Cylindrical control volume of radius r on the centreline: the pressure difference on its ends balances the shear stress τ on its curved surface.'],
        ['deriv', 'Derivation — velocity profile', [
          ['m', R`p\pi r^2 - \left(p + \frac{dp}{dx}\delta x\right)\pi r^2 = \tau\,2\pi r\,\delta x \;\Rightarrow\; -\frac{dp}{dx} = \frac{2\tau}{r}`],
          ['t', R`Newtonian, with $u$ **decreasing** as $r$ increases, so $\tau = -\mu\,du/dr$:`],
          ['m', R`\frac{du}{dr} = -\frac{r}{2\mu}\left(-\frac{dp}{dx}\right) \;\Rightarrow\; u = -\frac{r^2}{4\mu}\left(-\frac{dp}{dx}\right) + C`],
          ['t', R`**Boundary condition:** no slip, $u = 0$ at $r = R$ ⇒ $C = \frac{R^2}{4\mu}\left(-\frac{dp}{dx}\right)$.`]
        ]],
        ['disp', [ R`\boxed{u = \frac{1}{4\mu}\left(-\frac{dp}{dx}\right)\left(R^2 - r^2\right)} \tag{5.1}` ]],
        ['deriv', 'Derivation — flow rate, velocities and friction', [
          ['m', R`Q = \int_0^R 2\pi r u\,dr = \frac{\pi}{2\mu}\left(-\frac{dp}{dx}\right)\left[\frac{R^2r^2}{2} - \frac{r^4}{4}\right]_0^R = \frac{\pi R^4}{8\mu}\left(-\frac{dp}{dx}\right)`],
          ['m', R`u_m = \frac{Q}{\pi R^2} = \frac{R^2}{8\mu}\left(-\frac{dp}{dx}\right) \qquad u_{max} = u(0) = \frac{R^2}{4\mu}\left(-\frac{dp}{dx}\right) = 2u_m`],
          ['m', R`\tau_w = \frac{R}{2}\left(-\frac{dp}{dx}\right) = \frac{R}{2}\cdot\frac{8\mu u_m}{R^2} = \frac{4\mu u_m}{R}`],
          ['m', R`C_f = \frac{\tau_w}{\tfrac12\rho u_m^2} = \frac{8\mu}{\rho u_m R} = \frac{16\mu}{\rho u_m D} = \frac{16}{Re}`]
        ]],
        ['eq', [
          ['Hagen–Poiseuille flow rate', R`Q = \frac{\pi R^4}{8\mu}\left(-\frac{dp}{dx}\right) = \frac{\pi D^4}{128\mu}\left(-\frac{dp}{dx}\right)`, '[m³/s]', 'Q ∝ R⁴ — halve the radius, 1/16 of the flow.'],
          ['Mean velocity (pipe)', R`u_m = \frac{R^2}{8\mu}\left(-\frac{dp}{dx}\right) = \frac{D^2}{32\mu}\left(-\frac{dp}{dx}\right)`, '[m/s]', ''],
          ['Maximum velocity (pipe)', R`u_{max} = 2u_m`, '[m/s]', 'On the centreline.'],
          ['Laminar pipe friction', R`C_f = \frac{16}{Re}`, '[–]', 'Exact.']
        ]],
        ['warn', 'Key Insight', [
          R`The negative sign on $dp/dx$ is physical: pressure must **fall** in the flow direction, so $-dp/dx > 0$ and $u > 0$.`,
          R`$u = u_m$ at $r = R/\sqrt2 = 0.707R$ — useful for placing a single probe.`
        ]]
      ]
    },
    {
      num: '5.3', title: 'Poiseuille Flow Between Parallel Plates',
      blocks: [
        ['para', R`Two stationary plates a distance $H$ apart, no edge effects, so work **per unit width** in Cartesian coordinates. A general control volume $\delta x \times \delta y$ gives $dp/dx = d\tau/dy$; with $\tau = \mu\,du/dy$ and origin on the lower wall:`],
        ['svg', 'tf_plates', 'Small control volume between plates (origin on the lower wall): pressure on its ends, shear τ and τ + (dτ/dy)δy on its faces.'],
        ['deriv', 'Derivation — integrate and apply no slip at both walls', [
          ['m', R`\frac{dp}{dx} = \mu\frac{d^2u}{dy^2} \;\Rightarrow\; \frac{y^2}{2}\frac{dp}{dx} = \mu u + Ay + B`],
          ['m', R`y = 0,\ u = 0 \Rightarrow B = 0 \qquad y = H,\ u = 0 \Rightarrow A = \frac{H}{2}\frac{dp}{dx}`]
        ]],
        ['disp', [ R`\boxed{u = \frac{1}{2\mu}\left(-\frac{dp}{dx}\right)\left(Hy - y^2\right)} \tag{5.2}` ]],
        ['eq', [
          ['Flow rate per unit width (plates)', R`Q = \frac{H^3}{12\mu}\left(-\frac{dp}{dx}\right)`, '[m²/s]', 'Also the narrow-rectangle duct away from its ends.'],
          ['Mean velocity (plates)', R`u_m = \frac{H^2}{12\mu}\left(-\frac{dp}{dx}\right)`, '[m/s]', ''],
          ['Maximum velocity (plates)', R`u_{max} = \frac{H^2}{8\mu}\left(-\frac{dp}{dx}\right) = 1.5\,u_m`, '[m/s]', 'Mid-gap, y = H/2.'],
          ['Wall stress (plates)', R`\tau_w = \frac{H}{2}\left(-\frac{dp}{dx}\right) = \frac{6\mu u_m}{H}`, '[Pa]', ''],
          ['Laminar friction (plates)', R`C_f = \frac{12\mu}{\rho u_m H} = \frac{12}{Re_H}`, '[–]', 'Re based on the gap H.']
        ]],
        ['warn', 'Key Insight', [
          R`**Same form, different constant**: pipe $16/Re$, plates $12/Re$, film $6/Re$. For every viscously dominated flow $C_f \propto 1/Re$ — only the geometry changes the number.`
        ]],
        ['warn', 'Note', [
          R`$12/Re$ uses the **gap** $H$. On the hydraulic diameter $D_H = 2H$ it becomes $24/Re_{D_H}$ — check which length a question uses.`
        ]]
      ]
    },
    {
      num: '5.4', title: 'Film Flow and Free Surfaces',
      blocks: [
        ['para', R`A liquid film of uniform depth $H$ runs down a wall. There is no pump — **gravity** drives it, so the pressure gradient is hydrostatic. The outer surface is **free**: if surface tension is neglected and the air is still, the surface can't transmit a force, so there is **no velocity gradient** there.`],
        ['warn', 'Important', [
          R`**Free-surface boundary condition:** $\left.\dfrac{du}{dy}\right|_{surface} = 0$. The flow is no longer symmetric, so put the origin **on the wall**.`
        ]],
        ['svg', 'tf_film', 'Gravity drives a film down a vertical wall: no slip at the wall, zero velocity gradient at the free surface, fastest flow at the surface.'],
        ['deriv', 'Derivation — vertical film', [
          ['t', R`Force balance per unit width: $d\tau/dx = dp/dz$ with $dp/dz = -\rho g$ and $\tau = \mu\,du/dx$:`],
          ['m', R`\frac{d^2u}{dx^2} = -\frac{\rho g}{\mu} \;\Rightarrow\; u = -\frac{\rho g}{\mu}\frac{x^2}{2} + C_1x + C_2`],
          ['m', R`x = 0,\ u = 0 \Rightarrow C_2 = 0 \qquad x = H,\ \frac{du}{dx} = 0 \Rightarrow C_1 = \frac{\rho g H}{\mu}`]
        ]],
        ['disp', [ R`\boxed{u = \frac{\rho g}{\mu}\left(Hx - \frac{x^2}{2}\right)} \qquad \text{inclined at } \alpha:\ g \to g\sin\alpha \tag{5.3}` ]],
        ['eq', [
          ['Film flow rate per unit width', R`Q = \frac{\rho g H^3}{3\mu}`, '[m²/s]', 'On an incline multiply by sin α.'],
          ['Film mean velocity', R`u_m = \frac{\rho g H^2}{3\mu}`, '[m/s]', ''],
          ['Film maximum velocity', R`u_{max} = \frac{\rho g H^2}{2\mu} = 1.5\,u_m`, '[m/s]', 'At the free surface.'],
          ['Film wall stress', R`\tau_w = \rho g H`, '[Pa]', 'The whole weight of the film per unit area.'],
          ['Film friction', R`C_f = \frac{6}{Re}`, '[–]', 'Re based on H.'],
          ['Pressure-driven, free surface', R`Q = \frac{H^3}{3\mu}\left(-\frac{dp}{dx}\right),\quad u_m = \frac{H^2}{3\mu}\left(-\frac{dp}{dx}\right)`, '[–]', 'Lecture "Problem 2": four times the two-wall flow rate.']
        ]]
      ]
    },
    {
      num: '5.5', title: 'Couette Flow and Combined Flow',
      blocks: [
        ['para', R`No pressure gradient; the upper plate moves at $V$ and drags the fluid by viscosity. The force balance on a control volume gives $\tau = $ const $= \tau_w$, so the profile is a **straight line**.`],
        ['svg', 'tf_couette', 'Couette flow: the moving upper plate drags the fluid; with no pressure gradient the shear stress is uniform and the profile is a straight line.'],
        ['deriv', 'Derivation — simple Couette flow', [
          ['m', R`\frac{y^2}{2}\frac{dp}{dx} = \mu u + Ay + B,\quad \frac{dp}{dx} = 0`],
          ['m', R`y = 0,\ u = 0 \Rightarrow B = 0 \qquad y = H,\ u = V \Rightarrow A = -\frac{\mu V}{H}`]
        ]],
        ['eq', [
          ['Couette profile', R`u = \frac{Vy}{H}`, '[m/s]', 'Linear.'],
          ['Couette flow rate', R`Q = \frac{VH}{2},\quad u_m = \frac{V}{2},\quad u_{max} = V`, '[–]', 'Per unit width.'],
          ['Couette wall stress', R`\tau_w = \frac{\mu V}{H}`, '[Pa]', 'Same everywhere across the gap.']
        ]],
        ['para', R`**Combined Poiseuille + Couette** (pressure gradient *and* moving upper wall at $V$): same general solution, boundary conditions $u = 0$ at $y = 0$ and $u = V$ at $y = H$:`],
        ['disp', [ R`\boxed{u = \frac{1}{2\mu}\left(-\frac{dp}{dx}\right)\left(Hy - y^2\right) + \frac{Vy}{H} \qquad Q = \frac{H^3}{12\mu}\left(-\frac{dp}{dx}\right) + \frac{VH}{2}} \tag{5.4}` ]],
        ['svg', 'tf_couette_poiseuille', 'Viscous flow is linear, so solutions add: Poiseuille (pressure-driven parabola) + Couette (moving-wall line) = the combined profile.'],
        ['warn', 'Key Insight', [
          R`Because viscous flow is **linear**, solutions **add**: the combined flow rate is just Poiseuille + Couette. This is the basis of lubrication.`
        ]]
      ]
    },
    {
      num: '5.6', title: 'Application: the Spindle Viscometer',
      blocks: [
        ['para', R`**Rheometry** studies viscosity and shear behaviour — many important fluids are non-Newtonian. Viscometers include capillary, falling-sphere, piston (Redwood), cup-and-spindle (Brookfield) and spindle types; choose by sensitivity, viscosity range and non-Newtonian effects (many need empirical correction factors).`],
        ['para', R`A **spindle viscometer** is a Couette flow in cylindrical geometry: an inner cylinder (radius $a$) rotates at $\Omega$ inside a fixed container (radius $b$), gap $c \ll D$, liquid depth $h$. The machine measures the torque $T$.`],
        ['svg', 'tf_viscometer', 'Spindle viscometer: section (left) and top view (right). The spindle (radius a) turns at Ω inside the fixed cup (radius b); the torque gives μ.'],
        ['deriv', 'Derivation — torque on the spindle', [
          ['t', R`Torque on a thin ring is $T(r) = \tau\,h r^2\delta\theta$. In equilibrium the torque is the same at $r$ and $r + \delta r$:`],
          ['m', R`\frac{\delta\tau}{\tau} = -\frac{2\,\delta r}{r} \;\Rightarrow\; \tau = \frac{A}{r^2}`],
          ['t', R`Newtonian in cylindrical geometry: $\tau = \mu r\,d\omega/dr$. Integrate: $\mu\omega = -A/2r^2 + B$. Boundary conditions $\omega = \Omega$ at $r = a$, $\omega = 0$ at $r = b$:`],
          ['m', R`A = \frac{2a^2b^2}{b^2 - a^2}\mu\Omega \;\Rightarrow\; T = \tau_a\cdot2\pi a h\cdot a = \frac{4\pi h a^2b^2}{b^2 - a^2}\mu\Omega`],
          ['t', R`With clearance $c = b - a$ small and mean diameter $D = a + b$, $a^2b^2 \approx (D/2)^4$ and $b^2 - a^2 = cD$:`]
        ]],
        ['disp', [ R`\boxed{T = \frac{\pi}{4}\frac{hD^3}{c}\mu\Omega \;\Rightarrow\; \mu = \frac{4c}{\pi h D^3}\,\frac{T}{\Omega}} \tag{5.5}` ]],
        ['warn', 'Note', [
          R`The slide writes $c = a - b$ and $D = (a+b)/2$. With $b$ the outer radius the clearance is $b - a$, and the final formula needs $D = a + b$ (the mean **diameter**; $(a+b)/2$ is the mean radius).`
        ]],
        ['list', R`**Instrumentation worries:**`, false, [
          R`Measuring what you think you're measuring (end effects, turbulence).`,
          R`Accuracy, repeatability, environmental effects (temperature!), sampling error.`
        ]]
      ]
    },
    {
      num: '5.7', title: 'Application: Hydrodynamic Lubrication',
      blocks: [
        ['para', R`**Tribology** is the study of wear and lubrication. **Hydrodynamic lubrication** uses a flowing viscous liquid to keep two rubbing surfaces apart: dragging the liquid through a **tapering channel** (Couette + Poiseuille) builds up pressure, which pushes the parts apart.`],
        ['para', R`**Slipper (Michell) bearing:** gap $h = (a - x)\delta$ tapers over length $l$. If the slope is very small, at each $x$ the flow is locally the parallel-plate solution (5.4), and inertia from the narrowing is negligible:`],
        ['svg', 'tf_slipper', 'The moving plate drags lubricant into the converging wedge, building pressure that holds the slipper up.'],
        ['eq', [
          ['Local pressure gradient', R`\frac{dp}{dx} = 12\mu\left(\frac{V}{2h^2} - \frac{Q}{h^3}\right),\quad h = (a-x)\delta`, '[Pa/m]', 'From (5.4) rearranged for dp/dx.'],
          ['Flow rate through the slipper', R`Q = \frac{\delta V a(a-l)}{2a - l}`, '[m²/s]', 'From p = p_a at both ends.'],
          ['Slipper thrust per unit width', R`T = \frac{6\mu V}{\delta^2}\left[\ln\!\left(\frac{a}{a-l}\right) - \frac{2l}{2a-l}\right]`, '[N/m]', 'Zero with no taper (a → ∞) or no motion (V = 0).'],
          ['Journal bearing: force ∥ OC', R`-\frac{\epsilon^3}{c^2(1-\epsilon^2)^2}\mu\Omega R L^3`, '[N]', 'ε = e/c, eccentricity ratio.'],
          ['Journal bearing: force ⊥ OC', R`\frac{\pi\epsilon}{4c^2(1-\epsilon^2)^{3/2}}\mu\Omega R L^3`, '[N]', ''],
          ['Journal bearing oil flow', R`Q = \Omega R\epsilon c`, '[m²/s]', 'Per unit length.']
        ]],
        ['svg', 'tf_journal', 'Journal bearing: the shaft (centre C) runs eccentrically in the bush (centre O); the converging oil film generates the load-carrying pressure.'],
        ['warn', 'Key Insight', [
          R`Large transverse forces come from forcing a viscous liquid through a **tapered slot** — no taper, no load capacity.`
        ]]
      ]
    },
    {
      num: 'Ex 5', title: 'Problem Sheet — Hydraulics of Viscous Flows', wk: true,
      blocks: [
        ['ex', 'Q1 — narrow rectangular duct', [
          ['t', R`Justify $Q = \frac{h^3}{12\mu}\left(-\frac{dp}{dx}\right)$ per unit width for a duct whose section is a very narrow rectangle of depth $h$.`],
          ['svg', 'tf_plates', 'A very narrow rectangle behaves like two infinite parallel plates a distance h apart, away from its short ends.'],
          ['ans'],
          ['t', R`Away from the short end walls their effect is small, so the flow is effectively between **infinite parallel plates** a distance $h$ apart — the derivation of §5.3. The error from the ends grows as the aspect ratio falls.`]
        ]],
        ['ex', 'Q2 — annulus between concentric tubes', [
          ['t', R`Show that for laminar flow between radii $r_1$ and $r_2$: $\tau = \left(-\frac{dp}{dx}\right)\left(\frac{r}{2} + \frac{r_2^2 - r_1^2}{4r\ln(r_1/r_2)}\right)$.`],
          ['svg', 'tf_annulus', 'Ring control volume in the annulus: shear acts on both its inner and outer curved faces.'],
          ['ans'],
          ['t', R`Use a **ring** control volume (radius $r$, thickness $\delta r$). Pressure force $-\frac{dp}{dx}\delta x\,2\pi r\,\delta r$; shear acts on **both** inner and outer surfaces:`],
          ['m', R`2\pi(r+\delta r)\delta x\left(\tau + \frac{d\tau}{dr}\delta r\right) - 2\pi r\tau\,\delta x \approx 2\pi\,\delta r\,\delta x\left(r\frac{d\tau}{dr} + \tau\right)`],
          ['m', R`-\frac{dp}{dx} = \frac{1}{r}\frac{d}{dr}(r\tau) \;\Rightarrow\; r\tau = \frac{r^2}{2}\left(-\frac{dp}{dx}\right) + C \;\Rightarrow\; \mu u = \frac{r^2}{4}\frac{dp}{dx} + C\ln r + D`],
          ['m', R`u(r_1) = u(r_2) = 0 \Rightarrow C = \frac{r_2^2 - r_1^2}{4\ln(r_1/r_2)}\left(-\frac{dp}{dx}\right) \Rightarrow \tau = \left(-\frac{dp}{dx}\right)\left(\frac{r}{2} + \frac{r_2^2 - r_1^2}{4r\ln(r_1/r_2)}\right)`],
          ['t', R`The $\ln r$ term is the new feature of annular flows — it is what lets $u$ vanish on two walls.`]
        ]],
        ['ex', 'Q3 — dashpot with a square piston', [
          ['t', R`A square piston (side $D$, length $L$) moves at $U_p$ towards the closed end of a square bore; gap $h$. Show (a) $u = \frac{1}{2\mu}\frac{\Delta p}{L}(hy - y^2) - U_p\frac{y}{h}$; (b) $Q = 4D\left[\frac{\Delta p}{L}\frac{h^3}{12\mu} - \frac{U_ph}{2}\right]$; (c) $\Delta p = \frac{12L\mu U_p}{h^3}\left(\frac{h}{2} + \frac{D}{4}\right)$; (d) $F = 12\mu LU_p\left[\frac43\frac{D}{h} + \left(\frac{D}{h}\right)^2 + \frac14\left(\frac{D}{h}\right)^3\right]$.`],
          ['svg', 'tf_dashpot', 'The piston imposes the flow: the liquid it displaces must escape backwards through the gap h around it.'],
          ['ans'],
          ['t', R`**Key physics:** the piston **imposes** the flow rate — the fluid it displaces ($Q = D^2U_p$) must escape back through the gap, and that sets $\Delta p$. Combined Poiseuille (driven by $\Delta p$) + Couette (wall moving at $-U_p$).`],
          ['t', R`(a) Origin on the bore wall; BCs $u(0) = 0$, $u(h) = -U_p$. (b) Ignore corner effects: four sides of width $D$, $Q = 4D\int_0^h u\,dy$.`],
          ['m', R`\text{(c) } 4D\left[\frac{\Delta p}{L}\frac{h^3}{12\mu} - \frac{U_ph}{2}\right] = D^2U_p \Rightarrow \Delta p = \frac{12\mu LU_p}{h^3}\left(\frac{D}{4} + \frac{h}{2}\right)`],
          ['m', R`\text{(d) } F = \underbrace{\Delta p\,D^2}_{\text{end pressure}} + \underbrace{4DL\,\tau_w}_{\text{side shear}},\qquad \tau_w = \frac{\Delta p}{L}\frac{h}{2} + \frac{\mu U_p}{h}`],
          ['m', R`F = (D^2 + 2Dh)\Delta p + \frac{4\mu DLU_p}{h} = 12\mu LU_p\left[\frac43\frac{D}{h} + \left(\frac{D}{h}\right)^2 + \frac14\left(\frac{D}{h}\right)^3\right]`],
          ['t', R`Assumptions: laminar, Newtonian, incompressible, steady, $h \ll D$, corner effects negligible. (The printed solution drops the $\mu$ in the shear term; the final answer includes it.)`]
        ]],
        ['ex', 'Q4 — water film on a vertical wall', [
          ['t', R`1200 kg/h of water runs down a vertical plane 1 m wide. Find the film thickness, mean and maximum velocity. [$4.7\times10^{-4}$ m; 0.71 m/s; 1.07 m/s]`],
          ['svg', 'tf_film', 'Film of thickness h on a vertical wall: mean velocity from momentum, then thickness from the mass flow.'],
          ['ans'],
          ['m', R`\dot m = 0.333\ \text{kg/s},\quad u_m = \frac{\rho g h^2}{3\mu} = \frac{\dot m}{\rho h L} \;\Rightarrow\; h^3 = \frac{3\mu\dot m}{\rho^2 g L} \Rightarrow h = 4.7\times10^{-4}\ \text{m}`],
          ['m', R`u_m = \frac{0.333}{1000\times4.7\times10^{-4}\times1} = 0.71\ \text{m/s} \qquad u_{max} = 1.5u_m = 1.07\ \text{m/s}`]
        ]],
        ['ex', 'Q5 — film down an incline', [
          ['t', R`Show that a film of depth $H$ on a plane at $\alpha$ has $u = \frac{\rho g}{\mu}\sin\alpha\left(Hy - \frac{y^2}{2}\right)$ and $Q = \frac{H^3}{3\mu}\rho g\sin\alpha$.`],
          ['svg', 'tf_film_incline', 'On an incline only the component of gravity along the slope, ρg sin α, drives the film.'],
          ['ans'],
          ['t', R`Same as the pressure-driven free-surface flow: BCs $u(0) = 0$, $du/dy|_H = 0$ give $u = \frac{1}{\mu}\left(-\frac{dp}{dx}\right)\left(Hy - \frac{y^2}{2}\right)$. Gravity supplies the driving gradient, the component **along** the slope: $\rho g\sin\alpha$. Integrate for $Q$.`]
        ]],
        ['ex', 'Q6 — mercury channel with a moving belt', [
          ['t', R`Mercury ($\nu = 10^{-7}$ m²/s) flows under gravity down a wide channel, $h = 1$ mm, $L = 10$ m, drop $z = 0.5$ m, both ends open to atmosphere. What belt speed $U_0$ on the upper wall doubles the flow rate? [0.82 m/s]`],
          ['svg', 'tf_mercury_belt', 'Gravity drives a Poiseuille flow down the channel; the moving belt adds a Couette flow.'],
          ['ans'],
          ['m', R`Q = \frac{h^3}{12\mu}\left(-\frac{\Delta p}{L}\right) + \frac{U_0h}{2} = 2\cdot\frac{h^3}{12\mu}\left(-\frac{\Delta p}{L}\right) \;\Rightarrow\; U_0 = \frac{h^2}{6\mu}\left(-\frac{\Delta p}{L}\right)`],
          ['m', R`-\Delta p = \rho g z \;\Rightarrow\; U_0 = \frac{g z h^2}{6\nu L} = \frac{9.81\times0.5\times10^{-6}}{6\times10^{-7}\times10} = 0.82\ \text{m/s}`]
        ]]
      ]
    }
  ]
}
