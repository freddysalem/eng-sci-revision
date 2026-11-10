{
  key: 'tf_turbulent', area: 'pipe', num: '6', week: 'Week 4',
  name: 'Turbulent Flows and Boundary Layers',
  triggers: 'high Re · eddies/vortices · Reynolds stress ρu′v′ · eddy viscosity · mixing length · friction velocity u* · law of the wall · log law · viscous sublayer · 1/7th power law · centreline velocity → u*',
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
          R`Use the **log law** and the **1/7th power law** to link centreline velocity, mean velocity and wall stress.`
        ]]
      ]
    },
    {
      num: '6.1', title: 'What Is Turbulence?',
      blocks: [
        ['para', R`Turbulent flows are dominated by **inertia** (the effects of $\rho$) and occur at **high $Re$**. Following R. W. Stewart, turbulence is best thought of as a **syndrome** — a flow must show **all** of these symptoms:`],
        ['svg', 'tf_reynolds_dye', 'Turbulence mixes efficiently: in Reynolds’s experiment the dye filament is torn apart by eddies of many sizes.'],
        ['list', null, false, [
          R`**Disorder** — irregular, unsteady.`,
          R`**Irreproducible in detail** — only statistics repeat.`,
          R`**Efficient at mixing** — mass, momentum and energy.`,
          R`**Vorticity irregularly distributed in three dimensions.**`
        ]],
        ['warn', 'Key Insight', [
          R`A **vortex** makes fluid follow a circular path. Turbulent flows contain vortices of many sizes and strengths.`,
          R`**Energy cascade:** large eddies pass energy to smaller ones, down to the **Kolmogorov microscales** where viscosity dominates and the turbulent kinetic energy is **dissipated as heat**. Small-scale turbulence can be isotropic.`
        ]]
      ]
    },
    {
      num: '6.2', title: "Reynolds' Model: Mean Flow and Reynolds Stresses",
      blocks: [
        ['para', R`Reynolds split each velocity into a time-mean and a fluctuation about it:`],
        ['disp', [ R`\boxed{u = \bar u + u', \qquad \bar u = \frac{1}{T}\int_0^T u\,dt, \qquad \overline{u'} = \frac{1}{T}\int_0^T u'\,dt = 0} \tag{6.1}` ]],
        ['svg', 'tf_reynolds_decomp', 'Reynolds\'s model: the velocity signal u = time-mean ū + fluctuation u′, where u′ averages to zero.'],
        ['para', R`Putting this into the momentum equation for steady, fully developed pipe flow, the mean of the **products** of fluctuations does **not** vanish. An extra stress appears alongside the viscous one:`],
        ['disp', [ R`-\frac{r}{2}\frac{dp}{dx} = -\mu\frac{d\bar u}{dr} + \rho\overline{u'v'} \tag{6.2}` ]],
        ['deriv', 'Illustration — why ρu′v′ is not zero', [
          ['t', R`Five samples: $u' = 1, -1, 0, 2, -2$ (mean 0) and $v' = 0, -4, 4, 1, -1$ (mean 0). Products $u'v' = 0, 4, 0, 2, 2$:`],
          ['m', R`\overline{u'} = 0,\quad \overline{v'} = 0,\quad \text{but}\quad \overline{u'v'} = \frac{8}{5} \neq 0`],
          ['t', R`The fluctuations are **correlated**: fast fluid moving one way, slow fluid the other. That correlated mixing transports momentum — a **Reynolds stress**.`]
        ]],
        ['warn', 'Important', [
          R`$\rho\overline{u'v'}$ depends on the turbulence itself, not just the fluid. We have more unknowns than equations — the **closure problem**. It must be modelled.`
        ]]
      ]
    },
    {
      num: '6.3', title: 'Closing the Model: Eddy Viscosity and Mixing Length',
      blocks: [
        ['para', R`Turbulent mixing behaves like **diffusion** — movement driven by a gradient. So model the Reynolds stress like a viscous stress, with an extra **eddy viscosity** $\epsilon$:`],
        ['eq', [
          ['Eddy viscosity (Boussinesq)', R`\rho\overline{u'v'} = -\rho\,\epsilon\frac{d\bar u}{dr}`, '[Pa]', 'ε has units m²/s like ν.'],
          ['Turbulent pipe momentum balance', R`-\frac{r}{2}\frac{dp}{dx} = -\rho(\nu + \epsilon)\frac{d\bar u}{dr}`, '[Pa]', 'ν = μ/ρ molecular; ε turbulent.'],
          ['Prandtl mixing length', R`\epsilon = l^2\left|\frac{\partial\bar u}{\partial y}\right|, \qquad l = k\,\frac{\partial\bar u/\partial y}{\partial^2\bar u/\partial y^2}`, '[m²/s]', 'l = typical distance an eddy carries momentum.'],
          ['Momentum "diffusion"', R`\tau = -\nu\frac{d(\rho u)}{dy}`, '[Pa]', 'Mixing as diffusion down a momentum gradient.']
        ]],
        ['warn', 'Key Insight', [
          R`$\nu$ is a **fluid** property; $\epsilon$ is a **flow** property — it changes from place to place in the same fluid.`,
          R`Mixing carries high-momentum fluid towards the wall, so turbulent profiles are **much flatter** than the laminar parabola, with a steeper gradient (and higher shear) at the wall.`
        ]]
      ]
    },
    {
      num: '6.4', title: 'Friction Velocity and Wall Scaling',
      blocks: [
        ['para', R`The profile is shaped by both viscous and turbulent stresses and by $\tau_w$ (which for turbulent flow is not set by the wall gradient alone). Dimensional analysis on $\bar u = f(y, \tau_w, \rho, \mu, e, R)$ gives:`],
        ['disp', [ R`\frac{\bar u}{\sqrt{\tau_w/\rho}} = f\!\left(\frac{y\sqrt{\tau_w/\rho}}{\nu},\ \frac{y}{R},\ \frac{e}{R}\right) \tag{6.3}` ]],
        ['eq', [
          ['Friction velocity', R`u^* = \sqrt{\frac{\tau_w}{\rho}}`, '[m/s]', 'Not a real velocity anywhere in the flow — it characterises the wall shear stress.'],
          ['Wall coordinate', R`y^+ = \frac{y u^*}{\nu}`, '[–]', 'A Reynolds number for distance from the wall.'],
          ['Wall stress from u*', R`\tau_w = \rho\,u^{*2}`, '[Pa]', '']
        ]],
        ['list', R`Three scaling ideas (you won't be asked to reproduce the derivation, but know the concepts):`, false, [
          R`**Law of the wall** (Prandtl): very near the wall the viscous sublayer is thin, so $\bar u/u^* = f(yu^*/\nu)$ — independent of $R$.`,
          R`**Velocity defect law** (von Kármán; confirmed by Sir Thomas Stanton, once Professor of Engineering at Bristol): far from the wall, $(u_{max} - \bar u)/u^* = f(y/R)$ — independent of viscosity. Nikuradse showed even wall roughness doesn't affect the core.`,
          R`Where **both** hold (the overlap), the only possible form is a **logarithm**.`
        ]]
      ]
    },
    {
      num: '6.5', title: 'Structure of a Turbulent Boundary Layer',
      blocks: [
        ['svg', 'tf_wall_law', 'Structure of a turbulent boundary layer (semi-log axes): linear viscous sublayer, buffer region, log-law (inner) region and outer region.'],
        ['eq', [
          ['Viscous sublayer (yu*/ν < 5)', R`\frac{\bar u}{u^*} = \frac{y u^*}{\nu}`, '[–]', 'Shear stress constant; viscous stresses dominate because eddies must shrink at the impermeable wall.'],
          ['Log law (30 < yu*/ν < 1000)', R`\frac{\bar u}{u^*} = 2.5\ln\!\left(\frac{yu^*}{\nu}\right) + 5.5 = 5.75\log_{10}\!\left(\frac{yu^*}{\nu}\right) + 5.5`, '[–]', 'A = 2.5 = 1/κ (von Kármán constant κ = 0.4), B = 5.5 (Nikuradse).'],
          ['Log law at the centreline', R`\frac{u_{max}}{u^*} = 2.5\ln\!\left(\frac{Ru^*}{\nu}\right) + 5.5`, '[–]', 'Put y = R.'],
          ['Velocity defect form', R`\frac{u_{max} - \bar u}{u^*} = -2.5\ln\frac{y}{R} = -2.5\ln\!\left(1 - \frac{r}{R}\right)`, '[–]', 'Subtract the two log-law lines.'],
          ['Fully rough wall', R`\frac{\bar u}{u^*} = 5.75\log_{10}\frac{y}{e} + 8.48`, '[–]', 'Same slope as smooth.']
        ]],
        ['list', R`**Regions** (on a log axis of $yu^*/\nu$):`, false, [
          R`**Viscous sublayer**, $yu^*/\nu \lesssim 5$ — linear profile.`,
          R`**Transition (buffer) region**, $5 \lesssim yu^*/\nu \lesssim 30$.`,
          R`**Inner / log-law region**, $30 \lesssim yu^*/\nu \lesssim 1000$ — the law of the wall.`,
          R`**Outer region** — shape depends on geometry and pressure gradient.`
        ]],
        ['warn', 'Key Insight', [
          R`On a **linear** axis almost the whole layer is "outer region" — the sublayer and log region are squeezed against the wall, which is why turbulent profiles look so flat.`,
          R`The log law is accurate but hard to use because you need $u^*$ (i.e. $\tau_w$), which is hard to measure.`
        ]]
      ]
    },
    {
      num: '6.6', title: 'The One-Seventh Power Law',
      blocks: [
        ['para', R`An easier, approximate profile follows from Blasius ($C_f = 0.079Re^{-1/4}$, valid $4000 < Re < 10^5$). Rearranged: $u_m/u^* = 6.99(u^*R/\nu)^{1/7}$. Being dimensionless, Prandtl assumed it holds at any $y$: $\bar u/u^* = 6.99(u^*y/\nu)^{1/7}$. With the experimental result $u_m = 0.8u_{max}$, $u_{max}/u^* = 8.74(u^*R/\nu)^{1/7}$. Dividing eliminates $u^*$:`],
        ['disp', [ R`\boxed{\frac{\bar u}{u_{max}} = \left(\frac{y}{R}\right)^{1/7} = \left(1 - \frac{r}{R}\right)^{1/7}} \tag{6.4}` ]],
        ['svg', 'tf_profiles', 'The 1/7th power law is much flatter than the laminar parabola: turbulent mixing carries momentum towards the wall.'],
        ['eq', [
          ['1/7th law flow rate', R`Q = \frac{49}{60}\pi R^2 u_{max}`, '[m³/s]', 'Integrate (6.4): u_m = 0.817 u_max.'],
          ['Turbulent mean velocity', R`u_m \approx 0.8\,u_{max}`, '[m/s]', 'Compare laminar u_m = 0.5 u_max.']
        ]],
        ['deriv', 'Try it — integrating the 1/7th law', [
          ['m', R`Q = \int_0^R 2\pi r\,u_{max}\left(1-\frac{r}{R}\right)^{1/7}dr,\quad s = 1 - \frac{r}{R}`],
          ['m', R`Q = 2\pi R^2u_{max}\int_0^1 (1-s)s^{1/7}ds = 2\pi R^2u_{max}\left(\frac78 - \frac{7}{15}\right) = \frac{49}{60}\pi R^2u_{max}`]
        ]],
        ['warn', 'Warning', [
          R`**Never** differentiate the 1/7th law to get $\tau_w$: its gradient is **infinite** at the wall. It's a good fit to velocities, but errors are magnified when you take gradients. Use $u^*$ from the log law or $C_f$ from Blasius instead.`
        ]]
      ]
    },
    {
      num: 'Ex 6', title: 'Problem Sheet — Turbulent Boundary Layers', wk: true,
      blocks: [
        ['ex', 'Q1 — friction velocity from the centreline speed', [
          ['t', R`Air flows in a pipe of radius 5 cm with centreline velocity 5 m/s. (a) Use the log law to find $u^*$. (b) Find $\tau_w$ and $C_f$. (c) Compare with Blasius. (d) Why can't you use the 1/7th law for the wall stress? [0.225 m/s; 0.061 Pa, $6.3\times10^{-3}$; $6.1\times10^{-3}$]`],
          ['ans'],
          ['m', R`\frac{u_{max}}{u^*} = 2.5\ln\frac{Ru^*}{\nu} + 5.5 \;\Rightarrow\; \frac{5}{u^*} - 2.5\ln\!\left(\frac{0.05\,u^*}{1.42\times10^{-5}}\right) - 5.5 = 0`],
          ['t', R`(a) Solve numerically (Excel goal-seek, Python fsolve): $u^* = 0.225$ m/s.`],
          ['m', R`\text{(b) } \tau_w = \rho u^{*2} = 0.061\ \text{Pa},\quad u_m = 0.8u_{max} = 4.0\ \text{m/s},\quad C_f = \frac{\tau_w}{\tfrac12\rho u_m^2} = 6.3\times10^{-3}`],
          ['m', R`\text{(c) } Re = \frac{u_m\,2R}{\nu} = 28\,200 \Rightarrow C_f = 0.079Re^{-1/4} = 6.1\times10^{-3}`],
          ['t', R`(d) The 1/7th law has infinite gradient at the wall — an overall approximation, not a description of the sublayer.`]
        ]]
      ]
    }
  ]
}
