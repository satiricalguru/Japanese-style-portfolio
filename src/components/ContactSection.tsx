import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'jatinjio1212@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    {
      name: 'GitHub',
      handle: '@satiricalguru',
      url: 'https://github.com/satiricalguru',
      icon: GithubIcon,
    },
    {
      name: 'X (Twitter)',
      handle: '@JayDevSG',
      url: 'https://x.com/JayDevSG',
      icon: TwitterIcon,
    },
    {
      name: 'LinkedIn',
      handle: 'Jatin Pandey',
      url: 'https://linkedin.com/in/jatin-pandey-66328141a',
      icon: LinkedinIcon,
    },
  ];

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background watercolor blot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-paint-orange/8 rounded-full watercolor-wash" />

      {/* Main Signed Canvas Card */}
      <div className="relative glass-panel rounded-3xl border border-ink-deep/20 p-8 sm:p-14 lg:p-16 shadow-paper notebook-grid overflow-hidden text-center max-w-4xl mx-auto space-y-10">
        
        {/* Top Header */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-paint-orange font-bold">
            05 / DISPATCH & COLLABORATION
          </span>
          <span className="font-mono text-xs text-ink-muted">
            Have a systems question, local AI architecture, or ambitious build?
          </span>
        </div>

        {/* Large Editorial Invitation */}
        <div className="space-y-4">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink-black font-normal tracking-tight leading-[1.05]">
            Have a strange idea? <br />
            <span className="italic font-serif relative inline-block">
              Let's build it
              <span className="absolute -bottom-2 left-0 right-0 h-3.5 bg-paint-orange/20 -rotate-1 rounded-sm -z-10" />
            </span>
            .
          </h2>

          <p className="text-base sm:text-lg text-ink-muted max-w-xl mx-auto font-normal leading-relaxed">
            Whether it is low-latency neural audio, native macOS engineering, or air-gapped local developer tooling — my workbench is always open.
          </p>
        </div>

        {/* Primary Email Dispatch Button with Copy Tooltip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ink-black text-parchment-light font-mono text-sm font-semibold tracking-wide hover:bg-paint-orange transition-all shadow-sketch-lg group"
          >
            <Send className="w-4 h-4 text-paint-orange group-hover:text-parchment-light transition-colors" />
            <span>DISPATCH AN EMAIL ↗</span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-4 rounded-full border border-ink-deep/20 bg-parchment-light hover:bg-parchment-card text-ink-deep font-mono text-xs transition-all shadow-xs"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">COPIED TO CLIPBOARD!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-ink-faint" />
                <span>{email}</span>
              </>
            )}
          </button>
        </div>

        {/* Verified Social Connectors */}
        <div className="pt-8 border-t border-ink-deep/10 flex flex-wrap justify-center items-center gap-6 text-xs font-mono">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ink-muted hover:text-ink-black p-2 rounded-lg hover:bg-black/5 transition-colors group"
              >
                <Icon className="w-4 h-4 text-ink-deep group-hover:text-paint-orange transition-colors" />
                <span>{s.name}</span>
                <span className="text-ink-faint text-[10px]">({s.handle})</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            );
          })}
        </div>

        {/* Hand-Drawn Ink Signature / Stamp */}
        <div className="pt-6 flex flex-col items-center gap-1 select-none">
          <div className="font-serif italic text-3xl md:text-4xl text-ink-deep font-medium tracking-wide">
            Jatin Pandey
          </div>
          <span className="font-mono text-[10px] text-ink-faint tracking-widest uppercase">
            systems engineer & digital craftsperson · 2026
          </span>
        </div>
      </div>
    </section>
  );
};
