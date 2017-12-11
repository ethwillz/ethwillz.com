import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="main">
          <div id="nameandtitle">
            <div id="name">Ethan Williams</div>
            <div id="title">Developer</div>
          </div>
        </div>

        <div id="personal-info" className="information">
          <div className="about">
            <img src={'../images/programming.png" id="programming'}/>
            <h1>Intensely nerdy</h1>
            <h2>I work full-stack and am skilled in web, mobile, and machine learning development</h2>
          </div>
          <div className="about">
            <img src={'../images/fitness.png" id="fitness'}/>
            <h1>Health minded</h1>
            <h2>I run and climb most days, fueling myself with good food as often as I can</h2>
          </div>
          <div className="about">
            <img src={'../images/fashion.png" id="fashion'}/>
            <h1>Fashion forward</h1>
            <h2>I always strive to dress the best for every occasion and dabble in new looks</h2>
          </div>
        </div>

        <div id="secondary">
          <div id="quoteandauthor">
            <div id="quote">"If I was in shape and dressed nicely, I'd look like you."</div>
            <div id="author">-Radio DJ at a Lincoln intern event</div>
          </div>
        </div>

        <div className="information">
          <div className="social-media">
            <a href="https://www.instagram.com/ethwillz/?hl=en">
              <img src={'../images/instagram.png"'}/>
            </a>
          </div>
          <div className="social-media">
            <a href="https://twitter.com/ethwillz">
              <img src={'../images/twitter.png'}/>
            </a>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/ethan.williams.921">
              <img src={'../images/facebook.png'}/>
            </a>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/ethwillz">
              <img src={'../images/linkedin.png'}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
