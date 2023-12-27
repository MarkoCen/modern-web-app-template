import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import { Analytics } from '@vercel/analytics/react';
import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';

import { ClientProviders } from '@components/client-providers';

import { LocaleName, allLocales } from '../../i18n';

import '../../styles/global.css';
import '@pkg/components/styles.css';

export const metadata: Metadata = {
  title: 'Modern Web Application',
};

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const Layout: React.FC<{
  children: React.ReactNode;
  params: { locale: LocaleName };
}> = async ({ children, params }) => {
  let messages: never;

  if (
    !allLocales
      .map((l) => l.toLowerCase())
      .includes(params.locale.toLowerCase())
  ) {
    notFound();
  }

  try {
    messages =
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (await import(`../../locales/${params.locale}.json`)).default as never;
  } catch (error) {
    notFound();
  }

  const lang: Record<LocaleName, string> = {
    [LocaleName.en]: 'en',
  };

  return (
    <html
      className={roboto.className}
      lang={lang[params.locale]}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>{children}</ClientProviders>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default Layout;
