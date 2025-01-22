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
    <div className="container relative my-28 flex gap-x-4 px-4 lg:my-20">
      <ContentsNav ebooks={ebooksChildren} params={params} />
      <EbookDrawer
        ebooks={ebooksChildren}
        params={params}
        ebook={ebook}
        currentChapterIndex={currentChapterIndex || 0}
      />
      <main className="my-10 flex flex-1 overflow-x-hidden">
        <div className="mx-auto w-full min-w-0 flex-1 overflow-x-hidden px-4 text-justify">
          {breadcrumb}
          {children}
        </div>
      </main>
      <DashboardTableOfContents toc={ebook.toc} />
    </div>
  );
};

export default EbookContainer;
