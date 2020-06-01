import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import NavList from '../NavList/NavList'
import navLinks from '../../config/navLinks'

const Header = () => {
  console.log(styles)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="logo"/>
        <div className={styles.sign}>beta</div>
      </div>

      <div className={styles.wrap}>
        <nav className={styles.nav}>
          <NavList navLinks={navLinks} />

          {/*<ul className={styles.navList}>*/}
          {/*  <li className={styles.navListItem}>*/}
          {/*    <Link href="/dashboard"><a className={styles.navListLink}>Dashboard</a></Link>*/}
          {/*  </li>*/}
          {/*  <li className={styles.navListItem}>*/}
          {/*    <Link href="/lab"><a className={styles.navListLink} >Lab</a></Link>*/}
          {/*  </li>*/}
          {/*  <li className={styles.navListItem}>*/}
          {/*    <Link href="/products"><a className={`${styles.navListLink} ${styles.withArrow}`}>Products</a></Link>*/}
          {/*  </li>*/}
          {/*  <li className={styles.navListItem}>*/}
          {/*    <Link href="/messages"><a className={styles.navListLink}>Messages</a></Link>*/}
          {/*  </li>*/}
          {/*  <li className={styles.navListItem}>*/}
          {/*    <Link href="/settings"><a className={`${styles.navListLink} ${styles.withArrow}`}>Settings</a></Link>*/}
          {/*  </li>*/}
          {/*  <li className={styles.navListItem}>*/}
          {/*    <Link href="/profile"><a className={styles.navListLink}>Profile</a></Link>*/}
          {/*  </li>*/}
          {/*  <li className={styles.navListItem}>*/}
          {/*    <Link href="/help"><a className={styles.navListLink}>Help</a></Link>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </nav>

        <div className={styles.bottom}>
          Astromix © 2018 – 2020
        </div>
      </div>
    </header>
  )
}

export default Header
