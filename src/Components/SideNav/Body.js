import React from "react";
import SideNavBar from "./SideNavBar";
// import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import "./Body.css";
import { Outlet } from "react-router-dom";

// import LinuxHistory from './LinuxHistory';

const Body = () => {
  const navOptions = [
    {
      title: "Linux History",
      path: "linuxhistory",
    },

    { title: "Introduction to Linux",
     path: "linuxintro" 
    },
    { title: "Docker",
     path: "docker" 
    },
  ];
  //  , "Docker","Docker","Docker","Docker", ];
  return (
    <div className="body-container">
      <ul className="side-nav-container">
        {/* <ul> */}
        {navOptions.map((opt, i) => (
          <SideNavBar option={opt.title} path={opt.path} key={i} />
        ))}
        {/* </ul> */}
      </ul>
      <div className="test">
          <Outlet/>


      </div>
    </div>
  );
};

export default Body;
