import type { Metadata } from 'next';

import '../styles/global.css';
import '@pkg/components/styles.css';
import { ThemeProvider } from '../components/theme-provider';

export const metadata: Metadata = {
  title: 'Modern Web Application',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
