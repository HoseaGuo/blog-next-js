import "../styles/globals.css";
import "../styles/markdown-custom.scss"; // markdown自定义样式
import "highlight.js/styles/vs2015.css"; // 引入高亮样式 这里我用的是sublime样式
// import '../styles/chat.module.scss'
// import '../styles/chat.scss'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
