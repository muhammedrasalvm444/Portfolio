import React, { useEffect } from "react";
import Layout from "../../Components/Layout";
import Intro from "../../Components/Home/Intro";
import Technology from "../../Components/Home/Technology";
import InfoSection from "../../Components/Home/InfoSection";
import DevStack from "../../Components/Home/DevStack";
import DevInfo from "../../Components/Home/DevInfo";
import AOS from "aos";
AOS.init();

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <Layout>
      <div>
        <Intro />
        <Technology />
        <InfoSection />
        <DevStack />
        <DevInfo />
      </div>
    </Layout>
  );
};

export default Home;
