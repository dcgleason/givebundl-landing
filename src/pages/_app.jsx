import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'
import { NextScript } from 'next/document'

export default function App({ Component, pageProps }) {
  
  return (

  <>

  <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=G-Q7EKYQCWR0`}> </Script>
  <Script strategy='lazyOnload'>{
  window.dataLayer = window.dataLayer || [];

  function gtag(){dataLayer.push(arguments);}
  
  gtag('js', new Date());
  gtag('config', 'G-Q7EKYQCWR0');

}</Script>

  <Head>
                <title>Bundle</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
   </Head>
  <Component {...pageProps} />
  </>
  )
  
}
