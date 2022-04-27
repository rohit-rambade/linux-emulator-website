import React from 'react'
import "./Terminal.css"
import Terminal_input from './Terminal_input';

export const Terminal = () => {
  
  
  return (
    <>
   
    <div className='Terminal'>
      <div className="terminal_head">
		    <i>root@localhost:OnlineTerminal</i>
	  	</div>

      <Terminal_input />

    </div>
    </>

  )
}
