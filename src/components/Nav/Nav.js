
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Burger} from '../../assets/hamburger.svg'

import styles from './Nav.module.css'

const Nav = () => {

  const defOpen = window.innerWidth > 768 ? true : false
  const [openMenu, setOpenMenu] = useState(defOpen)
  const openHandler = () => {
    setOpenMenu(!openMenu)
  }
  const handlerResize = () =>  {
    const resizeOpen = window.innerWidth > 768 ? true : false
    setOpenMenu(resizeOpen)
  }
  useEffect(() => {
    window.addEventListener('resize', handlerResize)
    return () => {
      window.removeEventListener('resize', handlerResize)
    }
  })
  return (
    <>
      <div className={styles.burger} onClick={openHandler}><Burger /></div>
      {openMenu &&
        <nav className={styles.mainNav}>
          <menu className={styles.mainMenu}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/reserve'>Reservation</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </menu>
        </nav>
      }
    </>
  )
}

export default Nav