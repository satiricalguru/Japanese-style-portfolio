import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { SectionHead } from './SectionHead';
import { WORKS, workStars } from '../data/projects';
import { useReveal } from '../lib/motion';

export function Works() {
  const [open, setOpen] = useState<string | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [listRef, inView] = useReveal<HTMLOListElement>(0.1);
  const float = useRef<HTMLDivElement>(null);

  // A floating ink seal trails the cursor across the list.
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const list = listRef.current;
    const el = float.current;
    if (!list || !el) return;
    const pos = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf = 0;
    const move = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };
    const tick = () => {
      cur.x += (pos.x - cur.x) * 0.12;
      cur.y += (pos.y - cur.y) * 0.12;
      el.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    list.addEventListener('pointermove', move);
    return () => {
      cancelAnimationFrame(raf);
      list.removeEventListener('pointermove', move);
    };
  }, [listRef]);

  return (
    <section id="work" className="section works">
      <SectionHead
        index="02"
        kanji="作"
        label="Selected work"
        title="Things I've made"
        note="Six projects from 52 public repositories. Open any of them to see what it does and how it's built."
      />

      <ol ref={listRef} className={`works__list ${inView ? 'is-in' : ''}`} onPointerLeave={() => setHover(null)}>
        {WORKS.map((w, i) => {
          const isOpen = open === w.id;
          const stars = workStars(w);
          return (
            <li
              key={w.id}
              className={`work ${isOpen ? 'is-open' : ''}`}
              style={{ '--i': i } as CSSProperties}
              onPointerEnter={() => setHover(i)}
            >
              <button
                className="work__row"
                aria-expanded={isOpen}
                aria-controls={`work-${w.id}`}
                onClick={() => setOpen(isOpen ? null : w.id)}
                data-cursor={isOpen ? 'Close' : 'Open'}
              >
                <span className="work__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="work__title">{w.title}</span>
                <span className="work__tagline">{w.tagline}</span>
                <span className="work__domain">{w.domain}</span>
                <span className="work__toggle" aria-hidden="true" />
              </button>
              <div className="work__panel" id={`work-${w.id}`} role="region" aria-label={w.title}>
                <div className="work__panel-inner">
                  <div className="work__seal" lang="ja" aria-hidden="true">
                    {w.kanji}
                  </div>
                  <div className="work__body">
                    <p className="work__summary">{w.summary}</p>
                    <ul className="work__points">
                      {w.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <aside className="work__aside">
                    <dl>
                      <div>
                        <dt>Stack</dt>
                        <dd className="tags">
                          {w.stack.map((s) => (
                            <span className="tag" key={s}>
                              {s}
                            </span>
                          ))}
                        </dd>
                      </div>
                      {stars > 0 ? (
                        <div>
                          <dt>Stars</dt>
                          <dd>★ {stars}</dd>
                        </div>
                      ) : null}
                    </dl>
                    <a className="link-arrow" href={w.repo} target="_blank" rel="noreferrer">
                      View repository <span aria-hidden="true">↗</span>
                    </a>
                    {w.live ? (
                      <a className="link-arrow" href={w.live} target="_blank" rel="noreferrer">
                        Live site <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                  </aside>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div ref={float} className={`works__float ${hover !== null && !open ? 'is-on' : ''}`} aria-hidden="true">
        <div className="works__float-inner">
          {WORKS.map((w, i) => (
            <span key={w.id} lang="ja" className={hover === i ? 'is-current' : ''}>
              {w.kanji}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
