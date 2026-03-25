import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch("/AppsData/AppsData.json") // ✅ FIXED
      .then((res) => res.json())
      .then((data) => {
        const singleApp = data.find((a) => a.id === parseInt(id));
        setApp(singleApp);
      })
      .catch(() => {
        toast.error("Failed to load app ❌");
      });
  }, [id]);

  if (!app) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const handleInstall = () => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];

    const exists = stored.find((item) => item.id === app.id);

    if (exists) {
      toast.error("Already Installed ❌");
      return;
    }

    const updated = [...stored, app];
    localStorage.setItem("installedApps", JSON.stringify(updated));

    toast.success("App Installed ✅");

    navigate("/installation");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Top Section */}
      <div className="border border-dashed p-6 flex flex-col md:flex-row gap-6 items-center">
        <img src={app.image} className="w-40 h-40 object-cover rounded" />

        <div>
          <h2 className="text-2xl font-bold">{app.title}</h2>

          <p className="text-gray-500">
            Developed by <span className="text-primary">{app.companyName}</span>
          </p>

          <div className="flex gap-6 mt-4">
            <div>
              <p className="text-green-600 font-bold">⬇</p>
              <p>{app.downloads}</p>
              <p className="text-xs">Downloads</p>
            </div>

            <div>
              <p className="text-orange-500 font-bold">★</p>
              <p>{app.ratingAvg}</p>
              <p className="text-xs">Rating</p>
            </div>

            <div>
              <p className="text-blue-500 font-bold">📝</p>
              <p>{app.reviews}</p>
              <p className="text-xs">Reviews</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            className="btn bg-green-500 text-white mt-4"
          >
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="border border-dashed p-6">
        <h3 className="font-semibold mb-4">Ratings</h3>

        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center gap-3 mb-2">
            <span>{star}★</span>

            <div className="w-full bg-gray-200 h-3 rounded">
              <div className="bg-orange-500 h-3 rounded w-[70%]"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="border border-dashed p-6">
        <h3 className="font-semibold mb-4">Description</h3>
        <p className="text-gray-600">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
