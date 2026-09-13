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
  certifications: {
    kineticFrom: "CLAIMED.",
    kineticTo: "CERTIFIED.",
    heading: "We don't just hold certifications. We deliver them.",
    intro:
      "SilverFox designs and delivers the internal and external audits that take an organisation from claimed compliance to independently certified - against ISO/IEC 27001, ISO 9001, SWIFT CSP and CMMC. Every engagement is led by practitioners holding OSCP, CREST and CISSP credentials of their own.",
    cta: "Explore Certification Audits",
    href: "/services/strategy-risk-assurance#certification-audits",
    items: [
      { name: "ISO/IEC 27001", body: "Information Security Management" },
      { name: "ISO 9001", body: "Quality Management" },
      { name: "SWIFT CSP", body: "Customer Security Programme" },
      { name: "CMMC", body: "Cybersecurity Maturity Model Certification" },
      { name: "OSCP", body: "Offensive Security Certified Professional" },
      { name: "CREST", body: "Certified security testing" },
      { name: "CISSP", body: "Certified Information Systems Security Professional" },
    ],
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
    /** Short technical labels for the lifecycle scroll section's parallel attack-path track - one per stage. */
    chain: ["Vulnerable Application", "Identity", "Cloud", "Privileged Access", "Critical Asset"],
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
  brandStatement: {
    lineOne: "We do not sell fear.",
    lineTwo: "We engineer confidence.",
    supporting: "Offensive insight, defensive discipline and engineering depth, connected by evidence.",
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
