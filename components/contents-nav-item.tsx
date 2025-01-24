'use client';

import Link from 'next/link';

import { usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { EbookType } from '@/types/ebooks.type';

interface NavItemProps {
  ebook: EbookType;
}

const ContentsNavItem = ({ ebook }: NavItemProps) => {
  const pathname = usePathname();
  const ebookPermalink = ebook.permalink.split('/').slice(1).join('/');

  return (
    <li className="flex items-center">
      <Link
        href={ebook.permalink}
        className={cn(
          'flex-1 rounded-md px-3 py-2 text-base transition-all duration-200 ease-in-out hover:bg-accent',
          {
            'font-semibold text-analogous-dusty-brown':
              ebookPermalink === `${ebook.locale}${pathname}`,
          },
        )}
      >
        <span className="line-clamp-1">{ebook.chapter}</span>
      </Link>
    </li>
  );
};

export { ContentsNavItem };
