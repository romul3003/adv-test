import React from 'react'
import styles from './MainContent.module.scss'
import Views from '../Views/Views'
import productsData from '../../data/productsData'
import Products from '../Products/Products'

const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Products</h1>
        <Views />
      </div>
      <div className={styles.body}>
        <Products products={productsData}/>
      </div>

      <div className={styles.footer}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </main>
  )
}

export default MainContent
