'use client';

import { PropsWithChildren } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

import useBoundedScroll from '@/hooks/use-bounded-scroll';
import { springConfig } from '@/types/globals.type';

interface ContentsNavMotionProps {
  title?: React.ReactNode;
}

const ContentsNavMotion = ({
  children,
  title,
}: PropsWithChildren<ContentsNavMotionProps>) => {
  const { scrollYBoundedProgress } = useBoundedScroll(1);

  const scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [1, 0],
    [0, 1],
  );

  const translateY = useSpring(
    useTransform(scrollYBoundedProgressThrottled, [0, 0.1], [80, 0]),
    springConfig,
  );

  return (
    <motion.aside
      className="sticky hidden h-dvh w-[300px] shrink-0 text-sm xl:block"
      style={{
        top: translateY,
      }}
    >
      <div className="w-inherit overflow-hidden">
        {title}
        <div
          className="content-nav-scrollbar max-h-[calc(100dvh-200px)] overflow-y-auto"
          onWheel={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </motion.aside>
  );
};

export { ContentsNavMotion };
