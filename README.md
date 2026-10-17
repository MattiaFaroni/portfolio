<h1 align="center">Portfolio</h1>

<p align="center">
  An interactive portfolio presented as a digital business card.
</p>

<p align="center">
<img width="100" src="public/android-chrome-192x192.png" alt=""/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css&logoColor=white" alt="CSS" />
</p>

## Overview

This personal portfolio brings profile information, skills, and social links together in a compact, interactive card. Flip the card to switch between the profile and skills views. The interface supports pointer, touch, and keyboard interaction.

## Features

- 3D card flip and pointer-based tilt effects
- Front and back card views for profile information, skills, and social links
- Responsive layout with carbon-fiber-inspired texture and ambient background glow
- Keyboard-accessible card interaction
- SEO metadata, Person structured data, and an automatically generated sitemap
- Static deployment to GitHub Pages through GitHub Actions

## Getting started

Requires Node.js >= 22.22.0 and npm.

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

## Project structure

```text
.
├── public/                   # Static assets, icons, and robots.txt
├── src/
│   ├── components/           # Business card, card faces, and social links
│   ├── layouts/              # Shared page layout and SEO metadata
│   ├── lib/database.ts       # Profile, skills, and social link content
│   └── pages/                # Site pages
├── astro.config.mjs          # Site URL, base path, and sitemap integration
└── package.json              # Dependencies and npm scripts
```

## Customization

- **Profile, bio, skills, and social links:** edit `src/lib/database.ts`.
- **Site URL and deployment base path:** update `site` and `base` in `astro.config.mjs`.
- **Card content and appearance:** edit the components in `src/components/` and global styles in `src/layouts/Layout.astro`.

The `base` value must match the path where the site is hosted. For a GitHub Pages project site, it is typically the repository name prefixed with `/`.
