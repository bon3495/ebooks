import Image from 'next/image';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import PageLayout from '@/layouts/page';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <PageLayout>
      <section className="container flex flex-1 flex-col items-center justify-center px-4">
        <div className="bg-pink-pastel/20 shadow-pink-layer flex w-full flex-1 flex-col items-center rounded-2xl p-4 backdrop-blur-md lg:m-28 lg:flex-row lg:justify-between lg:p-16">
          <div className="relative order-2 mt-12 flex flex-col items-center lg:mt-0 lg:items-start">
            <h1 className="mb-6 text-4xl font-bold lg:mb-0 lg:text-5xl lg:leading-tight xl:text-[88px]">
              {t('title')}
            </h1>
            <p className="text-center text-base lg:text-left lg:text-2xl">
              {t('description')}
            </p>
            <div className="mt-12 lg:mt-8">
              <Button size="lg" asChild className="text-base" variant="default">
                <Link href={ROUTES.HOME}>
                  <MoveLeft />
                  <span>{t('backToHome')}</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 mt-0 flex shrink-0 lg:order-3 lg:mt-6">
            <Image
              src="/assets/images/play-station.png"
              alt="404 - Not Found Image"
              width={510}
              height={500}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1280px) 50vw, 510px"
              className="1280:w-[510px] w-full sm:w-[360px] lg:w-[420px] xl:w-[510px]"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
