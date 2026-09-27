import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Terminal, Radio, Shield, Layers, Sparkles, Eye, EyeOff } from 'lucide-react';
import { getGitHubStats } from '../data/projects';

export const Hero: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<number>(0);
  const [clearSkyMode, setClearSkyMode] = useState<boolean>(false);
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
      status: 'Daemon Active',
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
      status: '2.7ms IO Latency',
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
      status: 'ProMotion 120Hz',
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
      status: '43.1 dB PSNR',
    },
  ];

  const current = domains[activeDomain];

  return (
    <section id="hero" className="relative min-h-[96vh] lg:min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* MASTER ARTWORK BACKGROUND CANVAS */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/art/hero_canvas.jpg"
          alt="Celestial Observatory and Systems Blueprint by satiricalguru"
          className="w-full h-full object-cover object-center filter saturate-[1.12] contrast-[1.04] scale-[1.02]"
        />

        {/* Ambient Watercolor & Dark Sky Contrast Gradients */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
            clearSkyMode
              ? 'bg-ink-black/20'
              : 'bg-gradient-to-r from-ink-black/95 via-ink-black/85 to-ink-black/45 lg:to-ink-black/25'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-parchment-base via-ink-black/20 to-ink-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 paper-grain opacity-20 pointer-events-none mix-blend-overlay" />
      </div>

      {/* Engineering sheet reference watermark */}
      <div className="absolute top-24 left-6 md:left-12 font-mono text-[10px] text-amber-200/60 select-none tracking-widest hidden sm:block z-10">
        [OBSERVATORY OF SYSTEMS // 2026] · CELESTIAL BLUEPRINT & SOVEREIGN ARCHITECTURE
      </div>

      {/* Clear Sky Toggle on Top Right */}
      <div className="absolute top-24 right-6 md:right-12 z-20">
        <button
          type="button"
          onClick={() => setClearSkyMode(!clearSkyMode)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-parchment-light/90 text-[11px] font-mono backdrop-blur-md transition-all shadow-sm"
          title="Toggle clear background artwork view"
        >
          {clearSkyMode ? <EyeOff className="w-3.5 h-3.5 text-amber-300" /> : <Eye className="w-3.5 h-3.5 text-amber-300" />}
          <span className="hidden sm:inline">{clearSkyMode ? 'Show Interface' : 'Examine Celestial Canvas'}</span>
        </button>
      </div>

      <div
        className={`max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 transition-opacity duration-500 ${
          clearSkyMode ? 'opacity-20 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Left Column: Regal Editorial Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-300 font-mono text-[11px] font-bold tracking-widest uppercase backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-amber-300" />
              SYSTEMS ARCHITECT & CREATIVE ENGINEER
            </span>
          </div>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-parchment-light font-normal leading-[1.03] tracking-tight"
          >
            I turn strange ideas into{' '}
            <span className="relative inline-block italic font-serif text-amber-200">
              working software
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-amber-400/25 -rotate-1 rounded-sm -z-10" />
            </span>
            .
          </motion.h1>

          {/* Personal Grounded Description */}
          <p className="text-base sm:text-lg text-slate-200 max-w-xl font-normal leading-relaxed font-sans">
            Building local-first developer tools, native macOS desktop utilities, and low-latency audio pipelines with a relentless commitment to privacy, responsiveness, and sovereign execution.
          </p>

          {/* Call to Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="#works"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-ink-black font-semibold tracking-wide shadow-lg shadow-amber-950/30 transition-all duration-300 group"
            >
              <span>Inspect Flagship Works</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#lab"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/15 text-parchment-light font-medium tracking-wide backdrop-blur-md transition-all shadow-sm"
            >
              <span>The Laboratory</span>
              <span className="text-amber-300 font-medium">🧪 12 experiments</span>
            </a>
          </div>

          {/* Live Telemetry Counter */}
          <div className="pt-3 flex flex-wrap items-center gap-4 text-slate-300 text-xs font-mono">
            <span className="text-parchment-light font-bold">{stats.totalRepos} Public Repositories</span>
            <span className="text-white/20">|</span>
            <span className="text-amber-200">{stats.totalStars} Stars</span>
            <span className="text-white/20">|</span>
            <span className="text-emerald-400 font-medium">● Sovereign Local Execution</span>
          </div>
        </div>

        {/* Right Column: Floating Interactive Observatory Console */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="w-full max-w-lg glass-panel-dark p-5 sm:p-6 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl space-y-4 text-parchment-light">
            
            {/* Console Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-parchment-light tracking-wider uppercase">
                  Observatory HUD
                </span>
              </div>
              <span className="font-mono text-[10px] text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-300/20">
                FIG. 2026 // CELESTIAL
              </span>
            </div>

            {/* Quick Domain Switchers */}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Select Domain to Inspect
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
                      className={`flex items-center gap-2 p-2 rounded-xl border text-left transition-all duration-200 ${
                        isSelected
                          ? 'bg-white/15 border-amber-300/60 shadow-sm ring-1 ring-amber-300/30 text-white'
                          : 'bg-black/30 border-white/10 hover:border-white/25 text-slate-300'
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: d.color }}
                      >
                        <Icon className="w-3 h-3" />
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-mono text-xs font-bold truncate">{d.title}</span>
                        <span className="font-mono text-[10px] text-slate-400">{d.project}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Telemetry Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-2xl bg-black/40 border border-white/15 space-y-2 text-left"
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
                    <span className="font-mono text-[10px] text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {current.tag}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400">
                    {current.status}
                  </span>
                </div>

                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  {current.telemetry}
                </p>

                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>Stack: {current.metrics}</span>
                  <span className="text-emerald-400">● Verified Pipeline</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footnote instruction */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
              <span>Astrolabe coordinates aligned</span>
              <a href="#works" className="text-amber-300 hover:underline flex items-center gap-1">
                Explore Dossiers ➔
              </a>
            </div>

            {/* Corner Crosshairs */}
            <div className="absolute top-2 left-2 font-mono text-[8px] text-white/30 select-none">⌜</div>
            <div className="absolute top-2 right-2 font-mono text-[8px] text-white/30 select-none">⌝</div>
            <div className="absolute bottom-2 left-2 font-mono text-[8px] text-white/30 select-none">⌞</div>
            <div className="absolute bottom-2 right-2 font-mono text-[8px] text-white/30 select-none">⌟</div>
          </div>
        </div>
      </div>
    </section>
  );
};
