import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to =  {"/"}  > Home </Link >
      <Link to =  {"/userpage"}  > Profile </Link >

      
    </div>
  );
}

export default Navbar;
