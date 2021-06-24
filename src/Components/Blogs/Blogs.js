import React, { useEffect, useState } from "react";
import BlogDetails from "../BlogDetails/BlogDetails";

const Blogs = () => {
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => setBlogData(data));
    }, []);

    return (
        <section className="pt-20 pb-48">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-4xl font-semibold">
                            Our recently published Blogs.
                        </h2>
                        <p className="text-lg leading-relaxed m-4 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Cumque ratione sequi repellendus facere.
                            Provident ad distinctio cupiditate ipsam quas
                            dolorum?
                        </p>
                    </div>
                </div>
                <div className="px-3 py-5 mx-auto">
                    <div className="container flex flex-wrap">
                        <div>
                        {blogData.length === 0 && (
                            <div className="flex flex-wrap content-center items-center px-auto m-4">
                                <div className="px-5 sm:py-3 md:w-1/4 lg:w-1/4">
                                    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                                        <div className="p-6">
                                            <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                                            <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                                            <p  className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                                            <p  className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                                            <p  className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                                                <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 sm:py-3 md:w-1/4 lg:w-1/4">
                                    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                                        <div className="p-6">
                                            <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                                            <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                                            <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                                            <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                                            <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                                                <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 sm:py-3 md:w-1/4 lg:w-1/4">
                                    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                                        <div className="p-6">
                                            <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                                            <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                                            <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                                            <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                                            <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                                                <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 sm:py-3 md:w-1/4 lg:w-1/4">
                                    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                                        <div className="p-6">
                                            <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                                            <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                                            <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                                            <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                                            <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                                                <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )} 
                        </div>

                        {blogData.map((blog) => (
                            <BlogDetails blog={blog}></BlogDetails>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
