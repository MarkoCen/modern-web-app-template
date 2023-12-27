/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  UseResponseCacheParameter,
  createInMemoryCache,
} from '@graphql-yoga/plugin-response-cache';
import type { YogaServerOptions, createSchema } from 'graphql-yoga';
import type { IncomingMessage, ServerResponse } from 'node:http';

export interface DefaultServerContext extends Record<string, any> {
  req: IncomingMessage;
  res: ServerResponse;
}

export interface DefaultUserContext extends Record<string, any> {
  cache: ReturnType<typeof createInMemoryCache>;
}

export interface CreateGraphQLServerOptions<SC, UC> {
  typeDefs: NonNullable<Parameters<typeof createSchema>[0]['typeDefs']>;
  resolvers: unknown;
  graphqlEndpoint: string;
  fetchAPI?: YogaServerOptions<SC, UC>['fetchAPI'];
  context?: YogaServerOptions<SC, UC>['context'];
}

export interface GraphQLServerInitOptions {
  cache: ReturnType<typeof createInMemoryCache>;
  cacheTTL?: number;
  session?: UseResponseCacheParameter['session'];
}
