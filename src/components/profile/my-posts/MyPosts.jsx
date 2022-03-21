import React from 'react'
import Post from './post/Post'
// import { postData } from '../../..';
import styles from "./MyPosts.module.css"

export default function MyPosts(props) {
  const postElements = props.postData.map((post) => (
    <Post post={post.text} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div>
        My posts
        <textarea ref={newPostElement} />
        <div>
          <button onClick={addPost} >Enter</button>
        </div>
          {postElements}
    </div>
  )
}
