'use client';

import { ContentsNavItem } from '@/components/contents-nav-item';
import { HeadingMedium } from '@/components/ui/heading';
import { ScrollArea } from '@/components/ui/scroll-area';
import { EbookParams } from '@/types/ebooks.type';

type EbookType = {
  title: string;
  permalink: string;
  slugAsParams: string;
};

interface ContentsNavProps extends EbookParams {
  ebooks: EbookType[];
}

const ContentsNav = ({ ebooks, params }: ContentsNavProps) => {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-128px)] w-[300px] shrink-0 overflow-hidden text-sm xl:block">
      <div
        className="w-inherit overflow-hidden"
        onWheel={(e) => e.stopPropagation()}
      >
        <HeadingMedium className="my-4">Contents</HeadingMedium>
        <ScrollArea className="max-h-[calc(100vh-349px)] overflow-y-auto pr-4">
          <ul className="grid grid-cols-1">
            {ebooks.map((ebook) => {
              return (
                <ContentsNavItem
                  key={ebook.permalink}
                  url={params.slug.join('/')}
                  ebook={ebook}
                />
              );
            })}
          </ul>
        </ScrollArea>
      </div>
    </aside>
  );
};

export { ContentsNav };
