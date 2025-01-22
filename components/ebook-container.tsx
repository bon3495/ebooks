import React, { PropsWithChildren } from 'react';

import { Ebook } from '@/.velite';
import { ContentsNav } from '@/components/contents-nav';
import { EbookDrawer } from '@/components/ebook-drawer';
import { DashboardTableOfContents } from '@/components/toc';
import { EbookParams } from '@/types/ebooks.type';

interface EbookContainerProps {
  breadcrumb: React.ReactNode;
  params: EbookParams['params'];
  ebook: Ebook;
  ebooksChildren: Ebook[];
  currentChapterIndex?: number;
}

const EbookContainer = ({
  params,
  breadcrumb,
  ebook,
  ebooksChildren,
  currentChapterIndex,
  children,
}: PropsWithChildren<EbookContainerProps>) => {
  return (
    <div className="container relative my-24 flex gap-x-4 px-4 lg:my-32">
      <ContentsNav ebooks={ebooksChildren} params={params} />
      <EbookDrawer
        ebooks={ebooksChildren}
        params={params}
        ebook={ebook}
        currentChapterIndex={currentChapterIndex || 0}
      />
      <main className="flex flex-1 overflow-x-hidden">
        <div className="mx-auto w-full min-w-0 flex-1 overflow-x-hidden px-4 text-justify">
          {breadcrumb}
          {children}
        </div>
      </main>
      <aside className="sticky top-24 hidden h-[calc(100vh-300px)] w-[300px] overflow-hidden text-sm xl:block">
        <DashboardTableOfContents toc={ebook.toc} />
      </aside>
    </div>
  );
};

export default EbookContainer;
