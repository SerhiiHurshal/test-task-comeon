import { AppProps, NextWebVitalsMetric } from 'next/app';
import '../styles/globals.scss';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.mode === 'perfomance') {
    console.log(metric);
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
