import React from 'react'
import StackItem from '../components/StackItem'
import { GoHome } from "react-icons/go";
import { FaJava } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedhatopenshift } from "react-icons/si";
import { PiFileSqlThin } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";



const stackItemsLeft = [
  {stackName:"Java", Icon: FaJava},
  {stackName:"Python", Icon: AiOutlinePython},
  {stackName:"JavaScript", Icon: RiJavascriptLine},
  {stackName:"CSS", Icon: FaCss3Alt},
  {stackName:"HTML", Icon: FaHtml5},
  {stackName:"React", Icon: FaReact},
  {stackName:"OCP", Icon: SiRedhatopenshift},
  {stackName:"SQL", Icon: PiFileSqlThin},
  {stackName:"GitHub", Icon: FaGithub},
  {stackName:"Docker", Icon: FaDocker},
  
];
function Stack() {
  return (
    <div className="pages">
      <div className = "page-header">
        <div className="heading">My Skill Stack</div>
        <div className="heading-details"></div>
      </div>

      <div className="stackContainer">
          {
                stackItemsLeft.map((stackItem, index) => (
                  <StackItem
                    key={index} 
                    stackName={stackItem.stackName}
                    Icon={stackItem.Icon}
                  />
                ))
          }
      </div>
    </div>

  )
}

export default Stack