import Image from 'next/image';
import Link from 'next/link';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { ROUTES } from '@/constants/routes';
import { formatPathname } from '@/lib/utils';

type SiteHeaderProps = {
  locale: string;
};

function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="w-dvw">
      <nav className="container flex h-16 items-center justify-between px-4 lg:h-24">
        <h1>
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
        </h1>

        <LocaleSwitcher />
      </nav>
    </header>
  );
}

export { SiteHeader };
