import React from 'react';

import 'Css/NavBar.css';
import { Link } from 'react-router-dom';
import UmbrellaIcon from 'Icons/umbrella.svg'

const NavBar = () => {

  return (
    <div className="nav-bar">
      <div className="nav-bar-content">


          <div className="nav-bar-left">
            <div className="nav-bar-element">
              <span className="brand">
                My Portfolio.
              </span>
            </div>
          </div>

          <div className="nav-bar-right">

          <Link to="/">
            <div className="nav-bar-element link">
              Home
            </div>
          </Link>

          <Link to="/job-experiences">
            <div className="nav-bar-element link">
              Job experiences
            </div>
          </Link>

          <Link to="/personal-projects">
            <div className="nav-bar-element link">
              Personal projects
            </div>
          </Link>


        </div>

      </div>
    </div>
  )
}

export default NavBar;
