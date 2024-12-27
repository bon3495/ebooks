import { MetadataRoute } from 'next';

import { host } from '@/config';
import { getPathname, Locale, routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry('/'), getEntry('/ebooks')];
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)]),
      ),
    },
  };
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
