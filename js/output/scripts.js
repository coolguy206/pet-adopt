$(document).ready(function() {
  var date = new Date();
  var year = date.getFullYear();

  $('footer.container-fluid p span').html(year);
  $(window).on('scroll', function(e) {
    var num = $(window).scrollTop();
    console.log(num);
    if (num >= 80) {
      $('header.container-fluid').addClass('fixed');
    } else {
      $('header.container-fluid').removeClass('fixed');
    }
  });
  // console.log('yup');

  console.log(dogs);

  var elem = $('<ul><li class="first"></li><li class="second"></li><li class="third"></li></ul>');

  $.each(dogs, function(i, val) {
    var img = '<img src="' + val.image + '">';
    i = i + 1;
    if (i <= 5) {
      $(elem).find('.first').append(img);
    } else if (i > 5 && i <= 10) {
      $(elem).find('.second').append(img);
    } else {
      $(elem).find('.third').append(img);
    }
  });

  $('section.container-fluid').append(elem);

  $('section.container-fluid').on('click', function(e) {
    console.log(e);
    if (e.target.localName == 'img') {
      var img = $(e.target);
      var src = img.attr('src');
      var overlay = $('<div class="overlay"><span>close x</span></div>');
      var lightbox = $('<div class="lightbox" style="background: url(' + src + ') no-repeat center center #fff;"><span>close x</span></div>');
      $('section.container-fluid').append(overlay, lightbox);
    }

    if (e.target.className == 'overlay' || e.target.localName == 'span') {
      $('.overlay').remove();
      $('.lightbox').remove();
    }
  });
});