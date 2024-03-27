import React from 'react';
import styles from './DiseaseCard.module.css';

const DiseaseCard = (props) =>{

 
    return (
        <div className={styles.container}>
          <img className={styles.image} src={props.image} alt={`Disease: ${props.diseaseType}`} />
          <div className={styles.info}>
            <p className={styles.diseaseType}>Disease Type: {props.diseaseType}</p>
          </div>
        </div>
      );
}
export default DiseaseCard;