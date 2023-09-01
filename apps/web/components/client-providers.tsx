'use client';
import { Provider as ReduxProvider } from 'react-redux';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { store } from '@store';

export const ClientProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <ReduxProvider store={store}>
        <NextThemesProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          {children}
        </NextThemesProvider>
      </ReduxProvider>
    </>
  );
};
