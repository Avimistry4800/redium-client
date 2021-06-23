import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import AddBlog from '../AddBlog/AddBlog';

const Home = (props) => {
    
    return (
        <>
        <Nav />
      <h2>Home</h2>
      <AddBlog />
      <Footer />
    </>
    );
};

export default Home;