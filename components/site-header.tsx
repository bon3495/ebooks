import Link from 'next/link';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { ROUTES } from '@/constants/routes';

function SiteHeader() {
  return (
    <header className="w-dvw">
      <nav className="container flex h-16 items-center justify-between px-4 lg:h-24">
        <h1>
          <Link href={ROUTES.HOME} className="text-4xl font-bold">
            Bonrizon
          </Link>
        </h1>

        <LocaleSwitcher />
      </nav>
    </header>
  );
}

export { SiteHeader };
