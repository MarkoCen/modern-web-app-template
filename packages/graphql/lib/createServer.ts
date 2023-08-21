/* eslint-disable @typescript-eslint/no-explicit-any */
import { EnvelopArmor } from '@escape.tech/graphql-armor';
import { characterLimitPlugin } from '@escape.tech/graphql-armor-character-limit';
import {
  createInMemoryCache,
  useResponseCache,
} from '@graphql-yoga/plugin-response-cache';
import { createApplication } from 'graphql-modules';
import { createYoga } from 'graphql-yoga';

import type { ApplicationConfig } from 'graphql-modules';
import type { YogaServerInstance, YogaServerOptions } from 'graphql-yoga';
import type { IncomingMessage, ServerResponse } from 'node:http';

interface DefaultServerContext extends Record<string, any> {
  req: IncomingMessage;
  res: ServerResponse;
}

interface DefaultUserContext extends Record<string, any> {
  cache: ReturnType<typeof createInMemoryCache>;
}

interface CreateGraphQLServerOptions<ServerContext, UserContext> {
  application: ApplicationConfig;
  graphqlEndpoint: string;
  fetchAPI: YogaServerOptions<ServerContext, UserContext>['fetchAPI'];
  context?: YogaServerOptions<ServerContext, UserContext>['context'];
}

export const createGraphQLServer = <
  ServerContext extends DefaultServerContext = DefaultServerContext,
  UserContext extends DefaultUserContext = DefaultUserContext,
>(
  options: CreateGraphQLServerOptions<ServerContext, UserContext>,
): YogaServerInstance<ServerContext, UserContext> => {
  const app = createApplication(options.application);

  const graphqlCache = createInMemoryCache();

  const armor = new EnvelopArmor();
  const protection = armor.protect();

  return createYoga<ServerContext, UserContext>({
    schema: app.schema,
    graphiql: process.env.NODE_ENV !== 'production',
    graphqlEndpoint: options.graphqlEndpoint,
    fetchAPI: options.fetchAPI,
    context: options.context
      ? options.context
      : async () => {
          return (await Promise.resolve<DefaultUserContext>({
            cache: graphqlCache,
          })) as never;
        },
    plugins: [
      useResponseCache({
        session: (req) => req.headers.get('authorization'),
        cache: graphqlCache as never,
        ttl: 10 * 60 * 1000, // default to catch the operation result for 10mins
      }),
      characterLimitPlugin({
        maxLength: 20000,
      }),
      ...protection.plugins,
    ],
  });
};
