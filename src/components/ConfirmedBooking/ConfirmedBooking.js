import React from 'react'
import ButtonLink from '../UI/ButtonLink/ButtonLink'
import styles from './ConfirmedBooking.module.css'
import image from '../../assets/restaurant.jpg'

const ConfirmedBooking = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Reserve a Table</h1>
        <p>
          You have successfully reserved a table in the restaurant<span>Little Lemon</span>
        </p>
        <div className={styles.image}>
          <img src={image} alt='Little Lemon Terrace' />
        </div>
        <ButtonLink to='/'>Go to Home page</ButtonLink>
      </div>
    </section>
  )
}

export default ConfirmedBooking