import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { allLocales } from '../i18n';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: allLocales,
    localePrefix: 'as-needed',
  });
