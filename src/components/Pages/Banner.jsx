import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
                <div className="flex flex-col justify-center space-y-6 md:space-y-12 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:items-start">
                    <h1 className="text-3xl font-bold leading-none md:text-5xl">Books to freshen up your bookshelf</h1>
                    <div className="flex flex-col space-y-4 items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to="/markBooks" className="cursor-pointer w-fit flex gap-2 list-none rounded-lg px-6 py-4 text-white bg-[#23BE0A]">
                            View The List
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-auto lg:h-72 xl:h-auto 2xl:h-auto">
                    <img src={bannerImage} alt="" className="object-contain max-h-72 sm:max-h-80 lg:max-h-full xl:max-h-96 2xl:max-h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
