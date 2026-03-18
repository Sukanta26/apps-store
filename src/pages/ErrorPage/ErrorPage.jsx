import React from "react";
import errorImage from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="grid grid-rows-1 text-center items-center justify-center p-20 gap-5 bg-base-300">
      <figure>
        <img src={errorImage} alt="404" />
      </figure>
      <h1 className="text-3xl font-bold">Oops!😢Page Not Found</h1>
      <p className="text-sm text-gray-400">
        The page you are looking for doesn’t exist or has been moved.
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

export default ErrorPage;
