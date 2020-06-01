import React from 'react'
import Link from 'next/link'
import NavList from '../NavList/NavList'
import navLinks from '../../data/navLinks'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.logoLink}>
            <img src="/images/logo.svg" alt="logo"/>
            <span className={styles.sign}>beta</span>
          </a>
        </Link>
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
