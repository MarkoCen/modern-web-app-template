import { createGraphQLServer } from '@pkg/graphql';

import { TodoModule } from './modules/todo';

export const server = createGraphQLServer({
  application: {
    modules: [TodoModule],
  },
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response, Request, fetch },
});
