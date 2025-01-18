import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { ContentsNavItem } from '@/components/contents-nav-item';
import { ContentsNavWrapper } from '@/components/contents-nav-wrapper';
import { HeadingMedium } from '@/components/ui/heading';
import { ScrollArea } from '@/components/ui/scroll-area';
import { EbookParams } from '@/types/ebooks.type';

type EbookType = {
  chapter?: string;
  permalink: string;
};

interface ContentsNavProps extends EbookParams {
  ebooks: EbookType[];
}

const ContentsNav = ({ ebooks, params }: ContentsNavProps) => {
  setRequestLocale(params.locale);

  const t = useTranslations('ContentsNav');

  return (
    <ContentsNavWrapper>
      <HeadingMedium className="my-4">{t('title')}</HeadingMedium>
      <ScrollArea className="max-h-[calc(100vh-349px)] overflow-y-auto pr-4">
        <ul className="grid grid-cols-1">
          {ebooks.map((ebook) => {
            return <ContentsNavItem key={ebook.permalink} ebook={ebook} />;
          })}
        </ul>
      </ScrollArea>
    </ContentsNavWrapper>
  );
};

export { ContentsNav };
