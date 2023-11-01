import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footeer";
import { ToastContainer } from "react-toastify";

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
