import React from "react";
import Dashboard from "../pages/dashboard";

const Layout = ({children}) => {
  return(
    <div className={`h-screen flex flex-row justify-start`}>
      <Dashboard />
      {children} 
    </div>
  )
};

export default Layout;

