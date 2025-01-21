import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ebooks } from '#site/content';

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
import { getEbookFromParams } from '@/lib/utils';
import { EbookParams } from '@/types/ebooks.type';

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
      <ContentActions
        className="mb-16 mt-8 border-b-4 border-analogous-dusty-brown pb-8"
        currentChapterIndex={currentChapterIndex}
        ebooks={ebooksChildren}
      />
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
