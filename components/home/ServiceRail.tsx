import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { contactHref } from "@/content/contact";
import type { ServiceContent } from "@/lib/types";

/**
 * The homepage's numbered service rail. Every row's core descriptor is
 * always visible (mobile shows everything expanded). On large screens, the
 * capability list and CTA reveal on hover or keyboard focus, using a
 * CSS-only grid-rows transition, so nothing here depends on JavaScript.
 * docs/SILVERFOX_WEBSITE_PRESENTATION_SPEC.md, Homepage section 04.
 */
export function ServiceRail({ services }: { services: ServiceContent[] }) {
  return (
    <div className="flex flex-col">
      {services.map((service, index) => (
        <div
          key={service.slug}
          className={`group border-t border-line-light py-8 lg:py-10 ${
            index === services.length - 1 ? "border-b" : ""
          } ${index % 2 === 1 ? "lg:text-right" : ""}`}
        >
          <div className={`flex flex-col gap-4 lg:flex-row lg:items-baseline lg:gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <span className="text-mono-label text-slate-650 lg:w-16 lg:shrink-0">{service.number}</span>
            <div className="lg:flex-1">
              <Link href={`/services/${service.slug}`} className="inline-block">
                <h3 className="text-h3 transition-colors duration-fast ease-out-crisp hover:text-flare">
                  {service.name}
                </h3>
              </Link>
              <p className="mt-1 text-body font-medium text-ink-950">{service.signature}</p>
              <p className={`reading-measure mt-1 text-body text-slate-650 ${index % 2 === 1 ? "lg:ml-auto" : ""}`}>
                {service.menuDescriptor}
              </p>
            </div>
            <span className="text-mono-label text-slate-650 lg:w-32 lg:shrink-0">
              {service.relatedTechnology[0]?.product}
            </span>
          </div>

          <div className="lg:grid lg:grid-rows-[0fr] lg:transition-[grid-template-rows] lg:duration-slow lg:ease-out-crisp lg:group-hover:grid-rows-[1fr] lg:group-focus-within:grid-rows-[1fr]">
            <div className="lg:overflow-hidden">
              <div className="mt-5 flex flex-col gap-4 lg:mt-0 lg:pt-6">
                <ul
                  className={`columns-1 gap-x-8 text-small text-slate-650 sm:columns-2 lg:columns-3 ${
                    index % 2 === 1 ? "lg:text-right" : ""
                  }`}
                >
                  {service.homepage.capabilities.map((item) => (
                    <li key={item} className="mb-2 break-inside-avoid">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={index % 2 === 1 ? "lg:flex lg:justify-end" : ""}>
                  <CtaLink href={contactHref(service.slug)} variant="ghost-on-light" size="sm">
                    {service.primaryCta}
                  </CtaLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
