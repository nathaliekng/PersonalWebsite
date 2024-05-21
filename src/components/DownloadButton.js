const DownloadButton = (props) => {
    const {name, file, className, downloadName} = props;
  return (
    <a href={file} className={className} download={downloadName}>{name}</a>
  )
}

export default DownloadButton;