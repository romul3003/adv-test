import React from 'react'
import styles from './TohggleBtn.module.scss'

const ToggleBtn = ({active, setActive}) => {
  return (
    <button type="button" className={`${styles.btn} ${active ? styles.active : ""}`} onClick={() => setActive(!active)} />
  )
}

export default ToggleBtn
