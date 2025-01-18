import React, { PropsWithChildren } from 'react';
import Image from 'next/image';

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

interface IllustrationImageProps extends ImageWrapperProps {
  label: string;
}

const IllustrationImage = ({
  src,
  alt,
  className,
  imageClassName,
  children,
  label,
}: PropsWithChildren<IllustrationImageProps>) => {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className={cn('relative mx-auto h-48 w-96', className)}>
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
      <p className="mt-2 text-lg text-muted-foreground">
        <span className="mr-2 font-semibold">{label}</span>
        <span className="italic">{children}</span>
      </p>
    </div>
  );
};

export { ImageWrapper, IllustrationImage };
