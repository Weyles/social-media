import React from 'react'
import styles from './../Dialogs.module.css'

const Message = (props) => {
    if(props.id === 5) {
      return(
        <div className={styles.message}>
          <div className={styles.text}>
            {props.message}
          </div>
          <div className={styles.icon}>
            <img src={props.avatar} className={styles.avatar}/>
          </div>
        </div>
      );
    } else {
      return(
        <div className={styles.anotherMessage}>
          <div className={styles.icon}>
            <img src={props.avatar} className={styles.avatar}/>
          </div>
          <div className={styles.anotherText}>
            {props.message}
          </div>
        </div>
      );
    }
}

export default Message;
