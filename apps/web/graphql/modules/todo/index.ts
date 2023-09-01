import { createGraphQLModule } from '@pkg/graphql';

import { resolvers } from './resolvers';
import * as schema from './schema/todo.graphql';

export const TodoModule = createGraphQLModule({
  id: 'TodoModule',
  typeDefs: [schema],
  resolvers,
});
