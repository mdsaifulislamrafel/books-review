import { FaRegStar } from "react-icons/fa";

/* eslint-disable react/prop-types */
const BookLatest = ({ item }) => {
    const { id, bookName, author, image, rating, category, tags, review, yearOfPublishing } = item;
    return (
        <div className="border-2 p-4 rounded-lg transition hover:shadow-lg hover:bg-green-300">
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={image} />
                <div className="p-4 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName}</h3>
                    <span className="text-xs dark:text-gray-600">Publishing Year {yearOfPublishing}</span>
                    <div className="flex flex-wrap gap-2">
                        {
                            tags.map((tag, index) => (
                                <p key={index} className="px-3 py-1 text-[#23BE0A] bg-[#f4fcf3] rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">{tag}</p>
                            ))
                        }
                    </div>
                    <p><span className="text-xl font-bold">Author : </span>{author}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-xl">{category}</p>
                        <p className="text-xl flex items-center gap-1 justify-center">{rating} <FaRegStar className="text-xl" /></p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default BookLatest;