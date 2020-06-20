import React from 'react';

const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper black">
          <a href="#" className="brand-logo left">Bearings</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Login</a></li>
            <li><a href="badges.html">Register</a></li>
            <li><a href="collapsible.html">Profile</a></li>
          </ul>
        </div>
      </nav>    
    )
}


export default NavBar;