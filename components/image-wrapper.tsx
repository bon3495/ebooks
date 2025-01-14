import React from 'react';
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
    <div className={cn('relative mx-auto h-40 w-52', className)}>
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

export { ImageWrapper };
