'use client';

import { motion } from 'framer-motion';
import { revealVariant } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function RevealOnScroll({ children, delay = 0 }) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={revealVariant}
      transition={{ ...revealVariant.visible.transition, delay }}
    >
      {children}
    </motion.div>
  );
}
