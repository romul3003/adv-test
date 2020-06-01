import React from 'react'
import Link from 'next/link'
import {withRouter} from 'next/router'

import styles from './NavListItem.module.scss'

const NavListItem = ({path, label, withArrow, router}) => {
  return (
    <li className={`${styles.navListItem} ${router.pathname === path ? styles.active : ''}`}>
      <Link href={path}><a className={`${styles.navListLink} ${withArrow ? styles.withArrow : ''}`}>{label}</a></Link>
    </li>
  )
}

export default withRouter(NavListItem)
