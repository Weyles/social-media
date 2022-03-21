import React from 'react'
import styles from './FriendIcon.module.css'
import { NavLink } from 'react-router-dom'

export default function FriendIcon(props) {
  return (
    <div className={styles.icons} >
        {
            props.state.users.slice(0,3).map((user) => (
                <NavLink to={`/friends/${user.name}`}>
                    <img className={styles.avatar} src={user.avatar}/>
                    <div>{user.name}</div>
                </NavLink>
            ))
        }
    </div>
  )
}
