import "./style/uploadFileStyle.css";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const UploadFileButton = ({ handleChange }) => {
  const onDrop = useCallback((acceptedFiles) => {
    handleChange(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <p >Drop the files here ...</p> : <p className="add-button">+</p>}
    </div>
  );
};

export default UploadFileButton;
