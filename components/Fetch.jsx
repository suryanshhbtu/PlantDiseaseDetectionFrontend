import { useEffect, useState } from "react";
import DiseaseCard from "./DiseaseCard";



const Fetch = (props) => {

    const [data, setData] = useState(null);
    const img = localStorage.getItem("base64image");
    const base64image = img.split(',')[1]; // Extract the base64 part

    useEffect(() => {
        fetchData();
    }, [data]);
    const fetchData = async () => {
        try {
            console.log(img);
            console.log(typeof img);
            const response = await fetch("https://e4c7-45-115-191-105.ngrok-free.app/api/predict", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    base64image: base64image
                }),
            });

            const currdata = await response.json();
            setData(currdata.prediction);
            dataa = currdata.prediction;
            console.log(currdata.prediction);
            props.unsetFetchHandler();
            console.log("data logged");
        } catch {
            console.log("error");
        }
    }
    const [isLoading, setIsLoading] = useState(false);

    console.log("xxxxx");
    return (
        <div>
            {isLoading && <p>Loading....</p>}
            {<DiseaseCard image={img} diseaseType={data}></DiseaseCard>}
        </div>
    );

}
export default Fetch;