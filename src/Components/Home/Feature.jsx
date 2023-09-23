import PropTypes from "prop-types";
import locationImage from "../../assets/icons/location2.png";
import salaryImage from "../../assets/icons/money.png";
import { NavLink } from "react-router-dom";
import ButtonPrimary from "../Shared/ButtonPrimary";
Feature.propTypes = {
    feature: PropTypes.object.isRequired,
};

function Feature({ feature }) {
    return (
        <div className="p-6 border border-violet-200 text-left rounded-sm">
            <div className="w-32 h-14">
                <img className=" rounded-sm mb-4" src={feature.logo} alt="" />
            </div>
            <h4 className="text-xl font-semibold">{feature.job_title}</h4>
            <p className="text-gray-500  pt-1">{feature.company_name}</p>
            <div className="py-3 gap-3 flex">
                <button className="text-sm border-violet-300 px-2 py-1 font-semibold border-2 text-violet-700 rounded-sm">
                    {feature.remote_or_onsite}
                </button>
                <button className="text-sm border-violet-300 px-3 py-2 font-semibold border-2 text-violet-700 rounded-sm">
                    {feature.job_type}
                </button>
            </div>
            <div className="flex gap-4 text-gray-500 font-semibold">
                <p className="flex items-center gap-1">
                    <img src={locationImage} alt="" />
                    <span>{feature.location}</span>
                </p>
                <p className="flex items-center gap-1">
                    <img src={salaryImage} alt="" />{" "}
                    <span>Salary : {feature.salary}</span>
                </p>
            </div>
            <div className="py-3">
                <NavLink to="/jobs">
                    <ButtonPrimary name={"View Details"}></ButtonPrimary>
                </NavLink>
            </div>
        </div>
    );
}

export default Feature;
