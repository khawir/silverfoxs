import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { IncidentResponseCta } from "@/components/ui/IncidentResponseCta";
import { Section } from "@/components/ui/Section";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: contactContent.hero.heading,
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;

  return (
    <>
      <Section surface="bone" spacing="chapter">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h1 className="text-h1">{contactContent.hero.heading}</h1>
            <div className="mt-6 flex flex-col gap-2">
              {contactContent.hero.paragraphs.map((p, i) => (
                <p key={i} className="reading-measure text-lead text-slate-650">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <IncidentResponseCta />
            </div>

            <div className="mt-10 border-t border-line-light pt-8">
              <h2 className="text-h3">{contactContent.closing.heading}</h2>
              <p className="mt-2 max-w-[42ch] text-body text-slate-650">{contactContent.closing.body}</p>
            </div>
          </div>

          <div className="border border-line-light bg-paper-100/40 p-8 lg:col-span-7 lg:p-10">
            <h2 className="text-mono-label text-slate-650">{contactContent.form.heading}</h2>
            <div className="mt-6">
              <ContactForm initialTopic={topic} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
