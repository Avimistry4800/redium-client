import React from 'react';

const Cards = () => {
    return (
        <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-400">
                  <img className="h-12 w-12 shadow-lg rounded-full" src="https://www.w3schools.com/bootstrap4/img_avatar5.png"/>
                  </div>
                  <h6 className="text-xl font-semibold">Lorem ipsum.</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ea ipsum, eos illo commodi dicta delectus quaerat beatae ut error?
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-400">
                  <img className="h-12 w-12 shadow-lg rounded-full" src="https://www.w3schools.com/bootstrap4/img_avatar2.png"/>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Lorem, ipsum.
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni et ut incidunt cumque doloribus assumenda voluptatibus, laboriosam tenetur ipsum!
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                <div className="text-white text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-400">
                  <img className="h-12 w-12 shadow-lg rounded-full" src="https://www.w3schools.com/bootstrap4/img_avatar3.png"/>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Lorem, ipsum.
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique fugit autem excepturi molestias saepe sit ducimus consectetur ratione eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-wrap items-center mt-12">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              
              <div className="text-gray-900 p-2  rounded-full  items-center justify-center">
                <img className="h-12 w-12 shadow-lg rounded-full" src="https://www.w3schools.com/bootstrap4/img_avatar4.png"/>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ad sint voluptates libero, sapiente incidunt.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis saepe error non culpa rerum neque!
              </p>
              
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1567896079745-b0b7e5a47679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px"
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Lorem ipsum dolor sit.
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, corrupti repudiandae! Blanditiis deserunt deleniti accusantium..
                  </p>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
};

export default Cards;