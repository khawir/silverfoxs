"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

/**
 * Reactive `prefers-reduced-motion: reduce` check for the JS-driven motion
 * moments (SMIL path animation, the lifecycle scroll-jack) that CSS's own
 * blanket reduced-motion rule in globals.css cannot reach. Server snapshot
 * is `false` so markup matches between server and client on first paint.
 */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}
