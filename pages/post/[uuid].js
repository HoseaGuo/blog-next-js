import { css } from '@emotion/react'
import moment from 'moment'
import React from 'react'
import request from '../../utils/request';
import marked from '../../utils/markdown'

export async function getServerSideProps(context) {
  let { uuid } = context.params
  let { success, data } = await request(`http://localhost:6627/api/article?uuid=${uuid}`)
  return {
    props: {
      // id: context.params.id,
      articleData: data,
    }, // will be passed to the page component as props
  }
}

export default class PostDetail extends React.Component {
  render() {
    let { articleData } = this.props;
    let content = marked(articleData.content);
    if (articleData)
      return (
        <div className={['public-container']} css={style}>
          <h1 className="title">{articleData.title}</h1>
          <p className="sub">{moment(articleData.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
          <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      )
  }
}

const style = css`
  .title {
    text-align: center;
  }
  .sub {
    text-align: center;
    span {
      color: red;
    }
  }
  .content {
    margin-top: 40px;
  }
`
