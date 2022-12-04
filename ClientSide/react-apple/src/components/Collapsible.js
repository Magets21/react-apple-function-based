import $ from "jquery";

// if ($(window).width() <= 700) {
//   $(".footer-links-wrapper").addClass("someClass");
// } else {
//   $(".footer-links-wrapper").removeClass("someClass");
// }
// $(window).on("resize", function (event) {
//   if ($(window).width() <= 700) {
//     $(".footer-links-wrapper").addClass("someClass");
//   } else {
//     $(".footer-links-wrapper").removeClass("someClass");
//     $(".footer-links-wrapper ul").show();
//   }
// });

// // Footer collapse functionality
// $(document).on("click", ".someClass h3", function () {
//   $(this).next("ul").slideToggle();
//   $(this).toggleClass("expanded");
// });

$(document).on("click", ".footer-links-wrapper h3", function () {
  // console.log("hello");
  if ($(window).width() <= 768) {
    // $(this).next("ul").slideToggle();
    $(this).next().slideToggle();
    $(this).toggleClass("expanded");
  } else {
    $(this).next("ul").show();
  }
});
$(window).on("resize", function () {
  window.location.reload();
});
