"use client";

import { useId, useRef, useState } from "react";
import { contactContent, enquiryTopics } from "@/content/contact";
import { Turnstile } from "./Turnstile";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Record<string, string[] | undefined>;

export function ContactForm({
  initialTopic,
  turnstileSiteKey,
}: {
  initialTopic?: string;
  turnstileSiteKey?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const topicRef = useRef<HTMLSelectElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [errorMessage, setErrorMessage] = useState("");
  const statusId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current) return;

    setStatus("submitting");
    setFieldErrors({});
    setErrorMessage("");

    const formData = new FormData(formRef.current);
    const payload = {
      name: String(formData.get("name") ?? ""),
      organisation: String(formData.get("organisation") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? ""),
      privacyAccepted: formData.get("privacyAccepted") === "on",
      company_website: String(formData.get("company_website") ?? ""),
      turnstileToken: String(formData.get("cf-turnstile-response") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus("success");
        formRef.current.reset();
        return;
      }

      setStatus("error");
      setErrorMessage(data.message || "Something went wrong. Please try again.");
      setFieldErrors(data.fieldErrors ?? {});
    } catch {
      setStatus("error");
      setErrorMessage("We could not reach the server. Please check your connection and try again.");
    }
  }

  function selectTopic(slug: string) {
    if (topicRef.current) {
      topicRef.current.value = slug;
      topicRef.current.focus();
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-2 border-mint bg-bone-050 p-8"
      >
        <p className="text-h3">Thank you. Your message is on its way.</p>
        <p className="mt-3 text-body text-slate-650">
          A SilverFox specialist will review your enquiry and respond to the email address you
          provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-small font-semibold text-ink-950 underline decoration-line-light decoration-2 underline-offset-4 hover:decoration-flare"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div
        id={statusId}
        role="alert"
        aria-live="assertive"
        className={status === "error" ? "border-l-2 border-error bg-error/5 p-4 text-body text-ink-950" : "sr-only"}
      >
        {status === "error" && errorMessage}
      </div>

      {/* Honeypot field: hidden from sighted and screen-reader users, left
          empty by real visitors. Not display:none so simple bots that skip
          hidden fields still fill it. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field blank</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <Field label={contactContent.form.fields.name} name="name" autoComplete="name" required errors={fieldErrors.name} />
      <Field
        label={contactContent.form.fields.organisation}
        name="organisation"
        autoComplete="organization"
        required
        errors={fieldErrors.organisation}
      />
      <Field
        label={contactContent.form.fields.email}
        name="email"
        type="email"
        autoComplete="email"
        required
        errors={fieldErrors.email}
      />
      <Field label={contactContent.form.fields.phone} name="phone" type="tel" autoComplete="tel" errors={fieldErrors.phone} />

      <div>
        <label htmlFor="topic" className="block text-small font-medium text-ink-950">
          {contactContent.form.fields.topic} <span aria-hidden="true">*</span>
        </label>
        <select
          ref={topicRef}
          id="topic"
          name="topic"
          required
          defaultValue={initialTopic ?? ""}
          className="mt-2 w-full appearance-none border border-line-light bg-bone-050 px-4 py-3 text-body text-ink-950 focus-visible:border-flare"
        >
          <option value="" disabled>
            Choose an option
          </option>
          {enquiryTopics.map((topic) => (
            <option key={topic.slug} value={topic.slug}>
              {topic.label}
            </option>
          ))}
        </select>
        {fieldErrors.topic && <FieldError messages={fieldErrors.topic} />}
      </div>

      <div>
        <label htmlFor="message" className="block text-small font-medium text-ink-950">
          {contactContent.form.fields.message} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full border border-line-light bg-bone-050 px-4 py-3 text-body text-ink-950 focus-visible:border-flare"
        />
        {fieldErrors.message && <FieldError messages={fieldErrors.message} />}
      </div>

      <label className="flex items-start gap-3 text-small text-slate-650">
        <input
          type="checkbox"
          name="privacyAccepted"
          required
          className="mt-1 h-4 w-4 shrink-0 border border-line-dark accent-flare"
        />
        <span>{contactContent.form.privacyLabel}</span>
      </label>
      {fieldErrors.privacyAccepted && <FieldError messages={fieldErrors.privacyAccepted} />}

      <Turnstile siteKey={turnstileSiteKey} />

      <p className="text-small text-slate-650">{contactContent.form.microcopy}</p>

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-describedby={statusId}
        className="mt-2 bg-flare px-6 py-4 text-[0.95rem] font-semibold text-ink-950 transition-opacity duration-fast ease-out-crisp disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : contactContent.form.submitLabel}
      </button>

      <div className="flex flex-wrap gap-3 border-t border-line-light pt-6">
        {contactContent.productEnquiries.map((product) => (
          <button
            key={product.product}
            type="button"
            onClick={() => selectTopic(product.product.toLowerCase())}
            className="border border-line-light px-4 py-2 text-small text-slate-650 transition-colors duration-fast ease-out-crisp hover:border-ink-950 hover:text-ink-950"
          >
            {product.cta}
          </button>
        ))}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
  errors,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  errors?: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-small font-medium text-ink-950">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={errors ? true : undefined}
        className="mt-2 w-full border border-line-light bg-bone-050 px-4 py-3 text-body text-ink-950 focus-visible:border-flare"
      />
      {errors && <FieldError messages={errors} />}
    </div>
  );
}

function FieldError({ messages }: { messages: string[] }) {
  return (
    <p className="mt-1.5 text-small text-error" role="alert">
      {messages[0]}
    </p>
  );
}
