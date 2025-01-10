import React from 'react';

import { cn } from '@/lib/utils';

export interface HeadingMediumProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const HeadingMedium = ({ className, ...props }: HeadingMediumProps) => {
  return (
    <h3
      {...props}
      className={cn('font-dancing text-4xl font-bold leading-tight', className)}
    />
  );
};

const HeadingLarge = ({ className, ...props }: HeadingMediumProps) => {
  return (
    <h2
      {...props}
      className={cn(
        'scroll-m-20 font-dancing text-4xl font-bold leading-tight',
        className,
      )}
    />
  );
};

const HeadingExtraLarge = ({ className, ...props }: HeadingMediumProps) => {
  return (
    <h2
      {...props}
      className={cn(
        'mt-16 scroll-m-20 font-dancing text-7xl font-bold leading-tight underline underline-offset-[15px]',
        className,
      )}
    />
  );
};

export { HeadingMedium, HeadingLarge, HeadingExtraLarge };
