# Repository Guidelines

## Project Structure & Module Organization

This is a Vite React/TypeScript portfolio application. App entry points live in `src/main.tsx` and `src/App.tsx`. Reusable UI and feature components are under `src/components/`, with shared primitives in `src/components/ui/`. Route-level views are in `src/pages/`, hooks in `src/hooks/`, helpers in `src/lib/` and `src/utils/`, and translations in `src/locale/`. Static media, project screenshots, PDFs, videos, and 3D model assets are served from `public/`. Production output is generated in `dist/` and should not be edited manually.

## Build, Test, and Development Commands

- `npm run dev`: start the local Vite development server.
- `npm run build`: run TypeScript project checks and create a production build.
- `npm run lint`: run ESLint across the repository.
- `npm run preview`: preview the built site locally.

`postbuild` runs `generate-sitemap.js` automatically after builds, so check sitemap output when changing routes.

## Coding Style & Naming Conventions

Use TypeScript and React functional components. Component files and component directories generally use PascalCase, for example `HeroSection/HeroSection.tsx`; utility modules use camelCase, for example `i18nProvider.tsx`. Keep component-specific CSS beside the component when a local stylesheet already exists, and prefer Tailwind utility classes where the surrounding code uses them. Use 2-space indentation, explicit prop types for exported components, and avoid committing unused imports or generated build artifacts.

## Testing Guidelines

No test script or test framework is currently configured in `package.json`. For now, validate changes with `npm run lint` and `npm run build`, and manually check affected pages in the browser. If adding tests, prefer colocated `*.test.ts` or `*.test.tsx` files near the module under test and add an `npm test` script so future contributors have a single entry point.

## Commit & Pull Request Guidelines

Recent commit messages are short, imperative or descriptive phrases, often in Spanish or English, such as `bug resolved` or `correction text, add lp finanflix and vitalica`. Keep commits focused and mention the changed feature or page. Pull requests should include a short summary, validation commands run, linked issue or task when available, and screenshots or screen recordings for visual changes.

## Security & Configuration Tips

Keep secrets in `.env` and do not commit real credentials. When changing EmailJS, Supabase, or Botpress integrations, document required environment variables and test failure states as well as the successful path.
