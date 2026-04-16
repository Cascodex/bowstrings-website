import { NextRequest, NextResponse } from 'next/server';

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const required = [
    'name', 'email', 'bowType', 'amoLength', 'material',
    'numStrands', 'primaryColor', 'servingColor',
  ];
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(sanitize(body.email))) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const order = {
    name: sanitize(body.name),
    email: sanitize(body.email),
    phone: sanitize(body.phone),
    bowType: sanitize(body.bowType),
    amoLength: sanitize(body.amoLength),
    material: sanitize(body.material),
    numStrands: sanitize(body.numStrands),
    primaryColor: sanitize(body.primaryColor),
    secondaryColor: sanitize(body.secondaryColor),
    servingColor: sanitize(body.servingColor),
    servingStyle: sanitize(body.servingStyle),
    nockingPoint: body.nockingPoint === true,
    notes: sanitize(body.notes),
  };

  // TODO: Connect to an email service (e.g. Resend, SendGrid) or a database to persist orders.
  // For now, log to the server console.
  console.log('New order request received:', order);

  return NextResponse.json({ success: true });
}
