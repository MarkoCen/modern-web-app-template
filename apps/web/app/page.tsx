import { Button } from '@pkg/components';

const IndexPage: React.FC = () => {
  return (
    <>
      <h1 className='text-xl text-blue-600'>Hello, World!</h1>
      <Button
        size='sm'
        variant='default'
      >
        Hi
      </Button>
    </>
  );
};

export default IndexPage;
