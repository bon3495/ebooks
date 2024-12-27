import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { LOCALE_ARRAY } from '@/constants/globals';

export const routing = defineRouting({
  locales: LOCALE_ARRAY,
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/ebooks': {
      en: '/ebooks',
      vi: '/ebooks',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
