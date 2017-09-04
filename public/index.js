require('./navbar/navbar.js');
require('./navbar/navbar.scss')
require('./css/index.scss');
require('./resume/css/resume.scss');

import Typed from 'typed.js';

$(window).scroll(function(){
  //Personal information section fade in/out
  if($(window).scrollTop() > 180){
    $("#programming").fadeIn();
    $("#fitness").fadeIn();
    $("#fashion").fadeIn();
  }
  else{
    $("#programming").fadeOut();
    $("#fitness").fadeOut();
    $("#fashion").fadeOut();
  }

  //Quote fade in/out
  if($(window).scrollTop() > 1260){
    $("#quote").fadeIn();
    if($(window).scrollTop() > 1310){
      $("#author").fadeIn();
    }
  }
  else{
    $("#quote").fadeOut();
    $("#author").fadeOut();
  }
});

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 40
}

var typed = new Typed(".element", options);
