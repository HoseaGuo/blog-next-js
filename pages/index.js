import Head from "next/head";
import React from "react";


export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return <div>
      <Head>
        <title>首页</title>
      </Head>
      <div>首页</div>
    </div>
  }
}