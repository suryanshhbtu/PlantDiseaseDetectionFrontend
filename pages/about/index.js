import React from 'react'
import styles from '../../styles/About.module.css'
import MainNavigation from '@/components/MainNavigation';
// components/About.js
const About = () => {
    return (
        <div className={styles.aboutContainer}>
                <h1 className={styles.title}>About Our Plant Health Assistant App</h1>
            <div className={styles.div}>

                <p className={styles.description}>
                    Welcome to our Plant Health Assistant, where cutting-edge technology meets the expertise
                    of machine learning! Our application combines a NextJS frontend written in JavaScript
                    with a robust Python backend, leveraging TensorFlow's VGG19 model that has been fine-tuned
                    on Oxford University's open-source image dataset.
                </p>
                {/* Add other content as needed */}
                <br></br>
                <ol>
                    <h4>How It Works:</h4>
                    <li><b>Image Capture:</b> Users can capture plant images using their smart devices.</li>
                    <li><b>Prediction Process:</b> The captured image is sent to our backend model for analysis.</li>
                    <li><b>Disease Identification: </b>Our robust model predicts the plant's disease with an accuracy of 82.5%.</li>
                    <li><b>User Interface: </b>The detected disease, along with its prevention and cure, is displayed to the user in an intuitive interface.</li>
                </ol>
            </div>
        </div>
    );
};

export default About;
