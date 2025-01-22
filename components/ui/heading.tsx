import React from 'react';

import { cn } from '@/lib/utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  isShow?: boolean;
}

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
      className={cn(
        'font-dancing text-2xl font-bold leading-tight lg:text-4xl',
        className,
      )}
    />
  );
};

const HeadingLarge = ({ className, ...props }: HeadingProps) => {
  return (
    <h2
      {...props}
      className={cn(
        'scroll-m-20 text-left font-dancing text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight',
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
        'mt-16 scroll-m-20 text-left font-dancing text-4xl font-bold underline underline-offset-[15px] md:text-5xl lg:text-7xl lg:leading-tight',
        className,
      )}
    />
  );
};

export { HeadingBase, HeadingMedium, HeadingLarge, HeadingExtraLarge };
