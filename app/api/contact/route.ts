import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { sendContactNotification } from "@/lib/email";
import { checkRateLimit, clientKeyFromHeaders } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";

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
  const rateLimit = checkRateLimit(clientKey);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds ?? 600) } }
    );
  }

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

  await sendContactNotification(parsed.data);

  return NextResponse.json({ ok: true });
}
