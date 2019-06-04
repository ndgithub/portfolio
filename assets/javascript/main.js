var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var aboutActive = false;
var portActive = true;


$("#port-span").css('background', 'red');


$("#port-span").on('click', function () {
  $("#about-me").css('display', 'none');
  $("#portfolio").css('display', 'block');
  portActive = true;
  aboutActive = false;
  $(this).css({ 'background': 'red', 'color': 'white' });
  $('#about-span').css({ 'background': 'white', 'color': 'black' });
})

$("#about-span").on('click', function () {
  $("#about-me").css('display', 'flex');
  $("#portfolio").css('display', 'none');
  aboutActive = true;
  portActive = false;
  $(this).css({ 'background': 'red', 'color': 'white' });
  $('#port-span').css({ 'background': 'white', 'color': 'black' });
})


$("#port-span").hover(function (event) {
  if (portActive) {
    $(this).css('cursor', 'default');
  } else {
    $(this).css('color', 'red')
    $(this).css('cursor', 'pointer');
  }
}, function () {
  if (portActive) {
    $(this).css('cursor', 'default');
  } else {
    $(this).css('color', 'black')
  }
});

$("#about-span").hover(function (event) {
  if (aboutActive) {
  } else {
    $(this).css('color', 'red');
    $(this).css('cursor', 'pointer');
  }
}, function () {
  if (aboutActive) {
    $(this).css('cursor', 'default');
  } else {
    $(this).css('color', 'black')
  }
});



// $(window).on('scroll', function () {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// });

// var winWidth = $(window).width();
// console.log('winWidth', winWidth);
// function goldRatio(level) {
//   var dim = winWidth;
//   for (var i = 1; i < level; i++) {
//     dim *= 0.618;
//   }
//   return dim;
// }



// $('#logo-container').width(goldRatio(3));
// $('#logo-container').css('margin-bottom', goldRatio(6));
// $('#logo-container').css('padding', goldRatio(9));

// $(window).on('scroll', function () {
//   console.log('hi');
// })






