'use client';

import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import { useIsMobile } from '@/hooks/useIsMobile';

export function Parallax({ children, speed = 0.35 }) {
  const { ref, y } = useParallax(speed);
  const isMobile = useIsMobile();

  if (isMobile) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
