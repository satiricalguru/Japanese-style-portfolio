import { useEffect, useRef } from 'react';
import { HiganbanaField } from '../lib/higanbana';
import { go, reducedMotion } from '../lib/motion';
import { Split } from './Split';

export function Hero({ ready }: { ready: boolean }) {
  const section = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ready || !canvas.current || !section.current) return;
    const el = section.current;
    const cv = canvas.current;
    const field = new HiganbanaField(cv, { still: reducedMotion(), delay: 0.35 });

    const io = new IntersectionObserver(([e]) => field.setVisible(e.isIntersecting));
    io.observe(el);

    const local = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top] as const;
    };
    const move = (e: PointerEvent) => field.pointer(...local(e));
    const leave = () => field.pointerLeave();
    const click = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) return;
      field.ripple(...local(e));
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    el.addEventListener('pointerdown', click);

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const p = Math.min(1, Math.max(0, window.scrollY / (el.offsetHeight * 0.75)));
        field.setScrollRed(p * p * (3 - 2 * p));
        el.style.setProperty('--hero-p', p.toFixed(4));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      field.destroy();
      io.disconnect();
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
      el.removeEventListener('pointerdown', click);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ready]);

  return (
    <section
      id="top"
      ref={section}
      className={`hero ${ready ? 'is-in' : ''}`}
      data-cursor="Click"
      aria-label="Introduction"
    >
      <canvas ref={canvas} className="hero__field" aria-hidden="true" />
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__inner">
        <p className="eyebrow hero__eyebrow">
          <span className="eyebrow__dot" />
          App &amp; Web Developer — India
        </p>
        <h1 className="hero__title">
          <Split text="Jatin" delay={0.15} stagger={0.06} />
          <Split text="Pandey" delay={0.35} stagger={0.06} className="hero__title-2" />
        </h1>
        <div className="hero__meta">
          <p className="hero__lede">
            Building things, <em>breaking</em> things, and occasionally fixing them.
          </p>
          <ul className="hero__roles" aria-label="Roles">
            <li>App &amp; Web Developer</li>
            <li>CTF Grinder</li>
            <li>AI Tinkerer</li>
          </ul>
          <div className="hero__cta">
            <a href="#work" className="btn btn--red" onClick={(e) => go(e, 'work')}>
              Selected work
              <span className="btn__arrow" aria-hidden="true">↓</span>
            </a>
            <a href="https://github.com/satiricalguru" className="btn btn--ghost" target="_blank" rel="noreferrer">
              GitHub
              <span className="btn__arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <p className="hero__vertical" lang="ja" aria-hidden="true">
        彼岸花 — 咲いて、赤く染まる
      </p>

      <div className="hero__foot">
        <span className="hero__scroll">
          <span className="hero__scroll-line" />
          Scroll
        </span>
        <span className="hero__hint">Move to stain · Click to ripple</span>
        <span className="hero__coords">India · Open to work</span>
      </div>
    </section>
  );
}
