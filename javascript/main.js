$(document).ready(function (){
  
  $("body").on("click", ".btn.btn-primary", function(event) {
    event.preventDefault();  
    console.log(this)  
    $(this).parents(".thumb-absolute").animate({
        "right":"1000px"}, "fast").fadeOut();
});
 
  $("body").on("click", ".btn.btn-default", function(event) {
    event.preventDefault();    
       $(this).parents(".thumb-absolute").animate({
        "left":"1000px"}, "fast").fadeOut();
 

  });




});



  