import React from "react";
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { css } from "@src/styles/css";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=block"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  let extractedStyles: string[] = [];

  ctx.renderPage = () => {
    const { styles, result } = css.getStyles(originalRenderPage);
    extractedStyles = styles;
    return result;
  };

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {extractedStyles.map((content, index) => (
          <style key={index}>{content}</style>
        ))}
      </>
    )
  };
};

export default MyDocument;
