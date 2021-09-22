$(document).ready(function () {
  // Scroll on buttons
  $('.js--scroll-to-contact').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-contact').offset().top },
      1000
    );
  });
  $('.js--scroll-to-services').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-services').offset().top },
      1000
    );
  });
  $('.js--scroll-to-about').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-about').offset().top },
      1000
    );
  });
  $('.js--scroll-to-gallery').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-gallery').offset().top },
      1000
    );
  });

  //   Mobile Nav
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');

    nav.slideToggle(200);
  });
});
