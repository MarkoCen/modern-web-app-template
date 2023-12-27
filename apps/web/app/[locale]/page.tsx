'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@pkg/components';

import { TodoList } from '@components/todo-list';

const IndexPage: React.FC = () => {
  const t = useTranslations('Main');

  return (
    <>
      <h1 className='text-xl text-blue-600'>{t('hello')}</h1>
      <Button>{t('hello')}</Button>
      <TodoList />
    </>
  );
};

export default IndexPage;
