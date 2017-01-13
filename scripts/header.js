
var lastPos = 0;
$(document).ready(function(){
  var capa = $("div#capa");
  $(window).scrollTop(lastPos);
  $(window).scroll(function(){
  var height = Number( /\d*/.exec(capa.css("height"))[0]);
  if(!capa.hasClass("disapear")){
    if($(this).scrollTop() > 0 && lastPos != $(this).scrollTop){
      capa.addClass("disapear");
      return false;
    }
  }else{
    if(height > 100)
      $(window).scrollTop(1);

    if($(this).scrollTop() == 0)
      capa.removeClass("disapear");
  }
  lastPos = $(this).scrollTop();
    return false;
  });

});
