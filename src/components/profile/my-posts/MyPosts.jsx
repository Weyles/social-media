import React from 'react'
import Post from './post/Post'
// import { postData } from '../../..';
import styles from "./MyPosts.module.css"

export default function MyPosts(props) {
  const postElements = props.postData.map((post) => (
    <Post post={post.text} likesCount={post.likesCount} />
  ));

  return (
    <div>
        My posts
        <textarea />
        <div>
          <button>Enter</button>
        </div>
          {postElements}
    </div>
  )
}
