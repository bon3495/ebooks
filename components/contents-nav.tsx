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
      <div className="w-inherit fixed bottom-0 top-32 h-[calc(100vh-160px)] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col px-4 py-10">
          <h3 className="mb-2 text-xl font-semibold">Contents</h3>
          <ul className="grid grid-cols-1 border-t pt-8">
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
