import React, { useEffect, useState } from "react";

const AppsPage = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    fetch("/public/AppsData/AppsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setFilteredApps(data); // Initially show all apps
      })
      .catch((err) => console.error("Failed to load appsData.json:", err));
  }, []);

  // Filter apps whenever searchTerm changes
  useEffect(() => {
    const term = searchTerm.toLowerCase().trim();
    if (term === "") {
      setFilteredApps(apps); // show all if search is empty
    } else {
      const filtered = apps.filter(
        (app) =>
          app.title.toLowerCase().includes(term) ||
          app.companyName.toLowerCase().includes(term),
      );
      setFilteredApps(filtered);
    }
  }, [searchTerm, apps]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">All Apps</h2>

      {/* Search and Total */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search apps..."
          className="border rounded px-3 py-2 w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="text-gray-700 font-semibold">
          Total Apps: {filteredApps.length}
        </div>
      </div>

      {/* Apps Grid or Not Found */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredApps.map((app) => (
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
              <p className="text-xs text-gray-500">
                Size: {app.size}MB | Reviews: {app.reviews} | Rating:{" "}
                {app.ratingAvg} | Downloads: {app.downloads}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-red-600 mt-10 text-lg font-semibold">
          Apps Not Found
        </div>
      )}
    </div>
  );
};

export default AppsPage;
