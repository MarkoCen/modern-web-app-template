import { typeDefs as todoTypeDefs } from '@feature/todo.graphql/codegen/typeDefs';
import { resolvers as todoResolvers } from '@feature/todo.graphql/resolvers';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { createGraphQLServer } from '@pkg/graphql';
import { NextRequest, NextResponse } from 'next/server';

export const server = createGraphQLServer({
  typeDefs: mergeTypeDefs([todoTypeDefs]),
  resolvers: mergeResolvers([todoResolvers]),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response: NextResponse, Request: NextRequest, fetch },
});
