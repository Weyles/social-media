import React from 'react'
import MyPostsContainer from './my-posts/MyPostsContainer'
import styles from "./Profile.module.css"
import ProfileInfo from './profile-info/ProfileInfo'

export default function Profile(props) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.newsContainer}>
            {/* <ProfileInfo/> */}
            <MyPostsContainer store={props.store}/>
        </div>
        <div className={styles.remindersContainer}>
          <div className={styles.reminders}>
            Reminders
          </div>
        </div>
      </div>
      <div className={styles.recomendations}>
        Recomendations
      </div>
    </div>
  )
}
