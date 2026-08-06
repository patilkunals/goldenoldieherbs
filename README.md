# Golden Oldie Herbs

A modern Next.js website for Golden Oldie Herbs featuring Ayurvedic care, Panchkarma therapies, specialist listings, product showcases, testimonials, a media/video gallery, and a polished landing experience.

## Project overview

This project is built with:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- TypeScript
- Resend (transactional email for form submissions)

The site includes sections for navigation, hero content, business pillars, Panchkarma information, doctor cards, product listings, testimonials, a media/video gallery, and a footer. It also includes two working contact flows — **Book Appointment** and **Request a Callback** — backed by serverless API routes that email submissions to the clinic.

## Getting started

### Prerequisites
- Node.js 18 or newer
- npm or pnpm

### Install dependencies

```bash
npm install
```

### Environment variables (required for Book Appointment / Request a Callback)

Create a `.env.local` file in the project root for local development:

```bash
RESEND_EMAIL_API_KEY=your_resend_api_key_here
RESEND_TO_ADDRESS=info@goldenoldieherbs.com
RESEND_FROM_ADDRESS=Golden Oldie Herbs <no-reply@goldenoldieherbs.com>
```

| Variable | Required | Description |
|---|---|---|
| `RESEND_EMAIL_API_KEY` | **Yes** | API key from your [Resend](https://resend.com) account. Without this, the Book Appointment and Request a Callback forms will fail to send. |
| `RESEND_TO_ADDRESS` | Recommended | The inbox that should receive appointment/callback submissions. Defaults to `info@goldenoldieherbs.com` if not set — override with your real inbox. |
| `RESEND_FROM_ADDRESS` | Optional | The "from" address emails are sent from. Defaults to Resend's shared test sender (`onboarding@resend.dev`), which works for testing but is not suitable for production. Verify your own domain in Resend and set this once ready. |

Never commit `.env.local` or real API keys to the repository.

### Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser. With `RESEND_EMAIL_API_KEY` set, the appointment and callback forms will send real emails; without it, submissions will fail with an error message shown in the form.

## Build for production

```bash
npm run build
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. Sign in to Vercel and import the GitHub repository.
3. Select the project root as the root directory.
4. Vercel will detect the Next.js app automatically.
5. **Before deploying**, add the environment variables listed below under Project Settings → Environment Variables (set them for Production, and Preview if you want form testing on preview deployments too).
6. Click "Deploy".

### Required environment variables for Book Appointment / Request a Callback / B2B Inquiry

These features are implemented as Vercel serverless API routes (`/api/book-appointment`, `/api/request-callback`, and `/api/b2b-inquiry`) that send email via [Resend](https://resend.com). They will not work until these are configured in Vercel:

1. Sign up at [resend.com](https://resend.com) and create an API key.
2. In Vercel: Project Settings → Environment Variables, add:
   - `RESEND_EMAIL_API_KEY` — your Resend API key (required)
   - `RESEND_TO_ADDRESS` — the inbox that should receive submissions (recommended)
   - `RESEND_FROM_ADDRESS` — sender address; requires a domain verified in Resend (optional, defaults to Resend's shared test sender)
3. Redeploy (or trigger a new deployment) after adding/changing environment variables — Vercel does not apply them to already-running deployments.
4. For production-quality deliverability, verify your sending domain in the Resend dashboard (adds DNS records) rather than relying on the shared test sender.

## Project structure

- `src/app` — app routes, layout, and API routes (`src/app/api/book-appointment`, `src/app/api/request-callback`, `src/app/api/b2b-inquiry`), and the doctor profile pages (`src/app/doctors/[id]`)
- `src/components/home` — homepage sections (Hero, BentoGrid, Panchkarma, Doctor Cards, Amazon Products, Testimonials, Media, Consult CTA)
- `src/components/layout` — Navbar and Footer
- `src/components/ui` — shared UI utilities (e.g. ambient music toggle, smooth scroll, safe image)
- `src/lib` — shared server-side helpers (e.g. `email.ts` for Resend integration)
- `src/data` — static content for doctors, therapies, and products
- `public` — static assets such as images, icons, and (optionally) `background_music.mp3` for the ambient music toggle

