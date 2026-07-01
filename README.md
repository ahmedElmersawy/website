# Ahmed Elmersawy — Personal Site

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion +
React Three Fiber. Dark-mode-default personal/research site with an
interactive 3D hero, a force-directed research graph, an animated benchmark
dashboard, and a searchable publications list.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/content/` — all site copy and structured data (research, projects,
  awards, publications, resume, benchmarks). Edit these files to change
  content; components render from them.
- `src/components/` — UI organized by section (`hero/`, `research/`,
  `projects/`, `awards/`, `publications/`, `benchmarks/`, `resume`/`contact`
  inline in their routes, `nav/`, `ui/`).
- `src/app/` — routes: `/`, `/research`, `/publications`, `/projects`,
  `/awards`, `/resume`, `/contact`, plus `sitemap.ts` / `robots.ts`.
- `public/papers/`, `public/resume/` — placeholder PDFs. See
  `CONTENT_TODO.md` for everything that needs real content before launch.

## Notes

- The hero's 3D scene (`src/components/hero/HeroScene.tsx`) only loads on
  wide viewports without `prefers-reduced-motion`; everything else falls
  back to a static CSS version (`HeroFallback.tsx`).
- The research network graph (`src/components/research/ResearchGraph.tsx`)
  uses `d3-force` for layout, computed once on mount (not animated frame by
  frame).

## Build

```bash
npm run build
npm run lint
```
