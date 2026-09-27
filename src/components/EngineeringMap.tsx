import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Radio, Layers, ShieldCheck } from 'lucide-react';
import { getGitHubStats } from '../data/projects';

interface Pillar {
  id: string;
  name: string;
  badge: string;
  color: string;
  icon: React.ElementType;
  techs: string[];
  architectureFocus: string;
  shippedProjects: string[];
  rationale: string;
}

export const EngineeringMap: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('ai-agents');
  const stats = getGitHubStats();

  const pillars: Pillar[] = [
    {
      id: 'ai-agents',
      name: 'Local Machine Learning & Tooling',
      badge: 'Domain 01 · Localhost Inference',
      color: '#C85A32',
      icon: Cpu,
      techs: ['Python', 'PyTorch', 'Ollama', 'llama.cpp', 'REST / SSE', 'Token Context Chunking'],
      architectureFocus:
        'Context compaction, local streaming response handling, and zero outbound network telemetry',
      shippedProjects: ['Forge', 'Wraith', 'Fast-Jev-Agents', 'Local-Mind'],
      rationale:
        'Building on-device inference runners gives developers complete data confidentiality, reproducible execution, and reliable offline capabilities without cloud dependencies.'
    },
    {
      id: 'audio-dsp',
      name: 'Real-Time DSP & Neural Audio',
      badge: 'Domain 02 · Low-Latency Signal Processing',
      color: '#2D5D44',
      icon: Radio,
      techs: ['C++', 'CoreAudio', 'PyTorch', 'NumPy / SciPy', 'VST3 Plugin SDK'],
      architectureFocus:
        'Sub-frame CoreAudio circular queues, pitch estimation, and local tensor evaluation on Apple Silicon',
      shippedProjects: ['Project Beatrice', 'Beatrice Voicechanger', 'EarPods-ANC'],
      rationale:
        'In interactive audio, latency is the critical constraint. Managing buffer sizes directly in native audio threads keeps voice conversion responsive enough for live vocal monitoring.'
    },
    {
      id: 'native-systems',
      name: 'Native Systems & Desktop Graphics',
      badge: 'Domain 03 · Native Compositing',
      color: '#2B5898',
      icon: Layers,
      techs: ['Swift / AppKit', 'CoreGraphics', 'AVFoundation', 'TypeScript', 'Electron'],
      architectureFocus:
        'kCGDesktopWindowLevel window server integration, multi-monitor display link pacing, and auto-pause handlers',
      shippedProjects: ['Vantage', 'Jarvis', 'Mac Gesture Control'],
      rationale:
        'Bypassing generic browser compositing in favor of native window hooks allows high-framerate rendering directly on the desktop canvas while conserving laptop battery life.'
    },
    {
      id: 'security-forensics',
      name: 'Signal Forensics & Reverse Engineering',
      badge: 'Domain 04 · Client-Side Analysis',
      color: '#C98A2C',
      icon: ShieldCheck,
      techs: ['2D Discrete Cosine Transform (DCT)', 'OpenCV', 'SciPy', 'Ghidra API', 'AST Parsing'],
      architectureFocus:
        'Frequency band perturbation detection, adaptive spectral filtering, and binary disassembly auditing',
      shippedProjects: ['SynthID-Remover', 'Wraith', 'Dev-Telemetry-Blocker'],
      rationale:
        'Applying mathematical signal transformations in the frequency domain allows detecting and filtering invisible watermarks while maintaining perceptual fidelity.'
    }
  ];

  const current = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section id="architecture" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-ink-deep/15">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-paint-blue font-bold">
              03 / ARCHITECTURE & PROFICIENCY MAP
            </span>
            <span className="font-mono text-xs text-ink-faint">· systems topology</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-black font-normal tracking-tight">
            Engineering Skill & Systems Map
          </h2>
          <p className="text-sm sm:text-base text-ink-muted max-w-2xl font-normal leading-relaxed">
            Technologies mapped as an interconnected blueprint based on actual code across {stats.totalRepos} repositories.
          </p>
        </div>

        <div className="mt-4 md:mt-0 font-mono text-xs text-paint-blue flex items-center gap-1.5">
          <span>Click any domain to inspect architecture</span>
          <span>➔</span>
        </div>
      </div>

      {/* Blueprint Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Pillar Selectors */}
        <div className="lg:col-span-5 space-y-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = pillar.id === activePillar;

            return (
              <button
                type="button"
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-paint-blue ${
                  isSelected
                    ? 'bg-parchment-light border-ink-black shadow-sketch-lg'
                    : 'bg-parchment-card/70 border-ink-deep/15 hover:border-ink-deep/30 shadow-sm'
                }`}
              >
                {/* Active Indicator Strip */}
                {isSelected && (
                  <motion.div
                    layoutId="pillarActiveBar"
                    className="absolute left-0 top-0 bottom-0 w-1.5"
                    style={{ backgroundColor: pillar.color }}
                  />
                )}

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-parchment-light shrink-0"
                    style={{ backgroundColor: pillar.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-ink-faint uppercase font-bold tracking-wider block">
                      {pillar.badge}
                    </span>
                    <h3 className="font-serif text-xl text-ink-black font-medium leading-snug">
                      {pillar.name}
                    </h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Architectural Dossier Panel */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="glass-panel p-6 sm:p-10 rounded-3xl border border-ink-deep/20 shadow-paper space-y-6 notebook-grid text-ink-deep"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-ink-deep/10">
                <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: current.color }}>
                  {current.badge}
                </span>
                <span className="font-mono text-[11px] text-ink-faint">
                  Active Domain
                </span>
              </div>

              {/* Title & Rationale */}
              <div className="space-y-3">
                <h3 className="font-serif text-3xl text-ink-black font-normal">{current.name}</h3>
                <p className="text-sm text-ink-muted leading-relaxed font-sans">{current.rationale}</p>
              </div>

              {/* Architectural Focus */}
              <div className="p-4 rounded-2xl bg-parchment-base/80 border border-ink-deep/10 space-y-1">
                <span className="font-mono text-[10px] text-ink-faint uppercase font-bold tracking-wider block">
                  Core Architectural Focus
                </span>
                <p className="text-xs font-mono text-ink-deep leading-relaxed">
                  {current.architectureFocus}
                </p>
              </div>

              {/* Technology Stack Tags */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-ink-faint uppercase font-bold tracking-wider block">
                  Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-parchment-base border border-ink-deep/15 text-xs font-mono text-ink-deep"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Associated Shipped Work */}
              <div className="pt-4 border-t border-ink-deep/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-ink-faint">RELEVANT REPOSITORIES:</span>
                <div className="flex flex-wrap gap-1.5">
                  {current.shippedProjects.map((p) => (
                    <span key={p} className="px-2 py-0.5 rounded bg-black/5 font-semibold text-ink-black text-[11px]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
