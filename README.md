# ohdoyoel.github.io

Personal website and CV, built with [Astro](https://astro.build).

Live at [ohdoyoel.github.io](https://ohdoyoel.github.io).

## Features

- Static site powered by Astro 5
- English / Korean i18n (`en` default, `ko` at `/ko`)
- Content-driven sections: About, Project, Publication, Reference, Blog
- Auto-deploys to GitHub Pages on every push to `main`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Installation

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

This starts Astro's local dev server at [http://localhost:4321](http://localhost:4321) with hot reload on file changes.

### Other commands

| Command           | Action                                          |
| ------------------ | ------------------------------------------------ |
| `npm run build`   | Build the production site to `./dist/`          |
| `npm run preview` | Preview the production build locally            |
| `npm run astro`   | Run Astro CLI commands (e.g. `npm run astro -- --help`) |

## Project Structure

```
.
├── public/              # Static assets (images, PDFs, favicon)
├── src/
│   ├── components/      # Astro components
│   ├── content/          # Content collections (about, blog, project)
│   ├── data/             # Structured data (profile, projects, publications, ...)
│   ├── i18n/             # Translation strings and locale utilities
│   ├── layouts/          # Page layouts
│   ├── pages/             # Routes (en + ko)
│   └── styles/            # Global styles
├── astro.config.mjs
└── package.json
```

## Deployment

Pushing to `main` triggers the [GitHub Actions workflow](.github/workflows/deploy.yml), which builds the site with `withastro/action` and deploys it to GitHub Pages.
