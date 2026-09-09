/** Centralised, explicit checks for optional third-party configuration. */

export const isResendConfigured = Boolean(process.env.RESEND_API_KEY);
export const isTurnstileConfigured = Boolean(
  process.env.TURNSTILE_SECRET_KEY && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
);
export const contactRecipient = process.env.CONTACT_EMAIL ?? "";
