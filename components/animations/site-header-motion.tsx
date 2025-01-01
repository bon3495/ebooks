'use client';

import {
  HTMLMotionProps,
  motion,
  SpringOptions,
  useMotionTemplate,
  useSpring,
  useTransform,
} from 'framer-motion';

import useBoundedScroll from '@/hooks/use-bounded-scroll';

export const springConfig: SpringOptions = {
  bounce: 0.1,
};

interface SiteHeaderMotionProps
  extends Omit<HTMLMotionProps<'header'>, 'ref'> {}

function SiteHeaderMotion({ children, ...props }: SiteHeaderMotionProps) {
  const { scrollYBoundedProgress } = useBoundedScroll(96);

  const scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1],
  );

  const heightSpring = useSpring(
    useTransform(scrollYBoundedProgressThrottled, [0, 1], [96, 56]),
    springConfig,
  );

  const bgColor = useMotionTemplate`hsl(var(--background) / ${useSpring(useTransform(scrollYBoundedProgressThrottled, [0, 1], [0.9, 0.1]), springConfig)})`;

  return (
    <motion.header
      initial
      className="shadow-side-header fixed inset-x-0 top-0 z-50 flex w-dvw bg-background backdrop-blur-md"
      style={{ height: heightSpring, backgroundColor: bgColor }}
      {...props}
    >
      {children}
    </motion.header>
  );
}

export { SiteHeaderMotion };
