import Image from 'next/image';
import Link from 'next/link';

import { Callout } from '@/components/callout';
import { CopyButton } from '@/components/copy-button';
import { Icons } from '@/components/icons';
import { IllustrationImage, ImageWrapper } from '@/components/mdx/mdx-image';
import {
  TableCellMdx,
  TableHeadMdx,
  TableMdx,
} from '@/components/mdx/mdx-table';
import { AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  HeadingBase,
  HeadingExtraLarge,
  HeadingLarge,
  HeadingMedium,
} from '@/components/ui/heading';
import {
  TableBody,
  TableCaption,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  __rawstring__?: string;
  ['data-language']?: string;
}

const Pre = (props: PreProps) => {
  const {
    children,
    __rawstring__ = '',
    // ['data-language']: dataLanguage = 'Shell',
  } = props;

  return (
    <div className="my-4 flex rounded-xl bg-one-dark-pro-mix-bg p-2">
      <pre className="relative flex-1 bg-one-dark-pro-mix-bg" {...props}>
        {children}
      </pre>
      <div className="flex flex-col justify-between bg-one-dark-pro-mix-bg">
        <CopyButton text={__rawstring__} className="" />
        {/* <p className="rounded-tl-lg bg-slate-700 p-1 text-xs font-medium text-white">
          {dataLanguage.toLowerCase()}
        </p> */}
      </div>
    </div>
  );
};

const Code = (props: React.HTMLAttributes<HTMLElement>) => {
  const { className, ...rest } = props;
  return (
    <code
      className={cn(
        'text-pretty rounded bg-analogous-warm-terra-cotta/20 px-1.5 py-0.5 font-mono text-base text-analogous-dusty-brown',
        className,
      )}
      {...rest}
    />
  );
};

const MdxBasicItems = {
  AlertTitle,
  AlertDescription,
  Callout,
  Image,
  HeadingBase,
  HeadingMedium,
  HeadingLarge,
  HeadingExtraLarge,
  ImageWrapper,
  IllustrationImage,
  Icons,
  TableBody,
  TableCaption,
  TableHeader,
  TableRow,
  TableMdx,
  TableHeadMdx,
  TableCellMdx,
  code: Code,
  pre: Pre,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn('mt-2 scroll-m-20 text-4xl font-bold', className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-12 scroll-m-20 pb-2 text-left font-dancing text-2xl font-bold leading-tight first:mt-0 md:text-3xl lg:text-4xl lg:leading-snug',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight lg:text-2xl',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
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
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        'text-base lg:text-lg [&:not(:first-child)]:mt-6',
        className,
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn('font-semibold', className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn('mt-2 text-base lg:text-lg', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Image>) => (
    <Image className={cn('rounded-md', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn(
          'relative w-full overflow-hidden border-none text-sm',
          className,
        )}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('last:border-b-none m-0 border-b', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
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
};

export { MdxBasicItems };
