import { isTurnstileConfigured } from "./env";

/**
 * Verifies a Cloudflare Turnstile token server-side. Returns true when
 * Turnstile is not configured yet, so local development and early
 * deployments are not blocked before secrets are provisioned - see
 * .env.example and the README for how to enable enforcement.
 */
export async function verifyTurnstileToken(token: string | undefined, remoteIp: string) {
  if (!isTurnstileConfigured) {
    console.warn(
      "[contact] TURNSTILE_SECRET_KEY / TURNSTILE_SITE_KEY not set - skipping bot verification."
    );
    return true;
  }

  if (!token) return false;

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY as string,
        response: token,
        remoteip: remoteIp,
      }),
    });
    const data = (await response.json()) as { success: boolean };
    return data.success === true;
  } catch (error) {
    console.error("[contact] Turnstile verification request failed", error);
    return false;
  }
}
