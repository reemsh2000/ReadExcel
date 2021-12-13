import "./style/submitSectionStyle.css";
import {useRef} from 'react'
function Submit() {
  const congratsMessage = useRef(null)
  const submitHandle =()=>{
    congratsMessage.current.style.display='block';
  }
  return (
    <div className="submit-section">
      <p ref={congratsMessage}>All is Done !!</p>
      <button className="submit-button"  onClick={submitHandle}>Submit</button>
    </div>
  );
}

export default Submit;
