import { resolvers as todoResolvers } from '@feature/todo/graphql/resolvers';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import { createGraphQLServer } from '@pkg/graphql';

export const server = createGraphQLServer({
  typeDefs: loadFilesSync([
    '../../features/**/schema/*.graphql',
    '../../features/**/operations/*.graphql',
  ]),
  resolvers: mergeResolvers([todoResolvers]),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response, Request, fetch },
});
