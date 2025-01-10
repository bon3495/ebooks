'use client';

import { motion, SpringOptions, useSpring, useTransform } from 'framer-motion';

import useBoundedScroll from '@/hooks/use-bounded-scroll';

export const springConfig: SpringOptions = {
  bounce: 0.1,
};

type SiteHeaderMotionType = {
  children: React.ReactNode;
};

function SiteHeaderMotion({ children }: SiteHeaderMotionType) {
  const { scrollYBoundedProgress } = useBoundedScroll(1);

  const scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [1, 0],
    [0, 1],
  );

  const opacity = useSpring(
    useTransform(scrollYBoundedProgressThrottled, [0, 0.1], [1, 0]),
    springConfig,
  );

  const translateY = useSpring(
    useTransform(scrollYBoundedProgressThrottled, [0, 0.1], [8, -50]),
    springConfig,
  );

  return (
    <motion.header
      initial={false}
      className="fixed inset-x-0 z-50 flex w-dvw bg-transparent px-4"
      style={{
        height: 72,
        top: translateY,
        opacity,
      }}
      whileHover={{
        top: 8,
        opacity: 1,
      }}
    >
      <motion.div className="shadow-terracotta container flex items-center justify-between rounded-3xl bg-monochromatic-cream-white/50 px-4 backdrop-blur-md">
        {children}
      </motion.div>
    </motion.header>
  );
}

export { SiteHeaderMotion };
