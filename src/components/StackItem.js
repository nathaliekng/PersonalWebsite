import React from 'react'


const StackItem = (props) => {
    const {stackName, Icon} = props;
  return (
        <div className="stackItemContainer">
            <div className="flex-container">
                <div className="iconContainer">
                    <Icon/>
                </div>
                <span>
                    {stackName}
                </span>
            </div>
        </div>

  )
}

export default StackItem