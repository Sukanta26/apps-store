import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-violet-400 py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Downloads */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">29.6M</h1>
            <p className="mt-2 text-sm opacity-90">Total Downloads</p>
          </div>

          {/* Reviews */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">906K</h1>
            <p className="mt-2 text-sm opacity-90">User Reviews</p>
          </div>

          {/* Active Apps */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">132+</h1>
            <p className="mt-2 text-sm opacity-90">Active Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
