import React from 'react';
import styles from './Navbar.css';

const NavBar = () => (

  <nav className={[styles.navbar, styles.nav].join(' ')}>
    <ul className={styles.nav_ul}>
      <li className={[styles.link_right].join(' ')} ><a className={styles.link} href="#services">Services</a></li>
      <li className={[styles.link_right].join(' ')} ><a className={styles.link} href="#contact">Contact</a></li>
    </ul>
  </nav>

)

export default NavBar;