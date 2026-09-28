import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Eye, EyeOff } from 'lucide-react';
import { getGitHubStats } from '../data/projects';

const practices = [
  { name: 'Native desktop', detail: 'Responsive macOS utilities built close to the system.' },
  { name: 'Local AI', detail: 'Developer tools that keep inference on the user’s machine.' },
  { name: 'Neural audio', detail: 'Voice and signal pipelines designed for real-time use.' },
  { name: 'Signal analysis', detail: 'Practical experiments in image and binary forensics.' },
];

export const Hero: React.FC = () => {
  const [showArtwork, setShowArtwork] = useState(false);
  const [activePractice, setActivePractice] = useState(0);
  const stats = getGitHubStats();

  return (
    <section id="hero" className="relative min-h-[760px] lg:min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-ink-black">
      <img
        src="/assets/art/hero_canvas.webp"
        alt="Watercolor illustration of a celestial observatory"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className={`absolute inset-0 transition-opacity duration-500 ${showArtwork ? 'bg-ink-black/10' : 'bg-gradient-to-r from-ink-black/95 via-ink-black/70 to-ink-black/20'}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-black/75 via-transparent to-ink-black/35 pointer-events-none" />

      <button
        type="button"
        onClick={() => setShowArtwork((value) => !value)}
        aria-pressed={showArtwork}
        className="absolute top-24 right-6 md:right-12 z-20 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-ink-black/80 border border-white/30 text-parchment-light text-xs font-mono hover:bg-ink-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
      >
        {showArtwork ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        <span>{showArtwork ? 'Show portfolio' : 'View artwork'}</span>
      </button>

      <div inert={showArtwork} className={`relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center transition-opacity duration-500 ${showArtwork ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="lg:col-span-7 max-w-3xl space-y-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-200">Jatin Pandey · Creative systems engineer</p>
          <h1 className="font-serif text-[clamp(3.3rem,7vw,6.5rem)] leading-[0.98] tracking-tight text-parchment-light">
            I turn strange ideas into <em className="text-amber-200">working software.</em>
          </h1>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-200">
            I build local AI tools, native desktop utilities, and real-time audio systems. This illustrated portfolio opens the sketchbook behind four selected projects.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs">
            <a href="#works" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-400 text-ink-black font-bold hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
              Explore selected work <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 bg-ink-black/40 text-parchment-light hover:bg-ink-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
              Get in touch <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs font-mono text-slate-300">Open source snapshot · {stats.totalRepos} repositories · {stats.totalStars} stars</p>
        </div>

        <div className="hidden lg:block lg:col-span-5">
          <div className="rounded-[2rem] border border-white/25 bg-ink-black/75 backdrop-blur-xl p-7 text-parchment-light shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/20 pb-5">
              <span className="font-serif italic text-2xl">The workbench</span>
              <span className="font-mono text-[10px] tracking-widest text-amber-200">01—04 / PRACTICE</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              {practices.map((practice, index) => (
                <button
                  key={practice.name}
                  type="button"
                  onClick={() => setActivePractice(index)}
                  aria-pressed={activePractice === index}
                  className={`rounded-xl border px-4 py-4 text-left text-xs font-mono transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 ${activePractice === index ? 'bg-amber-400 text-ink-black border-amber-400 font-bold' : 'bg-white/5 text-parchment-light border-white/20 hover:bg-white/10'}`}
                >
                  <span className="block text-[10px] opacity-70 mb-1">0{index + 1}</span>
                  {practice.name}
                </button>
              ))}
            </div>
            <p className="mt-5 min-h-12 text-sm leading-relaxed text-slate-200">{practices[activePractice].detail}</p>
            <a href="#works" className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-amber-200 hover:underline">See the project gallery <ArrowUpRight className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};
