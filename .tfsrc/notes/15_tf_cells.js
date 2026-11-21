{
  key: 'tf_cells', area: 'batt', num: '15', week: 'Weeks 7–9',
  name: 'Batteries: Cells, Redox Potential and Gibbs Free Energy',
  triggers: 'cell / battery / galvanic cell · anode, cathode, electrolyte · oxidation or reduction half reaction · E₀ = E_cathode − E_anode · chemical potential μ in J per electron · e = 1.602×10⁻¹⁹ C · Faraday F = eN_A = 96 485 C/mol · w_elec = nFE₀ · ΔG = −nFE₀ · spontaneous? (ΔG < 0, E₀ > 0) · charge vs discharge · J per mole of Zn / Cu / Ag · specific energy (J/kg) vs energy density (J/m³) · primary vs secondary',
  sections: [
    {
      num: '', title: 'Revision Objectives — Cells, Redox Potential and Gibbs Free Energy',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`List the main forms of energy storage and the characteristics engineers use to choose between them (cost, lifetime, size, response time, power, energy density, efficiency, safety).`,
          R`Distinguish **specific energy** (J/kg) from **energy density** (J/m³) and convert one to the other with $\rho$.`,
          R`Explain primary vs secondary cells, and cells vs battery packs.`,
          R`Name the three critical parts of a galvanic cell (anode, cathode, electrolyte) and say what happens at each during discharge.`,
          R`Use the **correct (chemist's)** and the **engineer's** anode/cathode conventions, and say which electrode is which in charge and in discharge.`,
          R`Write oxidation and reduction half reactions and combine them into the overall redox reaction (→ for a primary cell, ⇌ for a secondary cell).`,
          R`Find a cell potential from chemical potentials, $E_0 = (\mu_C - \mu_A)/e$, or from electrode potentials, $E_0 = E_{cathode} - E_{anode}$.`,
          R`Link charge to electrical work: $w_{elec} = QE_0$, $F = eN_A$, $Q = nF$, so $w_{elec} = nFE_0$ per mole.`,
          R`Derive $\Delta G = \Delta H - T\Delta S = -T\Delta S_{universe}$ from the Second Law and use $\Delta G = -w_{elec} = -nFE_0$ with the correct signs.`,
          R`State the two spontaneity tests ($\Delta G < 0$, $E_0 > 0$) and apply them to charge and discharge.`,
          R`Explain why real cells are thin, many-layered stacks (surface area), and how activation energy sets reaction rate even when $\Delta G < 0$.`
        ]],
        ['warn', 'Note', [
          R`**Scope.** This topic covers Async 1.1–1.3, Batteries Sync Session 1 and Battery Problem Sheet 1 (printed as "Problem Sheet 2 (Batteries 1)"). Session 1's learning objectives also list "accessible energy from performance data" and "heat generation rate"; those are taught in **Session 2** and are in **Topic 16 (Lithium-ion cells)**, together with the Nernst equation, real-world electrode potentials, energy-dense vs rate-capable design, C-rates and cell resistance.`
        ]]
      ]
    },
    {
      num: '15.1', title: 'Energy Storage and Where Batteries Fit',
      blocks: [
        ['para', R`**Energy storage** covers one of the largest technology industries in the modern world. It is critical for local and national energy networks, for transport and for consumer electronics. The forms used on a commercial scale (in 2025) include:`],
        ['list', null, false, [
          R`**Hydrogen** energy storage (e.g. fuel cells);`,
          R`**Electrochemical** storage (e.g. lithium-ion batteries), the subject of this topic;`,
          R`**Thermal** energy storage;`,
          R`**Gravimetric** storage (e.g. pumped hydroelectric: raise water, store $mgh$);`,
          R`**Kinetic** storage (e.g. flywheels: store $\tfrac12 I\omega^2$).`
        ]],
        ['para', R`Each has its own attributes. When choosing one for an application, engineers weigh up (the list is not exhaustive):`],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0);width:24%">Characteristic</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">The question it answers</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px"><b>Cost</b></td><td style="padding:6px 10px">Usually quoted in $/kWh to manufacture or install; maintenance needs matter too.</td></tr>'
          + '<tr><td style="padding:6px 10px"><b>Lifetime</b></td><td style="padding:6px 10px">How quickly does the technology degrade?</td></tr>'
          + '<tr><td style="padding:6px 10px"><b>Size</b></td><td style="padding:6px 10px">How small or large can it be? What limits scale-up? Is it modular (can you add more storage later)?</td></tr>'
          + '<tr><td style="padding:6px 10px"><b>Response time</b></td><td style="padding:6px 10px">How quickly can it be switched on to start storing or delivering energy?</td></tr>'
          + '<tr><td style="padding:6px 10px"><b>Power delivery</b></td><td style="padding:6px 10px">How fast can it charge or discharge? Quoted in W/kg or W/l.</td></tr>'
          + '<tr><td style="padding:6px 10px"><b>Energy density</b></td><td style="padding:6px 10px">How much energy fits in a given amount? Volumetric energy density in Wh/l; gravimetric energy density (properly called <b>specific energy</b>) in Wh/kg.</td></tr>'
          + '<tr><td style="padding:6px 10px"><b>Efficiency</b></td><td style="padding:6px 10px">How much energy do you get out compared with what you put in?</td></tr>'
          + '<tr><td style="padding:6px 10px"><b>Safety</b></td><td style="padding:6px 10px">How do people interact with the system, and can that be done safely?</td></tr>'
          + '</tbody></table></div>'],
        ['warn', 'Reflection Point', [
          R`Which energy storage technology do you use every day, and why was it chosen over the alternatives? (Most likely the battery in your phone or watch: small, light, instantly available, rechargeable, safe to carry.)`
        ]],
        ['para', R`**What is a battery?** It depends who you ask (Session 1):`],
        ['list', null, false, [
          R`**Society:** a device that powers my TV remote, sits in my car or powers my cordless drill.`,
          R`**(Electro)chemist:** a device containing a chemical reaction that induces **charge transfer** from an anode to a cathode (or vice versa).`,
          R`**Engineer:** a device that enables the **storage of energy for a sustained period**. (Ask: what are batteries used for, and why do we need them?)`
        ]],
        ['para', R`**Primary vs secondary.** A **primary** cell (e.g. an AA battery in a TV remote) cannot be recharged: its electrochemical reaction is **irreversible**, so once the store is depleted the reaction cannot be run backwards. A **secondary** cell is rechargeable because its reaction is, at least to some extent, **reversible**. This course focuses on secondary cells.`],
        ['svg', 'tf_cells_primary_secondary', 'Async 1.1 Figure 1: a secondary battery exchanges energy both ways (discharge out, charge in); a primary battery only discharges.'],
        ['para', R`**Cells, batteries and packs.** "Battery" is a catch-all word for any electrochemical device: "my battery has run flat" can mean a phone (one **cell**) or an electric vehicle (thousands of cells). The **galvanic cell** is the fundamental device that stores the energy; a **battery pack** is an assembly of many galvanic cells that makes a larger store.`],
        ['svg', 'tf_cells_cell_pack', 'Async 1.1 Figure 2: one cell (e.g. a single cylindrical cell) and a pack built from thousands of them.'],
        ['para', R`**Where batteries are used** (Async 1.1):`],
        ['list', null, false, [
          R`**Personal electronics.** The ideal store: you would not put a pumped-hydro station or a flywheel in a phone, nor refuel a laptop with petrol. No societal shift was needed, so development is about **optimising** energy density, cost and lifetime for each device. (The Sony Walkman WM-101, 1985, already had a rechargeable battery; for about 15 years almost all consumer electronics have been rechargeable.)`,
          R`**Transport.** About **75 % (by kWh)** of lithium-ion batteries made in 2025 go into electric vehicles, the single biggest market across all storage technologies; EV requirements (cost, lifetime, energy density, power) drive battery development. The challenge is **societal shift**: drivers expect to refuel in minutes (hence the push for fast charging), and worry about range and fires. Batteries and hydrogen (fuel cells) are both alternatives to the internal combustion engine.`,
          R`**Stationary storage.** Batteries cannot store the world's energy demand: there are not enough natural resources (e.g. lithium) and the cost would be prohibitive, so future networks will mix many technologies. Batteries suit stores that cycle **at least once a day** (keeping a full battery idle is too expensive), and they switch on very quickly, so they handle **spikes** in demand or in generation (e.g. sun emerging over a solar farm). Uses: alongside wind and solar farms, **peak shaving**, and **modularity** (a home owner picks any size; a utility can build in stages).`
        ]],
        ['warn', 'Reflection Point', [
          R`Why are batteries preferred to fuel cells in cars, and where might fuel cells win? (Think: battery round-trip efficiency and existing grid charging vs hydrogen's much higher specific energy and minutes-long refuelling, which favour heavy, long-range vehicles such as buses, trucks, trains and ships.)`
        ]]
      ]
    },
    {
      num: '15.2', title: 'Specific Energy vs Energy Density: What Chance Do Batteries Stand?',
      blocks: [
        ['para', R`Two different "per amount" measures of stored energy:`],
        ['list', null, false, [
          R`**Specific energy** (gravimetric): energy stored per unit **mass**, J/kg (often Wh/kg). Matters when weight matters (aircraft, cars, phones).`,
          R`**Energy density** (volumetric): energy stored per unit **volume**, J/m³ (often Wh/l). Matters when space matters.`
        ]],
        ['para', R`They are linked by the density $\rho$ of the storage material, exactly as mass per volume links the two:`],
        ['disp', [ R`\boxed{[\text{Energy density}] = \rho\cdot[\text{Specific energy}]}\qquad \frac{\text{J}}{\text{m}^3} = \frac{\text{kg}}{\text{m}^3}\cdot\frac{\text{J}}{\text{kg}} \tag{15.1}` ]],
        ['svg', 'tf_cells_energy_chart', 'Session 1 slide 11: energy density against specific energy for selected stores. Fossil fuels sit at about 30–50 MJ/kg and 25–40 MJ/L; a lithium-ion battery is a dot near the origin.'],
        ['warn', 'Key Insight', [
          R`On a pure energy-per-kg or per-litre basis, batteries lose badly to fossil fuels, by a factor of roughly 50. Liquid hydrogen has the highest specific energy (about 140 MJ/kg) but a low energy density.`,
          R`Batteries still win many applications because of the **other** characteristics in §15.1: they convert stored energy to electrical work directly (no heat engine, so no Carnot limit), at high efficiency, respond instantly, are rechargeable, modular and clean at the point of use.`
        ]],
        ['ex', 'Worked example — converting specific energy to energy density (illustrative numbers)', [
          ['t', R`A high-end lithium-ion cell stores 250 Wh/kg and its average density is 2600 kg/m³. Find its energy density in Wh/L and MJ/L, and its specific energy in MJ/kg. Compare with diesel (about 46 MJ/kg).`],
          ['ans'],
          ['t', R`Use (15.1), keeping units consistent. $1\ \text{Wh} = 3600\ \text{J}$ and $1\ \text{m}^3 = 1000\ \text{L}$.`],
          ['m', R`\text{Energy density} = 2600\ \tfrac{\text{kg}}{\text{m}^3}\times 250\ \tfrac{\text{Wh}}{\text{kg}} = 650\,000\ \tfrac{\text{Wh}}{\text{m}^3} = 650\ \tfrac{\text{Wh}}{\text{L}}`],
          ['m', R`650\ \tfrac{\text{Wh}}{\text{L}}\times3600\ \tfrac{\text{J}}{\text{Wh}} = 2.34\ \tfrac{\text{MJ}}{\text{L}},\qquad 250\ \tfrac{\text{Wh}}{\text{kg}}\times3600 = 0.9\ \tfrac{\text{MJ}}{\text{kg}}`],
          ['t', R`Diesel's 46 MJ/kg is about $46/0.9 \approx 51$ times larger, which is why the battery dot sits in the corner of the chart. (2.34 MJ/L is a little above the 1–2 MJ/L read off the lecture chart. The chart reflects typical, older cells; the best current cells are higher, but still about 15 times below diesel by volume.)`]
        ]],
        ['eq', [
          ['Energy density from specific energy', R`[\text{J/m}^3] = \rho\,[\text{J/kg}]`, '[J/m³]', 'ρ = density of the storage device or material.'],
          ['Unit conversion', R`1\ \text{Wh} = 3600\ \text{J},\quad 1\ \text{kWh} = 3.6\ \text{MJ}`, '[J]', 'Battery data are usually in Wh; thermodynamics in J.']
        ]]
      ]
    },
    {
      num: '15.3', title: 'The Galvanic Cell and Its Naming Conventions',
      blocks: [
        ['para', R`A galvanic cell (from here on just a **cell**) stores energy as **chemical potential energy** in the compounds that make up its electrodes. Every cell has three critical components:`],
        ['list', null, true, [
          R`**Anode**, often called the **negative electrode**;`,
          R`**Cathode**, often called the **positive electrode**;`,
          R`**Electrolyte**, which lets **ions** (not electrons) move between them. A **separator** keeps the electrodes apart (dashed line in the figures).`
        ]],
        ['para', R`When the cell is **fully charged** (100 % on your phone) the anode has a very **low** potential and the cathode a very **high** potential. Negatively charged electrons at the anode "want" to leave the low-potential anode and move to the high-potential cathode. With no external connection (**open circuit**) they cannot: the chemical potential energy is **stored but not accessed**. Connect an external circuit (e.g. a light bulb) and electrons flow from anode to cathode through the wire. This is **charge transfer**, the pathway through which we access the stored energy.`],
        ['svg', 'tf_cells_galvanic', 'Async 1.2 Figures 1 and 2: in open circuit the energy is stored; with an external circuit the cell discharges, electrons flowing anode → cathode through the wire while ions carry the charge across the electrolyte.'],
        ['warn', 'Important', [
          R`**Direction check (discharge).** Electrons go **anode → cathode** through the external wire. Conventional current $I$ therefore flows the other way in the wire, out of the **positive** terminal (cathode) and into the negative one (anode), just like any source driving a load. Inside the cell the circuit is completed by **ions** moving through the electrolyte.`
        ]],
        ['para', R`**Which electrode is the anode?** Two conventions are used, and you must know both (Session 1 "housekeeping"):`],
        ['list', null, false, [
          R`**The correct (chemist's) version:** **oxidation** (losing electrons) is **always** at the **anode**; **reduction** (gaining electrons) is **always** at the **cathode**. Mnemonic from the slides: **"AN OX"** (an ox: ANode = OXidation) and **"RED CAT"** (REDuction = CAThode). Because the reactions swap direction on charging, the **names swap electrodes** between discharge and charge.`,
          R`**The engineer's version:** the **anode** is the material where oxidation occurs **during discharge**, and the **cathode** is where reduction occurs **during discharge**. The names are **fixed to the materials**: anode = negative electrode, cathode = positive electrode, whether the cell is charging or discharging. This is the convention battery engineers (and lithium-ion data sheets) use.`
        ]],
        ['svg', 'tf_cells_charge_discharge', 'The same cell in discharge and in charge. The materials never move; only the reactions and the flow directions reverse. Bottom rows: the strict (chemist\'s) names swap on charging, the engineer\'s names stay with the material.'],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)"></th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Negative electrode (low potential)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Positive electrode (high potential)</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px"><b>Discharge</b>: reaction · chemist · engineer</td><td style="padding:6px 10px">oxidation · anode · anode</td><td style="padding:6px 10px">reduction · cathode · cathode</td></tr>'
          + '<tr><td style="padding:6px 10px"><b>Charge</b>: reaction · chemist · engineer</td><td style="padding:6px 10px">reduction · <b>cathode</b> · anode</td><td style="padding:6px 10px">oxidation · <b>anode</b> · cathode</td></tr>'
          + '<tr><td style="padding:6px 10px">Electron flow in the wire</td><td style="padding:6px 10px" colspan="2">discharge: negative → positive (through the load) · charge: positive → negative (pushed by the power supply)</td></tr>'
          + '</tbody></table></div>'],
        ['warn', 'Warning', [
          R`Whenever a question says "anode" or "cathode", check **which convention and which mode** it means. The Session 1 potential diagrams for **charging** (slide 36, §15.8) use the strict chemist's names, so there the "anode" is the positive electrode. Lithium-ion engineering (Topic 16) uses the engineer's names throughout.`
        ]]
      ]
    },
    {
      num: '15.4', title: 'Redox Reactions: Half Reactions and the Overall Cell Reaction',
      blocks: [
        ['para', R`During a discharge three processes happen **simultaneously**:`],
        ['list', null, false, [
          R`**Anode:** loses electrons (oxidation);`,
          R`**Cathode:** accepts electrons (reduction);`,
          R`**Electrolyte:** ion transfer from anode to cathode.`
        ]],
        ['para', R`If they did not occur together, positive or negative charge would build up at different points in the cell. We describe the electrode reactions as **half reactions** (half-cell reactions), using a generic reactant $Y$ at the anode and $Z$ at the cathode:`],
        ['disp', [ R`\text{Anode (oxidation):}\quad Y \rightarrow Y^{+} + e^{-} \tag{15.2}`, R`\text{Cathode (reduction):}\quad Z + e^{-} \rightarrow Z^{-} \tag{15.3}` ]],
        ['para', R`At the anode the reactant is $Y$ and the product $Y^+$; this oxidation releases one electron. At the cathode the reactant $Z$ takes in one electron to give $Z^-$. (Some half reactions release or take in **several** electrons, e.g. $\mathrm{Mg \rightarrow Mg^{2+} + 2e^-}$.) Adding the two half reactions gives the overall cell reaction, called the **redox** (REDuction–OXidation) reaction:`],
        ['disp', [ R`Z + Y + e^{-} \rightarrow Z^{-} + Y^{+} + e^{-}\quad\Longrightarrow\quad \boxed{Z + Y \rightarrow Z^{-} + Y^{+}} \tag{15.4}` ]],
        ['para', R`The electron appears on both sides, so it is usually cancelled. The charge transferred in this reaction is that of **one electron**, passed from anode to cathode. Its magnitude is the **elementary charge** $e = 1.602\times10^{-19}$ C.`],
        ['svg', 'tf_cells_timesteps', 'Session 1 slides 15–16: the total charge of cell + circuit must stay constant, so as one electron enters the cathode (reducing Z), another leaves the anode (oxidising Y). The two events are simultaneous; they are drawn as two frames only so each can be labelled.'],
        ['warn', 'Key Insight', [
          R`The cell is a **charge pump**, not a store of electrons: electrons are neither created nor destroyed. Each electron that does work in the external circuit is released by one oxidation and consumed by one reduction. The **energy** comes from the chemical change $Z + Y \rightarrow Z^- + Y^+$.`
        ]],
        ['para', R`**A real example.** In the zinc–copper (Daniell) cell, zinc is oxidised and copper ions are reduced, each transferring **2** electrons per atom:`],
        ['para', R`Half reactions of the Daniell (Zn–Cu) cell: oxidation $\mathrm{Zn \rightarrow Zn^{2+} + 2e^-}$ at the anode, reduction $\mathrm{Cu^{2+} + 2e^- \rightarrow Cu}$ at the cathode. Overall:`],
        ['disp', [ R`\mathrm{Zn + Cu^{2+} \rightarrow Zn^{2+} + Cu} \tag{15.5}` ]],
        ['para', R`Adding the half reactions gives $\mathrm{Zn + Cu^{2+} + 2e^- \rightarrow Zn^{2+} + Cu + 2e^-}$; the slides leave the electrons in "for clarity", and by convention they cancel to give (15.5). Per **mole** of Zn, 2 moles of electrons pass from anode to cathode, and 1 mole of Cu is deposited: each Zn atom transfers $z = 2$ electrons.`],
        ['para', R`**Secondary cells: reversible half reactions.** To recharge, each half reaction must be able to run backwards. This is written with the double arrow $\rightleftharpoons$:`],
        ['disp', [ R`Y \rightleftharpoons Y^{+} + e^{-},\qquad Z + e^{-} \rightleftharpoons Z^{-},\qquad Z + Y \rightleftharpoons Z^{-} + Y^{+} \tag{15.6}` ]],
        ['para', R`Read left → right for **discharge** and right → left for **charge**. The electrode where $Y \rightleftharpoons Y^+ + e^-$ happens is the anode in discharge but (strict names) the cathode in charge; the $Z$ electrode is the cathode in discharge and the anode in charge (Session 1 slide 30).`]
      ]
    },
    {
      num: '15.5', title: 'Chemical Potential and Cell Potential',
      blocks: [
        ['para', R`Every half reaction has an associated **chemical potential energy** $\mu_i$, measured in joules (here **per electron transferred**): $\mu_A$ for the anode half reaction and $\mu_C$ for the cathode half reaction. During discharge the chemical potential energy that can be extracted from the redox reaction is`],
        ['disp', [ R`\mu_0 = \mu_C - \mu_A \tag{15.7}` ]],
        ['para', R`$\mu$ itself is hard to quantify and is not something an engineer measures directly. It is easier to think of it as the product of the two things we can measure: the **charge transferred** ($e$ per electron) and the **potential difference** between cathode and anode. Units: charge in coulombs $\text{C} = \text{A s}$; energy in joules $\text{J} = \text{A V s}$. So energy ÷ charge has units of **volts**, and $\mu_0/e$ is the **cell potential** $E_0$:`],
        ['disp', [ R`\boxed{E_0 = \frac{\mu_0}{e} = \frac{\mu_C - \mu_A}{e} = E_C - E_A} \tag{15.8}` ]],
        ['para', R`$E_C$ and $E_A$ are the potentials of the cathode and anode half reactions (**electrode potentials**, in V). Session 1 states the same thing as "Definition 2" of spontaneity:`],
        ['disp', [ R`E_0 = E_{cathode} - E_{anode} \tag{15.9}` ]],
        ['para', R`When $E_0 > 0$ the redox reaction is **product favoured**: it is **spontaneous** and the cell can deliver energy, i.e. it is discharging. This is made rigorous with Gibbs free energy in §15.6–15.8.`],
        ['warn', 'Important', [
          R`**Which sign do $\mu_A$ and $E_A$ carry?** Both electrodes are measured on **one common scale**. $\mu_A$ and $\mu_C$ are the energies per electron associated with each electrode's half reaction, measured from the same reference, and $E_A = \mu_A/e$, $E_C = \mu_C/e$ are the electrode potentials on that scale, which is the tabulated **reduction** scale. When a question says "the chemical potential of the **oxidation** half reaction" (Problem Sheet Q4), that only tells you **which electrode** it is (the anode, where oxidation happens). The value is still on the common scale; it is not a sign-reversed "oxidation potential". The subtraction $\mu_C - \mu_A$ (or $E_C - E_A$) is what accounts for the anode reaction running backwards. Rule: **cathode minus anode, both on the reduction scale; never flip a sign first.**`,
          R`**Using tabulated electrode potentials.** Electrode potentials are tabulated as **reduction potentials** (each half reaction written as a reduction, relative to a reference electrode). In $E_0 = E_{cathode} - E_{anode}$, put in **both** tabulated reduction potentials as they are. The minus sign already accounts for the anode reaction running as an oxidation; **do not also flip the sign of $E_{anode}$**. The electrode with the **higher** reduction potential is the cathode in discharge.`,
          R`Values used in this course: $\mathrm{Zn^{2+}/Zn}$: −0.76 V; $\mathrm{Cu^{2+}/Cu}$: +0.34 V; $\mathrm{Ag^+/Ag}$: +0.80 V. So Zn–Cu gives $0.34 - (-0.76) = 1.10$ V and Cu–Ag gives $0.80 - 0.34 = 0.46$ V. Some sources quote a value written as an **oxidation potential** (the reduction value with its sign reversed, e.g. −0.34 V for $\mathrm{Cu \rightarrow Cu^{2+} + 2e^-}$). Convert it back to the reduction value before using $E_{cathode} - E_{anode}$. Problem Sheet Q9 does exactly this; see Ex 15 Q9.`
        ]],
        ['svg', 'tf_cells_reduction_ladder', 'Reduction-potential ladder for the three couples in the problem sheet. A cell\'s potential is the gap between its two rungs: Zn–Cu 1.10 V, Cu–Ag 0.46 V. The same Cu couple is the cathode against Zn and the anode against Ag.'],
        ['ex', 'Worked example — energy per electron and per atom in the Daniell cell', [
          ['t', R`The Zn–Cu redox reaction (15.5) has $E_0 = 1.10$ V. How much chemical potential energy is released per electron transferred, and per zinc atom oxidised?`],
          ['ans'],
          ['t', R`Rearrange (15.8): $\mu_0 = eE_0$ is the energy per electron.`],
          ['m', R`\mu_0 = eE_0 = (1.602\times10^{-19}\ \text{C})(1.10\ \text{V}) = 1.762\times10^{-19}\ \text{J per electron}`],
          ['t', R`Each Zn atom releases **two** electrons, so the energy per Zn atom is twice this:`],
          ['m', R`2eE_0 = 3.524\times10^{-19}\ \text{J per Zn atom}`],
          ['t', R`These are tiny numbers. §15.7 scales up to a mole of atoms, which is where the Faraday constant comes in.`]
        ]],
        ['eq', [
          ['Extractable chemical potential', R`\mu_0 = \mu_C - \mu_A`, '[J]', 'Per electron transferred; cathode minus anode.'],
          ['Cell potential', R`E_0 = \frac{\mu_C - \mu_A}{e} = E_{cathode} - E_{anode}`, '[V]', 'e = 1.602×10⁻¹⁹ C. Use tabulated reduction potentials for both electrodes.'],
          ['Spontaneity (Definition 2)', R`E_0 > 0 \Rightarrow \text{spontaneous}`, '[–]', 'Discharge.']
        ]]
      ]
    },
    {
      num: '15.6', title: 'Gibbs Free Energy, Entropy and Spontaneity',
      blocks: [
        ['para', R`The **change in Gibbs free energy** $\Delta G$ (units J) is a general thermodynamic quantity: for now, forget batteries. Gibbs free energy is a form of potential energy that can be converted into **useful work**; as in mechanics, potential energy is a **capacity to do work**. In electrochemistry, $-\Delta G$ is the **maximum non-expansion work** (work other than pushing back the surroundings, $p\Delta V$) that can be extracted from a thermodynamically closed system. For a cell, that non-expansion work is **electrical work**.`],
        ['warn', 'Recall Knowledge', [
          R`**Second Law:** entropy $S$ measures disorder, and for any real process the entropy of the **universe** increases, $\Delta S_{universe} > 0$ (equal to zero only in the reversible limit).`,
          R`**Clausius:** for heat $q$ received reversibly at temperature $T$, $\Delta S = q/T$.`,
          R`**First Law** (closed system): $\Delta U = q + w$ with $q$ = heat **gained** and $w$ = work done **on** it. This is the "into the system is positive" bookkeeping of Topic 1; with $W$ = work done **by** the system it is the same as $\Delta U = Q - W$.`,
          R`**Enthalpy:** $H = U + pV$, so $\Delta H = \Delta U + p\Delta V$ at constant pressure.`
        ]],
        ['para', R`**Spontaneity and entropy.** A reaction that happens **spontaneously** (we do not have to put work in) increases the entropy of the universe, $\Delta S_{universe} > 0$. For a battery this is a **discharge**. A reaction that is **not** spontaneous needs work put in (a battery **charge**); considered on its own, the reaction would reduce universe entropy.`],
        ['warn', 'Note', [
          R`The Second Law is not broken by charging. We can never put work in with 100 % efficiency, so the entropy generated in producing and delivering that work (in the power station, the wires, the charger) outweighs the entropy decrease of the charging reaction. Overall, $\Delta S_{universe} > 0$ still holds.`
        ]],
        ['para', R`$\Delta G$ measures the change in the potential energy that may one day be converted to useful work. A reaction with $\Delta G < 0$ (e.g. a battery discharging) would, if left to run on its own with no work drawn (all the energy released as heat), **raise** the entropy of the universe; one with $\Delta G > 0$ would, on its own, **lower** it — so it never happens unless we drive it with work. Drawing the electrical work out reversibly takes $\Delta S_{universe}$ down towards 0 (Step 6 below); any real, irreversible discharge sits in between. So $\Delta G$ and $\Delta S_{universe}$ have **opposite signs**:`],
        ['disp', [ R`\Delta G < 0 \iff \Delta S_{universe} > 0,\qquad \Delta G \propto -\Delta S_{universe} \tag{15.10}` ]],
        ['para', R`**A thermodynamically closed system** exchanges **energy but no mass** with its surroundings, so the number of moles $n$ in it is constant. The **System** and the **Surroundings** together make up the **Universe**.`],
        ['svg', 'tf_cells_closed_system', 'Async 1.3 Figure 1: a closed System inside its Surroundings; together they are the Universe. Energy (heat, work) can cross the boundary, mass cannot.'],
        ['deriv', 'Derivation — ΔG = ΔH − TΔS, and why −ΔG is the maximum useful work', [
          ['t', R`**Setting (what is held constant).** The System (the cell) is closed. Its Surroundings are a very large **reservoir** at fixed temperature $T$ and fixed pressure $p$ (the lab, the atmosphere). Because the reservoir is so large, the heat it receives does not change its $T$ or $p$, and it receives that heat reversibly. The System starts and ends at the same $T$ and $p$. So everything below is at **constant $T$ and constant $p$**.`],
          ['t', R`**Step 1: the System's heat at constant pressure.** First Law for the System: $\Delta U = q + w$, with $q$ = heat **into** the System and $w$ = work done **on** it. For now the only work is expansion work against the surroundings, $w = -p\Delta V$ (no electrical work is drawn). Then:`],
          ['m', R`q_{sys} = \Delta U_{sys} + p\Delta V_{sys} = \Delta H_{sys}\qquad(\text{constant } p)`],
          ['t', R`**Step 2: the surroundings receive that heat.** Whatever heat leaves the System enters the reservoir:`],
          ['m', R`q_{surr} = -q_{sys} = -\Delta H_{sys}`],
          ['t', R`**Step 3: entropy change of the surroundings** (Clausius: the reservoir takes in $q_{surr}$ reversibly at $T$):`],
          ['m', R`\Delta S_{surr} = \frac{q_{surr}}{T} = -\frac{\Delta H_{sys}}{T} \tag{15.11}`],
          ['t', R`**Step 4: entropy of the universe**, which contains all entropy changes:`],
          ['m', R`\Delta S_{universe} = \Delta S_{sys} + \Delta S_{surr} = \Delta S_{sys} - \frac{\Delta H_{sys}}{T} \tag{15.12}`],
          ['t', R`**Step 5: turn entropy into energy.** Multiply (15.12) by $-T$:`],
          ['m', R`-T\Delta S_{universe} = \Delta H_{sys} - T\Delta S_{sys}`],
          ['t', R`The right-hand side involves only **System** properties. It is the change in the System's **Gibbs free energy** $G = H - TS$ at constant $T$. So $\Delta G$ is not an arbitrary definition: it is exactly $-T$ times the entropy change of the universe, written with system quantities only. This is why (15.10) holds: $\Delta G < 0$ exactly when $\Delta S_{universe} > 0$. (The course motivates the factor $T$ as "to define energy from entropy, we multiply by temperature"; Step 5 shows that it appears exactly.)`],
          ['m', R`\boxed{\Delta G = \Delta H_{sys} - T\Delta S_{sys} = -T\Delta S_{universe}}\qquad \Delta G < 0 \Rightarrow \text{spontaneous} \tag{15.13}`],
          ['t', R`**Step 6: why $-\Delta G$ is the maximum useful work.** Now let the System also deliver non-expansion (electrical) work $w_{elec}$ to an external circuit, counted positive **out**. The First Law becomes $\Delta U = q - p\Delta V - w_{elec}$, so the heat it takes in is $q_{sys} = \Delta H_{sys} + w_{elec}$, and the reservoir receives $-(\Delta H_{sys} + w_{elec})$. The Second Law requires:`],
          ['m', R`\Delta S_{universe} = \Delta S_{sys} - \frac{\Delta H_{sys} + w_{elec}}{T} \ \ge\ 0`],
          ['m', R`\Rightarrow\quad w_{elec} \ \le\ -\left(\Delta H_{sys} - T\Delta S_{sys}\right) = -\Delta G \tag{15.14}`],
          ['t', R`Equality holds for a **reversible** process ($\Delta S_{universe} = 0$, no entropy generated). Physically: every joule drawn out as work is a joule **not** sent to the surroundings as heat, so it lowers $\Delta S_{surr}$. The Second Law caps that at $-\Delta G$. Any irreversibility (finite current, internal resistance) gives less work and more heat.`]
        ]],
        ['warn', 'Note', [
          R`**The course route (Async 1.3).** Async 1.3 reaches Step 2 by treating the Surroundings as an ideal gas ($pV = nRT$, with $p$ the pressure the System exerts on them, $V$ their volume, $n$ their moles) that does no expansion work: $\Delta V = 0 \Rightarrow w = p\Delta V = 0$. Then $\Delta H_{surr} = \Delta U_{surr} + p\Delta V = q_{surr}$, and $\Delta H_{surr} = -\Delta H_{sys}$. Strictly $\Delta H = \Delta U + \Delta(pV)$, so dropping the $pV$ term needs **both** $V$ and $p$ constant. For a very large reservoir both are, so this is the same statement as Steps 1–2 above. Both routes give (15.13). The course's "$\Delta V = 0$" expresses that $\Delta G$ counts **non-expansion** work only.`,
          R`Async 1.3 phrases the definition as "ΔG is equal to the work exchanged between System and Surroundings, less the work done (w) System on Surroundings". Read this as: **total work minus the expansion ($p\Delta V$) work**, which leaves the non-expansion (electrical) work, bounded by (15.14).`
        ]],
        ['warn', 'Key Insight', [
          R`**Link to the thermodynamics you know.** $-\Delta H$ is the total energy the reaction releases (all as heat if no work is drawn). $T\Delta S_{sys}$ is the part that must be exchanged as **heat** for the entropy books to balance; it is not available as work. $\Delta G$ is what is left for **work**. It is the chemical equivalent of the Second Law limit on a heat engine, except that a cell converts chemical energy **directly** to work, so no Carnot factor appears.`,
          R`The $T\Delta S$ heat is called **reversible** (or **entropic**) heat. It returns as part of the heat-generation calculation in Topic 16.`
        ]],
        ['ex', 'Worked example — sign of ΔG and temperature (illustrative numbers)', [
          ['t', R`A reaction has $\Delta H_{sys} = -50$ kJ and $\Delta S_{sys} = -100$ J/K. Is it spontaneous at 298 K? At 600 K? Above what temperature does it stop being spontaneous?`],
          ['ans'],
          ['t', R`Use (15.13) with consistent units (J and J/K):`],
          ['m', R`T = 298\ \text{K}:\quad \Delta G = -50\,000 - 298(-100) = -20\,200\ \text{J} < 0\ \Rightarrow\ \text{spontaneous}`],
          ['m', R`T = 600\ \text{K}:\quad \Delta G = -50\,000 - 600(-100) = +10\,000\ \text{J} > 0\ \Rightarrow\ \text{not spontaneous}`],
          ['m', R`\Delta G = 0 \text{ at } T = \frac{\Delta H}{\Delta S} = \frac{-50\,000}{-100} = 500\ \text{K}`],
          ['t', R`This reaction releases heat ($\Delta H < 0$) but makes the system more ordered ($\Delta S < 0$). At low $T$ the enthalpy term wins; at high $T$ the $-T\Delta S$ penalty wins.`]
        ]],
        ['eq', [
          ['ΔG and universe entropy', R`\Delta G = -T\Delta S_{universe}`, '[J]', 'Opposite signs: ΔG < 0 ⇔ ΔS(universe) > 0.'],
          ['Surroundings entropy', R`\Delta S_{surr} = \frac{q_{surr}}{T} = -\frac{\Delta H_{sys}}{T}`, '[J/K]', 'Clausius; heat released by the system is absorbed at T.'],
          ['Gibbs free energy change', R`\Delta G = \Delta H - T\Delta S`, '[J]', 'System properties, constant T and p. ΔG < 0: spontaneous (Definition 1).']
        ]]
      ]
    },
    {
      num: '15.7', title: 'From Charge to Electrical Work: ΔG = −nFE₀',
      blocks: [
        ['para', R`How does the cell potential $E_0$ become useful **electrical energy** $w_{elec}$? The chemical reaction drives electrons, and electrons carry charge. Call the total charge passed $Q$ (C). The Session 1 classwork links six quantities: energy $w_{elec}$ (J), power $P$ (W), charge $Q$ (C), current $I$ (A), potential $E_0$ (V) and time $t$ (s):`],
        ['deriv', 'Classwork (slides 20–21) — how does E₀ give electrical work?', [
          ['t', R`Current is the rate of charge flow, and electrical power is current × potential difference:`],
          ['m', R`I = \frac{Q}{t}\;\Rightarrow\; Q = It,\qquad P = IE_0 = \frac{Q}{t}E_0`],
          ['t', R`Energy is power × time (constant $P$):`],
          ['m', R`w_{elec} = Pt = \frac{Q}{t}E_0\,t \;\Rightarrow\; \boxed{w_{elec} = QE_0} \tag{15.15}`]
        ]],
        ['para', R`**One reaction.** For the generic redox reaction (15.4), the charge passed is one electron, $Q = e$:`],
        ['disp', [ R`w_{elec} = eE_0\quad\text{(per reaction, one electron)} \tag{15.16}` ]],
        ['para', R`So there are two ways to get **more energy** out of a redox reaction (slide 22): **increase the potential difference** between cathode and anode (choose electrode materials far apart on the ladder), or **increase the charge exchanged** per reaction (choose half reactions that move more electrons, e.g. $\mathrm{Mg \rightarrow Mg^{2+} + 2e^-}$ with $\mathrm{Cu^{2+} + 2e^- \rightarrow Cu}$).`],
        ['para', R`**Scaling up to moles.** One electron's charge is tiny, so we count in **moles**. The **Avogadro constant** $N_A = 6.02214\times10^{23}\ \text{mol}^{-1}$ is the number of particles (here electrons) in one mole. The **Faraday constant** is the charge of one mole of electrons:`],
        ['disp', [ R`\boxed{F = eN_A \approx 96\,485.3\ \text{C mol}^{-1}} \tag{15.17}` ]],
        ['para', R`96 485.3 C/mol is the accepted value, from the exact SI constants $e = 1.602176634\times10^{-19}$ C and $N_A = 6.02214076\times10^{23}$ mol⁻¹. With the rounded $e = 1.602\times10^{-19}$ C used elsewhere in the course, the product is 96 474.7 C/mol (see the Faraday check below). Use $F = 96\,485.3$ C/mol.`],
        ['para', R`**Charge and work in moles.** If $n$ moles of electrons pass round the circuit, the charge is $Q = nF$ and the work is $w_{elec} = QE_0 = nFE_0$. This one formula is used in **two ways**, and you must say which one, because the units differ:`],
        ['list', null, false, [
          R`**Total work** (a whole cell, or a given charge): $n$ = moles of electrons **actually passed** (e.g. $n = Q/F$ from $Q = It$). The answer is in **J**.`,
          R`**Per mole of a species** (the problem-sheet style, "per mole of Zn"): put $n = z$, the number of electrons transferred **per formula unit of that species** ($z = 2$ for $\mathrm{Zn \rightarrow Zn^{2+} + 2e^-}$, $z = 1$ for $\mathrm{Ag^+ + e^- \rightarrow Ag}$). The answer is in **J per mol of that species**. The course writes this as "$n = 2$ moles of electrons" per mole of Zn.`
        ]],
        ['disp', [ R`Q = nF \tag{15.18}`, R`\boxed{w_{elec} = nFE_0\ \ [\text{J}]\qquad\text{per mole of species: } w_{elec} = zFE_0\ \ [\text{J mol}^{-1}]} \tag{15.19}` ]],
        ['svg', 'tf_cells_work_chain', 'The chain of definitions in Session 1: elementary charge → Faraday constant → charge → electrical work → Gibbs free energy.'],
        ['para', R`**Linking the two spontaneity tests** (slides 37–40). Definition 1 says a reaction is spontaneous if $\Delta G < 0$ [J]; Definition 2 says it is spontaneous if $E_0 > 0$ [V]. They are dimensionally different, so link them through the work. **Magnitude:** (15.14) says the most electrical work a cell can deliver is $-\Delta G$, reached when it runs reversibly. $E_0$ is the ideal (reversible, open-circuit) cell potential, so $w_{elec} = nFE_0$ **is** that maximum, and $w_{elec} = -\Delta G$. **Sign (consistency check, slides 38–40):** $Q$, the charge transferred, is always **positive**, and $E_0$ is **positive** when the reaction is spontaneous. So for a spontaneous reaction $w_{elec} = QE_0 > 0$ while $\Delta G < 0$, consistent with the minus sign. Therefore:`],
        ['disp', [ R`\boxed{\Delta G = -w_{elec} = -nFE_0} \tag{15.20}` ]],
        ['warn', 'Important', [
          R`**Sign conventions, all in one place.**`,
          R`$w_{elec}$ = electrical work **delivered by** the cell **to** the external circuit (positive in discharge). $\Delta G$ = change in the **cell's** Gibbs free energy (negative in discharge: the cell loses capacity to do work). So $\Delta G = -w_{elec}$ (Problem Sheet Q6).`,
          R`In Topic 1 language, $w_{elec}$ is a "work done **by** the system" quantity ($W$ in $\Delta U = Q - W$); work done **on** the cell is $-w_{elec}$.`,
          R`**Discharge:** $E_0 > 0$, $w_{elec} > 0$, $\Delta G < 0$. **Charge** (reaction reversed): $E_0 < 0$ with the strict names, $w_{elec} < 0$ (work is put **in**), $\Delta G > 0$.`,
          R`$n$ is moles of **electrons**, not moles of reactant. Per mole of Zn in (15.5), $n = z = 2$, and the answer is J **per mol Zn**. For a whole cell, $n$ is the total moles of electrons passed, and the answer is J.`
        ]],
        ['warn', 'Note', [
          R`**Maximum vs actual work.** $-\Delta G$ is the **maximum** non-expansion work, reached only if the cell runs reversibly (vanishingly small current). Equation (15.20) with the ideal cell potential $E_0$ is the equality case of (15.14): the most a cell can deliver. Real cells deliver less: at a finite current some of $-\Delta G$ is lost as heat in internal resistance, an irreversibility like friction in a pipe. Topic 16 quantifies this.`,
          R`**Faraday check.** With the rounded $e = 1.602\times10^{-19}$ C used in the course, $eN_A = 96\,474.7$ C/mol. The quoted $96\,485.3$ C/mol needs the full constants: $1.602176634\times10^{-19}\times6.02214076\times10^{23} = 96\,485.33$ C/mol. (Even $1.60218\times10^{-19}\times6.02214\times10^{23}$ gives 96 485.5.) Use $F = 96\,485.3$ C/mol as given; the 0.01 % difference is rounding.`
        ]],
        ['ex', 'Classwork (slides 27–28) — useful electrical work per mole of Zn and Cu', [
          ['t', R`How much useful electrical work can be extracted per mole of electrode ($\mathrm{Zn}$ and $\mathrm{Cu}$) from $\mathrm{Zn + Cu^{2+} + 2e^- \rightarrow Zn^{2+} + Cu + 2e^-}$, for which $E_0 = 1.10$ V? Take $F = 96\,485.3$ C/mol.`],
          ['ans'],
          ['t', R`Per mole of Zn oxidised (and per mole of Cu deposited), **2 moles of electrons** are transferred, so use the per-mole form of (15.19) with $z = 2$. $E_0 = 1.10$ V is the defined potential for this redox reaction.`],
          ['m', R`w_{elec} = zFE_0 = 2\times96\,485.3\times1.10 = 212\,267.66\ \text{J per mol Zn}\ (\approx 212.3\ \text{kJ/mol Zn, also per mol Cu})`],
          ['m', R`\Delta G = -w_{elec} = -212.3\ \text{kJ mol}^{-1}\ (<0:\ \text{spontaneous discharge})`],
          ['t', R`Check against the per-atom result of §15.5: $3.524\times10^{-19}\ \text{J}\times6.02214\times10^{23} = 212\,244$ J/mol, the same to within the rounding of $e$ (Faraday check above).`]
        ]],
        ['ex', 'Worked example — charge and energy from current and time (illustrative numbers)', [
          ['t', R`An ideal cell with $E_0 = 3.7$ V delivers a steady 2 A for 1 hour. Find the charge passed, the moles of electrons and the electrical work (in J and Wh).`],
          ['ans'],
          ['m', R`Q = It = 2\times3600 = 7200\ \text{C},\qquad n = \frac{Q}{F} = \frac{7200}{96\,485.3} = 0.0746\ \text{mol e}^-`],
          ['m', R`w_{elec} = QE_0 = 7200\times3.7 = 26\,640\ \text{J} = \frac{26\,640}{3600} = 7.4\ \text{Wh}`],
          ['t', R`$P = IE_0 = 7.4$ W for 1 h gives the same 7.4 Wh. For real cells the voltage falls as the cell discharges and with current; extracting accessible energy from measured data is done in Topic 16.`]
        ]],
        ['ex', 'Worked example — from J/mol to specific energy (J/kg and Wh/kg)', [
          ['t', R`Using the Daniell result (212 267.66 J per mol Zn), find the theoretical specific energy (a) per kg of zinc and (b) per kg of both reactants, Zn + Cu. Take molar masses Zn 65.38 g/mol and Cu 63.55 g/mol (standard data, not given in the course). Compare with §15.2.`],
          ['ans'],
          ['t', R`Divide J per **mol** by kg per **mol** to get J per kg (this combines §15.2 with (15.19)):`],
          ['m', R`\text{(a)}\ \frac{212\,267.66\ \text{J/mol}}{0.06538\ \text{kg/mol}} = 3.247\times10^{6}\ \text{J/kg} = 3.25\ \text{MJ/kg} = \frac{3.247\times10^6}{3600} = 902\ \text{Wh/kg of Zn}`],
          ['m', R`\text{(b)}\ \frac{212\,267.66}{0.06538 + 0.06355} = \frac{212\,267.66}{0.12893} = 1.646\ \text{MJ/kg} = 457\ \text{Wh/kg of reactants}`],
          ['t', R`(b) is the fairer figure, because both electrode materials have to be carried. A real cell is far lower again: the electrolyte, separator, current collectors and casing add mass but store nothing (§15.9), and the cell never delivers the ideal $nFE_0$ (Topic 16). Even this ideal 1.6 MJ/kg is about 28 times below diesel's 46 MJ/kg (46/1.65).`]
        ]],
        ['ex', 'Worked example — multi-electron species: Mg–Cu and Al–Ag', [
          ['t', R`Slide 22 suggests magnesium to increase the charge per reaction. Using standard reduction potentials $\mathrm{Mg^{2+}/Mg} = -2.37$ V and $\mathrm{Al^{3+}/Al} = -1.66$ V (standard data, not given in the course) with the course's Cu (+0.34 V) and Ag (+0.80 V), find: (a) $E_0$ and the maximum work per mol Mg for $\mathrm{Mg + Cu^{2+} \rightarrow Mg^{2+} + Cu}$; (b) $E_0$, the work per mol Al and per mol Ag for $\mathrm{Al + 3Ag^+ \rightarrow Al^{3+} + 3Ag}$.`],
          ['ans'],
          ['t', R`**Find $z$ from the half reactions first.** $\mathrm{Mg \rightarrow Mg^{2+} + 2e^-}$ gives $z = 2$ per Mg. $\mathrm{Al \rightarrow Al^{3+} + 3e^-}$ gives $z = 3$ per Al, and those 3 electrons reduce **3** $\mathrm{Ag^+}$, so $z = 1$ per Ag.`],
          ['m', R`\text{(a)}\ E_0 = 0.34 - (-2.37) = 2.71\ \text{V},\qquad w_{elec} = 2\times96\,485.3\times2.71 = 522\,950\ \text{J/mol Mg}\ (523\ \text{kJ/mol})`],
          ['m', R`\text{(b)}\ E_0 = 0.80 - (-1.66) = 2.46\ \text{V},\qquad w_{elec} = 3\times96\,485.3\times2.46 = 712\,062\ \text{J/mol Al}`],
          ['m', R`\text{per mol Ag: } w_{elec} = 1\times96\,485.3\times2.46 = 237\,354\ \text{J/mol Ag} = \tfrac13\ \text{of the per-mol-Al value}`],
          ['t', R`Mg–Cu beats Zn–Cu (212 kJ/mol) through slide 22's first lever, a larger $E_0$ (both transfer 2 electrons). Al uses the second lever, 3 electrons per atom. As in Ex 15 Q11 (later on this page), the per-mole answer depends on **which species** you divide by.`]
        ]],
        ['eq', [
          ['Charge, power, energy', R`Q = It,\quad P = IE_0,\quad w_{elec} = Pt = QE_0`, '[C, W, J]', 'Constant current and potential.'],
          ['Work per reaction', R`w_{elec} = eE_0`, '[J]', 'One electron transferred; multiply by electrons per reaction.'],
          ['Faraday constant', R`F = eN_A \approx 96\,485.3`, '[C/mol]', 'Charge of one mole of electrons (accepted value; e = 1.602176634×10⁻¹⁹ C, Avogadro 6.02214076×10²³ mol⁻¹).'],
          ['Charge of n mol of electrons', R`Q = nF`, '[C]', 'n = moles of electrons, not of reactant.'],
          ['Maximum electrical work (total)', R`w_{elec} = nFE_0`, '[J]', 'n = moles of electrons actually passed. Delivered by the cell; positive in discharge.'],
          ['Maximum electrical work (per mole of species)', R`w_{elec} = zFE_0`, '[J/mol]', 'z = electrons per formula unit of the named species (Zn: 2, Ag: 1).'],
          ['Second-Law limit', R`w_{elec} \le -\Delta G`, '[J]', 'Equality for a reversible cell (zero current).'],
          ['Gibbs free energy and cell potential', R`\Delta G = -w_{elec} = -nFE_0`, '[J]', 'ΔG < 0 ⇔ E₀ > 0 ⇔ spontaneous (discharge).']
        ]]
      ]
    },
    {
      num: '15.8', title: 'Secondary Cells: Spontaneous Discharge, Driven Charge',
      blocks: [
        ['para', R`In a secondary cell the half reactions (15.6) can run both ways. The two directions are thermodynamically very different (Session 1 slides 31–32):`],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)"></th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Discharge</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Charge</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px">Half reactions</td><td style="padding:6px 10px"><b>spontaneous</b>: driven by the positive potential difference between cathode and anode</td><td style="padding:6px 10px"><b>not spontaneous</b>: the positive electrode has the higher potential, so electrons will not flow towards the negative electrode by themselves</td></tr>'
          + '<tr><td style="padding:6px 10px">Energy</td><td style="padding:6px 10px">electrical energy is <b>discharged</b> from the cell</td><td style="padding:6px 10px">electrical energy is <b>consumed</b> by the cell</td></tr>'
          + '<tr><td style="padding:6px 10px">External circuit</td><td style="padding:6px 10px">cell powers electrical components (a load)</td><td style="padding:6px 10px">an external power source is needed to drive the half reactions</td></tr>'
          + '<tr><td style="padding:6px 10px">Gibbs / potential</td><td style="padding:6px 10px">ΔG &lt; 0, E<sub>0</sub> &gt; 0</td><td style="padding:6px 10px">ΔG &gt; 0, E<sub>0</sub> &lt; 0 (strict names)</td></tr>'
          + '</tbody></table></div>'],
        ['para', R`Plotting each electrode at its **half-reaction potential** makes this visual (slides 35–36). In **discharge** the anode (oxidation) sits low and the cathode (reduction) high, $E_{cathode} > E_{anode}$, $E_0 > 0$: electrons move to the higher potential through the load by themselves. In **charge** the reactions reverse, so with the strict names the "anode" (oxidation) is now the **positive** electrode at the **high** potential and the "cathode" (reduction) is the negative electrode at the low potential: $E_{cathode} < E_{anode}$, $E_0 < 0$. Electrons must now be pushed from high potential to low, and only a power supply can do that.`],
        ['svg', 'tf_cells_potential_ladder', 'Session 1 slides 35–36: half-reaction potentials in discharge (spontaneous, E₀ > 0) and in charge (driven by a power supply, E₀ < 0 with the strict anode/cathode names). Violet is the same negative-electrode material in both panels.'],
        ['warn', 'Key Insight', [
          R`**The materials and their potentials do not swap; the reaction direction does.** The positive electrode is always at the higher potential. What changes on charging is which reaction runs (and so, strictly, which electrode is called the anode). In the engineer's convention the cell voltage $E_{positive} - E_{negative}$ stays positive throughout, and "charge or discharge" is set by the **direction of the current**.`,
          R`For the ideal reversible cell, the charging reaction is the exact reverse of discharge: $\Delta G_{charge} = -\Delta G_{discharge}$. To recharge the Daniell cell you must put in at least $+212.3$ kJ per mole of Zn, which needs a supply voltage **above** 1.10 V. Any excess is lost as heat, which is why the round trip is never 100 % efficient.`
        ]],
        ['warn', 'Important', [
          R`**What is the sign of $E_0$ on charge? One rule.** The cell's own voltage, $E_{positive} - E_{negative}$, is **always positive**, whether it is charging or discharging. What changes sign is the **reaction**. Written in the charging direction (strict names: the positive electrode is the anode, as on slide 36), the reaction has $E_0 = E_{cathode} - E_{anode} < 0$, so $\Delta G = -nFE_0 > 0$ and $w_{elec} < 0$ (work is put **in**).`,
          R`When the slides, the problem sheet (Q5) and these notes say "$E_0 < 0$ on charge", they mean **the charging reaction's** $E_0$. If an exam asks for "the cell potential", give the positive cell voltage. If it asks whether the **charging reaction** is spontaneous, give $E_0 < 0$, $\Delta G > 0$.`
        ]],
        ['ex', 'Worked example — energy and voltage needed to recharge', [
          ['t', R`A Daniell cell has discharged 0.5 mol of Zn. (a) What is the minimum electrical energy needed to recharge it, and the minimum supply voltage? (b) If it is recharged at a constant 1.25 V, how much energy is supplied, how much ends up as heat, and what is the round-trip (voltage) efficiency? ($F = 96\,485.3$ C/mol, $E_0 = 1.10$ V.)`],
          ['ans'],
          ['t', R`Charging runs (15.5) backwards: $\mathrm{Zn^{2+} + Cu \rightarrow Zn + Cu^{2+}}$, with $\Delta G_{charge} = -\Delta G_{discharge} = +212\,267.66$ J per mol Zn. The charge needed is $Q = nF$ with $n = 0.5\times2 = 1.0$ mol of electrons.`],
          ['m', R`\text{(a)}\ W_{min} = \Delta G_{charge} = 0.5\times212\,267.66 = 106\,134\ \text{J} = 106.1\ \text{kJ},\qquad V_{supply} > E_0 = 1.10\ \text{V}`],
          ['t', R`(At exactly 1.10 V no current would flow; the supply must exceed the cell's voltage to push electrons "uphill", slide 36.)`],
          ['m', R`\text{(b)}\ W_{in} = QV = (1.0\times96\,485.3)(1.25) = 120\,607\ \text{J} = 120.6\ \text{kJ}`],
          ['m', R`\text{heat} = W_{in} - W_{min} = 120\,607 - 106\,134 = 14\,473\ \text{J} = 14.5\ \text{kJ},\qquad \eta = \frac{1.10}{1.25} = 88\,\%`],
          ['t', R`Same charge in and out, so the energy ratio is the voltage ratio. The 14.5 kJ difference is generated as heat. This is the irreversibility that keeps $\Delta S_{universe} > 0$ during charging (§15.6 Note), and it is why the round trip is never 100 %.`]
        ]],
        ['para', R`**Definition 1 (slide 33):** Gibbs free energy is the maximum amount of energy you can get from a reaction; for a spontaneous reaction $\Delta G < 0$. **Definition 2 (slide 34):** the redox reaction potential $E_0 = E_{cathode} - E_{anode}$; a spontaneous redox reaction has $E_0 > 0$. Equation (15.20) shows they are the same test.`],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">E<sub>0</sub></th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">w<sub>elec</sub> (by cell)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">ΔG</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">ΔS<sub>universe</sub> (reaction alone)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Meaning</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px">&gt; 0</td><td style="padding:6px 10px">&gt; 0</td><td style="padding:6px 10px">&lt; 0</td><td style="padding:6px 10px">&gt; 0</td><td style="padding:6px 10px">spontaneous: discharge, primary or secondary</td></tr>'
          + '<tr><td style="padding:6px 10px">&lt; 0</td><td style="padding:6px 10px">&lt; 0 (work put in)</td><td style="padding:6px 10px">&gt; 0</td><td style="padding:6px 10px">&lt; 0</td><td style="padding:6px 10px">not spontaneous: charge, secondary only, needs a power supply</td></tr>'
          + '<tr><td style="padding:6px 10px">= 0</td><td style="padding:6px 10px">0</td><td style="padding:6px 10px">0</td><td style="padding:6px 10px">0</td><td style="padding:6px 10px">equilibrium: no driving force, no net reaction</td></tr>'
          + '</tbody></table></div>'],
        ['para', R`$E_0$ in this table is the ideal potential of the reaction. A real cell's voltage changes with state of charge and with current, and a "flat" cell is one whose voltage has fallen to its cut-off, not to zero (Topic 16).`]
      ]
    },
    {
      num: '15.9', title: 'From the Lab to Real Cells: Design and Reaction Rate',
      blocks: [
        ['para', R`**Science lab vs the real world** (slide 42). A lab cell (two electrodes in a beaker of electrolyte) has an **abundance** of everything, so idealised conditions ($E_0$ etc.) apply. But abundance means **unoptimised energy density and power capability**: most of the beaker stores nothing. In a real cell the abundance must go, and so we **cannot assume idealised conditions** (Topic 16 deals with the consequences).`],
        ['para', R`**Lithium-ion cell formats** (slides 43–46). All three package the same layered electrode structure:`],
        ['list', null, false, [
          R`**Pouch cells:** flat stacks of layers sealed in a flexible foil pouch, with tabs out of one edge.`,
          R`**Cylindrical cells:** one long layer wound into a **jelly roll** inside a rigid can (e.g. the 4680 format).`,
          R`**Prismatic cells:** a flattened roll or a stack in a rigid rectangular can.`
        ]],
        ['svg', 'tf_cells_formats', 'Session 1 slides 43–46: pouch (stack in a soft pouch), cylindrical (jelly roll in a can) and prismatic (stack or flattened roll in a rectangular can). Cooling can be applied to the tabs, the surfaces or the base.'],
        ['para', R`**Half-reaction surface area** (slide 47). The half reactions happen at the electrode surfaces, so real cells maximise surface area. A lithium-ion cell can contain **up to 100 layers**; each anode and cathode coating is only about **20 µm** thick, and this is never "wasted" space. The **separator** and **current collectors** store no energy, but they are essential: they allow the very large reaction surface area. How the layers are designed (**energy dense vs rate capable**) depends on the application (Topic 16).`],
        ['para', R`**Critical components of one layer** (slides 51–53):`],
        ['list', null, false, [
          R`**Positive current collector** (aluminium foil) and **negative current collector** (copper foil): join the positive and negative electrodes to the external terminals (tabs) of the cell. They carry electrons.`,
          R`**Cathode** (positive electrode) and **anode** (negative electrode) coatings: where the half reactions occur.`,
          R`**Separator:** keeps the electrodes apart (no short circuit) while acting like a **sponge** holding the liquid electrolyte, so ions can pass (a simplification, refined later).`
        ]],
        ['svg', 'tf_cells_layers', 'Session 1 slides 51–53: one layer (collector, cathode, separator with electrolyte, anode, collector; about 50–100 µm) and the repeating, mirrored stack inside a pouch cell.'],
        ['para', R`**Activation energy** (slides 48–50). $\Delta G < 0$ says a reaction is **thermodynamically favourable**; it says nothing about **how fast** it goes. Reaction speed is governed by the **activation energy** $E_a$: an energy barrier between reactants and products, passing through an "activated complex", which sets the **probability** of a reaction occurring.`],
        ['svg', 'tf_cells_activation', 'Session 1 slides 48–50: Gibbs free energy along the reaction coordinate. ΔG (reactants → products) decides whether the reaction can go; the barrier Eₐ decides how fast. Engineers try to lower the barrier.'],
        ['para', R`The overall reaction is really a **chain** of steps, e.g. **mass transport** (reactants and products must physically move to and from the reaction site). The **slowest step limits the overall rate**. Reaction rates can be sped up or slowed down by changing:`],
        ['list', null, false, [
          R`**surface area** (more reaction sites, hence the thin many-layered electrodes);`,
          R`**temperature**;`,
          R`**pressure**;`,
          R`**concentrations**.`
        ]],
        ['warn', 'Note', [
          R`The slide says each of these works by "reducing the activation energy to increase probability of reaction occurring". More precisely, the **effect** is always to raise the probability (rate) of reaction. Strictly, higher temperature gives more reactants enough energy to cross the **same** barrier, and larger surface area, pressure or concentration give more attempts per second. Lowering $E_a$ itself needs a different reaction pathway (e.g. a catalyst or better electrode surface). In every case the rate goes up, and **as engineers we want $E_a$ to be small**.`
        ]],
        ['warn', 'Note', [
          R`**Next: Topic 16 (Lithium-ion cells, Session 2).** Real-world electrode potentials and the **Nernst** equation; **energy-dense vs rate-capable** cells; C-rates; cell resistance; accessible energy from performance data; and heat generation (irreversible $I^2R$ heating plus the reversible $T\Delta S$ entropic heat from §15.6).`
        ]]
      ]
    },
    {
      num: '15.10', title: 'Summary and How to Attack a Question',
      blocks: [
        ['list', 'Method', true, [
          R`**Identify the half reactions.** Which species is oxidised (anode in discharge) and which reduced (cathode in discharge)? How many electrons does each atom transfer?`,
          R`**Cell potential:** $E_0 = E_{cathode} - E_{anode}$ using tabulated reduction potentials for both (never flip a sign as well), or $E_0 = (\mu_C - \mu_A)/e$ from energies per electron.`,
          R`**Pick the basis.** "Per mole of matter oxidised/reduced": $n$ = moles of electrons per mole of that species. Watch stoichiometry (e.g. 2 Ag per Cu).`,
          R`**Work and Gibbs:** per mole of a species $w_{elec} = zFE_0$ [J/mol of that species]; for a given charge or a whole cell $w_{elec} = nFE_0$ [J], $n$ = moles of electrons passed. Then $\Delta G = -w_{elec}$.`,
          R`**Per kg?** Divide J/mol by the molar mass in kg/mol (then ÷ 3600 for Wh/kg).`,
          R`**Sanity-check signs:** discharge ⇒ $E_0 > 0$, $w_{elec} > 0$, $\Delta G < 0$. Charge ⇒ all reversed.`,
          R`**Units:** J/mol; $1\ \text{kWh} = 3.6$ MJ; $Q = It$ if current and time are given.`
        ]]
      ]
    },
    {
      num: 'Ex 15', title: 'Problem Sheet — Batteries 1 (printed as "Problem Sheet 2 (Batteries 1)")', wk: true,
      blocks: [
        ['para', R`Constants: $e = 1.602\times10^{-19}$ C, $N_A = 6.02214\times10^{23}$ mol⁻¹, $F = 96\,485.3$ C/mol. Sheet's quick answers: Q4 3.12 V; Q7 96 485.3 C/mol; Q8 212 267.66 J/mol Zn; Q9 219 986.5 J/mol Cu; Q11 109 993.3 J/mol Ag. **Q9 and Q11 are corrected below** (0.46 V, not 1.14 V): 88 766.5 J/mol Cu and 44 383.2 J/mol Ag. Each of those questions shows the sheet's expected answer, the corrected answer, and how to present your working.`],
        ['ex', 'Q1 — specific energy vs energy density', [
          ['t', R`What is the difference between specific energy and energy density? What does each refer to with regard to energy storage?`],
          ['ans'],
          ['t', R`**Specific energy:** the energy a unit **mass** of a substance can store, J/kg (often Wh/kg); also called gravimetric energy density. **Energy density:** the energy a unit **volume** can store, J/m³ (often Wh/L). They are linked by $\text{J/m}^3 = \rho\times\text{J/kg}$ (15.1). Specific energy matters when mass is limited (vehicles, aircraft, portable devices); energy density when space is limited.`]
        ]],
        ['ex', 'Q2 — the redox reaction in a primary cell', [
          ['t', R`Summarise, using a chemical equation, the complete redox reaction for the half reactions oxidation $Y \rightarrow Y^+ + e^-$ and reduction $Z + e^- \rightarrow Z^-$, when they occur in a primary cell. Show steps.`],
          ['ans'],
          ['t', R`Add the two half reactions (anode oxidation + cathode reduction):`],
          ['m', R`Z + Y + e^- \rightarrow Z^- + Y^+ + e^-`],
          ['t', R`The electron appears on both sides and cancels:`],
          ['m', R`Z + Y \rightarrow Z^- + Y^+`],
          ['t', R`A single arrow, because in a primary cell the reaction is irreversible.`]
        ]],
        ['ex', 'Q3 — the same reaction in a secondary cell', [
          ['t', R`How does the equation in Q2 change if the redox reaction occurs in a secondary cell instead?`],
          ['ans'],
          ['t', R`A primary cell cannot be recharged, hence the one-way arrow. In a secondary (rechargeable) cell the reaction is reversible, so it is written with an equilibrium arrow: left → right is discharge, right → left is charge.`],
          ['m', R`Z + Y \rightleftharpoons Z^- + Y^+`]
        ]],
        ['ex', 'Q4 — cell potential from chemical potentials', [
          ['t', R`The chemical potential of an oxidation half reaction is $3\times10^{-19}$ J and that of a reduction half reaction is $8\times10^{-19}$ J. Calculate the potential of the electrochemical cell. [3.12 V]`],
          ['ans'],
          ['t', R`Oxidation happens at the anode, so $\mu_A = 3\times10^{-19}$ J; reduction at the cathode, so $\mu_C = 8\times10^{-19}$ J. Both are energies **per electron**, so divide their difference by the charge of one electron (15.8). "Oxidation half reaction" only tells you this is the **anode**; both values are on the same scale, so just take cathode minus anode with no extra sign change (§15.5 Important box).`],
          ['m', R`E_{cell} = \frac{\mu_C - \mu_A}{e} = \frac{8\times10^{-19} - 3\times10^{-19}}{1.602\times10^{-19}} = \frac{5}{1.602} = 3.12\ \text{V}`],
          ['t', R`Positive, so the reaction is spontaneous (a discharging cell). Units: J/C = V. ✓ Matches the sheet.`]
        ]],
        ['ex', 'Q5 — spontaneity in a real engineering system', [
          ['t', R`How does reaction spontaneity relate to a real-world engineering system? Consider the reversible nature of secondary cells, useful electrical energy extraction, and when an external power source is needed to drive a reaction.`],
          ['ans'],
          ['t', R`A **spontaneous** redox reaction ($\Delta G < 0$, $E_0 > 0$) is the **discharge** of an electrochemical cell, primary (e.g. AA battery) or secondary (e.g. lithium-ion). Useful electrical energy is extracted and can power any electrical device (light bulb, motor, ...).`],
          ['t', R`A **non-spontaneous** reaction ($\Delta G > 0$) is the **recharge** of a cell. This is only possible in a **secondary** cell, because the reaction must be reversible. Electrical energy must be **put in** to drive the reaction, from an external power supply that sets up a potential difference in the external circuit larger than the cell's own. (The Second Law is satisfied overall because generating that work creates more entropy than the charging reaction removes, §15.6.)`]
        ]],
        ['ex', 'Q6 — which sign convention?', [
          ['t', R`Which is the correct sign convention: $\Delta G = -w_{elec}$ or $\Delta G = w_{elec}$?`],
          ['ans'],
          ['m', R`\Delta G = -w_{elec}`],
          ['t', R`$\Delta G < 0$ defines a spontaneous reaction, which means net energy **extraction** from the cell. That energy leaves as useful electrical work, so $w_{elec}$ (work delivered **by** the cell) is positive: $w_{elec} = QE_0 > 0$ because $Q > 0$ always and $E_0 > 0$ when spontaneous. A negative $\Delta G$ paired with a positive $w_{elec}$ needs the minus sign.`]
        ]],
        ['ex', 'Q7 — Faraday constant from Avogadro', [
          ['t', R`Calculate Faraday's constant using Avogadro's constant, and give a dimensional description of what each term refers to. [96 485.3 C/mol]`],
          ['ans'],
          ['m', R`F = eN_A = (1.602\times10^{-19}\ \text{C})(6.02214\times10^{23}\ \text{mol}^{-1}) = 9.647\times10^{4}\ \text{C mol}^{-1}`],
          ['t', R`$e$ [C]: the elementary charge, the charge of **one** electron. $N_A$ [mol⁻¹]: Avogadro's constant, the number of particles in one mole (here, electrons per mole of electrons). So $F$ [C/mol] is the charge carried by **one mole of electrons**.`],
          ['t', R`**Note:** With the course's 4-significant-figure $e = 1.602\times10^{-19}$ C the product is **96 474.7** C/mol. The sheet's 96 485.3 C/mol (the accepted value) needs the full constants: $1.602176634\times10^{-19}\times6.02214076\times10^{23} = 96\,485.33$ C/mol. Quote $F = 96\,485.3$ C/mol, as the course does; the difference (0.01 %) is just the rounding of $e$.`]
        ]],
        ['ex', 'Q8 — Zn–Cu cell, per mole of Zn', [
          ['t', R`Calculate the electrical energy that may be extracted from $\mathrm{Zn + Cu^{2+} \rightarrow Zn^{2+} + Cu}$, where $E_{cathode} = 0.34$ V and $E_{anode} = -0.76$ V. Give the answer per mole of matter that is oxidised. [212 267.66 J/mol Zn]`],
          ['ans'],
          ['t', R`Zn is oxidised ($\mathrm{Zn \rightarrow Zn^{2+} + 2e^-}$, anode); $\mathrm{Cu^{2+}}$ is reduced (cathode). Per mole of Zn, $z = 2$ mol of electrons (the per-mole form of (15.19), so the answer is J **per mol Zn**). Both potentials are the tabulated reduction potentials of the two couples.`],
          ['m', R`w_{elec} = zF(E_{cathode} - E_{anode}) = 2\times96\,485.3\times\big(0.34 - (-0.76)\big)`],
          ['m', R`= 2\times96\,485.3\times1.10 = 212\,267.66\ \text{J/mol Zn}\ (\Delta G = -212.3\ \text{kJ/mol})`],
          ['t', R`✓ Matches the sheet and the Session 1 classwork.`]
        ]],
        ['ex', 'Q9 — Ag–Cu cell, per mole of Cu (corrected)', [
          ['t', R`Calculate the electrical energy that may be extracted from $\mathrm{2Ag^+ + Cu \rightarrow 2Ag + Cu^{2+}}$, where $E_{cathode} = 0.80$ V and $E_{anode} = -0.34$ V (as printed on the sheet). Give the answer per mole of matter that is oxidised. [sheet expects 219 986.5 J/mol Cu; correct answer 88 766.5 J/mol Cu]`],
          ['svg', 'tf_cells_reduction_ladder', 'Reduction potentials: Ag⁺/Ag +0.80 V, Cu²⁺/Cu +0.34 V, Zn²⁺/Zn −0.76 V.'],
          ['ans'],
          ['t', R`**Step 1: interpret the data.** The printed −0.34 V is copper's **oxidation** potential ($\mathrm{Cu \rightarrow Cu^{2+} + 2e^-}$), the negative of its reduction potential. In Q8, the same copper couple went in as $E_{cathode} = +0.34$ V, and Zn went in as its reduction potential (−0.76 V) even though Zn was oxidised. So the sheet's formula $E_{cathode} - E_{anode}$ uses reduction potentials for both electrodes. Convert the printed value: $E_{anode} = E_{\mathrm{Cu^{2+}/Cu}} = +0.34$ V.`],
          ['t', R`**Step 2: half reactions and $z$.** Cu is oxidised ($\mathrm{Cu \rightarrow Cu^{2+} + 2e^-}$, anode) and $\mathrm{Ag^+}$ is reduced ($\mathrm{Ag^+ + e^- \rightarrow Ag}$, twice, cathode). Per mole of Cu, $z = 2$ mol of electrons.`],
          ['t', R`**Step 3: cell potential.** Either route gives the same answer:`],
          ['m', R`E_0 = E_{red,cathode} - E_{red,anode} = 0.80 - 0.34 = 0.46\ \text{V}\quad\text{or}\quad E_0 = E_{red,cathode} + E_{ox,anode} = 0.80 + (-0.34) = 0.46\ \text{V}`],
          ['t', R`**Step 4: work per mole of Cu.**`],
          ['m', R`w_{elec} = zFE_0 = 2\times96\,485.3\times0.46 = 88\,766.5\ \text{J per mol Cu}\ (\Delta G = -88.8\ \text{kJ/mol Cu})`],
          ['t', R`**What the sheet expects, and what to write.** The printed solution puts −0.34 V straight into $E_{cathode} - E_{anode}$: $0.80 - (-0.34) = 1.14$ V, so $w_{elec} = 2\times96\,485.3\times1.14 = 219\,986.5$ J/mol Cu. That reverses the copper sign **twice**: once by quoting the oxidation potential, and again through the minus sign. In a tutorial or exam, **state your convention** ("both electrodes as reduction potentials") and show Step 1. Then 0.46 V and 88 766.5 J/mol Cu follow and can be defended either way (both routes above). If a marking scheme expects 219 986.5 J/mol, that number can only come from mixing the two conventions.`],
          ['t', R`**Sanity check.** 1.14 V cannot be right: it would exceed the Zn–Cu cell (1.10 V), although the Ag and Cu rungs on the ladder are much closer together (0.46 V) than the Cu and Zn rungs (1.10 V). The measured Cu–Ag cell potential is 0.46 V.`]
        ]],
        ['ex', 'Q10 — the copper potential in Q8 and in Q9', [
          ['t', R`What do you notice about $E_{cathode}$ in Q8 and $E_{anode}$ in Q9?`],
          ['ans'],
          ['t', R`The same copper couple, $\mathrm{Cu^{2+} + 2e^- \rightleftharpoons Cu}$, appears in both. In Q8 $\mathrm{Cu^{2+}}$ is **reduced** (Cu is the cathode, against Zn, which sits lower on the ladder). In Q9 Cu is **oxidised** (Cu is the anode, against Ag, which sits higher). So whether an electrode is the anode or the cathode is not a property of the material alone: it depends on **what it is paired with**. The higher-potential couple is always the cathode in discharge.`],
          ['t', R`Its potential is +0.34 V as a reduction. Written as an oxidation ($\mathrm{Cu \rightarrow Cu^{2+} + 2e^-}$) it is −0.34 V; that is the point the sheet is making. But $E_0 = E_{cathode} - E_{anode}$ needs the **reduction** value (+0.34 V) for both electrodes, as used for Zn in Q8. That is why Q9 is 0.46 V, not 1.14 V.`],
          ['t', R`**Course correction:** The printed solution says that because Cu is oxidised in Q9 "the potential for the oxidation half reaction is the negative of the reduction half reaction, therefore −0.34 V", and then puts −0.34 V into $E_{cathode} - E_{anode}$. The observation about the sign is true, but that formula needs the reduction potential, so the substitution double-counts the reversal (see Q9).`]
        ]],
        ['ex', 'Q11 — Ag–Cu cell, per mole of Ag (corrected)', [
          ['t', R`Recalculate your answer to Q9 to give an answer per mole of matter that is reduced. [sheet expects 109 993.3 J/mol Ag; correct answer 44 383.2 J/mol Ag]`],
          ['ans'],
          ['t', R`From $\mathrm{2Ag^+ + Cu \rightarrow 2Ag + Cu^{2+}}$, **2 mol of Ag** are reduced for every 1 mol of Cu oxidised. So the energy per mole of Ag is half the energy per mole of Cu. Equivalently, each $\mathrm{Ag^+}$ takes **one** electron, so $z = 1$ per mole of Ag:`],
          ['m', R`w_{elec} = \frac{88\,766.5\ \text{J/mol Cu}}{2\ \text{mol Ag/mol Cu}} = 1\times96\,485.3\times0.46 = 44\,383.2\ \text{J per mol Ag}`],
          ['t', R`**What the sheet expects, and what to write:** the sheet halves its Q9 value, $219\,986.5/2 = 109\,993.3$ J/mol Ag. The halving step is right (2 mol Ag per mol Cu) and earns the method, but it inherits the 1.14 V error. Write the halving explicitly and use your corrected Q9: with $E_0 = 0.46$ V the answer is 44 383.2 J/mol Ag. (The sheet's 109 993.3 also comes from halving the rounded 219 986.5; unrounded, $219\,986.48/2 = 109\,993.2$.)`]
        ]]
      ]
    }
  ]
}
