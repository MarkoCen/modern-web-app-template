import { graphql } from '@gql';

export const getTodos = graphql(`
  query Todos {
    todos {
      ...TodoInfo
    }
  }
`);
