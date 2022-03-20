import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"

export default function Navbar() {
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
      </nav>
  )
}

