import React from 'react'
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
       <div>
        <img className={styles.logo} alt="img" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"/>
       </div>
      </header>
  )
}
