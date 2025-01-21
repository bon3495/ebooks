import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowLeftIcon } from '@/components/icons/arrow-left-icon';
import { ArrowRightIcon } from '@/components/icons/arrow-right-icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ContentActionProps {
  currentChapterIndex: number;
  ebooks: {
    chapter?: string;
    permalink: string;
  }[];
  className?: string;
}

const ActionButton = ({
  href,
  title,
  textButton,
  isLeft,
  classNameIcon,
  className,
}: {
  href: string;
  title?: string;
  textButton?: string;
  isLeft?: boolean;
  className?: string;
  classNameIcon?: string;
}) => {
  return (
    <Button
      asChild
      variant="link"
      className={cn(
        'h-auto min-w-32 items-center justify-center gap-1 p-4 hover:bg-muted/50 hover:no-underline lg:flex-col lg:items-start',
        className,
      )}
    >
      <Link href={href}>
        <span
          className={cn('flex items-center', {
            'lg:ml-auto': !isLeft,
          })}
        >
          {isLeft ? <ArrowLeftIcon className={cn('', classNameIcon)} /> : null}
          {textButton && (
            <span className="italic text-muted-foreground">{textButton}</span>
          )}
          {!isLeft ? (
            <ArrowRightIcon className={cn('', classNameIcon)} />
          ) : null}
        </span>
        {title && (
          <span className="hidden text-lg lg:inline-block">{title}</span>
        )}
      </Link>
    </Button>
  );
};

const ContentActions = ({
  currentChapterIndex,
  ebooks,
  className,
}: ContentActionProps) => {
  const t = useTranslations('ContentActions');
  return (
    <div className={cn('flex items-center justify-between gap-x-8', className)}>
      {currentChapterIndex > 0 && (
        <ActionButton
          isLeft
          href={ebooks[currentChapterIndex - 1].permalink}
          title={ebooks[currentChapterIndex - 1].chapter}
          classNameIcon="mr-2"
          textButton={t('previous')}
        />
      )}
      {currentChapterIndex < ebooks.length - 1 && (
        <ActionButton
          href={ebooks[currentChapterIndex + 1].permalink}
          title={ebooks[currentChapterIndex + 1].chapter}
          classNameIcon="ml-2"
          className="ml-auto"
          textButton={t('next')}
        />
      )}
    </div>
  );
};

export { ContentActions, ActionButton };
