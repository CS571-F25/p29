# QuestForge Gamified Course Authoring Platform

QuestForge is an interactive landing experience that showcases how instructors can design game-based learning paths. The project was bootstrapped with Vite + React and implements routing, React Bootstrap components, and bespoke interactive widgets to simulate key product ideas such as streak tracking, customizable paths, and reward loops.

## Feature Highlights

- React Router drives three top-level pages (Home, Author Tools, Engagement Lab) linked via a persistent navigation bar.
- React Bootstrap provides the design system (Navbar, Cards, Buttons, Grid, etc.) plus a responsive layout.
- Interactive components: animated course preview carousel, streak tracker simulator, reward showcase, and drag-toggle path builder.
- Content focuses on communicating customizable learning paths, rewards, streak insights, and demo-ready analytics.

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:5173/` by default.

## Building & Deploying to GitHub Pages

The Vite config is set to publish into the `docs/` directory with a base path of `/p29/`. Build the static assets and push them to GitHub to keep GitHub Pages live:

```bash
npm run build
git add .
git commit -m "Deploy QuestForge landing page"
git push origin main
```

Then enable GitHub Pages to serve from the `docs/` folder in the repository settings. The site will be available at `https://<username>.github.io/p29/` (or update the `base` option in `vite.config.js` to match your repo name).
