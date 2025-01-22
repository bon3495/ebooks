import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ebooks } from '#site/content';

import { ContentActions } from '@/components/content-actions';
import EbookContainer from '@/components/ebook-container';
import { MDXContent } from '@/components/mdx/mdx-content';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { HeadingExtraLarge } from '@/components/ui/heading';
import { getEbookFromParams, sortById } from '@/lib/utils';
import { EbookParams } from '@/types/ebooks.type';

export default async function EbookDetails({ params }: EbookParams) {
  const ebook = await getEbookFromParams(params);

  const ebooksChildren = sortById(
    ebooks.filter((e) => e.type === 'child' && e.locale === params.locale),
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
      currentChapterIndex={currentChapterIndex}
    >
      <div className="my-12">
        <HeadingExtraLarge className="no-underline">
          {ebook.section}
        </HeadingExtraLarge>
      </div>
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
