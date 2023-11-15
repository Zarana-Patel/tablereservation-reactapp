import React from 'react'
import clientImg from '../../assets/client.png'
import styles from "./CustomerSays.module.css";
import Review from "../Review/Review";

const CustomersSay = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Testimonials</h2>
        <div className={styles.reviews}>
            <Review
              image={clientImg}
              name='John Smith I'
              stars='5'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, lorem in posuere lobortis, justo tortor interdum tortor, ac tempor augue purus a lectus. Vestibulum quis ex condimentum...'
            />
            <Review
              image={clientImg}
              name='John Smith II'
              stars='4'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, lorem in posuere lobortis, justo tortor interdum tortor, ac tempor augue purus a lectus. Vestibulum quis ex condimentum...'            />
            <Review
              image={clientImg}
              name='John Smith III'
              stars='5'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, lorem in posuere lobortis, justo tortor interdum tortor, ac tempor augue purus a lectus. Vestibulum quis ex condimentum...'            />
            <Review
              image={clientImg}
              name='John Smith IV'
              stars='3'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, lorem in posuere lobortis, justo tortor interdum tortor, ac tempor augue purus a lectus. Vestibulum quis ex condimentum...'            />
        </div>
      </div>
    </section>
  );
}

export default CustomersSay