import Image from 'next/image';
import Link from 'next/link';

import { Callout } from '@/components/callout';
import { CopyButton } from '@/components/copy-button';
import { cn } from '@/lib/utils';

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  __rawstring__?: string;
  ['data-language']?: string;
}

const Pre = (props: PreProps) => {
  const {
    children,
    __rawstring__ = '',
    ['data-language']: dataLanguage = 'Shell',
  } = props;

  return (
    <pre
      className="shadow-smooth relative overflow-hidden rounded-xl bg-slate-950 p-[0.5rem]"
      {...props}
    >
      <p className="absolute bottom-0 right-0 rounded-tl-lg bg-slate-700 p-1 text-xs font-medium text-white">
        {dataLanguage.toLowerCase()}
      </p>
      <CopyButton
        text={__rawstring__}
        className="shadow-smooth absolute right-1 top-1"
      />

      {children}
    </pre>
  );
};

const Code = (props: React.HTMLAttributes<HTMLElement>) => {
  const { className, ...rest } = props;
  return (
    <code
      className={cn(
        'text-pretty rounded-sm bg-slate-950 px-[0.5rem] py-1 font-mono text-sm leading-relaxed text-foreground text-white',
        className,
      )}
      {...rest}
    />
  );
};

const MdxBasicItems = {
  code: Code,
  pre: Pre,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  a: ({
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('leading-5 [&:not(:first-child)]:mt-3', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-3 ml-10 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-3 ml-10 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('m-0 border-t p-0 even:bg-muted', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        'flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10',
        className,
      )}
      {...props}
    />
  ),
  Callout,
  Image,
};

export { MdxBasicItems };
