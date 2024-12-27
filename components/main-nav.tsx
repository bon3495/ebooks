import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { MAIN_NAV } from '@/constants/routes';
import { objectKeys } from '@/lib/utils';

const MainNav = () => {
  const t = useTranslations('SiteHeader');

  return (
    <ul className="flex items-center">
      {objectKeys(MAIN_NAV).map((key) => {
        return (
          <li key={key} className="flex items-center">
            <Link href={MAIN_NAV[key]} className="px-4 py-2 text-2xl font-bold">
              {t(`MainNav.${key}.title`)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { MainNav };
