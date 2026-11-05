import { NextResponse } from "next/server";
import { validateContact, type ContactValues } from "@/lib/contact";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  let body: Partial<ContactValues> & { website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in: report success so bots do not adapt, but send nothing.
  if (body.website) return NextResponse.json({ ok: true });

  const values: ContactValues = {
    fullName: String(body.fullName ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    legalMatter: String(body.legalMatter ?? ""),
    message: String(body.message ?? ""),
    contactMethod: String(body.contactMethod ?? ""),
    acknowledged: body.acknowledged === true,
  };

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) return NextResponse.json({ errors }, { status: 422 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact form is not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.");
    return NextResponse.json({ error: "Delivery is not configured." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: process.env.CONTACT_TO_EMAIL || site.email,
      reply_to: values.email,
      subject: `Website enquiry: ${values.legalMatter}`,
      text: [
        `Name: ${values.fullName}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone || "Not provided"}`,
        `Legal matter: ${values.legalMatter}`,
        `Preferred contact: ${values.contactMethod}`,
        "",
        values.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Contact email failed with status", response.status);
    return NextResponse.json({ error: "Delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
