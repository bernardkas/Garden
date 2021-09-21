// alert("This is website");

// Toggle Animation by Class
$(window).scroll(function(){
    if($(document).scrollTop() > 100){
      $('nav').addClass('affix');
    }else{
      $('nav').removeClass('affix+');
    }
  })


  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('affix');
        console.log("OK");
    } else {
        $('nav').removeClass('affix');
    }
});