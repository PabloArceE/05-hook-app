import React from "react";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          NavBar
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-item nav-link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-item nav-link"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-item nav-link"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
