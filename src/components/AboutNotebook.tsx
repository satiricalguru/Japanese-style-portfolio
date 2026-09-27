import React from 'react';
import { HandStar } from './Doodles';

export const AboutNotebook: React.FC = () => {
  return (
    <section id="notebook" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-ink-deep/15">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-paint-wine font-bold">
              04 / THE ARCHITECT'S NOTEBOOK
            </span>
            <span className="font-hand text-base text-ink-faint">philosophy & mindset</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-black font-normal tracking-tight">
            The Method to the Madness
          </h2>
        </div>

        <div className="mt-4 md:mt-0 font-mono text-xs text-ink-faint">
          <span>IDENTITY: SATIRICALGURU</span>
        </div>
      </div>

      {/* Two-Column Editorial Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Hand-Painted Developer Interpretation & Sketch Frame */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Subtle Watercolor wash */}
          <div className="absolute inset-0 bg-paint-orange/15 rounded-full watercolor-wash scale-110" />

          {/* Sketch Card Frame */}
          <div className="relative w-full max-w-[380px] p-6 rounded-3xl bg-parchment-card/90 border border-ink-deep/20 shadow-sketch-lg rotate-[-1.5deg] overflow-hidden">
            {/* Stamp */}
            <div className="flex justify-between items-center pb-3 border-b border-ink-deep/10 text-[10px] font-mono text-ink-faint">
              <span>FIG. N-01 · SKETCH PROFILE</span>
              <span className="text-paint-wine font-bold">INDIA</span>
            </div>

            {/* Stylized Hand-Drawn Portrait Graphic */}
            <div className="my-4 relative aspect-[4/5] rounded-2xl bg-parchment-base border border-ink-deep/15 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              {/* Abstract avatar sketch using vector lines */}
              <div className="relative w-32 h-32 rounded-full border-2 border-dashed border-ink-deep/40 flex items-center justify-center bg-paint-orange/10 mb-4 shadow-sm">
                <span className="font-serif text-5xl italic font-bold text-ink-deep select-none">
                  JP
                </span>
                {/* Floating doodle halo */}
                <div className="absolute -top-3 -right-2">
                  <HandStar className="w-6 h-6 text-paint-orange animate-spin" />
                </div>
              </div>

              <h3 className="font-serif text-2xl text-ink-black font-bold">Jatin Pandey</h3>
              <p className="font-mono text-xs text-paint-orange font-semibold">@satiricalguru</p>
              <p className="font-hand text-sm text-ink-faint mt-1">
                "Building things, breaking things, and occasionally fixing them."
              </p>

              {/* Little margin note pinned onto card */}
              <div className="absolute bottom-2 left-4 font-hand text-xs text-paint-blue rotate-[-4deg]">
                probably debugging at 3:14 AM ➔
              </div>
            </div>

            <div className="pt-2 border-t border-ink-deep/10 flex justify-between items-center text-[10px] font-mono text-ink-faint">
              <span>CTF Grinder · Systems Hacker</span>
              <span>49 Repositories</span>
            </div>
          </div>

          {/* Floating Doodled Callout on Outside */}
          <div className="absolute -bottom-6 right-0 font-hand text-base text-paint-wine rotate-[6deg] hidden sm:block bg-parchment-light/90 px-3 py-1 rounded-lg border border-paint-wine/30 shadow-xs">
            "zero telemetry is non-negotiable" ✍️
          </div>
        </div>

        {/* Right Column: Editorial Narrative & Principles */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <h3 className="font-serif text-3xl sm:text-4xl text-ink-black font-normal leading-snug">
              Most projects start as <span className="italic font-serif">"let me just inspect this codebase"</span> and end as a full native rewrite with a shipped release.
            </h3>

            <p className="text-base text-ink-muted leading-relaxed font-sans">
              I operate at the intersection of native desktop performance, local neural inference, real-time signal processing, and autonomous developer tooling. Rather than wrapping cloud APIs in generic browser tabs, I build software that touches the bare metal — from macOS Desktop compositors to 10ms neural audio pipelines.
            </p>

            <p className="text-base text-ink-muted leading-relaxed font-sans">
              I believe privacy is not a luxury toggle — it is an engineering requirement. When existing IDEs and coding agents force developers to stream their intellectual property into remote black boxes, the only ethical response is to fork the editor, rip out the surveillance telemetry, and hook it directly to open local weights.
            </p>
          </div>

          {/* Three Core Guiding Rules */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-ink-deep/10">
            <div className="p-4 rounded-xl bg-parchment-card/60 border border-ink-deep/10 space-y-1.5">
              <span className="font-mono text-[10px] font-bold text-paint-orange uppercase tracking-wider block">
                01 · SOVEREIGN LOCAL
              </span>
              <p className="text-xs text-ink-deep font-sans">
                Local-first weights, on-device signal processing, zero remote telemetry leaks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-parchment-card/60 border border-ink-deep/10 space-y-1.5">
              <span className="font-mono text-[10px] font-bold text-paint-green uppercase tracking-wider block">
                02 · REAL-TIME DSP
              </span>
              <p className="text-xs text-ink-deep font-sans">
                Sub-20ms audio latency or it isn't real-time. Direct Metal & VST3 pipelines.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-parchment-card/60 border border-ink-deep/10 space-y-1.5">
              <span className="font-mono text-[10px] font-bold text-paint-blue uppercase tracking-wider block">
                03 · GROUNDED PARITY
              </span>
              <p className="text-xs text-ink-deep font-sans">
                Agents must be bounded by mathematical checks and objective compiler verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
