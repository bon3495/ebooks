import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ebooks } from '#site/content';
import { setRequestLocale } from 'next-intl/server';

import { ContentsNav } from '@/components/contents-nav';
import { MDXContent } from '@/components/mdx-content';
import { DashboardTableOfContents } from '@/components/toc';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { sortByChapter } from '@/lib/utils';
import { EbookParams } from '@/types/ebooks.type';

async function getEbookFromParams(params: EbookParams['params']) {
  setRequestLocale(params.locale);

  const ebook = ebooks.find((book) => {
    return book.locale === params.locale && book.slug === params.slug;
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
    <div className="container relative my-32 flex gap-x-4 px-4">
      <ContentsNav ebooks={sortByChapter(ebooksChildren)} params={params} />
      <main className="flex flex-1 overflow-x-hidden">
        <div className="mx-auto w-full min-w-0 flex-1 overflow-x-hidden px-4 text-justify">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{ebook.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="my-12">
            <h1 className="flex text-left font-dancing text-7xl font-bold leading-tight">
              {ebook.title}
            </h1>
            {ebook.type === 'parent' && (
              <p className="mt-4 text-right font-dancing text-2xl italic text-muted-foreground underline underline-offset-4">
                by <span>{ebook.author}</span>
              </p>
            )}
          </div>

          <div>
            <MDXContent code={ebook.content} suppressHydrationWarning />
          </div>
        </div>
      </main>
      <aside className="sticky top-24 hidden h-[calc(100vh-320px)] w-[300px] overflow-hidden text-sm xl:block">
        <DashboardTableOfContents toc={ebook.toc} />
      </aside>
    </div>
  );
}

export async function generateStaticParams() {
  return ebooks.map((ebook) => {
    return {
      locale: ebook.locale,
      slug: ebook.slug,
      chapter: ebook.chapter || '',
    };
  });
}
