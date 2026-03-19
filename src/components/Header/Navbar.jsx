import React from "react";
import navLogo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      {/* Top Navbar */}
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left - Logo */}
        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <img src={navLogo} alt="" className="w-10 h-10 object-contain" />
            <a className="text-xl font-bold text-violet-700">HERO.IO</a>
          </div>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Apps</Link>
            </li>
            <li>
              <Link to="/">Installation</Link>
            </li>
          </ul>
        </div>

        {/* Right - Button */}
        <div className="navbar-end">
          <a className="btn text-white bg-gradient-to-br from-violet-700 to-violet-500 border-none flex items-center gap-2 hover:scale-105 hover:brightness-110 transition duration-300">
            <FaGithub size={18} />
            Contribute
          </a>
        </div>
      </div>

      {/* Mobile Menu (below navbar) */}
      <div className="md:hidden px-4 pb-3">
        <ul className="menu bg-base-200 rounded-box text-center font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Apps</Link>
          </li>
          <li>
            <Link to="/">Installation</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
