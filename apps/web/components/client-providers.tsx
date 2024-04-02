'use client';

import { useState } from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { QueryClient, QueryClientProvider } from '@pkg/graphql/react';

export const ClientProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
        >
          {children}
        </NextThemesProvider>
      </QueryClientProvider>
    </>
  );
};
