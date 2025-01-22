import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { Ebook } from '@/.velite';
import { DrawerMobileMotion } from '@/components/animations/drawer-mobile.motion';
import { ActionButton } from '@/components/content-actions';
import { ContentsNavItem } from '@/components/contents-nav-item';
import { ListIcon } from '@/components/icons/list-icon';
import { Button } from '@/components/ui/button';
import { HeadingMedium } from '@/components/ui/heading';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ContentsNavProps } from '@/types/ebooks.type';

interface EbookDrawerProps extends ContentsNavProps {
  ebook: Ebook;
  currentChapterIndex: number;
}

const EbookDrawer = ({
  ebooks,
  params,
  currentChapterIndex,
}: EbookDrawerProps) => {
  setRequestLocale(params.locale);

  const t = useTranslations('EbookDrawer');

  return (
    <DrawerMobileMotion className="relative justify-between">
      {currentChapterIndex > 0 && (
        <ActionButton
          isLeft
          href={ebooks[currentChapterIndex - 1].permalink}
          title={ebooks[currentChapterIndex - 1].chapter}
          className="h-10 min-w-10 p-0"
        />
      )}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <ListIcon />
            <span>{t('contentBtn')}</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle asChild className="my-4 text-4xl">
              <HeadingMedium>{t('contentTitle')}</HeadingMedium>
            </SheetTitle>
          </SheetHeader>
          <div>
            <ScrollArea className="h-[calc(100vh-140px)]">
              <ul className="grid grid-cols-1 gap-4 lg:gap-0">
                {ebooks.map((ebook) => {
                  return (
                    <ContentsNavItem key={ebook.permalink} ebook={ebook} />
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
      {currentChapterIndex < ebooks.length - 1 && (
        <ActionButton
          href={ebooks[currentChapterIndex + 1].permalink}
          title={ebooks[currentChapterIndex + 1].chapter}
          className="ml-auto h-10 min-w-10 p-0"
        />
      )}
    </DrawerMobileMotion>
  );
};

export { EbookDrawer };
