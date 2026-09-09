import type { Metadata } from "next";
import { ApproachSteps } from "@/components/sections/ApproachSteps";
import { UseCaseIndex } from "@/components/sections/UseCaseIndex";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { aboutContent as content } from "@/content/about";
import { globalCta } from "@/content/site";

export const metadata: Metadata = {
  title: "About SilverFox",
  description: content.hero.heading,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Section surface="bone" spacing="chapter">
        <h1 className="text-h1">{content.hero.heading}</h1>
        <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {content.hero.paragraphs.map((p, i) => (
              <p key={i} className="reading-measure mt-2 text-lead text-slate-650 first:mt-0">
                {p}
              </p>
            ))}
          </div>
        </div>
        <p className="mt-8 text-mono-label text-slate-650">{content.hero.statement}</p>
        <p className="mt-2 text-h2">{content.hero.principle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaLink href="/services" variant="primary">
            {globalCta.exploreCapabilities}
          </CtaLink>
          <CtaLink href="/contact" variant="ghost-on-light">
            {globalCta.talkToSpecialist}
          </CtaLink>
        </div>
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <h2 className="text-h2 lg:col-span-5">{content.connectedProblem.heading}</h2>
          <div className="lg:col-span-6 lg:col-start-7">
            {content.connectedProblem.paragraphs.map((p, i) => (
              <p key={i} className="reading-measure mt-3 text-body text-slate-650 first:mt-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Offensive insight - cuts into the grid: narrow, left, flare rule */}
      <Section surface="bone" spacing="standard" border="top">
        <div className="border-l-2 border-flare pl-8 lg:w-2/3">
          <h2 className="text-h2">{content.chapters[0].heading}</h2>
          {content.chapters[0].paragraphs.map((p, i) => (
            <p key={i} className="reading-measure mt-3 text-body text-slate-650">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* Defensive discipline - stabilises the grid: centred, full width */}
      <Section surface="graphite" spacing="standard" border="top">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2">{content.chapters[1].heading}</h2>
          {content.chapters[1].paragraphs.map((p, i) => (
            <p key={i} className="reading-measure mx-auto mt-3 text-body text-line-light">
              {p}
            </p>
          ))}
          <ul className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-2 text-small text-line-light">
            {content.chapters[1].list?.map((item) => (
              <li key={item} className="bullet-tick">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-body font-medium text-bone-050">
            {content.chapters[1].footnote?.join(" ")}
          </p>
        </div>
      </Section>

      {/* Engineering depth - rebuilds the grid: right-aligned, split */}
      <Section surface="bone" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="text-h2">{content.chapters[2].heading}</h2>
            {content.chapters[2].paragraphs.map((p, i) => (
              <p key={i} className="reading-measure mt-3 text-body text-slate-650">
                {p}
              </p>
            ))}
          </div>
          <ul className="columns-1 gap-x-10 sm:columns-2 lg:col-span-6 lg:col-start-1 lg:row-start-1">
            {content.chapters[2].list?.map((item) => (
              <li key={item} className="bullet-tick mb-3 break-inside-avoid text-body text-slate-650">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-body font-medium text-ink-950 lg:col-span-5 lg:col-start-8">
            {content.chapters[2].footnote?.join(" ")}
          </p>
        </div>
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <h2 className="mb-8 text-mono-label text-slate-650">Our Approach</h2>
        <div className="max-w-3xl">
          <ApproachSteps steps={content.approach} />
        </div>
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <h2 className="text-h2">{content.technology.heading}</h2>
        {content.technology.paragraphs.map((p, i) => (
          <p key={i} className="reading-measure mt-3 text-body text-slate-650">
            {p}
          </p>
        ))}
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-line-light bg-line-light sm:grid-cols-3">
          {content.technology.products.map((product) => (
            <div key={product.id} className="bg-bone-050 p-6">
              <h3 className="text-mono-label text-flare">{product.id}</h3>
              <p className="mt-3 text-body text-slate-650">{product.body}</p>
              <p className="mt-3 text-[0.95rem] font-medium text-ink-950">{product.signature}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-h3">{content.technology.together}</p>
        <div className="mt-6">
          <CtaLink href="/technologies" variant="ghost-on-light">
            {content.technology.cta}
          </CtaLink>
        </div>
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <h2 className="text-mono-label text-mint">{content.builtWhenNecessary.heading}</h2>
        {content.builtWhenNecessary.paragraphs.map((p, i) => (
          <p key={i} className="reading-measure mt-3 text-body text-slate-650">
            {p}
          </p>
        ))}
        <ul className="mt-6 columns-1 gap-x-10 sm:columns-2 lg:columns-3">
          {content.builtWhenNecessary.list.map((item) => (
            <li key={item} className="bullet-tick mb-2 break-inside-avoid text-body text-slate-650">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-body font-medium text-ink-950">
          {content.builtWhenNecessary.footnote.join(" ")}
        </p>
        <div className="mt-6">
          <CtaLink href="/engineering" variant="ghost-on-light">
            {content.builtWhenNecessary.cta}
          </CtaLink>
        </div>
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <h2 className="mb-8 text-mono-label text-slate-650">{content.howWeThink.heading}</h2>
        <UseCaseIndex items={content.howWeThink.principles} />
      </Section>

      <Section surface="ink" spacing="chapter">
        <div className="text-center">
          <h2 className="text-display-xl">{content.principle.lineOne}</h2>
          <p className="mt-2 text-display text-line-light">{content.principle.lineTwo}</p>
          <div className="mx-auto mt-8 max-w-[46ch]">
            {content.principle.paragraphs.map((p, i) => (
              <p key={i} className="mt-2 text-body text-line-light first:mt-0">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CtaLink href="/contact" variant="primary">
              {content.principle.cta}
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
