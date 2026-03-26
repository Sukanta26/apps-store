import React from "react";
import { useNavigate } from "react-router-dom";
import starIcon from "../../assets/icon-ratings.png";
import downloadIcon from "../../assets/icon-downloads.png";

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  const { id, image, title, companyName, ratingAvg, downloads } = app;

  return (
    <div
      onClick={() => navigate(`/apps/${id}`)}
      className="border-none rounded-xl p-3 shadow bg-white cursor-pointer 
transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* App Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain bg-gray-100 p-4 rounded-xl mb-2"
      />

      {/* Title */}
      <h3 className="font-semibold text-lg">{title}</h3>

      {/* Company */}
      <p className="text-sm text-gray-500">{companyName}</p>

      {/* Rating + Downloads */}
      <div className="flex justify-between mt-2 text-sm items-center">
        {/* ⬇ Downloads */}
        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
          <img
            src={downloadIcon}
            alt="download"
            className="w-4 h-4 opacity-80 font-bold"
          />
          <span className="font-bold text-green-600">
            {downloads.toLocaleString()}
          </span>
        </div>

        {/* ⭐ Rating */}
        <div className="flex items-center gap-1 bg-orange-50 p-1 rounded-lg">
          <img src={starIcon} alt="star" className="w-4 h-4" />
          <span className="font-bold text-orange-500">{ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
