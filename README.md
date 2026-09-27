# satiricalguru.github.io — Jatin Pandey (satiricalguru)

> An eccentric engineer's hand-painted research notebook transformed into a luxury interactive website.

[![Live Site](https://img.shields.io/badge/Live%20Portfolio-satiricalguru.github.io-C85A32?style=for-the-badge&logo=githubpages&logoColor=white)](https://satiricalguru.github.io/)
[![Build & Deploy](https://img.shields.io/github/actions/workflow/status/satiricalguru/satiricalguru.github.io/deploy.yml?branch=main&style=for-the-badge&label=Deployment&color=2D5D44)](https://github.com/satiricalguru/satiricalguru.github.io/actions)

---

## 🎨 Design Philosophy: Analog Meets Digital

This portfolio diverges completely from the generic dark-mode purple gradient SaaS templates common across web development. Instead, it pairs **high-touch physical craftsmanship** with **deep systems engineering**:

1. **Analog Heritage**:
   - Primary warm parchment canvas (`#F5F1E8`), fine paper grain textures, and subtle architect's coordinate grids.
   - Hand-painted watercolor washes in burnt orange (`#C85A32`), deep cobalt (`#2B5898`), forest sage (`#2D5D44`), and wine crimson (`#8E3345`).
   - Hand-drawn SVG annotations, chamfered corner markers, arrows, underlines, and notebook stamps.
   - Editorial serif typography (`Instrument Serif` & `Fraunces`) combined with technical sans (`Plus Jakarta Sans`) and developer handwriting (`Caveat`).

2. **Digital Precision & Modern Polish**:
   - Subtle frosted glassmorphic HUD overlays (`backdrop-blur-md` with refined borders) that feel like precision instruments lying across an engineer's workbench.
   - Custom magnetic ink-dot cursor with stateful expansion on interactive items (`VIEW ↗` hover trigger for projects). Automatically disabled on touch & mobile hardware.
   - Spring-damped micro-interactions and scroll-reveals powered by `framer-motion`.
   - 100% accessible: keyboard navigational loops, semantic landmark structure, ARIA annotations, and full `prefers-reduced-motion` compliance.

---

## 🛠️ Architecture & Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Strict typing with verbatim module syntax)
- **Bundler**: [Vite](https://vite.dev/) (Rapid HMR, tree-shaken static production bundle with gzip footprint under 150kB)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a bespoke ink, parchment, and paint color token system
- **Motion & Physics**: [Framer Motion](https://www.framer.com/motion/) for responsive topological node mapping and drawer modals
- **Icons & Graphics**: [Lucide React](https://lucide.dev/) + bespoke hand-crafted SVG stroke illustrations
- **Typography**: Google Fonts CDN (`Instrument Serif`, `Fraunces`, `Plus Jakarta Sans`, `Caveat`, `JetBrains Mono`)

---

## 🗂️ Project Structure

```text
satiricalguru.github.io/
├── .github/workflows/
│   └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Custom ink monogram favicon
│   ├── robots.txt              # Search engine discovery configuration
│   └── sitemap.xml             # Canonical sitemap metadata
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Frosted glass floating navigation with scroll compaction
│   │   ├── Hero.tsx            # Editorial headline & interactive SVG systems diagram
│   │   ├── ProjectShowcase.tsx # Asymmetrical editorial flagship projects gallery
│   │   ├── ProjectArt.tsx      # Bespoke hand-drawn / architectural artwork for projects
│   │   ├── ProjectModal.tsx    # Technical architectural dossier modal
│   │   ├── Lab.tsx             # 12 pinned sketchbook experiments with category filters
│   │   ├── EngineeringMap.tsx  # Interactive systems topology diagram (zero progress bars)
│   │   ├── AboutNotebook.tsx   # Architect's notebook ledger & engineering principles
│   │   ├── GitHubTelemetry.tsx # 49-repository index with search & language filters
│   │   ├── ContactSection.tsx  # Signed painting dispatch card with verified socials
│   │   ├── Footer.tsx          # Minimal colophon with back-to-top trigger
│   │   ├── CustomCursor.tsx    # Magnetic desktop ink-tip cursor (touch-disabled)
│   │   ├── IntroAnimation.tsx  # 1.2s ink signature splash (one-time per session)
│   │   ├── Doodles.tsx         # SVG hand-drawn arrows, stars, brackets, stamps
│   │   └── Icons.tsx           # Standalone brand SVG icons (GitHub, Twitter, LinkedIn)
│   ├── data/
│   │   ├── github.json         # Real-time metadata for all 49 repositories
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

Zero placeholder text or fabricated metrics. Every project showcases real open-source architectures authored by [@satiricalguru](https://github.com/satiricalguru):

| Project | Domain | Architecture & Highlights |
| :--- | :--- | :--- |
| **Vantage** | Native macOS / Swift | High-performance desktop dynamic wallpaper engine streaming 4K video directly to `kCGDesktopWindowLevel` with sub-1% CPU consumption. |
| **Forge** | Developer Tool / IDE | Sovereign local AI coding environment forked from VS Code. Strips telemetry and connects directly to Ollama / llama.cpp. |
| **Project Beatrice** | Real-Time Audio DSP | 10ms low-latency neural voice conversion pipeline combining PyTorch models with native macOS CoreAudio / VST3 drivers. |
| **SynthID-Remover** | Forensic Security | Client-side 2D Discrete Cosine Transform (DCT) tool that strips Google SynthID imperceptible watermarks without image degradation. |
| **Wraith** | Autonomous Agents | Static/dynamic binary analysis supervisor driving Ghidra and LLMs through an 11-signal verification parity loop. |
| **AgriNode** | IoT / Edge Robotics | Automated hydroponic micro-station firmware orchestrating ESP32 sensors, nutrient dosing, and low-power telemetry. |
| **Jarvis** | Voice Agent | Real-time offline vocal assistant executing local system commands via Whisper speech recognition and llama.cpp. |
| **Fast-Jev-Agents** | Distributed Agents | High-throughput async agentic message bus handling structured JSON tasks with deterministic state machines. |

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

### 3. Production Build & Linting
```bash
# Type check and build static artifacts to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🔄 How GitHub Project Data Works

1. **Static Build-Time Compilation**:
   The telemetry section reads from `src/data/github.json`, keeping initial page loads instantaneous with zero unauthenticated client-side GitHub rate-limit errors.
2. **Editing or Adding Projects**:
   - To add or modify featured engineering dossiers, edit `src/data/projects.ts`. Each project entry requires the problem statement, engineering approach, technical highlights, architecture diagram flow, and source repository URL.
   - To refresh repository stars, forks, or language breakdown, execute `npm run build` or update `src/data/github.json`.

---

## 🌐 Deployment to GitHub Pages

This portfolio deploys automatically via GitHub Actions:
1. Every push to the `main` branch triggers `.github/workflows/deploy.yml`.
2. The workflow performs a clean `npm ci`, compiles TypeScript via `tsc -b`, and builds optimized web assets via Vite.
3. Assets are uploaded and published to GitHub Pages at **[https://satiricalguru.github.io/](https://satiricalguru.github.io/)**.

---

## 📜 Credits & License

- Designed and engineered with extreme care by **Jatin Pandey** ([@satiricalguru](https://github.com/satiricalguru)).
- Fonts by [Google Fonts](https://fonts.google.com/) (`Instrument Serif` by Rodrigo Fuenzalida & Jordan Runge; `Fraunces` by Undercase Type; `Plus Jakarta Sans` by Tokotype; `Caveat` by Impallari Type; `JetBrains Mono` by JetBrains).
- Open-sourced under the [MIT License](LICENSE).
