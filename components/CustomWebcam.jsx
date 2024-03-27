import { useEffect, useState } from 'react';
import styles from './CustomWebcam.module.css';
import Fetch from './Fetch';
import Webcam from "react-webcam";
import DiseaseCardDetails from './DiseaseCardDetails';



const CustomWebcam = (props) => {

    const [isCapture, setIsCapture] = useState(false);
    const [isFetch, setIsFetch] = useState(false);
    const [imgSrc, setImgSrc] = useState(null);
    
    const [displayDetails, setDisplayDetails] = useState(false);
    useEffect(() =>{

     }, [isCapture, displayDetails]);
    const onClickHandler = () => {
        setIsFetch(false);
        setIsCapture(true);
    }
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: 'environment', // 'environment' uses the back camera
    };
    const onRetakeHandler = () =>{
        setImgSrc(null);
        setIsCapture(true);
    }

    const processPhotoHandler = () =>{
        console.log(imgSrc);
        // code to fetch
        localStorage.setItem("base64image", imgSrc);
        setIsFetch(true);
        setImgSrc(null);
    }

    const unsetFetchHandler = () =>{
        console.log("unsetterFetchHandler");
        // setIsFetch(false);
    }
      const showDetailsHandler = () =>{
        setDisplayDetails((displayDetail)=> !displayDetails);
        setIsFetch((isFetch)=>!isFetch);
        setImgSrc(null);
        props.displayHandler();
    }
    return (
        <div className={styles.container}>
            {isCapture && <Webcam
                audio={false}
                height={320}
                screenshotFormat="image/jpeg"
                width={720}
                videoConstraints={videoConstraints}
            >
                {({ getScreenshot }) => (
                    <button
                        onClick={() => {
                            setImgSrc(getScreenshot());
                            console.log(imgSrc);
                            setIsCapture(false);
                        }}
                    >
                        Capture photo
                    </button>
                )}
            </Webcam>}
            <br/>
            {!isCapture && !imgSrc && !displayDetails && <button className={styles.button} onClick={onClickHandler}>Open Camera</button>}
            {imgSrc && <img src = {imgSrc}/>}
            {imgSrc && <button className={styles.button} onClick={onRetakeHandler}>Retake</button>}
            {imgSrc && <button className={styles.button} onClick={processPhotoHandler}>Process</button>}
            {isFetch && <Fetch unsetFetchHandler={unsetFetchHandler}></Fetch>}
            {isFetch && <button onClick={showDetailsHandler}>Get Precaution And Cure</button>}
            {displayDetails && <DiseaseCardDetails></DiseaseCardDetails>}
        </div>
    );
};
export default CustomWebcam;
