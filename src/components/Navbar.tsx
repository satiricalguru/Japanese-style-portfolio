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
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 md:py-6 pointer-events-none">
      <motion.nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'glass-panel px-4 py-2.5 rounded-full shadow-paper scale-[0.98] max-w-4xl w-full'
            : 'glass-panel px-5 py-3 rounded-full shadow-sketch max-w-5xl w-full'
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Brand Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-ink-black hover:text-paint-orange transition-colors group"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-full border border-ink-deep/20 bg-parchment-card flex items-center justify-center font-serif italic text-base font-bold text-ink-deep group-hover:border-paint-orange transition-colors">
            JP
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold tracking-wider text-ink-deep flex items-center gap-1.5">
              satiricalguru
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
            <span className="font-hand text-[11px] text-ink-faint leading-none">systems & ai notebook</span>
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
                    ? 'text-ink-black font-semibold'
                    : 'text-ink-muted hover:text-ink-black hover:bg-black/5'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-paint-orange/10 border border-paint-orange/20 -z-10"
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
            className="flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1.5 rounded-full border border-ink-deep/20 bg-parchment-card/80 text-ink-deep hover:bg-ink-black hover:text-parchment-light transition-all shadow-sm group"
          >
            <GithubIcon className="w-3.5 h-3.5 text-paint-orange group-hover:text-parchment-light transition-colors" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-ink-deep hover:bg-black/5 transition-colors"
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
            className="pointer-events-auto absolute top-20 left-4 right-4 glass-panel p-6 rounded-2xl shadow-paper flex flex-col gap-4 md:hidden border border-ink-deep/15"
          >
            <div className="flex items-center justify-between pb-3 border-b border-ink-deep/10">
              <span className="font-hand text-lg text-ink-muted">Notebook Chapters</span>
              <span className="font-mono text-xs text-paint-orange">2026 Index</span>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-mono text-ink-deep hover:bg-paint-orange/10 hover:text-paint-orange rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-ink-faint">↗</span>
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-ink-deep/10 flex justify-between items-center">
              <a
                href="https://github.com/satiricalguru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-ink-black py-2"
              >
                <GithubIcon className="w-4 h-4 text-paint-orange" />
                <span>github.com/satiricalguru</span>
              </a>
              <span className="font-hand text-xs text-ink-faint">live portfolio</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
