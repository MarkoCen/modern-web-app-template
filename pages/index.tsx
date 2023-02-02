import React from 'react';

import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';

export default function Home() {
  const { data } = useQuery(gql`
    query Ping {
      ping {
        text
      }
    }
  `);

  return (
    <>
      <Head>
        <title>Next-Nest</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='text-2xl text-blue-300'>{data?.ping?.text}</h1>
      </main>
    </>
  );
}
