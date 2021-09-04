import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './HomePage.css';
import JerryThumb from '../../images/jerry-davelaar.jpeg';

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
      <section id="about" className={styles.servicesContainer}>
        <div className={styles.sectionHeaderContainer}>
          <hr className={styles.headerLine}/>
          <h1 className={styles.sectionHeader}>ABOUT</h1>
          <hr className={styles.headerLine}/>
        </div>
        <div className={styles.aboutContainer}>
          <p className={styles.body}>Therapy is a lot about relationships.  The patient needs to be heard and understood.  The patient's relationship with the therapist needs to be a good fit.  Therapy is also about the patient's relationship to himself/herself.  Sometimes patients are aware of parts of themselves that frustrate them.  Therapy can help them learn to relate to themselves much better when they know how to manage “that part” of themselves, versus “that part” managing them.  Therapy is also about the problem of loneliness; how to be loved and how to love.  Relationships are vital to who we are as human beings made by God.  Even the relationship with God is so important to understand.</p>
          <p className={styles.body}>Therapy is in part an exploration and openness to discover root issues.  The root issues being the underlying “stuff” that is often subconsciously functioning, which then plays out in our daily lives.  Most of the time patients see the patterns repeating themselves in their life, but are at a loss as to what to do about them.  Often they have tried relentlessly to change others, or keep finding new others, only to realize that in relationships they are also part of the problem.  How they respond to their significant others is something they can learn to change.  And if they change, the relationship will change.</p>
          <p className={styles.body}>Some patients enter therapy to work out how to handle circumstances that have just surfaced in their life.  Then, when they have worked that out, they terminate therapy.  Others come to therapy unsure specifically what they want to work on.  They just know their life isn't working very well, and they’re aware that it hasn't been well for some time.</p>
          <p className={styles.body}>It's important that patients understand that therapy is for them.  The patient decides what he or she wants to work on. They decide if they want short term or longer term therapy.  Therapy is about the patient's needs.</p>
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
      <section id="fees" className={styles.servicesContainer}>
        <div className={styles.sectionHeaderContainer}>
          <hr className={styles.headerLine}/>
          <h1 className={styles.sectionHeader}>FEES & INSURANCE</h1>
          <hr className={styles.headerLine}/>
        </div>
        <div className={styles.aboutContainer}>
          <p className={styles.body}>My standard fee per a 50 minute session is $160. I do give pastors and church staff a fee reduction. Their fee is $130. I accept payment by credit card, debit card, Apple or Google pay. </p>
          <p className={styles.body}>I am not a provider for any health insurance panel and will not be responsible for any insurance billing. I will provide clients with super bills if they choose to submit their therapy cost to their insurance company for reimbursement. What I have seen is that most PPO insurance policies reimburse about 50-60% of the cost for out-of-network therapy. HMO’s generally do not cover out-of-network therapy cost. It is my client’s responsibility to check with their insurance company to learn what their policy covers. </p>
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
            <a href="mailto: jerry@jerryDavelaarChristianCounseling.com">jerry@jerryDavelaarChristianCounseling.com</a>
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
          <iframe title="map" id="gmap_canvas" src="https://maps.google.com/maps?q=5242%20Katella%20Ave%20suite%20206%20Los%20Alamitos,%20Ca&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </section>
    </div>
  </div>
)

export default HomePage;