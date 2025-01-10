'use client';

import { ReactNode, useEffect } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
};

const LayoutWrapper = ({ children, className }: Props) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className={cn('relative flex min-h-dvh flex-col', className)}>
      {children}
    </div>
  );
};

export { LayoutWrapper };
