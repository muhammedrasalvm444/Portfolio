import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footeer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content font-mont">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
