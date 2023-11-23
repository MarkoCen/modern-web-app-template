'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const ClientProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          {children}
        </NextThemesProvider>
      </QueryClientProvider>
    </>
  );
};
