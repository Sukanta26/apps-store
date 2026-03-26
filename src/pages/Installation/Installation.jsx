import React, { useEffect, useState } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";

const Installation = () => {
  const [apps, setApps] = useState([]);
  const [originalApps, setOriginalApps] = useState([]); // for reset
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(stored);
    setOriginalApps(stored); // save original
  }, []);

  // Uninstall
  const handleUninstall = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);
    setOriginalApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  // Sort
  const handleSort = (type) => {
    setSortType(type);

    if (type === "") {
      setApps(originalApps); // reset
      return;
    }

    let sorted = [...apps];

    if (type === "high") {
      sorted.sort((a, b) => b.size - a.size);
    } else if (type === "low") {
      sorted.sort((a, b) => a.size - b.size);
    }

    setApps(sorted);
  };

  // Total Storage
  const totalSize = apps.reduce((sum, app) => sum + app.size, 0);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Your Installed Apps
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
          {/* Left */}
          <div>
            <p className="text-gray-700 font-bold text-xl">
              ({apps.length}) Apps Found{" "}
            </p>
            <p className="text-sm text-gray-500">
              Total Storage: {totalSize} MB
            </p>
          </div>

          {/* Right */}
          <select
            value={sortType}
            onChange={(e) => handleSort(e.target.value)}
            className="border px-3 py-1 rounded"
          >
            <option value="">Sort By Size</option>
            <option value="high">High → Low</option>
            <option value="low">Low → High</option>
          </select>
        </div>

        {/* Apps List */}
        <div className="space-y-4">
          {apps.length > 0 ? (
            apps.map((app) => (
              <div
                key={app.id}
                className="bg-white p-4 rounded-lg shadow flex justify-between items-center hover:shadow-md transition"
              >
                {/* Left */}
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    className="w-16 h-16 rounded object-cover"
                    alt={app.title}
                  />

                  <div>
                    <h3 className="font-semibold">{app.title}</h3>

                    <div className="flex gap-4 text-sm mt-1 items-center">
                      {/* Downloads */}
                      <div className="flex items-center gap-1 text-green-600">
                        <img
                          src={downloadIcon}
                          alt="downloads"
                          className="w-4 h-4 opacity-80 font-bold"
                        />
                        <span className="font-bold text-green-600">
                          {app.downloads}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 text-orange-500">
                        <img src={starIcon} alt="rating" className="w-4 h-4" />
                        <span>{app.ratingAvg}</span>
                      </div>

                      {/* Size */}
                      <span className="text-gray-500">{app.size} MB</span>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition"
                >
                  Uninstall
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-red-500 mt-10 text-lg">
              No Installed Apps 😢
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
