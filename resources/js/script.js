$(document).ready(
function(){
$('.about-us').waypoint(
function(direction){
    if(direction=="down"){
        $('nav').addClass('sticky');
    }else{
        $('nav').removeClass('sticky');
   } },{
        offset:'600px'
    }
)
 //scroll
 $("a").click(function(event){
    $('html,body').animate({
        scrollTop: $( $.attr(this,"href")).offset().top
  },500);
  event.preventDefault();});
  $(".menu").click(
      function(){
          $(".main-nav").slideToggle(200);
      
      if($(".menu").hasClass("fa-bars")){
          $(".menu").addClass("fa-times");
          $(".menu").removeClass("fa-bars")
      }else{
        $(".menu").addClass("fa-bars");
        $(".menu").removeClass("fa-times")
      }
    }
  )
}
)