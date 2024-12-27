import { Montserrat, Podkova } from 'next/font/google';

const fontMontserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const fontPodkova = Podkova({
  subsets: ['latin'],
  variable: '--font-podkova',
  display: 'swap',
});

export { fontMontserrat, fontPodkova };
