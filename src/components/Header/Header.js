import React from 'react'
import Nav from '../Nav/Nav'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  )
}
export default Header