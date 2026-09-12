import nodemailer, { type Transporter } from "nodemailer";
import { contactRecipient, isZohoSmtpConfigured } from "./env";
import type { ContactFormValues } from "./contact-schema";
import { enquiryTopics } from "@/content/contact";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Built lazily (and cached across invocations on a warm serverless
// instance) so importing this module never touches process.env before the
// route handler has had a chance to run - and so a missing/incomplete
// config never throws at import time.
let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!cachedTransporter) {
    const port = Number(process.env.ZOHO_SMTP_PORT);
    cachedTransporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port,
      // Port 465 is implicit TLS ("secure"); 587 (and anything else) uses
      // STARTTLS, which nodemailer negotiates itself when secure is false.
      secure: port === 465,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASSWORD,
      },
    });
  }
  return cachedTransporter;
}

/**
 * Sends the enquiry notification via the SilverFox Zoho mailbox over SMTP.
 *
 * `delivered: false, skipped: true` means the Zoho SMTP env vars or
 * CONTACT_EMAIL are not configured - the submission is logged server-side
 * instead, so the contact form and the production build both keep working
 * before email delivery is provisioned (see .env.example).
 *
 * `delivered: false, skipped: false` means delivery was attempted (SMTP is
 * configured) and failed - the caller should surface an error to the
 * visitor rather than a false success.
 */
export async function sendContactNotification(
  values: ContactFormValues
): Promise<{ delivered: boolean; skipped: boolean }> {
  const topicLabel = enquiryTopics.find((t) => t.slug === values.topic)?.label ?? values.topic;

  if (!isZohoSmtpConfigured || !contactRecipient) {
    console.warn(
      "[contact] Zoho SMTP env vars / CONTACT_EMAIL not set - logging submission instead of emailing it.",
      { name: values.name, organisation: values.organisation, topic: topicLabel }
    );
    return { delivered: false, skipped: true };
  }

  const phone = values.phone || "Not provided";

  const text = [
    "New SilverFox Website Enquiry",
    "",
    "Name:",
    values.name,
    "",
    "Email:",
    values.email,
    "",
    "Organisation:",
    values.organisation,
    "",
    "Phone:",
    phone,
    "",
    "Service / Subject:",
    topicLabel,
    "",
    "Message:",
    values.message,
  ].join("\n");

  const html = `
    <p><strong>New SilverFox Website Enquiry</strong></p>
    <p><strong>Name:</strong><br />${escapeHtml(values.name)}</p>
    <p><strong>Email:</strong><br />${escapeHtml(values.email)}</p>
    <p><strong>Organisation:</strong><br />${escapeHtml(values.organisation)}</p>
    <p><strong>Phone:</strong><br />${escapeHtml(phone)}</p>
    <p><strong>Service / Subject:</strong><br />${escapeHtml(topicLabel)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(values.message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    // Sent from the authenticated Zoho mailbox, never from the visitor's
    // own address - using their address as "From" would fail SPF/DKIM/DMARC
    // on receiving servers. The visitor's address is only ever the
    // Reply-To, so replying in an inbox goes straight back to them.
    await getTransporter().sendMail({
      from: `"SilverFox Website" <${process.env.ZOHO_SMTP_USER}>`,
      to: contactRecipient,
      replyTo: values.email,
      subject: `New website enquiry from ${values.name}`,
      text,
      html,
    });
    return { delivered: true, skipped: false };
  } catch (error) {
    console.error("[contact] Zoho SMTP delivery failed", error);
    return { delivered: false, skipped: false };
  }
}
