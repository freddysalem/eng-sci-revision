{
  key: 'tf_liion', area: 'batt', num: '16', week: 'Weeks 7–9',
  name: 'Lithium-ion Cells: Energy Extraction, Resistance and Heat',
  triggers: 'Li-ion cell · NMC vs LFP vs graphite · intercalation · Nernst equation / OCV vs SOC · Ah and Wh (× 3600) · C-rate I = C × Q · power P = I V_cell · energy = area under V–Q curve · overpotential V_OP = I R_cell · R₀, R_ct, R_diff · energy dense vs rate capable, α_am · irreversible heat I²R · reversible (entropic) heat −I T dE₀/dT · heating or cooling? sign of I and dE₀/dT · datasheet nominal capacity / voltage · cyclic efficiency · series/parallel pack xSyP',
  sections: [
    {
      num: '', title: 'Revision Objectives — Lithium-ion Cells',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Name the common **anode** and **cathode** materials (graphite, Li metal; NMC, LFP, NCA, LCO) and compare **NMC vs LFP** (voltage, specific energy, safety, supply chain, cycle life).`,
          R`Write the half reactions of a Li-ion (LCO–graphite) cell and explain **intercalation / de-intercalation** in charge and discharge; explain **why lithium**.`,
          R`Use the **Nernst equation** to explain why $E_{cathode}$ falls and $E_{anode}$ rises during discharge, so the **open circuit voltage** $E_0$ falls with **state of charge**; explain pseudo-OCV.`,
          R`Work in **Ah** and **Wh** (×3600 to C and J), define **SOC** and **C-rate**, and convert C-rate ↔ current ↔ time.`,
          R`Read **power** ($I V_{cell}$) and **energy** (area under the $V$–$Q$ curve) from discharge curves, and explain why slow discharges deliver more energy.`,
          R`Use $V_{OP} = I R_{cell}$ and $V_{cell} = E_0 - V_{OP}$ with the sign convention **$I > 0$ in discharge**; name the contributors to $R_{cell}$ ($R_0$, $R_{diff}$, $R_{ct}$) and the effect of temperature.`,
          R`Explain **energy dense vs rate capable** cells (layer thickness, active material fraction $\alpha_{am}$, surface area to volume).`,
          R`Calculate **irreversible** ($I^2R_{cell}$), **reversible / entropic** ($-IT\,dE_0/dT$) and **total** heat generation rates, and decide whether entropic heat is heating or cooling.`,
          R`Read a **cell datasheet**, find the **nominal energy**, the **cyclic efficiency**, and size a **series–parallel battery pack** within voltage limits.`
        ]],
        ['warn', 'Recall Knowledge', [
          R`**Topic 15** (Batteries Session 1) gives the basics used here without re-derivation: galvanic cell, anode / cathode / electrolyte / separator / current collectors, redox half reactions, $E_0 = E_{cathode} - E_{anode}$, spontaneity, $\Delta G = -nFE_0$, $w_{elec} = nFE_0$ (with $F = 96\,485$ C/mol), what speeds a reaction up (surface area, temperature, pressure, concentration) and the pouch-cell electrode stack.`
        ]]
      ]
    },
    {
      num: '16.1', title: 'Electrode Materials: Anodes, Cathodes, NMC vs LFP',
      blocks: [
        ['para', R`Engineers name the electrodes by **sign**, and keep the names fixed whether the cell is charging or discharging: **positive electrode = cathode**, **negative electrode = anode**. (A chemist would swap the names on charge, because the oxidation then happens at the positive electrode. We do not.)`],
        ['para', R`A cell designer picks the materials. Each has its own **performance**, **cost** and **societal** (environment, supply chain) trade-offs.`],
        ['list', R`**Anodes**`, false, [
          R`**Graphite** — in almost every commercial Li-ion cell. Mass produced worldwide and **cheap** (a very small share of cell cost). Energy-intensive to make, but less environmentally damaging than graphene. **Stable** and fairly easy to **recycle**. Its weakness is **energy density**: only so much lithium fits in the structure (one Li per six carbons, $\text{LiC}_6$). Chasing more energy density is why companies look beyond graphite.`,
          R`**Lithium metal** — stores far more lithium per unit mass, so more electrons to move per mole of material and much higher cell energy density. Heavily researched; **no mass-produced commercial cell uses one yet**.`,
          R`**Sodium-ion** cells are *not* Li-ion cells but are very similar. Sodium is widely available (e.g. sea water), so they depend less on scarce materials. One limitation: they need a **graphene**-type anode to store the sodium. Graphene is carbon (like graphite) but more structured and must be made from **crop products**, which need a lot of resource (especially water) to grow.`
        ]],
        ['para', R`**Cathodes** all contain a lithium metal compound. The four in commercial use today:`],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Cathode</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Formula</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Cell makers</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Automotive users</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Share of world manufacture (kWh)</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px;font-weight:600">NMC — lithium nickel manganese cobalt oxide</td><td style="padding:6px 10px">LiNiMnCoO₂</td><td style="padding:6px 10px">CATL, LG Chem, Samsung, Sony</td><td style="padding:6px 10px">CATL, VW, Renault, JLR</td><td style="padding:6px 10px">~35%</td></tr>'
          + '<tr><td style="padding:6px 10px;font-weight:600">LFP — lithium iron phosphate</td><td style="padding:6px 10px">LiFePO₄</td><td style="padding:6px 10px">BYD</td><td style="padding:6px 10px">BYD, some Teslas</td><td style="padding:6px 10px">~55%</td></tr>'
          + '<tr><td style="padding:6px 10px;font-weight:600">NCA — lithium nickel cobalt aluminium oxide</td><td style="padding:6px 10px">LiNiCoAlO₂</td><td style="padding:6px 10px">Panasonic, Tesla</td><td style="padding:6px 10px">Tesla</td><td style="padding:6px 10px">~5%</td></tr>'
          + '<tr><td style="padding:6px 10px;font-weight:600">LCO — lithium cobalt oxide</td><td style="padding:6px 10px">LiCoO₂</td><td style="padding:6px 10px">—</td><td style="padding:6px 10px">rarely automotive</td><td style="padding:6px 10px">LCO + others below 5%</td></tr>'
          + '</tbody></table></div>'],
        ['para', R`So about **90%** of the industry uses **LFP or NMC**. The NMC characteristics below broadly apply to NCA and LCO too.`],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;max-width:640px;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">NMC (nickel manganese cobalt oxide)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">LFP (lithium iron phosphate)</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px">E<sub>cathode</sub> &gt; 4 V</td><td style="padding:6px 10px">E<sub>cathode</sub> &lt; 4 V</td></tr>'
          + '<tr><td style="padding:6px 10px;color:var(--k5C7E51)">high E<sub>cathode</sub> → high specific energy</td><td style="padding:6px 10px;color:var(--kB5683C)">lower E<sub>cathode</sub> → lower specific energy</td></tr>'
          + '<tr><td style="padding:6px 10px;color:var(--kB5683C)">higher E<sub>cathode</sub> → liquid electrolyte more volatile</td><td style="padding:6px 10px;color:var(--k5C7E51)">lower E<sub>cathode</sub> → electrolyte less volatile (safer)</td></tr>'
          + '<tr><td style="padding:6px 10px;color:var(--kB5683C)">nickel and cobalt supply-chain issues</td><td style="padding:6px 10px;color:var(--k5C7E51)">iron is abundant</td></tr>'
          + '<tr><td style="padding:6px 10px;color:var(--kB5683C)">typically under 2000 full cycles to end of life</td><td style="padding:6px 10px;color:var(--k5C7E51)">typically over 3000 full cycles to end of life</td></tr>'
          + '<tr><td style="padding:6px 10px">nominal cell voltage 3.6–3.8 V</td><td style="padding:6px 10px">nominal cell voltage 3.0–3.2 V</td></tr>'
          + '</tbody></table></div>'],
        ['warn', 'Note', [
          R`**Course correction (Async 2.1, p. 2, table heading):** the heading says "Lithium-Nickel-**Magnesium**-Cobalt-Oxide (NMC)". The M in NMC is **manganese** (Mn), as the handout's own list above the table (LiNiMnCoO₂) and Problem Sheet 2 say.`,
          R`The nominal voltage row comes from Session 2 (slide 25). It is the quickest way to spot the chemistry in a question: about 3.6–3.8 V means NMC, about 3.0–3.2 V means LFP.`
        ]],
        ['warn', 'Key Insight', [
          R`Why does a higher cathode potential mean more specific energy? $w_{elec} = nFE_0$ (Topic 15): for the same charge moved, energy is proportional to the cell voltage, and $E_0 = E_{cathode} - E_{anode}$ with a graphite anode near 0.1 V vs Li. A cathode above 4 V gives a full cell above about 3.6 V. The cost is a more reactive (volatile) electrolyte at that potential.`
        ]],
        ['para', R`The other parts of the cell (Topic 15) and their usual materials: **positive current collector — aluminium foil**, **negative current collector — copper foil**, **separator — a porous polymer** (e.g. nylon or polyolefin) soaked in the **liquid electrolyte** (a lithium salt in an organic solvent). Problem Sheet 2 Q4 asks for these.`]
      ]
    },
    {
      num: '16.2', title: 'Li-ion Electrochemistry, Intercalation and Why Lithium',
      blocks: [
        ['para', R`A Li-ion cell is a galvanic cell (Topic 15) like any other. Taking **LCO–graphite** as the example, in **discharge**:`],
        ['eq', [
          ['Anode (−): oxidation', R`\text{LiC}_6 \;\rightarrow\; \text{C}_6 + \text{Li}^+ + e^-`, '', 'Li leaves the graphite as an ion; the electron goes into the external circuit.'],
          ['Cathode (+): reduction', R`\text{CoO}_2 + \text{Li}^+ + e^- \;\rightarrow\; \text{LiCoO}_2`, '', 'The ion (through the electrolyte) and the electron (through the circuit) meet in the cathode.'],
          ['Full redox reaction', R`\text{LiC}_6 + \text{CoO}_2 + \text{Li}^+ + e^- \rightarrow \text{LiCoO}_2 + \text{C}_6 + \text{Li}^+ + e^-`, '', 'Li⁺ and e⁻ appear on both sides …']
        ]],
        ['disp', [ R`\text{LiC}_6 + \text{CoO}_2 \;\rightleftharpoons\; \text{LiCoO}_2 + \text{C}_6 \tag{16.1}` ]],
        ['para', R`… so they are cancelled "for convention", and the double arrow records that the reaction is **reversible**: forward (→) is discharge, backward (←) is charge.`],
        ['svg', 'tf_liion_intercalation', 'Discharge (left): e⁻ go round the external circuit from anode to cathode through the load, while Li⁺ cross the electrolyte and separator the same way. Charge (right): the charger forces both back. Violet dots are lithium.'],
        ['para', R`**Intercalation.** Electrons leaving one electrode and arriving at the other would build up charge unless something balanced it. The balance is the **lithium ions**: oxidation creates a Li⁺ at the anode, reduction needs a Li⁺ at the cathode, and the ions travel through the **electrolyte** that separates the electrodes (anode → cathode during discharge).`],
        ['list', null, false, [
          R`**De-intercalation** — an ion leaves an electrode and moves into the electrolyte.`,
          R`**Intercalation** — an ion leaves the electrolyte and is inserted into an electrode's structure (between graphite layers, or into the metal-oxide lattice).`,
          R`(De)intercalation happens **in parallel** with the redox reaction, so every part of the cell stays charge-neutral. Like the redox reaction it is **reversible**: on charge the electron flow, the redox reaction and the ion flow all reverse.`
        ]],
        ['warn', 'Key Insight', [
          R`The **energy** comes from the electrons falling through the potential difference in the external circuit ($w_{elec} = nFE_0$). Moving the Li⁺ provides no energy to the user — it is just a necessity, to keep charge balance so that electrons can flow.`
        ]],
        ['para', R`**Why lithium?** Two reasons from Async 2.1:`],
        ['list', null, true, [
          R`**Lithium is the lightest metal.** Since the ion only has to shuttle, it should add as little mass as possible. One mole of Li has a lower mass than one mole of any other metal, so it carries **more charge per unit mass** — better **specific energy**.`,
          R`**The Li-ion redox couple has a large potential difference** $E_0$, and useful work is $w_{elec} = nFE_0$ (Topic 15). $E_0$ depends on chemistry (NMC vs LFP) and, as §16.3 shows, on operating conditions — a single theoretical $E_0$ is not enough to describe a real cell.`
        ]],
        ['disp', [ R`w_{elec} = n\,F\,E_0 \tag{16.2}` ]],
        ['para', R`A useful way to put numbers on "lightest" is **specific capacity** — the charge per gram of material, in **mAh/g**. Moving one mole of electrons ($n = 1$ per Li) moves $F = 96\,485$ C; divide by the molar mass $\mathcal{M}$ (g/mol) to get C/g, then by 3.6 to get mAh/g, because one mAh is 3.6 C:`],
        ['disp', [ R`q_{sp} = \frac{nF}{3.6\,\mathcal{M}}\quad[\text{mAh/g}] \tag{16.3}` ]],
        ['ex', 'Example — specific capacity of lithium, sodium and graphite (not on the slides; uses only F)', [
          ['t', R`Find the theoretical specific capacity of (a) lithium metal ($\mathcal M = 6.94$ g/mol), (b) sodium metal (22.99 g/mol) and (c) a graphite anode, which holds one Li per $\text{C}_6$ ($\mathcal M_{C_6} = 6\times12.01 = 72.06$ g/mol per Li stored).`],
          ['ans'],
          ['m', R`\text{(a)}\ q_{Li} = \frac{96\,485}{3.6\times6.94} = 3862\ \text{mAh/g}\qquad \text{(b)}\ q_{Na} = \frac{96\,485}{3.6\times22.99} = 1166\ \text{mAh/g}`],
          ['m', R`\text{(c)}\ q_{C_6} = \frac{96\,485}{3.6\times72.06} = 372\ \text{mAh/g of graphite}`],
          ['t', R`Lithium carries 3.3× the charge per gram of sodium — the "lightest metal" argument in numbers. And a lithium-metal anode could store about **10×** the charge per gram of a graphite anode, which is why so much research chases it (§16.1).`]
        ]]
      ]
    },
    {
      num: '16.3', title: 'Real-World Potential: the Nernst Equation and Open Circuit Voltage',
      blocks: [
        ['para', R`So far (Topic 15) every cell was idealised: an unlimited supply of every material, so each electrode sat at its standard potential. A real Li-ion cell holds a **finite** amount of lithium, and its electrode potentials change as the lithium moves. Electrochemists describe each half reaction with its own **Nernst equation**:`],
        ['disp', [ R`E_i = E^0_i - \frac{RT}{nF}\,\ln\!\left(\frac{\prod a_{products}^{\,\nu_i}}{\prod a_{reactants}^{\,\nu_i}}\right) \tag{16.4}` ]],
        ['list', R`where`, false, [
          R`$E_i$ — the **actual** electrode (half-reaction) potential at that instant, i.e. $E_{cathode}$ or $E_{anode}$ [V].`,
          R`$E^0_i$ — the **standard** half-reaction potential, a constant for that half reaction [V]. (The course writes it $E_0$; superscript here to keep it apart from the cell OCV below.)`,
          R`$R = 8.314$ J/mol K, $T$ in **kelvin**, $n$ = moles of electrons per mole of reaction, $F = 96\,485$ C/mol. $RT/nF$ has units of volts; treat it as a **constant** here (temperature is not being varied).`,
          R`$\prod a^{\nu_i}_{reactants}$ and $\prod a^{\nu_i}_{products}$ — the product of the **activities** (effectively concentrations) of everything on the left- and right-hand sides of the half reaction, each raised to its stoichiometric coefficient $\nu_i$.`
        ]],
        ['para', R`**Ideal cell.** With an abundance of material at each electrode (tending to infinity), the ratio is ≈ 1, so $\ln(1) = 0$ and $E_i \approx E^0_i$: each electrode sits at its standard potential.`],
        ['para', R`**Real cell, during discharge:**`],
        ['list', null, false, [
          R`**Cathode** — starts with lots of reactant (de-lithiated oxide) and little product (lithiated oxide). As discharge proceeds the ratio products/reactants **rises**, $\ln(\cdot)$ rises, and $E_{cathode} = E^0 - \frac{RT}{nF}\ln(\cdot)$ **falls**.`,
          R`**Anode** — written as a reduction (as all half reactions are), the anode's "reactant" is the de-lithiated graphite and its "product" is $\text{LiC}_6$. At the start of discharge there is **little reactant and lots of product** — counter-intuitive, but remember the anode reaction is running *in reverse* (oxidation). As discharge proceeds the ratio products/reactants **falls**, so $E_{anode}$ **rises**.`
        ]],
        ['para', R`Write both half reactions as **reductions** (the form the Nernst equation and $E^0$ tables use), so you can read the ratio straight off each one:`],
        ['disp', [ R`\text{cathode: } \underbrace{\text{CoO}_2 + \text{Li}^+ + e^-}_{\text{reactants}} \rightarrow \underbrace{\text{LiCoO}_2}_{\text{product}}\qquad\qquad \text{anode: } \underbrace{\text{C}_6 + \text{Li}^+ + e^-}_{\text{reactants}} \rightarrow \underbrace{\text{LiC}_6}_{\text{product}}` ]],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;max-width:640px;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)"></th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Start of discharge (100% SOC)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">End of discharge (0% SOC)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Potential</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px;font-weight:600">Cathode, product/reactant = LiCoO₂ / CoO₂</td><td style="padding:6px 10px">little LiCoO₂, lots of CoO₂ → ratio <b>low</b></td><td style="padding:6px 10px">lots of LiCoO₂ → ratio <b>high</b></td><td style="padding:6px 10px">ln ↑ → E<sub>cathode</sub> <b>falls</b></td></tr>'
          + '<tr><td style="padding:6px 10px;font-weight:600">Anode, product/reactant = LiC₆ / C₆</td><td style="padding:6px 10px">graphite full of Li: lots of LiC₆, little C₆ → ratio <b>high</b></td><td style="padding:6px 10px">Li gone: little LiC₆, lots of C₆ → ratio <b>low</b></td><td style="padding:6px 10px">ln ↓ → E<sub>anode</sub> <b>rises</b></td></tr>'
          + '</tbody></table></div>'],
        ['para', R`The anode reaction actually runs **right to left** during discharge (oxidation, $\text{LiC}_6 \rightarrow \text{C}_6 + \text{Li}^+ + e^-$), which is exactly why its written "product" $\text{LiC}_6$ is used up and the ratio falls.`],
        ['disp', [ R`E_0 = E_{cathode} - E_{anode}\;\;\text{falls during discharge (both effects shrink the gap)} \tag{16.5}` ]],
        ['svg', 'tf_liion_half_potentials', 'Half-reaction potentials of an NMC cathode and a graphite anode, and the full-cell potential E₀ = E_cathode − E_anode (the OCV), against the full cell\'s state of charge. Discharge runs from right (100%) to left (0%).'],
        ['para', R`**Lithiation** is the concentration of lithium in an electrode. At **100% SOC** (fully charged) the NMC cathode has a **low** lithiation and the graphite anode is **fully lithiated**. During discharge the cathode's lithiation rises and its potential falls; the anode de-lithiates and its potential rises. Rather than solve the Nernst equation over the whole range, engineers **measure** (empirically characterise) each electrode's curve, then subtract them.`],
        ['warn', 'Warning', [
          R`**Course correction (Async 2.2, p. 3, the graphite anode, point 2):** it says "the half-reaction potential at the **cathode decreases**". For the anode it should read "the half-reaction potential at the **anode increases**" — that is what the handout itself derived a page earlier, what its Fig. 1b shows, and what is needed for $E_0$ to fall.`,
          R`**Symbol clash.** The course uses $E_0$ both for a constant *standard* potential and (from here on) for the full cell's **open circuit voltage**, which varies with SOC. In this topic $E_0$ always means the **OCV at the current SOC** unless it is labelled standard.`
        ]],
        ['ex', 'Example — how big is the Nernst term? (illustration)', [
          ['t', R`At 25 °C, by how much does a one-electron half-reaction potential change when its product/reactant ratio rises from 1 to 10?`],
          ['ans'],
          ['m', R`\frac{RT}{nF} = \frac{8.314\times298.15}{1\times96\,485} = 0.02569\ \text{V}\qquad \Delta E = -0.02569\,\ln 10 = -0.059\ \text{V}`],
          ['t', R`About 59 mV per factor of 10. That is why the OCV changes "only" by tenths of a volt over a whole discharge, but steeply near the ends, where one species runs out and the ratio heads to 0 or ∞.`]
        ]],
        ['para', R`**Open circuit voltage (OCV).** From now on the full cell potential is called the **OCV** — an engineering term for the cell **at rest**, to keep it apart from the voltage during charge or discharge. It is simple to define but hard to measure: temperature, resistance, **hysteresis** and **degradation** all affect what you read across the terminals.`],
        ['para', R`So engineers measure a **pseudo-OCV (pOCV)**: a very slow constant-current discharge from 100% to 0% SOC. At C/100 (0.01 C, §16.4) it takes 100 h. It is only "pseudo" because a small current still flows (§16.6 shows why current shifts the voltage).`],
        ['svg', 'tf_liion_pocv', 'Pseudo-OCV of an NMC–graphite cell from a C/100 discharge. 100% SOC is defined where the OCV is 4.2 V; the test stops when the terminal voltage reaches 2.7 V. At constant current the x-axis could equally be time (0 → 100 h) or charge passed.'],
        ['list', null, false, [
          R`The test **began at 100% SOC**, defined as the point where OCV = **4.2 V** ($E_{max}$), and ran until the terminals reached **2.7 V** ($E_{min}$). 2.7–4.2 V is typical for NMC–graphite, but each cell model and maker defines its own limits (§16.9).`,
          R`At constant current, the x-axis can be **time** (0 to 100 h) or **cumulative charge** passed.`,
          R`The shape is complex — the difference of two curved half-cell potentials — and is typical of NMC–graphite.`
        ]]
      ]
    },
    {
      num: '16.4', title: 'Charge Transfer: Ampere-hours, State of Charge and C-rate',
      blocks: [
        ['para', R`Batteries are described in **ampere-hours** (Ah) rather than coulombs, and in **watt-hours** (Wh) rather than joules — not for any deep reason, just convenience and industry convention.`],
        ['disp', [ R`1\ \text{Ah} = 3600\ \text{A s} = 3600\ \text{C}\qquad\qquad 1\ \text{Wh} = 3600\ \text{J} \tag{16.6}` ]],
        ['para', R`Benchmarks: a smartphone cell is about **4 Ah**; the largest single cells made today exceed **200 Ah** (Async 2.2). (Session 2 quotes "~150 Ah" for the largest cells and the 138 Ah BYD blade — both are "of order 100–200 Ah".)`],
        ['para', R`**State of charge (SOC)** is the charge held in the cell relative to its total charge capacity, as a percentage or a fraction:`],
        ['disp', [ R`\text{SOC} = \frac{Q_{held}}{Q_{cell}}\qquad\text{e.g. } \frac{7\ \text{Ah}}{10\ \text{Ah}} = 70\% \tag{16.7}` ]],
        ['para', R`**C-rate.** Rather than quote a current, battery engineers quote how fast the cell's charge is being used up (or added). This **normalises** across cells of very different sizes and is the language of **rate capability** (§16.7). The C-rate is the number of times you could fully charge or discharge the cell in one hour at that constant current, so its unit is **h⁻¹** (rarely written on datasheets):`],
        ['disp', [ R`I = [\text{C-rate}]\times Q_{cell}\qquad\Leftrightarrow\qquad [\text{C-rate}] = \frac{I}{Q_{cell}},\qquad t_{full} = \frac{1}{[\text{C-rate}]}\ \text{h} \tag{16.8}` ]],
        ['para', R`For a **10 Ah** cell: 1 C = 10 A (1 h), 2 C = 20 A (30 min), 0.5 C or "C/2" = 5 A (2 h). The pOCV test at C/100 takes 100 h.`],
        ['warn', 'Important', [
          R`**Ah is charge, Wh is energy.** Ah × V = Wh. To get SI units: Ah × 3600 = C, Wh × 3600 = J. A "4000 mAh" cell is 4 Ah = 14 400 C; at 3.6 V it stores 14.4 Wh = 51 840 J.`,
          R`**C-rate is per hour**, so "1 C" for a 2 Ah cell is 2 A and for a 200 Ah cell is 200 A. Always multiply by the cell's own capacity.`
        ]],
        ['eq', [
          ['Charge and energy units', R`1\ \text{Ah} = 3600\ \text{C},\quad 1\ \text{Wh} = 3600\ \text{J}`, '[C], [J]', '1 mAh = 3.6 C.'],
          ['State of charge', R`\text{SOC} = Q_{held}/Q_{cell}`, '[– or %]', 'Charge held / total charge capacity.'],
          ['C-rate', R`I = [\text{C-rate}]\,Q_{cell}`, '[A] = [h⁻¹][Ah]', 'Full charge or discharge takes 1/C-rate hours.']
        ]]
      ]
    },
    {
      num: '16.5', title: 'Power and Energy Extraction at Different C-rates',
      blocks: [
        ['para', R`The figure shows the **terminal voltage** $V_{cell}$ (what you measure across the terminals while current flows) of the same **2 Ah** NMC–graphite cell discharged at constant current at four C-rates, against the charge taken out (mAh).`],
        ['svg', 'tf_liion_crate', 'Terminal voltage against charge discharged for a 2 Ah cell at 0.2, 0.5, 1 and 2 C (curves read off Async 2.2 Fig 4). The faster the discharge, the lower the voltage at every point and the sooner the 3.0 V cut-off is reached.'],
        ['para', R`**Power** is current × voltage, at any instant:`],
        ['disp', [ R`\dot W_{elec} = I\,V_{cell} \tag{16.9}` ]],
        ['ex', 'Example — power from a discharge curve (Async 2.2 task)', [
          ['t', R`Calculate the power supplied by the 2 Ah cell when discharging at 2 C, as it passes through 800 mAh on the x-axis.`],
          ['svg', 'tf_liion_crate_q', 'Read the 2 C (green) curve at 800 mAh.'],
          ['ans'],
          ['t', R`Know: $Q_{cell} = 2$ Ah, C-rate = 2 C, so by (16.8) the constant current is`],
          ['m', R`I = 2\ \text{h}^{-1}\times2\ \text{Ah} = 4\ \text{A}`],
          ['t', R`Read the 2 C curve at 800 mAh: $V_{cell} \approx 3.3$ V. Then`],
          ['m', R`\dot W_{elec} = I\,V_{cell} = 4\times3.3 = 13.2\ \text{W}`]
        ]],
        ['warn', 'Warning', [
          R`**Course correction (Async 2.2, p. 8):** the solution prints $\dot w_{elec} = I\cdot V_{cell} = 4\times3.3 = 13.1$ W. With the values it reads ($I = 4$ A, $V_{cell} = 3.3$ V) the product is **13.2 W**. (13.1 W would need $V_{cell} = 3.28$ V — within reading accuracy of the graph, but not what is written.)`
        ]],
        ['para', R`**Energy** is the integral of power over time. With $I$ in amps and time in hours, $\int I\,dt$ is the charge in Ah, so:`],
        ['disp', [ R`w_{elec} = \int \dot W_{elec}\,dt = \int V_{cell}\,I\,dt = \int_0^{Q} V_{cell}\,dQ\quad[\text{V}\times\text{Ah} = \text{Wh}] \tag{16.10}` ]],
        ['para', R`So the energy extracted over a discharge is the **area beneath the voltage curve** on a $V$–$Q$ plot, measured down to 0 V (not to the bottom of a cropped axis). Reading the four curves above: about **7.6 Wh** at 0.2 C, **7.3 Wh** at 0.5 C, **7.0 Wh** at 1 C and **6.0 Wh** at 2 C (average voltages ≈ 3.79, 3.73, 3.6, 3.32 V). These are **read off the figure**: a trapezium-rule area under each curve, i.e. average voltage × charge delivered, accurate to about ±0.1 Wh. The worked estimate below shows the method.`],
        ['ex', 'Example — estimating the energy delivered at 2 C from the curve', [
          ['t', R`Estimate the energy the 2 Ah cell delivers in its 2 C discharge, using the figure.`],
          ['svg', 'tf_liion_crate_q', 'Read the 2 C (green) curve at a few capacities.'],
          ['ans'],
          ['t', R`**Read the 2 C curve** at a few points (mAh, V): (0, 3.85), (300, 3.44), (800, 3.30), (1200, 3.26), (1600, 3.18), (1820, 3.00). The curve stops at 1820 mAh, where it reaches the 3.0 V cut-off.`],
          ['t', R`**Trapezium rule** (16.10): each strip has area $\Delta Q\times\bar V$, in mAh × V = mWh:`],
          ['m', R`300\times\tfrac{3.85+3.44}{2} + 500\times\tfrac{3.44+3.30}{2} + 400\times\tfrac{3.30+3.26}{2} + 400\times\tfrac{3.26+3.18}{2} + 220\times\tfrac{3.18+3.00}{2}`],
          ['m', R`= 1094 + 1685 + 1312 + 1288 + 680 = 6058\ \text{mWh} \approx 6.0\ \text{Wh}`],
          ['t', R`**Quick check:** average voltage ≈ 3.3 V × 1.82 Ah ≈ 6.0 Wh. At 0.2 C: ≈ 3.79 V × 2.0 Ah ≈ 7.6 Wh. Slowing the discharge from 2 C to 0.2 C gives about 27% more energy from the same cell (7.6/6.0 = 1.27).`]
        ]],
        ['warn', 'Note', [
          R`**Which lower voltage limit?** Fig. 4's discharges stop at **3.0 V**; the pOCV test of §16.3 ran down to **2.7 V**; the Session 2 datasheet cell is rated to **2.5 V**. Each test and each manufacturer sets its own cut-off (§16.9). Use whatever limit the question or figure gives.`
        ]],
        ['warn', 'Key Insight', [
          R`A slow discharge gives **more energy** for two reasons: the voltage is **higher** at every point, and the cut-off voltage is reached **later**, so more Ah come out. Both come from the cell's **resistance** (§16.6): a bigger current means a bigger voltage drop inside the cell.`
        ]]
      ]
    },
    {
      num: '16.6', title: 'Cell Resistance and Overpotential',
      blocks: [
        ['para', R`Every Li-ion cell has an **electrical resistance** $R_{cell}$, which depends on **temperature**, **SOC** and **state of health** (ageing). Typical values: **5–50 mΩ**. Just as for a resistor (Ohm's law), current through it causes a voltage drop — the **overpotential**:`],
        ['disp', [ R`V_{OP} = I\,R_{cell} \tag{16.11}` ]],
        ['disp', [ R`V_{cell} = E_0 - V_{OP} = E_0 - I\,R_{cell} \tag{16.12}` ]],
        ['list', null, false, [
          R`**Sign convention: $I > 0$ in discharge** (so $I < 0$ in charge).`,
          R`At open circuit, $I = 0$, $V_{OP} = 0$ and $V_{cell} = E_0$ — the OCV.`,
          R`**Discharge:** $V_{OP} > 0$, so $V_{cell} < E_0$ — you get out less voltage than the chemistry provides.`,
          R`**Charge:** $I < 0$, $V_{OP} < 0$, so $V_{cell} > E_0$ — you must push in more voltage than the chemistry stores. (Problem sheets often write this as $E_{cell} = E_0 + |V_{OP}|$.)`
        ]],
        ['svg', 'tf_liion_overpotential', 'OCV, 1 C discharge and 1 C charge of a 20 Ah NMC–graphite cell, idealised with V_OP = +0.1 V in discharge and −0.1 V in charge (after Async 2.2 Fig 5). The shaded strips are the losses.'],
        ['ex', 'Example — resistance from the OCV and discharge curves (Async 2.2)', [
          ['t', R`For the 20 Ah cell in the figure, the 1 C discharge curve sits 0.1 V below the OCV. Find $R_{cell}$.`],
          ['ans'],
          ['m', R`I = 1\ \text{h}^{-1}\times20\ \text{Ah} = 20\ \text{A},\qquad R_{cell} = \frac{V_{OP}}{I} = \frac{0.1}{20} = 0.005\ \Omega = 5\ \text{m}\Omega`]
        ]],
        ['para', R`**Waste energy.** As with Fig. 4, areas under these curves are energies (16.10):`],
        ['list', null, false, [
          R`area under the **discharge** curve = energy **extracted** in discharge;`,
          R`area under the **charge** curve = energy **required** to recharge;`,
          R`area **between OCV and discharge** curves = losses during discharge; area **between OCV and charge** curves = losses during charge.`
        ]],
        ['para', R`As always in thermodynamics, losses appear as **heat** (§16.8). That is also why cyclic efficiency (§16.10) is below 1.`],
        ['para', R`**Contributors to cell resistance** (Session 2):`],
        ['list', null, false, [
          R`**Ohmic** — $R_0$, the **ohmic resistance**: limits on current (electron) flow in the **solid electrodes** (and current collectors); and $R_{diff}$, the **diffusion resistance of ions**: limits on **ion transport through the electrolyte**.`,
          R`**Chemical** — $R_{ct}$, the **charge-transfer resistance**: the **barrier an ion must overcome to cross the electrode / electrolyte interface** (an activation barrier, Topic 15).`
        ]],
        ['svg', 'tf_liion_resistance', 'Where the resistance comes from: R₀ in each solid electrode, R_ct at each electrode/electrolyte interface and R_diff in the electrolyte. The course lumps them into one series R_cell. The same processes happen in charge and discharge, so the heat is irreversible.'],
        ['disp', [ R`R_{cell} \approx R_0 + R_{ct} + R_{diff}\qquad(\text{lumped, as used in every calculation here}) \tag{16.13}` ]],
        ['warn', 'Note', [
          R`The slides list the three contributors but never add them up; (16.13) is the simple series picture behind using a single $R_{cell}$. In reality $R_{ct}$ and $R_{diff}$ depend on current, time and SOC, which is why engineers call it "impedance" — but for this course one number $R_{cell}$ is enough.`,
          R`The lecture's figure of these processes actually shows a cell **in charge** — the processes are identical in discharge, which is exactly why this heating is **irreversible** (it never changes sign).`
        ]],
        ['para', R`**An engineer's resistance: temperature matters enormously.** Cell resistance can fall by **two orders of magnitude** across a cell's typical operating range.`],
        ['svg', 'tf_liion_impedance_T', 'Cell impedance (resistance) against temperature (after Session 2 slide 12): about 200 mΩ at −12 °C down to about 2 mΩ at 55 °C (the slide labels the axis Ω — a typo, see the correction below).'],
        ['list', null, false, [
          R`Big impact on energy extraction at **low temperatures**: high $R_{cell}$ → large $V_{OP}$ → lower $V_{cell}$, so the cut-off voltage arrives sooner.`,
          R`Electric vehicles have **reduced range in cold climates**, and the **power** $\dot W_{elec}$ available is reduced.`,
          R`Conversely, efficiency is better when overpotential is low — at **higher temperature** and **lower current** (§16.10).`
        ]],
        ['warn', 'Note', [
          R`**Course correction (Session 2, slide 12):** the graph's y-axis is labelled "Impedance / Ω", running 0–200. That cannot be right: a 200 Ω cell could only deliver about 20 mA at 4 V. A Li-ion cell's resistance is milliohms (Async 2.2: 5–50 mΩ; this course's own examples use 13 and 20 mΩ), so the axis is **mΩ** and these notes use mΩ. Only the trend (two orders of magnitude) is used. The ≈ 200 mΩ point at −12 °C is a **cold-cell extreme**, well outside the 5–50 mΩ "typical" range of Async 2.2, which is for normal operating temperatures. That is the whole point of the slide: cold cells are far more resistive.`
        ]],
        ['eq', [
          ['Overpotential', R`V_{OP} = I\,R_{cell}`, '[V]', 'I > 0 discharge, I < 0 charge.'],
          ['Terminal voltage', R`V_{cell} = E_0 - V_{OP}`, '[V]', 'Below OCV in discharge, above it in charge.'],
          ['Power', R`\dot W_{elec} = I\,V_{cell}`, '[W]', ''],
          ['Energy', R`w_{elec} = \int V_{cell}\,dQ`, '[Wh] if Q in Ah', 'Area under the V–Q curve (to 0 V).']
        ]]
      ]
    },
    {
      num: '16.7', title: 'Energy Dense vs Rate Capable Cells',
      blocks: [
        ['para', R`Topic 15 showed that reaction rate rises with **surface area** (also temperature, pressure, concentration). In a cell, the reacting surfaces are the **interfaces**: electrode / electrolyte for the ions, electrode / current collector for the electrons. A designer with a fixed cell volume chooses how to slice it:`],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;max-width:640px;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Energy dense</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Rate capable</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px">maximise energy stored in a small volume</td><td style="padding:6px 10px">less energy stored in a given volume</td></tr>'
          + '<tr><td style="padding:6px 10px">few, thick layers of anode and cathode</td><td style="padding:6px 10px">many, thin layers of anode and cathode</td></tr>'
          + '<tr><td style="padding:6px 10px">poor thermal properties</td><td style="padding:6px 10px">better thermal properties</td></tr>'
          + '<tr><td style="padding:6px 10px">unable to charge or discharge quickly</td><td style="padding:6px 10px">able to charge or discharge quickly</td></tr>'
          + '<tr><td style="padding:6px 10px">generates lots of heat in charge and discharge</td><td style="padding:6px 10px">generates less heat in charge and discharge</td></tr>'
          + '<tr><td style="padding:6px 10px">automotive: <b>driving range</b></td><td style="padding:6px 10px">automotive: <b>acceleration, fast charging, better thermal efficiency</b></td></tr>'
          + '</tbody></table></div>'],
        ['para', R`**Active material fraction $\alpha_{am}$.** Only the **anode and cathode** store lithium (they are the "active material"). The current collectors and separator are needed in every layer but store nothing. For one repeating layer of the stack (all layers have the same area, so thickness fractions are volume fractions):`],
        ['disp', [ R`\alpha_{am} = \frac{t_{cathode} + t_{anode}}{t_{CC+} + t_{cathode} + t_{sep} + t_{anode} + t_{CC-}} \tag{16.14}` ]],
        ['svg', 'tf_liion_layers', 'Rate capable (α_am = 0.5), hybrid (0.67) and energy dense (0.8) stacks, after Session 2 slides 6–7. The inactive parts (collectors + separator) are the same thickness in all three; only the electrodes thicken.'],
        ['warn', 'Note', [
          R`The slides give only the three values 0.5, 0.67 and 0.8 on a picture; (16.14) is the definition those pictures measure. Drawn to scale with the inactive thickness fixed at 14 units, electrodes of 7, 14 and 28 units give exactly 14/28 = 0.5, 28/42 = 0.67 and 56/70 = 0.8.`
        ]],
        ['para', R`**Surface area to volume ratio — why it matters.** At the **same C-rate**, the current is proportional to the charge stored ($I = \text{C-rate}\times Q$), which is proportional to the electrode **thickness** behind each square metre of interface. So in discharge an energy-dense layer must pass **more electrons and Li-ions through the same interface area** — in the slide's example **4×** as many (electrode 28 vs 7 units thick).`],
        ['list', null, false, [
          R`More flux per unit interface area → larger charge-transfer and diffusion overpotentials (bigger $R_{ct}$, $R_{diff}$ effect) → **lower voltage, more heat**, and limits on how fast it can charge or discharge.`,
          R`Thick layers also make it harder for heat to get out (poorer thermal properties), so the hotter cell compounds the problem.`,
          R`Thin layers give more interface per unit volume (high surface-area-to-volume) — faster, cooler — but more of the volume is current collector and separator, so **less energy**.`
        ]],
        ['ex', 'Example — what the layer choice costs (illustration with the diagram\'s proportions)', [
          ['t', R`A stack 10 mm thick uses layers whose inactive parts total 40 µm. Compare a rate-capable design (electrodes 20 µm each, α = 0.5) with an energy-dense one (electrodes 80 µm each, α = 0.8): number of layers, relative energy and relative current per unit interface area at the same C-rate.`],
          ['ans'],
          ['m', R`\text{rate capable: } \frac{10\,000}{40+40} = 125\ \text{layers}\qquad \text{energy dense: } \frac{10\,000}{40+160} = 50\ \text{layers}`],
          ['t', R`Same box (same total volume) and the same electrode materials (same energy per unit volume of active material), so the stored energy is proportional to the active volume, i.e. to $\alpha_{am}$:`],
          ['m', R`\frac{\text{energy dense}}{\text{rate capable}}\ \text{energy} = \frac{\alpha_{am,ED}}{\alpha_{am,RC}} = \frac{0.8}{0.5} = 1.6`],
          ['m', R`\text{flux per interface area} \propto \text{electrode thickness:}\quad \frac{80}{20} = 4`],
          ['t', R`60% more energy in the same box, but every interface carries 4× the current density — exactly the trade-off the slides call "energy dense vs rate capable".`]
        ]],
        ['warn', 'When to use', [
          R`"Which cell gets hotter at 1 C?" or "which is lightest for the same Ah?" (Problem Sheet 2 Q5): a **phone** cell is **energy dense** (lasts all day, must be small) → highest resistance → **most heat** at a given C-rate, but **lowest mass** for the same capacity. A **high-performance EV** cell is **rate capable**. A laptop cell sits between.`
        ]]
      ]
    },
    {
      num: '16.8', title: 'Heat Generation: Irreversible, Reversible (Entropic) and Total',
      blocks: [
        ['para', R`**Sign convention for heat:** $\dot q > 0$ means **heat generated by the cell** (warming it); $\dot q < 0$ means the cell is being **cooled** by its own reaction. Current: $I > 0$ in discharge.`],
        ['para', R`**Irreversible (Joule) heating.** The overpotential losses of §16.6 are heat, exactly as in a resistor:`],
        ['disp', [ R`\dot q_{irrev} = I^2 R_{cell} = I\,V_{OP} = I\,(E_0 - V_{cell}) \tag{16.15}` ]],
        ['warn', 'Key Insight', [
          R`$\dot q_{irrev}$ is **always ≥ 0**, in charge or discharge: $I^2$ is positive, or equivalently $I$ and $(E_0 - V_{cell})$ change sign together. That is what "irreversible" means — reversing the current does not reverse the heat.`,
          R`It scales with $I^2$: **4× the current → 16× the heat generation rate**. But the time to empty the cell is $Q/I$, so the total heat over a full discharge is $I^2R\cdot Q/I = I\,R\,Q$ — only **4×** as much heat, released in a quarter of the time. (Assumes $R$ fixed.)`
        ]],
        ['svg', 'tf_liion_temp_rise', 'Cell temperature rise during discharges of a 4.8 Ah cell at 0.5, 1 and 2 C (after Session 2 slide 14). Higher rate → bigger temperature rise; irreversible heating is the main contributor. Every run ends at the 2.7 V lower voltage limit.'],
        ['para', R`**Reversible (entropic) heating** $\dot q_{rev}$ is driven by the **entropy change of the cell reaction**. It can be **heating or cooling** (like exothermic / endothermic reactions) and it **reverses sign** when the current reverses. It comes from:`],
        ['list', null, false, [
          R`**phase changes in the electrodes**, which occur during charge and discharge;`,
          R`the **degree of order / disorder** of the Li-ions as they intercalate / de-intercalate.`
        ]],
        ['para', R`From the electrochemical energy balance of Bernardi, Pawlikowski and Newman, "A General Energy Balance for Battery Systems" (1985), assuming **$I$ positive on discharge**:`],
        ['disp', [ R`\dot q_{rev} = -\,I\,T\,\frac{dE_0}{dT} \tag{16.16}` ]],
        ['list', R`where`, false, [
          R`$T$ — cell temperature in **kelvin**;`,
          R`$dE_0/dT$ — the **entropic coefficient** [V/K]: how the OCV changes with temperature at fixed SOC. Usually quoted in **mV/K** — multiply by $10^{-3}$.`
        ]],
        ['para', R`**Why the OCV's temperature slope?** Session 2 calls $nFE_0$ the cell's **chemical potential** $\mu_{cell}$: the maximum theoretical useful (electrical) work the reaction can give, $w_{elec}$. In Topic 15's language it is the size of the **Gibbs free energy change per mole of reaction**, $\mu_{cell} = -\Delta G = nFE_0$, in **J/mol** ($n$ = moles of electrons per mole of reaction, $F$ in C/mol, $E_0$ in V):`],
        ['disp', [ R`\mu_{cell} = -\Delta G = n\,F\,E_0\qquad\Rightarrow\qquad \frac{d\mu_{cell}}{dT} = nF\,\frac{dE_0}{dT} = -\frac{d\,\Delta G}{dT} = \Delta S \tag{16.17}` ]],
        ['para', R`$n$ and $F$ are constants, so the temperature dependence of $\mu_{cell}$ is carried entirely by $dE_0/dT$. Because $d(\Delta G)/dT = -\Delta S$, that slope **is the entropy change of the cell reaction**: $dE_0/dT = \Delta S/(nF)$. That is why it is called the entropic coefficient, and why it sets the **reversible heat**: the reaction takes in $T\Delta S$ per mole from its surroundings, i.e. it releases $-T\Delta S$. The box below turns this into (16.16).`],
        ['warn', 'Note', [
          R`The slides describe $\mu_{cell}$ as "a function of cell (system) internal energy" and say the entropic coefficient shows how temperature affects "cell internal energy". Strictly, $nFE_0$ is the **Gibbs** free energy (the part of the energy that can come out as work), not the internal energy $U$. What matters for heat is its temperature slope, the entropy change $\Delta S$.`
        ]],
        ['deriv', 'Why −I T dE₀/dT? (link to Topic 15 — not on the slides)', [
          ['t', R`Gibbs: $\Delta G = \Delta H - T\Delta S$ and $\left(\partial\Delta G/\partial T\right)_p = -\Delta S$. With $\Delta G = -nFE_0$:`],
          ['m', R`\Delta S = -\frac{\partial\Delta G}{\partial T} = nF\,\frac{dE_0}{dT}`],
          ['t', R`For a **reversible** process the heat taken in from the surroundings is $T\Delta S$ per mole of reaction, so the heat **released** is $-T\Delta S$. The reaction rate is $I/(nF)$ moles of reaction per second (each mole moves $nF$ coulombs):`],
          ['m', R`\dot q_{rev} = -T\,\Delta S\times\frac{I}{nF} = -T\,nF\frac{dE_0}{dT}\times\frac{I}{nF} = -\,I\,T\,\frac{dE_0}{dT}`],
          ['t', R`So $dE_0/dT$ is the reaction entropy per coulomb, $\Delta S/nF$. Reverse the current and the reaction runs backwards: the entropy change, and the heat, change sign. ✓`]
        ]],
        ['para', R`**Entropic coefficient — measured empirically.** The cell's temperature is stepped and the OCV monitored; the test is repeated across the SOC range. It changes sign with SOC:`],
        ['svg', 'tf_liion_entropic', 'Entropic coefficient dE₀/dT (mV/K) against SOC, after Session 2 slide 18. Negative at low SOC (about −0.3 mV/K), positive (up to about +0.2 mV/K) over the middle and top.'],
        ['para', R`**Total heat generation** combines the two:`],
        ['disp', [ R`\dot q_{tot} = \dot q_{irrev} + \dot q_{rev} = \underbrace{I\,(E_0 - V_{cell})}_{\dot q_{irrev}}\;\underbrace{-\;I\,T\,\frac{dE_0}{dT}}_{\dot q_{rev}} \tag{16.18}` ]],
        ['para', R`Note $\dot q_{rev}$ **includes the minus sign**. (The slides write $E_{cell}$ for the terminal voltage $V_{cell}$.)`],
        ['ex', 'Classwork — in discharge, for what values of dE₀/dT is there entropic heating? (Session 2)', [
          ['t', R`Convention: $I > 0$ in discharge. Using (16.18), when is $\dot q_{rev}$ heating and when cooling?`],
          ['ans'],
          ['t', R`**Sanity check first:** in discharge $I > 0$ and $E_0 > V_{cell}$, so $\dot q_{irrev} = I(E_0 - V_{cell}) > 0$ — as we know it must be. The sign convention is right.`],
          ['t', R`$I > 0$ and $T > 0$ (kelvin), so $I\,T > 0$. Then $\dot q_{rev} = -IT\,dE_0/dT$ is positive when $dE_0/dT$ is negative:`],
          ['m', R`\text{discharge: }\ \dot q_{rev} > 0\ \text{(entropic heating) if}\ \frac{dE_0}{dT} < 0;\qquad \dot q_{rev} < 0\ \text{(entropic cooling) if}\ \frac{dE_0}{dT} > 0`],
          ['t', R`In charge $I < 0$, so every conclusion flips.`]
        ]],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;max-width:560px;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)"></th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">dE₀/dT &lt; 0</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">dE₀/dT &gt; 0</th></tr></thead><tbody>'
          + '<tr><td style="padding:6px 10px;font-weight:600">Discharge (I &gt; 0)</td><td style="padding:6px 10px;color:var(--kB5683C)">q̇<sub>rev</sub> &gt; 0: entropic <b>heating</b></td><td style="padding:6px 10px;color:var(--tf)">q̇<sub>rev</sub> &lt; 0: entropic <b>cooling</b></td></tr>'
          + '<tr><td style="padding:6px 10px;font-weight:600">Charge (I &lt; 0)</td><td style="padding:6px 10px;color:var(--tf)">q̇<sub>rev</sub> &lt; 0: entropic <b>cooling</b></td><td style="padding:6px 10px;color:var(--kB5683C)">q̇<sub>rev</sub> &gt; 0: entropic <b>heating</b></td></tr>'
          + '<tr><td style="padding:6px 10px;font-weight:600">q̇<sub>irrev</sub></td><td style="padding:6px 10px" colspan="2">always heating, in charge and discharge</td></tr>'
          + '</tbody></table></div>'],
        ['warn', 'Key Insight', [
          R`At **high C-rate** $\dot q_{irrev} \propto I^2$ dominates and $\dot q_{rev} \propto I$ is small by comparison, so $I^2R$ alone is a good estimate. At **low C-rate** the two can be comparable — the 0.5 C run above even dips slightly below its starting temperature where entropic cooling beats Joule heating.`
        ]],
        ['eq', [
          ['Irreversible heat rate', R`\dot q_{irrev} = I^2R_{cell} = I\,V_{OP} = I(E_0 - V_{cell})`, '[W]', 'Always ≥ 0.'],
          ['Reversible (entropic) heat rate', R`\dot q_{rev} = -I\,T\,\frac{dE_0}{dT}`, '[W]', 'I > 0 discharge; T in K; dE₀/dT in V/K.'],
          ['Total heat rate', R`\dot q_{tot} = I(E_0 - V_{cell}) - I\,T\,\frac{dE_0}{dT}`, '[W]', 'Positive = heat generated by the cell.'],
          ['Chemical potential of the cell', R`\mu_{cell} = -\Delta G = nFE_0`, '[J/mol]', 'Per mole of reaction; dμ/dT = nF dE₀/dT = ΔS.']
        ]]
      ]
    },
    {
      num: '16.9', title: 'Engineering Simplifications: Datasheets and Nominal Energy',
      blocks: [
        ['para', R`A cell datasheet gives, typically: (1) **nominal capacity**, (2) **nominal voltage**, (3) **maximum and minimum voltage**, (4) **maximum continuous charge** and (5) **maximum continuous discharge** (as currents or C-rates). The lecture's example is a cylindrical cell:`],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:13px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Item</th><th style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">Specification</th><th style="padding:6px 10px;border-bottom:1px solid var(--kE7E0D0)">What it tells you</th></tr></thead><tbody>'
          + '<tr><td style="padding:5px 10px">Standard discharge capacity</td><td style="padding:5px 10px">min 4000 mAh (charge 0.5 C (2 A), 4.20 V, 0.05 C (200 mA) cut-off; discharge 0.2 C (800 mA), 2.5 V cut-off)</td><td style="padding:5px 10px"><b>nominal capacity Q = 4 Ah</b></td></tr>'
          + '<tr><td style="padding:5px 10px">Rated discharge capacity</td><td style="padding:5px 10px">min 3900 mAh (charge 1.5 C (6 A) to 4.20 V; discharge 10 A to 2.5 V)</td><td style="padding:5px 10px">less capacity at a higher rate</td></tr>'
          + '<tr><td style="padding:5px 10px">Nominal voltage</td><td style="padding:5px 10px">3.6 V</td><td style="padding:5px 10px"><b>NMC-type</b>; ≈ average OCV</td></tr>'
          + '<tr><td style="padding:5px 10px">Standard / rated charge</td><td style="padding:5px 10px">CCCV 2 A, 4.20 V, 200 mA cut-off / CCCV 6 A, 4.20 V, 100 mA cut-off</td><td style="padding:5px 10px"><b>max voltage 4.20 V</b>; max charge 6 A = 1.5 C</td></tr>'
          + '<tr><td style="padding:5px 10px">Charging time</td><td style="padding:5px 10px">standard 180 min; rated 70 min</td><td style="padding:5px 10px"></td></tr>'
          + '<tr><td style="padding:5px 10px">Max continuous discharge</td><td style="padding:5px 10px">35 A (without temperature cut); 45 A (with 80 °C temperature cut)</td><td style="padding:5px 10px">35 A = 8.75 C</td></tr>'
          + '<tr><td style="padding:5px 10px">Discharge cut-off voltage</td><td style="padding:5px 10px">2.5 V (end of discharge)</td><td style="padding:5px 10px"><b>min voltage 2.5 V</b></td></tr>'
          + '<tr><td style="padding:5px 10px">Cycle life</td><td style="padding:5px 10px">≥ 2400 mAh after 250 cycles (60% of standard; charge 6 A, discharge 35 A)</td><td style="padding:5px 10px">ageing at high rate</td></tr>'
          + '<tr><td style="padding:5px 10px">Retention</td><td style="padding:5px 10px">≥ 3510 mAh (90%) after 30 days at 60 °C</td><td style="padding:5px 10px"></td></tr>'
          + '<tr><td style="padding:5px 10px">Weight / size</td><td style="padding:5px 10px">70.0 g max; height 70.30 mm, diameter 21.22 mm</td><td style="padding:5px 10px">a "21700" cylindrical cell</td></tr>'
          + '</tbody></table></div>'],
        ['para', R`(CCCV = constant current, then constant voltage until the current falls to the cut-off.) The **nominal energy storage capacity** multiplies the nominal capacity by the nominal voltage:`],
        ['disp', [ R`w_{cell,nom} = Q_{cell}\,V_{cell,nom}\qquad[\text{Ah}\times\text{V} = \text{Wh}] \tag{16.19}` ]],
        ['ex', 'Classwork — nominal energy storage capacity of the datasheet cell (Session 2)', [
          ['t', R`Calculate the nominal energy storage capacity of the cell above.`],
          ['ans'],
          ['m', R`w_{cell,nom} = Q_{cell}\,V_{cell,nom} = 4\times3.6 = 14.4\ \text{Wh} = 14.4\times3600 = 51\,840\ \text{J}`],
          ['t', R`Extra reading of the same sheet: max charge 6 A / 4 Ah = **1.5 C**; max continuous discharge 35 A / 4 Ah = **8.75 C**; standard discharge 0.2 C = 0.8 A. Specific energy $14.4/0.070 = 206$ Wh/kg; volume $\frac{\pi}{4}(2.122)^2(7.03) = 24.9$ cm³, so energy density $14.4/0.0249 = 579$ Wh/L.`]
        ]],
        ['svg', 'tf_liion_nmc_lfp', 'Open-circuit voltage against SOC for NMC–graphite and LFP–graphite cells (after Session 2 slide 30). The nominal voltage (3.7 V, 3.1 V) is roughly the average OCV over the full SOC range. This slide\'s NMC curve is drawn down to about 3.0 V at 0% SOC; the Async 2.2 pseudo-OCV figure above comes from a different course figure (a C/100 test stopped at 2.7 V) — the 0% SOC point depends on the lower voltage limit chosen.'],
        ['list', R`**NMC vs LFP nominal voltages**`, false, [
          R`Nominal voltages are **inexact**: approximations of the **average OCV across the full SOC range**.`,
          R`Each maker's chemistry differs slightly, so every cell is slightly different.`,
          R`A higher nominal voltage means a greater nominal energy — so it is a **selling point**.`,
          R`**Shape matters:** NMC slopes steadily; LFP has a long **flat plateau** with steep ends. This decides the pack design in §16.11.`
        ]]
      ]
    },
    {
      num: '16.10', title: 'Cyclic Efficiency',
      blocks: [
        ['para', R`Because of overpotential:`],
        ['list', null, false, [
          R`energy required to drive the **reverse** redox reaction in **charge** > energy extracted from the redox reaction in **discharge**;`,
          R`energy required to move electrons during charge > energy extracted from the electron flow in discharge.`
        ]],
        ['para', R`Efficiency is better when overpotential is low — **higher temperatures** and **lower current (C-rate)** — and **all losses are heat**. Cyclic efficiency can range from **80% to 99.9%**. With $w_{cell,nom}$ the chemical energy stored when full:`],
        ['disp', [ R`\eta_{cycle} = \frac{\text{energy out in discharge}}{\text{energy in during charge}} = \frac{w_{cell,nom} - q_{tot,discharge}}{w_{cell,nom} + q_{tot,charge}} \tag{16.20}` ]],
        ['list', null, false, [
          R`$w_{cell,nom} + q_{tot,charge}$ — the **minimum** electrical energy needed to charge the cell (store $w_{cell,nom}$ **and** pay for the heat);`,
          R`$w_{cell,nom} - q_{tot,discharge}$ — the **maximum** electrical energy you get back (the chemical store minus the heat lost on the way out).`
        ]],
        ['ex', 'Classwork — cyclic efficiency (Session 2)', [
          ['t', R`A cell with $w_{cell,nom} = 100$ Wh generates 36 kJ of heat during a charge from 0% to 100% SOC, and 72 kJ during the subsequent discharge from 100% to 0%. Find $\eta_{cycle}$.`],
          ['ans'],
          ['t', R`1. Put the heats in Wh (÷ 3600):`],
          ['m', R`q_{tot,charge} = \frac{36\,000}{3600} = 10\ \text{Wh}\qquad q_{tot,discharge} = \frac{72\,000}{3600} = 20\ \text{Wh}`],
          ['t', R`2. Useful energy out over work put in (16.20):`],
          ['m', R`\eta_{cycle} = \frac{w_{cell,nom} - q_{tot,discharge}}{w_{cell,nom} + q_{tot,charge}} = \frac{100 - 20}{100 + 10} = \frac{80}{110} = 0.727 \approx 0.73`],
          ['t', R`**Answer: $\eta_{cycle} \approx 0.73$ (73%).** 110 Wh of electrical energy goes in, 100 Wh is stored, and 80 Wh comes back out; the other 30 Wh is heat.`],
          ['svg', 'tf_liion_cycle_energy', 'Energy flows for this example: 110 Wh in, 100 Wh stored, 80 Wh out.']
        ]],
        ['warn', 'Warning', [
          R`Mixed units are the classic trap: heats in **kJ**, capacity in **Wh**. Convert before adding. And don't compute $1 - (10+20)/100 = 0.70$: the heat in charge is *extra* input, so it belongs in the **denominator**.`
        ]],
        ['eq', [
          ['Nominal energy', R`w_{cell,nom} = Q_{cell}V_{cell,nom}`, '[Wh]', '× 3600 for J.'],
          ['Cyclic efficiency', R`\eta_{cycle} = \frac{w_{cell,nom} - q_{tot,dis}}{w_{cell,nom} + q_{tot,ch}}`, '[–]', '80%–99.9% for real cells.']
        ]]
      ]
    },
    {
      num: '16.11', title: 'Battery Packs: Series, Parallel and Cell-to-Pack Design',
      blocks: [
        ['para', R`**Why packs?** The largest single cells are of order **150 Ah** — e.g. the BYD "blade" cell (about 960 × 90 × 13.5 mm): **138 Ah**, **3.2 V** (LFP cathode, not NMC), so $138\times3.2 = 441.6$ Wh. An electric vehicle can need up to **100 kWh** — over 200 such cells. Larger cells are harder to manufacture, and a large cell holds a lot of chemical potential energy in one contained volume (a safety concern). So cells are connected into packs: a Tesla pack contains around **5000** cells, joined in series and parallel by **busbars**.`],
        ['list', null, false, [
          R`**Series** (a "string") — voltages add, capacity (Ah) stays that of one cell.`,
          R`**Parallel** — capacities add, voltage stays that of one string.`,
          R`"**$x$S$y$P**" = $x$ cells in series per string, $y$ strings in parallel; $N = x\,y$ cells.`
        ]],
        ['disp', [ R`V_{pack} = N_s V_{cell},\qquad Q_{pack} = N_p Q_{cell},\qquad w_{pack} = V_{pack}Q_{pack} = N_sN_p\,w_{cell} \tag{16.21}` ]],
        ['svg', 'tf_liion_pack', 'A 4S3P pack: three series strings of four cells, joined top and bottom by busbars.'],
        ['ex', 'Classwork — series and parallel strings (Session 2)', [
          ['t', R`A small pack has a **4S3P** architecture. Each cell: $V_{cell,nom} = 3.6$ V, $Q_{cell} = 75$ Ah. Find $V_{pack,nom}$ and $Q_{pack}$.`],
          ['svg', 'tf_liion_pack_q', 'The 4S3P arrangement.'],
          ['ans'],
          ['m', R`V_{str,nom} = 4\times3.6 = 14.4\ \text{V}\;\Rightarrow\; V_{pack,nom} = V_{str,nom} = 14.4\ \text{V}`],
          ['m', R`Q_{str} = 75\ \text{Ah}\;\Rightarrow\; Q_{pack} = 3\times75 = 225\ \text{Ah}\qquad(w_{pack} = 14.4\times225 = 3240\ \text{Wh})`]
        ]],
        ['warn', 'Warning', [
          R`**Course correction (Session 2, slide 41):** the solution slide says "a **4S4P** architecture" and its drawing shows four strings, but it multiplies by 3. The question (slide 40) is **4S3P**, so $Q_{pack} = 3\times75 = 225$ Ah is right. (A true 4S4P pack would give $4\times75 = 300$ Ah.)`
        ]],
        ['para', R`**Cell-to-pack design.** The series count is set by the pack **voltage window**, the parallel count by the **energy** required. Strings must be **complete** — no fractions of a cell. The **floor** rule below is the design that uses the cells' **full** voltage range with nothing lost:`],
        ['disp', [ R`N_s \le \left\lfloor\frac{V_{pack,max}}{V_{cell,max}}\right\rfloor\ \ (\text{check } N_sV_{cell,min} \text{ vs } V_{pack,min}),\qquad N_p = \left\lceil\frac{w_{pack}}{N_s\,w_{cell,nom}}\right\rceil \tag{16.22}` ]],
        ['list', R`**There are two ways to meet the voltage window — work out both and compare cost:**`, true, [
          R`**Floor (no capacity lost at the top):** $N_s = \lfloor V_{pack,max}/V_{cell,max}\rfloor$. Full charge never breaks the maximum. Then check the bottom: if $N_sV_{cell,min} < V_{pack,min}$, stop the discharge early at $V_{pack,min}/N_s$ per cell. That loses some SOC at the bottom.`,
          R`**One more cell with a capped charge:** $N_s = \lfloor V_{pack,max}/V_{cell,max}\rfloor + 1$, charging stopped at $V_{pack,max}/N_s$ per cell. That loses the SOC above the cap. It is allowed — the window is still met — and worth it **only if the SOC lost is small**, which you read off the cell's OCV curve.`,
          R`For each option: $N_p$ from (16.22) using the **usable** energy per string, then cost. The cheapest option that meets both the voltage window and the energy target wins.`
        ]],
        ['ex', 'Classwork — cell-to-pack scaling: NMC or LFP? (Session 2)', [
          ['t', R`Design a pack whose voltage must stay within **30–40 V** throughout operation, storing at least **1.8 kWh**. You can use LFP (£5) or NMC (£6) cells, both 10 Ah. Which is cheaper? Cell data (from the OCV curves): NMC empty 3.0 V, full 4.2 V, nominal 3.7 V; LFP empty 2.7 V, full 3.4 V, nominal 3.1 V.`],
          ['ans'],
          ['t', R`**Assumption:** the pack **open-circuit** voltage must stay between 30 V and 40 V from full to empty.`],
          ['t', R`**Energy per cell** (16.19):`],
          ['m', R`w_{NMC} = 3.7\times10 = 37\ \text{Wh}\qquad w_{LFP} = 3.1\times10 = 31\ \text{Wh}`],
          ['t', R`**NMC series count:**`],
          ['m', R`N_s \le \frac{40}{4.2} = 9.52`],
          ['t', R`10 in series: $10\times4.2 = 42$ V > 40 V ✗ — charging would have to stop at $40/10 = 4.0$ V per cell (≈ 80% SOC), losing about 20% of the capacity. 9 in series: $9\times3.0 = 27.0$ V to $9\times4.2 = 37.8$ V ✓ at the top; at the bottom, discharge must stop when the pack reaches 30 V:`],
          ['m', R`V_{cell,min} = \frac{30}{9} = 3.33\ \text{V}`],
          ['t', R`**Read from the OCV figure** (Session 2 slide 30, redrawn below with the 3.33 V line marked): NMC only drops below 3.33 V in the last ≈ 4% of SOC, so very little is lost → **use 9S**. (The "0.1 V ≈ 10% SOC" rule of thumb applies on the sloping middle and top of the NMC curve. At the bottom the curve falls almost vertically, so trimming 0.33 V there costs only a few %.)`],
          ['t', R`**LFP series count:**`],
          ['m', R`N_s \le \frac{40}{3.4} = 11.8`],
          ['t', R`11 in series: $11\times2.7 = 29.7$ V to $11\times3.4 = 37.4$ V ✓ (below 1% SOC lost at the bottom, under 30 V). 12 in series: $12\times2.7 = 32.4$ V to $12\times3.4 = 40.8$ V — just over, so cap the charge at $40/12 = 3.33$ V per cell. Reading the LFP curve (figure below), it only rises above 3.33 V in the last ≈ 0.5% of SOC (the steep top end), so the cap costs almost nothing. 12S stores more per string than 11S — compare both.`],
          ['svg', 'tf_liion_pack_window', 'The per-cell voltage limits each design imposes, on the two OCV curves: the sloping NMC curve loses capacity for every 0.1 V trimmed; LFP\'s flat plateau loses almost nothing.'],
          ['t', R`**Parallel count and cost** (16.22):`],
          ['m', R`\text{NMC 9S: } N_p = \left\lceil\frac{1800}{9\times37}\right\rceil = \lceil5.41\rceil = 6,\ \ N = 54,\ \ \text{£}324;\ \ 9\times6\times37 = 1998\ \text{Wh}\ \ge 1800 \checkmark`],
          ['m', R`\text{LFP 12S: } N_p = \left\lceil\frac{1800}{12\times31}\right\rceil = \lceil4.84\rceil = 5,\ \ N = 60,\ \ \text{£}300;\ \ 12\times5\times31 = 1860\ \text{Wh}\ \ge 1800 \checkmark`],
          ['m', R`\text{LFP 11S: } N_p = \left\lceil\frac{1800}{11\times31}\right\rceil = \lceil5.28\rceil = 6,\ \ N = 66,\ \ \text{£}330;\ \ 11\times6\times31 = 2046\ \text{Wh}\ \ge 1800 \checkmark`],
          ['m', R`\text{NMC 10S (capped at 4.0 V, ≈ 80\%): } N_p = \left\lceil\frac{1800}{10\times37\times0.8}\right\rceil = \lceil6.08\rceil = 7,\ \ N = 70,\ \ \text{£}420`],
          ['t', R`**LFP 12S5P at £300 is cheapest.** The shape of the OCV curve decides it: LFP's flat plateau with steep ends means trimming the top or bottom voltage costs almost no energy; NMC's sloping curve loses roughly 10% of capacity per 0.1 V trimmed. So the 40 V limit favours LFP, even though each LFP cell stores less.`]
        ]],
        ['html', '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;max-width:620px;font-size:13.5px;margin:4px 0;color:var(--k3A332B)"><thead><tr style="text-align:left;color:var(--k8C8273)"><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Option</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Cells</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Nominal energy N<sub>s</sub>N<sub>p</sub>w<sub>cell</sub></th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Slide (after trimming)</th><th style="padding:7px 10px;border-bottom:1px solid var(--kE7E0D0)">Cost</th></tr></thead><tbody>'
          + '<tr style="color:var(--kB5683C);font-weight:600"><td style="padding:6px 10px">LFP 12S5P</td><td style="padding:6px 10px">60</td><td style="padding:6px 10px">1860 Wh</td><td style="padding:6px 10px">≈ 1.85 kWh</td><td style="padding:6px 10px">£300</td></tr>'
          + '<tr><td style="padding:6px 10px">NMC 9S6P</td><td style="padding:6px 10px">54</td><td style="padding:6px 10px">1998 Wh</td><td style="padding:6px 10px">≈ 1.94 kWh</td><td style="padding:6px 10px">£324</td></tr>'
          + '<tr><td style="padding:6px 10px">LFP 11S6P</td><td style="padding:6px 10px">66</td><td style="padding:6px 10px">2046 Wh</td><td style="padding:6px 10px">≈ 2.04 kWh</td><td style="padding:6px 10px">£330</td></tr>'
          + '<tr><td style="padding:6px 10px">NMC 10S7P (capped at 4.0 V)</td><td style="padding:6px 10px">70</td><td style="padding:6px 10px">2590 Wh × ≈ 0.8 ≈ 2070 Wh</td><td style="padding:6px 10px">≈ 2.05 kWh</td><td style="padding:6px 10px">£420</td></tr>'
          + '</tbody></table></div>'],
        ['warn', 'Note', [
          R`**Course corrections (Session 2, slides 46–47):** (i) the LFP 11S box's check line repeats the 12S line, "12 × 5 × 31 = 1860 Wh"; for 11S6P it is $11\times6\times31 = 2046$ Wh ≥ 1800 ✓. (ii) The conclusion table's energies are approximate values *after* trimming the lost SOC (e.g. NMC 9S6P: 1998 Wh less ≈ 3–4% ≈ 1.92–1.94 kWh). None of this changes the answer.`
        ]],
        ['warn', 'Warning', [
          R`**Pitfalls (Session 2, slide 48).** (1) Energy only, ignoring strings: $\lceil1800/37\rceil = 49$ NMC → £294 vs $\lceil1800/31\rceil = 59$ LFP → £295 — looks like NMC wins, but cells must form **complete series strings**. (2) Series count from the **nominal** voltage: NMC 10S5P, $10\times3.7 = 37$ V nominal, 50 cells → £300 (a tie) — but $10\times4.2 = 42$ V > 40 V ✗. Use the **full / empty** voltages off the curve, not the nominal one.`
        ]],
        ['eq', [
          ['Series string', R`V_{pack} = N_sV_{cell}`, '[V]', 'Capacity unchanged.'],
          ['Parallel strings', R`Q_{pack} = N_pQ_{cell}`, '[Ah]', 'Voltage unchanged.'],
          ['Pack energy', R`w_{pack} = N_sN_p\,w_{cell,nom}`, '[Wh]', ''],
          ['Sizing', R`N_s \le \lfloor V_{pack,max}/V_{cell,max}\rfloor,\quad N_p = \lceil w_{pack}/(N_s w_{cell})\rceil`, '[–]', 'Then check the minimum voltage.']
        ]]
      ]
    },
    {
      num: 'Ex 16a', title: 'Problem Sheet 2 — Q1–Q5: Rate, C-rate, Materials, Cell Design', wk: true,
      blocks: [
        ['warn', 'Note', [
          R`Battery Problem Sheet 2 quick-check answers: Q3a) 1 C; Q3b) 2 C; Q3c) C/6 (0.167 C); Q6a) 7.49 W; Q6c) 0.312 V; Q7) 0.715 W (entropic heating); Q8a) 62.9 W; Q8b) 2.88 W; Q9) 0.906 W (entropic cooling); Q11b) 38 Wh; Q11c) 40 Wh; Q11d) 0.89; Q12b) 90 Wh; Q12c) 67.5 kWh; Q13b) 250 Wh; Q13c) 69.4 Ah. **All recomputed below — every one checks.**`
        ]],
        ['ex', 'Q1 — increasing the rate of reaction', [
          ['t', R`Briefly summarise how we can increase the rate of reaction in an electrochemical cell.`],
          ['ans'],
          ['t', R`• **Increase the surface area** where the reaction happens (the electrode / electrolyte interfaces): more, thinner layers in a given cell (§16.7).`],
          ['t', R`• **Increase the temperature** — electrochemical reactivity rises (Arrhenius), and $R_{cell}$ falls (§16.6).`],
          ['t', R`• **Increase the pressure** at the reaction site — hard to do in a practical engineered cell.`],
          ['t', R`• **Increase the reactant concentration** relative to product. True at the start of a discharge, but mass-transport limits mean the **reactant near the reaction site is soon depleted (products build up)** quickly.`],
          ['t', R`(The official solution words the last point "reactant concentrations always build up quite quickly"; it is the *product* that builds up / the reactant that runs short at the interface.)`]
        ]],
        ['ex', 'Q2 — more layers in the electrode stack', [
          ['t', R`Which of these mechanisms is achieved by increasing the number of layers in an electrode stack? What negative impact does this have?`],
          ['ans'],
          ['t', R`**Surface area.** More layers in a stack (or more winds of a jelly roll) give more interface area. With the cell volume unchanged, more of the volume is current collector and separator (lower $\alpha_{am}$), so the cell stores **less energy** — lower energy density and specific energy. The designer's balance: **rate capability vs energy storage**.`]
        ]],
        ['ex', 'Q3 — C-rates', [
          ['t', R`Find the C-rate of each constant-current charge: (a) 10 Ah cell at 10 A; (b) 7.5 Ah at 15 A; (c) 18 Ah at 3 A. [1 C; 2 C; C/6]`],
          ['ans'],
          ['m', R`[\text{C-rate}] = \frac{I}{Q_{cell}}:\qquad \text{(a)}\ \frac{10}{10} = 1\ \text{C}\qquad \text{(b)}\ \frac{15}{7.5} = 2\ \text{C}\qquad \text{(c)}\ \frac{3}{18} = 0.167\ \text{C} = \text{C}/6`],
          ['t', R`Times to full charge: 1 h, 30 min, 6 h.`]
        ]],
        ['ex', 'Q4 — materials', [
          ['t', R`Match each material to its typical use in a Li-ion cell: (a) copper, (b) nylon, (c) lithium iron phosphate, (d) graphite, (e) aluminium.`],
          ['ans'],
          ['t', R`(a) copper — **negative current collector**; (b) nylon — **separator**; (c) LiFePO₄ — **cathode** (positive electrode); (d) graphite — **anode** (negative electrode); (e) aluminium — **positive current collector**.`],
          ['t', R`(The solutions add "in discharge" to the cathode/anode answers. By the engineers' convention of §16.1 the names don't change with direction, so it isn't needed.)`]
        ]],
        ['ex', 'Q5 — phone, laptop or EV cell?', [
          ['t', R`Cells A (mobile phone), B (laptop) and C (high-performance EV) each have a capacity of 5 Ah. (a) Which generates the most heat in a 1 C discharge, and why? (b) Which would you expect to have the lowest mass?`],
          ['ans'],
          ['t', R`(a) **Cell A.** A phone cell is designed to last a full day — a slow discharge — and to be as small as possible, so it is **energy dense**: fewer, thicker layers, higher resistance to electrochemical activity, less rate capable. At 1 C (5 A for all three) its larger $R_{cell}$ gives the largest $I^2R_{cell}$.`],
          ['t', R`(b) **Cell A** again. Same Ah and similar voltage means similar energy; the energy-dense design has the highest **specific energy** (Wh/kg), so it stores that energy with the least mass. The EV cell (C) carries the extra current-collector and separator mass of many thin layers.`],
          ['t', R`**This is a qualitative design question** — no numbers are given, so the marks are for the justification. Marking points: (i) the phone cell is energy dense (few thick layers, high $\alpha_{am}$); (ii) so more flux per unit interface area and higher $R_{cell}$; (iii) same 1 C = 5 A for all three, so $\dot q = I^2R_{cell}$ is largest for A; (iv) highest specific energy, so lowest mass for the same Ah. A different answer would need a different, stated assumption about the designs.`]
        ]]
      ]
    },
    {
      num: 'Ex 16b', title: 'Problem Sheet 2 — Q6–Q10: Heat Generation and Overpotential', wk: true,
      blocks: [
        ['ex', 'Q6 — irreversible heat and overpotential in discharge', [
          ['t', R`A 12 Ah EV cell with internal resistance 13 mΩ is discharged at 2 C, held at 25 °C. (a) Rate of irreversible heat generation? (b) Is this an accurate estimate of total heat? (c) Overpotential at this instant? (d) What if the temperature dropped to 15 °C? [7.49 W; 0.312 V]`],
          ['ans'],
          ['m', R`\text{(a)}\ I = 2\times12 = 24\ \text{A}\qquad \dot q_{irrev} = I^2R_{cell} = 24^2\times13\times10^{-3} = 576\times0.013 = 7.49\ \text{W}`],
          ['t', R`(b) **Probably yes.** 2 C is a high rate for an EV cell, so irreversible heat ($\propto I^2$) dominates and reversible heat ($\propto I$) is small by comparison (check with Q7: 0.72 W ≈ 10%).`],
          ['m', R`\text{(c)}\ V_{OP} = I\,R_{cell} = 24\times0.013 = 0.312\ \text{V}`],
          ['t', R`(d) Resistance **rises** as temperature falls (§16.6), so at the same 24 A both $V_{OP}$ and $\dot q_{irrev} = I^2R$ **increase**. By how much needs the cell's own resistance–temperature characterisation.`]
        ]],
        ['ex', 'Q7 — reversible heat for Q6', [
          ['t', R`For Q6, find the reversible heat generation rate if $dE_0/dT = -0.1$ mV/K. Give a positive value and say whether it is entropic heating or cooling. [0.715 W, heating]`],
          ['ans'],
          ['t', R`Discharge, so $I = +24$ A; $T = 25 + 273 = 298$ K; $dE_0/dT = -0.1\times10^{-3}$ V/K:`],
          ['m', R`\dot q_{rev} = -I\,T\,\frac{dE_0}{dT} = -(24)(298)(-0.1\times10^{-3}) = +0.715\ \text{W}`],
          ['t', R`Positive → **entropic heating** (discharge with $dE_0/dT < 0$, as in the table of §16.8). With $T = 298.15$ K it is 0.716 W. Total: $\dot q_{tot} = 7.49 + 0.72 = 8.20$ W.`]
        ]],
        ['ex', 'Q8 — power and heat during a charge', [
          ['t', R`A 20 Ah cell at 10 °C is charged at 0.8 C. At 50% SOC, $E_0 = 3.75$ V and the overpotential is 0.18 V. (a) Power required at this moment? (b) Irreversible heat rate? (c) If the temperature rose to 20 °C, what happens to the overpotential and the charge? [62.9 W; 2.88 W]`],
          ['ans'],
          ['m', R`I = 0.8\times20 = 16\ \text{A (magnitude; charging)}`],
          ['t', R`(a) In **charge** the terminal voltage is **above** the OCV:`],
          ['m', R`V_{cell} = E_0 + |V_{OP}| = 3.75 + 0.18 = 3.93\ \text{V}\qquad P = I\,V_{cell} = 16\times3.93 = 62.9\ \text{W}`],
          ['t', R`Same thing with the signed convention of (16.12): $I = -16$ A, so $V_{OP} = IR_{cell} = -0.18$ V and $V_{cell} = E_0 - V_{OP} = 3.75 - (-0.18) = 3.93$ V. The power drawn from the charger is $|I|V_{cell} = 62.9$ W. Both routes agree; Q9 uses the signed $I$.`],
          ['m', R`\text{(b)}\ \dot q_{irrev} = I^2R_{cell} = I\,V_{OP} = 16\times0.18 = 2.88\ \text{W}\quad(R_{cell} = 0.18/16 = 11.25\ \text{m}\Omega)`],
          ['t', R`(c) Resistance falls as temperature rises, so $V_{OP} = IR_{cell}$ **falls**: less heat is generated and **less electrical power** is needed for the same 0.8 C charge.`]
        ]],
        ['ex', 'Q9 — reversible heat for Q8', [
          ['t', R`For Q8, find the reversible heat rate if $dE_0/dT = -0.2$ mV/K. Positive value, and heating or cooling? [0.906 W, cooling]`],
          ['ans'],
          ['t', R`**Charge**, so with the convention $I = -16$ A; $T = 10 + 273 = 283$ K:`],
          ['m', R`\dot q_{rev} = -I\,T\,\frac{dE_0}{dT} = -(-16)(283)(-0.2\times10^{-3}) = -0.906\ \text{W}`],
          ['t', R`Negative → **0.906 W of entropic cooling** (charge with $dE_0/dT < 0$). Total: $\dot q_{tot} = 2.88 - 0.91 = 1.97$ W.`],
          ['t', R`(The official solution writes the line as "$16\times(10+273)\times-0.2\times10^{-3}$": the two minus signs, of the formula and of $I$, have been cancelled silently. Keep them explicit as above.)`]
        ]],
        ['ex', 'Q10 — power as the constant-current charge proceeds', [
          ['t', R`For the Q8 charge, does the power needed to maintain constant current rise or fall as the charge progresses? Why?`],
          ['ans'],
          ['t', R`It **increases**. The OCV $E_0$ rises with SOC (§16.3), so at constant $I$ the terminal voltage $V_{cell} = E_0 + |V_{OP}|$ rises and $P = IV_{cell}$ with it: more power is needed to push electrons against the growing potential difference between the electrodes.`]
        ]]
      ]
    },
    {
      num: 'Ex 16c', title: 'Problem Sheet 2 — Q11–Q13: Charging Energy, Efficiency and Packs', wk: true,
      blocks: [
        ['ex', 'Q11 — energy to charge, and cyclic efficiency', [
          ['t', R`A 10 Ah cell, nominal voltage 3.6 V, is charged from 0% to 100% SOC; ignore reversible heating. (a) Energy needed if $R = 0$? It actually has $R = 20$ mΩ: (b) energy needed to fully charge at 1 C? (c) at 2 C? (d) Cyclic efficiency for a 1 C charge then 1 C discharge (2 d.p.). [36; 38; 40 Wh; 0.89]`],
          ['ans'],
          ['m', R`\text{(a)}\ w_{cell,nom} = V_{cell,nom}\,Q_{cell,nom} = 3.6\times10 = 36\ \text{Wh}`],
          ['t', R`With zero resistance (impossible in practice) all the electrical energy becomes chemical energy.`],
          ['t', R`(b) Only irreversible heat: $\dot q_{tot} = I^2R_{cell}$, with $I = 10$ A at 1 C, for 1 h:`],
          ['m', R`\dot q_{tot} = 10^2\times0.02 = 2\ \text{W}\qquad q_{tot} = 2\ \text{W}\times1\ \text{h} = 2\ \text{Wh} = 7200\ \text{J}`],
          ['m', R`w_{elec} = w_{cell,nom} + q_{tot} = 36 + 2 = 38\ \text{Wh}`],
          ['t', R`(The cell still reaches 100% SOC, so 36 Wh were stored; the heat is extra. In reality overpotential may stop a charge short of exactly 100% depending on how $Q_{nom}$ is defined — neglected here.)`],
          ['m', R`\text{(c)}\ I = 20\ \text{A},\ \ \dot q = 20^2\times0.02 = 8\ \text{W for } 0.5\ \text{h} = 4\ \text{Wh}\;\Rightarrow\; w_{elec} = 36 + 4 = 40\ \text{Wh}`],
          ['t', R`(Doubling the current doubles the total heat, $q = IRQ$: §16.8.)`],
          ['m', R`\text{(d)}\ q_{tot,ch} = q_{tot,dis} = 2\ \text{Wh}\qquad \eta_{cycle} = \frac{36 - 2}{36 + 2} = \frac{34}{38} = 0.8947 \approx 0.89`]
        ]],
        ['ex', 'Q12 — a 750-cell pack', [
          ['t', R`A pack has 750 cells, each $Q_{cell,nom} = 30$ Ah, $V_{cell,nom} = 3.0$ V. (a) NMC or LFP? (b) $w_{cell,nom}$ in Wh? (c) $w_{pack,nom}$? (d) A suitable application? [90 Wh; 67.5 kWh]`],
          ['ans'],
          ['t', R`(a) 3.0 V nominal → **LFP** cathode (with graphite anode).`],
          ['m', R`\text{(b)}\ w_{cell,nom} = 3.0\times30 = 90\ \text{Wh}\qquad \text{(c)}\ w_{pack,nom} = 750\times90 = 67\,500\ \text{Wh} = 67.5\ \text{kWh}`],
          ['t', R`(d) EV packs range from about 35 to 100 kWh, so this is a typical **electric vehicle** pack.`]
        ]],
        ['ex', 'Q13 — cells in a 48 kWh pack', [
          ['t', R`A 48 kWh pack contains 192 cells, each $V_{cell,nom} = 3.6$ V. (a) NMC or LFP? (b) $w_{cell,nom}$ in Wh? (c) $Q_{cell,nom}$ in Ah? [250 Wh; 69.4 Ah]`],
          ['ans'],
          ['t', R`(a) 3.6 V nominal → **NMC** cathode (with graphite anode).`],
          ['m', R`\text{(b)}\ w_{cell,nom} = \frac{48\,000}{192} = 250\ \text{Wh}\qquad \text{(c)}\ Q_{cell,nom} = \frac{w_{cell,nom}}{V_{cell,nom}} = \frac{250}{3.6} = 69.4\ \text{Ah}`]
        ]]
      ]
    }
  ]
}
