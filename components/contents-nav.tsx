import { ContentsNavItem } from '@/components/contents-nav-item';
import { EbookParams } from '@/types/ebooks.type';

type EbookType = {
  title: string;
  permalink: string;
  slugAsParams: string;
};

interface ContentsNavProps extends EbookParams {
  ebooks: EbookType[];
}

const ContentsNav = ({ ebooks, params }: ContentsNavProps) => {
  return (
    <aside className="hidden w-[300px] shrink-0 text-sm xl:block">
      <div className="fixed bottom-0 top-24 h-[calc(100vh-160px)] w-inherit overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col py-10">
          <h3 className="font-dancing mb-6 text-4xl font-bold leading-tight">
            Contents
          </h3>
          <ul className="grid grid-cols-1">
            {ebooks.map((ebook) => {
              return (
                <ContentsNavItem
                  key={ebook.permalink}
                  url={params.slug.join('/')}
                  ebook={ebook}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export { ContentsNav };
