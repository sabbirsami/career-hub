import { NavLink } from "react-router-dom";
import ButtonPrimary from "../Shared/ButtonPrimary";

const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center py-8">
                <NavLink to="/" className="text-3xl font-semibold">
                    CareerHub
                </NavLink>
                <nav>
                    <ul className="flex gap-8 font-normal">
                        <li>
                            <NavLink to="/statistics">Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/jobs">Applied Jobs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </nav>
                <ButtonPrimary name={"Star Applying"}></ButtonPrimary>
            </div>
        </header>
    );
};

export default Header;
