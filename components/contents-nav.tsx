import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { ContentsNavMotion } from '@/components/animations/contents-nav-motion';
import { ContentsNavItem } from '@/components/contents-nav-item';
import { HeadingMedium } from '@/components/ui/heading';
import { ContentsNavProps } from '@/types/ebooks.type';

const ContentsNav = ({ ebooks, params }: ContentsNavProps) => {
  setRequestLocale(params.locale);

  const t = useTranslations('ContentsNav');

  return (
    <ContentsNavMotion>
      <HeadingMedium className="my-4 px-4">{t('title')}</HeadingMedium>
      <div className="content-nav-scrollbar max-h-[calc(100vh-200px)] overflow-y-auto">
        <ul className="grid grid-cols-1 gap-y-2 pr-4">
          {ebooks.map((ebook) => {
            return <ContentsNavItem key={ebook.permalink} ebook={ebook} />;
          })}
        </ul>
      </div>
    </ContentsNavMotion>
  );
};

export { ContentsNav };
