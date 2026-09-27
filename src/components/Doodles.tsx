import React from 'react';

export const HandArrow: React.FC<{ className?: string; direction?: 'right' | 'down' | 'curved' }> = ({
  className = "w-12 h-6 text-ink-muted",
  direction = 'right'
}) => {
  if (direction === 'down') {
    return (
      <svg className={className} viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2 C13 14, 11 26, 12 44 M5 36 C8 40, 11 44, 12 44 M19 36 C16 40, 13 44, 12 44"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'curved') {
    return (
      <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 8 C20 4, 45 10, 48 30 M40 22 C45 28, 48 30, 48 30 M54 22 C51 28, 48 30, 48 30"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 12 C14 11, 32 13, 44 12 M36 5 C40 8, 44 11, 44 12 M36 19 C40 16, 44 13, 44 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HandCircle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-24 h-24",
  color = "#C85A32"
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 50 C18 25, 45 12, 75 18 C95 24, 98 60, 80 80 C60 98, 22 92, 15 65 C10 45, 30 18, 55 15 C80 12, 88 35, 88 52"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
  </svg>
);

export const HandUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = "w-36 h-4",
  color = "#C85A32"
}) => (
  <svg className={className} viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 11 C40 6, 95 14, 157 7 M12 13 C55 10, 110 15, 148 10"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export const HandStar: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "#C98A2C"
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M5 19 L19 5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const TechBracket: React.FC<{ className?: string; text: string }> = ({
  className = "",
  text
}) => (
  <span className={`inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-ink-muted ${className}`}>
    <span className="text-ink-faint opacity-60">[</span>
    <span>{text}</span>
    <span className="text-ink-faint opacity-60">]</span>
  </span>
);

export const InkStamp: React.FC<{ text: string; sub?: string; className?: string }> = ({
  text,
  sub,
  className = ""
}) => (
  <div className={`inline-flex flex-col items-center justify-center p-2 border-2 border-dashed border-paint-wine/40 rounded-lg text-paint-wine rotate-[-3deg] select-none ${className}`}>
    <span className="font-mono text-[10px] uppercase font-bold tracking-widest leading-none">{text}</span>
    {sub && <span className="font-hand text-xs font-semibold text-paint-wine/80 leading-tight mt-0.5">{sub}</span>}
  </div>
);
