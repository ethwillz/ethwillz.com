$(window).scroll(function(){
  //Personal information section fade in/out
  if($(window).scrollTop() > 390){
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
  if($(window).scrollTop() > 1410){
    $("#quote").fadeIn();
    if($(window).scrollTop() > 1525){
      $("#author").fadeIn();
    }
  }
  else{
    $("#quote").fadeOut();
    $("#author").fadeOut();
  }
});
