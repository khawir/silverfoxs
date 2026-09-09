"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { engineeringNav, globalCta, primaryNav, productsNav, servicesNav } from "@/content/site";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink-950 text-bone-050 md:hidden"
      data-surface="ink"
    >
      <div className="shell flex flex-1 flex-col pb-10 pt-28">
        <nav className="flex flex-col divide-y divide-line-dark">
          <div className="py-5">
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-group"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-h3">01. Services</span>
              <span aria-hidden="true" className="text-2xl font-light">
                {servicesOpen ? "−" : "+"}
              </span>
            </button>
            {servicesOpen && (
              <ul id="mobile-services-group" className="mt-5 flex flex-col gap-1">
                {servicesNav.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={onClose}
                      className="block py-2.5 text-[1.05rem] text-line-light hover:text-bone-050"
                    >
                      {service.number}. {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="mt-2 block py-2.5 text-small font-semibold uppercase tracking-wide text-flare"
                  >
                    View All Services
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="py-5">
            <button
              type="button"
              aria-expanded={technologiesOpen}
              aria-controls="mobile-technologies-group"
              onClick={() => setTechnologiesOpen((v) => !v)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-h3">02. Technologies</span>
              <span aria-hidden="true" className="text-2xl font-light">
                {technologiesOpen ? "−" : "+"}
              </span>
            </button>
            {technologiesOpen && (
              <ul id="mobile-technologies-group" className="mt-5 flex flex-col gap-1">
                {productsNav.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/technologies/${product.slug}`}
                      onClick={onClose}
                      className="block py-2.5 text-[1.05rem] text-line-light hover:text-bone-050"
                    >
                      {product.id}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/technologies"
                    onClick={onClose}
                    className="mt-2 block py-2.5 text-small font-semibold uppercase tracking-wide text-flare"
                  >
                    View All Technologies
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {primaryNav.slice(2).map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="py-5 text-h3"
            >
              0{index + 3}. {item.label === "Engineering & R&D" ? engineeringNav.name : item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={onClose}
          className="mt-10 block bg-flare px-6 py-4 text-center text-[1.05rem] font-semibold text-ink-950"
        >
          {globalCta.talkToSpecialist}
        </Link>
      </div>
    </div>
  );
}
