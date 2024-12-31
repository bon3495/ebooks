import { notFound } from 'next/navigation';
import { ebooks } from '#site/content';
import { setRequestLocale } from 'next-intl/server';

import ContentsNav from '@/components/contents-nav';
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

  if (!ebook) {
    notFound();
  }

  return (
    <main className="container relative mt-24 gap-x-8 px-4 xl:grid xl:grid-cols-[300px_1fr_300px]">
      <aside className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <ContentsNav />
        </div>
      </aside>
      <article className="mx-auto h-[2000px] w-full min-w-0">
        {/* <section className="flex gap-x-4">
          <div className="flex flex-shrink-0">
            <Image
              src={ebook.cover}
              alt={ebook.title}
              width={250}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{ebook.title}</h1>
            <p className="text-2xl">{ebook.author}</p>
            <p className="text-sm text-accent-foreground">
              {formatDate(ebook.date)}
            </p>
            <div>
              <p className="text-base">{ebook.description}</p>
            </div>
          </div>
        </section> */}
        <MDXContent code={ebook.content} suppressHydrationWarning />
      </article>
      <aside className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={ebook.toc} />
        </div>
      </aside>
    </main>
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
