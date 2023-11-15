import React from 'react'
import { Link } from "react-router-dom";

import { ReactComponent as FacebookIcon} from "../../assets/facebook.svg"
import { ReactComponent as YoutubeIcon } from "../../assets/youtube.svg"
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg"
import FooterLogo from "../../assets/footer_logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
  <footer className={styles.footer}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={FooterLogo} alt="Footer logo" />
        </Link>
        <div className={styles.links}>
          <h3>Site Map</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/reserve">Reservation</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <h3>Contact</h3>
          <ul>
            <li><span>Some address</span></li>
            <li>
              <a href="tel:123-123-1234">23-123-1234</a>
            </li>
            <li>
              <a href="mailto:info@little-lemon.com">mail@little-lemon.com</a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <h3>Social media</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon />
              </a>
            </li>
          </ul>
        </div>
    </div>
  </footer>
  )
}

export default Footer