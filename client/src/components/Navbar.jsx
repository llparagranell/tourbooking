import Logo from "../Logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="navbar">
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
            <img src={Logo} alt="" width={175} />
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <Link to="/">
            HOME
          </Link>
          <Link to="/rooms">
            OUR ROOMS
          </Link>
          <Link to="/about">
            ABOUT US
          </Link>
          <Link to="/contact">
            CONTACT
          </Link>
          <Link to="/login">
           LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
