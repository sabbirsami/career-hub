import { useLoaderData, useParams } from "react-router-dom";
import locationImage from "../../assets/icons/location2.png";
import salaryImage from "../../assets/icons/money.png";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { jobId } = useParams();
    const parseId = parseFloat(jobId);

    const job = jobs.find((job) => job.id === parseId);
    console.log(job);
    return (
        <div>
            <div className="py-16 backgroundImag">
                <div className=" md:pb-10">
                    <h1 className="text-4xl font-bold text-center md:py-10">
                        <span className=""> Job Details</span>
                    </h1>
                </div>
            </div>
            <div className="container-lg mx-auto">
                <div className="py-16">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <p className="text-normal">
                                <span className="font-bold ">
                                    {" "}
                                    Job Description:
                                </span>{" "}
                                {job.job_description}
                            </p>
                            <p className="text-normal pt-7">
                                <span className="font-bold ">
                                    {" "}
                                    Job Responsibility:
                                </span>{" "}
                                {job.job_responsibility}
                            </p>
                            <p className="text-normal pt-7">
                                <span className="font-bold ">
                                    {" "}
                                    Educational Requirements:
                                </span>{" "}
                                {job.educational_requirements}
                            </p>
                            <p className="text-normal pt-7">
                                <span className="font-bold ">
                                    {" "}
                                    Experiences:
                                </span>{" "}
                                {job.experiences}
                            </p>
                        </div>
                        <div className="p-5 ms-2 bg-violet-100 rounded-md">
                            <h4 className="text-lg font-bold">Job Details</h4>
                            <hr className="font-bold border border-violet-300 my-3" />
                            <div className="flex-row gap-4  font-semibold">
                                <p className="flex items-center gap-1 pt-2">
                                    <span className="font-bold ">
                                        {" "}
                                        Salary :
                                    </span>{" "}
                                    <img src={salaryImage} alt="" />
                                    <span className="text-gray-500 font-medium">
                                        {" "}
                                        {job.salary}
                                    </span>
                                </p>
                                <p className="flex items-center gap-1">
                                    <span className="font-bold ">
                                        {" "}
                                        Job Title:
                                    </span>{" "}
                                    <img src={locationImage} alt="" />
                                    <span className="text-gray-500 font-medium">
                                        {job.job_title}
                                    </span>
                                </p>
                                <h4 className="text-lg font-bold pt-4">
                                    Contact Information
                                </h4>
                                <hr className="font-bold border border-violet-300 my-3" />
                                <p className="flex items-center gap-1">
                                    <span className="font-bold "> Phone:</span>{" "}
                                    <img src={locationImage} alt="" />
                                    <span className="text-gray-500 font-medium">
                                        {job.contact_information.phone}
                                    </span>
                                </p>
                                <p className="flex items-center gap-1 pt-1">
                                    <span className="font-bold "> Phone:</span>{" "}
                                    <img src={locationImage} alt="" />
                                    <span className="text-gray-500 font-medium">
                                        {job.contact_information.email}
                                    </span>
                                </p>
                                <p className="flex items-start gap-1 pt-1">
                                    <span className="font-bold "> Phone:</span>{" "}
                                    <img src={locationImage} alt="" />
                                    <span className="text-gray-500 font-medium">
                                        {job.contact_information.address}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
