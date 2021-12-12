import "./style/uploadFileStyle.css";

const UploadFileButton = ({ handleChange }) => {
  return (
    <>
      <label htmlFor="file" className="file-label">
        <p className="add-button"> + </p>
      </label>
      <input
        type="file"
        id="file"
        onChange={(e) => handleChange(e)}
        className="upload-input"
      />
    </>
  );
};

export default UploadFileButton;
