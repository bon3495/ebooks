import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { LayoutWrapper } from '@/layouts/wrapper';
// import { ThemeProvider } from '@/components/theme-provider';
import { fontDancing, fontOpenSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  locale: string;
  className?: string;
};

export default async function BaseLayout({
  children,
  locale,
  className,
}: Props) {
  const messages = await getMessages();

  return (
    <html className="h-full bg-texture" lang={locale} suppressHydrationWarning>
      <ScrollToTop />
      <body
        className={cn(
          'min-h-dvh w-screen overflow-y-auto overflow-x-hidden font-openSans text-foreground antialiased',
          fontOpenSans.variable,
          fontDancing.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
          <LayoutWrapper className={className}>
            <SiteHeader locale={locale} />
            {children}
            <Footer />
          </LayoutWrapper>
          <Analytics />
          <TailwindIndicator />
          {/* </ThemeProvider> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
