import type { AppProps } from 'next/app';
import 'nextra-theme-docs/style.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default MyApp;
