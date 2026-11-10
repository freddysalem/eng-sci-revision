{
  key: 'tf_shocks', area: 'comp', num: '12', week: 'Week 5',
  name: 'Shock Waves',
  triggers: 'normal shock · M₁ > 1 → M₂ < 1 · p, T, ρ, M, p₀ across a shock · T₀ unchanged · travelling shock (explosion, valve closing, shock tube) → Galilean · Rankine–Hugoniot · max density ratio 6 · Pitot tube in supersonic flow · shock in a nozzle',
  sections: [
    {
      num: '', title: 'Revision Objectives — Shock Waves',
      blocks: [
        ['check', 'By the end of this topic you should be able to', [
          R`Explain how a series of weak compression waves steepens into a **shock**, and why a strong **expansion** wave can't form.`,
          R`Distinguish **normal** and **oblique** shocks.`,
          R`Write mass, momentum and energy across a **stationary** normal shock and derive $p_2/p_1$, $T_2/T_1$, $M_2$, $p_{02}/p_{01}$, $\rho_2/\rho_1$.`,
          R`Use entropy to show shocks only go **supersonic → subsonic**.`,
          R`Solve **travelling** shocks (explosions, shock tubes, valve closure) with a Galilean transformation.`,
          R`Use the **Rayleigh Pitot formula** for supersonic airspeed.`
        ]]
      ]
    },
    {
      num: '12.1', title: 'Weak and Strong Waves',
      blocks: [
        ['para', R`**Weak (Mach) waves**: small changes in $p$, $u$, $\rho$, $T$; isentropic; travel at $a$. They can **compress** ($\rho$ up, $M$ down) or **expand** ($\rho$ down, $M$ up).`],
        ['warn', 'Key Insight', [
          R`**Compression:** model it as a train of weak waves. Each one raises $T$, so $a$ rises, so **later waves travel faster** and catch up. They pile up into one **strong (shock) wave**: a large step change that does **not** travel at $a$ and is **not isentropic**.`,
          R`**Expansion:** each wave lowers $T$ and $a$, so later waves travel **slower** and the expansion spreads out. **You cannot generate a strong expansion wave.**`
        ]],
        ['svg', 'tf_steepening', 'Compression waves catch each other up and steepen into a shock; expansion waves spread out, so no strong expansion wave can form.'],
        ['list', R`**Normal vs oblique:**`, false, [
          R`**Normal shock** — perpendicular to the flow: $M_1 > 1$, $M_2 < 1$ **always**.`,
          R`**Oblique shock** — at an angle; the flow **turns** across it. Only the **normal components** must go $M_{1n} > 1 \to M_{2n} < 1$, so both $M_1$ and $M_2$ can be supersonic.`
        ]],
        ['svg', 'tf_normal_oblique', 'Normal shock: perpendicular to the flow, always supersonic → subsonic. Oblique shock: only the normal component must drop below M = 1, and the flow turns.'],
      ]
    },
    {
      num: '12.2', title: 'Normal Shock Relations',
      blocks: [
        ['para', R`Practically instantaneous: the functions through a shock are non-analytic, so you can't write equations **through** it — only compare **before (1)** and **after (2)**. It is **not isentropic** (dissipation), so $p_0$ **drops**; it's adiabatic, so $T_0$ is **unchanged**. Assume: shock **stationary** (Galilean-transform it if not), ideal gas, steady, 1-D, adiabatic.`],
        ['svg', 'tf_shock_cv', 'Control volume around a stationary normal shock: compare mass, momentum and energy entering and leaving. T₀ is unchanged; p₀ falls.'],
        ['disp', [ R`\rho_1u_1 = \rho_2u_2 \qquad p_1 - p_2 = \rho_2u_2^2 - \rho_1u_1^2 \qquad C_pT_0 = C_pT_1 + \tfrac12u_1^2 = C_pT_2 + \tfrac12u_2^2 \tag{12.1}` ]],
        ['deriv', 'Derivation — pressure, temperature and Mach number', [
          ['t', R`**Pressure** — from momentum with $\rho u^2 = \gamma pM^2$:`],
          ['m', R`p_1 - p_2 = \gamma p_2M_2^2 - \gamma p_1M_1^2 \;\Rightarrow\; \frac{p_2}{p_1} = \frac{1 + \gamma M_1^2}{1 + \gamma M_2^2}`],
          ['t', R`**Temperature** — from energy with $R/C_p = (\gamma-1)/\gamma$:`],
          ['m', R`\frac{T_2}{T_1} = \frac{1 + \frac{\gamma-1}{2}M_1^2}{1 + \frac{\gamma-1}{2}M_2^2}`],
          ['t', R`**Mach number** — from $p = \rho RT$ and mass: $\frac{T_2}{T_1} = \left(\frac{M_2}{M_1}\right)^2\left(\frac{p_2}{p_1}\right)^2$. Combine with the two results above:`],
          ['m', R`M_2^2 = \frac{1 + \frac{\gamma-1}{2}M_1^2}{\gamma M_1^2 - \frac{\gamma-1}{2}}`]
        ]],
        ['eq', [
          ['Pressure ratio', R`\frac{p_2}{p_1} = \frac{1 + \gamma M_1^2}{1 + \gamma M_2^2} = 1 + \frac{2\gamma}{\gamma+1}\left(M_1^2 - 1\right)`, '[–]', 'Second form uses M₁ only — quickest way to get M₁ from a pressure ratio.'],
          ['Temperature ratio', R`\frac{T_2}{T_1} = \frac{1 + \frac{\gamma-1}{2}M_1^2}{1 + \frac{\gamma-1}{2}M_2^2}`, '[–]', 'T₀ unchanged.'],
          ['Downstream Mach number', R`M_2^2 = \frac{1 + \frac{\gamma-1}{2}M_1^2}{\gamma M_1^2 - \frac{\gamma-1}{2}}`, '[–]', 'Always < 1 for M₁ > 1.'],
          ['Stagnation pressure ratio', R`\frac{p_{02}}{p_{01}} = \frac{\left(\frac{(\gamma+1)M_1^2}{2 + (\gamma-1)M_1^2}\right)^{\frac{\gamma}{\gamma-1}}}{\left(\frac{2\gamma}{\gamma+1}M_1^2 - \frac{\gamma-1}{\gamma+1}\right)^{\frac{1}{\gamma-1}}}`, '[–]', 'Only a function of M₁ and γ; always < 1.'],
          ['Rankine–Hugoniot (density)', R`\frac{\rho_2}{\rho_1} = \frac{(\gamma-1) + (\gamma+1)\,p_2/p_1}{(\gamma+1) + (\gamma-1)\,p_2/p_1}`, '[–]', 'Differs from isentropic ρ ∝ p^(1/γ).'],
          ['Maximum density ratio', R`\left(\frac{\rho_2}{\rho_1}\right)_{max} = \frac{\gamma+1}{\gamma-1} = 6\ \text{(air)}`, '[–]', 'As p₂/p₁ → ∞.']
        ]],
        ['warn', 'Important', [
          R`Use the isentropic relations (Topic 9) **either side** of a shock, never **across** it. To get $p_{02}/p_{01}$, chain them: $\frac{p_{02}}{p_{01}} = \frac{p_{02}}{p_2}\cdot\frac{p_2}{p_1}\cdot\frac{p_1}{p_{01}}$.`
        ]]
      ]
    },
    {
      num: '12.3', title: 'Entropy: Why Shocks Only Go Supersonic → Subsonic',
      blocks: [
        ['deriv', 'Derivation — entropy change across a normal shock', [
          ['m', R`ds = \frac{dQ}{T} = \frac{1}{T}\left(C_v\,dT + p\,d(1/\rho)\right) \;\Rightarrow\; s_2 - s_1 = C_v\ln\frac{T_2}{T_1} - R\ln\frac{\rho_2}{\rho_1}`],
          ['m', R`s_2 - s_1 = C_v\ln\left[\left(\frac{2\gamma M_1^2 - \gamma + 1}{\gamma+1}\right)\left(\frac{2 + (\gamma-1)M_1^2}{(\gamma+1)M_1^2}\right)^{\gamma}\right]`]
        ]],
        ['svg', 'tf_entropy_m', 'Entropy change across a normal shock: positive only for M₁ > 1. Below M = 1 entropy would fall — impossible for an adiabatic process.'],
        ['list', null, false, [
          R`$M_1 > 1$: $s_2 - s_1 > 0$ ✓ allowed.`,
          R`$M_1 < 1$: $s_2 - s_1 < 0$ — **impossible** for an adiabatic process. So no "expansion shock" from subsonic to supersonic.`,
          R`Near $M_1 = 1$ the curve is very flat, $s_2 - s_1 \approx 0$ — which is why **weak waves can be treated as isentropic**.`
        ]]
      ]
    },
    {
      num: '12.4', title: 'Shock Waves in Practice',
      blocks: [
        ['list', null, false, [
          R`Supersonic objects generate shocks wherever the geometry changes; shocks cause **wave drag**, so supersonic wings are long and thin (classically a long diamond), not aerofoils. Blunt bodies carry a **detached** bow shock.`,
          R`Projectiles and explosions (the Trinity test, Topic 3) make travelling shocks.`
        ]],
        ['para', R`**Airspeed in supersonic flight.** A Pitot tube sits behind a bow shock, so it reads the stagnation pressure **behind** the shock, $p_{02}$. Chaining $p_{02}/p_2$ (isentropic) with $p_2/p_1$ (shock):`],
        ['eq', [
          ['Rayleigh Pitot formula', R`\frac{p_{02}}{p_1} = \left(\frac{(\gamma+1)^2M_1^2}{4\gamma M_1^2 - 2(\gamma-1)}\right)^{\frac{\gamma}{\gamma-1}}\frac{1 - \gamma + 2\gamma M_1^2}{\gamma+1}`, '[–]', 'p₁ = free-stream static pressure (hard to measure).'],
          ['Rayleigh Pitot, air', R`\frac{p_{02}}{p_1} = \frac{166.9\,M_1^7}{(7M_1^2 - 1)^{2.5}}`, '[–]', 'γ = 1.4.'],
          ['Sonic threshold', R`\frac{p_0}{p_1} = \left(\frac{\gamma+1}{2}\right)^{\frac{\gamma}{\gamma-1}} = 1.893\ \text{(air)}`, '[–]', 'Below this ratio the flow is subsonic — use the isentropic p₀/p instead.']
        ]]
      ]
    },
    {
      num: '12.5', title: 'Travelling Shocks: Worked Examples',
      blocks: [
        ['warn', 'When to use', [
          R`Any shock that **moves** (explosion, valve slammed shut, shock tube, blast in a pipeline): draw it, then **add the shock speed in the opposite direction to everything** so it's stationary. Gas ahead enters at $u_1 = c$ (if it was still); gas behind leaves at $u_2 = c - u_{gas}$. Apply the relations, then **transform back**.`
        ]],
        ['svg', 'tf_moving_shock', 'Travelling shock: in the lab frame it runs into still gas at c; adding c (right to left) makes it stationary, with gas entering at c and leaving at c − u_a.'],
        ['ex', 'Example 1 — spherical blast wave (lecture)', [
          ['t', R`Ambient air at rest: $p_1 = 1\times10^5$ Pa, 30 °C. Inside the shock: $p_2 = 1.5$ MPa, 734 °C. $\gamma = 1.4$, $R = 287$, $C_p = 1000$. (a) Shock speed from mass + momentum. (b) Gas speed behind the shock from energy.`],
          ['ans'],
          ['m', R`\text{Stationary shock: } u_1 = c,\ u_2 = c - u_a;\quad \frac{\rho_1}{\rho_2} = \frac{u_2}{u_1}`],
          ['m', R`u_1^2 = \frac{p_2 - p_1}{\rho_1\left(1 - \frac{\rho_1}{\rho_2}\right)} = \frac{p_2 - p_1}{\rho_1\left(1 - \frac{p_1}{p_2}\frac{T_2}{T_1}\right)},\quad \rho_1 = 1.2,\ \frac{p_1}{p_2} = 0.067,\ \frac{T_2}{T_1} = 3.33 \Rightarrow c = 1230\ \text{m/s}`],
          ['m', R`u_2^2 = u_1^2 - 2C_p(T_2 - T_1) \Rightarrow u_2 = 291\ \text{m/s (shock frame)} \Rightarrow u_a = c - u_2 = 939\ \text{m/s outwards}`]
        ]],
        ['warn', 'Note', [
          R`This example is very sensitive to rounding: $u_2$ is the small difference of two large numbers, and the data ($p$, $T$, $C_p$, $\gamma$, $R$) aren't quite mutually consistent. With $\rho_1 = p_1/RT_1 = 1.15$ kg/m³, or using continuity ($u_2 = u_1\rho_1/\rho_2$) instead of energy, $u_a$ comes out anywhere from about 0.86 to 0.97 km/s. Follow the method; don't chase the third digit.`
        ]],
        ['ex', 'Example 2 — shock tube (lecture)', [
          ['t', R`High- and low-pressure chambers at 20 °C, $p_h/p_l = 10$. Just after the diaphragm bursts, find (a) the shock speed $c$, (b) the gas speed behind it. Air. (Model: the shock raises the low-pressure gas to $p_h$.)`],
          ['svg', 'tf_shock_tube', 'Shock tube (x–t diagram): after the diaphragm bursts a shock runs into the low-pressure gas, followed by the contact surface; an expansion fan runs back into the high-pressure gas.'],
          ['svg', 'tf_shock_tube_frame', 'Make the shock stationary: gas enters at u₁ = c and leaves at u₂ = c − u_h.'],
          ['ans'],
          ['m', R`\frac{p_2}{p_1} = 1 + \frac{2\gamma}{\gamma+1}(M_1^2 - 1) = 10 \Rightarrow M_1^2 = 1 + \frac{9}{1.167} = 8.71,\ M_1 = 2.95,\quad M_2 = 0.478`],
          ['m', R`\text{(a) } c = M_1\sqrt{\gamma RT_1} = 2.95\times343 = 1010\ \text{m/s towards the low-pressure chamber}`],
          ['m', R`\frac{T_2}{T_1} = 2.62 \Rightarrow T_2 = 769\ \text{K},\ a_2 = 556\ \text{m/s} \Rightarrow \text{(b) } u_h = c - M_2a_2 = 1010 - 266 = 750\ \text{m/s}`]
        ]],
        ['warn', 'Warning', [
          R`The slides get $M_1 = 2.98$ (a quadratic constant should be $-0.871$, not $-1.13$; the direct formula above avoids the quadratic), then compute $u_h = c - M_2\sqrt{\gamma R\,(293\ \text{K})} = 851$ m/s. But the gas behind the shock has been **heated** to about 769 K, so its speed of sound is 556 m/s, not 343 m/s. Consistent answers: $c \approx 1010$ m/s, $u_h \approx 750$ m/s. (Continuity check: $\rho_2/\rho_1 = 10/2.62 = 3.81$, $u_2 = c/3.81 = 266$ m/s ✓.)`
        ]]
      ]
    },
    {
      num: 'Ex 12', title: 'Problem Sheet — Shock Waves', wk: true,
      blocks: [
        ['ex', 'Q4 — explosion in a gas pipeline', [
          ['t', R`A shock runs at 700 m/s into natural gas at $2\times10^5$ Pa, 20 °C; $\gamma = 1.31$, $R = 518$ J/kg K. Pressure and temperature behind it? [$5.37\times10^5$ Pa; 378 K]`],
          ['svg', 'tf_moving_shock', 'Travelling shock: transform so gas enters the shock at c = 700 m/s.'],
          ['ans'],
          ['t', R`Travelling shock — make it stationary: gas enters at $c = 700$ m/s.`],
          ['m', R`a_1 = \sqrt{1.31\times518\times293} = 446\ \text{m/s},\quad M_1 = 1.57,\quad M_2^2 = \frac{1 + 0.155M_1^2}{1.31M_1^2 - 0.155} = 0.44`],
          ['m', R`p_2 = p_1\frac{1 + \gamma M_1^2}{1 + \gamma M_2^2} \approx 5.3\times10^5\ \text{Pa},\qquad T_2 = T_1\frac{1 + \frac{\gamma-1}{2}M_1^2}{1 + \frac{\gamma-1}{2}M_2^2} = 379\ \text{K}`]
        ]],
        ['ex', 'Q6 — shock in a C–D nozzle located by a Pitot-static tube', [
          ['t', R`A shock sits where the area is $A_1$; there, the Pitot-static manometer reads zero (stagnation pressure after the shock = throat static pressure). Find (a) $M_1$ just before the shock, (b) $A_1/A_t$, (c) the gas speed just after the shock if $T_0 = 600$ K. [2.43; 2.47; 249 m/s]`],
          ['svg', 'tf_laval_shock_pitot', 'The Pitot probe behind the shock reads p₀₂; the manometer shows it equals the throat static pressure p_t.'],
          ['ans'],
          ['t', R`Choked, so $M_t = 1$; supersonic up to the shock. Given $p_{02}/p_t = 1$, chain the ratios:`],
          ['m', R`\frac{p_{02}}{p_t} = \underbrace{\left(\tfrac{\gamma+1}{2}\right)^{\frac{\gamma}{\gamma-1}}}_{p_{01}/p_t}\underbrace{\left(\frac{1 + \frac{\gamma-1}{2}M_2^2}{1 + \frac{\gamma-1}{2}M_1^2}\right)^{\frac{\gamma}{\gamma-1}}}_{(p_1/p_{01})(p_{02}/p_2)}\underbrace{\frac{1 + \gamma M_1^2}{1 + \gamma M_2^2}}_{p_2/p_1} = 1`],
          ['t', R`with $M_2(M_1)$ from the shock relation. Solve numerically (spreadsheet, bisection): $M_1 = 2.43$.`],
          ['m', R`\text{(b) } \frac{A_1}{A_t} = \frac{1}{M_1}\left(\frac{1 + 0.2M_1^2}{1.2}\right)^3 = 2.47 \qquad \text{(c) } M_2 = 0.520,\ T_2 = \frac{600}{1 + 0.2M_2^2} = 569\ \text{K},\ u_2 = M_2\sqrt{\gamma RT_2} = 249\ \text{m/s}`],
          ['t', R`$T_0$ is unchanged across the shock, so $T_0/T_2 = 1 + 0.2M_2^2$ still holds.`]
        ]],
        ['ex', 'Q7 — Rankine–Hugoniot and the maximum density ratio', [
          ['t', R`From mass, momentum and energy, derive $\frac{\rho_2}{\rho_1} = \frac{(\gamma-1) + (\gamma+1)p_2/p_1}{(\gamma+1) + (\gamma-1)p_2/p_1}$ and find the maximum density ratio in air. [6]`],
          ['ans'],
          ['m', R`\text{mass + momentum: } p_1 - p_2 = \rho_1u_1^2\left(\frac{\rho_1}{\rho_2} - 1\right) \qquad \text{mass + energy: } C_p(T_1 - T_2) = \frac{u_1^2}{2}\left(\left(\frac{\rho_1}{\rho_2}\right)^2 - 1\right)`],
          ['t', R`Divide, eliminate $T$ with $p = \rho RT$, and use $R = C_p - C_v$, $\gamma = C_p/C_v$ to reach the result. Letting $p_2/p_1 \to \infty$:`],
          ['m', R`\left(\frac{\rho_2}{\rho_1}\right)_{max} = \frac{\gamma+1}{\gamma-1} = \frac{2.4}{0.4} = 6`]
        ]],
        ['ex', 'Q8 — valve slammed shut on a supersonic pipe flow', [
          ['t', R`Air from a large tank (10 bar, 20 °C) flows along a pipe to a valve. (a) With the valve open, the pressure just upstream is 2 bar — flow speed? (b) The valve shuts suddenly and a shock runs back up the pipe at 200 m/s, bringing the air to rest. Pressure and temperature of the stopped gas? [464 m/s; 13.5 bar, 383 K]`],
          ['svg', 'tf_valve_shock', 'Slamming the valve sends a shock back upstream at c; adding c (left to right) makes it stationary.'],
          ['ans'],
          ['m', R`\text{(a) } \frac{p_0}{p} = 5 \Rightarrow M_a = 1.71,\ T_a = 185\ \text{K},\ a = 273\ \text{m/s},\ u_a = 466\ \text{m/s}`],
          ['t', R`(b) Make the shock stationary: add 200 m/s downstream. Gas enters at $u_a + c$, leaves at $c$ (at rest in the lab).`],
          ['m', R`M_1 = \frac{u_a + c}{a} = 2.44,\quad M_2 = 0.52 \Rightarrow p_2 = 13.5\ \text{bar},\quad T_2 = 383\ \text{K}`],
          ['t', R`Note the jump in sound speed: $a_2 = c/M_2 \approx 385$ m/s behind the shock vs 273 m/s ahead.`]
        ]]
      ]
    }
  ]
}
