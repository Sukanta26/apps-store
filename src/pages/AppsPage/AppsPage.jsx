import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";
import ErrorApps from "../ErrorApps/ErrorApps";
import { FiSearch } from "react-icons/fi";

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
    <div className="p-5 bg-gray-100 ">
      <div className="text-center mt-10 mb-10">
        <h1 className="text-3xl font-bold mb-4 ">Our All Applications</h1>
        <p className="text-center text-gray-500 mb-8">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search + Count */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Count (Left) */}
        <div className="text-gray-700 font-bold text-xl">
          ({filteredApps.length}) Apps Found
        </div>

        <div className="relative">
          {/* Search Icon */}
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Apps..."
            className="border rounded px-10 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Apps or Error */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
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
