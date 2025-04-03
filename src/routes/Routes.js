import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import { useStore } from "../context/storeContext";
import Mandal_master_report from "../pages/mandal/mandal_master_report";
import Sakhi_master_report from "../pages/sakhi/sakhi_master_report";
import Dhanvarsha_master_report from "../pages/dhanvarsha/dhanvarsha_master_report";
import Kanchan_master_report from "../pages/kanchan/kanchan_master_report";
import { useScheme } from "../context/schemeContext";
import Dhanvarsha_report from "../pages/dhanvarsha/dhanvarsha_report";
import Kanchan_report from "../pages/kanchan/kanchan_report";
import Mandal_report from "../pages/mandal/mandal_report";
import Sakhi_report from "../pages/sakhi/sakhi_report";

const AppRoutes = () => {
  const { isSidebarExpanded } = useStore();
  const [isLoading, setIsLoading] = useState(true);
  const { selectedScheme } = useScheme();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Hide preloader after 2 seconds
    }, 2000);
  }, []);

  // // Mapping scheme names to components
  const reportComponents = {
    Mandal: Mandal_master_report,
    Sakhi: Sakhi_master_report,
    Dhanvarsha: Dhanvarsha_master_report,
    Kanchan: Kanchan_master_report
  };

  // Dynamically get the component based on selectedScheme
  const SelectedSchemeComponent = reportComponents[selectedScheme] || Mandal_master_report; // Default to Mandal if no scheme is selected

  return (
    <>
      {isLoading && (
        <div className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
          <div className="app-preloader-inner relative inline-block size-48"></div>
        </div>
      )}
      
      <div id="root" className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
        <Routes>
          <Route path="/" element={<Layout isSidebarExpanded={isSidebarExpanded} />}>
            <Route index element={<SelectedSchemeComponent/>} />
            <Route path="Sakhi_master_report" element={<Sakhi_master_report />} />
            <Route path="Mandal_master_report" element={<Mandal_master_report />} />
            <Route path="Dhanvarsha_master_report" element={<Dhanvarsha_master_report />} />
            <Route path="Kanchan_master_report" element={<Kanchan_master_report />} />
            <Route path="users" element={<Users />} />
            <Route path="Mandal_report" element={<Mandal_report/>}/>
            <Route path="Sakhi_report" element={<Sakhi_report/>}/>
            <Route path="Dhanvarsha_report" element={<Dhanvarsha_report/>}/> 
            <Route path="Kanchan_report" element={<Kanchan_report/>}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;
