import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './HomePage.css';
import JerryThumb from '../../images/jerry-davelaar.jpeg';
import { bio } from '../../utils/bio';
import { about } from '../../utils/about';
import { services } from '../../utils/services';
import { fees } from '../../utils/fees';

const HomePage = () => (
  <div id={styles.wrapper}>
    <Navbar />
    <div className={styles.content}>
      <section className={styles.banner}>
        <h1 className={styles.header}>Jerry Davelaar</h1>
        <h4 className={styles.header2}>M.A., M.Div., LMFT</h4>
        <h4 className={styles.header2}>Psychotherapist</h4>
        <h4 className={styles.header2}>MFT#51996</h4>
      </section>
      <section id="bio" className={styles.bioContainer}>
        <div className={styles.left}>
          <img className={styles.jerryThumb} src={JerryThumb} alt="Jerry Davelaar" />
        </div>
        <div className={styles.right}>
          <div className={styles.bodyContainer}>
            {bio.map((section, i) => <p className={styles.body} key={i}>{section}</p> )}
          </div>
        </div>
      </section>
      <section id="about" className={styles.servicesContainer}>
        <div className={styles.sectionHeaderContainer}>
          <hr className={styles.headerLine}/>
          <h1 className={styles.sectionHeader}>ABOUT</h1>
          <hr className={styles.headerLine}/>
        </div>
        <div className={styles.aboutContainer}>
          {about.map((section, i) => <p className={styles.body} key={i}>{section}</p> )}
        </div>
      </section>
      <section id="services" className={styles.servicesContainer}>
        <div className={styles.sectionHeaderContainer}>
          <hr className={styles.headerLine}/>
          <h1 className={styles.sectionHeader}>SERVICES</h1>
          <hr className={styles.headerLine}/>
        </div>
        <div className={styles.services}>
          {services.map((service, i) => {
            return (
              <div className={styles.service} key={i}><p>{service}</p></div>
            )
          })}
        </div>
      </section>
      <section id="fees" className={styles.servicesContainer}>
        <div className={styles.sectionHeaderContainer}>
          <hr className={styles.headerLine}/>
          <h1 className={styles.sectionHeader}>FEES & INSURANCE</h1>
          <hr className={styles.headerLine}/>
        </div>
        <div className={styles.aboutContainer}>
          {fees.map((section, i) => <p className={styles.body} key={i}>{section}</p> )}
        </div>
      </section>
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionHeaderContainer}>
          <hr className={styles.headerLine}/>
          <h1 className={styles.sectionHeader}>CONTACT</h1>
          <hr className={styles.headerLine}/>
        </div>
        <div className={styles.info}>
          <div className={styles.infoLine}>
            <h3>EMAIL</h3>
            <a href="mailto: jerry@jerrydavelaarchristiancounseling.com">jerry@jerrydavelaarchristiancounseling.com</a>
          </div>
          <div className={styles.infoLine}>
            <h3>PHONE</h3>
            <h5>562-472-8906</h5>
          </div>
          <div className={styles.infoLine}>
            <h3>ADDRESS</h3>
            <h5>5242 Katella Ave Suite 206</h5>
            <h5>Los Alamitos, CA 90720</h5>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <iframe title="map" id="gmap_canvas" src="https://maps.google.com/maps?q=5242%20Katella%20Ave%20suite%20206%20Los%20Alamitos,%20Ca&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
      </section>
    </div>
  </div>
)

export default HomePage;