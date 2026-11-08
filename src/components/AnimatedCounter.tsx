'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  separator = ',',
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // easeOutExpo function for energetic start and silky finish
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.floor(from + (to - from) * easeOut);
        
        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  // Format with separator
  const formatted = count.toLocaleString('en-US');

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
