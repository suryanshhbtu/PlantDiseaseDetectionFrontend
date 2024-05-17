import { useEffect, useState } from "react";
import DiseaseCard from "./DiseaseCard";
import DiseaseCardDetails from "./DiseaseCardDetails";



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
            const response = await fetch("https://e5b2-103-95-81-125.ngrok-free.app/api/predict", {
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
            console.log(currdata.prediction);
            console.log("data logged "+data);
            props.unsetFetchHandler();
            if(currdata.prediction != null)
            localStorage.setItem("disease", currdata.prediction);
        } catch {
            console.log("error");
        }
    }
    const [isLoading, setIsLoading] = useState(false);

    


    console.log("xxxxx");
    return (
        <div>
            {isLoading && <p>Loading....</p>}
            <DiseaseCard image={img} diseaseType={data}></DiseaseCard>
            
        </div>
    );

}
export default Fetch;