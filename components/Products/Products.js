import React from 'react'
import styles from './Products.module.scss'
import Product from '../Product/Product'

const Products = ({products}) => {
  return (
    <ul className={styles.list}>
      {products.map(({id, ...otherProductsProps}) => (
        <Product key={id} {...otherProductsProps} />
      ))}
    </ul>
)}

export default Products
