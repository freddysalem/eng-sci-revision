{
  key: 'tf_turbulent', area: 'pipe', num: '6', week: 'Week 4',
  name: 'Turbulent Flows and Boundary Layers',
  triggers: 'high Re · eddies/vortices · Reynolds stress ρu′v′ · eddy viscosity · mixing length · friction velocity u* · law of the wall · log law · velocity defect law · viscous sublayer yu*/ν < 5 · rough wall eu*/ν > 70 · 1/7th power law · centreline velocity → u*',
  sections: [
    {
      num: '', title: 'Revision Objectives — Turbulent Flows and Boundary Layers',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`List the "symptoms" that define turbulence and describe the **energy cascade**.`,
          R`Split a turbulent velocity into mean and fluctuation, $u = \bar u + u'$, and explain where the **Reynolds stress** $\rho\overline{u'v'}$ and the **closure problem** come from.`,
          R`Define **eddy viscosity** and **Prandtl's mixing length**, and say why eddy viscosity is a flow property.`,
          R`Define the **friction velocity** $u^* = \sqrt{\tau_w/\rho}$ and the wall coordinate $yu^*/\nu$.`,
          R`Sketch the turbulent boundary layer: **viscous sublayer**, transition region, **log-law (inner) region**, outer region.`,
          R`Use the **log law** and the **1/7th power law** to link centreline velocity, mean velocity and wall stress.`,
          R`Choose the right relation for a question (log law, defect law, Blasius or 1/7th law) — see the summary in §6.7.`
        ]]
      ]
    },
    {
      num: '6.1', title: 'What Is Turbulence?',
      blocks: [
        ['para', R`Turbulent flows are dominated by **inertia** (the effects of $\rho$) and occur at **high $Re$**. Following R. W. Stewart, turbulence is best thought of as a **syndrome**: a flow must show **all** of these symptoms, not just one of them.`],
        ['list', null, false, [
          R`**Disorder** — the velocity at a point is irregular and unsteady, even when the flow rate is steady.`,
          R`**Irreproducible in detail** — repeat the experiment and the instantaneous velocities differ; only the **statistics** (means, correlations) repeat. That is why we work with time averages in §6.2.`,
          R`**Efficient at mixing** — eddies carry mass, momentum and energy across the flow far faster than molecular diffusion. Mixing of momentum is what flattens the velocity profile (§6.3).`,
          R`**Vorticity irregularly distributed in three dimensions** — the eddies are rotating, three-dimensional structures. (A flow that is merely unsteady, such as regular vortex shedding behind a cylinder, is not turbulent.)`
        ]],
        ['svg', 'tf_turb_dye', 'Reynolds’s dye experiment. Laminar: a straight filament. Transitional: intermittent turbulent “puffs” separated by laminar stretches. Turbulent: eddies tear the filament up and the dye fills the whole pipe within a short distance.'],
        ['para', R`Reynolds's experiment shows the mixing symptom directly. In **laminar** flow the dye stays a straight filament (only slow molecular diffusion spreads it). In **transitional** flow the pipe carries intermittent turbulent **puffs**: patches where the dye is suddenly spread across the pipe, separated by laminar stretches. In fully **turbulent** flow the filament is broken up by eddies almost at once and the dye is spread over the whole cross-section.`],
        ['warn', 'Key Insight', [
          R`A **vortex** makes fluid follow a circular path. All turbulent flows have rotational vorticity, with vortices (eddies) of many sizes and strengths.`,
          R`**Energy cascade:** large eddies (about the size of the pipe) take energy from the mean flow and pass it to smaller eddies, which pass it to smaller ones again. This continues down to the **Kolmogorov microscales** — the smallest eddies, so small that viscosity dominates — where the turbulent kinetic energy is **dissipated as heat**.`,
          R`Small-scale turbulence can be **isotropic**: its statistics are the same in every direction, because the small eddies have "forgotten" the direction of the mean flow that the large eddies feel.`
        ]],
        ['warn', 'Note', [
          R`For context only (not in the course and not examined): the Kolmogorov length scale is $\eta_K = (\nu^3/\varepsilon_d)^{1/4}$, where $\varepsilon_d$ is the rate of dissipation of turbulent kinetic energy per unit mass (W/kg). Don't confuse $\varepsilon_d$ with the eddy viscosity $\epsilon$ of §6.3.`
        ]]
      ]
    },
    {
      num: '6.2', title: "Reynolds' Model: Mean Flow and Reynolds Stresses",
      blocks: [
        ['para', R`Because only the statistics of turbulence repeat, Reynolds split each velocity into a time-mean and a fluctuation about it. In a pipe, $u$ is the **axial** velocity (along $x$) and $v$ the **radial** velocity (along $r$, positive outward towards the wall); each is split the same way:`],
        ['disp', [ R`\boxed{u = \bar u + u', \qquad \bar u = \frac{1}{T}\int_0^T u\,dt, \qquad \overline{u'} = \frac{1}{T}\int_0^T u'\,dt = 0} \tag{6.1}` ]],
        ['svg', 'tf_reynolds_decomp', 'Reynolds’s model: the measured signal u(t) = a constant time-mean ū + a fluctuation u′(t) that averages to zero over a long enough time T.'],
        ['para', R`Likewise $v = \bar v + v'$ with $\overline{v'} = 0$, and in fully developed pipe flow there is no mean radial flow, $\bar v = 0$. The mean of a **single** fluctuation is zero, but the mean of a **product** of two fluctuations need not be — and that product is what appears when we do a momentum balance.`],
        ['deriv', 'Derivation — momentum balance on a cylinder of fluid', [
          ['svg', 'tf_turb_cv', 'Control volume: a coaxial cylinder of radius r and length δx. Pressure acts on the ends, a stress τ on the curved surface, and the fluctuations carry x-momentum out through the curved surface.'],
          ['t', R`Take a coaxial cylinder of radius $r$ and length $\delta x$ (gold, above). The flow is steady in the mean and fully developed, so the momentum carried in through one end equals that carried out through the other. Balance the $x$-direction forces against the net momentum outflow through the curved surface.`],
          ['t', R`**Pressure** on the ends (net force in $+x$):`],
          ['m', R`p\,\pi r^2 - \left(p + \frac{dp}{dx}\delta x\right)\pi r^2 = -\frac{dp}{dx}\,\delta x\,\pi r^2`],
          ['t', R`**Viscous stress** on the curved surface, area $2\pi r\,\delta x$: the outer fluid exerts $\mu\,d\bar u/dr$ in $+x$ (negative here, because $\bar u$ falls towards the wall, so it retards the cylinder).`],
          ['t', R`**Momentum flux** out through the curved surface: fluid crosses it at rate $\rho v$ per unit area and carries $x$-momentum $u$ with it, so the flux is $\rho uv$. Time-average it using (6.1):`],
          ['m', R`\rho\,\overline{uv} = \rho\,\overline{(\bar u + u')(\bar v + v')} = \rho\left(\bar u\bar v + \bar u\,\overline{v'} + \bar v\,\overline{u'} + \overline{u'v'}\right) = \rho\,\overline{u'v'}`],
          ['t', R`because $\bar v = 0$ and $\overline{u'} = \overline{v'} = 0$. Only the product of fluctuations survives. Momentum balance (forces = net outflow of momentum):`],
          ['m', R`-\frac{dp}{dx}\,\delta x\,\pi r^2 + \mu\frac{d\bar u}{dr}\,2\pi r\,\delta x = \rho\,\overline{u'v'}\;2\pi r\,\delta x`],
          ['t', R`Divide by $2\pi r\,\delta x$ and rearrange:`]
        ]],
        ['disp', [ R`-\frac{r}{2}\frac{dp}{dx} = -\mu\frac{d\bar u}{dr} + \rho\overline{u'v'} \tag{6.2}` ]],
        ['para', R`The left-hand side is the **total retarding stress** $\tau(r)$ that the outer fluid exerts on the cylinder. It is the same as in laminar flow (topic 5), so $\tau$ still rises linearly from zero on the axis to $\tau_w = -\frac{R}{2}\frac{dp}{dx}$ at the wall. In laminar flow it is carried by viscosity alone ($-\mu\,d\bar u/dr$). In turbulent flow there is an extra term, $\rho\overline{u'v'}$, which behaves like a stress: the **Reynolds stress**.`],
        ['svg', 'tf_reynolds_stress', 'Physical picture of the Reynolds stress: fluid moving out from the fast core arrives too fast (u′ > 0, v′ > 0); fluid moving in from the slow near-wall layer arrives too slow (u′ < 0, v′ < 0). Either way u′v′ > 0, so x-momentum is carried out towards the wall.'],
        ['para', R`**Why the product is non-zero.** Velocity falls towards the wall. A parcel that moves **outward** ($v' > 0$) comes from a faster layer, so it arrives faster than its new surroundings: $u' > 0$. A parcel that moves **inward** ($v' < 0$) comes from a slower layer: $u' < 0$. Both give $u'v' > 0$, so the average $\overline{u'v'}$ is positive. Fast fluid is carried out and slow fluid in, which is a net flux of $x$-momentum towards the wall. There it is removed as wall friction.`],
        ['deriv', 'Illustration — why ρu′v′ is not zero (lecture example)', [
          ['t', R`Five samples: $u' = 1, -1, 0, 2, -2$ (mean 0) and $v' = 0, -4, 4, 1, -1$ (mean 0). Products $u'v' = 0, 4, 0, 2, 2$:`],
          ['m', R`\overline{u'} = 0,\quad \overline{v'} = 0,\quad \text{but}\quad \overline{u'v'} = \frac{0+4+0+2+2}{5} = \frac{8}{5} \neq 0`],
          ['t', R`The fluctuations are **correlated**: when $u'$ is negative, $v'$ tends to be negative too, and when $u'$ is positive, $v'$ tends to be positive. That correlated motion transports momentum — a **Reynolds stress**. The positive sign matches a real pipe flow with $v'$ measured radially outward.`]
        ]],
        ['warn', 'Note', [
          R`**Sign convention.** With $v'$ radial (outward, towards the wall) as here and in the lecture, $\overline{u'v'} > 0$ in a pipe. Many textbooks measure $y$ from the wall towards the centre instead. That $v'$ is the negative of ours, so they quote $\overline{u'v'} < 0$. The physics is the same: in both cases momentum flows towards the wall.`
        ]],
        ['warn', 'Important', [
          R`$\rho\overline{u'v'}$ depends on the turbulence itself, not just the fluid. The mean momentum equation (6.2) now has a new unknown ($\overline{u'v'}$) but no new equation to find it. This is the **closure problem**, and the Reynolds stress must be modelled (§6.3).`
        ]]
      ]
    },
    {
      num: '6.3', title: 'Closing the Model: Eddy Viscosity and Mixing Length',
      blocks: [
        ['para', R`Turbulent mixing behaves like **diffusion**: momentum moves down its gradient, from fast fluid to slow. Molecular viscosity already works like this. Newton's law of viscosity can be written as a diffusion law for momentum per unit volume, $\rho u$, with diffusivity $\nu = \mu/\rho$ (m²/s), just as Fick's law has mass diffusing with diffusivity $\mathcal{D}$. Here $\tau$ is read as the **flux of $x$-momentum in the $+y$ direction**:`],
        ['disp', [ R`\tau = -\nu\frac{d(\rho u)}{dy} \tag{6.3}` ]],
        ['para', R`For constant $\rho$ this is just $\tau = -\mu\,du/dy$. It adds nothing new for laminar flow, but it suggests how to model turbulence. Boussinesq modelled the Reynolds stress the same way, with an extra diffusivity, the **eddy viscosity** $\epsilon$:`],
        ['disp', [ R`\rho\overline{u'v'} = -\rho\,\epsilon\frac{d\bar u}{dr} \qquad\Rightarrow\qquad -\frac{r}{2}\frac{dp}{dx} = -\rho(\nu + \epsilon)\frac{d\bar u}{dr} \tag{6.4}` ]],
        ['para', R`The second form comes from substituting the first into (6.2). It is (6.3) with $y \to r$ and diffusivity $\nu + \epsilon$: molecular plus turbulent momentum diffusion. Since $d\bar u/dr < 0$ in a pipe, $\epsilon > 0$ gives $\overline{u'v'} > 0$, matching the physical picture in §6.2.`],
        ['para', R`$\epsilon$ is still unknown. Prandtl's **mixing length** model estimates it. Write $y = R - r$ for the **distance from the wall** (so $d\bar u/dy = -d\bar u/dr$, positive). Suppose a parcel moves a distance $l$ across the flow before it mixes with its new surroundings. It arrives with a velocity difference $u' \sim l\,|d\bar u/dy|$. The eddies are roughly as strong sideways as lengthways, so $v' \sim u'$, and therefore $\overline{u'v'} \sim l^2(d\bar u/dy)^2$. Comparing with (6.4) gives:`],
        ['disp', [ R`\epsilon = l^2\left|\frac{\partial\bar u}{\partial y}\right|, \qquad l = \kappa\,\frac{\partial\bar u/\partial y}{\partial^2\bar u/\partial y^2} \tag{6.5}` ]],
        ['para', R`Here $\kappa$ (written $k$ on the lecture slide) is the **von Kármán constant**, $\kappa \approx 0.4$. The second expression (take its magnitude) is von Kármán's estimate of $l$ from the local shape of the profile. Near a wall the eddies can't be bigger than their distance from it, so Prandtl took $l = \kappa y$. (The von Kármán formula gives exactly this for the log profile: with $d\bar u/dy = u^*/\kappa y$ and $d^2\bar u/dy^2 = -u^*/\kappa y^2$, the ratio has magnitude $y$.)`],
        ['warn', 'Note', [
          R`**Sign convention for $\tau$.** In (6.3) and (6.4) the coordinate ($y$, or $r$ in the pipe) points from fast fluid towards slow fluid, the way momentum diffuses. So $\tau$ is a momentum **flux**: it carries a minus sign and still comes out positive, because $d\bar u/dr < 0$. From here on, $y = R - r$ is measured **from the wall towards the axis** (towards the faster fluid), so $d\bar u/dy > 0$. $\tau$ then means the **magnitude** of the shear stress on a layer: $\tau = (\mu + \rho\epsilon)\,d\bar u/dy$, with $\tau_w = \mu\,(d\bar u/dy)_{y=0}$ at the wall. The physics is the same; the axis points the other way, so the minus sign disappears.`
        ]],
        ['eq', [
          ['Momentum "diffusion" (6.3)', R`\tau = -\nu\frac{d(\rho u)}{dy}`, '[Pa]', 'Newton\'s law as diffusion of ρu down its gradient; diffusivity ν = μ/ρ.'],
          ['Turbulent momentum diffusion', R`\tau = -(\nu + \epsilon)\frac{d(\rho\bar u)}{dy}`, '[Pa]', 'Molecular + turbulent diffusivity; in the pipe (y → r) this is (6.4).'],
          ['Eddy viscosity (Boussinesq)', R`\rho\overline{u'v'} = -\rho\,\epsilon\frac{d\bar u}{dr}`, '[Pa]', 'ε has units m²/s like ν.'],
          ['Turbulent pipe momentum balance', R`-\frac{r}{2}\frac{dp}{dx} = -\rho(\nu + \epsilon)\frac{d\bar u}{dr}`, '[Pa]', 'ν = μ/ρ molecular; ε turbulent.'],
          ['Prandtl mixing length', R`\epsilon = l^2\left|\frac{\partial\bar u}{\partial y}\right|, \qquad l = \kappa\,\frac{\partial\bar u/\partial y}{\partial^2\bar u/\partial y^2}`, '[m²/s]', 'l = typical distance an eddy carries momentum; κ ≈ 0.4 (von Kármán); y = R − r from the wall.'],
          ['Near-wall mixing length', R`l = \kappa y \;\Rightarrow\; \epsilon = \kappa u^* y,\quad \frac{\epsilon}{\nu} = \kappa\,\frac{yu^*}{\nu}`, '[m²/s]', 'In the log-law region (§6.5).']
        ]],
        ['deriv', 'Link — the mixing length leads to the log law', [
          ['t', R`Close to the wall (but outside the thin viscous sublayer) the turbulent stress dominates, and the total stress is close to its wall value: $\tau \approx \tau_w = \rho u^{*2}$ (with $u^*$ from §6.4). With $l = \kappa y$:`],
          ['m', R`\rho u^{*2} = \rho\,\epsilon\frac{d\bar u}{dy} = \rho\,\kappa^2y^2\left(\frac{d\bar u}{dy}\right)^2 \;\Rightarrow\; \frac{d\bar u}{dy} = \frac{u^*}{\kappa y}`],
          ['m', R`\Rightarrow\; \frac{\bar u}{u^*} = \frac{1}{\kappa}\ln y + \text{const} = \frac{1}{\kappa}\ln\frac{yu^*}{\nu} + B`],
          ['t', R`This is the logarithmic law of §6.5, Eq. (6.8), with slope $A = 1/\kappa = 2.5$. Then $\epsilon = l^2\,d\bar u/dy = \kappa u^* y$, which grows linearly with distance from the wall. At $yu^*/\nu = 100$ it is already $\epsilon = 40\nu$.`]
        ]],
        ['warn', 'Key Insight', [
          R`$\nu$ is a **fluid** property; $\epsilon$ is a **flow** property — it changes from place to place in the same fluid (zero at the wall, where eddies are suppressed; many times $\nu$ in the core).`,
          R`Mixing carries high-momentum fluid towards the wall, so turbulent profiles are **much flatter** than the laminar parabola, with a steeper gradient (and higher shear) at the wall.`
        ]]
      ]
    },
    {
      num: '6.4', title: 'Friction Velocity and Wall Scaling',
      blocks: [
        ['para', R`The profile is shaped by both viscous and turbulent stresses, so unlike laminar flow we can't simply solve for it. The wall shear stress is still $\tau_w = \mu\,(d\bar u/dy)_{wall}$, because the eddies vanish at the wall. But that gradient is itself set by the turbulence above it, so it can't be worked out from a known profile shape. Instead we treat $\tau_w$ as an **input**: it is the quantity that sets the strength of the near-wall turbulence and gives the velocity scale. (Specifying $\tau_w$ is the same as specifying $dp/dx$, since $\tau_w = -\frac{R}{2}\frac{dp}{dx}$ from (6.2).)`],
        ['deriv', 'Dimensional analysis of the profile', [
          ['t', R`Mean velocity at distance $y$ from the wall: $\bar u = f(y, \tau_w, \rho, \mu, e, R)$, where $e$ is the wall **roughness height** and $R$ the pipe radius. There are 7 variables and 3 dimensions (M, L, T), so there are **4 groups**. Use $\rho$, $\tau_w$ and $R$ as repeating variables. Of these, only $\tau_w$ contains time, so the velocity scale must come from $\tau_w$ and $\rho$ alone: $[\tau_w/\rho] = (\text{M\,L}^{-1}\text{T}^{-2})/(\text{M\,L}^{-3}) = \text{L}^2\text{T}^{-2}$, so $\sqrt{\tau_w/\rho}$ is a velocity (m/s). $\mu$ gives the second group, which is tidied using $\rho/\mu = 1/\nu$:`],
          ['m', R`\Pi_1 = \frac{\bar u}{\sqrt{\tau_w/\rho}},\qquad \Pi_2 = \frac{\rho R\sqrt{\tau_w/\rho}}{\mu} = \frac{R\sqrt{\tau_w/\rho}}{\nu},\qquad \Pi_3 = \frac{y}{R},\qquad \Pi_4 = \frac{e}{R}`]
        ]],
        ['disp', [ R`\frac{\bar u}{\sqrt{\tau_w/\rho}} = f_1\!\left(\frac{R\sqrt{\tau_w/\rho}}{\nu},\ \frac{y}{R},\ \frac{e}{R}\right) \tag{6.6}` ]],
        ['para', R`The velocity scale $\sqrt{\tau_w/\rho}$ appears in every group, so it gets its own name:`],
        ['eq', [
          ['Friction velocity', R`u^* = \sqrt{\frac{\tau_w}{\rho}}`, '[m/s]', 'Not a real velocity anywhere in the flow — it characterises the wall shear stress.'],
          ['Wall coordinate', R`y^+ = \frac{y u^*}{\nu}`, '[–]', 'A Reynolds number for distance from the wall; = ηξ below.'],
          ['Wall stress from u*', R`\tau_w = \rho\,u^{*2}`, '[Pa]', ''],
          ['Size of u*', R`\frac{u^*}{u_m} = \sqrt{\frac{C_f}{2}} \approx 0.05`, '[–]', 'Since Cf = τw/(½ρuₘ²) = 2u*²/uₘ²; typically Cf ≈ 0.005.']
        ]],
        ['para', R`The lecture notes write $\eta = y/R$ and $\xi = Ru^*/\nu$ (a Reynolds number that uses the friction velocity). Their product is the wall coordinate, $\eta\xi = yu^*/\nu = y^+$. For a smooth wall ($e/R$ neglected), (6.6) becomes $\bar u/u^* = f_1(\eta, \xi)$, and on the centreline ($\eta = 1$, $\bar u = u_{max}$), $u_{max}/u^* = f_2(\xi)$.`],
        ['warn', 'Key Insight', [
          R`**A feel for the numbers.** $u^*$ is typically about 5% of the mean velocity. In Q1 (air, $R = 5$ cm, $u_{max} = 5$ m/s): $u^* = 0.225$ m/s $= 0.056\,u_m$. The viscous sublayer ($y^+ < 5$) is then $y < 5\nu/u^* = 0.32$ mm thick, and the log region starts at $y^+ = 30$, $y = 1.9$ mm. On the centreline $y^+ = Ru^*/\nu \approx 790$. So the sublayer and buffer region occupy less than 4% of the radius.`
        ]],
        ['list', R`Three scaling ideas (you won't be asked to reproduce the derivation below, but know the concepts):`, false, [
          R`**Law of the wall** (Prandtl): approaching the impermeable wall the eddies must get smaller, so very near the wall viscous stresses dominate. This layer is so thin that it can't "see" the pipe radius $R$. So $R$ must drop out, which happens only if $\eta$ and $\xi$ appear as the product $\eta\xi$: $\;\bar u/u^* = f_3(yu^*/\nu)$.`,
          R`**Velocity defect law** (von Kármán; confirmed by Sir Thomas Stanton, once Professor of Engineering at Bristol): far from the wall the turbulent stresses dominate and viscosity has no influence, so $\nu$ drops out and the shortfall from the centreline velocity depends only on position: $\;(u_{max} - \bar u)/u^* = f_4(y/R).$ Nikuradse showed that even wall roughness doesn't affect the profile near the centre.`,
          R`Where **both** hold (the overlap, or inner region), the only possible form is a **logarithm** — derived in §6.5.`
        ]]
      ]
    },
    {
      num: '6.5', title: 'Structure of a Turbulent Boundary Layer',
      blocks: [
        ['svg', 'tf_wall_law', 'Structure of a turbulent boundary layer (semi-log axes): linear viscous sublayer (yu*/ν < 5), buffer region (5–30), log-law (inner) region (30–1000) and outer region. Solid line: measured profile; dashed: the two limiting laws.'],
        ['para', R`**Viscous sublayer** ($yu^*/\nu \lesssim 5$). Next to the wall the eddies are suppressed, so $\epsilon \to 0$. The layer is so thin that the stress in it is constant at its wall value, $\tau = \tau_w$. Newton's law then integrates directly (with $\bar u = 0$ at $y = 0$). As everywhere from the mixing-length paragraph of §6.3 on, $y$ is measured from the wall and $\tau$ is the stress **magnitude** on a layer, $\tau = \mu\,d\bar u/dy$ (see the sign-convention Note in §6.3):`],
        ['disp', [ R`\tau_w = \mu\frac{d\bar u}{dy} \;\Rightarrow\; \bar u = \frac{\tau_w\,y}{\mu} \;\Rightarrow\; \frac{\bar u}{u^*} = \frac{\tau_w\,y}{\mu u^*} = \frac{\rho u^{*2}\,y}{\mu u^*} = \frac{yu^*}{\nu}` ]],
        ['disp', [ R`\frac{\bar u}{u^*} = \frac{yu^*}{\nu} \qquad \left(\frac{yu^*}{\nu} \lesssim 5\right) \tag{6.7}` ]],
        ['deriv', 'Derivation — why the overlap region is logarithmic (lecture notes; concepts only)', [
          ['t', R`In the overlap both the law of the wall and the defect law hold. Add them:`],
          ['m', R`\frac{u_{max}}{u^*} = \underbrace{\frac{u_{max} - \bar u}{u^*}}_{f_4(\eta)} + \underbrace{\frac{\bar u}{u^*}}_{f_3(\eta\xi)} = f_2(\xi)`],
          ['t', R`Differentiate with respect to $\xi$ (holding $\eta$ fixed). The outer-region term $f_4(\eta)$ disappears:`],
          ['m', R`\eta\,f_3'(\eta\xi) = f_2'(\xi)`],
          ['t', R`The right side does not depend on $\eta$, so differentiate again with respect to $\eta$:`],
          ['m', R`f_3'(\eta\xi) + \eta\xi\,f_3''(\eta\xi) = 0 \quad\Leftrightarrow\quad \frac{d}{dz}\big(z\,f_3'(z)\big) = 0, \qquad z = \eta\xi = \frac{yu^*}{\nu}`],
          ['t', R`Integrate once, $z f_3'(z) = A$, so $f_3' = A/z$. Integrate again:`],
          ['m', R`f_3(z) = A\ln z + B \quad\Rightarrow\quad \frac{\bar u}{u^*} = A\ln\frac{yu^*}{\nu} + B`],
          ['t', R`A logarithm is the only function that can match an inner law in $y^+$ to an outer law in $y/R$. The constants come from experiment. Nikuradse found $A = 2.5$ and $B = 5.5$. $A$ is the reciprocal of the von Kármán constant, $A = 1/\kappa$ with $\kappa = 0.4$, as the mixing-length argument in §6.3 also showed.`]
        ]],
        ['disp', [ R`\boxed{\frac{\bar u}{u^*} = 2.5\ln\!\left(\frac{yu^*}{\nu}\right) + 5.5 = 5.75\log_{10}\!\left(\frac{yu^*}{\nu}\right) + 5.5} \tag{6.8}` ]],
        ['para', R`This is the **log law**, valid for $30 \lesssim yu^*/\nu \lesssim 1000$. (The base-10 form uses $\ln x = 2.303\log_{10}x$: $2.5 \times 2.303 = 5.76 \approx 5.75$.) The log law (6.8) and the sublayer law (6.7) cross at $yu^*/\nu \approx 11.6$. The real profile blends smoothly from one to the other through the **buffer (transition) region**, $5 \lesssim yu^*/\nu \lesssim 30$, where neither law is accurate.`],
        ['para', R`**On the centreline.** Putting $y = R$ (so $\bar u = u_{max}$) in (6.8):`],
        ['disp', [ R`\frac{u_{max}}{u^*} = 2.5\ln\!\left(\frac{Ru^*}{\nu}\right) + 5.5 \tag{6.9}` ]],
        ['para', R`**Velocity defect form.** Subtract (6.8) from (6.9). The constant 5.5 cancels and the logs combine:`],
        ['disp', [ R`\frac{u_{max}}{u^*} - \frac{\bar u}{u^*} = 2.5\ln\frac{Ru^*}{\nu} - 2.5\ln\frac{yu^*}{\nu} = 2.5\ln\!\left(\frac{Ru^*/\nu}{yu^*/\nu}\right) = 2.5\ln\frac{R}{y}` ]],
        ['disp', [ R`\frac{u_{max} - \bar u}{u^*} = -2.5\ln\frac{y}{R} = -2.5\ln\!\left(1 - \frac{r}{R}\right) \tag{6.10}` ]],
        ['para', R`Viscosity has dropped out, as the defect law requires. (6.10) is useful when you know $u_{max}$ and $u^*$ and want the velocity elsewhere.`],
        ['warn', 'Note', [
          R`Strictly, the log law does not apply right out to the centreline. The lecture notes say that near the centre the profile depends on the flow conditions (the outer region of the figure). Using (6.9) and (6.10) at $y = R$ is an **approximation**. In a pipe the departure from the log law at the centre is small (a few per cent of $u_{max}$), which is why the course uses (6.9) to get $u^*$ from a centreline measurement (Q1).`
        ]],
        ['eq', [
          ['Viscous sublayer (yu*/ν < 5) (6.7)', R`\frac{\bar u}{u^*} = \frac{y u^*}{\nu}`, '[–]', 'τ ≈ τw constant and τw = μ dū/dy; eddies must shrink at the impermeable wall.'],
          ['Log law (30 < yu*/ν < 1000) (6.8)', R`\frac{\bar u}{u^*} = 2.5\ln\!\left(\frac{yu^*}{\nu}\right) + 5.5 = 5.75\log_{10}\!\left(\frac{yu^*}{\nu}\right) + 5.5`, '[–]', 'A = 2.5 = 1/κ (von Kármán constant κ = 0.4), B = 5.5 (Nikuradse).'],
          ['Log law at the centreline (6.9)', R`\frac{u_{max}}{u^*} = 2.5\ln\!\left(\frac{Ru^*}{\nu}\right) + 5.5`, '[–]', 'Put y = R (an approximation — see Note). Solve iteratively for u*.'],
          ['Velocity defect form (6.10)', R`\frac{u_{max} - \bar u}{u^*} = -2.5\ln\frac{y}{R} = -2.5\ln\!\left(1 - \frac{r}{R}\right)`, '[–]', '(6.9) minus (6.8); independent of ν.'],
          ['Fully rough wall (6.11)', R`\frac{\bar u}{u^*} = 5.75\log_{10}\frac{y}{e} + 8.48`, '[–]', 'eu*/ν > 70; e = equivalent sand-grain roughness height. Same slope as smooth.']
        ]],
        ['para', R`**Rough walls.** $e$ is the **equivalent sand-grain roughness height**: the size of Nikuradse's uniform sand grains that would give the same friction as the real surface. What matters is how $e$ compares with the sublayer thickness, measured by the **roughness Reynolds number** $eu^*/\nu$:`],
        ['list', null, false, [
          R`$eu^*/\nu < 5$: **hydraulically smooth**. The roughness is buried inside the viscous sublayer, any disturbance it makes is damped by viscosity, and the smooth law (6.8) applies.`,
          R`$5 < eu^*/\nu < 70$: **transitionally rough**. Both viscosity and roughness matter (Colebrook — topic 7).`,
          R`$eu^*/\nu > 70$: **fully rough**. The roughness elements poke through and destroy the sublayer, and friction is form drag on the elements. Viscosity no longer matters, so the length scale $\nu/u^*$ in (6.8) is replaced by $e$. That gives (6.11), whose constant 8.48 is Nikuradse's experimental value.`
        ]],
        ['warn', 'Warning', [
          R`**Course correction.** The Turbulent flows notes (§2.2) print the rough-wall law as $5.75\log(y/k) + 8.48$ with $k = e/D$. Since $e/D$ is dimensionless, $y/k$ would have units of length, and a log needs a dimensionless argument. The law is $\bar u/u^* = 5.75\log_{10}(y/e) + 8.48$, with $e$ the roughness height, as used here.`
        ]],
        ['warn', 'Key Insight', [
          R`On a **linear** axis almost the whole layer is "outer region". The sublayer and log region are squeezed against the wall, which is why turbulent profiles look so flat.`,
          R`The log law is accurate but hard to use because you need $u^*$ (i.e. $\tau_w$), which is hard to measure. That is the motivation for the 1/7th law (§6.6).`
        ]]
      ]
    },
    {
      num: '6.6', title: 'The One-Seventh Power Law',
      blocks: [
        ['para', R`An easier, approximate profile follows from the Blasius friction law for smooth pipes, valid for $4000 < Re < 10^5$:`],
        ['disp', [ R`C_f = \frac{\tau_w}{\tfrac12\rho u_m^2} = 0.079\,Re^{-1/4}, \qquad Re = \frac{2Ru_m}{\nu}` ]],
        ['deriv', 'Step 1 — rearrange Blasius in terms of u*', [
          ['t', R`Use $\tau_w = \rho u^{*2}$, so $C_f = 2u^{*2}/u_m^2$, and write $Re = 2\,\dfrac{Ru^*}{\nu}\,\dfrac{u_m}{u^*}$:`],
          ['m', R`2\left(\frac{u^*}{u_m}\right)^2 = 0.079\left(2\,\frac{Ru^*}{\nu}\,\frac{u_m}{u^*}\right)^{-1/4}`],
          ['t', R`Multiply both sides by $(u_m/u^*)^2/0.079$ and collect the powers of $u_m/u^*$ ($2 - \tfrac14 = \tfrac74$). The factor 2 inside $Re$ comes out of the bracket as $2^{-1/4}$; moving it to the left-hand side turns it into $2^{1/4}$, which joins the 2 already there to give $2 \times 2^{1/4}$:`],
          ['m', R`\left(\frac{u_m}{u^*}\right)^{7/4} = \frac{2 \times 2^{1/4}}{0.079}\left(\frac{Ru^*}{\nu}\right)^{1/4} = 30.1\left(\frac{Ru^*}{\nu}\right)^{1/4}`],
          ['t', R`Raise to the power $4/7$: $30.1^{4/7} = 6.99$, and $(1/4)(4/7) = 1/7$:`],
          ['t', R`which gives (6.12) below.`]
        ]],
        ['disp', [ R`\boxed{\frac{u_m}{u^*} = 6.99\left(\frac{Ru^*}{\nu}\right)^{1/7}} \tag{6.12}` ]],
        ['deriv', 'Step 2 — Prandtl\'s assumption and the 1/7th law', [
          ['t', R`(6.12) is dimensionless and has the form "velocity/$u^*$ = constant $\times$ (distance$\cdot u^*/\nu)^{1/7}$". Prandtl assumed that the **same form** holds at every distance $y$ from the wall:`],
          ['m', R`\frac{\bar u(y)}{u^*} = C\left(\frac{u^*y}{\nu}\right)^{1/7}`],
          ['t', R`The constant $C$ is fixed by the condition that $\bar u = u_{max}$ at the centreline, $y = R$. Experiments give $u_m = 0.8\,u_{max}$, so from (6.12):`],
          ['m', R`\frac{u_{max}}{u^*} = \frac{6.99}{0.8}\left(\frac{u^*R}{\nu}\right)^{1/7} = 8.74\left(\frac{u^*R}{\nu}\right)^{1/7} \quad\Rightarrow\quad C = 8.74,\qquad \frac{\bar u}{u^*} = 8.74\left(\frac{u^*y}{\nu}\right)^{1/7}`],
          ['t', R`Divide the profile by the centreline value. $u^*$, $\nu$ and the 8.74 all cancel:`],
          ['m', R`\frac{\bar u}{u_{max}} = \frac{8.74\,(u^*y/\nu)^{1/7}}{8.74\,(u^*R/\nu)^{1/7}} = \left(\frac{y}{R}\right)^{1/7}`]
        ]],
        ['disp', [ R`\boxed{\frac{\bar u}{u_{max}} = \left(\frac{y}{R}\right)^{1/7} = \left(1 - \frac{r}{R}\right)^{1/7}} \tag{6.13}` ]],
        ['warn', 'Warning', [
          R`**Course correction.** The Turbulent flows notes (eq. 5) apply (6.12) at every $y$ with the coefficient **6.99**: $\bar u/u^* = 6.99(u^*y/\nu)^{1/7}$. Taken literally, at $y = R$ that gives $\bar u = u_m$, not $u_{max}$. Dividing it by $u_{max}/u^* = 8.74(u^*R/\nu)^{1/7}$ then gives $\bar u/u_{max} = 0.8(y/R)^{1/7}$, not (6.13). The profile must use the **8.74** coefficient (the one that makes $\bar u = u_{max}$ at $y = R$). The final 1/7th law (6.13) in the notes is correct.`
        ]],
        ['svg', 'tf_turb_profiles', 'Laminar and turbulent profiles carrying the same flow rate (same mean velocity u_m, gold dashed). Laminar: u_max = 2u_m. Turbulent 1/7th law: u_max = (60/49)u_m ≈ 1.22u_m. Turbulent mixing carries momentum towards the wall and flattens the profile.'],
        ['para', R`Integrating (6.13) over the pipe cross-section gives the flow rate:`],
        ['deriv', 'Try it — integrating the 1/7th law', [
          ['m', R`Q = \int_0^R 2\pi r\,u_{max}\left(1-\frac{r}{R}\right)^{1/7}dr,\quad s = 1 - \frac{r}{R},\quad r = R(1-s),\quad dr = -R\,ds`],
          ['m', R`Q = 2\pi R^2u_{max}\int_0^1 (1-s)s^{1/7}ds = 2\pi R^2u_{max}\left(\frac78 - \frac{7}{15}\right) = 2\pi R^2u_{max}\cdot\frac{49}{120} = \frac{49}{60}\pi R^2u_{max}`]
        ]],
        ['eq', [
          ['Blasius in terms of u* (6.12)', R`\frac{u_m}{u^*} = 6.99\left(\frac{Ru^*}{\nu}\right)^{1/7}`, '[–]', 'From Blasius Cf = 0.079 Re⁻¹ᐟ⁴; 4000 < Re < 10⁵.'],
          ['1/7th law in wall units', R`\frac{\bar u}{u^*} = 8.74\left(\frac{yu^*}{\nu}\right)^{1/7}`, '[–]', '8.74 = 6.99/0.8, fixed by ū = uₘₐₓ at y = R.'],
          ['1/7th power law (6.13)', R`\frac{\bar u}{u_{max}} = \left(\frac{y}{R}\right)^{1/7} = \left(1 - \frac{r}{R}\right)^{1/7}`, '[–]', 'Velocities only; never differentiate for τw.'],
          ['1/7th law flow rate', R`Q = \frac{49}{60}\pi R^2 u_{max}`, '[m³/s]', 'Integrate (6.13): uₘ = 0.817 uₘₐₓ.'],
          ['Turbulent mean velocity', R`u_m \approx 0.8\,u_{max}`, '[m/s]', 'Experimental; compare laminar uₘ = 0.5 uₘₐₓ.']
        ]],
        ['warn', 'When to use', [
          R`**0.8 or 49/60?** Both describe the same thing: the experimental ratio $u_m/u_{max} = 0.8$, and the value $49/60 = 0.817$ that the 1/7th law gives when you integrate it. They agree to 2%, which shows that the 1/7th law is self-consistent. Use **0.8** when a question just needs a turbulent mean velocity from a centreline reading (as in the course solution to Q1). Use **49/60** when it says to use or integrate the 1/7th power law (e.g. Q4).`
        ]],
        ['svg', 'tf_seventh_vs_wall', 'Near the wall (linear axes, wall units). The real profile leaves the wall with a finite slope (the sublayer, ū/u* = yu*/ν). The 1/7th law leaves it vertically, so its gradient at the wall is infinite, although it matches the real profile well further out.'],
        ['para', R`**Why not differentiate it?** From (6.13), $d\bar u/dy = \dfrac{u_{max}}{7R}\left(\dfrac{y}{R}\right)^{-6/7}$, which tends to infinity as $y \to 0$. The 1/7th law ignores the viscous sublayer: the real profile is **linear** there, with finite slope $d\bar u/dy = \tau_w/\mu$. The 1/7th law is a good fit to the **velocities** over most of the pipe (in wall units it is within about 3% of the log law for $30 < yu^*/\nu < 1000$). But small errors in a fitted curve become large errors in its slope, and at the wall the slope is completely wrong.`],
        ['warn', 'Warning', [
          R`**Never** differentiate the 1/7th law to get $\tau_w$: its gradient is **infinite** at the wall. Use $u^*$ from the log law (6.9) or $C_f$ from Blasius instead.`
        ]]
      ]
    },
    {
      num: '6.7', title: 'Summary: Which Relation When?',
      blocks: [
        ['html', '<table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">You know…</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">You want…</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Use</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">u<sub>max</sub> (centreline), R, ν</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">u*, τ<sub>w</sub></td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Log law at the centreline (6.9), solved iteratively; τ<sub>w</sub> = ρu*²</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">u<sub>m</sub> (or Q), D = 2R, ν, smooth pipe, 4000 &lt; Re &lt; 10⁵</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">τ<sub>w</sub>, C<sub>f</sub>, u*</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Blasius C<sub>f</sub> = 0.079Re<sup>−1/4</sup>, then τ<sub>w</sub> = C<sub>f</sub>·½ρu<sub>m</sub>², u* = √(τ<sub>w</sub>/ρ)</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">u* and y</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">ū at that point</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Find y⁺ = yu*/ν first: y⁺ &lt; 5 → sublayer (6.7); 30 &lt; y⁺ &lt; 1000 → log law (6.8); rough wall with eu*/ν &gt; 70 → (6.11)</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">u<sub>max</sub> and u*</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">ū at radius r</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Velocity defect law (6.10)</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">u<sub>max</sub> only (no u*)</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">ū(r), Q, u<sub>m</sub></td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">1/7th law (6.13), Q = (49/60)πR²u<sub>max</sub> (or u<sub>m</sub> ≈ 0.8u<sub>max</sub>)</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">u*, ν</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">sublayer thickness, start of log region</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">y = 5ν/u* and y = 30ν/u*</td></tr>'
          + '<tr><td style="padding:6px 10px">u*, y (log region)</td><td style="padding:6px 10px">eddy viscosity</td><td style="padding:6px 10px">l = κy, ε = l²|dū/dy| = κu*y</td></tr>'
          + '</tbody></table>'],
        ['warn', 'Recall Knowledge', [
          R`**Constants to remember:** $\kappa = 0.4$ (von Kármán) $\Rightarrow A = 1/\kappa = 2.5$ (ln) $= 5.75$ (log$_{10}$); $B = 5.5$ (smooth); rough wall $5.75\log_{10}(y/e) + 8.48$.`,
          R`**Region boundaries** in $yu^*/\nu$: sublayer $< 5$; buffer 5–30; log law 30–1000. Roughness $eu^*/\nu$: smooth $< 5$, fully rough $> 70$.`,
          R`**Pipe friction:** Blasius $C_f = 0.079Re^{-1/4}$ ($4000 < Re < 10^5$) $\Leftrightarrow$ $u_m/u^* = 6.99(Ru^*/\nu)^{1/7}$; 1/7th law coefficient $8.74 = 6.99/0.8$.`,
          R`**Mean/centreline:** turbulent $u_m \approx 0.8u_{max}$ (experiment) or $49/60 = 0.817$ (1/7th law); laminar $u_m = 0.5u_{max}$. Typical $u^*/u_m \approx 0.05$.`
        ]],
        ['warn', 'Warning', [
          R`Never differentiate the 1/7th law for $\tau_w$. Never use the log law inside the sublayer ($y^+ < 5$, where it gives nonsense — below $y^+ = 0.11$ it even gives negative velocities). Always check $Re$ is in range before using Blasius.`
        ]]
      ]
    },
    {
      num: 'Ex 6', title: 'Problem Sheet — Turbulent Boundary Layers', wk: true,
      blocks: [
        ['para', R`Q1 is from the course problem sheet. Q2–Q7 are **extra practice** written for these notes (not on the course sheet); they reuse the Q1 pipe where possible. Course data: air $\rho = 1.2$ kg/m³, $\mu = 1.7\times10^{-5}$ kg/m s (so $\nu = \mu/\rho = 1.42\times10^{-5}$ m²/s); water $\rho = 1000$ kg/m³, $\mu = 10^{-3}$ kg/m s.`],
        ['ex', 'Q1 — friction velocity from the centreline speed (course sheet)', [
          ['t', R`Air ($\rho = 1.2$ kg/m³, $\nu = 1.42\times10^{-5}$ m²/s) flows in a pipe of radius 5 cm with centreline velocity 5 m/s. (a) Use the logarithmic velocity profile to find $u^*$. (b) Find $\tau_w$ and $C_f$. (c) Compare $C_f$ with the Blasius value. (d) Why can't you use the 1/7th law to find the wall stress directly from the velocity profile?`],
          ['t', R`**Hint:** there is no closed-form solution for $u^*$. Rearrange (6.9) as $u^* = u_{max}/\big(2.5\ln(Ru^*/\nu) + 5.5\big)$, start from $u^* \approx 0.05\,u_{max}$ and iterate. It converges in 2–3 steps by hand.`],
          ['ans'],
          ['t', R`**Answers:** (a) $u^* = 0.225$ m/s; (b) $\tau_w = 0.061$ Pa, $C_f = 6.3\times10^{-3}$; (c) Blasius $6.1\times10^{-3}$.`],
          ['t', R`(a) The centreline velocity is $u_{max}$. Put $u_{max} = 5$ m/s and $R = 0.05$ m in the centreline log law (6.9):`],
          ['m', R`\frac{u_{max}}{u^*} = 2.5\ln\frac{Ru^*}{\nu} + 5.5 \;\Rightarrow\; \frac{5}{u^*} - 2.5\ln\!\left(\frac{0.05\,u^*}{1.42\times10^{-5}}\right) - 5.5 = 0`],
          ['t', R`(This is (6.9) multiplied out: $5/u^*$ is $u_{max}/u^*$.) Iterate $u^*_{new} = 5/\big(2.5\ln(3521\,u^*) + 5.5\big)$:`],
          ['m', R`\begin{array}{c|c|c|c} u^* & Ru^*/\nu & 2.5\ln(Ru^*/\nu) + 5.5 & u^*_{new} \\ \hline 0.250 & 880 & 22.45 & 0.2227 \\ 0.2227 & 784 & 22.16 & 0.2256 \\ 0.2256 & 794 & 22.19 & 0.2253 \end{array}`],
          ['t', R`$u^* = 0.225$ m/s (Excel goal-seek or Python fsolve give the same: 0.2253). Check: $u^*/u_{max} = 0.045$, i.e. $u^*/u_m = 0.225/4.0 = 0.056$, close to the typical value of about 0.05 quoted in §6.4.`],
          ['m', R`\text{(b) } \tau_w = \rho u^{*2} = 1.2 \times 0.2253^2 = 0.061\ \text{Pa},\quad u_m = 0.8u_{max} = 4.0\ \text{m/s},\quad C_f = \frac{\tau_w}{\tfrac12\rho u_m^2} = \frac{0.0609}{0.5\times1.2\times4.0^2} = 6.3\times10^{-3}`],
          ['m', R`\text{(c) } Re = \frac{u_m\,2R}{\nu} = \frac{4.0\times0.1}{1.42\times10^{-5}} = 28\,200 \Rightarrow C_f = 0.079Re^{-1/4} = \frac{0.079}{12.96} = 6.1\times10^{-3}`],
          ['t', R`The two agree to about 4%. $Re$ is within the Blasius range, so the comparison is valid.`],
          ['t', R`(d) To get $\tau_w$ from a profile you need the gradient at the wall, $\tau_w = \mu\,(d\bar u/dy)_{y=0}$. Differentiating the 1/7th law gives $d\bar u/dy \propto y^{-6/7} \to \infty$ at the wall. The law is an overall fit to the velocities and ignores the linear viscous sublayer, so its slope at the wall is meaningless.`]
        ]],
        ['warn', 'Note', [
          R`The course solutions quote $C_f = 6.4\times10^{-3}$ while the question sheet says $6.3\times10^{-3}$; the unrounded value is $6.35\times10^{-3}$, so both are rounding. The solution's line "$R = 0.055$ m" is a typo for 0.05 m (the working uses 0.05), and its log argument $0.05/(1.42\times10^{-5}u^*)$ should read $0.05\,u^*/1.42\times10^{-5}$ (its next line uses the correct form).`
        ]],
        ['ex', 'Q2 — how thick are the layers? (extra practice)', [
          ['t', R`For the Q1 pipe ($u^* = 0.225$ m/s, $\nu = 1.42\times10^{-5}$ m²/s, $R = 50$ mm): (a) find the distance from the wall of the top of the viscous sublayer ($y^+ = 5$) and of the start of the log region ($y^+ = 30$); (b) find $y^+$ on the centreline; (c) find $\bar u$ at the top of the sublayer and at $y = 10$ mm.`],
          ['ans'],
          ['t', R`**Answers:** (a) 0.32 mm, 1.9 mm; (b) 790; (c) 1.13 m/s, 4.09 m/s.`],
          ['m', R`\text{(a) } y = \frac{y^+\nu}{u^*}:\quad y_5 = \frac{5\times1.42\times10^{-5}}{0.2253} = 3.2\times10^{-4}\ \text{m} = 0.32\ \text{mm},\qquad y_{30} = 1.9\ \text{mm}`],
          ['m', R`\text{(b) } y^+_{centre} = \frac{Ru^*}{\nu} = \frac{0.05\times0.2253}{1.42\times10^{-5}} = 793`],
          ['t', R`So the log region (30–1000) covers the pipe from 1.9 mm to the centreline. The sublayer is under 1% of the radius.`],
          ['m', R`\text{(c) } y^+ = 5:\ \bar u = 5u^* = 1.13\ \text{m/s (sublayer law (6.7))}`],
          ['m', R`y = 10\ \text{mm}:\ y^+ = \frac{0.01\times0.2253}{1.42\times10^{-5}} = 159 \;(\text{log region}) \Rightarrow \bar u = u^*\left(2.5\ln159 + 5.5\right) = 0.2253\times18.17 = 4.09\ \text{m/s}`],
          ['t', R`Within a third of a millimetre of the wall the velocity has already reached 23% of $u_{max}$, and at 10 mm (a fifth of the radius) it is at 82%. This is the flat turbulent profile in numbers.`]
        ]],
        ['ex', 'Q3 — velocity defect law (extra practice)', [
          ['t', R`For the Q1 pipe ($u_{max} = 5$ m/s, $u^* = 0.225$ m/s), use the velocity defect law to find $\bar u$ at $r = R/2$. Compare with the 1/7th law.`],
          ['ans'],
          ['t', R`**Answer:** 4.61 m/s (1/7th law: 4.53 m/s).`],
          ['m', R`r = R/2 \;\Rightarrow\; \frac{y}{R} = 1 - \frac{r}{R} = 0.5`],
          ['m', R`u_{max} - \bar u = -2.5\,u^*\ln 0.5 = 2.5\times0.2253\times0.693 = 0.39\ \text{m/s}`],
          ['m', R`\bar u = 5 - 0.39 = 4.61\ \text{m/s}`],
          ['m', R`\text{1/7th law: } \bar u = 5\times0.5^{1/7} = 5\times0.906 = 4.53\ \text{m/s}`],
          ['t', R`The two estimates agree within 2%. The defect law needs $u^*$; the 1/7th law needs only $u_{max}$.`]
        ]],
        ['ex', 'Q4 — the 1/7th power law (extra practice)', [
          ['t', R`Water ($\rho = 1000$ kg/m³, $\mu = 10^{-3}$ kg/m s) flows in a smooth pipe of diameter 50 mm with centreline velocity 1.5 m/s. Using the 1/7th power law, find (a) the flow rate and mean velocity; (b) the velocity at $r = R/2$ and at 1 mm from the wall. (c) Check $Re$, then use Blasius to find $\tau_w$ and $u^*$, and confirm (6.12).`],
          ['ans'],
          ['t', R`**Answers:** (a) $Q = 2.41$ L/s, $u_m = 1.23$ m/s; (b) 1.36 m/s, 0.95 m/s; (c) $Re = 61\,000$, $\tau_w = 3.8$ Pa, $u^* = 0.061$ m/s.`],
          ['m', R`\text{(a) } Q = \frac{49}{60}\pi R^2u_{max} = 0.817\times\pi\times0.025^2\times1.5 = 2.41\times10^{-3}\ \text{m}^3/\text{s},\qquad u_m = \frac{49}{60}u_{max} = 1.225\ \text{m/s}`],
          ['m', R`\text{(b) } r = R/2:\ \bar u = 1.5\times0.5^{1/7} = 1.36\ \text{m/s}`],
          ['m', R`y = 1\ \text{mm}:\ \bar u = 1.5\left(\frac{1}{25}\right)^{1/7} = 1.5\times0.631 = 0.95\ \text{m/s}`],
          ['m', R`\text{(c) } Re = \frac{\rho u_m D}{\mu} = \frac{1000\times1.225\times0.05}{10^{-3}} = 61\,250\ (\text{in } 4000\text{–}10^5 \checkmark),\quad C_f = 0.079\times61\,250^{-1/4} = 5.02\times10^{-3}`],
          ['m', R`\tau_w = C_f\cdot\tfrac12\rho u_m^2 = 5.02\times10^{-3}\times500\times1.225^2 = 3.77\ \text{Pa},\qquad u^* = \sqrt{3.77/1000} = 0.0614\ \text{m/s}`],
          ['m', R`\text{Check (6.12): } \frac{u_m}{u^*} = \frac{1.225}{0.0614} = 19.95`],
          ['m', R`6.99\left(\frac{Ru^*}{\nu}\right)^{1/7} = 6.99\times(1535)^{1/7} = 6.99\times2.85 = 19.9\ \checkmark`],
          ['t', R`Note that $\tau_w$ came from Blasius, **not** from differentiating the 1/7th law. Here $u^*/u_m = 0.050$, and the sublayer is $5\nu/u^* = 0.08$ mm thick.`]
        ]],
        ['ex', 'Q5 — eddy viscosity in the log region (extra practice)', [
          ['t', R`In the Q1 pipe, at $y^+ = 100$, take Prandtl's mixing length $l = \kappa y$ with $\kappa = 0.4$ and the log-law gradient $d\bar u/dy = u^*/\kappa y$. Find (a) $y$, $d\bar u/dy$ and $l$; (b) the eddy viscosity $\epsilon$ and $\epsilon/\nu$; (c) the Reynolds stress $\rho\epsilon\,d\bar u/dy$ and the viscous stress $\mu\,d\bar u/dy$. Comment.`],
          ['ans'],
          ['t', R`**Answers:** (a) 6.3 mm, 89 s⁻¹, 2.5 mm; (b) $5.7\times10^{-4}$ m²/s, 40; (c) 0.061 Pa and 0.0015 Pa.`],
          ['m', R`\text{(a) } y = \frac{100\nu}{u^*} = \frac{100\times1.42\times10^{-5}}{0.2253} = 6.30\ \text{mm},\quad \frac{d\bar u}{dy} = \frac{0.2253}{0.4\times0.0063} = 89.4\ \text{s}^{-1},\quad l = 0.4y = 2.52\ \text{mm}`],
          ['m', R`\text{(b) } \epsilon = l^2\left|\frac{d\bar u}{dy}\right| = (2.52\times10^{-3})^2\times89.4 = 5.68\times10^{-4}\ \text{m}^2/\text{s},\qquad \frac{\epsilon}{\nu} = 40 = \kappa y^+`],
          ['m', R`\text{(c) } \rho\epsilon\frac{d\bar u}{dy} = 1.2\times5.68\times10^{-4}\times89.4 = 0.061\ \text{Pa} = \tau_w`],
          ['m', R`\mu\frac{d\bar u}{dy} = 1.7\times10^{-5}\times89.4 = 0.0015\ \text{Pa}`],
          ['t', R`The Reynolds stress equals $\tau_w$ (it must, since $l = \kappa y$ and $\tau = \tau_w$ were the assumptions that produced the log law). Viscous stress is only 2.5% of it. In the log region the momentum is carried almost entirely by the eddies, and $\epsilon$, a **flow** property, is 40 times the fluid's $\nu$. (Strictly, $\tau$ falls linearly to zero on the axis, $\tau = \tau_w r/R$; here $r/R = 0.87$, so "$\tau \approx \tau_w$" is an approximation for the region near the wall.)`]
        ]],
        ['ex', 'Q6 — Reynolds stress from velocity samples (extra practice)', [
          ['t', R`At a point in a water pipe flow ($\rho = 1000$ kg/m³, $\mu = 10^{-3}$ kg/m s) five simultaneous samples of the fluctuations (radial $v'$ positive towards the wall) are: $u' = 0.2, -0.1, 0.3, -0.3, -0.1$ m/s and $v' = 0.1, -0.05, 0.1, -0.1, -0.05$ m/s. The mean velocity gradient there is $d\bar u/dr = -50$ s⁻¹. Find (a) $\overline{u'}$, $\overline{v'}$ and $\overline{u'v'}$; (b) the Reynolds stress and the viscous stress; (c) the eddy viscosity.`],
          ['ans'],
          ['t', R`**Answers:** (a) 0, 0, 0.018 m²/s²; (b) 18 Pa, 0.05 Pa; (c) $3.6\times10^{-4}$ m²/s $= 360\nu$.`],
          ['m', R`\text{(a) } \overline{u'} = \frac{0.2-0.1+0.3-0.3-0.1}{5} = 0,\quad \overline{v'} = \frac{0.1-0.05+0.1-0.1-0.05}{5} = 0`],
          ['m', R`u'v' = 0.02,\ 0.005,\ 0.03,\ 0.03,\ 0.005 \;\Rightarrow\; \overline{u'v'} = \frac{0.09}{5} = 0.018\ \text{m}^2/\text{s}^2`],
          ['m', R`\text{(b) } \rho\overline{u'v'} = 1000\times0.018 = 18\ \text{Pa};\qquad -\mu\frac{d\bar u}{dr} = 10^{-3}\times50 = 0.05\ \text{Pa}`],
          ['m', R`\text{(c) } \rho\overline{u'v'} = -\rho\epsilon\frac{d\bar u}{dr} \Rightarrow \epsilon = \frac{\overline{u'v'}}{-d\bar u/dr} = \frac{0.018}{50} = 3.6\times10^{-4}\ \text{m}^2/\text{s} = 360\,\nu`],
          ['t', R`Every sample has $u'$ and $v'$ of the same sign: fluid moving outward is fast and fluid moving inward is slow, as in the §6.2 picture. So $\overline{u'v'} > 0$, and the Reynolds stress is 360 times the viscous stress.`]
        ]],
        ['ex', 'Q7 — smooth or rough? (extra practice)', [
          ['t', R`Water ($\nu = 10^{-6}$ m²/s) flows in a large pipe with friction velocity $u^* = 0.1$ m/s. (a) Classify the wall for a roughness height of $e = 1$ mm (heavily corroded) and of $e = 0.025$ mm (new structural steel, the course Moody-chart value). (b) Between what roughness heights is this flow transitionally rough? (c) At $y = 5$ mm from the wall, find $\bar u$ for the 1 mm wall and compare it with a smooth wall at the same $u^*$.`],
          ['ans'],
          ['t', R`**Answers:** (a) $eu^*/\nu = 100$, fully rough; $eu^*/\nu = 2.5$, hydraulically smooth. (b) $0.05 < e < 0.7$ mm. (c) 1.25 m/s (rough) vs 2.10 m/s (smooth).`],
          ['m', R`\text{(a) } \frac{eu^*}{\nu} = \frac{10^{-3}\times0.1}{10^{-6}} = 100 > 70 \;\Rightarrow\; \text{fully rough}`],
          ['m', R`\frac{0.025\times10^{-3}\times0.1}{10^{-6}} = 2.5 < 5 \;\Rightarrow\; \text{smooth}`],
          ['m', R`\text{(b) } 5 < \frac{eu^*}{\nu} < 70 \;\Rightarrow\; \frac{5\nu}{u^*} < e < \frac{70\nu}{u^*}:\quad 0.05\ \text{mm} < e < 0.7\ \text{mm}`],
          ['t', R`(c) First check the region: $y^+ = 0.005\times0.1/10^{-6} = 500$, which is in the log region. Rough wall, Eq. (6.11):`],
          ['m', R`\frac{\bar u}{u^*} = 5.75\log_{10}\frac{y}{e} + 8.48 = 5.75\log_{10}5 + 8.48 = 4.02 + 8.48 = 12.50 \;\Rightarrow\; \bar u = 1.25\ \text{m/s}`],
          ['m', R`\text{smooth, Eq. (6.8): } \frac{\bar u}{u^*} = 2.5\ln 500 + 5.5 = 21.04 \;\Rightarrow\; \bar u = 2.10\ \text{m/s}`],
          ['t', R`For the same wall stress, the rough wall gives a much lower velocity: its log line has the same slope but is shifted down. Put the other way round, a rough pipe needs a far higher $\tau_w$ (and pressure gradient) to carry the same flow. That is why roughness matters so much in turbulent flow (Moody chart, topic 7), while for the 0.025 mm wall the roughness is buried in the 0.05 mm sublayer and has no effect.`]
        ]]
      ]
    }
  ]
}
