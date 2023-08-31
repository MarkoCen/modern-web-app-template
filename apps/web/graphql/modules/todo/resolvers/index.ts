import { type Todo, TodoStatus } from '@gql/types';

import type { TodoModule } from './types';

export const resolvers: TodoModule.Resolvers = {
  Query: {
    todos: (_, __) => {
      const num = Math.ceil(Math.random() * 10);

      const result: Todo[] = [];

      for (let i = 0; i < num; i++) {
        result.push({
          id: Math.random().toString(),
          date: new Date().toISOString(),
          note: Math.random().toString(),
          status: TodoStatus.Open,
        });
      }

      return result;
    },
  },
};
