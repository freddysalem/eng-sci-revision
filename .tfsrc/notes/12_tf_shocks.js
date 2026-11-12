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
        ['para', R`**Weak (Mach) waves**: small changes in $p$, $u$, $\rho$, $T$; isentropic; travel at $a$. They can **compress** ($\rho$ up, $M$ down) or **expand** ($\rho$ down, $M$ up). Here $M = u/a$ is the Mach number of the flow **relative to the wave**: across a compression the gas slows ($u$ down) and is heated ($T$ up, so $a = \sqrt{\gamma RT}$ up), so $M$ falls on both counts; an expansion does the opposite.`],
        ['warn', 'Key Insight', [
          R`**Compression:** model it as a train of weak waves. Each one raises $T$, so $a$ rises, so **later waves travel faster** and catch up. They pile up into one **strong (shock) wave**: a large step change that does **not** travel at $a$ and is **not isentropic**.`,
          R`**Expansion:** each wave lowers $T$ and $a$, so later waves travel **slower** and the expansion spreads out. **You cannot generate a strong expansion wave.**`
        ]],
        ['svg', 'tf_steepening', 'Pressure against distance, waves travelling to the right. Compression: each later step travels faster, so the steps bunch up into a shock. Expansion: each later step travels slower, so the fan spreads out and no strong expansion wave can form.'],
        ['list', R`**Normal vs oblique:**`, false, [
          R`**Normal shock** — perpendicular to the flow: $M_1 > 1$, $M_2 < 1$ **always**.`,
          R`**Oblique shock** — at an angle $\beta$ to the oncoming flow; the flow **turns** (through $\theta$) across it. Split the velocity into a part **normal** to the shock, $u_{1n} = u_1\sin\beta$, and a part **tangential** to it, $u_{1t} = u_1\cos\beta$. Only the normal part is shocked: $M_{1n} > 1 \to M_{2n} < 1$, while the tangential part is unchanged ($u_{2t} = u_{1t}$). So both $M_1$ and $M_2$ can be supersonic.`
        ]],
        ['warn', 'Note', [
          R`**Oblique shocks are qualitative only in this course** — the lecture gives no oblique-shock relations to use. For reference: apply the normal-shock relations to the **normal component**, $M_{1n} = M_1\sin\beta$, to get $M_{2n}$ and the $p$, $T$, $\rho$ ratios; the tangential velocity is unchanged, so $M_2 = M_{2n}/\sin(\beta - \theta)$. Finding $\beta$ from $M_1$ and $\theta$ needs the $\theta$–$\beta$–$M$ relation, which is beyond this course.`
        ]],
        ['svg', 'tf_normal_oblique', 'Normal shock: perpendicular to the flow, always supersonic → subsonic. Oblique shock at angle β: the normal component u₁ₙ = u₁ sin β drops below sonic, the tangential component is unchanged, so the flow turns through θ and can stay supersonic.'],
      ]
    },
    {
      num: '12.2', title: 'Normal Shock Relations',
      blocks: [
        ['para', R`Practically instantaneous: the functions through a shock are non-analytic, so you can't write equations **through** it — only compare **before (1)** and **after (2)**. It is **not isentropic** (dissipation), so $p_0$ **drops**; it's adiabatic, so $T_0$ is **unchanged**. Assume: shock **stationary** (Galilean-transform it if not), ideal gas, steady, 1-D, adiabatic, $C_p$ constant.`],
        ['svg', 'tf_shock_cv', 'Control volume around a stationary normal shock: compare mass, momentum and energy entering and leaving. T₀ is unchanged; p₀ falls.'],
        ['disp', [ R`\begin{aligned} \text{mass:}\quad & \rho_1u_1 = \rho_2u_2 \\ \text{momentum:}\quad & p_1 - p_2 = \rho_2u_2^2 - \rho_1u_1^2 \\ \text{energy:}\quad & C_pT_0 = C_pT_1 + \tfrac12u_1^2 = C_pT_2 + \tfrac12u_2^2 \end{aligned} \tag{12.1}` ]],
        ['para', R`Two identities turn these into Mach-number form. With $a^2 = \gamma p/\rho = \gamma RT$ and $M = u/a$: $\;\rho u^2 = \gamma pM^2$ and $\;u^2 = \gamma RTM^2$. Dividing the energy equation by $C_pT$ and using $R/C_p = (\gamma-1)/\gamma$ gives the stagnation temperature on **each** side, $T_0/T = 1 + \frac{\gamma-1}{2}M^2$, with the same $T_0$ both sides. Below, $\beta \equiv \frac{\gamma-1}{2}$ is just shorthand.`],
        ['deriv', 'Derivation — pressure, temperature and Mach number (lecture eqs 4–6)', [
          ['t', R`**Pressure** — momentum with $\rho u^2 = \gamma pM^2$:`],
          ['m', R`p_1 - p_2 = \gamma p_2M_2^2 - \gamma p_1M_1^2 \;\Rightarrow\; p_1\left(1 + \gamma M_1^2\right) = p_2\left(1 + \gamma M_2^2\right) \;\Rightarrow\; \frac{p_2}{p_1} = \frac{1 + \gamma M_1^2}{1 + \gamma M_2^2}`],
          ['t', R`**Temperature** — energy with $u^2 = \gamma RTM^2$ and $\gamma R/C_p = \gamma - 1$:`],
          ['m', R`C_pT_1\left(1 + \frac{\gamma R}{2C_p}M_1^2\right) = C_pT_2\left(1 + \frac{\gamma R}{2C_p}M_2^2\right) \;\Rightarrow\; \frac{T_2}{T_1} = \frac{1 + \frac{\gamma-1}{2}M_1^2}{1 + \frac{\gamma-1}{2}M_2^2} = \frac{T_0/T_1}{T_0/T_2}`],
          ['t', R`**Mach number** — from $p = \rho RT$, then mass ($\rho_1/\rho_2 = u_2/u_1$), then $u = M\sqrt{\gamma RT}$:`],
          ['m', R`\frac{T_2}{T_1} = \frac{p_2}{p_1}\frac{\rho_1}{\rho_2} = \frac{p_2}{p_1}\frac{u_2}{u_1} = \frac{p_2}{p_1}\frac{M_2}{M_1}\sqrt{\frac{T_2}{T_1}} \;\Rightarrow\; \frac{T_2}{T_1} = \left(\frac{M_2}{M_1}\right)^2\left(\frac{p_2}{p_1}\right)^2`],
          ['t', R`Substitute the two ratios above, writing $x = M_1^2$, $y = M_2^2$, and put everything for side 1 on one side:`],
          ['m', R`\frac{1 + \beta x}{1 + \beta y} = \frac{y}{x}\,\frac{(1 + \gamma x)^2}{(1 + \gamma y)^2} \;\Rightarrow\; \frac{x(1 + \beta x)}{(1 + \gamma x)^2} = \frac{y(1 + \beta y)}{(1 + \gamma y)^2} \equiv K`],
          ['t', R`For a given $M_1$, $K$ is a number. Multiplying out $K(1 + \gamma y)^2 = y(1 + \beta y)$ gives a **quadratic in** $y$:`],
          ['m', R`\left(K\gamma^2 - \beta\right)y^2 + \left(2K\gamma - 1\right)y + K = 0`],
          ['t', R`One root is obviously $y = x$ (no shock: nothing changes). The product of the roots is $K/(K\gamma^2 - \beta)$, so the other root is $y = K/\big[x(K\gamma^2 - \beta)\big]$. Using $K/x = (1+\beta x)/(1+\gamma x)^2$ and $K\gamma^2 - \beta = (\gamma x - \beta)/(1 + \gamma x)^2$ (expand, and use $\gamma - 2\beta = 1$):`],
          ['m', R`M_2^2 = \frac{1 + \frac{\gamma-1}{2}M_1^2}{\gamma M_1^2 - \frac{\gamma-1}{2}}`]
        ]],
        ['deriv', 'Derivation — the M₁-only forms (substitute M₂² back in)', [
          ['t', R`With $M_2^2$ known, the useful sums are (using $1 + \beta = \gamma - \beta = \frac{\gamma+1}{2}$ and $\gamma + \beta^2 = \frac{(\gamma+1)^2}{4}$):`],
          ['m', R`1 + \gamma M_2^2 = \frac{(\gamma+1)\left(1 + \gamma M_1^2\right)}{2\left(\gamma M_1^2 - \beta\right)} \qquad 1 + \beta M_2^2 = \frac{(\gamma+1)^2M_1^2}{4\left(\gamma M_1^2 - \beta\right)}`],
          ['t', R`**Pressure:** the $(1 + \gamma M_1^2)$ cancels:`],
          ['m', R`\frac{p_2}{p_1} = \frac{2\left(\gamma M_1^2 - \beta\right)}{\gamma+1} = \frac{2\gamma M_1^2 - (\gamma - 1)}{\gamma+1} = 1 + \frac{2\gamma}{\gamma+1}\left(M_1^2 - 1\right)`],
          ['t', R`**Temperature** and **density** ($\rho_2/\rho_1 = (p_2/p_1)/(T_2/T_1) = u_1/u_2$):`],
          ['m', R`\frac{T_2}{T_1} = \frac{\left[2\gamma M_1^2 - (\gamma-1)\right]\left[2 + (\gamma-1)M_1^2\right]}{(\gamma+1)^2M_1^2} \qquad \frac{\rho_2}{\rho_1} = \frac{(\gamma+1)M_1^2}{2 + (\gamma-1)M_1^2}`],
          ['t', R`**Stagnation pressure** — isentropic **either side**, the shock relation **across**. Using $p_0/p = (1 + \beta M^2)^{\gamma/(\gamma-1)}$ on each side:`],
          ['m', R`\frac{p_{02}}{p_{01}} = \frac{p_{02}}{p_2}\cdot\frac{p_2}{p_1}\cdot\frac{p_1}{p_{01}} = \left(\frac{1 + \beta M_2^2}{1 + \beta M_1^2}\right)^{\frac{\gamma}{\gamma-1}}\frac{p_2}{p_1} = \left(\frac{T_1}{T_2}\right)^{\frac{\gamma}{\gamma-1}}\frac{p_2}{p_1}`],
          ['t', R`Put $T_1/T_2 = (\rho_2/\rho_1)/(p_2/p_1)$, so $p_{02}/p_{01} = (\rho_2/\rho_1)^{\gamma/(\gamma-1)}\,(p_2/p_1)^{-1/(\gamma-1)}$, and insert the M₁-only forms of $\rho_2/\rho_1$ and $p_2/p_1$:`],
          ['m', R`\frac{p_{02}}{p_{01}} = \frac{\left(\frac{(\gamma+1)M_1^2}{2 + (\gamma-1)M_1^2}\right)^{\frac{\gamma}{\gamma-1}}}{\left(\frac{2\gamma}{\gamma+1}M_1^2 - \frac{\gamma-1}{\gamma+1}\right)^{\frac{1}{\gamma-1}}}`]
        ]],
        ['eq', [
          ['Pressure ratio', R`\frac{p_2}{p_1} = \frac{1 + \gamma M_1^2}{1 + \gamma M_2^2} = 1 + \frac{2\gamma}{\gamma+1}\left(M_1^2 - 1\right)`, '[–]', 'Second form uses M₁ only — quickest way to get M₁ from a pressure ratio.'],
          ['Temperature ratio', R`\frac{T_2}{T_1} = \frac{1 + \frac{\gamma-1}{2}M_1^2}{1 + \frac{\gamma-1}{2}M_2^2}`, '[–]', 'T₀ unchanged.'],
          ['Downstream Mach number', R`M_2^2 = \frac{1 + \frac{\gamma-1}{2}M_1^2}{\gamma M_1^2 - \frac{\gamma-1}{2}}`, '[–]', 'Always < 1 for M₁ > 1.'],
          ['Density ratio', R`\frac{\rho_2}{\rho_1} = \frac{u_1}{u_2} = \frac{(\gamma+1)M_1^2}{2 + (\gamma-1)M_1^2}`, '[–]', 'M₁-only form; tends to (γ+1)/(γ−1) as M₁ → ∞.'],
          ['Stagnation pressure ratio', R`\frac{p_{02}}{p_{01}} = \frac{\left(\frac{(\gamma+1)M_1^2}{2 + (\gamma-1)M_1^2}\right)^{\frac{\gamma}{\gamma-1}}}{\left(\frac{2\gamma}{\gamma+1}M_1^2 - \frac{\gamma-1}{\gamma+1}\right)^{\frac{1}{\gamma-1}}}`, '[–]', 'Only a function of M₁ and γ; always < 1.'],
          ['Rankine–Hugoniot (density)', R`\frac{\rho_2}{\rho_1} = \frac{(\gamma-1) + (\gamma+1)\,p_2/p_1}{(\gamma+1) + (\gamma-1)\,p_2/p_1}`, '[–]', 'Derived in Q7 below. Differs from isentropic ρ ∝ p^(1/γ).'],
          ['Maximum density ratio', R`\left(\frac{\rho_2}{\rho_1}\right)_{max} = \frac{\gamma+1}{\gamma-1} = 6\ \text{(air)}`, '[–]', 'As p₂/p₁ → ∞.']
        ]],
        ['para', R`The **Rankine–Hugoniot** relation links density to **pressure** ratio directly (no Mach numbers). It is derived step by step from (12.1) in **Q7** of the problem sheet below. Letting $p_2/p_1 \to \infty$ gives the **maximum density ratio** $(\gamma+1)/(\gamma-1) = 6$ for air: however strong the shock, air can only be compressed sixfold by it (an isentropic compression has no such limit, since $\rho \propto p^{1/\gamma}$).`],
        ['warn', 'Note', [
          R`**Derive or quote?** The lecture derives $p_2/p_1$, $T_2/T_1$, $M_2^2$ (eqs 4–6), sets up the $p_{02}/p_{01}$ chain, derives Rankine–Hugoniot (eq 7) and the entropy change, and Q7 asks for the Rankine–Hugoniot derivation as a set question — so be ready to reproduce those. The M₁-only rearrangements and the final $p_{02}/p_{01}$ expression are "substitute and simplify" results: know where they come from (above), but in a numerical question just quote and use them.`
        ]],
        ['warn', 'Important', [
          R`Use the isentropic relations (Topic 9) **either side** of a shock, never **across** it. To get $p_{02}/p_{01}$, chain them: $\frac{p_{02}}{p_{01}} = \frac{p_{02}}{p_2}\cdot\frac{p_2}{p_1}\cdot\frac{p_1}{p_{01}}$.`
        ]],
        ['ex', 'Check your calculator — normal shock at M₁ = 2 in air (γ = 1.4)', [
          ['t', R`Work out each ratio for $M_1 = 2$, then compare with the table below the solution.`],
          ['ans'],
          ['m', R`M_2^2 = \frac{1 + 0.2(4)}{1.4(4) - 0.2} = \frac{1.8}{5.4} = 0.3333 \Rightarrow M_2 = 0.577`],
          ['m', R`\frac{p_2}{p_1} = 1 + \frac{2.8}{2.4}(4 - 1) = 4.50`],
          ['m', R`\frac{T_2}{T_1} = \frac{1.8}{1 + 0.2(0.3333)} = \frac{1.8}{1.0667} = 1.688`],
          ['m', R`\frac{\rho_2}{\rho_1} = \frac{2.4(4)}{2 + 0.4(4)} = \frac{9.6}{3.6} = 2.667 = \frac{4.5}{1.688}\ \checkmark`],
          ['t', R`$p_{02}/p_{01}$ by the chain (the method), then by the formula (the check):`],
          ['m', R`\frac{p_{02}}{p_{01}} = \underbrace{(1.0667)^{3.5}}_{p_{02}/p_2 = 1.253}\times\underbrace{4.50}_{p_2/p_1}\times\underbrace{\frac{1}{(1.8)^{3.5}}}_{p_1/p_{01} = 1/7.824} = 0.721`],
          ['m', R`\text{formula: } \frac{p_{02}}{p_{01}} = \frac{(2.667)^{3.5}}{(4.5)^{2.5}} = \frac{30.97}{42.96} = 0.721\ \checkmark`]
        ]],
        ['html', '<table style="border-collapse:collapse;width:100%;max-width:640px;font-size:13.5px;margin:6px 0"><thead><tr style="text-align:left;color:var(--k8C8273)">' + ['M₁', 'M₂', 'p₂/p₁', 'T₂/T₁', 'ρ₂/ρ₁', 'p₀₂/p₀₁', '(s₂−s₁)/Cᵥ', 'p₀₂/p₁ (Pitot)'].map((h) => '<th style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0)">' + h + '</th>').join('') + '</tr></thead><tbody><tr style="color:var(--k3A332B)">' + ['2', '0.577', '4.500', '1.688', '2.667', '0.721', '0.131', '5.64'].map((v) => '<td style="padding:6px 8px;border-bottom:1px solid var(--kE7E0D0);font-family:\'JetBrains Mono\',monospace">' + v + '</td>').join('') + '</tr></tbody></table>']
      ]
    },
    {
      num: '12.3', title: 'Entropy: Why Shocks Only Go Supersonic → Subsonic',
      blocks: [
        ['para', R`**Why we may use $ds = dQ/T$ for an irreversible shock.** That definition holds only along a **reversible** path, and a shock is irreversible. But entropy is a **state function**: $s_2 - s_1$ depends only on the end states. So evaluate it along **any reversible path** joining state 1 to state 2 — that is exactly what the Gibbs relation $T\,ds = C_v\,dT + p\,d(1/\rho)$ does.`],
        ['para', R`**Second law.** The shock is adiabatic — no heat crosses the control volume — so the surroundings' entropy does not change, and the gas's entropy cannot fall: $s_2 - s_1 \ge 0$, with $> 0$ for an irreversible (real) shock. Any solution of (12.1) with $s_2 < s_1$ is impossible.`],
        ['deriv', 'Derivation — entropy change across a normal shock', [
          ['t', R`Gibbs relation, with $d(1/\rho) = -d\rho/\rho^2$ and $p/T = \rho R$:`],
          ['m', R`ds = \frac{1}{T}\left(C_v\,dT + p\,d(1/\rho)\right) = C_v\frac{dT}{T} - R\frac{d\rho}{\rho} \;\Rightarrow\; s_2 - s_1 = C_v\ln\frac{T_2}{T_1} - R\ln\frac{\rho_2}{\rho_1}`],
          ['t', R`Take out $C_v$ using $R/C_v = \gamma - 1$, then replace $T_2/T_1$ by $(p_2/p_1)(\rho_1/\rho_2)$ (ideal gas):`],
          ['m', R`s_2 - s_1 = C_v\ln\left[\frac{T_2}{T_1}\left(\frac{\rho_1}{\rho_2}\right)^{\gamma-1}\right] = C_v\ln\left[\frac{p_2}{p_1}\left(\frac{\rho_1}{\rho_2}\right)^{\gamma}\right]`],
          ['t', R`Insert the M₁-only forms $\frac{p_2}{p_1} = \frac{2\gamma M_1^2 - \gamma + 1}{\gamma+1}$ and $\frac{\rho_1}{\rho_2} = \frac{2 + (\gamma-1)M_1^2}{(\gamma+1)M_1^2}$ (from section 12.2):`],
          ['m', R`s_2 - s_1 = C_v\ln\left[\left(\frac{2\gamma M_1^2 - \gamma + 1}{\gamma+1}\right)\left(\frac{2 + (\gamma-1)M_1^2}{(\gamma+1)M_1^2}\right)^{\gamma}\right]`],
          ['t', R`Check at $M_1 = 2$: $\ln\left[4.5\times(1/2.667)^{1.4}\right] = \ln(1.140) = 0.131$, so $s_2 - s_1 = 0.131\,C_v$.`]
        ]],
        ['svg', 'tf_entropy_m', 'Entropy change across a normal shock, (s₂ − s₁)/C_v against M₁ for air: positive only for M₁ > 1. Below M₁ = 1 the gas would lose entropy — impossible for an adiabatic process. The curve is very flat at M₁ = 1.'],
        ['list', null, false, [
          R`$M_1 > 1$: $s_2 - s_1 > 0$ ✓ allowed.`,
          R`$M_1 < 1$: $s_2 - s_1 < 0$ — **impossible** for an adiabatic process. So no "expansion shock" from subsonic to supersonic.`,
          R`Near $M_1 = 1$ the curve is very flat, $s_2 - s_1 \approx 0$ — which is why **weak waves can be treated as isentropic**.`
        ]],
        ['warn', 'Key Insight', [
          R`The loss of stagnation pressure **is** the entropy rise. Write $s_2 - s_1$ between the two **stagnation** states instead: $s_2 - s_1 = C_p\ln(T_{02}/T_{01}) - R\ln(p_{02}/p_{01})$. Since $T_{02} = T_{01}$, $\;p_{02}/p_{01} = e^{-(s_2 - s_1)/R}$. At $M_1 = 2$: $(s_2 - s_1)/R = 0.131/0.4 = 0.327$, and $e^{-0.327} = 0.721$ ✓ (same as section 12.2).`
        ]]
      ]
    },
    {
      num: '12.4', title: 'Shock Waves in Practice',
      blocks: [
        ['list', null, false, [
          R`Supersonic objects generate shocks wherever the geometry changes; shocks cause **wave drag**, so supersonic wings are long and thin (classically a long diamond), not aerofoils. Blunt bodies carry a **detached** bow shock.`,
          R`Projectiles and explosions (the Trinity test, Topic 3) make **travelling** shocks — see Example 1 in 12.5 for a blast-wave calculation.`
        ]],
        ['para', R`**Airspeed in supersonic flight.** A Pitot tube sits behind a bow shock; just in front of its mouth the shock is effectively **normal**, so the tube reads the stagnation pressure **behind** the shock, $p_{02}$. Divide by the free-stream static pressure $p_1$ and chain an isentropic ratio (behind the shock) with the shock ratio (across it), as below.`],
        ['deriv', 'Derivation — Rayleigh Pitot formula', [
          ['m', R`\frac{p_{02}}{p_1} = \frac{p_{02}}{p_2}\cdot\frac{p_2}{p_1} = \left(1 + \frac{\gamma-1}{2}M_2^2\right)^{\frac{\gamma}{\gamma-1}}\cdot\frac{2\gamma M_1^2 - (\gamma-1)}{\gamma+1}`],
          ['t', R`Substitute $M_2^2$ from section 12.2: $\;1 + \frac{\gamma-1}{2}M_2^2 = \dfrac{(\gamma+1)^2M_1^2}{4\gamma M_1^2 - 2(\gamma-1)}$. This gives the **Rayleigh Pitot formula**:`],
          ['m', R`\frac{p_{02}}{p_1} = \left(\frac{(\gamma+1)^2M_1^2}{4\gamma M_1^2 - 2(\gamma-1)}\right)^{\frac{\gamma}{\gamma-1}}\frac{1 - \gamma + 2\gamma M_1^2}{\gamma+1}`],
          ['t', R`**Air** ($\gamma = 1.4$): the bracket is $\frac{5.76M_1^2}{0.8(7M_1^2 - 1)} = \frac{7.2M_1^2}{7M_1^2 - 1}$ and the last factor is $\frac{0.4(7M_1^2 - 1)}{2.4}$, so $p_{02}/p_1 = \frac{7.2^{3.5}}{6}\,M_1^7(7M_1^2 - 1)^{-2.5}$ with $7.2^{3.5}/6 = 166.9$:`],
          ['m', R`\frac{p_{02}}{p_1} = \frac{166.9\,M_1^7}{\left(7M_1^2 - 1\right)^{2.5}} \qquad (\gamma = 1.4)`]
        ]],
        ['para', R`Check: $M_1 = 2$ gives $166.9\times128/27^{2.5} = 5.64$ ($= 0.721\times7.824$ ✓). **Sonic threshold:** at $M_1 = 1$ the shock is infinitesimal and the formula reduces to the isentropic value $p_0/p_1 = \left(\frac{\gamma+1}{2}\right)^{\frac{\gamma}{\gamma-1}} = 1.2^{3.5} = 1.893$ for air. A **smaller** reading means the flight is **subsonic**: use the isentropic (compressible momentum) $p_0/p$ instead. In practice $p_1$ is hard to measure.`],
        ['eq', [
          ['Rayleigh Pitot formula', R`\frac{p_{02}}{p_1} = \left(\tfrac{(\gamma+1)^2M_1^2}{4\gamma M_1^2 - 2(\gamma-1)}\right)^{\frac{\gamma}{\gamma-1}}\tfrac{1 - \gamma + 2\gamma M_1^2}{\gamma+1}`, '[–]', 'p₁ = free-stream static pressure (hard to measure).'],
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
          ['t', R`Ambient air at rest: $p_1 = 1\times10^5$ Pa, 30 °C. Inside the shock: $p_2 = 1.5$ MPa, 734 °C. $\gamma = 1.4$, $R = 287$, $C_p = 1000$ J/kg K. (a) Shock speed from mass + momentum. (b) Gas speed behind the shock from energy.`],
          ['ans'],
          ['t', R`Make the shock stationary: $u_1 = c$, $u_2 = c - u_a$. **Mass** gives the density ratio as a velocity ratio:`],
          ['m', R`\rho_1u_1 = \rho_2u_2 \;\Rightarrow\; \frac{\rho_1}{\rho_2} = \frac{u_2}{u_1}`],
          ['t', R`**Momentum** $p_1 + \rho_1u_1^2 = p_2 + \rho_2u_2^2$. Write $\rho_2u_2^2 = (\rho_1u_1)u_2 = \rho_1u_1^2\,(u_2/u_1) = \rho_1u_1^2\,(\rho_1/\rho_2)$:`],
          ['m', R`\rho_1u_1^2\left(1 - \frac{\rho_1}{\rho_2}\right) = p_2 - p_1 \;\Rightarrow\; u_1^2 = \frac{p_2 - p_1}{\rho_1\left(1 - \frac{\rho_1}{\rho_2}\right)}`],
          ['t', R`**Equation of state** for the density ratio: $\rho = p/RT$ on each side, so $\frac{\rho_1}{\rho_2} = \frac{p_1/RT_1}{p_2/RT_2} = \frac{p_1}{p_2}\frac{T_2}{T_1}$. Numbers (T in kelvin):`],
          ['m', R`\frac{T_2}{T_1} = \frac{1007}{303} = 3.323,\quad \frac{p_1}{p_2} = \frac{1}{15} = 0.0667 \;\Rightarrow\; \frac{\rho_1}{\rho_2} = 0.0667\times3.323 = 0.2216,\qquad \rho_1 = \frac{p_1}{RT_1} = \frac{10^5}{287\times303} = 1.150\ \text{kg/m}^3`],
          ['m', R`\text{(a) } c = u_1 = \sqrt{\frac{1.4\times10^6}{1.150\times(1 - 0.2216)}} = \sqrt{1.564\times10^6} = 1251\ \text{m/s}`],
          ['t', R`(b) **Energy** $C_pT_1 + \frac12u_1^2 = C_pT_2 + \frac12u_2^2$ in the shock frame:`],
          ['m', R`u_2^2 = u_1^2 - 2C_p(T_2 - T_1) = 1.564\times10^6 - 2(1000)(704) = 1.56\times10^5 \Rightarrow u_2 = 395\ \text{m/s (shock frame)}`],
          ['m', R`\text{transform back: } u_a = c - u_2 = 1251 - 395 = 856\ \text{m/s, radially outwards}`]
        ]],
        ['warn', 'Warning', [
          R`**The lecture uses $\rho_1 = 1.2$ kg/m³** and gets $c = 1230$, $u_2 = 291$, $u_a = 939$ m/s. But $p_1/RT_1 = 10^5/(287\times303) = 1.15$ kg/m³ (1.2 is roughly room-temperature air at 1 atm, not 30 °C at 1 bar). Even with $\rho_1 = 1.2$ the lines above give $c = 1224$, $u_2 = 301$, $u_a = 923$ m/s, so the slide figures also carry rounding.`,
          R`**This example is very sensitive.** $u_2$ is the small difference of two large numbers, and the data are over-specified and not quite consistent: for $p_2/p_1 = 15$ a true normal shock gives $T_2/T_1 = 3.46$ (Rankine–Hugoniot), not 3.32, and $C_p = 1000$ is not exactly $\gamma R/(\gamma-1) = 1004.5$. So routes disagree: continuity ($u_2 = u_1\rho_1/\rho_2 = 277$ m/s) gives $u_a = 974$ m/s instead of 856. Expect $u_a$ somewhere in 0.86–0.97 km/s; use the route the question asks for (here: energy) and show the method.`
        ]],
        ['ex', 'Example 2 — shock tube (lecture)', [
          ['t', R`High- and low-pressure chambers at 20 °C, $p_h/p_l = 10$. Just after the diaphragm bursts, find (a) the shock speed $c$, (b) the gas speed behind it. Air, $\gamma = 1.4$, $R = 287$. (Lecture model: the shock raises the low-pressure gas straight to $p_h$, i.e. $p_2/p_1 = 10$.)`],
          ['svg', 'tf_shock_tube', 'Shock tube (x–t diagram): after the diaphragm bursts a shock runs into the low-pressure gas, followed by the contact surface; an expansion fan runs back into the high-pressure gas.'],
          ['svg', 'tf_shock_tube_frame', 'Make the shock stationary: gas enters at u₁ = c and leaves at u₂ = c − u_h.'],
          ['ans'],
          ['m', R`\frac{p_2}{p_1} = 1 + \frac{2\gamma}{\gamma+1}(M_1^2 - 1) = 10 \Rightarrow M_1^2 = 1 + \frac{9\times2.4}{2.8} = 8.714,\ M_1 = 2.952`],
          ['m', R`M_2^2 = \frac{1 + 0.2(8.714)}{1.4(8.714) - 0.2} = \frac{2.743}{12.00} = 0.2286,\ M_2 = 0.478`],
          ['m', R`\text{(a) } c = M_1\sqrt{\gamma RT_1} = 2.952\times343.1 = 1013\ \text{m/s towards the low-pressure chamber}`],
          ['m', R`\frac{T_2}{T_1} = \frac{2.743}{1 + 0.2(0.2286)} = 2.623 \Rightarrow T_2 = 769\ \text{K},\ a_2 = \sqrt{1.4\times287\times769} = 556\ \text{m/s}`],
          ['m', R`\text{(b) } u_2 = M_2a_2 = 0.478\times556 = 266\ \text{m/s (shock frame)} \Rightarrow u_h = c - u_2 = 1013 - 266 = 747\ \text{m/s, towards the low-pressure chamber}`],
          ['t', R`Continuity check: $\rho_2/\rho_1 = (p_2/p_1)/(T_2/T_1) = 10/2.623 = 3.81$, so $u_2 = c/3.81 = 266$ m/s ✓.`]
        ]],
        ['warn', 'Warning', [
          R`**Two slide errors.** (1) The slides find $M_1$ from a quadratic in $x = M_1^2$, got by equating the two $M_2^2$ expressions. With $r = p_1/p_2$ it is $\gamma r\,x^2 + \left[(1-\beta)r - 1 - \beta\right]x - \left[1 + \beta(r-1)/\gamma\right] = 0$, i.e. $0.14x^2 - 1.12x - 0.871 = 0$, so $x = 8.71$ — the same as the direct formula above (which is quicker). The slide's constant is $-1.13$ (sign slip on the $0.129$ term), giving $M_1 = 2.98$, $M_2 = 0.497$, $c = 1022$ m/s.`,
          R`(2) The slides then compute $u_h = c - M_2\sqrt{\gamma R\,(293\ \text{K})} = 851$ m/s. But the gas behind the shock has been **heated** to 769 K, so its speed of sound is 556 m/s, not 343 m/s. Consistent answers: $c \approx 1013$ m/s, $u_h \approx 747$ m/s.`
        ]],
        ['warn', 'Note', [
          R`**This is a lecture simplification.** In a real shock tube the pressure behind the shock is **below** $p_h$: the high-pressure gas first passes through the expansion fan (see the x–t diagram), and the contact surface separates the two gases. Matching pressure and velocity across the contact surface (shock-tube theory, not in this course) gives $p_2/p_1 \approx 2.85$ for $p_h/p_l = 10$, so $M_1 \approx 1.61$ and $c \approx 550$ m/s. In this course's exam, use the lecture model ($p_2 = p_h$) unless told otherwise.`
        ]],
        ['warn', 'When to use', [
          R`**Which route, when — quick method summary.**`,
          R`**Stationary normal shock, $M_1$ known:** $M_2^2$ first, then $p_2/p_1$, $T_2/T_1$, $\rho_2/\rho_1$ (section 12.2); $T_0$ unchanged; $p_{02}/p_{01}$ by the chain or the formula. **Pressure ratio known instead:** $p_2/p_1 = 1 + \frac{2\gamma}{\gamma+1}(M_1^2 - 1)$ gives $M_1$ directly.`,
          R`**Travelling shock:** draw lab frame → add the shock speed $c$ to everything (opposite direction) → stationary shock with $u_1 = c$ (still gas ahead) or $u_1 = u_a + c$ (moving gas) → apply the relations, with $a_2 = \sqrt{\gamma RT_2}$ **behind** the shock → transform back.`,
          R`**Only $p$, $T$ data (no $M$), e.g. a blast wave:** mass + momentum + $p = \rho RT$ for $c$; energy for $u_2$ (Example 1).`,
          R`**Pitot tube in supersonic flow:** reading $p_{02}/p_1 > 1.893$ (air) → Rayleigh Pitot formula; below 1.893 → subsonic, isentropic $p_0/p$. **Shock in a nozzle:** isentropic up to the shock, shock relations across, isentropic after (new, lower $p_0$; same $T_0$).`
        ]]
      ]
    },
    {
      num: 'Ex 12', title: 'Problem Sheet — Shock Waves', wk: true,
      blocks: [
        ['para', R`These are the shock-wave questions (Q4, Q6, Q7, Q8) from the **Compressible flow** problem sheet. Q1–Q3 are in Topic 10 (Nozzles and Choked Flow) and Q5 is in Topic 11 (Converging–Diverging Nozzles).`],
        ['ex', 'Q4 — explosion in a gas pipeline', [
          ['t', R`A shock runs at 700 m/s into natural gas at $2\times10^5$ Pa, 20 °C; $\gamma = 1.31$, $R = 518$ J/kg K. Pressure and temperature behind it? [Sheet: $5.37\times10^5$ Pa; 378 K]`],
          ['svg', 'tf_moving_shock', 'Travelling shock: transform so gas enters the shock at c = 700 m/s.'],
          ['ans'],
          ['t', R`Travelling shock — make it stationary: gas enters at $u_1 = c = 700$ m/s. Here $\frac{\gamma-1}{2} = 0.155$.`],
          ['m', R`a_1 = \sqrt{1.31\times518\times293} = 445.9\ \text{m/s},\quad M_1 = \frac{700}{445.9} = 1.570,\quad M_1^2 = 2.465`],
          ['m', R`M_2^2 = \frac{1 + 0.155(2.465)}{1.31(2.465) - 0.155} = \frac{1.382}{3.074} = 0.450`],
          ['m', R`p_2 = p_1\frac{1 + \gamma M_1^2}{1 + \gamma M_2^2} = 2\times10^5\times\frac{4.229}{1.589} = 5.32\times10^5\ \text{Pa}\qquad \left(\text{check: } 1 + \tfrac{2.62}{2.31}(1.465) = 2.661\ \checkmark\right)`],
          ['m', R`T_2 = T_1\frac{1 + 0.155M_1^2}{1 + 0.155M_2^2} = 293\times\frac{1.382}{1.0697} = 378.5\ \text{K} \approx 378\ \text{K}`]
        ]],
        ['warn', 'Note', [
          R`The sheet's $5.37\times10^5$ Pa comes from rounding $M_2^2$ to 0.44 (which also gives its worked $T_2 = 379$ K). Carrying $M_2^2 = 0.450$ gives $p_2 = 5.32\times10^5$ Pa and $T_2 = 378.5$ K. Both are within rounding; quote 3 s.f. from unrounded intermediate values.`
        ]],
        ['ex', 'Q6 — shock in a C–D nozzle located by a Pitot-static tube', [
          ['t', R`A shock sits where the area is $A_1$; there, the Pitot-static manometer reads zero (stagnation pressure after the shock = throat static pressure). Find (a) $M_1$ just before the shock, (b) $A_1/A_t$, (c) the gas speed just after the shock if $T_0 = 600$ K. [2.43; 2.47; 249 m/s]`],
          ['svg', 'tf_laval_shock_pitot', 'The Pitot probe behind the shock reads p₀₂; the manometer shows it equals the throat static pressure p_t.'],
          ['ans'],
          ['t', R`Choked, so $M_t = 1$; supersonic up to the shock. Given $p_{02}/p_t = 1$, chain the ratios:`],
          ['m', R`\frac{p_{02}}{p_t} = \underbrace{\left(\tfrac{\gamma+1}{2}\right)^{\frac{\gamma}{\gamma-1}}}_{p_{01}/p_t}\underbrace{\left(\frac{1 + \frac{\gamma-1}{2}M_2^2}{1 + \frac{\gamma-1}{2}M_1^2}\right)^{\frac{\gamma}{\gamma-1}}}_{(p_1/p_{01})(p_{02}/p_2)}\underbrace{\frac{1 + \gamma M_1^2}{1 + \gamma M_2^2}}_{p_2/p_1} = 1`],
          ['t', R`with $M_2(M_1)$ from the shock relation. Solve numerically (spreadsheet, bisection): $M_1 = 2.43$.`],
          ['t', R`**By hand (shortcut).** Group the same chain as $p_{02}/p_t = (p_{02}/p_1)(p_1/p_{01})(p_{01}/p_t)$. The first factor is the Rayleigh Pitot formula (section 12.4), so for air the condition involves $M_1$ only:`],
          ['m', R`\frac{p_{02}}{p_t} = \underbrace{\frac{166.9\,M_1^7}{(7M_1^2 - 1)^{2.5}}}_{p_{02}/p_1}\cdot\underbrace{\frac{1}{(1 + 0.2M_1^2)^{3.5}}}_{p_1/p_{01}}\cdot\underbrace{1.893}_{p_{01}/p_t} = 1`],
          ['t', R`Trial values: $M_1 = 2.0 \to 1.364$; $2.4 \to 1.022$; $2.5 \to 0.945$; so the root is just above 2.4. **Check at $M_1 = 2.43$:** $p_{02}/p_1 = 8.08$, $p_1/p_t = 0.06527\times1.893 = 0.1236$, so $p_{02}/p_t = 8.08\times0.1236 = 0.998 \approx 1$ ✓.`],
          ['m', R`\text{(b) } \frac{A_1}{A_t} = \frac{1}{M_1}\left(\frac{1 + 0.2M_1^2}{1.2}\right)^3 = 2.47 \qquad \text{(c) } M_2 = 0.520,\ T_2 = \frac{600}{1 + 0.2M_2^2} = 569\ \text{K},\ u_2 = M_2\sqrt{\gamma RT_2} = 249\ \text{m/s}`],
          ['t', R`$T_0$ is unchanged across the shock, so $T_0/T_2 = 1 + 0.2M_2^2$ still holds.`]
        ]],
        ['ex', 'Q7 — Rankine–Hugoniot and the maximum density ratio', [
          ['t', R`From mass, momentum and energy, derive $\frac{\rho_2}{\rho_1} = \frac{(\gamma-1) + (\gamma+1)p_2/p_1}{(\gamma+1) + (\gamma-1)p_2/p_1}$ and find the maximum density ratio in air. [6]`],
          ['ans'],
          ['t', R`**Step 1 — mass into momentum.** $u_2 = u_1\rho_1/\rho_2$, so $\rho_2u_2^2 = \rho_1u_1^2(\rho_1/\rho_2)$:`],
          ['m', R`p_1 - p_2 = \rho_2u_2^2 - \rho_1u_1^2 = \rho_1u_1^2\left(\frac{\rho_1}{\rho_2} - 1\right)`],
          ['t', R`**Step 2 — mass into energy.** $u_2^2 = u_1^2(\rho_1/\rho_2)^2$:`],
          ['m', R`C_p(T_1 - T_2) = \tfrac12u_2^2 - \tfrac12u_1^2 = \frac{u_1^2}{2}\left(\left(\frac{\rho_1}{\rho_2}\right)^2 - 1\right)`],
          ['t', R`**Step 3 — divide** (the $u_1^2$ cancels; factorise $(\rho_1/\rho_2)^2 - 1 = (\rho_1/\rho_2 - 1)(\rho_1/\rho_2 + 1)$):`],
          ['m', R`\frac{p_1 - p_2}{C_p(T_1 - T_2)} = \frac{2\rho_1\left(\frac{\rho_1}{\rho_2} - 1\right)}{\left(\frac{\rho_1}{\rho_2} - 1\right)\left(\frac{\rho_1}{\rho_2} + 1\right)} = \frac{2\rho_1}{\frac{\rho_1}{\rho_2} + 1}`],
          ['t', R`**Step 4 — eliminate $T$** with $T = p/\rho R$, and use $C_p/R = \gamma/(\gamma - 1)$ (from $R = C_p - C_v$, $\gamma = C_p/C_v$):`],
          ['m', R`\frac{R(p_1 - p_2)}{C_p\left(\frac{p_1}{\rho_1} - \frac{p_2}{\rho_2}\right)} = \frac{2\rho_1}{\frac{\rho_1}{\rho_2} + 1} \;\Rightarrow\; \frac{\gamma - 1}{\gamma}\,\frac{p_1 - p_2}{\frac{p_1}{\rho_1} - \frac{p_2}{\rho_2}} = \frac{2\rho_1}{\frac{\rho_1}{\rho_2} + 1}`],
          ['t', R`**Step 5 — ratios.** Let $P = p_2/p_1$ and $X = \rho_2/\rho_1$. Then $p_1 - p_2 = p_1(1 - P)$, $\;\frac{p_1}{\rho_1} - \frac{p_2}{\rho_2} = \frac{p_1}{\rho_1}\left(1 - \frac{P}{X}\right) = \frac{p_1}{\rho_1}\frac{X - P}{X}$, and $\frac{\rho_1}{\rho_2} + 1 = \frac{1 + X}{X}$. Cancel $\rho_1X$ from both sides:`],
          ['m', R`\frac{\gamma - 1}{\gamma}\,\frac{1 - P}{X - P} = \frac{2}{1 + X} \;\Rightarrow\; (\gamma - 1)(1 - P)(1 + X) = 2\gamma(X - P)`],
          ['t', R`**Step 6 — solve for $X$.** Expand and collect the $X$ terms:`],
          ['m', R`X\left[(\gamma - 1)(1 - P) - 2\gamma\right] = -2\gamma P - (\gamma - 1)(1 - P) \;\Rightarrow\; X\left[-(\gamma + 1) - (\gamma - 1)P\right] = -\left[(\gamma - 1) + (\gamma + 1)P\right]`],
          ['m', R`\frac{\rho_2}{\rho_1} = X = \frac{(\gamma - 1) + (\gamma + 1)\,p_2/p_1}{(\gamma + 1) + (\gamma - 1)\,p_2/p_1}`],
          ['t', R`**Maximum.** Divide top and bottom by $p_2/p_1$ and let $p_2/p_1 \to \infty$ (so $p_1/p_2 \to 0$):`],
          ['m', R`\left(\frac{\rho_2}{\rho_1}\right)_{max} = \frac{\gamma+1}{\gamma-1} = \frac{2.4}{0.4} = 6`],
          ['t', R`Check against section 12.2: $p_2/p_1 = 4.5$ gives $\frac{0.4 + 2.4(4.5)}{2.4 + 0.4(4.5)} = \frac{11.2}{4.2} = 2.667$ ✓ (the $M_1 = 2$ value).`]
        ]],
        ['ex', 'Q8 — valve slammed shut on a supersonic pipe flow', [
          ['t', R`Air from a large tank (10 bar, 20 °C) flows along a pipe to a valve. (a) With the valve open, the pressure just upstream is 2 bar — flow speed? (b) The valve shuts suddenly and a shock runs back up the pipe at 200 m/s, bringing the air to rest. Pressure and temperature of the stopped gas? [Sheet: 464 m/s; 13.5 bar, 383 K]`],
          ['svg', 'tf_valve_shock', 'Slamming the valve sends a shock back upstream at c; adding c (left to right) makes it stationary.'],
          ['ans'],
          ['t', R`(a) Isentropic from the tank ($p_0 = 10$ bar, $T_0 = 293$ K) to the valve:`],
          ['m', R`\frac{p_0}{p} = 5 = \left(1 + 0.2M_a^2\right)^{3.5} \Rightarrow 1 + 0.2M_a^2 = 5^{1/3.5} = 1.584 \Rightarrow M_a = 1.709`],
          ['m', R`T_a = \frac{293}{1.584} = 185.0\ \text{K},\quad a = \sqrt{1.4\times287\times185.0} = 272.6\ \text{m/s},\quad u_a = M_aa = 466\ \text{m/s}`],
          ['t', R`(b) Make the shock stationary: add 200 m/s downstream. Gas enters at $u_a + c$, leaves at $c$ (at rest in the lab). Upstream state: $p_1 = 2$ bar, $T_1 = 185.0$ K.`],
          ['m', R`M_1 = \frac{u_a + c}{a} = \frac{466 + 200}{272.6} = 2.442,\quad M_2^2 = \frac{1 + 0.2(5.964)}{1.4(5.964) - 0.2} = \frac{2.193}{8.150} = 0.269,\ M_2 = 0.519`],
          ['m', R`p_2 = 2\left[1 + \tfrac{2.8}{2.4}(5.964 - 1)\right] = 2\times6.79 = 13.6\ \text{bar},\qquad T_2 = 185.0\times\frac{2.193}{1 + 0.2(0.269)} = 185.0\times2.081 = 385\ \text{K}`],
          ['t', R`Note the jump in sound speed: $a_2 = \sqrt{\gamma RT_2} = 393$ m/s behind the shock vs 273 m/s ahead. Consistency: in the shock frame the gas leaves at $M_2a_2 = 204$ m/s $\approx c = 200$ m/s, so it is (very nearly) at rest in the lab ✓.`]
        ]],
        ['warn', 'Note', [
          R`**Rounding in the sheet answers.** (a) $u_a = 465.8$ m/s: the answer line says 464, the worked solution 467 — both are rounding of the same calculation; use **466 m/s**. (b) The sheet rounds $M_1$ to 2.43, which gives 13.4–13.5 bar and 383 K; carrying $M_1 = 2.442$ gives **13.6 bar and 385 K**. The sheet's $a_2 = c/M_2 = 385$ m/s assumes the gas leaves at exactly $c$; the given $c = 200$ m/s is itself rounded, so $\sqrt{\gamma RT_2} = 393$ m/s is the better value.`
        ]]
      ]
    }
  ]
}
