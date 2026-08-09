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

// Default recipient list (used when a feature-specific list isn't set).
// Supports multiple comma-separated addresses, e.g. "a@x.com, b@x.com".
const DEFAULT_TO_ADDRESS = process.env.RESEND_TO_ADDRESS || 'info@goldenoldieherbs.com'

function parseRecipients(value: string | undefined): string[] | undefined {
  if (!value) return undefined
  return value.split(',').map((v) => v.trim()).filter(Boolean)
}

// Each feature can have its own recipient list via a dedicated env var;
// if unset, it falls back to RESEND_TO_ADDRESS.
const FEATURE_ENV_VARS = {
  'book-consultation': 'RESEND_TO_BOOK_CONSULTATION',
  'book-appointment': 'RESEND_TO_BOOK_APPOINTMENT',
  'b2b-inquiry': 'RESEND_TO_B2B_INQUIRY',
} as const

export type EmailFeature = keyof typeof FEATURE_ENV_VARS

function resolveRecipients(feature?: EmailFeature): string[] {
  if (feature) {
    const envVarName = FEATURE_ENV_VARS[feature]
    const specific = parseRecipients(process.env[envVarName])
    if (specific && specific.length > 0) return specific
  }
  return parseRecipients(DEFAULT_TO_ADDRESS) ?? [DEFAULT_TO_ADDRESS]
}

export async function sendNotificationEmail(opts: {
  subject: string
  html: string
  replyTo?: string
  feature?: EmailFeature
}) {
  const resend = getClient()
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: resolveRecipients(opts.feature),
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

