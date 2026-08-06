import { Resend } from 'resend'

// Reads the API key at request time (not module load time) so builds
// never fail even if the env var isn't set yet, and Vercel preview/prod
// environments can each supply their own key.
function getClient() {
  const apiKey = process.env.RESEND_EMAIL_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_EMAIL_API_KEY is not set')
  }
  return new Resend(apiKey)
}

// Sender address. Resend requires a verified domain to send from a custom
// address (e.g. no-reply@goldenoldieherbs.com). Until a domain is verified
// in Resend, their shared 'onboarding@resend.dev' sender works for testing.
const FROM_ADDRESS = process.env.RESEND_FROM_ADDRESS || 'Golden Oldie Herbs <onboarding@resend.dev>'

// Where inquiries get delivered. Override via env var in Vercel once known.
const TO_ADDRESS = process.env.RESEND_TO_ADDRESS || 'info@goldenoldieherbs.com'

export async function sendNotificationEmail(opts: {
  subject: string
  html: string
  replyTo?: string
}) {
  const resend = getClient()
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: TO_ADDRESS,
    subject: opts.subject,
    html: opts.html,
    replyTo: opts.replyTo,
  })
  if (error) {
    throw new Error(typeof error === 'string' ? error : error.message)
  }
}

// Minimal HTML-escaping so user-submitted text can't break the email markup.
export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
