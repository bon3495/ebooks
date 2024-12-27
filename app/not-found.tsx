import NotFoundPage from '@/components/not-found';
import { routing } from '@/i18n/routing';
import BaseLayout from '@/layouts/base';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <BaseLayout
      locale={routing.defaultLocale}
      className="bg-soft-gradient bg-cover bg-center bg-no-repeat [background-blend-mode:normal,multiply,multiply,normal]"
    >
      <NotFoundPage />
    </BaseLayout>
  );
}
