import React from "react";
import errorApps from "../../assets/App-Error.png";
import { Link } from "react-router";

const ErrorApps = () => {
  return (
    <div className="grid grid-rows-1 text-center items-center justify-center p-20 gap-5 bg-base-300">
      <figure>
        <img src={errorApps} alt="404" />
      </figure>
      <h1 className="text-3xl font-bold">OPPS!! APP NOT FOUND</h1>
      <p className="text-sm text-gray-400">
        The App you are requesting is not found on our system. please try
        another apps{" "}
      </p>
      <div>
        <button
          onClick={() => window.history.back()}
          className="btn text-white bg-gradient-to-br from-violet-700 to-violet-500 border-none hover:scale-105 hover:brightness-110 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorApps;
