<h1 align="center">Portfolio</h1>

<p align="center">
<img width="100" src="public/android-chrome-192x192.png" alt=""/>
</p>

<p align="center">
<img src="https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=fff" alt="">
<img src="https://img.shields.io/badge/CSS-639?style=for-the-badge&logo=css&logoColor=fff" alt="">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff" alt="">
</p>

---

A personal portfolio built with Astro, presented as an
interactive business card. The card can be flipped to show profile details,
skills, and social links.

## Features

- Interactive business card with a 3D flip and pointer tilt effects
- Profile, skills, and social links displayed across the two card faces
- Mouse, touch, and keyboard interaction
- SEO metadata, structured data and sitemap

## Project structure

- `src/components/` — interactive card and its front and back
- `src/layouts/` — shared page layout and SEO metadata
- `src/lib/database.ts` — profile details, skills, and social links
- `src/pages/` — site pages
- `public/` — static assets, icons, and robots.txt

🧩 Configuration:

- Edit `src/lib/database.ts` to update the profile details, skills, and social links.
- Edit `astro.config.mjs` to configure the site URL and GitHub Pages base path.

## Getting started

Requires Node.js >= 22.12.0 and npm.

```sh
npm ci
npm run dev
```

Astro prints the local development URL in the terminal.  
To create and preview a production build locally:

```sh
npm run build
npm run preview
```
