#!/usr/bin/env python3
"""Insert ['svg', key, caption] blocks/lines into the Thermofluids notes at precise anchors.
Idempotent: a placement is skipped if that key is already present in that section."""
import os, re, sys, json, subprocess, glob
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NOTES = os.path.join(ROOT, '.tfsrc', 'notes')

def q(s): return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

# (file, section num, op, anchor, key, caption)
P = [
 # 1 Energy, fluids & conservation
 ('01', '1.2', 'afterblock', '"A liquid or a gas" is descriptive', 'tf_solid_fluid', 'Under a constant shear stress a solid strains by a fixed amount and stops; a fluid keeps deforming for as long as the stress acts.'),
 ('01', '1.4', 'before', "['deriv', 'Derivation — flow rate through a pipe'", 'tf_ring', 'u depends only on r, so integrate over thin rings: a ring of radius r and thickness δr has area ≈ 2πr δr (a rectangle of length 2πr).'),
 ('01', '1.6', 'afterblock', 'A flow entering a pipe with a uniform velocity', 'tf_entry', 'No slip slows the fluid at the walls; boundary layers grow inwards until they meet — after the entry length the profile stops changing (fully developed).'),
 ('01', '1.8', 'replace', "['@img', 'pitot']", 'tf_pitot', 'Pitot-static tube: the nose hole senses the stagnation pressure p₀, the side holes the static pressure p_s; the manometer reads p₀ − p_s = ρ_m g ΔH.'),
 ('01', '1.8', 'exafter', 'A tile of thickness $t = 10$ mm', 'tf_rooftile', 'Wind over the roof lowers the pressure above the tile to p_a − ½ρu²; the still air underneath stays at p_a.'),
 ('01', '1.10', 'exafter', 'A water jet ($d = 0.20$ m', 'tf_pelton', 'Riding with the bucket makes it steady: the jet arrives at v₁ − u and leaves backwards at 50° to the reverse direction.'),
 # 2 Building blocks
 ('02', '2.4', 'afterblock', '"Similar" has a specific technical meaning', 'tf_similarity', 'A model is only useful if it is dynamically similar: same shape, same streamline pattern and the same ratios of forces at corresponding points.'),
 ('02', '2.5', 'before', "['deriv', 'Example — pipe flow (used throughout the unit)'", 'tf_pipe_vars', 'The seven variables of pipe flow: what you want (Δp), what you set (u_m), the fluid (ρ, μ) and the pipe (D, l, e).'),
 # 3 DA method
 ('03', '3.2', 'afterblock', '**Problem:** given a mean speed $u_m$', 'tf_pipe_vars', 'Step 1 of the recipe: sketch the problem and sort the variables into what you want, what you regulate, fluid properties and pipe properties.'),
 ('03', '3.2', 'afterblock', 'is an **Euler-type** number (pressure : inertia)', 'tf_cf_re', 'Data collapse: every smooth pipe falls on one C_f–Re curve — laminar 16/Re, a transition band (Re ≈ 2000–4000), then turbulent (Blasius dashed).'),
 ('03', '3.4', 'afterblock', 'G.I. Taylor (1950) estimated the yield', 'tf_blast', 'With only one Π, E t²/ρR⁵ is a constant, so R^{5/2} plotted against t from the photographs is a straight line whose slope gives E.'),
 ('03', '3.5', 'afterblock', 'Heat transfer from a fluid flowing through a pipe', 'tf_convection_cv', 'Forced convection in a pipe: the heat transfer coefficient h depends on the flow (U, l), the fluid (ρ, μ, C_p, k) and the temperature θ.'),
 ('03', '3.5', 'afterblock', '\\boxed{Nu = f(Re,\\ Pr) \\qquad', 'tf_nu_collapse', 'Plotting Nu Pr^-0.4 against Re collapses the data onto one line; in the turbulent regime Nu = 0.023 Re^0.8 Pr^0.4.'),
 # 4 Intro to hydraulics
 ('04', '4.1', 'afterblock', '\\boxed{\\tau = \\mu\\frac{du}{dy}}', 'tf_shear_layer', 'Shear flow type 1: two streams of different speed side by side. The velocity gradient across the shear layer generates viscous stress.'),
 ('04', '4.1', 'afterblock', 'Viscosity slows the fluid next to the wall', 'tf_boundary_layer', 'Shear flow type 2: a solid boundary. No slip forces u = 0 at the wall; the boundary layer (u < u∞) grows with distance downstream.'),
 ('04', '4.2', 'afterblock', 'In 1839 **Hagen** found', 'tf_hagen', 'Hagen (1839): pressure drop rises linearly with speed at low speed, then abruptly switches to Δp ∝ V^1.75 — the transition to turbulence.'),
 ('04', '4.2', 'afterblock', 'In 1839 **Hagen** found', 'tf_reynolds_dye', "Reynolds's dye experiment (1883): a straight filament in laminar flow, rapid dispersal in turbulent flow, intermittent bursts in transitional flow."),
 ('04', '4.2', 'afterblock', 'The velocity profiles differ', 'tf_profiles', 'Same flow rate, three profiles: inviscid (uniform), laminar (parabola, u_max = 2u_m), turbulent (much flatter, ≈ 1/7 power law).'),
 ('04', '4.3', 'before', "['deriv', 'Derivation — pressure gradient in a pipe'", 'tf_pipe_incline', 'Force balance on a slice δl of an inclined pipe: the net pressure force (on the cross-section) balances wall friction τ_w (on the wall area) plus the weight component.'),
 ('04', '4.4', 'afterblock', "['Laminar flow', R`C_f = \\frac{16}{Re}`", 'tf_cf_re', 'The smooth-pipe flow curve: C_f = 16/Re (laminar), transition near Re ≈ 2000–4000, then turbulent; Blasius 0.079 Re^-1/4 fits 4000 < Re < 10⁵.'),
 ('04', '4.5', 'afterblock', '\\boxed{D_H = \\frac{4 \\times \\text{flow area}}', 'tf_hydraulic_d', 'An undulating wall adds wetted perimeter, so friction is as if the flow were in a narrower circular pipe of diameter D_H.'),
 ('04', '4.6', 'exafter', 'Needle $D = 0.21$ mm, $L = 25$ mm', 'tf_syringe', 'The barrel is wide, so almost all of the pressure drop is laminar friction in the needle.'),
 ('04', 'Ex 4', 'exafter', 'A 1 cm² floating element measures wall shear', 'tf_shear_balance', 'Floating-element balance: the boundary layer drags the flush disc sideways, bending the cantilever.'),
 ('04', 'Ex 4', 'exafter', 'Laminar flow in a 25 mm pipe has $u = 1.8 - cr^2$', 'tf_ring', 'Integrate the profile over rings of area 2πr dr; the wall stress comes from the slope of u(r) at r = R.'),
 ('04', 'Ex 4', 'exafter', 'Maximum thumb force 10 N, plunger friction 5 N', 'tf_syringe', 'Net plunger force over the barrel area gives the barrel pressure; the needle carries the laminar pressure drop.'),
 ('04', 'Ex 4', 'exafter', 'Wind speed rises linearly from 0 at the ground to 10 m/s at 20 m', 'tf_chimney', 'Still air in the room is at p₀; wind over the chimney top lowers the pressure there, driving the draught up the flue.'),
 # 5 Laminar
 ('05', '5.2', 'before', "['deriv', 'Derivation — velocity profile'", 'tf_poiseuille_pipe', 'Cylindrical control volume of radius r on the centreline: the pressure difference on its ends balances the shear stress τ on its curved surface.'),
 ('05', '5.3', 'afterblock', 'Two stationary plates a distance $H$ apart', 'tf_plates', 'Small control volume between plates (origin on the lower wall): pressure on its ends, shear τ and τ + (dτ/dy)δy on its faces.'),
 ('05', '5.4', 'afterblock', '**Free-surface boundary condition:**', 'tf_film', 'Gravity drives a film down a vertical wall: no slip at the wall, zero velocity gradient at the free surface, fastest flow at the surface.'),
 ('05', '5.5', 'afterblock', 'No pressure gradient; the upper plate moves at $V$', 'tf_couette', 'Couette flow: the moving upper plate drags the fluid; with no pressure gradient the shear stress is uniform and the profile is a straight line.'),
 ('05', '5.5', 'afterblock', '\\boxed{u = \\frac{1}{2\\mu}\\left(-\\frac{dp}{dx}\\right)\\left(Hy - y^2\\right) + \\frac{Vy}{H}', 'tf_couette_poiseuille', 'Viscous flow is linear, so solutions add: Poiseuille (pressure-driven parabola) + Couette (moving-wall line) = the combined profile.'),
 ('05', '5.6', 'afterblock', 'A **spindle viscometer** is a Couette flow in cylindrical geometry', 'tf_viscometer', 'Spindle viscometer: section (left) and top view (right). The spindle (radius a) turns at Ω inside the fixed cup (radius b); the torque gives μ.'),
 ('05', '5.7', 'afterblock', '**Slipper (Michell) bearing:**', 'tf_slipper', 'The moving plate drags lubricant into the converging wedge, building pressure that holds the slipper up.'),
 ('05', '5.7', 'afterblock', "['Journal bearing oil flow'", 'tf_journal', 'Journal bearing: the shaft (centre C) runs eccentrically in the bush (centre O); the converging oil film generates the load-carrying pressure.'),
 ('05', 'Ex 5', 'exafter', 'Justify $Q = \\frac{h^3}{12\\mu}', 'tf_plates', 'A very narrow rectangle behaves like two infinite parallel plates a distance h apart, away from its short ends.'),
 ('05', 'Ex 5', 'exafter', 'Show that for laminar flow between radii $r_1$ and $r_2$', 'tf_annulus', 'Ring control volume in the annulus: shear acts on both its inner and outer curved faces.'),
 ('05', 'Ex 5', 'exafter', 'A square piston (side $D$, length $L$) moves at $U_p$', 'tf_dashpot', 'The piston imposes the flow: the liquid it displaces must escape backwards through the gap h around it.'),
 ('05', 'Ex 5', 'exafter', '1200 kg/h of water runs down a vertical plane', 'tf_film', 'Film of thickness h on a vertical wall: mean velocity from momentum, then thickness from the mass flow.'),
 ('05', 'Ex 5', 'exafter', 'Show that a film of depth $H$ on a plane at $\\alpha$', 'tf_film_incline', 'On an incline only the component of gravity along the slope, ρg sin α, drives the film.'),
 ('05', 'Ex 5', 'exafter', 'Mercury ($\\nu = 10^{-7}$ m²/s) flows under gravity', 'tf_mercury_belt', 'Gravity drives a Poiseuille flow down the channel; the moving belt adds a Couette flow.'),
 # 6 Turbulent
 ('06', '6.1', 'afterblock', 'Following R. W. Stewart', 'tf_reynolds_dye', 'Turbulence mixes efficiently: in Reynolds’s experiment the dye filament is torn apart by eddies of many sizes.'),
 ('06', '6.2', 'afterblock', '\\boxed{u = \\bar u + u\', \\qquad', 'tf_reynolds_decomp', "Reynolds's model: the velocity signal u = time-mean ū + fluctuation u′, where u′ averages to zero."),
 ('06', '6.5', 'replace', "['@img', 'tbl_structure']", 'tf_wall_law', 'Structure of a turbulent boundary layer (semi-log axes): linear viscous sublayer, buffer region, log-law (inner) region and outer region.'),
 ('06', '6.6', 'afterblock', '\\boxed{\\frac{\\bar u}{u_{max}} = \\left(\\frac{y}{R}\\right)^{1/7}', 'tf_profiles', 'The 1/7th power law is much flatter than the laminar parabola: turbulent mixing carries momentum towards the wall.'),
 # 7 Moody
 ('07', '7.3', 'afterblock', 'Roughness makes **no difference to laminar flow**', 'tf_roughness_regimes', 'Roughness elements against the viscous sublayer: buried (smooth), poking through (transitional), or destroying it (fully rough).'),
 ('07', '7.3', 'afterblock', '<b>Hydraulically smooth</b>', 'tf_smooth_rough', 'Roughness shifts the log-law part of the velocity profile downwards (more friction); the slope stays the same.'),
 ('07', '7.4', 'exafter', 'Oil ($\\rho = 900$, $\\mu = 9\\times10^{-3}$), $Q = 0.2$ m³/s', 'tf_pipe_incline', 'Uphill flow: the pressure must overcome wall friction and the weight component ρgL sin θ.'),
 # 8 Networks
 ('08', '8.1', 'afterblock', 'Any time a flow must **change direction**', 'tf_separation', 'Rising pressure decelerates the near-wall fluid until du/dy = 0 at the wall (separation); downstream the flow reverses and a wake forms.'),
 ('08', '8.3', 'afterblock', '\\boxed{\\Delta p = \\tfrac12\\rho(u_1 - u_2)^2', 'tf_expansion', 'Sudden expansion: the jet from the small pipe spreads out, trapping recirculating vortices in the corners — that dissipation is the loss.'),
 ('08', '8.3', 'afterblock', 'A **sudden contraction** is less certain', 'tf_contraction', 'Sudden contraction: the flow necks down to the vena contracta A_c, then re-expands to fill the small pipe — most of the loss is in the re-expansion.'),
 ('08', '8.5', 'afterblock', 'Series</th>', 'tf_series', 'Pipes in series: the same flow passes through each pipe, so the pressure drops add.'),
 ('08', '8.5', 'afterblock', 'Series</th>', 'tf_parallel', 'Pipes in parallel: every branch sees the same pressure drop, so the flow rates add.'),
 ('08', '8.5', 'exafter', '20 L/min of liquid ($\\rho = 1000$', 'tf_chem_feed', 'Equal flows need equal pressure drops along both legs, which sets the length of the new spur.'),
 ('08', '8.6', 'afterblock', 'A large tank (liquid depth $L_2 = 0.30$ m', 'tf_draining_tank', 'Draining tank: the liquid head plus the weight of the liquid in the vertical pipe drives the flow out of the bottom.'),
 ('08', 'Ex 8', 'exafter', 'Water is pumped 30 m uphill between two large tanks', 'tf_pump_tanks', 'Pump head = major loss + every minor loss + the 30 m lift.'),
 ('08', 'Ex 8', 'exafter', 'Return to the chimney:', 'tf_chimney', 'Same chimney, now with entrance, exit and two changes of direction added to the friction loss.'),
 ('08', 'Ex 8', 'exafter', 'Tank at +50 kPa gauge feeds a bath (D)', 'tf_hot_water', 'Hot-water network: thick lines 22 mm, thin lines 15 mm; each tap ξ = 2, each 90° bend ξ = 1.'),
 # 9 Waves
 ('09', '9.1', 'afterblock', 'A wave moving at constant speed $a$ into still gas', 'tf_galilean', 'Galilean transformation: adding the wave speed a (right to left) to everything makes the wave stationary, so the flow through it is steady.'),
 ('09', '9.2', 'before', "['deriv', 'Derivation — speed of a weak wave'", 'tf_weak_wave', 'Weak wave made stationary: gas enters at a and leaves at a − δu with p + δp, ρ + δρ. Mass and momentum balances on the control volume give a.'),
 ('09', '9.4', 'afterblock', 'A small moving object sends out weak waves continuously', 'tf_wavefronts', 'Subsonic: the waves stay ahead of the object. Supersonic: the object outruns its waves, which pile up on a Mach cone with sin θ = 1/M.'),
 ('09', '9.6', 'afterblock', '\\boxed{\\frac{p_0 - p}{\\tfrac12\\rho u^2} = 1', 'tf_cp_mach', 'Compressibility error relative to Bernoulli: about 1% at M = 0.2 and 2% at M = 0.3, growing rapidly towards M = 1.'),
 # 10 Nozzles
 ('10', '10.1', 'afterblock', 'Steady, inviscid, compressible flow through a horizontal duct', 'tf_duct_cv', 'Thin control volume in a varying-area duct: end pressures, the pressure on the tapered sides, and the change in momentum flux.'),
 ('10', '10.2', 'afterblock', 'Converging (dA &lt; 0)', 'tf_cd_nozzle', 'To go supersonic: converge to M = 1 at the throat, then diverge — supersonic flow speeds up as the area increases.'),
 ('10', '10.3', 'afterblock', 'A converging nozzle fed from a **large reservoir**', 'tf_reservoir_nozzle', 'Converging nozzle from a large reservoir: lowering the back pressure speeds up the throat flow until M_t = 1 — then it is choked.'),
 ('10', '10.4', 'exafter', 'Methane and air are metered through choked nozzles', 'tf_mixer', 'Each gas passes a regulator (setting p₀) and a choked nozzle, so its mass flow depends only on its own p₀ and T₀.'),
 ('10', '10.4', 'exafter', 'A 0.1 m³ tyre at 0.3 MPa', 'tf_tank_leak', 'The hole stays choked throughout, so the mass flow out is proportional to the tyre pressure.'),
 ('10', 'Ex 10', 'exafter', 'Reservoir $7.0\\times10^5$ Pa, 40 °C; exit area 0.025 m²', 'tf_reservoir_nozzle', 'Compare the back pressure with 0.528 p₀ to decide whether the nozzle is choked.'),
 ('10', 'Ex 10', 'exafter', 'A well-insulated 6 m³ tank at', 'tf_tank_leak', 'Insulated and emptying fast: the gas left in the tank expands isentropically while the hole stays choked.'),
 # 11 Laval
 ('11', '11.1', 'afterblock', 'So a **converging–diverging (Laval) nozzle**', 'tf_cd_nozzle', 'Laval nozzle: subsonic in the converging part, M = 1 at the throat (area A*), supersonic in the diverging part when the back pressure is low enough.'),
 ('11', '11.2', 'replace', "['@img', 'laval_regimes']", 'tf_laval_regimes', 'Pressure along the nozzle as the back pressure falls (computed from the area–Mach and normal-shock relations): all subsonic → shock inside → over-expanded → design (p₃) → under-expanded.'),
 ('11', '11.3', 'exafter', 'Air, $\\gamma = 1.4$, $R = 287$; throat area 100 mm²', 'tf_laval_tap', 'The measuring device compares the static pressure at the throat with the stagnation pressure at the outlet.'),
 ('11', '11.3', 'exafter', 'Combustion chamber $p_0 = 5.5$ MPa', 'tf_cd_nozzle', 'Rocket nozzle: chamber conditions p₀, T₀; choked throat; supersonic exit matched to atmospheric pressure.'),
 ('11', 'Ex 11', 'exafter', 'A working section of 600 cm² at $M = 2.5$', 'tf_cd_nozzle', 'Supersonic wind tunnel: the working section is the supersonic exit; the throat must be choked.'),
 # 12 Shocks
 ('12', '12.1', 'afterblock', '**Compression:** model it as a train of weak waves', 'tf_steepening', 'Compression waves catch each other up and steepen into a shock; expansion waves spread out, so no strong expansion wave can form.'),
 ('12', '12.1', 'afterblock', '**Normal vs oblique:**', 'tf_normal_oblique', 'Normal shock: perpendicular to the flow, always supersonic → subsonic. Oblique shock: only the normal component must drop below M = 1, and the flow turns.'),
 ('12', '12.2', 'afterblock', 'Practically instantaneous: the functions through a shock are non-analytic', 'tf_shock_cv', 'Control volume around a stationary normal shock: compare mass, momentum and energy entering and leaving. T₀ is unchanged; p₀ falls.'),
 ('12', '12.3', 'afterblock', "['deriv', 'Derivation — entropy change across a normal shock'", 'tf_entropy_m', 'Entropy change across a normal shock: positive only for M₁ > 1. Below M = 1 entropy would fall — impossible for an adiabatic process.'),
 ('12', '12.5', 'afterblock', 'Any shock that **moves**', 'tf_moving_shock', 'Travelling shock: in the lab frame it runs into still gas at c; adding c (right to left) makes it stationary, with gas entering at c and leaving at c − u_a.'),
 ('12', '12.5', 'exafter', 'High- and low-pressure chambers at 20 °C', 'tf_shock_tube', 'Shock tube (x–t diagram): after the diaphragm bursts a shock runs into the low-pressure gas, followed by the contact surface; an expansion fan runs back into the high-pressure gas.'),
 ('12', '12.5', 'exafter', 'High- and low-pressure chambers at 20 °C', 'tf_shock_tube_frame', 'Make the shock stationary: gas enters at u₁ = c and leaves at u₂ = c − u_h.'),
 ('12', 'Ex 12', 'exafter', 'A shock runs at 700 m/s into natural gas', 'tf_moving_shock', 'Travelling shock: transform so gas enters the shock at c = 700 m/s.'),
 ('12', 'Ex 12', 'exafter', 'A shock sits where the area is $A_1$', 'tf_laval_shock_pitot', 'The Pitot probe behind the shock reads p₀₂; the manometer shows it equals the throat static pressure p_t.'),
 ('12', 'Ex 12', 'exafter', 'Air from a large tank (10 bar, 20 °C) flows along a pipe to a valve', 'tf_valve_shock', 'Slamming the valve sends a shock back upstream at c; adding c (left to right) makes it stationary.'),
]

