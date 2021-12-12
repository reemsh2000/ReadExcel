import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/progressBarStyle.css";

const ProgressBarComponent = ({ uploadPercentage }) => {
  return (
    <>
      <h5>File Upload Status </h5>
      <ProgressBar
        now={uploadPercentage}
        label={`${uploadPercentage}%`}
        className="progress-bar"
      />
    </>
  );
};

export default ProgressBarComponent;
