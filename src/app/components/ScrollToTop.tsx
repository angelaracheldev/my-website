'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsFlying(true);

    // Smooth scroll with easing
    const start = window.scrollY;
    const duration = 2000;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, start * (1 - ease));

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);

    setTimeout(() => setIsFlying(false), 2000);
  };

  return (
    isVisible && (
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-1"
        initial={{ y: 0, opacity: 1 }}
        animate={
          isFlying
            ? { y: -window.innerHeight / 2, opacity: 0 }
            : { y: 0, opacity: 1 }
        }
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        {/* Rocket Button */}
        <motion.button
          onClick={scrollToTop}
          className="btn btn-circle"
          whileTap={{ scale: 0.95 }}
          animate={isFlying ? { rotate: [0, 1, -1, 2, -2, 0] } : {}}
          transition={{ duration: 0.4, repeat: 3 }}
        >
          <div className="text-4xl rotate-313">🚀</div>

        </motion.button>

        {/* Flame / Trail */}
        {isFlying && (
          <motion.div
            className="w-2 h-20 bg-orange-400 rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0.5, 1.5, 1, 0] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        )}
      </motion.div>
    )
  );
}
