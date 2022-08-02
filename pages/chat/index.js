import React from "react";

import {css} from "@emotion/react";
// import style from './index.module.scss';

export default class Chat extends React.Component {
  render() {
    return (
      <div css={style}>
        <div className={"chat-box"}>hello chat111</div>
      </div>
    );
  }
}

let style = css`
  color: red;
  .chat-box {
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    background: #f8f8f8;
    width: 500px;
    height: 80vh;
  }
`
