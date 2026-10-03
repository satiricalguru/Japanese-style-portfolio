import type { CSSProperties } from 'react';
import { SectionHead } from './SectionHead';
import { DISCIPLINES } from '../data/projects';
import { useReveal } from '../lib/motion';

const MARQUEE = [
  'TypeScript',
  'Swift',
  'Python',
  'Rust',
  'Electron',
  'React',
  'Three.js',
  'FastAPI',
  'Ollama',
  'llama.cpp',
  'VST3',
  'Ghidra',
  'C',
  'Node',
];

export function Craft() {
  const [ref, inView] = useReveal<HTMLDivElement>(0.15);
  return (
    <section id="craft" className="section craft">
      <SectionHead index="03" kanji="技" label="Craft" title="What I work on" />

      <div ref={ref} className={`craft__grid ${inView ? 'is-in' : ''}`}>
        {DISCIPLINES.map((d, i) => (
          <article className="craft__card" key={d.title} style={{ '--i': i } as CSSProperties}>
            <span className="craft__kanji" lang="ja" aria-hidden="true">
              {d.kanji}
            </span>
            <span className="craft__num">0{i + 1}</span>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
            <ul className="tags">
              {d.tools.map((t) => (
                <li className="tag" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((k) => (
            <span className="marquee__group" key={k}>
              {MARQUEE.map((m) => (
                <span key={m} className="marquee__item">
                  {m}
                  <svg viewBox="0 0 32 32" className="marquee__mark">
                    <use href="#lily-mark" />
                  </svg>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
