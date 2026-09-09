import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { ChapterRail } from "@/components/sections/ChapterRail";
import { ClosingStatement } from "@/components/sections/ClosingStatement";
import { ContentBlockSection } from "@/components/sections/ContentBlockSection";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductLanguageBlock } from "@/components/sections/ProductLanguageBlock";
import { ProductPositioning } from "@/components/sections/ProductPositioning";
import { ProductQuestion } from "@/components/sections/ProductQuestion";
import { ServiceConnectionsBand } from "@/components/sections/ServiceConnectionsBand";
import { UseCaseIndex } from "@/components/sections/UseCaseIndex";
import { Section } from "@/components/ui/Section";
import { contactHref } from "@/content/contact";
import { scope as content } from "@/content/technologies/scope";

export const metadata: Metadata = {
  title: `SCOPE: ${content.headline}`,
  description: content.subheadline,
  alternates: { canonical: `/technologies/${content.slug}` },
};

function OutsideInVisual() {
  return (
    <div aria-hidden="true" className="grid grid-cols-3 grid-rows-3 gap-2 text-center text-small">
      <div />
      <div className="border border-line-light bg-bone-050 p-3 text-slate-650">Domains</div>
      <div />
      <div className="border border-line-light bg-bone-050 p-3 text-slate-650">Certificates</div>
      <div className="border-2 border-flare bg-graphite-800 p-3 font-semibold text-bone-050">
        Your organisation
      </div>
      <div className="border border-line-light bg-bone-050 p-3 text-slate-650">Cloud services</div>
      <div />
      <div className="border border-line-light bg-bone-050 p-3 text-slate-650">Credentials</div>
      <div />
    </div>
  );
}

export default function ScopePage() {
  const chapters = content.capabilityModel.chapters.map((c) => ({
    id: c.id,
    label: c.heading ?? c.id,
  }));

  return (
    <>
      <Section surface="bone" spacing="chapter">
        <ProductHero
          accent={content.accent}
          category={content.category}
          headline={content.headline}
          subheadline={content.subheadline}
          paragraphs={content.hero.paragraphs}
          primaryCta={content.hero.primaryCta}
          primaryHref={contactHref("scope")}
          secondaryCta={content.hero.secondaryCta}
          secondaryHref={contactHref("scope")}
          visual={<OutsideInVisual />}
        />
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ContentBlockSection block={content.problem} />
          </div>
        </div>
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <ProductQuestion
          heading={content.question}
          intro={content.questionSection.intro}
          notQuestion={content.questionSection.notQuestion}
          questions={content.questionSection.questions}
        />
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <h2 className="mb-10 text-mono-label text-slate-650">{content.capabilityModel.heading}</h2>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <ChapterRail chapters={chapters} />
          </div>
          <div className="lg:col-span-9">
            {content.capabilityModel.chapters.map((block) => (
              <ContentBlockSection key={block.id} block={block} />
            ))}
          </div>
        </div>
      </Section>

      <Section surface="graphite" spacing="standard" border="top">
        <h2 className="mb-10 text-mono-label text-line-light">{content.architecture.heading}</h2>
        <ArchitectureDiagram tiers={content.architecture.tiers} />
      </Section>

      {content.deployment && (
        <Section surface="bone" spacing="standard" border="top">
          <ContentBlockSection block={content.deployment} />
        </Section>
      )}

      <Section surface="paper" spacing="standard" border="top">
        <h2 className="mb-6 text-mono-label text-slate-650">SCOPE + SilverFox Services</h2>
        <ServiceConnectionsBand accent={content.accent} items={content.connections} />
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <h2 className="mb-8 text-mono-label text-slate-650">Use Cases</h2>
        <UseCaseIndex items={content.useCases} />
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <ProductPositioning
          accent={content.accent}
          notLabel={content.positioning.notLabel}
          identityHeading={content.positioning.identityHeading}
          questions={content.positioning.questions}
        />
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <ProductLanguageBlock {...content.productLanguage} />
      </Section>

      <Section surface="ink" spacing="chapter">
        <ClosingStatement
          heading={content.finalCta.heading}
          paragraphs={[content.finalCta.body]}
          cta={content.finalCta.primaryCta}
          ctaHref={contactHref("scope")}
          secondaryCta={content.finalCta.secondaryCta}
          secondaryHref={contactHref("scope")}
          dark
        />
      </Section>
    </>
  );
}
