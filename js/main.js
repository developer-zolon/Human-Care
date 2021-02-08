(function ($) {
  "use strict";
//=====BOOTOM TO TOP SCROLLUP=======
  $.scrollUp();
//=====BOOTOM TO TOP SCROLLUP END =====   
// =======PRELOADER START=======
  var win = $(window);
  win.on('load', function() {
      $('#loading-area').delay('500').fadeOut(2000);
  });
//  =======PRELOADER END=======

// ====COUNTER START =====
  if ($(".counter").length) {
    $(".counter").counterUp({
      delay: 20,
      time: 2000,
    });
  }
// =======COUNTER END======= 

// ======== SLICK SLIDER START==========
//-----CARE POLICIES START-----
  $(".services").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.police-left-angle',
    nextArrow: '.police-right-angle',
  });
//-----CARE POLICIES END-----
//-----ONLINE DOCTOR START---------
  $(".online-doctor-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.doctor-left-angle',
    nextArrow: '.doctor-right-angle',
  });
// ----ONLINE DOCTOR END--------
//---- BUSINESS PARTNER START-----
  $(".business-partner-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.doctor-left-angle',
    nextArrow: '.doctor-right-angle',
  });
//------BUSINESS PARTNER END----------
//---- FOOTER SLIDER-----
  $(".footer-images").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
//------FOOTER SLIDER END----------
// ======== SLICK SLIDER END===========











})(jQuery);
