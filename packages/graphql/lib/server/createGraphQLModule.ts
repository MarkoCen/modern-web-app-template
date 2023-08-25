import { createModule } from 'graphql-modules';

import type { ModuleConfig } from 'graphql-modules';

export const createGraphQLModule = (config: ModuleConfig) => {
  return createModule({
    ...config,
  });
};
