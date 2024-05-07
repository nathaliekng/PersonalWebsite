import React, {useState} from 'react'
import {NavLink} from "react-router-dom";


const SocialsButton = (props) => {
    const {name, Icon, to, iconClass, itemClass} = props;
  return (
    <li>
        <NavLink end to={to} target='_blank' className={itemClass} >
            <div className={iconClass}>
                <Icon/>
            </div>
            <span>{name}</span>
        </NavLink>
    </li>
  )
}

export default SocialsButton