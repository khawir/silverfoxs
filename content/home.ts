export const homeContent = {
  hero: {
    heading: "Security built for the way attacks actually happen.",
    paragraphs: [
      "Attackers do not think in products, departments or compliance checklists.",
      "Neither do we.",
    ],
    microcopy: "Offensive insight. Defensive discipline. Engineering depth.",
  },
  positioning: {
    label: "ASSUMPTION",
    resolved: "EVIDENCE",
    heading: "Security should be demonstrated, not assumed.",
    paragraphs: [
      "Modern organisations operate across cloud platforms, applications, identities, endpoints, networks, third parties and increasingly complex technology stacks.",
      "A weakness in any one of them can become the beginning of an attack path.",
      "SilverFox works across those boundaries - assessing risk, challenging defences, engineering stronger environments, monitoring for threats and investigating incidents when something goes wrong.",
    ],
  },
  capabilities: {
    kineticFrom: "Control exists.",
    kineticTo: "Control holds.",
    heading: "Cybersecurity across the attack lifecycle.",
    intro:
      "From board-level cyber risk to deeply technical security operations, SilverFox provides specialist capabilities across six core practices.",
  },
  attackPath: {
    heading: "Attackers see paths. We do too.",
    path: [
      "A vulnerable application may expose an identity.",
      "A compromised identity may unlock cloud infrastructure.",
      "A misconfiguration may turn limited access into privileged access.",
      "An overlooked system may become the easiest route into everything else.",
    ],
    intro: "That is why SilverFox approaches cybersecurity as a connected problem.",
    verbs: [
      { verb: "Understand the risk.", body: "Know what matters, where exposure exists and which controls deserve attention." },
      { verb: "Challenge the defence.", body: "Test systems the way a determined adversary would." },
      { verb: "Engineer the solution.", body: "Build security into applications, infrastructure, cloud and identity." },
      { verb: "Watch the environment.", body: "Detect meaningful activity before alerts disappear into noise." },
      { verb: "Respond with evidence.", body: "Contain incidents, establish what happened and regain control." },
    ],
  },
  engineering: {
    heading: "When the right solution does not exist, build it.",
  },
  technology: {
    heading: "Know the exposure. Read the signal. Prove the defence.",
    intro: "Not another collection of dashboards. Three platforms. Three questions.",
    products: [
      {
        id: "SCOPE" as const,
        accent: "flare" as const,
        heading: "Know the exposure.",
        subheading: "See your organisation from the outside in.",
        cta: "Explore SCOPE",
        href: "/technologies/scope",
      },
      {
        id: "SIGNAL" as const,
        accent: "pulse" as const,
        heading: "Read the signal.",
        subheading: "Turn security telemetry into decisions.",
        cta: "Explore SIGNAL",
        href: "/technologies/signal",
      },
      {
        id: "RANGE" as const,
        accent: "solar" as const,
        heading: "Prove the defence.",
        subheading: "Test resilience before reality does.",
        cta: "Explore RANGE",
        href: "/technologies/range",
      },
    ],
  },
  whySilverFox: {
    kicker: "We do not sell fear. We engineer confidence.",
    items: [
      { heading: "Offensive insight.", body: "Understanding security from the attacker's perspective changes how defences are designed." },
      { heading: "Defensive discipline.", body: "Detection and response require engineering, context and operational consistency." },
      { heading: "Engineering depth.", body: "Finding the problem is not enough. SilverFox can help design, integrate and build the solution." },
      { heading: "Connected thinking.", body: "Cloud, identity, applications, infrastructure and data are not independent attack surfaces. Neither is our approach." },
      { heading: "Evidence over assumption.", body: "We test what can be tested, investigate what happened and explain what the evidence supports." },
      { heading: "Technology without dependency.", body: "We work across technology ecosystems and develop specialised capability where standard platforms are not enough." },
    ],
  },
  finalCta: {
    heading: "What would an attacker find?",
    paragraphs: [
      "Your attack surface already exists.",
      "The question is how well you understand it, how effectively your controls hold and how quickly your team can act when something changes.",
    ],
    primaryCta: "Talk to a Security Specialist",
    secondaryCta: "Test Your Defences",
    supportingLinks: [
      { label: "Map Your Exposure with SCOPE", href: "/technologies/scope" },
      { label: "Strengthen Your Cyber Defence", href: "/services/cyber-defence" },
      { label: "Respond to an Incident", href: "/services/incident-response" },
    ],
  },
};
