import React, { useState } from 'react'
import "./Terminal.css"

function Terminal_input() {

  const [output , setOutput]=useState([])
  const [cmdInput, setCmdInput] = useState("")
  const handleChange = (event) =>{
    setCmdInput(event.target.value)
  }
    
  function docker_cmd(){
    console.log("clicked")
    console.log(document.getElementById("in1").value)
    
    var i = document.getElementById("in1").value
    var xhr = new XMLHttpRequest();
    xhr.open("GET" , "http://65.2.150.152/cgi-bin/docker.py?x="+i,true);
    xhr.send()
    xhr.onload = function (){
      const output1 = xhr.responseText;
      let obj = {
        "cmd" : "[root@localhost~]# "+ cmdInput,
        "output" : output1
      }
      let opArray = output;
      opArray.push(obj)
      console.log(xhr.response);
      setOutput(opArray)
      console.log(output);
      //   document.getElementById("d1").innerHTML = output;
    }
    
    }
    
  

  return (
    <div id="terminal_block">
			  <pre>
          {
            // output.lenght !== 0 && output !== null?
            output.map( (obj, i) =>(
              // <div key={i} className="cmdContainer">
              <>
                <div id = "d1" >{obj.output}</div>
                <div className='cmd'>{obj.cmd}</div>
              </>
              // </div>
            )) 
            // : <div className="di"></div>
          }
			  </pre>
        {/* <form> */}
          <div>
            [root@localhost~]# <input id = "in1" placeholder="Enter your command here" value={cmdInput} onChange={handleChange}/>
          </div>
          <div id="button_div">
            <button  onClick={() => docker_cmd()} id="submit_btn">Click</button>
          </div>
        {/* </form> */}
    </div>
  )
}

export default Terminal_input