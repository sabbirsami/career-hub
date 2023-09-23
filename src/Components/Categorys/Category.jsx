import PropTypes from "prop-types";
Category.propTypes = {
    category: PropTypes.object.isRequired,
};

function Category({ category }) {
    return (
        <div className="p-6 text-left bg-violet-50 rounded-md">
            <img
                className="bg-violet-200 p-3 rounded-sm mb-4"
                src={category.img}
                alt=""
            />
            <h4 className="text-xl font-semibold">{category.title}</h4>
            <p className="text-gray-500 text-sm pt-1">{category.detail}</p>
        </div>
    );
}

export default Category;
