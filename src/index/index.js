require('../navbar/navbar.js')
require('../navbar/navbar.scss')
require('./index.scss')
require('../resume/css/resume.scss')
require('../images/main.jpg')
require('../images/main2.jpg')
require('../images/home.png')

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
