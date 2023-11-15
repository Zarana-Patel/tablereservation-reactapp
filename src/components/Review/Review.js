import React, { Fragment } from "react";
import styles from "./Review.module.css";

import {ReactComponent as Star} from "../../assets/star.svg";

const Rating = (props) => {
  let count = []
  const starRating = <div className={styles.star}><Star /></div>
  for (let i = 0; i < props.stars; i++) {
    count.push(starRating)
  }
  return (
    count.map((item) => {
      return (
        <Fragment key={Math.random()}>
            {item}
        </Fragment>
      )
    })
  );
}
const Review = (props) => {
  return (
    <article className={styles.article}>
      <figure className={styles.img}>
        <img
          src={props.image}
          alt="Profile"
        />
        <figcaption>{props.name}</figcaption>
      </figure>
      <div className={styles.stars}>
        <Rating stars={props.stars} />
      </div>
      <blockquote className={styles.text}>{props.text}</blockquote>
    </article>
  );
}
export default Review