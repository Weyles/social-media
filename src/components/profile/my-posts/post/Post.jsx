import React from 'react'
import styles from "./Post.module.css"

export default function Post(props) {
  return (
    <div>
      <div>
        <img className={styles.avatar} src='https://www.vokrug.tv/pic/person/e/e/5/4/ee54d6e76295bf9d955c93fdd9e2285a.jpeg' />
        {props.post}
        <div> likes: {props.likesCount}</div>
      </div>
    </div>
  )
}
