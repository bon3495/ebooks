import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const Callout = ({
  type = 'default',
  asChild,
  ...props
}: {
  children?: React.ReactNode;
  type?: 'default' | 'warning' | 'danger';
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        'my-6 flex items-start rounded-md border border-l-[6px] bg-analogous-warm-terra-cotta/10 p-4 text-analogous-dusty-brown shadow-deep-terracotta',
        {
          'border-yellow-900 bg-yellow-50': type === 'warning',
          'border-red-900 bg-red-50': type === 'danger',
        },
      )}
      {...props}
    />
  );
};

export { Callout };
