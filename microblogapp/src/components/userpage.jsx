import { useState } from "react";
import "./userpage.css";

function Userpage() {
  const [username, setUsername] = useState("");

  const defineUser = (e) => {
    setUsername(e.target.value);
  };

  const sendUser = () => {
    localStorage.setItem("userData", username);
  };

  return (
    <div className="user-page">
      <h1>Profile</h1>
      <label>User Name</label>
        <input type="text" value={username} onChange={defineUser} className='user-input' ></input>
        <button onClick={sendUser} className='profile-button'>Save</button>
      
    </div>
  );
}

export default Userpage;
