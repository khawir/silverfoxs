export type CertificationBadge = { name: string; body: string };

/**
 * A continuous, right-to-left drift of bordered badge cards - typographic,
 * not logo images, only because the actual official badge artwork (ISO
 * certification mark, CREST member logo, OSCP/CISSP digital badges, etc.)
 * hasn't been supplied yet. Swap `CertificationBadge` for `{ name, body,
 * logoSrc }` and render an `<img>`/`next/image` per card once real,
 * correctly-licensed files exist - the marquee mechanics below don't change.
 *
 * Coloured for the dark (graphite) section this sits in - see app/page.tsx.
 *
 * The track is the item list duplicated once and animated from 0 to -50%
 * translateX, which is what makes the loop seamless - see the `marquee-*`
 * classes in app/globals.css. No JS: a plain CSS `@keyframes` loop, paused
 * on hover/focus, and already collapsed to a static frame by the sitewide
 * `prefers-reduced-motion` rule with no extra handling needed here.
 *
 * The animated track is duplicated content, so it is hidden from assistive
 * tech; a plain, once-only list carries the same information for them.
 */
export function CertificationsMarquee({ items }: { items: CertificationBadge[] }) {
  const track = [...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track flex w-max items-stretch gap-5" aria-hidden="true">
        {track.map((cert, index) => (
          <div
            key={index}
            className="flex w-72 shrink-0 flex-col gap-1.5 border-l-2 border-flare py-4 pl-6"
          >
            <span className="text-[1.05rem] font-semibold leading-snug text-bone-050">{cert.name}</span>
            <span className="text-small leading-snug text-line-light">{cert.body}</span>
          </div>
        ))}
      </div>
      <ul className="sr-only">
        {items.map((cert) => (
          <li key={cert.name}>
            {cert.name} - {cert.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
