import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/public/AppsData/AppsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data.slice(0, 6))); // Show top 6 on home
  }, []);

  return (
    <div className="p-5 text-center">
      <h2 className="text-2xl font-bold mb-4">Trending Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="border rounded p-3 shadow hover:shadow-lg"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="font-semibold">{app.title}</h3>
            <p className="text-sm text-gray-600">{app.companyName}</p>
            <p className="text-sm">{app.description}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/apps")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Show All
      </button>
    </div>
  );
};

export default TrendingApps;
