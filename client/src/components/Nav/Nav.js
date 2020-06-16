import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
          <div className="navbar-brand">Google Books Search API</div>
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active nav-link">
                <Link to={"/search"}>Search</Link>
              </li>
              <li className="nav-item active nav-link">
                <Link to={"/saved"}>Saved</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
{
  /* <Link to={"/saved"}>Saved</Link> */
}
export default Nav;
