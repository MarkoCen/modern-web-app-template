import { graphqlClient } from './createGraphQLClient';

import type { RequestOptions, Variables } from 'graphql-request';

export const fetcher = <TData, TVariables extends Variables>(
  document: string,
  variables?: TVariables,
  _options?: RequestInit['headers'],
): (() => Promise<TData>) => {
  return async () => {
    const options: RequestOptions = {
      document,
      variables,
    };

    return graphqlClient.request<TData>(options);
  };
};
