"use client";

import Link from "next/link";
import { useState } from "react";
import { servicesNav } from "@/content/site";

export function ServicesMegaMenuPanel({ onNavigate }: { onNavigate: () => void }) {
  const [active, setActive] = useState(0);
  const activeService = servicesNav[active];

  return (
    <div className="grid grid-cols-12 gap-x-8">
      <ul className="col-span-6 flex flex-col">
        {servicesNav.map((service, index) => (
          <li key={service.slug} className="border-b border-line-light last:border-b-0">
            <Link
              href={`/services/${service.slug}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={onNavigate}
              className={`flex items-baseline gap-4 py-3.5 transition-colors duration-fast ease-out-crisp ${
                active === index ? "text-flare" : "text-ink-950 hover:text-flare"
              }`}
            >
              <span className="text-mono-label text-slate-650">{service.number}</span>
              <span className="text-[1.05rem] font-medium leading-snug">{service.name}</span>
            </Link>
          </li>
        ))}
        <li className="flex flex-wrap gap-x-6 gap-y-2 pt-5 text-small">
          <Link
            href="/services"
            onClick={onNavigate}
            className="font-semibold text-ink-950 underline decoration-line-light decoration-2 underline-offset-4 hover:decoration-flare"
          >
            View All Services
          </Link>
          <Link
            href="/contact"
            onClick={onNavigate}
            className="text-slate-650 underline decoration-line-light decoration-2 underline-offset-4 hover:text-ink-950 hover:decoration-flare"
          >
            Need help deciding? Talk to a specialist
          </Link>
        </li>
      </ul>

      <div className="col-span-6 border-l border-line-light pl-8">
        <p className="text-mono-label text-slate-650">{activeService.category}</p>
        <p className="mt-3 text-h3 text-ink-950">{activeService.name}</p>
        <p className="mt-3 max-w-[38ch] text-body text-slate-650">{activeService.descriptor}</p>
        <p className="mt-6 text-mono-label text-flare">Related · {activeService.primaryProduct}</p>
      </div>
    </div>
  );
}
