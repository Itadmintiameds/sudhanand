import { NextResponse } from 'next/server';

const str = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

// One "@" with something before it, and a dot after it that leaves a 2+ letter
// ending. Plain string checks: the equivalent regex backtracks quadratically.
const isEmail = (v: string) => {
  const at = v.indexOf('@');
  if (at < 1 || at !== v.lastIndexOf('@') || /\s/.test(v)) return false;
  const dot = v.indexOf('.', at + 2);
  return dot !== -1 && v.length - dot > 2;
};

/** Where enquiries are delivered — a Google Apps Script, Zapier or CRM webhook. */
const WEBHOOK_URL = process.env.ENQUIRY_WEBHOOK_URL;

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

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: 'That email address does not look right.' },
      { status: 400 }
    );
  }

  const enquiry = { name, organisation, email, message };

  // With no webhook configured (local dev) the enquiry is only logged
  if (!WEBHOOK_URL) {
    console.info('[enquiry]', enquiry);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...enquiry, receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error('[enquiry] delivery failed', err);
    return NextResponse.json(
      { error: 'We could not send your enquiry just now. Please try again shortly.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
