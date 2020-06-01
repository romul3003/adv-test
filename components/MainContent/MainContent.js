import React from 'react'
import styles from './MainContent.module.scss'
import Views from '../Views/Views'

const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className="title">Products</h1>
        <Views />
      </div>
    </main>
  )
}

export default MainContent
