import '@styles/globals.css'

import React, { useEffect } from 'react';
import Head from 'next/head';
import PageFooter from '@comp/PageFooter';

function MyApp({ Component, pageProps }) {

  return (
    <div className="site">
    <Head>
      <link rel='icon' href='/favicon.png' />
    </Head>
    <div className="content">

      <Component {...pageProps} />

    </div>
    <PageFooter />
    </div>
  );
}
export default MyApp;


