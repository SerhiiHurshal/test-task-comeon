import { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';

import '../styles/globals.scss';
import '../stylesheets/semantic.css';
import '../stylesheets/styles.css';

import Script from 'next/script';
import { Layout } from '@components/Layout';

declare global {
  interface Window {
    comeon: {
      game: {
        launch: (t: string) => void;
      };
    };
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      <title>Comeon</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Script strategy='beforeInteractive' src='/lib/comeon.game-1.0.min.js' />
  </Fragment>
);

export default MyApp;
