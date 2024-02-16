// homepage.jsx

import React from 'react';
import styles from './HomePageCard.module.css';

const HomePageCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.steps}>
        <h2>Steps to use the app:</h2>
        <ol>
          <li>Unveil the Green Detective: Your Plant's Personal Health Scanner</li>
          {/* Add more steps if needed */}
        </ol>
      </div>
      {props.children}
    </div>
  );
}

export default HomePageCard;
