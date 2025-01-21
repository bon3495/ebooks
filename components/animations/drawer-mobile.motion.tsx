'use client';

import { PropsWithChildren } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

import useBoundedScroll from '@/hooks/use-bounded-scroll';
import { cn } from '@/lib/utils';
import { springConfig } from '@/types/globals.type';

interface DrawerMobileMotionProps {
  className?: string;
}

const DrawerMobileMotion = ({
  children,
  className,
}: PropsWithChildren<DrawerMobileMotionProps>) => {
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
    <motion.div
      initial={false}
      className="fixed inset-x-0 z-50 flex w-dvw px-4 xl:hidden"
      style={{
        height: 72,
        bottom: translateY,
        opacity,
      }}
      whileHover={{
        bottom: 8,
        opacity: 1,
      }}
    >
      <motion.div
        className={cn(
          'container flex items-center rounded-3xl bg-analogous-pale-peach-tan/80 px-4 shadow-pale-peach-tan backdrop-blur-sm',
          className,
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export { DrawerMobileMotion };
