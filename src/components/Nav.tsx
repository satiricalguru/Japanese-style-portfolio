import { useEffect, useState } from 'react';
import { go } from '../lib/motion';

const LINKS = [
  { id: 'about', label: 'Prologue' },
  { id: 'work', label: 'Work' },
  { id: 'craft', label: 'Craft' },
  { id: 'archive', label: 'Archive' },
];

function useClock() {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Nav({ ready }: { ready: boolean }) {
  const time = useClock();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) if (en.isIntersecting) setActive(en.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['top', ...LINKS.map((l) => l.id), 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${ready ? 'is-in' : ''}`}>
      <a href="#top" className="nav__brand" onClick={(e) => go(e, 'top')} aria-label="Jatin Pandey — back to top">
        <svg viewBox="0 0 32 32" aria-hidden="true" className="nav__mark">
          <use href="#lily-mark" />
        </svg>
        <span>Jatin Pandey</span>
      </a>
      <nav className="nav__links" aria-label="Sections">
        {LINKS.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => go(e, l.id)}
            className={active === l.id ? 'is-active' : ''}
          >
            <span className="nav__num">0{i + 1}</span>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav__right">
        <span className="nav__clock">
          IST <time>{time}</time>
        </span>
        <a href="#contact" className="pill" onClick={(e) => go(e, 'contact')}>
          <span className="pill__dot" />
          Contact
        </a>
      </div>
    </header>
  );
}
