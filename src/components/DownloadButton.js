import {NavLink} from "react-router-dom";


const DownloadButton = (props) => {
    const {name, file, className, downloadName} = props;
  return (
    <a href={file} target="_blank" className={className} download={downloadName}>{name}</a>
  )
}

export default DownloadButton;