import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"
import FriendIcon from './friend-icon/FriendIcon'

export default function Navbar(props) {
  return (
    <nav className={styles.navigation}>
        <div>
          <NavLink to="/profile">
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink to="/dialogs">
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink to="/news">
            News
          </NavLink>
        </div>
        <div>
          <NavLink to="/music">
            Music
          </NavLink>
        </div>
        <div>
          <NavLink to="/settings">
            Settings
          </NavLink>
        </div>
        <div>
          <NavLink to="/friends">
            Friends
          </NavLink>
          <FriendIcon  state={props.state}/>
        </div>
      </nav>
  )
}

