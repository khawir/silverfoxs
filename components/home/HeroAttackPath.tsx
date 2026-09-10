"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  /** Delay (seconds) added on top of each animation's own base delay, for staggering. */
  order: number;
};

/**
 * Desktop composition: Internet -> exposed application -> identity ->
 * cloud/infrastructure -> privileged access -> critical asset, arranged as a
 * single connected path so it can be drawn with one continuous stroke.
 */
const DESKTOP_NODES: Node[] = [
  { id: "internet", label: "INTERNET", x: 54, y: 46, order: 0 },
  { id: "exposed", label: "EXPOSED", x: 210, y: 112, order: 1 },
  { id: "identity", label: "IDENTITY", x: 118, y: 224, order: 2 },
  { id: "cloud", label: "CLOUD", x: 292, y: 288, order: 3 },
  { id: "privilege", label: "PRIVILEGE", x: 176, y: 388, order: 4 },
  { id: "asset", label: "CRITICAL ASSET", x: 344, y: 458, order: 5 },
];

/** Mobile composition: deliberately simplified, not a scaled-down desktop scene. */
const MOBILE_NODES: Node[] = [
  { id: "internet", label: "INTERNET", x: 36, y: 34, order: 0 },
  { id: "exposed", label: "EXPOSED", x: 168, y: 92, order: 1 },
  { id: "identity", label: "IDENTITY", x: 70, y: 172, order: 2 },
  { id: "asset", label: "CRITICAL ASSET", x: 210, y: 240, order: 3 },
];

function pathFor(nodes: Node[]) {
  return nodes.map((n, i) => `${i === 0 ? "M" : "L"}${n.x} ${n.y}`).join(" ");
}

function Network({
  nodes,
  viewBox,
  variant,
  className,
  pulseNodeId,
  showResolved,
  reducedMotion,
}: {
  nodes: Node[];
  viewBox: string;
  variant: "desktop" | "mobile";
  className?: string;
  pulseNodeId: string;
  showResolved: boolean;
  reducedMotion: boolean;
}) {
  const d = pathFor(nodes);
  // SMIL `begin` is a plain SVG attribute, not a CSS style, so it is exempt
  // from this site's strict style-src CSP - only the `.motion-*` CSS
  // animation delays (see globals.css nth-child stagger) need to avoid the
  // `style` prop entirely.
  const signalBegin = variant === "desktop" ? "2.49s" : "2.21s";

  return (
    <svg
      viewBox={viewBox}
      className={`hero-network hero-network--${variant} ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d={d}
        className="motion-path"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        opacity={0.55}
      />

      {nodes.map((node, i) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={i === 0 ? 4 : 6}
            className="motion-node"
            fill={i === nodes.length - 1 ? "var(--color-flare)" : "currentColor"}
            opacity={i === 0 ? 0.5 : 1}
          />
          {node.id === pulseNodeId && (
            <circle
              cx={node.x}
              cy={node.y}
              r={11}
              className="motion-node-pulse"
              fill="none"
              stroke="var(--color-flare)"
              strokeWidth={1.5}
            />
          )}
          {i > 0 && (
            <text
              x={node.x}
              y={node.y - 16}
              textAnchor="middle"
              className="motion-label font-mono"
              fontSize={9}
              letterSpacing="0.08em"
              fill="currentColor"
              opacity={0.85}
            >
              {node.label}
            </text>
          )}
        </g>
      ))}

      <text
        x={nodes[nodes.length - 1].x}
        y={nodes[nodes.length - 1].y + 22}
        textAnchor="middle"
        className="motion-label font-mono"
        fontSize={9}
        letterSpacing="0.08em"
        fill="var(--color-flare)"
      >
        {showResolved ? "PATH FOUND" : ""}
      </text>

      {/* Signal travelling the resolved attack path - purely ambient, never the
          sole carrier of meaning, so it is simply omitted under reduced motion
          rather than shown static (a static dot mid-path implies nothing).
          SMIL `animateMotion` is used instead of CSS `offset-path`, which
          does not reliably track SVG geometry in every engine. */}
      {!reducedMotion && (
        <circle r={3.5} fill="var(--color-flare)" opacity={0}>
          <animateMotion path={d} dur="2.6s" begin={signalBegin} repeatCount="indefinite" fill="freeze" />
          <animate
            attributeName="opacity"
            keyTimes="0;0.1;0.9;1"
            values="0;1;1;0"
            dur="2.6s"
            begin={signalBegin}
            repeatCount="indefinite"
            fill="freeze"
          />
        </circle>
      )}
    </svg>
  );
}

/**
 * The hero's animated attack-path visual: establishes a small network,
 * activates an exposed node, draws a path through it, pulses a signal along
 * that path, then settles into a quiet, still-alive resting state. Entirely
 * decorative - the headline and copy already carry the meaning in text - so
 * the whole thing is `aria-hidden`. docs/UPDATE.md section 2.
 */
export function HeroAttackPath({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const tilt = tiltRef.current;
    if (!wrap || !tilt) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!canHover.matches || reducedMotion) return;

    let rafId = 0;
    let lastX = 0;
    let lastY = 0;

    const apply = () => {
      rafId = 0;
      tilt.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`;
    };

    const onMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      lastX = relX * -10;
      lastY = relY * -8;
      if (!rafId) rafId = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      lastX = 0;
      lastY = 0;
      if (!rafId) rafId = requestAnimationFrame(apply);
    };

    wrap.addEventListener("pointermove", onMove, { passive: true });
    wrap.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return (
    <div ref={wrapRef} className={`relative text-slate-650 ${className}`}>
      <div ref={tiltRef} className="transition-transform duration-slow ease-out-crisp">
        <Network
          nodes={DESKTOP_NODES}
          viewBox="0 0 440 500"
          variant="desktop"
          pulseNodeId="exposed"
          showResolved
          reducedMotion={reducedMotion}
          className="hidden h-auto w-full md:block"
        />
        <Network
          nodes={MOBILE_NODES}
          viewBox="0 0 300 270"
          variant="mobile"
          pulseNodeId="exposed"
          showResolved={false}
          reducedMotion={reducedMotion}
          className="h-auto w-full max-w-xs md:hidden"
        />
      </div>
    </div>
  );
}
