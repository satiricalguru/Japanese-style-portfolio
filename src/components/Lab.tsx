import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LAB_EXPERIMENTS } from '../data/projects';
import { Star, FlaskConical, ArrowUpRight, Filter } from 'lucide-react';

export const Lab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Computer Vision',
    'AI & Design',
    'AI Benchmarking',
    'Desktop AI',
    'Audio DSP',
    'Security & Forensics',
    'Browser Extension'
  ];

  const filteredExperiments =
    selectedCategory === 'All'
      ? LAB_EXPERIMENTS
      : LAB_EXPERIMENTS.filter((exp) => exp.category === selectedCategory);

  return (
    <section id="lab" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-ink-deep/15">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-paint-teal font-bold">
              02 / THE LABORATORY
            </span>
            <span className="font-hand text-base text-ink-faint">workbench of odd machines</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-black font-normal tracking-tight flex items-center gap-3">
            <span>The Lab</span>
            <FlaskConical className="w-8 h-8 text-paint-teal" />
          </h2>
          <p className="text-sm sm:text-base text-ink-muted max-w-2xl font-normal leading-relaxed">
            Smaller tools, automated browser extensions, reverse-engineering probes, and experimental hardware drivers that started as casual codebase inspections.
          </p>
        </div>

        <div className="mt-4 md:mt-0 font-mono text-xs text-ink-faint">
          <span>CATALOG: {LAB_EXPERIMENTS.length} EXPERIMENTS</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        <div className="flex items-center gap-1 text-xs font-mono text-ink-faint mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>FILTER:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
              selectedCategory === cat
                ? 'bg-ink-black text-parchment-light font-semibold shadow-sm'
                : 'bg-parchment-card/80 border border-ink-deep/10 text-ink-muted hover:text-ink-deep hover:bg-parchment-light'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Pinned Sketchbook Notes Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredExperiments.map((item, idx) => (
            <motion.div
              layout
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -4, rotate: (idx % 2 === 0 ? 0.7 : -0.7) }}
              className="relative p-6 rounded-2xl bg-parchment-card/75 border border-ink-deep/15 shadow-sketch flex flex-col justify-between group hover:border-ink-deep/40 transition-all duration-300"
            >
              {/* Little Hand-Drawn Thumbtack / Pin Marker */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-paint-orange/70 border border-ink-deep/20 shadow-sm" />

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-paint-teal uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-paint-teal/10 border border-paint-teal/20">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-ink-faint">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>{item.stars}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-ink-black group-hover:text-paint-teal transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-ink-muted leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-ink-deep/10 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-hand text-xs text-paint-orange font-bold">
                    {item.highlight}
                  </span>
                  <span className="font-mono text-[10px] text-ink-faint">
                    Lang: {item.language}
                  </span>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-ink-deep/20 bg-parchment-light flex items-center justify-center text-ink-deep hover:bg-ink-black hover:text-parchment-light transition-colors group/link"
                  aria-label={`Open repository ${item.name}`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
