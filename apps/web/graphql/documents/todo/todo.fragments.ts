import { graphql } from '@gql';

export const TodoInfoFragment = graphql(`
  fragment TodoInfo on Todo {
    id
    note
    date
    status
  }
`);
