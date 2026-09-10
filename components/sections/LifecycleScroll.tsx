"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const STAGE_LABELS = ["UNDERSTAND", "CHALLENGE", "ENGINEER", "WATCH", "RESPOND"];
/** Evenly spaced, symmetric node positions as a percentage of the track width. */
const NODE_PCT = [6, 28, 50, 72, 94];
/**
 * Literal Tailwind arbitrary-value classes matching NODE_PCT, index for
 * index. Written out in full (not template-interpolated) so Tailwind's
 * build-time scanner can find them - and so the label row never needs a
 * `style` prop, which this site's CSP (style-src 'self', no unsafe-inline)
 * would block as an inline style attribute.
 */
const NODE_LEFT_CLASS = ["left-[6%]", "left-[28%]", "left-[50%]", "left-[72%]", "left-[94%]"];
const VIEWBOX_W = 1000;
const VIEWBOX_H = 120;
const NODE_Y = 60;

type Verb = { verb: string; body: string };

/**
 * The homepage's signature scroll-driven moment: as the visitor scrolls
 * through a tall track, a horizontal lifecycle (Understand -> Respond)
 * advances alongside a parallel attack-path chain. Desktop pins the canvas
 * and scrubs it against scroll progress; mobile (and reduced-motion, at any
 * width) gets a distinct, non-pinned vertical presentation instead of a
 * scaled-down copy of the desktop scene. docs/UPDATE.md section 4.
 */
export function LifecycleScroll({
  heading,
  intro,
  verbs,
  chain,
  path,
}: {
  heading: string;
  intro: string;
  verbs: Verb[];
  chain: string[];
  path: string[];
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const desktopMotion = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );

    let cleanupScroll: (() => void) | null = null;

    const attach = () => {
      const outer = outerRef.current;
      const track = trackRef.current;
      if (!outer || !track) return;

      let rafId = 0;
      let lastStage = -1;

      const compute = () => {
        rafId = 0;
        const rect = outer.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height - vh;
        const raw = total > 0 ? -rect.top / total : 0;
        const progress = Math.min(1, Math.max(0, raw));
        track.style.setProperty("--progress", String(progress));
        const next = Math.min(STAGE_LABELS.length - 1, Math.floor(progress * STAGE_LABELS.length));
        if (next !== lastStage) {
          lastStage = next;
          setStage(next);
        }
      };

      const onScroll = () => {
        if (!rafId) rafId = requestAnimationFrame(compute);
      };

      compute();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      cleanupScroll = () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (rafId) cancelAnimationFrame(rafId);
      };
    };

    const detach = () => {
      cleanupScroll?.();
      cleanupScroll = null;
      setStage(0);
      trackRef.current?.style.setProperty("--progress", "0");
    };

    const sync = () => {
      if (desktopMotion.matches) attach();
      else detach();
    };

    sync();
    desktopMotion.addEventListener("change", sync);
    return () => {
      desktopMotion.removeEventListener("change", sync);
      detach();
    };
  }, []);

  const activeVerb = verbs[stage];

  return (
    <div ref={outerRef} className="relative lg:motion-safe:h-[400vh]">
      {/* Desktop, motion-allowed: pinned scroll-scrubbed canvas */}
      <div
        ref={trackRef}
        data-lifecycle-track
        className="hidden lg:motion-safe:sticky lg:motion-safe:top-0 lg:motion-safe:flex lg:motion-safe:h-[100svh] lg:motion-safe:flex-col lg:motion-safe:justify-center"
      >
        <div>
          <div className="grid grid-cols-12 items-center gap-12">
            <div className="col-span-5">
              <h2 className="text-h2">{heading}</h2>
              <p className="reading-measure mt-4 text-body text-slate-650">{intro}</p>
              <div className="mt-10 border-t border-line-dark/10 pt-6">
                <p className="text-mono-label text-flare">{STAGE_LABELS[stage]}</p>
                <h3 className="mt-2 text-h3">{activeVerb.verb}</h3>
                <p className="mt-2 max-w-[42ch] text-body text-slate-650">{activeVerb.body}</p>
              </div>
            </div>

            <div className="col-span-7">
              <div className="relative">
                <svg viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`} className="h-auto w-full overflow-visible">
                  <line
                    x1={NODE_PCT[0] * 10}
                    y1={NODE_Y}
                    x2={NODE_PCT[4] * 10}
                    y2={NODE_Y}
                    stroke="var(--color-line-dark)"
                    strokeOpacity={0.25}
                    strokeWidth={2}
                  />
                  <line
                    x1={NODE_PCT[0] * 10}
                    y1={NODE_Y}
                    x2={NODE_PCT[4] * 10}
                    y2={NODE_Y}
                    className="lifecycle-line"
                    pathLength={1}
                    stroke="var(--color-flare)"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  {NODE_PCT.map((pct, i) => (
                    <circle
                      key={pct}
                      cx={pct * 10}
                      cy={NODE_Y}
                      r={stage >= i ? 9 : 7}
                      fill={stage >= i ? "var(--color-flare)" : "var(--color-paper-100)"}
                      stroke={stage >= i ? "var(--color-flare)" : "var(--color-line-dark)"}
                      strokeOpacity={stage >= i ? 1 : 0.35}
                      strokeWidth={1.5}
                      className="lifecycle-node"
                    />
                  ))}
                </svg>

                <div
                  aria-hidden="true"
                  className="lifecycle-marker pointer-events-none absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-bone-050 bg-flare shadow-[0_0_0_3px_rgba(255,90,54,0.25)]"
                />

                <div className="relative mt-4 h-16">
                  {NODE_PCT.map((pct, i) => (
                    <div
                      key={pct}
                      className={`absolute top-0 w-28 -translate-x-1/2 text-center transition-opacity duration-base ease-out-crisp ${NODE_LEFT_CLASS[i]} ${stage >= i ? "opacity-100" : "opacity-40"}`}
                    >
                      <p className={`text-mono-label ${stage >= i ? "text-ink-950" : "text-slate-650"}`}>
                        {STAGE_LABELS[i]}
                      </p>
                      <p className="mt-1 text-small text-slate-650">{chain[i]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile, and reduced-motion at any width: vertical, touch-friendly presentation */}
      <div className="lg:motion-safe:hidden">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2">{heading}</h2>
            <p className="reading-measure mt-4 text-body text-slate-650">{intro}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="relative flex flex-col gap-6 border-l border-line-light pl-8">
              {path.map((step) => (
                <li key={step} className="relative">
                  <Reveal>
                    <span aria-hidden="true" className="absolute -ml-[2.15rem] mt-1.5 h-3 w-3 -translate-x-1/2 bg-flare" />
                    <p className="text-lead text-ink-950">{step}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal className="mt-8 border-t border-line-dark/10 pt-8">
              <p className="text-mono-label text-slate-650">{STAGE_LABELS.join(" → ")}</p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {verbs.map((v) => (
                  <div key={v.verb}>
                    <h3 className="text-[1.05rem] font-semibold text-ink-950">{v.verb}</h3>
                    <p className="mt-1 text-body text-slate-650">{v.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
