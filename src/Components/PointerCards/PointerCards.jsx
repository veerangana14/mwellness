import React from 'react'
import styles from './PointerCards.module.css'

const PointerCards = ({ icon, head, description }) => {
  return (
    <div className={styles.PointerCard}>
        <div className={styles.PointerHead}>
            <div className={styles.IconContainer}>
                {icon}
            </div>
            <p className={styles.Heading}>{head}</p>
        </div>

        <p className={styles.Description}>{description}</p>
    </div>
  )
}

export default PointerCards