import { todos } from './todos';

import type { Resolvers } from '../codegen/types';

export const resolvers: Resolvers = {
  Query: {
    todos,
  },
};
