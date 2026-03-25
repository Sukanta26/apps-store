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
        <h2 className="text-2xl font-bold mb-4 ">Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      {/* Grid 4 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      {/* Show All Button Center */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/apps")}
          className="btn bg-blue-600 text-white hover:bg-blue-700"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default TrendingApps;
