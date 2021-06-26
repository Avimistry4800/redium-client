import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = ({ blog }) => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        < >
            {showModal ? (
                <>
                    <div className="justify-center items-center flex flex-wrap overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mt-5 pt-5 rounded">
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex-col items-center w-full justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <button
                                        className="px-3 ml-auto bg-transparent border-black-600 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            X
                                        </span>
                                    </button>
                                    <img className= "object-cover rounded-t w-full h-64 pb-5" src={`data:image/png;base64,${blog.image.img}`} alt="" />
                                    <h3 className="text-3xl px-5 font-semibold justify-center item-center">
                                        {blog.title}
                                    </h3>
                                   
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        {blog.content}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            <div key={blog._id} className="lg:w-1/4 md:w-1/2 p-4 w-full ">
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
                                <div className="flex items-center">
                                   
                                    <button
                                        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(true) }
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;
