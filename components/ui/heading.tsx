import React from 'react';

import { cn } from '@/lib/utils';

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const HeadingBase = ({ className, ...props }: HeadingProps) => {
  return (
    <h3
      {...props}
      className={cn('text-xl font-bold leading-tight', className)}
    />
  );
};

const HeadingMedium = ({ className, ...props }: HeadingProps) => {
  return (
    <h3
      {...props}
      className={cn('font-dancing text-4xl font-bold leading-tight', className)}
    />
  );
};

const HeadingLarge = ({ className, ...props }: HeadingProps) => {
  return (
    <h2
      {...props}
      className={cn(
        'scroll-m-20 text-left font-dancing text-4xl font-bold lg:text-5xl lg:leading-tight',
        className,
      )}
    />
  );
};

const HeadingExtraLarge = ({ className, ...props }: HeadingProps) => {
  return (
    <h2
      {...props}
      className={cn(
        'mt-16 scroll-m-20 text-left font-dancing text-4xl font-bold leading-tight underline underline-offset-[15px] lg:text-7xl',
        className,
      )}
    />
  );
};

export { HeadingBase, HeadingMedium, HeadingLarge, HeadingExtraLarge };
