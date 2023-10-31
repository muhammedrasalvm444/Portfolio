import React from "react";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

const Intro = () => {
  return (
    <div className="min-h-screen bg-theme">
      <div className="z-10 grid items-center min-h-screen grid-cols-2 mx-12 transform border-2 border-white sm:mx-2 md:grid-cols-1 rotate-12 md:rotate-0 md:border-0 bg-theme">
        <div className=" h-1/2 md:h-[400px] md:px-2" data-aos="slide-down">
          {" "}
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="items-center font-bold text-white md:px-4 sm:my-8">
          <h1
            className="text-6xl md:text-4xl lg:text-4xl"
            data-aos="slide-right"
          >
            Hi, Iam <b className="text-white">Muhammed Rasal VM</b>
          </h1>
          <h1
            className="my-4 text-4xl text-red-500 md:text-3xl"
            data-aos="slide-left"
          >
            Front-End Developer
          </h1>
          <div className="flex items-center justify-center gap-10">
            <a href="muhammedrasalvm_cv.pdf" target="_blank">
              <button className="p-5 border-2 rounded hover:bg-red-400 sm:p-3">
                Get my resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
