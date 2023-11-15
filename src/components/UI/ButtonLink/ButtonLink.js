import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ButtonLink.module.css'

const ButtonLink = (props) => {
  return (
    <Link className={styles.link} to={props.to}>
      {props.children}
    </Link>
  )
}

export default ButtonLink
