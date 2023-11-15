import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  return (
    <article className={styles.article}>
      <div className={styles.img}><img src={props.img} alt={props.name} /></div>
      <div className={styles.info}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.price}>${props.price}</div>
        <div className={styles.desc}>{props.desc}</div>
        <div className={styles.order}>
          Order a delivery
        </div>
      </div>
    </article>
  )
}

export default Card