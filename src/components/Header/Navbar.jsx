import React from "react";
import navLogo from "../../assets/logo.png";
import { FaGithub, FaHome } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      {/* Top Navbar */}
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <img src={navLogo} alt="" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-violet-700">HERO.IO</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-medium gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive
                      ? "text-violet-700 border-b-2 border-violet-700"
                      : ""
                  }`
                }
              >
                <FaHome /> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive
                      ? "text-violet-700 border-b-2 border-violet-700"
                      : ""
                  }`
                }
              >
                <MdApps /> Apps
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive
                      ? "text-violet-700 border-b-2 border-violet-700"
                      : ""
                  }`
                }
              >
                <IoSettingsOutline /> Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className="navbar-end">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-white bg-gradient-to-br from-violet-700 to-violet-500 border-none flex items-center gap-2 hover:scale-105 hover:brightness-110 transition duration-300"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden px-4 pb-3">
        <ul className="menu bg-base-200 rounded-box text-center font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex justify-center items-center gap-2 ${
                  isActive ? "text-violet-700 border-b-2 border-violet-700" : ""
                }`
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `flex justify-center items-center gap-2 ${
                  isActive ? "text-violet-700 border-b-2 border-violet-700" : ""
                }`
              }
            >
              <MdApps /> Apps
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                `flex justify-center items-center gap-2 ${
                  isActive ? "text-violet-700 border-b-2 border-violet-700" : ""
                }`
              }
            >
              <IoSettingsOutline /> Installation
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
