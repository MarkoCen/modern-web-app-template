import React from 'react';

import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

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
      <main className={styles.main}>
        <h1>{data?.ping?.text}</h1>
      </main>
    </>
  );
}
