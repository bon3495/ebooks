import { redirect } from 'next/navigation';

// import { LOCALE_TYPES } from '@/constants/globals';

interface RootPageProps {
  params: { locale: string };
}

// This page only renders when the app is built statically (output: 'export')
export default function RootPage({ params: { locale } }: RootPageProps) {
  // redirect(LOCALE_TYPES.en);
  redirect(locale);
}
