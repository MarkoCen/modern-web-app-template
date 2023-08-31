import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/react';

import { ClientProviders } from '@components/client-providers';

import '../styles/global.css';
import '@pkg/components/styles.css';

export const metadata: Metadata = {
  title: 'Modern Web Application',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <ClientProviders>{children}</ClientProviders>
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
