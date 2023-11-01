import React, { useEffect } from "react";
import Layout from "../../Components/Layout";
import projectsData from "../../Resources/projectsData";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen sm:h-auto">
          <div className="my-10 h-3/4 md:h-2/4" data-aos="slide-down">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_ygiuluqn.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <p className="text-xl font-semibold text-center" data-aos="zoom-in">
            Good ideas are not adopted automatically. They must be driven into
            practice with courageous patience
          </p>
          <p
            className="mt-4 text-4xl font-semibold md:text-3xl"
            data-aos="zoom-in"
          >
            Because
          </p>
        </div>
        <div
          className="p-10 mx-20 mt-4 font-bold text-center text-white bg-red-600 rounded-tl-full rounded-br-full md:mx-10 sm:mx- sm:mt-0"
          data-aos="fade-up"
        >
          <h1 className="text-7xl md:text-3xl sm:text-2xl">The game is</h1>
          <h1 className="mt-2 text-7xl md:text-3xl sm:text-2xl">Consistency</h1>
        </div>
      </div>
      <div
        className="grid items-center justify-center grid-cols-3 gap-20 mx-20 mt-20 md:grid-cols-1 md:mx-5"
        data-aos="fade-up"
      >
        {projectsData?.map((item) => {
          return (
            <div className="relative p-10 text-center border-2 border-gray-400 rounded-tr-3xl rounded-bl-3xl">
              <img
                src={item?.image}
                // height={220}
                // width={200}
                className="w-full text-center h-52"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 hover:opacity-80">
                <h1 className="text-4xl font-semibold text-white">
                  {item?.title}
                </h1>
                <a href={item?.link}>
                  {" "}
                  <button className="p-2 px-5 mt-4 font-semibold text-white border-2 border-white rounded cursor-pointer hover:bg-green-500">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
