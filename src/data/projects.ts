export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  technicalHighlights: string[];
  engineeringDecisions: string[];
  techStack: string[];
  accentColor: string; // Hex for borders/indicators
  paintBg: string; // Tailwind class or color
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  annotation: string;
  status: string;
  architectureNote: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "vantage",
    number: "01",
    title: "Vantage",
    tagline: "Ultra-Performance Native Live & Video Wallpaper Engine for macOS",
    category: "Native Systems · macOS · Desktop Graphics",
    problem:
      "Existing macOS live wallpaper utilities suffer from high CPU/GPU overhead, drain MacBook battery life, lack native lock-screen synchronization, and stall during multi-monitor workspace switching.",
    solution:
      "A zero-compromise native wallpaper engine engineered directly against macOS Desktop window levels (`kCGDesktopWindowLevel`). Supports streaming 4K loops, interactive particle physics, and ambient screen saver modes with near-zero energy consumption.",
    technicalHighlights: [
      "Direct CoreGraphics & AppKit window server hook at Desktop Level (`kCGDesktopWindowLevel`)",
      "Isolated main-process network boundary to quarantine external stream ingestion",
      "Dynamic display reconnect detection with per-monitor frame pacing and sleep lock states",
      "Integrated lightweight particle physics sandbox with Metal acceleration"
    ],
    engineeringDecisions: [
      "Bypassed standard web-view overlays in favor of native window hooks to eliminate compositor latency.",
      "Engineered an automatic pause listener when full-screen applications or battery saving triggers activate."
    ],
    techStack: ["TypeScript", "Electron", "Swift / AppKit", "CoreGraphics", "Tailwind CSS", "macOS Native APIs"],
    accentColor: "#2B5898",
    paintBg: "rgba(43, 88, 152, 0.08)",
    githubUrl: "https://github.com/satiricalguru/Vantage",
    stars: 6,
    annotation: "fig. 01 — direct kCGDesktopWindowLevel hook",
    status: "Production v1.0.0",
    architectureNote: "AppKit Window Server Hook ➔ Compositor Bypass ➔ Multi-Monitor Metal Pacing"
  },
  {
    id: "forge",
    number: "02",
    title: "Forge",
    tagline: "The Local-First, Privacy-Respecting AI IDE for Offline LLMs",
    category: "Developer Tooling · Local LLMs · IDE Architecture",
    problem:
      "Developers working with proprietary or security-sensitive codebases cannot use cloud-tethered AI coding assistants without violating enterprise data policies or risking code leakage.",
    solution:
      "An offline-first, telemetry-stripped AI code editor forked from VS Code and the Void editor architecture. Purpose-built for offline local inference with Ollama, LM Studio, llama.cpp, and vLLM with full Open VSX marketplace support.",
    technicalHighlights: [
      "Complete surgical removal of Microsoft telemetry, analytics beacons, and cloud data collectors",
      "Unified local OpenAI-compatible endpoint router with streaming SSE response handling",
      "Client-side AST and semantic token indexing without sending code embeddings to third parties",
      "Drop-in compatibility with Open VSX for thousands of developer extensions"
    ],
    engineeringDecisions: [
      "Forked the core VS Code Electron lifecycle to introduce a local-first model registry with latency fallbacks.",
      "Optimized context assembly to fit 8k–32k context windows typical of local quantized models (GGUF/AWQ)."
    ],
    techStack: ["TypeScript", "Electron", "VS Code Core", "Ollama", "llama.cpp", "Open VSX", "Node.js"],
    accentColor: "#C85A32",
    paintBg: "rgba(200, 90, 50, 0.08)",
    githubUrl: "https://github.com/satiricalguru/Forge",
    stars: 4,
    annotation: "fig. 02 — 0 telemetry, 100% offline context",
    status: "Active Development",
    architectureNote: "VS Code Core ➔ Telemetry Scrub ➔ Local Inference Router (Ollama/llama.cpp)"
  },
  {
    id: "beatrice-voicechanger",
    number: "03",
    title: "Project Beatrice",
    tagline: "Real-Time AI Voice Conversion Engine with 10ms Latency on Apple Silicon",
    category: "Real-Time Audio DSP · Neural Voice AI · VST3",
    problem:
      "Neural voice conversion typically introduces 250ms–500ms audio latency, creating jarring echoes, speech disfluency, and desynchronization in live gaming, Discord, and streaming environments.",
    solution:
      "A cross-platform real-time voice changer delivering ~10ms round-trip latency on Apple Silicon via Metal and DirectML GPU acceleration on Windows. Integrates a custom Beatrice DSP VST3 engine with JVS speaker embeddings.",
    technicalHighlights: [
      "Engineered low-buffer audio circular queue with Spotify Pedalboard DSP pipeline",
      "Hardware-accelerated inference across Apple Silicon (Metal Performance Shaders) and Windows (DirectML)",
      "Real-time speaker morphing with pitch transposition, formant shifting, and noise gate gating",
      "Custom VST3 plugin container for native DAW routing and live monitoring"
    ],
    engineeringDecisions: [
      "Decoupled the UI renderer from the audio processing thread using high-priority IPC to prevent buffer under-runs.",
      "Employed 8-bit quantized speaker embeddings to drastically lower memory bandwidth during real-time streaming."
    ],
    techStack: ["Python", "PyTorch", "C++", "VST3", "Spotify Pedalboard", "DirectML / Metal", "Electron"],
    accentColor: "#2D5D44",
    paintBg: "rgba(45, 93, 68, 0.08)",
    githubUrl: "https://github.com/satiricalguru/Beatrice-voicechanger-windows",
    stars: 22,
    annotation: "fig. 03 — 10ms buffer, zero perceptible delay",
    status: "Shipped v2.0 Releases",
    architectureNote: "Audio Mic In ➔ Circular DSP Buffer ➔ Beatrice Neural Model (Metal/DirectML) ➔ DAW Audio Out"
  },
  {
    id: "synthid-remover",
    number: "04",
    title: "SynthID & C2PA Remover",
    tagline: "100% Local AI Watermark, Provenance & SynthID Signal Stripper",
    category: "Security & Privacy · Forensic Signal Processing · WebAssembly",
    problem:
      "Generative AI platforms embed imperceptible frequency-domain watermarks (such as Google SynthID) and cryptographic tracking envelopes (C2PA) that persist across social uploads and track creators.",
    solution:
      "A browser-native, zero-cloud forensic scrubber that purges frequency watermarks, scrubs C2PA metadata manifests, and eliminates steganographic tracking artifacts while preserving visual fidelity.",
    technicalHighlights: [
      "2D Discrete Cosine Transform (DCT) & Fast Fourier Transform (FFT) high-frequency perturbation",
      "Complete binary container parsing to excise C2PA, EXIF, and steganographic marker payloads",
      "Parallelized Web Worker pipeline with WebAssembly acceleration for instantaneous client processing",
      "No server roundtrips — 100% private, on-device media scrubbing"
    ],
    engineeringDecisions: [
      "Fine-tuned the frequency threshold perturbation to remain strictly below the human Just Noticeable Difference (JND).",
      "Constructed entirely as a static client application to ensure zero user media leaves their device."
    ],
    techStack: ["TypeScript", "WebAssembly", "HTML5 Canvas API", "Web Workers", "Cryptographic Parsing"],
    accentColor: "#C98A2C",
    paintBg: "rgba(201, 138, 44, 0.08)",
    githubUrl: "https://github.com/satiricalguru/Synthid-remover",
    liveUrl: "https://satiricalguru.github.io/Synthid-remover/",
    stars: 9,
    annotation: "fig. 04 — client-side 2D DCT signal scrubber",
    status: "Live Deployed",
    architectureNote: "Image Input ➔ 2D DCT Analysis ➔ Frequency Perturbation ➔ C2PA Strip ➔ Clean Canvas"
  },
  {
    id: "wraith",
    number: "05",
    title: "Wraith",
    tagline: "Grounding-First Autonomous AI Reverse-Engineering Co-Pilot",
    category: "Binary Analysis · Reverse Engineering · Multi-Agent Loops",
    problem:
      "AI decompilation tools speculate and hallucinate, introducing invalid register operations, fictitious symbol names, and inverted control flow that corrupt binary security audits.",
    solution:
      "A grounding-first autonomous co-pilot for Ghidra and Cutter. Built around an 11-signal binary parity engine, persistent binary knowledge graph, and dual-agent reverser/checker loop verified across 78 test suites.",
    technicalHighlights: [
      "Dual-agent adversarial loop: Reverser generates hypotheses while Objective Verifier enforces symbol bounds",
      "11-signal binary parity engine comparing control-flow graphs, call depth, memory references, and stack frames",
      "Persistent graph database capturing binary cross-references and recovered types",
      "Model Context Protocol (MCP) server integration for seamless interaction with IDE agents"
    ],
    engineeringDecisions: [
      "Mandated that every decompilation suggestion must pass mathematical parity validation against Ghidra's AST.",
      "Implemented composite cache isolation so concurrent function evaluations never taint shared analysis state."
    ],
    techStack: ["Python", "Ghidra API", "Cutter", "MCP (Model Context Protocol)", "Graph Theory", "LLM Loops"],
    accentColor: "#8E3345",
    paintBg: "rgba(142, 51, 69, 0.08)",
    githubUrl: "https://github.com/satiricalguru/Wraith",
    stars: 2,
    annotation: "fig. 05 — 11-signal mathematical binary parity",
    status: "Core Engine Verified",
    architectureNote: "Binary File ➔ Ghidra Headless ➔ Knowledge Graph ➔ Dual-Agent Parity Engine (Reverser/Checker)"
  },
  {
    id: "jarvis",
    number: "06",
    title: "Jarvis & Personal Assistant",
    tagline: "Voice-Driven Sci-Fi Butler with Holographic 3D Three.js Interface",
    category: "Spatial UI · Voice AI · System Automation",
    problem:
      "Most voice assistants are rigid conversational chatbots lacking spatial visual presence, native system orchestration capabilities, and persistent contextual memory.",
    solution:
      "A futuristic desktop companion inspired by J.A.R.V.I.S. Features an interactive 3D holographic Three.js interface, ultra-low latency voice synthesis via Edge-TTS & voice cloning, persistent markdown memory, and automated macOS tool execution.",
    technicalHighlights: [
      "Dynamic 3D particle sphere and reactive shader uniforms driven by real-time audio microphone input",
      "Multi-provider LLM adapter supporting Groq, Ollama, Claude, and GPT with streaming Socket.IO",
      "Autonomous desktop action engine executing shell scripts, window management, and application controls",
      "Local markdown memory store maintaining contextual awareness across restarts"
    ],
    engineeringDecisions: [
      "Engineered real-time Web Audio API frequency analysis to modulate shader vertex displacement in Three.js.",
      "Used WebSocket event multiplexing to maintain simultaneous audio streaming, TTS playback, and tool feedback."
    ],
    techStack: ["React 19", "Three.js", "FastAPI", "Python", "Socket.IO", "Edge-TTS", "macOS Automation"],
    accentColor: "#3B7577",
    paintBg: "rgba(59, 117, 119, 0.08)",
    githubUrl: "https://github.com/satiricalguru/Jarvis",
    stars: 11,
    annotation: "fig. 06 — audio-reactive shader + system bridge",
    status: "Shipped",
    architectureNote: "Mic Voice In ➔ Fast-Whisper ➔ Multi-LLM Memory ➔ Edge-TTS ➔ Three.js Hologram"
  },
  {
    id: "agrinode",
    number: "07",
    title: "AgriNode",
    tagline: "Multimodal Voice-First Agricultural Intelligence for BRICS Communities",
    category: "Applied AI · Multimodal Vision · Social Impact",
    problem:
      "Smallholder farmers struggle with crop pathology, climate variability, and soil health due to inaccessible text-heavy interfaces, language barriers, and spotty rural connectivity.",
    solution:
      "A voice-first agricultural intelligence platform combining real-time crop disease diagnosis via computer vision, weather-aware agronomy advisories, and regional voice assistance across BRICS languages.",
    technicalHighlights: [
      "Client-optimized multimodal image diagnosis identifying fungal, bacterial, and pest blights",
      "Regional voice synthesis and recognition calibrated for rural dialects and acoustic environments",
      "Weather-aware agro-climate advisory pipeline synthesizing local micro-climate forecast telemetry",
      "Offline-first PWA caching allowing field diagnostics without active cellular reception"
    ],
    engineeringDecisions: [
      "Implemented extreme image compression before inference to ensure diagnoses succeed over 2G/3G connections.",
      "Designed a voice-led tactile UI minimizing text input so farmers can operate the system entirely hands-free."
    ],
    techStack: ["Next.js", "TypeScript", "Computer Vision", "Voice AI", "Tailwind CSS", "PWA"],
    accentColor: "#2D5D44",
    paintBg: "rgba(45, 93, 68, 0.08)",
    githubUrl: "https://github.com/satiricalguru/AgriNode",
    liveUrl: "https://satiricalguru.github.io/AgriNode/",
    stars: 4,
    annotation: "fig. 07 — voice-first rural diagnostics",
    status: "Live Deployed",
    architectureNote: "Leaf Camera Snap ➔ CV Disease Classifier ➔ Regional Voice Generator ➔ Agronomy Guidance"
  },
  {
    id: "fast-jev-agents",
    number: "08",
    title: "Fast Jev Agents & Agent Skills",
    tagline: "Verbatim Context Compaction & 184+ Production Autonomous Agent Skills",
    category: "Agent Infrastructure · Context Optimization · MCP",
    problem:
      "Autonomous coding agents operating in massive codebases quickly exhaust context limits. Standard LLM summarization drops critical compiler line numbers, syntax tokens, and user constraints.",
    solution:
      "A high-performance verbatim context compaction engine that mathematically shrinks token payloads while preserving 100% of exact error traces and syntax bounds, combined with 184+ autonomous agent skills.",
    technicalHighlights: [
      "Lossless AST-guided compaction preserving exact compiler diagnostic spans and source anchors",
      "Verbatim code chunk deduplication with sub-millisecond execution times in Node.js and TypeScript",
      "Standardized Model Context Protocol (MCP) skill architecture compatible with Claude, Codex, and Gemini",
      "Published npm package and curated open-source agent persona repositories"
    ],
    engineeringDecisions: [
      "Replaced naive LLM recursive summarization with deterministic AST token boundary reduction.",
      "Designed backward-compatible skill schema with YAML frontmatter and strict runtime validation."
    ],
    techStack: ["TypeScript", "Node.js", "Python", "MCP Framework", "AST Tokenizers", "npm"],
    accentColor: "#2B5898",
    paintBg: "rgba(43, 88, 152, 0.08)",
    githubUrl: "https://github.com/satiricalguru/Fast-Jev-Agents",
    stars: 8,
    annotation: "fig. 08 — lossless AST token pruning",
    status: "npm Package Released",
    architectureNote: "Full Repo Context ➔ AST Token Pruning ➔ Exact Error Pinning ➔ Compact Agent Payload"
  }
];

