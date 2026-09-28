import githubData from './github.json';

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
  accentColor: string;
  paintBg: string;
  githubUrl: string;
  liveUrl?: string;
  annotation: string;
  status: string;
  architectureNote: string;
}

export interface LabExperiment {
  name: string;
  category: string;
  description: string;
  tech: string[];
  url: string;
  tag: string;
  highlight: string;
  language: string;
}

export interface RepoStats {
  totalRepos: number;
  totalStars: number;
  topLanguages: string[];
}

export function getGitHubStats(): RepoStats {
  const repos = githubData as Array<{ stars: number; language: string; isFork: boolean }>;
  const original = repos.filter((r) => !r.isFork);
  const totalStars = repos.reduce((sum, r) => sum + (r.stars || 0), 0);

  const langCounts: Record<string, number> = {};
  for (const r of original) {
    if (r.language && r.language !== 'Code') {
      langCounts[r.language] = (langCounts[r.language] || 0) + 1;
    }
  }

  const topLanguages = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([lang]) => lang);

  return {
    totalRepos: repos.length,
    totalStars,
    topLanguages,
  };
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "vantage",
    number: "01",
    title: "Vantage",
    tagline: "Native dynamic video wallpaper engine for macOS",
    category: "macOS · Native Desktop Graphics",
    problem:
      "Existing live wallpaper utilities on macOS consume substantial CPU/GPU cycles, lack multi-monitor frame coordination, and fail to pause when full-screen applications or battery saver modes engage.",
    solution:
      "An AppKit and Electron desktop utility that renders animated video loops directly to kCGDesktopWindowLevel, layered beneath desktop icons. Includes an automatic workspace observer that pauses playback whenever active windows obscure the desktop or battery saver activates.",
    technicalHighlights: [
      "Direct window server hook at kCGDesktopWindowLevel beneath macOS desktop icons",
      "Workspace observer detecting full-screen applications and sleeping displays",
      "Multi-monitor display pacing supporting independent loop assignments",
      "Lightweight local stream pipeline bypassing unnecessary browser compositing layers"
    ],
    engineeringDecisions: [
      "Bypassed standard web overlay compositors in favor of native window hooks to minimize idle resource usage.",
      "Used CoreAnimation layers to handle loop playback smoothly on ProMotion displays."
    ],
    techStack: ["Swift / AppKit", "CoreGraphics", "TypeScript", "Electron", "macOS Native APIs"],
    accentColor: "#2B5898",
    paintBg: "rgba(43, 88, 152, 0.08)",
    githubUrl: "https://github.com/satiricalguru/Vantage",
    annotation: "AppKit window server integration",
    status: "Open Source Utility",
    architectureNote: "AppKit Window Server ➔ Desktop Window Level ➔ Display Sync & Auto-Pause"
  },
  {
    id: "forge",
    number: "02",
    title: "Forge",
    tagline: "Local-first coding editor connecting to on-device LLMs",
    category: "Developer Tooling · Local LLMs",
    problem:
      "Developers working with proprietary or security-sensitive codebases cannot use cloud-tethered AI coding assistants without violating data confidentiality policies or transmitting intellectual property to third parties.",
    solution:
      "A customized VS Code build configured to operate air-gapped from cloud telemetry. Routes code completion, inline edits, and agent prompts exclusively to local inference engines like Ollama and llama.cpp over localhost.",
    technicalHighlights: [
      "Telemetry-free build configuration stripping remote tracking endpoints",
      "Local model router interfacing with Ollama and llama.cpp over HTTP streaming",
      "Project context window builder chunking files for 8k-32k local context windows",
      "Zero remote outbound network requests during code generation"
    ],
    engineeringDecisions: [
      "Forked the open-source VS Code core to maintain familiar keybindings and extension compatibility while redirecting all AI calls.",
      "Implemented local streaming responses to keep perceived latency snappy even on quantized models."
    ],
    techStack: ["TypeScript", "Python", "Ollama / llama.cpp", "VS Code Core", "REST / SSE"],
    accentColor: "#C85A32",
    paintBg: "rgba(200, 90, 50, 0.08)",
    githubUrl: "https://github.com/satiricalguru/Forge",
    annotation: "Localhost AI inference router",
    status: "Active Prototype",
    architectureNote: "Editor Core ➔ Local Model Router ➔ Ollama / llama.cpp (127.0.0.1)"
  },
  {
    id: "beatrice",
    number: "03",
    title: "Project Beatrice",
    tagline: "Real-time neural voice conversion pipeline for streaming",
    category: "Audio DSP · Neural Acoustic Modeling",
    problem:
      "Traditional neural voice changers introduce perceptible acoustic delay that breaks conversational flow and disrupts live microphone monitoring during streaming and voice communication.",
    solution:
      "An experimental neural voice conversion pipeline combining deep acoustic feature models with native CoreAudio buffer management to achieve low-latency voice morphing suitable for live vocal monitoring.",
    technicalHighlights: [
      "Short-frame CoreAudio buffer management minimizing input-to-output pipeline lag",
      "F0 pitch tracking and Mel-spectrogram acoustic conversion using PyTorch",
      "Apple Silicon MPS GPU acceleration for local tensor evaluation",
      "Auxiliary VST3 plugin wrapper for DAW and streaming software integration"
    ],
    engineeringDecisions: [
      "Separated the pitch extraction thread from the neural vocoder synthesis loop to prevent buffer underruns.",
      "Tuned frame overlap-add windows to balance phase coherence against audio latency."
    ],
    techStack: ["PyTorch", "Python", "C++", "CoreAudio", "NumPy / SciPy", "VST3"],
    accentColor: "#2D5D44",
    paintBg: "rgba(45, 93, 68, 0.08)",
    githubUrl: "https://github.com/satiricalguru/Beatrice-voicechanger-mac",
    annotation: "Low-latency vocal conversion",
    status: "DSP Audio Prototype",
    architectureNote: "CoreAudio Input ➔ Pitch & Mel Extractor ➔ Neural Vocoder ➔ Low-Latency Output"
  },
  {
    id: "synthid",
    number: "04",
    title: "SynthID-Remover",
    tagline: "Frequency-domain analysis tool for synthetic watermark attenuation",
    category: "Forensics · Signal Processing",
    problem:
      "Imperceptible frequency-domain watermarks embedded in synthetic media can survive common image operations and track provenance without user transparency or inspectability.",
    solution:
      "A client-side Python CLI utility that analyzes 2D Discrete Cosine Transform (DCT) coefficient distributions to detect and attenuate synthetic watermark carrier frequencies while preserving visual image quality.",
    technicalHighlights: [
      "Block-wise 8x8 2D DCT decomposition of color channels",
      "Spectral frequency perturbation detector identifying candidate watermark bands",
      "Adaptive frequency band attenuation preserving visual contrast and edges",
      "Objective image fidelity verification using PSNR and SSIM metrics"
    ],
    engineeringDecisions: [
      "Processed luminance and chrominance planes independently to prevent color bleeding during frequency filtering.",
      "Kept the tool fully local and lightweight with standard scientific Python libraries."
    ],
    techStack: ["Python", "SciPy", "OpenCV", "NumPy", "2D DCT"],
    accentColor: "#C98A2C",
    paintBg: "rgba(201, 138, 44, 0.08)",
    githubUrl: "https://github.com/satiricalguru/SynthID-Remover",
    annotation: "Frequency-domain signal filtering",
    status: "CLI Tool · Research",
    architectureNote: "Image Input ➔ 8x8 Block DCT ➔ Band Attenuation ➔ Inverse DCT ➔ PSNR Check"
  }
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    name: "Wraith",
    category: "Security & Forensics",
    description: "Binary analysis supervisor that integrates Ghidra decompilation with local LLMs to audit machine code and identify vulnerability patterns.",
    tech: ["Python", "Ghidra", "AST Analysis"],
    url: "https://github.com/satiricalguru/Wraith",
    tag: "Binary Analysis",
    highlight: "Ghidra headless loop",
    language: "Python"
  },
  {
    name: "AgriNode",
    category: "Edge Systems",
    description: "Autonomous hydroponic micro-station firmware orchestrating ESP32 sensor telemetry, pH measurement, and automated nutrient dosing.",
    tech: ["C++", "ESP32", "FreeRTOS"],
    url: "https://github.com/satiricalguru/AgriNode",
    tag: "Firmware / IoT",
    highlight: "Autonomous dosing loop",
    language: "C++"
  },
  {
    name: "Jarvis",
    category: "Desktop AI",
    description: "Privacy-first offline vocal assistant executing local macOS terminal commands via Whisper speech recognition and local model inference.",
    tech: ["Python", "Whisper", "llama.cpp"],
    url: "https://github.com/satiricalguru/Jarvis",
    tag: "Voice Assistant",
    highlight: "Air-gapped voice control",
    language: "Python"
  },
  {
    name: "Local-Mind",
    category: "Desktop AI",
    description: "Local knowledge retrieval system running on consumer hardware with ChromaDB vector search and Ollama embeddings.",
    tech: ["Python", "LangChain", "ChromaDB"],
    url: "https://github.com/satiricalguru/Local-Mind",
    tag: "Vector Search",
    highlight: "On-device document Q&A",
    language: "Python"
  },
  {
    name: "Mac Gesture Control",
    category: "Computer Vision",
    description: "Real-time hand tracking utilizing MediaPipe and OpenCV to trigger macOS volume, window navigation, and trackpad controls via webcam.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    url: "https://github.com/satiricalguru/mac-gesture-control",
    tag: "Hand Tracking",
    highlight: "Direct macOS CGEvent hooks",
    language: "Python"
  },
  {
    name: "Beatrice Voicechanger",
    category: "Audio DSP",
    description: "Desktop GUI interface for real-time voice conversion with low-latency device routing and model selection.",
    tech: ["Python", "PyQt", "PyTorch"],
    url: "https://github.com/satiricalguru/beatrice-voicechanger",
    tag: "Audio GUI",
    highlight: "Cross-platform audio UI",
    language: "Python"
  },
  // Archive experiments (viewable on expand)
  {
    name: "Fast-Jev-Agents",
    category: "Distributed Agents",
    description: "High-throughput asynchronous message bus for coordinating multiple autonomous agents with deterministic state machines.",
    tech: ["Python", "AsyncIO", "Pydantic"],
    url: "https://github.com/satiricalguru/Fast-Jev-Agents",
    tag: "Agent Bus",
    highlight: "Deterministic task dispatch",
    language: "Python"
  },
  {
    name: "Prompt-Forge",
    category: "AI Tooling",
    description: "Benchmarking workbench for systematically evaluating LLM system prompts against edge-case datasets with latency and token tracking.",
    tech: ["TypeScript", "Node.js", "Ollama"],
    url: "https://github.com/satiricalguru",
    tag: "Evaluation",
    highlight: "Systematic prompt diffs",
    language: "TypeScript"
  },
  {
    name: "Auto-Researcher",
    category: "Automation",
    description: "Autonomous literature agent searching arXiv and PubMed, extracting methodology sections, and generating structured synthesis briefs.",
    tech: ["Python", "AsyncIO", "BeautifulSoup"],
    url: "https://github.com/satiricalguru",
    tag: "Paper Scraper",
    highlight: "Automated literature synthesis",
    language: "Python"
  },
  {
    name: "Context-Pruner",
    category: "Developer Tooling",
    description: "AST-driven code context condenser extracting minimal function interfaces and signatures to fit large codebases into limited context windows.",
    tech: ["Python", "Tree-Sitter", "AST"],
    url: "https://github.com/satiricalguru",
    tag: "AST Parsing",
    highlight: "Lossless context reduction",
    language: "Python"
  },
  {
    name: "Screen-Whisper",
    category: "Computer Vision",
    description: "Background OCR tool capturing designated screen regions on hotkey and formatting extracted text into clean terminal clipboard pipelines.",
    tech: ["Swift", "Apple Vision", "macOS API"],
    url: "https://github.com/satiricalguru",
    tag: "OCR Utility",
    highlight: "Instant screen-to-text",
    language: "Swift"
  },
  {
    name: "Dev-Telemetry-Blocker",
    category: "Security & Forensics",
    description: "Local firewall filter rules and DNS profiles targeting development tool analytics, keeping developer telemetry local.",
    tech: ["Shell", "DNSMasq", "pfctl"],
    url: "https://github.com/satiricalguru",
    tag: "Network Privacy",
    highlight: "Kernel-level pf rules",
    language: "Shell"
  }
];
