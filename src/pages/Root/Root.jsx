import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import ErrorPage from "../ErrorPage/ErrorPage";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet>
        <ErrorPage></ErrorPage>
      </Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
