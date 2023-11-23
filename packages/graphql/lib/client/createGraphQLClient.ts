import { GraphQLClient } from 'graphql-request';

const endpoint = '/api/graphql';

export const graphqlClient = new GraphQLClient(endpoint);
