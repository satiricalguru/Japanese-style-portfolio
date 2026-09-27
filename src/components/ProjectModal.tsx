import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Star, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './Icons';
import { TechBracket } from './Doodles';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink-black/60 backdrop-blur-sm"
        />

        {/* Modal Window Dossier */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-3xl w-full bg-parchment-light rounded-3xl border border-ink-deep/20 shadow-2xl p-6 sm:p-10 my-8 z-10 notebook-grid overflow-hidden text-ink-deep"
        >
          {/* Top Paper Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-ink-deep/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-paint-orange tracking-widest bg-paint-orange/10 px-2.5 py-1 rounded-md">
                PROJECT {project.number}
              </span>
              <span className="font-hand text-base text-ink-muted">{project.annotation}</span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-ink-deep/20 flex items-center justify-center text-ink-muted hover:text-ink-black hover:bg-black/5 transition-colors"
              aria-label="Close dossier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Title & Tagline */}
          <div className="pt-6 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-black">{project.title}</h2>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-600/20 bg-amber-500/10 text-amber-700 text-xs font-mono">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{project.stars} Stars</span>
              </div>
            </div>
            <p className="text-base text-paint-orange font-mono font-medium">{project.tagline}</p>
            <div className="text-xs font-mono text-ink-faint flex items-center gap-2">
              <TechBracket text={project.category} />
              <span>·</span>
              <span className="text-emerald-700">{project.status}</span>
            </div>
          </div>

          {/* Architecture Schematic Box */}
          <div className="my-6 p-4 rounded-2xl bg-parchment-card/70 border border-ink-deep/15">
            <span className="font-mono text-[10px] uppercase font-bold text-ink-faint block mb-1 tracking-wider">
              ✦ Architecture Flow Diagram
            </span>
            <div className="font-mono text-xs text-ink-deep bg-parchment-light/80 p-3 rounded-xl border border-ink-deep/10 overflow-x-auto whitespace-nowrap">
              <code>{project.architectureNote}</code>
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="space-y-2 p-4 rounded-2xl bg-paint-orange/5 border border-paint-orange/15">
              <h3 className="font-serif text-lg text-paint-orange font-bold flex items-center gap-2">
                <span>The Problem</span>
              </h3>
              <p className="text-sm text-ink-deep leading-relaxed">{project.problem}</p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-paint-green/5 border border-paint-green/15">
              <h3 className="font-serif text-lg text-paint-green font-bold flex items-center gap-2">
                <span>What Was Engineered</span>
              </h3>
              <p className="text-sm text-ink-deep leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="my-6 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-faint">
              Key Engineering Implementations
            </h3>
            <ul className="space-y-2">
              {project.technicalHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-ink-deep">
                  <span className="font-hand text-base text-paint-orange font-bold leading-none mt-0.5">✓</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Decisions */}
          <div className="my-6 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-faint">
              Architecture & Trade-off Decisions
            </h3>
            <ul className="space-y-2">
              {project.engineeringDecisions.map((dec, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <span className="font-hand text-base text-paint-blue font-bold leading-none mt-0.5">✦</span>
                  <span>{dec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="my-6 pt-4 border-t border-ink-deep/10">
            <span className="font-mono text-[10px] uppercase font-bold text-ink-faint block mb-2 tracking-wider">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-parchment-card border border-ink-deep/15 text-xs font-mono text-ink-deep"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-ink-deep/15 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-black text-parchment-light font-mono text-xs font-medium hover:bg-paint-orange transition-all shadow-sm group"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-paint-green/30 bg-paint-green/10 text-paint-green font-mono text-xs font-semibold hover:bg-paint-green hover:text-parchment-light transition-all shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Demo ↗</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-ink-faint hover:text-ink-black transition-colors"
            >
              [esc to close]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
