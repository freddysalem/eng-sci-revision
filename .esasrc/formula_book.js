// Eng Sci A — Formula Book metadata the notes don't carry (read by tools/fbook_extract.js esa).
// Equations are compiled automatically from every `eq` table, tagged/boxed `disp` and boxed result in the
// Eng Sci A notes inside .src/template.html. This file adds, per topic:
//   triggers — words in a question that point at the topic (from the course formula books' contents pages)
//   assume   — assumptions to state;  spot — one-line "when is it this topic" cue
//   extra    — equations that are course content (handouts / slides / exam formula sheets) but only appear
//              in prose, tables or not at all in the website notes. Each: { title, src, eqs: [[label, tex, units, note]] }
//   extraTopics (bottom) — whole topics with no website note yet (Electric Machines, Week 11).
// Ids are topic + hash of the tex, so editing a label or note never breaks a saved book; editing the tex does.
{
  // ======================= MECHANICS =======================
  forces: {
    triggers: 'r × F · Fd · couple · resultant · Varignon · distributed load · centre of mass · "draw the FBD" · ladder / leaning body · 3D force from coordinates',
    assume: 'rigid body · static equilibrium · loads act through stated points',
    spot: 'find a reaction, a moment about a point, or replace a force system by a force–couple'
  },
  friction: {
    triggers: 'on the point of slipping · tips or slips · rope over a drum / capstan · slope angle · work done · mechanism · "using virtual work" · stability of equilibrium · potential energy',
    assume: 'F = μsN only AT impending slip · frictionless pins (virtual work) · small virtual displacement δλ',
    spot: 'limiting friction, belt/rope friction, or an equilibrium position found by work or energy'
  },
  kinematics: {
    triggers: 'SUVAT · a = f(v) or f(s) · projectile · launched at angle α · circular motion · radius of curvature · relative velocity · polar / intrinsic coordinates · radar tracking',
    assume: 'constant a (SUVAT only) · no air resistance (projectile) · particle (no rotation)',
    spot: 'position, velocity or acceleration of a point with no forces asked for',
    extra: [{
      title: 'Projectile motion', src: 'MECH W4 lecture (ballistic motion) · course formula book',
      eqs: [
        ['Horizontal', R`v_x = v_0\cos\alpha,\qquad x = v_0 t\cos\alpha`, 'm/s, m', 'No drag: a_x = 0, so the horizontal velocity never changes.'],
        ['Vertical', R`v_y = v_0\sin\alpha - gt,\qquad y = v_0 t\sin\alpha - \tfrac{1}{2}gt^2`, 'm/s, m', 'Free fall a_y = −g; the two directions share only t.'],
        ['Time to apex', R`t_{top} = \frac{v_0\sin\alpha}{g}`, 's', 'At the top v_y = 0.'],
        ['Range on level ground', R`R = \frac{v_0^2\sin 2\alpha}{g}`, 'm', 'Maximum at α = 45°; flight time is 2t_top.']
      ]
    }]
  },
  dynamics: {
    triggers: 'F = ma · free-body diagram + acceleration · satellite · orbit · orbital period · geostationary · chain / rope sliding off a table',
    assume: 'point mass · circular orbit · inertial frame',
    spot: 'forces cause an acceleration of a particle (no rotation of a body)',
    extra: [{
      title: 'Circular orbit', src: 'MECH H03 slides (Circular Orbit II)',
      eqs: [
        ['Orbital period', R`T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}`, 's', 'Period grows with altitude; geostationary T = 24 h (r = R_E + 35 866 km).'],
        ['Gravitational constant', R`G = 6.67\times10^{-11}\ \mathrm{N\,m^2\,kg^{-2}}`, '', 'GM_E = gR_E² is often quicker than G and M_E.']
      ]
    }]
  },
  kinematics_rigid: {
    triggers: 'rolls without slipping · instantaneous centre · two points on the same body · angular SUVAT · gears / belts · ω × r',
    assume: 'rigid body · no slip at the contact point',
    spot: 'velocity or acceleration of a point on a rotating or rolling body'
  },
  dynamics_rigid: {
    triggers: 'I about O · parallel axis · radius of gyration · compound pendulum · frequency of small oscillations · ΣM = Iα',
    assume: 'small angles (sin θ ≈ θ) for pendulum frequencies · rigid body',
    spot: 'a moment makes a body spin up, or a body swings about a pivot',
    extra: [{
      title: 'Standard moments of inertia', src: 'MECH H05 (moment of inertia table)',
      eqs: [
        ['Point mass', R`I = mr^2`, 'kg m²', 'Mass m at distance r from the axis.'],
        ['Slender rod, about centre', R`I_G = \tfrac{1}{12}mL^2`, 'kg m²', 'Axis ⊥ to the rod through G.'],
        ['Slender rod, about one end', R`I_{end} = \tfrac{1}{3}mL^2`, 'kg m²', 'Parallel axis: mL²/12 + m(L/2)².'],
        ['Disc / solid cylinder', R`I_G = \tfrac{1}{2}mR^2`, 'kg m²', 'About its own axis.'],
        ['Solid sphere', R`I_G = \tfrac{2}{5}mR^2`, 'kg m²', 'About any diameter.'],
        ['Rectangular plate', R`I_G = \tfrac{1}{12}m(b^2 + h^2)`, 'kg m²', 'Axis ⊥ to the plate through its centre.'],
        ['Simple pendulum', R`\omega_n = \sqrt{\frac{g}{L}},\qquad f = \frac{1}{2\pi}\sqrt{\frac{g}{L}}`, 'rad/s, Hz', 'Point mass on a light string; the compound-pendulum result with I_O = mL², d = L.']
      ]
    }]
  },
  inertial_loads: {
    triggers: 'stress in an accelerating rod / cable · rotating blade · tension varies along the length · inertial (d’Alembert) force · bending moment from acceleration',
    assume: 'uniform rod · rigid-body acceleration · mass per unit length m/L',
    spot: 'internal force or stress inside a body that is accelerating or spinning'
  },
  energy: {
    triggers: '"using energy methods" · speed after falling / rolling downhill · spring compressed by · work–energy · power · conservative force',
    assume: 'no friction or impact losses (else add W_lost) · rolling without slip does no work',
    spot: 'speeds at two positions with no time asked for'
  },
  momentum: {
    triggers: 'impact · impulse · coefficient of restitution · "they stick together" · explosion / gun recoil · variable mass · rocket · conveyor',
    assume: 'no external impulse during the impact · impulsive forces ≫ weight',
    spot: 'two bodies collide or separate, or a force acts for a known time'
  },
  angular_momentum: {
    triggers: 'spins up / spins down · skater pulls arms in · moment of momentum · central force · ball strikes a pivoted bar · gyroscope / precession',
    assume: 'no external moment about the chosen point (for conservation) · rigid bodies',
    spot: 'rotation speed changes with no external moment, or an impact on a pivoted body'
  },

  // ======================= ELECTRICAL =======================
  basic_elec: {
    triggers: 'power dissipated · energy used · kWh · resistance of a wire · resistivity · node / branch / loop · charge flow',
    assume: 'ideal lumped components · passive sign convention',
    spot: 'one component: V, I, P or energy from the basic laws'
  },
  dc_analysis: {
    triggers: 'find the current in… · node voltages · KCL / KVL · series / parallel · voltage divider · current divider · Wheatstone',
    assume: 'choose and keep a sign convention · ideal sources',
    spot: 'a DC network solved by reduction, dividers or nodal analysis'
  },
  mesh_equiv: {
    triggers: 'mesh currents · Thévenin / Norton equivalent · open-circuit voltage · short-circuit current · maximum power to the load · source transformation',
    assume: 'linear network · ideal sources',
    spot: 'replace a network by one source + one resistor, or find the load for maximum power'
  },
  batteries: {
    triggers: 'state of charge · capacity in Ah · C-rate · internal resistance · terminal voltage · XsYp pack · runtime · energy density',
    assume: 'identical cells · constant current discharge · linear OCV–SoC where given',
    spot: 'cell or pack voltage, capacity, energy or run time'
  },
  capacitors: {
    triggers: 'steady state · energy stored · series / parallel capacitors · parallel plates · dielectric · charging · piezo-electric · force between plates',
    assume: 'ideal C · circuit settled (C = open circuit at DC)',
    spot: 'charge, voltage, current or energy of a capacitor'
  },
  inductors: {
    triggers: 'flux linkage · Faraday / Lenz · induced EMF · coil of N turns · transformer · turns ratio · force on a wire · Lorentz',
    assume: 'ideal L and ideal transformer · uniform B · circuit settled (L = short circuit at DC)',
    spot: 'induced voltage, inductance, energy in a coil, or a transformer'
  },
  ac_analysis: {
    triggers: 'leads / lags · phasor · impedance · reactance · magnitude and phase · complex arithmetic · resonance · RLC',
    assume: 'sinusoidal steady state · one frequency',
    spot: 'a circuit driven by a sinusoid: currents, voltages and phase angles'
  },
  ac_power: {
    triggers: 'real / reactive / apparent power · rms · power factor · power factor correction · VA, VAr · complex power',
    assume: 'pure sinusoid (for the √2 rule) · rms values throughout',
    spot: 'power in an AC circuit or the capacitor needed to correct the power factor'
  },

  // ======================= STRUCTURES =======================
  struct_statics: {
    triggers: 'equilibrium · resultant · moment about a point · cables / rigid bar · ΣF = 0, ΣM = 0',
    assume: 'static · rigid bodies · weightless members unless stated',
    spot: 'forces in a statically determinate structure from equilibrium'
  },
  struct_supports: {
    triggers: 'reactions · pin / roller / fixed support · UDL · triangular load · "check stability first" · degree of indeterminacy',
    assume: 'static · rigid · distributed load acts at its centroid',
    spot: 'support reactions of a beam or frame'
  },
  struct_trusses: {
    triggers: 'pin-jointed · force in member XY · tension or compression · method of joints · method of sections · determinate / mechanism · b + k = 2j',
    assume: 'two-force members · loads only at the joints · frictionless pins',
    spot: 'member forces in a truss'
  },
  struct_stress: {
    triggers: 'normal / shear / bearing stress · strain · Young’s modulus · Poisson · generalised Hooke · volumetric / bulk · heated bar · restrained ends · compound bar · self-weight',
    assume: 'linear elastic range · uniform stress over the section · small strains',
    spot: 'stress, strain or change in length of a bar or block',
    extra: [{
      title: 'Thermal and self-weight loading', src: 'STR slides (thermal stress) · Structures equation sheet',
      eqs: [
        ['Free thermal expansion', R`\Delta L = \alpha L_0\,\Delta T,\qquad \varepsilon_t = \alpha\,\Delta T`, 'm, —', 'A bar free to expand has thermal strain but no stress (σ = 0).'],
        ['Fully restrained bar', R`\varepsilon_t + \frac{\sigma}{E} = 0 \;\Rightarrow\; \sigma = -E\alpha\,\Delta T`, 'Pa', 'Ends held: the mechanical strain cancels the thermal strain (compressive when heated).'],
        ['Bar hanging under its own weight', R`\sigma(x) = \rho g x,\qquad \delta = \frac{\rho g L^2}{2E}`, 'Pa, m', 'x measured up from the free end; maximum stress ρgL at the support.']
      ]
    }]
  },
  struct_torsion: {
    triggers: 'twist angle · torque · hollow vs solid shaft · thin-walled tube · power transmitted at rpm · polar second moment J · compound shaft',
    assume: 'circular section · constant T along a segment · linear elastic · plane sections stay plane',
    spot: 'shear stress or twist in a shaft carrying a torque'
  },
  struct_areas: {
    triggers: 'centroid · first moment of area · second moment · I-section / T-section · parallel axis · section modulus · composite section',
    assume: 'composite of standard shapes · axes through the centroid',
    spot: 'ȳ, I or Z of a cross-section (usually step 1 of a bending question)',
    extra: [{
      title: 'Standard sections', src: 'Structures equation sheet · course formula book',
      eqs: [
        ['Triangle (about its centroid)', R`I = \frac{bh^3}{36},\qquad A = \frac{bh}{2}`, 'm⁴', 'Centroid h/3 above the base.'],
        ['Composite section', R`I = \sum\left(\frac{b_i h_i^3}{12} + A_i d_i^2\right)`, 'm⁴', 'd_i = distance from each part’s centroid to the section centroid.']
      ]
    }]
  },
  struct_sfbmd: {
    triggers: 'draw the shear force / bending moment diagram · max moment · point of zero shear · point of contraflexure · UDL · point load',
    assume: 'sign convention stated and kept · statically determinate beam',
    spot: 'F(x) and M(x) along a beam',
    extra: [{
      title: 'Standard maximum moments', src: 'course formula book (beam standard cases)',
      eqs: [
        ['Simply supported, central point load', R`M_{max} = \frac{PL}{4}`, 'N m', 'At mid-span.'],
        ['Simply supported, UDL', R`M_{max} = \frac{qL^2}{8}`, 'N m', 'At mid-span, where F = 0.'],
        ['Cantilever, end point load', R`M_{max} = PL`, 'N m', 'At the fixed end.'],
        ['Cantilever, UDL', R`M_{max} = \frac{qL^2}{2}`, 'N m', 'At the fixed end.']
      ]
    }]
  },
  struct_bending: {
    triggers: 'bending stress at y · neutral axis · max tensile / compressive stress · radius of curvature · section modulus · select a section',
    assume: 'plane sections remain plane · linear elastic · pure bending',
    spot: 'normal stress in a beam from M',
    extra: [{
      title: 'Section modulus', src: 'course formula book',
      eqs: [['Maximum bending stress', R`\sigma_{max} = \frac{M y_{max}}{I} = \frac{M}{Z},\qquad Z = \frac{I}{y_{max}}`, 'Pa', 'Pick a section with Z ≥ M_max / σ_allow.']]
    }]
  },
  struct_shear: {
    triggers: 'shear stress at the neutral axis · flange vs web · τ = FQ/(Ib) · first moment of area above the cut',
    assume: 'linear elastic · shear stress uniform across the width b',
    spot: 'shear stress distribution in a beam section'
  },
  struct_defl: {
    triggers: 'deflection at the tip / mid-span · slope of the beam · double integration · boundary conditions · superposition',
    assume: 'small deflections · linear elastic · EI constant',
    spot: 'how far a beam moves under load',
    extra: [{
      title: 'Standard deflections (exam formula sheet)', src: 'STR exam formula sheet — Deflections',
      eqs: [
        ['Cantilever, end point load', R`w_{max} = \frac{PL^3}{3EI}`, 'm', 'At the free end.'],
        ['Cantilever, UDL', R`w_{max} = \frac{qL^4}{8EI}`, 'm', 'At the free end.'],
        ['Simply supported, central point load', R`w_{max} = \frac{PL^3}{48EI}`, 'm', 'At mid-span.'],
        ['Simply supported, UDL', R`w_{max} = \frac{5qL^4}{384EI}`, 'm', 'At mid-span.']
      ]
    }]
  },
  struct_buckling: {
    triggers: 'strut · column · critical load · Euler · effective length · slenderness · eccentric load · pin-ended / fixed',
    assume: 'perfectly straight, elastic, axially loaded (Euler) · small deflections',
    spot: 'load at which a compression member buckles, or stress from an off-centre load'
  },

  // ======================= EXTRA TOPICS (no website note yet) =======================
  extraTopics: [{
    key: 'elec_machines', area: 'elec', after: 'ac_power', name: 'Electric Machines',
    triggers: 'DC motor · brushed machine · back-EMF · machine constant k_e · stall torque · no-load speed · torque–speed line · motoring / generating · quadrants',
    assume: 'steady state (L_a di/dt = 0) · friction neglected unless given · k_e in V s/rad = N m/A',
    spot: 'torque, speed or current of a DC machine on a supply',
    extra: [{
      title: 'Brushed DC machine', src: 'ELEC W11 live session (Electrical Machines) · course formula book',
      eqs: [
        ['Armature equation', R`V_a = i_a R_a + L_a\frac{di_a}{dt} + \varepsilon`, 'V', 'Steady state: V_a = i_a R_a + ε. Motoring when ε < V_a, generating when ε > V_a.'],
        ['Torque constant', R`\tau_{EM} = k_e\, i_a`, 'N m', 'Torque ∝ armature current.'],
        ['Back-EMF', R`\varepsilon = k_e\,\omega_r`, 'V', 'EMF ∝ speed — the same constant k_e (V s/rad).'],
        ['Machine constant (two coils)', R`\tau_{EM} = 2\cdot 2\,B\,l\,r\,N\,i`, 'N m', 'Lorentz force BIl on both sides of 2 series coils of N turns at radius r.'],
        ['Stall torque', R`\tau_{stall} = \frac{k_e V_a}{R_a}`, 'N m', 'ω = 0, so ε = 0 and i_a = V_a/R_a.'],
        ['No-load speed', R`\omega_0 = \frac{V_a}{k_e}`, 'rad/s', 'τ = 0, so i_a = 0 and ε = V_a.'],
        ['Torque–speed line', R`\tau_{EM} = \frac{k_e V_a}{R_a} - \frac{k_e^2}{R_a}\,\omega_r`, 'N m', 'Straight line from stall torque to no-load speed; rpm × 2π/60 → rad/s.'],
        ['Mechanical torque balance', R`\tau_{EM} = J\frac{d\omega}{dt} + b\,\omega + \tau_{load}`, 'N m', 'At steady speed dω/dt = 0.']
      ]
    }]
  }]
}
