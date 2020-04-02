import React from "react";
import "../css/sideNav.css";

const SideNav = props => {

      return (
        <div className="navWrap">
          <ul>
            <li>
              <a className="sideNavlink" href="#homePage">
                <span className="label">Home</span>
                <span className={(props.state.home) ? "bigDot" : "dot"}></span>
              </a>
            </li>
            <li>
              <a className="sideNavlink" href="#aboutPage">
                <span className="label">About</span>
                <span className={(props.state.about) ? "bigDot" : "dot"}></span>
              </a>
            </li>
            <li>
              <a className="sideNavlink" href="#projectsPage">
                <span className="label">Projects</span>
                <span className={(props.state.projects) ? "bigDot" : "dot"}></span>
              </a>
            </li>
            <li>
              <a className="sideNavlink" href="#contactPage">
                <span className="label">Contact</span>
                <span className={(props.state.contact) ? "bigDot" : "dot"}></span>
              </a>
            </li>
          </ul>
        </div>
      );
    }
  
  export default SideNav;