import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { renderStatic } from "../shared/renderer";

export default class AppDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const page = await ctx.renderPage();
  //   const { css, ids } = await renderStatic(page.html);
  //   const initialProps = await Document.getInitialProps(ctx);
  //   // console.log(page)
  //   console.log('----------------')
  //   let obj = {
  //     ...initialProps,
  //     styles: (
  //       <React.Fragment>
  //         {initialProps.styles}
  //         <style data-emotion={`css ${ids.join(" ")}`} dangerouslySetInnerHTML={{ __html: css }} />
  //       </React.Fragment>
  //     ),
  //   };
  //   console.log(obj)
  //   return obj;
  // }
  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="https://www.nextjs.cn/static/favicon/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
