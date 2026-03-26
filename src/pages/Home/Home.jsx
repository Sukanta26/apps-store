import React from "react";
import Banner from "../../components/Banner/Banner";
import StatsSection from "../../components/StatsSection/StatsSection";
import TrendingApps from "../../components/TrendingApps/TrendingApps";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <div className="bg-gray-100 p-10">
        <TrendingApps></TrendingApps>
      </div>
    </>
  );
};

export default Home;
