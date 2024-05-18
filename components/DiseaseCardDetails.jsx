import React, { useState, useEffect } from 'react';
import styles from './DiseaseCardDetails.module.css';

const DiseaseCardDetails = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const loc_disease = localStorage.getItem("disease");
    const fetchData = async () => {
        console.log("Fetching d");
        try {
            const response = await fetch(`https://4651-2409-4089-aecc-dd97-2d1b-45fd-d07f-6c22.ngrok-free.app/api/predict/${loc_disease}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
const currdata = await response.json();

            setData(currdata);

            props.unsetFetchHandler();
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    const { disease, cure, precaution } = data;

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{disease}</h2>
            <div className={styles.section}>
                <h3 className={styles.subtitle}>Cure:</h3>
                <ul className={styles.list}>
                    {cure.map((point, index) => (
                        // Apply the local class to li
                        <li className={styles.listItem} key={index}>{point}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.section}>
                <h3 className={styles.subtitle}>Precaution:</h3>
                <ul className={styles.list}>
                    {precaution.map((point, index) => (
                        // Apply the local class to li
                        <li className={styles.listItem} key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DiseaseCardDetails;