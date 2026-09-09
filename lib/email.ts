import { Resend } from "resend";
import { contactRecipient, isResendConfigured } from "./env";
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

/**
 * Sends the enquiry notification via Resend. When RESEND_API_KEY or
 * CONTACT_EMAIL are not configured, this logs the submission server-side
 * instead of failing the request, so the contact form and the production
 * build both keep working before email delivery is provisioned.
 */
export async function sendContactNotification(values: ContactFormValues) {
  const topicLabel = enquiryTopics.find((t) => t.slug === values.topic)?.label ?? values.topic;

  if (!isResendConfigured || !contactRecipient) {
    console.warn(
      "[contact] RESEND_API_KEY / CONTACT_EMAIL not set - logging submission instead of emailing it.",
      { name: values.name, organisation: values.organisation, topic: topicLabel }
    );
    return { delivered: false as const };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <p><strong>New enquiry via silverfox.example/contact</strong></p>
    <p><strong>What can we help with:</strong> ${escapeHtml(topicLabel)}</p>
    <p><strong>Name:</strong> ${escapeHtml(values.name)}</p>
    <p><strong>Organisation:</strong> ${escapeHtml(values.organisation)}</p>
    <p><strong>Work email:</strong> ${escapeHtml(values.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(values.phone || "Not provided")}</p>
    <p><strong>Requirement:</strong></p>
    <p>${escapeHtml(values.message).replace(/\n/g, "<br />")}</p>
  `;

  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM || "SilverFox Website <onboarding@resend.dev>",
    to: contactRecipient,
    replyTo: values.email,
    subject: `New enquiry: ${topicLabel} - ${values.organisation}`,
    html,
  });

  if (error) {
    console.error("[contact] Resend delivery failed", error);
    return { delivered: false as const };
  }

  return { delivered: true as const };
}
