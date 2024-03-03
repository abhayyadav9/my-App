import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <div>
      {" "}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/textform"
                >
                  Home
                </Link>
              </li>
                  {/*
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link
                </Link>
              </li>
           <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>--> */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/about"
                  aria-disabled="true"
                >
                  
                  {props.about}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>

            <div
              className={`form-check form-switch  text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Dark mode enable
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// Navbar.propTypes = {
//   // title:PropTypes.string.  isRequired ,
//   title: PropTypes.string,
//   aboutText: PropTypes.string,
// };

// Navbar.defaultProps={
//   title:"hey i am default",
//   about:"i am 2nd default"
// }
