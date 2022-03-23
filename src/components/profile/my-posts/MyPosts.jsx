import React from 'react'
import Post from "./post/Post"
import styles from "./MyPosts.module.css"

export default function MyPosts(props) {
  const postElements = props.posts.map((post) => (
    <Post post={post.text} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  function handlerChange() {
    props.onHandlerChange(newPostElement.current.value);
  }

  function addPost() {
    props.onAddPost()
  }

  return (
    <div>
        My posts
        <textarea value={props.newPost} onChange={handlerChange} ref={newPostElement} />
        <div>
          <button onClick={addPost}>Enter</button>
        </div>
          {postElements}
    </div>
  )
}
