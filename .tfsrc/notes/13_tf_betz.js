{
  key: 'tf_betz', area: 'wind', num: '13', week: 'Weeks 7–9',
  name: 'Wind Energy and the Betz Limit',
  triggers: 'wind turbine power from v₁ (upstream) and v₂ (downstream) · swept radius → A = πr² · mass flow ṁ = ρAv with v = ½(v₁+v₂) at the rotor · force on the wind F = ρAv(v₁ − v₂) · power = F v · "maximum theoretical efficiency" / Betz limit 16/27 = 59.3% · C_P = Ẇ_turbine / ½ρAv₁³ · electro-mechanical coupling efficiency η_EM, heat lost in the generator · how many turbines for a given demand · energy density vs specific energy',
  sections: [
    {
      num: '', title: 'Revision Objectives — Wind Energy and the Betz Limit',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Quote the course "energy quiz" facts and explain the difference between **energy density** (per volume) and **specific energy** (per mass), and why wind has neither.`,
          R`Explain **lift vs drag** turbines, why drag machines are capped at about 16%, and the pros and cons of **horizontal (HAWT)** and **vertical (VAWT)** axis turbines.`,
          R`Write the power in the wind $\dot W_{\text{air}} = \tfrac12\dot m v^2$ with $\dot m = \rho A v$, and use **conservation of mass flow** to explain why the stream tube widens ($v_1 > v_2 \Rightarrow A_1 < A_2$).`,
          R`Derive the **force on the wind** $F = \rho A v(v_1 - v_2)$ and the power $\dot W_{\text{turbine}} = Fv$, and hence show the air speed at the rotor is $v = \tfrac12(v_1 + v_2)$.`,
          R`Derive the **Betz limit**: write $\dot W_{\text{turbine}}$ in terms of $z = v_2/v_1$, maximise it ($z = 1/3$) and show $C_{P,\max} = 16/27 = 59.3\%$.`,
          R`Pick the **right reference power** $\tfrac12\rho A v_1^3$ (and explain why using $\tfrac12\rho A v\,v_1^2$ gives an "efficiency" above Betz).`,
          R`Include the **electro-mechanical coupling efficiency** $\eta_{EM}$: electrical output, heat generated in the generator, and how many turbines a demand needs.`
        ]]
      ]
    },
    {
      num: '13.1', title: 'Our Interaction with Energy',
      blocks: [
        ['para', R`The session opens with a quiz to give a **feel for the numbers** of industrialised energy use. Each answer is worth remembering (and checking — the right-hand column shows the arithmetic that links them).`],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:680px;font-size:13.5px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Quiz question</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Answer</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">What it means</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">How much energy does a human in the UK use every day?</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0);white-space:nowrap"><b>67 kWh</b></td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">67 × 3.6 = 241 MJ per day, i.e. about 2.8 kW running continuously, per person</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">How many kg of petrol a day would provide all of it?</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0);white-space:nowrap"><b>5.2 kg</b></td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">241 MJ ÷ 5.2 kg = 46 MJ/kg — the specific energy of petrol (the slides round fossil fuels to ~50 MJ/kg)</td></tr>'
          + '<tr><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">How much land to harvest 12.8 kWh from the sun on a typical UK summer day?</td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0);white-space:nowrap"><b>71 m²</b></td><td style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">12.8 ÷ 71 = 0.18 kWh per m² per day (≈ 7.5 W/m² averaged over 24 h): solar needs a lot of land</td></tr>'
          + '<tr><td style="padding:6px 10px">How much power can the largest wind turbines deliver today?</td><td style="padding:6px 10px;white-space:nowrap"><b>26 MW</b></td><td style="padding:6px 10px">slide footnote: 25 MW turbines were in final testing in China (2025). How big a rotor that needs: example in §13.8</td></tr>'
          + '</tbody></table>'],
        ['para', R`**Energy density and specific energy** are two different ways of saying how much energy a store holds:`],
        ['list', null, false, [
          R`**Energy density** = energy per unit **volume** [MJ/L or MJ/m³]. It matters when space is the limit (a fuel tank).`,
          R`**Specific energy** = energy per unit **mass** [MJ/kg]. It matters when weight is the limit (an aircraft, a phone).`
        ]],
        ['svg', 'tf_betz_energy_density', 'Energy density (per volume) against specific energy (per mass), redrawn from the lecture chart with approximate values. Fossil fuels cluster near 50 MJ/kg; hydrogen is far right but low down; batteries and wind sit at the origin.'],
        ['list', 'What the chart shows (slides 12–16):', false, [
          R`**Fossil fuels: ~50 MJ/kg.** Their energy density depends on **state** — a liquid (petrol, diesel) packs far more into a litre than a gas (natural gas, even compressed).`,
          R`**Hydrogen: 145 MJ/kg** — the highest specific energy, but its energy density depends on state and is **always low** (it is a very light gas; even liquid or at 700 bar it holds only a few MJ per litre).`,
          R`**Electrochemical storage (batteries): ~1 MJ/kg** — energy density also depends on state but is **always very low**.`,
          R`**Wind energy: 0 MJ/kg and 0 MJ/L** — wind is not a store at all.`
        ]],
        ['warn', 'Key Insight', [
          R`Why "0 MJ/kg" for wind? The only energy a kilogram of wind carries is its kinetic energy, $\tfrac12 v^2$. At 10 m/s that is $\tfrac12\times10^2 = 50$ J/kg $= 5\times10^{-5}$ MJ/kg — about a **million times less** than petrol. You cannot bottle the wind; you can only intercept a **flow** of it. That is why everything that follows works with **power** (energy per second, mass flow rate $\dot m$), not stored energy.`
        ]],
        ['warn', 'Note', [
          R`The slide gives hydrogen as 145 MJ/kg. Data tables usually quote about 142 MJ/kg (higher heating value, water product condensed) or 120 MJ/kg (lower heating value). Either way it is roughly three times petrol per kilogram.`
        ]],
        ['para', R`**Storage, supply, use and consequence** of four energy sources (slide 17):`],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:760px;font-size:13px;margin:4px 0"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 8px;border-bottom:1px solid var(--kE7E0D0)"></th><th style="padding:7px 8px;border-bottom:1px solid var(--kE7E0D0)">Fossil fuels</th><th style="padding:7px 8px;border-bottom:1px solid var(--kE7E0D0)">Wind energy</th><th style="padding:7px 8px;border-bottom:1px solid var(--kE7E0D0)">Solar energy</th><th style="padding:7px 8px;border-bottom:1px solid var(--kE7E0D0)">Hydroelectric power</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)"><b>Storage</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Can store for millions of years, entirely safe</td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">How can you store wind?</td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">The sun is storing our solar energy</td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Reservoir height offers some storage capacity</td></tr>'
          + '<tr><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)"><b>Supply</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Dig it up and put it in a barrel</td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">If there is no wind, there is no wind energy</td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Heavily dependent on weather, season and geographical position; night-time is a problem</td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">The water cycle does the heavy lifting; high inertia means it cannot follow demand spikes</td></tr>'
          + '<tr><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)"><b>Use</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Centralised power stations; set fire to it</td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Decentralised power; regulation etc.</td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Decentralised power; massive land space</td><td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">Centralised power; significant land use</td></tr>'
          + '<tr><td style="padding:6px 8px"><b>Consequence</b></td><td style="padding:6px 8px">You are left with carbon, which is killing our planet</td><td style="padding:6px 8px">Lifetime ~30 years; huge composite structures left to recycle</td><td style="padding:6px 8px">Lifetime ~20 years; recycling industry exists but not yet scaled</td><td style="padding:6px 8px">Lifetime 50 years+; considerable ecological damage</td></tr>'
          + '</tbody></table>']
      ]
    },
    {
      num: '13.2', title: 'Wind Turbines: Lift vs Drag, Horizontal vs Vertical Axis',
      blocks: [
        ['para', R`Humans have used wind energy for millennia: sailing boats use it to drive **linear** motion, and wind has driven **rotational** motion for about 1500 years — the first windmills were built in ancient Persia (500–900 AD) to grind grain and pump water. Today the rotation drives a **generator**, through **electro-mechanical coupling** (§13.8), so the kinetic energy of the wind becomes electrical power.`],
        ['para', R`Wind turbines work on one of two principles:`],
        ['list', null, false, [
          R`**Drag** — the force any fluid exerts on an object it flows past, in the direction of the flow. The wind simply pushes on the blade.`,
          R`**Lift** — the force created by a **pressure difference** between the two faces of a wing or sail, at right angles to the flow (aircraft wings, modern sailing boats). Aerofoils, angle of attack and lift/drag are covered in **Topic 14 (Turbine Blades)**.`
        ]],
        ['para', R`**A drag-driven vertical axis turbine.** The wind hits the exposed surface of each blade, imposing a moment about the axis. To get a net rotation, the blade driving the rotation must see **more drag** than the blade returning into the wind — hence the "cup" shape: the open, concave side catches the wind; the curved back of the returning cup lets it slip past.`],
        ['svg', 'tf_betz_drag_vawt', 'Drag VAWT from above (lecture Async 1.1, Fig. 1). The cup facing the wind has more drag than the returning cup; the drag differential times the lever arm is the driving moment.'],
        ['list', 'Two major limitations of drag-based turbines:', true, [
          R`**The wind also hits the returning blade**, opposing the rotation. Reduce it by shaping the blades to have more drag in the wanted direction (cups), or greatly reduce it by **shielding** the returning blade — awkward when the wind direction is uncertain. This limitation can be engineered round.`,
          R`**The blade cannot move faster than the wind.** The drag depends on the wind speed *relative* to the blade, so as the blade (tip) speed approaches the wind speed the torque falls towards zero. The faster it spins, the less energy it can harvest, which caps the maximum theoretical efficiency at **just 16%**. This limitation cannot be designed out.`
        ]],
        ['deriv', 'Where the 16% comes from (beyond the slides)', [
          ['t', R`Model one cup of frontal area $A_c$ and drag coefficient $C_D$ moving **with** the wind at speed $u$ in a wind of speed $v$. The drag depends on the **relative** speed $v - u$, and the power delivered is force × the speed the cup moves at:`],
          ['m', R`F = \tfrac12\rho C_D A_c (v-u)^2 \qquad \dot W = F u = \tfrac12\rho C_D A_c\,(v-u)^2 u`],
          ['t', R`At $u = 0$ the cup is stalled (no motion, no power); at $u = v$ there is no relative wind (no force, no power). In between, set $d\dot W/du = 0$:`],
          ['m', R`\frac{d}{du}\left[(v-u)^2u\right] = (v-u)^2 - 2u(v-u) = (v-u)(v-3u) = 0 \;\Rightarrow\; u = \frac{v}{3}`],
          ['m', R`\dot W_{\max} = \tfrac12\rho C_D A_c\left(\tfrac{2v}{3}\right)^2\tfrac{v}{3} = \frac{4}{27}\,C_D\cdot\tfrac12\rho A_c v^3 \;\Rightarrow\; C_{P} = \frac{4}{27}C_D \approx 0.148\,C_D`],
          ['t', R`The course simply quotes **~16%**. To see where that comes from you need a drag coefficient: $C_D \approx 1.1$ is a typical textbook value for a flat plate or cup face (not a course figure), and gives $C_P = 0.148\times1.1 \approx 16\%$. A deeper cup ($C_D$ up to about 1.3–1.4) would push the ideal figure towards 20%, but that is **before** subtracting the opposing drag on the returning blade, which pulls the real value down again. Either way it is a **cap**: the $4/27$ factor comes from the blade never being able to move faster than the wind, which no design can avoid.`],
          ['t', R`Compare the lift-based limit of 59.3% (§13.6). This is why drag turbines are rarely preferred and the course focuses on **lift-based** turbines.`]
        ]],
        ['para', R`**Horizontal and vertical axes.** A turbine's rotation axis can be horizontal (HAWT) or vertical (VAWT):`],
        ['svg', 'tf_betz_hawt_vawt', 'Horizontal and vertical axis wind turbines (Async 1.1, Fig. 2).'],
        ['list', null, false, [
          R`**VAWT — limits:** limited by **tip speed ratio** (blade tip speed ÷ wind speed, $\lambda = \omega r/v_1$; Topic 14) and by difficulty **controlling the speed of rotation**, which has knock-on limitations for the electro-mechanical coupling (turning rotation into electrical power).`,
          R`**VAWT — advantages:** it does **not** need to be turned to face the wind, and the electro-mechanical coupling (generator) can be **ground mounted** rather than in the housing at the centre of a HAWT, which simplifies the design. Preferred for some **small-scale** uses where the wind direction is unpredictable, e.g. **urban** sites.`,
          R`**HAWT:** dominates the modern wind energy industry, so the rest of this topic is about **lift-based HAWTs**.`
        ]],
        ['warn', 'Note', [
          R`**Course correction (Async 1.1, p. 3):** the handout says VAWTs "do, in most cases, need to be aligned to the direction of wind". It should say they do **not** need to be aligned — a vertical axis presents the same shape to wind from any direction, which is exactly why the next sentence prefers them "where wind direction is unpredictable".`
        ]]
      ]
    },
    {
      num: '13.3', title: 'Power in the Wind and Conservation of Mass Flow',
      blocks: [
        ['para', R`**Kinetic energy of air.** A mass $m$ [kg] of air moving at speed $v$ [m/s] carries kinetic energy $W_{\text{air}} = \tfrac12 m v^2$ [J]. A turbine sees a continuous **stream** of air, so replace the mass by the **mass flow rate** $\dot m$ [kg/s] and the energy by its time derivative, the **power** of the air $\dot W_{\text{air}}$ [W]:`],
        ['disp', [ R`\dot W_{\text{air}} = \tfrac12\,\dot m\,v^2 \tag{13.1}` ]],
        ['para', R`The mass flow is tied to the turbine's geometry and the air speed **at the instant the wind hits the turbine**, $v$:`],
        ['disp', [ R`\dot m = \rho A v \qquad A = \pi r^2 \tag{13.2}` ]],
        ['para', R`where $\rho$ is the air density [kg/m³] and $A$ is the **swept area** of the blades [m²] — the disc traced by blades of radius (swept radius) $r$.`],
        ['ex', 'In-class question — which statement is true?', [
          ['t', R`(1) The air velocity is constant, $v_1 = v_2$. (2) All the kinetic energy is transferred from the wind to the turbine, $v_2 = 0$. (3) Mass flow rate is conserved throughout, $\dot m_1 = \dot m = \dot m_2$.`],
          ['ans'],
          ['t', R`**Only (3).** (1) is false: if $v_1 = v_2$ the air leaves with as much kinetic energy as it arrived with, so the turbine extracts **nothing**. (2) is false: $v_2 = 0$ would mean the air stops dead behind the rotor; with $\dot m_2 = \rho A_2 v_2 = 0$ no air could get away, so no new air could arrive either — mass flow could not be conserved. A working turbine sits between the two: $0 < v_2 < v_1$.`]
        ]],
        ['para', R`**The stream tube.** Follow the tube of air that passes through the rotor. There are three stations:`],
        ['list', null, true, [
          R`**Upstream** of the turbine: frontal area $A_1$, air speed $v_1$ (the free wind speed).`,
          R`**At the rotor** (the instant the wind hits it): area $A$ (the swept area), speed $v$.`,
          R`**Downstream** (in the wake): area $A_2$, speed $v_2$.`
        ]],
        ['svg', 'tf_betz_streamtube', 'Air moving through a HAWT (Async 1.2, Fig. 2): the stream tube through the rotor. No air crosses its walls, so the same ṁ passes all three stations; the air slows, so the tube widens. Drawn to the Betz-optimum proportions A₁ = 2A/3, A₂ = 2A.'],
        ['list', 'Statements and assumptions:', true, [
          R`**Steady flow, mass flow conserved:** $\dot m_1 = \dot m = \dot m_2$ — air cannot pile up or vanish anywhere in the tube.`,
          R`**Density constant** throughout. Air is compressible, but the pressure change upstream to downstream of a turbine is tiny (about 25 Pa in the Classwork turbine of §13.5, against 101 325 Pa atmospheric — 0.025%), so the assumption is reasonable.`,
          R`The wind blows **normal to the plane of the rotor**, and speeds are uniform over each station (one-dimensional flow).`
        ]],
        ['disp', [ R`\dot m_1 = \dot m = \dot m_2 \quad\Rightarrow\quad \rho A_1 v_1 = \rho A v = \rho A_2 v_2 \tag{13.3}` ]],
        ['para', R`**Why the tube must widen** (slides 22–27). Take a volume of air upstream (mass $m_1$, speed $v_1$, volume $V_1$, kinetic energy $W_1$) and the **same** air downstream ($m_2$, $v_2$, $V_2$, $W_2$):`],
        ['svg', 'tf_betz_parcels', 'The same parcel of air before and after the rotor (slides 22–27). Here V is the parcel volume and W its kinetic energy — not velocity or power.'],
        ['list', null, true, [
          R`Steady state: $m_1 = m_2$.`,
          R`Density constant: $V_1 = V_2$ (same mass, same density, same volume).`,
          R`The turbine extracts some energy: $W_1 > W_2$. With $W = \tfrac12 m v^2$ and $m_1 = m_2$, that means $v_1 > v_2$.`,
          R`Conservation of mass (13.3) with $v_1 > v_2$: $A_1 < A_2$. The slower air downstream must occupy a **wider** tube (the parcel gets shorter and fatter).`
        ]],
        ['para', R`**Power extracted.** The power taken by the turbine is the kinetic-energy flow in minus the flow out. Since $\dot m_1 = \dot m_2 = \dot m$:`],
        ['deriv', 'Derivation — power extracted from the air (Async 1.2)', [
          ['m', R`\dot W_{\text{turbine}} = \tfrac12\dot m_1 v_1^2 - \tfrac12\dot m_2 v_2^2 = \tfrac12\dot m\,(v_1^2 - v_2^2)`],
          ['t', R`and with $\dot m = \rho A v$ evaluated **at the rotor**, where we know the area:`]
        ]],
        ['disp', [ R`\boxed{\dot W_{\text{turbine}} = \tfrac12\rho A v\,(v_1^2 - v_2^2)} \qquad [1] \tag{13.4}` ]],
        ['warn', 'Key Insight', [
          R`We can measure $v_1$ (the wind) and $v_2$ (the wake), and we know $A$ — but $v$, the air speed **at the instant it hits the turbine**, is the one value we cannot yet resolve. The next two sections find it by a second, independent route: the **force** on the air.`
        ]],
        ['eq', [
          ['Power of the air', R`\dot W_{\text{air}} = \tfrac12\dot m v^2`, '[W]', 'Kinetic-energy flow carried by mass flow ṁ at speed v.'],
          ['Mass flow rate', R`\dot m = \rho A v,\quad A = \pi r^2`, '[kg/s]', 'A = swept area, v = speed at the rotor.'],
          ['Conservation of mass', R`\rho A_1 v_1 = \rho A v = \rho A_2 v_2`, '[kg/s]', 'v₁ > v₂ ⇒ A₁ < A < A₂.'],
          ['Power extracted [1]', R`\dot W_{\text{turbine}} = \tfrac12\rho A v\,(v_1^2 - v_2^2)`, '[W]', 'KE flow in − KE flow out.']
        ]]
      ]
    },
    {
      num: '13.4', title: 'Steps 1–2: Force on the Wind and the Power it Absorbs',
      blocks: [
        ['para', R`Look from the **turbine's point of view**: resolve the force the turbine imparts on the air hitting it, working in the direction **normal to the plane of the rotor** (the flow direction, $x$ positive downstream). The air arrives at $v_1$ and leaves at $v_2 < v_1$: it is decelerated, so the force **on the air** points **upstream**.`],
        ['svg', 'tf_betz_force', 'The rotor pushes back on the air with force F (upstream); by Newton\'s third law the air pushes the rotor downstream (the thrust). The air does work on the rotor over the thin slab dx, which it crosses at speed v.'],
        ['deriv', 'Step 1 — force on the wind (Newton\'s second law for a flowing stream)', [
          ['t', R`Newton's second law for a **steady stream**: the net force on the air equals the rate at which its momentum changes, i.e. momentum flow out − momentum flow in. Take the control volume round the stream tube from far upstream to far downstream, with $x$ **positive downstream**. The air enters with momentum flow $\dot m v_1$ and leaves with $\dot m v_2$:`],
          ['m', R`F_{\text{on air}} = \dot m v_2 - \dot m v_1 = -\dot m\,(v_1 - v_2) \quad (< 0 \text{ because } v_1 > v_2)`],
          ['t', R`The minus sign says the force on the air points **upstream** (it decelerates the air). Its **magnitude** is`],
          ['m', R`F = \dot m\,(v_1 - v_2)`],
          ['t', R`and with $\dot m = \rho A v$ (13.2) this is (13.5). This assumes the pressure is atmospheric far upstream and far downstream, so the only net force on the air is the rotor's.`],
          ['t', R`**The slides' shorthand** reaches the same place: $F = ma = m\,dv/dt$, then "group the mass with the time", $m/dt = \dot m$, so $F = \dot m\,dv$ with $dv = v_1 - v_2$, the size of the velocity drop. The acceleration is negative (the air slows), which is the minus sign above; the slides quote the magnitude.`]
        ]],
        ['disp', [ R`\boxed{F = \rho A v\,(v_1 - v_2)} \tag{13.5}` ]],
        ['warn', 'Note', [
          R`The "$F = m\,dv/dt \to \dot m\,dv$" step on the slides is shorthand for the **steady-flow momentum equation** (Topic 1) used above. Sync 1.1 calls the incremental work $dE$; the slides call it $dW$. Same thing.`
        ]],
        ['deriv', 'Step 2 — work done on the wind, and power', [
          ['t', R`The rotor and the air interact only in the thin slab at the disc. While the force acts, the air moves a small distance $dx$ through it (normal to the rotor). The incremental work is force × distance (the slides' form, with $F$ as a magnitude):`],
          ['m', R`dW = F\,dx`],
          ['t', R`We want **power**, not energy, so take the time derivative:`],
          ['m', R`\frac{dW}{dt} = F\,\frac{dx}{dt}`],
          ['t', R`**Why $dx/dt = v$:** the force acts only at the disc, and the air crossing the disc is moving at the rotor speed $v$ — not $v_1$ (that air has not reached the rotor yet) nor $v_2$ (that air has already left it). So the rate of work is $Fv$.`],
          ['t', R`**Which way does the energy go?** The force **on the air** points upstream while the air moves downstream, so the rotor does **negative** work on the air: $-Fv$ per second (the air loses energy). By Newton's third law the air pushes the rotor **downstream** with the same $F$, and the rotor's blades move with that push, so the air does $+Fv$ per second on the rotor. That positive $Fv$ is the power the turbine **harvests**, $\dot W_{\text{turbine}}$. Substituting Step 1:`]
        ]],
        ['disp', [ R`\dot W_{\text{turbine}} = F\,v \qquad\Rightarrow\qquad \boxed{\dot W_{\text{turbine}} = \rho A v^2\,(v_1 - v_2)} \qquad [2] \tag{13.6}` ]],
        ['warn', 'Warning', [
          R`Use $v$ (the speed **at the rotor**) in $\dot W = Fv$ — not $v_1$ or $v_2$. The force acts only where the air crosses the rotor, and that is where the air is moving at $v$.`,
          R`Problem Sheet Q3 uses (13.6) in the form $\dot W = Fv$ directly: 20 kN at 6 m/s is 120 kW.`
        ]],
        ['eq', [
          ['Force on the wind', R`F = \dot m (v_1 - v_2) = \rho A v (v_1 - v_2)`, '[N]', 'On the air: upstream. On the rotor: equal and opposite (thrust).'],
          ['Power from the force [2]', R`\dot W_{\text{turbine}} = F v = \rho A v^2 (v_1 - v_2)`, '[W]', 'v = air speed at the rotor.']
        ]]
      ]
    },
    {
      num: '13.5', title: 'Step 3: The Air Velocity at the Rotor',
      blocks: [
        ['para', R`We now have **two** independent expressions for the same power: [1] (13.4) from the energy the air **loses** as it passes through the turbine, and [2] (13.6) from the work the turbine **does** on the air. They must be equal — and that fixes $v$.`],
        ['deriv', 'Derivation — the air speed at the rotor', [
          ['m', R`\tfrac12\rho A v\,(v_1^2 - v_2^2) = \rho A v^2\,(v_1 - v_2)`],
          ['t', R`Factorise the difference of two squares, $v_1^2 - v_2^2 = (v_1 - v_2)(v_1 + v_2)$:`],
          ['m', R`\tfrac12\rho A v\,(v_1 - v_2)(v_1 + v_2) = \rho A v^2\,(v_1 - v_2)`],
          ['t', R`Cancel $\rho A v\,(v_1 - v_2)$ from both sides (allowed: it is non-zero for a working turbine, $v_1 > v_2$):`]
        ]],
        ['disp', [ R`\boxed{v = \tfrac12(v_1 + v_2)} \tag{13.7}` ]],
        ['para', R`The air speed at the rotor is the **mean** of the upstream and downstream speeds. Substituting into [1] gives the turbine power purely in terms of things we can measure:`],
        ['disp', [ R`\boxed{\dot W_{\text{turbine}} = \tfrac14\rho A\,(v_1 + v_2)(v_1^2 - v_2^2)} \tag{13.8}` ]],
        ['warn', 'Key Insight', [
          R`(13.7) says the air has already lost **half** its speed drop before it reaches the rotor: $v_1 - v = v - v_2 = \tfrac12(v_1 - v_2)$. The air "sees" the turbine coming and slows and spreads out ahead of it — which is why $A_1 < A$.`
        ]],
        ['deriv', 'Cross-check with Bernoulli — the pressure jump across the rotor (beyond the slides; the momentum route above is the one the course uses)', [
          ['t', R`Bernoulli holds along the stream tube **upstream** of the rotor and **downstream** of it, but **not across** it (the rotor takes energy out). The air goes from $p_{atm}$ far upstream to $p^+$ just in front of the rotor ($p^+ > p_{atm}$: the air slows from $v_1$ to $v$, so by Bernoulli its pressure rises), jumps down to $p^-$ just behind it, and recovers to $p_{atm}$ far downstream. The speed is $v$ on both faces of the thin disc (mass conservation, same area):`],
          ['m', R`p_{atm} + \tfrac12\rho v_1^2 = p^+ + \tfrac12\rho v^2 \qquad p^- + \tfrac12\rho v^2 = p_{atm} + \tfrac12\rho v_2^2`],
          ['t', R`Subtract: the pressure drop across the rotor, times its area, is the force:`],
          ['m', R`\Delta p = p^+ - p^- = \tfrac12\rho(v_1^2 - v_2^2) \qquad F = A\,\Delta p = \tfrac12\rho A(v_1^2 - v_2^2)`],
          ['t', R`Set equal to the momentum result (13.5), $\rho A v(v_1 - v_2)$, and cancel $\rho A(v_1 - v_2)$: $v = \tfrac12(v_1 + v_2)$ again. Two different physical arguments, one answer (this is **Froude's theorem** of actuator-disc theory).`]
        ]],
        ['svg', 'tf_betz_pv', 'Velocity and pressure along the stream tube (Betz proportions, v₁ : v : v₂ = 3 : 2 : 1). The speed falls smoothly; the pressure rises ahead of the rotor, drops by Δp across it and recovers in the wake.'],
        ['ex', 'Example — the Classwork turbine at the rotor', [
          ['t', R`The Problem Class turbine has swept radius 15 m, $v_1 = 8$ m/s, $v_2 = 5$ m/s, $\rho = 1.293$ kg/m³. Find the air speed at the rotor, the mass flow, the force on the wind, the power (by $Fv$), the stream-tube radii upstream and downstream, and the pressure drop across the rotor.`],
          ['ans'],
          ['m', R`v = \tfrac12(8 + 5) = 6.5\ \text{m/s} \qquad A = \pi\times15^2 = 706.9\ \text{m}^2`],
          ['m', R`\dot m = \rho A v = 1.293\times706.86\times6.5 = 5940.8\ \text{kg/s}`],
          ['m', R`F = \dot m(v_1 - v_2) = 5940.8\times3 = 17\,822\ \text{N} \approx 17.8\ \text{kN (upstream, on the air)}`],
          ['m', R`\dot W_{\text{turbine}} = Fv = 17\,822\times6.5 = 115\,845\ \text{W} \approx 115.8\ \text{kW}`],
          ['t', R`Stream tube, from (13.3): $A_1 = Av/v_1$ and $A_2 = Av/v_2$:`],
          ['m', R`A_1 = \frac{706.9\times6.5}{8} = 574.3\ \text{m}^2\ (r_1 = 13.5\ \text{m}) \qquad A_2 = \frac{706.9\times6.5}{5} = 918.9\ \text{m}^2\ (r_2 = 17.1\ \text{m})`],
          ['m', R`\Delta p = \tfrac12\rho(v_1^2 - v_2^2) = \tfrac12\times1.293\times(64 - 25) = 25.2\ \text{Pa} \qquad A\,\Delta p = 17.8\ \text{kN}\ \checkmark`],
          ['t', R`25 Pa is 0.025% of atmospheric pressure — the justification for treating the air as incompressible.`]
        ]],
        ['eq', [
          ['Air speed at the rotor', R`v = \tfrac12(v_1 + v_2)`, '[m/s]', 'From equating [1] and [2].'],
          ['Turbine power', R`\dot W_{\text{turbine}} = \tfrac14\rho A (v_1 + v_2)(v_1^2 - v_2^2)`, '[W]', 'Needs only v₁, v₂, ρ, A.'],
          ['Pressure drop across rotor', R`\Delta p = \tfrac12\rho (v_1^2 - v_2^2),\quad F = A\Delta p`, '[Pa]', 'Beyond the slides: Bernoulli either side of the disc.']
        ]]
      ]
    },
    {
      num: '13.6', title: 'Steps 4–7: Maximum Theoretical Efficiency — the Betz Limit',
      blocks: [
        ['para', R`How do we define the **maximum theoretical efficiency** of a wind turbine? Which parameters affect it, for incompressible flow? The candidates are the swept area $A = \pi r^2$, the air density $\rho$, and the ratio of $v_2$ to $v_1$. $A$ and $\rho$ scale the power up and down but appear equally in the power available, so they **cancel** in an efficiency. The efficiency depends only on the **ratio** $v_2/v_1$ — how hard the turbine brakes the wind. This calculation was first done by **Prof. Albert Betz**, a German physicist, in the early 20th century.`],
        ['deriv', 'Step 4 — turbine power in terms of z = v₂/v₁', [
          ['t', R`Expand (13.8):`],
          ['m', R`\dot W_{\text{turbine}} = \tfrac14\rho A\,(v_1 + v_2)(v_1^2 - v_2^2) = \tfrac14\rho A\,(v_1^3 + v_2 v_1^2 - v_1 v_2^2 - v_2^3)`],
          ['t', R`Take $v_1^3$ outside the bracket (divide each term by $v_1^3$) and write $z = v_2/v_1$:`],
          ['m', R`\dot W_{\text{turbine}} = \tfrac14\rho A v_1^3\left[1 + \frac{v_2}{v_1} - \left(\frac{v_2}{v_1}\right)^2 - \left(\frac{v_2}{v_1}\right)^3\right]`]
        ]],
        ['disp', [ R`\boxed{\dot W_{\text{turbine}} = \tfrac14\rho A v_1^3\left(1 + z - z^2 - z^3\right)}, \qquad z = \frac{v_2}{v_1} \tag{13.9}` ]],
        ['deriv', 'Steps 5–6 — find the z that maximises the power', [
          ['t', R`For a given wind ($v_1$), rotor ($A$) and air ($\rho$), the power varies only with $z$. A maximum is where the slope is zero, $d\dot W_{\text{turbine}}/dz = 0$:`],
          ['m', R`\frac{d\dot W_{\text{turbine}}}{dz} = \tfrac14\rho A v_1^3\left(1 - 2z - 3z^2\right) = 0 \;\Rightarrow\; 1 - 2z - 3z^2 = 0`],
          ['t', R`Factorise (check: $(1 + z)(1 - 3z) = 1 - 3z + z - 3z^2 = 1 - 2z - 3z^2$):`],
          ['m', R`(1 + z)(1 - 3z) = 0 \;\Rightarrow\; z = -1 \ \text{or}\ z = \tfrac13`],
          ['t', R`$v_1$ and $v_2$ are both positive, so $z \neq -1$. It is a **maximum** (not a minimum): the second derivative $\propto -2 - 6z = -4 < 0$ at $z = 1/3$. So peak power needs $v_2 = v_1/3$.`]
        ]],
        ['warn', 'Note', [
          R`The Sync 1.1 handout rearranges $1 - 2z - 3z^2 = 0$ as $z(2 + 3z) = 1$ and simply verifies that $z = 1/3$ works ($\tfrac13(2 + 1) = 1$). Factorising, as on the slides, finds **both** roots and shows why the other is rejected.`
        ]],
        ['deriv', 'Step 7 — maximum power, and the reference power in the wind', [
          ['t', R`Substitute $z = 1/3$ into (13.9):`],
          ['m', R`\dot W_{\text{turbine,max}} = \tfrac14\rho A v_1^3\left(1 + \tfrac13 - \tfrac19 - \tfrac1{27}\right) = \tfrac14\rho A v_1^3\cdot\frac{27 + 9 - 3 - 1}{27} = \tfrac14\cdot\frac{32}{27}\rho A v_1^3 = \frac{8}{27}\rho A v_1^3`],
          ['t', R`Now **remove the turbine**. The total power in air of density $\rho$ moving at $v_1$ through a cylinder of cross-section $A$ (the area the rotor would sweep) is, from (13.1) with $\dot m = \rho A v_1$:`],
          ['m', R`\dot W_{\text{air}} = \tfrac12\dot m v_1^2 = \tfrac12\rho A v_1^3`],
          ['t', R`**Why $A$ and $v_1$** (not $A_1$, or the rotor speed $v$)? Because the fair question is "how much power would cross this disc if the turbine were not there?" With no turbine the air does not slow, so it crosses the whole swept area $A$ at the free wind speed $v_1$. (§13.7, Classwork 2, shows the paradox you get with any other reference.) This is the **reference** for turbine efficiency, called the **power coefficient** $C_P$:`]
        ]],
        ['disp', [ R`\dot W_{\text{air}} = \tfrac12\rho A v_1^3 \qquad C_P = \frac{\dot W_{\text{turbine}}}{\dot W_{\text{air}}} = \tfrac12\left(1 + z - z^2 - z^3\right) = \tfrac12(1 + z)(1 - z^2) \tag{13.10}` ]],
        ['disp', [ R`\boxed{C_{P,\max} = \frac{\dot W_{\text{turbine,max}}}{\dot W_{\text{air}}} = \frac{\tfrac{8}{27}\rho A v_1^3}{\tfrac12\rho A v_1^3} = \frac{16}{27} = 0.593} \tag{13.11}` ]],
        ['para', R`$C_{P,\max}$ is the **Betz limit**: no wind turbine can extract more than **59.3%** of the power in the wind passing through its swept area.`],
        ['svg', 'tf_betz_cp_curve', 'Power coefficient against z = v₂/v₁. The peak is the Betz limit, 16/27 at z = 1/3. The Classwork turbine (z = 5/8) reaches 0.495. The dashed curve is the "wrong reference" ratio of §13.7.'],
        ['warn', 'Key Insight', [
          R`**Why is there an optimum at all?** Brake the wind too little ($z \to 1$) and each kilogram gives up almost no energy. Brake it too hard ($z \to 0$) and the air backs up: $v = \tfrac12(v_1 + v_2)$ falls, so less mass flows through the rotor ($\dot m = \rho A v$), and much of the oncoming wind spills round the rotor instead. The best compromise is $v_2 = v_1/3$, $v = 2v_1/3$.`,
          R`At the optimum, from (13.3): $A_1 = A v/v_1 = \tfrac23 A$ and $A_2 = A v/v_2 = 2A$ — the wake is twice the swept area.`,
          R`**Where does the other 40.7% go?** At the optimum, $1 - 16/27 = 11/27 = 40.7\%$ of $\tfrac12\rho A v_1^3$ is **not** captured: part is the kinetic energy the air through the rotor must keep to get out of the way ($v_2 = v_1/3$), and part is in the outer ring of wind that spills round the rotor. In numbers (as fractions of $\tfrac12\rho A v_1^3$): the air that actually passes through the disc ($\dot m = \tfrac23\rho A v_1$) brings in $\tfrac23 = 66.7\%$; the rotor takes $\tfrac{16}{27} = 59.3\%$ of it and the wake keeps $\tfrac12\dot m v_2^2 = \tfrac{2}{27} = 7.4\%$. The other $\tfrac13 = \tfrac{9}{27} = 33.3\%$ never goes through the disc — upstream the stream tube is only $A_1 = \tfrac23 A$, so a third of the wind in the rotor's frontal cylinder spills round the outside. Check: $16 + 2 + 9 = 27$. Betz is an **ideal** limit with no friction at all — it is not "100% minus losses"; it is the most an ideal disc can take while still letting the air through.`,
          R`The curve's left end, $C_P = 0.5$ at $z = 0$, is not a real operating point: $v_2 = 0$ was ruled out in §13.3 (the air would have nowhere to go), so the simple model breaks down there. The curve just ends at 0.5.`
        ]],
        ['list', 'Assumptions behind the Betz limit (an ideal "actuator disc"):', false, [
          R`Steady, incompressible ($\rho$ constant), one-dimensional flow normal to the rotor; uniform speed over each section.`,
          R`No friction (no viscous losses) and no **swirl** left in the wake; the rotor acts as a thin disc with infinitely many blades.`,
          R`Pressure atmospheric far upstream and far downstream.`,
          R`Perfect electro-mechanical coupling — all of $\dot W_{\text{turbine}}$ becomes electricity (relaxed in §13.8).`
        ]],
        ['warn', 'Note', [
          R`Forward reference: Topic 14 (Turbine Blades) writes the same result with the **axial induction factor** $a$, defined by $v = v_1(1 - a)$. Then (13.7) gives $v_2 = v_1(1 - 2a)$, i.e. $z = 1 - 2a$, and $C_P = 4a(1-a)^2$, maximised at $a = 1/3$ (the same $z = 1/3$). Real large turbines reach $C_P$ of roughly 0.45–0.5.`
        ]],
        ['eq', [
          ['Power in terms of z', R`\dot W_{\text{turbine}} = \tfrac14\rho A v_1^3 (1 + z - z^2 - z^3)`, '[W]', 'z = v₂/v₁.'],
          ['Optimum', R`z = \tfrac13,\quad \dot W_{\text{turbine,max}} = \tfrac{8}{27}\rho A v_1^3`, '[W]', 'v₂ = v₁/3, v = 2v₁/3.'],
          ['Power in the wind (reference)', R`\dot W_{\text{air}} = \tfrac12\rho A v_1^3`, '[W]', 'Air at v₁ through area A with NO turbine.'],
          ['Power coefficient', R`C_P = \frac{\dot W_{\text{turbine}}}{\dot W_{\text{air}}} = \tfrac12(1 + z)(1 - z^2)`, '[–]', '"Efficiency" of the turbine.'],
          ['Betz limit', R`C_{P,\max} = \tfrac{16}{27} = 0.593`, '[–]', 'Maximum theoretical efficiency.']
        ]]
      ]
    },
    {
      num: '13.7', title: 'Problem Class: Turbine Power, Efficiency and the Right Reference',
      blocks: [
        ['ex', 'Classwork 1 — wind turbine power and efficiency', [
          ['t', R`A HAWT has swept radius 15 m. Upstream wind 8 m/s, downstream 5 m/s, $\rho = 1.293$ kg/m³. (1) Calculate the power transferred from the wind to the turbine. (2) Calculate the efficiency of the turbine under these conditions. (Do not yet consider the electro-mechanical coupling efficiency $\eta_{EM}$.)`],
          ['ans'],
          ['t', R`**(1)** Use (13.9) with $z = v_2/v_1 = 5/8 = 0.625$:`],
          ['m', R`\tfrac14\rho A = \tfrac14\times1.293\times\pi\times15^2 = 228.49\ \text{kg/m}`],
          ['m', R`1 + z - z^2 - z^3 = 1 + 0.625 - 0.390625 - 0.244141 = 0.990234`],
          ['m', R`\dot W_{\text{turbine}} = 228.49\times8^3\times0.990234 = 228.49\times512\times0.990234 = 115\,845\ \text{W} = 115.8\ \text{kW}`],
          ['t', R`Alternative, via (13.8): $\dot W_{\text{turbine}} = \tfrac14\rho A(v_1 + v_2)(v_1^2 - v_2^2) = 228.49\times13\times39 = 115\,845$ W — the same.`],
          ['t', R`**(2)** Power in the wind with no turbine, (13.10):`],
          ['m', R`\dot W_{\text{air}} = \tfrac12\rho A v_1^3 = \tfrac12\times1.293\times\pi\times15^2\times8^3 = 456.98\times512 = 233\,976\ \text{W} = 234\ \text{kW}`],
          ['m', R`C_P = \frac{115\,845}{233\,976} = 0.495 \;\Rightarrow\; 49.5\%\ \text{(below the 59.3\% Betz limit)}\ \checkmark`],
          ['t', R`Quick check with (13.10): $C_P = \tfrac12\times0.990234 = 0.4951$ — no need for $\rho$ or $A$ at all.`]
        ]],
        ['warn', 'Note', [
          R`**Course correction (Problem Class slide 7):** the slide computes $\dot W_{\text{air}} = 233\,976$ W but labels it "224 kW". It is **234 kW**. The efficiency on the slide (0.495) uses the correct 233 976 W.`
        ]],
        ['ex', 'Classwork 2 — the power in the wind, and what looks strange', [
          ['t', R`For the same turbine: (1) calculate the power in the wind **upstream** of the turbine, $\dot W_1$, using the mass flow through the rotor. (2) What appears strange about this value?`],
          ['ans'],
          ['t', R`**(1)** The air that passes through the rotor has mass flow $\dot m = \rho A v$ with $v = \tfrac12(v_1 + v_2)$; upstream it carries kinetic-energy flow`],
          ['m', R`\dot W_1 = \tfrac12\dot m\,v_1^2 = \tfrac12\rho A v\,v_1^2 = \tfrac14\rho A(v_1 + v_2)\,v_1^2 = 228.49\times13\times64 = 190\,105\ \text{W} = 190\ \text{kW}`],
          ['t', R`**(2)** Calling "useful power extracted ÷ total power available" the efficiency gives`],
          ['m', R`\text{eff} = \frac{115\,845}{190\,105} = 0.609 \quad (60.9\%)`],
          ['t', R`— **higher than the Betz limit**, which cannot be right. The mistake: $\dot W_1$ counts only the air that actually goes through the rotor. Upstream, that air occupies the **smaller** area $A_1 < A$. With the turbine removed, a whole cylinder of area $A$ would arrive at $v_1$; the extra ring of air (area $A - A_1$) round the edge of our parcel **passes around** the edge of the turbine blades when the turbine is there. The fair reference is the air that **would** pass through $A$ with **no** turbine: $\dot W_{\text{air}} = \tfrac12\rho A v_1^3 = 234$ kW, giving $C_P = 49.5\%$.`],
          ['t', R`In terms of $z$: $\dot W_{\text{turbine}}/\dot W_1 = (v_1^2 - v_2^2)/v_1^2 = 1 - z^2 = 1 - 0.390625 = 0.609$. This ratio heads to 1 as $z \to 0$, so it would "reward" stopping the wind completely — it ignores the air the turbine turns away.`]
        ]],
        ['svg', 'tf_betz_timesteps', 'Classwork 2: the same mass of air at three timesteps (A₁ → A → A₂), and the no-turbine reference cylinder of area A. The outer ring A − A₁ spills round the rotor when the turbine is present, but it is part of the power the turbine could have had.'],
        ['warn', 'Note', [
          R`The slide gives the strange efficiency as $116/190 = 0.611$ (from rounded kW). With unrounded powers it is $115\,845/190\,105 = 0.609$ — the conclusion (above 59.3%) is unchanged.`
        ]],
        ['warn', 'When to use', [
          R`**Always** use $\dot W_{\text{air}} = \tfrac12\rho A v_1^3$ — swept area $A$, **free-stream** speed $v_1$ — as the denominator of $C_P$ and when applying the Betz limit. Use $v = \tfrac12(v_1 + v_2)$ only inside $\dot m$, $F$ and $\dot W_{\text{turbine}}$.`
        ]]
      ]
    },
    {
      num: '13.8', title: 'Electro-mechanical Coupling Efficiency',
      blocks: [
        ['para', R`A wind turbine turns the kinetic energy of the air into **rotational mechanical work**, which drives a **generator**. In modern HAWTs the generator sits in the housing **behind the hub** (the **nacelle**) at the top of the tower; the slides call it the central 'hub' of the turbine.`],
        ['list', null, false, [
          R`A **generator is a motor in reverse**: rotating the **rotor** relative to the stationary **stator** drives an electrical current (see the Year 1 Engineering Science Electrical notes if generators are unfamiliar).`,
          R`Modern turbines use a **gearbox** to increase the rotational speed reaching the generator. The blades turn slowly (a low-speed, high-torque shaft); the gearbox steps this up to a high-speed shaft, and generators convert power more efficiently at high speed. This **improves the efficiency** of the electro-mechanical coupling.`
        ]],
        ['svg', 'tf_betz_nacelle', 'Inside the nacelle (slide 56): hub and blades, low-speed shaft, gearbox, brake, high-speed shaft, generator; tower below.'],
        ['warn', 'Note', [
          R`**Course correction (MEC Session 1, slide 56):** the slide says current "is driven by the rotation of the stator, relative to the rotor". The **stator** is the stationary part by definition; it is the **rotor** that rotates relative to the stator. (Only the relative motion matters physically, but the naming on the slide is reversed.)`
        ]],
        ['para', R`Every power expression so far — (13.4), (13.6), (13.8), (13.9) — assumes **perfect** electro-mechanical coupling: all the power taken by the blades becomes electricity. In reality the generator (and gearbox) lose some as heat. Define the **electro-mechanical coupling efficiency** (dimensionless):`],
        ['disp', [ R`\boxed{\eta_{EM} = \frac{\dot W_{\text{elec}}}{\dot W_{\text{turbine}}}} \tag{13.12}` ]],
        ['para', R`where $\dot W_{\text{elec}}$ is the **electrical** power output by the generator and $\dot W_{\text{turbine}}$ the wind power **harvested by the blades** (the problem sheet calls these $\dot W_{\text{output}}$ and $\dot W_{\text{harvested}}$). Combining with (13.9) gives the maximum achievable electrical output, including the coupling losses:`],
        ['disp', [ R`\dot W_{\text{elec}} = \frac{\eta_{EM}}{4}\rho A v_1^3\left[1 + \frac{v_2}{v_1} - \left(\frac{v_2}{v_1}\right)^2 - \left(\frac{v_2}{v_1}\right)^3\right] \tag{13.13}` ]],
        ['para', R`Whatever is not converted to electrical work becomes a **loss, as heat** in the generator:`],
        ['disp', [ R`\dot W_{\text{loss}} = \dot W_{\text{turbine}} - \dot W_{\text{elec}} = (1 - \eta_{EM})\,\dot W_{\text{turbine}} \tag{13.14}` ]],
        ['list', null, false, [
          R`$\eta_{EM} > 0.9$: the electro-mechanical coupling of modern wind turbine generators is better than 90%.`,
          R`$\eta_{EM}$ is a **function of the wind speed and the rotational speed of the generator** — it is not a fixed constant, though problems treat it as one.`
        ]],
        ['svg', 'tf_betz_chain', 'Power chain from the wind to the grid: the power coefficient (at most 16/27) at the blades, then the coupling efficiency η_EM in the generator. The overall best case is η_EM × 16/27 of the power in the wind.'],
        ['disp', [ R`\dot W_{\text{elec,max}} = \eta_{EM}\,C_{P,\max}\,\dot W_{\text{air}} = \eta_{EM}\cdot\frac{16}{27}\cdot\tfrac12\rho A v_1^3 = \eta_{EM}\cdot\frac{8}{27}\rho A v_1^3 \tag{13.15}` ]],
        ['ex', 'Example — electrical output and heat for the Classwork turbine', [
          ['t', R`The Classwork turbine (§13.7) harvests 115.8 kW at the blades. Its generator has $\eta_{EM} = 0.92$. Find the electrical output, the heat generated in the generator, and the overall wind-to-wire efficiency.`],
          ['ans'],
          ['m', R`\dot W_{\text{elec}} = 0.92\times115.8 = 106.6\ \text{kW} \qquad \dot W_{\text{loss}} = 0.08\times115.8 = 9.27\ \text{kW (heat)}`],
          ['m', R`\frac{\dot W_{\text{elec}}}{\dot W_{\text{air}}} = \eta_{EM}C_P = 0.92\times0.495 = 0.456 \;\;(45.6\%)`]
        ]],
        ['ex', 'Example — how big must a 26 MW rotor be?', [
          ['t', R`The largest turbines deliver 26 MW (§13.1). If such a machine worked at the Betz limit with $\eta_{EM} = 0.95$ in a 12 m/s wind ($\rho = 1.225$ kg/m³), what is the smallest rotor diameter that could deliver 26 MW?`],
          ['ans'],
          ['t', R`Best possible electrical power, equation (13.15): $\dot W_{\text{elec,max}} = \eta_{EM}\,C_{P,\max}\,\tfrac12\rho A v_1^3$, so`],
          ['m', R`A = \frac{26\times10^6}{0.95\times\tfrac{16}{27}\times\tfrac12\times1.225\times12^3} = \frac{26\times10^6}{595.8} = 43\,640\ \text{m}^2`],
          ['m', R`r = \sqrt{\frac{43\,640}{\pi}} = 117.9\ \text{m} \;\Rightarrow\; D \approx 236\ \text{m}`],
          ['t', R`This is a lower bound. A real machine needs a larger rotor, because its $C_P$ is below the Betz limit and it must reach its rated power at lower wind speeds than 12 m/s. Power $\propto v_1^3$: halve the wind and you get one-eighth of the power (at 6 m/s the same rotor would give only 3.25 MW).`]
        ]],
        ['eq', [
          ['Electro-mechanical coupling efficiency', R`\eta_{EM} = \frac{\dot W_{\text{elec}}}{\dot W_{\text{turbine}}}`, '[–]', 'Modern generators: > 0.9; varies with wind and generator speed.'],
          ['Electrical output', R`\dot W_{\text{elec}} = \frac{\eta_{EM}}{4}\rho A v_1^3 (1 + z - z^2 - z^3)`, '[W]', ''],
          ['Heat generated in the generator', R`\dot W_{\text{loss}} = (1 - \eta_{EM})\dot W_{\text{turbine}}`, '[W]', 'All power not converted to electricity.'],
          ['Best possible electrical output', R`\dot W_{\text{elec,max}} = \eta_{EM}\tfrac{16}{27}\cdot\tfrac12\rho A v_1^3`, '[W]', 'Betz limit × coupling efficiency.']
        ]]
      ]
    },
    {
      num: '13.9', title: 'Method and Summary',
      blocks: [
        ['list', 'Solving a wind turbine problem:', true, [
          R`From the swept **radius** find $A = \pi r^2$ (watch out: radius, not diameter).`,
          R`Find the speed at the rotor $v = \tfrac12(v_1 + v_2)$ — needed for $\dot m$ and $F$. If $v$ is given directly (e.g. "measured at the instant the wind hits the blades"), use it.`,
          R`Mass flow $\dot m = \rho A v$; force $F = \dot m(v_1 - v_2)$; harvested power $\dot W_{\text{turbine}} = Fv$, or (13.8)/(13.9).`,
          R`Efficiency: $C_P = \dot W_{\text{turbine}}/\tfrac12\rho A v_1^3$ (or $\tfrac12(1 + z - z^2 - z^3)$). It must not exceed 16/27.`,
          R`If only the wind speed is given and a **maximum** is asked for, use the Betz limit: $\dot W_{\text{turbine,max}} = \tfrac{16}{27}\cdot\tfrac12\rho A v_1^3$.`,
          R`Electrical output: multiply by $\eta_{EM}$; heat = the rest. For "how many turbines", divide the demand by the output per turbine and **round up**.`
        ]],
        ['list', 'Betz derivation skeleton (learn this for a written derivation):', true, [
          R`**Energy route [1]:** KE flow in − out with $\dot m_1 = \dot m = \dot m_2$: $\dot W_{\text{turbine}} = \tfrac12\rho A v(v_1^2 - v_2^2)$ (13.4).`,
          R`**Force (Step 1):** momentum change of the stream, $F = \dot m(v_1 - v_2) = \rho A v(v_1 - v_2)$ (13.5).`,
          R`**Force route [2] (Step 2):** power = force × speed at the disc, $\dot W_{\text{turbine}} = Fv = \rho A v^2(v_1 - v_2)$ (13.6).`,
          R`**Step 3:** equate [1] and [2], factorise $v_1^2 - v_2^2$, cancel: $v = \tfrac12(v_1 + v_2)$ (13.7), so $\dot W_{\text{turbine}} = \tfrac14\rho A(v_1 + v_2)(v_1^2 - v_2^2)$ (13.8).`,
          R`**Step 4:** expand, take out $v_1^3$, set $z = v_2/v_1$: $\dot W_{\text{turbine}} = \tfrac14\rho A v_1^3(1 + z - z^2 - z^3)$ (13.9).`,
          R`**Steps 5–6:** $d\dot W/dz = 0 \Rightarrow 1 - 2z - 3z^2 = (1 + z)(1 - 3z) = 0 \Rightarrow z = 1/3$ (reject $z = -1$).`,
          R`**Step 7:** $\dot W_{\text{turbine,max}} = \tfrac{8}{27}\rho A v_1^3$; divide by the no-turbine reference $\tfrac12\rho A v_1^3$ (13.10): $C_{P,\max} = 16/27 = 59.3\%$ (13.11).`
        ]],
        ['warn', 'Recall Knowledge', [
          R`Two routes to $\dot W_{\text{turbine}}$: **energy** ([1], KE flow in − out) and **force** ([2], $F \times v$). Equating them is the whole trick that gives $v = \tfrac12(v_1 + v_2)$.`,
          R`$1.293$ kg/m³ (used throughout the course problems) is dry air at 0 °C and 1 atm; at 15 °C it is 1.225 kg/m³. Use what the question gives.`
        ]]
      ]
    },
    {
      num: 'Ex 13', title: 'Problem Sheet — Mechanical Energy Conversion 1 (Wind Energy and the Betz Limit)', wk: true,
      blocks: [
        ['para', R`Quick-check answers on the sheet: Q1 36,559; Q2 146.2; Q3 9.6; Q4 8; Q5 116; Q6 49.5. All six are confirmed below (units: kg/s, kN, kW, turbines, kW, %).`],
        ['ex', 'Q1 — mass flow rate through the swept area', [
          ['t', R`Wind moves normal to the plane of a horizontal axis turbine with swept radius 30 m. Upstream wind speed 12 m/s, downstream 8 m/s, constant air density 1.293 kg/m³. Calculate the mass flow rate of air through the swept area of the turbine blades. [36 559 kg/s]`],
          ['ans'],
          ['t', R`The key is that $\dot m$ uses the speed **at the rotor**, the mean of upstream and downstream (13.7):`],
          ['m', R`v = \frac{v_1 + v_2}{2} = \frac{12 + 8}{2} = 10\ \text{m/s} \qquad A = \pi\times30^2 = 2827.4\ \text{m}^2`],
          ['m', R`\dot m = \rho A v = 1.293\times2827.4\times10 = 36\,559\ \text{kg/s}`],
          ['t', R`Quick check ✓ (36,559). Note that $\rho A v_1 = 43\,870$ kg/s would be wrong — it is the flow through $A$ with no turbine.`]
        ]],
        ['ex', 'Q2 — force applied by the blades on the wind', [
          ['t', R`Using the same parameters as Q1, calculate the force applied by the turbine blades on the wind. [146.2 kN]`],
          ['ans'],
          ['t', R`Newton's second law in flow form, (13.5):`],
          ['m', R`F = \rho A v\,(v_1 - v_2) = \dot m\,(v_1 - v_2) = 36\,559\times(12 - 8) = 146\,235\ \text{N} = 146.2\ \text{kN}`],
          ['t', R`Directed **upstream** (it slows the air); the air pushes the rotor downstream with the same 146.2 kN. Quick check ✓.`]
        ]],
        ['ex', 'Q3 — heat generated in the generator', [
          ['t', R`A wind turbine imparts 20 kN of force on the wind (wind normal to the plane of the blades). The wind velocity at the instant it hits the blades is measured as 6 m/s. The generator has an electromechanical coupling efficiency of 92%. Calculate the rate of heat generation, as a by-product of electromechanical energy conversion, in the generator. [9.6 kW]`],
          ['ans'],
          ['t', R`Power harvested from the wind = force × air speed at the rotor (13.6), $\dot W = F\,dx/dt = Fv$:`],
          ['m', R`\dot W_{\text{turbine}} = 20\ \text{kN}\times6\ \text{m/s} = 120\ \text{kW}`],
          ['m', R`\dot W_{\text{elec}} = \eta_{EM}\dot W_{\text{turbine}} = 0.92\times120 = 110.4\ \text{kW}`],
          ['m', R`\dot W_{\text{loss}} = 120 - 110.4 = (1 - 0.92)\times120 = 9.6\ \text{kW of heat}`],
          ['t', R`Quick check ✓ (9.6). The 6 m/s is already the speed at the rotor — do not average it with anything.`]
        ]],
        ['ex', 'Q4 — how many turbines for a village?', [
          ['t', R`A small community in Holland wants wind turbines to deliver 380 kW to their village, assuming a wind speed of 7 m/s. The available HAWTs have a swept radius of 12 m and a constant electromechanical coupling efficiency of 86%. Using the maximum theoretical efficiency of wind turbines, calculate the minimum number of turbines needed. [8]`],
          ['ans'],
          ['t', R`**Power in the wind** through one rotor's swept area with no turbine present (13.10) (density 1.293 kg/m³ as in the other questions):`],
          ['m', R`\dot W_{\text{air}} = \tfrac12\rho A v_1^3 = 0.5\times1.293\times\pi\times12^2\times7^3 = 0.5\times1.293\times452.39\times343 = 100\,317\ \text{W}`],
          ['t', R`**Betz limit** — the most the blades can harvest:`],
          ['m', R`\dot W_{\text{turbine,max}} = \tfrac{16}{27}\times100\,317 = 59\,447\ \text{W}`],
          ['t', R`**Coupling losses:**`],
          ['m', R`\dot W_{\text{elec,max}} = 0.86\times59\,447 = 51\,125\ \text{W} = 51.1\ \text{kW per turbine}`],
          ['m', R`N = \frac{380}{51.12} = 7.43 \;\Rightarrow\; \text{round up: } \mathbf{8}\ \text{turbines}`],
          ['t', R`Seven would give only 358 kW. Because this uses the Betz limit, 8 is a theoretical **minimum**; real turbines ($C_P \approx 0.45$) would need more. Quick check ✓ (8).`]
        ]],
        ['warn', 'Note', [
          R`Q4 does not state the air density; the course solution uses 1.293 kg/m³ from the other questions. With 1.225 kg/m³ (air at 15 °C) each turbine gives 48.4 kW and $N = 7.85$ — still **8**.`
        ]],
        ['ex', 'Q5 — power harvested by the blades', [
          ['t', R`A conventional HAWT (Figure 1) has swept-area radius 15 m. Upstream wind velocity 8 m/s, downstream 5 m/s, constant air density 1.293 kg/m³. Calculate the power harvested by the turbine blades from the wind. [116 kW]`],
          ['svg', 'tf_betz_q5', 'Q5–Q6 (sheet Figure 1): swept radius 15 m, 8 m/s upstream, 5 m/s downstream, ρ = 1.293 kg/m³ — the same turbine as the Problem Class.'],
          ['ans'],
          ['t', R`Using (13.9) with $z = 5/8$:`],
          ['m', R`\dot W_{\text{turbine}} = \tfrac14\rho A v_1^3(1 + z - z^2 - z^3) = \tfrac14\times1.293\times\pi\times15^2\times8^3\times\left(1 + 0.625 - 0.625^2 - 0.625^3\right)`],
          ['m', R`= 228.49\times512\times0.990234 = 115\,845\ \text{W} \approx 116\ \text{kW}`],
          ['t', R`Or via $v = 6.5$ m/s and (13.8): $\tfrac14\rho A(v_1 + v_2)(v_1^2 - v_2^2) = 228.49\times13\times39 = 115\,845$ W. Quick check ✓ (116).`]
        ]],
        ['ex', 'Q6 — efficiency of the turbine', [
          ['t', R`Using the same parameters as Q5, calculate the efficiency of the wind turbine. Assume no losses in the generator. [49.5%]`],
          ['ans'],
          ['t', R`Reference: the power in the air passing through area $A$ at $v_1$ **with no turbine**:`],
          ['m', R`\dot W_{\text{air}} = \tfrac12\rho A v_1^3 = \tfrac12\times1.293\times\pi\times15^2\times8^3 = 456.98\times512 = 233\,976\ \text{W}`],
          ['m', R`C_P = \frac{\dot W_{\text{turbine}}}{\dot W_{\text{air}}} = \frac{115\,845}{233\,976} = 0.495 = 49.5\%`],
          ['t', R`Check: $\tfrac12(1 + z - z^2 - z^3) = \tfrac12\times0.990234 = 0.4951$ ✓, below the Betz limit of 59.3%. Quick check ✓ (49.5).`]
        ]]
      ]
    }
  ]
}
