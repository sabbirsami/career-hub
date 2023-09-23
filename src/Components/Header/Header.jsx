const Header = () => {
    return (
        <header>
            <div className="container mx-auto flex justify-between items-center py-8">
                <h1 className="text-3xl font-semibold">CareerHub</h1>
                <nav>
                    <ul className="flex gap-8 font-normal">
                        <li>
                            <a href="/statistics">Statistics</a>
                        </li>
                        <li>
                            <a href="/jobs">Applied Jobs</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
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
