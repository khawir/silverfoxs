"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** True only once mounted on the client - lets us defer `createPortal` past SSR without an effect-driven setState. */
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
import { Logo } from "@/components/brand/Logo";
import { engineeringNav, globalCta, primaryNav, productsNav, servicesNav } from "@/content/site";

/**
 * The mobile navigation drawer.
 *
 * Rendered via a portal directly into `document.body` rather than in place
 * inside `<header>`. The header has `backdrop-blur-sm` (a `backdrop-filter`),
 * and in every major browser `filter`/`backdrop-filter` establish a new
 * containing block for `position: fixed` descendants - so a `fixed inset-0`
 * panel nested inside the header would size itself against the header's own
 * ~80px box, not the viewport, silently breaking the "full-screen overlay"
 * regardless of how the panel itself is built. Portaling to `document.body`
 * removes the dependency on the header's styling entirely.
 */
export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const mounted = useMounted();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      id="mobile-navigation"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-[100] flex flex-col bg-ink-950 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] text-bone-050 md:hidden"
      data-surface="ink"
    >
      <div className="shell flex h-16 shrink-0 items-center justify-between border-b border-line-dark">
        <Logo />
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="-mr-2 flex h-11 w-11 items-center justify-center"
        >
          <span className="sr-only">Close menu</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M5 5l14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="shell flex flex-1 flex-col overflow-y-auto pb-8 pt-4">
        <nav aria-label="Primary" className="flex flex-col divide-y divide-line-dark">
          <div className="py-4">
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-group"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex min-h-11 w-full items-center justify-between text-left"
            >
              <span className="text-h3">Services</span>
              <span aria-hidden="true" className="text-2xl font-light">
                {servicesOpen ? "−" : "+"}
              </span>
            </button>
            {servicesOpen && (
              <ul id="mobile-services-group" className="mt-3 flex flex-col gap-1">
                {servicesNav.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={onClose}
                      className="block min-h-11 py-2.5 text-[1.05rem] text-line-light hover:text-bone-050"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="mt-1 block min-h-11 py-2.5 text-small font-semibold uppercase tracking-wide text-flare"
                  >
                    View All Services
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="py-4">
            <button
              type="button"
              aria-expanded={technologiesOpen}
              aria-controls="mobile-technologies-group"
              onClick={() => setTechnologiesOpen((v) => !v)}
              className="flex min-h-11 w-full items-center justify-between text-left"
            >
              <span className="text-h3">Technology</span>
              <span aria-hidden="true" className="text-2xl font-light">
                {technologiesOpen ? "−" : "+"}
              </span>
            </button>
            {technologiesOpen && (
              <ul id="mobile-technologies-group" className="mt-3 flex flex-col gap-1">
                {productsNav.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/technologies/${product.slug}`}
                      onClick={onClose}
                      className="block min-h-11 py-2.5 text-[1.05rem] text-line-light hover:text-bone-050"
                    >
                      {product.id}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/technologies"
                    onClick={onClose}
                    className="mt-1 block min-h-11 py-2.5 text-small font-semibold uppercase tracking-wide text-flare"
                  >
                    View All Technologies
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {primaryNav.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex min-h-11 items-center py-4 text-h3"
            >
              {item.label === "Engineering & R&D" ? engineeringNav.name : item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={onClose}
          className="mt-6 flex min-h-11 items-center justify-center bg-flare px-6 py-4 text-center text-[1.05rem] font-semibold text-ink-950"
        >
          {globalCta.talkToSpecialist}
        </Link>
      </div>
    </div>,
    document.body
  );
}
