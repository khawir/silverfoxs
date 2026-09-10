import Link from "next/link";
import { Mark } from "@/components/brand/Mark";
import { CapabilityGrid } from "@/components/home/CapabilityGrid";
import { KineticSwap } from "@/components/home/KineticSwap";
import { TechnologyPanel } from "@/components/home/TechnologyPanel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { contactHref } from "@/content/contact";
import { homeContent as content } from "@/content/home";
import { engineeringNav, globalCta, servicesNav } from "@/content/site";
import { organizationJsonLdString } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      {/* Organisation structured data: static, hash-allowed under CSP - see next.config.ts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLdString }} />

      {/* 01. Hero - high impact, but sized to fit a normal laptop viewport */}
      <Section surface="bone" spacing="none" className="relative overflow-hidden pb-14 pt-12 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20">
        <Mark
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-10 h-[26rem] w-[26rem] text-paper-100 md:-right-16 md:h-[34rem] md:w-[34rem] lg:h-[40rem] lg:w-[40rem]"
        />
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h1 className="text-display-xl">{content.hero.heading}</h1>
          </Reveal>
          <Reveal delayClass="delay-150" className="lg:col-span-7">
            {content.hero.paragraphs.map((p, i) => (
              <p key={i} className={`text-lead text-slate-650 ${i > 0 ? "mt-1" : ""}`}>
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href={contactHref()} variant="primary">
                {globalCta.talkToSpecialist}
              </CtaLink>
              <CtaLink href="/services" variant="ghost-on-light">
                {globalCta.exploreCapabilities}
              </CtaLink>
            </div>
            <p className="mt-8 text-mono-label text-slate-650">{content.hero.microcopy}</p>
          </Reveal>
        </div>
      </Section>

      {/* 02. Positioning - quiet, restrained */}
      <Section surface="paper" spacing="tight" border="top">
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

      {/* 03. Capabilities - structured navigation layer, not documentation */}
      <Section surface="bone" spacing="standard" border="top">
        <div className="mb-10 max-w-3xl">
          <KineticSwap
            from={content.capabilities.kineticFrom}
            to={content.capabilities.kineticTo}
            fromClassName="text-mono-label text-slate-650 line-through decoration-flare decoration-2"
            toClassName="text-mono-label text-flare"
          />
          <h2 className="mt-4 text-h2">{content.capabilities.heading}</h2>
          <p className="reading-measure mt-4 text-body text-slate-650">{content.capabilities.intro}</p>
        </div>
        <CapabilityGrid services={servicesNav} />
      </Section>

      {/* 04. Connected Security - attack path + lifecycle, visual/technical */}
      <Section surface="paper" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <h2 className="text-h2">{content.attackPath.heading}</h2>
            <p className="reading-measure mt-4 text-body text-slate-650">{content.attackPath.intro}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="relative flex flex-col gap-6 border-l border-line-light pl-8">
              {content.attackPath.path.map((step) => (
                <li key={step} className="relative">
                  <Reveal>
                    <span aria-hidden="true" className="absolute -ml-[2.15rem] mt-1.5 h-3 w-3 -translate-x-1/2 bg-flare" />
                    <p className="text-lead text-ink-950">{step}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal className="mt-8 border-t border-line-dark/10 pt-8">
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

      {/* 05. Technology - the one other high-impact moment */}
      <Section surface="graphite" spacing="standard" border="top">
        <div className="mb-10 max-w-2xl">
          <p className="text-mono-label text-line-light">Technology</p>
          <h2 className="mt-3 text-h2 text-bone-050">{content.technology.heading}</h2>
          <p className="reading-measure mt-4 text-body text-line-light">{content.technology.intro}</p>
        </div>
        <TechnologyPanel products={content.technology.products} />
      </Section>

      {/* 06. Engineering & R&D - moderate, a teaser only */}
      <Section surface="paper" spacing="tight" border="top">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="lg:max-w-xl">
            <h2 className="text-h2">{content.engineering.heading}</h2>
            <p className="reading-measure mt-4 text-body text-slate-650">{engineeringNav.descriptor}</p>
          </div>
          <CtaLink href="/engineering" variant="ghost-on-light" className="shrink-0">
            {engineeringNav.cta}
          </CtaLink>
        </div>
      </Section>

      {/* 07. Why SilverFox - restrained differentiation */}
      <Section surface="bone" spacing="standard" border="top">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-mono-label text-slate-650">Why SilverFox</h2>
          <p className="mt-4 text-lead text-ink-950">{content.whySilverFox.kicker}</p>
        </div>
        <ol className="flex flex-col">
          {content.whySilverFox.items.map((item, index) => (
            <li key={item.heading} className="grid grid-cols-1 gap-2 border-t border-line-light py-6 sm:grid-cols-12 sm:gap-8">
              <span className="text-mono-label text-slate-650 sm:col-span-1">0{index + 1}</span>
              <h3 className="text-h3 sm:col-span-4">{item.heading}</h3>
              <p className="reading-measure text-body text-slate-650 sm:col-span-6 sm:col-start-6">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 08. Final CTA - high impact */}
      <Section surface="ink" spacing="chapter" className="relative overflow-hidden">
        <Mark aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 text-graphite-800" />
        <div className="relative text-center">
          <h2 className="text-display-xl">{content.finalCta.heading}</h2>
          <div className="mx-auto mt-6 max-w-2xl">
            {content.finalCta.paragraphs.map((p, i) => (
              <p key={i} className="mt-2 text-body text-line-light first:mt-0">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaLink href={contactHref()} variant="primary">
              {content.finalCta.primaryCta}
            </CtaLink>
            <CtaLink href={contactHref("offensive-security")} variant="ghost-on-dark">
              {content.finalCta.secondaryCta}
            </CtaLink>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
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
