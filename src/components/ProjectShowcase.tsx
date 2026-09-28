import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Image as ImageIcon } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

const artwork: Record<string, { title: string; description: string }> = {
  vantage: {
    title: 'Aurora Compositor',
    description: 'An illustrated night sky for a desktop graphics project.',
  },
  forge: {
    title: 'Macchina per il Pensiero',
    description: 'An illustrated machine imagined for local AI tooling.',
  },
  beatrice: {
    title: 'Le Mirabili Chamberi Acustiche',
    description: 'An acoustic study for a neural voice project.',
  },
  synthid: {
    title: 'De Anatomia Luminis',
    description: 'A study of light and signal for image analysis.',
  },
};

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="works" className="relative py-20 sm:py-28 px-6 md:px-12 bg-parchment-base scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end pb-10 border-b border-ink-deep/20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paint-orange font-bold">01 / Selected work</p>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ink-black mt-3">Drawn from the workbench.</h2>
          </div>
          <p className="max-w-sm text-sm sm:text-base leading-relaxed text-ink-muted lg:text-right">
            Four engineering projects, each introduced with a chapter illustration. Explore the work, then open the case study for the technical decisions.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12 pt-10">
          {FEATURED_PROJECTS.map((project, index) => {
            const art = artwork[project.id];
            const image = `/assets/art/${project.id}.webp`;

            return (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-28 grid lg:grid-cols-12 gap-0 overflow-hidden rounded-[1.75rem] bg-parchment-light border border-ink-deep/15 shadow-paper"
              >
                <figure className={`lg:col-span-6 xl:col-span-7 min-w-0 bg-parchment-dark ${index % 2 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[270px] overflow-hidden">
                    <img
                      src={image}
                      alt={`${art.title}, a concept illustration for ${project.title}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.035]"
                    />
                    <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-parchment-light/95 border border-ink-deep/15 px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-ink-black shadow-sm">
                      <ImageIcon className="w-3.5 h-3.5" /> Illustrated chapter cover
                    </span>
                  </div>
                  <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-ink-deep/10 px-5 py-3 bg-parchment-card text-xs text-ink-muted">
                    <span><span className="font-serif italic text-base text-ink-black">{art.title}</span> · {art.description}</span>
                    <a href={image} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-[11px] text-paint-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-paint-blue">
                      View full illustration <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </figcaption>
                </figure>

                <div className={`lg:col-span-6 xl:col-span-5 flex flex-col justify-between p-6 sm:p-9 xl:p-12 ${index % 2 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-paint-orange font-bold">
                      <span>Project {project.number}</span>
                      <span className="h-px w-8 bg-paint-orange/40" />
                      <span className="text-ink-muted font-medium">{project.category}</span>
                    </div>
                    <h3 className="font-serif text-5xl sm:text-6xl text-ink-black leading-none mt-7">{project.title}</h3>
                    <p className="font-mono text-xs sm:text-sm text-paint-blue font-semibold mt-5">{project.tagline}</p>
                    <p className="text-sm sm:text-base leading-relaxed text-ink-muted mt-5">{project.solution}</p>
                    <div className="flex flex-wrap gap-2 mt-6" aria-label="Technologies used">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded-full border border-ink-deep/15 px-3 py-1.5 text-[11px] font-mono text-ink-deep">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-7 mt-7 border-t border-ink-deep/15 font-mono text-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-ink-black text-parchment-light px-5 py-3 font-semibold hover:bg-paint-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-black"
                    >
                      <BookOpen className="w-4 h-4" /> Read case study
                    </button>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink-deep/25 px-5 py-3 text-ink-deep hover:bg-parchment-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-black">
                      <GithubIcon className="w-4 h-4" /> View source <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
