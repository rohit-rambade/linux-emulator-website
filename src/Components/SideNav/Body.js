import React from "react";
import SideNavBar from "./SideNavBar";
import "./Body.css";
import { Outlet } from "react-router-dom";

const Body = () => {
  const navOptions = [
    {title: "Linux History", path: "linuxhistory"},
    { title: "Introduction to Linux", path: "linuxintro" },
    { title: "Docker", path: "docker" },
    { title: "Linux Files", path: "LinuxFiles" },
  ];
  
  return (
    <div className="body-container">
      <ul className="side-nav-container">
        {navOptions.map((opt, i) => (
          <SideNavBar option={opt.title} path={opt.path} key={i} />
        ))}
      </ul>
      <div className="test">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
