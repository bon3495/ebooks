import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CATS = [
  {
    url: '/assets/images/cat1.png',
    style: {
      marginBottom: -75,
    },
  },
  {
    url: '/assets/images/cat2.png',
    style: {
      marginBottom: -75,
    },
  },
  {
    url: '/assets/images/cat3.png',
    style: {
      marginBottom: -75,
    },
  },
  {
    url: '/assets/images/cat4.png',
    style: {
      marginBottom: -75,
    },
  },
  {
    url: '/assets/images/cat5.png',
    style: {
      marginBottom: -40,
    },
  },
  {
    url: '/assets/images/cat6.png',
    style: {
      marginBottom: -40,
    },
  },
  {
    url: '/assets/images/cat7.png',
    style: {
      marginBottom: -55,
    },
  },
  {
    url: '/assets/images/cat8.png',
    style: {
      marginBottom: -40,
    },
  },
];

const Footer = () => {
  return (
    <footer className="relative flex flex-col">
      <div className="relative flex flex-1 items-center justify-around">
        {CATS.map((cat, index) => (
          <div
            className="relative bottom-0 h-40 w-20"
            style={cat.style}
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
      <div className="mt-auto flex flex-1 justify-center border border-t p-6">
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
