import CategoryList from "../Categorys/CategoryList";
import Banner from "./Banner";
import Features from "./Features";

const Home = () => {
    return (
        <div className="container-lg mx-auto">
            <Banner />
            <CategoryList />
            <Features />
        </div>
    );
};

export default Home;
