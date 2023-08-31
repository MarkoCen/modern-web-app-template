import { gql } from '@pkg/graphql';

export const schema = gql`
  type Query {
    todos: [Todo]!
  }

  type Todo {
    id: ID!
    note: String!
    date: String!
    status: TodoStatus
  }

  enum TodoStatus {
    FINISHED
    DELETED
    OPEN
  }
`;
