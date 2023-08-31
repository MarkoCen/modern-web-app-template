'use client';
import { Provider as ReduxProvider } from 'react-redux';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Provider as UrqlProvider } from 'urql';

import { client } from '@services/graphql-client';
import { store } from '@store';

export const ClientProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UrqlProvider value={client}>
        <ReduxProvider store={store}>
          <NextThemesProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
          >
            {children}
          </NextThemesProvider>
        </ReduxProvider>
      </UrqlProvider>
    </>
  );
};
