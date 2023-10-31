import React, { useEffect } from "react";
import Layout from "../../Components/Layout";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <Layout>
      <div>
        {" "}
        <div className="h-screen mt-10">
          <lottie-player
            src="https://lottie.host/4205ccef-5c4c-4742-bbfa-951cb892cf33/pgGKM5eTbc.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="flex justify-center w-screen md:w-full ">
          <div className="w-1/2 p-10 border-2 shadow-2xl md:w-full md:p-5">
            <h1 className="mb-10 text-3xl font-semibold">Contact Me</h1>
            <form id="contactForm " className="space-y-5">
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border-2 border-gray-500 "
              />
              <br></br>

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                className="w-full p-3 border-2 border-gray-500 shadow-md"
              />
              <br></br>
              <textarea
                id="message"
                name="message"
                // required
                placeholder="Message"
                className="w-full p-4 border-2 border-gray-500 shadow-md"
              ></textarea>
              <br></br>

              <input
                type="submit"
                value="Submit"
                className="p-4 text-white bg-red-400 rounded shadow-md cursor-pointer hover:bg-black"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
