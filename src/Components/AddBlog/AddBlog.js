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
        <div className="row">
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <div class="login-box">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-secondary mb-5">Add blog</h1>
                        <div className="">
                            <input onBlur={handleBlur} type="text" name="title" required="" />
                            <label>blog Title</label>
                        </div>
                        <div className="">
                            <input onBlur={handleBlur} type="text" name="content" required="" />
                            <label>content</label>
                        </div>
                        <div className="">
                            <input onChange={handleImage} type="file" name="" required="" />
                            <label>Cover Image</label>
                        </div>
                        <button onClick={() => handleSubmit} class="border-2 transition duration-500 border-red-400 w-4/12 py-2 text-center text-red-400 bg-transparent rounded-md focus:outline-none "> Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog