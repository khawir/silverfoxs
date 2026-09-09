"use client";

import { useEffect, useRef, useState } from "react";

export type Chapter = { id: string; label: string };

/**
 * Text-label chapter navigation for long service and product pages, and the
 * legal table of contents. Desktop gets a sticky rail with scroll-spy
 * highlighting; mobile collapses to a compact "On this page" disclosure so
 * it never creates a cramped sticky section.
 * docs/SILVERFOX_WEBSITE_PRESENTATION_SPEC.md, section 9 and 23.
 */
export function ChapterRail({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((el): el is HTMLElement => Boolean(el));

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [chapters]);

  return (
    <>
      <details className="mb-10 border border-line-light lg:hidden">
        <summary className="cursor-pointer px-5 py-4 text-mono-label text-slate-650">
          On this page
        </summary>
        <ul className="flex flex-col gap-1 px-5 pb-5">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <a href={`#${chapter.id}`} className="block py-2 text-body text-ink-950">
                {chapter.label}
              </a>
            </li>
          ))}
        </ul>
      </details>

      <nav aria-label="Page chapters" className="hidden lg:block">
        <ul className="sticky top-28 flex flex-col gap-1 border-l border-line-light pl-5">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={active === chapter.id ? "location" : undefined}
                className={`block py-1.5 text-small transition-colors duration-fast ease-out-crisp ${
                  active === chapter.id ? "font-semibold text-flare" : "text-slate-650 hover:text-ink-950"
                }`}
              >
                {chapter.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
