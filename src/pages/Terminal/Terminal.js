import React from "react";
import "./Terminal.css";

export const Terminal = () => {
  function docker_cmd() {
    var i = document.getElementById("in1").value;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://<enter_your_ip>/cgi-bin/docker.py?x=" + i, true);

    xhr.send();

    xhr.onload = function () {
      var output = xhr.responseText;
      document.getElementById("d1").innerHTML = output;
    };
  }

  return (
    <div>
      <div id="terminal">
        <div id="terminal_head">
          <i>root@localhost:DockerWebsite</i>
        </div>

        <div id="b">
          <div>
            [root@localhost~]#{" "}
            <input id="in1" placeholder="Enter your command here" />
          </div>
          <pre>
            <div id="d1"> </div>
          </pre>
        </div>
      </div>

      <div id="b1">
        <button onclick={docker_cmd()} id="submit_btn">
          Click
        </button>
      </div>
    </div>
  );
};
