import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';
import { HandStar } from './Doodles';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 md:px-12 max-w-7xl mx-auto border-t border-ink-deep/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-ink-muted">
      {/* Colophon Note */}
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <div className="flex items-center gap-1.5 font-bold text-ink-deep">
          <span>JP / SG</span>
          <HandStar className="w-3.5 h-3.5 text-paint-orange" />
        </div>
        <span className="hidden sm:inline text-ink-border">|</span>
        <span className="font-sans text-ink-faint">
          Designed & engineered with unreasonable attention to detail.
        </span>
      </div>

      {/* Links & Back to Top */}
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/satiricalguru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-paint-orange transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub ↗</span>
        </a>

        <span className="text-ink-faint">© {currentYear}</span>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-ink-black transition-colors group p-1"
          aria-label="Back to top of page"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
