// $(document).ready(function(){

// $("a[href^='#']").click(function(e){
//     e.preventDefault();


// var position = $($(this).attr("href")).offset().top;

// var mypos = position - 100;
// $("body, html").animate({
//     scrollTop:mypos

// },2000);



// });

// });



$(document).ready(function () {

    $("#anchor").hide(0);
      $(window).scroll(function () {
        if ($(window).scrollTop()) {
          $("#anchor").show(500);
        } else {
          $("#anchor").hide(500);
        }
      });
   
  
  });




  $(document).ready(function () {
 
var typed = new Typed(".auto-type",{

strings:["Front-End Developer", "Web Designer", "Wordpress Designer"],
backspace: 150,
typeSpeed: 80,
loop:true

});

});



























































