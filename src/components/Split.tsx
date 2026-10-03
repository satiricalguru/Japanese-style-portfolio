import type { CSSProperties } from 'react';

interface SplitProps {
  text: string;
  className?: string;
  /** Base delay in seconds. */
  delay?: number;
  /** Per-character stagger in seconds. */
  stagger?: number;
  by?: 'char' | 'word';
}

/** Masked text that rises into place once an ancestor gets `is-in`. */
export function Split({ text, className = '', delay = 0, stagger = 0.035, by = 'char' }: SplitProps) {
  let i = 0;
  const words = text.split(' ');
  return (
    <span className={`split ${className}`} aria-label={text} role="text">
      {words.map((word, wi) => (
        <span className="split__word" aria-hidden="true" key={wi}>
          {(by === 'char' ? [...word] : [word]).map((ch, ci) => {
            const style = { '--d': `${delay + i++ * stagger}s` } as CSSProperties;
            return (
              <span className="split__char" style={style} key={ci}>
                {ch}
              </span>
            );
          })}
          {wi < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </span>
  );
}
