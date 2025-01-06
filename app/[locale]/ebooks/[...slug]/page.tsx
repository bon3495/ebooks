import Image from 'next/image';
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
        <div className="flex-1 gap-4 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0 flex-1 px-4 text-justify">
            <div className="mb-8">
              {/* <Image
                src="/assets/images/ebooks/cover-1.jpg"
                alt="image"
                width={300}
                height={300}
              /> */}
              <div className="">
                <h1 className="font-dancing flex text-left text-7xl font-bold leading-tight">
                  {ebook.title}
                </h1>
                <p className="mt-4 text-right text-lg italic text-muted-foreground">
                  by <span className="font-semibold">{ebook.author}</span>
                </p>
              </div>
            </div>
            <div>
              <MDXContent code={ebook.content} suppressHydrationWarning />
            </div>
          </div>
          <aside className="hidden px-4 text-sm xl:block">
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
