'use client';

import * as React from 'react';
// import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { ContentsNavMotion } from '@/components/animations/contents-nav-motion';
import { HeadingMedium } from '@/components/ui/heading';
import { useMounted } from '@/hooks/use-mounted';
import { cn } from '@/lib/utils';

interface TocEntry {
  items?: TocEntry[];
  url: string;
  title: string;
}

interface TocProps {
  toc: TocEntry[];
  className?: string;
  onSelect?: () => void;
}

export function DashboardTableOfContents({ toc, onSelect }: TocProps) {
  const t = useTranslations('DashboardTableOfContents');

  const itemIds = React.useMemo(
    () =>
      toc
        ? toc
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split('#')[1])
        : [],
    [toc],
  );
  const activeHeading = useActiveItem(itemIds);

  const mounted = useMounted();

  return mounted ? (
    <ContentsNavMotion
      title={<HeadingMedium className="my-4">{t('title')}</HeadingMedium>}
    >
      <Tree tree={toc} activeItem={activeHeading} onSelect={onSelect} />
    </ContentsNavMotion>
  ) : null;
}

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = React.useState<string>('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -40% 0%` },
    );

    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TocEntry[];
  level?: number;
  activeItem?: string | null;
  onSelect?: () => void;
}

function Tree({ tree, level = 1, activeItem, onSelect }: TreeProps) {
  // const router = useRouter();
  // const pathname = usePathname();
  // React.useEffect(() => {
  //   router.push(`${pathname}#${activeItem}`);
  // }, [pathname, activeItem]);

  return tree.length && level < 3 ? (
    <ul className={cn('m-0 list-none', { 'pl-4': level !== 1 })}>
      {tree.map((item, index) => {
        return (
          <li key={index} className={cn('mt-0')}>
            <a
              href={item.url}
              className={cn(
                'inline-block px-3 py-2 text-base no-underline',
                item.url === `#${activeItem}`
                  ? 'font-semibold text-analogous-dusty-brown'
                  : 'text-neutral-deep-charcoal hover:text-analogous-dusty-brown/90',
              )}
              onClick={onSelect}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree
                tree={item.items}
                level={level + 1}
                activeItem={activeItem}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
