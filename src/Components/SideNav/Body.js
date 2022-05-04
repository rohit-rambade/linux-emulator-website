import React from "react";
import SideNavBar from "./SideNavBar";
import "./Body.css";
import { Outlet } from "react-router-dom";

const Body = () => {
  const navOptions = [
    {title: "Linux History", path: "linuxhistory"},
    { title: "Introduction to Linux", path: "linuxintro" },
    { title: "Linux Files", path: "LinuxFiles" },
    { title: "date command", path: "date_command" },
    { title: "cal command", path: "cal_command" },
    { title: "ls command", path: "ls_command" },
    { title: "pwd Command", path: "pwd_command" },
    { title: "man Command", path: "man_command" },
    { title: "echo Command", path: "echo_command" },
    { title: "ping Command", path: "ping_command" },
    { title: "whoami Command", path: "whoami_command" },
    { title: "uname Command", path: "uname_command" },
    
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
