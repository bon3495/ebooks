import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { ContentsNavItem } from '@/components/contents-nav-item';
import { ContentsNavWrapper } from '@/components/contents-nav-wrapper';
import { HeadingMedium } from '@/components/ui/heading';
import { ContentsNavProps } from '@/types/ebooks.type';

const ContentsNav = ({ ebooks, params }: ContentsNavProps) => {
  setRequestLocale(params.locale);

  const t = useTranslations('ContentsNav');

  return (
    <ContentsNavWrapper>
      <HeadingMedium className="my-4">{t('title')}</HeadingMedium>
      <div className="max-h-[72vh] overflow-y-auto">
        <ul className="grid grid-cols-1">
          {ebooks.map((ebook) => {
            return <ContentsNavItem key={ebook.permalink} ebook={ebook} />;
          })}
        </ul>
      </div>
    </ContentsNavWrapper>
  );
};

export { ContentsNav };
