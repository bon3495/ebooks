import React from 'react';
import Link from 'next/link';

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

const ContentActions = ({
  currentChapterIndex,
  ebooks,
  className,
}: ContentActionProps) => {
  return (
    <div className={cn('flex items-center justify-between gap-x-8', className)}>
      {currentChapterIndex > 0 && (
        <Button
          asChild
          variant="link"
          className="h-auto flex-col items-start justify-start gap-1 p-4 hover:bg-muted/50 hover:no-underline"
        >
          <Link href={ebooks[currentChapterIndex - 1].permalink}>
            <span className="italic text-muted-foreground">Previous</span>
            <span className="text-lg">
              {ebooks[currentChapterIndex - 1].chapter}
            </span>
          </Link>
        </Button>
      )}
      {currentChapterIndex < ebooks.length - 1 && (
        <Button
          asChild
          variant="link"
          className="ml-auto h-auto flex-col items-start justify-start gap-1 p-4 hover:bg-muted/50 hover:no-underline"
        >
          <Link href={ebooks[currentChapterIndex + 1].permalink}>
            <span className="italic text-muted-foreground">Next</span>
            <span className="text-lg">
              {ebooks[currentChapterIndex + 1].chapter}
            </span>
          </Link>
        </Button>
      )}
    </div>
  );
};

export { ContentActions };
