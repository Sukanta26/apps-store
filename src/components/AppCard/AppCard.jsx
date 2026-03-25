import React from "react";
import { useNavigate } from "react-router-dom";

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  const { id, image, title, companyName, ratingAvg, downloads } = app;

  return (
    <div
      onClick={() => navigate(`/apps/${id}`)}
      className="border rounded-xl p-3 shadow hover:shadow-lg transition duration-300 cursor-pointer bg-white"
    >
      {/* App Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded mb-2"
      />

      {/* Title */}
      <h3 className="font-semibold text-lg">{title}</h3>

      {/* Company */}
      <p className="text-sm text-gray-500">{companyName}</p>

      {/* Rating + Downloads */}
      <div className="flex justify-between items-center mt-2 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500 font-medium">
          ⭐ {ratingAvg}
        </div>

        {/* Downloads */}
        <div className="text-gray-500">⬇ {downloads}</div>
      </div>
    </div>
  );
};

export default AppCard;
