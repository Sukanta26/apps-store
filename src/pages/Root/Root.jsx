import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto">
      <Toaster />
      <Navbar />

      {/* Main content grows to fill space */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;
