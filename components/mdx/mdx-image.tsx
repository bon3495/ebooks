import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type ImageWrapperProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

const ImageWrapper = ({
  src,
  alt,
  className,
  imageClassName,
}: ImageWrapperProps) => {
  return (
    <div className={cn('relative mx-auto my-8 h-40 w-52', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(imageClassName)}
        style={{
          objectFit: 'contain',
        }}
        sizes="100vw"
      />
    </div>
  );
};

const ImageContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Image>) => {
  return (
    <Image
      {...props}
      fill
      className={cn('cursor-pointer', className)}
      style={{
        objectFit: 'contain',
      }}
      sizes="100vw"
    />
  );
};

const ImageDescription = ({
  children,
  className,
  label,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { label?: string }) => {
  return (
    <p
      className={cn(
        'mt-2 text-center text-base text-muted-foreground lg:text-lg',
        className,
      )}
      {...props}
    >
      <span className="mr-2 font-semibold">{label}</span>
      <span className="italic">{children}</span>
    </p>
  );
};

const illustrationImageVariants = cva('', {
  variants: {
    size: {
      sm: 'h-48 w-full max-w-96',
      default: 'h-48 w-full max-w-96',
      md: 'h-[320px] w-full max-w-[480px]',
      lg: 'h-[300px] w-full max-w-full md:h-[520px] lg:h-[580px]',
    },
    sizeDialog: {
      sm: 'h-[280px] w-full max-w-96',
      default: 'h-48 w-full max-w-96',
      md: 'h-[320px] w-full max-w-[480px]',
      lg: 'h-[420px] w-full max-w-full md:h-[620px] lg:h-[740px] lg:max-w-[90%]',
    },
    width: {
      full: 'max-w-full',
    },
    widthDialog: {
      full: 'max-w-full',
    },
    height: {
      sm: 'h-[120px] sm:h-48',
    },
  },
  defaultVariants: {
    size: 'default',
    sizeDialog: 'default',
  },
});

interface IllustrationImageProps
  extends ImageWrapperProps,
    VariantProps<typeof illustrationImageVariants> {
  label: string;
}

const IllustrationImage = ({
  src,
  alt,
  imageClassName,
  children,
  label,
  size,
  sizeDialog,
  width,
  widthDialog,
  height,
}: PropsWithChildren<IllustrationImageProps>) => {
  return (
    <div className="my-8 flex flex-col items-center">
      <div
        className={cn(
          'relative mx-auto',
          illustrationImageVariants({ size, width, height }),
        )}
      >
        <Dialog>
          <DialogTrigger asChild>
            <ImageContent src={src} alt={alt} className={imageClassName} />
          </DialogTrigger>
          <DialogContent className="max-w-2xl lg:max-w-4xl">
            <DialogHeader>
              <div className="flex flex-col">
                <div
                  className={cn(
                    'relative mx-auto',
                    illustrationImageVariants({ sizeDialog, widthDialog }),
                  )}
                >
                  <ImageContent
                    src={src}
                    alt={alt}
                    className={imageClassName}
                  />
                </div>
                <ImageDescription label={label} className="text-center">
                  {children}
                </ImageDescription>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <ImageDescription label={label}>{children}</ImageDescription>
    </div>
  );
};

export { IllustrationImage, ImageWrapper };
