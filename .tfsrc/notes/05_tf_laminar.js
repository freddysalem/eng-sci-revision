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
          R`Solve **film flow** (gravity as the driving force), **Couette** flow and combined **Poiseuille + Couette** flow.`,
          R`Apply the method in cylindrical geometry: annulus, **spindle viscometer**.`,
          R`Explain **hydrodynamic lubrication**, outline how the slipper-bearing pressure and thrust follow from Poiseuille + Couette flow, and quote the journal-bearing results.`
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
        ['para', R`Two stationary plates a distance $H$ apart, no edge effects, so work **per unit width** in Cartesian coordinates with the origin on the lower wall. Take a small control volume $\delta x \times \delta y$. Pressure acts on its two ends; on its top face the (faster) fluid above drags it **forward** with stress $\tau + \frac{d\tau}{dy}\delta y$, and on its bottom face the (slower) fluid below holds it **back** with stress $\tau$. Newtonian: $\tau = \mu\,du/dy$.`],
        ['svg', 'tf_plates', 'Small control volume between plates (origin on the lower wall): pressure on its ends, shear τ and τ + (dτ/dy)δy on its faces.'],
        ['deriv', 'Derivation — force balance, integrate and apply no slip at both walls', [
          ['t', R`Forces in the flow direction (per unit width), steady and fully developed so they sum to zero:`],
          ['m', R`p\,\delta y - \left(p + \frac{dp}{dx}\delta x\right)\delta y + \left(\tau + \frac{d\tau}{dy}\delta y\right)\delta x - \tau\,\delta x = 0 \;\Rightarrow\; \frac{dp}{dx} = \frac{d\tau}{dy}`],
          ['t', R`With $\tau = \mu\,du/dy$, integrate twice ($dp/dx$ is a constant):`],
          ['m', R`\frac{dp}{dx} = \mu\frac{d^2u}{dy^2} \;\Rightarrow\; \frac{y^2}{2}\frac{dp}{dx} = \mu u + Ay + B`],
          ['m', R`y = 0,\ u = 0 \Rightarrow B = 0 \qquad y = H,\ u = 0 \Rightarrow A = \frac{H}{2}\frac{dp}{dx}`]
        ]],
        ['disp', [ R`\boxed{u = \frac{1}{2\mu}\left(-\frac{dp}{dx}\right)\left(Hy - y^2\right)} \tag{5.2}` ]],
        ['deriv', 'Derivation — flow rate, velocities and friction (plates)', [
          ['m', R`Q = \int_0^H u\,dy = \frac{1}{2\mu}\left(-\frac{dp}{dx}\right)\left[\frac{Hy^2}{2} - \frac{y^3}{3}\right]_0^H = \frac{H^3}{12\mu}\left(-\frac{dp}{dx}\right)`],
          ['m', R`u_m = \frac{Q}{H} = \frac{H^2}{12\mu}\left(-\frac{dp}{dx}\right) \qquad u_{max} = u\!\left(\tfrac H2\right) = \frac{H^2}{8\mu}\left(-\frac{dp}{dx}\right) = 1.5\,u_m`],
          ['m', R`\tau_w = \mu\left.\frac{du}{dy}\right|_0 = \frac{H}{2}\left(-\frac{dp}{dx}\right) = \frac{6\mu u_m}{H} \qquad C_f = \frac{\tau_w}{\tfrac12\rho u_m^2} = \frac{12\mu}{\rho u_m H} = \frac{12}{Re_H}`]
        ]],
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
        ['para', R`A **free surface** is a boundary between the liquid and still air. If surface tension is neglected and the air is at rest, the air exerts no shear stress on the liquid, so the liquid's velocity gradient there must be zero.`],
        ['warn', 'Important', [
          R`**Free-surface boundary condition:** $\left.\dfrac{du}{dy}\right|_{surface} = 0$ (no shear stress at the surface). The flow is no longer symmetric, so put the origin **on the wall**.`
        ]],
        ['deriv', 'Pressure-driven flow with a free surface (lecture "Problem 2")', [
          ['t', R`Same set-up and general solution as §5.3 (stationary lower wall at $y = 0$, driving gradient $-dp/dx$), but the upper boundary at $y = H$ is now a free surface:`],
          ['m', R`\frac{y^2}{2}\frac{dp}{dx} = \mu u + Ay + B,\qquad y = 0,\ u = 0 \Rightarrow B = 0,\qquad y = H,\ \frac{du}{dy} = 0 \Rightarrow A = H\frac{dp}{dx}`],
          ['t', R`(c.f. $A = \frac H2\frac{dp}{dx}$ for two walls.) So, per unit width,`],
          ['m', R`u = \frac{1}{\mu}\left(-\frac{dp}{dx}\right)\left(Hy - \frac{y^2}{2}\right),\qquad Q = \int_0^H u\,dy = \frac{H^3}{3\mu}\left(-\frac{dp}{dx}\right),\qquad u_m = \frac{H^2}{3\mu}\left(-\frac{dp}{dx}\right)`],
          ['t', R`This is **four times** the two-wall flow rate $H^3/12\mu$ — removing the drag of the upper wall makes a big difference.`]
        ]],
        ['para', R`**Film down a vertical wall.** A liquid film of uniform depth $H$ runs down a vertical wall. Coordinates (as in the course figure): $x$ **across** the film, measured from the wall; $z$ **down** the wall, the flow direction. Uniform depth means (by continuity) the profile does not change with $z$. There is no pump: the air outside is still and at uniform atmospheric pressure, and the film is thin and straight, so **$p = p_{atm}$ throughout the film — there is no pressure gradient.** The flow is driven by the **weight** of the liquid (a body force), and the weight is held up by viscous shear from the wall.`],
        ['svg', 'tf_film_r1', 'Film on a vertical wall: x across the film from the wall, z down the wall. For the element δx × δz, its weight ρg δx δz is balanced by the difference between the shear stresses on its two faces. No slip at the wall; zero velocity gradient at the free surface.'],
        ['deriv', 'Derivation — vertical film (force balance on δx × δz, per unit width)', [
          ['t', R`$\tau = \mu\,du/dx$ is the shear stress on the element's outer face ($x + \delta x$): the faster fluid outside drags it **down** ($+z$). On its inner face ($x$) the slower fluid nearer the wall holds it **back** with $\tau$. The pressure is $p_{atm}$ on both ends, so it contributes nothing. Sum of the forces in $+z$ (down):`],
          ['m', R`\underbrace{\rho g\,\delta x\,\delta z}_{\text{weight}} + \underbrace{\left(\tau + \frac{d\tau}{dx}\delta x\right)\delta z - \tau\,\delta z}_{\text{net shear}} = 0 \;\Rightarrow\; \frac{d\tau}{dx} = -\rho g`],
          ['t', R`With $\tau = \mu\,du/dx$ ($u$ increases with $x$), integrate twice:`],
          ['m', R`\frac{d^2u}{dx^2} = -\frac{\rho g}{\mu} \;\Rightarrow\; \frac{du}{dx} = -\frac{\rho g}{\mu}x + C_1 \;\Rightarrow\; u = -\frac{\rho g}{\mu}\frac{x^2}{2} + C_1x + C_2`],
          ['m', R`x = 0,\ u = 0 \Rightarrow C_2 = 0 \qquad x = H,\ \frac{du}{dx} = 0 \Rightarrow C_1 = \frac{\rho g H}{\mu}`],
          ['t', R`So $\tau = \mu\,du/dx = \rho g(H - x)$: zero at the free surface and largest, $\rho gH$, at the wall.`]
        ]],
        ['disp', [ R`\boxed{u = \frac{\rho g}{\mu}\left(Hx - \frac{x^2}{2}\right)} \qquad \text{inclined at } \alpha:\ g \to g\sin\alpha \tag{5.3}` ]],
        ['warn', 'Key Insight', [
          R`Compare (5.3) with the pressure-driven free-surface profile above: they are identical with $\left(-\dfrac{dp}{dx}\right) \to \rho g$. **Gravity plays the role of the driving pressure gradient** — an effective gradient $\rho g$ for a vertical film, $\rho g\sin\alpha$ along an incline.`
        ]],
        ['warn', 'Note', [
          R`**Course wording.** The notes say gravity sets "the hydrostatic pressure gradient $dp/dz = \rho g$" and then use $dp/dz = -\rho g$. With $z$ pointing down, a hydrostatic gradient would be $+\rho g$, and in the film the pressure is in fact uniform ($p_{atm}$). What is meant is the **effective** driving gradient $(-dp/dz)_{eff} = \rho g$ supplied by the weight, as derived above. The result (5.3) is unchanged.`
        ]],
        ['deriv', 'Derivation — flow rate, velocities and friction (film)', [
          ['m', R`Q = \int_0^H u\,dx = \frac{\rho g}{\mu}\left[\frac{Hx^2}{2} - \frac{x^3}{6}\right]_0^H = \frac{\rho g H^3}{3\mu}`],
          ['m', R`u_m = \frac{Q}{1\cdot H} = \frac{\rho g H^2}{3\mu}`],
          ['m', R`u_{max} = u(H) = \frac{\rho g H^2}{2\mu} = 1.5\,u_m \quad \text{(at the free surface)}`],
          ['m', R`\tau_w = \mu\left.\frac{du}{dx}\right|_{x=0} = \rho g H = \frac{3\mu u_m}{H} \quad\left(\text{using } \rho g = \frac{3\mu u_m}{H^2}\right)`],
          ['m', R`C_f = \frac{\tau_w}{\tfrac12\rho u_m^2} = \frac{6\mu}{\rho u_m H} = \frac{6}{Re_H}`],
          ['t', R`**Incline at $\alpha$:** only the component of gravity **along** the plane, $g\sin\alpha$, drives the flow; the normal component $g\cos\alpha$ is carried by a hydrostatic pressure variation across the film, which is the same at every station along the plane and so drives nothing. Replace $g$ by $g\sin\alpha$ throughout (Q5).`]
        ]],
        ['eq', [
          ['Film flow rate per unit width', R`Q = \frac{\rho g H^3}{3\mu}`, '[m²/s]', 'On an incline multiply by sin α.'],
          ['Film mean velocity', R`u_m = \frac{\rho g H^2}{3\mu}`, '[m/s]', ''],
          ['Film maximum velocity', R`u_{max} = \frac{\rho g H^2}{2\mu} = 1.5\,u_m`, '[m/s]', 'At the free surface.'],
          ['Film wall stress', R`\tau_w = \rho g H`, '[Pa]', 'The whole weight of the film per unit area.'],
          ['Film friction', R`C_f = \frac{6}{Re}`, '[–]', 'Re based on H.'],
          ['Pressure-driven, free surface: flow rate', R`Q = \frac{H^3}{3\mu}\left(-\frac{dp}{dx}\right)`, '[m²/s]', 'Lecture "Problem 2": four times the two-wall flow rate.'],
          ['Pressure-driven, free surface: mean velocity', R`u_m = \frac{H^2}{3\mu}\left(-\frac{dp}{dx}\right)`, '[m/s]', '']
        ]]
      ]
    },
    {
      num: '5.5', title: 'Couette Flow and Combined Flow',
      blocks: [
        ['para', R`No pressure gradient; the upper plate moves at $V$ and drags the fluid by viscosity. The force balance of §5.3 with $dp/dx = 0$ gives $d\tau/dy = 0$, so $\tau = $ const $= \tau_w$ and the profile is a **straight line**.`],
        ['svg', 'tf_couette', 'Couette flow: the moving upper plate drags the fluid; with no pressure gradient the shear stress is uniform and the profile is a straight line.'],
        ['deriv', 'Derivation — simple Couette flow', [
          ['m', R`\frac{y^2}{2}\frac{dp}{dx} = \mu u + Ay + B,\quad \frac{dp}{dx} = 0 \;\Rightarrow\; \mu u = -Ay - B`],
          ['m', R`y = 0,\ u = 0 \Rightarrow B = 0 \qquad y = H,\ u = V \Rightarrow A = -\frac{\mu V}{H} \;\Rightarrow\; u = \frac{Vy}{H},\quad \tau = \mu\frac{du}{dy} = \frac{\mu V}{H}`]
        ]],
        ['eq', [
          ['Couette profile', R`u = \frac{Vy}{H}`, '[m/s]', 'Linear.'],
          ['Couette flow rate', R`Q = \frac{VH}{2}`, '[m²/s]', 'Per unit width.'],
          ['Couette mean and maximum velocity', R`u_m = \frac{V}{2},\quad u_{max} = V`, '[m/s]', ''],
          ['Couette wall stress', R`\tau_w = \frac{\mu V}{H}`, '[Pa]', 'Same everywhere across the gap.']
        ]],
        ['para', R`**Combined Poiseuille + Couette** (pressure gradient **and** moving upper wall at $V$): same general solution, boundary conditions $u = 0$ at $y = 0$ and $u = V$ at $y = H$:`],
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
        ['para', R`A **spindle viscometer** is a Couette flow in cylindrical geometry: an inner cylinder (radius $a$) rotates at $\Omega$ inside a fixed container (radius $b$), gap $c = b - a \ll D$, liquid depth $h$. The machine measures the torque $T$ needed to keep the spindle turning. Assumptions: no turbulence, steady state, no end forces (the pressure is the same on both ends).`],
        ['svg', 'tf_viscometer_r1', 'Spindle viscometer: section (left) and top view (right). The spindle (radius a) turns at Ω inside the fixed cup (radius b), clearance c = b − a; the measured torque gives μ.'],
        ['deriv', 'Derivation — torque on the spindle', [
          ['t', R`Take a thin ring of liquid (radius $r$, thickness $\delta r$, angle $\delta\theta$, depth $h$). The shear stress $\tau$ on its inner face acts on area $h r\,\delta\theta$ at lever arm $r$, so the torque there is $T(r) = \tau\,h r^2\delta\theta$. The flow is **steady** (no angular acceleration) and the end forces cancel, so the torques on the inner and outer faces must balance, $T(r + \delta r) = T(r)$:`],
          ['m', R`(\tau + \delta\tau)\,h(r + \delta r)^2\delta\theta - \tau\,h r^2\delta\theta = 0 \;\Rightarrow\; \frac{\delta\tau}{\tau} = -\frac{2\,\delta r}{r} \;\Rightarrow\; \tau = \frac{A}{r^2}`],
          ['t', R`Newtonian in cylindrical geometry: $\tau = \mu r\,d\omega/dr$, where $\omega(r)$ is the angular velocity of the liquid. Integrate: $\mu\omega = -A/2r^2 + B$. Boundary conditions:`],
          ['m', R`r = b,\ \omega = 0 \;\Rightarrow\; B = \frac{A}{2b^2}`],
          ['m', R`r = a,\ \omega = \Omega:\quad \mu\Omega = \frac{A}{2}\left(\frac{1}{b^2} - \frac{1}{a^2}\right)`],
          ['m', R`\Rightarrow\; A = \frac{2a^2b^2}{a^2 - b^2}\mu\Omega = -\frac{2a^2b^2}{b^2 - a^2}\mu\Omega`],
          ['t', R`$A < 0$ because $\omega$ **falls** from $\Omega$ at the spindle to $0$ at the cup ($d\omega/dr < 0$): the liquid drags back on the spindle. The torque the motor must supply — the measured $T$ — is the magnitude:`],
          ['m', R`T = |\tau_a|\cdot2\pi a h\cdot a = \frac{|A|}{a^2}\,2\pi a^2 h = \frac{4\pi h a^2b^2}{b^2 - a^2}\mu\Omega`],
          ['t', R`With clearance $c = b - a$ small and mean diameter $D = a + b$: $b^2 - a^2 = (b - a)(b + a) = cD$ exactly, and $ab = (D/2)^2 - c^2/4 \approx (D/2)^2$, so $a^2b^2 \approx (D/2)^4$:`],
          ['m', R`T \approx \frac{4\pi h (D/2)^4}{cD}\mu\Omega = \frac{\pi}{4}\frac{hD^3}{c}\mu\Omega`]
        ]],
        ['disp', [ R`\boxed{T = \frac{\pi}{4}\frac{hD^3}{c}\mu\Omega \;\Rightarrow\; \mu = \frac{4c}{\pi h D^3}\,\frac{T}{\Omega}} \tag{5.5}` ]],
        ['warn', 'Note', [
          R`The slide gives $A = \frac{2a^2b^2}{a^2 - b^2}\mu\Omega$ and $T = \frac{4\pi ha^2b^2}{a^2 - b^2}\mu\Omega$ — both negative with $b > a$ (the liquid's torque **on** the spindle opposes its rotation). The measured torque is the magnitude, with $b^2 - a^2$ in the denominator, as above.`,
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
        ['para', R`**Tribology** is the study of wear and lubrication. **Hydrodynamic lubrication** uses a flowing viscous liquid to keep two rubbing surfaces apart: dragging the liquid through a **tapering channel** (Couette + Poiseuille) builds up pressure, which pushes the parts apart. Usual assumptions: incompressible, steady, fully developed.`],
        ['para', R`**Slipper (Michell) bearing.** The bearing plate slides at $V$ under a fixed slipper of length $l$. $x$ is measured from the **inlet** (the leading edge, where lubricant is dragged in). The slipper face is inclined at a small angle $\arctan\delta$, so the gap is $h = (a - x)\delta$, where $a$ is the distance from the inlet to where the face, extended, would meet the plate: $h_0 = h(0) = a\delta$ at the inlet and $h(l) = (a - l)\delta$ at the outlet. Both ends are open to the surrounding pressure $p_a$. If the slope is very small, at each $x$ the flow is locally the parallel-plate solution (5.4), and inertia from the narrowing is negligible.`],
        ['svg', 'tf_slipper_r1', 'Slipper bearing: x from the inlet, gap h = (a − x)δ with h₀ = aδ. The moving plate drags lubricant into the converging wedge, building pressure that holds the slipper up.'],
        ['deriv', 'Derivation sketch — pressure, flow rate and thrust', [
          ['t', R`**1 · Local flow.** By continuity $Q$ (per unit width) is the same at every $x$. Rearrange (5.4), $Q = \frac{h^3}{12\mu}\left(-\frac{dp}{dx}\right) + \frac{Vh}{2}$, for the local pressure gradient:`],
          ['m', R`\frac{dp}{dx} = 12\mu\left(\frac{V}{2h^2} - \frac{Q}{h^3}\right) = 12\mu\left(\frac{V}{2\delta^2(a - x)^2} - \frac{Q}{\delta^3(a - x)^3}\right)`],
          ['t', R`**2 · Integrate**, using $\int\frac{dx}{(a-x)^2} = \frac{1}{a-x}$ and $\int\frac{dx}{(a-x)^3} = \frac{1}{2(a-x)^2}$:`],
          ['m', R`p = \frac{6\mu}{\delta^2}\left(\frac{V}{a - x} - \frac{Q}{\delta(a - x)^2}\right) + C`],
          ['t', R`**3 · Inlet**, $p = p_a$ at $x = 0$, fixes $C$:`],
          ['m', R`p - p_a = \frac{6\mu}{\delta^2}\left(\frac{Vx}{a(a - x)} - \frac{Q}{\delta}\,\frac{x(2a - x)}{a^2(a - x)^2}\right)`],
          ['t', R`**4 · Outlet**, $p = p_a$ at $x = l$ as well, fixes $Q$ — the bearing passes exactly the flow that brings the pressure back to $p_a$:`],
          ['m', R`Q = \frac{\delta V a(a - l)}{2a - l} \;\Rightarrow\; p - p_a = \frac{6\mu V}{\delta^2}\,\frac{x(l - x)}{(2a - l)(a - x)^2}`],
          ['t', R`This is positive for $0 < x < l$: the wedge is pressurised. **5 · Thrust** per unit width, $T = \int_0^l (p - p_a)\,dx$; substitute $s = a - x$ (so $x(l - x) = -s^2 + (2a - l)s - a(a - l)$):`],
          ['m', R`T = \frac{6\mu V}{\delta^2(2a - l)}\int_{a-l}^{a}\left(-1 + \frac{2a - l}{s} - \frac{a(a - l)}{s^2}\right)ds = \frac{6\mu V}{\delta^2(2a - l)}\left[(2a - l)\ln\frac{a}{a - l} - 2l\right]`],
          ['m', R`\Rightarrow\; T = \frac{6\mu V}{\delta^2}\left[\ln\!\left(\frac{a}{a - l}\right) - \frac{2l}{2a - l}\right]`],
          ['t', R`Check: no thrust with no taper ($a \to \infty$) or no motion ($V = 0$). For $a \to \infty$ put $u = l/a \ll 1$ and expand both terms of the bracket:`],
          ['m', R`\ln\frac{a}{a-l} - \frac{2l}{2a-l} = -\ln(1-u) - \frac{u}{1-u/2} = \left(u + \frac{u^2}{2} + \frac{u^3}{3} + \dots\right) - \left(u + \frac{u^2}{2} + \frac{u^3}{4} + \dots\right) \approx \frac{u^3}{12} = \frac{l^3}{12a^3}`],
          ['t', R`so $T \approx \dfrac{\mu V l^3}{2\delta^2 a^3} \to 0$.`]
        ]],
        ['warn', 'Note', [
          R`The slide defines $\delta = h(x{=}0)/l$; from $h = (a - x)\delta$ it is $\delta = h(0)/a = [h(0) - h(l)]/l$ (the slope of the face).`,
          R`In its expression for $p - p_a$ after finding $Q$, the slide prints $x(a - x)$ in the second term; it should be $x(2a - x)$, as in step 3. The thrust it then quotes is correct.`
        ]],
        ['eq', [
          ['Local pressure gradient', R`\frac{dp}{dx} = 12\mu\left(\frac{V}{2h^2} - \frac{Q}{h^3}\right),\quad h = (a-x)\delta`, '[Pa/m]', 'From (5.4) rearranged for dp/dx.'],
          ['Flow rate through the slipper', R`Q = \frac{\delta V a(a-l)}{2a - l}`, '[m²/s]', 'From p = pₐ at both ends.'],
          ['Slipper thrust per unit width', R`T = \frac{6\mu V}{\delta^2}\left[\ln\!\left(\frac{a}{a-l}\right) - \frac{2l}{2a-l}\right]`, '[N/m]', 'Zero with no taper (a → ∞) or no motion (V = 0).']
        ]],
        ['para', R`**Journal bearing.** A shaft — the **journal**, radius $R$, centre $C$ — turns at $\Omega$ inside a fixed **bush** of inner radius $R_c$, centre $O$; the bearing has length $L$ (along the shaft, into the page). Under load the journal runs off-centre by the **eccentricity** $e = OC$. The radial clearance is $c = R_c - R$ and the eccentricity ratio $\varepsilon = e/c$ ($0$ = concentric, $1$ = touching). The film is thinnest, $c - e$, on the line $OC$ beyond $C$, and the rotating journal drags oil into that converging gap — the slipper's wedge wrapped round a circle. "Force parallel to OC" is the component of the oil-film force along the line of centres; "force perpendicular to OC" is the component at right angles to it.`],
        ['svg', 'tf_journal_r1', 'Journal bearing: the journal (radius R, centre C) runs eccentrically, e = OC, in the bush (inner radius R_c, centre O); the converging oil film generates the load-carrying pressure.'],
        ['eq', [
          ['Journal bearing: force parallel to OC', R`-\frac{\varepsilon^2}{c^2(1-\varepsilon^2)^2}\mu\Omega R L^3`, '[N]', 'ε = e/c. Slide prints ε³ — see the Warning.'],
          ['Journal bearing: force perpendicular to OC', R`\frac{\pi\varepsilon}{4c^2(1-\varepsilon^2)^{3/2}}\mu\Omega R L^3`, '[N]', ''],
          ['Journal bearing oil flow (supply = side leakage)', R`Q = \Omega R\varepsilon c`, '[m²/s]', 'Per unit length L. Circumferential flow ΩRh/2 at the widest gap c(1+ε) minus that at the thinnest c(1−ε); see the Note.']
        ]],
        ['warn', 'Warning', [
          R`The slide gives the force parallel to $OC$ as $-\dfrac{\varepsilon^3}{c^2(1-\varepsilon^2)^2}\mu\Omega RL^3$. The journal-bearing formulas are short-bearing (Ocvirk) results, and in that theory the component along the line of centres goes as $\varepsilon^{2}$ (Ocvirk's film pressure is $p - p_a = \frac{3\mu\Omega}{c^2}\left(\frac{L^2}{4} - z^2\right)\frac{\varepsilon\sin\theta}{(1+\varepsilon\cos\theta)^3}$, already $\propto \varepsilon$; resolving it along $OC$ brings in $\int_0^\pi \frac{\sin\theta\cos\theta}{(1+\varepsilon\cos\theta)^3}d\theta = -\frac{2\varepsilon}{(1-\varepsilon^2)^2}$, one more $\varepsilon$, and integrating over the area $R\,d\theta\,dz$ with $\int(L^2/4 - z^2)\,dz = L^3/6$ this gives exactly $-\frac{\varepsilon^2}{c^2(1-\varepsilon^2)^2}\mu\Omega RL^3$). The perpendicular component on the slide matches the standard result exactly. Use $\varepsilon^2$; if an exam paper states the slide's form, use what it gives.`
        ]],
        ['warn', 'Note', [
          R`**What $Q = \Omega R\varepsilon c$ is.** Short-bearing theory neglects the circumferential pressure gradient, so oil is carried round by pure Couette drag: $\Omega R h/2$ per unit length $L$ at a section where the film is $h$. That is $\Omega R c(1+\varepsilon)/2$ at the widest section and only $\Omega R c(1-\varepsilon)/2$ at the thinnest. The difference, $\Omega R\varepsilon c$ per unit length (total $\Omega R\varepsilon cL$), cannot get through the narrow gap — it is squeezed out of the bearing ends (side leakage), and the oil supply must replace it. It is **not** the flow past any one section (that would be $\Omega Rh/2$, e.g. $\Omega Rc/2$ at the mean clearance); it is the flow rate the lubrication system must deliver. It vanishes when the journal is concentric ($\varepsilon = 0$).`
        ]],
        ['warn', 'When to use', [
          R`**Slipper:** be able to explain the mechanism and follow steps 1–5 (continuity ⇒ $dp/dx$, integrate, $p = p_a$ at both ends gives $C$ and $Q$, integrate $p - p_a$ for $T$); quote the thrust.`,
          R`**Journal bearing:** quote only — deriving it needs a 2-D (Reynolds-equation) analysis beyond this course. Know what $R$, $R_c$, $c$, $e$, $\varepsilon$, $L$ and "parallel / perpendicular to OC" mean.`
        ]],
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
          ['svg', 'tf_plates', 'A very narrow rectangle behaves like two infinite parallel plates away from its short ends; the gap H in this figure is the duct depth h.'],
          ['ans'],
          ['t', R`The control volume is a long, thin rectangle, so away from the short end walls their effect is small and the flow is effectively between **infinite parallel plates** a distance $h$ apart. The derivation of §5.3 then applies with $H = h$: $Q = \int_0^h u\,dy = \frac{h^3}{12\mu}\left(-\frac{dp}{dx}\right)$. The error from the ends grows as the aspect ratio falls.`]
        ]],
        ['ex', 'Q2 — annulus between concentric tubes', [
          ['t', R`Show that for laminar flow between radii $r_1$ and $r_2$: $\tau = \left(-\frac{dp}{dx}\right)\left(\frac{r}{2} + \frac{r_2^2 - r_1^2}{4r\ln(r_1/r_2)}\right)$.`],
          ['svg', 'tf_annulus', 'Ring control volume in the annulus: shear acts on both its inner and outer curved faces.'],
          ['ans'],
          ['t', R`Use a **ring** control volume (radius $r$, thickness $\delta r$, length $\delta x$). As in the pipe (§5.2), $\tau$ is the stress that **resists** the flow on a ring's outer face, so for a Newtonian fluid $\tau = -\mu\,du/dr$.`],
          ['t', R`**Pressure force** (forward) on the two end faces, area $\pi(r + \delta r)^2 - \pi r^2 \approx 2\pi r\,\delta r$:`],
          ['m', R`\left[p - \left(p + \frac{dp}{dx}\delta x\right)\right]2\pi r\,\delta r = \left(-\frac{dp}{dx}\right)2\pi r\,\delta r\,\delta x`],
          ['t', R`**Shear force** (backward): the outer face (area $2\pi(r + \delta r)\delta x$) is held back by $\tau + \frac{d\tau}{dr}\delta r$; the inner face (area $2\pi r\,\delta x$) is pushed forward by $\tau$. Net, neglecting $\delta r^2$:`],
          ['m', R`2\pi(r + \delta r)\delta x\left(\tau + \frac{d\tau}{dr}\delta r\right) - 2\pi r\tau\,\delta x \approx 2\pi\,\delta r\,\delta x\left(r\frac{d\tau}{dr} + \tau\right) = 2\pi\,\delta r\,\delta x\,\frac{d(r\tau)}{dr}`],
          ['t', R`Steady, fully developed: **pressure force = net shear force**:`],
          ['m', R`\left(-\frac{dp}{dx}\right)2\pi r\,\delta r\,\delta x = 2\pi\,\delta r\,\delta x\,\frac{d(r\tau)}{dr} \;\Rightarrow\; r\tau = \frac{r^2}{2}\left(-\frac{dp}{dx}\right) + C_1 \qquad (\text{i})`],
          ['t', R`Constitutive relation, $\mu\,du/dr = -\tau = -\frac r2\left(-\frac{dp}{dx}\right) - \frac{C_1}{r}$; integrate again:`],
          ['m', R`\mu u = -\frac{r^2}{4}\left(-\frac{dp}{dx}\right) - C_1\ln r + C_2`],
          ['t', R`No slip on both tubes, $u(r_1) = u(r_2) = 0$. Subtract the two conditions to eliminate $C_2$ (you don't need $C_2$):`],
          ['m', R`-\frac{r_1^2 - r_2^2}{4}\left(-\frac{dp}{dx}\right) - C_1\ln\frac{r_1}{r_2} = 0 \;\Rightarrow\; C_1 = \frac{r_2^2 - r_1^2}{4\ln(r_1/r_2)}\left(-\frac{dp}{dx}\right)`],
          ['t', R`Divide (i) by $r$:`],
          ['m', R`\tau = \left(-\frac{dp}{dx}\right)\left(\frac{r}{2} + \frac{r_2^2 - r_1^2}{4r\ln(r_1/r_2)}\right)`],
          ['t', R`Sign check: with $r_1 < r_2$, $\ln(r_1/r_2) < 0$, so $\tau < 0$ near the inner tube and $\tau > 0$ near the outer tube; $\tau = 0$ (maximum velocity) where $r^2 = \frac{r_2^2 - r_1^2}{2\ln(r_2/r_1)}$. The $\ln r$ term is the new feature of annular flows — it is what lets $u$ vanish on two walls.`],
          ['t', R`**Note:** the printed solution uses $\tau = \mu\,du/dr$ with this force balance, which treats $\tau$ as resisting the flow; that pairing would give $u < 0$. The consistent choice is $\tau = -\mu\,du/dr$, as here. The result for $\tau$ is the same.`]
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
          ['t', R`1200 kg/h of water flows down a vertical plane of width $L = 1$ m. Using momentum and mass balances, find the film thickness $H$ (the sheet calls it $h$), the mean and the maximum velocity. Take $\rho = 1000$ kg/m³ and $\mu = 1.0\times10^{-3}$ Pa s (the sheet does not state them). [$4.7\times10^{-4}$ m; 0.71 m/s; 1.07 m/s]`],
          ['svg', 'tf_film_r1', 'Film of thickness H on a vertical wall: mean velocity from momentum, then thickness from the mass flow.'],
          ['ans'],
          ['t', R`**Momentum** (film result, §5.4): $u_m = \frac{\rho g H^2}{3\mu}$. **Mass:** $\dot m = \rho u_m H L$, so $u_m = \frac{\dot m}{\rho H L}$. Equate the two:`],
          ['m', R`\dot m = \frac{1200}{3600} = 0.333\ \text{kg/s},\qquad \frac{\rho g H^2}{3\mu} = \frac{\dot m}{\rho H L} \;\Rightarrow\; H^3 = \frac{3\mu\dot m}{\rho^2 g L}`],
          ['m', R`H^3 = \frac{3\times1.0\times10^{-3}\times0.333}{1000^2\times9.81\times1} = 1.02\times10^{-10}\ \text{m}^3 \;\Rightarrow\; H = 4.67\times10^{-4}\ \text{m}`],
          ['m', R`u_m = \frac{\dot m}{\rho H L} = \frac{0.333}{1000\times4.67\times10^{-4}\times1} = 0.71\ \text{m/s} \qquad u_{max} = u(H) = 1.5\,u_m = 1.07\ \text{m/s}`],
          ['t', R`**Note:** the printed solution writes $u_{av} = \frac{\rho g}{\mu}\frac{h^2}{3L}$ (a spurious $1/L$: $Q$ is already per unit width) and then $h^3 = 3\mu\dot m/\rho^2 g$ without $L$. The numbers are unaffected only because $L = 1$ m.`]
        ]],
        ['ex', 'Q5 — film down an incline', [
          ['t', R`Show that a film of depth $H$ on a plane at $\alpha$ has $u = \frac{\rho g}{\mu}\sin\alpha\left(Hy - \frac{y^2}{2}\right)$ and $Q = \frac{H^3}{3\mu}\rho g\sin\alpha$.`],
          ['svg', 'tf_film_incline', 'On an incline only the component of gravity along the slope, ρg sin α, drives the film. Axes: x down the slope, y normal to the plane from its surface (y here plays the role of x in §5.4).'],
          ['ans'],
          ['t', R`Here $y$ is measured **normal** to the plane from its surface (it plays the role of $x$ in §5.4) and $x$ runs down the slope. Element $\delta x \times \delta y$, unit width. Along the slope: the weight component $\rho g\sin\alpha\,\delta x\,\delta y$ and the net shear $\frac{d\tau}{dy}\delta y\,\delta x$, with $\tau = \mu\,du/dy$. The pressure is $p_{atm}$ at the free surface and varies hydrostatically **across** the film (from $g\cos\alpha$), the same at every $x$ — so there is no pressure gradient along the slope.`],
          ['m', R`\rho g\sin\alpha\,\delta x\,\delta y + \frac{d\tau}{dy}\delta y\,\delta x = 0 \;\Rightarrow\; \mu\frac{d^2u}{dy^2} = -\rho g\sin\alpha`],
          ['m', R`\mu u = -\rho g\sin\alpha\,\frac{y^2}{2} + Ay + B`],
          ['m', R`y = 0,\ u = 0 \Rightarrow B = 0 \qquad y = H,\ \frac{du}{dy} = 0 \Rightarrow A = \rho g H\sin\alpha`],
          ['m', R`\Rightarrow\; u = \frac{\rho g}{\mu}\sin\alpha\left(Hy - \frac{y^2}{2}\right)`],
          ['m', R`Q = \int_0^H u\,dy = \frac{\rho g\sin\alpha}{\mu}\left[\frac{Hy^2}{2} - \frac{y^3}{6}\right]_0^H = \frac{H^3}{3\mu}\rho g\sin\alpha`],
          ['t', R`This is the pressure-driven free-surface result (§5.4) with $\left(-\frac{dp}{dx}\right)$ replaced by the effective gradient $\rho g\sin\alpha$; $\alpha = 90°$ recovers the vertical film.`],
          ['t', R`**Note:** the printed solution writes the balance as $-dp/dx = d\tau/dy$ and then sets $(-dp/dx) = -\rho g\sin\alpha$. The two sign slips cancel, so its final answer is right — use the consistent version above.`]
        ]],
        ['ex', 'Q6 — mercury channel with a moving belt', [
          ['t', R`Mercury ($\nu = 10^{-7}$ m²/s) flows under gravity down a wide channel, $h = 1$ mm, $L = 10$ m, drop $z = 0.5$ m, both ends open to atmosphere. What belt speed $U_0$ on the upper wall doubles the flow rate? [0.82 m/s]`],
          ['svg', 'tf_mercury_belt', 'Gravity drives a Poiseuille flow down the channel; the moving belt adds a Couette flow.'],
          ['ans'],
          ['t', R`**What drives it:** both ends are at atmospheric pressure, so there is no real pressure difference. As in Q5, the component of gravity along the channel acts as the driving gradient. The channel falls $z$ over its length $L$, so $\sin\alpha = z/L$ and`],
          ['m', R`\left(-\frac{dp}{dx}\right)_{eff} = \rho g\sin\alpha = \frac{\rho g z}{L}`],
          ['t', R`(The course writes this as $-\Delta p = \rho g z$ over length $L$: the "pressure drop" that a static column of height $z$ would give.) Combined Poiseuille + Couette (5.4), with $u = 0$ on the fixed lower wall and $u = U_0$ on the belt (moving down the channel):`],
          ['m', R`Q = \frac{h^3}{12\mu}\left(-\frac{dp}{dx}\right)_{eff} + \frac{U_0h}{2} = 2\cdot\frac{h^3}{12\mu}\left(-\frac{dp}{dx}\right)_{eff} \;\Rightarrow\; U_0 = \frac{h^2}{6\mu}\cdot\frac{\rho g z}{L} = \frac{g z h^2}{6\nu L}`],
          ['m', R`U_0 = \frac{9.81\times0.5\times(10^{-3})^2}{6\times10^{-7}\times10} = \frac{4.91\times10^{-6}}{6\times10^{-6}} = 0.82\ \text{m/s}`],
          ['t', R`**Note:** the printed profile reads $u = \frac{1}{2\mu}\left(-\frac{\Delta p}{L}\right)(y^2 - yh) + \frac{y}{h}U_0$; the Poiseuille part should be $(hy - y^2)$, i.e. $u = \frac{1}{2\mu}\frac{\rho g z}{L}(hy - y^2) + \frac{y}{h}U_0$. Its flow rate and final answer are correct.`]
        ]],
        ['ex', 'Practice — spindle viscometer: viscosity from measured torque and speed (not on the course sheet)', [
          ['t', R`**Practice example** (the viscometry handout has no numerical case; realistic values chosen). A spindle of radius $a = 20.0$ mm turns at $N = 60$ rpm inside a fixed cup of radius $b = 21.0$ mm, immersed to depth $h = 60$ mm in an oil. The viscometer reads a torque $T = 0.0400$ N m. Find $\mu$. [1.96 Pa s]`],
          ['ans'],
          ['t', R`**Geometry and speed:** clearance $c = b - a = 1.0$ mm; mean diameter $D = a + b = 41.0$ mm (so $c \ll D$ ✓); $\Omega = 2\pi N/60 = 2\pi$ rad/s $= 6.283$ rad/s.`],
          ['t', R`**Use (5.5):**`],
          ['m', R`\mu = \frac{4c}{\pi hD^3}\,\frac{T}{\Omega} = \frac{4\times(1.0\times10^{-3})\times0.0400}{\pi\times0.060\times(0.041)^3\times6.283} = \frac{1.60\times10^{-4}}{\pi\times0.060\times6.892\times10^{-5}\times6.283} = \frac{1.60\times10^{-4}}{8.163\times10^{-5}}`],
          ['m', R`\mu = 1.96\ \text{Pa s}`],
          ['t', R`**Check with the exact torque** $T = \frac{4\pi ha^2b^2}{b^2 - a^2}\mu\Omega$:`],
          ['m', R`\mu = \frac{T(b^2 - a^2)}{4\pi ha^2b^2\Omega} = \frac{0.0400\times(4.41 - 4.00)\times10^{-4}}{4\pi\times0.060\times(4.00\times10^{-4})(4.41\times10^{-4})\times6.283} = 1.962\ \text{Pa s}`],
          ['t', R`The small-gap formula is only $0.12\,\%$ low here, because $ab \approx (D/2)^2$ is in error by $c^2/4$, tiny for $c/D = 0.024$.`],
          ['t', R`**Sanity check:** about 2000 times water's ($10^{-3}$ Pa s), glycerol-like — a heavy oil, well suited to a laminar Couette gap at this speed. Remember $\Omega$ in **rad/s** and every length in **metres**; $D$ is cubed, so entering $D$ alone in mm instead of m changes the answer by $10^9$.`]
        ]]
      ]
    }
  ]
}
