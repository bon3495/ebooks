'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

interface NavItemProps {
  url: string;
  ebook: {
    chapter?: string;
    permalink: string;
    slugAsParams: string;
  };
}

const ContentsNavItem = ({ url, ebook }: NavItemProps) => {
  return (
    <li className="flex items-center">
      <Link
        href={ebook.permalink}
        className={cn(
          'flex-1 rounded-md px-3 py-2 text-base transition-all duration-200 ease-in-out hover:bg-accent',
          {
            'font-semibold text-analogous-dusty-brown':
              ebook.slugAsParams === url,
          },
        )}
      >
        <span className="line-clamp-1">{ebook.chapter}</span>
      </Link>
    </li>
  );
};

export { ContentsNavItem };
