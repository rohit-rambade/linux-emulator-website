import React from 'react'
import { Link } from 'react-router-dom'

const SideNavBar = (props) => {
    
    return (
        <li className='list-item' >
           <Link to={props.path}  style={{'textDecoration': 'none' , 'color':'white'} }>
           {props.option}
           </Link>
        </li>

    )
}

export default SideNavBar
