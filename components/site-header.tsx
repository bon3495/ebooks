import Image from 'next/image';
import Link from 'next/link';

import { SiteHeaderMotion } from '@/components/animations/site-header';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { ROUTES } from '@/constants/routes';
import { formatPathname } from '@/lib/utils';

type SiteHeaderProps = {
  locale: string;
};

function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <SiteHeaderMotion>
      <div className="container flex items-center justify-between px-4">
        <Link
          href={formatPathname(ROUTES.HOME, locale)}
          className="flex items-center text-4xl font-bold"
        >
          <span className="hidden lg:inline-block">Bonrizon</span>
          <Image
            src={'/assets/images/only-logo.png'}
            alt="Logo Bonrizon"
            width={40}
            height={40}
            className="lg:hidden"
          />
        </Link>

        <LocaleSwitcher />
      </div>
    </SiteHeaderMotion>
  );
}

export { SiteHeader };
