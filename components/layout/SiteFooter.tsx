import Link from "next/link";
import { Mark } from "@/components/brand/Mark";
import { SocialIcon } from "@/components/brand/SocialIcon";
import {
  footerNav,
  hasGeneralContactEmail,
  hasPublicPhone,
  placeholders,
  siteConfig,
  socialLinks,
} from "@/content/site";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-mono-label text-slate-650">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.95rem] text-line-light transition-colors duration-fast ease-out-crisp hover:text-bone-050"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-surface="ink" className="relative overflow-hidden border-t border-line-dark bg-ink-950 text-bone-050">
      <div className="shell relative py-16 md:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Mark aria-hidden="true" className="pointer-events-none h-20 w-20 text-flare md:h-28 md:w-28" />
            <p className="mt-6 text-footer-statement text-bone-050">{siteConfig.tagline}</p>
            <p className="mt-6 max-w-[60ch] text-body text-line-light">{siteConfig.description}</p>

            {(hasGeneralContactEmail || hasPublicPhone) && (
              <div className="mt-6 flex flex-col gap-2 text-[0.95rem]">
                {hasGeneralContactEmail && (
                  <a
                    href={`mailto:${placeholders.generalContactEmail}`}
                    className="w-fit text-line-light transition-colors duration-fast ease-out-crisp hover:text-bone-050"
                  >
                    {placeholders.generalContactEmail}
                  </a>
                )}
                {hasPublicPhone && (
                  <a
                    href={`tel:${placeholders.publicPhone.replace(/[^+\d]/g, "")}`}
                    className="w-fit text-line-light transition-colors duration-fast ease-out-crisp hover:text-bone-050"
                  >
                    {placeholders.publicPhone}
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-[2fr_1fr_1fr] lg:col-span-6">
            <FooterColumn title="Services" links={footerNav.services} />
            <FooterColumn title="Technologies" links={footerNav.technologies} />
            <FooterColumn title="Company" links={[...footerNav.company, ...footerNav.legal]} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-line-dark pt-8 text-small text-slate-650 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {placeholders.legalEntityName}.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center border border-line-dark text-line-light transition-colors duration-fast ease-out-crisp hover:border-bone-050 hover:text-bone-050"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
