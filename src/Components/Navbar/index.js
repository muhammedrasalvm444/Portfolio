import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const navList = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const location = useLocation();
  return (
    <div className="text-white bg-theme font-mont">
      <div
        className={`flex items-center justify-between p-3 shadow-lg ${
          showMenu !== "md:hidden" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between w-full ">
          <Link to="/">
            {" "}
            <h1 className="text-4xl font-semibold cursor-pointer hover:text-red-300">
              M R
            </h1>
          </Link>
          {
            <>
              {showMenu == "md:hidden" ? (
                <AiOutlineMenuFold
                  className="text-4xl cursor-pointer lg:hidden xl:hidden md:flex 2xl:hidden"
                  onClick={() => {
                    if (showMenu === "md:hidden") {
                      setShowMenu();
                    } else {
                      setShowMenu("md:hidden");
                    }
                  }}
                />
              ) : (
                <AiOutlineMenuUnfold
                  className="text-4xl cursor-pointer lg:hidden xl:hidden md:flex 2xl:hidden"
                  onClick={() => {
                    if (showMenu === "md:hidden") {
                      setShowMenu();
                    } else {
                      setShowMenu("md:hidden");
                    }
                  }}
                />
              )}
            </>
          }
        </div>

        <div className="flex md:hidden">
          {" "}
          {navList.map((item) => (
            <li
              className={`mx-5 list-none p-2 cursor-pointer ${
                location?.pathname == item?.path &&
                "bg-white text-theme  rounded"
              }`}
            >
              <Link to={item.path}>{item.name} </Link>
            </li>
          ))}
        </div>
        <div
          className={`flex-col md:flex 2xl:hidden w-full items-start lg:hidden xl:hidden ${showMenu}`}
        >
          {navList.map((item) => (
            <li
              className={`my-5 list-none cursor-pointer ${
                location?.pathname == item?.path &&
                "bg-white text-theme  rounded"
              }`}
            >
              <Link to={item.path}>{item.name} </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
