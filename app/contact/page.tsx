import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactMethodIcon } from "@/components/ui/ContactMethodIcon";
import { IncidentResponseCta } from "@/components/ui/IncidentResponseCta";
import { Section } from "@/components/ui/Section";
import { contactContent } from "@/content/contact";
import {
  hasGeneralContactEmail,
  hasPublicPhone,
  hasWhatsApp,
  placeholders,
  whatsAppHref,
} from "@/content/site";

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

            {(hasGeneralContactEmail || hasPublicPhone || hasWhatsApp) && (
              <div className="mt-8">
                <p className="text-mono-label text-slate-650">Prefer to reach us directly?</p>
                <div className="mt-3 flex flex-col gap-2 text-body text-ink-950">
                  {hasGeneralContactEmail && (
                    <a
                      href={`mailto:${placeholders.generalContactEmail}`}
                      className="inline-flex w-fit items-center gap-2 font-semibold"
                    >
                      <ContactMethodIcon method="email" className="h-4 w-4 shrink-0 text-slate-650" />
                      <span className="underline decoration-line-light decoration-2 underline-offset-4 hover:decoration-flare">
                        {placeholders.generalContactEmail}
                      </span>
                    </a>
                  )}
                  {hasPublicPhone && (
                    <a
                      href={`tel:${placeholders.publicPhone.replace(/[^+\d]/g, "")}`}
                      className="inline-flex w-fit items-center gap-2 font-semibold"
                    >
                      <ContactMethodIcon method="phone" className="h-4 w-4 shrink-0 text-slate-650" />
                      <span className="underline decoration-line-light decoration-2 underline-offset-4 hover:decoration-flare">
                        {placeholders.publicPhone}
                      </span>
                    </a>
                  )}
                  {hasWhatsApp && (
                    <a
                      href={whatsAppHref("Hi SilverFox, I'd like to get in touch.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 font-semibold"
                    >
                      <ContactMethodIcon method="whatsapp" className="h-4 w-4 shrink-0 text-slate-650" />
                      <span className="underline decoration-line-light decoration-2 underline-offset-4 hover:decoration-flare">
                        Chat on WhatsApp
                      </span>
                    </a>
                  )}
                </div>
              </div>
            )}

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
              <ContactForm initialTopic={topic} turnstileSiteKey={process.env.TURNSTILE_SITE_KEY} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
