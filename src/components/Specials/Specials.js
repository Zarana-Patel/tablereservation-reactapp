import React from 'react'
import Card from '../Card/Card'
import styles from './Specials.module.css'
import greek from '../../assets/greek.png'
import brucheta from '../../assets/brucheta.png'
import desert from '../../assets/desert.png'
import ButtonLink from '../UI/ButtonLink/ButtonLink'

const Specials = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Specials</h2>
          <ButtonLink to='/'>Online Menu</ButtonLink>
        </div>
        <div className={styles.content}>
          <Card
            img={greek}
            name='Greek salad'
            price='12.99'
            desc='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
          />
          <Card
            img={brucheta}
            name='Bruchetta'
            price='5.99'
            desc='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
          />
          <Card
            img={desert}
            name='Lemon Desert'
            price='5.00'
            desc='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
          />
        </div>
      </div>
    </section>
  )
}

export default Specials