import React, { useState } from 'react';

const AddBlog = () => {

    const [blogs, setBlogs] = useState({});
    console.log(blogs)
    const [image, setImage] = useState(null);
    console.log(image)

    const handleBlur = (e) => {
        const newBlog = { ...blogs };
        newBlog[e.target.name] = e.target.value;
        setBlogs(newBlog);
    };

    const handleImage = (e) => {
        const newImage = e.target.files[0];
        setImage(newImage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', blogs.title);
        formData.append('content', blogs.content);
        formData.append('desc', blogs.description);
        fetch('http://localhost:5000/addblog', {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    alert("blog added successfully")
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        // <div className="">
        //     <div className="">
        //         <div className="">
        //             <form onSubmit={handleSubmit}>
        //                 <h1 className="">Add blog</h1>
        //                 <div className="">
        //                     <input onBlur={handleBlur} type="text" name="title" required="" />
        //                     <label>blog Title</label>
        //                 </div>
        //                 <div className="">
        //                     <input onBlur={handleBlur} type="text" name="content" required="" />
        //                     <label>content</label>
        //                 </div>
        //                 <div className="">
        //                     <input onChange={handleImage} type="file" name="" required="" />
        //                     <label>Cover Image</label>
        //                 </div>
        //                 <button onClick={() => handleSubmit} class="border-2 transition duration-500 border-red-400 w-4/12 py-2 text-center text-red-400 bg-transparent rounded-md focus:outline-none "> Submit</button>
                        
        //             </form>
        //         </div>
        //     </div>
        // </div>

<section className=" block mt-60 py-4 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to ADD a new Blog!!!
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Why are you wasting your time? Add it now...
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                    <form onSubmit={handleSubmit}>
                        <div >
                        <label className="py-5">Blog Title</label>
                            <input className="border-0 px-3 py-3  placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" onBlur={handleBlur} type="text" name="title" required="" />         
                        </div>
                        <div className="">
                        <label className="py-5" >content</label>
                            <textarea className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" onBlur={handleBlur} type="text" name="content" required="" />
                            
                        </div>
                        <div className="">
                        <label className="py-5">Cover Image</label>
                        <input className="border-0 px-3 py-2  placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" onChange={handleImage} type="file" name="" required="" />
                            
                        </div>
                        <button onClick={() => handleSubmit} class="border-2 mt-3 transition duration-500 border-gray-700 w-4/12 py-2 text-center text-xl text-gray-700 bg-transparent rounded-md focus:outline-none "> Submit</button>
             
                    </form>
         </div>

                    {/* <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="title"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="ADD TITLE"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="content"
                      >
                        Content
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Start Typing from here..."
                      />
                    </div>
                   
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Add Blog
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    );
};

export default AddBlog