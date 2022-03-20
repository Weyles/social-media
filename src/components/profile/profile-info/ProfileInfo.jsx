import React from 'react'
import styles from './ProfileInfo.module.css'

export default function () {
  return (
    <div>
        <div>
            <img className={styles.avatar} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg" />        
        </div>
        <div>
            Avatar + descriptions
        </div>
    </div>
  )
}
