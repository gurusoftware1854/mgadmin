import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ isSidebarExpanded }) => {
  useEffect(() => {
    document.body.className = `is-header-blur ${
      isSidebarExpanded ? "is-sidebar-open" : ""
    }`;
  }, [isSidebarExpanded]);
  return (
    <>
      <Sidebar />
      <Header />
      <Outlet /> {/* This will render the current page */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
