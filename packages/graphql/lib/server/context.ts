import type {
  DefaultServerContext,
  DefaultUserContext,
  GraphQLServerInitOptions,
} from '../types';
import type { YogaInitialContext } from 'graphql-yoga';

export const context =
  <SC extends DefaultServerContext, UC extends DefaultUserContext>(
    options: GraphQLServerInitOptions,
  ): ((initialContext: YogaInitialContext & SC) => Promise<UC>) =>
  // eslint-disable-next-line @typescript-eslint/require-await
  async () => {
    return {
      cache: options.cache,
    } as UC;
  };
