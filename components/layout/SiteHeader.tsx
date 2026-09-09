"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { CtaLink } from "@/components/ui/CtaLink";
import { globalCta } from "@/content/site";
import { MobileNav } from "./MobileNav";
import { ServicesMegaMenuPanel } from "./ServicesMegaMenuPanel";
import { TechnologiesMegaMenuPanel } from "./TechnologiesMegaMenuPanel";

type MenuKey = "services" | "technologies" | null;

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);
  const technologiesBtnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        (openMenu === "services" ? servicesBtnRef : technologiesBtnRef).current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openMenu]);

  const toggleMenu = (key: MenuKey) => setOpenMenu((current) => (current === key ? null : key));

  return (
    <header
      ref={headerRef}
      data-surface="light"
      className="sticky top-0 z-50 border-b border-line-light bg-bone-050/95 backdrop-blur-sm"
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div
        className={`shell flex items-center justify-between transition-[height] duration-base ease-out-crisp ${
          scrolled ? "h-16" : "h-20 md:h-24"
        }`}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          <button
            ref={servicesBtnRef}
            type="button"
            aria-expanded={openMenu === "services"}
            aria-controls="services-mega-menu"
            aria-haspopup="true"
            onClick={() => toggleMenu("services")}
            className={`relative px-4 py-2 text-[0.95rem] font-medium transition-colors duration-fast ease-out-crisp hover:text-flare ${
              openMenu === "services" ? "text-flare" : "text-ink-950"
            }`}
          >
            Services
          </button>
          <button
            ref={technologiesBtnRef}
            type="button"
            aria-expanded={openMenu === "technologies"}
            aria-controls="technologies-mega-menu"
            aria-haspopup="true"
            onClick={() => toggleMenu("technologies")}
            className={`relative px-4 py-2 text-[0.95rem] font-medium transition-colors duration-fast ease-out-crisp hover:text-flare ${
              openMenu === "technologies" ? "text-flare" : "text-ink-950"
            }`}
          >
            Technologies
          </button>
          <Link
            href="/engineering"
            className="px-4 py-2 text-[0.95rem] font-medium text-ink-950 transition-colors duration-fast ease-out-crisp hover:text-flare"
          >
            Engineering &amp; R&amp;D
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-[0.95rem] font-medium text-ink-950 transition-colors duration-fast ease-out-crisp hover:text-flare"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-[0.95rem] font-medium text-ink-950 transition-colors duration-fast ease-out-crisp hover:text-flare"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <CtaLink href="/contact" size="sm" className="hidden lg:inline-flex">
            {globalCta.talkToSpecialist}
          </CtaLink>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <span
              aria-hidden="true"
              className={`h-px w-6 bg-ink-950 transition-transform duration-fast ease-out-crisp ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              aria-hidden="true"
              className={`h-px w-6 bg-ink-950 transition-transform duration-fast ease-out-crisp ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {openMenu && (
        <div
          id={openMenu === "services" ? "services-mega-menu" : "technologies-mega-menu"}
          className="absolute inset-x-0 top-full hidden border-b border-line-light bg-bone-050 shadow-[0_24px_48px_-24px_rgba(11,13,14,0.25)] md:block"
        >
          <div className="shell py-10">
            {openMenu === "services" ? (
              <ServicesMegaMenuPanel onNavigate={() => setOpenMenu(null)} />
            ) : (
              <TechnologiesMegaMenuPanel onNavigate={() => setOpenMenu(null)} />
            )}
          </div>
        </div>
      )}

      <div id="mobile-navigation">
        <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
}
