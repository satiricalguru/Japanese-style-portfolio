import { useCallback, useEffect, useState } from 'react';
import { Preloader } from './components/Preloader';
import { Cursor } from './components/Cursor';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Prologue } from './components/Prologue';
import { Works } from './components/Works';
import { Craft } from './components/Craft';
import { Archive } from './components/Archive';
import { Contact } from './components/Contact';
import { lockScroll, reducedMotion, startSmoothScroll } from './lib/motion';

const SEEN = 'jp:intro-seen';

function introSeen() {
  try {
    return sessionStorage.getItem(SEEN) === '1';
  } catch {
    return false;
  }
}

export default function App() {
  const [skip] = useState(() => reducedMotion() || introSeen());
  const [ready, setReady] = useState(skip);
  const [loading, setLoading] = useState(!skip);

  useEffect(() => startSmoothScroll(), []);
  useEffect(() => lockScroll(loading), [loading]);

  const reveal = useCallback(() => setReady(true), []);
  const done = useCallback(() => {
    setLoading(false);
    try {
      sessionStorage.setItem(SEEN, '1');
    } catch {
      /* storage unavailable — the intro simply plays again */
    }
  }, []);

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="lily-mark" viewBox="0 0 32 32">
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M16 19C13.5 13.5 9 10.5 3.5 10" />
            <path d="M16 19C18.5 13.5 23 10.5 28.5 10" />
            <path d="M16 19C15 12.5 12.5 7 9 3.5" />
            <path d="M16 19C17 12.5 19.5 7 23 3.5" />
            <path d="M16 19V2.5" />
            <path d="M16 19C11.5 19.5 7.5 18 6 14.5" />
            <path d="M16 19C20.5 19.5 24.5 18 26 14.5" />
            <path d="M16 19.5V30" opacity=".55" />
          </g>
        </symbol>
      </svg>

      {loading ? <Preloader onReveal={reveal} onDone={done} /> : null}
      <Cursor />
      <Nav ready={ready} />
      <main>
        <Hero ready={ready} />
        <Prologue />
        <Works />
        <Craft />
        <Archive />
      </main>
      <Contact />
    </>
  );
}
