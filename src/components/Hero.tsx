import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Terminal, Radio, Shield, Layers, Sparkles } from 'lucide-react';
import { getGitHubStats } from '../data/projects';

export const Hero: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<number>(0);
  const stats = getGitHubStats();

  const domains = [
    {
      id: 'local-ide',
      title: 'Local AI IDE',
      project: 'Forge',
      tag: 'Air-Gapped LLM',
      icon: Terminal,
      color: '#C85A32',
      telemetry: 'Connected to Ollama (127.0.0.1:11434) · Zero outbound cloud telemetry',
      metrics: 'Localhost SSE · 8k Context Builder',
    },
    {
      id: 'audio-dsp',
      title: 'Real-Time Audio DSP',
      project: 'Project Beatrice',
      tag: 'CoreAudio / VST3',
      icon: Radio,
      color: '#2D5D44',
      telemetry: 'CoreAudio circular frame buffer (128 samples @ 48kHz) · Low-latency monitoring',
      metrics: 'PyTorch MPS GPU · F0 Pitch Tracker',
    },
    {
      id: 'macos-native',
      title: 'Native macOS Engine',
      project: 'Vantage',
      tag: 'Desktop Compositor',
      icon: Layers,
      color: '#2B5898',
      telemetry: 'Direct kCGDesktopWindowLevel hook beneath desktop icons · ProMotion 120Hz sync',
      metrics: 'AVFoundation · Auto-pause in fullscreen',
    },
    {
      id: 'forensics',
      title: 'Frequency Forensics',
      project: 'SynthID-Remover',
      tag: 'Signal Decomposition',
      icon: Shield,
      color: '#C98A2C',
      telemetry: '2D Discrete Cosine Transform (DCT) 8×8 block frequency attenuation',
      metrics: 'PSNR: 43.1 dB · Perceptually lossless',
    },
  ];

  const current = domains[activeDomain];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient Watercolor Atmosphere */}
      <div className="absolute top-1/4 left-1/12 w-[32rem] h-[32rem] bg-paint-orange/10 rounded-full watercolor-wash pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-[36rem] h-[36rem] bg-paint-blue/10 rounded-full watercolor-wash pointer-events-none" />
      <div className="absolute bottom-1/12 left-1/3 w-[28rem] h-[28rem] bg-paint-green/8 rounded-full watercolor-wash pointer-events-none" />

      {/* Engineering sheet reference */}
      <div className="absolute top-28 left-6 md:left-12 font-mono text-[10px] text-ink-faint select-none tracking-widest hidden sm:block">
        [PORTFOLIO // 2026] · SOVEREIGN CODE & DIGITAL CRAFTSMANSHIP
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        
        {/* Left Column: Regal Editorial Narrative */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-paint-orange font-bold">
              SYSTEMS ARCHITECT & CREATIVE ENGINEER
            </span>
          </div>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-ink-black font-normal leading-[1.03] tracking-tight"
          >
            I turn strange ideas into{' '}
            <span className="relative inline-block italic font-serif">
              working software
              <span className="absolute -bottom-2 left-0 right-0 h-3.5 bg-paint-orange/25 -rotate-1 rounded-sm -z-10" />
            </span>
            .
          </motion.h1>

          {/* Personal Grounded Description */}
          <p className="text-base sm:text-lg text-ink-muted max-w-xl font-normal leading-relaxed">
            Building local-first developer tools, native macOS desktop utilities, and low-latency audio pipelines with a relentless commitment to privacy, responsiveness, and sovereign execution.
          </p>

          {/* Call to Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="#works"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-ink-black text-parchment-light font-medium tracking-wide shadow-sketch hover:bg-paint-orange transition-all duration-300 group"
            >
              <span>Inspect Flagship Works</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#lab"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-ink-deep/20 bg-parchment-card hover:bg-parchment-light text-ink-deep font-medium tracking-wide transition-all shadow-sm group"
            >
              <span>The Laboratory</span>
              <span className="text-paint-wine font-medium">🧪 12 experiments</span>
            </a>
          </div>

          {/* Domain Quick Selectors */}
          <div className="pt-4 border-t border-ink-deep/10 w-full max-w-lg space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-ink-faint tracking-wider block">
              Core Engineering Focus · Select to Inspect
            </span>
            <div className="grid grid-cols-2 gap-2">
              {domains.map((d, index) => {
                const Icon = d.icon;
                const isSelected = activeDomain === index;
                return (
                  <button
                    type="button"
                    key={d.id}
                    onClick={() => setActiveDomain(index)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all duration-200 ${
                      isSelected
                        ? 'bg-parchment-light border-ink-black shadow-sm ring-1 ring-ink-black/10'
                        : 'bg-parchment-card/60 border-ink-deep/10 hover:border-ink-deep/25'
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: d.color }}
                    >
                      <Icon className="w-3 h-3" />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="font-mono text-xs font-bold text-ink-black truncate">{d.title}</span>
                      <span className="font-mono text-[10px] text-ink-faint">{d.project}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Telemetry Counter */}
          <div className="pt-2 flex items-center gap-4 text-ink-faint text-xs font-mono">
            <span className="text-ink-deep font-bold">{stats.totalRepos} Public Repositories</span>
            <span className="text-ink-border">|</span>
            <span>{stats.totalStars} Stars</span>
            <span className="text-ink-border">|</span>
            <span className="text-paint-orange font-medium">Sovereign Local</span>
          </div>
        </div>

        {/* Right Column: Museum-Grade Masterpiece Artwork Canvas */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          {/* Layered Physical Frame */}
          <div className="relative w-full aspect-[4/3] max-w-[560px] rounded-3xl overflow-hidden border border-ink-deep/25 shadow-paper bg-parchment-card p-3 group">
            
            {/* The Masterpiece Observatory Illustration */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-ink-deep/20 shadow-inner">
              <img
                src="/assets/art/hero_canvas.jpg"
                alt="Celestial Observatory & Astrolabe Artwork by satiricalguru"
                className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.02] transform transition-transform duration-700 group-hover:scale-103"
              />

              {/* Subtle Watercolor Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-ink-black/20 to-transparent pointer-events-none" />

              {/* Top Luxury Exhibition Badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-parchment-light/90 z-20">
                <span className="glass-panel px-3 py-1 rounded-full border border-white/20 shadow-sm flex items-center gap-1.5 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>OBSERVATORY OF SYSTEMS</span>
                </span>
                <span className="glass-panel px-3 py-1 rounded-full border border-white/20 shadow-sm backdrop-blur-md">
                  FIG. 2026 · MASTER CANVAS
                </span>
              </div>

              {/* Dynamic Interactive Telemetry HUD at the Bottom */}
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="glass-panel p-3.5 rounded-2xl border border-white/25 shadow-lg backdrop-blur-md text-parchment-light space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full animate-pulse"
                          style={{ backgroundColor: current.color }}
                        />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                          {current.title}
                        </span>
                        <span className="font-mono text-[10px] text-amber-300/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                          {current.tag}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-white/60">
                        {current.project}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-slate-200 leading-normal">
                      {current.telemetry}
                    </p>

                    <div className="pt-1 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-slate-300">
                      <span>Telemetry: {current.metrics}</span>
                      <span className="text-emerald-400">● Verified Pipeline</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Corner Crosshairs */}
            <div className="absolute top-1.5 left-1.5 font-mono text-[8px] text-ink-faint select-none">⌜</div>
            <div className="absolute top-1.5 right-1.5 font-mono text-[8px] text-ink-faint select-none">⌝</div>
            <div className="absolute bottom-1.5 left-1.5 font-mono text-[8px] text-ink-faint select-none">⌞</div>
            <div className="absolute bottom-1.5 right-1.5 font-mono text-[8px] text-ink-faint select-none">⌟</div>
          </div>
        </div>
      </div>
    </section>
  );
};
