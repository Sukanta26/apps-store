import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";
import ErrorApps from "../ErrorApps/ErrorApps";

const AppsPage = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);

  // Load data
  useEffect(() => {
    fetch("/public/AppsData/AppsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setFilteredApps(data); // initially সব দেখাবে
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  // Search filter
  useEffect(() => {
    const term = searchTerm.toLowerCase().trim();

    if (term === "") {
      setFilteredApps(apps);
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

      {/* Search + Count */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Search (Left) */}
        <input
          type="text"
          placeholder="Search apps..."
          className="border rounded px-3 py-2 w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Count (Right) */}
        <div className="text-gray-700 font-semibold">
          Total Apps: {filteredApps.length}
        </div>
      </div>

      {/* Apps or Error */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <ErrorApps></ErrorApps>
      )}
    </div>
  );
};

export default AppsPage;
