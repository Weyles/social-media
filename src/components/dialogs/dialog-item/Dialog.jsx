import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './../Dialogs.module.css'

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return(
      <div className={styles.dialog}>
        <NavLink to={path} className={styles.link}>
          <div className={styles.item}>
            <img className={styles.avatar} src={props.avatar} />
            <div className={styles.name}>
              {props.name}
            </div>
          </div>
        </NavLink>
      </div>
    );
}

export default Dialog;
