import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { TechBracket } from './Doodles';
import { ArrowUpRight, ExternalLink, Terminal, BookOpen, Eye, EyeOff } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTabMap, setActiveTabMap] = useState<Record<string, 'dossier' | 'terminal'>>({});
  const [clearArtMap, setClearArtMap] = useState<Record<string, boolean>>({});

  const artMap: Record<string, { image: string; title: string; subtitle: string; tag: string }> = {
    vantage: {
      image: '/assets/art/vantage.jpg',
      title: 'Aurora Compositor · ProMotion Engine',
      subtitle: 'Dynamic Video Layers at kCGDesktopWindowLevel',
      tag: 'CANVAS SPECIFICATION · 2026',
    },
    forge: {
      image: '/assets/art/forge.jpg',
      title: 'Macchina per il Pensiero',
      subtitle: 'Air-Gapped Neural Reasoning & Localhost Routing',
      tag: 'MANUSCRIPT BLUEPRINT · FIG. 02',
    },
    beatrice: {
      image: '/assets/art/beatrice.jpg',
      title: 'Le Mirabili Chamberi Acustiche',
      subtitle: 'Low-Latency Neural Acoustic Metamorphosis',
      tag: 'DA VINCI ACOUSTIC TREATISE · FIG. 03',
    },
    synthid: {
      image: '/assets/art/synthid.jpg',
      title: 'De Anatomia Luminis et Harmoniarum',
      subtitle: '2D Discrete Cosine Transform Spectral Attenuation',
      tag: 'FREQUENCY DISSECTION · FIG. 04',
    },
  };

  const getTerminalContent = (id: string) => {
    switch (id) {
      case 'vantage':
        return (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="text-slate-500 pb-1 border-b border-white/10 text-[10px]">
              PROCESS: Vantage.app (Native AppKit Compositor)
            </div>
            <div className="text-amber-300">$ ./Vantage --window-level desktop</div>
            <div className="text-emerald-400">[AppKit] Window attached to kCGDesktopWindowLevel (-2147483648)</div>
            <div className="text-blue-300">[DisplayLink] Sync link active at 120Hz ProMotion</div>
            <div className="text-slate-400">[AVFoundation] Multi-monitor H.264 video hardware loop active</div>
            <div className="text-amber-300">[Workspace] Auto-pause active when obscured by fullscreen app</div>
            <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] text-slate-400">
              <span>Verified AppKit Architecture</span>
              <span className="text-emerald-400">● 120 FPS Synchronized</span>
            </div>
          </div>
        );
      case 'forge':
        return (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="text-slate-500 pb-1 border-b border-white/10 text-[10px]">
              ENVIRONMENT: Forge Air-Gapped IDE (VS Code Core Fork)
            </div>
            <div className="text-amber-300">$ forge --offline --model deepseek-coder</div>
            <div className="text-emerald-400">[Ollama] Daemon connected at localhost:11434</div>
            <div className="text-red-400">[Telemetry] Blocked 14 outbound cloud telemetry endpoints</div>
            <div className="text-slate-300">[Context] Built 16k token AST buffer for local workspace</div>
            <div className="text-blue-300">[Status] Zero tokens transmitted to remote servers</div>
            <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] text-slate-400">
              <span>Sovereign Local Execution</span>
              <span className="text-emerald-400">● 0 Outbound Packets</span>
            </div>
          </div>
        );
      case 'beatrice':
        return (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="text-slate-500 pb-1 border-b border-white/10 text-[10px]">
              AUDIO PIPELINE: Project Beatrice Real-Time Neural DSP
            </div>
            <div className="text-amber-300">$ ./beatrice_dsp --buffer 128 --rate 48000</div>
            <div className="text-emerald-400">[CoreAudio] Input: BlackHole 2ch ➔ Output: System Default</div>
            <div className="text-blue-300">[Buffer] Frame size 128 (IO latency ~2.7ms @ 48kHz)</div>
            <div className="text-amber-300">[PyTorch] Mel-spectrogram synthesis running on Apple Silicon MPS</div>
            <div className="text-slate-400">[F0 Track] Harvest real-time pitch estimator active</div>
            <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] text-slate-400">
              <span>Zero-Artifact Synthesis</span>
              <span className="text-emerald-400">● 2.7ms IO Latency</span>
            </div>
          </div>
        );
      case 'synthid':
        return (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="text-slate-500 pb-1 border-b border-white/10 text-[10px]">
              SIGNAL FORENSICS: SynthID-Remover (2D DCT Attenuation)
            </div>
            <div className="text-amber-300">$ python synthid_remover.py --input sample.png --out clean.png</div>
            <div className="text-slate-400">[*] Reading image: 1024×1024 RGB 8-bit depth</div>
            <div className="text-blue-300">[*] Computing 8×8 block 2D Discrete Cosine Transforms...</div>
            <div className="text-amber-300">[*] Attenuated candidate carrier perturbation in mid-high bands</div>
            <div className="text-emerald-400">[✓] Cleaned image written. PSNR: 43.1 dB | SSIM: 0.995</div>
            <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] text-slate-400">
              <span>Mathematical Forensics</span>
              <span className="text-emerald-400">● 43.1 dB PSNR</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="works" className="relative w-full">
      {/* SECTION INTRO HEADER BANNER */}
      <div className="w-full bg-ink-black py-16 px-6 md:px-12 border-b border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-300 font-bold">
                01 / SELECTED WORK
              </span>
              <span className="font-mono text-xs text-slate-400">· 4 curated engineering dossiers</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-parchment-light font-normal tracking-tight">
              Flagship Engineering Dossiers
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-slate-400 flex items-center gap-2">
            <span>Scroll through each atmospheric chapter</span>
            <span className="text-amber-300">↓</span>
          </div>
        </div>
      </div>

      {/* FULL-BLEED INDEPENDENT PROJECT SECTIONS */}
      {FEATURED_PROJECTS.map((project, index) => {
        const isEven = index % 2 === 0;
        const art = artMap[project.id] || artMap.vantage;
        const currentTab = activeTabMap[project.id] || 'dossier';
        const isClearArt = clearArtMap[project.id] || false;

        return (
          <section
            key={project.id}
            id={index === 0 ? 'vantage' : project.id}
            className="relative w-full min-h-screen py-24 sm:py-32 flex items-center justify-center overflow-hidden border-b border-white/10"
          >
            {/* FULL-WIDTH ATMOSPHERIC BACKGROUND ARTWORK */}
            <div className="absolute inset-0 z-0">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover object-center filter saturate-[1.12] contrast-[1.04] scale-[1.01]"
              />

              {/* Directional Contrast Gradient Mask */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                  isClearArt
                    ? 'bg-ink-black/20'
                    : isEven
                    ? 'bg-gradient-to-r from-ink-black/96 via-ink-black/85 md:via-ink-black/75 to-ink-black/35 lg:to-ink-black/15'
                    : 'bg-gradient-to-l from-ink-black/96 via-ink-black/85 md:via-ink-black/75 to-ink-black/35 lg:to-ink-black/15'
                }`}
              />

              {/* Seamless Top & Bottom Chapter Transition Fades */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink-black/80 via-transparent to-ink-black/80 pointer-events-none" />
              <div className="absolute inset-0 paper-grain opacity-20 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Top Chapter Indicator & Watermark */}
            <div className="absolute top-8 left-6 md:left-12 font-mono text-[10px] text-amber-200/60 select-none tracking-widest hidden sm:block z-10">
              [CHAPTER 0{project.number} // {project.category.toUpperCase()}] · {art.tag}
            </div>

            {/* Clear Artwork Toggle at Top Right */}
            <div className="absolute top-8 right-6 md:right-12 z-20">
              <button
                type="button"
                onClick={() =>
                  setClearArtMap((prev) => ({
                    ...prev,
                    [project.id]: !prev[project.id],
                  }))
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-parchment-light text-[11px] font-mono backdrop-blur-md transition-all shadow-sm"
                title="Toggle unobstructed background artwork view"
              >
                {isClearArt ? (
                  <EyeOff className="w-3.5 h-3.5 text-amber-300" />
                ) : (
                  <Eye className="w-3.5 h-3.5 text-amber-300" />
                )}
                <span className="hidden sm:inline">
                  {isClearArt ? 'Restore Dossier' : 'Examine Master Canvas'}
                </span>
              </button>
            </div>

            {/* Foreground Content Grid */}
            <div
              className={`max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center transition-opacity duration-500 ${
                isClearArt ? 'opacity-20 pointer-events-none' : 'opacity-100'
              }`}
            >
              {/* Dossier Side (7 columns) */}
              <div
                className={`lg:col-span-7 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="glass-panel-dark backdrop-blur-2xl p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl text-parchment-light space-y-6">
                  {/* Top Metadata & Tab Switcher */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/15">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-amber-300 tracking-widest">
                        PROJECT {project.number}
                      </span>
                      <span className="text-white/30">/</span>
                      <TechBracket text={project.category} />
                    </div>

                    {/* Interactive Tab Toggle */}
                    <div className="flex items-center gap-1 bg-black/50 p-1 rounded-full border border-white/15 text-[11px] font-mono">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveTabMap((prev) => ({
                            ...prev,
                            [project.id]: 'dossier',
                          }))
                        }
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                          currentTab === 'dossier'
                            ? 'bg-amber-400 text-ink-black font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Dossier</span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveTabMap((prev) => ({
                            ...prev,
                            [project.id]: 'terminal',
                          }))
                        }
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                          currentTab === 'terminal'
                            ? 'bg-amber-400 text-ink-black font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        <Terminal className="w-3 h-3" />
                        <span>Logs</span>
                      </button>
                    </div>
                  </div>

                  {/* Tab Body: Dossier vs Logs */}
                  <AnimatePresence mode="wait">
                    {currentTab === 'dossier' ? (
                      <motion.div
                        key="dossier"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {/* Title */}
                        <h3
                          onClick={() => setSelectedProject(project)}
                          className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] text-parchment-light font-normal leading-tight tracking-tight cursor-pointer hover:text-amber-300 transition-colors"
                          data-cursor="project"
                        >
                          {project.title}
                        </h3>

                        {/* Tagline */}
                        <p className="font-mono text-xs sm:text-sm text-amber-300 font-medium">
                          {project.tagline}
                        </p>

                        {/* Solution Description */}
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                          {project.solution}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg text-[11px] font-mono bg-white/10 border border-white/15 text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="terminal"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 rounded-2xl bg-black/70 border border-white/15"
                      >
                        {getTerminalContent(project.id)}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Links & Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-ink-black font-semibold transition-all shadow-lg shadow-amber-950/30 group/btn"
                    >
                      <span>Deep-Dive Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-parchment-light transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-amber-300" />
                      <span>Source Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-emerald-400/30 bg-emerald-500/20 text-emerald-300 font-semibold hover:bg-emerald-500 hover:text-white transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live App</span>
                      </a>
                    )}
                  </div>

                  {/* Margin Annotation */}
                  <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs font-mono text-slate-400">
                    <span className="italic truncate">{project.annotation}</span>
                    <span className="text-emerald-400 font-medium shrink-0">● {project.status}</span>
                  </div>
                </div>
              </div>

              {/* Open Artwork Side: Floating Manuscript Annotation */}
              <div
                className={`lg:col-span-5 flex flex-col justify-end space-y-4 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="p-6 rounded-3xl glass-panel-dark border border-white/20 backdrop-blur-xl text-parchment-light space-y-2.5">
                  <span className="font-mono text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                    {art.tag}
                  </span>
                  <h4 className="font-serif italic text-2xl text-white">
                    {art.title}
                  </h4>
                  <p className="font-mono text-xs text-slate-300 leading-relaxed">
                    {art.subtitle}
                  </p>
                </div>

                {/* Technical Coordinates Watermark */}
                <div className="flex justify-between items-center text-[10px] font-mono text-white/50 px-2">
                  <span>CHAPTER 0{project.number} // CONTINUOUS WORLD</span>
                  <span>100% SOVEREIGN CODE</span>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Dossier Modal View */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
