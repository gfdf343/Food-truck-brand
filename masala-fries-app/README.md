# Masala Fries

A responsive React + Vite storefront for the Masala Fries brand.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

Vercel settings:
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Structure
- `index.html` — document shell and metadata
- `src/main.jsx` — React entry point
- `src/App.jsx` — page composition and scroll animation
- `src/components/` — reusable page components
- `src/styles/global.css` — responsive design and animation styles
- `public/` — static assets
