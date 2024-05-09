import React, {useState} from 'react'
import {NavLink} from "react-router-dom";


const SocialsButton = (props) => {
    const {name, Icon, to, iconClass, itemClass} = props;
  return (
    <li className={itemClass}>
        <NavLink end to={to} target='_blank' className={itemClass}>
          <div className="flex-container">
            <div className={iconClass}>
                  <Icon/>
              </div>
              <span>{name}</span>
            </div>
        </NavLink>
    </li>
  )
}

export default SocialsButton