import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';
import { getEbookFromParams } from '@/lib/utils';
import { EbookParams } from '@/types/ebooks.type';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: EbookParams) {
  const ebook = await getEbookFromParams(params);

  if (!ebook) {
    return {
      title: 'Not found',
      description: 'Ebook not found',
    };
  }

  return {
    title: ebook?.title,
    description: ebook?.description,
    openGraph: {
      type: 'website',
      locale: ebook.locale,
      url: siteConfig.url,
      title: ebook?.title,
      description: ebook?.description,
      siteName: ebook?.title,
      images: [
        {
          url: ebook.cover,
          width: 200,
          height: 200,
          alt: ebook?.title,
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);

  return children;
}
