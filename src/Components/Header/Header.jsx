import { NavLink } from "react-router-dom";

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
                <button className="btn bg-violet-50 text-violet-700 hover:bg-violet-100 rounded-full py-3 px-6 font-semibold">
                    Star Applying
                </button>
            </div>
        </header>
    );
};

export default Header;
