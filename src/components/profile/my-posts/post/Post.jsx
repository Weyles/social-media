import React from 'react'
import styles from "./Post.module.css"

export default function Post(props) {
  return (
    <div className={styles.post}>
      <div>
        <div className={styles.info}>
          <img alt="avatar" className={styles.avatar} src={props.avatar} />
          <div className={styles.name}>
            {props.name}
          </div>
        </div>
        <div className={styles.text}>
          {props.post}
        </div>
        <div className={styles.likes}> &#10084; {props.likesCount}</div>
      </div>
    </div>
  )
}
