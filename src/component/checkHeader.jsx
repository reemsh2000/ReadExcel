import "./style/checkHeaderStyle.css";
import { useState } from "react";
import DropDown from "./DropDown";
function CheckHeaders({ columns }) {
  const [headerExist, setHeaderExist] = useState("no");

  const onChangeValue = (e) => {
    setHeaderExist(e.target.value);
  };
  return (
    <>
      <p>Does it Contain Headers ?</p>
      <div className="checkExistSection">
        <label className="container">
          yes
          <input
            type="radio"
            name="checkHeader"
            onChange={(e) => onChangeValue(e)}
            value="yes"
          />
        </label>
        <label className="container">
          No
          <input
            type="radio"
            name="checkHeader"
            onChange={(e) => onChangeValue(e)}
            value="no"
          />
        </label>
      </div>
      {headerExist === "yes" ? <DropDown columns={columns} /> : ""}
    </>
  );
}

export default CheckHeaders;
