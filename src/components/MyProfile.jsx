/* eslint-disable linebreak-style */
import React from 'react';
import JoinedMissions from './mission/JoinedMissions';
import styles from './MyProfile.module.css';
import MyRocket from './rockets/MyRocket';

export default function MyProfile() {
  return (
    <>
      <h2>MyProfile</h2>
      <div className={styles.myProfile}>
        <div className={styles.myMissions}>
          <h3>My Missions</h3>
          <ul>
            <JoinedMissions />
          </ul>
        </div>
        <div className={styles.myRockets}>
          <h3>My Rockets</h3>
          <ul>
            <MyRocket />
          </ul>
        </div>
      </div>
    </>
  );
}
