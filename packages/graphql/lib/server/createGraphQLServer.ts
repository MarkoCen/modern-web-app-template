import { createInMemoryCache } from '@graphql-yoga/plugin-response-cache';
import { createApplication } from 'graphql-modules';
import { createYoga } from 'graphql-yoga';

import { context } from './context';
import { createPlugins } from './plugins';

import type {
  CreateGraphQLServerOptions,
  DefaultServerContext,
  DefaultUserContext,
} from '../types';
import type { YogaServerInstance } from 'graphql-yoga';

export const createGraphQLServer = <
  SC extends DefaultServerContext = DefaultServerContext,
  UC extends DefaultUserContext = DefaultUserContext,
>(
  options: CreateGraphQLServerOptions<SC, UC>,
): YogaServerInstance<SC, UC> => {
  const app = createApplication(options.application);

  const cache = createInMemoryCache();

  return createYoga<SC, UC>({
    schema: app.schema,
    graphiql: process.env.NODE_ENV !== 'production',
    graphqlEndpoint: options.graphqlEndpoint,
    fetchAPI: options.fetchAPI,
    context: options.context ? options.context : context({ cache }),
    plugins: createPlugins({
      cache,
    }),
  });
};
