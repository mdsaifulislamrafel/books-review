import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="p-4 max-w-7xl mx-auto dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <h2 className="text-black text-3xl font-bold">Book Vibe</h2>
                </NavLink>
                <ul className=" hidden items-center lg:flex ">
                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                            : isPending
                                ? "pending"
                                : "cursor-pointer text-black px-6 py-2"
                    }  >Home</NavLink>
                    <NavLink to="/markBooks" className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                            : isPending
                                ? "pending"
                                : "cursor-pointer text-black px-6 py-2"
                    }  >Listed Books</NavLink>
                    <NavLink to="/chart" className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                            : isPending
                                ? "pending"
                                : "cursor-pointer text-black px-6 py-2 "
                    }  >Pages to Read</NavLink>
                    <NavLink to="/latest-books" className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                            : isPending
                                ? "pending"
                                : "cursor-pointer text-black px-6 py-2 "
                    }  >Programming Books</NavLink>
                    <NavLink to="" className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                            : isPending
                                ? "pending"
                                : "cursor-pointer text-black px-6 py-2 "
                    }  >Blogs</NavLink>


                </ul>
                <div className="items-center md:gap-2 flex-shrink-0 hidden lg:flex">
                    <li className="cursor-pointer flex gap-2 list-none rounded-lg px-6 py-2 text-white bg-[#23BE0A]">
                        Sign in
                    </li>
                    <li className="cursor-pointer flex gap-2 list-none rounded-lg px-6 py-2 text-white bg-[#59C6D2]">
                        Sign up
                    </li>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default NavBar;