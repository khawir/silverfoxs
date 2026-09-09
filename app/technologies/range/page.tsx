import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { ChapterRail } from "@/components/sections/ChapterRail";
import { ClosingStatement } from "@/components/sections/ClosingStatement";
import { ContentBlockSection } from "@/components/sections/ContentBlockSection";
import { ProductConnections } from "@/components/sections/ProductConnections";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductLanguageBlock } from "@/components/sections/ProductLanguageBlock";
import { ProductPositioning } from "@/components/sections/ProductPositioning";
import { ProductQuestion } from "@/components/sections/ProductQuestion";
import { ServiceConnectionsBand } from "@/components/sections/ServiceConnectionsBand";
import { UseCaseIndex } from "@/components/sections/UseCaseIndex";
import { Section } from "@/components/ui/Section";
import { contactHref } from "@/content/contact";
import { range as content } from "@/content/technologies/range";

export const metadata: Metadata = {
  title: `RANGE: ${content.headline}`,
  description: content.subheadline,
  alternates: { canonical: `/technologies/${content.slug}` },
};

function SimulationFrameVisual() {
  return (
    <div aria-hidden="true" className="border border-line-light bg-bone-050">
      <div className="grid grid-cols-3 divide-x divide-line-light text-center text-small">
        <div className="p-5">
          <p className="text-mono-label text-slate-650">Attack</p>
          <p className="mt-3 text-slate-650">Technique enters</p>
        </div>
        <div className="p-5">
          <p className="text-mono-label text-solar">Measure</p>
          <p className="mt-3 text-slate-650">Detected / missed</p>
        </div>
        <div className="p-5">
          <p className="text-mono-label text-slate-650">Defence</p>
          <p className="mt-3 text-slate-650">Control responds</p>
        </div>
      </div>
    </div>
  );
}

export default function RangePage() {
  const chapters = content.capabilityModel.chapters.map((c) => ({
    id: c.id,
    label: c.heading ?? c.id,
  }));

  return (
    <>
      <Section surface="graphite" spacing="chapter">
        <ProductHero
          accent={content.accent}
          category={content.category}
          headline={content.headline}
          subheadline={content.subheadline}
          paragraphs={content.hero.paragraphs}
          primaryCta={content.hero.primaryCta}
          primaryHref={contactHref("range")}
          secondaryCta={content.hero.secondaryCta}
          secondaryHref={contactHref("range")}
          dark
          visual={<SimulationFrameVisual />}
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

      {content.productConnections && (
        <Section surface="bone" spacing="standard" border="top">
          <h2 className="mb-6 text-mono-label text-slate-650">Product Connections</h2>
          <ProductConnections items={content.productConnections} />
        </Section>
      )}

      {content.deployment && (
        <Section surface="paper" spacing="standard" border="top">
          <ContentBlockSection block={content.deployment} />
        </Section>
      )}

      <Section surface="bone" spacing="standard" border="top">
        <h2 className="mb-6 text-mono-label text-slate-650">RANGE + SilverFox Services</h2>
        <ServiceConnectionsBand accent={content.accent} items={content.connections} />
      </Section>

      <Section surface="paper" spacing="standard" border="top">
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
          ctaHref={contactHref("range")}
          secondaryCta={content.finalCta.secondaryCta}
          secondaryHref={contactHref("range")}
          dark
        />
      </Section>
    </>
  );
}
