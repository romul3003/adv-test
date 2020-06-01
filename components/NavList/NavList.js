import React from 'react'
import NavListItem from '../NavListItem/NavListItem'
import styles from './NavList.module.scss'

const NavList = ({navLinks}) => {
  return (
    <ul className={styles.navList}>
      {navLinks.map(navLink => (
        <NavListItem key={navLink.label} path={navLink.path} label={navLink.label} withArrow={navLink.withArrow}/>
      ))}
    </ul>
  )
}

export default NavList
