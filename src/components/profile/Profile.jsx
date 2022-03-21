import React from 'react'
import MyPosts from './my-posts/MyPosts'
import styles from "./Profile.module.css"
import ProfileInfo from './profile-info/ProfileInfo'

export default function Profile(props) {
  return (
    <div className={styles.content}>
      <ProfileInfo/>
      <MyPosts postData={props.state.posts}/>
    </div>
  )
}
