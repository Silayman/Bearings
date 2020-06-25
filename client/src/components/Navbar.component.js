import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const renderNav = () => {
    if (state) {
      return [
        <li>
          <Link to="/profile">Profile</Link>
        </li>,
        <li>
          <Link to="/post">Post</Link>
        </li>,
        <li>
          <button
            className="btn waves-effect waves-light #000000 black capitalize"
            style={{ textTransform: "capitalize", margin: "-3px 5px auto" }}
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/accounts/signin");
            }}
          >
            Logout
          </button>
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
