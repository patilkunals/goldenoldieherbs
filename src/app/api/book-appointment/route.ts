import { NextRequest, NextResponse } from 'next/server'
import { sendNotificationEmail, escapeHtml } from '../../../lib/email'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, phone, date, message, doctorName } = (body ?? {}) as Record<string, unknown>

  if (typeof name !== 'string' || !name.trim() || typeof phone !== 'string' || !phone.trim()) {
    return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
  }

  const safeName = escapeHtml(name.trim())
  const safePhone = escapeHtml(phone.trim())
  const safeDate = typeof date === 'string' && date.trim() ? escapeHtml(date.trim()) : 'Not specified'
  const safeMessage = typeof message === 'string' && message.trim() ? escapeHtml(message.trim()) : '—'
  const safeDoctor = typeof doctorName === 'string' && doctorName.trim() ? escapeHtml(doctorName.trim()) : 'Not specified'

  try {
    await sendNotificationEmail({
      subject: `New Appointment Request — ${safeName}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Specialist:</strong> ${safeDoctor}</p>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Preferred date:</strong> ${safeDate}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('book-appointment email error', err)
    return NextResponse.json({ error: 'Failed to send request. Please try again later.' }, { status: 500 })
  }
}
