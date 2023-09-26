// скролл
// $(document).ready(function() {
//     // Плавный скролл к якорю
//     $('a[href^="#"]').on('click', function(event) {
//       var target = $(this.getAttribute('href'));
//       if( target.length ) {
//         event.preventDefault();
//         $('html, body').stop().animate({
//           scrollTop: target.offset().top
//         }, 1000);
//       }
//     });

//     // Активное состояние пункта меню при прокрутке
//     $(window).scroll(function() {
//       var scrollDistance = $(window).scrollTop();

//       $('section').each(function(i) {
//         if ($(this).position().top <= scrollDistance) {
//           $('.scroll-menu a.active').removeClass('active');
//           $('.scroll-menu a').eq(i).addClass('active');
//         }
//       });
//     }).scroll();
//   });
