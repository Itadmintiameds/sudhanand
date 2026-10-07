import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const str = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Malformed request.' }, { status: 400 });
  }

  // Honeypot — silently accept so bots don't learn they were caught
  if (str(payload.website2, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(payload.name, 80);
  const organisation = str(payload.organisation, 120);
  const email = str(payload.email, 160);
  const message = str(payload.message, 2000);

  if (!name || !organisation) {
    return NextResponse.json(
      { error: 'Please tell us your name and organisation.' },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'That email address does not look right.' },
      { status: 400 }
    );
  }

  // TODO: wire to the group's inbox / CRM. Drop in Resend, SendGrid or a
  // Google Apps Script webhook here — the client already handles non-2xx.
  console.info('[enquiry]', { name, organisation, email, message });

  return NextResponse.json({ ok: true });
}
