/**
 * Best-effort client identifier, used only as the Turnstile `remoteip` hint.
 *
 * Deliberately does not attempt in-memory rate limiting: the app runs on
 * Vercel serverless infrastructure, where each function invocation may land
 * on a different, short-lived instance with no shared memory, so an
 * in-memory counter here would not actually bound abuse across instances -
 * it would only look like protection. Rate limiting for `/api/contact`
 * should instead be configured at the edge via Vercel Firewall/WAF rate
 * limiting rules targeting this route, which apply consistently regardless
 * of which instance handles a given request.
 */
export function clientKeyFromHeaders(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}
