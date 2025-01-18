import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const Callout = ({
  type = 'default',
  asChild,
  className,
  ...props
}: {
  children?: React.ReactNode;
  type?: 'default' | 'warning' | 'danger';
  asChild?: boolean;
  className?: string;
}) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        'my-6 flex flex-col items-start space-y-4 rounded-md border border-l-[6px] bg-analogous-warm-terra-cotta/10 p-4 text-analogous-dusty-brown shadow-deep-terracotta [&>ol]:ml-12',
        {
          'border-yellow-900 bg-yellow-50': type === 'warning',
          'border-red-900 bg-red-50': type === 'danger',
        },
        className,
      )}
      {...props}
    />
  );
};

export { Callout };
