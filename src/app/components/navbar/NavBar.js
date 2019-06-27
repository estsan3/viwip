import React, { Component } from "react";
import { connect } from "react-redux";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logov from "./logov.png";
class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  /*      
 <a href="http://viwip.com.ar/" target="_blank" class="brand-logo right"><span className="logoTitle">VIWIP</span></a>
 * */
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a
            href="http://viwip.com.ar/"
            target="_blank"
            className="brand-logo right"
          >
            <img className="responsive-img" src={logov} />
          </a>

          <ul id="nav-mobile" className="left  hide-on-med-and-down">
            <li>
              <NavLink className="left  hide-on-med-and-down" to="/">
                <i className="material-icons left">home</i>Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink className="left  hide-on-med-and-down" to="/Images">
                <i className="material-icons left">list</i>All Assets
              </NavLink>
          </li>*/}
            <li>
              <NavLink className="left  hide-on-med-and-down" to="/addAssets">
                <i className="material-icons left">add</i>Add Assets
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  null,
  null
)(Navigation);
