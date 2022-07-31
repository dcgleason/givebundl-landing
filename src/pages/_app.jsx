import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }) {
  
  return (

  <>
  <Head>
                <title>Bundle</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
   </Head>
  <Component {...pageProps} />
  </>
  )
  
}
