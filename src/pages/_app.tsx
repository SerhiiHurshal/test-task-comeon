import { AppProps, NextWebVitalsMetric } from 'next/app';
import { Fragment } from 'react';

import '../styles/globals.scss';
import '../stylesheets/semantic.css';
import '../stylesheets/styles.css';

import Head from 'next/head';
import Script from 'next/script';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.mode === 'perfomance') {
    console.log(metric);
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <Script src='../lib/comeon.game-1.0.min.js' />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
