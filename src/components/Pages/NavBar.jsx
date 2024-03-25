const NavBar = () => {
    return (
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <h2 className="text-black text-3xl font-bold">Book Vibe</h2>
                </a>
                <ul className=" hidden items-center space-x-3 lg:flex ">
                    <li className="cursor-pointer  rounded-full hover:border-2 hover:border-[#23BE0A]  px-6 py-2 text-black hover:text-[#23BE0A]">Home</li>
                    <li className="cursor-pointer  rounded-full hover:border-2 hover:border-[#23BE0A] px-6 py-2 text-black hover:text-[#23BE0A]">Services</li>
                    <li className="cursor-pointer  rounded-full hover:border-2 hover:border-[#23BE0A] px-6 py-2 text-black hover:text-[#23BE0A]">About</li>
                </ul>
                <div className="items-center md:gap-2 flex-shrink-0 hidden lg:flex">
                    <li className="cursor-pointer flex gap-2 list-none rounded-lg px-6 py-2 text-white bg-[#23BE0A]">
                        Contact
                    </li>
                    <li className="cursor-pointer flex gap-2 list-none rounded-lg px-6 py-2 text-white bg-[#59C6D2]">
                        Contact
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