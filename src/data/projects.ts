import githubData from './github.json';

export interface Repo {
  name: string;
  description: string;
  language: string;
  topics: string[];
  stars: number;
  forks: number;
  url: string;
  homepage: string;
  updatedAt: string;
  isFork: boolean;
}

export interface Work {
  id: string;
  kanji: string;
  title: string;
  tagline: string;
  domain: string;
  year: string;
  summary: string;
  points: string[];
  stack: string[];
  repo: string;
  live?: string;
}

/** Live sites that differ from (or are missing in) the repo's GitHub homepage field. */
const LIVE_OVERRIDES: Record<string, string> = {
  'Nexus-Web-Page': 'https://nexus-official-site.vercel.app/',
};

/** Canonical repositories that live outside this profile (e.g. an organisation). */
const REPO_OVERRIDES: Record<string, string> = {
  'Nexus-Web-Page': 'https://github.com/Nexus-Web-Development/Nexus-Web-Page',
};

export const repos = (githubData as Repo[])
  .filter((r) => !r.isFork)
  .map((r) => ({ ...r, url: REPO_OVERRIDES[r.name] ?? r.url }));

export function liveUrl(r: Repo): string | undefined {
  const url = LIVE_OVERRIDES[r.name] ?? r.homepage;
  return url && !url.includes('github.com') ? url : undefined;
}

const starsOf = (name: string) => repos.find((r) => r.name === name)?.stars ?? 0;

export const WORKS: Work[] = [
  {
    id: 'beatrice',
    kanji: '声',
    title: 'Beatrice',
    tagline: 'Real-time AI voice conversion at ~10 ms on Apple Silicon',
    domain: 'Audio DSP · Neural voice',
    year: '2026',
    summary:
      'A desktop voice changer for macOS and Windows built around the Beatrice DSP VST3 engine. An Electron shell drives a Python audio backend, so speech is converted and monitored live with almost no delay, ready for streaming, games and calls.',
    points: [
      'Runs the audio pipeline at 16 kHz with about 10 ms of delay',
      'More than 112 built-in voices, plus custom voice models',
      'Sends the converted voice through BlackHole or VB-Cable into Discord, Zoom and OBS',
    ],
    stack: ['Python', 'Electron', 'VST3 / ctypes', 'JavaScript'],
    repo: 'https://github.com/satiricalguru/Beatrice-voicechanger-mac',
  },
  {
    id: 'synthid',
    kanji: '痕',
    title: 'SynthID Remover',
    tagline: 'Strip AI watermarks and content credentials, fully on-device',
    domain: 'Signal forensics · Privacy',
    year: '2026',
    summary:
      'A local tool that inspects and removes AI provenance from images: C2PA content credentials, metadata, and the hidden frequency-domain patterns that invisible watermarks like SynthID rely on. Nothing is uploaded.',
    points: [
      'Disrupts hidden frequency-domain watermarks with Lanczos-3 resampling and fine dithering',
      'Wipes EXIF, XMP, ICC profiles and C2PA credentials added by ChatGPT, Midjourney and Gemini',
      'Runs 100% locally, so no image ever leaves the machine',
    ],
    stack: ['TypeScript', 'DCT', 'Image processing'],
    repo: 'https://github.com/satiricalguru/Synthid-remover',
  },
  {
    id: 'vantage',
    kanji: '景',
    title: 'Vantage',
    tagline: 'A high-performance live-wallpaper app for macOS',
    domain: 'macOS · Graphics',
    year: '2026',
    summary:
      'Free, high-performance animated wallpapers for macOS. Video, particle and AI-animated wallpapers play beneath the desktop icons, a power manager pauses them when nobody can see them, and a native screen saver extends the effect to idle time.',
    points: [
      'Plays wallpapers behind the desktop icons, run by a system service in the Electron main process',
      'Generative particle engine with light fields that respond to the cursor',
      'Native .saver screen saver built on ScreenSaverView and AVFoundation',
    ],
    stack: ['Electron', 'React', 'TypeScript', 'AVFoundation'],
    repo: 'https://github.com/satiricalguru/Vantage',
  },
  {
    id: 'forge',
    kanji: '鍛',
    title: 'Forge',
    tagline: 'A private, offline AI code editor forked from VS Code',
    domain: 'Developer tools · Local LLMs',
    year: '2026',
    summary:
      'A VS Code fork with telemetry removed. Every completion, edit and agent request goes to models on your own machine (Ollama, LM Studio, vLLM or any local OpenAI-compatible server), and extensions come from Open VSX.',
    points: [
      'Finds local providers automatically (Ollama, llama.cpp and others) and shows their connection status live',
      'A built-in network guard blocks requests to public internet addresses',
      'Streams chat and fill-in-the-middle autocomplete from models on your machine',
    ],
    stack: ['TypeScript', 'VS Code core', 'React', 'Ollama', 'llama.cpp'],
    repo: 'https://github.com/satiricalguru/Forge',
  },
  {
    id: 'jarvis',
    kanji: '執',
    title: 'Jarvis',
    tagline: 'A voice-driven AI assistant with a holographic interface',
    domain: 'AI agents · macOS automation',
    year: '2026',
    summary:
      'A sci-fi desktop assistant with a holographic React and Three.js interface and a FastAPI backend. It speaks with cloned voices, holds conversations and automates actions on macOS.',
    points: [
      'WebGL holographic core that reacts to the microphone as you speak',
      'Falls back through several LLM providers (Groq, Mistral, OpenRouter) down to local Ollama',
      'Carries out native macOS actions on request',
    ],
    stack: ['Python', 'FastAPI', 'React', 'Three.js', 'Edge-TTS'],
    repo: 'https://github.com/satiricalguru/Jarvis',
  },
  {
    id: 'openbot',
    kanji: '群',
    title: 'OpenBot',
    tagline: 'Open-source AI teammates, each with its own computer',
    domain: 'Agents · Local AI',
    year: '2026',
    summary:
      'A desktop app where each AI teammate gets its own workspace with a terminal, a browser and files, plus an AI that understands video. It runs locally through Ollama, or on any model you bring.',
    points: [
      'A live Computer panel lets you watch what each bot is doing and read its activity log',
      'On macOS, commands run in a Seatbelt sandbox that can only write inside the bot\'s own workspace',
      'Works with any model: Ollama by default, or Groq and Gemini',
    ],
    stack: ['JavaScript', 'Electron', 'Ollama', 'ffmpeg'],
    repo: 'https://github.com/satiricalguru/OpenBot',
  },
];

