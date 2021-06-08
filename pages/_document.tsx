import React from 'react'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { getCssString } from '@/styles/css'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element
    html: string
    head?: (JSX.Element | null)[] | undefined
  }> {
    try {
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
          </>
        ),
      }
    } finally {
      //
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link href="/fonts/fonts.css" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
