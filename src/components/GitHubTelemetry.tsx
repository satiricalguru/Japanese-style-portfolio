import React from 'react';
import githubData from '../data/github.json';
import { Star, ArrowUpRight, Code, GitBranch } from 'lucide-react';
import { GithubIcon } from './Icons';
import { getGitHubStats } from '../data/projects';

interface RepoItem {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  updatedAt: string;
  isFork: boolean;
}

export const GitHubTelemetry: React.FC = () => {
  const stats = getGitHubStats();
  const repos = githubData as RepoItem[];
  
  // Get latest 3 active repos
  const latestRepos = repos
    .filter((r) => !r.isFork)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch {
      return '2026';
    }
  };

  return (
    <section className="relative py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Clean Activity Ledger Container */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-ink-deep/15 shadow-sm space-y-8">
        
        {/* Header row with stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-ink-deep/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <GithubIcon className="w-4 h-4 text-paint-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-paint-orange font-bold">
                OPEN SOURCE ACTIVITY
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink-black font-normal">
              Active Repositories & Engineering Activity
            </h3>
            <p className="text-xs text-ink-muted max-w-xl">
              Dynamically compiled during deployment. All codebases are open-source and hosted on GitHub.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <div className="px-4 py-2 rounded-xl bg-parchment-base border border-ink-deep/10 flex items-center gap-2">
              <Code className="w-3.5 h-3.5 text-paint-blue" />
              <span className="font-bold text-ink-black">{stats.totalRepos} Repositories</span>
            </div>

            <div className="px-4 py-2 rounded-xl bg-parchment-base border border-ink-deep/10 flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="font-bold text-ink-black">{stats.totalStars} Stars</span>
            </div>

            <div className="px-4 py-2 rounded-xl bg-parchment-base border border-ink-deep/10 flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5 text-paint-green" />
              <span className="text-ink-deep font-medium">{stats.topLanguages.slice(0, 3).join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Recently Updated Projects Strip */}
        <div className="space-y-3">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint block">
            Recent Activity & Releases
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {latestRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-parchment-base/70 border border-ink-deep/10 hover:border-ink-deep/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink-black group-hover:text-paint-orange transition-colors truncate">
                      {repo.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-faint group-hover:text-paint-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-xs text-ink-muted line-clamp-2 font-sans">
                    {repo.description || 'Open-source software project'}
                  </p>
                </div>
                <div className="pt-3 mt-2 border-t border-ink-deep/10 flex items-center justify-between text-[10px] font-mono text-ink-faint">
                  <span>{repo.language}</span>
                  <span>{formatDate(repo.updatedAt)}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Action Link to GitHub Profile */}
        <div className="pt-4 border-t border-ink-deep/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-ink-muted">
            Interested in inspecting commits, forks, or source trees?
          </span>

          <a
            href="https://github.com/satiricalguru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-black text-parchment-light font-mono text-xs font-medium hover:bg-paint-orange transition-all shadow-sm group shrink-0"
          >
            <GithubIcon className="w-4 h-4 text-paint-orange group-hover:text-parchment-light transition-colors" />
            <span>Browse All {stats.totalRepos} Repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
