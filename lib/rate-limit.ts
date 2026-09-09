/**
 * Best-effort, in-memory rate limiting for the contact API route.
 *
 * This resets whenever the serverless function instance is recycled, so it
 * is not a durable rate limit across a fleet of instances. It is a
 * deliberately simple first line of defence, in keeping with the brief's
 * instruction to keep the dependency surface minimal and avoid adding a
 * database or external store for a low-traffic corporate contact form. If
 * abuse becomes a real problem in production, upgrade to Vercel KV/Upstash
 * without changing the call site below.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    const retryAfterMs = WINDOW_MS - (now - timestamps[0]);
    hits.set(key, timestamps);
    return { allowed: false, retryAfterSeconds: Math.ceil(retryAfterMs / 1000) };
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Prevent unbounded growth if the instance stays warm a long time.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t > WINDOW_MS)) hits.delete(k);
    }
  }

  return { allowed: true };
}

export function clientKeyFromHeaders(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}
