import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"
// import FriendIcon from './friend-icon/FriendIcon'

export default function Navbar(props) {
  return (
    <nav className={styles.navigation}>
        <NavLink className={styles.links} to="/profile">
          <div className={styles.items}>
            <div className={styles.text}>
              Profile
            </div>
          </div> 
        </NavLink>
        <NavLink className={styles.links} to="/dialogs">
          <div className={styles.items}>
            <div className={styles.text}>
              Messages
            </div>
          </div>
        </NavLink>
        <NavLink className={styles.links} to="/users">
          <div className={styles.items}>
            <div className={styles.text}>
              Users
            </div>
          </div>
        </NavLink>
        <NavLink className={styles.links} to="/news">
          <div className={styles.items}>
            <div className={styles.text}>
              News
            </div>
          </div>
        </NavLink>
        <NavLink className={styles.links} to="/music">
          <div className={styles.items}>
            <div className={styles.text}>
              Music
            </div>
          </div>
        </NavLink>
        <NavLink className={styles.links} to="/settings">
          <div className={styles.items}>
            <div className={styles.text}>
              Settings
            </div>
          </div>
        </NavLink>
        <NavLink className={styles.links} to="/friends">
          <div className={styles.items}>
            <div className={styles.text}>
              Friends
            </div>
          </div>
        </NavLink>
          {/* <FriendIcon  state={props.state}/> */}
      </nav>
  )
}

