import React from 'react'
import MyPostsContainer from './my-posts/MyPostsContainer'
import styles from "./Profile.module.css"
import ProfileInfo from './profile-info/ProfileInfo'

export default function Profile(props) {
  return (
    <div className={styles.content}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
}
