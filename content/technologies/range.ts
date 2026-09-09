import type { ProductContent } from "@/lib/types";

export const range: ProductContent = {
  id: "RANGE",
  slug: "range",
  accent: "solar",
  category: "Cyber Range & Digital Twin Platform",
  headline: "Prove the defence.",
  subheadline: "Test resilience before reality does.",
  question: "Can we withstand it?",
  hero: {
    paragraphs: [
      "Security teams need somewhere to fail safely.",
      "RANGE creates controlled environments where organisations can reproduce networks, simulate attacks, train defenders, validate controls and test incident-response capability without placing production systems at risk.",
    ],
    primaryCta: "Discuss RANGE",
    secondaryCta: "Build Your Cyber Range",
  },
  problem: {
    id: "the-problem",
    heading: "Production is the wrong place to discover the defence does not work.",
    paragraphs: [
      "Policies, architecture diagrams and tabletop discussions can establish intent.",
      "They do not fully reproduce the pressure, technical behaviour and uncertainty of an active attack.",
      "Organisations need controlled environments where people, processes and technologies can be challenged without placing real operations at risk.",
    ],
  },
  questionSection: {
    heading: "Can we withstand it?",
    intro: "Not simply:",
    notQuestion: "Did the team complete the training?",
    questions: [
      "Did the control stop the technique?",
      "Did the SOC see the activity?",
      "Did analysts understand what was happening?",
      "Did the response process work under pressure?",
      "What should be improved before a real incident?",
    ],
  },
  capabilityModel: {
    heading: "Build. Simulate. Exercise. Measure. Improve.",
    chapters: [
      {
        id: "cyber-range-environments",
        heading: "01. Cyber Range Environments",
        subheading: "Create somewhere failure is safe.",
        paragraphs: ["RANGE can support:"],
        groups: [
          {
            items: [
              "Virtual security labs",
              "Enterprise network environments",
              "Red team environments",
              "Blue team environments",
              "Purple team environments",
              "SOC training environments",
              "DFIR laboratories",
              "Malware-analysis laboratories",
              "Capture-the-Flag environments",
              "Cloud security labs",
              "Application-security labs",
              "Identity attack labs",
            ],
          },
        ],
      },
      {
        id: "digital-twins",
        heading: "02. Digital Twins",
        subheading: "Reproduce the environment that matters.",
        paragraphs: ["Digital twins can model selected aspects of real technology environments, including:"],
        groups: [
          {
            items: [
              "Enterprise networks",
              "Cloud environments",
              "Critical systems",
              "Identity services",
              "Applications and APIs",
              "IT/OT environments",
              "SCADA systems",
              "Industrial networks",
              "Security tooling and telemetry",
            ],
          },
        ],
        footnote: [
          "The objective is not to clone every production detail. It is to reproduce the components, relationships and behaviours needed to test a defined question.",
        ],
      },
      {
        id: "attack-simulation",
        heading: "03. Attack Simulation",
        paragraphs: ["RANGE can support controlled activity such as:"],
        groups: [
          {
            items: [
              "Initial-access scenarios",
              "Credential attacks",
              "Privilege escalation",
              "Lateral movement",
              "Persistence",
              "Command and control",
              "Cloud compromise",
              "Data-access scenarios",
              "Malware behaviour",
              "Insider scenarios",
              "OT/ICS attack scenarios",
            ],
          },
        ],
        footnote: ["Simulation must operate within defined safety, isolation and authorisation controls."],
      },
      {
        id: "red-blue-purple-teaming",
        heading: "04. Red, Blue & Purple Teaming",
        subheading: "Exercise the complete defensive loop.",
        paragraphs: ["RANGE can provide controlled environments for:"],
        groups: [
          {
            items: [
              "Red team rehearsals",
              "Blue team training",
              "Purple team validation",
              "Adversary emulation",
              "Detection testing",
              "Threat-hunting exercises",
              "Response coordination",
              "After-action review",
            ],
          },
        ],
      },
      {
        id: "soc-training",
        heading: "05. SOC Training",
        paragraphs: ["Security operations teams can practise:"],
        groups: [
          {
            items: [
              "alert triage",
              "entity analysis",
              "timeline reconstruction",
              "threat hunting",
              "intelligence use",
              "escalation",
              "containment decisions",
              "case documentation",
              "stakeholder communication",
            ],
          },
        ],
        footnote: ["Scenarios can be designed around the tools, threats and operating model relevant to the team."],
      },
      {
        id: "ir-dfir-exercises",
        heading: "06. Incident Response & DFIR Exercises",
        paragraphs: ["RANGE can support exercises involving:"],
        groups: [
          {
            items: [
              "ransomware",
              "business email compromise",
              "endpoint compromise",
              "cloud incidents",
              "insider threats",
              "malware analysis",
              "evidence collection",
              "forensic triage",
              "incident scoping",
              "recovery decisions",
            ],
          },
        ],
        footnote: ["Exercises can test both technical work and the coordination needed around it."],
      },
      {
        id: "it-ot-industrial-simulation",
        heading: "07. IT/OT & Industrial Simulation",
        subheading: "Test cyber-physical scenarios without risking physical operations.",
        paragraphs: ["Where technically appropriate, RANGE can model:"],
        groups: [
          {
            items: [
              "enterprise and industrial network boundaries",
              "SCADA environments",
              "industrial protocols",
              "supervisory systems",
              "engineering workstations",
              "remote-access pathways",
              "segmentation controls",
              "monitoring and detection",
              "operational-impact scenarios",
            ],
          },
        ],
        footnote: [
          "OT and critical-infrastructure capability sits within relevant services and RANGE scenarios. It is not a separate seventh service or standalone industry page.",
        ],
      },
      {
        id: "security-control-validation",
        heading: "08. Security-Control Validation",
        paragraphs: ["RANGE can help determine whether controls:"],
        groups: [
          {
            items: [
              "prevent defined attack techniques",
              "generate useful telemetry",
              "create meaningful detections",
              "support investigation",
              "enable containment",
              "behave as designed under realistic conditions",
            ],
          },
          {
            heading: "Potential validation areas include",
            items: ["EDR/XDR", "SIEM", "network controls", "identity controls", "cloud controls", "segmentation", "email security", "security orchestration"],
          },
        ],
      },
      {
        id: "technology-evaluation",
        heading: "09. Technology Evaluation",
        subheading: "Test before production adoption.",
        paragraphs: ["Controlled environments can be used to evaluate:"],
        groups: [
          {
            items: [
              "security products",
              "architecture options",
              "integrations",
              "configuration changes",
              "detection content",
              "deployment assumptions",
              "performance under defined scenarios",
            ],
          },
        ],
      },
      {
        id: "exercise-management",
        heading: "10. Exercise Management",
        paragraphs: ["RANGE can support the exercise lifecycle:"],
        groups: [
          {
            items: [
              "objective definition",
              "scenario development",
              "environment preparation",
              "participant management",
              "event injection",
              "exercise control",
              "scoring",
              "evidence capture",
              "participant analytics",
              "after-action review",
              "improvement tracking",
            ],
          },
        ],
      },
      {
        id: "scenario-development",
        heading: "11. Scenario Development",
        paragraphs: ["Scenarios should reflect an objective rather than exist only for spectacle.", "They may be informed by:"],
        groups: [
          {
            items: [
              "threat intelligence",
              "recent incidents",
              "relevant adversary techniques",
              "business-critical systems",
              "known control gaps",
              "regulatory or readiness requirements",
              "previous assessment findings",
            ],
          },
        ],
      },
      {
        id: "measurement-after-action-review",
        heading: "12. Measurement & After-Action Review",
        paragraphs: ["Exercises should produce evidence.", "Potential measures include:"],
        groups: [
          {
            items: [
              "detection coverage",
              "time to detection",
              "time to investigation",
              "escalation quality",
              "containment decisions",
              "missed telemetry",
              "control effectiveness",
              "participant actions",
              "process gaps",
              "improvement completion",
            ],
          },
        ],
        footnote: ["The objective is not merely to score participants. It is to improve the defence."],
      },
    ],
  },
  architecture: {
    heading: "From scenario to improvement.",
    tiers: [
      ["SCENARIO LIBRARY"],
      ["SILVERFOX RANGE"],
      ["Enterprise", "Cloud", "OT/ICS"],
      ["CONTROLLED ENVIRONMENT"],
      ["Attack", "Defence", "Exercise"],
      ["MEASUREMENT & REVIEW"],
      ["IMPROVEMENT"],
    ],
  },
  deployment: {
    id: "deployment-isolation",
    heading: "Deployment & Isolation",
    paragraphs: [
      "RANGE architecture should reflect the scenario, data sensitivity and operational constraints.",
      "Potential models may include:",
    ],
    groups: [
      {
        items: [
          "SilverFox-managed environments",
          "dedicated customer environments",
          "private-cloud deployment",
          "on-premise deployment where supported",
          "isolated laboratory environments",
        ],
      },
    ],
    footnote: [
      "Public claims about air-gapped operation, full production replication or specialised hardware integration should only be made where those capabilities have been implemented and validated.",
    ],
  },
  productConnections: [
    {
      heading: "RANGE + SCOPE",
      body: "SCOPE can identify exposures and attack paths. RANGE can reproduce selected scenarios and test how controls and teams respond.",
      sequence: ["Discover", "Reproduce", "Test", "Improve"],
    },
    {
      heading: "RANGE + SIGNAL",
      body: "RANGE generates controlled attack activity. SIGNAL can observe, correlate and investigate it.",
      sequence: ["Attack", "Detect", "Measure", "Improve"],
    },
  ],
  connections: [
    {
      heading: "Offensive Security",
      href: "/services/offensive-security",
      body: "Controlled adversary simulation, red teaming and purple teaming.",
    },
    {
      heading: "Cyber Defence & Managed Security",
      href: "/services/cyber-defence",
      body: "SOC training, detection validation and threat-hunting exercises.",
    },
    {
      heading: "Incident Response, DFIR & Threat Intelligence",
      href: "/services/incident-response",
      body: "Incident exercises, forensic laboratories and scenario development informed by real threats.",
    },
    {
      heading: "Cyber Strategy, Risk & Assurance",
      href: "/services/strategy-risk-assurance",
      body: "Readiness exercises and validation of security assumptions.",
    },
    {
      heading: "Cloud, Application & Infrastructure Security",
      href: "/services/cloud-application-infrastructure",
      body: "Architecture and technology testing before production deployment.",
    },
  ],
  useCases: [
    { heading: "Cyber Defence Training", body: "Develop practical analyst skill in realistic environments." },
    { heading: "Purple Team Exercises", body: "Test attack techniques and improve detection collaboratively." },
    { heading: "Incident Response Readiness", body: "Exercise technical and organisational response before an incident." },
    { heading: "Detection Validation", body: "Determine whether relevant techniques create useful signals and alerts." },
    { heading: "Digital Twin Testing", body: "Reproduce selected systems and dependencies to answer a defined technical question." },
    { heading: "OT/ICS Exercises", body: "Practise cyber scenarios without affecting live physical operations." },
    { heading: "Technology Evaluation", body: "Challenge security tools, architectures and integrations before production use." },
    { heading: "Skills Development", body: "Provide structured labs, scenarios and Capture-the-Flag activities." },
  ],
  positioning: {
    notLabel: "Only a training portal or a collection of virtual machines.",
    identityHeading: "Controlled cyber simulation and security validation.",
    questions: [
      "Can the defence withstand the scenario?",
      "Will the team see and understand it?",
      "What should improve before reality tests it?",
    ],
  },
  productLanguage: {
    primary: "Prove the defence.",
    secondary: "Test resilience before reality does.",
    supporting: [
      "Train hard. Test safely. Learn before the incident.",
      "The best place to fail is somewhere failure is safe.",
      "Build the scenario. Test the defence. Measure the result.",
      "Learn before the incident.",
    ],
  },
  finalCta: {
    heading: "What should your team discover before a real attacker arrives?",
    body: "Build a controlled environment around the systems, threats and decisions that matter.",
    primaryCta: "Build Your Cyber Range",
    secondaryCta: "Discuss RANGE",
  },
};
