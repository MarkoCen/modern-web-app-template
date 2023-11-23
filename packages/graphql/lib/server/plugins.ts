import { useResponseCache } from '@graphql-yoga/plugin-response-cache';

import type { GraphQLServerInitOptions } from '../types';
import type { Plugin } from 'graphql-yoga';

export const createPlugins = ({
  cache,
  cacheTTL,
}: GraphQLServerInitOptions): Plugin[] => {
  return [
    useResponseCache({
      session: (req) => req.headers.get('authorization'),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      cache,
      ttl: cacheTTL ?? 10 * 60 * 1000, // default to catch the operation result for 10mins
    }),
  ];
};
