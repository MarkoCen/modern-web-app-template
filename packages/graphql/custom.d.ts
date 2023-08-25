import type { DefaultServerContext, DefaultUserContext } from './lib/types';
import type { YogaInitialContext } from 'graphql-yoga';

declare global {
  namespace GraphQLModules {
    interface GlobalContext
      extends YogaInitialContext,
        DefaultServerContext,
        DefaultUserContext {}
  }
}
