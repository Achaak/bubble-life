import { StorePersistGate, StoreProvider } from '@bubble/store/src/hooks'
import { persistor, store } from '@bubble/store/src/store'
import { globalStyles } from '@bubble/styles'
import type { Locales } from '@bubble/translate'
import { detectLocale, TypesafeI18n } from '@bubble/translate'
import { loadLocaleAsync } from '@bubble/translate/dist/i18n/i18n-util.async'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export type NextPageWithLayout<T extends Record<string, unknown> = Record<string, unknown>> =
  NextPage<T> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
  }

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout ?? ((page: React.ReactElement): React.ReactElement => page)

  const [locale, setLocale] = useState<Locales | undefined>(undefined)

  globalStyles()

  useEffect(() => {
    const l = detectLocale(() => [router.locale || 'en'])

    loadLocaleAsync(l).then(() => setLocale(l))
  }, [router.locale])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {locale && (
        <TypesafeI18n locale={locale}>
          <StoreProvider store={store}>
            <StorePersistGate loading={null} persistor={persistor}>
              {getLayout(<Component {...pageProps} />)}
            </StorePersistGate>
          </StoreProvider>
        </TypesafeI18n>
      )}
    </>
  )
}

export default MyApp
