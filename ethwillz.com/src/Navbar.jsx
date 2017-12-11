import React, { Component } from 'react';
import logo from './logo.svg';
import './Navbar.scss';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
        <Router>
      <div id="navbar" className="nav-down">
        <div id="logo">

        </div>
        <div id="navigation">
          <Link to="/">
            <div id="what" className="navigation-element">
              <img src="../images/home.png"/>
              <span>
                Home
              </span>
            </div>
          </Link>
          <Link to="/">
            <div className="navigation-element">
              <img src="../images/resume.png"/>
              <span>
                Resume
              </span>
            </div>
          </Link>
          <Link to="https://github.com/ethwillz">
          <div className="navigation-element">
            <img src="../images/projects.png"/>
            <span>
              Portfolio
            </span>
          </div>
          </Link>
        </div>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
    );
  }
}

export default Navbar;
