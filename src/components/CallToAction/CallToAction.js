import React from 'react'
import ButtonLink from '../UI/ButtonLink/ButtonLink'
import BannerImg from '../../assets/banner.png'
import styles from './CallToAction.module.css'

const CallToAction = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.col1}>
            <h1 className={styles.title}>Little Lemon</h1>
            <h2 className={styles.subtitle}>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

            <ButtonLink to='/reserve'>Reserve a table</ButtonLink>
          </div>
          <div className={styles.col2}>
            <img src={BannerImg} alt='Home page Banner' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction