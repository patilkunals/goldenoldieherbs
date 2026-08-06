import { NextRequest, NextResponse } from 'next/server'
import { sendNotificationEmail, escapeHtml } from '../../../lib/email'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { company, contact, email, phone, requirements } = (body ?? {}) as Record<string, unknown>

  if (
    typeof company !== 'string' || !company.trim() ||
    typeof contact !== 'string' || !contact.trim() ||
    typeof email !== 'string' || !email.trim() ||
    typeof phone !== 'string' || !phone.trim()
  ) {
    return NextResponse.json({ error: 'Company, contact, email, and phone are required' }, { status: 400 })
  }

  const safeCompany = escapeHtml(company.trim())
  const safeContact = escapeHtml(contact.trim())
  const safeEmail = escapeHtml(email.trim())
  const safePhone = escapeHtml(phone.trim())
  const safeRequirements = typeof requirements === 'string' && requirements.trim() ? escapeHtml(requirements.trim()) : '—'

  try {
    await sendNotificationEmail({
      subject: `New B2B Wholesale Inquiry — ${safeCompany}`,
      html: `
        <h2>New B2B Wholesale Inquiry</h2>
        <p><strong>Company / Pharmacy:</strong> ${safeCompany}</p>
        <p><strong>Contact Person:</strong> ${safeContact}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Products / Quantities:</strong><br/>${safeRequirements}</p>
      `,
      replyTo: email.trim(),
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('b2b-inquiry email error', err)
    return NextResponse.json({ error: 'Failed to send request. Please try again later.' }, { status: 500 })
  }
}
