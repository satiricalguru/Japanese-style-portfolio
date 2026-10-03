# satiricalguru.github.io

The portfolio of **Jatin Pandey** ([@satiricalguru](https://github.com/satiricalguru)): app & web developer, CTF grinder, AI tinkerer.

**Live:** https://satiricalguru.github.io/

## Design

*Higanbana* is a dark, anime-inspired design: void black, bone white and a single blood red.

- **Spider-lily field.** The hero is a field of red spider lilies drawn entirely in code on a 2D canvas (`src/lib/higanbana.ts`); there are no images. Flowers open white, then red waves wash through them. The cursor stains whatever it touches, a click sends a white→red ripple, and scrolling drains the whole field to red.
- **"1000 − 7" loader.** The intro counts down by sevens, then lifts away like a curtain. It plays once per session.
- **Quiet chrome.** Hairline borders, frosted pill controls and micro mono labels keep the interface minimal, as on [Active Theory](https://activetheory.net), so the artwork carries the colour.
- **Motion.** Masked letter reveals, scroll-lit text, a blood-fill hover on project rows, an ink seal that follows the cursor, Lenis smooth scrolling and a custom cursor.
- **Accessibility.** Fully keyboard-navigable. `prefers-reduced-motion` renders a single still frame and turns off every animation.

Type: Shippori Mincho (display and body), Space Grotesk (UI), JetBrains Mono (labels).

## Stack

React 19 · TypeScript · Vite · Lenis · plain CSS (no UI framework).

```
src/
├── lib/higanbana.ts      # procedural spider-lily renderer
├── lib/motion.ts         # smooth scroll, reveal and scroll-progress hooks
├── components/           # Preloader, Nav, Hero, Prologue, Works, Craft, Archive, Contact
├── data/projects.ts      # featured work, disciplines, socials
└── data/github*.json     # generated at build time from the GitHub API
```

## Develop

```bash
npm install
npm run dev
npm run build   # runs scripts/fetch-github-data.js first, then type-checks and bundles
```

`scripts/fetch-github-data.js` refreshes the repository list and follower count before every build. If the API is unreachable it keeps the cached JSON, so builds never fail because of the network.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
