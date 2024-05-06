import React, {useState, useEffect} from 'react'
import logo from "../assets/logo.png"
import { PiArrowSquareLeftThin } from "react-icons/pi";
import { PiArrowSquareRightThin } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoPersonFill } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { IoMailOpen } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import MenuItem from "./MenuItem.js";



const menuItems = [
  {name: "Home", to: "/", Icon: GoHome},
  {name: "About Me", to: "/about", Icon: GoPerson},
  {name: "Projects", to: "/projects", Icon: MdOutlineWorkOutline},
  {name: "Contact", to: "/contact", Icon: IoMailOutline},
]

function Sidenav(props) {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    props.onCollapse(inactive)
  }, [inactive]);

  return (
    <div className={`side-menu ${inactive ? "inactive": ""}`}>
        <div className="side-header">
          <div className={`logo ${inactive ? "inactive": ""}`}>
            {inactive ? <div><header className="initials">NN</header></div> : 
            <div className="details">
              <header className="myname">Nathalie Ng</header>
              <span className="mytitle">Software Developer</span>
            </div>}
          </div>
          <div onClick={()=> setInactive(!inactive)} className="collapse-nav">
            {inactive ? <PiArrowSquareRightThin/> : <PiArrowSquareLeftThin/>}
          </div>
          <div className= "divider"></div>
        </div>

        <div className="side-main">
          <ul>
            {
              menuItems.map((menuItem, index) => (
                <MenuItem 
                  key={index} 
                  name={menuItem.name}
                  to={menuItem.to} 
                  Icon={menuItem.Icon} 
                />
              ))
            }
          </ul>
        </div>
        
        <div className="side-menu-footer">
          <div className= "divider"></div>
          <div className="footer-icon">
            <MdOutlineLightMode/>
          </div>
        </div>



    </div>
  )
}

export default Sidenav