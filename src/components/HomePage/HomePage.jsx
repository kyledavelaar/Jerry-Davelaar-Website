import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './HomePage.css';
import JerryThumb from '../../images/jerry-thumb2.jpeg';

const HomePage = () => (
  <div id={styles.wrapper}>
    <Navbar />
    <div className={styles.content}>
      <section className={styles.banner}>
        <h1 className={styles.header}>Jerry Davelaar</h1>
        <h4 className={styles.header2}>MA, MDIV</h4>
      </section>
      <section id="bio" className={styles.bioContainer}>
        <div className={styles.left}>
          <img className={styles.jerryThumb} src={JerryThumb} alt="Jerry Davelaar" />
        </div>
        <div className={styles.right}>
          <div className={styles.bodyContainer}>
            <p className={styles.body}>After working as a therapist for a few years, Jerry served for five years as an ordained associate pastor and then ten years as a senior pastor. Since then, Jerry has returned to his work as a therapist, pursuing his passion to understand people and bring hope to their desire for change and growth.</p>
            <p className={styles.body}>Jerry enjoys working with individuals, couples and families. Some of the struggles that his clients come with are: anxiety, depression, anger, fear, loneness, lack of confidence, guilt, shame, minority issues. While working with men, Jerry helps with issues like substance abuse, pornography, and dysfunctional familial dynamics. Often he finds that his patient’s lives have been effected by past and/or current traumas. Jerry’s special interest is working with pastors and church staff regarding personal and ministry issues.</p>
            <p className={styles.body}>Jerry has been married 40 plus years with three married children and five grandchildren. After growing up on a farm, he and his wife began their life together in the farming business. Throughout all the career changes, their faith in God has always been what they have leaned on for strength.</p>
          </div>
        </div>
      </section>
      <section id="services" className={styles.servicesContainer}>
        <div className={styles.sectionHeaderContainer}>
          <hr className={styles.headerLine}/>
          <h1 className={styles.sectionHeader}>SERVICES</h1>
          <hr className={styles.headerLine}/>
        </div>
        <div className={styles.services}>
          <div className={styles.focus}><p>Anxiety</p></div>
          <div className={styles.focus}><p>Depression</p></div>
          <div className={styles.focus}><p>{'Relationship \n Struggles'}</p></div>
          <div className={styles.focus}><p>{'Mood \n swings'}</p></div>
          <div className={styles.focus}><p>Trauma</p></div>
          <div className={styles.focus}><p>{'Shame \n and \n Guilt'}</p></div>
          <div className={styles.focus}><p>{'Addictive \n Behaviors'}</p></div>
          <div className={styles.focus}><p>Infidelity</p></div>
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
            <a href="mailto: v">jerry@jerrydavelaarcristiancounseling.com</a>
          </div>
          <div className={styles.infoLine}>
            <h3>PHONE</h3>
            <h5>562-555-5555</h5>
          </div>
          <div className={styles.infoLine}>
            <h3>ADDRESS</h3>
            <h5>5242 Katella Ave Suite 206</h5>
            <h5>Los Alamitos, CA 90720</h5>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <iframe title="map" id="gmap_canvas" src="https://maps.google.com/maps?q=5242%20Katella%20Ave%20suite%20206%20Los%20Alamitos,%20Ca&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </section>
    </div>
  </div>
)

export default HomePage;