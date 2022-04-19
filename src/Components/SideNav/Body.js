import React from 'react'
import SideNavBar from './SideNavBar'
import './Body.css'

const Body = () => {
    const navOptions = ["Basic Linux Commands", "Kubernetes", "Docker"];
  return (
    <div className='body-container'>
      <ul className='side-nav-container'>
        {/* <ul> */}
        {
            navOptions.map((opt)=>(
                <SideNavBar option= {opt}/>
            ))
        }
        {/* </ul> */}
      </ul>
    </div>
  )
}

export default Body
