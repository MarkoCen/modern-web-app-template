import { EnvelopArmor } from '@escape.tech/graphql-armor';
import { characterLimitPlugin } from '@escape.tech/graphql-armor-character-limit';
import { useResponseCache } from '@graphql-yoga/plugin-response-cache';

import type { GraphQLServerInitOptions } from '../types';
import type { Plugin } from 'graphql-yoga';

export const createPlugins = ({
  cache,
  cacheTTL,
}: GraphQLServerInitOptions): Plugin[] => {
  const armor = new EnvelopArmor();
  const protection = armor.protect();

  return [
    useResponseCache({
      session: (req) => req.headers.get('authorization'),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      cache,
      ttl: cacheTTL ?? 10 * 60 * 1000, // default to catch the operation result for 10mins
    }),
    characterLimitPlugin({
      maxLength: 20000,
    }) as Plugin,
    ...(protection.plugins as Plugin[]),
  ];
};