def section_bounds(s, num):
    m = re.search(r"\n    \{\n      num: '" + re.escape(num) + r"'", s)
    if not m: raise SystemExit(f'section {num} not found')
    a = m.start(); b = s.find("\n    {\n      num: ", a + 5); b = len(s) if b < 0 else b
    return a, b

def run():
    files = {os.path.basename(f)[:2]: f for f in glob.glob(os.path.join(NOTES, '*.js'))}
    texts = {k: open(f, encoding='utf-8').read() for k, f in files.items()}
    done = skipped = 0
    for fk, num, op, anchor, key, cap in P:
        s = texts[fk]; a, b = section_bounds(s, num); sec = s[a:b]
        i = sec.find(anchor)
        if i < 0: raise SystemExit(f'anchor not found in {fk} {num}: {anchor}')
        if op != 'exafter' and ("['svg', '" + key + "'") in sec and op != 'replace': skipped += 1; continue
        blk = "        ['svg', " + q(key) + ", " + q(cap) + "],\n"
        if op == 'replace':
            ls = sec.rfind('\n', 0, i) + 1; le = sec.find('\n', i) + 1
            sec = sec[:ls] + blk + sec[le:]
        elif op == 'before':
            ls = sec.rfind('\n', 0, i) + 1; sec = sec[:ls] + blk + sec[ls:]
        elif op == 'afterblock':
            bs = sec.rfind("\n        [", 0, i + 1) + 1; le = sec.find('\n', bs)
            line = sec[bs:le].rstrip()
            if line.endswith('['): end = sec.find("\n        ]]", bs); end = sec.find('\n', end + 1) + 1
            else: end = le + 1
            while sec.startswith("        ['svg'", end): end = sec.find('\n', end) + 1
            sec = sec[:end] + blk + sec[end:]
        elif op == 'exafter':
            le = sec.find('\n', i) + 1
            if ("['svg', " + q(key)) in sec[le:le + 800]: skipped += 1; continue
            while sec.startswith("          ['svg'", le): le = sec.find('\n', le) + 1
            sec = sec[:le] + "          ['svg', " + q(key) + ", " + q(cap) + "],\n" + sec[le:]
        texts[fk] = s[:a] + sec + s[b:]; done += 1
    for k, f in files.items(): open(f, 'w', encoding='utf-8').write(re.sub(r"([^,\[\n])\n(\s+\['svg')", r'\1,\n\2', texts[k]))
    print(f'placed {done}, skipped {skipped} already present')

def check_keys():
    used = set(re.findall(r"\['svg', '([a-z0-9_]+)'", ''.join(open(f).read() for f in glob.glob(os.path.join(NOTES, '*.js')))))
    defined = set(re.findall(r"D\.(tf_[a-z0-9_]+) = ", ''.join(open(f).read() for f in glob.glob(os.path.join(ROOT, '.tfsrc', 'diagrams', '*.js')))))
    print('used', len(used), 'defined', len(defined)); print('missing (used, not defined):', sorted(used - defined)); print('unused:', sorted(defined - used))

if __name__ == '__main__':
    run(); check_keys()
