import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = ({ blog }) => {
    console.log(blog);
    return (

        <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
            <div className="shadow-lg rounded-lg rounded-xl h-full border-gray-200 border-opacity-50 overflow-hidden">
                <img
                    className="object-cover w-full h-64"
                    src={`data:image/png;base64,${blog.image.img}`}
                    alt="Article"
                />
                <div className="p-6 ">
                    <div>
                        <h3 className="block mt-2 text-2xl font-semibold break-words text-gray-800 dark:text-white hover:text-gray-600 hover:underline line-clamp-1">
                            {blog.title}
                        </h3>
                        <p className="  line-clamp-2 break-words"> {blog.content}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <button className="bg-red-500 rounded py-2 px-3">
                                    Learn More{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
