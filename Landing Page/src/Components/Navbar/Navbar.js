import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";
import ReactDOM from "react-dom";

const navElement = document.getElementById("navbar");

function Navbar() {
  return ReactDOM.createPortal(
    <nav>
      <div className={`${classes.navbar} container`}>
        <span>
          <FontAwesomeIcon icon={faInfinity} />
          KI
        </span>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CLIENTS</li>
          <li>BLOG</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </nav>,
    navElement
  );
}

export default Navbar;
