$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < $("#main").offset().top) {
      $("#navbar_top").removeClass("sticky-top");
      $("#navbar_top").addClass("bg-dark");
      $("#navbar_top").addClass("navbar-dark");
      $("#img").addClass("logo-white");
      $("#img-white").removeClass("logo-white");
      $("#navbar_top").removeClass("py-0");
    } else {
      $("#navbar_top").addClass("sticky-top");
      $("#navbar_top").addClass("bg-light");
      $("#navbar_top").addClass("navbar-light");
      $("#navbar_top").removeClass("bg-dark");
      $("#navbar_top").removeClass("navbar-dark");
      $("#img").removeClass("logo-white");
      $("#img-white").addClass("logo-white");
      $("#navbar_top").addClass("py-0");
    }
  });
  setTimeout(function () {
    $(".loader_bg").hide();
  }, 2300);
});