import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';
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
          className="fixed inset-0 bg-ink-black/70 backdrop-blur-sm"
        />

        {/* Modal Window Dossier */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-3xl w-full bg-parchment-light rounded-3xl border border-ink-deep/20 shadow-2xl p-6 sm:p-10 my-8 z-10 notebook-grid overflow-hidden text-ink-deep"
        >
          {/* Master Artwork Header Banner */}
          <div className="relative h-44 sm:h-52 -mx-6 sm:-mx-10 -mt-6 sm:-mt-10 overflow-hidden border-b border-ink-deep/20 mb-6 group">
            <img
              src={`/assets/art/${project.id}.jpg`}
              alt={project.title}
              className="w-full h-full object-cover object-center filter saturate-[1.1] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-parchment-light via-ink-black/35 to-ink-black/60" />

            {/* Modal Top Bar on Image */}
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-10">
              <span className="font-mono text-xs font-bold text-amber-300 bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                PROJECT {project.number} // ARCHIVE DOSSIER
              </span>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black/90 transition-colors backdrop-blur-md"
                aria-label="Close dossier"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Title on Image */}
            <div className="absolute bottom-3 left-4 right-4 sm:left-8 sm:right-8 flex items-end justify-between z-10">
              <div>
                <span className="font-mono text-[10px] text-amber-300 uppercase tracking-widest block font-bold">
                  {project.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium drop-shadow-sm">
                  {project.title}
                </h2>
              </div>
              <span className="text-xs font-mono text-white/90 px-2.5 py-0.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
                {project.status}
              </span>
            </div>
          </div>

          {/* Subtitle & Classification */}
          <div className="space-y-1 pb-4 border-b border-ink-deep/10">
            <p className="text-base text-paint-orange font-mono font-medium">{project.tagline}</p>
            <div className="text-xs font-mono text-ink-faint flex items-center gap-2">
              <TechBracket text={project.annotation} />
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
              <h3 className="font-serif text-lg text-paint-orange font-bold">
                The Problem
              </h3>
              <p className="text-sm text-ink-deep leading-relaxed">{project.problem}</p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-paint-green/5 border border-paint-green/15">
              <h3 className="font-serif text-lg text-paint-green font-bold">
                What Was Engineered
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
                  <span className="text-paint-orange font-bold mt-0.5">✓</span>
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
                  <span className="text-paint-blue font-bold mt-0.5">✦</span>
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
