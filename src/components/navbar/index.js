import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="list">
        <ul type="none">
          <li className="list-item">
            <div className="icon">
              <i class="fi fi-rr-home"></i>
            </div>
            <span className="text">Home</span>
          </li>
          <li className="list-item">
            <div className="icon">
              <i class="fi fi-rr-search"></i>
            </div>
            <span className="text">Search</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
