'use client';

import { useRef, useEffect } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';

export function useParallax(speed = 0.35) {
  const ref = useRef(null);
  const y = useMotionValue(0);
  const yTransform = useTransform(y, (value) => value * speed);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current;
        const elementOffset = element.getBoundingClientRect().top;
        y.set(elementOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y, speed]);

  return { ref, y: yTransform };
}
