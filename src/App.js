import "./App.css";
import readXlsxFile from "read-excel-file";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBarComponent from "./component/progressBar.jsx";
import UploadFileButton from "./component/uploadFileButton.jsx";
import CheckHeaders from './component/checkHeader.jsx';

function App() {
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [columnNames, setColumnNames] = useState([]);
  // Get File and set the percentage of progress 
  const handleChange = async (file) => {
    // e.target.files[0]
    const data = await readXlsxFile(file);
    setColumnNames(data[0]);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        setUploadPercentage(percent);
      },
    };
    await axios.post("https://jsonplaceholder.typicode.com/albums", data, options);
  };

  return (
    <div className="App">
      <UploadFileButton handleChange={handleChange} />
      <ProgressBarComponent uploadPercentage={uploadPercentage} />
      {uploadPercentage === 100 ? <CheckHeaders columns={columnNames}/> : ""}
    </div>
  );
}

export default App;
