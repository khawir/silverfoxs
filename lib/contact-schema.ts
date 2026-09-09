import { z } from "zod";
import { enquiryTopics } from "@/content/contact";

const topicSlugs = enquiryTopics.map((t) => t.slug) as [string, ...string[]];

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(200),
  organisation: z.string().trim().min(1, "Enter your organisation.").max(200),
  email: z.string().trim().email("Enter a valid work email address.").max(320),
  phone: z.string().trim().max(60).optional().or(z.literal("")),
  topic: z.enum(topicSlugs, { message: "Choose what we can help with." }),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more about your requirement (at least 20 characters).")
    .max(4000),
  privacyAccepted: z.literal(true, {
    message: "You must confirm you have read the Privacy Policy.",
  }),
  // Honeypot: a real visitor never sees or fills this field.
  company_website: z.string().max(0, "Submission rejected.").optional().or(z.literal("")),
  turnstileToken: z.string().min(1, "Verification failed. Please try again.").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
