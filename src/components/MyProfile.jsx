import React from 'react';
import styles from './MyProfile.module.css';
import MyRocket from './MyRocket';

export default function MyProfile() {
  return (
    <>
      <h2>MyProfile</h2>
      <div className={styles.myProfile}>
        <div className={styles.myMissions}>
          <h3>My Mission</h3>
          <ul>
            <li>TelStar</li>
            <li>TelStar</li>
            <li>TelStar</li>
          </ul>
        </div>
        <div className={styles.myRockets}>
          <h3>My Mission</h3>
          <ul>
            <MyRocket />
          </ul>
        </div>
      </div>
    </>
  );
}
