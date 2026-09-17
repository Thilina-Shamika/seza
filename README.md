# Seza Leisure

Marketing site for Seza Leisure, built with Next.js (App Router) and TypeScript.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — the home page (static, server-rendered)
- `app/globals.css` — all styles
- `app/fonts/` — Host Grotesk, self-hosted via `next/font/local`
- `components/DayChapters.tsx` — "A day here" image switcher (client)
- `components/EnquiryForm.tsx` — date / room / add-on estimate form (client). The nightly rate lives in `NIGHTLY_RATE`.
- `public/images/` — photography

## Deploy to Vercel

1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. In Vercel, **Add New → Project**, import the repo. Framework preset is detected as Next.js; no settings or env vars are needed.
3. Deploy.

Or from the terminal: `npx vercel` (preview) and `npx vercel --prod`.

## Note

The enquiry form currently only shows a confirmation on screen — it does not send anything. Hook the `onSubmit` handler in `components/EnquiryForm.tsx` up to an API route or form service before going live.
# seza