export const workStars = (w: Work) => starsOf(w.repo.split('/').pop() ?? '');

export const DISCIPLINES = [
  {
    kanji: '機',
    title: 'Native & desktop',
    body: 'SwiftUI and AppKit for macOS, Electron and Rust when an app needs to run everywhere. Software that feels at home on the system.',
    tools: ['Swift', 'SwiftUI', 'AppKit', 'Electron', 'Rust', 'React'],
  },
  {
    kanji: '智',
    title: 'Local AI & agents',
    body: 'Private assistants, agent tooling and LLM benchmarks that run on your own hardware, with no data leaving the machine.',
    tools: ['Ollama', 'llama.cpp', 'vLLM', 'MCP', 'RAG', 'PyTorch'],
  },
  {
    kanji: '響',
    title: 'Real-time audio',
    body: 'Neural voice conversion and DSP chains fast enough that live conversation never stutters.',
    tools: ['RVC', 'VST3', 'CoreAudio', 'Pedalboard', 'NumPy'],
  },
  {
    kanji: '破',
    title: 'Security & reversing',
    body: 'CTFs, binary analysis with Ghidra, and forensic tools that show what software is really doing under the hood.',
    tools: ['Ghidra', 'Cutter', 'Python', 'C', 'Chrome extensions'],
  },
];

export const SOCIALS = [
  { label: 'GitHub', handle: '@satiricalguru', url: 'https://github.com/satiricalguru' },
  { label: 'X / Twitter', handle: '@JayDevSG', url: 'https://x.com/JayDevSG' },
  { label: 'LinkedIn', handle: 'Jatin Pandey', url: 'https://linkedin.com/in/jatin-pandey-66328141a' },
];

export const EMAIL = 'jatinjio1212@gmail.com';

export function stats() {
  const totalStars = repos.reduce((s, r) => s + r.stars, 0);
  const langs = new Set(repos.map((r) => r.language).filter((l) => l && l !== 'Code'));
  return { repos: repos.length, stars: totalStars, languages: langs.size };
}
