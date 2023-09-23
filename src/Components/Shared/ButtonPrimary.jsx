import PropTypes from "prop-types";

ButtonPrimary.propTypes = {
    name: PropTypes.string,
};

function ButtonPrimary({ name }) {
    return (
        <button className="btn bg-violet-50 text-violet-700 hover:bg-violet-100 rounded-full py-3 px-6 font-semibold">
            {name}
        </button>
    );
}

export default ButtonPrimary;
