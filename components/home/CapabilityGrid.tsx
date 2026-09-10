import Link from "next/link";
import type { ServiceNavItem } from "@/content/site";

/**
 * Compact homepage capability cards - navigation into the six services, not
 * documentation of them. Each card is number, title, one-sentence descriptor
 * and a single CTA; the detailed scope lists live on the service pages
 * themselves. docs/UPDATE.md section 5.
 */
export function CapabilityGrid({ services }: { services: ServiceNavItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden border border-line-light bg-line-light sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group flex flex-col justify-between gap-8 bg-bone-050 p-6 transition-colors duration-base ease-out-crisp hover:bg-ink-950 hover:text-bone-050 lg:p-8"
        >
          <div>
            <span className="text-mono-label text-slate-650 group-hover:text-line-light">
              {service.number}
            </span>
            <h3 className="mt-3 text-h3">{service.name}</h3>
          </div>
          <div>
            <p className="text-body text-slate-650 group-hover:text-line-light">
              {service.descriptor}
            </p>
            <span className="mt-4 inline-block text-mono-label text-flare">
              Explore Service →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
