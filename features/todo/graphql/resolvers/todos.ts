import type { Resolvers } from '../codegen/types';

export const todos: NonNullable<Resolvers['Query']>['todos'] = () => {
  return [{ id: '1', note: 'test', date: 'xxx' }];
};
