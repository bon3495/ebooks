import {
  Dancing_Script as DancingScript,
  Open_Sans as OpenSans,
} from 'next/font/google';

const fontOpenSans = OpenSans({
  subsets: ['latin'],
  variable: '--font-openSans',
  display: 'swap',
});

const fontDancing = DancingScript({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

export { fontOpenSans, fontDancing };
