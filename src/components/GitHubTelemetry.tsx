import React, { useState } from 'react';
import { motion } from 'framer-motion';
import githubData from '../data/github.json';
import { Star, Search, ArrowUpRight, Code } from 'lucide-react';
import { GithubIcon } from './Icons';

interface RepoItem {
  name: string;
  description: string;
  language: string;
  topics: string[];
  stars: number;
  forks: number;
  url: string;
  homepage?: string;
  updatedAt: string;
  isFork: boolean;
}

export const GitHubTelemetry: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLang, setSelectedLang] = useState('All');

  const repos: RepoItem[] = githubData as RepoItem[];

  // Calculate high-level stats from real data
  const totalStars = repos.reduce((acc, r) => acc + (r.stars || 0), 0);
  const originalRepos = repos.filter((r) => !r.isFork);

  const languages = ['All', 'TypeScript', 'Python', 'JavaScript', 'Swift', 'Rust', 'C'];

  const filtered = originalRepos
    .filter((r) => {
      const matchSearch =
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchLang = selectedLang === 'All' || r.language === selectedLang;
      return matchSearch && matchLang;
    })
    .sort((a, b) => b.stars - a.stars);

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch {
      return '2026';
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-ink-deep/15">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-paint-orange font-bold">
              05 / OPEN-SOURCE TELEMETRY
            </span>
            <span className="font-hand text-base text-ink-faint">real data · zero third-party clutter</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-black font-normal tracking-tight flex items-center gap-3">
            <span>Repository Index</span>
            <GithubIcon className="w-8 h-8 text-paint-orange" />
          </h2>
          <p className="text-sm sm:text-base text-ink-muted max-w-2xl font-normal leading-relaxed">
            Directly compiled from GitHub build artifacts. 49 public repositories spanning native macOS utilities, real-time DSP audio, local LLMs, and autonomous tools.
          </p>
        </div>

        {/* Global Statistics Counter Pill */}
        <div className="mt-4 md:mt-0 flex items-center gap-4 text-xs font-mono">
          <div className="px-4 py-2 rounded-xl bg-parchment-card border border-ink-deep/15 flex items-center gap-2 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span className="font-bold text-ink-black">{totalStars} Stars</span>
          </div>

          <div className="px-4 py-2 rounded-xl bg-parchment-card border border-ink-deep/15 flex items-center gap-2 shadow-xs">
            <Code className="w-3.5 h-3.5 text-paint-blue" />
            <span className="font-bold text-ink-black">{originalRepos.length} Projects</span>
          </div>
        </div>
      </div>

      {/* Search and Language Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        {/* Search Input Box */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-faint" />
          <input
            type="text"
            placeholder="Search all 49 repositories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-parchment-card/80 border border-ink-deep/20 text-xs font-mono placeholder:text-ink-faint/70 focus:outline-none focus:border-paint-orange focus:bg-parchment-light transition-all shadow-inner"
          />
        </div>

        {/* Language Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedLang === lang
                  ? 'bg-ink-black text-parchment-light font-semibold shadow-xs'
                  : 'bg-parchment-card/60 border border-ink-deep/10 text-ink-muted hover:text-ink-deep'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.slice(0, 15).map((repo) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-parchment-card/70 border border-ink-deep/15 hover:border-ink-deep/40 shadow-sm transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-ink-black group-hover:text-paint-orange transition-colors truncate">
                  {repo.name}
                </span>

                <div className="flex items-center gap-1 text-[11px] font-mono text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-600/20 shrink-0">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>{repo.stars}</span>
                </div>
              </div>

              <p className="text-xs text-ink-muted leading-relaxed font-sans line-clamp-2">
                {repo.description || 'Open-source repository authored by @satiricalguru'}
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-ink-deep/10 flex items-center justify-between text-[10px] font-mono text-ink-faint">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-paint-orange" />
                {repo.language}
              </span>

              <span className="flex items-center gap-1">
                <span>{formatDate(repo.updatedAt)}</span>
                <ArrowUpRight className="w-3 h-3 text-ink-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* View full GitHub Link */}
      <div className="text-center pt-10">
        <a
          href="https://github.com/satiricalguru?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-deep/20 bg-parchment-card hover:bg-ink-black hover:text-parchment-light transition-all text-xs font-mono font-medium shadow-sm group"
        >
          <GithubIcon className="w-4 h-4 text-paint-orange group-hover:text-parchment-light transition-colors" />
          <span>Explore All 49 Repositories on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
