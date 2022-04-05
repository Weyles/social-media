import React from 'react'
import { addPostActionCreator, updateNewPostCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
let mapStateToProps = (state) => {
  return {
    newPost: state.profilePage.newPost,
    posts: state.profilePage.posts,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onHandlerChange: (text) => {
      dispatch(updateNewPostCreator(text))
    },
    onAddPost: () => {
      dispatch(addPostActionCreator())
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;