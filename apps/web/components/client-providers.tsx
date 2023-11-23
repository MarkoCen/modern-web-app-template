'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const ClientProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <NextThemesProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
      >
        {children}
      </NextThemesProvider>
    </>
  );
};
