import React from 'react';
import styles from './Navbar.css';

// const scrollTo = (elID) =>  {
//     const dest = document.getElementById(elID);
//     const to = dest.offsetTop;
//     const duration = 500;
//     if (document.body.scrollTop === to) return;
//     var diff = to - document.body.scrollTop;
//     var scrollStep = Math.PI / (duration / 10);
//     var count = 0, currPos;
//     const start = dest.scrollTop;
//     const scrollInterval = setInterval(function(){
//         if (document.body.scrollTop !== to) {
//             count = count + 1;
//             currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
//             document.body.scrollTop = currPos;
//         }
//         else { clearInterval(scrollInterval); }
//     },1000);
// }

const NavBar = () => (

  <nav className={[styles.navbar, styles.nav].join(' ')}>
    <ul className={styles.nav_ul}>
      <li className={[styles.link_right].join(' ')} ><a className={styles.link} href="#services">Services</a></li>
      <li className={[styles.link_right].join(' ')} ><a className={styles.link} href="#contact">Contact</a></li>
    </ul>
  </nav>

)

export default NavBar;