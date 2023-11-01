import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { AOS } from "aos";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("https://formspree.io/f/mzblwbjw", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setLoading(false);
        alert("Form submitted successfully!");
      } else {
        setLoading(false);
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

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
            <form
              action="https://formspree.io/f/mzblwbjw"
              method="post"
              id="contactForm "
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-500 shadow-md"
              />
              <br></br>
              <textarea
                id="message"
                name="message"
                // required
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-500 shadow-md"
              ></textarea>
              <br></br>

              <button
                type="submit"
                className="p-4 text-white bg-red-400 rounded shadow-md cursor-pointer hover:bg-black"
              >
                {loading ? "Submitting.." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
