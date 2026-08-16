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

## Deployment

`public/_redirects` (Netlify) and `vercel.json` (Vercel) are included so client-side routes
resolve correctly when visited directly. Other static hosts need an equivalent SPA rewrite rule
pointing all paths to `index.html`.
