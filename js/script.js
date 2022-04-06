$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 6,
  });
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 3) {
    $(".navbar").addClass("black");
    $(".nav-link").addClass("white");
  } else {
    $(".navbar").removeClass("black");
    $(".nav-link").removeClass("white");
  }
});




var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}