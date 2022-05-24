import React, { Fragment, useMemo } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import "./RootLayout.scss";
import Header from "./Header/Header";

const RootLayout = () => {
  const body = useMemo(
    () => (
      <div className="page-container">
        <SideBar />
        <div className="right-content-container">
          <Header/>
          <div className="right-main-content">
            <Outlet />
          </div>
        </div>
      </div>
    ),
    []
  );

  return body;
};

export default RootLayout;
