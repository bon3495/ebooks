'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface NavItemProps {
  url: string;
  ebook: {
    title: string;
    permalink: string;
    slugAsParams: string;
  };
}

const ContentsNavItem = ({ url, ebook }: NavItemProps) => {
  const itemRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!itemRef.current) return;
    setOpen(itemRef.current?.offsetHeight > 18);
  }, []);

  return (
    <li className="flex items-center">
      {/* {open ? (
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={ebook.permalink}
                className={cn(
                  'flex-1 rounded-md px-3 py-2.5 font-medium transition-all duration-200 ease-in-out hover:bg-accent',
                  {
                    'bg-accent font-semibold': ebook.slugAsParams === url,
                  },
                )}
              >
                <span className="line-clamp-1" ref={itemRef}>
                  {ebook.title}
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{ebook.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : ( */}
      <Link
        href={ebook.permalink}
        className={cn(
          'flex-1 rounded-md px-3 py-2 text-base transition-all duration-200 ease-in-out hover:bg-accent',
          {
            'bg-accent font-semibold': ebook.slugAsParams === url,
          },
        )}
      >
        <span ref={itemRef} className="line-clamp-1">
          {ebook.title}
        </span>
      </Link>
      {/* )} */}
    </li>
  );
};

export { ContentsNavItem };
