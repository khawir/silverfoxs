import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { contactHref } from "@/content/contact";
import { cloudApplicationInfrastructure } from "@/content/services/cloud-application-infrastructure";
import { cyberDefence } from "@/content/services/cyber-defence";
import { identityDataSecurity } from "@/content/services/identity-data-security";
import { incidentResponse } from "@/content/services/incident-response";
import { offensiveSecurity } from "@/content/services/offensive-security";
import { strategyRiskAssurance } from "@/content/services/strategy-risk-assurance";
import { globalCta } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Cybersecurity across the attack lifecycle.",
  alternates: { canonical: "/services" },
};

const services = [
  strategyRiskAssurance,
  offensiveSecurity,
  cloudApplicationInfrastructure,
  identityDataSecurity,
  cyberDefence,
  incidentResponse,
];

const LIFECYCLE = [
  "Strategy informs architecture",
  "Architecture limits attack paths",
  "Offensive testing validates controls",
  "Defence observes the environment",
  "Response produces evidence",
  "Evidence improves strategy",
];

export default function ServicesOverviewPage() {
  return (
    <>
      <Section surface="bone" spacing="chapter">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <h1 className="text-h1 lg:col-span-8">Cybersecurity across the attack lifecycle.</h1>
          <div className="lg:col-span-8">
            <p className="reading-measure text-lead text-slate-650">
              Attackers do not treat strategy, applications, cloud, identity, infrastructure and
              operations as separate problems.
            </p>
            <p className="reading-measure mt-3 text-lead text-slate-650">Neither does SilverFox.</p>
            <p className="reading-measure mt-3 text-body text-slate-650">
              Our six service practices connect board-level risk with technical assessment,
              security engineering, continuous defence and incident response.
            </p>
          </div>
        </div>
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <div className="flex flex-col">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group grid grid-cols-1 gap-4 border-t border-line-light py-10 last:border-b sm:grid-cols-12 sm:gap-8"
            >
              <span className="text-mono-label text-slate-650 sm:col-span-1">{service.number}</span>
              <div className="sm:col-span-7">
                <Link href={`/services/${service.slug}`} className="inline-block">
                  <h2 className="text-h3 transition-colors duration-fast ease-out-crisp group-hover:text-flare">
                    {service.name}
                  </h2>
                </Link>
                <p className="mt-2 text-body font-medium text-ink-950">{service.signature}</p>
                <p className="reading-measure mt-2 text-body text-slate-650">{service.menuDescriptor}</p>
              </div>
              <div className="flex items-end sm:col-span-4 sm:justify-end">
                <CtaLink href={`/services/${service.slug}`} variant="ghost-on-light" size="sm">
                  {service.overviewCta}
                </CtaLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <h2 className="text-mono-label text-slate-650">Connected lifecycle</h2>
        <ol className="mt-6 flex flex-col gap-3">
          {LIFECYCLE.map((line, index) => (
            <li key={line} className="flex items-baseline gap-4 border-t border-line-dark/10 pt-3 first:border-t-0 first:pt-0">
              <span className="text-mono-label text-slate-650">0{index + 1}</span>
              <span className="text-body text-ink-950">{line}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-small text-slate-650">
          Evidence improves strategy, which begins the cycle again.
        </p>
      </Section>

      <Section surface="ink" spacing="chapter">
        <div className="mx-auto max-w-2xl border border-line-dark bg-graphite-800 p-10 text-center">
          <h2 className="text-h2">Not sure where to start?</h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-body text-line-light">
            Describe the problem and let a SilverFox specialist help determine the right entry
            point.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink href={contactHref()} variant="primary">
              {globalCta.talkToSpecialist}
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
