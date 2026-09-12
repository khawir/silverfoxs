/** Centralised, explicit checks for optional third-party configuration. */

export const isZohoSmtpConfigured = Boolean(
  process.env.ZOHO_SMTP_HOST &&
    process.env.ZOHO_SMTP_PORT &&
    process.env.ZOHO_SMTP_USER &&
    process.env.ZOHO_SMTP_PASSWORD
);
export const isTurnstileConfigured = Boolean(
  process.env.TURNSTILE_SECRET_KEY && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
);
export const contactRecipient = process.env.CONTACT_EMAIL ?? "";
