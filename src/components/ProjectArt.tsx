import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Image as ImageIcon } from 'lucide-react';

interface ProjectArtProps {
  id: string;
}

export const ProjectArt: React.FC<ProjectArtProps> = ({ id }) => {
  const [viewMode, setViewMode] = useState<'blueprint' | 'terminal'>('blueprint');

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

  const currentArt = artMap[id] || artMap.vantage;

  return (
    <div className="relative w-full h-full min-h-[340px] flex flex-col justify-between p-3 sm:p-4 bg-parchment-base/90 rounded-2xl border border-ink-deep/20 shadow-sketch overflow-hidden">
      {/* Top Toggle Toolbar */}
      <div className="flex items-center justify-between pb-3 border-b border-ink-deep/15 z-20">
        <div className="flex items-center gap-1.5 bg-parchment-card/80 p-1 rounded-full border border-ink-deep/10 text-[11px] font-mono">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('blueprint');
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              viewMode === 'blueprint'
                ? 'bg-ink-black text-parchment-light font-bold shadow-xs'
                : 'text-ink-muted hover:text-ink-black'
            }`}
          >
            <ImageIcon className="w-3 h-3" />
            <span>Master Artwork</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('terminal');
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              viewMode === 'terminal'
                ? 'bg-ink-black text-parchment-light font-bold shadow-xs'
                : 'text-ink-muted hover:text-ink-black'
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>Terminal / Logs</span>
          </button>
        </div>

        <span className="font-mono text-[10px] text-paint-orange font-bold uppercase tracking-wider hidden sm:block">
          {currentArt.tag}
        </span>
      </div>

      {/* Main Content Viewport */}
      <div className="relative my-2 flex-1 rounded-xl overflow-hidden border border-ink-deep/20 bg-ink-black min-h-[240px]">
        <AnimatePresence mode="wait">
          {viewMode === 'blueprint' ? (
            <motion.div
              key="blueprint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full min-h-[240px] group/img"
            >
              <img
                src={currentArt.image}
                alt={currentArt.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover/img:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Artwork Label Overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-left text-parchment-light z-10 space-y-0.5">
                <span className="font-serif italic text-lg sm:text-xl font-medium tracking-wide text-white block">
                  {currentArt.title}
                </span>
                <span className="font-mono text-[11px] text-amber-200/90 block">
                  {currentArt.subtitle}
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="terminal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 h-full flex flex-col justify-between font-mono text-xs text-slate-300 text-left space-y-3 overflow-y-auto"
            >
              {id === 'vantage' && (
                <div className="space-y-2">
                  <div className="text-slate-500 pb-1 border-b border-white/10 text-[10px]">
                    PROCESS: Vantage.app (Native AppKit Compositor)
                  </div>
                  <div className="text-paint-orange">$ ./Vantage --window-level desktop</div>
                  <div className="text-emerald-400">[AppKit] Window attached to kCGDesktopWindowLevel (-2147483648)</div>
                  <div className="text-blue-300">[DisplayLink] Sync link active at 120Hz ProMotion</div>
                  <div className="text-slate-400">[AVFoundation] Multi-monitor H.264 video hardware loop active</div>
                  <div className="text-amber-300">[Workspace] Auto-pause active when obscured by fullscreen app</div>
                </div>
              )}

              {id === 'forge' && (
                <div className="space-y-2">
                  <div className="text-slate-500 pb-1 border-b border-white/10 text-[10px]">
                    ENVIRONMENT: Forge Air-Gapped IDE (VS Code Core Fork)
                  </div>
                  <div className="text-paint-orange">$ forge --offline --model deepseek-coder</div>
                  <div className="text-emerald-400">[Ollama] Daemon connected at localhost:11434</div>
                  <div className="text-red-400">[Telemetry] Blocked 14 outbound cloud endpoints</div>
                  <div className="text-slate-300">[Context] Built 16k token AST buffer for repository</div>
                  <div className="text-blue-300">[Status] Zero tokens transmitted to remote servers</div>
                </div>
              )}

              {id === 'beatrice' && (
                <div className="space-y-2">
                  <div className="text-slate-500 pb-1 border-b border-white/10 text-[10px]">
                    AUDIO PIPELINE: Project Beatrice Real-Time Neural DSP
                  </div>
                  <div className="text-paint-orange">$ ./beatrice_dsp --buffer 128 --rate 48000</div>
                  <div className="text-emerald-400">[CoreAudio] Input: BlackHole 2ch ➔ Output: System Default</div>
                  <div className="text-blue-300">[Buffer] Frame size 128 (IO latency ~2.7ms @ 48kHz)</div>
                  <div className="text-amber-300">[PyTorch] Mel-spectrogram synthesis running on Apple Silicon MPS</div>
                  <div className="text-slate-400">[F0 Track] Harvest real-time pitch estimator active</div>
                </div>
              )}

              {id === 'synthid' && (
                <div className="space-y-2">
                  <div className="text-slate-500 pb-1 border-b border-white/10 text-[10px]">
                    SIGNAL FORENSICS: SynthID-Remover (2D DCT Attenuation)
                  </div>
                  <div className="text-paint-orange">$ python synthid_remover.py --input sample.png --out clean.png</div>
                  <div className="text-slate-400">[*] Reading image: 1024×1024 RGB</div>
                  <div className="text-blue-300">[*] Computing 8×8 block 2D Discrete Cosine Transforms...</div>
                  <div className="text-amber-300">[*] Attenuated candidate carrier perturbation in mid-high bands</div>
                  <div className="text-emerald-400">[✓] Cleaned image written. PSNR: 43.1 dB | SSIM: 0.995</div>
                </div>
              )}

              <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] text-slate-500">
                <span>Verified Local Pipeline</span>
                <span className="text-emerald-400">● Status: Active</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-center text-[10px] font-mono text-ink-faint pt-1">
        <span>Click tabs above to toggle Artwork / Logs</span>
        <span className="text-ink-deep font-semibold">100% Genuine Codebases</span>
      </div>
    </div>
  );
};
