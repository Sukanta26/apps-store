import React, { useEffect, useState } from "react";
import AppCard from "../AppCard/AppCard";
import { useNavigate } from "react-router-dom";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/public/AppsData/AppsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data.slice(0, 8))); // 🔥 8 apps
  }, []);

  return (
    <div className="mt-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4 ">Trending Apps</h1>
        <p className="text-center text-gray-500 mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Grid 4 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      {/* Show All Button Center */}
      <div className="flex justify-center my-8">
        <button
          onClick={() => navigate("/apps")}
          className="btn text-white bg-gradient-to-br from-violet-700 to-violet-500 border-none flex items-center gap-2 hover:scale-105 hover:brightness-110 transition duration-300"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default TrendingApps;
