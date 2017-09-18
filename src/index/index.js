require('../navbar/navbar.js')
require('../navbar/navbar.scss')
require('./index.scss')
require('../resume/css/resume.scss')
require('../images/main.jpg')
require('../images/main2.jpg')
require('../images/pattern.jpg')
require('../images/home.png')
require('../images/resume.png')
require('../images/linkedin.png')
require('../images/download.png')
require('../images/facebook.png')
require('../images/instagram.png')
require('../images/location.png')
require('../images/link.png')
require('../images/programming.png')
require('../images/fitness.png')
require('../images/fashion.png')
require('../images/twitter.png')

$(window).scroll(function(){
  //Personal information section fade in/out
  if($(window).scrollTop() > 130){
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
