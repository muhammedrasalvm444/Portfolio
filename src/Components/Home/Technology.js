import React from "react";
import { FaReact, FaCss3Alt, FaBootstrap, FaHtml5 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiHtml,
} from "react-icons/si";

const Technology = () => {
  return (
    <div className="mt-32 sm:mx-4 md:mt-8">
      <h1 className="my-8 text-4xl font-semibold sm:my-4 text-blue">
        Technologies I Use
      </h1>
      <div className="grid grid-cols-4 space-x-3 md:grid-cols-1 lg:grid-cols-3">
        <FaReact
          size={160}
          color="cyan"
          className="w-full mt-20 text-center sm:mt-10"
        />
        <SiNextdotjs
          size={160}
          className="w-full mt-20 text-center animate-bounce"
        />
        <SiJavascript
          size={160}
          color="yellow"
          className="w-full mt-20 text-center"
          mt-20
        />
        <FaCss3Alt
          size={160}
          color="#264de4"
          className="w-full mt-20 text-center animate-bounce"
        />
        <SiTailwindcss
          size={160}
          color="#3490dc"
          className="w-full mt-20 text-center animate-bounce "
        />
        <SiMui size={160} color="3f51b5" className="w-full mt-20 text-center" />
        <FaBootstrap
          size={160}
          color="violet"
          className="w-full mt-20 text-center animate-bounce"
        />
        <FaHtml5
          size={160}
          color="#e34c26	"
          className="w-full mt-20 text-center"
        />
      </div>
    </div>
  );
};

export default Technology;
