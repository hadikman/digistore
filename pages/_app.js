import Head from 'next/head';

import '../styles/global.scss';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>دیجی استور</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
