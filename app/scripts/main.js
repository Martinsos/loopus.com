$(function() {
  $("a[href*=#]:not([href=#])").click(function() {
    if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
      if (target.length) {
        $("html,body").animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// $( window ).scroll(function() {
//   $( ".scroll" ).addClass( "fade-out" );
// });

$(document).ready(function(){
   $(window).bind("scroll", function() {
   // var navHeight = $( window ).height() - 70;
         if ($(window).scrollTop() > 100) {
             $("nav").addClass("nav-mini");
             $("nav i").addClass("vuk-mini");
             $("nav span").addClass("loopus-mini");
             $("nav ul").addClass("ul-mini");
             $(".loopus .scroll").addClass("fade-out");
         }
         else {
             $("nav").removeClass("nav-mini");
             $("nav i").removeClass("vuk-mini");
             $("nav span").removeClass("loopus-mini");
             $("nav ul").removeClass("ul-mini");
             $(".loopus .scroll").removeClass("fade-out");
         }
    });
});

// $( ".wedo" ).hover(
//   function() {
//     $(this).addClass("wedo-selected");
//   }, function() {
//     $(this).removeClass( "wedo-selected" );
//   }
// );

$(".design").hover(function () {
  $(".picture img").attr("src", "../images/design.jpg");
  $(".wedo").removeClass( "wedo-selected" );
  $(this).addClass("wedo-selected");
});
$(".user-exp").hover(function () {
  $(".picture img").attr("src", "../images/ux.png");
  $(".wedo").removeClass( "wedo-selected" );
  $(this).addClass("wedo-selected");
});
$(".development").hover(function () {
  $(".picture img").attr("src", "../images/development.png");
  $(".wedo").removeClass( "wedo-selected" );
  $(this).addClass("wedo-selected");
});

$(".picture img").on("load", function () {
    $(this).toggleClass("img-bounce");
})