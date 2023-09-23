import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Feature from "./Feature";

const Features = () => {
    const [features, setFeatures] = useState([]);
    const [loadData, setLoadData] = useState(4);

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
                {features.slice(0, loadData).map((feature, idx) => (
                    <Feature key={idx} feature={feature}></Feature>
                ))}
            </div>
            <div className={loadData === features.length && "hidden"}>
                <button
                    className="flex-col items-center text-violet-700"
                    onClick={() => setLoadData(features.length)}
                >
                    <span className="font-semibold">Show All Jobs</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-center mx-auto"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Features;
