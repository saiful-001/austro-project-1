# FORM/FWD — Creative Agency (Astro)

A fictional creative-studio landing page. All projects, clients, testimonials, articles and contact details are **sample content**.

## Prerequisites
Node.js 18.20+ (20+ recommended) and npm.

## Commands
```
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the build
```

## Customise
- Brand, copy: `src/components/*.astro` (project data is in `FeaturedWork.astro`, services in `Services.astro`).
- Colours, type, spacing tokens: `src/styles/global.css` (`:root`).
- **Photography:** every image URL/ID is in `src/data/images.ts` (Unsplash CDN). Replace IDs there. Images that fail to load hide themselves and show a neutral colour block.
- Contact email: copy `.env.example` to `.env` and set `PUBLIC_CONTACT_EMAIL`.
- Motion/interaction code: `src/scripts/interactions.ts`, `src/styles/animations.css`. Animations respect `prefers-reduced-motion`.

## Notes
Image IDs were not network-verified when this project was generated; check them on first run and swap any that 404. Check Unsplash licence terms before production use.
