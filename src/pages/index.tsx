import classNames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/Home.module.scss';
import moon from '@public/landscape.jpg';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Starter Pack</title>
        <meta name='description' content='Starter Pack' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center'>
        <h1 className='mt-10 text-5xl text-gray-200'>Starter Pack</h1>
        <div className={classNames('my-10 relative', styles.customStyle)}>
          <Image
            src={moon}
            placeholder='blur'
            layout='responsive'
            alt='landscape'
          />
        </div>
      </main>
    </Fragment>
  );
}
