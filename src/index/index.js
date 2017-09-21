require('../navbar/navbar.js');
require('../navbar/navbar.scss');
require('./index.scss');
require('../resume/resume.scss');
require('../projects/projects.scss');

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
