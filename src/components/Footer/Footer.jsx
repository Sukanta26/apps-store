import React, { useState } from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email 😢");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Invalid email ❌");
      return;
    }

    toast.success("Subscribed successfully 🎉");
    setEmail("");
  };

  return (
    <footer className="bg-[#0B0F2F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-violet-400">HERO.IO</h2>
          <p className="text-sm mt-2 opacity-80">
            Discover and explore amazing apps with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/apps" className="hover:underline">
                Apps
              </Link>
            </li>
            <li>
              <Link to="/installation" className="hover:underline">
                Installation
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Subscribe</h3>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full text-black"
            />

            <button
              onClick={handleSubscribe}
              className="btn bg-violet-600 border-none text-white hover:bg-violet-700"
            >
              Subscribe
            </button>
          </div>

          <p className="text-xs mt-2 opacity-70">
            Get updates about new apps 🚀
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect</h3>

          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm py-4 border-t border-white/10">
        © {new Date().getFullYear()} HERO.IO — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
