import React from 'react'
import styles from './Views.module.scss'

const Views = () => (
  <ul className={styles.viewsList}>
    <li className={styles.viewsItem}>
      <button type="button" className={styles.view}>
        <img src="/images/view-1.png" alt="content view"/>
      </button>
    </li>

    <li className={styles.viewsItem}>
      <button type="button" className={styles.view}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M6 0.5H16M6 3.5H16M6 6.5H16M6 9.5H16M6 12.5H16M6 15.5H16M0.5 0.5V3.5H3.5V0.5H0.5ZM0.5 6.5V9.5H3.5V6.5H0.5ZM0.5 12.5V15.5H3.5V12.5H0.5Z" stroke="black"/>
        </svg>
      </button>
    </li>

    <li className={styles.viewsItem}>
      <button type="button" className={styles.view}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M0 0.5H16M0 3.5H16M0 6.5H16M0 9.5H16M0 12.5H16M0 15.5H16" stroke="black"/>
        </svg>
      </button>
    </li>

    <li className={styles.viewsItem}>
      <button type="button" className={styles.view}>
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H2M0 3.5H2M0 6.5H2M0 9.5H2M0 12.5H2M0 15.5H2M4 0.5H6M4 3.5H6M4 6.5H6M4 9.5H6M4 12.5H6M4 15.5H6M14 0.5H12M14 3.5H12M14 6.5H12M14 9.5H12M14 12.5H12M14 15.5H12M10 15.5H8M8 12.5H10M10 9.5H8M8 6.5H10M10 3.5H8M8 0.5H10" stroke="white"/>
        </svg>
      </button>
    </li>
  </ul>
)

export default Views
