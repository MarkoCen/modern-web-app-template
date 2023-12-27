import { useResponseCache } from '@graphql-yoga/plugin-response-cache';

import type { GraphQLServerInitOptions } from '../types';
import type { Plugin } from 'graphql-yoga';

export const createPlugins = ({
  cache,
  cacheTTL,
  session = () => null,
}: GraphQLServerInitOptions): Plugin[] => {
  return [
    useResponseCache({
      includeExtensionMetadata: true,
      session,
      cache,
      ttl: cacheTTL ?? 10 * 60 * 1000, // default to catch the operation result for 10mins
    }),
  ];
};
