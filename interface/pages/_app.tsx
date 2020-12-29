import { AppProps } from "next/app";
import Head from 'next/head'
import React from "react";
import { globalStyles } from "@src/styles/css";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
