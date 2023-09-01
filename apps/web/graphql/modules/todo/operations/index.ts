/* eslint-disable */
/* DO NOT EDIT THIS AUTO-GENERATED FILE */
import * as Types from '../../../codegen/types';

import { api } from '@store/base-query';
export type TodoInfoFragment = { __typename?: 'Todo', id: string, note: string, date: string, status?: Types.TodoStatus | null };

export type TodosQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, note: string, date: string, status?: Types.TodoStatus | null } | null> };

export const TodoInfoFragmentDoc = `
    fragment TodoInfo on Todo {
  id
  note
  date
  status
}
    `;
export const TodosDocument = `
    query Todos {
  todos {
    ...TodoInfo
  }
}
    ${TodoInfoFragmentDoc}`;

const injectedRtkApi = api.injectEndpoints({
  overrideExisting: module.hot?.status() === "apply",
  endpoints: (build) => ({
    Todos: build.query<TodosQuery, TodosQueryVariables | void>({
      query: (variables) => ({ document: TodosDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useTodosQuery, useLazyTodosQuery } = injectedRtkApi;


module.hot?.accept();
/* DO NOT EDIT THIS AUTO-GENERATED FILE */