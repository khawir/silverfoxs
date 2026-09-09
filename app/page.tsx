import Link from "next/link";
import { Mark } from "@/components/brand/Mark";
import { KineticSwap } from "@/components/home/KineticSwap";
import { ServiceRail } from "@/components/home/ServiceRail";
import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { contactHref } from "@/content/contact";
import { homeContent as content } from "@/content/home";
import { cloudApplicationInfrastructure } from "@/content/services/cloud-application-infrastructure";
import { cyberDefence } from "@/content/services/cyber-defence";
import { identityDataSecurity } from "@/content/services/identity-data-security";
import { incidentResponse } from "@/content/services/incident-response";
import { offensiveSecurity } from "@/content/services/offensive-security";
import { strategyRiskAssurance } from "@/content/services/strategy-risk-assurance";
import { globalCta } from "@/content/site";
import { organizationJsonLdString } from "@/lib/structured-data";

const STAGGER_DELAYS = ["", "delay-100", "delay-200", "delay-300", "delay-500"];

const services = [
  strategyRiskAssurance,
  offensiveSecurity,
  cloudApplicationInfrastructure,
  identityDataSecurity,
  cyberDefence,
  incidentResponse,
];

export default function HomePage() {
  return (
    <>
      {/* Organisation structured data: static, hash-allowed under CSP - see next.config.ts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLdString }} />

      {/* 01. Hero */}
      <Section surface="bone" spacing="none" className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20 lg:pb-36 lg:pt-24">
        <Mark
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-10 h-[30rem] w-[30rem] text-paper-100 md:-right-16 md:h-[42rem] md:w-[42rem] lg:h-[52rem] lg:w-[52rem]"
        />
        <Mark
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 bottom-0 h-40 w-40 text-line-light/70 md:h-56 md:w-56"
        />
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h1 className="text-display-xl">{content.hero.heading}</h1>
          </Reveal>
          <Reveal delayClass="delay-150" className="lg:col-span-7">
            <p className="text-lead text-slate-650">{content.hero.paragraphs[0]}</p>
            <p className="mt-1 text-lead text-slate-650">{content.hero.paragraphs[1]}</p>
            <p className="reading-measure mt-6 text-body text-slate-650">{content.hero.paragraphs[2]}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaLink href={contactHref()} variant="primary">
                {globalCta.talkToSpecialist}
              </CtaLink>
              <CtaLink href="/services" variant="ghost-on-light">
                {globalCta.exploreCapabilities}
              </CtaLink>
            </div>
            <p className="mt-10 text-mono-label text-slate-650">{content.hero.microcopy}</p>
          </Reveal>
        </div>
      </Section>

      {/* 02. Positioning */}
      <Section surface="paper" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <KineticSwap
              from={content.positioning.label}
              to={content.positioning.resolved}
              fromClassName="text-mono-label text-slate-650 line-through decoration-flare decoration-2"
              toClassName="text-mono-label text-flare"
            />
            <h2 className="mt-6 text-h3">{content.positioning.heading}</h2>
          </div>
          <div className="border-line-dark/10 lg:col-span-8 lg:col-start-5 lg:border-l lg:pl-10">
            {content.positioning.paragraphs.map((p, i) => (
              <p key={i} className="reading-measure mt-3 text-body text-slate-650 first:mt-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* 03. The SilverFox Approach */}
      <Section surface="bone" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <h2 className="text-h2">{content.attackPath.heading}</h2>
            <p className="reading-measure mt-4 text-body text-slate-650">{content.attackPath.intro}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="relative flex flex-col gap-8 border-l border-line-light pl-8">
              {content.attackPath.path.map((step) => (
                <li key={step} className="relative">
                  <Reveal>
                    <span aria-hidden="true" className="absolute -ml-[2.15rem] mt-1.5 h-3 w-3 -translate-x-1/2 bg-flare" />
                    <p className="text-lead text-ink-950">{step}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal className="mt-10 border-t border-line-light pt-10">
              <p className="text-mono-label text-slate-650">Understand → Challenge → Engineer → Watch → Respond</p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {content.attackPath.verbs.map((v) => (
                  <div key={v.verb}>
                    <h3 className="text-[1.05rem] font-semibold text-ink-950">{v.verb}</h3>
                    <p className="mt-1 text-body text-slate-650">{v.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 04. Services rail */}
      <Section surface="bone" spacing="standard" border="top">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-h2">{content.services.heading}</h2>
          <p className="reading-measure mt-4 text-body text-slate-650">{content.services.intro}</p>
        </div>
        <ServiceRail services={services} />
      </Section>

      {/* 05. Offensive Security Feature - colour takeover */}
      <Section surface="flare" spacing="chapter" border="top">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <KineticSwap
              from={content.offensiveFeature.kineticFrom}
              to={content.offensiveFeature.kineticTo}
              fromClassName="text-mono-label text-ink-950/60 line-through decoration-2"
              toClassName="text-mono-label text-ink-950"
            />
            <h2 className="mt-5 text-display">{content.offensiveFeature.heading}</h2>
            <div className="mt-6 flex flex-col gap-1.5">
              {content.offensiveFeature.paragraphs.map((p, i) => (
                <p key={i} className="text-body text-ink-950/80">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <CtaLink href={contactHref("offensive-security")} variant="ghost-on-light">
                Challenge Your Environment
              </CtaLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ol className="flex flex-col gap-4">
              {content.offensiveFeature.capabilities.map((cap, index) => (
                <li key={cap.name}>
                  <Reveal delayClass={STAGGER_DELAYS[index]} className="border-t border-ink-950/15 pt-4">
                    <h3 className="text-[1.05rem] font-semibold text-ink-950">{cap.name}</h3>
                    <p className="mt-1 text-small text-ink-950/75">{cap.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* 06. Technologies Introduction */}
      <Section surface="bone" spacing="standard" border="top">
        <div className="max-w-3xl">
          <h2 className="text-h2">{content.technologiesIntro.heading}</h2>
          {content.technologiesIntro.paragraphs.map((p, i) => (
            <p key={i} className="reading-measure mt-2 text-lead text-slate-650 first:mt-4">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* 07. SCOPE Feature */}
      <Section surface="paper" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-mono-label text-flare">SCOPE</p>
            <h2 className="mt-3 text-h2">{content.scopeFeature.heading}</h2>
            <p className="mt-2 text-h3 text-slate-650">{content.scopeFeature.subheading}</p>
            <p className="mt-6 text-lead text-ink-950">{content.scopeFeature.question}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href="/technologies/scope" variant="primary">
                {content.scopeFeature.primaryCta}
              </CtaLink>
              <CtaLink href={contactHref("scope")} variant="ghost-on-light">
                {content.scopeFeature.secondaryCta}
              </CtaLink>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-mono-label text-slate-650">SCOPE helps teams</p>
            <ul className="mt-4 columns-1 gap-x-8 sm:columns-2">
              {content.scopeFeature.helpsTeams.map((item) => (
                <li key={item} className="bullet-tick mb-2.5 break-inside-avoid text-body text-slate-650">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 08. SIGNAL Feature */}
      <Section surface="ink" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-mono-label text-pulse">SIGNAL</p>
            <h2 className="mt-3 text-h2">{content.signalFeature.heading}</h2>
            <p className="mt-2 text-h3 text-line-light">{content.signalFeature.subheading}</p>
            <p className="mt-6 text-lead text-bone-050">{content.signalFeature.question}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href="/technologies/signal" variant="primary">
                {content.signalFeature.primaryCta}
              </CtaLink>
              <CtaLink href={contactHref("signal")} variant="ghost-on-dark">
                {content.signalFeature.secondaryCta}
              </CtaLink>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-2">
              {content.signalFeature.connects.map((lane, index) => (
                <div key={lane} className="flex items-center gap-3">
                  <span className="w-40 shrink-0 text-small text-line-light">{lane}</span>
                  <span className={`h-1 flex-1 bg-pulse ${index % 2 === 0 ? "opacity-70" : "opacity-35"}`} />
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line-dark pt-6 text-mono-label text-bone-050">
              {content.signalFeature.transform.map((step, index) => (
                <span key={step} className="flex items-center gap-3">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-pulse">
                      →
                    </span>
                  )}
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 09. RANGE Feature */}
      <Section surface="graphite" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-mono-label text-solar">RANGE</p>
            <h2 className="mt-3 text-h2">{content.rangeFeature.heading}</h2>
            <p className="mt-2 text-h3 text-line-light">{content.rangeFeature.subheading}</p>
            <p className="mt-6 text-lead text-bone-050">{content.rangeFeature.question}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href="/technologies/range" variant="primary">
                {content.rangeFeature.primaryCta}
              </CtaLink>
              <CtaLink href={contactHref("range")} variant="ghost-on-dark">
                {content.rangeFeature.secondaryCta}
              </CtaLink>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-3 divide-x divide-line-dark border border-line-dark text-center">
              {content.rangeFeature.mobileSteps.map((step) => (
                <div key={step} className="p-6">
                  <p className="text-mono-label text-solar">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 10. Technology Philosophy */}
      <Section surface="bone" spacing="standard" border="top">
        <h2 className="text-center text-display">
          <span className="text-flare">Know the exposure. </span>
          <span className="text-pulse">Read the signal. </span>
          <span className="text-solar">Prove the defence.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-line-light pt-10 sm:grid-cols-3">
          {content.philosophy.perspectives.map((p) => (
            <div key={p.product} className="text-center">
              <p className="text-mono-label text-slate-650">{p.product}</p>
              <p className="mt-2 text-body text-ink-950">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[46ch] text-center text-small text-slate-650">
          {content.philosophy.footnote}
        </p>
      </Section>

      {/* 11. Engineering & Applied R&D bento */}
      <Section surface="paper" spacing="standard" border="top">
        <h2 className="mb-8 text-h2">{content.engineering.heading}</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="border border-line-light bg-bone-050 p-6 lg:col-span-7">
            <h3 className="text-h3">{content.engineering.secureSoftware.title}</h3>
            <ul className="mt-4 columns-1 gap-x-8 sm:columns-2">
              {content.engineering.secureSoftware.items.map((item) => (
                <li key={item} className="bullet-tick mb-2 break-inside-avoid text-small text-slate-650">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line-light bg-bone-050 p-6 lg:col-span-5">
            <h3 className="text-h3">{content.engineering.intelligentSystems.title}</h3>
            <p className="mt-2 text-small text-slate-650">{content.engineering.intelligentSystems.intro}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {content.engineering.intelligentSystems.items.map((item) => (
                <li key={item} className="border border-mint/40 px-2.5 py-1 text-small text-slate-650">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line-light bg-bone-050 p-6 lg:col-span-6">
            <h3 className="text-h3">{content.engineering.edge.title}</h3>
            <ul className="mt-4 flex flex-col gap-1.5">
              {content.engineering.edge.items.map((item) => (
                <li key={item} className="bullet-tick text-small text-slate-650">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line-light bg-bone-050 p-6 lg:col-span-6">
            <h3 className="text-h3">{content.engineering.research.title}</h3>
            <ul className="mt-4 flex flex-col gap-1.5">
              {content.engineering.research.items.map((item) => (
                <li key={item} className="bullet-tick text-small text-slate-650">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6 bg-graphite-800 p-6 text-bone-050 lg:col-span-12 lg:flex-row lg:items-center">
            <h3 className="text-h3">{content.engineering.statement}</h3>
            <CtaLink href="/engineering" variant="ghost-on-dark" className="shrink-0">
              {content.engineering.cta}
            </CtaLink>
          </div>
        </div>
      </Section>

      {/* 12. Brand Manifesto */}
      <Section surface="bone" spacing="chapter" border="top">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-xl">{content.manifesto.lineOne}</h2>
          <p className="mt-2 text-display text-flare">{content.manifesto.lineTwo}</p>
          <div className="mx-auto mt-12 flex max-w-xl flex-col gap-3">
            {content.manifesto.paragraphs.map((p) => (
              <Reveal key={p}>
                <p className="text-lead text-slate-650">{p}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-h3">{content.manifesto.closing}</p>
        </div>
      </Section>

      {/* 13. Why SilverFox */}
      <Section surface="paper" spacing="standard" border="top">
        <h2 className="mb-10 text-mono-label text-slate-650">Why SilverFox</h2>
        <ol className="flex flex-col">
          {content.whySilverFox.map((item, index) => (
            <li key={item.heading} className="grid grid-cols-1 gap-2 border-t border-line-dark/10 py-6 sm:grid-cols-12 sm:gap-8 sm:py-8">
              <span className="text-mono-label text-slate-650 sm:col-span-1">0{index + 1}</span>
              <h3 className="text-h3 sm:col-span-4">{item.heading}</h3>
              <p className="reading-measure text-body text-slate-650 sm:col-span-6 sm:col-start-6">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 14. The SilverFox Way */}
      <Section surface="bone" spacing="standard" border="top">
        <h2 className="mb-10 text-mono-label text-slate-650">The SilverFox Way</h2>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
          {content.theWay.map((item, index) => (
            <Reveal key={item.verb} delayClass="" className="border-t border-line-light pt-6 lg:flex-1">
              <span className="text-mono-label text-slate-650">0{index + 1}</span>
              <h3 className="mt-2 text-[1.5rem] font-semibold leading-tight">{item.verb}</h3>
              <p className="mt-2 text-small text-slate-650">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 15. Final CTA */}
      <Section surface="ink" spacing="chapter" className="relative overflow-hidden">
        <Mark aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 text-graphite-800" />
        <div className="relative text-center">
          <h2 className="text-display-xl">{content.finalCta.heading}</h2>
          <div className="mx-auto mt-6 max-w-2xl">
            {content.finalCta.paragraphs.map((p, i) => (
              <p key={i} className="mt-2 text-body text-line-light first:mt-0">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaLink href={contactHref()} variant="primary">
              {content.finalCta.primaryCta}
            </CtaLink>
            <CtaLink href={contactHref("offensive-security")} variant="ghost-on-dark">
              {content.finalCta.secondaryCta}
            </CtaLink>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {content.finalCta.supportingLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-small text-line-light underline decoration-line-dark decoration-2 underline-offset-4 hover:text-bone-050 hover:decoration-flare"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
