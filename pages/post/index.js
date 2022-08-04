import Link from "next/link";
import React from "react";
import request from "../../utils/request";

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
    this.getPosts();
  }

  getPosts = async () => {
    console.log("请求文章列表");

    const { success, data, msg } = await request("/api/article");
    if (success) {
      this.setState({
        posts: data.list,
      });
    } else {
      console.log(msg);
    }
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.uuid}>
              <Link href={`/post/${post.uuid}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
