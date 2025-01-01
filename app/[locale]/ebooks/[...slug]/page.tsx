import { notFound } from 'next/navigation';
import { ebooks } from '#site/content';
import { setRequestLocale } from 'next-intl/server';

import { ContentsNav } from '@/components/contents-nav';
import { MDXContent } from '@/components/mdx-content';
import { DashboardTableOfContents } from '@/components/toc';
import { EbookParams } from '@/types/ebooks.type';

async function getEbookFromParams(params: EbookParams['params']) {
  setRequestLocale(params.locale);

  const ebook = ebooks.find((book) => {
    return (
      book.locale === params.locale &&
      book.slugAsParams === params.slug.join('/')
    );
  });

  return ebook;
}

export default async function EbookDetails({ params }: EbookParams) {
  const ebook = await getEbookFromParams(params);
  const ebooksChildren = ebooks.filter(
    (e) => e.type === 'child' && e.locale === params.locale,
  );

  if (!ebook) {
    notFound();
  }

  return (
    <>
      <ContentsNav ebooks={ebooksChildren} params={params} />
      <main className="mt-8 flex flex-1">
        <div className="flex-1 gap-4 border border-teal-700 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto h-[2000px] w-full min-w-0 flex-1 border border-red-600 px-4">
            <MDXContent code={ebook.content} suppressHydrationWarning />
          </div>
          <aside className="hidden border border-blue-900 px-4 text-sm xl:block">
            <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
              <DashboardTableOfContents toc={ebook.toc} />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return ebooks.map((ebook) => {
    return {
      locale: ebook.locale,
      slug: ebook.permalink.split('/').slice(1),
    };
  });
}
