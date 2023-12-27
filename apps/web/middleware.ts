import createMiddleware from 'next-intl/middleware';

import { LocaleName, allLocales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: allLocales,
  // Used when no locale matches
  defaultLocale: LocaleName.en,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en-us)/:path*'],
};
