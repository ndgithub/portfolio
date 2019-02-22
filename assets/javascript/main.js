var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

$(window).on('scroll', function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
});
