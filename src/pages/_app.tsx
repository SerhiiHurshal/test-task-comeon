import { AppProps } from 'next/app';
import { Fragment } from 'react';

import '../styles/globals.scss';
import '../stylesheets/semantic.css';
import '../stylesheets/styles.css';

import Script from 'next/script';
import { Layout } from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  // useLoginVerify();
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src='/lib/comeon.game-1.0.min.js' />
    </Fragment>
  );
}

export default MyApp;
