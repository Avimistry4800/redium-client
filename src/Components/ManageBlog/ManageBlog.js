import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

const ManageBlog = () => {
    const [manageBlog, setManageBlog] = useState([]);
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => {
                setManageBlog(data);
            });
    }, []);

    const handleDelete = (id) => {
        id &&
            fetch(`http://localhost:5000/blogs/${id}`, {
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
