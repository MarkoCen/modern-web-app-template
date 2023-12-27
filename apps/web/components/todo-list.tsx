'use client';

import { useTodosQuery } from '@feature/todo.graphql';

export const TodoList: React.FC = () => {
  const { data } = useTodosQuery();

  return (
    <ul>{data?.todos.map((todo) => <li key={todo?.id}>{todo?.note}</li>)}</ul>
  );
};
