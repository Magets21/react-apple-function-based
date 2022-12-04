import $ from "jquery";
// window.$ = window.jQuery = require("jquery");

$(".footer-links-wrapper h3").on("click", function () {
  if ($(window).width() <= 768) {
    $(this).next().slideToggle();
    $(this).toggleClass("expanded");
  }
  $(window).on("resize", function () {
    window.location.reload();
  });
});
