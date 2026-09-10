"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { DURATION, EASE_OUT_CRISP } from "@/lib/motion";

const STAGE_LABELS = ["UNDERSTAND", "CHALLENGE", "ENGINEER", "WATCH", "RESPOND"];
/** Evenly spaced, symmetric node positions as a percentage of the track width. */
const NODE_PCT = [6, 28, 50, 72, 94];
const VIEWBOX_W = 1000;
const VIEWBOX_H = 120;
const NODE_Y = 60;

type Verb = { verb: string; body: string };

/**
 * The homepage's signature scroll-driven moment: as the visitor scrolls
 * through a tall track, a horizontal lifecycle (Understand -> Respond)
 * advances alongside a parallel attack-path chain. Desktop pins the canvas
 * and scrubs it against scroll progress (Motion's useScroll, tracking the
 * outer track exactly the way the old hand-rolled rAF scroll listener did -
 * offset ["start start", "end end"] means progress 0 at the top edge
 * reaching the viewport top, 1 at the bottom edge reaching the viewport
 * bottom); mobile (and reduced-motion, at any width) gets a distinct,
 * non-pinned vertical presentation instead of a scaled-down copy of the
 * desktop scene. docs/UPDATE.md section 4.
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
  const [stage, setStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const dashOffset = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const markerLeft = useTransform(scrollYProgress, [0, 1], ["6%", "94%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(STAGE_LABELS.length - 1, Math.max(0, Math.floor(latest * STAGE_LABELS.length)));
    setStage((current) => (current === next ? current : next));
  });

  return (
    <div ref={outerRef} className="relative lg:motion-safe:h-[400vh]">
      {/* Desktop, motion-allowed: pinned scroll-scrubbed canvas */}
      <div className="hidden lg:motion-safe:sticky lg:motion-safe:top-0 lg:motion-safe:flex lg:motion-safe:h-[100svh] lg:motion-safe:flex-col lg:motion-safe:justify-center">
        <div>
          <div className="grid grid-cols-12 items-center gap-12">
            <div className="col-span-5">
              <h2 className="text-h2">{heading}</h2>
              <p className="reading-measure mt-4 text-body text-slate-650">{intro}</p>
              {/* All five stages stacked in the same grid cell, not swapped
                  in place: a grid cell's height is set by its tallest
                  occupant, so it stays constant as the active one changes -
                  swapping text directly here let each stage's different
                  line count reflow the height, which shifted the whole
                  vertically-centered column on every scroll-driven change. */}
              <div className="mt-10 grid border-t border-line-dark/10 pt-6">
                {verbs.map((v, i) => (
                  <motion.div
                    key={v.verb}
                    className="col-start-1 row-start-1"
                    aria-hidden={stage !== i}
                    animate={{ opacity: stage === i ? 1 : 0 }}
                    transition={{ duration: DURATION.base, ease: EASE_OUT_CRISP }}
                  >
                    <p className="text-mono-label text-flare">{STAGE_LABELS[i]}</p>
                    <h3 className="mt-2 text-h3">{v.verb}</h3>
                    <p className="mt-2 max-w-[42ch] text-body text-slate-650">{v.body}</p>
                  </motion.div>
                ))}
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
                  <motion.line
                    x1={NODE_PCT[0] * 10}
                    y1={NODE_Y}
                    x2={NODE_PCT[4] * 10}
                    y2={NODE_Y}
                    pathLength={1}
                    stroke="var(--color-flare)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    style={{ strokeDasharray: 1, strokeDashoffset: dashOffset }}
                  />
                  {NODE_PCT.map((pct, i) => (
                    <motion.circle
                      key={pct}
                      cx={pct * 10}
                      cy={NODE_Y}
                      initial={{ r: 7 }}
                      animate={{ r: stage >= i ? 9 : 7 }}
                      transition={{ duration: DURATION.base, ease: EASE_OUT_CRISP }}
                      fill={stage >= i ? "var(--color-flare)" : "var(--color-paper-100)"}
                      stroke={stage >= i ? "var(--color-flare)" : "var(--color-line-dark)"}
                      strokeOpacity={stage >= i ? 1 : 0.35}
                      strokeWidth={1.5}
                    />
                  ))}
                </svg>

                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-bone-050 bg-flare shadow-[0_0_0_3px_rgba(255,90,54,0.25)]"
                  style={{ left: markerLeft }}
                />

                <div className="relative mt-4 h-16">
                  {NODE_PCT.map((pct, i) => (
                    <div
                      key={pct}
                      className="absolute top-0 w-28 -translate-x-1/2 text-center transition-opacity duration-base ease-out-crisp"
                      style={{ left: `${pct}%`, opacity: stage >= i ? 1 : 0.4 }}
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
