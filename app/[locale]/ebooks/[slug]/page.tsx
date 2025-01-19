import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ebooks } from '#site/content';
import { setRequestLocale } from 'next-intl/server';

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
    <EbookContainer
      breadcrumb={
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
      }
      params={params}
      ebook={ebook}
      ebooksChildren={ebooksChildren}
    >
      <div>
        <MDXContent code={ebook.content} suppressHydrationWarning />
      </div>
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
