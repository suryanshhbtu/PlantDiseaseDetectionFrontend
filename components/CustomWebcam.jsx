import { useEffect, useState } from 'react';
import styles from './CustomWebcam.module.css';
import Fetch from './Fetch';
import Webcam from "react-webcam";



const CustomWebcam = () => {

    const [isCapture, setIsCapture] = useState(false);
    const [isFetch, setIsFetch] = useState(false);
    const [imgSrc, setImgSrc] = useState(null);
    useEffect(() =>{

     }, [isCapture]);
    const onClickHandler = () => {
        setIsFetch(false);
        setIsCapture(true);
    }
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
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
        setIsFetch(false);
    }

 
    
    return (
        <div>
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
            {!isCapture && !imgSrc && <button className={styles.button} onClick={onClickHandler}>Open Camera</button>}
            {imgSrc && <img src = {imgSrc}/>}
            {imgSrc && <button className={styles.button} onClick={onRetakeHandler}>Retake</button>}
            {imgSrc && <button className={styles.button} onClick={processPhotoHandler}>Process</button>}
            {isFetch && <Fetch unsetFetchHandler={unsetFetchHandler}></Fetch>}
            
        </div>
    );
};
export default CustomWebcam;
