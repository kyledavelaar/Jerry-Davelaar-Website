import React from 'react';
import styles from './Navbar.css';
import Logo from '../../images/jerry_davelaar_logo.png';

const width  = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;

const NavBar = () => (
  <nav className={[styles.navbar, styles.nav].join(' ')}>
    <ul className={styles.nav_ul}>
      <li className={[styles.link_right, styles.logo].join(' ')}><img src={Logo} alt="Jerry Davelaar Christian Counseling" /></li>
      <li className={[styles.link_right].join(' ')} ><a className={styles.link} href="#about">About</a></li>
      <li className={[styles.link_right].join(' ')} ><a className={styles.link} href="#services">Services</a></li>
      {width > 700 && (
          <li className={[styles.link_right].join(' ')} ><a className={styles.link} href="#fees">Fees</a></li>
        )
      }
      <li className={[styles.link_right].join(' ')} ><a className={styles.link} href="#contact">Contact</a></li>
    </ul>
  </nav>

)

export default NavBar;