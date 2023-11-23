'use client';

import { useTodosQuery } from '@feature/todo/graphql';
import { Button } from '@pkg/components';

const IndexPage: React.FC = () => {
  const { data } = useTodosQuery();

  return (
    <>
      <h1 className='text-xl text-blue-600'>Hello, World!</h1>
      <h1>{data?.todos[0]?.id}</h1>
      <Button>Hello</Button>
    </>
  );
};

export default IndexPage;
