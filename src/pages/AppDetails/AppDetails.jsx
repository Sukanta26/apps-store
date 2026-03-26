import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import starIcon from "../../assets/icon-ratings.png";
import downloadIcon from "../../assets/icon-downloads.png";
import reviewIcon from "../../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch("/AppsData/AppsData.json")
      .then((res) => res.json())
      .then((data) => {
        const singleApp = data.find((a) => a.id === parseInt(id));
        setApp(singleApp);
      })
      .catch(() => {
        toast.error("Failed to load app ❌");
      });
  }, [id]);

  if (!app) return <div className="text-center mt-10">Loading...</div>;

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

  // Prepare chart data from ratingDetails
  const chartData = Object.entries(app.ratingDetails).map(([star, count]) => ({
    star,
    count,
  }));

  return (
    <div className="p-6 space-y-6 bg-gray-100  mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center pb-6 border-b border-gray-300">
        <img
          src={app.image}
          className="w-50 h-50 object-cover bg-white p-2 rounded-xl"
          alt={app.title}
        />

        <div>
          <h2 className="text-2xl font-bold">{app.title}</h2>
          <p className="text-gray-500">
            Developed by <span className="text-primary">{app.companyName}</span>
          </p>

          <div className="flex gap-6 mt-4">
            {/* Downloads */}
            <div className="flex flex-col items-center">
              <img
                src={downloadIcon}
                alt="downloads"
                className="w-6 h-6 mb-1"
              />
              <p className="font-bold text-green-600">{app.downloads}</p>
              <p className="text-xs text-gray-500">Downloads</p>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center">
              <img src={starIcon} alt="rating" className="w-6 h-6 mb-1" />
              <p className="font-bold text-orange-500">{app.ratingAvg}</p>
              <p className="text-xs text-gray-500">Rating</p>
            </div>

            {/* Reviews */}
            <div className="flex flex-col items-center">
              <img src={reviewIcon} alt="reviews" className="w-6 h-6 mb-1" />
              <p className="font-bold text-blue-500">{app.reviews}</p>
              <p className="text-xs text-gray-500">Reviews</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            className="btn bg-green-500 text-white mt-4 px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="pb-6 border-b border-gray-300">
        <h3 className="font-semibold mb-4">Ratings Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
          >
            <XAxis type="number" />
            <YAxis
              type="category"
              dataKey="star"
              tick={({ x, y, payload }) => (
                <div className="flex items-center">
                  <img
                    src={app.image}
                    alt="app"
                    className="w-8 h-8 rounded mr-2"
                  />
                  <span>{payload.value}★</span>
                </div>
              )}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#F97316" radius={[4, 4, 0, 0]}>
              <LabelList dataKey="count" position="right" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="pb-6 border-b border-gray-300">
        <h3 className="font-semibold mb-4">Description</h3>
        <p className="text-gray-600">{app.descriptionFull}</p>
      </div>
    </div>
  );
};

export default AppDetails;
