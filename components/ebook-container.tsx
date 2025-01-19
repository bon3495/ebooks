import React, { PropsWithChildren } from 'react';

import { Ebook } from '@/.velite';
import { ContentsNav } from '@/components/contents-nav';
import { MDXContent } from '@/components/mdx-content';
import { DashboardTableOfContents } from '@/components/toc';
import { sortByChapter } from '@/lib/utils';
import { EbookParams } from '@/types/ebooks.type';

interface EbookContainerProps {
  breadcrumb: React.ReactNode;
  params: EbookParams['params'];
  ebook: Ebook;
  ebooksChildren: Ebook[];
}

const EbookContainer = ({
  params,
  breadcrumb,
  ebook,
  ebooksChildren,
  children,
}: PropsWithChildren<EbookContainerProps>) => {
  return (
    <div className="container relative my-32 flex gap-x-4 px-4">
      <ContentsNav ebooks={sortByChapter(ebooksChildren)} params={params} />
      <main className="flex flex-1 overflow-x-hidden">
        <div className="mx-auto w-full min-w-0 flex-1 overflow-x-hidden px-4 text-justify">
          {breadcrumb}
          <div className="my-12">
            <h1 className="flex text-left font-dancing text-5xl font-bold lg:text-7xl lg:leading-tight">
              {ebook.title}
            </h1>
            {ebook.type === 'parent' && (
              <p className="mt-4 text-right font-dancing text-lg italic text-muted-foreground underline underline-offset-4 lg:text-2xl">
                by <span>{ebook.author}</span>
              </p>
            )}
          </div>

          {children}
        </div>
      </main>
      <aside className="sticky top-24 hidden h-[calc(100vh-320px)] w-[300px] overflow-hidden text-sm xl:block">
        <DashboardTableOfContents toc={ebook.toc} />
      </aside>
    </div>
  );
};

export default EbookContainer;
