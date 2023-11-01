import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="p-10 text-white bg-theme">
        <p className="text-center font-mont" data-aos="zoom-in">
          Designed and developed by
        </p>
        <div className="flex my-5 justify-evenly">
          <a
            href="https://www.facebook.com/profile.php?id=100010430341495&mibextid=ZbWKwL"
            target="_blank"
            className="cursor-pointer"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/rasal_vm18/?igshid=NzZlODBkYWE4Ng%3D%3D"
            target="_blank"
            className="cursor-pointer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-rasal-vm44ab49229"
            target="_blank"
            className="cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/muhammedrasalvm444"
            target="_blank"
            className="cursor-pointer"
          >
            <FaGithub />
          </a>
        </div>
        <p className="my-2 text-xl text-white font-mont">Muhammed Rasal vm</p>
      </div>
    </div>
  );
};

export default Footer;
