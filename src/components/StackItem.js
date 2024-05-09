import React, {useState} from 'react'
import { FaSquare } from "react-icons/fa6";


const StackItem = (props) => {
    const {stackName, Icon} = props;
  return (
        <td className="stackItemContainer">
            <div className="flex-container">
                <div className="iconContainer">
                    <Icon/>
                </div>
                <span>
                    {stackName}
                </span>
            </div>
        </td>

  )
}

export default StackItem