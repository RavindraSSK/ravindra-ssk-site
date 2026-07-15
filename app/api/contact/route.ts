import { NextResponse } from "next/server";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "ravindrassk1304@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
  company?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const topic = payload.topic?.trim() || "General inquiry";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      {
        error: "Contact form is not configured yet. Please email directly.",
        mailto: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`,
      },
      { status: 503 },
    );
  }

  const from = process.env.CONTACT_FROM_EMAIL?.trim() ?? "Ravindra Site <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: `[Site contact] ${topic}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Topic: ${topic}`, "", message].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Unable to send message right now. Please try email directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