export interface LabExperiment {
  name: string;
  category: string;
  description: string;
  stars: number;
  language: string;
  url: string;
  tag: string;
  highlight: string;
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    name: "Mac-gesture-control",
    category: "Computer Vision",
    description: "Touchless pointer, click, drag, and scroll control for macOS using on-device computer vision and hand tracking.",
    stars: 1,
    language: "Python",
    url: "https://github.com/satiricalguru/Mac-gesture-control",
    tag: "CV · macOS",
    highlight: "Zero-hardware gesture navigation"
  },
  {
    name: "Teardown",
    category: "AI & Design",
    description: "Frontend Design DNA Extractor — Hybrid CV + LLM pipeline extracting structured design systems, 2D FFT signatures, and layout metrics from UI screenshots.",
    stars: 2,
    language: "Python",
    url: "https://github.com/satiricalguru/Teardown",
    tag: "CV · Design DNA",
    highlight: "FFT frequency texture analysis"
  },
  {
    name: "Verdict",
    category: "AI Benchmarking",
    description: "The Open-Source AI Benchmark Platform evaluating 100+ LLMs on live web apps, agentic code, and blind arena matches.",
    stars: 3,
    language: "TypeScript",
    url: "https://github.com/satiricalguru/Verdict",
    tag: "LLM Arena",
    highlight: "100+ model live coding arena"
  },
  {
    name: "Local-Mind",
    category: "Desktop AI",
    description: "Private offline desktop companion for running local LLMs, Whisper speech-to-text, TTS voice synthesis, and image generation 100% locally.",
    stars: 4,
    language: "TypeScript",
    url: "https://github.com/satiricalguru/Local-Mind",
    tag: "Local AI · Electron",
    highlight: "Complete offline companion"
  },
  {
    name: "Contour",
    category: "Creative Desktop",
    description: "Generative 4K Wallpaper Studio crafted for macOS, iOS, and iPadOS built with Next.js 16 and React 19.",
    stars: 3,
    language: "TypeScript",
    url: "https://github.com/satiricalguru/Contour",
    tag: "Generative Art",
    highlight: "Procedural 4K canvases"
  },
  {
    name: "Kiln",
    category: "Asset Pipeline",
    description: "Privacy-first local-AI asset forge and universal multi-format file converter for macOS and Windows with zero cloud processing.",
    stars: 2,
    language: "TypeScript",
    url: "https://github.com/satiricalguru/Kiln",
    tag: "Local Forge",
    highlight: "Universal local converter"
  },
  {
    name: "Pocket-Music",
    category: "Audio Player",
    description: "Pixel-accurate Spotify-style desktop music player with yt-dlp downloading, ID3 metadata auto-tagging, and Discord Rich Presence.",
    stars: 4,
    language: "TypeScript",
    url: "https://github.com/satiricalguru/Pocket-Music",
    tag: "Desktop Audio",
    highlight: "Local Spotify reproduction"
  },
  {
    name: "RVC-Voicechanger",
    category: "Audio DSP",
    description: "Real-time AI voice changer desktop application powered by Retrieval-based Voice Conversion (RVC) and Spotify Pedalboard DSP.",
    stars: 11,
    language: "TypeScript",
    url: "https://github.com/satiricalguru/RVC-Voicechanger",
    tag: "RVC · DSP",
    highlight: "Spotify Pedalboard routing"
  },
  {
    name: "DriveVault",
    category: "Security & Forensics",
    description: "Client-side Google Drive forensic and privacy auditing tool inspecting appDataFolder behavior directly in the browser.",
    stars: 4,
    language: "HTML",
    url: "https://github.com/satiricalguru/DriveVault",
    tag: "Drive Forensics",
    highlight: "Client-side audit sandbox"
  },
  {
    name: "ScrollTap",
    category: "Browser Extension",
    description: "High-precision auto-scroll engine and multi-point auto-tapper Chrome extension for productivity and automation.",
    stars: 2,
    language: "JavaScript",
    url: "https://github.com/satiricalguru/ScrollTap",
    tag: "Automation",
    highlight: "Micro-second click timing"
  },
  {
    name: "Airfare-CPI",
    category: "Data & Economics",
    description: "Real-time Airfare Consumer Price Index platform for MoSPI computing Jevons micro-indices with Gemini RAG copilot.",
    stars: 2,
    language: "JavaScript",
    url: "https://github.com/satiricalguru/Airfare-CPI",
    tag: "Economics AI",
    highlight: "Jevons index calculator"
  },
  {
    name: "EarPods-ANC-Adapter",
    category: "Hardware & Audio",
    description: "Inline USB-C Active Noise Cancellation (ANC) adapter engineering package for Apple EarPods.",
    stars: 2,
    language: "C",
    url: "https://github.com/satiricalguru/EarPods-ANC-Adapter",
    tag: "Embedded · ANC",
    highlight: "Hardware ANC package"
  }
];
