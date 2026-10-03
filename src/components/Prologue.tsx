import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { SectionHead } from './SectionHead';
import { stats } from '../data/projects';
import profile from '../data/github-profile.json';
import { useReveal, useScrollProgress } from '../lib/motion';

const STATEMENT =
  "I build local-first AI tools, native desktop apps and real-time audio software — then take them apart to see exactly where they *break.*";

function CountUp({ to, run }: { to: number; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1600);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, run]);
  return <>{n}</>;
}

export function Prologue() {
  const words = STATEMENT.split(' ');
  const wordEls = useRef<(HTMLSpanElement | null)[]>([]);
  const statementRef = useScrollProgress<HTMLParagraphElement>(
    (p) => {
      // Light each word in turn as the statement crosses the viewport.
      const lit = p * (words.length + 4);
      wordEls.current.forEach((el, i) => {
        if (!el) return;
        const v = Math.min(1, Math.max(0, lit - i));
        el.style.setProperty('--lit', v.toFixed(3));
      });
    },
    { start: 0.85, end: 0.55 },
  );
  const [statsRef, statsIn] = useReveal<HTMLDivElement>(0.4);
  const [bioRef, bioIn] = useReveal<HTMLDivElement>(0.25);
  const s = stats();
  const numbers = [
    { label: 'Public repositories', value: profile.publicRepos || s.repos },
    { label: 'Stars on GitHub', value: s.stars },
    { label: 'Followers', value: profile.followers },
    { label: 'Languages shipped', value: s.languages },
  ];

  return (
    <section id="about" className="section prologue">
      <SectionHead index="01" kanji="序" label="Prologue" title="Who's behind it" />

      <p ref={statementRef} className="statement">
        {words.map((w, i) => {
          const hot = w.startsWith('*');
          return (
            <span
              key={i}
              ref={(el) => {
                wordEls.current[i] = el;
              }}
              className={`statement__w ${hot ? 'is-hot' : ''}`}
            >
              {w.replace(/\*/g, '')}{' '}
            </span>
          );
        })}
      </p>

      <div ref={bioRef} className={`prologue__grid ${bioIn ? 'is-in' : ''}`}>
        <figure className="prologue__portrait">
          <div className="prologue__frame">
            <img src="/avatar.jpg" alt="Jatin Pandey's avatar" width="460" height="460" loading="lazy" />
          </div>
          <figcaption>
            <span>Jatin Pandey</span>
            <span>@satiricalguru</span>
          </figcaption>
        </figure>
        <div className="prologue__bio">
          <p>
            Most of what I make runs on your own machine, not in someone else's cloud: private assistants, voice
            changers with almost no delay, wallpaper engines, and a code editor that sends nothing home. I care about
            how fast software feels, and about which data never leaves your device.
          </p>
          <p>
            Away from shipping, I play CTFs, read binaries in Ghidra, and build tools that show what software is
            quietly doing behind your back. Currently open to freelance work and full-time roles.
          </p>
        </div>
      </div>

      <div ref={statsRef} className={`stats ${statsIn ? 'is-in' : ''}`}>
        {numbers.map((n, i) => (
          <div className="stat" key={n.label} style={{ '--i': i } as CSSProperties}>
            <span className="stat__value">
              <CountUp to={n.value} run={statsIn} />
            </span>
            <span className="stat__label">{n.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
