import React from 'react'
import styles from "./Post.module.css"

export default function Post(props) {
  return (
    <div>
      <div>
        <img alt="avatar" className={styles.avatar} src={props.avatar} />
        {props.post}
        <div> likes: {props.likesCount}</div>
      </div>
    </div>
  )
}
