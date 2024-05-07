import {NavLink} from "react-router-dom";


const RedirectButton = (props) => {
    const {name, to, className} = props;
  return (
        <NavLink end to={to} className={className}>
            <span>{name}</span>
        </NavLink>
  )
}

export default RedirectButton;