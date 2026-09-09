import { hasIncidentResponseDestination, placeholders } from "@/content/site";

/**
 * The one incident-response call to action used across the site. Per
 * docs/SILVERFOX_WEBSITE_CANONICAL.md section 22, a working dedicated
 * incident-response CTA must never be published until a real destination
 * exists (INCIDENT_RESPONSE_HREF). Until then this renders a genuine,
 * working fallback to the general contact address instead of a dead link.
 *
 * `compact` renders a small, non-competing header-adjacent pill; the full
 * variant renders the panel used on the Contact page.
 */
export function IncidentResponseCta({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return hasIncidentResponseDestination ? (
      <a
        href={placeholders.incidentResponseHref}
        className="inline-flex items-center gap-2 border-l-2 border-flare bg-graphite-800 px-4 py-2 text-small font-medium text-bone-050 transition-colors duration-fast ease-out-crisp hover:bg-ink-950"
      >
        Need Incident Response?
      </a>
    ) : (
      <a
        href={`mailto:${placeholders.generalContactEmail}?subject=Urgent%20-%20Suspected%20Security%20Incident`}
        className="inline-flex items-center gap-2 border-l-2 border-flare bg-graphite-800 px-4 py-2 text-small font-medium text-bone-050 transition-colors duration-fast ease-out-crisp hover:bg-ink-950"
      >
        Need Incident Response?
      </a>
    );
  }

  return (
    <div id="incident-response" className="scroll-mt-28 border-l-2 border-flare bg-ink-950 p-8 text-bone-050">
      <h2 className="text-h3">Suspect an active cyber incident?</h2>
      <p className="mt-3 max-w-[52ch] text-body text-line-light">
        If you believe your organisation is currently compromised, use the dedicated
        incident-response contact route.
      </p>
      {hasIncidentResponseDestination ? (
        <a
          href={placeholders.incidentResponseHref}
          className="mt-6 inline-flex items-center gap-2 bg-flare px-6 py-3.5 text-[0.95rem] font-semibold text-ink-950"
        >
          Contact Incident Response
        </a>
      ) : (
        <p className="mt-6 max-w-[52ch] text-body text-line-light">
          SilverFox has not yet published a dedicated incident-response number or secure
          intake route. Email{" "}
          <a
            href={`mailto:${placeholders.generalContactEmail}?subject=Urgent%20-%20Suspected%20Security%20Incident`}
            className="font-semibold text-flare underline underline-offset-4"
          >
            {placeholders.generalContactEmail}
          </a>{" "}
          and mark your message urgent.
        </p>
      )}
      <p className="mt-6 max-w-[52ch] text-small text-slate-650">
        Provide only enough information to allow the SilverFox team to establish initial
        contact. Do not submit malware samples, credentials, sensitive logs or confidential
        evidence through the general website form.
      </p>
    </div>
  );
}
