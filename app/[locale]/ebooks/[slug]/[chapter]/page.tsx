import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ebooks } from '#site/content';
import { setRequestLocale } from 'next-intl/server';

import { ContentActions } from '@/components/content-actions';
import EbookContainer from '@/components/ebook-container';
import { MDXContent } from '@/components/mdx-content';
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
      book.slug === `${params.slug}/${params.chapter}`
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

  const currentChapterIndex = ebooksChildren.findIndex(
    (i) => i.slug === ebook.slug,
  );

  return (
    <EbookContainer
      breadcrumb={
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={ebook.prevLink}>{ebook.title}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{ebook.chapter}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      }
      params={params}
      ebook={ebook}
      ebooksChildren={ebooksChildren}
    >
      <ContentActions
        className="mb-16 mt-8 border-b-4 border-analogous-dusty-brown pb-8"
        currentChapterIndex={currentChapterIndex}
        ebooks={ebooksChildren}
      />
      <div>
        <MDXContent code={ebook.content} suppressHydrationWarning />
      </div>

      <ContentActions
        className="mt-16 border-t-4 border-analogous-dusty-brown pt-8"
        currentChapterIndex={currentChapterIndex}
        ebooks={ebooksChildren}
      />
    </EbookContainer>
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
