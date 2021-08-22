import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/mpulse_logo.svg';
import styles from './Navbar.css';

const NavBar = () => (

  <nav className={[styles.navbar, styles.nav].join(' ')}>
    <ul className={styles.nav_ul}>
      <li className={styles.link_left}><Link className={styles.link} to={"/"}><img className="img-responsive logo" src={Logo} alt="logo"></img></Link></li>
      <li className={[styles.link_right].join(' ')} ><Link className={styles.link} to={"/ImagePage"}>ImagePage</Link></li>
      <li className={[styles.link_right].join(' ')} ><Link className={styles.link} to={"/LinksPage"}>LinksPage</Link></li>
      <li className={[styles.link_right].join(' ')} ><Link className={styles.link} to={"/MyApp"}>MyApp</Link></li>
    </ul>
  </nav>

)

export default NavBar;