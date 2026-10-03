import { useEffect, useRef, useState } from 'react';
import { HiganbanaField } from '../lib/higanbana';
import { go, reducedMotion, useReveal } from '../lib/motion';
import { EMAIL, SOCIALS } from '../data/projects';
import { Split } from './Split';

const YEAR = new Date().getFullYear();

export function Contact() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ref, inView] = useReveal<HTMLDivElement>(0.3);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const cv = canvas.current;
    if (!cv) return;
    let field: HiganbanaField | null = null;
    // Only grow the footer field once it's about to be seen.
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !field) {
          field = new HiganbanaField(cv, {
            still: reducedMotion(),
            startRed: true,
            density: 0.55,
            composition: 'full',
          });
        }
        field?.setVisible(e.isIntersecting);
      },
      { rootMargin: '200px 0px' },
    );
    io.observe(cv);
    const move = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      field?.pointer(e.clientX - r.left, e.clientY - r.top);
    };
    const leave = () => field?.pointerLeave();
    const host = cv.parentElement!;
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerleave', leave);
    return () => {
      io.disconnect();
      field?.destroy();
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerleave', leave);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="contact">
      <div ref={ref} className={`contact__inner ${inView ? 'is-in' : ''}`}>
        <div className="shead__meta">
          <span className="shead__index">05</span>
          <span className="shead__rule" />
          <span className="shead__label">Contact</span>
        </div>
        <h2 className="contact__title">
          <Split text="Got something" by="word" stagger={0.09} />
          <Split text="worth building?" by="word" stagger={0.09} delay={0.18} className="contact__title-2" />
        </h2>
        <div className="contact__actions">
          <a className="contact__email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <button className="btn btn--ghost" onClick={copy} aria-live="polite">
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>
        <ul className="contact__socials">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer">
                <span className="contact__social-label">{s.label}</span>
                <span className="contact__social-handle">{s.handle}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact__field">
        <canvas ref={canvas} aria-hidden="true" />
      </div>

      <footer className="footer">
        <span>© {YEAR} Jatin Pandey</span>
        <span className="footer__eq" title="Still counting.">
          1000 − 7 = 993
        </span>
        <a href="#top" onClick={(e) => go(e, 'top')}>
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
