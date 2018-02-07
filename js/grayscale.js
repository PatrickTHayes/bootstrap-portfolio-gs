(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

const validate= function(){
  var x = document.forms["emailForm"]["mail"].value;
  const validateEmail=(email)=>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  if (!validateEmail(x)) {
      alert("Please leave a valid email so I can contact you back!");
      return false;
  }else{
    return true
  }
}

$("#ameliesModal").click(function(){
  $("#modalTitle").text("Amelies 2.0 Features");
  $("#modalBody").html("<p>Full-Stack MERN SPA</p> <p>JWT, Bcrypt, and Passport for user Auth </p><p>Menus dynamically created from database </p> <p>Manager can update database</p> <p>Quill, a rich text editor, allowed us to store stylized writing in database </p><p> Sendgrid email api, seemlessly send emails<p><p>Reactstrap CSS framework</p><p>JS Technologies - jQuery, session storage, JWT, Axios ajax calls</p><p>Github workflow, Heroku deployment with mLab for database</p><p>npms:  axios, bootstrap, react(-dom, -render-html, -router-dom, -scripts, -player), react-quill, reactstrap, @sendgrid/mail, bcrypt,body-parser, cheerio, express, jsonwebtoken, lodash, mongoose, passport, passport-jwt, react-native-cheerio</p>")
})
$("#r2tcModal").click(function(){
  $("#modalTitle").text("Rise to the Challenge Features");
  $("#modalBody").html("<p> Full-Stack using Node, express, MySql, and express-handlebars</p>  <p>Well modeled, connected collections in database.</p><p> User auth and email usage (sendGrid) </p><p>Materialize (CSS Framework)</p><p>JS technologies - jQuery, AJAX, JSON</p><p>Npms - bcrypt, bluebird, body-parser, connect-flash, cookie-parser, dotenv, express, handlebars, session, mysql, passport (custom token), path, sendgrid, sequelize</p> <p>Heroku deploy with JawsDB</p><p>Github workflow management</p>")
})

$("#f2pModal").click(function(){
  $("#modalTitle").text("Fridge 2 Plate Features");
  $("#modalBody").html("<p>Front-end app</p><p>Css framework: Materialize</p><p>APIs: youtube and Spoonacular</p><p>JS technologies used - AJAX, jquery, materialize carousel</p>");
})
//$('.project-section').css('background-image', 'url(' + imageUrl + ')');
const slideshow=()=>{
  //loop over array of classes for background image, change class to change image
  const classArray=["bg1", "bg2", "bg3", "bg4"];
  let count=1;
  setInterval(function(){
    console.log("hit beginning of setInterval")
    $(".project-section").removeClass("bg1 bg2 bg3 bg4");
    $(".project-section").addClass(classArray[count]);
    count++;
    if (count===classArray.length){
      count=0;
    }
    console.log("hit end of interval, count:"+count+" current class:" +$(".project-section").attr("class").split(' '))
  },10000)
    /*for (var i=0;i<classArray.length;i++){
      $(".project-section").removeClass("bg1 bg2 bg3 bg4");
      $(".project-section").addClass(classArray[i]);
    }*/

  
}
$( window ).on( "load", function() { 
  slideshow();
  
})