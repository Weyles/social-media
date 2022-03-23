import React from 'react'
import { addPostActionCreator, updateNewPostCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

export default function MyPostsContainer(props) {
  function handlerChange(text) {
    props.store.dispatch(updateNewPostCreator(text));
  }

  function addPost() {
    props.store.dispatch(addPostActionCreator());
  }

  return (
    <MyPosts 
      newPost={props.store.getState().profilePage.newPost}
      onHandlerChange={handlerChange}
      onAddPost={addPost}
      posts={props.store.getState().profilePage.posts}
    />
  )
}
