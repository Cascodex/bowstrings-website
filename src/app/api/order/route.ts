import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 2000);
}

function buildEmailHtml(o: Record<string, unknown>): string {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1c1917;">
      <h2 style="color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 8px;">
        New Bowstring Order Request
      </h2>

      <h3 style="margin-top: 24px;">Contact</h3>
      <p><strong>Name:</strong> ${o.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${o.email}">${o.email}</a></p>
      <p><strong>Phone:</strong> ${o.phone || 'Not provided'}</p>

      <h3 style="margin-top: 24px;">Bow Details</h3>
      <p><strong>Bow Type:</strong> ${o.bowType}</p>
      <p><strong>AMO String Length:</strong> ${o.amoLength}&quot;</p>

      <h3 style="margin-top: 24px;">String Specifications</h3>
      <p><strong>Material:</strong> ${o.material}</p>
      <p><strong>Strands:</strong> 12 (flemish twist)</p>
      <p><strong>Primary Color:</strong> ${o.primaryColor}</p>
      <p><strong>Secondary Color:</strong> ${o.secondaryColor || 'None'}</p>
      <p><strong>Serving Color:</strong> ${o.servingColor}</p>
      <p><strong>Brass Nocking Point:</strong> ${o.nockingPoint ? 'Yes' : 'No'}</p>

      <h3 style="margin-top: 24px;">Shipping Address</h3>
      <p><strong>Name:</strong> ${o.shippingName}</p>
      <p><strong>Address:</strong> ${o.streetAddress}</p>
      <p><strong>City:</strong> ${o.city}</p>
      <p><strong>Province:</strong> ${o.province}</p>
      <p><strong>Postal Code:</strong> ${o.postalCode}</p>

      <h3 style="margin-top: 24px;">Special Requests</h3>
      <p>${o.notes || 'None'}</p>

      <hr style="margin-top: 32px; border: none; border-top: 1px solid #e7e5e4;" />
      <p style="font-size: 12px; color: #78716c;">
        Reply to this email to respond directly to ${o.name} at ${o.email}.
      </p>
    </div>
  `;
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
    'primaryColor', 'servingColor',
    'shippingName', 'streetAddress', 'city', 'province', 'postalCode',
  ];
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(sanitize(body.email))) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const postalRegex = /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/;
  if (!postalRegex.test(sanitize(body.postalCode))) {
    return NextResponse.json({ error: 'Invalid Canadian postal code' }, { status: 400 });
  }

  const order = {
    name: sanitize(body.name),
    email: sanitize(body.email),
    phone: sanitize(body.phone),
    bowType: sanitize(body.bowType),
    amoLength: sanitize(body.amoLength),
    material: sanitize(body.material),
    primaryColor: sanitize(body.primaryColor),
    secondaryColor: sanitize(body.secondaryColor),
    servingColor: sanitize(body.servingColor),
    nockingPoint: body.nockingPoint === true,
    shippingName: sanitize(body.shippingName),
    streetAddress: sanitize(body.streetAddress),
    city: sanitize(body.city),
    province: sanitize(body.province),
    postalCode: sanitize(body.postalCode).toUpperCase(),
    notes: sanitize(body.notes),
  };

  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠️  RESEND_API_KEY not set — order logged but not emailed:', order);
    return NextResponse.json({ success: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.ORDER_TO_EMAIL ?? 'GregoryBegin27@gmail.com';
  const fromEmail = process.env.ORDER_FROM_EMAIL ?? 'onboarding@resend.dev';

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: order.email,
      subject: `New Order — ${order.name} (${order.bowType}, ${order.amoLength}")`,
      html: buildEmailHtml(order),
    });
  } catch (err) {
    console.error('Email send failed:', err);
    return NextResponse.json({ error: 'Failed to send order notification' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

