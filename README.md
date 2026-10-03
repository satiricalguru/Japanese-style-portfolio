<div align="center">

<a href="https://satiricalguru.github.io/"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:060505,55:5c0710,100:c41226&height=230&section=header&text=Higanbana&fontSize=72&fontColor=ede7df&fontAlignY=38&desc=The%20portfolio%20of%20Jatin%20Pandey%20%C2%B7%20%E5%BD%BC%E5%B2%B8%E8%8A%B1&descSize=18&descAlignY=60&animation=fadeIn" width="100%" alt="Higanbana — portfolio of Jatin Pandey"></a>

<a href="https://satiricalguru.github.io/"><img src="https://readme-typing-svg.demolab.com?font=Shippori+Mincho&weight=500&size=22&duration=2800&pause=900&color=E01B34&center=true&vCenter=true&width=760&lines=1000+%E2%88%92+7+%3D+993...;Spider+lilies+that+bloom+white%2C+then+bleed+red.;Drawn+in+code+%E2%80%94+zero+images.;Building+things%2C+breaking+things." alt="Typing intro"></a>

<p>
  <a href="https://satiricalguru.github.io/"><img src="https://img.shields.io/badge/Live-satiricalguru.github.io-c41226?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=060505" alt="Live on GitHub Pages"></a>
  <a href="https://satiricalguru.vercel.app/"><img src="https://img.shields.io/badge/Mirror-Vercel-ede7df?style=for-the-badge&logo=vercel&logoColor=060505&labelColor=060505" alt="Vercel mirror"></a>
  <a href="https://github.com/satiricalguru/satiricalguru.github.io/actions"><img src="https://img.shields.io/github/actions/workflow/status/satiricalguru/satiricalguru.github.io/deploy.yml?branch=main&style=for-the-badge&label=deploy&labelColor=060505&color=5c0710" alt="Deploy status"></a>
</p>
<p>
  <img src="https://img.shields.io/badge/React_19-060505?style=flat-square&logo=react&logoColor=e01b34">
  <img src="https://img.shields.io/badge/TypeScript-060505?style=flat-square&logo=typescript&logoColor=e01b34">
  <img src="https://img.shields.io/badge/Vite-060505?style=flat-square&logo=vite&logoColor=e01b34">
  <img src="https://img.shields.io/badge/Canvas_2D-060505?style=flat-square&logo=html5&logoColor=e01b34">
  <img src="https://img.shields.io/badge/Lenis-060505?style=flat-square&logoColor=e01b34">
  <img src="https://img.shields.io/badge/94_KB_gzip-060505?style=flat-square">
</p>

<a href="https://satiricalguru.github.io/"><img src="docs/media/intro.gif" width="100%" alt="The 1000 − 7 loader lifts and a field of spider lilies blooms and turns red"></a>

<sub>▶ <a href="docs/media/intro.mp4">Watch the full-quality recording (MP4)</a> · or better, <a href="https://satiricalguru.github.io/">open the live site</a>, move your cursor through the field and click.</sub>

</div>

---

## 🩸 The idea

Inspired by the white spider lilies of *Tokyo Ghoul* that slowly stain red, the hero is a **living field of higanbana**, every petal, stamen and stem drawn procedurally on a canvas, at 60 fps.

| | Interaction | What happens |
|:-:|---|---|
| 🌱 | **Load** | A `1000 − 7` countdown ticks to 6, the curtain lifts, flowers grow and open **white** |
| 🩸 | **Wait** | A red wave travels through the field, turning every lily crimson |
| 🖱️ | **Move** | Your cursor **stains** whatever it brushes and the heads lean away from it |
| 💥 | **Click** | A ripple washes the field white, then red **bleeds back** from the same point |
| 📜 | **Scroll** | The whole field drains to red as you leave the hero |

## 📸 Screens

<table>
  <tr>
    <td colspan="2"><img src="docs/media/hero.jpg" alt="Hero with the spider-lily field"><br><sub><b>序 Hero</b> — the field in full bloom</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/media/prologue.jpg" alt="Prologue section"><br><sub><b>序 Prologue</b> — scroll-lit statement, bio and live GitHub stats</sub></td>
    <td width="50%"><img src="docs/media/work.jpg" alt="Selected work"><br><sub><b>作 Work</b> — rows fill with blood on hover and open into a case study</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/media/craft.jpg" alt="Craft section"><br><sub><b>技 Craft</b> — four disciplines and an outlined tech marquee</sub></td>
    <td width="50%"><img src="docs/media/archive.jpg" alt="Archive"><br><sub><b>録 Archive</b> — every public repo, filterable, refreshed each build</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/media/contact.jpg" alt="Contact"><br><sub><b>連 Contact</b> — an already-red field grows beneath the footer</sub></td>
    <td width="50%" align="center"><img src="docs/media/mobile.jpg" width="62%" alt="Mobile view"><br><sub><b>📱 Mobile</b> — fully responsive, no horizontal scroll</sub></td>
  </tr>
</table>

## ✨ Details

- **Procedural flowers:** each lily is an umbel of 6 to 8 florets with six recurved tepals and seven upswept stamens. It's built from Bézier curves and drawn with about three draw calls per flower (`src/lib/higanbana.ts`).
- **Colour waves:** waves fronts move outward from a point, and each flower records the moment a front reaches it. That is how the white wash, the red bleed and the cursor stains coexist.
- **Quiet chrome:** taking a cue from [Active Theory](https://activetheory.net), the page is void black with hairline borders, frosted pill controls and tiny mono labels, so the artwork carries all the colour.
- **Motion:** masked letter reveals, a statement that lights word by word as you scroll, a cursor-following kanji seal, a custom cursor, film grain and Lenis smooth scrolling.
- **Accessibility:** fully keyboard-usable. `prefers-reduced-motion` renders a single still frame, and the field pauses whenever it's offscreen or the tab is hidden.
- **Type:** Shippori Mincho for display and body, Space Grotesk for UI, JetBrains Mono for labels.

## 🧱 Structure

```text
src/
├── lib/higanbana.ts     # procedural spider-lily engine
├── lib/motion.ts        # smooth scroll, reveal + scroll-progress hooks
├── components/          # Preloader · Nav · Hero · Prologue · Works · Craft · Archive · Contact
├── data/projects.ts     # featured work, disciplines, socials
└── data/github*.json    # generated from the GitHub API at build time
scripts/fetch-github-data.js
docs/media/              # README screenshots + recording
```

## 🚀 Run it

```bash
git clone https://github.com/satiricalguru/satiricalguru.github.io.git
cd satiricalguru.github.io
npm install
npm run dev        # http://localhost:5173
npm run build      # refreshes GitHub data → type-checks → bundles to dist/
```

`scripts/fetch-github-data.js` pulls repos and follower count before every build. If the network is down, it keeps the cached JSON.

## 🌐 Deploy

- **GitHub Pages:** every push to `main` runs `.github/workflows/deploy.yml`.
- **Vercel:** a mirror at [satiricalguru.vercel.app](https://satiricalguru.vercel.app).

<div align="center">

<br>

<sub>Designed & built by <a href="https://github.com/satiricalguru"><b>Jatin Pandey</b></a> · <a href="https://x.com/JayDevSG">@JayDevSG</a> · <code>1000 − 7 = 993</code></sub>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:c41226,45:5c0710,100:060505&height=120&section=footer" width="100%">

</div>
