import Link from "next/link";
import type { ServiceNavItem } from "@/content/site";

/**
 * Compact homepage capability cards - navigation into the six services, not
 * documentation of them. Each card is number, title, one-sentence descriptor
 * and a single CTA; the detailed scope lists live on the service pages
 * themselves. docs/UPDATE.md section 5.
 *
 * Hover/focus is treated as one coordinated state: every foreground element
 * (number, heading, descriptor, arrow) recolours together, explicitly, so
 * nothing is left depending on colour inheritance from the card background.
 */
export function CapabilityGrid({ services }: { services: ServiceNavItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden border border-line-light bg-line-light sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group relative flex flex-col justify-between gap-8 bg-bone-050 p-6 transition-[background-color,translate] duration-base ease-out-crisp hover:-translate-y-1 hover:bg-ink-950 focus-visible:-translate-y-1 focus-visible:bg-ink-950 lg:p-8"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-flare transition-transform duration-base ease-out-crisp group-hover:scale-x-100 group-focus-visible:scale-x-100"
          />
          <div>
            <span className="text-mono-label text-slate-650 transition-colors duration-base ease-out-crisp group-hover:text-line-light group-focus-visible:text-line-light">
              {service.number}
            </span>
            <h3 className="mt-3 text-h3 text-ink-950 transition-colors duration-base ease-out-crisp group-hover:text-bone-050 group-focus-visible:text-bone-050">
              {service.name}
            </h3>
          </div>
          <div>
            <p className="text-body text-slate-650 transition-colors duration-base ease-out-crisp group-hover:text-line-light group-focus-visible:text-line-light">
              {service.descriptor}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-mono-label text-flare">
              Explore Service
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-3 w-3 transition-transform duration-base ease-out-crisp group-hover:translate-x-1 group-focus-visible:translate-x-1"
              >
                <path
                  d="M2 8h11.5M9 3.5 13.5 8 9 12.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
