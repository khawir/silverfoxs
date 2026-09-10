import Link from "next/link";
import { Mark } from "@/components/brand/Mark";
import { SocialIcon } from "@/components/brand/SocialIcon";
import { footerNav, placeholders, siteConfig, socialLinks } from "@/content/site";

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
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
          <div className="relative">
            <Mark
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 -top-16 h-64 w-64 text-graphite-800 md:h-80 md:w-80"
            />
            <p className="relative text-footer-statement text-bone-050">{siteConfig.tagline}</p>
            <p className="relative mt-6 max-w-[46ch] text-body text-line-light">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-[2fr_1fr_1fr] lg:col-span-3">
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
