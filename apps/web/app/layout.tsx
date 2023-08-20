import type { Metadata } from 'next';

import '../styles/global.css';

export const metadata: Metadata = {
  title: 'Modern Web Application',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
