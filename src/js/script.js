$(document).ready(function() {

  //HAMBURGER-NAVIGATION
  $(".nav-hamburger").on('click', function() {
    $(this).toggleClass("open");
    $('.nav-list').toggleClass("visible");
  });

  $(".nav-list a").on('click', function() {
    $(".nav-hamburger").toggleClass("open");
    $('.nav-list').removeClass("visible");
  });

  //SMOOTH-SCROLLING
  $('a[href^="#"]').click(function(e) {
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 80
    }, 600);
  });

  //FIXED-NAV
  $(document).scroll(function() {
    if (window.scrollY > 0) {
      $(".nav").addClass('nav-fixed');
    } else {
      $(".nav").removeClass('nav-fixed');
    }
  });

  //HASH-CHANGE

  // $(document).scroll(function () {
  //     $('.hash').each(function () {
  //         var top = window.pageYOffset;
  //         var distance = top - $(this).offset().top;
  //         var hash = $(this).attr('id');
  //
  //         if (distance < 30 && distance > -30 && currentHash != hash) {
  //             window.location.hash = (hash);
  //             var currentHash = hash;
  //         }
  //     });
  // });

});
