import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import styles from './Logo.module.css'


const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to='/'><img src={logo} alt='Little Lemon Logo'/></Link>
    </div>
  )
}

export default Logo