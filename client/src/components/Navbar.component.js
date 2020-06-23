import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper black">
        <Link to="/" className="brand-logo left">
          Bearings
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/accounts/signin">Login</Link>
          </li>
          <li>
            <Link to="/accounts/signup">Register</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/post">Create a post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
