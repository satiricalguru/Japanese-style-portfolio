import React from 'react';
import { getGitHubStats } from '../data/projects';

export const AboutNotebook: React.FC = () => {
  const stats = getGitHubStats();

  return (
    <section id="notebook" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-ink-deep/15">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-paint-wine font-bold">
              04 / ENGINEERING MEMORANDUM
            </span>
            <span className="font-mono text-xs text-ink-faint">· notes on approach & design</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-black font-normal tracking-tight">
            The Method to the Madness
          </h2>
        </div>

        <div className="mt-4 md:mt-0 font-mono text-xs text-ink-faint">
          <span>{stats.totalRepos} REPOSITORIES DOCUMENTED</span>
        </div>
      </div>

      {/* Two-Column Editorial Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Architect's Blueprint Ledger Card */}
        <div className="lg:col-span-5 relative">
          <div className="p-6 sm:p-8 rounded-3xl bg-parchment-card/80 border border-ink-deep/20 shadow-sketch space-y-6">
            
            {/* Header info */}
            <div className="pb-4 border-b border-ink-deep/10 space-y-1">
              <span className="font-mono text-[10px] text-paint-orange uppercase tracking-wider font-bold">
                DEVELOPER DOSSIER
              </span>
              <h3 className="font-serif text-2xl text-ink-black font-medium">Jatin Pandey</h3>
              <p className="font-mono text-xs text-ink-faint">github.com/satiricalguru</p>
            </div>

            {/* Core Working Principles */}
            <div className="space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-deep font-bold block">
                Engineering Tenets
              </span>

              <div className="space-y-3 font-sans text-xs">
                <div className="p-3.5 rounded-xl bg-parchment-base/80 border border-ink-deep/10 space-y-1">
                  <span className="font-mono font-bold text-paint-orange text-[11px]">01 · Local-First Sovereignty</span>
                  <p className="text-ink-muted leading-relaxed">
                    I prioritize local-first architectures when code confidentiality, privacy, or offline reliability matter. Running models on localhost guarantees data never leaves the developer's hardware.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-parchment-base/80 border border-ink-deep/10 space-y-1">
                  <span className="font-mono font-bold text-paint-green text-[11px]">02 · Low-Latency Signal Paths</span>
                  <p className="text-ink-muted leading-relaxed">
                    In real-time audio and desktop graphics, latency is the defining constraint. Direct CoreAudio buffers and AppKit hooks avoid unnecessary abstraction overhead.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-parchment-base/80 border border-ink-deep/10 space-y-1">
                  <span className="font-mono font-bold text-paint-blue text-[11px]">03 · Verifiable Implementation</span>
                  <p className="text-ink-muted leading-relaxed">
                    Automated code analysis and forensic signal tools must be anchored to concrete compiler checks, AST parsing, and objective mathematical evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Ledger Footer */}
            <div className="pt-2 border-t border-ink-deep/10 flex justify-between items-center text-[11px] font-mono text-ink-faint">
              <span>Primary: {stats.topLanguages.slice(0, 2).join(' / ')}</span>
              <span>Open Source</span>
            </div>
          </div>
        </div>

        {/* Right Column: Thoughtful Technical Narrative */}
        <div className="lg:col-span-7 space-y-6 pt-2">
          <h3 className="font-serif text-3xl sm:text-4xl text-ink-black font-normal leading-snug">
            Most of my projects begin by inspecting a system's internals — understanding what happens beneath the standard abstractions.
          </h3>

          <p className="text-base text-ink-muted leading-relaxed font-sans">
            I spend most of my engineering time building at the intersection of native desktop performance, on-device machine learning inference, real-time signal processing, and autonomous tooling. Rather than assembling wrappers around remote APIs, I prefer software that runs locally, executes with minimal latency, and provides complete ownership to the user.
          </p>

          <p className="text-base text-ink-muted leading-relaxed font-sans">
            Whether it is hooking into macOS Desktop compositors (<span className="text-ink-black font-medium">Vantage</span>), routing code completion directly to local model daemons (<span className="text-ink-black font-medium">Forge</span>), streaming neural voice conversions through CoreAudio buffers (<span className="text-ink-black font-medium">Beatrice</span>), or analyzing frequency perturbations in synthetic media (<span className="text-ink-black font-medium">SynthID-Remover</span>) — my goal is always to build software that is fast, transparent, and respectful of user privacy.
          </p>

          <div className="pt-4 border-t border-ink-deep/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <span className="text-ink-faint block text-[10px]">ENVIRONMENT</span>
              <span className="text-ink-black font-bold">macOS & Linux</span>
            </div>
            <div>
              <span className="text-ink-faint block text-[10px]">MODEL STACK</span>
              <span className="text-ink-black font-bold">Ollama · llama.cpp</span>
            </div>
            <div>
              <span className="text-ink-faint block text-[10px]">PHILOSOPHY</span>
              <span className="text-ink-black font-bold">Sovereign & Local</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
