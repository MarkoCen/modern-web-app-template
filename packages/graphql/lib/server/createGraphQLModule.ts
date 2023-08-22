/* eslint-disable @typescript-eslint/no-namespace */
import { loadFilesSync } from '@graphql-tools/load-files';
import { createModule } from 'graphql-modules';

import type { DefaultServerContext, DefaultUserContext } from '../types';
import type { ModuleConfig } from 'graphql-modules';
import type { YogaInitialContext } from 'graphql-yoga';

interface Config extends Omit<ModuleConfig, 'typeDefs' | 'resolvers'> {
  // absolute path to the folder that contains SDL files
  typeDefs: string;
  // absolute path to the folder that contains resolvers
  resolvers: string;
}

declare global {
  namespace GraphQLModules {
    interface GlobalContext
      extends YogaInitialContext,
        DefaultServerContext,
        DefaultUserContext {}
  }
}

export const createGraphQLModule = (config: Config) => {
  return createModule({
    ...config,
    typeDefs: loadFilesSync(config.typeDefs),
    resolvers: loadFilesSync(config.resolvers),
  });
};
