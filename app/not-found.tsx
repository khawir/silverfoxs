import type { Metadata } from "next";
import Link from "next/link";
import { Mark } from "@/components/brand/Mark";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Section surface="ink" spacing="chapter">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-mono-label text-flare">404</p>
          <h1 className="mt-4 text-h1">That path does not resolve.</h1>
          <p className="reading-measure mt-5 text-lead text-line-light">
            The page you are looking for may have moved, been renamed, or never existed on this
            site.
          </p>
          <p className="reading-measure mt-3 text-body text-line-light">
            SilverFox&rsquo;s current launch scope is deliberately focused. If you followed a
            link here, it may point to a page outside that scope.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CtaLink href="/" variant="primary">
              Return Home
            </CtaLink>
            <CtaLink href="/contact" variant="ghost-on-dark">
              Talk to a Security Specialist
            </CtaLink>
          </div>

          <nav aria-label="Suggested pages" className="mt-12 border-t border-line-dark pt-8">
            <p className="text-mono-label text-slate-650">Try one of these instead</p>
            <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {[
                { label: "Services", href: "/services" },
                { label: "Technologies", href: "/technologies" },
                { label: "Engineering & R&D", href: "/engineering" },
                { label: "About SilverFox", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-bone-050 underline decoration-line-dark decoration-2 underline-offset-4 hover:decoration-flare"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="lg:col-span-5">
          <Mark aria-hidden="true" className="h-64 w-64 text-graphite-800 md:h-80 md:w-80" />
        </div>
      </div>
    </Section>
  );
}
