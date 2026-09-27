import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Radio, Layers, ShieldCheck } from 'lucide-react';
import { HandArrow } from './Doodles';

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

  const pillars: Pillar[] = [
    {
      id: 'ai-agents',
      name: 'Local AI & Agent Infrastructure',
      badge: 'PILLAR 01 · OFFLINE INTELLIGENCE',
      color: '#C85A32',
      icon: Cpu,
      techs: ['Python', 'PyTorch', 'Ollama', 'llama.cpp', 'vLLM', 'MCP Server', 'AST Token Pruning'],
      architectureFocus:
        'Lossless context compaction, dual-agent verification loops, local stream handling, zero cloud telemetry',
      shippedProjects: ['Forge', 'Wraith', 'Fast-Jev-Agents', 'Agents-skills', 'Verdict', 'Local-Mind'],
      rationale:
        'Rather than outsourcing code and reasoning to proprietary remote APIs, building on-device inference runners guarantees sovereign privacy, zero latency variance, and unlimited local capability.'
    },
    {
      id: 'audio-dsp',
      name: 'Real-Time DSP & Neural Audio',
      badge: 'PILLAR 02 · ULTRA-LOW LATENCY',
      color: '#2D5D44',
      icon: Radio,
      techs: ['C++', 'VST3', 'Spotify Pedalboard', 'Metal Audio Shaders', 'DirectML', 'JVS Embeddings', 'Edge-TTS'],
      architectureFocus:
        '10ms low-latency circular audio queues, quantized speaker embeddings, formant transposition, DAW routing',
      shippedProjects: ['Beatrice Windows', 'Beatrice macOS', 'RVC-Voicechanger', 'PersonalAssistant', 'EarPods-ANC'],
      rationale:
        'Voice AI is only usable when round-trip latency drops below the human perceptual delay threshold (~20ms). Pushing inference into high-priority audio threads makes synthetic voice feel immediate.'
    },
    {
      id: 'native-systems',
      name: 'Native Systems & Spatial Graphics',
      badge: 'PILLAR 03 · HARDWARE SYNCHRONIZATION',
      color: '#2B5898',
      icon: Layers,
      techs: ['Swift', 'AppKit', 'CoreGraphics', 'Electron', 'React 19', 'Three.js', 'Next.js 16', 'macOS APIs'],
      architectureFocus:
        'kCGDesktopWindowLevel window server hooks, multi-display frame pacing, audio-reactive 3D shaders',
      shippedProjects: ['Vantage', 'Jarvis', 'Contour', 'Pocket-Music', 'End4-mac', 'Ai-Nexus'],
      rationale:
        'Web wrappers feel sluggish without native system bridges. Hooking directly into native platform compositors allows fluid graphics without battery drainage.'
    },
    {
      id: 'security-forensics',
      name: 'Security, Privacy & Signal Forensics',
      badge: 'PILLAR 04 · CLIENT-SIDE INTEGRITY',
      color: '#C98A2C',
      icon: ShieldCheck,
      techs: ['2D DCT Analysis', '2D FFT Filtering', 'WebAssembly', 'Ghidra Decompiler API', 'Cutter', 'C2PA Manifests'],
      architectureFocus:
        'Frequency perturbation below JND thresholds, binary container metadata scrubbing, 11-signal binary parity',
      shippedProjects: ['Synthid-remover', 'Wraith', 'DriveVault', 'Proofline', 'Mobileforce'],
      rationale:
        'Generative watermarking and telemetry undermine user autonomy. Developing deterministic mathematical filters ensures users retain complete control over their digital artifacts.'
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
              03 / TOPOLOGICAL BLUEPRINT
            </span>
            <span className="font-hand text-base text-ink-faint">no progress bars — real architecture</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-black font-normal tracking-tight">
            Engineering Skill & Systems Map
          </h2>
          <p className="text-sm sm:text-base text-ink-muted max-w-2xl font-normal leading-relaxed">
            Technologies mapped as an interconnected blueprint based on actual production code across 49 repositories.
          </p>
        </div>

        <div className="mt-4 md:mt-0 font-hand text-base text-paint-blue flex items-center gap-2">
          <span>select a pillar to inspect wiring</span>
          <HandArrow className="w-8 h-4 rotate-12 hidden sm:block" />
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
              <motion.button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
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
                    <h3 className="font-serif text-xl sm:text-2xl text-ink-black font-bold">
                      {pillar.name}
                    </h3>
                    <p className="text-xs text-ink-muted line-clamp-1">
                      {pillar.techs.slice(0, 4).join(' · ')}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right Column: Active Blueprint Deep-Dive Panel */}
        <div className="lg:col-span-7">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-10 rounded-3xl bg-parchment-card/90 border border-ink-deep/20 shadow-paper notebook-grid space-y-6 text-ink-deep"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-ink-deep/10">
              <span className="font-mono text-xs font-bold text-paint-blue tracking-wider bg-paint-blue/10 px-3 py-1 rounded-md">
                {current.badge}
              </span>
              <span className="font-hand text-base text-ink-faint">verified implementation</span>
            </div>

            {/* Pillar Title */}
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink-black">{current.name}</h3>
              <p className="font-mono text-xs text-paint-orange mt-1">
                Architecture Focus: {current.architectureFocus}
              </p>
            </div>

            {/* Engineering Rationale */}
            <div className="p-4 rounded-xl bg-parchment-light/80 border border-ink-deep/15 space-y-1.5">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-faint tracking-wider block">
                ✦ Engineering Rationale
              </span>
              <p className="text-sm text-ink-deep leading-relaxed font-sans">{current.rationale}</p>
            </div>

            {/* Technologies in this Domain */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-faint tracking-wider block">
                Verified Technical Proficiencies
              </span>
              <div className="flex flex-wrap gap-2">
                {current.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-parchment-light border border-ink-deep/15 text-xs font-mono text-ink-black font-medium shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Repositories in this Pillar */}
            <div className="pt-4 border-t border-ink-deep/10 space-y-2">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-faint tracking-wider block">
                Shipped Repositories Demonstrating This Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {current.shippedProjects.map((repo) => (
                  <span
                    key={repo}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-black/5 text-ink-deep font-mono text-xs font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: current.color }} />
                    {repo}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
