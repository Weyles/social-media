import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './../Dialogs.module.css'

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return(
      <div className={styles.dialog}>
        <NavLink to={path}>
          <img className={styles.avatar} src={props.avatar} />
          {props.name}
        </NavLink>
      </div>
    );
}

export default Dialog;
