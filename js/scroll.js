$(window).on('scroll', function(e) {
  var num = $(window).scrollTop();
  console.log(num);
  if (num >= 80) {
    $('header.container-fluid').addClass('fixed');
  } else {
    $('header.container-fluid').removeClass('fixed');
  }
});