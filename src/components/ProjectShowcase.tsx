import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FEATURED_PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectArt } from './ProjectArt';
import { ProjectModal } from './ProjectModal';
import { HandArrow, TechBracket } from './Doodles';
import { ArrowUpRight, ExternalLink, Star, FileText } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="works" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-ink-deep/15">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-paint-orange font-bold">
              01 / SELECTED SHIPPED WORK
            </span>
            <span className="font-hand text-base text-ink-faint">curated systems & engines</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-black font-normal tracking-tight">
            Flagship Engineering Dossiers
          </h2>
        </div>

        <div className="mt-4 md:mt-0 font-hand text-lg text-ink-muted flex items-center gap-2">
          <span>click any project for complete architecture notes</span>
          <HandArrow className="w-8 h-4 text-paint-orange rotate-[-15deg] hidden sm:block" />
        </div>
      </div>

      {/* Alternating Asymmetric Project Cards Grid */}
      <div className="space-y-24">
        {FEATURED_PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Subtle Watercolor Paint Wash behind the card */}
              <div
                className="absolute -inset-4 rounded-3xl watercolor-wash transition-opacity duration-500 opacity-20 group-hover:opacity-40"
                style={{ backgroundColor: project.accentColor }}
              />

              {/* Main Card Shell - Styled as an engineer's binder sheet */}
              <div className="relative glass-panel rounded-3xl border border-ink-deep/15 p-6 sm:p-10 shadow-sketch transition-all duration-300 group-hover:shadow-sketch-lg group-hover:border-ink-deep/30">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Visual Artwork Column */}
                  <div
                    className={`lg:col-span-6 relative cursor-pointer ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                    onClick={() => setSelectedProject(project)}
                    data-cursor="project"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, rotate: isEven ? -1 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-2xl border border-ink-deep/15 bg-parchment-card/70 overflow-hidden shadow-sm"
                    >
                      <ProjectArt id={project.id} accentColor={project.accentColor} />

                      {/* Floating Glass Stamp / Quick View Indicator */}
                      <div className="absolute top-3 right-3 glass-panel px-3 py-1 rounded-full text-[10px] font-mono text-ink-deep flex items-center gap-1.5 shadow-sm">
                        <FileText className="w-3 h-3 text-paint-orange" />
                        <span>Inspect Architecture ↗</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Descriptive Content Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center space-y-5 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Chapter & Handwritten Annotation */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-paint-orange tracking-widest">
                          PROJECT {project.number}
                        </span>
                        <span className="text-ink-border">/</span>
                        <TechBracket text={project.category} />
                      </div>

                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-600/20 text-amber-800 text-[11px] font-mono">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span>{project.stars}</span>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-ink-black font-normal leading-tight tracking-tight cursor-pointer hover:text-paint-orange transition-colors"
                      data-cursor="project"
                    >
                      {project.title}
                    </h3>

                    {/* Tagline / Subtitle */}
                    <p className="font-mono text-xs sm:text-sm text-paint-orange font-semibold">
                      {project.tagline}
                    </p>

                    {/* Solution Description */}
                    <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                      {project.solution}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-parchment-base border border-ink-deep/15 text-ink-deep"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-3 text-xs font-mono">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ink-black text-parchment-light font-medium hover:bg-paint-orange transition-all shadow-sm group/btn"
                      >
                        <span>Deep-Dive Dossier</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-ink-deep/20 bg-parchment-card hover:bg-parchment-light text-ink-deep transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-paint-green/30 bg-paint-green/10 text-paint-green font-semibold hover:bg-paint-green hover:text-parchment-light transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live App</span>
                        </a>
                      )}
                    </div>

                    {/* Handwritten Margin Note */}
                    <div className="pt-2 font-hand text-sm text-ink-faint">
                      {project.annotation}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Dossier Modal View */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
