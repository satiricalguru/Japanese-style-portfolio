import { useEffect, useState } from 'react';

const DURATION = 2000;
const STEPS = Math.floor(1000 / 7); // 142 subtractions: 1000 → 6

/** "1000 − 7": counts down by sevens, then lifts like a curtain. */
export function Preloader({ onReveal, onDone }: { onReveal: () => void; onDone: () => void }) {
  const [value, setValue] = useState(1000);
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let raf = 0;
    let t1 = 0;
    let t2 = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 2.4);
      setProgress(eased);
      setValue(1000 - 7 * Math.floor(eased * STEPS));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        t1 = window.setTimeout(() => {
          setLeaving(true);
          onReveal();
        }, 260);
        t2 = window.setTimeout(onDone, 260 + 1100);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onReveal, onDone]);

  return (
    <div className={`loader ${leaving ? 'is-leaving' : ''}`} role="status" aria-label="Loading portfolio">
      <div className="loader__top">
        <span>Jatin Pandey</span>
        <span>Portfolio ©2026</span>
      </div>
      <div className="loader__center">
        <span className="loader__eq">1000 − 7</span>
        <span className="loader__num">{value}</span>
      </div>
      <div className="loader__bottom">
        <span lang="ja">彼岸花</span>
        <span>{String(Math.round(progress * 100)).padStart(3, '0')}%</span>
      </div>
      <span className="loader__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
