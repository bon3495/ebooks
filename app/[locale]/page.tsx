import Image from 'next/image';
import Link from 'next/link';
import { ebooks } from '#site/content';
import { MoveRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { Button } from '@/components/ui/button';
import { LOCALE_TYPES } from '@/constants/globals';
import PageLayout from '@/layouts/page';
import { cn, sortEbooks } from '@/lib/utils';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  const sortedEbooks = sortEbooks(
    ebooks.filter((ebook) => ebook.published && ebook.locale === locale),
  );

  return (
    <PageLayout>
      <div className="container px-4">
        <div className="flex flex-col items-center justify-center">
          <h3
            className={cn(
              'text-center text-2xl font-bold md:text-4xl lg:w-2/3 lg:text-6xl',
              {
                'leading-tight lg:w-[75%]': locale === LOCALE_TYPES.vi,
              },
            )}
          >
            {t('title')}
          </h3>
          <p
            className={cn(
              'mt-4 text-center text-sm md:w-4/5 md:text-base lg:w-1/2 lg:text-lg',
              {
                'lg:w-[52%]': locale === LOCALE_TYPES.vi,
              },
            )}
          >
            {t('description')}
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-bold">Popular Books</h3>
          <ul className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {sortedEbooks.map((ebook) => {
              return (
                <li
                  key={ebook.slug}
                  className="flex flex-col rounded-2xl bg-pink-pastel/30 p-4 shadow-pink-layer backdrop-blur-md"
                >
                  <div className="flex gap-x-4">
                    <div className="flex">
                      <Image
                        src={ebook.cover}
                        alt={ebook.title}
                        width={120}
                        height={120}
                        className="w-20 rounded-sm object-cover lg:w-[120px]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h4 className="text-base font-bold md:text-xl">
                        {ebook.title}
                      </h4>
                      <p className="mt-2 text-base">{ebook.author}</p>
                      <Button
                        asChild
                        className="ml-auto mt-auto hidden w-fit items-center sm:flex"
                      >
                        <Link href={`${locale}/${ebook.permalink}`}>
                          <span>Read Now</span>
                          <MoveRight />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 block w-full sm:hidden">
                    <Button asChild className="ml-auto mt-auto w-full">
                      <Link href={`${locale}/${ebook.permalink}`}>
                        <span>Read Now</span>
                        <MoveRight />
                      </Link>
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
