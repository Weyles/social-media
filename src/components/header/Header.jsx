import React from 'react'
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
       <div className={styles.image}>
        <img 
          className={styles.logo} 
          alt="img" 
          src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1"
        />
       </div>
      </header>
  )
}
