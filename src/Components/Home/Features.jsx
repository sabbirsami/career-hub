import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Feature from "./Feature";

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        axios
            .get("jobs.json")
            .then((res) => {
                setFeatures(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="text-center py-16">
            <h1 className="text-4xl font-bold pb-4">Featured Jobs</h1>
            <p className="text-gray-500">
                Explore thousands of job opportunities with all the information
                you need. Its your future
            </p>
            <div className="py-10 grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                    <Feature key={idx} feature={feature}></Feature>
                ))}
            </div>
        </div>
    );
};

export default Features;
