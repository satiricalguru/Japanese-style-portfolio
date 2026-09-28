import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['hero', 'works', 'lab', 'architecture', 'notebook', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#works', id: 'works' },
    { label: 'The Lab', href: '#lab', id: 'lab' },
    { label: 'Architecture', href: '#architecture', id: 'architecture' },
    { label: 'Notebook', href: '#notebook', id: 'notebook' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-5 pointer-events-none">
      <motion.nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-ink-black/95 backdrop-blur-2xl px-4 py-2.5 rounded-full border border-white/20 shadow-2xl scale-[0.98] max-w-4xl w-full text-parchment-light'
            : 'bg-ink-black/80 backdrop-blur-xl px-5 py-3 rounded-full border border-white/15 shadow-xl max-w-5xl w-full text-parchment-light'
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Brand Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-parchment-light hover:text-amber-300 transition-colors group"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center font-serif italic text-base font-bold text-amber-300 group-hover:border-amber-300 transition-colors">
            JP
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold tracking-wider text-parchment-light flex items-center gap-1.5">
              satiricalguru
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="font-mono text-[10px] text-slate-400 leading-none">systems & ai notebook</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-xs font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full transition-colors ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-amber-400/20 border border-amber-300/40 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action Button: GitHub & Status */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://github.com/satiricalguru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-parchment-light hover:bg-amber-400 hover:text-ink-black transition-all shadow-sm group"
          >
            <GithubIcon className="w-3.5 h-3.5 text-amber-300 group-hover:text-ink-black transition-colors" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-parchment-light hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-ink-black/95 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl flex flex-col gap-4 md:hidden border border-white/20 text-parchment-light"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <span className="font-serif italic text-lg text-amber-300">Notebook Chapters</span>
              <span className="font-mono text-xs text-slate-400">2026 Index</span>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-mono text-slate-200 hover:bg-amber-400/20 hover:text-amber-300 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-400">↗</span>
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/15 flex justify-between items-center">
              <a
                href="https://github.com/satiricalguru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-white py-2"
              >
                <GithubIcon className="w-4 h-4 text-amber-300" />
                <span>github.com/satiricalguru</span>
              </a>
              <span className="font-mono text-xs text-emerald-400">● live</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
