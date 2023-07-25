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
            <a href="!#">HOME</a>{" "}
          </Link>
          <Link to="/rooms">
            <a href="!#">OUR ROOMS</a>{" "}
          </Link>
          <Link to="/about">
            <a href="!#">ABOUT US</a>{" "}
          </Link>
          <Link to="/contact">
            <a href="!#">CONTACT</a>{" "}
          </Link>
          <Link to="/login">
            <a href="!#">LOGIN</a>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
