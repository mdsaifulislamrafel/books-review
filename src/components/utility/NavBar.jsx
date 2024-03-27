<div className="navbar static mt-6 bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li className="flex">
                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                            : isPending
                                ? "pending"
                                : "cursor-pointer text-black px-6 py-2"
                    }  >Home</NavLink>
                </li>
                <li className="flex">
                    <NavLink to={'/details'} className={({ isActive }) => isActive ? "flex items-center px-2 -mb-1 border-2 dark:border- dark:text-primary dark:border-primary" : "flex items-center px-2 -mb-1 border-2"}>About</NavLink>
                </li>
                <li className="flex">
                    <NavLink to="/markBooks" className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                            : isPending
                                ? "pending"
                                : "cursor-pointer text-black px-6 py-2"
                    }  >Listed Books</NavLink>
                </li>
                <li className="flex">
                    <NavLink to="/chart" className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                            : isPending
                                ? "pending"
                                : "cursor-pointer text-black px-6 py-2 "
                    }  >Pages to Read</NavLink>
                </li>
                <li className="flex">
                    <NavLink to="/latest-books" className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                            : isPending
                                ? "pending"
                                : "cursor-pointer text-black px-6 py-2 "
                    }  >Programming Books</NavLink>
                </li>
                <li className="flex">
                    <NavLink to="/contact" className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                            : isPending
                                ? "pending"
                                : "cursor-pointer text-black px-6 py-2 "
                    }  >Contact</NavLink>
                </li>

            </ul>
        </div>
        <a className="btn hover:btn-ghost font-bold text-xl">Book Vibe</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  gap-2 px-1">
            <li className="flex">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isActive
                        ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                        : isPending
                            ? "pending"
                            : "cursor-pointer text-black px-6 py-2"
                }  >Home</NavLink>
            </li>
            <li className="flex">
                <NavLink to={'/details'} className={({ isActive }) => isActive ? "flex items-center px-2 -mb-1 border-2 dark:border- dark:text-primary dark:border-primary" : "flex items-center px-2 -mb-1 border-2"}>About</NavLink>
            </li>
            <li className="flex">
                <NavLink to="/markBooks" className={({ isActive, isPending }) =>
                    isActive
                        ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                        : isPending
                            ? "pending"
                            : "cursor-pointer text-black px-6 py-2"
                }  >Listed Books</NavLink>
            </li>
            <li className="flex">
                <NavLink to="/chart" className={({ isActive, isPending }) =>
                    isActive
                        ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                        : isPending
                            ? "pending"
                            : "cursor-pointer text-black px-6 py-2 "
                }  >Pages to Read</NavLink>
            </li>
            <li className="flex">
                <NavLink to="/latest-books" className={({ isActive, isPending }) =>
                    isActive
                        ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                        : isPending
                            ? "pending"
                            : "cursor-pointer text-black px-6 py-2 "
                }  >Programming Books</NavLink>
            </li>
            <li className="flex">
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                    isActive
                        ? "active text-[#23BE0A] border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                        : isPending
                            ? "pending"
                            : "cursor-pointer text-black px-6 py-2 "
                }  >Contact</NavLink>
            </li>
        </ul>
    </div>
    <div className="navbar-end flex space-x-2">
        <button className="self-center px-8 py-3 font-semibold rounded  bg-[#23BE0A] dark:text-gray-50 ">Sign in</button>
        <button className="self-center px-8 py-3 font-semibold rounded bg-[#59C6D2] dark:text-gray-50">Sign up</button>
    </div>
</div>