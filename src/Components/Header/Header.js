import React from 'react';

const Header = () => {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh"
        }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1616353654893-9866e267e412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"
          }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Lorem ipsum dolor sit amet consectetur..
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at beatae et explicabo nesciunt maiores similique excepturi inventore repudiandae illum hic exercitationem, provident neque commodi odio quod error, quibusdam earum!
                </p>
              </div>
            </div>

          </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px" }}
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
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    );
};

export default Header;