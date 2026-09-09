import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { engineeringNav, productsNav } from "@/content/site";
import { technologiesOverview as content } from "@/content/technologies/index";
import type { ProductAccent } from "@/lib/types";

export const metadata: Metadata = {
  title: "Technologies",
  description: content.hero.heading,
  alternates: { canonical: "/technologies" },
};

const accentText: Record<ProductAccent, string> = {
  flare: "text-flare",
  pulse: "text-pulse",
  solar: "text-solar",
  mint: "text-mint",
};

const accentBg: Record<ProductAccent, string> = {
  flare: "bg-flare",
  pulse: "bg-pulse",
  solar: "bg-solar",
  mint: "bg-mint",
};

const questions = content.questions;

export default function TechnologiesPage() {
  return (
    <>
      <Section surface="bone" spacing="chapter">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <h1 className="text-h1 lg:col-span-8">{content.hero.heading}</h1>
          <div className="lg:col-span-8">
            {content.hero.paragraphs.map((p, i) => (
              <p key={i} className="reading-measure mt-3 text-lead text-slate-650 first:mt-0">
                {p}
              </p>
            ))}
            <p className="mt-8 text-mono-label text-ink-950">
              {content.hero.threePlatforms} {content.hero.threeQuestions}
            </p>
          </div>
        </div>
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {questions.map((question, index) => {
            const product = productsNav[index];
            return (
              <div key={question} className="border-t-2 border-line-dark/10 pt-6">
                <p className="text-lead text-slate-650">{question}</p>
                <p className={`mt-4 text-mono-label ${accentText[product.accent]}`}>{product.id}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section surface="bone" spacing="standard" border="top" bleed>
        <div className="shell">
          <div className="grid grid-cols-1 divide-y divide-line-light border border-line-light sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {productsNav.map((product) => (
              <Link
                key={product.id}
                href={`/technologies/${product.slug}`}
                className="group flex flex-col justify-between gap-10 p-8 transition-colors duration-base ease-out-crisp hover:bg-graphite-800"
              >
                <div>
                  <span aria-hidden="true" className={`block h-1.5 w-10 ${accentBg[product.accent]}`} />
                  <p className="mt-5 text-mono-label text-slate-650 group-hover:text-line-light">
                    {product.category}
                  </p>
                  <h2 className="mt-3 text-h2 group-hover:text-bone-050">{product.id}</h2>
                </div>
                <div>
                  <p className={`text-lead font-medium ${accentText[product.accent]}`}>{product.signature}</p>
                  <span className="mt-6 inline-block text-mono-label text-ink-950 group-hover:text-bone-050">
                    {product.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section surface="paper" spacing="standard" border="top">
        <h2 className="text-mono-label text-slate-650">The Product Relationship</h2>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 text-mono-label text-ink-950">
          {content.relationship.map((step, index) => (
            <span key={step} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden="true" className="text-flare">
                  →
                </span>
              )}
              <span className="border border-line-dark/15 bg-bone-050 px-3 py-1.5">{step}</span>
            </span>
          ))}
        </div>
      </Section>

      <Section surface="bone" spacing="standard" border="top">
        <div className="flex flex-col items-start justify-between gap-6 border border-line-light p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-mono-label text-mint">Capability, not a fourth product</h2>
            <p className="mt-3 max-w-[52ch] text-body text-slate-650">{engineeringNav.descriptor}</p>
          </div>
          <CtaLink href="/engineering" variant="ghost-on-light" className="shrink-0">
            {engineeringNav.cta}
          </CtaLink>
        </div>
      </Section>

      <Section surface="ink" spacing="chapter">
        <div className="text-center">
          <h2 className="text-display">
            <span className="text-flare">Know the exposure. </span>
            <span className="text-pulse">Read the signal. </span>
            <span className="text-solar">Prove the defence.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-body text-line-light">{content.closing.note}</p>
        </div>
      </Section>
    </>
  );
}
