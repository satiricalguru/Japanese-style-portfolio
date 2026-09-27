import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal, Cpu, Radio, Shield, Layers } from 'lucide-react';
import { getGitHubStats } from '../data/projects';

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>('local-ai');
  const stats = getGitHubStats();

  const nodes = [
    {
      id: 'local-ai',
      label: 'Local LLMs',
      sub: 'Forge · Localhost',
      x: '18%',
      y: '22%',
      color: '#C85A32',
      icon: Terminal,
      detail: 'Ollama & llama.cpp context routing in an air-gapped VS Code build'
    },
    {
      id: 'audio-dsp',
      label: 'Audio DSP',
      sub: 'Beatrice · Low Latency',
      x: '75%',
      y: '18%',
      color: '#2D5D44',
      icon: Radio,
      detail: 'Real-time neural voice conversion & CoreAudio frame buffer pipelines'
    },
    {
      id: 'macos-native',
      label: 'Native macOS',
      sub: 'Vantage · AppKit',
      x: '80%',
      y: '72%',
      color: '#2B5898',
      icon: Layers,
      detail: 'kCGDesktopWindowLevel streaming video wallpaper engine'
    },
    {
      id: 'agents',
      label: 'Binary Analysis',
      sub: 'Wraith · Ghidra',
      x: '15%',
      y: '78%',
      color: '#8E3345',
      icon: Cpu,
      detail: 'Headless Ghidra decompilation loops and LLM code auditing'
    },
    {
      id: 'security',
      label: 'Signal Forensics',
      sub: 'SynthID Remover',
      x: '48%',
      y: '88%',
      color: '#C98A2C',
      icon: Shield,
      detail: '2D Discrete Cosine Transform frequency watermark attenuation'
    },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Watercolor Washes */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-paint-orange/10 watercolor-wash" />
      <div className="absolute top-1/3 right-1/10 w-[30rem] h-[30rem] bg-paint-blue/10 watercolor-wash" />
      <div className="absolute bottom-1/12 left-1/3 w-80 h-80 bg-paint-green/8 watercolor-wash" />

      {/* Subtle Engineer Sheet Margin Reference */}
      <div className="absolute top-28 left-6 md:left-12 font-mono text-[10px] text-ink-faint select-none tracking-wider hidden sm:block">
        [BUILD: 2026] · LOCAL-FIRST SYSTEMS & CREATIVE CODE
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Editorial Narrative Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Eyebrow Callout */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-paint-orange font-bold">
              SYSTEMS ARCHITECTURE & EXPERIMENTAL SOFTWARE
            </span>
          </div>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] text-ink-black font-normal leading-[1.05] tracking-tight"
          >
            I turn strange ideas into{' '}
            <span className="relative inline-block italic font-serif">
              working software
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-paint-orange/25 -rotate-1 rounded-sm -z-10" />
            </span>
            .
          </motion.h1>

          {/* Research-Derived Description */}
          <p className="text-base sm:text-lg text-ink-muted max-w-xl font-normal leading-relaxed">
            Building local-first developer tools, native macOS desktop utilities, and low-latency audio pipelines with a focus on privacy, responsiveness, and sovereign execution.
          </p>

          {/* Call to Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="#works"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-ink-black text-parchment-light font-medium tracking-wide shadow-sketch hover:bg-paint-orange transition-all duration-300 group"
            >
              <span>Inspect Selected Works</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#lab"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-ink-deep/20 bg-parchment-card hover:bg-parchment-light text-ink-deep font-medium tracking-wide transition-all shadow-sm group"
            >
              <span>The Lab & Experiments</span>
              <span className="text-paint-wine font-medium">🧪 12 items</span>
            </a>
          </div>

          {/* Dynamic Technical Coordinates Stamp */}
          <div className="pt-4 flex items-center gap-4 text-ink-faint text-xs font-mono border-t border-ink-deep/10 w-full max-w-lg">
            <span className="text-ink-deep font-medium">FOCUS: LOCAL AI · DSP · MACOS</span>
            <span className="text-ink-border">|</span>
            <span className="text-ink-muted">{stats.totalStars} public stars · {stats.totalRepos} repositories</span>
          </div>
        </div>

        {/* Right Column: Hand-Drawn Engineering Schematic Diagram */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Outer Sketchbook Container */}
          <div className="relative w-full aspect-square max-w-[480px] p-6 rounded-3xl bg-parchment-card/70 border border-ink-deep/15 shadow-paper backdrop-blur-sm notebook-grid overflow-hidden group">
            
            {/* Stamp & Technical Headers */}
            <div className="flex justify-between items-center pb-3 border-b border-ink-deep/10 text-[10px] font-mono text-ink-faint">
              <span className="flex items-center gap-1.5 font-bold text-ink-deep">
                <span className="w-2 h-2 rounded-full bg-paint-orange animate-pulse inline-block" />
                SYSTEM MAP
              </span>
              <span>CLICK TO EXAMINE</span>
            </div>

            {/* Hand-Drawn Connecting Circuit Paths SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-ink-deep/25 fill-none stroke-[1.4]" strokeDasharray="3 3">
              <path d="M 240 240 Q 140 160 90 120" />
              <path d="M 240 240 Q 340 150 360 100" />
              <path d="M 240 240 Q 360 300 370 330" />
              <path d="M 240 240 Q 140 330 90 350" />
              <path d="M 240 240 Q 240 360 240 395" />
            </svg>

            {/* Central Engineering Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-none">
              <div className="w-22 h-22 rounded-full border-2 border-dashed border-paint-orange/40 flex items-center justify-center bg-parchment-light shadow-sketch">
                <div className="w-15 h-15 rounded-full border border-ink-deep/20 bg-parchment-base flex flex-col items-center justify-center p-2 text-center">
                  <span className="font-mono text-[9px] font-bold text-ink-black tracking-widest leading-none">CORE</span>
                  <span className="font-mono text-[10px] text-paint-orange font-bold leading-tight mt-0.5">engine</span>
                </div>
              </div>
              <span className="font-mono text-[9px] text-ink-faint mt-1 bg-parchment-light/90 px-2 py-0.5 rounded border border-ink-deep/10">
                satiricalguru
              </span>
            </div>

            {/* Accessible Interactive Domain Nodes */}
            {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = activeNode === node.id;

              return (
                <button
                  type="button"
                  key={node.id}
                  style={{ top: node.y, left: node.x }}
                  onClick={() => setActiveNode(node.id)}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onFocus={() => setActiveNode(node.id)}
                  aria-pressed={isSelected}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-200 outline-none rounded-xl focus-visible:ring-2 focus-visible:ring-paint-orange`}
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-200 shadow-sm ${
                      isSelected
                        ? 'bg-parchment-light border-ink-black shadow-sketch-lg scale-105 ring-1 ring-ink-black/10'
                        : 'bg-parchment-light/90 border-ink-deep/15 hover:border-ink-deep/40 hover:scale-102'
                    }`}
                  >
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center text-parchment-light"
                      style={{ backgroundColor: node.color }}
                    >
                      <Icon className="w-3 h-3" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-mono text-[10px] font-bold text-ink-deep leading-tight">
                        {node.label}
                      </span>
                      <span className="font-mono text-[9px] text-ink-faint leading-none">
                        {node.sub}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Active Node Detail Drawer */}
            <div className="absolute bottom-3 left-4 right-4 z-40 bg-parchment-light/95 backdrop-blur-md p-3 rounded-xl border border-ink-deep/15 shadow-sm text-left transition-all duration-200">
              <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted">
                <span className="font-bold text-paint-orange uppercase">
                  {nodes.find((n) => n.id === activeNode)?.label || 'System Node'}
                </span>
                <span className="text-ink-faint">ACTIVE INSPECTION</span>
              </div>
              <p className="text-xs text-ink-deep font-sans mt-1 leading-normal">
                {nodes.find((n) => n.id === activeNode)?.detail ||
                  'Select any node to view architecture and implementation details.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
