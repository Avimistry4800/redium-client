import React from 'react';

const Testimonial = () => {
    return (
        <section className="pb-20 relative block bg-gray-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
              Doloremque voluptatum mollitia
            </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              Lmet consectetur adipisicing elit.  vel consequuntur ducimus provident ipsa harum, iure neque dolores unde, iste dicta hic vero saepe ipsum eligendi itaque eaque!
              
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-2  rounded-full flex items-center justify-center">
                <img className="h-12 w-12 shadow-lg rounded-full" src="https://pixy.org/src/31/thumbs350/315160.jpg"/>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Excelent
              </h6>
              <p className="mt-2 mb-4 text-gray-500">
              Lmet consectetur adipisicing elit.  vel consequuntur ducimus provident ipsa harum, iure neque dolores unde, iste dicta hic vero saepe ipsum eligendi itaque eaque!
              
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-2  rounded-full flex items-center justify-center">
                <img className="h-12 w-12 shadow-lg rounded-full" src="https://pixy.org/src2/660/thumbs350/6608595.jpg"/>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Grow That Market
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
              Lmet consectetur adipisicing elit.  vel consequuntur ducimus provident ipsa harum, iure neque dolores unde, iste dicta hic vero saepe ipsum eligendi itaque eaque!
              
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-2  rounded-full flex items-center justify-center">
                <img className="h-12 w-12 shadow-lg rounded-full" src="https://cdn.pixabay.com/photo/2021/06/19/08/33/woman-6348024_960_720.jpg"/>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                It's Time
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
              Lmet consectetur adipisicing elit.  vel consequuntur ducimus provident ipsa harum, iure neque dolores unde, iste dicta hic vero saepe ipsum eligendi itaque eaque!
              
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Testimonial;