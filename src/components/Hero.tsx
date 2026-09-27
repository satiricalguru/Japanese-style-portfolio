import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TechBracket, HandStar } from './Doodles';
import { ArrowDown, Terminal, Cpu, Radio, Shield, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: 'local-ai',
      label: 'Local LLMs',
      sub: 'Forge · 0 Telemetry',
      x: '18%',
      y: '22%',
      color: '#C85A32',
      icon: Terminal,
      detail: 'Ollama & llama.cpp context routing in local VS Code fork'
    },
    {
      id: 'audio-dsp',
      label: 'Audio DSP',
      sub: 'Beatrice · 10ms',
      x: '75%',
      y: '18%',
      color: '#2D5D44',
      icon: Radio,
      detail: 'Real-time neural voice conversion & VST3 sound pipelines'
    },
    {
      id: 'macos-native',
      label: 'Native macOS',
      sub: 'Vantage · Desktop Hooks',
      x: '80%',
      y: '72%',
      color: '#2B5898',
      icon: Layers,
      detail: 'kCGDesktopWindowLevel streaming 4K wallpaper engine'
    },
    {
      id: 'agents',
      label: 'Autonomous Agents',
      sub: 'Wraith · 11-Signal Parity',
      x: '15%',
      y: '78%',
      color: '#8E3345',
      icon: Cpu,
      detail: 'Objective verification & Ghidra decompilation loops'
    },
    {
      id: 'security',
      label: 'Forensic Privacy',
      sub: 'SynthID Stripper',
      x: '48%',
      y: '88%',
      color: '#C98A2C',
      icon: Shield,
      detail: 'Client-side 2D DCT frequency watermark scrubber'
    },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Watercolor Washes */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-paint-orange/10 watercolor-wash" />
      <div className="absolute top-1/3 right-1/10 w-[30rem] h-[30rem] bg-paint-blue/10 watercolor-wash" />
      <div className="absolute bottom-1/12 left-1/3 w-80 h-80 bg-paint-green/8 watercolor-wash" />

      {/* Subtle Engineer Sheet Margin Reference */}
      <div className="absolute top-28 left-6 md:left-12 font-mono text-[10px] text-ink-faint/60 select-none tracking-widest hidden sm:block">
        [DOC_REF: JP-2026-ENG-001] · LAT: 28.6139° N · LON: 77.2090° E
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Editorial Narrative Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Handwritten Annotation Callout */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="font-hand text-xl md:text-2xl text-paint-orange rotate-[-2deg] font-semibold tracking-wide">
              notebook of an independent systems & ai engineer
            </span>
            <HandStar className="w-5 h-5 text-paint-ochre animate-pulse" />
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-ink-black font-normal leading-[1.04] tracking-tight"
          >
            I turn strange ideas into{' '}
            <span className="relative inline-block italic font-serif">
              working software
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-paint-orange/25 -rotate-1 rounded-sm -z-10" />
            </span>
            .
          </motion.h1>

          {/* Research-Derived Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base sm:text-lg text-ink-muted max-w-xl font-normal leading-relaxed"
          >
            Designing high-performance native macOS engines, local-first AI IDEs, real-time 10ms DSP audio pipelines, and autonomous binary analysis agents — built with uncompromising privacy and zero cloud telemetry.
          </motion.p>

          {/* Call to Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono"
          >
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
              <span className="font-hand text-sm text-paint-wine group-hover:rotate-6 transition-transform">🧪 12 items</span>
            </a>
          </motion.div>

          {/* Quick Technical Coordinates Stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-4 flex items-center gap-4 text-ink-faint text-xs font-mono border-t border-ink-deep/10 w-full max-w-lg"
          >
            <TechBracket text="FOCUS: LOCAL AI · DSP · MACOS" />
            <span className="text-ink-border">|</span>
            <span className="font-hand text-sm text-ink-muted">145+ public stars · 49 repos</span>
          </motion.div>
        </div>

        {/* Right Column: Hand-Drawn Engineering Schematic Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Outer Sketchbook Container */}
          <div className="relative w-full aspect-square max-w-[480px] p-6 rounded-3xl bg-parchment-card/60 border border-ink-deep/15 shadow-paper backdrop-blur-sm notebook-grid overflow-hidden group">
            
            {/* Stamp & Technical Headers */}
            <div className="flex justify-between items-center pb-3 border-b border-ink-deep/10 text-[10px] font-mono text-ink-faint">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-paint-orange/80 animate-ping inline-block" />
                SYSTEM_TOPOLOGY_v2.6
              </span>
              <span>FIGURE A.1</span>
            </div>

            {/* Hand-Drawn Connecting Circuit Paths SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-ink-deep/25 fill-none stroke-[1.4]" strokeDasharray="3 3">
              {/* Lines from center hub to nodes */}
              <path d="M 240 240 Q 140 160 90 120" />
              <path d="M 240 240 Q 340 150 360 100" />
              <path d="M 240 240 Q 360 300 370 330" />
              <path d="M 240 240 Q 140 330 90 350" />
              <path d="M 240 240 Q 240 360 240 395" />
            </svg>

            {/* Central Engineering Core / Strange Machine Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="w-24 h-24 rounded-full border-2 border-dashed border-paint-orange/40 flex items-center justify-center bg-parchment-light shadow-sketch"
              >
                <div className="w-16 h-16 rounded-full border border-ink-deep/20 bg-parchment-base flex flex-col items-center justify-center p-2 text-center">
                  <span className="font-mono text-[9px] font-bold text-ink-black tracking-widest leading-none">CORE</span>
                  <span className="font-hand text-xs text-paint-orange font-bold leading-tight">orchestrator</span>
                </div>
              </motion.div>
              <span className="font-mono text-[9px] text-ink-faint mt-1 bg-parchment-light/90 px-2 py-0.5 rounded border border-ink-deep/10">
                satiricalguru / engine
              </span>
            </div>

            {/* Interactive Domain Nodes */}
            {nodes.map((node) => {
              const Icon = node.icon;
              const isHovered = activeNode === node.id;

              return (
                <motion.div
                  key={node.id}
                  style={{ top: node.y, left: node.x }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  whileHover={{ scale: 1.08 }}
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-300 shadow-sm ${
                      isHovered
                        ? 'bg-parchment-light border-ink-black shadow-sketch-lg scale-105'
                        : 'bg-parchment-light/90 border-ink-deep/15 hover:border-ink-deep/40'
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
                      <span className="font-hand text-[11px] text-ink-faint leading-none">
                        {node.sub}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Active Node Detail Drawer on hover */}
            <div className="absolute bottom-3 left-4 right-4 z-40 bg-parchment-light/95 backdrop-blur-md p-2.5 rounded-xl border border-ink-deep/15 shadow-sm text-left transition-opacity duration-300">
              <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted">
                <span className="font-bold text-paint-orange uppercase">
                  {activeNode ? nodes.find((n) => n.id === activeNode)?.label : 'System Diagram Explorer'}
                </span>
                <span className="text-ink-faint">HOVER TO EXAMINE</span>
              </div>
              <p className="text-xs text-ink-deep font-sans mt-0.5">
                {activeNode
                  ? nodes.find((n) => n.id === activeNode)?.detail
                  : 'An ecosystem of native desktop apps, real-time DSP audio pipelines, and local AI agent architectures.'}
              </p>
            </div>

            {/* Hand-drawn corner note */}
            <div className="absolute top-10 right-4 font-hand text-sm text-paint-wine rotate-3 hidden sm:block">
              no cloud dependencies ➔
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
