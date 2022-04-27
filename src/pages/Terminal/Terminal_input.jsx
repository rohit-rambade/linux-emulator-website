import React, { useState } from 'react'
import "./Terminal.css"

function Terminal_input() {

    
  function docker_cmd(){

    console.log("clicked")
    console.log(document.getElementById("in1").value)
    
    var i = document.getElementById("in1").value
    var xhr = new XMLHttpRequest();
    xhr.open("GET" , "http://3.110.42.108/cgi-bin/docker.py?x="+i,true);
    xhr.send()
    xhr.onload = function (){
      const output1 = xhr.responseText;
      console.log(output1)
      setOutput(output1)
      //   document.getElementById("d1").innerHTML = output;
    }
    
    }
    
    const [output , setOutput]=useState(" ")
  





  return (
    <div id="terminal_block">
			  <div>
				  [root@localhost~]# <input id = "in1" placeholder="Enter your command here" />
			  </div>
			  <pre>
				  <div id = "d1">{output}</div> 
			  </pre>

              <div id="button_div">
          <button  onClick={docker_cmd} id="submit_btn">Click</button>
    </div>
    </div>
  )
}

export default Terminal_input