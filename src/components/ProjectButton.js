import {NavLink} from "react-router-dom";


const ProjectButton = (props) => {
    const {name, preview, to, className} = props;
  return (
        <NavLink end to={to} target="_blank" className={className}>
            <div >
            <div>{name}</div>
            <div>
            <img src={preview} alt="preview"/>
            </div>
            </div>

            
        </NavLink>
        
  )
}

export default ProjectButton;