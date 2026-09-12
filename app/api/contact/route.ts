import { NextResponse } from "next/server";
import { clientKeyFromHeaders } from "@/lib/client-ip";
import { contactSchema } from "@/lib/contact-schema";
import { sendContactNotification } from "@/lib/email";
import { verifyTurnstileToken } from "@/lib/turnstile";

// Rate limiting for this route is intentionally not implemented here - see
// lib/client-ip.ts for why an in-memory limiter would be misleading on
// Vercel's serverless infrastructure. Protect this path with a Vercel
// Firewall/WAF rate limiting rule targeting `/api/contact` instead.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a real visitor never populates this field. Bots that fill
  // every field get a generic success response rather than a validation
  // error that would teach them which field to leave blank.
  if (
    body &&
    typeof body === "object" &&
    "company_website" in body &&
    typeof (body as Record<string, unknown>).company_website === "string" &&
    (body as Record<string, string>).company_website.length > 0
  ) {
    return NextResponse.json({ ok: true });
  }

  const clientKey = clientKeyFromHeaders(request.headers);

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const verified = await verifyTurnstileToken(parsed.data.turnstileToken, clientKey);
  if (!verified) {
    return NextResponse.json(
      { ok: false, message: "We could not verify this submission. Please try again." },
      { status: 400 }
    );
  }

  const result = await sendContactNotification(parsed.data);
  if (!result.delivered && !result.skipped) {
    return NextResponse.json(
      { ok: false, message: "Unable to send your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
