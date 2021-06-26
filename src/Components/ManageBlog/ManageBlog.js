import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

const ManageBlog = () => {
    const [manageBlog, setManageBlog] = useState([]);
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        fetch("https://redium-blog-server.herokuapp.com//blogs")
            .then((res) => res.json())
            .then((data) => {
                setManageBlog(data);
            });
    }, []);

    const handleDelete = (id) => {
        id &&
            fetch(`https://redium-blog-server.herokuapp.com//blogs/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((res) => console.log(res))
                .then((error) => {
                    console.log(error);
                });
        alert("Service deleted successfully");
    };

    return (
        <div className="flex flex-row">
            <div flex flex-col w-64>
                <Dashboard />
            </div>

            <div className="container flex flex-wrap">

            <div>
                        {manageBlog.length === 0 && (
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


                {manageBlog.map((blog) => {
                    return (
                        <div
                            key={blog._id}
                            className="lg:w-1/4 md:w-1/2 p-4 w-full "
                        >
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
                                        <p className="  line-clamp-2 break-words">
                                            {" "}
                                            {blog.content}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex content-center items-center">
                                              
                                                <button
                                                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() =>
                                                        handleDelete(blog._id)
                                                    }
                                                >
                                                    Delete Blog
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ManageBlog;
