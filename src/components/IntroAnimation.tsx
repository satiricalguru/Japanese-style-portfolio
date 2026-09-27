import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if user already saw intro this session
    const hasSeenIntro = sessionStorage.getItem('jp_portfolio_intro');
    if (hasSeenIntro) {
      setVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('jp_portfolio_intro', 'true');
      onComplete();
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-parchment-base flex flex-col items-center justify-center pointer-events-none notebook-grid"
        >
          {/* Handwritten ink stroke signature reveal */}
          <div className="relative flex flex-col items-center gap-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-12 h-12 rounded-full border border-ink-deep/20 flex items-center justify-center font-serif italic text-2xl text-ink-deep bg-parchment-card shadow-sketch"
            >
              JP
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-serif text-3xl sm:text-4xl text-ink-black font-normal tracking-tight"
            >
              satiricalguru
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
              className="h-0.5 bg-paint-orange rounded-full"
            />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="font-hand text-base text-ink-muted mt-1"
            >
              loading engineer's notebook...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
