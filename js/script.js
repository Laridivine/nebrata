$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    items:6,
  });
});


// change the navbar backgroundcolor to black and the text color to white on page scroll
$(window).scroll(function () {
  if ($(document).scrollTop() > 5) {
    $('.navbar').addClass('black');
    $('.nav-link').addClass('white');
  } else {
    $('.navbar').removeClass('black');
    $('.nav-link').removeClass('white');
  }
});

