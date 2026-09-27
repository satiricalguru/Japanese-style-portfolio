import React from 'react';

export const ProjectArt: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'vantage':
      return (
        <div className="relative w-full h-full min-h-[300px] flex flex-col justify-between p-4 sm:p-5 bg-parchment-base/90 rounded-2xl border border-ink-deep/20 shadow-sketch overflow-hidden font-mono text-left">
          {/* Subtle paper grain */}
          <div className="absolute inset-0 paper-grain opacity-30 pointer-events-none" />

          {/* macOS Window Chrome Header */}
          <div className="flex items-center justify-between pb-3 border-b border-ink-deep/15">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 border border-red-500/40 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/40 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/40 inline-block" />
              <span className="text-[11px] font-sans font-medium text-ink-muted ml-2">Vantage — Desktop Canvas</span>
            </div>
            <span className="text-[10px] text-paint-blue bg-paint-blue/10 px-2 py-0.5 rounded border border-paint-blue/20">
              kCGDesktopWindowLevel
            </span>
          </div>

          {/* Live Wallpaper Engine Canvas Simulation */}
          <div className="my-3 relative rounded-xl border border-ink-deep/15 bg-slate-900 text-parchment-light p-3 overflow-hidden shadow-inner flex flex-col justify-between min-h-[140px]">
            {/* Visual desktop wallpaper wave graphic */}
            <div className="absolute inset-0 opacity-40">
              <svg className="w-full h-full stroke-paint-blue fill-none" viewBox="0 0 300 120">
                <path d="M 0 60 Q 75 10 150 60 T 300 60" strokeWidth="2.5" />
                <path d="M 0 80 Q 75 30 150 80 T 300 80" strokeWidth="1.5" opacity="0.6" />
                <path d="M 0 100 Q 75 50 150 100 T 300 100" strokeWidth="1" opacity="0.3" />
                <circle cx="210" cy="40" r="16" fill="#C85A32" opacity="0.8" />
              </svg>
            </div>

            {/* Menu Bar Simulation */}
            <div className="relative z-10 flex justify-between items-center text-[9px] text-slate-300 pb-1 border-b border-white/10">
              <span>Display: Liquid Retina XDR (120Hz)</span>
              <span className="text-emerald-400">● Status: Playing</span>
            </div>

            {/* In-App Activity & Telemetry Status HUD */}
            <div className="relative z-10 bg-slate-950/80 backdrop-blur-md rounded-lg p-2.5 border border-white/10 text-[10px] leading-relaxed space-y-1">
              <div className="text-slate-400">
                <span className="text-paint-orange">$</span> ./Vantage.app/Contents/MacOS/Vantage --daemon
              </div>
              <div className="text-slate-300">
                <span className="text-emerald-400">[AppKit]</span> Window attached at Desktop Level (-2147483648)
              </div>
              <div className="text-slate-300">
                <span className="text-blue-300">[Workspace]</span> Auto-pause active when windows cover screen
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="flex justify-between items-center text-[10px] text-ink-faint pt-1">
            <span>AppKit / AVFoundation</span>
            <span className="text-ink-deep font-medium">Native ProMotion Pacing</span>
          </div>
        </div>
      );

    case 'forge':
      return (
        <div className="relative w-full h-full min-h-[300px] flex flex-col justify-between p-4 sm:p-5 bg-ink-black text-parchment-light rounded-2xl border border-ink-deep/30 shadow-sketch overflow-hidden font-mono text-left">
          {/* Header tabs */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span className="ml-2 px-2.5 py-0.5 rounded-t bg-white/10 text-white font-medium">
                model_router.ts
              </span>
              <span className="text-white/40">agent.py</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/70 border border-emerald-600/30 px-2 py-0.5 rounded">
              0 TELEMETRY OUTBOUND
            </span>
          </div>

          {/* Editor Code Buffer Preview */}
          <div className="my-2.5 p-3 rounded-lg bg-black/60 border border-white/5 text-[11px] leading-relaxed space-y-1 overflow-x-auto text-slate-300">
            <div>
              <span className="text-purple-400">const</span> router = <span className="text-blue-400">new</span>{' '}
              <span className="text-amber-300">LocalModelRouter</span>(&#123;
            </div>
            <div className="pl-4">
              endpoint: <span className="text-emerald-300">"http://127.0.0.1:11434"</span>,
            </div>
            <div className="pl-4">
              model: <span className="text-emerald-300">"deepseek-coder:6.7b"</span>,
            </div>
            <div className="pl-4">
              telemetry: <span className="text-red-400">false</span>, <span className="text-slate-500">// zero outbound traffic</span>
            </div>
            <div>&#125;);</div>
          </div>

          {/* Terminal Panel at Bottom */}
          <div className="p-2.5 rounded-lg bg-slate-950 border border-white/10 text-[10px] leading-normal text-slate-300 space-y-1">
            <div className="text-slate-500 border-b border-white/10 pb-1">TERMINAL: forge-daemon</div>
            <div><span className="text-paint-orange">▶</span> Connected to localhost Ollama daemon (127.0.0.1:11434)</div>
            <div><span className="text-emerald-400">✔</span> Blocked 14 telemetry endpoints (Microsoft / GitHub analytics)</div>
          </div>

          {/* Footer status */}
          <div className="flex justify-between items-center text-[10px] text-slate-400 pt-2 border-t border-white/10">
            <span>VS Code Core Fork</span>
            <span className="text-emerald-300">Air-Gapped Local Inference</span>
          </div>
        </div>
      );

    case 'beatrice':
      return (
        <div className="relative w-full h-full min-h-[300px] flex flex-col justify-between p-4 sm:p-5 bg-parchment-base/90 rounded-2xl border border-ink-deep/20 shadow-sketch overflow-hidden font-mono text-left">
          <div className="absolute inset-0 paper-grain opacity-30 pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-ink-deep/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-paint-green inline-block animate-pulse" />
              <span className="text-xs font-serif font-bold text-ink-black">Project Beatrice · Audio DSP Rack</span>
            </div>
            <span className="text-[10px] text-paint-green bg-paint-green/10 px-2 py-0.5 rounded border border-paint-green/20">
              BUFFER: 128 FRAMES
            </span>
          </div>

          {/* Audio Waveform & Spectrogram Rack */}
          <div className="my-2.5 p-3 rounded-xl bg-slate-900 border border-ink-deep/20 text-parchment-light space-y-3">
            {/* Waveform Visualization */}
            <div className="space-y-1">
              <div className="flex justify-between text-[9px] text-slate-400">
                <span>INPUT SPECTRUM (BlackHole 2ch)</span>
                <span className="text-emerald-400">-12.4 dBFS</span>
              </div>
              <div className="h-8 flex items-end gap-1 px-1 bg-black/40 rounded border border-white/5">
                {[12, 28, 45, 70, 85, 60, 40, 65, 90, 75, 50, 30, 60, 80, 45, 25, 55, 70, 35, 20].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-emerald-500 to-amber-400 rounded-t-xs opacity-85"
                  />
                ))}
              </div>
            </div>

            {/* CoreAudio & Neural Vocoder Logs */}
            <div className="bg-black/50 p-2 rounded border border-white/5 text-[10px] leading-relaxed text-slate-300">
              <div><span className="text-emerald-400">[CoreAudio]</span> Latency: ~2.7ms @ 48.0kHz (128 samples)</div>
              <div><span className="text-paint-orange">[PyTorch]</span> Harvest F0 pitch tracking on Apple Silicon MPS</div>
            </div>
          </div>

          {/* Footer status */}
          <div className="flex justify-between items-center text-[10px] text-ink-faint pt-1">
            <span>PyTorch · C++ · CoreAudio</span>
            <span className="text-paint-green font-medium">Real-Time VST3 Host</span>
          </div>
        </div>
      );

    case 'synthid':
      return (
        <div className="relative w-full h-full min-h-[300px] flex flex-col justify-between p-4 sm:p-5 bg-parchment-base/90 rounded-2xl border border-ink-deep/20 shadow-sketch overflow-hidden font-mono text-left">
          <div className="absolute inset-0 paper-grain opacity-30 pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-ink-deep/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-paint-ochre inline-block" />
              <span className="text-xs font-serif font-bold text-ink-black">SynthID-Remover · Frequency Attenuation</span>
            </div>
            <span className="text-[10px] text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-600/20">
              2D DCT DECOMPOSITION
            </span>
          </div>

          {/* Frequency Heatmap Matrix & Terminal Output */}
          <div className="my-2.5 p-3 rounded-xl bg-slate-900 border border-ink-deep/20 text-parchment-light space-y-2.5">
            {/* Visual 8x8 DCT grid preview */}
            <div className="flex items-center justify-between text-[10px] text-slate-300 pb-1 border-b border-white/10">
              <span>8×8 Block DCT Frequency Bins</span>
              <span className="text-emerald-400">PSNR: 43.1 dB · SSIM: 0.995</span>
            </div>

            {/* CLI Execution Readout */}
            <div className="bg-black/60 p-2.5 rounded border border-white/5 text-[10px] leading-relaxed text-slate-300 space-y-1">
              <div>
                <span className="text-paint-orange">$</span> python synthid_remover.py --in art.png --out clean.png
              </div>
              <div className="text-slate-400">[*] Computing 2D DCT on luminance/chrominance blocks...</div>
              <div className="text-amber-300">[*] Attenuating carrier perturbation in mid-high bands (u=5, v=6)</div>
              <div className="text-emerald-400">[✓] Reconstructed clean image with zero perceptible distortion</div>
            </div>
          </div>

          {/* Footer status */}
          <div className="flex justify-between items-center text-[10px] text-ink-faint pt-1">
            <span>Python · SciPy · OpenCV</span>
            <span className="text-ink-deep font-medium">Client-Side Signal Filtering</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
