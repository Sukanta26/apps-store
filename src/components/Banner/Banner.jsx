import React from "react";
import BannerImage from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-violet-50 to-white pt-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          We Build <br />
          <span className="text-primary">Productive Apps</span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn btn-outline flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
              alt="playstore"
              className="w-5"
            />
            Google Play
          </button>

          <button className="btn btn-outline flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/731/731985.png"
              alt="apple"
              className="w-5"
            />
            App Store
          </button>
        </div>

        {/* Image */}
        <div className="mt-10 flex justify-center">
          <img src={BannerImage} alt="app" className="w-full max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
