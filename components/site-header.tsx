import Link from 'next/link';

import { SiteHeaderMotion } from '@/components/animations/site-header-motion';
import BlackCatIcon from '@/components/icons/black-cat-icon';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { ROUTES } from '@/constants/routes';
import { formatPathname } from '@/lib/utils';

type SiteHeaderProps = {
  locale: string;
};

function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <SiteHeaderMotion>
      <Link
        href={formatPathname(ROUTES.HOME, locale)}
        className="flex items-center gap-x-2 text-4xl font-bold"
      >
        <BlackCatIcon className="h-10 w-auto" />
        <span className="hidden lg:inline-block">Bonrizon</span>
      </Link>

      <LocaleSwitcher />
    </SiteHeaderMotion>
  );
}

export { SiteHeader };
