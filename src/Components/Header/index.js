import React from "react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <Navbar />{" "}
    </div>
  );
};

export default Header;
