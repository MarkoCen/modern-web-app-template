import { graphql } from '@gql';

export const getTodos = graphql(`
  query Todo {
    todos {
      ...TodoInfo
    }
  }
`);
