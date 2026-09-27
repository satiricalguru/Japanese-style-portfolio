import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      setIsHoveringProject(Boolean(projectCard));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <AnimatePresence>
      {isHoveringProject && (
        <motion.div
          key="project-cursor"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePosition.x - 36,
            y: mousePosition.y - 36,
          }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 350,
            mass: 0.4,
          }}
          className="fixed top-0 left-0 pointer-events-none z-50 w-[72px] h-[72px] rounded-full bg-ink-black/90 backdrop-blur-md border border-white/30 flex items-center justify-center text-center shadow-lg"
        >
          <span className="text-[10px] font-mono font-bold text-parchment-light uppercase tracking-wider">
            VIEW ↗
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
