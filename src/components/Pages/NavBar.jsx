const NavBar = () => {
    return (

        <nav className="flex items-center justify-between px-4 py-2">
            <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <h2 className="text-black text-3xl font-bold">Book Vibe</h2>
            </div>
            <ul className="flex items-center justify-between gap-6 text-slate-900">
                <li className="cursor-pointer rounded-lg hover:border-2 hover:border-[#23BE0A]  px-6 py-2 text-black hover:text-[#23BE0A]">Home</li>
                <li className="cursor-pointer rounded-lg hover:border-2 hover:border-[#23BE0A] px-6 py-2 text-black hover:text-[#23BE0A]">Services</li>
                <li className="cursor-pointer rounded-lg hover:border-2 hover:border-[#23BE0A] px-6 py-2 text-black hover:text-[#23BE0A]">About</li>

            </ul>
            <div className="flex gap-1">
                <li className="cursor-pointer flex gap-2 list-none rounded-lg px-6 py-2 text-white bg-[#23BE0A]">
                    Contact
                </li>
                <li className="cursor-pointer flex gap-2 list-none rounded-lg px-6 py-2 text-white bg-[#59C6D2]">
                    Contact
                </li>
            </div>
        </nav>


    );
};

export default NavBar;