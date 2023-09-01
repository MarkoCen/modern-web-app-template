'use client';

import { Button } from '@pkg/components';

import { useTodosQuery } from '@graphql/modules/todo/operations';

const IndexPage: React.FC = () => {
  const { data } = useTodosQuery();

  return (
    <>
      <h1 className='text-xl text-blue-600'>Hello, World!</h1>
      <ul>
        {data && data.todos.map((todo) => <li key={todo?.id}>{todo?.id}</li>)}
      </ul>
      <Button>Hello</Button>
    </>
  );
};

export default IndexPage;
