import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <footer>footer</footer> */}
      <Footer />
    </div>
  );
};

export default Layout;
