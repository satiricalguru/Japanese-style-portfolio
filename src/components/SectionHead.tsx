import { useReveal } from '../lib/motion';
import { Split } from './Split';

interface Props {
  index: string;
  kanji: string;
  label: string;
  title: string;
  note?: string;
}

export function SectionHead({ index, kanji, label, title, note }: Props) {
  const [ref, inView] = useReveal<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className={`shead ${inView ? 'is-in' : ''}`}>
      <div className="shead__meta">
        <span className="shead__index">{index}</span>
        <span className="shead__rule" />
        <span className="shead__label">{label}</span>
      </div>
      <div className="shead__main">
        <span className="shead__kanji" lang="ja" aria-hidden="true">
          {kanji}
        </span>
        <h2 className="shead__title">
          <Split text={title} by="word" stagger={0.08} />
        </h2>
      </div>
      {note ? <p className="shead__note">{note}</p> : null}
    </div>
  );
}
