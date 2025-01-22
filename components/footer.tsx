import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const CATS = [
  {
    url: '/assets/images/cat1.png',
    className: '-mb-16',
  },
  {
    url: '/assets/images/cat2.png',
    className: '-mb-16',
  },
  {
    url: '/assets/images/cat3.png',
    className: '-mb-16 hidden sm:block',
  },
  {
    url: '/assets/images/cat4.png',
    className: '-mb-16 hidden sm:block',
  },
  {
    url: '/assets/images/cat5.png',
    className: '-mb-12 hidden lg:block',
  },
  {
    url: '/assets/images/cat6.png',
    className: '-mb-12 hidden lg:block',
  },
  {
    url: '/assets/images/cat7.png',
    className: '-mb-12 hidden xl:block',
  },
  {
    url: '/assets/images/cat8.png',
    className: '-mb-12 hidden xl:block',
  },
];

const Footer = () => {
  return (
    <footer className="relative flex flex-col">
      <div className="relative flex flex-1 items-center justify-end px-4 sm:justify-around">
        {CATS.map((cat, index) => (
          <div
            className={cn('relative bottom-0 h-40 w-20', cat.className)}
            key={index}
          >
            <Image
              src={cat.url}
              alt={`Cat ${index + 1}`}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-auto flex flex-1 justify-center border-t p-6">
        <p className="text-sm">
          Built by{' '}
          <Link href="/" className="font-semibold underline" target="_blank">
            Bon Tran
          </Link>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
