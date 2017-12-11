import React, { Component } from 'react';
import './Navbar.scss';
import HomeComp from './Home';
import Home from './images/home.png';
import Resume from './images/resume.png';
import Projects from './images/projects.png';
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
                <img src={Home}/>
                <span>
                  Home
                </span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-element">
                <img src={Resume}/>
                <span>
                  Resume
                </span>
              </div>
            </Link>
            <Link to="https://github.com/ethwillz">
            <div className="navigation-element">
              <img src={Projects}/>
              <span>
                Portfolio
              </span>
            </div>
            </Link>
          </div>
          <Route exact path="/" component={HomeComp}/>
        </div>
      </Router>
    );
  }
}

export default Navbar;
