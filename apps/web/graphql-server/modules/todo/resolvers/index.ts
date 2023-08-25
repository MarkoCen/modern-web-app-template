import type { TodoModule } from '../codegen/types';

export const resolvers: TodoModule.Resolvers = {
  Query: {
    todos: (_, __) => {
      return [];
    },
  },
};
