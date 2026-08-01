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

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitHits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  for (const [mapKey, timestamps] of rateLimitHits) {
    const pruned = timestamps.filter((t) => t > windowStart);
    if (pruned.length === 0) {
      rateLimitHits.delete(mapKey);
    } else {
      rateLimitHits.set(mapKey, pruned);
    }
  }

  const hits = rateLimitHits.get(key) ?? [];
  if (hits.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  hits.push(now);
  rateLimitHits.set(key, hits);
  return false;
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

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const topic = payload.topic?.trim() || "General inquiry";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (name.length > 120) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }

  if (email.length > 254) {
    return NextResponse.json({ error: "Email is too long." }, { status: 400 });
  }

  if (topic.length > 200) {
    return NextResponse.json({ error: "Topic is too long." }, { status: 400 });
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
