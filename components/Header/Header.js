import React, { useState } from 'react'
import Link from 'next/link'
import NavList from '../NavList/NavList'
import navLinks from '../../data/navLinks'
import ToggleBtn from '../ToggleBtn/ToggleBtn'
import styles from './Header.module.scss'

const Header = () => {
  const [active, setActive] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.logoLink}>
              <picture>
                <source srcSet="/images/logo.svg" media="(min-width: 768px)"/>
                <source srcSet="/images/logo-mob.svg" media="(min-width: 320px)" />
                <img src="/images/logo.svg" alt="logo"/>
              </picture>

              <span className={styles.sign}>beta</span>
            </a>
          </Link>
        </div>

        <ToggleBtn active={active} setActive={setActive}/>
      </div>

      <div className={`${styles.wrap} ${active ? styles.active : ''}`}>
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
