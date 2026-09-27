import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'project' | 'text'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect hovered target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      const clickable = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');

      if (projectCard) {
        setCursorType('project');
        setCursorText('VIEW ↗');
      } else if (clickable) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Follower / Glass Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center text-center font-mono font-bold select-none"
        animate={{
          x: mousePosition.x - (cursorType === 'project' ? 38 : cursorType === 'pointer' ? 22 : 12),
          y: mousePosition.y - (cursorType === 'project' ? 38 : cursorType === 'pointer' ? 22 : 12),
          width: cursorType === 'project' ? 76 : cursorType === 'pointer' ? 44 : 24,
          height: cursorType === 'project' ? 76 : cursorType === 'pointer' ? 44 : 24,
          backgroundColor:
            cursorType === 'project'
              ? 'rgba(23, 22, 20, 0.88)'
              : cursorType === 'pointer'
              ? 'rgba(200, 90, 50, 0.18)'
              : 'rgba(38, 36, 33, 0.05)',
          borderColor:
            cursorType === 'project'
              ? 'rgba(255, 255, 255, 0.3)'
              : cursorType === 'pointer'
              ? 'rgba(200, 90, 50, 0.6)'
              : 'rgba(38, 36, 33, 0.25)',
          backdropFilter: cursorType === 'pointer' || cursorType === 'project' ? 'blur(4px)' : 'none',
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 300,
          mass: 0.5,
        }}
        style={{
          borderRadius: '50%',
          borderWidth: cursorType === 'project' ? '1px' : '1.5px',
          borderStyle: 'solid',
        }}
      >
        {cursorType === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] text-parchment-light uppercase tracking-wider"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Ink Brush Tip */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 bg-ink-black rounded-full"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: cursorType === 'pointer' ? 0 : cursorType === 'project' ? 0 : 1,
          opacity: cursorType === 'default' ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
        style={{ width: 6, height: 6 }}
      />
    </>
  );
};
