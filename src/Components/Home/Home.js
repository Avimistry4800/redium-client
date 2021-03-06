import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';





const Home = (props) => {
    
    return (
    <>
    <Nav transparent />
    <main>
      <Header />
      <Cards />
     <Blogs /> 
      <Testimonial />
     <Contact />
     
    </main>
    <Footer />
  </>
    );
};

export default Home;