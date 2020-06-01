import React from 'react'
import Link from 'next/link'
import styles from './MainContent.module.scss'
import Views from '../Views/Views'
import productsData from '../../data/productsData'
import Products from '../Products/Products'

const MainContent = ({products}) => {
  return (
    <main className={styles.main}>
      { !products
      ? (
        <h1>This is test page. Only <Link href='/products'><a>products page</a></Link> is available</h1>
      )
      : (
        <>
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
        </>
      )}
    </main>
  )
}

export default MainContent
