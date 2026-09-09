export type PrivacySection = {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  footnote?: string[];
};

export const privacySections: PrivacySection[] = [
  {
    id: "information-we-collect",
    number: "1",
    title: "Information We Collect",
    paragraphs: [
      "When you use this website, SilverFox may collect information that you choose to provide, including:",
    ],
    list: [
      "name",
      "organisation",
      "work email address",
      "telephone number where provided",
      "information included in enquiry forms",
      "correspondence with SilverFox",
    ],
  },
  {
    id: "technical-information",
    number: "1a",
    title: "Technical Information",
    paragraphs: [
      "We may also collect limited technical information associated with website access, depending on the systems used to operate the site, such as:",
    ],
    list: ["IP address", "browser type", "device information", "referring page", "pages visited", "approximate access time", "security and server logs"],
  },
  {
    id: "why-we-use-your-information",
    number: "2",
    title: "Why We Use Your Information",
    paragraphs: ["SilverFox may use submitted information to:"],
    list: [
      "respond to enquiries",
      "understand customer requirements",
      "communicate about requested services or technologies",
      "provide requested information",
      "maintain records of business correspondence",
      "protect the security of the website",
      "investigate misuse or attempted attacks",
      "improve website operation",
    ],
  },
  {
    id: "contact-forms",
    number: "3",
    title: "Contact Forms",
    paragraphs: [
      "Information submitted through website forms is intended to allow SilverFox to respond to your enquiry.",
      "Do not submit through the general website form:",
    ],
    list: [
      "passwords",
      "private keys",
      "authentication tokens",
      "highly sensitive personal information",
      "malware samples",
      "confidential forensic evidence",
      "unnecessary customer data",
    ],
  },
  {
    id: "cookies-and-analytics",
    number: "4",
    title: "Cookies and Analytics",
    paragraphs: [
      "The website may use cookies or similar technologies where required for website functionality, security or analytics.",
      "The final version of this section should identify the actual services used.",
      "If the website launches without non-essential analytics or advertising cookies, the privacy implementation can remain considerably simpler.",
      "SilverFox should avoid adding unnecessary trackers purely because they are common on corporate websites.",
    ],
  },
  {
    id: "website-security",
    number: "5",
    title: "Website Security",
    paragraphs: ["SilverFox may process technical security information to:"],
    list: ["identify malicious activity", "protect website infrastructure", "investigate attacks", "maintain system integrity", "prevent abuse"],
  },
  {
    id: "sharing-of-information",
    number: "6",
    title: "Sharing of Information",
    paragraphs: [
      "SilverFox should not sell personal information.",
      "Information may be disclosed to service providers where required to operate the website or business, such as:",
    ],
    list: ["website hosting providers", "email providers", "CRM systems", "security providers"],
  },
  {
    id: "data-retention",
    number: "7",
    title: "Data Retention",
    paragraphs: [
      "SilverFox should retain personal information only for as long as necessary for the purpose for which it was collected, legitimate business requirements and applicable legal obligations.",
      "Specific retention periods should be established once the company's operational systems are confirmed.",
    ],
  },
  {
    id: "data-security",
    number: "8",
    title: "Data Security",
    paragraphs: [
      "SilverFox should use reasonable technical and organisational measures to protect personal information against:",
    ],
    list: ["unauthorised access", "alteration", "disclosure", "loss", "misuse"],
  },
  {
    id: "external-links",
    number: "9",
    title: "External Links",
    paragraphs: [
      "The website may contain links to third-party websites.",
      "SilverFox is not responsible for the privacy practices of those third-party services.",
      "Users should review the relevant third-party privacy policies where appropriate.",
    ],
  },
  {
    id: "your-rights",
    number: "10",
    title: "Your Rights",
    paragraphs: [
      "Depending on applicable law and jurisdiction, individuals may have rights relating to their personal information, including the right to:",
    ],
    list: [
      "request access to personal information",
      "request correction of inaccurate information",
      "request deletion where applicable",
      "request restriction of processing",
      "object to certain processing",
      "request data portability where applicable",
      "withdraw consent where processing relies on consent",
      "complain to an appropriate data-protection authority",
    ],
    footnote: ["SilverFox may need to verify a requester's identity before acting on a request."],
  },
  {
    id: "international-transfers",
    number: "11",
    title: "International Transfers",
    paragraphs: [
      "Website hosting, email, analytics, CRM or other service providers may process information in other countries.",
      "Where personal information is transferred internationally, SilverFox should use safeguards required by applicable law and should accurately identify those safeguards in the published policy.",
    ],
  },
  {
    id: "childrens-privacy",
    number: "12",
    title: "Children's Privacy",
    paragraphs: [
      "This website is intended for organisations and professional users. It is not directed to children.",
      "SilverFox does not knowingly seek personal information from children through this website.",
    ],
  },
  {
    id: "changes-to-this-policy",
    number: "13",
    title: "Changes to This Policy",
    paragraphs: [
      "SilverFox may update this Privacy Policy to reflect changes in website operation, business practices or legal requirements.",
      "The current version should always show its effective or last-updated date.",
    ],
  },
];
