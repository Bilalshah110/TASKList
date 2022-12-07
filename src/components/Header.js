import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary topNav py-3 mb-4">
      <div className="container-fluid">
        <Link to="/" className="text-white navbar-brand">
          TASKList
        </Link>

        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink
                to="/"
                className="nav-NavLink text-white nav-li-a"
                aria-current="page"
              >
                Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-NavLink text-white nav-li-a">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
