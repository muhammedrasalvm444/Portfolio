import React from "react";

const InfoSection = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center w-full mt-32 bg-blue-200 h-52 ">
        <h1 className="py-10 text-4xl font-semibold text-white md:text-2xl ">
          Yes,You are right,iam a Javascript Buff
        </h1>
      </div>
      <div className="mx-32 -mt-24 rounded-lg shadow-2xl cursor-pointer sm:mx-4 bg-gray-50 md:mx-4 hover:bg-gray-700 hover:text-white">
        <div className="h-96 " data-aos="zoom-in">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_aptscmnx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <p className="py-10 my-5 text-xl font-semibold md:px-5 px-14 ">
          JavaScript is one of the most top-ranked programming languages because
          of its ubiquitous use on all platforms and mass adoption. Main Use
          Cases: Web Development.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
