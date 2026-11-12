// Thermofluids exam formula book — per-topic metadata the notes don't carry.
// Equations are compiled automatically from every `eq` table and tagged `disp` in the notes;
// triggers come from each note's `triggers`; watch-outs from its Warning / Important callouts,
// method from its "When to use" callouts. This file adds the assumptions to state and the
// one-line "spot it" cue for the contents page.
{
  tf_energy:     { assume: 'steady · incompressible (Bernoulli) · along a streamline · inviscid (no losses) · uniform properties at each inlet/outlet (SFEE)', spot: 'flow rate from a profile, Pitot / manometer reading, jet force, shaft work' },
  tf_dimensions: { assume: 'every equation is dimensionally homogeneous · consistent SI units', spot: 'dimensions of a quantity, named numbers (Re, Fr, Ma, Pr…), similarity / scale models' },
  tf_dimanal:    { assume: 'all relevant variables listed · repeating variables span every dimension and form no Π themselves', spot: '"using dimensional analysis", Buckingham Π, number of groups, model testing' },
  tf_hydraulics: { assume: 'steady · fully developed · incompressible · straight circular pipe of constant D', spot: 'pressure drop or head loss in a pipe, wall shear stress, friction factor, flow curve' },
  tf_laminar:    { assume: 'Re < 2000 (pipe) · Newtonian · no-slip at walls · fully developed · steady', spot: 'Poiseuille / Couette flow, viscometer, film flow, lubrication, parabolic profile' },
  tf_turbulent:  { assume: 'Re > ~4000 · time-averaged (Reynolds) quantities · smooth wall for the log law · 1/7th power law approximate', spot: 'velocity profile in turbulent flow, u*, y⁺, log law, boundary-layer thickness' },
  tf_moody:      { assume: 'fully developed turbulent flow · roughness e/D from tables · watch the f (Darcy) vs C_f (Fanning) convention', spot: 'Moody chart, Colebrook / Haaland, rough vs smooth pipe, finding D or Q (iteration)' },
  tf_networks:   { assume: 'steady · incompressible · minor-loss K from tables · ΣQ = 0 at every node, Σh = 0 round every loop', spot: 'bends, valves, expansions, pipes in series/parallel, pump + system curve, Hardy Cross' },
  tf_waves:      { assume: 'weak (isentropic) waves · perfect gas · air γ = 1.4, R = 287 J/kg K', spot: 'speed of sound, Mach number, Mach cone, stagnation temperature / pressure' },
  tf_nozzles:    { assume: 'steady 1-D isentropic flow · adiabatic · perfect gas · reservoir (stagnation) conditions upstream', spot: 'converging nozzle, critical pressure ratio 0.528, choked mass flow, tank emptying' },
  tf_laval:      { assume: 'isentropic everywhere except across shocks · throat choked (M = 1, A = A*) for supersonic flow', spot: 'C–D / Laval nozzle, rocket, supersonic wind tunnel, area ratio A/A*, back pressure regimes' },
  tf_shocks:     { assume: 'normal shock: adiabatic (T₀ constant) but NOT isentropic (p₀ falls) · perfect gas', spot: 'normal shock, M₁ → M₂, Pitot in supersonic flow, shock tube, moving / travelling shock' }
}
