import './style/dropDownStyle.css'
import { useState } from 'react'
import Submit from './submit'
function DropDown({ columns }) {
  const [selectedColumn, setSelectedColumn] = useState('')

  const handleChange = (e) => {
    setSelectedColumn(e.target.value)
  }
  return (
    <div className="drop-down-section">
      <p> Choose the Column name that Contain the text</p>
      <select
        name="columnNames"
        onChange={handleChange}
        className="drop-down"
         value={selectedColumn}
      >
      
        {columns.map((columnName, index) => {
          return columnName !=='' && columnName !==null ? (
            <option key={index} value={columnName}>
              {columnName}
            </option>
          ) : (
            ''
          )
        })}
      </select>
      {selectedColumn && <Submit />}
    </div>
  )
}

export default DropDown
