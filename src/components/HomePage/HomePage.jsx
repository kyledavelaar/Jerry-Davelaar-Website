import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './HomePage.css';
import JerryThumb from '../../images/jerry-thumb.png';


const HomePage = () => (
  <div>
    <Navbar />
    <div className={styles.banner}>
      <h1 className={styles.header}>Jerry Davelaar</h1>
      <h4 className={styles.header2}>MFT, MA</h4>
    </div>
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        <img className={styles.jerryThumb} src={JerryThumb} alt="Jerry Davelaar" />
      </div>
      <div className={styles.right}>
        <div className={styles.bodyContainer}>
          <p className={styles.body}>After working as a therapist for a few years, Jerry served for five years as an ordained associate pastor and then ten years as a senior pastor. Since then, Jerry has returned to his work as a therapist, pursuing his passion to understand people and bring hope to their desire for change and growth.</p>
          <p className={styles.body}>Now that Jerry has returned to his work as a therapist, he enjoys working with individuals, couples and families. Some of the struggles that his clients come with are: anxiety, depression, anger, fear, loneness, lack of confidence, guilt, shame, minority issues. Jerry also works with men wanting help with issues like substance abuse, pornography, and dysfunctional familial dynamics. Often he finds that his patient’s lives have been effected by past and/or current traumas. Jerry’s special interest is working with pastors and church staff regarding personal and ministry issues.</p>
          <p className={styles.body}>Jerry has been married 40 plus years with three married children and five grandchildren. After growing up on a farm, he and his wife began their life together in the farming business. Throughout all the career changes, their faith in God has always been what they have leaned on for strength.</p>
        </div>

      </div>
    </div>
  </div>
)

export default HomePage;