# ManaDigitalAI Website

Marketing site for ManaDigitalAI, built with React, TypeScript, Vite, Tailwind CSS and React Router.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Contact form backend

The contact form opens WhatsApp with a pre-filled message on submit, and — once configured —
also logs the lead to a Google Sheet (with an optional WhatsApp alert to your business number).
See [`google-apps-script/README.md`](google-apps-script/README.md) for setup, then set
`SHEET_WEBHOOK_URL` in [`src/lib/leads.ts`](src/lib/leads.ts).

## Deployment

`public/_redirects` (Netlify) and `vercel.json` (Vercel) are included so client-side routes
resolve correctly when visited directly. Other static hosts need an equivalent SPA rewrite rule
pointing all paths to `index.html`.
