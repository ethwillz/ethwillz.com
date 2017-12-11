import React, { Component } from 'react';
import Programming from './images/programming.png';
import Fitness from './images/fitness.png';
import Fashion from './images/fashion.png';
import Instagram from './images/instagram.png';
import Twitter from './images/twitter.png';
import Facebook from './images/facebook.png';
import LinkedIn from './images/linkedin.png';
import './Home.scss';

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
            <img src={Programming}/>
            <h1>Intensely nerdy</h1>
            <h2>I work full-stack and am skilled in web, mobile, and machine learning development</h2>
          </div>
          <div className="about">
            <img src={Fitness}/>
            <h1>Health minded</h1>
            <h2>I run and climb most days, fueling myself with good food as often as I can</h2>
          </div>
          <div className="about">
            <img src={Fashion}/>
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
              <img src={Instagram}/>
            </a>
          </div>
          <div className="social-media">
            <a href="https://twitter.com/ethwillz">
              <img src={Twitter}/>
            </a>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/ethan.williams.921">
              <img src={Facebook}/>
            </a>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/ethwillz">
              <img src={LinkedIn}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
