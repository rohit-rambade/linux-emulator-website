import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import Docker from "./Components/SideNav/Docker";
import IntrotoLinux from "./Components/SideNav/IntrotoLinux";
import LinuxHistory from "./Components/SideNav/LinuxHistory";

import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Terminal } from "./pages/Terminal/Terminal";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />}>
            <Route path="linuxhistory" element={<LinuxHistory />} />

            <Route path="linuxintro" element={<IntrotoLinux />} />
            <Route path="docker" element={<Docker />} />
          </Route>

          <Route path="/terminal" element={<Terminal />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
