import React from 'react';
import { motion } from 'framer-motion';

export const ProjectArt: React.FC<{ id: string; accentColor?: string }> = ({ id, accentColor: _accentColor }) => {
  switch (id) {
    case 'vantage':
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-6 bg-parchment-base/80 overflow-hidden rounded-2xl">
          {/* Subtle paper noise */}
          <div className="absolute inset-0 paper-grain opacity-40" />

          {/* Desktop Frame Mockup */}
          <div className="relative w-full max-w-[340px] aspect-[16/10] bg-parchment-card rounded-xl border border-ink-deep/20 shadow-sketch p-3 flex flex-col justify-between overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-2 border-b border-ink-deep/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-paint-orange/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-paint-ochre/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-paint-green/70" />
              </div>
              <span className="font-mono text-[9px] text-ink-faint">kCGDesktopWindowLevel · 60fps</span>
            </div>

            {/* Generative Wallpaper Visual */}
            <div className="relative flex-1 my-2 rounded-lg bg-paint-blue/15 border border-paint-blue/30 overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full stroke-paint-blue/70 fill-none" viewBox="0 0 200 100">
                <path d="M 0 50 Q 50 10 100 50 T 200 50" strokeWidth="2" />
                <path d="M 0 65 Q 50 25 100 65 T 200 65" strokeWidth="1.2" opacity="0.6" />
                <path d="M 0 80 Q 50 40 100 80 T 200 80" strokeWidth="1" opacity="0.4" />
                <circle cx="100" cy="40" r="14" fill="#C85A32" opacity="0.8" />
              </svg>

              {/* Glass Metadata HUD Overlay */}
              <div className="absolute bottom-2 left-2 right-2 glass-panel p-1.5 rounded-md flex justify-between items-center text-[8px] font-mono text-ink-deep">
                <span>Display: ProMotion 120Hz</span>
                <span className="text-paint-green font-bold">GPU: 0.8%</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[8px] font-mono text-ink-faint">
              <span>Apple Silicon Native</span>
              <span>Lock-Screen Sync: Active</span>
            </div>
          </div>
        </div>
      );

    case 'forge':
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-6 bg-parchment-base/80 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 paper-grain opacity-40" />

          {/* IDE Window with Telemetry Guard */}
          <div className="relative w-full max-w-[340px] aspect-[16/10] bg-ink-black rounded-xl border border-ink-deep/30 shadow-sketch p-3 flex flex-col justify-between text-parchment-light">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-paint-orange">TELEMETRY_STRIPPED [OFFLINE]</span>
            </div>

            {/* Code & Local Model Stream */}
            <div className="my-2 p-2.5 rounded-lg bg-white/5 font-mono text-[9px] text-zinc-300 space-y-1">
              <p className="text-paint-orange">// Model endpoint: localhost:11434 (Ollama)</p>
              <p className="text-emerald-400">const context = await forge.assembleContext();</p>
              <p className="text-zinc-400">streamResponse(prompt, &#123; temperature: 0.2 &#125;);</p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-[8px] text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Local Token Stream · 42 tok/s
              </div>
            </div>

            <div className="flex justify-between items-center text-[8px] font-mono text-zinc-500">
              <span>Open VSX Extensions</span>
              <span>100% Private</span>
            </div>
          </div>
        </div>
      );

    case 'beatrice-voicechanger':
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-6 bg-parchment-base/80 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 paper-grain opacity-40" />

          {/* VST3 Audio Rack Interface */}
          <div className="relative w-full max-w-[340px] aspect-[16/10] bg-parchment-card rounded-xl border border-ink-deep/20 shadow-sketch p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-ink-deep/10 text-[9px] font-mono text-ink-deep font-bold">
              <span>BEATRICE_DSP · VST3 CONTAINER</span>
              <span className="text-paint-green">LATENCY: 9.8ms</span>
            </div>

            {/* Live Audio Oscilloscope */}
            <div className="relative my-2 h-16 rounded-lg bg-paint-green/10 border border-paint-green/30 flex items-center justify-center px-2">
              <svg className="w-full h-full stroke-paint-green fill-none" viewBox="0 0 200 60">
                <path
                  d="M 0 30 Q 20 10 40 30 T 80 30 T 120 5 T 140 50 T 170 20 T 200 30"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute top-1.5 right-2 font-mono text-[8px] text-paint-green font-bold">
                JVS Speaker Morph: Active
              </span>
            </div>

            {/* Dials & Routing Pills */}
            <div className="grid grid-cols-3 gap-2 text-center font-mono text-[8px]">
              <div className="p-1 rounded bg-parchment-light border border-ink-deep/10">
                <span className="text-ink-faint block">Buffer</span>
                <span className="font-bold text-ink-deep">128 samples</span>
              </div>
              <div className="p-1 rounded bg-parchment-light border border-ink-deep/10">
                <span className="text-ink-faint block">Engine</span>
                <span className="font-bold text-paint-green">Metal / DirectML</span>
              </div>
              <div className="p-1 rounded bg-parchment-light border border-ink-deep/10">
                <span className="text-ink-faint block">Formant</span>
                <span className="font-bold text-ink-deep">+1.2 st</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'synthid-remover':
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-6 bg-parchment-base/80 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 paper-grain opacity-40" />

          {/* 2D DCT Steganography Analyzer */}
          <div className="relative w-full max-w-[340px] aspect-[16/10] bg-parchment-card rounded-xl border border-ink-deep/20 shadow-sketch p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-ink-deep/10 text-[9px] font-mono text-ink-deep">
              <span className="font-bold text-paint-ochre">2D DCT SIGNAL FILTER</span>
              <span>WASM_ACCELERATED</span>
            </div>

            {/* Frequency Heatmap Matrix */}
            <div className="my-2 p-2 rounded-lg bg-paint-ochre/10 border border-paint-ochre/30 flex items-center justify-around">
              <div className="text-center font-mono text-[8px]">
                <div className="w-16 h-12 bg-amber-200/50 rounded border border-amber-500/30 flex items-center justify-center font-hand text-amber-900">
                  SynthID watermarked
                </div>
                <span className="text-ink-faint mt-1 block">Input Stream</span>
              </div>

              <span className="font-mono text-xs text-paint-ochre font-bold">➔ [2D DCT] ➔</span>

              <div className="text-center font-mono text-[8px]">
                <div className="w-16 h-12 bg-emerald-200/50 rounded border border-emerald-500/30 flex items-center justify-center font-hand text-emerald-900 font-bold">
                  Zero Watermark
                </div>
                <span className="text-emerald-700 font-bold mt-1 block">Scrubbed (0 loss)</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[8px] font-mono text-ink-faint">
              <span>C2PA Manifest: Purged</span>
              <span>100% Client-Side In-Memory</span>
            </div>
          </div>
        </div>
      );

    case 'wraith':
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-6 bg-parchment-base/80 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 paper-grain opacity-40" />

          {/* Reverse Engineering Control-Flow Graph */}
          <div className="relative w-full max-w-[340px] aspect-[16/10] bg-ink-black rounded-xl border border-ink-deep/30 shadow-sketch p-3 flex flex-col justify-between text-parchment-light">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
              <span className="text-paint-wine font-bold">GHIDRA · DUAL-AGENT PARITY</span>
              <span className="text-zinc-400">78 TESTS PASSING</span>
            </div>

            {/* CFG Tree Diagram */}
            <div className="relative my-2 p-2 rounded-lg bg-white/5 font-mono text-[8px] flex items-center justify-center">
              <svg className="w-48 h-16 stroke-zinc-400 fill-none" viewBox="0 0 200 70">
                <rect x="75" y="5" width="50" height="18" rx="3" fill="#8E3345" stroke="#fff" strokeWidth="1" />
                <text x="100" y="17" fill="#fff" fontSize="8" textAnchor="middle" fontFamily="monospace">ENTRY_0x4010</text>
                <path d="M 100 23 L 60 45 M 100 23 L 140 45" strokeWidth="1.2" />
                <rect x="35" y="45" width="50" height="18" rx="3" fill="#1f2937" stroke="#4b5563" strokeWidth="1" />
                <text x="60" y="57" fill="#9ca3af" fontSize="8" textAnchor="middle" fontFamily="monospace">VERIFY_PARITY</text>
                <rect x="115" y="45" width="50" height="18" rx="3" fill="#1f2937" stroke="#4b5563" strokeWidth="1" />
                <text x="140" y="57" fill="#9ca3af" fontSize="8" textAnchor="middle" fontFamily="monospace">CHECKER_LOOP</text>
              </svg>
            </div>

            <div className="flex justify-between items-center text-[8px] font-mono text-zinc-400">
              <span>Model Context Protocol (MCP)</span>
              <span className="text-emerald-400">11 Signals Grounded</span>
            </div>
          </div>
        </div>
      );

    case 'jarvis':
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-6 bg-parchment-base/80 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 paper-grain opacity-40" />

          {/* Three.js Holographic Hologram */}
          <div className="relative w-full max-w-[340px] aspect-[16/10] bg-parchment-card rounded-xl border border-ink-deep/20 shadow-sketch p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-ink-deep/10 text-[9px] font-mono text-ink-deep font-bold">
              <span>HOLOGRAPHIC THREE.JS BUTLER</span>
              <span className="text-paint-teal">SOCKET.IO ACTIVE</span>
            </div>

            {/* Glowing Holographic Orb */}
            <div className="relative my-2 flex-1 rounded-lg bg-paint-teal/15 border border-paint-teal/30 flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.08, 1], rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 rounded-full border-2 border-dashed border-paint-teal flex items-center justify-center"
              >
                <div className="w-10 h-10 rounded-full bg-paint-teal/40 border border-paint-teal flex items-center justify-center font-mono text-[8px] font-bold text-ink-deep">
                  AI
                </div>
              </motion.div>
              <div className="absolute bottom-1 font-mono text-[8px] text-paint-teal font-semibold">
                Mic Input: 44.1kHz · Voice Synthesis: Edge-TTS
              </div>
            </div>

            <div className="flex justify-between items-center text-[8px] font-mono text-ink-faint">
              <span>macOS Scripting Bridge</span>
              <span>Persistent Markdown Memory</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center p-6 bg-parchment-base/80 overflow-hidden rounded-2xl">
          <div className="relative w-full max-w-[340px] aspect-[16/10] bg-parchment-card rounded-xl border border-ink-deep/20 shadow-sketch p-4 flex flex-col justify-between">
            <div className="font-mono text-[10px] text-ink-faint">ENGINEERING SPECIFICATION</div>
            <div className="font-hand text-2xl text-paint-orange font-bold text-center">
              Production Architecture
            </div>
            <div className="font-mono text-[9px] text-ink-muted text-center">
              Tested · Shipped · Open-Source
            </div>
          </div>
        </div>
      );
  }
};
