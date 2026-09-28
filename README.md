# satiricalguru.github.io — Jatin Pandey (satiricalguru)

> An illustrated gallery of systems engineering projects and experiments.

[![Live Site](https://img.shields.io/badge/Live%20Portfolio-satiricalguru.github.io-C85A32?style=for-the-badge&logo=githubpages&logoColor=white)](https://satiricalguru.github.io/)
[![Build & Deploy](https://img.shields.io/github/actions/workflow/status/satiricalguru/satiricalguru.github.io/deploy.yml?branch=main&style=for-the-badge&label=Deployment&color=2D5D44)](https://github.com/satiricalguru/satiricalguru.github.io/actions)

---

## 🎨 Design Philosophy: Analog Meets Digital

This portfolio pairs **physical analog craftsmanship** with **deep systems engineering**:

1. **Analog Heritage**:
   - Primary warm parchment canvas (`#F5F1E8`), fine paper grain textures, and subtle architect's coordinate grids.
   - Watercolor-style chapter illustrations paired with burnt orange (`#C85A32`), deep cobalt (`#2B5898`), forest sage (`#2D5D44`), and wine crimson (`#8E3345`).
   - Hand-drawn SVG annotations, chamfered corner markers, arrows, underlines, and notebook stamps.
   - Editorial serif typography (`Instrument Serif`) combined with modern technical sans (`Plus Jakarta Sans`) and code mono (`JetBrains Mono`).

2. **Digital Precision & Modern Polish**:
   - A restrained workbench panel in the hero, with artwork-led project cards below it.
   - Keyboard-accessible case study dialogs and reduced-motion support.

---

## 🛠️ Architecture & Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Strict typing with verbatim module syntax)
- **Bundler**: [Vite](https://vite.dev/) (Rapid HMR, tree-shaken static production bundle with gzip footprint under 140kB)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a bespoke ink, parchment, and paint color token system
- **Motion & Physics**: [Framer Motion](https://www.framer.com/motion/) for responsive topological node mapping and drawer modals
- **Icons & Graphics**: [Lucide React](https://lucide.dev/) + bespoke hand-crafted SVG stroke illustrations
- **Typography**: Google Fonts CDN (`Instrument Serif`, `Plus Jakarta Sans`, `JetBrains Mono`)

---

## 🗂️ Project Structure

```text
satiricalguru.github.io/
├── .github/workflows/
│   └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Custom ink monogram favicon
│   ├── og-image-v2.png         # 1200x630 OpenGraph card
│   ├── assets/art/*.webp       # Optimized chapter illustrations
│   ├── robots.txt              # Search engine discovery configuration
│   └── sitemap.xml             # Canonical sitemap metadata
├── scripts/
│   └── fetch-github-data.js    # Pre-build script fetching live telemetry from GitHub API
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Frosted glass floating navigation with scroll compaction
│   │   ├── Hero.tsx            # Editorial headline & accessible systems schematic
│   │   ├── ProjectShowcase.tsx # Asymmetrical editorial gallery featuring 4 flagship projects
│   │   ├── ProjectModal.tsx    # Keyboard-accessible case study dialog
│   │   ├── Lab.tsx             # 12 pinned sketchbook experiments with archive toggle
│   │   ├── EngineeringMap.tsx  # Systems topology blueprint (zero progress bars)
│   │   ├── AboutNotebook.tsx   # Architect's memorandum & local-first engineering tenets
│   │   ├── GitHubTelemetry.tsx # GitHub snapshot compiled during deployment
│   │   ├── ContactSection.tsx  # Signed painting dispatch card with verified socials
│   │   ├── Footer.tsx          # Minimal colophon with back-to-top trigger
│   │   ├── Doodles.tsx         # SVG hand-drawn arrows, stars, brackets, stamps
│   │   └── Icons.tsx           # Standalone brand SVG icons (GitHub, Twitter, LinkedIn)
│   ├── data/
│   │   ├── github.json         # Build-time metadata for public repositories
│   │   └── projects.ts         # Curated flagship projects & laboratory experiments
│   ├── App.tsx                 # Root layout & textured parchment canvas wrapper
│   ├── index.css               # Global typography, paper grain, and watercolor utilities
│   └── main.tsx                # React virtual DOM mount entry
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🔬 Curated Engineering Showcase

Every project showcases real open-source architectures authored by [@satiricalguru](https://github.com/satiricalguru):

| Project | Domain | Architecture & Highlights |
| :--- | :--- | :--- |
| **Vantage** | Native macOS / Swift | High-performance desktop dynamic wallpaper engine streaming video directly to `kCGDesktopWindowLevel` with display link sync and auto-pause. |
| **Forge** | Developer Tool / IDE | Sovereign local AI coding environment forked from VS Code. Strips telemetry and connects directly to Ollama / llama.cpp on localhost. |
| **Project Beatrice** | Real-Time Audio DSP | Experimental neural voice conversion pipeline combining PyTorch acoustic models with native CoreAudio short-frame buffer drivers. |
| **SynthID-Remover** | Signal Forensics | Client-side 2D Discrete Cosine Transform (DCT) tool that attenuates imperceptible synthetic watermark signals without visual degradation. |

### Laboratory & Archived Experiments
The Lab section features 12 additional prototypes accessible via category filters and an archive toggle:
* **Wraith** — Binary analysis supervisor coordinating Ghidra decompilation and local LLM code audits.
* **AgriNode** — Hydroponic micro-station firmware orchestrating ESP32 sensors and nutrient dosing.
* **Jarvis** — Offline voice assistant executing local macOS commands with Whisper and llama.cpp.
* **Local-Mind** — Local document Q&A runner using embedding similarity and on-device models.
* **Mac Gesture Control** — Hand gesture tracking using OpenCV and MediaPipe to trigger macOS CGEvents.
* **Beatrice Voicechanger** — Desktop GUI wrapper for real-time RVC voice conversion.
* **Fast-Jev-Agents**, **Prompt-Forge**, **Auto-Researcher**, **Context-Pruner**, **Screen-Whisper**, **Dev-Telemetry-Blocker**.

---

## 🚀 Development & Build Commands

### 1. Prerequisites
- Node.js >= 20.x
- npm >= 10.x

### 2. Local Setup
```bash
# Clone the repository
git clone https://github.com/satiricalguru/satiricalguru.github.io.git
cd satiricalguru.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Dynamic GitHub Data & Production Build
```bash
# Fetch live repository data explicitly (optional):
npm run fetch-github

# Build for production (automatically executes prebuild to refresh github.json):
npm run build

# Run linter
npm run lint

# Preview production build locally
npm run preview
```

---

## 🔄 Dynamic GitHub Telemetry Pipeline

1. **Automatic Prebuild Script**:
   Running `npm run build` triggers `prebuild` (`node scripts/fetch-github-data.js`). This queries the GitHub REST API for `@satiricalguru` repositories, extracts metadata, formats topics and languages, and generates `src/data/github.json`.
2. **Resilient Offline Fallback**:
   If network access is unavailable or unauthenticated rate limits occur during local development, the script logs a warning and preserves the existing cached `src/data/github.json`, guaranteeing builds never fail unexpectedly.
3. **CI/CD Integration**:
   In `.github/workflows/deploy.yml`, `GITHUB_TOKEN` is automatically passed into `npm run build`, providing 1,000+ API requests per hour for up-to-date deployment telemetry.

---

## 🌐 Deployment to GitHub Pages

This portfolio deploys automatically via GitHub Actions:
1. Every push to the `main` branch triggers `.github/workflows/deploy.yml`.
2. The workflow performs a clean `npm ci`, executes `scripts/fetch-github-data.js` via `prebuild`, compiles TypeScript via `tsc -b`, and bundles static assets via Vite.
3. Assets are uploaded and published to GitHub Pages at **[https://satiricalguru.github.io/](https://satiricalguru.github.io/)**.

---

## 📜 Credits & License

- Designed and engineered with extreme care by **Jatin Pandey** ([@satiricalguru](https://github.com/satiricalguru)).
- Fonts by [Google Fonts](https://fonts.google.com/) (`Instrument Serif` by Rodrigo Fuenzalida & Jordan Runge; `Plus Jakarta Sans` by Tokotype; `JetBrains Mono` by JetBrains).
- Open-sourced under the [MIT License](LICENSE).
