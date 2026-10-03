import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { SectionHead } from './SectionHead';
import { liveUrl, repos } from '../data/projects';
import { useReveal } from '../lib/motion';

const fmt = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' });
const INITIAL = 12;

export function Archive() {
  const [lang, setLang] = useState('All');
  const [all, setAll] = useState(false);
  const [ref, inView] = useReveal<HTMLDivElement>(0.05);

  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    for (const r of repos) {
      const l = r.language === 'Code' ? 'Other' : r.language;
      counts.set(l, (counts.get(l) ?? 0) + 1);
    }
    return [['All', repos.length] as const, ...[...counts.entries()].sort((a, b) => b[1] - a[1])];
  }, []);

  const sorted = useMemo(
    () =>
      repos
        .filter((r) => r.name !== 'satiricalguru')
        .filter((r) => lang === 'All' || (r.language === 'Code' ? 'Other' : r.language) === lang)
        .sort((a, b) => b.stars - a.stars || +new Date(b.updatedAt) - +new Date(a.updatedAt)),
    [lang],
  );
  const shown = all ? sorted : sorted.slice(0, INITIAL);

  return (
    <section id="archive" className="section archive">
      <SectionHead
        index="04"
        kanji="録"
        label="Archive"
        title="Every public repo"
        note="Pulled from the GitHub API each time the site is built."
      />

      <div className="archive__filters" role="group" aria-label="Filter by language">
        {languages.map(([l, n]) => (
          <button
            key={l}
            className={`chip ${lang === l ? 'is-active' : ''}`}
            aria-pressed={lang === l}
            onClick={() => {
              setLang(l);
              setAll(false);
            }}
          >
            {l}
            <span>{n}</span>
          </button>
        ))}
      </div>

      <div ref={ref} className={`archive__table ${inView ? 'is-in' : ''}`} role="list">
        <div className="archive__head" aria-hidden="true">
          <span>Repository</span>
          <span>Description</span>
          <span>Language</span>
          <span>Stars</span>
          <span>Updated</span>
        </div>
        {shown.map((r, i) => {
          const live = liveUrl(r);
          return (
          <div
            key={r.name}
            className="arow"
            role="listitem"
            style={{ '--i': Math.min(i, 14) } as CSSProperties}
          >
            <span className="arow__name">
              <a className="arow__link" href={r.url} target="_blank" rel="noreferrer">
                {r.name.replace(/-/g, ' ')}
              </a>
              <span className="arow__arrow" aria-hidden="true">
                ↗
              </span>
              {live ? (
                <a className="arow__live" href={live} target="_blank" rel="noreferrer" aria-label={`${r.name} live site`}>
                  <span className="pill__dot" />
                  Live
                </a>
              ) : null}
            </span>
            <span className="arow__desc">{r.description.replace(/\p{Extended_Pictographic}️?\s*/gu, '')}</span>
            <span className="arow__lang">{r.language === 'Code' ? '—' : r.language}</span>
            <span className="arow__stars">{r.stars ? `★ ${r.stars}` : '—'}</span>
            <span className="arow__date">{fmt.format(new Date(r.updatedAt))}</span>
          </div>
          );
        })}
      </div>

      {sorted.length > INITIAL ? (
        <button className="btn btn--ghost archive__more" onClick={() => setAll((v) => !v)}>
          {all ? 'Show fewer' : `Show all ${sorted.length}`}
          <span className="btn__arrow" aria-hidden="true">
            {all ? '↑' : '↓'}
          </span>
        </button>
      ) : null}
    </section>
  );
}
