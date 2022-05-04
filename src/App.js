import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import IntrotoLinux from "./Components/SideNav/IntrotoLinux";
import LinuxHistory from "./Components/SideNav/LinuxHistory";
import LinuxFiles from "./Components/SideNav/LinuxFiles";
import Cal_command from "./Components/SideNav/Cal_command";
import Date_command from "./Components/SideNav/Date_command";
import Ls_command from "./Components/SideNav/Ls_command";
import Pwd_command from "./Components/SideNav/Pwd_command";
import Man_command from "./Components/SideNav/Man_command";
import Echo_command from "./Components/SideNav/Echo_command";
import Ping_command from "./Components/SideNav/Ping_command";
import Whoami_command from "./Components/SideNav/Whoami_command";
import Uname_command from "./Components/SideNav/Uname_command";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Terminal } from "./pages/Terminal/Terminal";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} >
          <Route path="/" element={<LinuxHistory />} />
            <Route path="linuxhistory" element={<LinuxHistory />} />
            <Route path="linuxintro" element={<IntrotoLinux />} />
            <Route path="LinuxFiles" element={<LinuxFiles />} />
            <Route path="date_command" element={<Date_command />} />
            <Route path="cal_command" element={<Cal_command />} />
            <Route path="ls_command" element={<Ls_command />} />
            <Route path="pwd_command" element={<Pwd_command />} />
            <Route path="man_command" element={<Man_command />} />
            <Route path="echo_command" element={<Echo_command />} />
            <Route path="ping_command" element={<Ping_command />} />
            <Route path="whoami_command" element={<Whoami_command />} />
            <Route path="uname_command" element={<Uname_command />} />
           
           

           
          </Route>

          <Route path="/terminal" element={<Terminal />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;