import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="logo"/>
        <div className={styles.sign}>beta</div>
      </div>


    </header>
  )
}

export default Header
