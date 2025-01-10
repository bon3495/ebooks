import Image from 'next/image';
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
    <div className="container relative my-32 flex gap-x-4 px-4">
      <ContentsNav ebooks={ebooksChildren} params={params} />
      <main className="flex flex-1">
        <div className="flex-1 gap-4 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0 flex-1 px-4 text-justify">
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{ebook.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="my-12">
              <div className="">
                <h1 className="flex text-left font-dancing text-7xl font-bold leading-tight">
                  {ebook.title}
                </h1>
                <p className="mt-4 text-right font-dancing text-2xl italic text-muted-foreground underline underline-offset-4">
                  by <span>{ebook.author}</span>
                </p>
              </div>

              <div className="relative">
                <Image
                  src="/assets/images/ebooks/working-effectively-with-legacy-code.jpg"
                  alt={ebook.title}
                  // width={600}
                  // height={400}
                  fill
                  className="absolute"
                />
              </div>
            </div>
            <div>
              <MDXContent code={ebook.content} suppressHydrationWarning />
            </div>
          </div>
          <aside className="sticky top-16 hidden h-[calc(100vh-128px)] w-[300px] shrink-0 overflow-hidden text-sm xl:block">
            <DashboardTableOfContents toc={ebook.toc} />
          </aside>
        </div>
      </main>
    </div>
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
