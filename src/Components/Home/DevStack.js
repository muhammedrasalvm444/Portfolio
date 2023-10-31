import React from "react";

const DevStack = () => {
  return (
    <div className="my-20 sm:my-0">
      <div className="flex justify-center w-full mt-32 bg-orange-500 h-52 ">
        <h1 className="py-10 text-4xl font-semibold text-white md:text-2xl ">
          My Dev Stack
        </h1>
      </div>
      <div className="mx-32 -mt-24 rounded-lg shadow-2xl cursor-pointer sm:mx-4 bg-gray-50 lg:mx-4 hover:bg-gray-700 hover:text-white">
        <div className="h-96 md:h-72" data-aos="zoom-in">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_sSF6EG.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="grid grid-cols-2 p-5 md:grid-cols-1">
          <div className="text-left md:my-6">
            <h1 className="text-xl font-bold">Front End</h1>
            <hr />
            <p className="mt-2 font-semibold">HTML/CSS</p>
            <p className="mt-2 font-semibold">React</p>

            <p className="mt-2 font-semibold">Javascript</p>
            <p className="mt-2 font-semibold">Next js</p>
            <p className="mt-2 font-semibold">Redux</p>
            <p className="mt-2 font-semibold">Zustand</p>
          </div>
          <div className="text-right md:text-left md:mt-6">
            <h1 className="text-xl font-bold">UI / UX</h1>
            <hr />
            <p className="mt-2 font-semibold">Bootstrap</p>
            <p className="mt-2 font-semibold">Tailwind</p>
            <p className="mt-2 font-semibold">Ant Design</p>
            <p className="mt-2 font-semibold">Material UI</p>
            <p className="mt-2 font-semibold">Semantic UI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevStack;
