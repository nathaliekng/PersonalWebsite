import React, {useState} from 'react'
import {NavLink} from "react-router-dom";


const MenuItem = (props) => {
    const {name, Icon, to} = props;
  return (
    <li>
        <NavLink end to={to} className="main-item" >
            <div className="main-icon">
                <Icon/>
            </div>
            <span>{name}</span>
        </NavLink>
    </li>
  )
}

export default MenuItem