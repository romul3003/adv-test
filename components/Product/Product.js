import React from 'react'
import styles from './Product.module.scss'

const Product = ({title, text, imgSrc}) => {
  return (
    <li className={styles.item}>
      <div className={styles.card}>
        <div className={styles.imgWrap}>
          <img src={imgSrc} className={styles.img} alt="product icon"/>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  )
}

export default Product
