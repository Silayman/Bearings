import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const renderNav = () => {
    if (state) {
      return [
        <li>
          <Link to="/profile">Profile</Link>
        </li>,
        <li>
          <Link to="/post">Create a post</Link>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to="/accounts/signin">Login</Link>
        </li>,
        <li>
          <Link to="/accounts/signup">Register</Link>
        </li>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper black">
        <Link to={state ? "/" : "/accounts/signin"} className="brand-logo left">
          Bearings
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderNav()}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
