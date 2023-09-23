import categoryImg1 from "../../assets/icons/accounts.png";
import categoryImg2 from "../../assets/icons/creative.png";
import categoryImg3 from "../../assets/icons/marketing.png";
import categoryImg4 from "../../assets/icons/chip.png";
import Category from "./Category";
const CategoryList = () => {
    const categories = [
        {
            img: categoryImg1,
            title: "Account & Finance",
            detail: "300 Jobs Available",
        },
        {
            img: categoryImg2,
            title: "Creative Design",
            detail: "300 Jobs Available",
        },
        {
            img: categoryImg3,
            title: "Marketing & Sales",
            detail: "300 Jobs Available",
        },
        {
            img: categoryImg4,
            title: "Engineering Job",
            detail: "300 Jobs Available",
        },
    ];
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold pb-4">Job Category List</h1>
            <p className="text-gray-500">
                Explore thousands of job opportunities with all the information
                you need. Its your future
            </p>
            <div className="py-10 grid grid-cols-4 gap-4">
                {categories.map((category, idx) => (
                    <Category key={idx} category={category}></Category>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
