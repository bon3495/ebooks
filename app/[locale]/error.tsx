'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import PageLayout from '@/layouts/page';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations('Error');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <PageLayout>
      <div className="container">
        <h2 className="mb-8 text-5xl font-semibold">{t('title')}</h2>
        {t.rich('description', {
          p: (chunks) => <p className="mt-4 text-xl">{chunks}</p>,
          retry: (chunks) => (
            <Button
              variant="link"
              className="h-auto p-0 text-xl underline underline-offset-2"
              onClick={reset}
              type="button"
            >
              {chunks}
            </Button>
          ),
        })}
      </div>
    </PageLayout>
  );
}
