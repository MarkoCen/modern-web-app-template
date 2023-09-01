/* eslint-disable */
/* DO NOT EDIT THIS AUTO-GENERATED FILE */
import type * as Types from "../../../codegen/graphql-modules";
import type * as gm from "graphql-modules";
export namespace TodoModule {
  interface DefinedFields {
    Query: 'todos';
    Todo: 'id' | 'note' | 'date' | 'status';
  };
  
  interface DefinedEnumValues {
    TodoStatus: 'FINISHED' | 'DELETED' | 'OPEN';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Todo = Pick<Types.Todo, DefinedFields['Todo']>;
  export type TodoStatus = DefinedEnumValues['TodoStatus'];
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type TodoResolvers = Pick<Types.TodoResolvers, DefinedFields['Todo'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Todo?: TodoResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      todos?: gm.Middleware[];
    };
    Todo?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      note?: gm.Middleware[];
      date?: gm.Middleware[];
      status?: gm.Middleware[];
    };
  };
}