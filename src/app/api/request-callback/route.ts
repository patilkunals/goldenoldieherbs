import { NextRequest, NextResponse } from 'next/server'
import { sendNotificationEmail, escapeHtml } from '../../../lib/email'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, phone, message } = (body ?? {}) as Record<string, unknown>

  if (typeof name !== 'string' || !name.trim() || typeof phone !== 'string' || !phone.trim()) {
    return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
  }

  const safeName = escapeHtml(name.trim())
  const safePhone = escapeHtml(phone.trim())
  const safeMessage = typeof message === 'string' && message.trim() ? escapeHtml(message.trim()) : '—'

  try {
    await sendNotificationEmail({
      feature: 'book-consultation',
      subject: `New Callback Request — ${safeName}`,
      html: `
        <h2>New Callback Request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('request-callback email error', err)
    return NextResponse.json({ error: 'Failed to send request. Please try again later.' }, { status: 500 })
  }
}
