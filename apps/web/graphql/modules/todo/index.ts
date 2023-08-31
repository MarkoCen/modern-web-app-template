import { createGraphQLModule } from '@pkg/graphql';

import { resolvers } from './resolvers';
import { schema } from './schema';

export const TodoModule = createGraphQLModule({
  id: 'TodoModule',
  typeDefs: [schema],
  resolvers,
});
