import React from 'react';
import styles from './TeamCard.module.css';

const TeamCard = () => {
  return (
    <div className={styles.card}>
      <h2>About Our Team Members</h2>
      <p>Our project is under the supervision of Guest Faculty <b> <u>Dinesh Kumar Kotary.</u></b></p>
      <ul>
        <li><strong>Suryansh Srivastava:</strong> Frontend Development</li>
        <li><strong>Satyam Singh:</strong> Model Selection and Dataset Arrangement</li>
        <li><strong>Akshat Srivastava:</strong> Backend Development</li>
        <li><strong>Sharad:</strong> Deployment of Both Frontend and Backend</li>
      </ul>
    </div>
  );
};

export default TeamCard;
