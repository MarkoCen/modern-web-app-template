declare module '*.graphql';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Messages = typeof import('./locales/en-us.json');

declare interface IntlMessages extends Messages {}
