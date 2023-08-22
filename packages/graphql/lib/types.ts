/* eslint-disable @typescript-eslint/no-explicit-any */

import type { createInMemoryCache } from '@graphql-yoga/plugin-response-cache';
import type { ApplicationConfig } from 'graphql-modules';
import type { YogaServerOptions } from 'graphql-yoga';
import type { IncomingMessage, ServerResponse } from 'node:http';

export interface DefaultServerContext extends Record<string, any> {
  req: IncomingMessage;
  res: ServerResponse;
}

export interface DefaultUserContext extends Record<string, any> {
  cache: ReturnType<typeof createInMemoryCache>;
}

export interface CreateGraphQLServerOptions<SC, UC> {
  application: ApplicationConfig;
  graphqlEndpoint: string;
  fetchAPI: YogaServerOptions<SC, UC>['fetchAPI'];
  context?: YogaServerOptions<SC, UC>['context'];
}

export interface GraphQLServerInitOptions {
  cache: ReturnType<typeof createInMemoryCache>;
  cacheTTL?: number;
}
