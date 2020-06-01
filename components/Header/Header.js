import React from 'react'
import styles from './Header.module.scss'
import NavList from '../NavList/NavList'
import navLinks from '../../config/navLinks'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="logo"/>
        <div className={styles.sign}>beta</div>
      </div>

      <div className={styles.wrap}>
        <nav className={styles.nav}>
          <NavList navLinks={navLinks} />
        </nav>

        <div className={styles.bottom}>
          Astromix © 2018 – 2020
        </div>
      </div>
    </header>
  )
}

export default Header
