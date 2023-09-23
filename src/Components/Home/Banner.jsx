import ButtonPrimary from "../Shared/ButtonPrimary";

const Banner = () => {
    return (
        <div className="w-full md:w-1/2 py-10 md:py-16 md:my-10 ">
            <h1 className="font-bold text-7xl text-violet-950">
                One Step Closer To Your{" "}
                <span className="text-violet-500">Dream Job</span>
            </h1>
            <p className="py-4 ps-1 text-gray-500">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
            </p>
            <div className="pt-2">
                <ButtonPrimary name={"Get started"} />
            </div>
        </div>
    );
};

export default Banner;
